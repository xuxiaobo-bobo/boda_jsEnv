// XRInputSourceArray对象

bodaEnv.memory.globlProtoObj["XRInputSourceArray"] = function XRInputSourceArray() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('XRInputSourceArray 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["XRInputSourceArray"], "XRInputSourceArray");
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["XRInputSourceArray"].prototype, "entries", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    entries() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["XRInputSourceArray"].prototype, "XRInputSourceArray", "entries", arguments);
    }
  }.entries
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["XRInputSourceArray"].prototype, "keys", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    keys() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["XRInputSourceArray"].prototype, "XRInputSourceArray", "keys", arguments);
    }
  }.keys
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["XRInputSourceArray"].prototype, "values", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    values() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["XRInputSourceArray"].prototype, "XRInputSourceArray", "values", arguments);
    }
  }.values
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["XRInputSourceArray"].prototype, "forEach", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    forEach() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["XRInputSourceArray"].prototype, "XRInputSourceArray", "forEach", arguments);
    }
  }.forEach
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["XRInputSourceArray"].prototype, "length", {
  configurable: true,
  enumerable: true,
  get: {
    length() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["XRInputSourceArray"].prototype, "XRInputSourceArray", "length_get", arguments);
    }
  }.length,
  set: undefined
});