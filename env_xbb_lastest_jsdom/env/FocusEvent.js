// FocusEvent对象
bodavm.memory.globalobj['FocusEvent'] = function FocusEvent(){if (!(this instanceof FocusEvent)){return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'FocusEvent': 1 argument required, but only 0 present.")};this._boisinit=bodavm.config.isinit}
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['FocusEvent'], "FocusEvent");
bodavm.memory.globalobj['FocusEvent'].prototype.__proto__=bodavm.memory.globalobj['UIEvent'].prototype;
bodavm.memory.globalobj['FocusEvent'].__proto__=bodavm.memory.globalobj['UIEvent'];
bodavm.toolsFunc.defineProperty('FocusEvent', "relatedTarget", {configurable:true, enumerable:true, get:function relatedTarget (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['FocusEvent'].prototype, "FocusEvent", "relatedTarget_get", arguments)}, set:undefined},'prototype');
