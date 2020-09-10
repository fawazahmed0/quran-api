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
exports.ChromiumBrowser = void 0;
const cdpSession_1 = require("./cdpSession");
const browser_1 = require("./browser");
class ChromiumBrowser extends browser_1.Browser {
    async newBrowserCDPSession() {
        return this._wrapApiCall('chromiumBrowser.newBrowserCDPSession', async () => {
            return cdpSession_1.CDPSession.from((await this._channel.crNewBrowserCDPSession()).session);
        });
    }
    async startTracing(page, options = {}) {
        return this._wrapApiCall('chromiumBrowser.startTracing', async () => {
            await this._channel.crStartTracing({ ...options, page: page ? page._channel : undefined });
        });
    }
    async stopTracing() {
        return this._wrapApiCall('chromiumBrowser.stopTracing', async () => {
            return Buffer.from((await this._channel.crStopTracing()).binary, 'base64');
        });
    }
}
exports.ChromiumBrowser = ChromiumBrowser;
//# sourceMappingURL=chromiumBrowser.js.map