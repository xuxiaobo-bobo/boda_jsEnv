// SVGClipPathElement对象

bodaEnv.memory.globlProtoObj["SVGClipPathElement"] = function SVGClipPathElement() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('SVGClipPathElement 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["SVGClipPathElement"], "SVGClipPathElement");
bodaEnv.memory.globlProtoObj["SVGClipPathElement"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["SVGGraphicsElement"].prototype;
bodaEnv.memory.globlProtoObj["SVGClipPathElement"].__proto__ = bodaEnv.memory.globlProtoObj["SVGGraphicsElement"];
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGClipPathElement"].prototype, "clipPathUnits", {
  configurable: true,
  enumerable: true,
  get: {
    clipPathUnits() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGClipPathElement"].prototype, "SVGClipPathElement", "clipPathUnits_get", arguments);
    }
  }.clipPathUnits,
  set: undefined
});