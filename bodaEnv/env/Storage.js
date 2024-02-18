// Storage对象

bodaEnv.memory.globlProtoObj["Storage"] = function Storage() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('Storage 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["Storage"], "Storage");
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Storage"].prototype, "length", {
  configurable: true,
  enumerable: true,
  get: {
    length() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Storage"].prototype, "Storage", "length_get", arguments);
    }
  }.length,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Storage"].prototype, "clear", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    clear() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Storage"].prototype, "Storage", "clear", arguments);
    }
  }.clear
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Storage"].prototype, "getItem", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    getItem() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Storage"].prototype, "Storage", "getItem", arguments);
    }
  }.getItem
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Storage"].prototype, "key", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    key() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Storage"].prototype, "Storage", "key", arguments);
    }
  }.key
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Storage"].prototype, "removeItem", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    removeItem() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Storage"].prototype, "Storage", "removeItem", arguments);
    }
  }.removeItem
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Storage"].prototype, "setItem", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    setItem() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Storage"].prototype, "Storage", "setItem", arguments);
    }
  }.setItem
});