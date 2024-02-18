// NavigationHistoryEntry对象

bodaEnv.memory.globlProtoObj["NavigationHistoryEntry"] = function NavigationHistoryEntry() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('NavigationHistoryEntry 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["NavigationHistoryEntry"], "NavigationHistoryEntry");
bodaEnv.memory.globlProtoObj["NavigationHistoryEntry"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["EventTarget"].prototype;
bodaEnv.memory.globlProtoObj["NavigationHistoryEntry"].__proto__ = bodaEnv.memory.globlProtoObj["EventTarget"];
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["NavigationHistoryEntry"].prototype, "key", {
  configurable: true,
  enumerable: true,
  get: {
    key() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["NavigationHistoryEntry"].prototype, "NavigationHistoryEntry", "key_get", arguments);
    }
  }.key,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["NavigationHistoryEntry"].prototype, "id", {
  configurable: true,
  enumerable: true,
  get: {
    id() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["NavigationHistoryEntry"].prototype, "NavigationHistoryEntry", "id_get", arguments);
    }
  }.id,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["NavigationHistoryEntry"].prototype, "url", {
  configurable: true,
  enumerable: true,
  get: {
    url() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["NavigationHistoryEntry"].prototype, "NavigationHistoryEntry", "url_get", arguments);
    }
  }.url,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["NavigationHistoryEntry"].prototype, "index", {
  configurable: true,
  enumerable: true,
  get: {
    index() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["NavigationHistoryEntry"].prototype, "NavigationHistoryEntry", "index_get", arguments);
    }
  }.index,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["NavigationHistoryEntry"].prototype, "sameDocument", {
  configurable: true,
  enumerable: true,
  get: {
    sameDocument() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["NavigationHistoryEntry"].prototype, "NavigationHistoryEntry", "sameDocument_get", arguments);
    }
  }.sameDocument,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["NavigationHistoryEntry"].prototype, "ondispose", {
  configurable: true,
  enumerable: true,
  get: {
    ondispose() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["NavigationHistoryEntry"].prototype, "NavigationHistoryEntry", "ondispose_get", arguments);
    }
  }.ondispose,
  set: {
    ondispose() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["NavigationHistoryEntry"].prototype, "NavigationHistoryEntry", "ondispose_set", arguments);
    }
  }.ondispose
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["NavigationHistoryEntry"].prototype, "getState", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    getState() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["NavigationHistoryEntry"].prototype, "NavigationHistoryEntry", "getState", arguments);
    }
  }.getState
});