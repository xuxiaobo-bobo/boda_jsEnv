// TransformStream对象

bodaEnv.memory.globlProtoObj["TransformStream"] = function TransformStream() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('TransformStream 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["TransformStream"], "TransformStream");
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["TransformStream"].prototype, "readable", {
  configurable: true,
  enumerable: true,
  get: {
    readable() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["TransformStream"].prototype, "TransformStream", "readable_get", arguments);
    }
  }.readable,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["TransformStream"].prototype, "writable", {
  configurable: true,
  enumerable: true,
  get: {
    writable() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["TransformStream"].prototype, "TransformStream", "writable_get", arguments);
    }
  }.writable,
  set: undefined
});