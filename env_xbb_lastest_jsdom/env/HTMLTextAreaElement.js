// HTMLTextAreaElement对象

bodavm.memory.globalobj['HTMLTextAreaElement'] = function HTMLTextAreaElement() {
  console.log_copy('HTMLTextAreaElement 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof HTMLTextAreaElement)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['HTMLTextAreaElement'], "HTMLTextAreaElement");
bodavm.memory.globalobj['HTMLTextAreaElement'].prototype.__proto__ = bodavm.memory.globalobj['HTMLElement'].prototype;
bodavm.memory.globalobj['HTMLTextAreaElement'].__proto__ = bodavm.memory.globalobj['HTMLElement'];
bodavm.toolsFunc.defineProperty('HTMLTextAreaElement', "autocomplete", {
  configurable: true,
  enumerable: true,
  get: function autocomplete() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLTextAreaElement'].prototype, "HTMLTextAreaElement", "autocomplete_get", arguments);
  },
  set: function autocomplete() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLTextAreaElement'].prototype, "HTMLTextAreaElement", "autocomplete_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLTextAreaElement', "cols", {
  configurable: true,
  enumerable: true,
  get: function cols() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLTextAreaElement'].prototype, "HTMLTextAreaElement", "cols_get", arguments);
  },
  set: function cols() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLTextAreaElement'].prototype, "HTMLTextAreaElement", "cols_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLTextAreaElement', "dirName", {
  configurable: true,
  enumerable: true,
  get: function dirName() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLTextAreaElement'].prototype, "HTMLTextAreaElement", "dirName_get", arguments);
  },
  set: function dirName() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLTextAreaElement'].prototype, "HTMLTextAreaElement", "dirName_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLTextAreaElement', "disabled", {
  configurable: true,
  enumerable: true,
  get: function disabled() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLTextAreaElement'].prototype, "HTMLTextAreaElement", "disabled_get", arguments);
  },
  set: function disabled() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLTextAreaElement'].prototype, "HTMLTextAreaElement", "disabled_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLTextAreaElement', "form", {
  configurable: true,
  enumerable: true,
  get: function form() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLTextAreaElement'].prototype, "HTMLTextAreaElement", "form_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLTextAreaElement', "maxLength", {
  configurable: true,
  enumerable: true,
  get: function maxLength() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLTextAreaElement'].prototype, "HTMLTextAreaElement", "maxLength_get", arguments);
  },
  set: function maxLength() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLTextAreaElement'].prototype, "HTMLTextAreaElement", "maxLength_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLTextAreaElement', "minLength", {
  configurable: true,
  enumerable: true,
  get: function minLength() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLTextAreaElement'].prototype, "HTMLTextAreaElement", "minLength_get", arguments);
  },
  set: function minLength() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLTextAreaElement'].prototype, "HTMLTextAreaElement", "minLength_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLTextAreaElement', "name", {
  configurable: true,
  enumerable: true,
  get: function name() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLTextAreaElement'].prototype, "HTMLTextAreaElement", "name_get", arguments);
  },
  set: function name() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLTextAreaElement'].prototype, "HTMLTextAreaElement", "name_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLTextAreaElement', "placeholder", {
  configurable: true,
  enumerable: true,
  get: function placeholder() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLTextAreaElement'].prototype, "HTMLTextAreaElement", "placeholder_get", arguments);
  },
  set: function placeholder() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLTextAreaElement'].prototype, "HTMLTextAreaElement", "placeholder_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLTextAreaElement', "readOnly", {
  configurable: true,
  enumerable: true,
  get: function readOnly() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLTextAreaElement'].prototype, "HTMLTextAreaElement", "readOnly_get", arguments);
  },
  set: function readOnly() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLTextAreaElement'].prototype, "HTMLTextAreaElement", "readOnly_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLTextAreaElement', "required", {
  configurable: true,
  enumerable: true,
  get: function required() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLTextAreaElement'].prototype, "HTMLTextAreaElement", "required_get", arguments);
  },
  set: function required() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLTextAreaElement'].prototype, "HTMLTextAreaElement", "required_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLTextAreaElement', "rows", {
  configurable: true,
  enumerable: true,
  get: function rows() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLTextAreaElement'].prototype, "HTMLTextAreaElement", "rows_get", arguments);
  },
  set: function rows() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLTextAreaElement'].prototype, "HTMLTextAreaElement", "rows_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLTextAreaElement', "wrap", {
  configurable: true,
  enumerable: true,
  get: function wrap() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLTextAreaElement'].prototype, "HTMLTextAreaElement", "wrap_get", arguments);
  },
  set: function wrap() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLTextAreaElement'].prototype, "HTMLTextAreaElement", "wrap_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLTextAreaElement', "type", {
  configurable: true,
  enumerable: true,
  get: function type() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLTextAreaElement'].prototype, "HTMLTextAreaElement", "type_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLTextAreaElement', "defaultValue", {
  configurable: true,
  enumerable: true,
  get: function defaultValue() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLTextAreaElement'].prototype, "HTMLTextAreaElement", "defaultValue_get", arguments);
  },
  set: function defaultValue() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLTextAreaElement'].prototype, "HTMLTextAreaElement", "defaultValue_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLTextAreaElement', "value", {
  configurable: true,
  enumerable: true,
  get: function value() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLTextAreaElement'].prototype, "HTMLTextAreaElement", "value_get", arguments);
  },
  set: function value() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLTextAreaElement'].prototype, "HTMLTextAreaElement", "value_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLTextAreaElement', "textLength", {
  configurable: true,
  enumerable: true,
  get: function textLength() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLTextAreaElement'].prototype, "HTMLTextAreaElement", "textLength_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLTextAreaElement', "willValidate", {
  configurable: true,
  enumerable: true,
  get: function willValidate() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLTextAreaElement'].prototype, "HTMLTextAreaElement", "willValidate_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLTextAreaElement', "validity", {
  configurable: true,
  enumerable: true,
  get: function validity() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLTextAreaElement'].prototype, "HTMLTextAreaElement", "validity_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLTextAreaElement', "validationMessage", {
  configurable: true,
  enumerable: true,
  get: function validationMessage() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLTextAreaElement'].prototype, "HTMLTextAreaElement", "validationMessage_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLTextAreaElement', "labels", {
  configurable: true,
  enumerable: true,
  get: function labels() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLTextAreaElement'].prototype, "HTMLTextAreaElement", "labels_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLTextAreaElement', "selectionStart", {
  configurable: true,
  enumerable: true,
  get: function selectionStart() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLTextAreaElement'].prototype, "HTMLTextAreaElement", "selectionStart_get", arguments);
  },
  set: function selectionStart() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLTextAreaElement'].prototype, "HTMLTextAreaElement", "selectionStart_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLTextAreaElement', "selectionEnd", {
  configurable: true,
  enumerable: true,
  get: function selectionEnd() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLTextAreaElement'].prototype, "HTMLTextAreaElement", "selectionEnd_get", arguments);
  },
  set: function selectionEnd() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLTextAreaElement'].prototype, "HTMLTextAreaElement", "selectionEnd_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLTextAreaElement', "selectionDirection", {
  configurable: true,
  enumerable: true,
  get: function selectionDirection() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLTextAreaElement'].prototype, "HTMLTextAreaElement", "selectionDirection_get", arguments);
  },
  set: function selectionDirection() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLTextAreaElement'].prototype, "HTMLTextAreaElement", "selectionDirection_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLTextAreaElement', "checkValidity", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function checkValidity() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLTextAreaElement'].prototype, "HTMLTextAreaElement", "checkValidity", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLTextAreaElement', "reportValidity", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function reportValidity() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLTextAreaElement'].prototype, "HTMLTextAreaElement", "reportValidity", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLTextAreaElement', "select", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function select() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLTextAreaElement'].prototype, "HTMLTextAreaElement", "select", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLTextAreaElement', "setCustomValidity", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function setCustomValidity() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLTextAreaElement'].prototype, "HTMLTextAreaElement", "setCustomValidity", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLTextAreaElement', "setRangeText", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function setRangeText() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLTextAreaElement'].prototype, "HTMLTextAreaElement", "setRangeText", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLTextAreaElement', "setSelectionRange", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function setSelectionRange() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLTextAreaElement'].prototype, "HTMLTextAreaElement", "setSelectionRange", arguments);
  }
}, 'prototype');