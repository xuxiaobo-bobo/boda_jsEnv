// DOMRectList对象

DOMRectList = function DOMRectList() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof DOMRectList)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('DOMRectList 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(DOMRectList, "DOMRectList");
bodavm.toolsFunc.defineProperty(DOMRectList.prototype, "length", {
  configurable: true,
  enumerable: true,
  get: function length() {
    return bodavm.toolsFunc.dispatch(this, DOMRectList.prototype, "DOMRectList", "length_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(DOMRectList.prototype, "item", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function item() {
    return bodavm.toolsFunc.dispatch(this, DOMRectList.prototype, "DOMRectList", "item", arguments);
  }
});