// HTMLFormControlsCollection对象

HTMLFormControlsCollection = function HTMLFormControlsCollection() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof HTMLFormControlsCollection)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('HTMLFormControlsCollection 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(HTMLFormControlsCollection, "HTMLFormControlsCollection");
HTMLFormControlsCollection.prototype.__proto__ = HTMLCollection.prototype;
HTMLFormControlsCollection.__proto__ = HTMLCollection;
bodavm.toolsFunc.defineProperty(HTMLFormControlsCollection.prototype, "namedItem", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function namedItem() {
    return bodavm.toolsFunc.dispatch(this, HTMLFormControlsCollection.prototype, "HTMLFormControlsCollection", "namedItem", arguments);
  }
});