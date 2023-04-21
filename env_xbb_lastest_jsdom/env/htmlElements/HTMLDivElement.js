// HTMLDivElement对象
bodavm.memory.globalobj['HTMLDivElement'] = function HTMLDivElement(){this._boisinit=bodavm.config.isinit;return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor")}
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['HTMLDivElement'], "HTMLDivElement");
bodavm.memory.globalobj['HTMLDivElement'].prototype.__proto__=bodavm.memory.globalobj['HTMLElement'].prototype;
bodavm.memory.globalobj['HTMLDivElement'].__proto__=bodavm.memory.globalobj['HTMLElement'];
bodavm.toolsFunc.defineProperty('HTMLDivElement', "align", {configurable:true, enumerable:true, get:function align (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLDivElement'].prototype, "HTMLDivElement", "align_get", arguments)}, set:function align (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLDivElement'].prototype, "HTMLDivElement", "align_set", arguments)}},'prototype');
