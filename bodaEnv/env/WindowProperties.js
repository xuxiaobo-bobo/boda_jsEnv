bodaEnv.memory.globlProtoObj['WindowProperties'] = function () {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof bodaEnv.memory.globlProtoObj['WindowProperties'])) {
    return bodaEnv.toolsFunc.throwError("TypeError", "Failed to construct 'WindowControlsOverlayGeometryChangeEvent': 2 arguments required, but only 0 present.");
  }
  ;
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('bodaEnv.memory.globlProtoObj[WindowProperties] 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj['WindowProperties'], 'WindowProperties');
bodaEnv.memory.globlProtoObj['WindowProperties'].prototype.__proto__ = bodaEnv.memory.globlProtoObj['EventTarget'].prototype;
bodaEnv.memory.globlProtoObj['WindowProperties'].__proto__ = bodaEnv.memory.globlProtoObj['EventTarget'];
delete bodaEnv.memory.globlProtoObj['WindowProperties'].prototype.constructor;