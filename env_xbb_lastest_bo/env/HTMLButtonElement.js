// HTMLButtonElement对象

HTMLButtonElement = function HTMLButtonElement() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof HTMLButtonElement)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('HTMLButtonElement 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(HTMLButtonElement, "HTMLButtonElement");
HTMLButtonElement.prototype.__proto__ = HTMLElement.prototype;
HTMLButtonElement.__proto__ = HTMLElement;
bodavm.toolsFunc.defineProperty(HTMLButtonElement.prototype, "disabled", {
  configurable: true,
  enumerable: true,
  get: function disabled() {
    return bodavm.toolsFunc.dispatch(this, HTMLButtonElement.prototype, "HTMLButtonElement", "disabled_get", arguments);
  },
  set: function disabled() {
    return bodavm.toolsFunc.dispatch(this, HTMLButtonElement.prototype, "HTMLButtonElement", "disabled_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLButtonElement.prototype, "form", {
  configurable: true,
  enumerable: true,
  get: function form() {
    return bodavm.toolsFunc.dispatch(this, HTMLButtonElement.prototype, "HTMLButtonElement", "form_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(HTMLButtonElement.prototype, "formAction", {
  configurable: true,
  enumerable: true,
  get: function formAction() {
    return bodavm.toolsFunc.dispatch(this, HTMLButtonElement.prototype, "HTMLButtonElement", "formAction_get", arguments);
  },
  set: function formAction() {
    return bodavm.toolsFunc.dispatch(this, HTMLButtonElement.prototype, "HTMLButtonElement", "formAction_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLButtonElement.prototype, "formEnctype", {
  configurable: true,
  enumerable: true,
  get: function formEnctype() {
    return bodavm.toolsFunc.dispatch(this, HTMLButtonElement.prototype, "HTMLButtonElement", "formEnctype_get", arguments);
  },
  set: function formEnctype() {
    return bodavm.toolsFunc.dispatch(this, HTMLButtonElement.prototype, "HTMLButtonElement", "formEnctype_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLButtonElement.prototype, "formMethod", {
  configurable: true,
  enumerable: true,
  get: function formMethod() {
    return bodavm.toolsFunc.dispatch(this, HTMLButtonElement.prototype, "HTMLButtonElement", "formMethod_get", arguments);
  },
  set: function formMethod() {
    return bodavm.toolsFunc.dispatch(this, HTMLButtonElement.prototype, "HTMLButtonElement", "formMethod_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLButtonElement.prototype, "formNoValidate", {
  configurable: true,
  enumerable: true,
  get: function formNoValidate() {
    return bodavm.toolsFunc.dispatch(this, HTMLButtonElement.prototype, "HTMLButtonElement", "formNoValidate_get", arguments);
  },
  set: function formNoValidate() {
    return bodavm.toolsFunc.dispatch(this, HTMLButtonElement.prototype, "HTMLButtonElement", "formNoValidate_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLButtonElement.prototype, "formTarget", {
  configurable: true,
  enumerable: true,
  get: function formTarget() {
    return bodavm.toolsFunc.dispatch(this, HTMLButtonElement.prototype, "HTMLButtonElement", "formTarget_get", arguments);
  },
  set: function formTarget() {
    return bodavm.toolsFunc.dispatch(this, HTMLButtonElement.prototype, "HTMLButtonElement", "formTarget_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLButtonElement.prototype, "name", {
  configurable: true,
  enumerable: true,
  get: function name() {
    return bodavm.toolsFunc.dispatch(this, HTMLButtonElement.prototype, "HTMLButtonElement", "name_get", arguments);
  },
  set: function name() {
    return bodavm.toolsFunc.dispatch(this, HTMLButtonElement.prototype, "HTMLButtonElement", "name_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLButtonElement.prototype, "type", {
  configurable: true,
  enumerable: true,
  get: function type() {
    return bodavm.toolsFunc.dispatch(this, HTMLButtonElement.prototype, "HTMLButtonElement", "type_get", arguments);
  },
  set: function type() {
    return bodavm.toolsFunc.dispatch(this, HTMLButtonElement.prototype, "HTMLButtonElement", "type_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLButtonElement.prototype, "value", {
  configurable: true,
  enumerable: true,
  get: function value() {
    return bodavm.toolsFunc.dispatch(this, HTMLButtonElement.prototype, "HTMLButtonElement", "value_get", arguments);
  },
  set: function value() {
    return bodavm.toolsFunc.dispatch(this, HTMLButtonElement.prototype, "HTMLButtonElement", "value_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLButtonElement.prototype, "willValidate", {
  configurable: true,
  enumerable: true,
  get: function willValidate() {
    return bodavm.toolsFunc.dispatch(this, HTMLButtonElement.prototype, "HTMLButtonElement", "willValidate_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(HTMLButtonElement.prototype, "validity", {
  configurable: true,
  enumerable: true,
  get: function validity() {
    return bodavm.toolsFunc.dispatch(this, HTMLButtonElement.prototype, "HTMLButtonElement", "validity_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(HTMLButtonElement.prototype, "validationMessage", {
  configurable: true,
  enumerable: true,
  get: function validationMessage() {
    return bodavm.toolsFunc.dispatch(this, HTMLButtonElement.prototype, "HTMLButtonElement", "validationMessage_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(HTMLButtonElement.prototype, "labels", {
  configurable: true,
  enumerable: true,
  get: function labels() {
    return bodavm.toolsFunc.dispatch(this, HTMLButtonElement.prototype, "HTMLButtonElement", "labels_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(HTMLButtonElement.prototype, "checkValidity", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function checkValidity() {
    return bodavm.toolsFunc.dispatch(this, HTMLButtonElement.prototype, "HTMLButtonElement", "checkValidity", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLButtonElement.prototype, "reportValidity", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function reportValidity() {
    return bodavm.toolsFunc.dispatch(this, HTMLButtonElement.prototype, "HTMLButtonElement", "reportValidity", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLButtonElement.prototype, "setCustomValidity", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function setCustomValidity() {
    return bodavm.toolsFunc.dispatch(this, HTMLButtonElement.prototype, "HTMLButtonElement", "setCustomValidity", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLButtonElement.prototype, "popoverTargetElement", {
  configurable: true,
  enumerable: true,
  get: function popoverTargetElement() {
    return bodavm.toolsFunc.dispatch(this, HTMLButtonElement.prototype, "HTMLButtonElement", "popoverTargetElement_get", arguments);
  },
  set: function popoverTargetElement() {
    return bodavm.toolsFunc.dispatch(this, HTMLButtonElement.prototype, "HTMLButtonElement", "popoverTargetElement_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLButtonElement.prototype, "popoverTargetAction", {
  configurable: true,
  enumerable: true,
  get: function popoverTargetAction() {
    return bodavm.toolsFunc.dispatch(this, HTMLButtonElement.prototype, "HTMLButtonElement", "popoverTargetAction_get", arguments);
  },
  set: function popoverTargetAction() {
    return bodavm.toolsFunc.dispatch(this, HTMLButtonElement.prototype, "HTMLButtonElement", "popoverTargetAction_set", arguments);
  }
});