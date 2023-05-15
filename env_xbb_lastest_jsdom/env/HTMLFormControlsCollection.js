// HTMLFormControlsCollection对象
bodavm.memory.globalobj['HTMLFormControlsCollection'] = function HTMLFormControlsCollection(){if (!(this instanceof HTMLFormControlsCollection)){return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor")};this._boisinit=bodavm.config.isinit}
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['HTMLFormControlsCollection'], "HTMLFormControlsCollection");
bodavm.memory.globalobj['HTMLFormControlsCollection'].prototype.__proto__=bodavm.memory.globalobj['HTMLCollection'].prototype;
bodavm.memory.globalobj['HTMLFormControlsCollection'].__proto__=bodavm.memory.globalobj['HTMLCollection'];
bodavm.toolsFunc.defineProperty('HTMLFormControlsCollection', "namedItem", {configurable:true, enumerable:true, writable:true, value:function namedItem (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLFormControlsCollection'].prototype, "HTMLFormControlsCollection", "namedItem", arguments)}},'prototype');
