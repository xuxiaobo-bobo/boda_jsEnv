// PresentationReceiver对象

bodaEnv.memory.globlProtoObj["PresentationReceiver"] = function PresentationReceiver() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('PresentationReceiver 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["PresentationReceiver"], "PresentationReceiver");
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["PresentationReceiver"].prototype, "connectionList", {
  configurable: true,
  enumerable: true,
  get: {
    connectionList() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["PresentationReceiver"].prototype, "PresentationReceiver", "connectionList_get", arguments);
    }
  }.connectionList,
  set: undefined
});