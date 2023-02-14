# <img src="./assets/logo.png" width="28" height="28"> XPath Parser

[![Package](https://img.shields.io/npm/v/@remotemerge/xpath-parser?logo=npm)](https://www.npmjs.com/package/@remotemerge/xpath-parser)
![Build](https://img.shields.io/github/workflow/status/remotemerge/xpath-parser/Production?logo=github)
![Downloads](https://img.shields.io/npm/dt/@remotemerge/xpath-parser)
![License](https://img.shields.io/npm/l/@remotemerge/xpath-parser)

XPath Parser is a modern JavaScript utility to parse XPath expressions; built for web scraping in a JavaScript
environment. It's open source, modern, lightweight and fast. You can easily integrate it into new or existing web
crawlers, browser extensions, etc.

## Install

```bash
# using NPM
npm i @remotemerge/xpath-parser
# using Yarn
yarn add @remotemerge/xpath-parser
```

## Usage

Import the XPathParser class in your project.

```javascript
import XPathParser from '@remotemerge/xpath-parser'
```

## Examples

The XPathParser constructor `XPathParser(html|DOM)` supports both DOM and HTML string, initialize as required.

```javascript
const parser = new XPathParser('<html>...</html>');
```

### Scrape First Match

This method evaluates the given expression and captures the first result. It is useful for scraping a single element
value like `title`, `price`, etc. from HTML pages.

```javascript
const result = parser.queryFirst('//span[@id="productTitle"]');
console.log(result);
```

Sample output:

```text
LETSCOM Fitness Tracker HR, Activity Tracker Watch with Heart Rate...
```

### Scrape All Matches

This method evaluates the given expression and captures all results. It is useful for scraping all URLs, all images, all
CSS classes, etc. from HTML pages.

```javascript
// scrape titles
const results = parser.queryList('//span[contains(@class, "zg-item")]/a/div');
console.log(results);
```

Sample output:

```javascript
['Cell Phone Stand,Angle Height Adjusta…', 'Selfie Ring Light with Tripod…', 'HOVAMP MFi Certified Nylon…', '...']
```

### Scrape multiple elements

This method loop through the given expressions and captures the first match of each expression. It is useful for
scraping full product information (`title`, `seller`, `price`, `rating`, etc.) from HTML pages. The keys are preserved
and the values are returned to the same keys.

```javascript
const result = parser.multiQuery({
  title: '//div[@id="ppd"]//span[@id="productTitle"]',
  seller: '//div[@id="ppd"]//a[@id="bylineInfo"]',
  price: '//div[@id="ppd"]//span[@id="priceblock_dealprice"]',
  rating: '//div[@id="ppd"]//span[@id="acrCustomerReviewText"]',
});
```

Sample output:

```text
{
    title: 'LETSCOM Fitness Tracker HR, Activity Tracker Watch with Heart Rate Monitor...',
    seller: 'LETSCOM',
    price: '$20.39',
    rating: '1,489 ratings',
}
```

### Scrape with SubQueries

This method captures the `root` element and runs queries within its namespace. It is useful for scraping multiple
products and full information about each product. For example, there can be 10 products on a page and each product
has (`title`, `url`, `image`, `price`, etc.). This method also supports `pagination` parameter. The keys are preserved
and the values are returned to the same keys. Here `pagination` is optional parameter.

```javascript
const result = parser.subQuery({
  root: '//span[contains(@class, "zg-item")]',
  pagination: '//ul/li/a[contains(text(), "Next")]/@href',
  queries: {
    title: 'a/div/@title',
    url: 'a/@href',
    image: 'a/span/div/img/@src',
    price: './/span[contains(@class, "a-color-price")]',
  }
});
console.log(result);
```

Sample output:

```text
{
  paginationUrl: 'https://www.example.com/gp/new-releases/wireless/reTF8&pg=2',
  results: [
    {
      title: 'Cell Phone Stand,Angle Height Adjustable Stab/Kindle/Tablet,4-10inch',
      url: '/Adjustable-LISEN-Aluminum-Compatible-4-10&refRID=H1HWDWERK8YCRN76ER1T',
      image: 'https://images-na.ssl-images-example.com/images/I/61UL200_SR200,200_.jpg',
      price: '$16.99'
    },
    {
      title: 'Selfie Ring Light with Tripod Stand and Pheaming Photo Photography Vlogging Video',
      url: '/Selfie-Lighting-Steaming-Photography-Vlogging/dp/B081SV&K8YCRN76ER1T',
      image: 'https://images-na.ssl-images-example.com/images/I/717L200_SR200,200_.jpg',
      price: '$46.99'
    },
    {
      // ...
    }
  ]
}
```

### Wait for Element

This method waits until the element (matches by expression) exists on a page. The first parameter `expression` is XPath
expression to match and the second parameter `maxSeconds` is the maximum time to wait in seconds (default to 10 seconds)
.

```javascript
parser.waitXPath('//span[contains(@class, "a-color-price")]/span')
  .then((response) => {
    // expression match and element exists
  }).catch((error) => {
    // match nothing and timeout
  });
```

## Contribution

Welcome the community for contribution. Please make a PR request for bug fixes, enhancements, new features, etc.

## Disclaimer

All the XPath expressions above are tested on Amazon [product listing] and related pages for educational purposes only.
The icons are included from [flaticon] website.

[product listing]: https://www.amazon.com/gp/new-releases/wireless

[flaticon]: https://www.flaticon.com