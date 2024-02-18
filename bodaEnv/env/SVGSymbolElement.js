// SVGSymbolElement对象

bodaEnv.memory.globlProtoObj["SVGSymbolElement"] = function SVGSymbolElement() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('SVGSymbolElement 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["SVGSymbolElement"], "SVGSymbolElement");
bodaEnv.memory.globlProtoObj["SVGSymbolElement"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["SVGElement"].prototype;
bodaEnv.memory.globlProtoObj["SVGSymbolElement"].__proto__ = bodaEnv.memory.globlProtoObj["SVGElement"];
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGSymbolElement"].prototype, "viewBox", {
  configurable: true,
  enumerable: true,
  get: {
    viewBox() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGSymbolElement"].prototype, "SVGSymbolElement", "viewBox_get", arguments);
    }
  }.viewBox,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGSymbolElement"].prototype, "preserveAspectRatio", {
  configurable: true,
  enumerable: true,
  get: {
    preserveAspectRatio() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGSymbolElement"].prototype, "SVGSymbolElement", "preserveAspectRatio_get", arguments);
    }
  }.preserveAspectRatio,
  set: undefined
});