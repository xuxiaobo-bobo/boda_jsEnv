bodavm.memory.notDefined['StyleMedia'] = function StyleMedia() {
  console.log_copy('StyleMedia 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
};
bodavm.toolsFunc.safeProto(bodavm.memory.notDefined['StyleMedia'], "StyleMedia");
bodavm.toolsFunc.defineProperty(bodavm.memory.notDefined['StyleMedia'].prototype, "matchMedium", {
  configurable: true,
  enumerable: true,
  get: function matchMedium() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.notDefined['StyleMedia'].prototype, "StyleMedia", "matchMedium_get", arguments);
  },
  set: undefined
});

// styleMedia对象
bodavm.memory.notDefined['styleMedia'] = {
  // _boisinit: bodavm.config.isinit
};
bodavm.memory.notDefined['styleMedia'].__proto__ = bodavm.memory.notDefined['StyleMedia'].prototype;