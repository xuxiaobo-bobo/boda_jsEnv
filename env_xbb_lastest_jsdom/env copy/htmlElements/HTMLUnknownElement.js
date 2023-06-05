// HTMLUnknownElement对象
bodavm.memory.globalobj['HTMLUnknownElement'] = function HTMLUnknownElement(){return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor")}
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['HTMLUnknownElement'], "HTMLUnknownElement");
bodavm.memory.globalobj['HTMLUnknownElement'].prototype.__proto__=bodavm.memory.globalobj['HTMLElement'].prototype;
bodavm.memory.globalobj['HTMLUnknownElement'].__proto__=bodavm.memory.globalobj['HTMLElement'];
