// BarProp对象

bodaEnv.memory.globlProtoObj["BarProp"] = function BarProp() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('BarProp 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["BarProp"], "BarProp");
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["BarProp"].prototype, "visible", {
  configurable: true,
  enumerable: true,
  get: {
    visible() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["BarProp"].prototype, "BarProp", "visible_get", arguments);
    }
  }.visible,
  set: undefined
});