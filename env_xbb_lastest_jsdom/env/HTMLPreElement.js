// HTMLPreElement对象
bodavm.memory.globalobj['HTMLPreElement'] = function HTMLPreElement(){if (!(this instanceof HTMLPreElement)){return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor")};this._boisinit=bodavm.config.isinit}
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['HTMLPreElement'], "HTMLPreElement");
bodavm.memory.globalobj['HTMLPreElement'].prototype.__proto__=bodavm.memory.globalobj['HTMLElement'].prototype;
bodavm.memory.globalobj['HTMLPreElement'].__proto__=bodavm.memory.globalobj['HTMLElement'];
bodavm.toolsFunc.defineProperty('HTMLPreElement', "width", {configurable:true, enumerable:true, get:function width (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLPreElement'].prototype, "HTMLPreElement", "width_get", arguments)}, set:function width (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLPreElement'].prototype, "HTMLPreElement", "width_set", arguments)}},'prototype');
