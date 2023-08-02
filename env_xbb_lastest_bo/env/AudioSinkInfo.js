// AudioSinkInfo对象

AudioSinkInfo = function AudioSinkInfo() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof AudioSinkInfo)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('AudioSinkInfo 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(AudioSinkInfo, "AudioSinkInfo");
bodavm.toolsFunc.defineProperty(AudioSinkInfo.prototype, "type", {
  configurable: true,
  enumerable: true,
  get: function type() {
    return bodavm.toolsFunc.dispatch(this, AudioSinkInfo.prototype, "AudioSinkInfo", "type_get", arguments);
  },
  set: undefined
});