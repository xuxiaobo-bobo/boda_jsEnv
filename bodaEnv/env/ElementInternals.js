// ElementInternals对象

bodaEnv.memory.globlProtoObj["ElementInternals"] = function ElementInternals() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('ElementInternals 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["ElementInternals"], "ElementInternals");
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["ElementInternals"].prototype, "form", {
  configurable: true,
  enumerable: true,
  get: {
    form() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["ElementInternals"].prototype, "ElementInternals", "form_get", arguments);
    }
  }.form,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["ElementInternals"].prototype, "willValidate", {
  configurable: true,
  enumerable: true,
  get: {
    willValidate() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["ElementInternals"].prototype, "ElementInternals", "willValidate_get", arguments);
    }
  }.willValidate,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["ElementInternals"].prototype, "validity", {
  configurable: true,
  enumerable: true,
  get: {
    validity() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["ElementInternals"].prototype, "ElementInternals", "validity_get", arguments);
    }
  }.validity,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["ElementInternals"].prototype, "validationMessage", {
  configurable: true,
  enumerable: true,
  get: {
    validationMessage() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["ElementInternals"].prototype, "ElementInternals", "validationMessage_get", arguments);
    }
  }.validationMessage,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["ElementInternals"].prototype, "labels", {
  configurable: true,
  enumerable: true,
  get: {
    labels() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["ElementInternals"].prototype, "ElementInternals", "labels_get", arguments);
    }
  }.labels,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["ElementInternals"].prototype, "states", {
  configurable: true,
  enumerable: true,
  get: {
    states() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["ElementInternals"].prototype, "ElementInternals", "states_get", arguments);
    }
  }.states,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["ElementInternals"].prototype, "shadowRoot", {
  configurable: true,
  enumerable: true,
  get: {
    shadowRoot() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["ElementInternals"].prototype, "ElementInternals", "shadowRoot_get", arguments);
    }
  }.shadowRoot,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["ElementInternals"].prototype, "role", {
  configurable: true,
  enumerable: true,
  get: {
    role() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["ElementInternals"].prototype, "ElementInternals", "role_get", arguments);
    }
  }.role,
  set: {
    role() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["ElementInternals"].prototype, "ElementInternals", "role_set", arguments);
    }
  }.role
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["ElementInternals"].prototype, "ariaAtomic", {
  configurable: true,
  enumerable: true,
  get: {
    ariaAtomic() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["ElementInternals"].prototype, "ElementInternals", "ariaAtomic_get", arguments);
    }
  }.ariaAtomic,
  set: {
    ariaAtomic() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["ElementInternals"].prototype, "ElementInternals", "ariaAtomic_set", arguments);
    }
  }.ariaAtomic
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["ElementInternals"].prototype, "ariaAutoComplete", {
  configurable: true,
  enumerable: true,
  get: {
    ariaAutoComplete() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["ElementInternals"].prototype, "ElementInternals", "ariaAutoComplete_get", arguments);
    }
  }.ariaAutoComplete,
  set: {
    ariaAutoComplete() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["ElementInternals"].prototype, "ElementInternals", "ariaAutoComplete_set", arguments);
    }
  }.ariaAutoComplete
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["ElementInternals"].prototype, "ariaBusy", {
  configurable: true,
  enumerable: true,
  get: {
    ariaBusy() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["ElementInternals"].prototype, "ElementInternals", "ariaBusy_get", arguments);
    }
  }.ariaBusy,
  set: {
    ariaBusy() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["ElementInternals"].prototype, "ElementInternals", "ariaBusy_set", arguments);
    }
  }.ariaBusy
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["ElementInternals"].prototype, "ariaBrailleLabel", {
  configurable: true,
  enumerable: true,
  get: {
    ariaBrailleLabel() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["ElementInternals"].prototype, "ElementInternals", "ariaBrailleLabel_get", arguments);
    }
  }.ariaBrailleLabel,
  set: {
    ariaBrailleLabel() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["ElementInternals"].prototype, "ElementInternals", "ariaBrailleLabel_set", arguments);
    }
  }.ariaBrailleLabel
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["ElementInternals"].prototype, "ariaBrailleRoleDescription", {
  configurable: true,
  enumerable: true,
  get: {
    ariaBrailleRoleDescription() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["ElementInternals"].prototype, "ElementInternals", "ariaBrailleRoleDescription_get", arguments);
    }
  }.ariaBrailleRoleDescription,
  set: {
    ariaBrailleRoleDescription() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["ElementInternals"].prototype, "ElementInternals", "ariaBrailleRoleDescription_set", arguments);
    }
  }.ariaBrailleRoleDescription
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["ElementInternals"].prototype, "ariaChecked", {
  configurable: true,
  enumerable: true,
  get: {
    ariaChecked() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["ElementInternals"].prototype, "ElementInternals", "ariaChecked_get", arguments);
    }
  }.ariaChecked,
  set: {
    ariaChecked() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["ElementInternals"].prototype, "ElementInternals", "ariaChecked_set", arguments);
    }
  }.ariaChecked
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["ElementInternals"].prototype, "ariaColCount", {
  configurable: true,
  enumerable: true,
  get: {
    ariaColCount() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["ElementInternals"].prototype, "ElementInternals", "ariaColCount_get", arguments);
    }
  }.ariaColCount,
  set: {
    ariaColCount() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["ElementInternals"].prototype, "ElementInternals", "ariaColCount_set", arguments);
    }
  }.ariaColCount
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["ElementInternals"].prototype, "ariaColIndex", {
  configurable: true,
  enumerable: true,
  get: {
    ariaColIndex() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["ElementInternals"].prototype, "ElementInternals", "ariaColIndex_get", arguments);
    }
  }.ariaColIndex,
  set: {
    ariaColIndex() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["ElementInternals"].prototype, "ElementInternals", "ariaColIndex_set", arguments);
    }
  }.ariaColIndex
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["ElementInternals"].prototype, "ariaColSpan", {
  configurable: true,
  enumerable: true,
  get: {
    ariaColSpan() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["ElementInternals"].prototype, "ElementInternals", "ariaColSpan_get", arguments);
    }
  }.ariaColSpan,
  set: {
    ariaColSpan() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["ElementInternals"].prototype, "ElementInternals", "ariaColSpan_set", arguments);
    }
  }.ariaColSpan
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["ElementInternals"].prototype, "ariaCurrent", {
  configurable: true,
  enumerable: true,
  get: {
    ariaCurrent() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["ElementInternals"].prototype, "ElementInternals", "ariaCurrent_get", arguments);
    }
  }.ariaCurrent,
  set: {
    ariaCurrent() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["ElementInternals"].prototype, "ElementInternals", "ariaCurrent_set", arguments);
    }
  }.ariaCurrent
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["ElementInternals"].prototype, "ariaDescription", {
  configurable: true,
  enumerable: true,
  get: {
    ariaDescription() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["ElementInternals"].prototype, "ElementInternals", "ariaDescription_get", arguments);
    }
  }.ariaDescription,
  set: {
    ariaDescription() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["ElementInternals"].prototype, "ElementInternals", "ariaDescription_set", arguments);
    }
  }.ariaDescription
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["ElementInternals"].prototype, "ariaDisabled", {
  configurable: true,
  enumerable: true,
  get: {
    ariaDisabled() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["ElementInternals"].prototype, "ElementInternals", "ariaDisabled_get", arguments);
    }
  }.ariaDisabled,
  set: {
    ariaDisabled() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["ElementInternals"].prototype, "ElementInternals", "ariaDisabled_set", arguments);
    }
  }.ariaDisabled
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["ElementInternals"].prototype, "ariaExpanded", {
  configurable: true,
  enumerable: true,
  get: {
    ariaExpanded() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["ElementInternals"].prototype, "ElementInternals", "ariaExpanded_get", arguments);
    }
  }.ariaExpanded,
  set: {
    ariaExpanded() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["ElementInternals"].prototype, "ElementInternals", "ariaExpanded_set", arguments);
    }
  }.ariaExpanded
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["ElementInternals"].prototype, "ariaHasPopup", {
  configurable: true,
  enumerable: true,
  get: {
    ariaHasPopup() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["ElementInternals"].prototype, "ElementInternals", "ariaHasPopup_get", arguments);
    }
  }.ariaHasPopup,
  set: {
    ariaHasPopup() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["ElementInternals"].prototype, "ElementInternals", "ariaHasPopup_set", arguments);
    }
  }.ariaHasPopup
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["ElementInternals"].prototype, "ariaHidden", {
  configurable: true,
  enumerable: true,
  get: {
    ariaHidden() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["ElementInternals"].prototype, "ElementInternals", "ariaHidden_get", arguments);
    }
  }.ariaHidden,
  set: {
    ariaHidden() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["ElementInternals"].prototype, "ElementInternals", "ariaHidden_set", arguments);
    }
  }.ariaHidden
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["ElementInternals"].prototype, "ariaInvalid", {
  configurable: true,
  enumerable: true,
  get: {
    ariaInvalid() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["ElementInternals"].prototype, "ElementInternals", "ariaInvalid_get", arguments);
    }
  }.ariaInvalid,
  set: {
    ariaInvalid() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["ElementInternals"].prototype, "ElementInternals", "ariaInvalid_set", arguments);
    }
  }.ariaInvalid
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["ElementInternals"].prototype, "ariaKeyShortcuts", {
  configurable: true,
  enumerable: true,
  get: {
    ariaKeyShortcuts() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["ElementInternals"].prototype, "ElementInternals", "ariaKeyShortcuts_get", arguments);
    }
  }.ariaKeyShortcuts,
  set: {
    ariaKeyShortcuts() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["ElementInternals"].prototype, "ElementInternals", "ariaKeyShortcuts_set", arguments);
    }
  }.ariaKeyShortcuts
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["ElementInternals"].prototype, "ariaLabel", {
  configurable: true,
  enumerable: true,
  get: {
    ariaLabel() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["ElementInternals"].prototype, "ElementInternals", "ariaLabel_get", arguments);
    }
  }.ariaLabel,
  set: {
    ariaLabel() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["ElementInternals"].prototype, "ElementInternals", "ariaLabel_set", arguments);
    }
  }.ariaLabel
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["ElementInternals"].prototype, "ariaLevel", {
  configurable: true,
  enumerable: true,
  get: {
    ariaLevel() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["ElementInternals"].prototype, "ElementInternals", "ariaLevel_get", arguments);
    }
  }.ariaLevel,
  set: {
    ariaLevel() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["ElementInternals"].prototype, "ElementInternals", "ariaLevel_set", arguments);
    }
  }.ariaLevel
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["ElementInternals"].prototype, "ariaLive", {
  configurable: true,
  enumerable: true,
  get: {
    ariaLive() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["ElementInternals"].prototype, "ElementInternals", "ariaLive_get", arguments);
    }
  }.ariaLive,
  set: {
    ariaLive() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["ElementInternals"].prototype, "ElementInternals", "ariaLive_set", arguments);
    }
  }.ariaLive
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["ElementInternals"].prototype, "ariaModal", {
  configurable: true,
  enumerable: true,
  get: {
    ariaModal() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["ElementInternals"].prototype, "ElementInternals", "ariaModal_get", arguments);
    }
  }.ariaModal,
  set: {
    ariaModal() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["ElementInternals"].prototype, "ElementInternals", "ariaModal_set", arguments);
    }
  }.ariaModal
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["ElementInternals"].prototype, "ariaMultiLine", {
  configurable: true,
  enumerable: true,
  get: {
    ariaMultiLine() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["ElementInternals"].prototype, "ElementInternals", "ariaMultiLine_get", arguments);
    }
  }.ariaMultiLine,
  set: {
    ariaMultiLine() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["ElementInternals"].prototype, "ElementInternals", "ariaMultiLine_set", arguments);
    }
  }.ariaMultiLine
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["ElementInternals"].prototype, "ariaMultiSelectable", {
  configurable: true,
  enumerable: true,
  get: {
    ariaMultiSelectable() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["ElementInternals"].prototype, "ElementInternals", "ariaMultiSelectable_get", arguments);
    }
  }.ariaMultiSelectable,
  set: {
    ariaMultiSelectable() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["ElementInternals"].prototype, "ElementInternals", "ariaMultiSelectable_set", arguments);
    }
  }.ariaMultiSelectable
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["ElementInternals"].prototype, "ariaOrientation", {
  configurable: true,
  enumerable: true,
  get: {
    ariaOrientation() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["ElementInternals"].prototype, "ElementInternals", "ariaOrientation_get", arguments);
    }
  }.ariaOrientation,
  set: {
    ariaOrientation() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["ElementInternals"].prototype, "ElementInternals", "ariaOrientation_set", arguments);
    }
  }.ariaOrientation
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["ElementInternals"].prototype, "ariaPlaceholder", {
  configurable: true,
  enumerable: true,
  get: {
    ariaPlaceholder() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["ElementInternals"].prototype, "ElementInternals", "ariaPlaceholder_get", arguments);
    }
  }.ariaPlaceholder,
  set: {
    ariaPlaceholder() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["ElementInternals"].prototype, "ElementInternals", "ariaPlaceholder_set", arguments);
    }
  }.ariaPlaceholder
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["ElementInternals"].prototype, "ariaPosInSet", {
  configurable: true,
  enumerable: true,
  get: {
    ariaPosInSet() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["ElementInternals"].prototype, "ElementInternals", "ariaPosInSet_get", arguments);
    }
  }.ariaPosInSet,
  set: {
    ariaPosInSet() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["ElementInternals"].prototype, "ElementInternals", "ariaPosInSet_set", arguments);
    }
  }.ariaPosInSet
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["ElementInternals"].prototype, "ariaPressed", {
  configurable: true,
  enumerable: true,
  get: {
    ariaPressed() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["ElementInternals"].prototype, "ElementInternals", "ariaPressed_get", arguments);
    }
  }.ariaPressed,
  set: {
    ariaPressed() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["ElementInternals"].prototype, "ElementInternals", "ariaPressed_set", arguments);
    }
  }.ariaPressed
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["ElementInternals"].prototype, "ariaReadOnly", {
  configurable: true,
  enumerable: true,
  get: {
    ariaReadOnly() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["ElementInternals"].prototype, "ElementInternals", "ariaReadOnly_get", arguments);
    }
  }.ariaReadOnly,
  set: {
    ariaReadOnly() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["ElementInternals"].prototype, "ElementInternals", "ariaReadOnly_set", arguments);
    }
  }.ariaReadOnly
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["ElementInternals"].prototype, "ariaRelevant", {
  configurable: true,
  enumerable: true,
  get: {
    ariaRelevant() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["ElementInternals"].prototype, "ElementInternals", "ariaRelevant_get", arguments);
    }
  }.ariaRelevant,
  set: {
    ariaRelevant() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["ElementInternals"].prototype, "ElementInternals", "ariaRelevant_set", arguments);
    }
  }.ariaRelevant
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["ElementInternals"].prototype, "ariaRequired", {
  configurable: true,
  enumerable: true,
  get: {
    ariaRequired() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["ElementInternals"].prototype, "ElementInternals", "ariaRequired_get", arguments);
    }
  }.ariaRequired,
  set: {
    ariaRequired() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["ElementInternals"].prototype, "ElementInternals", "ariaRequired_set", arguments);
    }
  }.ariaRequired
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["ElementInternals"].prototype, "ariaRoleDescription", {
  configurable: true,
  enumerable: true,
  get: {
    ariaRoleDescription() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["ElementInternals"].prototype, "ElementInternals", "ariaRoleDescription_get", arguments);
    }
  }.ariaRoleDescription,
  set: {
    ariaRoleDescription() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["ElementInternals"].prototype, "ElementInternals", "ariaRoleDescription_set", arguments);
    }
  }.ariaRoleDescription
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["ElementInternals"].prototype, "ariaRowCount", {
  configurable: true,
  enumerable: true,
  get: {
    ariaRowCount() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["ElementInternals"].prototype, "ElementInternals", "ariaRowCount_get", arguments);
    }
  }.ariaRowCount,
  set: {
    ariaRowCount() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["ElementInternals"].prototype, "ElementInternals", "ariaRowCount_set", arguments);
    }
  }.ariaRowCount
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["ElementInternals"].prototype, "ariaRowIndex", {
  configurable: true,
  enumerable: true,
  get: {
    ariaRowIndex() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["ElementInternals"].prototype, "ElementInternals", "ariaRowIndex_get", arguments);
    }
  }.ariaRowIndex,
  set: {
    ariaRowIndex() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["ElementInternals"].prototype, "ElementInternals", "ariaRowIndex_set", arguments);
    }
  }.ariaRowIndex
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["ElementInternals"].prototype, "ariaRowSpan", {
  configurable: true,
  enumerable: true,
  get: {
    ariaRowSpan() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["ElementInternals"].prototype, "ElementInternals", "ariaRowSpan_get", arguments);
    }
  }.ariaRowSpan,
  set: {
    ariaRowSpan() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["ElementInternals"].prototype, "ElementInternals", "ariaRowSpan_set", arguments);
    }
  }.ariaRowSpan
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["ElementInternals"].prototype, "ariaSelected", {
  configurable: true,
  enumerable: true,
  get: {
    ariaSelected() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["ElementInternals"].prototype, "ElementInternals", "ariaSelected_get", arguments);
    }
  }.ariaSelected,
  set: {
    ariaSelected() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["ElementInternals"].prototype, "ElementInternals", "ariaSelected_set", arguments);
    }
  }.ariaSelected
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["ElementInternals"].prototype, "ariaSetSize", {
  configurable: true,
  enumerable: true,
  get: {
    ariaSetSize() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["ElementInternals"].prototype, "ElementInternals", "ariaSetSize_get", arguments);
    }
  }.ariaSetSize,
  set: {
    ariaSetSize() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["ElementInternals"].prototype, "ElementInternals", "ariaSetSize_set", arguments);
    }
  }.ariaSetSize
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["ElementInternals"].prototype, "ariaSort", {
  configurable: true,
  enumerable: true,
  get: {
    ariaSort() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["ElementInternals"].prototype, "ElementInternals", "ariaSort_get", arguments);
    }
  }.ariaSort,
  set: {
    ariaSort() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["ElementInternals"].prototype, "ElementInternals", "ariaSort_set", arguments);
    }
  }.ariaSort
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["ElementInternals"].prototype, "ariaValueMax", {
  configurable: true,
  enumerable: true,
  get: {
    ariaValueMax() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["ElementInternals"].prototype, "ElementInternals", "ariaValueMax_get", arguments);
    }
  }.ariaValueMax,
  set: {
    ariaValueMax() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["ElementInternals"].prototype, "ElementInternals", "ariaValueMax_set", arguments);
    }
  }.ariaValueMax
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["ElementInternals"].prototype, "ariaValueMin", {
  configurable: true,
  enumerable: true,
  get: {
    ariaValueMin() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["ElementInternals"].prototype, "ElementInternals", "ariaValueMin_get", arguments);
    }
  }.ariaValueMin,
  set: {
    ariaValueMin() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["ElementInternals"].prototype, "ElementInternals", "ariaValueMin_set", arguments);
    }
  }.ariaValueMin
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["ElementInternals"].prototype, "ariaValueNow", {
  configurable: true,
  enumerable: true,
  get: {
    ariaValueNow() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["ElementInternals"].prototype, "ElementInternals", "ariaValueNow_get", arguments);
    }
  }.ariaValueNow,
  set: {
    ariaValueNow() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["ElementInternals"].prototype, "ElementInternals", "ariaValueNow_set", arguments);
    }
  }.ariaValueNow
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["ElementInternals"].prototype, "ariaValueText", {
  configurable: true,
  enumerable: true,
  get: {
    ariaValueText() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["ElementInternals"].prototype, "ElementInternals", "ariaValueText_get", arguments);
    }
  }.ariaValueText,
  set: {
    ariaValueText() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["ElementInternals"].prototype, "ElementInternals", "ariaValueText_set", arguments);
    }
  }.ariaValueText
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["ElementInternals"].prototype, "checkValidity", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    checkValidity() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["ElementInternals"].prototype, "ElementInternals", "checkValidity", arguments);
    }
  }.checkValidity
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["ElementInternals"].prototype, "reportValidity", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    reportValidity() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["ElementInternals"].prototype, "ElementInternals", "reportValidity", arguments);
    }
  }.reportValidity
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["ElementInternals"].prototype, "setFormValue", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    setFormValue() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["ElementInternals"].prototype, "ElementInternals", "setFormValue", arguments);
    }
  }.setFormValue
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["ElementInternals"].prototype, "setValidity", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    setValidity() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["ElementInternals"].prototype, "ElementInternals", "setValidity", arguments);
    }
  }.setValidity
});