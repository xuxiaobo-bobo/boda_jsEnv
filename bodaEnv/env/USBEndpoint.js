// USBEndpoint对象

bodaEnv.memory.globlProtoObj["USBEndpoint"] = function USBEndpoint() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('USBEndpoint 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["USBEndpoint"], "USBEndpoint");
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["USBEndpoint"].prototype, "endpointNumber", {
  configurable: true,
  enumerable: true,
  get: {
    endpointNumber() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["USBEndpoint"].prototype, "USBEndpoint", "endpointNumber_get", arguments);
    }
  }.endpointNumber,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["USBEndpoint"].prototype, "direction", {
  configurable: true,
  enumerable: true,
  get: {
    direction() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["USBEndpoint"].prototype, "USBEndpoint", "direction_get", arguments);
    }
  }.direction,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["USBEndpoint"].prototype, "type", {
  configurable: true,
  enumerable: true,
  get: {
    type() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["USBEndpoint"].prototype, "USBEndpoint", "type_get", arguments);
    }
  }.type,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["USBEndpoint"].prototype, "packetSize", {
  configurable: true,
  enumerable: true,
  get: {
    packetSize() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["USBEndpoint"].prototype, "USBEndpoint", "packetSize_get", arguments);
    }
  }.packetSize,
  set: undefined
});