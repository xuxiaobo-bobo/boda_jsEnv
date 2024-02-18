// XRReferenceSpace对象

bodaEnv.memory.globlProtoObj["XRReferenceSpace"] = function XRReferenceSpace() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('XRReferenceSpace 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["XRReferenceSpace"], "XRReferenceSpace");
bodaEnv.memory.globlProtoObj["XRReferenceSpace"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["XRSpace"].prototype;
bodaEnv.memory.globlProtoObj["XRReferenceSpace"].__proto__ = bodaEnv.memory.globlProtoObj["XRSpace"];
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["XRReferenceSpace"].prototype, "onreset", {
  configurable: true,
  enumerable: true,
  get: {
    onreset() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["XRReferenceSpace"].prototype, "XRReferenceSpace", "onreset_get", arguments);
    }
  }.onreset,
  set: {
    onreset() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["XRReferenceSpace"].prototype, "XRReferenceSpace", "onreset_set", arguments);
    }
  }.onreset
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["XRReferenceSpace"].prototype, "getOffsetReferenceSpace", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    getOffsetReferenceSpace() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["XRReferenceSpace"].prototype, "XRReferenceSpace", "getOffsetReferenceSpace", arguments);
    }
  }.getOffsetReferenceSpace
});