// AudioWorklet对象

AudioWorklet = function AudioWorklet() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof AudioWorklet)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('AudioWorklet 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(AudioWorklet, "AudioWorklet");
AudioWorklet.prototype.__proto__ = Worklet.prototype;
AudioWorklet.__proto__ = Worklet;