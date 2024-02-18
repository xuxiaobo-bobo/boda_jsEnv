// CanvasFilter对象

bodaEnv.memory.globlProtoObj['CanvasFilter'] = function CanvasFilter() {
  bodaEnv.toolsFunc.console_copy('CanvasFilter 实例化对象参数为 ->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof bodaEnv.memory.globlProtoObj['CanvasFilter'])) {
    return bodaEnv.toolsFunc.throwError("TypeError", "Failed to construct 'CanvasFilter': 1 argument required, but only 0 present.");
  }
  ;
  this._boisinit = bodaEnv.config.isinit;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj['CanvasFilter'], "CanvasFilter");
delete bodaEnv.memory.globlProtoObj['CanvasFilter'].prototype.constructor;