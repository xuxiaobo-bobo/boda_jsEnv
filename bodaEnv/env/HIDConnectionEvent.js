// HIDConnectionEvent对象

bodaEnv.memory.globlProtoObj["HIDConnectionEvent"] = function HIDConnectionEvent() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('HIDConnectionEvent 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["HIDConnectionEvent"], "HIDConnectionEvent");
bodaEnv.memory.globlProtoObj["HIDConnectionEvent"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["Event"].prototype;
bodaEnv.memory.globlProtoObj["HIDConnectionEvent"].__proto__ = bodaEnv.memory.globlProtoObj["Event"];
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HIDConnectionEvent"].prototype, "device", {
  configurable: true,
  enumerable: true,
  get: {
    device() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HIDConnectionEvent"].prototype, "HIDConnectionEvent", "device_get", arguments);
    }
  }.device,
  set: undefined
});