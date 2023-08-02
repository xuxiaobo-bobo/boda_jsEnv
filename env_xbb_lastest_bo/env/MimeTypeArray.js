// MimeTypeArray对象

MimeTypeArray = function MimeTypeArray() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof MimeTypeArray)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('MimeTypeArray 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(MimeTypeArray, "MimeTypeArray");
bodavm.toolsFunc.defineProperty(MimeTypeArray.prototype, "length", {
  configurable: true,
  enumerable: true,
  get: function length() {
    return bodavm.toolsFunc.dispatch(this, MimeTypeArray.prototype, "MimeTypeArray", "length_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(MimeTypeArray.prototype, "item", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function item() {
    return bodavm.toolsFunc.dispatch(this, MimeTypeArray.prototype, "MimeTypeArray", "item", arguments);
  }
});
bodavm.toolsFunc.defineProperty(MimeTypeArray.prototype, "namedItem", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function namedItem() {
    return bodavm.toolsFunc.dispatch(this, MimeTypeArray.prototype, "MimeTypeArray", "namedItem", arguments);
  }
});