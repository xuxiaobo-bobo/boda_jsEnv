// HTMLParamElement对象

HTMLParamElement = function HTMLParamElement() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof HTMLParamElement)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('HTMLParamElement 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(HTMLParamElement, "HTMLParamElement");
HTMLParamElement.prototype.__proto__ = HTMLElement.prototype;
HTMLParamElement.__proto__ = HTMLElement;
bodavm.toolsFunc.defineProperty(HTMLParamElement.prototype, "name", {
  configurable: true,
  enumerable: true,
  get: function name() {
    return bodavm.toolsFunc.dispatch(this, HTMLParamElement.prototype, "HTMLParamElement", "name_get", arguments);
  },
  set: function name() {
    return bodavm.toolsFunc.dispatch(this, HTMLParamElement.prototype, "HTMLParamElement", "name_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLParamElement.prototype, "value", {
  configurable: true,
  enumerable: true,
  get: function value() {
    return bodavm.toolsFunc.dispatch(this, HTMLParamElement.prototype, "HTMLParamElement", "value_get", arguments);
  },
  set: function value() {
    return bodavm.toolsFunc.dispatch(this, HTMLParamElement.prototype, "HTMLParamElement", "value_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLParamElement.prototype, "type", {
  configurable: true,
  enumerable: true,
  get: function type() {
    return bodavm.toolsFunc.dispatch(this, HTMLParamElement.prototype, "HTMLParamElement", "type_get", arguments);
  },
  set: function type() {
    return bodavm.toolsFunc.dispatch(this, HTMLParamElement.prototype, "HTMLParamElement", "type_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLParamElement.prototype, "valueType", {
  configurable: true,
  enumerable: true,
  get: function valueType() {
    return bodavm.toolsFunc.dispatch(this, HTMLParamElement.prototype, "HTMLParamElement", "valueType_get", arguments);
  },
  set: function valueType() {
    return bodavm.toolsFunc.dispatch(this, HTMLParamElement.prototype, "HTMLParamElement", "valueType_set", arguments);
  }
});