// BarProp对象

BarProp = function BarProp() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof BarProp)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('BarProp 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(BarProp, "BarProp");
bodavm.toolsFunc.defineProperty(BarProp.prototype, "visible", {
  configurable: true,
  enumerable: true,
  get: function visible() {
    return bodavm.toolsFunc.dispatch(this, BarProp.prototype, "BarProp", "visible_get", arguments);
  },
  set: undefined
});