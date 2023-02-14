JSSoupSelector
=============================
This is a simple CSS selector written in pure JavaScript code. It aims to provide CSS selector functions to [JSSoup](https://github.com/chishui/JSSoup).
But it can do more as it has flexibility to support other dom packages as well (e.g. jsdom).

[![unit-tests](https://github.com/chishui/JSSoupSelector/workflows/unit-tests/badge.svg)](https://github.com/chishui/JSSoupSelector/actions)
[![npm version](https://badge.fury.io/js/jssoup-selector.svg)](https://badge.fury.io/js/jssoup-selector)
[![NPM](https://img.shields.io/npm/dm/jssoup-selector.svg)](https://www.npmjs.com/package/jssoup-selector)

# Supported CSS Selectors
JSSoupSelector has implemented most basic selectors:
+ Universal Selector `*`
+ Type Selector `div`
+ Class Selector `.class`
+ ID Selector `#id`
+ Attribute Selector `[title]`
+ Descendant Combinator `body div`
+ Child Combinator `body > div`
+ Next Sibling Combinator `body + div`
+ Subsequent Sibling Combinator `body ~ div`
+ Groups of Selectors `div.class, span#id, p[title]`

# Install
```
$ npm install jssoup-selector 
```

# usage
### Import
```javascript
//react-native
import SoupSelector from 'jssoup'; 
// nodejs
var SoupSelector = require('jssoup-selector').default;
```
### select
JSSoupSelector requires a dom adaptor class as input so that it can adapt dom element access functions to dom package specific functions.
Now it only supports JSSoup adapter.
```javascript
var selector = new SoupSelector(new JSSoupAdapter());
var soup = new JSSoup(data);
var elements = selector.select("*", soup)
```

