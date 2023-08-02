// HTMLSelectElement对象

HTMLSelectElement = function HTMLSelectElement() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof HTMLSelectElement)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('HTMLSelectElement 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(HTMLSelectElement, "HTMLSelectElement");
HTMLSelectElement.prototype.__proto__ = HTMLElement.prototype;
HTMLSelectElement.__proto__ = HTMLElement;
bodavm.toolsFunc.defineProperty(HTMLSelectElement.prototype, "autocomplete", {
  configurable: true,
  enumerable: true,
  get: function autocomplete() {
    return bodavm.toolsFunc.dispatch(this, HTMLSelectElement.prototype, "HTMLSelectElement", "autocomplete_get", arguments);
  },
  set: function autocomplete() {
    return bodavm.toolsFunc.dispatch(this, HTMLSelectElement.prototype, "HTMLSelectElement", "autocomplete_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLSelectElement.prototype, "disabled", {
  configurable: true,
  enumerable: true,
  get: function disabled() {
    return bodavm.toolsFunc.dispatch(this, HTMLSelectElement.prototype, "HTMLSelectElement", "disabled_get", arguments);
  },
  set: function disabled() {
    return bodavm.toolsFunc.dispatch(this, HTMLSelectElement.prototype, "HTMLSelectElement", "disabled_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLSelectElement.prototype, "form", {
  configurable: true,
  enumerable: true,
  get: function form() {
    return bodavm.toolsFunc.dispatch(this, HTMLSelectElement.prototype, "HTMLSelectElement", "form_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(HTMLSelectElement.prototype, "multiple", {
  configurable: true,
  enumerable: true,
  get: function multiple() {
    return bodavm.toolsFunc.dispatch(this, HTMLSelectElement.prototype, "HTMLSelectElement", "multiple_get", arguments);
  },
  set: function multiple() {
    return bodavm.toolsFunc.dispatch(this, HTMLSelectElement.prototype, "HTMLSelectElement", "multiple_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLSelectElement.prototype, "name", {
  configurable: true,
  enumerable: true,
  get: function name() {
    return bodavm.toolsFunc.dispatch(this, HTMLSelectElement.prototype, "HTMLSelectElement", "name_get", arguments);
  },
  set: function name() {
    return bodavm.toolsFunc.dispatch(this, HTMLSelectElement.prototype, "HTMLSelectElement", "name_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLSelectElement.prototype, "required", {
  configurable: true,
  enumerable: true,
  get: function required() {
    return bodavm.toolsFunc.dispatch(this, HTMLSelectElement.prototype, "HTMLSelectElement", "required_get", arguments);
  },
  set: function required() {
    return bodavm.toolsFunc.dispatch(this, HTMLSelectElement.prototype, "HTMLSelectElement", "required_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLSelectElement.prototype, "size", {
  configurable: true,
  enumerable: true,
  get: function size() {
    return bodavm.toolsFunc.dispatch(this, HTMLSelectElement.prototype, "HTMLSelectElement", "size_get", arguments);
  },
  set: function size() {
    return bodavm.toolsFunc.dispatch(this, HTMLSelectElement.prototype, "HTMLSelectElement", "size_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLSelectElement.prototype, "type", {
  configurable: true,
  enumerable: true,
  get: function type() {
    return bodavm.toolsFunc.dispatch(this, HTMLSelectElement.prototype, "HTMLSelectElement", "type_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(HTMLSelectElement.prototype, "options", {
  configurable: true,
  enumerable: true,
  get: function options() {
    return bodavm.toolsFunc.dispatch(this, HTMLSelectElement.prototype, "HTMLSelectElement", "options_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(HTMLSelectElement.prototype, "length", {
  configurable: true,
  enumerable: true,
  get: function length() {
    return bodavm.toolsFunc.dispatch(this, HTMLSelectElement.prototype, "HTMLSelectElement", "length_get", arguments);
  },
  set: function length() {
    return bodavm.toolsFunc.dispatch(this, HTMLSelectElement.prototype, "HTMLSelectElement", "length_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLSelectElement.prototype, "selectedOptions", {
  configurable: true,
  enumerable: true,
  get: function selectedOptions() {
    return bodavm.toolsFunc.dispatch(this, HTMLSelectElement.prototype, "HTMLSelectElement", "selectedOptions_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(HTMLSelectElement.prototype, "selectedIndex", {
  configurable: true,
  enumerable: true,
  get: function selectedIndex() {
    return bodavm.toolsFunc.dispatch(this, HTMLSelectElement.prototype, "HTMLSelectElement", "selectedIndex_get", arguments);
  },
  set: function selectedIndex() {
    return bodavm.toolsFunc.dispatch(this, HTMLSelectElement.prototype, "HTMLSelectElement", "selectedIndex_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLSelectElement.prototype, "value", {
  configurable: true,
  enumerable: true,
  get: function value() {
    return bodavm.toolsFunc.dispatch(this, HTMLSelectElement.prototype, "HTMLSelectElement", "value_get", arguments);
  },
  set: function value() {
    return bodavm.toolsFunc.dispatch(this, HTMLSelectElement.prototype, "HTMLSelectElement", "value_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLSelectElement.prototype, "willValidate", {
  configurable: true,
  enumerable: true,
  get: function willValidate() {
    return bodavm.toolsFunc.dispatch(this, HTMLSelectElement.prototype, "HTMLSelectElement", "willValidate_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(HTMLSelectElement.prototype, "validity", {
  configurable: true,
  enumerable: true,
  get: function validity() {
    return bodavm.toolsFunc.dispatch(this, HTMLSelectElement.prototype, "HTMLSelectElement", "validity_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(HTMLSelectElement.prototype, "validationMessage", {
  configurable: true,
  enumerable: true,
  get: function validationMessage() {
    return bodavm.toolsFunc.dispatch(this, HTMLSelectElement.prototype, "HTMLSelectElement", "validationMessage_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(HTMLSelectElement.prototype, "labels", {
  configurable: true,
  enumerable: true,
  get: function labels() {
    return bodavm.toolsFunc.dispatch(this, HTMLSelectElement.prototype, "HTMLSelectElement", "labels_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(HTMLSelectElement.prototype, "add", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function add() {
    return bodavm.toolsFunc.dispatch(this, HTMLSelectElement.prototype, "HTMLSelectElement", "add", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLSelectElement.prototype, "checkValidity", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function checkValidity() {
    return bodavm.toolsFunc.dispatch(this, HTMLSelectElement.prototype, "HTMLSelectElement", "checkValidity", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLSelectElement.prototype, "item", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function item() {
    return bodavm.toolsFunc.dispatch(this, HTMLSelectElement.prototype, "HTMLSelectElement", "item", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLSelectElement.prototype, "namedItem", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function namedItem() {
    return bodavm.toolsFunc.dispatch(this, HTMLSelectElement.prototype, "HTMLSelectElement", "namedItem", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLSelectElement.prototype, "remove", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function remove() {
    return bodavm.toolsFunc.dispatch(this, HTMLSelectElement.prototype, "HTMLSelectElement", "remove", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLSelectElement.prototype, "reportValidity", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function reportValidity() {
    return bodavm.toolsFunc.dispatch(this, HTMLSelectElement.prototype, "HTMLSelectElement", "reportValidity", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLSelectElement.prototype, "setCustomValidity", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function setCustomValidity() {
    return bodavm.toolsFunc.dispatch(this, HTMLSelectElement.prototype, "HTMLSelectElement", "setCustomValidity", arguments);
  }
});