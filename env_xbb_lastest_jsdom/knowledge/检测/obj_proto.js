
function test_obj_proto() {
    try {
        var bobo__ = {}
        bobo__.__proto__ = location
        bobo__.href
        console.log(`bobo__={};bobo__.__proto__=location 可以被检测`);

    } catch {
        // endsign += 'E'
    }

    try {
        var bobo__2 = {}
        bobo__2.__proto__ = Document.prototype
        bobo__2.activeElement
        console.log(`bobo__2={};bobo__2.__proto__=Document.prototype 可以被检测`);

    } catch {
        // endsign += 'F'
    }

    try {
        var cc={}
        cc.__proto__=Storage.prototype
        cc.setItem('name',123)
        console.log(`cc={};cc.__proto__= Storage.prototype可以被检测`);

    } catch {
        // endsign += 'E'
    }

}

test_obj_proto()