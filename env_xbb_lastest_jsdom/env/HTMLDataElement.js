// HTMLDataElement对象
bodavm.memory.globalobj['HTMLDataElement'] = function HTMLDataElement(){if (!(this instanceof HTMLDataElement)){return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor")};this._boisinit=bodavm.config.isinit}
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['HTMLDataElement'], "HTMLDataElement");
bodavm.memory.globalobj['HTMLDataElement'].prototype.__proto__=bodavm.memory.globalobj['HTMLElement'].prototype;
bodavm.memory.globalobj['HTMLDataElement'].__proto__=bodavm.memory.globalobj['HTMLElement'];
bodavm.toolsFunc.defineProperty('HTMLDataElement', "value", {configurable:true, enumerable:true, get:function value (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLDataElement'].prototype, "HTMLDataElement", "value_get", arguments)}, set:function value (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLDataElement'].prototype, "HTMLDataElement", "value_set", arguments)}},'prototype');
