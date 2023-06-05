// ElementInternals对象

bodavm.memory.globalobj['ElementInternals'] = function ElementInternals() {
  console.log_copy('ElementInternals 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof ElementInternals)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['ElementInternals'], "ElementInternals");
bodavm.toolsFunc.defineProperty('ElementInternals', "form", {
  configurable: true,
  enumerable: true,
  get: function form() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['ElementInternals'].prototype, "ElementInternals", "form_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('ElementInternals', "willValidate", {
  configurable: true,
  enumerable: true,
  get: function willValidate() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['ElementInternals'].prototype, "ElementInternals", "willValidate_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('ElementInternals', "validity", {
  configurable: true,
  enumerable: true,
  get: function validity() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['ElementInternals'].prototype, "ElementInternals", "validity_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('ElementInternals', "validationMessage", {
  configurable: true,
  enumerable: true,
  get: function validationMessage() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['ElementInternals'].prototype, "ElementInternals", "validationMessage_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('ElementInternals', "labels", {
  configurable: true,
  enumerable: true,
  get: function labels() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['ElementInternals'].prototype, "ElementInternals", "labels_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('ElementInternals', "states", {
  configurable: true,
  enumerable: true,
  get: function states() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['ElementInternals'].prototype, "ElementInternals", "states_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('ElementInternals', "shadowRoot", {
  configurable: true,
  enumerable: true,
  get: function shadowRoot() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['ElementInternals'].prototype, "ElementInternals", "shadowRoot_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('ElementInternals', "role", {
  configurable: true,
  enumerable: true,
  get: function role() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['ElementInternals'].prototype, "ElementInternals", "role_get", arguments);
  },
  set: function role() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['ElementInternals'].prototype, "ElementInternals", "role_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('ElementInternals', "ariaAtomic", {
  configurable: true,
  enumerable: true,
  get: function ariaAtomic() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['ElementInternals'].prototype, "ElementInternals", "ariaAtomic_get", arguments);
  },
  set: function ariaAtomic() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['ElementInternals'].prototype, "ElementInternals", "ariaAtomic_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('ElementInternals', "ariaAutoComplete", {
  configurable: true,
  enumerable: true,
  get: function ariaAutoComplete() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['ElementInternals'].prototype, "ElementInternals", "ariaAutoComplete_get", arguments);
  },
  set: function ariaAutoComplete() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['ElementInternals'].prototype, "ElementInternals", "ariaAutoComplete_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('ElementInternals', "ariaBusy", {
  configurable: true,
  enumerable: true,
  get: function ariaBusy() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['ElementInternals'].prototype, "ElementInternals", "ariaBusy_get", arguments);
  },
  set: function ariaBusy() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['ElementInternals'].prototype, "ElementInternals", "ariaBusy_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('ElementInternals', "ariaBrailleLabel", {
  configurable: true,
  enumerable: true,
  get: function ariaBrailleLabel() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['ElementInternals'].prototype, "ElementInternals", "ariaBrailleLabel_get", arguments);
  },
  set: function ariaBrailleLabel() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['ElementInternals'].prototype, "ElementInternals", "ariaBrailleLabel_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('ElementInternals', "ariaBrailleRoleDescription", {
  configurable: true,
  enumerable: true,
  get: function ariaBrailleRoleDescription() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['ElementInternals'].prototype, "ElementInternals", "ariaBrailleRoleDescription_get", arguments);
  },
  set: function ariaBrailleRoleDescription() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['ElementInternals'].prototype, "ElementInternals", "ariaBrailleRoleDescription_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('ElementInternals', "ariaChecked", {
  configurable: true,
  enumerable: true,
  get: function ariaChecked() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['ElementInternals'].prototype, "ElementInternals", "ariaChecked_get", arguments);
  },
  set: function ariaChecked() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['ElementInternals'].prototype, "ElementInternals", "ariaChecked_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('ElementInternals', "ariaColCount", {
  configurable: true,
  enumerable: true,
  get: function ariaColCount() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['ElementInternals'].prototype, "ElementInternals", "ariaColCount_get", arguments);
  },
  set: function ariaColCount() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['ElementInternals'].prototype, "ElementInternals", "ariaColCount_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('ElementInternals', "ariaColIndex", {
  configurable: true,
  enumerable: true,
  get: function ariaColIndex() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['ElementInternals'].prototype, "ElementInternals", "ariaColIndex_get", arguments);
  },
  set: function ariaColIndex() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['ElementInternals'].prototype, "ElementInternals", "ariaColIndex_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('ElementInternals', "ariaColSpan", {
  configurable: true,
  enumerable: true,
  get: function ariaColSpan() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['ElementInternals'].prototype, "ElementInternals", "ariaColSpan_get", arguments);
  },
  set: function ariaColSpan() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['ElementInternals'].prototype, "ElementInternals", "ariaColSpan_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('ElementInternals', "ariaCurrent", {
  configurable: true,
  enumerable: true,
  get: function ariaCurrent() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['ElementInternals'].prototype, "ElementInternals", "ariaCurrent_get", arguments);
  },
  set: function ariaCurrent() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['ElementInternals'].prototype, "ElementInternals", "ariaCurrent_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('ElementInternals', "ariaDescription", {
  configurable: true,
  enumerable: true,
  get: function ariaDescription() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['ElementInternals'].prototype, "ElementInternals", "ariaDescription_get", arguments);
  },
  set: function ariaDescription() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['ElementInternals'].prototype, "ElementInternals", "ariaDescription_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('ElementInternals', "ariaDisabled", {
  configurable: true,
  enumerable: true,
  get: function ariaDisabled() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['ElementInternals'].prototype, "ElementInternals", "ariaDisabled_get", arguments);
  },
  set: function ariaDisabled() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['ElementInternals'].prototype, "ElementInternals", "ariaDisabled_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('ElementInternals', "ariaExpanded", {
  configurable: true,
  enumerable: true,
  get: function ariaExpanded() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['ElementInternals'].prototype, "ElementInternals", "ariaExpanded_get", arguments);
  },
  set: function ariaExpanded() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['ElementInternals'].prototype, "ElementInternals", "ariaExpanded_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('ElementInternals', "ariaHasPopup", {
  configurable: true,
  enumerable: true,
  get: function ariaHasPopup() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['ElementInternals'].prototype, "ElementInternals", "ariaHasPopup_get", arguments);
  },
  set: function ariaHasPopup() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['ElementInternals'].prototype, "ElementInternals", "ariaHasPopup_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('ElementInternals', "ariaHidden", {
  configurable: true,
  enumerable: true,
  get: function ariaHidden() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['ElementInternals'].prototype, "ElementInternals", "ariaHidden_get", arguments);
  },
  set: function ariaHidden() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['ElementInternals'].prototype, "ElementInternals", "ariaHidden_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('ElementInternals', "ariaInvalid", {
  configurable: true,
  enumerable: true,
  get: function ariaInvalid() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['ElementInternals'].prototype, "ElementInternals", "ariaInvalid_get", arguments);
  },
  set: function ariaInvalid() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['ElementInternals'].prototype, "ElementInternals", "ariaInvalid_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('ElementInternals', "ariaKeyShortcuts", {
  configurable: true,
  enumerable: true,
  get: function ariaKeyShortcuts() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['ElementInternals'].prototype, "ElementInternals", "ariaKeyShortcuts_get", arguments);
  },
  set: function ariaKeyShortcuts() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['ElementInternals'].prototype, "ElementInternals", "ariaKeyShortcuts_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('ElementInternals', "ariaLabel", {
  configurable: true,
  enumerable: true,
  get: function ariaLabel() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['ElementInternals'].prototype, "ElementInternals", "ariaLabel_get", arguments);
  },
  set: function ariaLabel() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['ElementInternals'].prototype, "ElementInternals", "ariaLabel_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('ElementInternals', "ariaLevel", {
  configurable: true,
  enumerable: true,
  get: function ariaLevel() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['ElementInternals'].prototype, "ElementInternals", "ariaLevel_get", arguments);
  },
  set: function ariaLevel() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['ElementInternals'].prototype, "ElementInternals", "ariaLevel_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('ElementInternals', "ariaLive", {
  configurable: true,
  enumerable: true,
  get: function ariaLive() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['ElementInternals'].prototype, "ElementInternals", "ariaLive_get", arguments);
  },
  set: function ariaLive() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['ElementInternals'].prototype, "ElementInternals", "ariaLive_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('ElementInternals', "ariaModal", {
  configurable: true,
  enumerable: true,
  get: function ariaModal() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['ElementInternals'].prototype, "ElementInternals", "ariaModal_get", arguments);
  },
  set: function ariaModal() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['ElementInternals'].prototype, "ElementInternals", "ariaModal_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('ElementInternals', "ariaMultiLine", {
  configurable: true,
  enumerable: true,
  get: function ariaMultiLine() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['ElementInternals'].prototype, "ElementInternals", "ariaMultiLine_get", arguments);
  },
  set: function ariaMultiLine() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['ElementInternals'].prototype, "ElementInternals", "ariaMultiLine_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('ElementInternals', "ariaMultiSelectable", {
  configurable: true,
  enumerable: true,
  get: function ariaMultiSelectable() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['ElementInternals'].prototype, "ElementInternals", "ariaMultiSelectable_get", arguments);
  },
  set: function ariaMultiSelectable() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['ElementInternals'].prototype, "ElementInternals", "ariaMultiSelectable_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('ElementInternals', "ariaOrientation", {
  configurable: true,
  enumerable: true,
  get: function ariaOrientation() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['ElementInternals'].prototype, "ElementInternals", "ariaOrientation_get", arguments);
  },
  set: function ariaOrientation() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['ElementInternals'].prototype, "ElementInternals", "ariaOrientation_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('ElementInternals', "ariaPlaceholder", {
  configurable: true,
  enumerable: true,
  get: function ariaPlaceholder() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['ElementInternals'].prototype, "ElementInternals", "ariaPlaceholder_get", arguments);
  },
  set: function ariaPlaceholder() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['ElementInternals'].prototype, "ElementInternals", "ariaPlaceholder_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('ElementInternals', "ariaPosInSet", {
  configurable: true,
  enumerable: true,
  get: function ariaPosInSet() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['ElementInternals'].prototype, "ElementInternals", "ariaPosInSet_get", arguments);
  },
  set: function ariaPosInSet() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['ElementInternals'].prototype, "ElementInternals", "ariaPosInSet_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('ElementInternals', "ariaPressed", {
  configurable: true,
  enumerable: true,
  get: function ariaPressed() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['ElementInternals'].prototype, "ElementInternals", "ariaPressed_get", arguments);
  },
  set: function ariaPressed() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['ElementInternals'].prototype, "ElementInternals", "ariaPressed_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('ElementInternals', "ariaReadOnly", {
  configurable: true,
  enumerable: true,
  get: function ariaReadOnly() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['ElementInternals'].prototype, "ElementInternals", "ariaReadOnly_get", arguments);
  },
  set: function ariaReadOnly() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['ElementInternals'].prototype, "ElementInternals", "ariaReadOnly_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('ElementInternals', "ariaRelevant", {
  configurable: true,
  enumerable: true,
  get: function ariaRelevant() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['ElementInternals'].prototype, "ElementInternals", "ariaRelevant_get", arguments);
  },
  set: function ariaRelevant() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['ElementInternals'].prototype, "ElementInternals", "ariaRelevant_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('ElementInternals', "ariaRequired", {
  configurable: true,
  enumerable: true,
  get: function ariaRequired() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['ElementInternals'].prototype, "ElementInternals", "ariaRequired_get", arguments);
  },
  set: function ariaRequired() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['ElementInternals'].prototype, "ElementInternals", "ariaRequired_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('ElementInternals', "ariaRoleDescription", {
  configurable: true,
  enumerable: true,
  get: function ariaRoleDescription() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['ElementInternals'].prototype, "ElementInternals", "ariaRoleDescription_get", arguments);
  },
  set: function ariaRoleDescription() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['ElementInternals'].prototype, "ElementInternals", "ariaRoleDescription_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('ElementInternals', "ariaRowCount", {
  configurable: true,
  enumerable: true,
  get: function ariaRowCount() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['ElementInternals'].prototype, "ElementInternals", "ariaRowCount_get", arguments);
  },
  set: function ariaRowCount() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['ElementInternals'].prototype, "ElementInternals", "ariaRowCount_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('ElementInternals', "ariaRowIndex", {
  configurable: true,
  enumerable: true,
  get: function ariaRowIndex() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['ElementInternals'].prototype, "ElementInternals", "ariaRowIndex_get", arguments);
  },
  set: function ariaRowIndex() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['ElementInternals'].prototype, "ElementInternals", "ariaRowIndex_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('ElementInternals', "ariaRowSpan", {
  configurable: true,
  enumerable: true,
  get: function ariaRowSpan() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['ElementInternals'].prototype, "ElementInternals", "ariaRowSpan_get", arguments);
  },
  set: function ariaRowSpan() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['ElementInternals'].prototype, "ElementInternals", "ariaRowSpan_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('ElementInternals', "ariaSelected", {
  configurable: true,
  enumerable: true,
  get: function ariaSelected() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['ElementInternals'].prototype, "ElementInternals", "ariaSelected_get", arguments);
  },
  set: function ariaSelected() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['ElementInternals'].prototype, "ElementInternals", "ariaSelected_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('ElementInternals', "ariaSetSize", {
  configurable: true,
  enumerable: true,
  get: function ariaSetSize() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['ElementInternals'].prototype, "ElementInternals", "ariaSetSize_get", arguments);
  },
  set: function ariaSetSize() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['ElementInternals'].prototype, "ElementInternals", "ariaSetSize_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('ElementInternals', "ariaSort", {
  configurable: true,
  enumerable: true,
  get: function ariaSort() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['ElementInternals'].prototype, "ElementInternals", "ariaSort_get", arguments);
  },
  set: function ariaSort() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['ElementInternals'].prototype, "ElementInternals", "ariaSort_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('ElementInternals', "ariaValueMax", {
  configurable: true,
  enumerable: true,
  get: function ariaValueMax() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['ElementInternals'].prototype, "ElementInternals", "ariaValueMax_get", arguments);
  },
  set: function ariaValueMax() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['ElementInternals'].prototype, "ElementInternals", "ariaValueMax_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('ElementInternals', "ariaValueMin", {
  configurable: true,
  enumerable: true,
  get: function ariaValueMin() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['ElementInternals'].prototype, "ElementInternals", "ariaValueMin_get", arguments);
  },
  set: function ariaValueMin() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['ElementInternals'].prototype, "ElementInternals", "ariaValueMin_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('ElementInternals', "ariaValueNow", {
  configurable: true,
  enumerable: true,
  get: function ariaValueNow() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['ElementInternals'].prototype, "ElementInternals", "ariaValueNow_get", arguments);
  },
  set: function ariaValueNow() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['ElementInternals'].prototype, "ElementInternals", "ariaValueNow_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('ElementInternals', "ariaValueText", {
  configurable: true,
  enumerable: true,
  get: function ariaValueText() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['ElementInternals'].prototype, "ElementInternals", "ariaValueText_get", arguments);
  },
  set: function ariaValueText() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['ElementInternals'].prototype, "ElementInternals", "ariaValueText_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('ElementInternals', "checkValidity", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function checkValidity() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['ElementInternals'].prototype, "ElementInternals", "checkValidity", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('ElementInternals', "reportValidity", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function reportValidity() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['ElementInternals'].prototype, "ElementInternals", "reportValidity", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('ElementInternals', "setFormValue", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function setFormValue() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['ElementInternals'].prototype, "ElementInternals", "setFormValue", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('ElementInternals', "setValidity", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function setValidity() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['ElementInternals'].prototype, "ElementInternals", "setValidity", arguments);
  }
}, 'prototype');