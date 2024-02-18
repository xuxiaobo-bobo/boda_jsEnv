// NetworkInformation对象

bodaEnv.memory.globlProtoObj["NetworkInformation"] = function NetworkInformation() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('NetworkInformation 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["NetworkInformation"], "NetworkInformation");
bodaEnv.memory.globlProtoObj["NetworkInformation"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["EventTarget"].prototype;
bodaEnv.memory.globlProtoObj["NetworkInformation"].__proto__ = bodaEnv.memory.globlProtoObj["EventTarget"];
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["NetworkInformation"].prototype, "onchange", {
  configurable: true,
  enumerable: true,
  get: {
    onchange() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["NetworkInformation"].prototype, "NetworkInformation", "onchange_get", arguments);
    }
  }.onchange,
  set: {
    onchange() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["NetworkInformation"].prototype, "NetworkInformation", "onchange_set", arguments);
    }
  }.onchange
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["NetworkInformation"].prototype, "effectiveType", {
  configurable: true,
  enumerable: true,
  get: {
    effectiveType() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["NetworkInformation"].prototype, "NetworkInformation", "effectiveType_get", arguments);
    }
  }.effectiveType,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["NetworkInformation"].prototype, "rtt", {
  configurable: true,
  enumerable: true,
  get: {
    rtt() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["NetworkInformation"].prototype, "NetworkInformation", "rtt_get", arguments);
    }
  }.rtt,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["NetworkInformation"].prototype, "downlink", {
  configurable: true,
  enumerable: true,
  get: {
    downlink() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["NetworkInformation"].prototype, "NetworkInformation", "downlink_get", arguments);
    }
  }.downlink,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["NetworkInformation"].prototype, "saveData", {
  configurable: true,
  enumerable: true,
  get: {
    saveData() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["NetworkInformation"].prototype, "NetworkInformation", "saveData_get", arguments);
    }
  }.saveData,
  set: undefined
});