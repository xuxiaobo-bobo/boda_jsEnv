# JSSoup
 **JSSoup** is a fast and reliable HTML DOM parser library for JavaScript, node.js based on [PHP: simplehtmldom](https://github.com/simplehtmldom/simplehtmldom) and [Java: Jsoup](https://github.com/jhy/jsoup)

[![Join the chat at https://gitter.im/Aghajari/community](https://badges.gitter.im/Aghajari/community.svg)](https://gitter.im/Aghajari/community?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

- Works with well-formed and broken HTML documents.
- Loads webpages and document strings.
- Supports CSS selectors.

# Usage

### Installation
```console
npm i @aghajari/jssoup
```

```js
const jssoup = require('@aghajari/jssoup');
```

Let's fetch music lyrics from [Google](https://www.google.com/search?q=Hello+lyrics) :
```js
const doc = await jssoup.loadFromURL("https://www.google.com/search?q=Hello+lyrics", options())

console.log('track: ' + doc.getElementByAttr("data-attrid", `"title"`).plainText())
console.log('artist' + doc.getElementByAttr("data-attrid", `"subtitle"`).plainText())
console.log('lyrics' + doc.getElementByAttr("data-lyricid").plainText())
```
Output:
```html
track: Hello
artist: Adele
lyrics: Hello, it's me 
I was wondering if after all these years you'd like to meet 
To go over everything 
They say that time's supposed to heal ya...
```

For finding the correct css selector for an specific element, you can use `HTMLNode.cssSelector()`,
- `cssSelector()`: Get a CSS selector that will uniquely select this element

Just try one example as a test and get the cssSelector for all.

```js
const doc = await jssoup.loadFromURL("https://www.google.com/search?q=someone+like+you+lyrics", options())
console.log(doc.matchesPlainText('Someone Like You')[0].cssSelector())
```
You will get `h2[data-attrid=title]` as the cssSelector, Now use this selector for all lyrics pages from Google.
```js
const doc = await jssoup.loadFromURL("https://www.google.com/search?q=million+years+ago+lyrics", options())
console.log(doc.findFirst('h2[data-attrid=title]').plainText()) // Output: Million Years Ago
```

- Let's try parsing document string :
```js
const html = `<html><head><title><b>JSSoup</b> - node.js</title></head></html>`
const title = jssoup.load(html).getElementByTagName('title') // or .findFirst('title');
console.log(title.plainText()) // JSSoup - node.js
console.log(title.innerText()) // <b>JSSoup</b> - node.js
console.log(title.outerText()) // <title><b>JSSoup</b> - node.js</title>
```
By the way, you can also use `const title = jssoup.load(html).titleEl()` for getting title.

- Let's use id for finding the element.
```js
const html = `<html><head><test id='element_id'>This is a test</test></head></html>`
const element = jssoup.load(html).getElementById('element_id') // or .findFirst('#element_id')
console.log(element) // This is a test
```

- Let's use className for finding the element.
```js
const html = `<html><head><test class='test header'>This is a test</test></head></html>`
const element = jssoup.load(html).getElementByClassName('test') // or .findFirst('.header')
console.log(element) // This is a test
```

- Let's use attribute for finding the element.
```js
const html = `<html><head><test data-type='test'>This is a test</test></head></html>`;
const element = jssoup.load(html).getElementByAttr('data-type'); // or .findFirst('[data-type]');
console.log(element); // This is a test
```

- Other ways to get the same element :
```js
const html = `<html><head><test class='tcls header' id='#element_id' data-type='test_attr'>This is a test</test></head></html>`
const doc = jssoup.load(html)
element = doc.getElementByTagName('test')
element = doc.findFirst('test')
element = doc.getElementByClass('tcls header')
element = doc.findFirst('test.tcls.header')
element = doc.getElementById('element_id')
element = doc.findFirst('test#element_id')
element = doc.getElementByAttr('data-type', 'test_attr')
element = doc.findFirst('test[data-type=test_attr]')
element = doc.findFirst('html > head > test:nth-child(0)')
```

- Get comments :
```js
const html = `<html>
<body>
    <h1>This is a test</h1>
    <!-- this is a comment -->
</body>
</html>`;

const doc = jssoup.load(html)
console.log(doc.comments()[0]) // this is a comment
```

- Get metta tags :
```js
const doc = await jssoup.loadFromURL("https://github.com/Aghajari", options())

console.log(doc.metaTags()) // Array of meta tags
console.log(doc.metaEl('description')) // meta element for description
console.log(doc.metaEl('image')) // meta content for image
/*
* metaEl() will search following tags:
* <meta name="NAME" content="bla bla"> (Standard)
* <meta property="og:NAME" content="bla bla">
* <meta itemprop="NAME" content="bla bla">
* <meta name="…NAME…" content="bla bla">
* <meta property="…NAME…" content="bla bla">
* <meta itemprop="…NAME…" content="bla bla">
*/ 
```

- LinkPreview inspired by [linkpreview](https://github.com/meyt/linkpreview) :
```js
const doc = await jssoup.loadFromURL("https://github.com/Aghajari", options())

console.log('title', doc.title()) // Aghajari - Overview
console.log('description', doc.description()) // Aghajari has ? repositories available. Follow their code on GitHub.
console.log('image', doc.image()) // https://avatars.githubusercontent.com/u/30867537?v=4?s=400
```

- Getting multiple tags :
```js
const html = `<html>
<body>
<tag1> This is test1 </tag1>
<tag2> This is test2 </tag2>
<tag3> This is test3 </tag3>
</body>
</html>`;

const doc = jssoup.load(html)
console.log(doc.find(['tag1', 'tag2', 'tag3'])) // Array of elements
```

- Limit output indexes :
```js
const html = `<html>
<body>
<tag> This is test0 </tag>
<tag> This is test1 </tag>
<tag> This is test2 </tag>
<tag> This is test3 </tag>
<tag> This is test4 </tag>
<tag> This is test5 </tag>
</body>
</html>`;

const doc = jssoup.load(html)
console.log(doc.find('tag', [2, -2])) // Array of elements (test2, test4)
```

- Get attribute from element:
```js
const html = `<html><head><test data-id='id1234'>This is a test</test></head></html>`;
const element = jssoup.load(html).getElementByAttr('data-id'); // or .findFirst('test[data-id]');
console.log(element.getAttribute('data-id')); // id1234
```

## Attribute Expression
- `=` : equal `[attr=value]`
- `!=` : unequal `[attr!=value]`
- `*=` : regex `[attr*=value]`
- `^=` : regex /^pattern/ `[attr^=value]`
- `$=` : regex /pattern$/ `[attr$=value]`
- `|=` : startsWith `[attr|=value]`
- `&=` : endsWith `[attr&=value]`
- `%=` : contains `[attr%=value]`
- `~=` : contains in list of words `[attr~=value]`<br>`<tag attr='blue red green'>` : `[attr~=red]`

## Author 
- **Amir Hossein Aghajari**

License
=======

    Copyright 2021 Amir Hossein Aghajari
    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.


<div align="center">
  <img width="64" alt="LCoders | AmirHosseinAghajari" src="https://user-images.githubusercontent.com/30867537/90538314-a0a79200-e193-11ea-8d90-0a3576e28a18.png">
  <br><a>Amir Hossein Aghajari</a> • <a href="mailto:amirhossein.aghajari.82@gmail.com">Email</a> • <a href="https://github.com/Aghajari">GitHub</a>
</div>
