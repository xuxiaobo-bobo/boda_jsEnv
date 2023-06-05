function test_unscopables() {
    if (window.Element.prototype[Symbol.unscopables].after) {
    } else {
        console.log(`window.Element.prototype[Symbol.unscopables].after 可以被检测`);
    }

}

test_unscopables()
