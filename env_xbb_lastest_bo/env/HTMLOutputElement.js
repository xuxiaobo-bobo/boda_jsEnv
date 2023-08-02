// HTMLOutputElement对象

HTMLOutputElement = function HTMLOutputElement() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof HTMLOutputElement)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('HTMLOutputElement 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(HTMLOutputElement, "HTMLOutputElement");
HTMLOutputElement.prototype.__proto__ = HTMLElement.prototype;
HTMLOutputElement.__proto__ = HTMLElement;
bodavm.toolsFunc.defineProperty(HTMLOutputElement.prototype, "htmlFor", {
  configurable: true,
  enumerable: true,
  get: function htmlFor() {
    return bodavm.toolsFunc.dispatch(this, HTMLOutputElement.prototype, "HTMLOutputElement", "htmlFor_get", arguments);
  },
  set: function htmlFor() {
    return bodavm.toolsFunc.dispatch(this, HTMLOutputElement.prototype, "HTMLOutputElement", "htmlFor_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLOutputElement.prototype, "form", {
  configurable: true,
  enumerable: true,
  get: function form() {
    return bodavm.toolsFunc.dispatch(this, HTMLOutputElement.prototype, "HTMLOutputElement", "form_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(HTMLOutputElement.prototype, "name", {
  configurable: true,
  enumerable: true,
  get: function name() {
    return bodavm.toolsFunc.dispatch(this, HTMLOutputElement.prototype, "HTMLOutputElement", "name_get", arguments);
  },
  set: function name() {
    return bodavm.toolsFunc.dispatch(this, HTMLOutputElement.prototype, "HTMLOutputElement", "name_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLOutputElement.prototype, "type", {
  configurable: true,
  enumerable: true,
  get: function type() {
    return bodavm.toolsFunc.dispatch(this, HTMLOutputElement.prototype, "HTMLOutputElement", "type_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(HTMLOutputElement.prototype, "defaultValue", {
  configurable: true,
  enumerable: true,
  get: function defaultValue() {
    return bodavm.toolsFunc.dispatch(this, HTMLOutputElement.prototype, "HTMLOutputElement", "defaultValue_get", arguments);
  },
  set: function defaultValue() {
    return bodavm.toolsFunc.dispatch(this, HTMLOutputElement.prototype, "HTMLOutputElement", "defaultValue_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLOutputElement.prototype, "value", {
  configurable: true,
  enumerable: true,
  get: function value() {
    return bodavm.toolsFunc.dispatch(this, HTMLOutputElement.prototype, "HTMLOutputElement", "value_get", arguments);
  },
  set: function value() {
    return bodavm.toolsFunc.dispatch(this, HTMLOutputElement.prototype, "HTMLOutputElement", "value_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLOutputElement.prototype, "willValidate", {
  configurable: true,
  enumerable: true,
  get: function willValidate() {
    return bodavm.toolsFunc.dispatch(this, HTMLOutputElement.prototype, "HTMLOutputElement", "willValidate_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(HTMLOutputElement.prototype, "validity", {
  configurable: true,
  enumerable: true,
  get: function validity() {
    return bodavm.toolsFunc.dispatch(this, HTMLOutputElement.prototype, "HTMLOutputElement", "validity_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(HTMLOutputElement.prototype, "validationMessage", {
  configurable: true,
  enumerable: true,
  get: function validationMessage() {
    return bodavm.toolsFunc.dispatch(this, HTMLOutputElement.prototype, "HTMLOutputElement", "validationMessage_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(HTMLOutputElement.prototype, "labels", {
  configurable: true,
  enumerable: true,
  get: function labels() {
    return bodavm.toolsFunc.dispatch(this, HTMLOutputElement.prototype, "HTMLOutputElement", "labels_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(HTMLOutputElement.prototype, "checkValidity", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function checkValidity() {
    return bodavm.toolsFunc.dispatch(this, HTMLOutputElement.prototype, "HTMLOutputElement", "checkValidity", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLOutputElement.prototype, "reportValidity", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function reportValidity() {
    return bodavm.toolsFunc.dispatch(this, HTMLOutputElement.prototype, "HTMLOutputElement", "reportValidity", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLOutputElement.prototype, "setCustomValidity", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function setCustomValidity() {
    return bodavm.toolsFunc.dispatch(this, HTMLOutputElement.prototype, "HTMLOutputElement", "setCustomValidity", arguments);
  }
});