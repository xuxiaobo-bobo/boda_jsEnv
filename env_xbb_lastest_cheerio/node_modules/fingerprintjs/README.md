# fingerprintjs

[![Build Status](https://travis-ci.org/Valve/fingerprintjs.png)](https://travis-ci.org/Valve/fingerprintjs)

Fast browser fingerprint library. Written in pure JavaScript, no dependencies. 
By default uses [Murmur hashing][murmur] and returns a 32bit integer number.
Hashing function can be easily replaced.
Feather weight: only **1.2** KB when gzipped.

## What is fingerprinting?

Fingerprinting is a technique, outlined in [the research by Electronic Frontier Foundation][research], of
anonymously identifying a web browser with accuracy of up to 94%. 


A browser is queried for its agent string, screen color depth, language,
installed plugins with supported mime types, timezone offset and other capabilities, 
such as local storage and session storage. Then these values are passed through a hashing function
to produce a fingerprint that gives weak guarantees of uniqueness.

No cookies are stored to identify a browser.

It's worth noting that a mobile share of browsers is much more uniform, so fingerprinting should be used
only as a supplementary identifying mechanism there.

[Read more](http://valve.github.io/blog/2013/07/14/anonymous-browser-fingerprinting/)
or
[discuss on reddit](http://redd.it/1ic6ew)


## Installation

### Bower

`
bower install fingerprint
`

### NPM

`
npm install fingerprintjs
`
_note the trailing *js* in the name_

### Ruby-on-Rails

If you're on Rails, add this to your Gemfile

`
gem 'fingerprintjs-rails'
`
and 

`bundle install`

After that you can add the file to sprockets:

`
//= require fingerprint
`

### Manual

Just copy the `fingerprint.js` file to your js directory.

## Usage

```javascript
var fingerprint = new Fingerprint().get();
```

If you want to use [canvas fingerprinting][canvas_research] pass the `canvas: true` option
```javascript
var fingerprint = new Fingerprint({canvas: true}).get();
```
According to the above Pixel Perfect research, it should further increase the accuracy of
fingerprinting.

*Note for IE9:* in order to use the canvas fingerprinting on IE9, the html must have a valid
html5 declaration:

```
<!DOCTYPE html>
```


If you want to use the screen resolution in calculating the fingerprint,  pass the `screen_resolution: true` option
```javascript
var fingerprint = new Fingerprint({screen_resolution: true}).get();
```

### Incognito mode (Chrome) or Private mode (Firefox)

Fingerprint generates identical output in regular and private modes, i.e. the reporting will identify a private mode browser as usual.


### IE 6, IE 7, IE 8, IE 9, IE 10, IE 11

Detecting the plugins information is very important in building the fingerprint.

In IE (surprise) it is not possible to just query the list of plugins, their mime types, etc.
Instead, one must use special probing code to detect each individual plugin, because
all plugins are ActiveX controls in IE.

If you want to query the IE plugins info to further diversify the fingerprinting process, pass the `ie_activex: true` option.

This will detect following plugins:

- Adobe Reader
- Adobe Flash Player
- Apple QuickTime
- Real player (all versions)
- Shockwave player
- Windows Media Player
- Microsoft Silverlight
- Skype ClickToCall

Note that this process is safe for other browsers, and the `ie_activex` options will be ignored.


### Using custom hashing function

``` javascript
var my_hasher = new function(value, seed){ return value.length % seed; };
var fingerprint = new Fingerprint({hasher: my_hasher}).get();
```
or pass the hashing function as is:

``` javascript
var my_hasher = new function(value, seed){ return value.length % seed; };
var fingerprint = new Fingerprint(my_hasher).get();
```

## Running specs

Running specs manually is just opening the `specs/test_runner.html`


Running specs from the command line or in CI requires [phantomjs][phantomjs] in your `PATH`

```
cd specs

phantomjs lib/phantom-jasmine/run_jasmine_test.coffee test_runner.html
```

The example is in `run.sh` file.

## Building

To build the project, run `grunt` command. This will run the jshint and uglify the code into `build/fingerprint.min.js`.
Running specs with grunt is not implemented but is on my todo list.

### Manual minification

To minify the file I recommend using [uglifyjs][uglifyjs](requires node.js)
If you don't have it installed, install it with:

```
npm -g install uglify-js
```

Then run the minification with:

```
uglifyjs fingerprint.js > fingerprint.min.js -mc
```

`-mc` tells uglifier to (m)angle and (c)ompress the input code.

If you don't have node.js installed on your machine, you can create a minified version of the library with
online services, such as [Google Closure compiler][closure]


### Licence

This code is [MIT][mit] licenced:

Copyright (c) 2013 Valentin Vasilyev

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

[mit]: http://www.opensource.org/licenses/mit-license.php
[murmur]: http://en.wikipedia.org/wiki/MurmurHash
[research]: https://panopticlick.eff.org/browser-uniqueness.pdf
[phantomjs]: http://phantomjs.org/
[uglifyjs]: https://github.com/mishoo/UglifyJS
[closure]: http://closure-compiler.appspot.com
[canvas_research]: http://cseweb.ucsd.edu/~hovav/dist/canvas.pdf
