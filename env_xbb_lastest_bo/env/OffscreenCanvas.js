// OffscreenCanvas对象

OffscreenCanvas = function OffscreenCanvas() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof OffscreenCanvas)) {
    return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'OffscreenCanvas': 2 arguments required, but only 0 present.");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('OffscreenCanvas 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(OffscreenCanvas, "OffscreenCanvas");
OffscreenCanvas.prototype.__proto__ = EventTarget.prototype;
OffscreenCanvas.__proto__ = EventTarget;
bodavm.toolsFunc.defineProperty(OffscreenCanvas.prototype, "width", {
  configurable: true,
  enumerable: true,
  get: function width() {
    return bodavm.toolsFunc.dispatch(this, OffscreenCanvas.prototype, "OffscreenCanvas", "width_get", arguments);
  },
  set: function width() {
    return bodavm.toolsFunc.dispatch(this, OffscreenCanvas.prototype, "OffscreenCanvas", "width_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(OffscreenCanvas.prototype, "height", {
  configurable: true,
  enumerable: true,
  get: function height() {
    return bodavm.toolsFunc.dispatch(this, OffscreenCanvas.prototype, "OffscreenCanvas", "height_get", arguments);
  },
  set: function height() {
    return bodavm.toolsFunc.dispatch(this, OffscreenCanvas.prototype, "OffscreenCanvas", "height_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(OffscreenCanvas.prototype, "oncontextlost", {
  configurable: true,
  enumerable: true,
  get: function oncontextlost() {
    return bodavm.toolsFunc.dispatch(this, OffscreenCanvas.prototype, "OffscreenCanvas", "oncontextlost_get", arguments);
  },
  set: function oncontextlost() {
    return bodavm.toolsFunc.dispatch(this, OffscreenCanvas.prototype, "OffscreenCanvas", "oncontextlost_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(OffscreenCanvas.prototype, "oncontextrestored", {
  configurable: true,
  enumerable: true,
  get: function oncontextrestored() {
    return bodavm.toolsFunc.dispatch(this, OffscreenCanvas.prototype, "OffscreenCanvas", "oncontextrestored_get", arguments);
  },
  set: function oncontextrestored() {
    return bodavm.toolsFunc.dispatch(this, OffscreenCanvas.prototype, "OffscreenCanvas", "oncontextrestored_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(OffscreenCanvas.prototype, "convertToBlob", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function convertToBlob() {
    return bodavm.toolsFunc.dispatch(this, OffscreenCanvas.prototype, "OffscreenCanvas", "convertToBlob", arguments);
  }
});
bodavm.toolsFunc.defineProperty(OffscreenCanvas.prototype, "getContext", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getContext() {
    return bodavm.toolsFunc.dispatch(this, OffscreenCanvas.prototype, "OffscreenCanvas", "getContext", arguments);
  }
});
bodavm.toolsFunc.defineProperty(OffscreenCanvas.prototype, "transferToImageBitmap", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function transferToImageBitmap() {
    return bodavm.toolsFunc.dispatch(this, OffscreenCanvas.prototype, "OffscreenCanvas", "transferToImageBitmap", arguments);
  }
});