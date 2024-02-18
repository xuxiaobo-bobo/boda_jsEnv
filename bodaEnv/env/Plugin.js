// Plugin对象

bodaEnv.memory.globlProtoObj["Plugin"] = function Plugin() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('Plugin 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["Plugin"], "Plugin");
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Plugin"].prototype, "name", {
  configurable: true,
  enumerable: true,
  get: {
    name() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Plugin"].prototype, "Plugin", "name_get", arguments);
    }
  }.name,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Plugin"].prototype, "filename", {
  configurable: true,
  enumerable: true,
  get: {
    filename() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Plugin"].prototype, "Plugin", "filename_get", arguments);
    }
  }.filename,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Plugin"].prototype, "description", {
  configurable: true,
  enumerable: true,
  get: {
    description() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Plugin"].prototype, "Plugin", "description_get", arguments);
    }
  }.description,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Plugin"].prototype, "length", {
  configurable: true,
  enumerable: true,
  get: {
    length() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Plugin"].prototype, "Plugin", "length_get", arguments);
    }
  }.length,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Plugin"].prototype, "item", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    item() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Plugin"].prototype, "Plugin", "item", arguments);
    }
  }.item
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Plugin"].prototype, "namedItem", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    namedItem() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Plugin"].prototype, "Plugin", "namedItem", arguments);
    }
  }.namedItem
});