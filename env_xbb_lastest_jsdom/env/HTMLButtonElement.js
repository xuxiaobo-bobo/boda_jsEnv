// HTMLButtonElement对象

bodavm.memory.globalobj['HTMLButtonElement'] = function HTMLButtonElement() {
  console.log_copy('HTMLButtonElement 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof HTMLButtonElement)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['HTMLButtonElement'], "HTMLButtonElement");
bodavm.memory.globalobj['HTMLButtonElement'].prototype.__proto__ = bodavm.memory.globalobj['HTMLElement'].prototype;
bodavm.memory.globalobj['HTMLButtonElement'].__proto__ = bodavm.memory.globalobj['HTMLElement'];
bodavm.toolsFunc.defineProperty('HTMLButtonElement', "disabled", {
  configurable: true,
  enumerable: true,
  get: function disabled() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLButtonElement'].prototype, "HTMLButtonElement", "disabled_get", arguments);
  },
  set: function disabled() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLButtonElement'].prototype, "HTMLButtonElement", "disabled_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLButtonElement', "form", {
  configurable: true,
  enumerable: true,
  get: function form() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLButtonElement'].prototype, "HTMLButtonElement", "form_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLButtonElement', "formAction", {
  configurable: true,
  enumerable: true,
  get: function formAction() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLButtonElement'].prototype, "HTMLButtonElement", "formAction_get", arguments);
  },
  set: function formAction() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLButtonElement'].prototype, "HTMLButtonElement", "formAction_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLButtonElement', "formEnctype", {
  configurable: true,
  enumerable: true,
  get: function formEnctype() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLButtonElement'].prototype, "HTMLButtonElement", "formEnctype_get", arguments);
  },
  set: function formEnctype() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLButtonElement'].prototype, "HTMLButtonElement", "formEnctype_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLButtonElement', "formMethod", {
  configurable: true,
  enumerable: true,
  get: function formMethod() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLButtonElement'].prototype, "HTMLButtonElement", "formMethod_get", arguments);
  },
  set: function formMethod() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLButtonElement'].prototype, "HTMLButtonElement", "formMethod_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLButtonElement', "formNoValidate", {
  configurable: true,
  enumerable: true,
  get: function formNoValidate() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLButtonElement'].prototype, "HTMLButtonElement", "formNoValidate_get", arguments);
  },
  set: function formNoValidate() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLButtonElement'].prototype, "HTMLButtonElement", "formNoValidate_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLButtonElement', "formTarget", {
  configurable: true,
  enumerable: true,
  get: function formTarget() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLButtonElement'].prototype, "HTMLButtonElement", "formTarget_get", arguments);
  },
  set: function formTarget() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLButtonElement'].prototype, "HTMLButtonElement", "formTarget_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLButtonElement', "name", {
  configurable: true,
  enumerable: true,
  get: function name() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLButtonElement'].prototype, "HTMLButtonElement", "name_get", arguments);
  },
  set: function name() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLButtonElement'].prototype, "HTMLButtonElement", "name_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLButtonElement', "type", {
  configurable: true,
  enumerable: true,
  get: function type() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLButtonElement'].prototype, "HTMLButtonElement", "type_get", arguments);
  },
  set: function type() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLButtonElement'].prototype, "HTMLButtonElement", "type_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLButtonElement', "value", {
  configurable: true,
  enumerable: true,
  get: function value() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLButtonElement'].prototype, "HTMLButtonElement", "value_get", arguments);
  },
  set: function value() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLButtonElement'].prototype, "HTMLButtonElement", "value_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLButtonElement', "willValidate", {
  configurable: true,
  enumerable: true,
  get: function willValidate() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLButtonElement'].prototype, "HTMLButtonElement", "willValidate_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLButtonElement', "validity", {
  configurable: true,
  enumerable: true,
  get: function validity() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLButtonElement'].prototype, "HTMLButtonElement", "validity_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLButtonElement', "validationMessage", {
  configurable: true,
  enumerable: true,
  get: function validationMessage() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLButtonElement'].prototype, "HTMLButtonElement", "validationMessage_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLButtonElement', "labels", {
  configurable: true,
  enumerable: true,
  get: function labels() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLButtonElement'].prototype, "HTMLButtonElement", "labels_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLButtonElement', "checkValidity", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function checkValidity() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLButtonElement'].prototype, "HTMLButtonElement", "checkValidity", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLButtonElement', "reportValidity", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function reportValidity() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLButtonElement'].prototype, "HTMLButtonElement", "reportValidity", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLButtonElement', "setCustomValidity", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function setCustomValidity() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLButtonElement'].prototype, "HTMLButtonElement", "setCustomValidity", arguments);
  }
}, 'prototype');