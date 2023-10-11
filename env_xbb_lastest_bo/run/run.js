function foo(){
        console.log('aaaa',this.a);
    }
    var a=2;
    var o={a: 3, foo: foo };
    var p= { a: 4 };
    o.foo();// 3
    (o.foo = o.foo)()