// RTCDTMFSender对象

bodaEnv.memory.globlProtoObj["RTCDTMFSender"] = function RTCDTMFSender() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('RTCDTMFSender 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["RTCDTMFSender"], "RTCDTMFSender");
bodaEnv.memory.globlProtoObj["RTCDTMFSender"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["EventTarget"].prototype;
bodaEnv.memory.globlProtoObj["RTCDTMFSender"].__proto__ = bodaEnv.memory.globlProtoObj["EventTarget"];
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["RTCDTMFSender"].prototype, "ontonechange", {
  configurable: true,
  enumerable: true,
  get: {
    ontonechange() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["RTCDTMFSender"].prototype, "RTCDTMFSender", "ontonechange_get", arguments);
    }
  }.ontonechange,
  set: {
    ontonechange() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["RTCDTMFSender"].prototype, "RTCDTMFSender", "ontonechange_set", arguments);
    }
  }.ontonechange
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["RTCDTMFSender"].prototype, "canInsertDTMF", {
  configurable: true,
  enumerable: true,
  get: {
    canInsertDTMF() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["RTCDTMFSender"].prototype, "RTCDTMFSender", "canInsertDTMF_get", arguments);
    }
  }.canInsertDTMF,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["RTCDTMFSender"].prototype, "toneBuffer", {
  configurable: true,
  enumerable: true,
  get: {
    toneBuffer() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["RTCDTMFSender"].prototype, "RTCDTMFSender", "toneBuffer_get", arguments);
    }
  }.toneBuffer,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["RTCDTMFSender"].prototype, "insertDTMF", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    insertDTMF() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["RTCDTMFSender"].prototype, "RTCDTMFSender", "insertDTMF", arguments);
    }
  }.insertDTMF
});