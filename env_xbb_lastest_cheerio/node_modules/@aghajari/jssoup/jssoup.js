/*
 * Copyright (C) 2021 - Amir Hossein Aghajari
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
 *
 */

const HTMLDocument = require('./html_document.js');
const HTMLNode = require('./html_node.js');

const load = function (str = null,
                       caseInsensitive = true,
                       forceTagsClosed = false,
                       target_charset = 'UTF-8',
                       stripRN = true,
                       defaultBRText = '\r\n',
                       defaultSpanText = ' ',
                       removeSmartyScripts = false) {
    return new HTMLDocument(str, caseInsensitive, forceTagsClosed, target_charset, stripRN, defaultBRText, defaultSpanText, removeSmartyScripts);
};

const loadFromURL = function (url, options = null,
                              caseInsensitive = true,
                              forceTagsClosed = false,
                              target_charset = 'UTF-8',
                              stripRN = true,
                              defaultBRText = '\r\n',
                              defaultSpanText = ' ',
                              removeSmartyScripts = false) {
    if (options === null)
        options = {method: 'GET'};

    if (options.method === undefined || options.method === null)
        options.method = 'GET';

    return new Promise((resolve, reject) => {

        const http = url.startsWith("https") ? require('https') : require('http');

        const req = http.request(url, options, (res) => {

            res.setEncoding('utf8');
            let responseBody = '';

            res.on('data', (chunk) => {
                responseBody += chunk;
            });

            res.on('end', () => {
                resolve(new HTMLDocument(responseBody, caseInsensitive, forceTagsClosed, target_charset,
                    stripRN, defaultBRText, defaultSpanText, removeSmartyScripts));
            });
        });

        req.on('error', (err) => {
            reject(err);
        });

        req.end();
    });
};

module.exports = {
    HTMLDocument,
    HTMLNode,
    load,
    loadFromURL
};