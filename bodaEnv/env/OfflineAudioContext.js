// OfflineAudioContext对象

bodaEnv.memory.globlProtoObj["OfflineAudioContext"] = function OfflineAudioContext() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('OfflineAudioContext 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["OfflineAudioContext"], "OfflineAudioContext");
bodaEnv.memory.globlProtoObj["OfflineAudioContext"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["BaseAudioContext"].prototype;
bodaEnv.memory.globlProtoObj["OfflineAudioContext"].__proto__ = bodaEnv.memory.globlProtoObj["BaseAudioContext"];
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["OfflineAudioContext"].prototype, "oncomplete", {
  configurable: true,
  enumerable: true,
  get: {
    oncomplete() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["OfflineAudioContext"].prototype, "OfflineAudioContext", "oncomplete_get", arguments);
    }
  }.oncomplete,
  set: {
    oncomplete() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["OfflineAudioContext"].prototype, "OfflineAudioContext", "oncomplete_set", arguments);
    }
  }.oncomplete
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["OfflineAudioContext"].prototype, "length", {
  configurable: true,
  enumerable: true,
  get: {
    length() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["OfflineAudioContext"].prototype, "OfflineAudioContext", "length_get", arguments);
    }
  }.length,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["OfflineAudioContext"].prototype, "resume", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    resume() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["OfflineAudioContext"].prototype, "OfflineAudioContext", "resume", arguments);
    }
  }.resume
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["OfflineAudioContext"].prototype, "startRendering", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    startRendering() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["OfflineAudioContext"].prototype, "OfflineAudioContext", "startRendering", arguments);
    }
  }.startRendering
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["OfflineAudioContext"].prototype, "suspend", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    suspend() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["OfflineAudioContext"].prototype, "OfflineAudioContext", "suspend", arguments);
    }
  }.suspend
});