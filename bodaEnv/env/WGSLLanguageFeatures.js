// WGSLLanguageFeatures对象

bodaEnv.memory.globlProtoObj["WGSLLanguageFeatures"] = function WGSLLanguageFeatures() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('WGSLLanguageFeatures 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["WGSLLanguageFeatures"], "WGSLLanguageFeatures");
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WGSLLanguageFeatures"].prototype, "size", {
  configurable: true,
  enumerable: true,
  get: {
    size() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WGSLLanguageFeatures"].prototype, "WGSLLanguageFeatures", "size_get", arguments);
    }
  }.size,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WGSLLanguageFeatures"].prototype, "entries", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    entries() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WGSLLanguageFeatures"].prototype, "WGSLLanguageFeatures", "entries", arguments);
    }
  }.entries
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WGSLLanguageFeatures"].prototype, "forEach", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    forEach() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WGSLLanguageFeatures"].prototype, "WGSLLanguageFeatures", "forEach", arguments);
    }
  }.forEach
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WGSLLanguageFeatures"].prototype, "has", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    has() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WGSLLanguageFeatures"].prototype, "WGSLLanguageFeatures", "has", arguments);
    }
  }.has
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WGSLLanguageFeatures"].prototype, "keys", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    keys() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WGSLLanguageFeatures"].prototype, "WGSLLanguageFeatures", "keys", arguments);
    }
  }.keys
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WGSLLanguageFeatures"].prototype, "values", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    values() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WGSLLanguageFeatures"].prototype, "WGSLLanguageFeatures", "values", arguments);
    }
  }.values
});