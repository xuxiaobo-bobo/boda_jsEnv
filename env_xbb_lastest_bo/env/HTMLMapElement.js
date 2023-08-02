// HTMLMapElement对象

HTMLMapElement = function HTMLMapElement() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof HTMLMapElement)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('HTMLMapElement 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(HTMLMapElement, "HTMLMapElement");
HTMLMapElement.prototype.__proto__ = HTMLElement.prototype;
HTMLMapElement.__proto__ = HTMLElement;
bodavm.toolsFunc.defineProperty(HTMLMapElement.prototype, "name", {
  configurable: true,
  enumerable: true,
  get: function name() {
    return bodavm.toolsFunc.dispatch(this, HTMLMapElement.prototype, "HTMLMapElement", "name_get", arguments);
  },
  set: function name() {
    return bodavm.toolsFunc.dispatch(this, HTMLMapElement.prototype, "HTMLMapElement", "name_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLMapElement.prototype, "areas", {
  configurable: true,
  enumerable: true,
  get: function areas() {
    return bodavm.toolsFunc.dispatch(this, HTMLMapElement.prototype, "HTMLMapElement", "areas_get", arguments);
  },
  set: undefined
});