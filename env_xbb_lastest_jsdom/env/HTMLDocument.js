// HTMLDocument对象
bodavm.memory.globalobj['HTMLDocument'] = function HTMLDocument(){return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor")}
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['HTMLDocument'], "HTMLDocument");
bodavm.memory.globalobj['HTMLDocument'].prototype.__proto__=bodavm.memory.globalobj['Document'].prototype;
bodavm.memory.globalobj['HTMLDocument'].__proto__=bodavm.memory.globalobj['Document'];

// document= {}


// document对象
bodavm.memory.globalobj['document'] = new bodavm.memory.globalobj['Document']()
bodavm.memory.globalobj['document'].__proto__=bodavm.memory.globalobj['HTMLDocument'].prototype;
bodavm.toolsFunc.defineProperty('document', "location", {configurable:false, enumerable:true, get:function location (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['document'], "document", "location_get", arguments)}, set:function location (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['document'], "document", "location_set", arguments)}});

