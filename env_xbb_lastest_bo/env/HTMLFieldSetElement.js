// HTMLFieldSetElement对象

HTMLFieldSetElement = function HTMLFieldSetElement() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof HTMLFieldSetElement)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('HTMLFieldSetElement 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(HTMLFieldSetElement, "HTMLFieldSetElement");
HTMLFieldSetElement.prototype.__proto__ = HTMLElement.prototype;
HTMLFieldSetElement.__proto__ = HTMLElement;
bodavm.toolsFunc.defineProperty(HTMLFieldSetElement.prototype, "disabled", {
  configurable: true,
  enumerable: true,
  get: function disabled() {
    return bodavm.toolsFunc.dispatch(this, HTMLFieldSetElement.prototype, "HTMLFieldSetElement", "disabled_get", arguments);
  },
  set: function disabled() {
    return bodavm.toolsFunc.dispatch(this, HTMLFieldSetElement.prototype, "HTMLFieldSetElement", "disabled_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLFieldSetElement.prototype, "form", {
  configurable: true,
  enumerable: true,
  get: function form() {
    return bodavm.toolsFunc.dispatch(this, HTMLFieldSetElement.prototype, "HTMLFieldSetElement", "form_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(HTMLFieldSetElement.prototype, "name", {
  configurable: true,
  enumerable: true,
  get: function name() {
    return bodavm.toolsFunc.dispatch(this, HTMLFieldSetElement.prototype, "HTMLFieldSetElement", "name_get", arguments);
  },
  set: function name() {
    return bodavm.toolsFunc.dispatch(this, HTMLFieldSetElement.prototype, "HTMLFieldSetElement", "name_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLFieldSetElement.prototype, "type", {
  configurable: true,
  enumerable: true,
  get: function type() {
    return bodavm.toolsFunc.dispatch(this, HTMLFieldSetElement.prototype, "HTMLFieldSetElement", "type_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(HTMLFieldSetElement.prototype, "elements", {
  configurable: true,
  enumerable: true,
  get: function elements() {
    return bodavm.toolsFunc.dispatch(this, HTMLFieldSetElement.prototype, "HTMLFieldSetElement", "elements_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(HTMLFieldSetElement.prototype, "willValidate", {
  configurable: true,
  enumerable: true,
  get: function willValidate() {
    return bodavm.toolsFunc.dispatch(this, HTMLFieldSetElement.prototype, "HTMLFieldSetElement", "willValidate_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(HTMLFieldSetElement.prototype, "validity", {
  configurable: true,
  enumerable: true,
  get: function validity() {
    return bodavm.toolsFunc.dispatch(this, HTMLFieldSetElement.prototype, "HTMLFieldSetElement", "validity_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(HTMLFieldSetElement.prototype, "validationMessage", {
  configurable: true,
  enumerable: true,
  get: function validationMessage() {
    return bodavm.toolsFunc.dispatch(this, HTMLFieldSetElement.prototype, "HTMLFieldSetElement", "validationMessage_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(HTMLFieldSetElement.prototype, "checkValidity", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function checkValidity() {
    return bodavm.toolsFunc.dispatch(this, HTMLFieldSetElement.prototype, "HTMLFieldSetElement", "checkValidity", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLFieldSetElement.prototype, "reportValidity", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function reportValidity() {
    return bodavm.toolsFunc.dispatch(this, HTMLFieldSetElement.prototype, "HTMLFieldSetElement", "reportValidity", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLFieldSetElement.prototype, "setCustomValidity", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function setCustomValidity() {
    return bodavm.toolsFunc.dispatch(this, HTMLFieldSetElement.prototype, "HTMLFieldSetElement", "setCustomValidity", arguments);
  }
});