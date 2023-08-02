// SVGStyleElement对象

SVGStyleElement = function SVGStyleElement() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof SVGStyleElement)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('SVGStyleElement 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(SVGStyleElement, "SVGStyleElement");
SVGStyleElement.prototype.__proto__ = SVGElement.prototype;
SVGStyleElement.__proto__ = SVGElement;
bodavm.toolsFunc.defineProperty(SVGStyleElement.prototype, "type", {
  configurable: true,
  enumerable: true,
  get: function type() {
    return bodavm.toolsFunc.dispatch(this, SVGStyleElement.prototype, "SVGStyleElement", "type_get", arguments);
  },
  set: function type() {
    return bodavm.toolsFunc.dispatch(this, SVGStyleElement.prototype, "SVGStyleElement", "type_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(SVGStyleElement.prototype, "media", {
  configurable: true,
  enumerable: true,
  get: function media() {
    return bodavm.toolsFunc.dispatch(this, SVGStyleElement.prototype, "SVGStyleElement", "media_get", arguments);
  },
  set: function media() {
    return bodavm.toolsFunc.dispatch(this, SVGStyleElement.prototype, "SVGStyleElement", "media_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(SVGStyleElement.prototype, "title", {
  configurable: true,
  enumerable: true,
  get: function title() {
    return bodavm.toolsFunc.dispatch(this, SVGStyleElement.prototype, "SVGStyleElement", "title_get", arguments);
  },
  set: function title() {
    return bodavm.toolsFunc.dispatch(this, SVGStyleElement.prototype, "SVGStyleElement", "title_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(SVGStyleElement.prototype, "sheet", {
  configurable: true,
  enumerable: true,
  get: function sheet() {
    return bodavm.toolsFunc.dispatch(this, SVGStyleElement.prototype, "SVGStyleElement", "sheet_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(SVGStyleElement.prototype, "disabled", {
  configurable: true,
  enumerable: true,
  get: function disabled() {
    return bodavm.toolsFunc.dispatch(this, SVGStyleElement.prototype, "SVGStyleElement", "disabled_get", arguments);
  },
  set: function disabled() {
    return bodavm.toolsFunc.dispatch(this, SVGStyleElement.prototype, "SVGStyleElement", "disabled_set", arguments);
  }
});