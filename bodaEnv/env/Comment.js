// Comment对象

bodaEnv.memory.globlProtoObj["Comment"] = function Comment() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('Comment 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["Comment"], "Comment");
bodaEnv.memory.globlProtoObj["Comment"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["CharacterData"].prototype;
bodaEnv.memory.globlProtoObj["Comment"].__proto__ = bodaEnv.memory.globlProtoObj["CharacterData"];