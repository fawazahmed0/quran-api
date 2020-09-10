"use strict";
/**
 * Copyright 2017 Google Inc. All rights reserved.
 * Modifications copyright (c) Microsoft Corporation.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChromiumBrowserContext = void 0;
const page_1 = require("./page");
const cdpSession_1 = require("./cdpSession");
const events_1 = require("./events");
const worker_1 = require("./worker");
const browserContext_1 = require("./browserContext");
class ChromiumBrowserContext extends browserContext_1.BrowserContext {
    constructor(parent, type, guid, initializer) {
        super(parent, type, guid, initializer, 'chromium');
        this._backgroundPages = new Set();
        this._serviceWorkers = new Set();
        this._channel.on('crBackgroundPage', ({ page }) => {
            const backgroundPage = page_1.Page.from(page);
            this._backgroundPages.add(backgroundPage);
            this.emit(events_1.Events.ChromiumBrowserContext.BackgroundPage, backgroundPage);
        });
        this._channel.on('crServiceWorker', ({ worker }) => {
            const serviceWorker = worker_1.Worker.from(worker);
            serviceWorker._context = this;
            this._serviceWorkers.add(serviceWorker);
            this.emit(events_1.Events.ChromiumBrowserContext.ServiceWorker, serviceWorker);
        });
    }
    backgroundPages() {
        return [...this._backgroundPages];
    }
    serviceWorkers() {
        return [...this._serviceWorkers];
    }
    async newCDPSession(page) {
        return this._wrapApiCall('chromiumBrowserContext.newCDPSession', async () => {
            const result = await this._channel.crNewCDPSession({ page: page._channel });
            return cdpSession_1.CDPSession.from(result.session);
        });
    }
}
exports.ChromiumBrowserContext = ChromiumBrowserContext;
//# sourceMappingURL=chromiumBrowserContext.js.map