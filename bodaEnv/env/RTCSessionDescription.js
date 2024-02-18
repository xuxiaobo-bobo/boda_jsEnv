// RTCSessionDescription对象

bodaEnv.memory.globlProtoObj["RTCSessionDescription"] = function RTCSessionDescription() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('RTCSessionDescription 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["RTCSessionDescription"], "RTCSessionDescription");
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["RTCSessionDescription"].prototype, "type", {
  configurable: true,
  enumerable: true,
  get: {
    type() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["RTCSessionDescription"].prototype, "RTCSessionDescription", "type_get", arguments);
    }
  }.type,
  set: {
    type() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["RTCSessionDescription"].prototype, "RTCSessionDescription", "type_set", arguments);
    }
  }.type
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["RTCSessionDescription"].prototype, "sdp", {
  configurable: true,
  enumerable: true,
  get: {
    sdp() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["RTCSessionDescription"].prototype, "RTCSessionDescription", "sdp_get", arguments);
    }
  }.sdp,
  set: {
    sdp() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["RTCSessionDescription"].prototype, "RTCSessionDescription", "sdp_set", arguments);
    }
  }.sdp
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["RTCSessionDescription"].prototype, "toJSON", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    toJSON() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["RTCSessionDescription"].prototype, "RTCSessionDescription", "toJSON", arguments);
    }
  }.toJSON
});