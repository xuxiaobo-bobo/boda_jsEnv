// HTMLSelectElement对象

bodavm.memory.globalobj['HTMLSelectElement'] = function HTMLSelectElement() {
  console.log_copy('HTMLSelectElement 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof HTMLSelectElement)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['HTMLSelectElement'], "HTMLSelectElement");
bodavm.memory.globalobj['HTMLSelectElement'].prototype.__proto__ = bodavm.memory.globalobj['HTMLElement'].prototype;
bodavm.memory.globalobj['HTMLSelectElement'].__proto__ = bodavm.memory.globalobj['HTMLElement'];
bodavm.toolsFunc.defineProperty('HTMLSelectElement', "autocomplete", {
  configurable: true,
  enumerable: true,
  get: function autocomplete() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLSelectElement'].prototype, "HTMLSelectElement", "autocomplete_get", arguments);
  },
  set: function autocomplete() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLSelectElement'].prototype, "HTMLSelectElement", "autocomplete_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLSelectElement', "disabled", {
  configurable: true,
  enumerable: true,
  get: function disabled() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLSelectElement'].prototype, "HTMLSelectElement", "disabled_get", arguments);
  },
  set: function disabled() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLSelectElement'].prototype, "HTMLSelectElement", "disabled_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLSelectElement', "form", {
  configurable: true,
  enumerable: true,
  get: function form() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLSelectElement'].prototype, "HTMLSelectElement", "form_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLSelectElement', "multiple", {
  configurable: true,
  enumerable: true,
  get: function multiple() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLSelectElement'].prototype, "HTMLSelectElement", "multiple_get", arguments);
  },
  set: function multiple() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLSelectElement'].prototype, "HTMLSelectElement", "multiple_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLSelectElement', "name", {
  configurable: true,
  enumerable: true,
  get: function name() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLSelectElement'].prototype, "HTMLSelectElement", "name_get", arguments);
  },
  set: function name() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLSelectElement'].prototype, "HTMLSelectElement", "name_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLSelectElement', "required", {
  configurable: true,
  enumerable: true,
  get: function required() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLSelectElement'].prototype, "HTMLSelectElement", "required_get", arguments);
  },
  set: function required() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLSelectElement'].prototype, "HTMLSelectElement", "required_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLSelectElement', "size", {
  configurable: true,
  enumerable: true,
  get: function size() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLSelectElement'].prototype, "HTMLSelectElement", "size_get", arguments);
  },
  set: function size() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLSelectElement'].prototype, "HTMLSelectElement", "size_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLSelectElement', "type", {
  configurable: true,
  enumerable: true,
  get: function type() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLSelectElement'].prototype, "HTMLSelectElement", "type_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLSelectElement', "options", {
  configurable: true,
  enumerable: true,
  get: function options() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLSelectElement'].prototype, "HTMLSelectElement", "options_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLSelectElement', "length", {
  configurable: true,
  enumerable: true,
  get: function length() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLSelectElement'].prototype, "HTMLSelectElement", "length_get", arguments);
  },
  set: function length() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLSelectElement'].prototype, "HTMLSelectElement", "length_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLSelectElement', "selectedOptions", {
  configurable: true,
  enumerable: true,
  get: function selectedOptions() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLSelectElement'].prototype, "HTMLSelectElement", "selectedOptions_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLSelectElement', "selectedIndex", {
  configurable: true,
  enumerable: true,
  get: function selectedIndex() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLSelectElement'].prototype, "HTMLSelectElement", "selectedIndex_get", arguments);
  },
  set: function selectedIndex() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLSelectElement'].prototype, "HTMLSelectElement", "selectedIndex_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLSelectElement', "value", {
  configurable: true,
  enumerable: true,
  get: function value() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLSelectElement'].prototype, "HTMLSelectElement", "value_get", arguments);
  },
  set: function value() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLSelectElement'].prototype, "HTMLSelectElement", "value_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLSelectElement', "willValidate", {
  configurable: true,
  enumerable: true,
  get: function willValidate() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLSelectElement'].prototype, "HTMLSelectElement", "willValidate_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLSelectElement', "validity", {
  configurable: true,
  enumerable: true,
  get: function validity() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLSelectElement'].prototype, "HTMLSelectElement", "validity_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLSelectElement', "validationMessage", {
  configurable: true,
  enumerable: true,
  get: function validationMessage() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLSelectElement'].prototype, "HTMLSelectElement", "validationMessage_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLSelectElement', "labels", {
  configurable: true,
  enumerable: true,
  get: function labels() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLSelectElement'].prototype, "HTMLSelectElement", "labels_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLSelectElement', "add", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function add() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLSelectElement'].prototype, "HTMLSelectElement", "add", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLSelectElement', "checkValidity", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function checkValidity() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLSelectElement'].prototype, "HTMLSelectElement", "checkValidity", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLSelectElement', "item", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function item() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLSelectElement'].prototype, "HTMLSelectElement", "item", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLSelectElement', "namedItem", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function namedItem() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLSelectElement'].prototype, "HTMLSelectElement", "namedItem", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLSelectElement', "remove", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function remove() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLSelectElement'].prototype, "HTMLSelectElement", "remove", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLSelectElement', "reportValidity", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function reportValidity() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLSelectElement'].prototype, "HTMLSelectElement", "reportValidity", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLSelectElement', "setCustomValidity", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function setCustomValidity() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLSelectElement'].prototype, "HTMLSelectElement", "setCustomValidity", arguments);
  }
}, 'prototype');