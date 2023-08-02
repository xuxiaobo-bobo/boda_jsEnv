// AudioListener对象

AudioListener = function AudioListener() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof AudioListener)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('AudioListener 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(AudioListener, "AudioListener");
bodavm.toolsFunc.defineProperty(AudioListener.prototype, "positionX", {
  configurable: true,
  enumerable: true,
  get: function positionX() {
    return bodavm.toolsFunc.dispatch(this, AudioListener.prototype, "AudioListener", "positionX_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(AudioListener.prototype, "positionY", {
  configurable: true,
  enumerable: true,
  get: function positionY() {
    return bodavm.toolsFunc.dispatch(this, AudioListener.prototype, "AudioListener", "positionY_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(AudioListener.prototype, "positionZ", {
  configurable: true,
  enumerable: true,
  get: function positionZ() {
    return bodavm.toolsFunc.dispatch(this, AudioListener.prototype, "AudioListener", "positionZ_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(AudioListener.prototype, "forwardX", {
  configurable: true,
  enumerable: true,
  get: function forwardX() {
    return bodavm.toolsFunc.dispatch(this, AudioListener.prototype, "AudioListener", "forwardX_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(AudioListener.prototype, "forwardY", {
  configurable: true,
  enumerable: true,
  get: function forwardY() {
    return bodavm.toolsFunc.dispatch(this, AudioListener.prototype, "AudioListener", "forwardY_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(AudioListener.prototype, "forwardZ", {
  configurable: true,
  enumerable: true,
  get: function forwardZ() {
    return bodavm.toolsFunc.dispatch(this, AudioListener.prototype, "AudioListener", "forwardZ_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(AudioListener.prototype, "upX", {
  configurable: true,
  enumerable: true,
  get: function upX() {
    return bodavm.toolsFunc.dispatch(this, AudioListener.prototype, "AudioListener", "upX_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(AudioListener.prototype, "upY", {
  configurable: true,
  enumerable: true,
  get: function upY() {
    return bodavm.toolsFunc.dispatch(this, AudioListener.prototype, "AudioListener", "upY_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(AudioListener.prototype, "upZ", {
  configurable: true,
  enumerable: true,
  get: function upZ() {
    return bodavm.toolsFunc.dispatch(this, AudioListener.prototype, "AudioListener", "upZ_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(AudioListener.prototype, "setOrientation", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function setOrientation() {
    return bodavm.toolsFunc.dispatch(this, AudioListener.prototype, "AudioListener", "setOrientation", arguments);
  }
});
bodavm.toolsFunc.defineProperty(AudioListener.prototype, "setPosition", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function setPosition() {
    return bodavm.toolsFunc.dispatch(this, AudioListener.prototype, "AudioListener", "setPosition", arguments);
  }
});