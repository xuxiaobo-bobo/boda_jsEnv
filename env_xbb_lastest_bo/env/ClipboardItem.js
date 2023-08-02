// ClipboardItem对象

ClipboardItem = function ClipboardItem() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof ClipboardItem)) {
    return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'ClipboardItem': 1 argument required, but only 0 present.");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('ClipboardItem 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(ClipboardItem, "ClipboardItem");
bodavm.toolsFunc.defineProperty(ClipboardItem.prototype, "types", {
  configurable: true,
  enumerable: true,
  get: function types() {
    return bodavm.toolsFunc.dispatch(this, ClipboardItem.prototype, "ClipboardItem", "types_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(ClipboardItem.prototype, "getType", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getType() {
    return bodavm.toolsFunc.dispatch(this, ClipboardItem.prototype, "ClipboardItem", "getType", arguments);
  }
});