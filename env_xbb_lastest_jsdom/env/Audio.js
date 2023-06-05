// Audio对象

bodavm.memory.globalobj['Audio'] = function Audio() {
  console.log_copy('Audio 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  this._boarg = new bodaobj.window.Audio();
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['Audio'], "Audio");
bodavm.memory.globalobj['Audio'].prototype.__proto__ = bodavm.memory.globalobj['HTMLMediaElement'].prototype;