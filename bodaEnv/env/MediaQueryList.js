// MediaQueryList对象

bodaEnv.memory.globlProtoObj["MediaQueryList"] = function MediaQueryList() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('MediaQueryList 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["MediaQueryList"], "MediaQueryList");
bodaEnv.memory.globlProtoObj["MediaQueryList"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["EventTarget"].prototype;
bodaEnv.memory.globlProtoObj["MediaQueryList"].__proto__ = bodaEnv.memory.globlProtoObj["EventTarget"];
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["MediaQueryList"].prototype, "media", {
  configurable: true,
  enumerable: true,
  get: {
    media() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["MediaQueryList"].prototype, "MediaQueryList", "media_get", arguments);
    }
  }.media,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["MediaQueryList"].prototype, "matches", {
  configurable: true,
  enumerable: true,
  get: {
    matches() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["MediaQueryList"].prototype, "MediaQueryList", "matches_get", arguments);
    }
  }.matches,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["MediaQueryList"].prototype, "onchange", {
  configurable: true,
  enumerable: true,
  get: {
    onchange() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["MediaQueryList"].prototype, "MediaQueryList", "onchange_get", arguments);
    }
  }.onchange,
  set: {
    onchange() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["MediaQueryList"].prototype, "MediaQueryList", "onchange_set", arguments);
    }
  }.onchange
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["MediaQueryList"].prototype, "addListener", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    addListener() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["MediaQueryList"].prototype, "MediaQueryList", "addListener", arguments);
    }
  }.addListener
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["MediaQueryList"].prototype, "removeListener", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    removeListener() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["MediaQueryList"].prototype, "MediaQueryList", "removeListener", arguments);
    }
  }.removeListener
});