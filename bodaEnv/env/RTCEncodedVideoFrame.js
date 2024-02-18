// RTCEncodedVideoFrame对象

bodaEnv.memory.globlProtoObj["RTCEncodedVideoFrame"] = function RTCEncodedVideoFrame() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('RTCEncodedVideoFrame 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["RTCEncodedVideoFrame"], "RTCEncodedVideoFrame");
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["RTCEncodedVideoFrame"].prototype, "type", {
  configurable: true,
  enumerable: true,
  get: {
    type() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["RTCEncodedVideoFrame"].prototype, "RTCEncodedVideoFrame", "type_get", arguments);
    }
  }.type,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["RTCEncodedVideoFrame"].prototype, "timestamp", {
  configurable: true,
  enumerable: true,
  get: {
    timestamp() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["RTCEncodedVideoFrame"].prototype, "RTCEncodedVideoFrame", "timestamp_get", arguments);
    }
  }.timestamp,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["RTCEncodedVideoFrame"].prototype, "data", {
  configurable: true,
  enumerable: true,
  get: {
    data() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["RTCEncodedVideoFrame"].prototype, "RTCEncodedVideoFrame", "data_get", arguments);
    }
  }.data,
  set: {
    data() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["RTCEncodedVideoFrame"].prototype, "RTCEncodedVideoFrame", "data_set", arguments);
    }
  }.data
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["RTCEncodedVideoFrame"].prototype, "getMetadata", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    getMetadata() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["RTCEncodedVideoFrame"].prototype, "RTCEncodedVideoFrame", "getMetadata", arguments);
    }
  }.getMetadata
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["RTCEncodedVideoFrame"].prototype, "toString", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    toString() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["RTCEncodedVideoFrame"].prototype, "RTCEncodedVideoFrame", "toString", arguments);
    }
  }.toString
});