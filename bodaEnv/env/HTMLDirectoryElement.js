// HTMLDirectoryElement对象

bodaEnv.memory.globlProtoObj["HTMLDirectoryElement"] = function HTMLDirectoryElement() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('HTMLDirectoryElement 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["HTMLDirectoryElement"], "HTMLDirectoryElement");
bodaEnv.memory.globlProtoObj["HTMLDirectoryElement"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["HTMLElement"].prototype;
bodaEnv.memory.globlProtoObj["HTMLDirectoryElement"].__proto__ = bodaEnv.memory.globlProtoObj["HTMLElement"];
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLDirectoryElement"].prototype, "compact", {
  configurable: true,
  enumerable: true,
  get: {
    compact() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLDirectoryElement"].prototype, "HTMLDirectoryElement", "compact_get", arguments);
    }
  }.compact,
  set: {
    compact() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLDirectoryElement"].prototype, "HTMLDirectoryElement", "compact_set", arguments);
    }
  }.compact
});