// HTMLTitleElement对象
bodavm.memory.globalobj['HTMLTitleElement'] = function HTMLTitleElement(){if (!(this instanceof HTMLTitleElement)){return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor")};this._boisinit=bodavm.config.isinit}
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['HTMLTitleElement'], "HTMLTitleElement");
bodavm.memory.globalobj['HTMLTitleElement'].prototype.__proto__=bodavm.memory.globalobj['HTMLElement'].prototype;
bodavm.memory.globalobj['HTMLTitleElement'].__proto__=bodavm.memory.globalobj['HTMLElement'];
bodavm.toolsFunc.defineProperty('HTMLTitleElement', "text", {configurable:true, enumerable:true, get:function text (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLTitleElement'].prototype, "HTMLTitleElement", "text_get", arguments)}, set:function text (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLTitleElement'].prototype, "HTMLTitleElement", "text_set", arguments)}},'prototype');
