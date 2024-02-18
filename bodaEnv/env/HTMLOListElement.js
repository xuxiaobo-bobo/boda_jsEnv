// HTMLOListElement对象

bodaEnv.memory.globlProtoObj["HTMLOListElement"] = function HTMLOListElement() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('HTMLOListElement 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["HTMLOListElement"], "HTMLOListElement");
bodaEnv.memory.globlProtoObj["HTMLOListElement"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["HTMLElement"].prototype;
bodaEnv.memory.globlProtoObj["HTMLOListElement"].__proto__ = bodaEnv.memory.globlProtoObj["HTMLElement"];
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLOListElement"].prototype, "reversed", {
  configurable: true,
  enumerable: true,
  get: {
    reversed() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLOListElement"].prototype, "HTMLOListElement", "reversed_get", arguments);
    }
  }.reversed,
  set: {
    reversed() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLOListElement"].prototype, "HTMLOListElement", "reversed_set", arguments);
    }
  }.reversed
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLOListElement"].prototype, "start", {
  configurable: true,
  enumerable: true,
  get: {
    start() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLOListElement"].prototype, "HTMLOListElement", "start_get", arguments);
    }
  }.start,
  set: {
    start() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLOListElement"].prototype, "HTMLOListElement", "start_set", arguments);
    }
  }.start
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLOListElement"].prototype, "type", {
  configurable: true,
  enumerable: true,
  get: {
    type() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLOListElement"].prototype, "HTMLOListElement", "type_get", arguments);
    }
  }.type,
  set: {
    type() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLOListElement"].prototype, "HTMLOListElement", "type_set", arguments);
    }
  }.type
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLOListElement"].prototype, "compact", {
  configurable: true,
  enumerable: true,
  get: {
    compact() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLOListElement"].prototype, "HTMLOListElement", "compact_get", arguments);
    }
  }.compact,
  set: {
    compact() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLOListElement"].prototype, "HTMLOListElement", "compact_set", arguments);
    }
  }.compact
});