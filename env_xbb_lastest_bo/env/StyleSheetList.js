// StyleSheetList对象

StyleSheetList = function StyleSheetList() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof StyleSheetList)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('StyleSheetList 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(StyleSheetList, "StyleSheetList");
bodavm.toolsFunc.defineProperty(StyleSheetList.prototype, "length", {
  configurable: true,
  enumerable: true,
  get: function length() {
    return bodavm.toolsFunc.dispatch(this, StyleSheetList.prototype, "StyleSheetList", "length_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(StyleSheetList.prototype, "item", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function item() {
    return bodavm.toolsFunc.dispatch(this, StyleSheetList.prototype, "StyleSheetList", "item", arguments);
  }
});