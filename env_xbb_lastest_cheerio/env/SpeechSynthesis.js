SpeechSynthesis = function SpeechSynthesis() { return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor") }
bodavm.toolsFunc.safeProto(SpeechSynthesis, "SpeechSynthesis");
bodavm.toolsFunc.defineProperty(SpeechSynthesis.prototype, "cancel", { writable: true, enumerable: true, configurable: true, value: function cancel() { return bodavm.toolsFunc.dispatch(this, SpeechSynthesis.prototype, "SpeechSynthesis", "cancel", arguments) } });
bodavm.toolsFunc.defineProperty(SpeechSynthesis.prototype, "getVoices", { writable: true, enumerable: true, configurable: true, value: function getVoices() { return bodavm.toolsFunc.dispatch(this, SpeechSynthesis.prototype, "SpeechSynthesis", "getVoices", arguments) } });
bodavm.toolsFunc.defineProperty(SpeechSynthesis.prototype, "pause", { writable: true, enumerable: true, configurable: true, value: function pause() { return bodavm.toolsFunc.dispatch(this, SpeechSynthesis.prototype, "SpeechSynthesis", "pause", arguments) } });
bodavm.toolsFunc.defineProperty(SpeechSynthesis.prototype, "resume", { writable: true, enumerable: true, configurable: true, value: function resume() { return bodavm.toolsFunc.dispatch(this, SpeechSynthesis.prototype, "SpeechSynthesis", "resume", arguments) } });
bodavm.toolsFunc.defineProperty(SpeechSynthesis.prototype, "speak", { writable: true, enumerable: true, configurable: true, value: function speak() { return bodavm.toolsFunc.dispatch(this, SpeechSynthesis.prototype, "SpeechSynthesis", "speak", arguments) } });
bodavm.toolsFunc.defineProperty(SpeechSynthesis.prototype, "paused", { set: undefined, enumerable: true, configurable: true, get: function paused() { return bodavm.toolsFunc.dispatch(this, SpeechSynthesis.prototype, "SpeechSynthesis", "paused_get  ", arguments) } });
bodavm.toolsFunc.defineProperty(SpeechSynthesis.prototype, "pending", { set: undefined, enumerable: true, configurable: true, get: function pending() { return bodavm.toolsFunc.dispatch(this, SpeechSynthesis.prototype, "SpeechSynthesis", "pending_get  ", arguments) } });
bodavm.toolsFunc.defineProperty(SpeechSynthesis.prototype, "speaking", { set: undefined, enumerable: true, configurable: true, get: function speaking() { return bodavm.toolsFunc.dispatch(this, SpeechSynthesis.prototype, "SpeechSynthesis", "speaking_get  ", arguments) } });
bodavm.toolsFunc.defineProperty(SpeechSynthesis.prototype, "onvoiceschanged", { configurable: true, enumerable: true, get: function onvoiceschanged() { return bodavm.toolsFunc.dispatch(this, SpeechSynthesis.prototype, "SpeechSynthesis", "onvoiceschanged_get  ", arguments) }, set: function onvoiceschanged() { return bodavm.toolsFunc.dispatch(this, SpeechSynthesis.prototype, "SpeechSynthesis", "onvoiceschanged_set", arguments) } });


// speechSynthesis对象
var speechSynthesis = {}
speechSynthesis.__proto__=SpeechSynthesis.prototype;

delete SpeechSynthesis