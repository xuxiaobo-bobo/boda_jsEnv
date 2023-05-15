// CDATASection对象
bodavm.memory.globalobj['CDATASection'] = function CDATASection(){if (!(this instanceof CDATASection)){return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor")};this._boisinit=bodavm.config.isinit}
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['CDATASection'], "CDATASection");
bodavm.memory.globalobj['CDATASection'].prototype.__proto__=bodavm.memory.globalobj['Text'].prototype;
bodavm.memory.globalobj['CDATASection'].__proto__=bodavm.memory.globalobj['Text'];
