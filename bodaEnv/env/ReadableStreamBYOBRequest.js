// ReadableStreamBYOBRequest对象

bodaEnv.memory.globlProtoObj["ReadableStreamBYOBRequest"] = function ReadableStreamBYOBRequest() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('ReadableStreamBYOBRequest 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["ReadableStreamBYOBRequest"], "ReadableStreamBYOBRequest");
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["ReadableStreamBYOBRequest"].prototype, "view", {
  configurable: true,
  enumerable: true,
  get: {
    view() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["ReadableStreamBYOBRequest"].prototype, "ReadableStreamBYOBRequest", "view_get", arguments);
    }
  }.view,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["ReadableStreamBYOBRequest"].prototype, "respond", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    respond() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["ReadableStreamBYOBRequest"].prototype, "ReadableStreamBYOBRequest", "respond", arguments);
    }
  }.respond
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["ReadableStreamBYOBRequest"].prototype, "respondWithNewView", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    respondWithNewView() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["ReadableStreamBYOBRequest"].prototype, "ReadableStreamBYOBRequest", "respondWithNewView", arguments);
    }
  }.respondWithNewView
});