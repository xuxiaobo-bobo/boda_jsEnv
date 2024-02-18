// MediaSourceHandle对象

bodaEnv.memory.globlProtoObj["MediaSourceHandle"] = function MediaSourceHandle() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('MediaSourceHandle 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["MediaSourceHandle"], "MediaSourceHandle");