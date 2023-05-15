// SpeechSynthesisEvent对象

bodavm.memory.globalobj['SpeechSynthesisEvent'] = function SpeechSynthesisEvent(){if (!(this instanceof SpeechSynthesisEvent)){return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'SpeechSynthesisEvent': 2 arguments required, but only 0 present.")};this._boisinit=bodavm.config.isinit}

bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['SpeechSynthesisEvent'], "SpeechSynthesisEvent");

bodavm.memory.globalobj['SpeechSynthesisEvent'].prototype.__proto__=bodavm.memory.globalobj['Event'].prototype;

bodavm.memory.globalobj['SpeechSynthesisEvent'].__proto__=bodavm.memory.globalobj['Event'];

bodavm.toolsFunc.defineProperty('SpeechSynthesisEvent', "utterance", {configurable:true, enumerable:true, get:function utterance (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SpeechSynthesisEvent'].prototype, "SpeechSynthesisEvent", "utterance_get", arguments)}, set:undefined},'prototype');

bodavm.toolsFunc.defineProperty('SpeechSynthesisEvent', "charIndex", {configurable:true, enumerable:true, get:function charIndex (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SpeechSynthesisEvent'].prototype, "SpeechSynthesisEvent", "charIndex_get", arguments)}, set:undefined},'prototype');

bodavm.toolsFunc.defineProperty('SpeechSynthesisEvent', "charLength", {configurable:true, enumerable:true, get:function charLength (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SpeechSynthesisEvent'].prototype, "SpeechSynthesisEvent", "charLength_get", arguments)}, set:undefined},'prototype');

bodavm.toolsFunc.defineProperty('SpeechSynthesisEvent', "elapsedTime", {configurable:true, enumerable:true, get:function elapsedTime (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SpeechSynthesisEvent'].prototype, "SpeechSynthesisEvent", "elapsedTime_get", arguments)}, set:undefined},'prototype');

bodavm.toolsFunc.defineProperty('SpeechSynthesisEvent', "name", {configurable:true, enumerable:true, get:function name (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SpeechSynthesisEvent'].prototype, "SpeechSynthesisEvent", "name_get", arguments)}, set:undefined},'prototype');

