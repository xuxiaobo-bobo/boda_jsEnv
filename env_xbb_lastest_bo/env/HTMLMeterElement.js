// HTMLMeterElement对象

HTMLMeterElement = function HTMLMeterElement() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof HTMLMeterElement)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('HTMLMeterElement 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(HTMLMeterElement, "HTMLMeterElement");
HTMLMeterElement.prototype.__proto__ = HTMLElement.prototype;
HTMLMeterElement.__proto__ = HTMLElement;
bodavm.toolsFunc.defineProperty(HTMLMeterElement.prototype, "value", {
  configurable: true,
  enumerable: true,
  get: function value() {
    return bodavm.toolsFunc.dispatch(this, HTMLMeterElement.prototype, "HTMLMeterElement", "value_get", arguments);
  },
  set: function value() {
    return bodavm.toolsFunc.dispatch(this, HTMLMeterElement.prototype, "HTMLMeterElement", "value_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLMeterElement.prototype, "min", {
  configurable: true,
  enumerable: true,
  get: function min() {
    return bodavm.toolsFunc.dispatch(this, HTMLMeterElement.prototype, "HTMLMeterElement", "min_get", arguments);
  },
  set: function min() {
    return bodavm.toolsFunc.dispatch(this, HTMLMeterElement.prototype, "HTMLMeterElement", "min_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLMeterElement.prototype, "max", {
  configurable: true,
  enumerable: true,
  get: function max() {
    return bodavm.toolsFunc.dispatch(this, HTMLMeterElement.prototype, "HTMLMeterElement", "max_get", arguments);
  },
  set: function max() {
    return bodavm.toolsFunc.dispatch(this, HTMLMeterElement.prototype, "HTMLMeterElement", "max_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLMeterElement.prototype, "low", {
  configurable: true,
  enumerable: true,
  get: function low() {
    return bodavm.toolsFunc.dispatch(this, HTMLMeterElement.prototype, "HTMLMeterElement", "low_get", arguments);
  },
  set: function low() {
    return bodavm.toolsFunc.dispatch(this, HTMLMeterElement.prototype, "HTMLMeterElement", "low_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLMeterElement.prototype, "high", {
  configurable: true,
  enumerable: true,
  get: function high() {
    return bodavm.toolsFunc.dispatch(this, HTMLMeterElement.prototype, "HTMLMeterElement", "high_get", arguments);
  },
  set: function high() {
    return bodavm.toolsFunc.dispatch(this, HTMLMeterElement.prototype, "HTMLMeterElement", "high_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLMeterElement.prototype, "optimum", {
  configurable: true,
  enumerable: true,
  get: function optimum() {
    return bodavm.toolsFunc.dispatch(this, HTMLMeterElement.prototype, "HTMLMeterElement", "optimum_get", arguments);
  },
  set: function optimum() {
    return bodavm.toolsFunc.dispatch(this, HTMLMeterElement.prototype, "HTMLMeterElement", "optimum_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLMeterElement.prototype, "labels", {
  configurable: true,
  enumerable: true,
  get: function labels() {
    return bodavm.toolsFunc.dispatch(this, HTMLMeterElement.prototype, "HTMLMeterElement", "labels_get", arguments);
  },
  set: undefined
});