// CDATASection对象
bodavm.memory.globalobj['CDATASection'] = function CDATASection(){this._boisinit=bodavm.config.isinit;return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor")}
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['CDATASection'], "CDATASection");
bodavm.memory.globalobj['CDATASection'].prototype.__proto__=bodavm.memory.globalobj['Text'].prototype;
bodavm.memory.globalobj['CDATASection'].__proto__=bodavm.memory.globalobj['Text'];
