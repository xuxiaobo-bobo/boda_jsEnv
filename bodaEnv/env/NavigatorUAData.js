// NavigatorUAData对象

bodaEnv.memory.globlProtoObj["NavigatorUAData"] = function NavigatorUAData() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('NavigatorUAData 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["NavigatorUAData"], "NavigatorUAData");
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["NavigatorUAData"].prototype, "brands", {
  configurable: true,
  enumerable: true,
  get: {
    brands() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["NavigatorUAData"].prototype, "NavigatorUAData", "brands_get", arguments);
    }
  }.brands,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["NavigatorUAData"].prototype, "mobile", {
  configurable: true,
  enumerable: true,
  get: {
    mobile() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["NavigatorUAData"].prototype, "NavigatorUAData", "mobile_get", arguments);
    }
  }.mobile,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["NavigatorUAData"].prototype, "platform", {
  configurable: true,
  enumerable: true,
  get: {
    platform() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["NavigatorUAData"].prototype, "NavigatorUAData", "platform_get", arguments);
    }
  }.platform,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["NavigatorUAData"].prototype, "getHighEntropyValues", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    getHighEntropyValues() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["NavigatorUAData"].prototype, "NavigatorUAData", "getHighEntropyValues", arguments);
    }
  }.getHighEntropyValues
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["NavigatorUAData"].prototype, "toJSON", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    toJSON() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["NavigatorUAData"].prototype, "NavigatorUAData", "toJSON", arguments);
    }
  }.toJSON
});