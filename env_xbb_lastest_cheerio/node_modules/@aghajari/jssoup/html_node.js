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

const Functions = require('./functions');
const util = require('util');

class HTMLNode {
    static TYPE_ELEMENT = 1;
    static TYPE_COMMENT = 2;
    static TYPE_TEXT = 3;
    static TYPE_ROOT = 5;
    static TYPE_UNKNOWN = 6;
    static TYPE_CDATA = 7;

    static QUOTE_DOUBLE = 0;
    static QUOTE_SINGLE = 1;
    static QUOTE_NO = 3;

    static INFO_BEGIN = 0;
    static INFO_END = 1;
    static INFO_QUOTE = 2;
    static INFO_SPACE = 3;
    static INFO_TEXT = 4;
    static INFO_INNER = 5;
    static INFO_OUTER = 6;
    static INFO_END_SPACE = 7;

    nodeType = HTMLNode.TYPE_TEXT;
    tag = 'text';
    attr = new Map();
    children = [];
    nodes = [];
    _parent;
    $_ = {};
    _dom;
    class = '';

    constructor(document) {
        if (document === null) return this;

        this._dom = document;
        this._dom.nodes.push(this);
    }

    [util.inspect.custom](depth, opts) {
        return this._debug(opts);
    }

    _debug(opts, defTab = '', preferSingleLine = true, forceSingleLine = false) {
        const tab = "  ";

        let inner = this.innerText();
        if (inner.length > 105)
            inner = inner.substring(0, 100) + "…";

        let plain = this.plainText();
        if (plain.length > 105)
            plain = plain.substring(0, 100) + "…";

        let attrs = '{ ';
        for (const [k, v] of this.attr) {
            attrs += `${opts.stylize(k, 'special')}: '${opts.stylize(v, 'string')}', `;
        }
        attrs = attrs.trim();
        if (attrs.endsWith(",")) attrs = attrs.substring(0, attrs.length - 1);
        if (attrs.length > 1) attrs += ' ';
        attrs += '}';

        const props = new Map();
        props.set('tag', opts.stylize(this.tag, 'special'));

        if (this.nodeType !== HTMLNode.TYPE_ROOT && this.nodeType !== HTMLNode.TYPE_COMMENT)
            props.set('cssSelector', opts.stylize(this.cssSelector(), 'number'));

        plain = plain.replace(/(?:\r\n|\r|\n)/g, '<br>');
        inner = inner.replace(/(?:\r\n|\r|\n)/g, '<br>');

        if (inner.length > 0) {
            if (plain.length > 0 && plain.trim() !== inner.trim()) {
                props.set('plainText', opts.stylize(`'${plain}'`, 'string'));
                props.set('innerText', opts.stylize(`'${inner}'`, 'string'));
            } else {
                props.set('text', opts.stylize(`'${inner}'`, 'string'));
            }
        }

        if (attrs.length > 2)
            props.set('attrs', attrs);

        const crlf = !forceSingleLine ? '\n' : '';
        const comma = forceSingleLine ? ', ' : crlf;
        const end = forceSingleLine ? ' ' : '';
        const defTab2 = forceSingleLine ? '' : defTab + tab;

        let output = defTab + 'HTMLNode { ' + crlf;

        for (const [k, v] of props) {
            output += defTab2 + k + ": " + v + comma;
        }
        output = output.trimRight();
        if (output.endsWith(",")) output = output.substring(0, output.length - 1);

        output = output + crlf + (!forceSingleLine ? defTab : '') + end + '}';

        if (preferSingleLine && !forceSingleLine && output.length <= 150) {
            return this._debug(opts, defTab, true, true);
        } else {
            return output;
        }
    }

    toString() {
        return this.innerText();
    }

    clear() {
        delete this._parent;
        delete this._dom;
    }

    _setParent(parent = null, is_child = true) {
        if (parent !== null) {
            this._parent = parent;
            this._parent.nodes.push(this);
            if (is_child)
                this._parent.children.push(this);
        }

        return this._parent;
    }

    find_ancestor_tag(tag) {
        if (!Functions.isset(this._parent))
            return null;

        let ancestor = this._parent;

        while (Functions.isset(ancestor)) {
            if (ancestor.tag === tag) {
                break;
            }

            ancestor = ancestor._parent;
        }

        return ancestor;
    }

    plainText = () => this.text();

    content = () => {
        if (this.tag.toLowerCase() === 'meta' && this.hasAttribute('content'))
            return this.getAttribute('content');
        else
            return this.plainText();
    };

    innerText() {
        let ret;
        if (Functions.isset(this.$_[HTMLNode.INFO_INNER])) {
            ret = this.$_[HTMLNode.INFO_INNER];
        } else if (Functions.isset(this.$_[HTMLNode.INFO_TEXT])) {
            ret = this.$_[HTMLNode.INFO_TEXT];
        } else {
            ret = '';
        }

        for (const node of this.nodes) {
            ret += node.outerText();
        }

        return this.convert_text(ret);
    }

    outerText() {
        if (this.tag === 'root') {
            return this.innerText();
        }
        if (Functions.isset(this.$_[HTMLNode.INFO_OUTER])) {
            return this.convert_text(this.$_[HTMLNode.INFO_OUTER]);
        }

        if (Functions.isset(this.$_[HTMLNode.INFO_TEXT])) {
            return this.convert_text(this.$_[HTMLNode.INFO_TEXT]);
        }

        let ret = '';
        if (Functions.isset(this.$_[HTMLNode.INFO_BEGIN])) {
            ret = this.makeup();
        }

        if (Functions.isset(this.$_[HTMLNode.INFO_INNER])) {
            if (this.tag !== 'br') {
                ret += this.$_[HTMLNode.INFO_INNER];
            }
        }

        if (this.nodes.length > 0) {
            for (const node of this.nodes) {
                ret += node.outerText();
            }
        }

        if (Functions.isset(this.$_[HTMLNode.INFO_END]) && this.$_[HTMLNode.INFO_END] !== 0) {
            ret += '</' + this.tag + '>';
        }

        return this.convert_text(ret);
    }


    text(trim = true) {
        let ret = '';

        if (this.nodeType === HTMLNode.TYPE_COMMENT) {
            ret = this.innerText();
            return trim ? ret.trim() : ret;
        }

        if (this.tag.toLowerCase() === 'script'
            || this.tag.toLowerCase() === 'style'
            || this.nodeType === HTMLNode.TYPE_UNKNOWN) {
            ret = '';
        } else if (this.nodeType === HTMLNode.TYPE_CDATA) {
            ret = this.$_[HTMLNode.INFO_INNER];
        } else if (Functions.isset(this.$_[HTMLNode.INFO_INNER])) {
            ret = this.$_[HTMLNode.INFO_INNER];
        } else if (this.nodeType === HTMLNode.TYPE_TEXT) {
            ret = this.$_[HTMLNode.INFO_TEXT];
        }

        if (!Functions.isset(ret)) {
            ret = '';
        }

        if (!Functions.isset(this.nodes)) {
            return '';
        }

        for (const node of this.nodes) {
            if (HTMLNode._is_block_element(node)) {
                const block = this.convert_text(node.text(false)).trimLeft();

                if (!Functions.isset(block) || block === '')
                    continue;

                ret = ret.trimRight() + "\n\n" + block;

            } else if (HTMLNode._is_inline_element(node)) {
                if (node.tag.toLowerCase() === 'br') {
                    ret += this._dom.default_br_text;
                } else {
                    const inline = this.convert_text(node.text(false)).trimLeft();

                    if (!Functions.isset(inline) || inline === '')
                        continue;

                    ret = ret + this.convert_text(node.text(false));
                }
            } else {
                ret += this.convert_text(node.text(false));
            }
        }

        // Reduce whitespace at start/end to a single (or none) space
        ret = ret.replace(/[ \t\n\r0\x0B\xC2\xA0]+$/u, trim ? '' : ' ');
        ret = ret.replace(/^[ \t\n\r0\x0B\xC2\xA0]+/u, trim ? '' : ' ');

        return ret;
    }

    xmlText() {
        let ret = '' + this.innerText();
        ret = Functions.str_ireplace('<![CDATA[', '', ret);
        ret = ret.replace(']]>', '');
        return ret;
    }

    makeup() {
        // text, comment, unknown
        if (Functions.isset(this.$_[HTMLNode.INFO_TEXT])) {
            return this.$_[HTMLNode.INFO_TEXT];
        }

        let ret = '<' + this.tag;

        for (let [key, val] of this.attr) {

            // skip removed attribute
            if (val === null || val === false)
                continue;

            if (Functions.isset_key(this.$_[HTMLNode.INFO_SPACE], key)) {
                ret += this.$_[HTMLNode.INFO_SPACE][key][0];
            } else {
                ret += ' ';
            }

            //no value attr: nowrap, checked selected...
            if (val === true) {
                ret += key;
            } else {
                let quote_type = HTMLNode.QUOTE_DOUBLE;
                let quote = '"';

                if (Functions.isset_key(this.$_[HTMLNode.INFO_QUOTE], key)) {
                    quote_type = this.$_[HTMLNode.INFO_QUOTE][key];
                }

                switch (quote_type) {
                    case HTMLNode.QUOTE_SINGLE:
                        quote = '\'';
                        val = Functions.htmlentities(val, "ENT_QUOTES");
                        break;
                    case HTMLNode.QUOTE_NO:
                        quote = '';
                        break;
                    case HTMLNode.QUOTE_DOUBLE:
                    default:
                        val = Functions.htmlentities(val, "ENT_COMPAT");
                }

                ret += key
                    + (Functions.isset_key(this.$_[HTMLNode.INFO_SPACE], key) ? this.$_[HTMLNode.INFO_SPACE][key][1] : '')
                    + '='
                    + (Functions.isset_key(this.$_[HTMLNode.INFO_SPACE], key) ? this.$_[HTMLNode.INFO_SPACE][key][2] : '')
                    + quote
                    + val
                    + quote;
            }
        }

        if (Functions.isset(this.$_[HTMLNode.INFO_END_SPACE])) {
            ret += this.$_[HTMLNode.INFO_END_SPACE];
        }

        return ret + '>';
    }

    find(selector, idx = null, caseInsensitive = false) {
        return this.#findNow(selector, idx, caseInsensitive);
    }

    findInChildren(selector, idx = null, caseInsensitive = false) {
        return this.#findNow(selector, idx, caseInsensitive, '>');
    }

    #findNow(selector, idx = null, caseInsensitive = false, customCmd = null) {
        const found_keys = [];
        if (Array.isArray(selector)) {
            for (const selector_single of selector) {
                this.#find_inner(selector_single, caseInsensitive, found_keys, customCmd);
            }
        } else {
            this.#find_inner(selector, caseInsensitive, found_keys, customCmd);
        }

        if (found_keys.length === 0)
            return Functions.isset(idx) ? (Array.isArray(idx) ? [] : null) : [];

        const found_keys_ordered = found_keys.sort();
        const found = [];

        for (const k of found_keys_ordered) {
            if (k !== -1 && Functions.isset(this._dom.nodes[k]) &&
                !found.includes(this._dom.nodes[k]))
                found.push(this._dom.nodes[k])
        }

        // return nth-element or array
        if (!Functions.isset(idx)) {
            return found;
        } else if (Array.isArray(idx)) {
            const results = [];
            for (let id of idx) {
                if (id < 0) id = found.length + id;
                if (found.length > id) {
                    results.push(found[id]);
                }
            }
            return results;
        } else if (idx < 0) {
            idx = found.length + idx;
        }
        return (Functions.isset(found[idx])) ? found[idx] : null;
    }

    #find_inner(selector, lowercase = false, found_keys, customCmd = null) {
        if (selector.indexOf('>') !== -1) {
            // ex: html > body.test > h1:nth-child(2)
            // find html from root,
            // find body[class=test] from html
            // find 3th h1 from body
            // see cssSelector()

            const targets = selector.split('>');
            let element = this._dom.root;

            for (const t of targets) {
                if (element === null)
                    return;

                let t_selector = t.trim();

                if (t_selector.length === 0)
                    continue;

                let idx = 0;

                if (t_selector.indexOf(':nth-child(') !== -1) {
                    const regex = /(.*?):nth-child\((.*?)\)/s;
                    let m;

                    if ((m = regex.exec(t_selector)) !== null) {
                        t_selector = m[1];
                        idx = parseInt(m[2]);
                    }
                }
                element = element.find(t_selector, idx, lowercase, customCmd);
            }

            if (Functions.isset(element))
                found_keys.push(element.rootIndex());
        } else {
            this.#find(selector, lowercase, found_keys, customCmd);
        }
    }

    #find(selector, lowercase = false, found_keys, customCmd = null) {
        let selectors = this._parse_selector(selector);
        const count = selectors.length;
        if (count === 0) {
            return;
        }

        // find each selector
        for (let c = 0; c < count; ++c) {
            // The change on the below line was documented on the sourceforge
            // code tracker id 2788009
            // used to be: if (($levle=count($selectors[0]))===0) return array();
            const levle = selectors[c].length;
            if (levle === 0) {
                // Debug: 'Empty selector (' + selector + ') matches nothing.'
                return;
            }

            if (!Functions.isset(this.$_[HTMLNode.INFO_BEGIN])) {
                // Debug: 'Invalid operation. The current node has no start tag.'
                return;
            }

            let head = new Map();
            head.set(this.$_[HTMLNode.INFO_BEGIN], 1);
            let cmd = Functions.isset(customCmd) ? customCmd : ' '; // Combinator

            // handle descendant selectors, no recursive!
            for (let l = 0; l < levle; ++l) {
                let ret = new Map();

                for (const [k, v] of head) {
                    const n = (k === -1) ? this._dom.root : this._dom.nodes[k];
                    //PaperG - Pass this optional parameter on to the seek function.
                    ret = n._seek(selectors[c][l], ret, cmd, lowercase);
                }

                head = ret;
                cmd = selectors[c][l][6]; // Next Combinator
            }

            for (const [k, v] of head) {
                if (!found_keys.includes(k)) {
                    found_keys.push(k);
                }
            }
        }
    }

    findFirst(selector, caseInsensitive = false) {
        return this.find(selector, 0, caseInsensitive);
    }

    findLast(selector, caseInsensitive = false) {
        return this.find(selector, -1, caseInsensitive);
    }

    expect(selector, idx = null, caseInsensitive = false) {
        const ret = this.find(selector, idx, caseInsensitive);
        if (ret.length === 0)
            return null;
        return ret;
    }

    _seek(selector, ret, parent_cmd, lowercase = false) {
        let ps_selector = selector[0];
        let tag = selector[1];
        let ps_element = selector[2];
        let id = selector[3];
        let $class = selector[4];
        let attributes = selector[5];
        //let cmb = selector[6];
        let nodes = [];

        if (!Functions.isset(tag)) tag = '';
        if (!Functions.isset(id)) id = '';
        if (!Functions.isset($class)) $class = '';

        if (parent_cmd === ' ') { // Descendant Combinator
            // Find parent closing tag if the current element doesn't have a closing
            // tag (i.e. void element)
            let end = (!Functions.empty(this.$_[HTMLNode.INFO_END])) ? this.$_[HTMLNode.INFO_END] : 0;
            if (end === 0 && Functions.isset(this._parent)) {
                let parent = this._parent;
                while (Functions.isset(parent) && !Functions.isset(parent.$_[HTMLNode.INFO_END])) {
                    end -= 1;
                    parent = parent._parent;
                }
                if (Functions.isset(parent))
                    end += parent.$_[HTMLNode.INFO_END];
            }


            if (end === 0) {
                end = this._dom.nodes.length;
            }

            // Get list of target nodes
            const nodes_start = this.$_[HTMLNode.INFO_BEGIN] + 1;

            // remove() makes this._dom.nodes non-contiguous; use what is left.
            const targets = Functions.range(nodes_start, end);
            nodes = [];
            for (const k of targets) {
                const n = this._dom.nodes[k];
                if (Functions.isset(n))
                    nodes.push(n);
            }

        } else if (parent_cmd === '>') { // Child Combinator
            nodes = this.children;
        } else if (parent_cmd === '+' &&
            Functions.isset(this._parent) &&
            this._parent.children.includes(this)) { // Next-Sibling Combinator
            const index = this._parent.children.indexOf(this) + 1;
            if (index < this._parent.children.length)
                nodes.push(this._parent.children[index]);
        } else if (parent_cmd === '~' &&
            Functions.isset(this._parent) &&
            this._parent.children.includes(this)) { // Subsequent Sibling Combinator
            const index = this._parent.children.indexOf(this);
            nodes = this._parent.children.slice(index);
        }

        // Go throgh each element starting at this element until the end tag
        // Note: If this element is a void tag, any previous void element is skipped.
        for (let node of nodes) {
            let pass = true;

            // Skip root nodes
            if (!Functions.isset(node._parent)) {
                continue;
            }

            // Handle 'text' selector
            if (pass && tag === 'text') {
                if (node.tag === 'text') {
                    ret.set(this._dom.nodes.indexOf(node), 1);
                }

                if (Functions.isset(node.$_[HTMLNode.INFO_INNER])) {
                    ret.set(node.$_[HTMLNode.INFO_BEGIN], 1);
                }

                continue;
            }

            // Handle 'cdata' selector
            if (pass && tag === 'cdata') {
                if (node.tag === 'cdata')
                    ret.set(node.$_[HTMLNode.INFO_BEGIN], 1);
                continue;
            }

            // Handle 'comment'
            if (pass && tag === 'comment' && node.tag === 'comment') {
                ret.set(node.$_[HTMLNode.INFO_BEGIN], 1);
                continue;
            }

            // Skip if node isn't a child node (i.e. text nodes)
            if (pass && !node._parent.children.includes(node)) {
                continue;
            }

            // Skip if tag doesn't match
            if (pass && tag !== '' && tag !== node.tag && tag !== '*') {
                pass = false;
            }

            // Skip if ID doesn't exist
            if (pass && id !== '' && !node.attr.has('id')) {
                pass = false;
            }

            // Check if ID matches
            if (pass && id !== '' && node.attr.has('id')) {
                // Note: Only consider the first ID (as browsers do)
                const node_id = node.attr.get('id').trim().split(' ')[0];
                if (lowercase) {
                    if (id.toLowerCase() !== node_id.toLowerCase()) {
                        pass = false;
                    }
                } else {
                    if (id !== node_id) {
                        pass = false;
                    }
                }
            }

            // Check if all class(es) exist
            if (pass && $class !== '' && Array.isArray($class) && !Functions.empty($class)) {
                if (node.attr.has('class')) {
                    // Apply the same rules for the pattern and attribute value
                    // Attribute values must not contain control characters other than space
                    // https://www.w3.org/TR/html/dom.html#text-content
                    // https://www.w3.org/TR/html/syntax.html#attribute-values
                    // https://www.w3.org/TR/xml/#AVNormalize
                    let node_classes = node.attr.get('class').replace(/[\r\n\t\s]+/u, ' ').trim().split(' ');

                    if (lowercase) {
                        node_classes = node_classes.map(value => value.toLowerCase());
                    }

                    for (const c of $class) {
                        if (!node_classes.includes(lowercase ? c.toLowerCase() : c)) {
                            pass = false;
                            break;
                        }
                    }
                } else {
                    pass = false;
                }
            }

            // Check attributes
            if (pass
                && attributes !== ''
                && Array.isArray(attributes)
                && !Functions.empty(attributes)) {

                for (const a of attributes) {
                    const att_name = a[0];
                    const att_expr = a[1];
                    const att_val = a[2];
                    const att_inv = a[3];
                    const att_case_sensitivity = a[4];

                    // Handle indexing attributes (i.e. "[2]")
                    /**
                     * Note: This is not supported by the CSS Standard but adds
                     * the ability to select items compatible to XPath (i.e.
                     * the 3rd element within it's parent).
                     *
                     * Note: This doesn't conflict with the CSS Standard which
                     * doesn't work on numeric attributes anyway.
                     */
                    if (Functions.isNumeric(att_name)
                        && att_expr === ''
                        && att_val === '') {
                        let count = 0;

                        // Find index of current element in parent
                        for (const c of node._parent.children) {
                            if (c.tag === node.tag)
                                ++count;
                            if (c === node) break;
                        }

                        // If this is the correct node, continue with next
                        // attribute
                        if (count === parseInt(att_name))
                            continue;
                    }

                    // Check attribute availability
                    if (att_inv) { // Attribute should NOT be set
                        if (node.attr.has(att_name)) {
                            pass = false;
                            break;
                        }
                    } else { // Attribute should be set
                        if (att_name !== 'plaintext'
                            && !node.attr.has(att_name)) {
                            pass = false;
                            break;
                        }
                    }

                    // Continue with next attribute if expression isn't defined
                    if (att_expr === '') continue;

                    // If they have told us that this is a "plaintext"
                    // search then we want the plaintext of the node - right?
                    let nodeKeyValue;
                    if (att_name === 'plaintext') {
                        nodeKeyValue = node.plainText();
                    } else {
                        nodeKeyValue = node.attr.get(att_name);
                    }

                    // If lowercase is set, do a case insensitive test of
                    // the value of the selector.
                    let check;
                    if (lowercase) {
                        check = this._match(
                            att_expr,
                            att_val.toLowerCase(),
                            nodeKeyValue.toLowerCase(),
                            att_case_sensitivity);
                    } else {
                        check = this._match(
                            att_expr,
                            att_val,
                            nodeKeyValue,
                            att_case_sensitivity);
                    }

                    check = ps_element === 'not' ? !check : check;

                    if (!check) {
                        pass = false;
                        break;
                    }
                }
            }


            // Found a match. Add to list and clear node
            pass = ps_selector === 'not' ? !pass : pass;
            if (pass)
                ret.set(node.$_[HTMLNode.INFO_BEGIN], 1);
        }
        return ret;
    }

    _match(exp, pattern, value, case_sensitivity) {
        if (case_sensitivity === 'i') {
            pattern = String(pattern).toLowerCase();
            value = String(value).toLowerCase();
        }

        // Apply the same rules for the pattern and attribute value
        // Attribute values must not contain control characters other than space
        // https://www.w3.org/TR/html/dom.html#text-content
        // https://www.w3.org/TR/html/syntax.html#attribute-values
        // https://www.w3.org/TR/xml/#AVNormalize
        pattern = String(pattern).replace(/[\r\n\t\s]+/u, ' ').trim();
        value = String(value).replace(/[\r\n\t\s]+/u, ' ').trim();

        switch (exp) {
            case '=':
                return (value === pattern);
            case '!=':
                return (value !== pattern);
            case '^=':
                return value.match(new RegExp('/^' + Functions.preg_quote(pattern, '/') + '/'));
            case '$=':
                return value.match(new RegExp('/' + Functions.preg_quote(pattern, '/') + '$/'));
            case '*=':
                return value.match(new RegExp('/' + Functions.preg_quote(pattern, '/') + '/'));
            case '|=':
                /**
                 * [att|=val]
                 *
                 * Represents an element with the att attribute, its value
                 * either being exactly "val" or beginning with "val"
                 * immediately followed by "-" (U+002D).
                 */
                return value.startsWith(pattern);
            case '&=':
                return value.endsWith(pattern);
            case '%=':
                return value.indexOf(pattern) >= 0;
            case '~=':
                /**
                 * [att~=val]
                 *
                 * Represents an element with the att attribute whose value is a
                 * whitespace-separated list of words, one of which is exactly
                 * "val". If "val" contains whitespace, it will never represent
                 * anything (since the words are separated by spaces). Also if
                 * "val" is the empty string, it will never represent anything.
                 */
                return value.trim().split(' ').includes(pattern);
        }

        // Debug: 'Unhandled attribute selector: ' + exp + '!'
        return false;
    }

    _parse_selector(selector_string) {
        /**
         * Pattern of CSS selectors, modified from mootools (https://mootools.net/)
         *
         * Paperg: Add the colon to the attribute, so that it properly finds
         * <tag attr:ibute="something" > like google does.
         *
         * Note: if you try to look at this attribute, you MUST use getAttribute
         * since $dom->x:y will fail the php syntax check.
         *
         * Notice the \[ starting the attribute? and the @? following? This
         * implies that an attribute can begin with an @ sign that is not
         * captured. This implies that an html attribute specifier may start
         * with an @ sign that is NOT captured by the expression. Farther study
         * is required to determine of this should be documented or removed.
         *
         * Matches selectors in this order:
         *
         * [0] - full match
         *
         * [1] - pseudo selector
         *     (?:\:(\w+)\()?
         *     Matches the pseudo selector (optional)
         *
         * [2] - tag name
         *     ([\w:\*-]*)
         *     Matches the tag name consisting of zero or more words, colons,
         *     asterisks and hyphens.
         *
         * [3] - pseudo selector
         *     (?:\:(\w+)\()?
         *     Matches the pseudo selector (optional)
         *
         * [4] - id name
         *     (?:\#([\w-]+))
         *     Optionally matches a id name, consisting of an "#" followed by
         *     the id name (one or more words and hyphens).
         *
         * [5] - class names (including dots)
         *     (?:\.([\w\.-]+))?
         *     Optionally matches a list of classs, consisting of an "."
         *     followed by the class name (one or more words and hyphens)
         *     where multiple classes can be chained (i.e. ".foo.bar.baz")
         *
         * [6] - attributes
         *     ((?:\[@?(?:!?[\w:-]+)(?:(?:[!*^$|~]?=)[\"']?(?:.*?)[\"']?)?(?:\s*?(?:[iIsS])?)?\])+)?
         *     Optionally matches the attributes list
         *
         * [7] - separator
         *     ([\/, >+~]+)
         *     Matches the selector list separator
         */

        const pattern = /(?:\:(\w+)\()?([\w:\*-]*)(?:\:(\w+)\()?(?:\#([\w-]+))?(?:|\.([\w\.-]+))?((?:\[@?(?:!?[\w:-]+)(?:(?:[!*^$|~]?=)[\"']?(?:.*?)[\"']?)?(?:\s*?(?:[iIsS])?)?\])+)?(?:\))?(?:\))?([\/, >+~]+)/is;
        const final_selector_string = selector_string.trim() + ' '; // Add final ' ' as pseudo separator

        const selectors = [];
        let result = [];

        let m;
        let oldIndex = -1;

        while ((m = pattern.exec(final_selector_string)) !== null) {
            if (oldIndex === m.index)
                break;
            oldIndex = m.index;

            try {
                m[0] = String(m[0]).trim();

                // Skip NoOps
                if (m[0] === '' || m[0] === '/' || m[0] === '//')
                    continue;

                m.shift();

                // Convert to lowercase
                if (this._dom.caseInsensitive && Functions.isset(m[1])) {
                    m[1] = String(m[1]).toLowerCase();
                }

                // Extract classes
                if (Functions.isset(m[4]) && m[4] !== '') {
                    m[4] = String(m[4]).split('.');
                }

                /* Extract attributes (pattern based on the pattern above!)
                 * [0] - full match
                 * [1] - attribute name
                 * [2] - attribute expression
                 * [3] - attribute value
                 * [4] - case sensitivity
                 *
                 * Note: Attributes can be negated with a "!" prefix to their name
                 */
                if (!Functions.empty(m[5])) {

                    // Replace element by array

                    const attr_str = String(m[5]).trim();
                    m[5] = [];

                    const regexAttr = /\[@?(!?[\w:-]+)(?:([!*^$|~]?=)[\"']?(.*?)[\"']?)?(?:\s+?([iIsS])?)?\]/is;
                    let att;
                    let oldIndex = -1;
                    while ((att = regexAttr.exec(attr_str)) !== null) {
                        if (oldIndex === att.index)
                            break;
                        oldIndex = att.index;

                        // Skip empty matches
                        if (att[0].trim() === '')
                            continue;

                        const inverted = (Functions.isset_key(att[1], 0) && att[1][0] === '!');
                        m[5].push([
                            inverted ? att[1].substring(1) : att[1], // Name
                            (Functions.isset(att[2])) ? att[2] : '', // Expression
                            (Functions.isset(att[3])) ? att[3] : '', // Value
                            inverted, // Inverted Flag
                            (Functions.isset(att[4])) ? att[4].toLowerCase() : '', // Case-Sensitivity
                        ]);
                    }

                }

                // Sanitize Separator
                if (Functions.isset(m[6]) && m[6] !== '' && String(m[6]).trim() === '') { // Descendant Separator
                    m[6] = ' ';
                } else { // Other Separator
                    m[6] = String(m[6]).trim();
                }

                // Clear Separator if it's a Selector List
                let is_list = false;
                if (m[6] === ',') {
                    is_list = true;
                    m[6] = '';
                }

                result.push(m);
                if (is_list) { // Selector List
                    selectors.push(result);
                    result = [];
                }
            } catch (e) {
                console.error(e);
            }
        }


        if (result.length > 0) {
            selectors.push(result);
        }

        return selectors;
    }

    getValue(name) {
        if (this.attr.has(name)) {
            return this.convert_text(this.attr.get(name));
        }

        switch (name.toLowerCase()) {
            case 'outertext':
                return this.outerText();
            case 'innertext':
                return this.innerText();
            case 'plaintext':
                return this.plainText();
            case 'xmltext':
                return this.xmlText();
        }

        return false;
    }

    setValue(name, value) {
        switch (name.toLowerCase()) {
            case 'outertext':
                this.$_[HTMLNode.INFO_OUTER] = value;
                break;
            case 'innertext':
                if (Functions.isset(this.$_[HTMLNode.INFO_TEXT])) {
                    this.$_[HTMLNode.INFO_TEXT] = '';
                }
                this.$_[HTMLNode.INFO_INNER] = value;
                break;
            default:
                this.attr.set(name, value);
        }
    }

    hasValue(name) {
        switch (name.toLowerCase()) {
            case 'outertext':
                return true;
            case 'innertext':
                return true;
            case 'plaintext':
                return true;
        }

        return this.attr.has(name);
    }

    deleteValue(name) {
        if (this.attr.has(name))
            this.attr.delete(name);
    }

    convert_text(text) {
        if (!Functions.isset(text))
            return '';

        let converted_text = text;

        let sourceCharset = '';
        let targetCharset = '';

        if (Functions.isset(this._dom)) {
            sourceCharset = this._dom._charset.toUpperCase();
            targetCharset = this._dom._target_charset.toUpperCase();
        }

        if (!Functions.empty(sourceCharset) && !Functions.empty(targetCharset)) {

            if (sourceCharset.toUpperCase() === targetCharset.toUpperCase()) {
                converted_text = text;
            } else if ((targetCharset.toUpperCase() === 'UTF-8') && (HTMLNode.#is_utf8(text))) {
                // Debug'The source charset was incorrectly detected as ' + sourceCharset + ' but should have been UTF-8'
                converted_text = text;
            } else {
                const Iconv = require('iconv').Iconv;
                const iconv = new Iconv(sourceCharset, targetCharset);
                converted_text = iconv.convert(text);
            }
        }

        // Lets make sure that we don't have that silly BOM issue with any of the utf-8 text we output.
        if (targetCharset === 'UTF-8') {
            if (converted_text.substr(0, 3) === "\xef\xbb\xbf") {
                converted_text = converted_text.substr(3);
            }

            if (converted_text.substring(converted_text.length - 3) === "\xef\xbb\xbf") {
                converted_text = converted_text.substring(0, converted_text.length - 3);
            }
        }

        return converted_text;
    }

    addClass($class) {
        if (Object.prototype.toString.call($class) === '[object String]') {
            $class = $class.split(' ');
        }

        if (Array.isArray($class)) {
            for (const c of $class) {
                if (!Functions.empty(this.class)) {
                    if (!this.hasClass(c))
                        this.class += ' ' + c;
                } else {
                    this.class = c;
                }
            }
        }
    }

    hasClass($class) {
        if (Object.prototype.toString.call($class) === '[object String]') {
            if (!Functions.empty(this.class)) {
                return String(this.class).split(' ').includes($class);
            }
        }

        return false;
    }

    removeClass($class = null) {
        if (Functions.empty(this.class)) {
            return;
        }

        if (!Functions.isset($class)) {
            this.removeAttribute('class');
            return;
        }

        if (Object.prototype.toString.call($class) === '[object String]') {
            $class = $class.split(' ');
        }

        if (Array.isArray($class)) {
            $class = String(this.class).split(' ').filter(v => !$class.includes(v));
            if ($class.length === 0) {
                this.removeAttribute('class');
            } else {
                this.class = Array($class).join(' ');
            }
        }
    }

    getAllAttributes() {
        return this.attr;
    }

    getAttribute(name) {
        return this.attr.get(name);
    }

    setAttribute(name, value) {
        this.attr.set(name, value);
    }

    hasAttribute(name) {
        if (!Functions.isset(this.attr))
            return false;

        return this.attr.has(name);
    }

    removeAttribute(name) {
        this.attr.delete(name);
    }

    remove() {
        if (Functions.isset(this._parent)) {
            this._parent.removeChild(this);
        }
    }

    removeChild(node) {
        for (const child of node.children) {
            node.removeChild(child);
        }
        // No need to re-index node->children because it is about to be removed!

        for (const entity of node.nodes) {
            const enidx = node.nodes.indexOf(entity);
            const edidx = node._dom.nodes.indexOf(entity);

            if (enidx !== false) {
                delete node.nodes[enidx];
            }

            if (edidx !== false) {
                delete node._dom.nodes[edidx];
            }
        }

        // No need to re-index node->nodes because it is about to be removed!

        const nidx = this.nodes.indexOf(node);
        const cidx = this.children.indexOf(node);
        const didx = this._dom.nodes.indexOf(node);

        if (nidx !== false) {
            delete this.nodes[nidx];
        }

        this.nodes = this.nodes.values();

        if (cidx !== false) {
            delete this.children[cidx];
        }

        this.children = this.children.values();

        if (didx !== false) {
            delete this._dom.nodes[didx];
        }

        // Do not re-index dom->nodes because nodes point to other nodes in the
        // array explicitly!

        node.clear();
    }

    getElementById(id, caseInsensitive = false) {
        return this.find("#" + id, 0, caseInsensitive);
    }

    getElementsById(id, idx = null, caseInsensitive = false) {
        return this.find("#" + id, idx, caseInsensitive);
    }

    getElementByClassName(className, caseInsensitive = false) {
        return this.find("." + className, 0, caseInsensitive);
    }

    getElementsByClassName(className, idx = null, caseInsensitive = false) {
        return this.find("." + className, idx, caseInsensitive);
    }

    getElementByTagName(name, caseInsensitive = false) {
        return this.find(name, 0, caseInsensitive);
    }

    getElementsByTagName(name, idx = null, caseInsensitive = false) {
        return this.find(name, idx, caseInsensitive);
    }

    getElementByAttr(attrName, attrKey, caseInsensitive = false) {
        return this.getElementsByAttr(attrName, attrKey, 0, caseInsensitive);
    }

    getElementsByAttr(attrName, attrKey, idx = null, caseInsensitive = false) {
        let s = attrName;
        if (!Functions.empty(attrKey))
            s += '=' + attrKey;
        s = `[${s}]`;

        return this.find(s, idx, caseInsensitive);
    }

    parent() {
        return this._parent;
    }

    /**
     * Get this element's parent and ancestors, up to the document root.
     * @return this element's stack of parents, closest first.
     */
    parents() {
        const p = [];
        let element = this;
        while (Functions.isset(element.parent()) && element.parent().nodeType !== HTMLNode.TYPE_ROOT) {
            element = element.parent();
            p.push(element);
        }
        return p;
    }

    /**
     * Get the number of child nodes of this element that are elements.
     *
     * @return the number of child nodes that are elements
     */
    childrenSize() {
        return this.children.length;
    }

    child(idx = -1) {
        if (idx === -1) {
            return this.children;
        }
        if (Functions.isset(this.children[idx])) {
            return this.children[idx];
        }
        return null;
    }

    firstChild() {
        if (this.children.length > 0) {
            return this.children[0];
        }
        return null;
    }

    lastChild() {
        if (this.children.length > 0) {
            return this.children[this.children.length - 1];
        }
        return null;
    }

    nextSibling() {
        if (!Functions.isset(this._parent)) {
            return null;
        }

        const idx = this._parent.children.indexOf(this);

        if (idx !== false && Functions.isset(this._parent.children[idx + 1])) {
            return this._parent.children[idx + 1];
        }

        return null;
    }

    previousSibling() {
        if (!Functions.isset(this._parent)) {
            return null;
        }

        const idx = this._parent.children.indexOf(this);

        if (idx !== false && Functions.isset(this._parent.children[idx - 1])) {
            return this._parent.children[idx - 1];
        }

        return null;
    }

    hasChild() {
        return this.children.length > 0;
    }

    /**
     * Returns true if the provided element is a block level element
     * @link https://www.w3resource.com/html/HTML-block-level-and-inline-elements.php
     */
    isBlock() {
        return HTMLNode._is_block_element(this.tag);
    }

    /**
     * Returns true if the provided element is an inline level element
     * @link https://www.w3resource.com/html/HTML-block-level-and-inline-elements.php
     */
    isInline() {
        return HTMLNode._is_inline_element(this.tag);
    }

    /**
     * Get the {@code id} attribute of this element.
     *
     * @return The id attribute, if present, or an empty string if not.
     */
    id() {
        return this.attr.has("id") ? this.attr.get("id") : "";
    }

    /**
     * Checks if this element matches the given selector CSS query.
     *
     * @param selector CSS query
     * @param caseInsensitive
     * @return if this element matches the query
     */
    matches(selector, caseInsensitive = false) {
        if (!Functions.isset(this._dom))
            return false;

        const found = this._dom.find(selector, null, caseInsensitive);
        return found.includes(this);
    }

    /**
     * Checks if this element matches the given selector CSS query in it's parent.
     *
     * @param selector CSS query
     * @param caseInsensitive
     * @return if this element matches the query
     */
    matchesInParent(selector, caseInsensitive = false) {
        if (!Functions.isset(this._parent))
            return false;

        const found = this._parent.findInChildren(selector, null, caseInsensitive);
        return found.includes(this);
    }

    /**
     * Checks if this element matches the given selector CSS query and it's the only result.
     *
     * @param selector CSS query
     * @param caseInsensitive
     * @return if this element matches the query
     */
    matchesUnique(selector, caseInsensitive = false) {
        if (!Functions.isset(this._dom))
            return false;

        const found = this._dom.find(selector, null, caseInsensitive);
        return found.length === 1 && found[0] === this;
    }

    dataAttributes() {
        const out = new Map();
        for (const [a, v] of this.attr) {
            if (a.toLowerCase().startsWith('data-')) {
                out.set(a, v);
            }
        }
        return out;
    }

    #firstDataAttributeSortByID() {
        const input = this.dataAttributes();
        if (input.size === 0)
            return null;

        let first = null;
        for (const [a, v] of input) {
            if (first === null)
                first = a;

            if (a.indexOf('id') !== -1)
                return a;
        }

        return first;
    }

    /**
     * Get a CSS selector that will uniquely select this element.
     * <p>
     * If the element has an ID and {@code supportedAttrs} contains {@code id}, returns #id;
     * If the element has an attribute which exists on {@code supportedAttrs}, returns tag[attr=value];
     * If the element has a data-attribute and {@code supportedAttrs} contains data,
     *  returns tag[data-attr=value] or tag[data-attr] in some cases;
     * Otherwise returns the parent (if any) CSS selector, followed by {@literal '>'},
     * followed by a unique selector for the element (tag.class.class:nth-child(n)).
     * </p>
     *
     * @return the CSS Path that can be used to retrieve the element in a selector.
     */
    cssSelector(forceCheck = true,
                supportedAttrs = ['data', 'class', 'id']) {

        if (Functions.isset(supportedAttrs) && supportedAttrs.includes('id') && this.id().length > 0) {
            // prefer to return the ID - but check that it's actually unique first!
            let idSel = "#" + this.id();
            if (Functions.isset(this._dom)) {
                if (this.matchesUnique(idSel)) { // otherwise, continue to check tag#id
                    return idSel;
                } else {
                    if (this.matchesUnique(this.tag + idSel)) // otherwise, continue to the nth-child impl
                        return this.tag + idSel;
                }
            } else {
                return idSel; // no owner doc, return the ID selector
            }
        }

        // Translate HTML namespace ns:tag to CSS namespace syntax ns|tag
        let selector = this.tag.replace(':', '|');

        const caseInsensitive = Functions.isset(this._dom) ? this._dom.caseInsensitive : true;

        // meta is a special tag, get first attr as target
        let pass = false;
        if (this.tag.toLowerCase() === 'meta' && Functions.isset(this.attr) && this.attr.size > 0) {
            const data_attr = this.attr.keys().next().value;
            selector += '[' + data_attr + '=' + this.attr.get(data_attr) + ']';
            pass = true;
        }

        if (!pass && Functions.isset(supportedAttrs)) {
            for (const attr_name of supportedAttrs) {
                let attr = caseInsensitive ? attr_name.toLowerCase() : attr_name;
                let attr_to_check = null;

                if (attr.toLowerCase() === 'class') {
                    const classes = !Functions.empty(this.class) ?
                        String(this.class).split(' ').join('.') : '';

                    if (classes.length > 0) {
                        selector += '.' + classes;
                        break;
                    }

                } else if (attr.toLowerCase() === 'data') {
                    const data_attr = this.#firstDataAttributeSortByID();

                    if (Functions.isset(data_attr)) {
                        if (String(data_attr).toLowerCase() !== 'data-attrid'
                            && Functions.isset(this._parent)) {
                            const pre = selector + '[' + data_attr + ']';
                            if (this.matchesUnique(pre)) {
                                selector = pre;
                                break;
                            }
                        }

                        attr_to_check = data_attr;
                    }
                } else if (this.attr.has(attr)) {
                    attr_to_check = attr;
                }

                if (Functions.isset(attr_to_check)) {
                    if (Functions.isset(this._dom)) {
                        const pre = selector + '[' + attr_to_check + '=' + this.attr.get(attr_to_check) + ']';
                        if (this.matchesUnique(pre)) {
                            selector = pre;
                            break;
                        }
                    } else {
                        selector += '[' + attr_to_check + '=' + this.attr.get(attr_to_check) + ']';
                        break;
                    }
                }
            }
        }

        if (forceCheck && Functions.isset(this._dom)) {
            if (this._dom.find(selector, 0) === this) {
                return selector;
            }
        }

        if (!Functions.isset(this._parent) || this._parent.nodeType === HTMLNode.TYPE_ROOT) {
            // don't add Document to selector, as will always have a html node
            return selector;
        }

        const found = this._parent.find(selector);
        selector = " > " + selector;
        if (found.length > 1 && found.indexOf(this) > 0) {
            selector += ":nth-child(" + found.indexOf(this) + ")";
        }

        return this._parent.cssSelector(forceCheck, supportedAttrs) + selector;
    }

    /**
     * Get the value of a form element (input, textarea, etc).
     * @return the value of the form element, or empty string if not set.
     */
    val() {
        if (this.tag.toLowerCase() === "textarea")
            return this.innerText();
        else
            return this.getAttribute("value");
    }

    /**
     * Get the list index of this node in its node sibling list. E.g. if this is the first node
     * sibling, returns 0.
     * @return position in node sibling list
     */
    siblingIndex() {
        if (!Functions.isset(this._parent))
            return 0;
        return Math.max(this._parent.nodes.indexOf(this), 0);
    }

    /**
     * Get the list index of this node in the document list. E.g. if this is the first node
     * sibling, returns 0.
     * @return position in node sibling list
     */
    rootIndex() {
        return Math.max(this._dom.nodes.indexOf(this), 0);
    }

    /**
     * Returns array of elements whose plainText equals the target.
     */
    matchesPlainText(plainText) {
        return this.children.filter(n => n.plainText().trim() === plainText.trim())
    }

    /**
     * Returns array of elements whose innerText equals the target.
     */
    matchesInnerText(innerText) {
        return this.children.filter(n => n.innerText() === innerText)
    }

    /**
     * Returns array of elements whose outerText equals the target.
     */
    matchesOuterText(outerText) {
        return this.children.filter(n => n.outerText() === outerText)
    }

    /**
     * Returns array of elements whose tag name equals the target.
     */
    matchesTagName(tag) {
        return this.children.filter(n => n.tag.toLowerCase() === tag.toLowerCase())
    }

    static _is_block_element(node) {
        const blockElements = ['p',
            'h1', 'h2', 'h3', 'h4', 'h5', 'h6',
            'ol', 'ul',
            'pre',
            'address',
            'blockquote',
            'dl',
            'div',
            'fieldset',
            'form',
            'hr',
            'noscript',
            'table'
        ];
        return blockElements.includes(node.tag.toLowerCase());
    }

    /**
     * Returns true if the provided element is an inline level element
     * @link https://www.w3resource.com/html/HTML-block-level-and-inline-elements.php
     */
    static _is_inline_element(node) {
        const inlineElements = [
            'b', 'big', 'i', 'small', 'tt',
            'abbr', 'acronym', 'cite', 'code', 'dfn', 'em', 'kbd', 'strong', 'samp', 'var',
            'a', 'bdo', 'br', 'img', 'map', 'object', 'q', 'script', 'span', 'sub', 'sup',
            'button', 'input', 'label', 'select', 'textarea'
        ];
        return inlineElements.includes(node.tag.toLowerCase());
    }

    static #is_utf8(str) {
        let c = 0, b = 0;
        let bits = 0;
        let len = str.length;

        for (let i = 0; i < len; i++) {
            c = str[i].charCodeAt(0);
            if (c > 128) {
                if ((c >= 254)) {
                    return false;
                } else if (c >= 252) {
                    bits = 6;
                } else if (c >= 248) {
                    bits = 5;
                } else if (c >= 240) {
                    bits = 4;
                } else if (c >= 224) {
                    bits = 3;
                } else if (c >= 192) {
                    bits = 2;
                } else {
                    return false;
                }

                if ((i + bits) > len) {
                    return false;
                }

                while (bits > 1) {
                    i++;
                    b = str[i].charCodeAt(0);
                    if (b < 128 || b > 191) {
                        return false;
                    }
                    bits--;
                }
            }
        }
        return true;
    }
}

module.exports = HTMLNode;