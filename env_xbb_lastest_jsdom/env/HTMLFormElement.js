// HTMLFormElement对象

bodavm.memory.globalobj['HTMLFormElement'] = function HTMLFormElement() {
  console.log_copy('HTMLFormElement 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof HTMLFormElement)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['HTMLFormElement'], "HTMLFormElement");
bodavm.memory.globalobj['HTMLFormElement'].prototype.__proto__ = bodavm.memory.globalobj['HTMLElement'].prototype;
bodavm.memory.globalobj['HTMLFormElement'].__proto__ = bodavm.memory.globalobj['HTMLElement'];
bodavm.toolsFunc.defineProperty('HTMLFormElement', "acceptCharset", {
  configurable: true,
  enumerable: true,
  get: function acceptCharset() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLFormElement'].prototype, "HTMLFormElement", "acceptCharset_get", arguments);
  },
  set: function acceptCharset() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLFormElement'].prototype, "HTMLFormElement", "acceptCharset_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLFormElement', "action", {
  configurable: true,
  enumerable: true,
  get: function action() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLFormElement'].prototype, "HTMLFormElement", "action_get", arguments);
  },
  set: function action() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLFormElement'].prototype, "HTMLFormElement", "action_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLFormElement', "autocomplete", {
  configurable: true,
  enumerable: true,
  get: function autocomplete() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLFormElement'].prototype, "HTMLFormElement", "autocomplete_get", arguments);
  },
  set: function autocomplete() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLFormElement'].prototype, "HTMLFormElement", "autocomplete_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLFormElement', "enctype", {
  configurable: true,
  enumerable: true,
  get: function enctype() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLFormElement'].prototype, "HTMLFormElement", "enctype_get", arguments);
  },
  set: function enctype() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLFormElement'].prototype, "HTMLFormElement", "enctype_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLFormElement', "encoding", {
  configurable: true,
  enumerable: true,
  get: function encoding() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLFormElement'].prototype, "HTMLFormElement", "encoding_get", arguments);
  },
  set: function encoding() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLFormElement'].prototype, "HTMLFormElement", "encoding_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLFormElement', "method", {
  configurable: true,
  enumerable: true,
  get: function method() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLFormElement'].prototype, "HTMLFormElement", "method_get", arguments);
  },
  set: function method() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLFormElement'].prototype, "HTMLFormElement", "method_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLFormElement', "name", {
  configurable: true,
  enumerable: true,
  get: function name() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLFormElement'].prototype, "HTMLFormElement", "name_get", arguments);
  },
  set: function name() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLFormElement'].prototype, "HTMLFormElement", "name_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLFormElement', "noValidate", {
  configurable: true,
  enumerable: true,
  get: function noValidate() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLFormElement'].prototype, "HTMLFormElement", "noValidate_get", arguments);
  },
  set: function noValidate() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLFormElement'].prototype, "HTMLFormElement", "noValidate_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLFormElement', "target", {
  configurable: true,
  enumerable: true,
  get: function target() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLFormElement'].prototype, "HTMLFormElement", "target_get", arguments);
  },
  set: function target() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLFormElement'].prototype, "HTMLFormElement", "target_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLFormElement', "elements", {
  configurable: true,
  enumerable: true,
  get: function elements() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLFormElement'].prototype, "HTMLFormElement", "elements_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLFormElement', "length", {
  configurable: true,
  enumerable: true,
  get: function length() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLFormElement'].prototype, "HTMLFormElement", "length_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLFormElement', "checkValidity", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function checkValidity() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLFormElement'].prototype, "HTMLFormElement", "checkValidity", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLFormElement', "reportValidity", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function reportValidity() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLFormElement'].prototype, "HTMLFormElement", "reportValidity", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLFormElement', "requestSubmit", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function requestSubmit() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLFormElement'].prototype, "HTMLFormElement", "requestSubmit", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLFormElement', "reset", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function reset() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLFormElement'].prototype, "HTMLFormElement", "reset", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLFormElement', "submit", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function submit() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLFormElement'].prototype, "HTMLFormElement", "submit", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLFormElement', "rel", {
  configurable: true,
  enumerable: true,
  get: function rel() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLFormElement'].prototype, "HTMLFormElement", "rel_get", arguments);
  },
  set: function rel() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLFormElement'].prototype, "HTMLFormElement", "rel_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLFormElement', "relList", {
  configurable: true,
  enumerable: true,
  get: function relList() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLFormElement'].prototype, "HTMLFormElement", "relList_get", arguments);
  },
  set: function relList() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLFormElement'].prototype, "HTMLFormElement", "relList_set", arguments);
  }
}, 'prototype');