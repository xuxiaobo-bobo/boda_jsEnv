// Scheduling对象
bodavm.memory.globalobj['Scheduling'] = function Scheduling(){if (!(this instanceof Scheduling)){return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor")};this._boisinit=bodavm.config.isinit}
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['Scheduling'], "Scheduling");
bodavm.toolsFunc.defineProperty('Scheduling', "isInputPending", {configurable:true, enumerable:true, writable:true, value:function isInputPending (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Scheduling'].prototype, "Scheduling", "isInputPending", arguments)}},'prototype');
