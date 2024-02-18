// SVGFEMergeNodeElement对象

bodaEnv.memory.globlProtoObj["SVGFEMergeNodeElement"] = function SVGFEMergeNodeElement() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('SVGFEMergeNodeElement 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["SVGFEMergeNodeElement"], "SVGFEMergeNodeElement");
bodaEnv.memory.globlProtoObj["SVGFEMergeNodeElement"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["SVGElement"].prototype;
bodaEnv.memory.globlProtoObj["SVGFEMergeNodeElement"].__proto__ = bodaEnv.memory.globlProtoObj["SVGElement"];
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGFEMergeNodeElement"].prototype, "in1", {
  configurable: true,
  enumerable: true,
  get: {
    in1() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGFEMergeNodeElement"].prototype, "SVGFEMergeNodeElement", "in1_get", arguments);
    }
  }.in1,
  set: undefined
});