bodavm.memory.globalobj['SpeechSynthesis'] = function SpeechSynthesis() {this._boisinit=bodavm.config.isinit; return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor") }
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['SpeechSynthesis'], "SpeechSynthesis");
bodavm.toolsFunc.defineProperty('SpeechSynthesis', "cancel", { writable: true, enumerable: true, configurable: true, value: function cancel() { return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SpeechSynthesis'] .prototype, "SpeechSynthesis", "cancel", arguments) } },'prototype');
bodavm.toolsFunc.defineProperty('SpeechSynthesis', "getVoices", { writable: true, enumerable: true, configurable: true, value: function getVoices() { return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SpeechSynthesis'] .prototype, "SpeechSynthesis", "getVoices", arguments) } },'prototype');
bodavm.toolsFunc.defineProperty('SpeechSynthesis', "pause", { writable: true, enumerable: true, configurable: true, value: function pause() { return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SpeechSynthesis'] .prototype, "SpeechSynthesis", "pause", arguments) } },'prototype');
bodavm.toolsFunc.defineProperty('SpeechSynthesis', "resume", { writable: true, enumerable: true, configurable: true, value: function resume() { return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SpeechSynthesis'] .prototype, "SpeechSynthesis", "resume", arguments) } },'prototype');
bodavm.toolsFunc.defineProperty('SpeechSynthesis', "speak", { writable: true, enumerable: true, configurable: true, value: function speak() { return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SpeechSynthesis'] .prototype, "SpeechSynthesis", "speak", arguments) } },'prototype');
bodavm.toolsFunc.defineProperty('SpeechSynthesis', "paused", { set: undefined, enumerable: true, configurable: true, get: function paused() { return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SpeechSynthesis'] .prototype, "SpeechSynthesis", "paused_get  ", arguments) } },'prototype');
bodavm.toolsFunc.defineProperty('SpeechSynthesis', "pending", { set: undefined, enumerable: true, configurable: true, get: function pending() { return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SpeechSynthesis'] .prototype, "SpeechSynthesis", "pending_get  ", arguments) } },'prototype');
bodavm.toolsFunc.defineProperty('SpeechSynthesis', "speaking", { set: undefined, enumerable: true, configurable: true, get: function speaking() { return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SpeechSynthesis'] .prototype, "SpeechSynthesis", "speaking_get  ", arguments) } },'prototype');
bodavm.toolsFunc.defineProperty('SpeechSynthesis', "onvoiceschanged", { configurable: true, enumerable: true, get: function onvoiceschanged() { return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SpeechSynthesis'] .prototype, "SpeechSynthesis", "onvoiceschanged_get  ", arguments) }, set: function onvoiceschanged() { return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SpeechSynthesis'].prototype, "SpeechSynthesis", "onvoiceschanged_set", arguments) } },'prototype');


// speechSynthesis对象
bodavm.memory.globalobj[ 'speechSynthesis'] = {
    _boisinit:bodavm.config.isinit

}
bodavm.memory.globalobj[ 'speechSynthesis'].__proto__=bodavm.memory.globalobj['SpeechSynthesis'] .prototype;
delete SpeechSynthesis


