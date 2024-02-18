// XRDOMOverlayState对象

bodaEnv.memory.globlProtoObj["XRDOMOverlayState"] = function XRDOMOverlayState() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('XRDOMOverlayState 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["XRDOMOverlayState"], "XRDOMOverlayState");
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["XRDOMOverlayState"].prototype, "type", {
  configurable: true,
  enumerable: true,
  get: {
    type() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["XRDOMOverlayState"].prototype, "XRDOMOverlayState", "type_get", arguments);
    }
  }.type,
  set: undefined
});