
let test__ = function() {}
Object.defineProperty(this, test__, {
    configurable: true,
    enumerable: true,
    writable: true,
})
if (test__ + '' == 'function() {}') {
} else {
    console.log(`test_this  可以被检测`);
}

