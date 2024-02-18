// SourceBufferList对象

bodaEnv.memory.globlProtoObj["SourceBufferList"] = function SourceBufferList() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('SourceBufferList 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["SourceBufferList"], "SourceBufferList");
bodaEnv.memory.globlProtoObj["SourceBufferList"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["EventTarget"].prototype;
bodaEnv.memory.globlProtoObj["SourceBufferList"].__proto__ = bodaEnv.memory.globlProtoObj["EventTarget"];
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SourceBufferList"].prototype, "length", {
  configurable: true,
  enumerable: true,
  get: {
    length() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SourceBufferList"].prototype, "SourceBufferList", "length_get", arguments);
    }
  }.length,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SourceBufferList"].prototype, "onaddsourcebuffer", {
  configurable: true,
  enumerable: true,
  get: {
    onaddsourcebuffer() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SourceBufferList"].prototype, "SourceBufferList", "onaddsourcebuffer_get", arguments);
    }
  }.onaddsourcebuffer,
  set: {
    onaddsourcebuffer() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SourceBufferList"].prototype, "SourceBufferList", "onaddsourcebuffer_set", arguments);
    }
  }.onaddsourcebuffer
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SourceBufferList"].prototype, "onremovesourcebuffer", {
  configurable: true,
  enumerable: true,
  get: {
    onremovesourcebuffer() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SourceBufferList"].prototype, "SourceBufferList", "onremovesourcebuffer_get", arguments);
    }
  }.onremovesourcebuffer,
  set: {
    onremovesourcebuffer() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SourceBufferList"].prototype, "SourceBufferList", "onremovesourcebuffer_set", arguments);
    }
  }.onremovesourcebuffer
});