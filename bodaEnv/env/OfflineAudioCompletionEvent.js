// OfflineAudioCompletionEvent对象

bodaEnv.memory.globlProtoObj["OfflineAudioCompletionEvent"] = function OfflineAudioCompletionEvent() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('OfflineAudioCompletionEvent 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["OfflineAudioCompletionEvent"], "OfflineAudioCompletionEvent");
bodaEnv.memory.globlProtoObj["OfflineAudioCompletionEvent"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["Event"].prototype;
bodaEnv.memory.globlProtoObj["OfflineAudioCompletionEvent"].__proto__ = bodaEnv.memory.globlProtoObj["Event"];
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["OfflineAudioCompletionEvent"].prototype, "renderedBuffer", {
  configurable: true,
  enumerable: true,
  get: {
    renderedBuffer() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["OfflineAudioCompletionEvent"].prototype, "OfflineAudioCompletionEvent", "renderedBuffer_get", arguments);
    }
  }.renderedBuffer,
  set: undefined
});