// Serial对象

bodaEnv.memory.globlProtoObj["Serial"] = function Serial() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('Serial 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["Serial"], "Serial");
bodaEnv.memory.globlProtoObj["Serial"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["EventTarget"].prototype;
bodaEnv.memory.globlProtoObj["Serial"].__proto__ = bodaEnv.memory.globlProtoObj["EventTarget"];
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Serial"].prototype, "onconnect", {
  configurable: true,
  enumerable: true,
  get: {
    onconnect() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Serial"].prototype, "Serial", "onconnect_get", arguments);
    }
  }.onconnect,
  set: {
    onconnect() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Serial"].prototype, "Serial", "onconnect_set", arguments);
    }
  }.onconnect
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Serial"].prototype, "ondisconnect", {
  configurable: true,
  enumerable: true,
  get: {
    ondisconnect() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Serial"].prototype, "Serial", "ondisconnect_get", arguments);
    }
  }.ondisconnect,
  set: {
    ondisconnect() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Serial"].prototype, "Serial", "ondisconnect_set", arguments);
    }
  }.ondisconnect
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Serial"].prototype, "getPorts", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    getPorts() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Serial"].prototype, "Serial", "getPorts", arguments);
    }
  }.getPorts
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Serial"].prototype, "requestPort", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    requestPort() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Serial"].prototype, "Serial", "requestPort", arguments);
    }
  }.requestPort
});