// StaticRange对象

bodaEnv.memory.globlProtoObj["StaticRange"] = function StaticRange() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('StaticRange 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["StaticRange"], "StaticRange");
bodaEnv.memory.globlProtoObj["StaticRange"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["AbstractRange"].prototype;
bodaEnv.memory.globlProtoObj["StaticRange"].__proto__ = bodaEnv.memory.globlProtoObj["AbstractRange"];