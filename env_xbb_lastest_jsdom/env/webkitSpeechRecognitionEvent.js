// SpeechRecognitionEvent对象
bodavm.memory.globalobj['SpeechRecognitionEvent'] = function SpeechRecognitionEvent(){if (!(this instanceof SpeechRecognitionEvent)){return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'SpeechRecognitionEvent': 1 argument required, but only 0 present.")};this._boisinit=bodavm.config.isinit}
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['SpeechRecognitionEvent'], "SpeechRecognitionEvent");
bodavm.memory.globalobj['SpeechRecognitionEvent'].prototype.__proto__=bodavm.memory.globalobj['Event'].prototype;
bodavm.memory.globalobj['SpeechRecognitionEvent'].__proto__=bodavm.memory.globalobj['Event'];
bodavm.toolsFunc.defineProperty('SpeechRecognitionEvent', "resultIndex", {configurable:true, enumerable:true, get:function resultIndex (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SpeechRecognitionEvent'].prototype, "SpeechRecognitionEvent", "resultIndex_get", arguments)}, set:undefined},'prototype');
bodavm.toolsFunc.defineProperty('SpeechRecognitionEvent', "results", {configurable:true, enumerable:true, get:function results (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SpeechRecognitionEvent'].prototype, "SpeechRecognitionEvent", "results_get", arguments)}, set:undefined},'prototype');
