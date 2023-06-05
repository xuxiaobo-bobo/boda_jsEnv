bodavm.memory.globalobj['StyleMedia'] = function StyleMedia() {
  console.log_copy('StyleMedia 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['StyleMedia'], "StyleMedia");
bodavm.toolsFunc.defineProperty('StyleMedia', "matchMedium", {
  configurable: true,
  enumerable: true,
  get: function matchMedium() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['StyleMedia'].prototype, "StyleMedia", "matchMedium", arguments);
  },
  set: undefined
}, 'prototype');

// styleMedia对象
bodavm.memory.globalobj['styleMedia'] = {
  _boisinit: bodavm.config.isinit
};
bodavm.memory.globalobj['styleMedia'].__proto__ = bodavm.memory.globalobj['StyleMedia'].prototype;