// HTMLModElement对象

bodaEnv.memory.globlProtoObj["HTMLModElement"] = function HTMLModElement() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('HTMLModElement 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["HTMLModElement"], "HTMLModElement");
bodaEnv.memory.globlProtoObj["HTMLModElement"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["HTMLElement"].prototype;
bodaEnv.memory.globlProtoObj["HTMLModElement"].__proto__ = bodaEnv.memory.globlProtoObj["HTMLElement"];
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLModElement"].prototype, "cite", {
  configurable: true,
  enumerable: true,
  get: {
    cite() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLModElement"].prototype, "HTMLModElement", "cite_get", arguments);
    }
  }.cite,
  set: {
    cite() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLModElement"].prototype, "HTMLModElement", "cite_set", arguments);
    }
  }.cite
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLModElement"].prototype, "dateTime", {
  configurable: true,
  enumerable: true,
  get: {
    dateTime() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLModElement"].prototype, "HTMLModElement", "dateTime_get", arguments);
    }
  }.dateTime,
  set: {
    dateTime() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLModElement"].prototype, "HTMLModElement", "dateTime_set", arguments);
    }
  }.dateTime
});