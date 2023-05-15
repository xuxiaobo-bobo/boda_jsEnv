// TextEvent对象
bodavm.memory.globalobj['TextEvent'] = function TextEvent(){if (!(this instanceof TextEvent)){return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor")};this._boisinit=bodavm.config.isinit}
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['TextEvent'], "TextEvent");
bodavm.memory.globalobj['TextEvent'].prototype.__proto__=bodavm.memory.globalobj['UIEvent'].prototype;
bodavm.memory.globalobj['TextEvent'].__proto__=bodavm.memory.globalobj['UIEvent'];
bodavm.toolsFunc.defineProperty('TextEvent', "data", {configurable:true, enumerable:true, get:function data (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['TextEvent'].prototype, "TextEvent", "data_get", arguments)}, set:undefined},'prototype');
bodavm.toolsFunc.defineProperty('TextEvent', "initTextEvent", {configurable:true, enumerable:true, writable:true, value:function initTextEvent (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['TextEvent'].prototype, "TextEvent", "initTextEvent", arguments)}},'prototype');
