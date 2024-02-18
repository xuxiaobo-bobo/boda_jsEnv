// WebTransportBidirectionalStream对象

bodaEnv.memory.globlProtoObj["WebTransportBidirectionalStream"] = function WebTransportBidirectionalStream() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('WebTransportBidirectionalStream 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["WebTransportBidirectionalStream"], "WebTransportBidirectionalStream");
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebTransportBidirectionalStream"].prototype, "readable", {
  configurable: true,
  enumerable: true,
  get: {
    readable() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebTransportBidirectionalStream"].prototype, "WebTransportBidirectionalStream", "readable_get", arguments);
    }
  }.readable,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebTransportBidirectionalStream"].prototype, "writable", {
  configurable: true,
  enumerable: true,
  get: {
    writable() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebTransportBidirectionalStream"].prototype, "WebTransportBidirectionalStream", "writable_get", arguments);
    }
  }.writable,
  set: undefined
});