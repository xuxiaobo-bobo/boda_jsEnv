// TouchList对象

TouchList = function TouchList() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof TouchList)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('TouchList 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(TouchList, "TouchList");
bodavm.toolsFunc.defineProperty(TouchList.prototype, "length", {
  configurable: true,
  enumerable: true,
  get: function length() {
    return bodavm.toolsFunc.dispatch(this, TouchList.prototype, "TouchList", "length_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(TouchList.prototype, "item", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function item() {
    return bodavm.toolsFunc.dispatch(this, TouchList.prototype, "TouchList", "item", arguments);
  }
});