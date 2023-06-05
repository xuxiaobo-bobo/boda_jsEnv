// AnimationEffect对象

bodavm.memory.globalobj['AnimationEffect'] = function AnimationEffect() {
  console.log_copy('AnimationEffect 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof AnimationEffect)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['AnimationEffect'], "AnimationEffect");
bodavm.toolsFunc.defineProperty('AnimationEffect', "getComputedTiming", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getComputedTiming() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['AnimationEffect'].prototype, "AnimationEffect", "getComputedTiming", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('AnimationEffect', "getTiming", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getTiming() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['AnimationEffect'].prototype, "AnimationEffect", "getTiming", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('AnimationEffect', "updateTiming", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function updateTiming() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['AnimationEffect'].prototype, "AnimationEffect", "updateTiming", arguments);
  }
}, 'prototype');