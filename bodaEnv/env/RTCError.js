// RTCError对象

bodaEnv.memory.globlProtoObj["RTCError"] = function RTCError() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('RTCError 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["RTCError"], "RTCError");
bodaEnv.memory.globlProtoObj["RTCError"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["DOMException"].prototype;
bodaEnv.memory.globlProtoObj["RTCError"].__proto__ = bodaEnv.memory.globlProtoObj["DOMException"];
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["RTCError"].prototype, "errorDetail", {
  configurable: true,
  enumerable: true,
  get: {
    errorDetail() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["RTCError"].prototype, "RTCError", "errorDetail_get", arguments);
    }
  }.errorDetail,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["RTCError"].prototype, "sdpLineNumber", {
  configurable: true,
  enumerable: true,
  get: {
    sdpLineNumber() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["RTCError"].prototype, "RTCError", "sdpLineNumber_get", arguments);
    }
  }.sdpLineNumber,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["RTCError"].prototype, "httpRequestStatusCode", {
  configurable: true,
  enumerable: true,
  get: {
    httpRequestStatusCode() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["RTCError"].prototype, "RTCError", "httpRequestStatusCode_get", arguments);
    }
  }.httpRequestStatusCode,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["RTCError"].prototype, "sctpCauseCode", {
  configurable: true,
  enumerable: true,
  get: {
    sctpCauseCode() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["RTCError"].prototype, "RTCError", "sctpCauseCode_get", arguments);
    }
  }.sctpCauseCode,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["RTCError"].prototype, "receivedAlert", {
  configurable: true,
  enumerable: true,
  get: {
    receivedAlert() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["RTCError"].prototype, "RTCError", "receivedAlert_get", arguments);
    }
  }.receivedAlert,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["RTCError"].prototype, "sentAlert", {
  configurable: true,
  enumerable: true,
  get: {
    sentAlert() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["RTCError"].prototype, "RTCError", "sentAlert_get", arguments);
    }
  }.sentAlert,
  set: undefined
});