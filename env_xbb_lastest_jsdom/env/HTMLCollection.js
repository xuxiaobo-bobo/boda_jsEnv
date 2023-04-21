// HTMLCollection对象
bodavm.memory.globalobj['HTMLCollection'] = function HTMLCollection(){this._boisinit=bodavm.config.isinit;return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor")}
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['HTMLCollection'], "HTMLCollection");
bodavm.toolsFunc.defineProperty('HTMLCollection', "length", {configurable:true, enumerable:true, get:function length (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLCollection'].prototype, "HTMLCollection", "length_get", arguments)}, set:undefined},'prototype');
bodavm.toolsFunc.defineProperty('HTMLCollection', "item", {configurable:true, enumerable:true, writable:true, value:function item (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLCollection'].prototype, "HTMLCollection", "item", arguments)}},'prototype');
bodavm.toolsFunc.defineProperty('HTMLCollection', "namedItem", {configurable:true, enumerable:true, writable:true, value:function namedItem (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLCollection'].prototype, "HTMLCollection", "namedItem", arguments)}},'prototype');
