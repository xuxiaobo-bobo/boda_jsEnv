// HTMLOutputElement对象

bodaEnv.memory.globlProtoObj["HTMLOutputElement"] = function HTMLOutputElement() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('HTMLOutputElement 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["HTMLOutputElement"], "HTMLOutputElement");
bodaEnv.memory.globlProtoObj["HTMLOutputElement"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["HTMLElement"].prototype;
bodaEnv.memory.globlProtoObj["HTMLOutputElement"].__proto__ = bodaEnv.memory.globlProtoObj["HTMLElement"];
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLOutputElement"].prototype, "htmlFor", {
  configurable: true,
  enumerable: true,
  get: {
    htmlFor() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLOutputElement"].prototype, "HTMLOutputElement", "htmlFor_get", arguments);
    }
  }.htmlFor,
  set: {
    htmlFor() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLOutputElement"].prototype, "HTMLOutputElement", "htmlFor_set", arguments);
    }
  }.htmlFor
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLOutputElement"].prototype, "form", {
  configurable: true,
  enumerable: true,
  get: {
    form() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLOutputElement"].prototype, "HTMLOutputElement", "form_get", arguments);
    }
  }.form,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLOutputElement"].prototype, "name", {
  configurable: true,
  enumerable: true,
  get: {
    name() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLOutputElement"].prototype, "HTMLOutputElement", "name_get", arguments);
    }
  }.name,
  set: {
    name() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLOutputElement"].prototype, "HTMLOutputElement", "name_set", arguments);
    }
  }.name
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLOutputElement"].prototype, "type", {
  configurable: true,
  enumerable: true,
  get: {
    type() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLOutputElement"].prototype, "HTMLOutputElement", "type_get", arguments);
    }
  }.type,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLOutputElement"].prototype, "defaultValue", {
  configurable: true,
  enumerable: true,
  get: {
    defaultValue() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLOutputElement"].prototype, "HTMLOutputElement", "defaultValue_get", arguments);
    }
  }.defaultValue,
  set: {
    defaultValue() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLOutputElement"].prototype, "HTMLOutputElement", "defaultValue_set", arguments);
    }
  }.defaultValue
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLOutputElement"].prototype, "value", {
  configurable: true,
  enumerable: true,
  get: {
    value() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLOutputElement"].prototype, "HTMLOutputElement", "value_get", arguments);
    }
  }.value,
  set: {
    value() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLOutputElement"].prototype, "HTMLOutputElement", "value_set", arguments);
    }
  }.value
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLOutputElement"].prototype, "willValidate", {
  configurable: true,
  enumerable: true,
  get: {
    willValidate() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLOutputElement"].prototype, "HTMLOutputElement", "willValidate_get", arguments);
    }
  }.willValidate,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLOutputElement"].prototype, "validity", {
  configurable: true,
  enumerable: true,
  get: {
    validity() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLOutputElement"].prototype, "HTMLOutputElement", "validity_get", arguments);
    }
  }.validity,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLOutputElement"].prototype, "validationMessage", {
  configurable: true,
  enumerable: true,
  get: {
    validationMessage() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLOutputElement"].prototype, "HTMLOutputElement", "validationMessage_get", arguments);
    }
  }.validationMessage,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLOutputElement"].prototype, "labels", {
  configurable: true,
  enumerable: true,
  get: {
    labels() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLOutputElement"].prototype, "HTMLOutputElement", "labels_get", arguments);
    }
  }.labels,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLOutputElement"].prototype, "checkValidity", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    checkValidity() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLOutputElement"].prototype, "HTMLOutputElement", "checkValidity", arguments);
    }
  }.checkValidity
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLOutputElement"].prototype, "reportValidity", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    reportValidity() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLOutputElement"].prototype, "HTMLOutputElement", "reportValidity", arguments);
    }
  }.reportValidity
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLOutputElement"].prototype, "setCustomValidity", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    setCustomValidity() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLOutputElement"].prototype, "HTMLOutputElement", "setCustomValidity", arguments);
    }
  }.setCustomValidity
});