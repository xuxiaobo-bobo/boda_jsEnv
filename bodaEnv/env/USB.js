// USB对象

bodaEnv.memory.globlProtoObj["USB"] = function USB() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('USB 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["USB"], "USB");
bodaEnv.memory.globlProtoObj["USB"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["EventTarget"].prototype;
bodaEnv.memory.globlProtoObj["USB"].__proto__ = bodaEnv.memory.globlProtoObj["EventTarget"];
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["USB"].prototype, "onconnect", {
  configurable: true,
  enumerable: true,
  get: {
    onconnect() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["USB"].prototype, "USB", "onconnect_get", arguments);
    }
  }.onconnect,
  set: {
    onconnect() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["USB"].prototype, "USB", "onconnect_set", arguments);
    }
  }.onconnect
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["USB"].prototype, "ondisconnect", {
  configurable: true,
  enumerable: true,
  get: {
    ondisconnect() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["USB"].prototype, "USB", "ondisconnect_get", arguments);
    }
  }.ondisconnect,
  set: {
    ondisconnect() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["USB"].prototype, "USB", "ondisconnect_set", arguments);
    }
  }.ondisconnect
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["USB"].prototype, "getDevices", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    getDevices() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["USB"].prototype, "USB", "getDevices", arguments);
    }
  }.getDevices
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["USB"].prototype, "requestDevice", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    requestDevice() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["USB"].prototype, "USB", "requestDevice", arguments);
    }
  }.requestDevice
});