// NavigationTransition对象

bodavm.memory.globalobj['NavigationTransition'] = function NavigationTransition() {
  console.log_copy('NavigationTransition 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof NavigationTransition)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['NavigationTransition'], "NavigationTransition");
bodavm.toolsFunc.defineProperty('NavigationTransition', "navigationType", {
  configurable: true,
  enumerable: true,
  get: function navigationType() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['NavigationTransition'].prototype, "NavigationTransition", "navigationType_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('NavigationTransition', "from", {
  configurable: true,
  enumerable: true,
  get: function from() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['NavigationTransition'].prototype, "NavigationTransition", "from_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('NavigationTransition', "finished", {
  configurable: true,
  enumerable: true,
  get: function finished() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['NavigationTransition'].prototype, "NavigationTransition", "finished_get", arguments);
  },
  set: undefined
}, 'prototype');