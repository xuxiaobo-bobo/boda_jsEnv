js-xpath
--------
An XPath Parser/Generator for JavaScript using the Jison parser/generator.

Demo
----

See the [xpath.html](xpath.html) file for a very simple usage for parsing xpath expressions.

Usage
-----

First include the libraries and xpath.js and models.js files in your document. Then try the following to get started.

```js
var expr = "/some/xpath/expression"
var parsed = xpath.parse(expr);
var regenerated = parsed.toXPath();
```

For examples of supported expressions, see the [tests](test)!

`models.js` provides a default xpathmodels which does not support the hashtag preprocessor. If you want to support hashtags within xpaths, you can use:
```js
hashtagConfig = {
  isValidNamespace: function(namespace),
  hashtagToXPath: function(hashtag),
  toHashtag: function(expr)
}
xPathModels = XPathModels(hashtagConfig)
```

hashtags use the format `#namespace/arbitrarily/long/path` and do not support filtering

Tests
-----
- Open `test/tests.html` to run tests (must be serving all files in the library).
- Individual tests are found in `test/parserTests.js` and `test/generatorTests.js`


Known Limitations
-----------------
- Filter expressions are not supported due to a known bug in jison.
- See the failing tests for examples of expressions that are known not to work.

  
Code Structure
--------------

| File           | Content                                            |
| --------------:|:---------------------------------------------------|
| dist/          | contains a browser-ready build of the parser       |
| src/jison/     | contains the jison parser files.                   |
| src/lib/       | external libraries that the parser depends on.     |
| src/main.js    | the entry point for non-browser users.             |
| src/models.js  | the underlying models used in parsing.             |
| src/parser.js  | the jison built parser file, do not edit manually. |
| test/          | qunit tests for the parser and generator.          |
 
Build
------
This is built using [jison](http://zaach.github.com/jison/). To build the parser file yourself run:

`$ npm run build` - This will build both the distribution (`browserify`) package in dist/ and rebuild the Jison parser (`src/parser.js`) from the `src/jison/` files. 
`$ npm run jison` - Rebuild `parser.js` from the Jison specification files.
`$ npm run dist` - Rebuild the browser friendly distribution from the current source files.

For more information on jison see the jison project website at: http://zaach.github.com/jison/.
