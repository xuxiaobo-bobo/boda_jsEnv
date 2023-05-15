// ProgressEvent对象
bodavm.memory.globalobj['ProgressEvent'] = function ProgressEvent(){if (!(this instanceof ProgressEvent)){return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'ProgressEvent': 1 argument required, but only 0 present.")};this._boisinit=bodavm.config.isinit}
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['ProgressEvent'], "ProgressEvent");
bodavm.memory.globalobj['ProgressEvent'].prototype.__proto__=bodavm.memory.globalobj['Event'].prototype;
bodavm.memory.globalobj['ProgressEvent'].__proto__=bodavm.memory.globalobj['Event'];
bodavm.toolsFunc.defineProperty('ProgressEvent', "lengthComputable", {configurable:true, enumerable:true, get:function lengthComputable (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['ProgressEvent'].prototype, "ProgressEvent", "lengthComputable_get", arguments)}, set:undefined},'prototype');
bodavm.toolsFunc.defineProperty('ProgressEvent', "loaded", {configurable:true, enumerable:true, get:function loaded (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['ProgressEvent'].prototype, "ProgressEvent", "loaded_get", arguments)}, set:undefined},'prototype');
bodavm.toolsFunc.defineProperty('ProgressEvent', "total", {configurable:true, enumerable:true, get:function total (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['ProgressEvent'].prototype, "ProgressEvent", "total_get", arguments)}, set:undefined},'prototype');
