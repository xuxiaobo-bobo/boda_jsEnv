// HTMLDetailsElement对象

bodaEnv.memory.globlProtoObj["HTMLDetailsElement"] = function HTMLDetailsElement() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('HTMLDetailsElement 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["HTMLDetailsElement"], "HTMLDetailsElement");
bodaEnv.memory.globlProtoObj["HTMLDetailsElement"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["HTMLElement"].prototype;
bodaEnv.memory.globlProtoObj["HTMLDetailsElement"].__proto__ = bodaEnv.memory.globlProtoObj["HTMLElement"];
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLDetailsElement"].prototype, "open", {
  configurable: true,
  enumerable: true,
  get: {
    open() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLDetailsElement"].prototype, "HTMLDetailsElement", "open_get", arguments);
    }
  }.open,
  set: {
    open() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLDetailsElement"].prototype, "HTMLDetailsElement", "open_set", arguments);
    }
  }.open
});