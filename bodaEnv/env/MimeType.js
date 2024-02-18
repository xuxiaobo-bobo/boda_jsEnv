// MimeType对象

bodaEnv.memory.globlProtoObj["MimeType"] = function MimeType() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('MimeType 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["MimeType"], "MimeType");
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["MimeType"].prototype, "type", {
  configurable: true,
  enumerable: true,
  get: {
    type() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["MimeType"].prototype, "MimeType", "type_get", arguments);
    }
  }.type,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["MimeType"].prototype, "suffixes", {
  configurable: true,
  enumerable: true,
  get: {
    suffixes() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["MimeType"].prototype, "MimeType", "suffixes_get", arguments);
    }
  }.suffixes,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["MimeType"].prototype, "description", {
  configurable: true,
  enumerable: true,
  get: {
    description() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["MimeType"].prototype, "MimeType", "description_get", arguments);
    }
  }.description,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["MimeType"].prototype, "enabledPlugin", {
  configurable: true,
  enumerable: true,
  get: {
    enabledPlugin() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["MimeType"].prototype, "MimeType", "enabledPlugin_get", arguments);
    }
  }.enabledPlugin,
  set: undefined
});