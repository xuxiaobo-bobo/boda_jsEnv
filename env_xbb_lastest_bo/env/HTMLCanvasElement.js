// HTMLCanvasElement对象

HTMLCanvasElement = function HTMLCanvasElement() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof HTMLCanvasElement)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('HTMLCanvasElement 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(HTMLCanvasElement, "HTMLCanvasElement");
HTMLCanvasElement.prototype.__proto__ = HTMLElement.prototype;
HTMLCanvasElement.__proto__ = HTMLElement;
bodavm.toolsFunc.defineProperty(HTMLCanvasElement.prototype, "width", {
  configurable: true,
  enumerable: true,
  get: function width() {
    return bodavm.toolsFunc.dispatch(this, HTMLCanvasElement.prototype, "HTMLCanvasElement", "width_get", arguments);
  },
  set: function width() {
    return bodavm.toolsFunc.dispatch(this, HTMLCanvasElement.prototype, "HTMLCanvasElement", "width_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLCanvasElement.prototype, "height", {
  configurable: true,
  enumerable: true,
  get: function height() {
    return bodavm.toolsFunc.dispatch(this, HTMLCanvasElement.prototype, "HTMLCanvasElement", "height_get", arguments);
  },
  set: function height() {
    return bodavm.toolsFunc.dispatch(this, HTMLCanvasElement.prototype, "HTMLCanvasElement", "height_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLCanvasElement.prototype, "captureStream", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function captureStream() {
    return bodavm.toolsFunc.dispatch(this, HTMLCanvasElement.prototype, "HTMLCanvasElement", "captureStream", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLCanvasElement.prototype, "getContext", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getContext() {
    return bodavm.toolsFunc.dispatch(this, HTMLCanvasElement.prototype, "HTMLCanvasElement", "getContext", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLCanvasElement.prototype, "toBlob", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function toBlob() {
    return bodavm.toolsFunc.dispatch(this, HTMLCanvasElement.prototype, "HTMLCanvasElement", "toBlob", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLCanvasElement.prototype, "toDataURL", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function toDataURL() {
    return bodavm.toolsFunc.dispatch(this, HTMLCanvasElement.prototype, "HTMLCanvasElement", "toDataURL", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLCanvasElement.prototype, "transferControlToOffscreen", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function transferControlToOffscreen() {
    return bodavm.toolsFunc.dispatch(this, HTMLCanvasElement.prototype, "HTMLCanvasElement", "transferControlToOffscreen", arguments);
  }
});