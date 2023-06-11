// SpeechSynthesisEvent对象
SpeechSynthesisEvent = function SpeechSynthesisEvent(){let arg=arguments[0];
if (arg!='bobo' && !(this instanceof SpeechSynthesisEvent) ){return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'SpeechSynthesisEvent': 2 arguments required, but only 0 present.")};bodavm.toolsFunc.symbolProperty(this);
if (arg =='bobo'){console.log_copy('SpeechSynthesisEvent 实例化对象 --->',JSON.stringify_bo(arguments,function(k,v){if (v==window){return 'window'}else{return v}}))};}

bodavm.toolsFunc.safeProto(SpeechSynthesisEvent, "SpeechSynthesisEvent");
SpeechSynthesisEvent.prototype.__proto__=Event.prototype;
SpeechSynthesisEvent.__proto__=Event;
bodavm.toolsFunc.defineProperty(SpeechSynthesisEvent.prototype, "utterance", {configurable:true, enumerable:true, get:function bodefault (){return bodavm.toolsFunc.dispatch(this, SpeechSynthesisEvent.prototype, "SpeechSynthesisEvent", "bodefault_get", arguments)}, set:undefined},);
bodavm.toolsFunc.defineProperty(SpeechSynthesisEvent.prototype, "charIndex", {configurable:true, enumerable:true, get:function bodefault (){return bodavm.toolsFunc.dispatch(this, SpeechSynthesisEvent.prototype, "SpeechSynthesisEvent", "bodefault_get", arguments)}, set:undefined},);
bodavm.toolsFunc.defineProperty(SpeechSynthesisEvent.prototype, "charLength", {configurable:true, enumerable:true, get:function bodefault (){return bodavm.toolsFunc.dispatch(this, SpeechSynthesisEvent.prototype, "SpeechSynthesisEvent", "bodefault_get", arguments)}, set:undefined},);
bodavm.toolsFunc.defineProperty(SpeechSynthesisEvent.prototype, "elapsedTime", {configurable:true, enumerable:true, get:function bodefault (){return bodavm.toolsFunc.dispatch(this, SpeechSynthesisEvent.prototype, "SpeechSynthesisEvent", "bodefault_get", arguments)}, set:undefined},);
bodavm.toolsFunc.defineProperty(SpeechSynthesisEvent.prototype, "name", {configurable:true, enumerable:true, get:function bodefault (){return bodavm.toolsFunc.dispatch(this, SpeechSynthesisEvent.prototype, "SpeechSynthesisEvent", "bodefault_get", arguments)}, set:undefined},);
