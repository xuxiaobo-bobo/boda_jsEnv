document = {};

var boallundefined=  new xtd;
document.all = boallundefined;


debugger;;;
function HTMLAllCollection() {
}
Object.defineProperty(HTMLAllCollection.prototype, Symbol.toStringTag, {
    value: 'HTMLAllCollection',
    configurable: false,
    writable: true,
    enumerable: true
})
document.all.__proto__ = HTMLAllCollection.prototype
console.log(document.all.toString() );



console.log(document.all  == undefined);
console.log(typeof(document.all)=='undefined')


console.log('all' in document ==true)




const { JSDOM } = require('jsdom');
const path = require('path');
const fs = require('fs');


let run_path = path.resolve(__dirname)

const html_code = fs.readFileSync(`${run_path}/rs6.html` , 'utf8');

const dom = new JSDOM(html_code);

tags = dom.window.document.getElementsByTagName("*")

for (let i = 0; i < tags.length; i++) {
    document.all[i] = tags[i]
}

console.log(document.all[0]);

console.log(document.all());


console.log(document.all == document.all);
Object.defineProperty(HTMLAllCollection.prototype, "item", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function item() {
    return "----";
  }
});
console.log(document.all(1));

console.log(Object.apply.call(document.all, null, [1]));


