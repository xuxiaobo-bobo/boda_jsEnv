// PeriodicWave对象

PeriodicWave = function PeriodicWave() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof PeriodicWave)) {
    return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'PeriodicWave': 1 argument required, but only 0 present.");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('PeriodicWave 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(PeriodicWave, "PeriodicWave");