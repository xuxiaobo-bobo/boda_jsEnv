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


const HTMLNode = require('./html_node.js');
const Functions = require('./functions');
const util = require('util');

class HTMLDocument {
    root;
    nodes = [];
    caseInsensitive = false;
    original_size;
    size;

    #source;
    _pos;
    _doc;

    _char;
    cursor;
    _parent;
    _noise = [];
    _token_blank = " \t\r\n";
    _token_equal = ' =/>';
    _token_slash = " />\r\n\t";
    _token_attr = ' >';

    _charset = '';
    _target_charset = '';

    default_br_text = '';
    default_span_text = ' ';

    #self_closing_tags = {
        'area': 1,
        'base': 1,
        'br': 1,
        'col': 1,
        'embed': 1,
        'hr': 1,
        'img': 1,
        'input': 1,
        'link': 1,
        'meta': 1,
        'param': 1,
        'source': 1,
        'track': 1,
        'wbr': 1
    };
    #block_tags = {
        'body': 1,
        'div': 1,
        'form': 1,
        'root': 1,
        'span': 1,
        'table': 1
    };
    #optional_closing_tags = {
        // Not optional, see
        // https://www.w3.org/TR/html/textlevel-semantics.html#the-b-element
        'b': {'b': 1},
        'dd': {'dd': 1, 'dt': 1},
        // Not optional, see
        // https://www.w3.org/TR/html/grouping-content.html#the-dl-element
        'dl': {'dd': 1, 'dt': 1},
        'dt': {'dd': 1, 'dt': 1},
        'li': {'li': 1},
        'optgroup': {'optgroup': 1, 'option': 1},
        'option': {'optgroup': 1, 'option': 1},
        'p': {'p': 1},
        'rp': {'rp': 1, 'rt': 1},
        'rt': {'rp': 1, 'rt': 1},
        'td': {'td': 1, 'th': 1},
        'th': {'td': 1, 'th': 1},
        'tr': {'td': 1, 'th': 1, 'tr': 1},
    };

    constructor(
        str = null,
        lowercase = true,
        forceTagsClosed = false,
        target_charset = 'UTF-8',
        stripRN = true,
        defaultBRText = '\r\n',
        defaultSpanText = ' ',
        removeSmartyScripts = false) {

        if (Functions.isset(str)) {
            this.load(str, lowercase, stripRN, defaultBRText, defaultSpanText, removeSmartyScripts);
        } else {
            this._prepare(str, lowercase, defaultBRText, defaultSpanText);
        }
        // Forcing tags to be closed implies that we don't trust the html, but
        // it can lead to parsing errors if we SHOULD trust the html.
        if (forceTagsClosed) {
            this.#optional_closing_tags = [];
        }

        this._target_charset = target_charset;
    }

    clear() {
        if (Functions.isset(this.nodes)) {
            for (const node of this.nodes) {
                node.clear();
            }
        }
    }

    [util.inspect.custom](depth, opts) {
        return this._debug(opts);
    }

    _debug(opts) {
        const tab = "  ";
        let elements = '';
        for (const node of this.nodes) {
            elements += node._debug(opts, tab + tab, true, false) + ', \n';
        }
        elements = elements.trimRight();
        if (elements.endsWith(",")) elements = elements.substring(0, elements.length - 1);

        return 'HTMLDocument {\n' +
            tab + opts.stylize('elements_count', 'special') +
            ': ' + opts.stylize(this.nodes.length, 'number') + '\n' +
            tab + opts.stylize('elements', 'special') +
            ': [\n' + elements + '\n' + tab + ']\n' +
            '}';
    }

    load(
        str,
        caseInsensitive = true,
        stripRN = true,
        defaultBRText = '\r\n',
        defaultSpanText = ' ',
        removeSmartyScripts = false) {

        this._prepare(str, caseInsensitive, defaultBRText, defaultSpanText);

        if (stripRN) {
            // Temporarily remove any element that shouldn't loose whitespace
            this._remove_noise(/<\s*script[^>]*>(.*?)<\s*\s*script\s*>/is);
            this._remove_noise(/<!\[CDATA\[(.*?)\]\]>/is);
            this._remove_noise(/<!--(?!>|\->)(.*?)-->/is);
            this._remove_noise(/<\s*style[^>]*>(.*?)<\s*\s*style\s*>/is);
            this._remove_noise(/<\s*(?:code)[^>]*>(.*?)<\s*\s*(?:code)\s*>/is);

            // Remove whitespace and newlines between tags
            this._doc = this._doc.replace(/\>([\t\s]*[\r\n]^[\t\s]*)\</m, '><');

            // Remove whitespace and newlines in text
            this._doc = this._doc.replace(/([\t\s]*[\r\n]^[\t\s]*)/m, ' ');

            // Restore temporarily removed elements and calculate new size
            this._doc = this._restore_noise(this._doc);
            this.size = this._doc.length;
        }

        this._remove_noise(/<\?\)(.*?)(\?>)/s, true); // server-side script

        if (removeSmartyScripts) { // Strip Smarty scripts
            this._remove_noise(/(\{\w)(.*?)(\})/s, true);
        }
        // parsing
        this._parse(stripRN);
        // end
        this.root.$_[HTMLNode.INFO_END] = this.cursor;
        this._parse_charset();
        this._decode();
        delete this._doc;

        return this;
    }

    find(selector, idx = null, caseInsensitive = false) {
        return this.root.find(selector, idx, caseInsensitive);
    }

    findFirst(selector, caseInsensitive = false) {
        return this.root.findFirst(selector, caseInsensitive);
    }

    findLast(selector, caseInsensitive = false) {
        return this.root.findLast(selector, caseInsensitive);
    }

    expect(selector, idx = null, caseInsensitive = false) {
        return this.root.expect(selector, idx, caseInsensitive);
    }

    _prepare(
        str, lowercase = true,
        defaultBRText = '\r\n',
        defaultSpanText = ' ') {
        this.clear();

        this.#source = str;
        this._doc = str.trim();
        this.size = this._doc.length;
        this.original_size = this.size; // original size of the html
        this._pos = 0;
        this.cursor = 1;
        this._noise = [];
        this.nodes = [];
        this.caseInsensitive = lowercase;
        this.default_br_text = defaultBRText;
        this.default_span_text = defaultSpanText;
        this.root = new HTMLNode(this);
        this.root.tag = 'root';
        this.root.$_[HTMLNode.INFO_BEGIN] = -1;
        this.root.nodeType = HTMLNode.TYPE_ROOT;
        this._parent = this.root;
        if (this.size > 0)
            this._char = this._doc.charAt(0);
    }

    _decode() {
        for (const node of this.nodes) {
            if (Functions.isset(node.$_[HTMLNode.INFO_TEXT])) {
                node.$_[HTMLNode.INFO_TEXT] = Functions.html_entity_decode(
                    this._restore_noise(node.$_[HTMLNode.INFO_TEXT]),
                    "ENT_QUOTES");
            }
            if (Functions.isset(node.$_[HTMLNode.INFO_INNER])) {
                node.$_[HTMLNode.INFO_INNER] = Functions.html_entity_decode(
                    this._restore_noise(node.$_[HTMLNode.INFO_INNER]),
                    "ENT_QUOTES");
            }
            if (Functions.isset(node.attr)) {
                for (const [a, v] of node.attr) {
                    if (v === true) continue;

                    const v2 = Functions.html_entity_decode(v, "ENT_QUOTES");
                    node.attr.set(a, v2);
                    if (a === 'class')
                        node.class = v2;
                }
            }
            //console.log(node.$_);
        }
    }

    _parse(trim = false) {
        while (true) {
            if (this._char !== '<') {
                const content = this._copy_until_char('<');

                if (content !== '') {
                    // Skip whitespace between tags? (</a> <b>)
                    if (trim && content.trim() === '') {
                        continue;
                    }

                    const node = new HTMLNode(this);
                    ++this.cursor;
                    node.$_[HTMLNode.INFO_TEXT] = content;
                    this._link_nodes(node, false);
                }
            }

            if (this._read_tag(trim) === false) {
                break;
            }
        }
    }

    _parse_charset() {
        let charset = '';

        // https://www.w3.org/TR/html/document-metadata.html#statedef-http-equiv-content-type
        const el = this.root.find('meta[http-equiv=Content-Type]', 0, true);

        if (!Functions.empty(el)) {
            const fullvalue = el.content;

            if (!Functions.empty(fullvalue)) {

                const charsetRegex = /charset=(.+)/i;
                let match;

                if ((match = charsetRegex.exec(fullvalue)) !== null) {
                    charset = match[1];
                }

            }
        }

        if (Functions.empty(charset)) {
            // https://www.w3.org/TR/html/document-metadata.html#character-encoding-declaration
            const meta = this.root.find('meta[charset]', 0);
            if (Functions.isset(meta)) {
                charset = meta.charset;
            }
        }

        if (Functions.empty(charset)) {
            // Debug: Unable to determine charset from source document. Assuming UTF-8
            charset = "UTF-8";
        }

        // Since CP1252 is a superset, if we get one of it's subsets, we want
        // it instead.
        if ((charset.toLowerCase() === 'iso-8859-1')
            || (charset.toLowerCase() === 'latin1')
            || (charset.toLowerCase() === 'latin-1')) {
            charset = 'CP1252';
        }

        return this._charset = charset;
    }

    _read_tag(trim) {
        if (this._char !== '<') { // End Of File
            this.root.$_[HTMLNode.INFO_END] = this.cursor;

            // We might be in a nest of unclosed elements for which the end tags
            // can be omitted. Close them for faster seek operations.
            do {
                if (Functions.isset(this.#optional_closing_tags[this._parent.tag.toLowerCase()])) {
                    this._parent.$_[HTMLNode.INFO_END] = this.cursor;
                }
            } while (this._parent === this._parent._parent);

            return false;
        }

        this._next();

        if (trim) { // "<   /html>"
            this._skip(this._token_blank);
        }

        // End tag: https://dev.w3.org/html5/pf-summary/syntax.html#end-tags
        if (this._char === '/') {
            this._next();

            let tag = this._copy_until_char('>');
            tag = trim ? tag.trimLeft() : tag;

            // Skip attributes and whitespace in end tags
            const pos = tag.indexOf(' ');
            if (trim && pos >= 0) {
                // Debug: Source document contains superfluous whitespace in end tags (</html   >).
                tag = tag.substr(0, pos);
            }

            if (Functions.strcasecmp(this._parent.tag, tag) === 1) { // Parent is not start tag
                const parent_lower = this._parent.tag.toLowerCase();
                const tag_lower = tag.toLowerCase();
                if (Functions.isset(this.#optional_closing_tags[parent_lower]) && Functions.isset(this.#block_tags[tag_lower])) {
                    const org_parent = this._parent;

                    // Look for the start tag
                    while (Functions.isset(this._parent._parent) && this._parent.tag.toLowerCase() !== tag_lower) {
                        // Close any unclosed element with optional end tags
                        if (Functions.isset(this.#optional_closing_tags[this._parent.tag.toLowerCase()]))
                            this._parent.$_[HTMLNode.INFO_END] = this.cursor;
                        this._parent = this._parent._parent;
                    }

                    // No start tag, close grandparent
                    if (this._parent.tag.toLowerCase() !== tag_lower) {
                        this._parent = org_parent;

                        if (Functions.isset(this._parent._parent)) {
                            this._parent = this._parent._parent;
                        }

                        this._parent.$_[HTMLNode.INFO_END] = this.cursor;
                        return this._as_text_node(tag);
                    }
                } else if (Functions.isset(this._parent._parent) && Functions.isset(this.#block_tags[tag_lower])) {
                    // grandparent exists + current is block tag
                    // Parent has no end tag
                    this._parent.$_[HTMLNode.INFO_END] = 0;
                    const org_parent = this._parent;

                    // Find start tag
                    while (Functions.isset(this._parent._parent) && this._parent.tag.toLowerCase() !== tag_lower) {
                        this._parent = this._parent._parent;
                    }

                    // No start tag, close parent
                    if (this._parent.tag.toLowerCase() !== tag_lower) {
                        this._parent = org_parent; // restore origonal parent
                        this._parent.$_[HTMLNode.INFO_END] = this.cursor;
                        return this._as_text_node(tag);
                    }
                } else if (Functions.isset(this._parent._parent) && this._parent._parent.tag.toLowerCase() === tag_lower) {
                    // Grandparent exists and current tag closes it
                    this._parent.$_[HTMLNode.INFO_END] = 0;
                    this._parent = this._parent._parent;
                } else { // Random tag, add as text node
                    return this._as_text_node(tag);
                }
            }

            // Link with start tag
            this._parent.$_[HTMLNode.INFO_END] = this.cursor;

            if (Functions.isset(this._parent._parent)) {
                this._parent = this._parent._parent;
            }

            this._next();
            return true;
        }

        // Start tag: https://dev.w3.org/html5/pf-summary/syntax.html#start-tags
        let node = new HTMLNode(this);
        node.$_[HTMLNode.INFO_BEGIN] = this.cursor++;

        // Tag name
        let tag = this._copy_until(this._token_slash);

        if (tag.length > 0 && tag.charAt(0) === '!') { // Doctype, CData, Comment
            if (tag.length > 2 && tag.charAt(1) === '-' && tag.charAt(2) === '-') { // Comment ("<!--")

                /**
                 * Comments must have the following format:
                 *
                 * 1. The string "<!--"
                 *
                 * 2. Optionally, text, with the additional restriction that the
                 * text must not start with the string ">", nor start with the
                 * string "->", nor contain the strings "<!--", "-->", or "--!>",
                 * nor end with the string "<!-".
                 *
                 * 3. The string "-->"
                 *
                 * -- https://www.w3.org/TR/html53/syntax.html#comments
                 */

                // Go back until $tag only contains start of comment "!--".
                while (tag.length > 3) {
                    this._char = this._doc.charAt(--this._pos); // previous
                    tag = tag.substr(0, tag.length - 1);
                }

                node.nodeType = HTMLNode.TYPE_COMMENT;
                node.tag = 'comment';

                let data = '';

                while (true) {
                    // Copy until first char of end tag
                    data += this._copy_until_char('-');

                    // Look ahead in the document, maybe we are at the end
                    if ((this._pos + 3) > this.size) { // End of document
                        // Debug: 'Source document ended unexpectedly!'
                        break;
                    } else if (this._doc.substr(this._pos, 3) === '-->') { // end
                        data += this._copy_until_char('>');
                        break;
                    }

                    data += this._char;
                    this._next();
                }

                if (data.substr(0, 1) === '>') { // "<!-->"
                    // Debug: 'Comment must not start with the string ">"!'
                    this._pos -= data.length;
                    this._char = this._doc.charAt(this._pos);
                    data = '';
                }

                if (data.substr(0, 2) === '->') { // "<!--->"
                    // Debug: 'Comment must not start with the string "->"!'
                    this._pos -= data.length;
                    this._char = this._doc.charAt(this._pos);
                    data = '';
                }

                if (data.indexOf('<!--') >= 0) { // "<!--<!---->"
                    // Debug: 'Comment must not contain the string "<!--"!'
                    // we can work with it anyway
                }

                if (data.indexOf('--!>') >= 0) { // "<!----!>-->"
                    // Debug: 'Comment must not contain the string "--!>"!'
                    // we can work with it anyway
                }

                if (data.substr(data.length - 3, 3) === '<!-') { // "<!--<!--->"
                    // Debug: 'Comment must not end with "<!-"!'
                    // we can work with it anyway
                }

                tag += data;
                tag = this._restore_noise(tag);

                // Comment starts after "!--" and ends before "--" (5 chars total)
                node.$_[HTMLNode.INFO_INNER] = tag.substr(3, tag.length - 5);
            } else if (tag.substr(1, 7) === '[CDATA[') {

                // Go back until $tag only contains start of cdata "![CDATA[".
                while (tag.length > 8) {
                    this._char = this._doc.charAt(--this._pos); // previous
                    tag = tag.substr(0, tag.length - 1);
                }

                // CDATA can contain HTML stuff, need to find closing tags first
                node.nodeType = HTMLNode.TYPE_CDATA;
                node.tag = 'cdata';

                let data = '';

                // There is a rare chance of empty CDATA: "<[CDATA[]]>"
                // In which case the current char is the first "[" of the end tag
                // But the CDATA could also just be a bracket: "<[CDATA[]]]>"
                while (true) {
                    // Copy until first char of end tag
                    data += this._copy_until_char(']');

                    // Look ahead in the document, maybe we are at the end
                    if ((this._pos + 3) > this.size) { // End of document
                        // Debug: 'Source document ended unexpectedly!'
                        break;
                    } else if (this._doc.substr(this._pos, 3) === ']]>') { // end
                        data += this._copy_until_char('>');
                        break;
                    }

                    data += this._char;
                    this._next();
                }

                tag += data;
                tag = this._restore_noise(tag);

                // CDATA starts after "![CDATA[" and ends before "]]" (10 chars total)
                node.$_[HTMLNode.INFO_INNER] = tag.substr(8, tag.length - 10);
            } else { // Unknown
                // Debug: 'Source document contains unknown declaration: <' + tag
                node.nodeType = HTMLNode.TYPE_UNKNOWN;
                node.tag = 'unknown';
            }

            node.$_[HTMLNode.INFO_TEXT] = '<' + tag + this._copy_until_char('>');

            if (this._char === '>') {
                node.$_[HTMLNode.INFO_TEXT] += '>';
            }

            this._link_nodes(node, true);
            this._next();
            return true;
        }

        if (!tag.match(/^\w[\w:-]*$/)) { // Invalid tag name
            node.$_[HTMLNode.INFO_TEXT] = '<' + tag + this._copy_until('<>');

            if (this._char === '>') { // End tag
                node.$_[HTMLNode.INFO_TEXT] += '>';
                this._next();
            }

            this._link_nodes(node, false);
            // Debug: 'Source document contains invalid tag name: ' + node.$_[HTMLNode.INFO_TEXT]
            return true;
        }

        // Valid tag name
        node.nodeType = HTMLNode.TYPE_ELEMENT;
        const tag_lower = tag.toLowerCase();
        node.tag = (this.caseInsensitive) ? tag_lower : tag;

        if (Functions.isset(this.#optional_closing_tags[tag_lower])) { // Optional closing tag
            while (Functions.isset(this.#optional_closing_tags[tag_lower][this._parent.tag.toLowerCase()])) {
                // Previous element was the last element of ancestor
                this._parent.$_[HTMLNode.INFO_END] = node.$_[HTMLNode.INFO_BEGIN] - 1;
                this._parent = this._parent._parent;
            }
            node._parent = this._parent;
        }

        let guard = 0; // prevent infinity loop

        // [0] Space between tag and first attribute
        let space = [this._copy_skip(this._token_blank), '', ''];

        do { // Parse attributes
            let name = this._copy_until(this._token_equal);

            if (name === '' && this._char !== null && space[0] === '') {
                break;
            }

            if (guard === this._pos) { // Escape infinite loop
                this._next();
                continue;
            }

            guard = this._pos;

            if (this._pos >= this.size - 1 && this._char !== '>') { // End Of File
                // Debug: 'Source document ended unexpectedly!'
                node.nodeType = HTMLNode.TYPE_TEXT;
                node.$_[HTMLNode.INFO_END] = 0;
                node.$_[HTMLNode.INFO_TEXT] = '<' + tag + space[0] + name;
                node.tag = 'text';
                this._link_nodes(node, false);
                return true;
            }

            if (name === '/' || name === '') { // No more attributes
                break;
            }

            // [1] Whitespace after attribute name
            space[1] = (this._token_blank.indexOf(this._char) === -1) ? '' : this._copy_skip(this._token_blank);

            name = this._restore_noise(name); // might be a noisy name

            if (this.caseInsensitive) {
                name = name.toLowerCase();
            }

            if (this._char === '=') { // Attribute with value
                this._next();
                this._parse_attr(node, name, space, trim); // get attribute value

            } else { // Attribute without value
                if (!Functions.isset(node.$_[HTMLNode.INFO_QUOTE]))
                    node.$_[HTMLNode.INFO_QUOTE] = [];

                node.$_[HTMLNode.INFO_QUOTE][name] = HTMLNode.QUOTE_NO;
                node.attr.set(name, true);
                if (this._char !== '>') {
                    this._char = this._doc.charAt(--this._pos);
                } // prev
            }

            // Space before attribute and around equal sign
            if (!trim && (space[0] !== ' ' || space[1] !== '' || space[2] !== '')) {
                // Debug: 'Source document contains superfluous whitespace in attributes (<e    attribute  =  "value">). Enable trimming or fix attribute spacing for best performance.'
                node.$_[HTMLNode.INFO_SPACE][name] = space;
            }

            // prepare for next attribute
            space = [
                ((this._token_blank.indexOf(this._char) === -1) ? '' : this._copy_skip(this._token_blank)),
                '',
                ''
            ];
        } while (this._char !== '>' && this._char !== '/');

        this._link_nodes(node, true);

        // Space after last attribute before closing the tag
        if (!trim && space[0] !== '') {
            // Debug: 'Source document contains superfluous whitespace before the closing braket (<e attribute="value"     >). Enable trimming or remove spaces before closing brackets for best performance.'
            node.$_[HTMLNode.INFO_END_SPACE] = space[0];
        }

        let rest = (this._char === '>') ? '' : this._copy_until_char('>');
        rest = (trim) ? rest.trim() : rest; // <html   /   >

        this._next();

        if (rest.trim() === '/') { // Void element
            if (rest !== '') {
                if (Functions.isset(node.$_[HTMLNode.INFO_END_SPACE])) {
                    node.$_[HTMLNode.INFO_END_SPACE] += rest;
                } else {
                    node.$_[HTMLNode.INFO_END_SPACE] = rest;
                }
            }
            node.$_[HTMLNode.INFO_END] = 0;
        } else if (!Functions.isset(this.#self_closing_tags[node.tag.toLowerCase()])) {
            const innertext = this._copy_until_char('<');
            if (innertext !== '') {
                node.$_[HTMLNode.INFO_INNER] = innertext;
            }
            this._parent = node;
        }

        if (node.tag === 'br') {
            node.$_[HTMLNode.INFO_INNER] = this.default_br_text;
        } else if (node.tag === 'script') {
            let data = '';

            // There is a rare chance of empty script: "<script></script>"
            // In which case the current char is the start of the end tag
            // But the script could also just contain tags: "<script><div></script>"
            while (true) {
                // Copy until first char of end tag
                data += this._copy_until_char('<');

                // Look ahead in the document, maybe we are at the end
                if ((this._pos + 9) > this.size) { // End of document
                    // Debug: 'Source document ended unexpectedly!'
                    break;
                } else if (this._doc.substr(this._pos, 8) === '</script') { // end
                    this._skip('>'); // don't include the end tag
                    break;
                }

                // Note: A script tag may contain any other tag except </script>
                // which needs to be escaped as <\/script>

                data += this._char;
                this._next();
            }

            const node2 = new HTMLNode(this);
            ++this.cursor;
            node2.$_[HTMLNode.INFO_TEXT] = data;
            this._link_nodes(node2, false);
        }

        return true;
    }

    _parse_attr(node, name, space, trim) {
        const is_duplicate = node.attr.has(name);

        if (!is_duplicate) // Copy whitespace between "=" and value
            space[2] = (this._token_blank.indexOf(this._char) === -1) ? '' : this._copy_skip(this._token_blank);

        let quote_type = HTMLNode.QUOTE_NO;
        let value;

        switch (this._char) {
            case '"':
                quote_type = HTMLNode.QUOTE_DOUBLE;
                this._next();
                value = this._copy_until_char('"');
                this._next();
                break;
            case '\'':
                // Debug: 'Source document contains attribute values with single quotes (<e attribute=\'value\'>). Use double quotes for best performance.'
                quote_type = HTMLNode.QUOTE_SINGLE;
                this._next();
                value = this._copy_until_char('\'');
                this._next();
                break;
            default:
                // Debug: 'Source document contains attribute values without quotes (<e attribute=value>). Use double quotes for best performance'
                value = this._copy_until(this._token_attr);
        }

        value = this._restore_noise(value);

        if (trim) {
            // Attribute values must not contain control characters other than space
            // https://www.w3.org/TR/html/dom.html#text-content
            // https://www.w3.org/TR/html/syntax.html#attribute-values
            // https://www.w3.org/TR/xml/#AVNormalize
            value = value.replace(/[\r\n\t\s]+/u, ' ').trim();
        }

        if (!is_duplicate) {
            if (quote_type !== HTMLNode.QUOTE_DOUBLE) {
                if (!Functions.isset(node.$_[HTMLNode.INFO_QUOTE]))
                    node.$_[HTMLNode.INFO_QUOTE] = [];

                node.$_[HTMLNode.INFO_QUOTE][name] = quote_type;
            }
            node.attr.set(name, value);
        }
    }

    _link_nodes(node, is_child) {
        node._setParent(this._parent, is_child);
    }

    _as_text_node(tag) {
        const node = new HTMLNode(this);
        ++this.cursor;
        node.$_[HTMLNode.INFO_TEXT] = '</' + tag + '>';
        this._link_nodes(node, false);
        this._next();
        return true;
    }

    _skip(chars) {
        this._pos += Functions.strspn(this._doc, chars, this._pos);
        this._char = (this._pos < this.size) ? this._doc.charAt(this._pos) : null; // next
    }

    _copy_skip(chars) {
        const pos = this._pos;
        const len = Functions.strspn(this._doc, chars, pos);
        if (len === 0) {
            return '';
        }
        this._pos += len;
        this._char = (this._pos < this.size) ? this._doc.charAt(this._pos) : null; // next
        return this._doc.substr(pos, len);
    }

    _copy_until(chars) {
        const pos = this._pos;
        const len = Functions.strcspn(this._doc, chars, pos);
        this._pos += len;
        this._char = (this._pos < this.size) ? this._doc.charAt(this._pos) : null; // next
        return this._doc.substr(pos, len);
    }

    _copy_until_char(char) {
        if (this._char === null) {
            return '';
        }

        const pos = this._doc.indexOf(char, this._pos);
        if (pos === -1) {
            const ret = this._doc.substr(this._pos, this.size - this._pos);
            this._char = null;
            this._pos = this.size;
            return ret;
        }

        if (pos === this._pos) {
            return '';
        }

        const pos_old = this._pos;
        this._char = this._doc.charAt(pos);
        this._pos = pos;
        return this._doc.substr(pos_old, pos - pos_old);
    }

    _remove_noise(pattern, remove_tag = false) {
        let m;
        const regex = RegExp(pattern);
        const matches = [];
        let oldIndex = -1;
        while ((m = regex.exec(this._doc)) !== null) {
            // This is necessary to avoid infinite loops with zero-width matches
            if (m.index === oldIndex)
                break;
            oldIndex = m.index;

            matches.push(m);
        }

        const count = matches.length;

        for (let i = count - 1; i > -1; --i) {
            const key = '___noise___' + Functions.sprintf('% 5d', this._noise.length + 1000);

            const idx = (remove_tag) ? 0 : 1; // 0 = entire match, 1 = submatch
            this._noise[key] = matches[i][idx][0];
            this._doc = Functions.substr_replace(this._doc, key, matches[i][idx][1], matches[i][idx][0].length);
        }

        // reset the length of content
        this.size = this._doc.length;

        if (this.size > 0) {
            this._char = this._doc.charAt(0);
        }
    }

    _restore_noise(text) {
        if (Functions.empty(this._noise)) return text; // nothing to restore

        let pos = 0;
        while ((pos = text.indexOf('___noise___', pos)) !== -1) {
            // Sometimes there is a broken piece of markup, and we don't GET the
            // pos+11 etc... token which indicates a problem outside of us...

            // in the DOM causes an infinite loop which could be utilized by
            // malicious software
            if (text.length > pos + 15) {
                const key = '___noise___'
                    + text.charAt(pos + 11)
                    + text.charAt(pos + 12)
                    + text.charAt(pos + 13)
                    + text.charAt(pos + 14)
                    + text.charAt(pos + 15);

                if (Functions.isset(this._noise[key])) {
                    text = text.substr(0, pos)
                        + this._noise[key]
                        + text.substr(pos + 16);

                    delete this._noise[key];
                } else {
                    // Debug: 'Noise restoration failed. DOM has been corrupted!'
                    // do this to prevent an infinite loop.
                    text = text.substr(0, pos)
                        + 'UNDEFINED NOISE FOR KEY: '
                        + key
                        + text.substr(pos + 16);
                }
            } else {
                // There is no valid key being given back to us... We must get
                // rid of the ___noise___ or we will have a problem.
                // Debug: 'Noise restoration failed. The provided key is incomplete: ' + text
                text = text.substr(0, pos)
                    + 'NO NUMERIC NOISE KEY'
                    + text.substr(pos + 11);
            }
        }
        return text;
    }

    _next() {
        this._char = (++this._pos < this.size) ? this._doc.charAt(this._pos) : null; // next
    }

    search_noise(text) {
        for (const noiseElement of this._noise) {
            if (noiseElement.indexOf(text) !== -1) {
                return noiseElement;
            }
        }
    }

    toString() {
        return this.root.plainText();
    }

    getValue(name) {
        switch (name.toLowerCase()) {
            case 'outertext':
                return this.root.outerText();
            case 'innertext':
                return this.root.innerText();
            case 'plaintext':
                return this.root.plainText();
            case 'charset':
                return this._charset;
            case 'target_charset':
                return this._target_charset;
        }
    }

    source = () => this.#source;

    childNodes(idx = -1) {
        return this.root.childNodes(idx);
    }

    firstChild() {
        return this.root.firstChild();
    }

    lastChild() {
        return this.root.lastChild();
    }

    getElementById(id, caseInsensitive = false) {
        return this.root.getElementById(id, caseInsensitive);
    }

    getElementsById(id, idx = null, caseInsensitive = false) {
        return this.root.getElementsById(id, idx, caseInsensitive);
    }

    getElementByClassName(className, caseInsensitive = false) {
        return this.root.getElementByClassName(className, caseInsensitive);
    }

    getElementsByClassName(className, idx = null, caseInsensitive = false) {
        return this.root.getElementsByClassName(className, idx, caseInsensitive);
    }

    getElementByTagName(name, caseInsensitive = false) {
        return this.root.getElementByTagName(name, caseInsensitive);
    }

    getElementsByTagName(name, idx = null, caseInsensitive = false) {
        return this.root.getElementsByTagName(name, idx, caseInsensitive);
    }

    getElementByAttr(attrName, attrKey, caseInsensitive = false) {
        return this.root.getElementByAttr(attrName, attrKey, caseInsensitive);
    }

    getElementsByAttr(attrName, attrKey, idx = null, caseInsensitive = false) {
        return this.root.getElementsByAttr(attrName, attrKey, idx, caseInsensitive);
    }

    /**
     * Find the root HTML element.
     *
     * @return the root HTML element.
     */
    htmlEl() {
        const h = this.findFirst('html');
        return Functions.isset(h) ? h : this.root;
    }

    /**
     * Get this document's {@code head} element.
     *
     * @return head element.
     */
    head() {
        return this.htmlEl().findInChildren('head', 0);
    }

    /**
     * Get this document's head: {@code meta} elements.
     *
     * @return array of meta elements.
     */
    metaTags() {
        return this.find('meta');
    }

    /**
     * Get a meta element.
     *
     * <meta name="NAME" content="bla bla"> (Standard)
     * <meta property="og:NAME" content="bla bla">
     * <meta itemprop="NAME" content="bla bla">
     * <meta name="…NAME…" content="bla bla">
     * <meta property="…NAME…" content="bla bla">
     * <meta itemprop="…NAME…" content="bla bla">
     */
    metaEl(name, onlyStandard = false, forceContent = true) {
        let m;
        if (onlyStandard) {
            m = this.find('meta[name=' + name + ']', 0);
        } else {
            m = this.find([
                'meta[name=' + name + ']',
                'meta[property=og:' + name + ']',
                'meta[itemprop=:' + name + ']',
                'meta[name%=' + name + ']',
                'meta[property%=' + name + ']',
                'meta[itemprop%=' + name + ']',
            ], 0);
        }
        if (forceContent) {
            return Functions.isset(m) && m.hasAttribute('content') ? m : null;
        } else {
            return m;
        }
    }

    /**
     * Get content of a meta.
     */
    meta(name, onlyStandard = false) {
        const m = this.metaEl(name, onlyStandard);
        return (Functions.isset(m) && m.hasAttribute('content')) ? m.getAttribute('content') : '';
    }

    /**
     * Get this document's preview description element.
     * Can be a meta tag or first p/h1 tag
     */
    descriptionEl() {
        const desc = this.metaEl('description');
        if (Functions.isset(desc))
            return desc;

        // extract preview from the first <p> sibling to the first <h1>
        const h1 = this.find('h1', 0);
        if (Functions.isset(h1)) {
            const p = h1.findInChildren('p', 0);
            if (Functions.isset(p))
                return p;
        }

        // extract preview from the first <p>
        const p = this.find('p', 0);
        return Functions.isset(p) ? p : h1;
    }

    /**
     * Get this document's description content.
     */
    description() {
        const desc = this.metaEl('description');
        return Functions.isset(desc) ? desc.content() : '';
    }

    /**
     * Get this document's preview image element.
     * Can be a meta tag or first h1 > img tag
     */
    imageEl() {
        const img = this.metaEl('image');
        if (Functions.isset(img))
            return img;

        // extract the first image which is sibling to the first h1
        const h1 = this.find('h1', 0);
        if (Functions.isset(h1)) {
            const img = h1.findInChildren('img', 0);
            if (Functions.isset(img) && img.hasAttribute('src'))
                return img;
        }

        return null;
    }

    /**
     * Get this document's preview image content.
     */
    image() {
        const img = this.metaEl('image');
        if (Functions.isset(img))
            return img.content();

        // extract the first image which is sibling to the first h1
        const h1 = this.find('h1', 0);
        if (Functions.isset(h1)) {
            const img = h1.findInChildren('img', 0);
            if (Functions.isset(img) && img.hasAttribute('src'))
                return img.getAttribute('src');
        }

        return '';
    }

    /**
     * Get this document's {@code <body>} or {@code <frameset>} element.
     *
     * @return body element for documents with a {@code <body>}, a new {@code <body>} element if the document
     * had no contents, or the outermost {@code <frameset> element} for frameset documents.
     */
    bodyEl() {
        return this.htmlEl().findInChildren(['body', 'frameset'], 0);
    }

    /**
     * Get this document's {@code <body>} or {@code <frameset>} plainText.
     */
    body() {
        const b = this.bodyEl();
        return Functions.isset(b) ? b.plainText() : '';
    }

    /**
     * Get this document's {@code title} element.
     * @return title element
     */
    titleEl() {
        const t = this.metaEl('title');
        if (Functions.isset(t) && t.hasAttribute('content'))
            return t;

        return this.head().findInChildren('title', 0, true);
    }

    /**
     * Get this document's {@code title} content.
     */
    title() {
        const t = this.titleEl();
        return Functions.isset(t) ? t.content() : '';
    }

    /**
     * Returns array of elements whose plainText equals the target.
     */
    matchesPlainText(plainText) {
        return this.nodes.filter(n => n.plainText().trim() === plainText.trim())
    }

    /**
     * Returns array of elements whose innerText equals the target.
     */
    matchesInnerText(innerText) {
        return this.nodes.filter(n => n.innerText() === innerText)
    }

    /**
     * Returns array of elements whose outerText equals the target.
     */
    matchesOuterText(outerText) {
        return this.nodes.filter(n => n.outerText() === outerText)
    }

    /**
     * Returns array of elements whose tag name equals the target.
     */
    matchesTagName(tag) {
        return this.nodes.filter(n => n.tag.toLowerCase() === tag.toLowerCase())
    }

    /**
     * Returns array of comment elements.
     */
    comments() {
        return this.nodes.filter(n => n.nodeType === HTMLNode.TYPE_COMMENT)
    }

    /**
     * Returns array of text elements.
     */
    texts() {
        return this.nodes.filter(n => n.nodeType === HTMLNode.TYPE_TEXT)
    }
}

module.exports = HTMLDocument;