// HTMLSelectElement对象

bodaEnv.memory.globlProtoObj["HTMLSelectElement"] = function HTMLSelectElement() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('HTMLSelectElement 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["HTMLSelectElement"], "HTMLSelectElement");
bodaEnv.memory.globlProtoObj["HTMLSelectElement"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["HTMLElement"].prototype;
bodaEnv.memory.globlProtoObj["HTMLSelectElement"].__proto__ = bodaEnv.memory.globlProtoObj["HTMLElement"];
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLSelectElement"].prototype, "autocomplete", {
  configurable: true,
  enumerable: true,
  get: {
    autocomplete() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLSelectElement"].prototype, "HTMLSelectElement", "autocomplete_get", arguments);
    }
  }.autocomplete,
  set: {
    autocomplete() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLSelectElement"].prototype, "HTMLSelectElement", "autocomplete_set", arguments);
    }
  }.autocomplete
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLSelectElement"].prototype, "disabled", {
  configurable: true,
  enumerable: true,
  get: {
    disabled() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLSelectElement"].prototype, "HTMLSelectElement", "disabled_get", arguments);
    }
  }.disabled,
  set: {
    disabled() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLSelectElement"].prototype, "HTMLSelectElement", "disabled_set", arguments);
    }
  }.disabled
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLSelectElement"].prototype, "form", {
  configurable: true,
  enumerable: true,
  get: {
    form() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLSelectElement"].prototype, "HTMLSelectElement", "form_get", arguments);
    }
  }.form,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLSelectElement"].prototype, "multiple", {
  configurable: true,
  enumerable: true,
  get: {
    multiple() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLSelectElement"].prototype, "HTMLSelectElement", "multiple_get", arguments);
    }
  }.multiple,
  set: {
    multiple() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLSelectElement"].prototype, "HTMLSelectElement", "multiple_set", arguments);
    }
  }.multiple
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLSelectElement"].prototype, "name", {
  configurable: true,
  enumerable: true,
  get: {
    name() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLSelectElement"].prototype, "HTMLSelectElement", "name_get", arguments);
    }
  }.name,
  set: {
    name() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLSelectElement"].prototype, "HTMLSelectElement", "name_set", arguments);
    }
  }.name
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLSelectElement"].prototype, "required", {
  configurable: true,
  enumerable: true,
  get: {
    required() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLSelectElement"].prototype, "HTMLSelectElement", "required_get", arguments);
    }
  }.required,
  set: {
    required() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLSelectElement"].prototype, "HTMLSelectElement", "required_set", arguments);
    }
  }.required
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLSelectElement"].prototype, "size", {
  configurable: true,
  enumerable: true,
  get: {
    size() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLSelectElement"].prototype, "HTMLSelectElement", "size_get", arguments);
    }
  }.size,
  set: {
    size() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLSelectElement"].prototype, "HTMLSelectElement", "size_set", arguments);
    }
  }.size
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLSelectElement"].prototype, "type", {
  configurable: true,
  enumerable: true,
  get: {
    type() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLSelectElement"].prototype, "HTMLSelectElement", "type_get", arguments);
    }
  }.type,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLSelectElement"].prototype, "options", {
  configurable: true,
  enumerable: true,
  get: {
    options() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLSelectElement"].prototype, "HTMLSelectElement", "options_get", arguments);
    }
  }.options,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLSelectElement"].prototype, "length", {
  configurable: true,
  enumerable: true,
  get: {
    length() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLSelectElement"].prototype, "HTMLSelectElement", "length_get", arguments);
    }
  }.length,
  set: {
    length() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLSelectElement"].prototype, "HTMLSelectElement", "length_set", arguments);
    }
  }.length
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLSelectElement"].prototype, "selectedOptions", {
  configurable: true,
  enumerable: true,
  get: {
    selectedOptions() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLSelectElement"].prototype, "HTMLSelectElement", "selectedOptions_get", arguments);
    }
  }.selectedOptions,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLSelectElement"].prototype, "selectedIndex", {
  configurable: true,
  enumerable: true,
  get: {
    selectedIndex() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLSelectElement"].prototype, "HTMLSelectElement", "selectedIndex_get", arguments);
    }
  }.selectedIndex,
  set: {
    selectedIndex() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLSelectElement"].prototype, "HTMLSelectElement", "selectedIndex_set", arguments);
    }
  }.selectedIndex
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLSelectElement"].prototype, "value", {
  configurable: true,
  enumerable: true,
  get: {
    value() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLSelectElement"].prototype, "HTMLSelectElement", "value_get", arguments);
    }
  }.value,
  set: {
    value() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLSelectElement"].prototype, "HTMLSelectElement", "value_set", arguments);
    }
  }.value
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLSelectElement"].prototype, "willValidate", {
  configurable: true,
  enumerable: true,
  get: {
    willValidate() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLSelectElement"].prototype, "HTMLSelectElement", "willValidate_get", arguments);
    }
  }.willValidate,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLSelectElement"].prototype, "validity", {
  configurable: true,
  enumerable: true,
  get: {
    validity() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLSelectElement"].prototype, "HTMLSelectElement", "validity_get", arguments);
    }
  }.validity,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLSelectElement"].prototype, "validationMessage", {
  configurable: true,
  enumerable: true,
  get: {
    validationMessage() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLSelectElement"].prototype, "HTMLSelectElement", "validationMessage_get", arguments);
    }
  }.validationMessage,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLSelectElement"].prototype, "labels", {
  configurable: true,
  enumerable: true,
  get: {
    labels() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLSelectElement"].prototype, "HTMLSelectElement", "labels_get", arguments);
    }
  }.labels,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLSelectElement"].prototype, "add", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    add() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLSelectElement"].prototype, "HTMLSelectElement", "add", arguments);
    }
  }.add
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLSelectElement"].prototype, "checkValidity", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    checkValidity() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLSelectElement"].prototype, "HTMLSelectElement", "checkValidity", arguments);
    }
  }.checkValidity
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLSelectElement"].prototype, "item", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    item() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLSelectElement"].prototype, "HTMLSelectElement", "item", arguments);
    }
  }.item
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLSelectElement"].prototype, "namedItem", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    namedItem() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLSelectElement"].prototype, "HTMLSelectElement", "namedItem", arguments);
    }
  }.namedItem
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLSelectElement"].prototype, "remove", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    remove() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLSelectElement"].prototype, "HTMLSelectElement", "remove", arguments);
    }
  }.remove
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLSelectElement"].prototype, "reportValidity", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    reportValidity() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLSelectElement"].prototype, "HTMLSelectElement", "reportValidity", arguments);
    }
  }.reportValidity
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLSelectElement"].prototype, "setCustomValidity", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    setCustomValidity() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLSelectElement"].prototype, "HTMLSelectElement", "setCustomValidity", arguments);
    }
  }.setCustomValidity
});