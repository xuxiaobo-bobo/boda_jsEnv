// UserActivation对象

UserActivation = function UserActivation() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof UserActivation)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('UserActivation 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(UserActivation, "UserActivation");
bodavm.toolsFunc.defineProperty(UserActivation.prototype, "hasBeenActive", {
  configurable: true,
  enumerable: true,
  get: function hasBeenActive() {
    return bodavm.toolsFunc.dispatch(this, UserActivation.prototype, "UserActivation", "hasBeenActive_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(UserActivation.prototype, "isActive", {
  configurable: true,
  enumerable: true,
  get: function isActive() {
    return bodavm.toolsFunc.dispatch(this, UserActivation.prototype, "UserActivation", "isActive_get", arguments);
  },
  set: undefined
});