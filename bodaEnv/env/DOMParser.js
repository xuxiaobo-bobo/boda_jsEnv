// DOMParser对象

bodaEnv.memory.globlProtoObj["DOMParser"] = function DOMParser() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('DOMParser 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["DOMParser"], "DOMParser");
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["DOMParser"].prototype, "parseFromString", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    parseFromString() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["DOMParser"].prototype, "DOMParser", "parseFromString", arguments);
    }
  }.parseFromString
});