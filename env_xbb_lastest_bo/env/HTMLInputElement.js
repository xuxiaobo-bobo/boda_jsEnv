// HTMLInputElement对象

HTMLInputElement = function HTMLInputElement() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof HTMLInputElement)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('HTMLInputElement 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(HTMLInputElement, "HTMLInputElement");
HTMLInputElement.prototype.__proto__ = HTMLElement.prototype;
HTMLInputElement.__proto__ = HTMLElement;
bodavm.toolsFunc.defineProperty(HTMLInputElement.prototype, "accept", {
  configurable: true,
  enumerable: true,
  get: function accept() {
    return bodavm.toolsFunc.dispatch(this, HTMLInputElement.prototype, "HTMLInputElement", "accept_get", arguments);
  },
  set: function accept() {
    return bodavm.toolsFunc.dispatch(this, HTMLInputElement.prototype, "HTMLInputElement", "accept_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLInputElement.prototype, "alt", {
  configurable: true,
  enumerable: true,
  get: function alt() {
    return bodavm.toolsFunc.dispatch(this, HTMLInputElement.prototype, "HTMLInputElement", "alt_get", arguments);
  },
  set: function alt() {
    return bodavm.toolsFunc.dispatch(this, HTMLInputElement.prototype, "HTMLInputElement", "alt_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLInputElement.prototype, "autocomplete", {
  configurable: true,
  enumerable: true,
  get: function autocomplete() {
    return bodavm.toolsFunc.dispatch(this, HTMLInputElement.prototype, "HTMLInputElement", "autocomplete_get", arguments);
  },
  set: function autocomplete() {
    return bodavm.toolsFunc.dispatch(this, HTMLInputElement.prototype, "HTMLInputElement", "autocomplete_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLInputElement.prototype, "defaultChecked", {
  configurable: true,
  enumerable: true,
  get: function defaultChecked() {
    return bodavm.toolsFunc.dispatch(this, HTMLInputElement.prototype, "HTMLInputElement", "defaultChecked_get", arguments);
  },
  set: function defaultChecked() {
    return bodavm.toolsFunc.dispatch(this, HTMLInputElement.prototype, "HTMLInputElement", "defaultChecked_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLInputElement.prototype, "checked", {
  configurable: true,
  enumerable: true,
  get: function checked() {
    return bodavm.toolsFunc.dispatch(this, HTMLInputElement.prototype, "HTMLInputElement", "checked_get", arguments);
  },
  set: function checked() {
    return bodavm.toolsFunc.dispatch(this, HTMLInputElement.prototype, "HTMLInputElement", "checked_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLInputElement.prototype, "dirName", {
  configurable: true,
  enumerable: true,
  get: function dirName() {
    return bodavm.toolsFunc.dispatch(this, HTMLInputElement.prototype, "HTMLInputElement", "dirName_get", arguments);
  },
  set: function dirName() {
    return bodavm.toolsFunc.dispatch(this, HTMLInputElement.prototype, "HTMLInputElement", "dirName_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLInputElement.prototype, "disabled", {
  configurable: true,
  enumerable: true,
  get: function disabled() {
    return bodavm.toolsFunc.dispatch(this, HTMLInputElement.prototype, "HTMLInputElement", "disabled_get", arguments);
  },
  set: function disabled() {
    return bodavm.toolsFunc.dispatch(this, HTMLInputElement.prototype, "HTMLInputElement", "disabled_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLInputElement.prototype, "form", {
  configurable: true,
  enumerable: true,
  get: function form() {
    return bodavm.toolsFunc.dispatch(this, HTMLInputElement.prototype, "HTMLInputElement", "form_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(HTMLInputElement.prototype, "files", {
  configurable: true,
  enumerable: true,
  get: function files() {
    return bodavm.toolsFunc.dispatch(this, HTMLInputElement.prototype, "HTMLInputElement", "files_get", arguments);
  },
  set: function files() {
    return bodavm.toolsFunc.dispatch(this, HTMLInputElement.prototype, "HTMLInputElement", "files_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLInputElement.prototype, "formAction", {
  configurable: true,
  enumerable: true,
  get: function formAction() {
    return bodavm.toolsFunc.dispatch(this, HTMLInputElement.prototype, "HTMLInputElement", "formAction_get", arguments);
  },
  set: function formAction() {
    return bodavm.toolsFunc.dispatch(this, HTMLInputElement.prototype, "HTMLInputElement", "formAction_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLInputElement.prototype, "formEnctype", {
  configurable: true,
  enumerable: true,
  get: function formEnctype() {
    return bodavm.toolsFunc.dispatch(this, HTMLInputElement.prototype, "HTMLInputElement", "formEnctype_get", arguments);
  },
  set: function formEnctype() {
    return bodavm.toolsFunc.dispatch(this, HTMLInputElement.prototype, "HTMLInputElement", "formEnctype_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLInputElement.prototype, "formMethod", {
  configurable: true,
  enumerable: true,
  get: function formMethod() {
    return bodavm.toolsFunc.dispatch(this, HTMLInputElement.prototype, "HTMLInputElement", "formMethod_get", arguments);
  },
  set: function formMethod() {
    return bodavm.toolsFunc.dispatch(this, HTMLInputElement.prototype, "HTMLInputElement", "formMethod_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLInputElement.prototype, "formNoValidate", {
  configurable: true,
  enumerable: true,
  get: function formNoValidate() {
    return bodavm.toolsFunc.dispatch(this, HTMLInputElement.prototype, "HTMLInputElement", "formNoValidate_get", arguments);
  },
  set: function formNoValidate() {
    return bodavm.toolsFunc.dispatch(this, HTMLInputElement.prototype, "HTMLInputElement", "formNoValidate_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLInputElement.prototype, "formTarget", {
  configurable: true,
  enumerable: true,
  get: function formTarget() {
    return bodavm.toolsFunc.dispatch(this, HTMLInputElement.prototype, "HTMLInputElement", "formTarget_get", arguments);
  },
  set: function formTarget() {
    return bodavm.toolsFunc.dispatch(this, HTMLInputElement.prototype, "HTMLInputElement", "formTarget_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLInputElement.prototype, "height", {
  configurable: true,
  enumerable: true,
  get: function height() {
    return bodavm.toolsFunc.dispatch(this, HTMLInputElement.prototype, "HTMLInputElement", "height_get", arguments);
  },
  set: function height() {
    return bodavm.toolsFunc.dispatch(this, HTMLInputElement.prototype, "HTMLInputElement", "height_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLInputElement.prototype, "indeterminate", {
  configurable: true,
  enumerable: true,
  get: function indeterminate() {
    return bodavm.toolsFunc.dispatch(this, HTMLInputElement.prototype, "HTMLInputElement", "indeterminate_get", arguments);
  },
  set: function indeterminate() {
    return bodavm.toolsFunc.dispatch(this, HTMLInputElement.prototype, "HTMLInputElement", "indeterminate_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLInputElement.prototype, "list", {
  configurable: true,
  enumerable: true,
  get: function list() {
    return bodavm.toolsFunc.dispatch(this, HTMLInputElement.prototype, "HTMLInputElement", "list_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(HTMLInputElement.prototype, "max", {
  configurable: true,
  enumerable: true,
  get: function max() {
    return bodavm.toolsFunc.dispatch(this, HTMLInputElement.prototype, "HTMLInputElement", "max_get", arguments);
  },
  set: function max() {
    return bodavm.toolsFunc.dispatch(this, HTMLInputElement.prototype, "HTMLInputElement", "max_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLInputElement.prototype, "maxLength", {
  configurable: true,
  enumerable: true,
  get: function maxLength() {
    return bodavm.toolsFunc.dispatch(this, HTMLInputElement.prototype, "HTMLInputElement", "maxLength_get", arguments);
  },
  set: function maxLength() {
    return bodavm.toolsFunc.dispatch(this, HTMLInputElement.prototype, "HTMLInputElement", "maxLength_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLInputElement.prototype, "min", {
  configurable: true,
  enumerable: true,
  get: function min() {
    return bodavm.toolsFunc.dispatch(this, HTMLInputElement.prototype, "HTMLInputElement", "min_get", arguments);
  },
  set: function min() {
    return bodavm.toolsFunc.dispatch(this, HTMLInputElement.prototype, "HTMLInputElement", "min_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLInputElement.prototype, "minLength", {
  configurable: true,
  enumerable: true,
  get: function minLength() {
    return bodavm.toolsFunc.dispatch(this, HTMLInputElement.prototype, "HTMLInputElement", "minLength_get", arguments);
  },
  set: function minLength() {
    return bodavm.toolsFunc.dispatch(this, HTMLInputElement.prototype, "HTMLInputElement", "minLength_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLInputElement.prototype, "multiple", {
  configurable: true,
  enumerable: true,
  get: function multiple() {
    return bodavm.toolsFunc.dispatch(this, HTMLInputElement.prototype, "HTMLInputElement", "multiple_get", arguments);
  },
  set: function multiple() {
    return bodavm.toolsFunc.dispatch(this, HTMLInputElement.prototype, "HTMLInputElement", "multiple_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLInputElement.prototype, "name", {
  configurable: true,
  enumerable: true,
  get: function name() {
    return bodavm.toolsFunc.dispatch(this, HTMLInputElement.prototype, "HTMLInputElement", "name_get", arguments);
  },
  set: function name() {
    return bodavm.toolsFunc.dispatch(this, HTMLInputElement.prototype, "HTMLInputElement", "name_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLInputElement.prototype, "pattern", {
  configurable: true,
  enumerable: true,
  get: function pattern() {
    return bodavm.toolsFunc.dispatch(this, HTMLInputElement.prototype, "HTMLInputElement", "pattern_get", arguments);
  },
  set: function pattern() {
    return bodavm.toolsFunc.dispatch(this, HTMLInputElement.prototype, "HTMLInputElement", "pattern_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLInputElement.prototype, "placeholder", {
  configurable: true,
  enumerable: true,
  get: function placeholder() {
    return bodavm.toolsFunc.dispatch(this, HTMLInputElement.prototype, "HTMLInputElement", "placeholder_get", arguments);
  },
  set: function placeholder() {
    return bodavm.toolsFunc.dispatch(this, HTMLInputElement.prototype, "HTMLInputElement", "placeholder_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLInputElement.prototype, "readOnly", {
  configurable: true,
  enumerable: true,
  get: function readOnly() {
    return bodavm.toolsFunc.dispatch(this, HTMLInputElement.prototype, "HTMLInputElement", "readOnly_get", arguments);
  },
  set: function readOnly() {
    return bodavm.toolsFunc.dispatch(this, HTMLInputElement.prototype, "HTMLInputElement", "readOnly_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLInputElement.prototype, "required", {
  configurable: true,
  enumerable: true,
  get: function required() {
    return bodavm.toolsFunc.dispatch(this, HTMLInputElement.prototype, "HTMLInputElement", "required_get", arguments);
  },
  set: function required() {
    return bodavm.toolsFunc.dispatch(this, HTMLInputElement.prototype, "HTMLInputElement", "required_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLInputElement.prototype, "size", {
  configurable: true,
  enumerable: true,
  get: function size() {
    return bodavm.toolsFunc.dispatch(this, HTMLInputElement.prototype, "HTMLInputElement", "size_get", arguments);
  },
  set: function size() {
    return bodavm.toolsFunc.dispatch(this, HTMLInputElement.prototype, "HTMLInputElement", "size_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLInputElement.prototype, "src", {
  configurable: true,
  enumerable: true,
  get: function src() {
    return bodavm.toolsFunc.dispatch(this, HTMLInputElement.prototype, "HTMLInputElement", "src_get", arguments);
  },
  set: function src() {
    return bodavm.toolsFunc.dispatch(this, HTMLInputElement.prototype, "HTMLInputElement", "src_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLInputElement.prototype, "step", {
  configurable: true,
  enumerable: true,
  get: function step() {
    return bodavm.toolsFunc.dispatch(this, HTMLInputElement.prototype, "HTMLInputElement", "step_get", arguments);
  },
  set: function step() {
    return bodavm.toolsFunc.dispatch(this, HTMLInputElement.prototype, "HTMLInputElement", "step_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLInputElement.prototype, "type", {
  configurable: true,
  enumerable: true,
  get: function type() {
    return bodavm.toolsFunc.dispatch(this, HTMLInputElement.prototype, "HTMLInputElement", "type_get", arguments);
  },
  set: function type() {
    return bodavm.toolsFunc.dispatch(this, HTMLInputElement.prototype, "HTMLInputElement", "type_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLInputElement.prototype, "defaultValue", {
  configurable: true,
  enumerable: true,
  get: function defaultValue() {
    return bodavm.toolsFunc.dispatch(this, HTMLInputElement.prototype, "HTMLInputElement", "defaultValue_get", arguments);
  },
  set: function defaultValue() {
    return bodavm.toolsFunc.dispatch(this, HTMLInputElement.prototype, "HTMLInputElement", "defaultValue_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLInputElement.prototype, "value", {
  configurable: true,
  enumerable: true,
  get: function value() {
    return bodavm.toolsFunc.dispatch(this, HTMLInputElement.prototype, "HTMLInputElement", "value_get", arguments);
  },
  set: function value() {
    return bodavm.toolsFunc.dispatch(this, HTMLInputElement.prototype, "HTMLInputElement", "value_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLInputElement.prototype, "valueAsDate", {
  configurable: true,
  enumerable: true,
  get: function valueAsDate() {
    return bodavm.toolsFunc.dispatch(this, HTMLInputElement.prototype, "HTMLInputElement", "valueAsDate_get", arguments);
  },
  set: function valueAsDate() {
    return bodavm.toolsFunc.dispatch(this, HTMLInputElement.prototype, "HTMLInputElement", "valueAsDate_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLInputElement.prototype, "valueAsNumber", {
  configurable: true,
  enumerable: true,
  get: function valueAsNumber() {
    return bodavm.toolsFunc.dispatch(this, HTMLInputElement.prototype, "HTMLInputElement", "valueAsNumber_get", arguments);
  },
  set: function valueAsNumber() {
    return bodavm.toolsFunc.dispatch(this, HTMLInputElement.prototype, "HTMLInputElement", "valueAsNumber_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLInputElement.prototype, "width", {
  configurable: true,
  enumerable: true,
  get: function width() {
    return bodavm.toolsFunc.dispatch(this, HTMLInputElement.prototype, "HTMLInputElement", "width_get", arguments);
  },
  set: function width() {
    return bodavm.toolsFunc.dispatch(this, HTMLInputElement.prototype, "HTMLInputElement", "width_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLInputElement.prototype, "willValidate", {
  configurable: true,
  enumerable: true,
  get: function willValidate() {
    return bodavm.toolsFunc.dispatch(this, HTMLInputElement.prototype, "HTMLInputElement", "willValidate_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(HTMLInputElement.prototype, "validity", {
  configurable: true,
  enumerable: true,
  get: function validity() {
    return bodavm.toolsFunc.dispatch(this, HTMLInputElement.prototype, "HTMLInputElement", "validity_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(HTMLInputElement.prototype, "validationMessage", {
  configurable: true,
  enumerable: true,
  get: function validationMessage() {
    return bodavm.toolsFunc.dispatch(this, HTMLInputElement.prototype, "HTMLInputElement", "validationMessage_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(HTMLInputElement.prototype, "labels", {
  configurable: true,
  enumerable: true,
  get: function labels() {
    return bodavm.toolsFunc.dispatch(this, HTMLInputElement.prototype, "HTMLInputElement", "labels_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(HTMLInputElement.prototype, "selectionStart", {
  configurable: true,
  enumerable: true,
  get: function selectionStart() {
    return bodavm.toolsFunc.dispatch(this, HTMLInputElement.prototype, "HTMLInputElement", "selectionStart_get", arguments);
  },
  set: function selectionStart() {
    return bodavm.toolsFunc.dispatch(this, HTMLInputElement.prototype, "HTMLInputElement", "selectionStart_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLInputElement.prototype, "selectionEnd", {
  configurable: true,
  enumerable: true,
  get: function selectionEnd() {
    return bodavm.toolsFunc.dispatch(this, HTMLInputElement.prototype, "HTMLInputElement", "selectionEnd_get", arguments);
  },
  set: function selectionEnd() {
    return bodavm.toolsFunc.dispatch(this, HTMLInputElement.prototype, "HTMLInputElement", "selectionEnd_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLInputElement.prototype, "selectionDirection", {
  configurable: true,
  enumerable: true,
  get: function selectionDirection() {
    return bodavm.toolsFunc.dispatch(this, HTMLInputElement.prototype, "HTMLInputElement", "selectionDirection_get", arguments);
  },
  set: function selectionDirection() {
    return bodavm.toolsFunc.dispatch(this, HTMLInputElement.prototype, "HTMLInputElement", "selectionDirection_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLInputElement.prototype, "align", {
  configurable: true,
  enumerable: true,
  get: function align() {
    return bodavm.toolsFunc.dispatch(this, HTMLInputElement.prototype, "HTMLInputElement", "align_get", arguments);
  },
  set: function align() {
    return bodavm.toolsFunc.dispatch(this, HTMLInputElement.prototype, "HTMLInputElement", "align_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLInputElement.prototype, "useMap", {
  configurable: true,
  enumerable: true,
  get: function useMap() {
    return bodavm.toolsFunc.dispatch(this, HTMLInputElement.prototype, "HTMLInputElement", "useMap_get", arguments);
  },
  set: function useMap() {
    return bodavm.toolsFunc.dispatch(this, HTMLInputElement.prototype, "HTMLInputElement", "useMap_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLInputElement.prototype, "webkitdirectory", {
  configurable: true,
  enumerable: true,
  get: function webkitdirectory() {
    return bodavm.toolsFunc.dispatch(this, HTMLInputElement.prototype, "HTMLInputElement", "webkitdirectory_get", arguments);
  },
  set: function webkitdirectory() {
    return bodavm.toolsFunc.dispatch(this, HTMLInputElement.prototype, "HTMLInputElement", "webkitdirectory_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLInputElement.prototype, "incremental", {
  configurable: true,
  enumerable: true,
  get: function incremental() {
    return bodavm.toolsFunc.dispatch(this, HTMLInputElement.prototype, "HTMLInputElement", "incremental_get", arguments);
  },
  set: function incremental() {
    return bodavm.toolsFunc.dispatch(this, HTMLInputElement.prototype, "HTMLInputElement", "incremental_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLInputElement.prototype, "checkValidity", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function checkValidity() {
    return bodavm.toolsFunc.dispatch(this, HTMLInputElement.prototype, "HTMLInputElement", "checkValidity", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLInputElement.prototype, "reportValidity", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function reportValidity() {
    return bodavm.toolsFunc.dispatch(this, HTMLInputElement.prototype, "HTMLInputElement", "reportValidity", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLInputElement.prototype, "select", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function select() {
    return bodavm.toolsFunc.dispatch(this, HTMLInputElement.prototype, "HTMLInputElement", "select", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLInputElement.prototype, "setCustomValidity", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function setCustomValidity() {
    return bodavm.toolsFunc.dispatch(this, HTMLInputElement.prototype, "HTMLInputElement", "setCustomValidity", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLInputElement.prototype, "setRangeText", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function setRangeText() {
    return bodavm.toolsFunc.dispatch(this, HTMLInputElement.prototype, "HTMLInputElement", "setRangeText", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLInputElement.prototype, "setSelectionRange", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function setSelectionRange() {
    return bodavm.toolsFunc.dispatch(this, HTMLInputElement.prototype, "HTMLInputElement", "setSelectionRange", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLInputElement.prototype, "showPicker", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function showPicker() {
    return bodavm.toolsFunc.dispatch(this, HTMLInputElement.prototype, "HTMLInputElement", "showPicker", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLInputElement.prototype, "stepDown", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function stepDown() {
    return bodavm.toolsFunc.dispatch(this, HTMLInputElement.prototype, "HTMLInputElement", "stepDown", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLInputElement.prototype, "stepUp", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function stepUp() {
    return bodavm.toolsFunc.dispatch(this, HTMLInputElement.prototype, "HTMLInputElement", "stepUp", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLInputElement.prototype, "webkitEntries", {
  configurable: true,
  enumerable: true,
  get: function webkitEntries() {
    return bodavm.toolsFunc.dispatch(this, HTMLInputElement.prototype, "HTMLInputElement", "webkitEntries_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(HTMLInputElement.prototype, "popoverTargetElement", {
  configurable: true,
  enumerable: true,
  get: function popoverTargetElement() {
    return bodavm.toolsFunc.dispatch(this, HTMLInputElement.prototype, "HTMLInputElement", "popoverTargetElement_get", arguments);
  },
  set: function popoverTargetElement() {
    return bodavm.toolsFunc.dispatch(this, HTMLInputElement.prototype, "HTMLInputElement", "popoverTargetElement_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLInputElement.prototype, "popoverTargetAction", {
  configurable: true,
  enumerable: true,
  get: function popoverTargetAction() {
    return bodavm.toolsFunc.dispatch(this, HTMLInputElement.prototype, "HTMLInputElement", "popoverTargetAction_get", arguments);
  },
  set: function popoverTargetAction() {
    return bodavm.toolsFunc.dispatch(this, HTMLInputElement.prototype, "HTMLInputElement", "popoverTargetAction_set", arguments);
  }
});