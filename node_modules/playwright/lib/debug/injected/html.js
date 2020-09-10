"use strict";
/**
 * Copyright (c) Microsoft Corporation.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.deepActiveElement = exports.html = exports.onDOMResize = exports.onDOMEvent = void 0;
const templateCache = new Map();
const BOOLEAN_ATTRS = new Set([
    'async', 'autofocus', 'autoplay', 'checked', 'contenteditable', 'controls',
    'default', 'defer', 'disabled', 'expanded', 'formNoValidate', 'frameborder', 'hidden',
    'ismap', 'itemscope', 'loop', 'multiple', 'muted', 'nomodule', 'novalidate',
    'open', 'readonly', 'required', 'reversed', 'scoped', 'selected', 'typemustmatch',
]);
function onDOMEvent(target, name, listener, capturing = false) {
    target.addEventListener(name, listener, capturing);
    return () => {
        target.removeEventListener(name, listener, capturing);
    };
}
exports.onDOMEvent = onDOMEvent;
function onDOMResize(target, callback) {
    const resizeObserver = new window.ResizeObserver(callback);
    resizeObserver.observe(target);
    return () => resizeObserver.disconnect();
}
exports.onDOMResize = onDOMResize;
function html(strings, ...values) {
    let cache = templateCache.get(strings);
    if (!cache) {
        cache = prepareTemplate(strings);
        templateCache.set(strings, cache);
    }
    const node = renderTemplate(cache.template, cache.subs, values);
    if (node.querySelector) {
        node.$ = node.querySelector.bind(node);
        node.$$ = node.querySelectorAll.bind(node);
    }
    return node;
}
exports.html = html;
const SPACE_REGEX = /^\s*\n\s*$/;
const MARKER_REGEX = /---dom-template-\d+---/;
function prepareTemplate(strings) {
    const template = document.createElement('template');
    let html = '';
    for (let i = 0; i < strings.length - 1; ++i) {
        html += strings[i];
        html += `---dom-template-${i}---`;
    }
    html += strings[strings.length - 1];
    template.innerHTML = html;
    const walker = template.ownerDocument.createTreeWalker(template.content, NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT, null, false);
    const emptyTextNodes = [];
    const subs = [];
    while (walker.nextNode()) {
        const node = walker.currentNode;
        if (node.nodeType === Node.ELEMENT_NODE && MARKER_REGEX.test(node.tagName))
            throw new Error('Should not use a parameter as an html tag');
        if (node.nodeType === Node.ELEMENT_NODE && node.hasAttributes()) {
            const element = node;
            for (let i = 0; i < element.attributes.length; i++) {
                const name = element.attributes[i].name;
                const nameParts = name.split(MARKER_REGEX);
                const valueParts = element.attributes[i].value.split(MARKER_REGEX);
                const isSimpleValue = valueParts.length === 2 && valueParts[0] === '' && valueParts[1] === '';
                if (nameParts.length > 1 || valueParts.length > 1)
                    subs.push({ node: element, nameParts, valueParts, isSimpleValue, attr: name });
            }
        }
        else if (node.nodeType === Node.TEXT_NODE && MARKER_REGEX.test(node.data)) {
            const text = node;
            const texts = text.data.split(MARKER_REGEX);
            text.data = texts[0];
            const anchor = node.nextSibling;
            for (let i = 1; i < texts.length; ++i) {
                const span = document.createElement('span');
                node.parentNode.insertBefore(span, anchor);
                node.parentNode.insertBefore(document.createTextNode(texts[i]), anchor);
                subs.push({
                    node: span,
                    type: 'replace-node',
                });
            }
            if (shouldRemoveTextNode(text))
                emptyTextNodes.push(text);
        }
        else if (node.nodeType === Node.TEXT_NODE && shouldRemoveTextNode(node)) {
            emptyTextNodes.push(node);
        }
    }
    for (const emptyTextNode of emptyTextNodes)
        emptyTextNode.remove();
    const markedNodes = new Map();
    for (const sub of subs) {
        let index = markedNodes.get(sub.node);
        if (index === undefined) {
            index = markedNodes.size;
            sub.node.setAttribute('dom-template-marked', 'true');
            markedNodes.set(sub.node, index);
        }
        sub.nodeIndex = index;
    }
    return { template, subs };
}
function shouldRemoveTextNode(node) {
    if (!node.previousSibling && !node.nextSibling)
        return !node.data.length;
    return (!node.previousSibling || node.previousSibling.nodeType === Node.ELEMENT_NODE) &&
        (!node.nextSibling || node.nextSibling.nodeType === Node.ELEMENT_NODE) &&
        (!node.data.length || SPACE_REGEX.test(node.data));
}
function renderTemplate(template, subs, values) {
    const content = template.ownerDocument.importNode(template.content, true);
    const boundElements = Array.from(content.querySelectorAll('[dom-template-marked]'));
    for (const node of boundElements)
        node.removeAttribute('dom-template-marked');
    let valueIndex = 0;
    const interpolateText = (texts) => {
        let newText = texts[0];
        for (let i = 1; i < texts.length; ++i) {
            newText += values[valueIndex++];
            newText += texts[i];
        }
        return newText;
    };
    for (const sub of subs) {
        const n = boundElements[sub.nodeIndex];
        if (sub.attr) {
            n.removeAttribute(sub.attr);
            const name = interpolateText(sub.nameParts);
            const value = sub.isSimpleValue ? values[valueIndex++] : interpolateText(sub.valueParts);
            if (BOOLEAN_ATTRS.has(name))
                n.toggleAttribute(name, !!value);
            else
                n.setAttribute(name, String(value));
        }
        else if (sub.type === 'replace-node') {
            const replacement = values[valueIndex++];
            if (Array.isArray(replacement)) {
                const fragment = document.createDocumentFragment();
                for (const node of replacement)
                    fragment.appendChild(node);
                n.replaceWith(fragment);
            }
            else if (replacement instanceof Node) {
                n.replaceWith(replacement);
            }
            else {
                n.replaceWith(document.createTextNode(replacement || ''));
            }
        }
    }
    return content.firstChild && content.firstChild === content.lastChild ? content.firstChild : content;
}
function deepActiveElement() {
    let activeElement = document.activeElement;
    while (activeElement && activeElement.shadowRoot && activeElement.shadowRoot.activeElement)
        activeElement = activeElement.shadowRoot.activeElement;
    return activeElement;
}
exports.deepActiveElement = deepActiveElement;
//# sourceMappingURL=html.js.map