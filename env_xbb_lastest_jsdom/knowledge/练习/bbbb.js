a = function () {

};
console.log(a.prototype.toString());
Object.defineProperty(a.prototype, Symbol.toStringTag, {
    "value": "HTMLAllCollection",
    "writable": false,
    "enumerable": false,
    "configurable": true
})
console.log(a.prototype.toString());


var bbb = {};
console.log(bbb.toString());
ccc = {};
ccc.__proto__ = bbb
Object.defineProperty(ccc, Symbol.toStringTag, {
    "value": "HTMLAllCollectionccc",
    "writable": false,
    "enumerable": false,
    "configurable": true
})

Object.defineProperty(bbb, Symbol.toStringTag, {
    "value": "HTMLAllCollectionbbb",
    "writable": false,
    "enumerable": false,
    "configurable": true
})


console.log(ccc.toString());