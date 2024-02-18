// HTMLLIElement对象

bodaEnv.memory.globlProtoObj["HTMLLIElement"] = function HTMLLIElement() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('HTMLLIElement 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["HTMLLIElement"], "HTMLLIElement");
bodaEnv.memory.globlProtoObj["HTMLLIElement"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["HTMLElement"].prototype;
bodaEnv.memory.globlProtoObj["HTMLLIElement"].__proto__ = bodaEnv.memory.globlProtoObj["HTMLElement"];
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLLIElement"].prototype, "value", {
  configurable: true,
  enumerable: true,
  get: {
    value() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLLIElement"].prototype, "HTMLLIElement", "value_get", arguments);
    }
  }.value,
  set: {
    value() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLLIElement"].prototype, "HTMLLIElement", "value_set", arguments);
    }
  }.value
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLLIElement"].prototype, "type", {
  configurable: true,
  enumerable: true,
  get: {
    type() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLLIElement"].prototype, "HTMLLIElement", "type_get", arguments);
    }
  }.type,
  set: {
    type() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLLIElement"].prototype, "HTMLLIElement", "type_set", arguments);
    }
  }.type
});