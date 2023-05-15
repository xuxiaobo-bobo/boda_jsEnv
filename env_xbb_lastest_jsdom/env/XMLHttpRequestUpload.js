// XMLHttpRequestUpload对象
bodavm.memory.globalobj['XMLHttpRequestUpload'] = function XMLHttpRequestUpload(){if (!(this instanceof XMLHttpRequestUpload)){return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor")};this._boisinit=bodavm.config.isinit}
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['XMLHttpRequestUpload'], "XMLHttpRequestUpload");
bodavm.memory.globalobj['XMLHttpRequestUpload'].prototype.__proto__=bodavm.memory.globalobj['XMLHttpRequestEventTarget'].prototype;
bodavm.memory.globalobj['XMLHttpRequestUpload'].__proto__=bodavm.memory.globalobj['XMLHttpRequestEventTarget'];
