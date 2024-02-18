// HTMLUListElement对象

bodaEnv.memory.globlProtoObj["HTMLUListElement"] = function HTMLUListElement() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('HTMLUListElement 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["HTMLUListElement"], "HTMLUListElement");
bodaEnv.memory.globlProtoObj["HTMLUListElement"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["HTMLElement"].prototype;
bodaEnv.memory.globlProtoObj["HTMLUListElement"].__proto__ = bodaEnv.memory.globlProtoObj["HTMLElement"];
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLUListElement"].prototype, "compact", {
  configurable: true,
  enumerable: true,
  get: {
    compact() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLUListElement"].prototype, "HTMLUListElement", "compact_get", arguments);
    }
  }.compact,
  set: {
    compact() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLUListElement"].prototype, "HTMLUListElement", "compact_set", arguments);
    }
  }.compact
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLUListElement"].prototype, "type", {
  configurable: true,
  enumerable: true,
  get: {
    type() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLUListElement"].prototype, "HTMLUListElement", "type_get", arguments);
    }
  }.type,
  set: {
    type() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLUListElement"].prototype, "HTMLUListElement", "type_set", arguments);
    }
  }.type
});