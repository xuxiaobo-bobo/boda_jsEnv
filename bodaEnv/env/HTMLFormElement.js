// HTMLFormElement对象

bodaEnv.memory.globlProtoObj["HTMLFormElement"] = function HTMLFormElement() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('HTMLFormElement 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["HTMLFormElement"], "HTMLFormElement");
bodaEnv.memory.globlProtoObj["HTMLFormElement"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["HTMLElement"].prototype;
bodaEnv.memory.globlProtoObj["HTMLFormElement"].__proto__ = bodaEnv.memory.globlProtoObj["HTMLElement"];
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLFormElement"].prototype, "acceptCharset", {
  configurable: true,
  enumerable: true,
  get: {
    acceptCharset() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLFormElement"].prototype, "HTMLFormElement", "acceptCharset_get", arguments);
    }
  }.acceptCharset,
  set: {
    acceptCharset() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLFormElement"].prototype, "HTMLFormElement", "acceptCharset_set", arguments);
    }
  }.acceptCharset
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLFormElement"].prototype, "action", {
  configurable: true,
  enumerable: true,
  get: {
    action() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLFormElement"].prototype, "HTMLFormElement", "action_get", arguments);
    }
  }.action,
  set: {
    action() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLFormElement"].prototype, "HTMLFormElement", "action_set", arguments);
    }
  }.action
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLFormElement"].prototype, "autocomplete", {
  configurable: true,
  enumerable: true,
  get: {
    autocomplete() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLFormElement"].prototype, "HTMLFormElement", "autocomplete_get", arguments);
    }
  }.autocomplete,
  set: {
    autocomplete() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLFormElement"].prototype, "HTMLFormElement", "autocomplete_set", arguments);
    }
  }.autocomplete
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLFormElement"].prototype, "enctype", {
  configurable: true,
  enumerable: true,
  get: {
    enctype() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLFormElement"].prototype, "HTMLFormElement", "enctype_get", arguments);
    }
  }.enctype,
  set: {
    enctype() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLFormElement"].prototype, "HTMLFormElement", "enctype_set", arguments);
    }
  }.enctype
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLFormElement"].prototype, "encoding", {
  configurable: true,
  enumerable: true,
  get: {
    encoding() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLFormElement"].prototype, "HTMLFormElement", "encoding_get", arguments);
    }
  }.encoding,
  set: {
    encoding() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLFormElement"].prototype, "HTMLFormElement", "encoding_set", arguments);
    }
  }.encoding
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLFormElement"].prototype, "method", {
  configurable: true,
  enumerable: true,
  get: {
    method() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLFormElement"].prototype, "HTMLFormElement", "method_get", arguments);
    }
  }.method,
  set: {
    method() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLFormElement"].prototype, "HTMLFormElement", "method_set", arguments);
    }
  }.method
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLFormElement"].prototype, "name", {
  configurable: true,
  enumerable: true,
  get: {
    name() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLFormElement"].prototype, "HTMLFormElement", "name_get", arguments);
    }
  }.name,
  set: {
    name() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLFormElement"].prototype, "HTMLFormElement", "name_set", arguments);
    }
  }.name
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLFormElement"].prototype, "noValidate", {
  configurable: true,
  enumerable: true,
  get: {
    noValidate() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLFormElement"].prototype, "HTMLFormElement", "noValidate_get", arguments);
    }
  }.noValidate,
  set: {
    noValidate() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLFormElement"].prototype, "HTMLFormElement", "noValidate_set", arguments);
    }
  }.noValidate
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLFormElement"].prototype, "target", {
  configurable: true,
  enumerable: true,
  get: {
    target() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLFormElement"].prototype, "HTMLFormElement", "target_get", arguments);
    }
  }.target,
  set: {
    target() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLFormElement"].prototype, "HTMLFormElement", "target_set", arguments);
    }
  }.target
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLFormElement"].prototype, "elements", {
  configurable: true,
  enumerable: true,
  get: {
    elements() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLFormElement"].prototype, "HTMLFormElement", "elements_get", arguments);
    }
  }.elements,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLFormElement"].prototype, "length", {
  configurable: true,
  enumerable: true,
  get: {
    length() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLFormElement"].prototype, "HTMLFormElement", "length_get", arguments);
    }
  }.length,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLFormElement"].prototype, "checkValidity", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    checkValidity() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLFormElement"].prototype, "HTMLFormElement", "checkValidity", arguments);
    }
  }.checkValidity
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLFormElement"].prototype, "reportValidity", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    reportValidity() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLFormElement"].prototype, "HTMLFormElement", "reportValidity", arguments);
    }
  }.reportValidity
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLFormElement"].prototype, "requestSubmit", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    requestSubmit() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLFormElement"].prototype, "HTMLFormElement", "requestSubmit", arguments);
    }
  }.requestSubmit
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLFormElement"].prototype, "reset", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    reset() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLFormElement"].prototype, "HTMLFormElement", "reset", arguments);
    }
  }.reset
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLFormElement"].prototype, "submit", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    submit() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLFormElement"].prototype, "HTMLFormElement", "submit", arguments);
    }
  }.submit
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLFormElement"].prototype, "rel", {
  configurable: true,
  enumerable: true,
  get: {
    rel() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLFormElement"].prototype, "HTMLFormElement", "rel_get", arguments);
    }
  }.rel,
  set: {
    rel() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLFormElement"].prototype, "HTMLFormElement", "rel_set", arguments);
    }
  }.rel
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLFormElement"].prototype, "relList", {
  configurable: true,
  enumerable: true,
  get: {
    relList() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLFormElement"].prototype, "HTMLFormElement", "relList_get", arguments);
    }
  }.relList,
  set: {
    relList() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLFormElement"].prototype, "HTMLFormElement", "relList_set", arguments);
    }
  }.relList
});