// UserActivation对象

bodavm.memory.globalobj['UserActivation'] = function UserActivation() {
  console.log_copy('UserActivation 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof UserActivation)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['UserActivation'], "UserActivation");
bodavm.toolsFunc.defineProperty('UserActivation', "hasBeenActive", {
  configurable: true,
  enumerable: true,
  get: function hasBeenActive() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['UserActivation'].prototype, "UserActivation", "hasBeenActive_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('UserActivation', "isActive", {
  configurable: true,
  enumerable: true,
  get: function isActive() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['UserActivation'].prototype, "UserActivation", "isActive_get", arguments);
  },
  set: undefined
}, 'prototype');