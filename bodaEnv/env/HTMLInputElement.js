// HTMLInputElement对象

bodaEnv.memory.globlProtoObj["HTMLInputElement"] = function HTMLInputElement() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('HTMLInputElement 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["HTMLInputElement"], "HTMLInputElement");
bodaEnv.memory.globlProtoObj["HTMLInputElement"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["HTMLElement"].prototype;
bodaEnv.memory.globlProtoObj["HTMLInputElement"].__proto__ = bodaEnv.memory.globlProtoObj["HTMLElement"];
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLInputElement"].prototype, "accept", {
  configurable: true,
  enumerable: true,
  get: {
    accept() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLInputElement"].prototype, "HTMLInputElement", "accept_get", arguments);
    }
  }.accept,
  set: {
    accept() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLInputElement"].prototype, "HTMLInputElement", "accept_set", arguments);
    }
  }.accept
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLInputElement"].prototype, "alt", {
  configurable: true,
  enumerable: true,
  get: {
    alt() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLInputElement"].prototype, "HTMLInputElement", "alt_get", arguments);
    }
  }.alt,
  set: {
    alt() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLInputElement"].prototype, "HTMLInputElement", "alt_set", arguments);
    }
  }.alt
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLInputElement"].prototype, "autocomplete", {
  configurable: true,
  enumerable: true,
  get: {
    autocomplete() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLInputElement"].prototype, "HTMLInputElement", "autocomplete_get", arguments);
    }
  }.autocomplete,
  set: {
    autocomplete() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLInputElement"].prototype, "HTMLInputElement", "autocomplete_set", arguments);
    }
  }.autocomplete
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLInputElement"].prototype, "defaultChecked", {
  configurable: true,
  enumerable: true,
  get: {
    defaultChecked() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLInputElement"].prototype, "HTMLInputElement", "defaultChecked_get", arguments);
    }
  }.defaultChecked,
  set: {
    defaultChecked() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLInputElement"].prototype, "HTMLInputElement", "defaultChecked_set", arguments);
    }
  }.defaultChecked
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLInputElement"].prototype, "checked", {
  configurable: true,
  enumerable: true,
  get: {
    checked() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLInputElement"].prototype, "HTMLInputElement", "checked_get", arguments);
    }
  }.checked,
  set: {
    checked() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLInputElement"].prototype, "HTMLInputElement", "checked_set", arguments);
    }
  }.checked
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLInputElement"].prototype, "dirName", {
  configurable: true,
  enumerable: true,
  get: {
    dirName() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLInputElement"].prototype, "HTMLInputElement", "dirName_get", arguments);
    }
  }.dirName,
  set: {
    dirName() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLInputElement"].prototype, "HTMLInputElement", "dirName_set", arguments);
    }
  }.dirName
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLInputElement"].prototype, "disabled", {
  configurable: true,
  enumerable: true,
  get: {
    disabled() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLInputElement"].prototype, "HTMLInputElement", "disabled_get", arguments);
    }
  }.disabled,
  set: {
    disabled() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLInputElement"].prototype, "HTMLInputElement", "disabled_set", arguments);
    }
  }.disabled
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLInputElement"].prototype, "form", {
  configurable: true,
  enumerable: true,
  get: {
    form() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLInputElement"].prototype, "HTMLInputElement", "form_get", arguments);
    }
  }.form,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLInputElement"].prototype, "files", {
  configurable: true,
  enumerable: true,
  get: {
    files() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLInputElement"].prototype, "HTMLInputElement", "files_get", arguments);
    }
  }.files,
  set: {
    files() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLInputElement"].prototype, "HTMLInputElement", "files_set", arguments);
    }
  }.files
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLInputElement"].prototype, "formAction", {
  configurable: true,
  enumerable: true,
  get: {
    formAction() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLInputElement"].prototype, "HTMLInputElement", "formAction_get", arguments);
    }
  }.formAction,
  set: {
    formAction() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLInputElement"].prototype, "HTMLInputElement", "formAction_set", arguments);
    }
  }.formAction
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLInputElement"].prototype, "formEnctype", {
  configurable: true,
  enumerable: true,
  get: {
    formEnctype() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLInputElement"].prototype, "HTMLInputElement", "formEnctype_get", arguments);
    }
  }.formEnctype,
  set: {
    formEnctype() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLInputElement"].prototype, "HTMLInputElement", "formEnctype_set", arguments);
    }
  }.formEnctype
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLInputElement"].prototype, "formMethod", {
  configurable: true,
  enumerable: true,
  get: {
    formMethod() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLInputElement"].prototype, "HTMLInputElement", "formMethod_get", arguments);
    }
  }.formMethod,
  set: {
    formMethod() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLInputElement"].prototype, "HTMLInputElement", "formMethod_set", arguments);
    }
  }.formMethod
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLInputElement"].prototype, "formNoValidate", {
  configurable: true,
  enumerable: true,
  get: {
    formNoValidate() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLInputElement"].prototype, "HTMLInputElement", "formNoValidate_get", arguments);
    }
  }.formNoValidate,
  set: {
    formNoValidate() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLInputElement"].prototype, "HTMLInputElement", "formNoValidate_set", arguments);
    }
  }.formNoValidate
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLInputElement"].prototype, "formTarget", {
  configurable: true,
  enumerable: true,
  get: {
    formTarget() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLInputElement"].prototype, "HTMLInputElement", "formTarget_get", arguments);
    }
  }.formTarget,
  set: {
    formTarget() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLInputElement"].prototype, "HTMLInputElement", "formTarget_set", arguments);
    }
  }.formTarget
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLInputElement"].prototype, "height", {
  configurable: true,
  enumerable: true,
  get: {
    height() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLInputElement"].prototype, "HTMLInputElement", "height_get", arguments);
    }
  }.height,
  set: {
    height() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLInputElement"].prototype, "HTMLInputElement", "height_set", arguments);
    }
  }.height
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLInputElement"].prototype, "indeterminate", {
  configurable: true,
  enumerable: true,
  get: {
    indeterminate() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLInputElement"].prototype, "HTMLInputElement", "indeterminate_get", arguments);
    }
  }.indeterminate,
  set: {
    indeterminate() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLInputElement"].prototype, "HTMLInputElement", "indeterminate_set", arguments);
    }
  }.indeterminate
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLInputElement"].prototype, "list", {
  configurable: true,
  enumerable: true,
  get: {
    list() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLInputElement"].prototype, "HTMLInputElement", "list_get", arguments);
    }
  }.list,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLInputElement"].prototype, "max", {
  configurable: true,
  enumerable: true,
  get: {
    max() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLInputElement"].prototype, "HTMLInputElement", "max_get", arguments);
    }
  }.max,
  set: {
    max() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLInputElement"].prototype, "HTMLInputElement", "max_set", arguments);
    }
  }.max
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLInputElement"].prototype, "maxLength", {
  configurable: true,
  enumerable: true,
  get: {
    maxLength() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLInputElement"].prototype, "HTMLInputElement", "maxLength_get", arguments);
    }
  }.maxLength,
  set: {
    maxLength() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLInputElement"].prototype, "HTMLInputElement", "maxLength_set", arguments);
    }
  }.maxLength
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLInputElement"].prototype, "min", {
  configurable: true,
  enumerable: true,
  get: {
    min() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLInputElement"].prototype, "HTMLInputElement", "min_get", arguments);
    }
  }.min,
  set: {
    min() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLInputElement"].prototype, "HTMLInputElement", "min_set", arguments);
    }
  }.min
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLInputElement"].prototype, "minLength", {
  configurable: true,
  enumerable: true,
  get: {
    minLength() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLInputElement"].prototype, "HTMLInputElement", "minLength_get", arguments);
    }
  }.minLength,
  set: {
    minLength() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLInputElement"].prototype, "HTMLInputElement", "minLength_set", arguments);
    }
  }.minLength
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLInputElement"].prototype, "multiple", {
  configurable: true,
  enumerable: true,
  get: {
    multiple() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLInputElement"].prototype, "HTMLInputElement", "multiple_get", arguments);
    }
  }.multiple,
  set: {
    multiple() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLInputElement"].prototype, "HTMLInputElement", "multiple_set", arguments);
    }
  }.multiple
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLInputElement"].prototype, "name", {
  configurable: true,
  enumerable: true,
  get: {
    name() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLInputElement"].prototype, "HTMLInputElement", "name_get", arguments);
    }
  }.name,
  set: {
    name() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLInputElement"].prototype, "HTMLInputElement", "name_set", arguments);
    }
  }.name
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLInputElement"].prototype, "pattern", {
  configurable: true,
  enumerable: true,
  get: {
    pattern() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLInputElement"].prototype, "HTMLInputElement", "pattern_get", arguments);
    }
  }.pattern,
  set: {
    pattern() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLInputElement"].prototype, "HTMLInputElement", "pattern_set", arguments);
    }
  }.pattern
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLInputElement"].prototype, "placeholder", {
  configurable: true,
  enumerable: true,
  get: {
    placeholder() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLInputElement"].prototype, "HTMLInputElement", "placeholder_get", arguments);
    }
  }.placeholder,
  set: {
    placeholder() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLInputElement"].prototype, "HTMLInputElement", "placeholder_set", arguments);
    }
  }.placeholder
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLInputElement"].prototype, "readOnly", {
  configurable: true,
  enumerable: true,
  get: {
    readOnly() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLInputElement"].prototype, "HTMLInputElement", "readOnly_get", arguments);
    }
  }.readOnly,
  set: {
    readOnly() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLInputElement"].prototype, "HTMLInputElement", "readOnly_set", arguments);
    }
  }.readOnly
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLInputElement"].prototype, "required", {
  configurable: true,
  enumerable: true,
  get: {
    required() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLInputElement"].prototype, "HTMLInputElement", "required_get", arguments);
    }
  }.required,
  set: {
    required() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLInputElement"].prototype, "HTMLInputElement", "required_set", arguments);
    }
  }.required
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLInputElement"].prototype, "size", {
  configurable: true,
  enumerable: true,
  get: {
    size() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLInputElement"].prototype, "HTMLInputElement", "size_get", arguments);
    }
  }.size,
  set: {
    size() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLInputElement"].prototype, "HTMLInputElement", "size_set", arguments);
    }
  }.size
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLInputElement"].prototype, "src", {
  configurable: true,
  enumerable: true,
  get: {
    src() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLInputElement"].prototype, "HTMLInputElement", "src_get", arguments);
    }
  }.src,
  set: {
    src() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLInputElement"].prototype, "HTMLInputElement", "src_set", arguments);
    }
  }.src
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLInputElement"].prototype, "step", {
  configurable: true,
  enumerable: true,
  get: {
    step() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLInputElement"].prototype, "HTMLInputElement", "step_get", arguments);
    }
  }.step,
  set: {
    step() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLInputElement"].prototype, "HTMLInputElement", "step_set", arguments);
    }
  }.step
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLInputElement"].prototype, "type", {
  configurable: true,
  enumerable: true,
  get: {
    type() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLInputElement"].prototype, "HTMLInputElement", "type_get", arguments);
    }
  }.type,
  set: {
    type() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLInputElement"].prototype, "HTMLInputElement", "type_set", arguments);
    }
  }.type
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLInputElement"].prototype, "defaultValue", {
  configurable: true,
  enumerable: true,
  get: {
    defaultValue() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLInputElement"].prototype, "HTMLInputElement", "defaultValue_get", arguments);
    }
  }.defaultValue,
  set: {
    defaultValue() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLInputElement"].prototype, "HTMLInputElement", "defaultValue_set", arguments);
    }
  }.defaultValue
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLInputElement"].prototype, "value", {
  configurable: true,
  enumerable: true,
  get: {
    value() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLInputElement"].prototype, "HTMLInputElement", "value_get", arguments);
    }
  }.value,
  set: {
    value() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLInputElement"].prototype, "HTMLInputElement", "value_set", arguments);
    }
  }.value
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLInputElement"].prototype, "valueAsDate", {
  configurable: true,
  enumerable: true,
  get: {
    valueAsDate() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLInputElement"].prototype, "HTMLInputElement", "valueAsDate_get", arguments);
    }
  }.valueAsDate,
  set: {
    valueAsDate() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLInputElement"].prototype, "HTMLInputElement", "valueAsDate_set", arguments);
    }
  }.valueAsDate
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLInputElement"].prototype, "valueAsNumber", {
  configurable: true,
  enumerable: true,
  get: {
    valueAsNumber() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLInputElement"].prototype, "HTMLInputElement", "valueAsNumber_get", arguments);
    }
  }.valueAsNumber,
  set: {
    valueAsNumber() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLInputElement"].prototype, "HTMLInputElement", "valueAsNumber_set", arguments);
    }
  }.valueAsNumber
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLInputElement"].prototype, "width", {
  configurable: true,
  enumerable: true,
  get: {
    width() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLInputElement"].prototype, "HTMLInputElement", "width_get", arguments);
    }
  }.width,
  set: {
    width() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLInputElement"].prototype, "HTMLInputElement", "width_set", arguments);
    }
  }.width
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLInputElement"].prototype, "willValidate", {
  configurable: true,
  enumerable: true,
  get: {
    willValidate() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLInputElement"].prototype, "HTMLInputElement", "willValidate_get", arguments);
    }
  }.willValidate,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLInputElement"].prototype, "validity", {
  configurable: true,
  enumerable: true,
  get: {
    validity() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLInputElement"].prototype, "HTMLInputElement", "validity_get", arguments);
    }
  }.validity,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLInputElement"].prototype, "validationMessage", {
  configurable: true,
  enumerable: true,
  get: {
    validationMessage() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLInputElement"].prototype, "HTMLInputElement", "validationMessage_get", arguments);
    }
  }.validationMessage,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLInputElement"].prototype, "labels", {
  configurable: true,
  enumerable: true,
  get: {
    labels() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLInputElement"].prototype, "HTMLInputElement", "labels_get", arguments);
    }
  }.labels,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLInputElement"].prototype, "selectionStart", {
  configurable: true,
  enumerable: true,
  get: {
    selectionStart() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLInputElement"].prototype, "HTMLInputElement", "selectionStart_get", arguments);
    }
  }.selectionStart,
  set: {
    selectionStart() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLInputElement"].prototype, "HTMLInputElement", "selectionStart_set", arguments);
    }
  }.selectionStart
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLInputElement"].prototype, "selectionEnd", {
  configurable: true,
  enumerable: true,
  get: {
    selectionEnd() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLInputElement"].prototype, "HTMLInputElement", "selectionEnd_get", arguments);
    }
  }.selectionEnd,
  set: {
    selectionEnd() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLInputElement"].prototype, "HTMLInputElement", "selectionEnd_set", arguments);
    }
  }.selectionEnd
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLInputElement"].prototype, "selectionDirection", {
  configurable: true,
  enumerable: true,
  get: {
    selectionDirection() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLInputElement"].prototype, "HTMLInputElement", "selectionDirection_get", arguments);
    }
  }.selectionDirection,
  set: {
    selectionDirection() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLInputElement"].prototype, "HTMLInputElement", "selectionDirection_set", arguments);
    }
  }.selectionDirection
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLInputElement"].prototype, "align", {
  configurable: true,
  enumerable: true,
  get: {
    align() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLInputElement"].prototype, "HTMLInputElement", "align_get", arguments);
    }
  }.align,
  set: {
    align() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLInputElement"].prototype, "HTMLInputElement", "align_set", arguments);
    }
  }.align
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLInputElement"].prototype, "useMap", {
  configurable: true,
  enumerable: true,
  get: {
    useMap() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLInputElement"].prototype, "HTMLInputElement", "useMap_get", arguments);
    }
  }.useMap,
  set: {
    useMap() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLInputElement"].prototype, "HTMLInputElement", "useMap_set", arguments);
    }
  }.useMap
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLInputElement"].prototype, "webkitdirectory", {
  configurable: true,
  enumerable: true,
  get: {
    webkitdirectory() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLInputElement"].prototype, "HTMLInputElement", "webkitdirectory_get", arguments);
    }
  }.webkitdirectory,
  set: {
    webkitdirectory() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLInputElement"].prototype, "HTMLInputElement", "webkitdirectory_set", arguments);
    }
  }.webkitdirectory
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLInputElement"].prototype, "incremental", {
  configurable: true,
  enumerable: true,
  get: {
    incremental() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLInputElement"].prototype, "HTMLInputElement", "incremental_get", arguments);
    }
  }.incremental,
  set: {
    incremental() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLInputElement"].prototype, "HTMLInputElement", "incremental_set", arguments);
    }
  }.incremental
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLInputElement"].prototype, "checkValidity", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    checkValidity() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLInputElement"].prototype, "HTMLInputElement", "checkValidity", arguments);
    }
  }.checkValidity
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLInputElement"].prototype, "reportValidity", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    reportValidity() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLInputElement"].prototype, "HTMLInputElement", "reportValidity", arguments);
    }
  }.reportValidity
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLInputElement"].prototype, "select", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    select() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLInputElement"].prototype, "HTMLInputElement", "select", arguments);
    }
  }.select
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLInputElement"].prototype, "setCustomValidity", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    setCustomValidity() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLInputElement"].prototype, "HTMLInputElement", "setCustomValidity", arguments);
    }
  }.setCustomValidity
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLInputElement"].prototype, "setRangeText", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    setRangeText() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLInputElement"].prototype, "HTMLInputElement", "setRangeText", arguments);
    }
  }.setRangeText
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLInputElement"].prototype, "setSelectionRange", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    setSelectionRange() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLInputElement"].prototype, "HTMLInputElement", "setSelectionRange", arguments);
    }
  }.setSelectionRange
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLInputElement"].prototype, "showPicker", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    showPicker() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLInputElement"].prototype, "HTMLInputElement", "showPicker", arguments);
    }
  }.showPicker
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLInputElement"].prototype, "stepDown", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    stepDown() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLInputElement"].prototype, "HTMLInputElement", "stepDown", arguments);
    }
  }.stepDown
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLInputElement"].prototype, "stepUp", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    stepUp() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLInputElement"].prototype, "HTMLInputElement", "stepUp", arguments);
    }
  }.stepUp
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLInputElement"].prototype, "webkitEntries", {
  configurable: true,
  enumerable: true,
  get: {
    webkitEntries() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLInputElement"].prototype, "HTMLInputElement", "webkitEntries_get", arguments);
    }
  }.webkitEntries,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLInputElement"].prototype, "popoverTargetElement", {
  configurable: true,
  enumerable: true,
  get: {
    popoverTargetElement() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLInputElement"].prototype, "HTMLInputElement", "popoverTargetElement_get", arguments);
    }
  }.popoverTargetElement,
  set: {
    popoverTargetElement() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLInputElement"].prototype, "HTMLInputElement", "popoverTargetElement_set", arguments);
    }
  }.popoverTargetElement
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLInputElement"].prototype, "popoverTargetAction", {
  configurable: true,
  enumerable: true,
  get: {
    popoverTargetAction() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLInputElement"].prototype, "HTMLInputElement", "popoverTargetAction_get", arguments);
    }
  }.popoverTargetAction,
  set: {
    popoverTargetAction() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLInputElement"].prototype, "HTMLInputElement", "popoverTargetAction_set", arguments);
    }
  }.popoverTargetAction
});