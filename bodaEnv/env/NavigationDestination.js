// NavigationDestination对象

bodaEnv.memory.globlProtoObj["NavigationDestination"] = function NavigationDestination() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('NavigationDestination 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["NavigationDestination"], "NavigationDestination");
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["NavigationDestination"].prototype, "key", {
  configurable: true,
  enumerable: true,
  get: {
    key() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["NavigationDestination"].prototype, "NavigationDestination", "key_get", arguments);
    }
  }.key,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["NavigationDestination"].prototype, "id", {
  configurable: true,
  enumerable: true,
  get: {
    id() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["NavigationDestination"].prototype, "NavigationDestination", "id_get", arguments);
    }
  }.id,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["NavigationDestination"].prototype, "url", {
  configurable: true,
  enumerable: true,
  get: {
    url() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["NavigationDestination"].prototype, "NavigationDestination", "url_get", arguments);
    }
  }.url,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["NavigationDestination"].prototype, "index", {
  configurable: true,
  enumerable: true,
  get: {
    index() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["NavigationDestination"].prototype, "NavigationDestination", "index_get", arguments);
    }
  }.index,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["NavigationDestination"].prototype, "sameDocument", {
  configurable: true,
  enumerable: true,
  get: {
    sameDocument() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["NavigationDestination"].prototype, "NavigationDestination", "sameDocument_get", arguments);
    }
  }.sameDocument,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["NavigationDestination"].prototype, "getState", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    getState() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["NavigationDestination"].prototype, "NavigationDestination", "getState", arguments);
    }
  }.getState
});