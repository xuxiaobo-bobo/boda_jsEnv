// HID对象

bodaEnv.memory.globlProtoObj["HID"] = function HID() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('HID 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["HID"], "HID");
bodaEnv.memory.globlProtoObj["HID"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["EventTarget"].prototype;
bodaEnv.memory.globlProtoObj["HID"].__proto__ = bodaEnv.memory.globlProtoObj["EventTarget"];
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HID"].prototype, "onconnect", {
  configurable: true,
  enumerable: true,
  get: {
    onconnect() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HID"].prototype, "HID", "onconnect_get", arguments);
    }
  }.onconnect,
  set: {
    onconnect() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HID"].prototype, "HID", "onconnect_set", arguments);
    }
  }.onconnect
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HID"].prototype, "ondisconnect", {
  configurable: true,
  enumerable: true,
  get: {
    ondisconnect() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HID"].prototype, "HID", "ondisconnect_get", arguments);
    }
  }.ondisconnect,
  set: {
    ondisconnect() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HID"].prototype, "HID", "ondisconnect_set", arguments);
    }
  }.ondisconnect
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HID"].prototype, "getDevices", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    getDevices() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HID"].prototype, "HID", "getDevices", arguments);
    }
  }.getDevices
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HID"].prototype, "requestDevice", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    requestDevice() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HID"].prototype, "HID", "requestDevice", arguments);
    }
  }.requestDevice
});