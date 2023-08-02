// HTMLFormElement对象

HTMLFormElement = function HTMLFormElement() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof HTMLFormElement)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('HTMLFormElement 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(HTMLFormElement, "HTMLFormElement");
HTMLFormElement.prototype.__proto__ = HTMLElement.prototype;
HTMLFormElement.__proto__ = HTMLElement;
bodavm.toolsFunc.defineProperty(HTMLFormElement.prototype, "acceptCharset", {
  configurable: true,
  enumerable: true,
  get: function acceptCharset() {
    return bodavm.toolsFunc.dispatch(this, HTMLFormElement.prototype, "HTMLFormElement", "acceptCharset_get", arguments);
  },
  set: function acceptCharset() {
    return bodavm.toolsFunc.dispatch(this, HTMLFormElement.prototype, "HTMLFormElement", "acceptCharset_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLFormElement.prototype, "action", {
  configurable: true,
  enumerable: true,
  get: function action() {
    return bodavm.toolsFunc.dispatch(this, HTMLFormElement.prototype, "HTMLFormElement", "action_get", arguments);
  },
  set: function action() {
    return bodavm.toolsFunc.dispatch(this, HTMLFormElement.prototype, "HTMLFormElement", "action_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLFormElement.prototype, "autocomplete", {
  configurable: true,
  enumerable: true,
  get: function autocomplete() {
    return bodavm.toolsFunc.dispatch(this, HTMLFormElement.prototype, "HTMLFormElement", "autocomplete_get", arguments);
  },
  set: function autocomplete() {
    return bodavm.toolsFunc.dispatch(this, HTMLFormElement.prototype, "HTMLFormElement", "autocomplete_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLFormElement.prototype, "enctype", {
  configurable: true,
  enumerable: true,
  get: function enctype() {
    return bodavm.toolsFunc.dispatch(this, HTMLFormElement.prototype, "HTMLFormElement", "enctype_get", arguments);
  },
  set: function enctype() {
    return bodavm.toolsFunc.dispatch(this, HTMLFormElement.prototype, "HTMLFormElement", "enctype_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLFormElement.prototype, "encoding", {
  configurable: true,
  enumerable: true,
  get: function encoding() {
    return bodavm.toolsFunc.dispatch(this, HTMLFormElement.prototype, "HTMLFormElement", "encoding_get", arguments);
  },
  set: function encoding() {
    return bodavm.toolsFunc.dispatch(this, HTMLFormElement.prototype, "HTMLFormElement", "encoding_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLFormElement.prototype, "method", {
  configurable: true,
  enumerable: true,
  get: function method() {
    return bodavm.toolsFunc.dispatch(this, HTMLFormElement.prototype, "HTMLFormElement", "method_get", arguments);
  },
  set: function method() {
    return bodavm.toolsFunc.dispatch(this, HTMLFormElement.prototype, "HTMLFormElement", "method_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLFormElement.prototype, "name", {
  configurable: true,
  enumerable: true,
  get: function name() {
    return bodavm.toolsFunc.dispatch(this, HTMLFormElement.prototype, "HTMLFormElement", "name_get", arguments);
  },
  set: function name() {
    return bodavm.toolsFunc.dispatch(this, HTMLFormElement.prototype, "HTMLFormElement", "name_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLFormElement.prototype, "noValidate", {
  configurable: true,
  enumerable: true,
  get: function noValidate() {
    return bodavm.toolsFunc.dispatch(this, HTMLFormElement.prototype, "HTMLFormElement", "noValidate_get", arguments);
  },
  set: function noValidate() {
    return bodavm.toolsFunc.dispatch(this, HTMLFormElement.prototype, "HTMLFormElement", "noValidate_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLFormElement.prototype, "target", {
  configurable: true,
  enumerable: true,
  get: function target() {
    return bodavm.toolsFunc.dispatch(this, HTMLFormElement.prototype, "HTMLFormElement", "target_get", arguments);
  },
  set: function target() {
    return bodavm.toolsFunc.dispatch(this, HTMLFormElement.prototype, "HTMLFormElement", "target_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLFormElement.prototype, "elements", {
  configurable: true,
  enumerable: true,
  get: function elements() {
    return bodavm.toolsFunc.dispatch(this, HTMLFormElement.prototype, "HTMLFormElement", "elements_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(HTMLFormElement.prototype, "length", {
  configurable: true,
  enumerable: true,
  get: function length() {
    return bodavm.toolsFunc.dispatch(this, HTMLFormElement.prototype, "HTMLFormElement", "length_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(HTMLFormElement.prototype, "checkValidity", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function checkValidity() {
    return bodavm.toolsFunc.dispatch(this, HTMLFormElement.prototype, "HTMLFormElement", "checkValidity", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLFormElement.prototype, "reportValidity", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function reportValidity() {
    return bodavm.toolsFunc.dispatch(this, HTMLFormElement.prototype, "HTMLFormElement", "reportValidity", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLFormElement.prototype, "requestSubmit", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function requestSubmit() {
    return bodavm.toolsFunc.dispatch(this, HTMLFormElement.prototype, "HTMLFormElement", "requestSubmit", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLFormElement.prototype, "reset", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function reset() {
    return bodavm.toolsFunc.dispatch(this, HTMLFormElement.prototype, "HTMLFormElement", "reset", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLFormElement.prototype, "submit", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function submit() {
    return bodavm.toolsFunc.dispatch(this, HTMLFormElement.prototype, "HTMLFormElement", "submit", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLFormElement.prototype, "rel", {
  configurable: true,
  enumerable: true,
  get: function rel() {
    return bodavm.toolsFunc.dispatch(this, HTMLFormElement.prototype, "HTMLFormElement", "rel_get", arguments);
  },
  set: function rel() {
    return bodavm.toolsFunc.dispatch(this, HTMLFormElement.prototype, "HTMLFormElement", "rel_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLFormElement.prototype, "relList", {
  configurable: true,
  enumerable: true,
  get: function relList() {
    return bodavm.toolsFunc.dispatch(this, HTMLFormElement.prototype, "HTMLFormElement", "relList_get", arguments);
  },
  set: function relList() {
    return bodavm.toolsFunc.dispatch(this, HTMLFormElement.prototype, "HTMLFormElement", "relList_set", arguments);
  }
});