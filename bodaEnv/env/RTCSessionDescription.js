// RTCSesbodaDescription对象

bodaEnv.memory.globlProtoObj["RTCSesbodaDescription"] = function RTCSesbodaDescription() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('RTCSesbodaDescription 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["RTCSesbodaDescription"], "RTCSesbodaDescription");
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["RTCSesbodaDescription"].prototype, "type", {
  configurable: true,
  enumerable: true,
  get: {
    type() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["RTCSesbodaDescription"].prototype, "RTCSesbodaDescription", "type_get", arguments);
    }
  }.type,
  set: {
    type() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["RTCSesbodaDescription"].prototype, "RTCSesbodaDescription", "type_set", arguments);
    }
  }.type
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["RTCSesbodaDescription"].prototype, "sdp", {
  configurable: true,
  enumerable: true,
  get: {
    sdp() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["RTCSesbodaDescription"].prototype, "RTCSesbodaDescription", "sdp_get", arguments);
    }
  }.sdp,
  set: {
    sdp() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["RTCSesbodaDescription"].prototype, "RTCSesbodaDescription", "sdp_set", arguments);
    }
  }.sdp
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["RTCSesbodaDescription"].prototype, "toJSON", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    toJSON() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["RTCSesbodaDescription"].prototype, "RTCSesbodaDescription", "toJSON", arguments);
    }
  }.toJSON
});