// HTMLParagraphElement对象
bodavm.memory.globalobj['HTMLParagraphElement'] = function HTMLParagraphElement(){return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor")}
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['HTMLParagraphElement'], "HTMLParagraphElement");
bodavm.memory.globalobj['HTMLParagraphElement'].prototype.__proto__=bodavm.memory.globalobj['HTMLElement'].prototype;
bodavm.memory.globalobj['HTMLParagraphElement'].__proto__=bodavm.memory.globalobj['HTMLElement'];
bodavm.toolsFunc.defineProperty('HTMLParagraphElement', "align", {configurable:true, enumerable:true, get:function align (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLParagraphElement'].prototype, "HTMLParagraphElement", "align_get", arguments)}, set:function align (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLParagraphElement'].prototype, "HTMLParagraphElement", "align_set", arguments)}},'prototype');
