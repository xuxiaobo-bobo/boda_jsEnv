// HTMLUListElement对象
bodavm.memory.globalobj['HTMLUListElement'] = function HTMLUListElement(){return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor")}
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['HTMLUListElement'], "HTMLUListElement");
bodavm.memory.globalobj['HTMLUListElement'].prototype.__proto__=bodavm.memory.globalobj['HTMLElement'].prototype;
bodavm.memory.globalobj['HTMLUListElement'].__proto__=bodavm.memory.globalobj['HTMLElement'];
bodavm.toolsFunc.defineProperty('HTMLUListElement', "compact", {configurable:true, enumerable:true, get:function compact (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLUListElement'].prototype, "HTMLUListElement", "compact_get", arguments)}, set:function compact (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLUListElement'].prototype, "HTMLUListElement", "compact_set", arguments)}},'prototype');
bodavm.toolsFunc.defineProperty('HTMLUListElement', "type", {configurable:true, enumerable:true, get:function type (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLUListElement'].prototype, "HTMLUListElement", "type_get", arguments)}, set:function type (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLUListElement'].prototype, "HTMLUListElement", "type_set", arguments)}},'prototype');
