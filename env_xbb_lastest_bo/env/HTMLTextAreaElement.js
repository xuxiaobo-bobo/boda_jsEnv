// HTMLTextAreaElement对象

HTMLTextAreaElement = function HTMLTextAreaElement() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof HTMLTextAreaElement)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('HTMLTextAreaElement 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(HTMLTextAreaElement, "HTMLTextAreaElement");
HTMLTextAreaElement.prototype.__proto__ = HTMLElement.prototype;
HTMLTextAreaElement.__proto__ = HTMLElement;
bodavm.toolsFunc.defineProperty(HTMLTextAreaElement.prototype, "autocomplete", {
  configurable: true,
  enumerable: true,
  get: function autocomplete() {
    return bodavm.toolsFunc.dispatch(this, HTMLTextAreaElement.prototype, "HTMLTextAreaElement", "autocomplete_get", arguments);
  },
  set: function autocomplete() {
    return bodavm.toolsFunc.dispatch(this, HTMLTextAreaElement.prototype, "HTMLTextAreaElement", "autocomplete_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLTextAreaElement.prototype, "cols", {
  configurable: true,
  enumerable: true,
  get: function cols() {
    return bodavm.toolsFunc.dispatch(this, HTMLTextAreaElement.prototype, "HTMLTextAreaElement", "cols_get", arguments);
  },
  set: function cols() {
    return bodavm.toolsFunc.dispatch(this, HTMLTextAreaElement.prototype, "HTMLTextAreaElement", "cols_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLTextAreaElement.prototype, "dirName", {
  configurable: true,
  enumerable: true,
  get: function dirName() {
    return bodavm.toolsFunc.dispatch(this, HTMLTextAreaElement.prototype, "HTMLTextAreaElement", "dirName_get", arguments);
  },
  set: function dirName() {
    return bodavm.toolsFunc.dispatch(this, HTMLTextAreaElement.prototype, "HTMLTextAreaElement", "dirName_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLTextAreaElement.prototype, "disabled", {
  configurable: true,
  enumerable: true,
  get: function disabled() {
    return bodavm.toolsFunc.dispatch(this, HTMLTextAreaElement.prototype, "HTMLTextAreaElement", "disabled_get", arguments);
  },
  set: function disabled() {
    return bodavm.toolsFunc.dispatch(this, HTMLTextAreaElement.prototype, "HTMLTextAreaElement", "disabled_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLTextAreaElement.prototype, "form", {
  configurable: true,
  enumerable: true,
  get: function form() {
    return bodavm.toolsFunc.dispatch(this, HTMLTextAreaElement.prototype, "HTMLTextAreaElement", "form_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(HTMLTextAreaElement.prototype, "maxLength", {
  configurable: true,
  enumerable: true,
  get: function maxLength() {
    return bodavm.toolsFunc.dispatch(this, HTMLTextAreaElement.prototype, "HTMLTextAreaElement", "maxLength_get", arguments);
  },
  set: function maxLength() {
    return bodavm.toolsFunc.dispatch(this, HTMLTextAreaElement.prototype, "HTMLTextAreaElement", "maxLength_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLTextAreaElement.prototype, "minLength", {
  configurable: true,
  enumerable: true,
  get: function minLength() {
    return bodavm.toolsFunc.dispatch(this, HTMLTextAreaElement.prototype, "HTMLTextAreaElement", "minLength_get", arguments);
  },
  set: function minLength() {
    return bodavm.toolsFunc.dispatch(this, HTMLTextAreaElement.prototype, "HTMLTextAreaElement", "minLength_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLTextAreaElement.prototype, "name", {
  configurable: true,
  enumerable: true,
  get: function name() {
    return bodavm.toolsFunc.dispatch(this, HTMLTextAreaElement.prototype, "HTMLTextAreaElement", "name_get", arguments);
  },
  set: function name() {
    return bodavm.toolsFunc.dispatch(this, HTMLTextAreaElement.prototype, "HTMLTextAreaElement", "name_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLTextAreaElement.prototype, "placeholder", {
  configurable: true,
  enumerable: true,
  get: function placeholder() {
    return bodavm.toolsFunc.dispatch(this, HTMLTextAreaElement.prototype, "HTMLTextAreaElement", "placeholder_get", arguments);
  },
  set: function placeholder() {
    return bodavm.toolsFunc.dispatch(this, HTMLTextAreaElement.prototype, "HTMLTextAreaElement", "placeholder_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLTextAreaElement.prototype, "readOnly", {
  configurable: true,
  enumerable: true,
  get: function readOnly() {
    return bodavm.toolsFunc.dispatch(this, HTMLTextAreaElement.prototype, "HTMLTextAreaElement", "readOnly_get", arguments);
  },
  set: function readOnly() {
    return bodavm.toolsFunc.dispatch(this, HTMLTextAreaElement.prototype, "HTMLTextAreaElement", "readOnly_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLTextAreaElement.prototype, "required", {
  configurable: true,
  enumerable: true,
  get: function required() {
    return bodavm.toolsFunc.dispatch(this, HTMLTextAreaElement.prototype, "HTMLTextAreaElement", "required_get", arguments);
  },
  set: function required() {
    return bodavm.toolsFunc.dispatch(this, HTMLTextAreaElement.prototype, "HTMLTextAreaElement", "required_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLTextAreaElement.prototype, "rows", {
  configurable: true,
  enumerable: true,
  get: function rows() {
    return bodavm.toolsFunc.dispatch(this, HTMLTextAreaElement.prototype, "HTMLTextAreaElement", "rows_get", arguments);
  },
  set: function rows() {
    return bodavm.toolsFunc.dispatch(this, HTMLTextAreaElement.prototype, "HTMLTextAreaElement", "rows_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLTextAreaElement.prototype, "wrap", {
  configurable: true,
  enumerable: true,
  get: function wrap() {
    return bodavm.toolsFunc.dispatch(this, HTMLTextAreaElement.prototype, "HTMLTextAreaElement", "wrap_get", arguments);
  },
  set: function wrap() {
    return bodavm.toolsFunc.dispatch(this, HTMLTextAreaElement.prototype, "HTMLTextAreaElement", "wrap_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLTextAreaElement.prototype, "type", {
  configurable: true,
  enumerable: true,
  get: function type() {
    return bodavm.toolsFunc.dispatch(this, HTMLTextAreaElement.prototype, "HTMLTextAreaElement", "type_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(HTMLTextAreaElement.prototype, "defaultValue", {
  configurable: true,
  enumerable: true,
  get: function defaultValue() {
    return bodavm.toolsFunc.dispatch(this, HTMLTextAreaElement.prototype, "HTMLTextAreaElement", "defaultValue_get", arguments);
  },
  set: function defaultValue() {
    return bodavm.toolsFunc.dispatch(this, HTMLTextAreaElement.prototype, "HTMLTextAreaElement", "defaultValue_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLTextAreaElement.prototype, "value", {
  configurable: true,
  enumerable: true,
  get: function value() {
    return bodavm.toolsFunc.dispatch(this, HTMLTextAreaElement.prototype, "HTMLTextAreaElement", "value_get", arguments);
  },
  set: function value() {
    return bodavm.toolsFunc.dispatch(this, HTMLTextAreaElement.prototype, "HTMLTextAreaElement", "value_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLTextAreaElement.prototype, "textLength", {
  configurable: true,
  enumerable: true,
  get: function textLength() {
    return bodavm.toolsFunc.dispatch(this, HTMLTextAreaElement.prototype, "HTMLTextAreaElement", "textLength_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(HTMLTextAreaElement.prototype, "willValidate", {
  configurable: true,
  enumerable: true,
  get: function willValidate() {
    return bodavm.toolsFunc.dispatch(this, HTMLTextAreaElement.prototype, "HTMLTextAreaElement", "willValidate_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(HTMLTextAreaElement.prototype, "validity", {
  configurable: true,
  enumerable: true,
  get: function validity() {
    return bodavm.toolsFunc.dispatch(this, HTMLTextAreaElement.prototype, "HTMLTextAreaElement", "validity_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(HTMLTextAreaElement.prototype, "validationMessage", {
  configurable: true,
  enumerable: true,
  get: function validationMessage() {
    return bodavm.toolsFunc.dispatch(this, HTMLTextAreaElement.prototype, "HTMLTextAreaElement", "validationMessage_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(HTMLTextAreaElement.prototype, "labels", {
  configurable: true,
  enumerable: true,
  get: function labels() {
    return bodavm.toolsFunc.dispatch(this, HTMLTextAreaElement.prototype, "HTMLTextAreaElement", "labels_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(HTMLTextAreaElement.prototype, "selectionStart", {
  configurable: true,
  enumerable: true,
  get: function selectionStart() {
    return bodavm.toolsFunc.dispatch(this, HTMLTextAreaElement.prototype, "HTMLTextAreaElement", "selectionStart_get", arguments);
  },
  set: function selectionStart() {
    return bodavm.toolsFunc.dispatch(this, HTMLTextAreaElement.prototype, "HTMLTextAreaElement", "selectionStart_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLTextAreaElement.prototype, "selectionEnd", {
  configurable: true,
  enumerable: true,
  get: function selectionEnd() {
    return bodavm.toolsFunc.dispatch(this, HTMLTextAreaElement.prototype, "HTMLTextAreaElement", "selectionEnd_get", arguments);
  },
  set: function selectionEnd() {
    return bodavm.toolsFunc.dispatch(this, HTMLTextAreaElement.prototype, "HTMLTextAreaElement", "selectionEnd_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLTextAreaElement.prototype, "selectionDirection", {
  configurable: true,
  enumerable: true,
  get: function selectionDirection() {
    return bodavm.toolsFunc.dispatch(this, HTMLTextAreaElement.prototype, "HTMLTextAreaElement", "selectionDirection_get", arguments);
  },
  set: function selectionDirection() {
    return bodavm.toolsFunc.dispatch(this, HTMLTextAreaElement.prototype, "HTMLTextAreaElement", "selectionDirection_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLTextAreaElement.prototype, "checkValidity", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function checkValidity() {
    return bodavm.toolsFunc.dispatch(this, HTMLTextAreaElement.prototype, "HTMLTextAreaElement", "checkValidity", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLTextAreaElement.prototype, "reportValidity", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function reportValidity() {
    return bodavm.toolsFunc.dispatch(this, HTMLTextAreaElement.prototype, "HTMLTextAreaElement", "reportValidity", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLTextAreaElement.prototype, "select", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function select() {
    return bodavm.toolsFunc.dispatch(this, HTMLTextAreaElement.prototype, "HTMLTextAreaElement", "select", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLTextAreaElement.prototype, "setCustomValidity", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function setCustomValidity() {
    return bodavm.toolsFunc.dispatch(this, HTMLTextAreaElement.prototype, "HTMLTextAreaElement", "setCustomValidity", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLTextAreaElement.prototype, "setRangeText", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function setRangeText() {
    return bodavm.toolsFunc.dispatch(this, HTMLTextAreaElement.prototype, "HTMLTextAreaElement", "setRangeText", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLTextAreaElement.prototype, "setSelectionRange", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function setSelectionRange() {
    return bodavm.toolsFunc.dispatch(this, HTMLTextAreaElement.prototype, "HTMLTextAreaElement", "setSelectionRange", arguments);
  }
});