// SubmitEvent对象
bodavm.memory.globalobj['SubmitEvent'] = function SubmitEvent(){if (!(this instanceof SubmitEvent)){return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'SubmitEvent': 1 argument required, but only 0 present.")};this._boisinit=bodavm.config.isinit}
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['SubmitEvent'], "SubmitEvent");
bodavm.memory.globalobj['SubmitEvent'].prototype.__proto__=bodavm.memory.globalobj['Event'].prototype;
bodavm.memory.globalobj['SubmitEvent'].__proto__=bodavm.memory.globalobj['Event'];
bodavm.toolsFunc.defineProperty('SubmitEvent', "submitter", {configurable:true, enumerable:true, get:function submitter (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SubmitEvent'].prototype, "SubmitEvent", "submitter_get", arguments)}, set:undefined},'prototype');
