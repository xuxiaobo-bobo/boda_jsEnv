// PeriodicWave对象

bodavm.memory.globalobj['PeriodicWave'] = function PeriodicWave() {
  console.log_copy('PeriodicWave 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof PeriodicWave)) {
    return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'PeriodicWave': 1 argument required, but only 0 present.");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['PeriodicWave'], "PeriodicWave");