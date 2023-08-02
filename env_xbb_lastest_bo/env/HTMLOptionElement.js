// HTMLOptionElement对象

HTMLOptionElement = function HTMLOptionElement() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof HTMLOptionElement)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('HTMLOptionElement 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(HTMLOptionElement, "HTMLOptionElement");
HTMLOptionElement.prototype.__proto__ = HTMLElement.prototype;
HTMLOptionElement.__proto__ = HTMLElement;
bodavm.toolsFunc.defineProperty(HTMLOptionElement.prototype, "disabled", {
  configurable: true,
  enumerable: true,
  get: function disabled() {
    return bodavm.toolsFunc.dispatch(this, HTMLOptionElement.prototype, "HTMLOptionElement", "disabled_get", arguments);
  },
  set: function disabled() {
    return bodavm.toolsFunc.dispatch(this, HTMLOptionElement.prototype, "HTMLOptionElement", "disabled_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLOptionElement.prototype, "form", {
  configurable: true,
  enumerable: true,
  get: function form() {
    return bodavm.toolsFunc.dispatch(this, HTMLOptionElement.prototype, "HTMLOptionElement", "form_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(HTMLOptionElement.prototype, "label", {
  configurable: true,
  enumerable: true,
  get: function label() {
    return bodavm.toolsFunc.dispatch(this, HTMLOptionElement.prototype, "HTMLOptionElement", "label_get", arguments);
  },
  set: function label() {
    return bodavm.toolsFunc.dispatch(this, HTMLOptionElement.prototype, "HTMLOptionElement", "label_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLOptionElement.prototype, "defaultSelected", {
  configurable: true,
  enumerable: true,
  get: function defaultSelected() {
    return bodavm.toolsFunc.dispatch(this, HTMLOptionElement.prototype, "HTMLOptionElement", "defaultSelected_get", arguments);
  },
  set: function defaultSelected() {
    return bodavm.toolsFunc.dispatch(this, HTMLOptionElement.prototype, "HTMLOptionElement", "defaultSelected_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLOptionElement.prototype, "selected", {
  configurable: true,
  enumerable: true,
  get: function selected() {
    return bodavm.toolsFunc.dispatch(this, HTMLOptionElement.prototype, "HTMLOptionElement", "selected_get", arguments);
  },
  set: function selected() {
    return bodavm.toolsFunc.dispatch(this, HTMLOptionElement.prototype, "HTMLOptionElement", "selected_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLOptionElement.prototype, "value", {
  configurable: true,
  enumerable: true,
  get: function value() {
    return bodavm.toolsFunc.dispatch(this, HTMLOptionElement.prototype, "HTMLOptionElement", "value_get", arguments);
  },
  set: function value() {
    return bodavm.toolsFunc.dispatch(this, HTMLOptionElement.prototype, "HTMLOptionElement", "value_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLOptionElement.prototype, "text", {
  configurable: true,
  enumerable: true,
  get: function text() {
    return bodavm.toolsFunc.dispatch(this, HTMLOptionElement.prototype, "HTMLOptionElement", "text_get", arguments);
  },
  set: function text() {
    return bodavm.toolsFunc.dispatch(this, HTMLOptionElement.prototype, "HTMLOptionElement", "text_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLOptionElement.prototype, "index", {
  configurable: true,
  enumerable: true,
  get: function index() {
    return bodavm.toolsFunc.dispatch(this, HTMLOptionElement.prototype, "HTMLOptionElement", "index_get", arguments);
  },
  set: undefined
});