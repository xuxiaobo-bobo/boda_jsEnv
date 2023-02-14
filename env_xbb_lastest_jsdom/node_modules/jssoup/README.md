JSSoup
=============================
I'm a fan of Python library BeautifulSoup. It's feature-rich and very easy to use. But when I am working on a small react-native project, and I tried to find a HTML parser library 
like BeautifulSoup, I failed.  
So I want to write a HTML parser library which can be so easy to use just like BeautifulSoup in Javascript.  
**JSSoup** uses [tautologistics/node-htmlparser](https://github.com/tautologistics/node-htmlparser) as HTML dom parser, 
and creates a series of BeautifulSoup like API on top of it.  
JSSoup supports both **node** and **react-native**.  

[![Build Status](https://travis-ci.org/chishui/JSSoup.svg?branch=master)](https://travis-ci.org/chishui/JSSoup)
[![npm version](https://badge.fury.io/js/jssoup.svg)](https://badge.fury.io/js/jssoup)
[![NPM](https://img.shields.io/npm/dm/jssoup.svg)](https://www.npmjs.com/package/jssoup)


# Naming Style
JSSoup tries to use the same interfaces as BeautifulSoup so BeautifulSoup user can use JSSoup seamlessly. 
However, JSSoup uses Javascript's camelCase naming style instead of Python's underscore naming style.
Such as `find_all()` in BeautifulSoup is replaced as `findAll()`.

# Install
```
$ npm install jssoup 
```

# How to use JSSoup
### Import
```javascript
//react-native
import JSSoup from 'jssoup'; 
// nodejs
var JSSoup = require('jssoup').default;
```
### Make Soup
```javascript
var soup = new JSSoup('<html><head>hello</head></html>');
```
> The text element only contains whitespace will be ignored by default. To disable this feature, set second parameter 
of JSSoup to false. This parameter is "ignoreWhitespace" and will be passed into htmlparser.
```javascript
var soup = new JSSoup('<html><head>hello</head></html>', false);
```

### Name
```javascript
var soup = new JSSoup('<html><head>hello</head></html>');
var tag = soup.find('head');
tag.name
// 'head'
tag.name = 'span'
console.log(tag)
//<span>hello</span>
```
### Attributes
```javascript
var soup = new JSSoup('<tag id="hi" class="banner">hello</tag>');
var tag = soup.nextElement;
tag.attrs
// {id: 'hi', class: 'banner'} 
tag.attrs.id = 'test';
console.log(tag)
// <tag id="test" class="banner">hello</tag>
```

### Navigation
#### .previousElement, .nextElement
```javascript
var data = `
<div>
  <a>1</a>
  <b>2</b>
  <c>3</c>
</div>
`
var soup = new JSSoup(data);
var div = soup.nextElement;
var b = div.nextElement.nextElement;
// b.string: '2'
var a = b.previousElement;
// a.string: '1'
```
#### .previousSibling, .nextSibling
```javascript
var soup = new JSSoup(data);
var div = soup.nextElement;
var a = div.nextElement;
var b = a.nextSibling;
var c = b.nextSibling;
c.nextSibling == undefined;
```
#### .previousSiblings, .nextSiblings
```javascript
var soup = new JSSoup(data);
var a = soup.find("a");
a.nextSiblings
// [<b>2</b>, <c>3</c>]
var c = soup.find("c");
c.previousSiblings
// [<a>1</a>, <b>2</b>]
```
#### .contents
```javascript
div.contents
// [<a>1</a>, <b>2</b>, <c>3</c>]
```
#### .descendants
```javascript
div.descendants
// [<a>1</a>, 1, <b>2</b>, 2, <c>3</c>, 3]
```
#### .parent
```javascript
div.parent == soup
```
### Edit
#### .extract()
```javascript
b.extract();
div.contents
// [<a>1</a>, <c>3</c>]
```
#### .append()
```javascript
b.extract();
div.append(b)
div.contents
// [<a>1</a>, <c>3</c>, <b>2</b>]
```
#### .insert(position, new Element)
```javascript
d.prettify('', '')
// <d>4</d>
div.insert(1, d)
div.contents
// [<a>1</a>, <d>4</d>, <b>2</b>, <c>3</c>]
```
#### .replaceWith(new Element)
```javascript
d.prettify('', '')
// <d>4</d>
b.replaceWith(d)
div.contents
// [<a>1</a>, <d>4</d>, <c>3</c>]

c.string.replaceWith('new')
div.contents
// [<a>1</a>, <d>4</d>, <c>new</c>]
```

### Search
#### .findAll()
```javascript
var data = `
<div>
  <div class="h1"></div>
  <a>hello</a>
</div>
`
var soup = new JSSoup(data);
soup.findAll('a')
// [<a>hello</a>]
soup.findAll('div', 'h1')
// [<div class="h1"></div>]
```
#### .find()
```javascript
var data = `
<div>
  <p> hello </p>
  <p> world </p>
</div>
`
var soup = new JSSoup(data);
soup.find('p')
// <p> hello </p>
```
#### .findNextSibling()
```javascript
var data = `
<div>
  <span> test </span>
  <div> div </div>
  <p> hello </p>
  <p> world </p>
</div>
`
var soup = new JSSoup(data);
var span = soup.find('span');
span.findNextSibling('p')
// <p> hello </p>
```
#### .findNextSiblings()
```javascript
var data = `
<div>
  <span> test </span>
  <div> div </div>
  <p> hello </p>
  <p> world </p>
</div>
`
var soup = new JSSoup(data);
var span = soup.find('span');
span.findNextSiblings('p')
// <p> hello </p>
// <p> world </p>
```
#### .findPreviousSibling()
```javascript
var data = `
<div>
  <p> hello </p>
  <p> world </p>
  <div> div </div>
  <span> test </span>
</div>
`
var soup = new JSSoup(data);
var span = soup.find('span');
span.findPreviousSibling('p')
// <p> world </p>
```
#### .findPreviousSiblings()
```javascript
var data = `
<div>
  <p> hello </p>
  <p> world </p>
  <div> div </div>
  <span> test </span>
</div>
`
var soup = new JSSoup(data);
var span = soup.find('span');
span.findPreviousSiblings('p')
// <p> hello </p>
// <p> world </p>
```
### Output
#### .prettify()
```javascript
var soup = new JSSoup('<html><head>hello</head></html>');
soup.prettify()
// <html>
//  <head>
//   hello
//  </head>
// </html>
```
#### .getText(), .text
```javascript
div.text
// '123'
div.getText('|')
// '1|2|3'
```
#### .string
```javascript
b.string == '2';
var soup = new JSSoup('<html><head>hello</head></html>');
soup.string == 'hello';
```

# Run Test
```
npm test
```
# Status
There's a lot of work need to be done.

