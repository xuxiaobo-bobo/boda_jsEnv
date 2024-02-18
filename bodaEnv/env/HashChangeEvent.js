// HashChangeEvent对象

bodaEnv.memory.globlProtoObj["HashChangeEvent"] = function HashChangeEvent() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('HashChangeEvent 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["HashChangeEvent"], "HashChangeEvent");
bodaEnv.memory.globlProtoObj["HashChangeEvent"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["Event"].prototype;
bodaEnv.memory.globlProtoObj["HashChangeEvent"].__proto__ = bodaEnv.memory.globlProtoObj["Event"];
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HashChangeEvent"].prototype, "oldURL", {
  configurable: true,
  enumerable: true,
  get: {
    oldURL() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HashChangeEvent"].prototype, "HashChangeEvent", "oldURL_get", arguments);
    }
  }.oldURL,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HashChangeEvent"].prototype, "newURL", {
  configurable: true,
  enumerable: true,
  get: {
    newURL() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HashChangeEvent"].prototype, "HashChangeEvent", "newURL_get", arguments);
    }
  }.newURL,
  set: undefined
});