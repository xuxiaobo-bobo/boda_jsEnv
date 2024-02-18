// BlobEvent对象

bodaEnv.memory.globlProtoObj["BlobEvent"] = function BlobEvent() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('BlobEvent 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["BlobEvent"], "BlobEvent");
bodaEnv.memory.globlProtoObj["BlobEvent"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["Event"].prototype;
bodaEnv.memory.globlProtoObj["BlobEvent"].__proto__ = bodaEnv.memory.globlProtoObj["Event"];
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["BlobEvent"].prototype, "data", {
  configurable: true,
  enumerable: true,
  get: {
    data() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["BlobEvent"].prototype, "BlobEvent", "data_get", arguments);
    }
  }.data,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["BlobEvent"].prototype, "timecode", {
  configurable: true,
  enumerable: true,
  get: {
    timecode() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["BlobEvent"].prototype, "BlobEvent", "timecode_get", arguments);
    }
  }.timecode,
  set: undefined
});