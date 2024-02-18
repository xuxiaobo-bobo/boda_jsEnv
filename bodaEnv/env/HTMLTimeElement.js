// HTMLTimeElement对象

bodaEnv.memory.globlProtoObj["HTMLTimeElement"] = function HTMLTimeElement() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('HTMLTimeElement 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["HTMLTimeElement"], "HTMLTimeElement");
bodaEnv.memory.globlProtoObj["HTMLTimeElement"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["HTMLElement"].prototype;
bodaEnv.memory.globlProtoObj["HTMLTimeElement"].__proto__ = bodaEnv.memory.globlProtoObj["HTMLElement"];
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLTimeElement"].prototype, "dateTime", {
  configurable: true,
  enumerable: true,
  get: {
    dateTime() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLTimeElement"].prototype, "HTMLTimeElement", "dateTime_get", arguments);
    }
  }.dateTime,
  set: {
    dateTime() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLTimeElement"].prototype, "HTMLTimeElement", "dateTime_set", arguments);
    }
  }.dateTime
});