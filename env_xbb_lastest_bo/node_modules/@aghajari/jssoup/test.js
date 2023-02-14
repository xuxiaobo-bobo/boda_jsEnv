const jssoup = require('./jssoup');

// -------------- LOGGER --------------
const util = require('util');
const log = function (name = null, value = null, singleLine = true) {
    console.log(new logger(name, value, singleLine));
};

class logger {
    constructor(name, value, singleLine) {
        this.name = name;
        this.value = value;
        this.singleLine = singleLine;
    }

    [util.inspect.custom](depth, opts) {
        if (this.name === null)
            return opts.stylize('------------------------------------', 'special');

        if (this.value instanceof jssoup.HTMLNode) {
            return opts.stylize(this.name + ": ", 'special')
                + opts.stylize(this.value.plainText(), 'null') + '\n'
                + this.value._debug(opts, '', this.singleLine, this.singleLine) + '\n';
        } else {
            return opts.stylize(this.name + ": ", 'special') + this.value;
        }
    };
}

// -------------- HTTP(S) OPTIONS --------------

const options = () => {
    return {
        headers: {
            'User-Agent': "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) " +
                "AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36",
        }
    };
};

// -------------- TEST --------------

test();

async function test() {
    testHtml();
    await testGoogle();
    await testMeta();
}

function testHtml() {
    const html = `<html>
<head>
    <title>JSSoup - node.js</title>
</head>

<body>
    <h1>This is a test</h1>
    <h2 class="test1">Hello world!</h2>
    <h2 class="test2">Hello node.js!</h2>
    <h2 class="test2">Hello js!</h2>
    <h2 id="id1">test id1</h2>
    <custom>
        <title>Custom Title</title>
    </custom>
    <!-- this is a comment -->
    <test data-type="attr_test">Got it by data-type!</test>
</body>

</html>`;

    const doc = jssoup.load(html);
    log();
    log("title", doc.titleEl());
    log("h1", doc.getElementByTagName('h1'));
    log("h2.test1", doc.findFirst('h2.test1'));
    log("h2.test2 (1)", doc.find('h2.test2', 0));
    log("h2.test2 (2)", doc.find('h2.test2', 1));
    log("#id1", doc.findFirst('#id1'));
    log("custom > title", doc.findFirst('custom > title', 0));
    log("comment", doc.comments()[0]);
    log("test data-type", doc.getElementByAttr('data-type'));
}

async function testGoogle() {
    const doc = await jssoup.loadFromURL("https://www.google.com/search?q=Hello+lyrics", options());

    log();
    log('track', doc.getElementByAttr("data-attrid", `"title"`), false); // h2[data-attrid="title"]
    log('artist', doc.getElementByAttr("data-attrid", `"subtitle"`), false); // div[data-attrid="subtitle"]
    log('lyrics', doc.getElementByAttr("data-lyricid").plainText()); // div[data-lyricid]
}

async function testMeta() {
    const doc = await jssoup.loadFromURL("https://github.com/Aghajari", options());

    log();
    log('title', doc.title());
    log('description', doc.description());
    log('image', doc.image());
}