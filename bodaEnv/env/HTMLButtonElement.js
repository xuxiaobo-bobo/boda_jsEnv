// HTMLButtonElement对象

bodaEnv.memory.globlProtoObj["HTMLButtonElement"] = function HTMLButtonElement() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('HTMLButtonElement 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["HTMLButtonElement"], "HTMLButtonElement");
bodaEnv.memory.globlProtoObj["HTMLButtonElement"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["HTMLElement"].prototype;
bodaEnv.memory.globlProtoObj["HTMLButtonElement"].__proto__ = bodaEnv.memory.globlProtoObj["HTMLElement"];
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLButtonElement"].prototype, "disabled", {
  configurable: true,
  enumerable: true,
  get: {
    disabled() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLButtonElement"].prototype, "HTMLButtonElement", "disabled_get", arguments);
    }
  }.disabled,
  set: {
    disabled() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLButtonElement"].prototype, "HTMLButtonElement", "disabled_set", arguments);
    }
  }.disabled
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLButtonElement"].prototype, "form", {
  configurable: true,
  enumerable: true,
  get: {
    form() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLButtonElement"].prototype, "HTMLButtonElement", "form_get", arguments);
    }
  }.form,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLButtonElement"].prototype, "formAction", {
  configurable: true,
  enumerable: true,
  get: {
    formAction() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLButtonElement"].prototype, "HTMLButtonElement", "formAction_get", arguments);
    }
  }.formAction,
  set: {
    formAction() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLButtonElement"].prototype, "HTMLButtonElement", "formAction_set", arguments);
    }
  }.formAction
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLButtonElement"].prototype, "formEnctype", {
  configurable: true,
  enumerable: true,
  get: {
    formEnctype() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLButtonElement"].prototype, "HTMLButtonElement", "formEnctype_get", arguments);
    }
  }.formEnctype,
  set: {
    formEnctype() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLButtonElement"].prototype, "HTMLButtonElement", "formEnctype_set", arguments);
    }
  }.formEnctype
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLButtonElement"].prototype, "formMethod", {
  configurable: true,
  enumerable: true,
  get: {
    formMethod() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLButtonElement"].prototype, "HTMLButtonElement", "formMethod_get", arguments);
    }
  }.formMethod,
  set: {
    formMethod() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLButtonElement"].prototype, "HTMLButtonElement", "formMethod_set", arguments);
    }
  }.formMethod
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLButtonElement"].prototype, "formNoValidate", {
  configurable: true,
  enumerable: true,
  get: {
    formNoValidate() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLButtonElement"].prototype, "HTMLButtonElement", "formNoValidate_get", arguments);
    }
  }.formNoValidate,
  set: {
    formNoValidate() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLButtonElement"].prototype, "HTMLButtonElement", "formNoValidate_set", arguments);
    }
  }.formNoValidate
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLButtonElement"].prototype, "formTarget", {
  configurable: true,
  enumerable: true,
  get: {
    formTarget() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLButtonElement"].prototype, "HTMLButtonElement", "formTarget_get", arguments);
    }
  }.formTarget,
  set: {
    formTarget() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLButtonElement"].prototype, "HTMLButtonElement", "formTarget_set", arguments);
    }
  }.formTarget
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLButtonElement"].prototype, "name", {
  configurable: true,
  enumerable: true,
  get: {
    name() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLButtonElement"].prototype, "HTMLButtonElement", "name_get", arguments);
    }
  }.name,
  set: {
    name() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLButtonElement"].prototype, "HTMLButtonElement", "name_set", arguments);
    }
  }.name
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLButtonElement"].prototype, "type", {
  configurable: true,
  enumerable: true,
  get: {
    type() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLButtonElement"].prototype, "HTMLButtonElement", "type_get", arguments);
    }
  }.type,
  set: {
    type() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLButtonElement"].prototype, "HTMLButtonElement", "type_set", arguments);
    }
  }.type
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLButtonElement"].prototype, "value", {
  configurable: true,
  enumerable: true,
  get: {
    value() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLButtonElement"].prototype, "HTMLButtonElement", "value_get", arguments);
    }
  }.value,
  set: {
    value() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLButtonElement"].prototype, "HTMLButtonElement", "value_set", arguments);
    }
  }.value
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLButtonElement"].prototype, "willValidate", {
  configurable: true,
  enumerable: true,
  get: {
    willValidate() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLButtonElement"].prototype, "HTMLButtonElement", "willValidate_get", arguments);
    }
  }.willValidate,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLButtonElement"].prototype, "validity", {
  configurable: true,
  enumerable: true,
  get: {
    validity() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLButtonElement"].prototype, "HTMLButtonElement", "validity_get", arguments);
    }
  }.validity,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLButtonElement"].prototype, "validationMessage", {
  configurable: true,
  enumerable: true,
  get: {
    validationMessage() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLButtonElement"].prototype, "HTMLButtonElement", "validationMessage_get", arguments);
    }
  }.validationMessage,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLButtonElement"].prototype, "labels", {
  configurable: true,
  enumerable: true,
  get: {
    labels() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLButtonElement"].prototype, "HTMLButtonElement", "labels_get", arguments);
    }
  }.labels,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLButtonElement"].prototype, "checkValidity", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    checkValidity() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLButtonElement"].prototype, "HTMLButtonElement", "checkValidity", arguments);
    }
  }.checkValidity
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLButtonElement"].prototype, "reportValidity", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    reportValidity() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLButtonElement"].prototype, "HTMLButtonElement", "reportValidity", arguments);
    }
  }.reportValidity
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLButtonElement"].prototype, "setCustomValidity", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    setCustomValidity() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLButtonElement"].prototype, "HTMLButtonElement", "setCustomValidity", arguments);
    }
  }.setCustomValidity
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLButtonElement"].prototype, "popoverTargetElement", {
  configurable: true,
  enumerable: true,
  get: {
    popoverTargetElement() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLButtonElement"].prototype, "HTMLButtonElement", "popoverTargetElement_get", arguments);
    }
  }.popoverTargetElement,
  set: {
    popoverTargetElement() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLButtonElement"].prototype, "HTMLButtonElement", "popoverTargetElement_set", arguments);
    }
  }.popoverTargetElement
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLButtonElement"].prototype, "popoverTargetAction", {
  configurable: true,
  enumerable: true,
  get: {
    popoverTargetAction() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLButtonElement"].prototype, "HTMLButtonElement", "popoverTargetAction_get", arguments);
    }
  }.popoverTargetAction,
  set: {
    popoverTargetAction() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLButtonElement"].prototype, "HTMLButtonElement", "popoverTargetAction_set", arguments);
    }
  }.popoverTargetAction
});