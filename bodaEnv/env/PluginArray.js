// PluginArray对象

bodaEnv.memory.globlProtoObj["PluginArray"] = function PluginArray() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('PluginArray 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["PluginArray"], "PluginArray");
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["PluginArray"].prototype, "length", {
  configurable: true,
  enumerable: true,
  get: {
    length() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["PluginArray"].prototype, "PluginArray", "length_get", arguments);
    }
  }.length,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["PluginArray"].prototype, "item", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    item() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["PluginArray"].prototype, "PluginArray", "item", arguments);
    }
  }.item
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["PluginArray"].prototype, "namedItem", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    namedItem() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["PluginArray"].prototype, "PluginArray", "namedItem", arguments);
    }
  }.namedItem
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["PluginArray"].prototype, "refresh", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    refresh() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["PluginArray"].prototype, "PluginArray", "refresh", arguments);
    }
  }.refresh
});