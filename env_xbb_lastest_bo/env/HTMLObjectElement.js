// HTMLObjectElement对象

HTMLObjectElement = function HTMLObjectElement() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof HTMLObjectElement)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('HTMLObjectElement 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(HTMLObjectElement, "HTMLObjectElement");
HTMLObjectElement.prototype.__proto__ = HTMLElement.prototype;
HTMLObjectElement.__proto__ = HTMLElement;
bodavm.toolsFunc.defineProperty(HTMLObjectElement.prototype, "data", {
  configurable: true,
  enumerable: true,
  get: function data() {
    return bodavm.toolsFunc.dispatch(this, HTMLObjectElement.prototype, "HTMLObjectElement", "data_get", arguments);
  },
  set: function data() {
    return bodavm.toolsFunc.dispatch(this, HTMLObjectElement.prototype, "HTMLObjectElement", "data_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLObjectElement.prototype, "type", {
  configurable: true,
  enumerable: true,
  get: function type() {
    return bodavm.toolsFunc.dispatch(this, HTMLObjectElement.prototype, "HTMLObjectElement", "type_get", arguments);
  },
  set: function type() {
    return bodavm.toolsFunc.dispatch(this, HTMLObjectElement.prototype, "HTMLObjectElement", "type_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLObjectElement.prototype, "name", {
  configurable: true,
  enumerable: true,
  get: function name() {
    return bodavm.toolsFunc.dispatch(this, HTMLObjectElement.prototype, "HTMLObjectElement", "name_get", arguments);
  },
  set: function name() {
    return bodavm.toolsFunc.dispatch(this, HTMLObjectElement.prototype, "HTMLObjectElement", "name_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLObjectElement.prototype, "useMap", {
  configurable: true,
  enumerable: true,
  get: function useMap() {
    return bodavm.toolsFunc.dispatch(this, HTMLObjectElement.prototype, "HTMLObjectElement", "useMap_get", arguments);
  },
  set: function useMap() {
    return bodavm.toolsFunc.dispatch(this, HTMLObjectElement.prototype, "HTMLObjectElement", "useMap_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLObjectElement.prototype, "form", {
  configurable: true,
  enumerable: true,
  get: function form() {
    return bodavm.toolsFunc.dispatch(this, HTMLObjectElement.prototype, "HTMLObjectElement", "form_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(HTMLObjectElement.prototype, "width", {
  configurable: true,
  enumerable: true,
  get: function width() {
    return bodavm.toolsFunc.dispatch(this, HTMLObjectElement.prototype, "HTMLObjectElement", "width_get", arguments);
  },
  set: function width() {
    return bodavm.toolsFunc.dispatch(this, HTMLObjectElement.prototype, "HTMLObjectElement", "width_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLObjectElement.prototype, "height", {
  configurable: true,
  enumerable: true,
  get: function height() {
    return bodavm.toolsFunc.dispatch(this, HTMLObjectElement.prototype, "HTMLObjectElement", "height_get", arguments);
  },
  set: function height() {
    return bodavm.toolsFunc.dispatch(this, HTMLObjectElement.prototype, "HTMLObjectElement", "height_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLObjectElement.prototype, "contentDocument", {
  configurable: true,
  enumerable: true,
  get: function contentDocument() {
    return bodavm.toolsFunc.dispatch(this, HTMLObjectElement.prototype, "HTMLObjectElement", "contentDocument_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(HTMLObjectElement.prototype, "contentWindow", {
  configurable: true,
  enumerable: true,
  get: function contentWindow() {
    return bodavm.toolsFunc.dispatch(this, HTMLObjectElement.prototype, "HTMLObjectElement", "contentWindow_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(HTMLObjectElement.prototype, "willValidate", {
  configurable: true,
  enumerable: true,
  get: function willValidate() {
    return bodavm.toolsFunc.dispatch(this, HTMLObjectElement.prototype, "HTMLObjectElement", "willValidate_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(HTMLObjectElement.prototype, "validity", {
  configurable: true,
  enumerable: true,
  get: function validity() {
    return bodavm.toolsFunc.dispatch(this, HTMLObjectElement.prototype, "HTMLObjectElement", "validity_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(HTMLObjectElement.prototype, "validationMessage", {
  configurable: true,
  enumerable: true,
  get: function validationMessage() {
    return bodavm.toolsFunc.dispatch(this, HTMLObjectElement.prototype, "HTMLObjectElement", "validationMessage_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(HTMLObjectElement.prototype, "align", {
  configurable: true,
  enumerable: true,
  get: function align() {
    return bodavm.toolsFunc.dispatch(this, HTMLObjectElement.prototype, "HTMLObjectElement", "align_get", arguments);
  },
  set: function align() {
    return bodavm.toolsFunc.dispatch(this, HTMLObjectElement.prototype, "HTMLObjectElement", "align_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLObjectElement.prototype, "archive", {
  configurable: true,
  enumerable: true,
  get: function archive() {
    return bodavm.toolsFunc.dispatch(this, HTMLObjectElement.prototype, "HTMLObjectElement", "archive_get", arguments);
  },
  set: function archive() {
    return bodavm.toolsFunc.dispatch(this, HTMLObjectElement.prototype, "HTMLObjectElement", "archive_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLObjectElement.prototype, "code", {
  configurable: true,
  enumerable: true,
  get: function code() {
    return bodavm.toolsFunc.dispatch(this, HTMLObjectElement.prototype, "HTMLObjectElement", "code_get", arguments);
  },
  set: function code() {
    return bodavm.toolsFunc.dispatch(this, HTMLObjectElement.prototype, "HTMLObjectElement", "code_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLObjectElement.prototype, "declare", {
  configurable: true,
  enumerable: true,
  get: function declare() {
    return bodavm.toolsFunc.dispatch(this, HTMLObjectElement.prototype, "HTMLObjectElement", "declare_get", arguments);
  },
  set: function declare() {
    return bodavm.toolsFunc.dispatch(this, HTMLObjectElement.prototype, "HTMLObjectElement", "declare_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLObjectElement.prototype, "hspace", {
  configurable: true,
  enumerable: true,
  get: function hspace() {
    return bodavm.toolsFunc.dispatch(this, HTMLObjectElement.prototype, "HTMLObjectElement", "hspace_get", arguments);
  },
  set: function hspace() {
    return bodavm.toolsFunc.dispatch(this, HTMLObjectElement.prototype, "HTMLObjectElement", "hspace_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLObjectElement.prototype, "standby", {
  configurable: true,
  enumerable: true,
  get: function standby() {
    return bodavm.toolsFunc.dispatch(this, HTMLObjectElement.prototype, "HTMLObjectElement", "standby_get", arguments);
  },
  set: function standby() {
    return bodavm.toolsFunc.dispatch(this, HTMLObjectElement.prototype, "HTMLObjectElement", "standby_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLObjectElement.prototype, "vspace", {
  configurable: true,
  enumerable: true,
  get: function vspace() {
    return bodavm.toolsFunc.dispatch(this, HTMLObjectElement.prototype, "HTMLObjectElement", "vspace_get", arguments);
  },
  set: function vspace() {
    return bodavm.toolsFunc.dispatch(this, HTMLObjectElement.prototype, "HTMLObjectElement", "vspace_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLObjectElement.prototype, "codeBase", {
  configurable: true,
  enumerable: true,
  get: function codeBase() {
    return bodavm.toolsFunc.dispatch(this, HTMLObjectElement.prototype, "HTMLObjectElement", "codeBase_get", arguments);
  },
  set: function codeBase() {
    return bodavm.toolsFunc.dispatch(this, HTMLObjectElement.prototype, "HTMLObjectElement", "codeBase_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLObjectElement.prototype, "codeType", {
  configurable: true,
  enumerable: true,
  get: function codeType() {
    return bodavm.toolsFunc.dispatch(this, HTMLObjectElement.prototype, "HTMLObjectElement", "codeType_get", arguments);
  },
  set: function codeType() {
    return bodavm.toolsFunc.dispatch(this, HTMLObjectElement.prototype, "HTMLObjectElement", "codeType_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLObjectElement.prototype, "border", {
  configurable: true,
  enumerable: true,
  get: function border() {
    return bodavm.toolsFunc.dispatch(this, HTMLObjectElement.prototype, "HTMLObjectElement", "border_get", arguments);
  },
  set: function border() {
    return bodavm.toolsFunc.dispatch(this, HTMLObjectElement.prototype, "HTMLObjectElement", "border_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLObjectElement.prototype, "checkValidity", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function checkValidity() {
    return bodavm.toolsFunc.dispatch(this, HTMLObjectElement.prototype, "HTMLObjectElement", "checkValidity", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLObjectElement.prototype, "getSVGDocument", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getSVGDocument() {
    return bodavm.toolsFunc.dispatch(this, HTMLObjectElement.prototype, "HTMLObjectElement", "getSVGDocument", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLObjectElement.prototype, "reportValidity", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function reportValidity() {
    return bodavm.toolsFunc.dispatch(this, HTMLObjectElement.prototype, "HTMLObjectElement", "reportValidity", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLObjectElement.prototype, "setCustomValidity", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function setCustomValidity() {
    return bodavm.toolsFunc.dispatch(this, HTMLObjectElement.prototype, "HTMLObjectElement", "setCustomValidity", arguments);
  }
});