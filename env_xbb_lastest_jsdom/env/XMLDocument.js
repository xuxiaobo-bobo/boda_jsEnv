// XMLDocument对象
bodavm.memory.globalobj['XMLDocument'] = function XMLDocument(){if (!(this instanceof XMLDocument)){return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor")};this._boisinit=bodavm.config.isinit}
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['XMLDocument'], "XMLDocument");
bodavm.memory.globalobj['XMLDocument'].prototype.__proto__=bodavm.memory.globalobj['Document'].prototype;
bodavm.memory.globalobj['XMLDocument'].__proto__=bodavm.memory.globalobj['Document'];
