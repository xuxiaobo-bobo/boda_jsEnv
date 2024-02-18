// XRBoundedReferenceSpace对象

bodaEnv.memory.globlProtoObj["XRBoundedReferenceSpace"] = function XRBoundedReferenceSpace() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('XRBoundedReferenceSpace 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["XRBoundedReferenceSpace"], "XRBoundedReferenceSpace");
bodaEnv.memory.globlProtoObj["XRBoundedReferenceSpace"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["XRReferenceSpace"].prototype;
bodaEnv.memory.globlProtoObj["XRBoundedReferenceSpace"].__proto__ = bodaEnv.memory.globlProtoObj["XRReferenceSpace"];
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["XRBoundedReferenceSpace"].prototype, "boundsGeometry", {
  configurable: true,
  enumerable: true,
  get: {
    boundsGeometry() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["XRBoundedReferenceSpace"].prototype, "XRBoundedReferenceSpace", "boundsGeometry_get", arguments);
    }
  }.boundsGeometry,
  set: undefined
});