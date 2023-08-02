// Element对象

Element = function Element() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof Element)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('Element 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(Element, "Element");
Element.prototype.__proto__ = Node.prototype;
Element.__proto__ = Node;
bodavm.toolsFunc.defineProperty(Element.prototype, "namespaceURI", {
  configurable: true,
  enumerable: true,
  get: function namespaceURI() {
    return bodavm.toolsFunc.dispatch(this, Element.prototype, "Element", "namespaceURI_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(Element.prototype, "prefix", {
  configurable: true,
  enumerable: true,
  get: function prefix() {
    return bodavm.toolsFunc.dispatch(this, Element.prototype, "Element", "prefix_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(Element.prototype, "localName", {
  configurable: true,
  enumerable: true,
  get: function localName() {
    return bodavm.toolsFunc.dispatch(this, Element.prototype, "Element", "localName_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(Element.prototype, "tagName", {
  configurable: true,
  enumerable: true,
  get: function tagName() {
    return bodavm.toolsFunc.dispatch(this, Element.prototype, "Element", "tagName_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(Element.prototype, "id", {
  configurable: true,
  enumerable: true,
  get: function id() {
    return bodavm.toolsFunc.dispatch(this, Element.prototype, "Element", "id_get", arguments);
  },
  set: function id() {
    return bodavm.toolsFunc.dispatch(this, Element.prototype, "Element", "id_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Element.prototype, "className", {
  configurable: true,
  enumerable: true,
  get: function className() {
    return bodavm.toolsFunc.dispatch(this, Element.prototype, "Element", "className_get", arguments);
  },
  set: function className() {
    return bodavm.toolsFunc.dispatch(this, Element.prototype, "Element", "className_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Element.prototype, "classList", {
  configurable: true,
  enumerable: true,
  get: function classList() {
    return bodavm.toolsFunc.dispatch(this, Element.prototype, "Element", "classList_get", arguments);
  },
  set: function classList() {
    return bodavm.toolsFunc.dispatch(this, Element.prototype, "Element", "classList_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Element.prototype, "slot", {
  configurable: true,
  enumerable: true,
  get: function slot() {
    return bodavm.toolsFunc.dispatch(this, Element.prototype, "Element", "slot_get", arguments);
  },
  set: function slot() {
    return bodavm.toolsFunc.dispatch(this, Element.prototype, "Element", "slot_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Element.prototype, "attributes", {
  configurable: true,
  enumerable: true,
  get: function attributes() {
    return bodavm.toolsFunc.dispatch(this, Element.prototype, "Element", "attributes_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(Element.prototype, "shadowRoot", {
  configurable: true,
  enumerable: true,
  get: function shadowRoot() {
    return bodavm.toolsFunc.dispatch(this, Element.prototype, "Element", "shadowRoot_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(Element.prototype, "part", {
  configurable: true,
  enumerable: true,
  get: function part() {
    return bodavm.toolsFunc.dispatch(this, Element.prototype, "Element", "part_get", arguments);
  },
  set: function part() {
    return bodavm.toolsFunc.dispatch(this, Element.prototype, "Element", "part_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Element.prototype, "assignedSlot", {
  configurable: true,
  enumerable: true,
  get: function assignedSlot() {
    return bodavm.toolsFunc.dispatch(this, Element.prototype, "Element", "assignedSlot_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(Element.prototype, "innerHTML", {
  configurable: true,
  enumerable: true,
  get: function innerHTML() {
    return bodavm.toolsFunc.dispatch(this, Element.prototype, "Element", "innerHTML_get", arguments);
  },
  set: function innerHTML() {
    return bodavm.toolsFunc.dispatch(this, Element.prototype, "Element", "innerHTML_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Element.prototype, "outerHTML", {
  configurable: true,
  enumerable: true,
  get: function outerHTML() {
    return bodavm.toolsFunc.dispatch(this, Element.prototype, "Element", "outerHTML_get", arguments);
  },
  set: function outerHTML() {
    return bodavm.toolsFunc.dispatch(this, Element.prototype, "Element", "outerHTML_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Element.prototype, "scrollTop", {
  configurable: true,
  enumerable: true,
  get: function scrollTop() {
    return bodavm.toolsFunc.dispatch(this, Element.prototype, "Element", "scrollTop_get", arguments);
  },
  set: function scrollTop() {
    return bodavm.toolsFunc.dispatch(this, Element.prototype, "Element", "scrollTop_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Element.prototype, "scrollLeft", {
  configurable: true,
  enumerable: true,
  get: function scrollLeft() {
    return bodavm.toolsFunc.dispatch(this, Element.prototype, "Element", "scrollLeft_get", arguments);
  },
  set: function scrollLeft() {
    return bodavm.toolsFunc.dispatch(this, Element.prototype, "Element", "scrollLeft_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Element.prototype, "scrollWidth", {
  configurable: true,
  enumerable: true,
  get: function scrollWidth() {
    return bodavm.toolsFunc.dispatch(this, Element.prototype, "Element", "scrollWidth_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(Element.prototype, "scrollHeight", {
  configurable: true,
  enumerable: true,
  get: function scrollHeight() {
    return bodavm.toolsFunc.dispatch(this, Element.prototype, "Element", "scrollHeight_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(Element.prototype, "clientTop", {
  configurable: true,
  enumerable: true,
  get: function clientTop() {
    return bodavm.toolsFunc.dispatch(this, Element.prototype, "Element", "clientTop_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(Element.prototype, "clientLeft", {
  configurable: true,
  enumerable: true,
  get: function clientLeft() {
    return bodavm.toolsFunc.dispatch(this, Element.prototype, "Element", "clientLeft_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(Element.prototype, "clientWidth", {
  configurable: true,
  enumerable: true,
  get: function clientWidth() {
    return bodavm.toolsFunc.dispatch(this, Element.prototype, "Element", "clientWidth_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(Element.prototype, "clientHeight", {
  configurable: true,
  enumerable: true,
  get: function clientHeight() {
    return bodavm.toolsFunc.dispatch(this, Element.prototype, "Element", "clientHeight_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(Element.prototype, "onbeforecopy", {
  configurable: true,
  enumerable: true,
  get: function onbeforecopy() {
    return bodavm.toolsFunc.dispatch(this, Element.prototype, "Element", "onbeforecopy_get", arguments);
  },
  set: function onbeforecopy() {
    return bodavm.toolsFunc.dispatch(this, Element.prototype, "Element", "onbeforecopy_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Element.prototype, "onbeforecut", {
  configurable: true,
  enumerable: true,
  get: function onbeforecut() {
    return bodavm.toolsFunc.dispatch(this, Element.prototype, "Element", "onbeforecut_get", arguments);
  },
  set: function onbeforecut() {
    return bodavm.toolsFunc.dispatch(this, Element.prototype, "Element", "onbeforecut_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Element.prototype, "onbeforepaste", {
  configurable: true,
  enumerable: true,
  get: function onbeforepaste() {
    return bodavm.toolsFunc.dispatch(this, Element.prototype, "Element", "onbeforepaste_get", arguments);
  },
  set: function onbeforepaste() {
    return bodavm.toolsFunc.dispatch(this, Element.prototype, "Element", "onbeforepaste_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Element.prototype, "onsearch", {
  configurable: true,
  enumerable: true,
  get: function onsearch() {
    return bodavm.toolsFunc.dispatch(this, Element.prototype, "Element", "onsearch_get", arguments);
  },
  set: function onsearch() {
    return bodavm.toolsFunc.dispatch(this, Element.prototype, "Element", "onsearch_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Element.prototype, "elementTiming", {
  configurable: true,
  enumerable: true,
  get: function elementTiming() {
    return bodavm.toolsFunc.dispatch(this, Element.prototype, "Element", "elementTiming_get", arguments);
  },
  set: function elementTiming() {
    return bodavm.toolsFunc.dispatch(this, Element.prototype, "Element", "elementTiming_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Element.prototype, "onfullscreenchange", {
  configurable: true,
  enumerable: true,
  get: function onfullscreenchange() {
    return bodavm.toolsFunc.dispatch(this, Element.prototype, "Element", "onfullscreenchange_get", arguments);
  },
  set: function onfullscreenchange() {
    return bodavm.toolsFunc.dispatch(this, Element.prototype, "Element", "onfullscreenchange_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Element.prototype, "onfullscreenerror", {
  configurable: true,
  enumerable: true,
  get: function onfullscreenerror() {
    return bodavm.toolsFunc.dispatch(this, Element.prototype, "Element", "onfullscreenerror_get", arguments);
  },
  set: function onfullscreenerror() {
    return bodavm.toolsFunc.dispatch(this, Element.prototype, "Element", "onfullscreenerror_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Element.prototype, "onwebkitfullscreenchange", {
  configurable: true,
  enumerable: true,
  get: function onwebkitfullscreenchange() {
    return bodavm.toolsFunc.dispatch(this, Element.prototype, "Element", "onwebkitfullscreenchange_get", arguments);
  },
  set: function onwebkitfullscreenchange() {
    return bodavm.toolsFunc.dispatch(this, Element.prototype, "Element", "onwebkitfullscreenchange_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Element.prototype, "onwebkitfullscreenerror", {
  configurable: true,
  enumerable: true,
  get: function onwebkitfullscreenerror() {
    return bodavm.toolsFunc.dispatch(this, Element.prototype, "Element", "onwebkitfullscreenerror_get", arguments);
  },
  set: function onwebkitfullscreenerror() {
    return bodavm.toolsFunc.dispatch(this, Element.prototype, "Element", "onwebkitfullscreenerror_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Element.prototype, "role", {
  configurable: true,
  enumerable: true,
  get: function role() {
    return bodavm.toolsFunc.dispatch(this, Element.prototype, "Element", "role_get", arguments);
  },
  set: function role() {
    return bodavm.toolsFunc.dispatch(this, Element.prototype, "Element", "role_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Element.prototype, "ariaAtomic", {
  configurable: true,
  enumerable: true,
  get: function ariaAtomic() {
    return bodavm.toolsFunc.dispatch(this, Element.prototype, "Element", "ariaAtomic_get", arguments);
  },
  set: function ariaAtomic() {
    return bodavm.toolsFunc.dispatch(this, Element.prototype, "Element", "ariaAtomic_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Element.prototype, "ariaAutoComplete", {
  configurable: true,
  enumerable: true,
  get: function ariaAutoComplete() {
    return bodavm.toolsFunc.dispatch(this, Element.prototype, "Element", "ariaAutoComplete_get", arguments);
  },
  set: function ariaAutoComplete() {
    return bodavm.toolsFunc.dispatch(this, Element.prototype, "Element", "ariaAutoComplete_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Element.prototype, "ariaBusy", {
  configurable: true,
  enumerable: true,
  get: function ariaBusy() {
    return bodavm.toolsFunc.dispatch(this, Element.prototype, "Element", "ariaBusy_get", arguments);
  },
  set: function ariaBusy() {
    return bodavm.toolsFunc.dispatch(this, Element.prototype, "Element", "ariaBusy_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Element.prototype, "ariaBrailleLabel", {
  configurable: true,
  enumerable: true,
  get: function ariaBrailleLabel() {
    return bodavm.toolsFunc.dispatch(this, Element.prototype, "Element", "ariaBrailleLabel_get", arguments);
  },
  set: function ariaBrailleLabel() {
    return bodavm.toolsFunc.dispatch(this, Element.prototype, "Element", "ariaBrailleLabel_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Element.prototype, "ariaBrailleRoleDescription", {
  configurable: true,
  enumerable: true,
  get: function ariaBrailleRoleDescription() {
    return bodavm.toolsFunc.dispatch(this, Element.prototype, "Element", "ariaBrailleRoleDescription_get", arguments);
  },
  set: function ariaBrailleRoleDescription() {
    return bodavm.toolsFunc.dispatch(this, Element.prototype, "Element", "ariaBrailleRoleDescription_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Element.prototype, "ariaChecked", {
  configurable: true,
  enumerable: true,
  get: function ariaChecked() {
    return bodavm.toolsFunc.dispatch(this, Element.prototype, "Element", "ariaChecked_get", arguments);
  },
  set: function ariaChecked() {
    return bodavm.toolsFunc.dispatch(this, Element.prototype, "Element", "ariaChecked_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Element.prototype, "ariaColCount", {
  configurable: true,
  enumerable: true,
  get: function ariaColCount() {
    return bodavm.toolsFunc.dispatch(this, Element.prototype, "Element", "ariaColCount_get", arguments);
  },
  set: function ariaColCount() {
    return bodavm.toolsFunc.dispatch(this, Element.prototype, "Element", "ariaColCount_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Element.prototype, "ariaColIndex", {
  configurable: true,
  enumerable: true,
  get: function ariaColIndex() {
    return bodavm.toolsFunc.dispatch(this, Element.prototype, "Element", "ariaColIndex_get", arguments);
  },
  set: function ariaColIndex() {
    return bodavm.toolsFunc.dispatch(this, Element.prototype, "Element", "ariaColIndex_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Element.prototype, "ariaColSpan", {
  configurable: true,
  enumerable: true,
  get: function ariaColSpan() {
    return bodavm.toolsFunc.dispatch(this, Element.prototype, "Element", "ariaColSpan_get", arguments);
  },
  set: function ariaColSpan() {
    return bodavm.toolsFunc.dispatch(this, Element.prototype, "Element", "ariaColSpan_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Element.prototype, "ariaCurrent", {
  configurable: true,
  enumerable: true,
  get: function ariaCurrent() {
    return bodavm.toolsFunc.dispatch(this, Element.prototype, "Element", "ariaCurrent_get", arguments);
  },
  set: function ariaCurrent() {
    return bodavm.toolsFunc.dispatch(this, Element.prototype, "Element", "ariaCurrent_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Element.prototype, "ariaDescription", {
  configurable: true,
  enumerable: true,
  get: function ariaDescription() {
    return bodavm.toolsFunc.dispatch(this, Element.prototype, "Element", "ariaDescription_get", arguments);
  },
  set: function ariaDescription() {
    return bodavm.toolsFunc.dispatch(this, Element.prototype, "Element", "ariaDescription_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Element.prototype, "ariaDisabled", {
  configurable: true,
  enumerable: true,
  get: function ariaDisabled() {
    return bodavm.toolsFunc.dispatch(this, Element.prototype, "Element", "ariaDisabled_get", arguments);
  },
  set: function ariaDisabled() {
    return bodavm.toolsFunc.dispatch(this, Element.prototype, "Element", "ariaDisabled_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Element.prototype, "ariaExpanded", {
  configurable: true,
  enumerable: true,
  get: function ariaExpanded() {
    return bodavm.toolsFunc.dispatch(this, Element.prototype, "Element", "ariaExpanded_get", arguments);
  },
  set: function ariaExpanded() {
    return bodavm.toolsFunc.dispatch(this, Element.prototype, "Element", "ariaExpanded_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Element.prototype, "ariaHasPopup", {
  configurable: true,
  enumerable: true,
  get: function ariaHasPopup() {
    return bodavm.toolsFunc.dispatch(this, Element.prototype, "Element", "ariaHasPopup_get", arguments);
  },
  set: function ariaHasPopup() {
    return bodavm.toolsFunc.dispatch(this, Element.prototype, "Element", "ariaHasPopup_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Element.prototype, "ariaHidden", {
  configurable: true,
  enumerable: true,
  get: function ariaHidden() {
    return bodavm.toolsFunc.dispatch(this, Element.prototype, "Element", "ariaHidden_get", arguments);
  },
  set: function ariaHidden() {
    return bodavm.toolsFunc.dispatch(this, Element.prototype, "Element", "ariaHidden_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Element.prototype, "ariaInvalid", {
  configurable: true,
  enumerable: true,
  get: function ariaInvalid() {
    return bodavm.toolsFunc.dispatch(this, Element.prototype, "Element", "ariaInvalid_get", arguments);
  },
  set: function ariaInvalid() {
    return bodavm.toolsFunc.dispatch(this, Element.prototype, "Element", "ariaInvalid_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Element.prototype, "ariaKeyShortcuts", {
  configurable: true,
  enumerable: true,
  get: function ariaKeyShortcuts() {
    return bodavm.toolsFunc.dispatch(this, Element.prototype, "Element", "ariaKeyShortcuts_get", arguments);
  },
  set: function ariaKeyShortcuts() {
    return bodavm.toolsFunc.dispatch(this, Element.prototype, "Element", "ariaKeyShortcuts_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Element.prototype, "ariaLabel", {
  configurable: true,
  enumerable: true,
  get: function ariaLabel() {
    return bodavm.toolsFunc.dispatch(this, Element.prototype, "Element", "ariaLabel_get", arguments);
  },
  set: function ariaLabel() {
    return bodavm.toolsFunc.dispatch(this, Element.prototype, "Element", "ariaLabel_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Element.prototype, "ariaLevel", {
  configurable: true,
  enumerable: true,
  get: function ariaLevel() {
    return bodavm.toolsFunc.dispatch(this, Element.prototype, "Element", "ariaLevel_get", arguments);
  },
  set: function ariaLevel() {
    return bodavm.toolsFunc.dispatch(this, Element.prototype, "Element", "ariaLevel_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Element.prototype, "ariaLive", {
  configurable: true,
  enumerable: true,
  get: function ariaLive() {
    return bodavm.toolsFunc.dispatch(this, Element.prototype, "Element", "ariaLive_get", arguments);
  },
  set: function ariaLive() {
    return bodavm.toolsFunc.dispatch(this, Element.prototype, "Element", "ariaLive_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Element.prototype, "ariaModal", {
  configurable: true,
  enumerable: true,
  get: function ariaModal() {
    return bodavm.toolsFunc.dispatch(this, Element.prototype, "Element", "ariaModal_get", arguments);
  },
  set: function ariaModal() {
    return bodavm.toolsFunc.dispatch(this, Element.prototype, "Element", "ariaModal_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Element.prototype, "ariaMultiLine", {
  configurable: true,
  enumerable: true,
  get: function ariaMultiLine() {
    return bodavm.toolsFunc.dispatch(this, Element.prototype, "Element", "ariaMultiLine_get", arguments);
  },
  set: function ariaMultiLine() {
    return bodavm.toolsFunc.dispatch(this, Element.prototype, "Element", "ariaMultiLine_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Element.prototype, "ariaMultiSelectable", {
  configurable: true,
  enumerable: true,
  get: function ariaMultiSelectable() {
    return bodavm.toolsFunc.dispatch(this, Element.prototype, "Element", "ariaMultiSelectable_get", arguments);
  },
  set: function ariaMultiSelectable() {
    return bodavm.toolsFunc.dispatch(this, Element.prototype, "Element", "ariaMultiSelectable_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Element.prototype, "ariaOrientation", {
  configurable: true,
  enumerable: true,
  get: function ariaOrientation() {
    return bodavm.toolsFunc.dispatch(this, Element.prototype, "Element", "ariaOrientation_get", arguments);
  },
  set: function ariaOrientation() {
    return bodavm.toolsFunc.dispatch(this, Element.prototype, "Element", "ariaOrientation_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Element.prototype, "ariaPlaceholder", {
  configurable: true,
  enumerable: true,
  get: function ariaPlaceholder() {
    return bodavm.toolsFunc.dispatch(this, Element.prototype, "Element", "ariaPlaceholder_get", arguments);
  },
  set: function ariaPlaceholder() {
    return bodavm.toolsFunc.dispatch(this, Element.prototype, "Element", "ariaPlaceholder_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Element.prototype, "ariaPosInSet", {
  configurable: true,
  enumerable: true,
  get: function ariaPosInSet() {
    return bodavm.toolsFunc.dispatch(this, Element.prototype, "Element", "ariaPosInSet_get", arguments);
  },
  set: function ariaPosInSet() {
    return bodavm.toolsFunc.dispatch(this, Element.prototype, "Element", "ariaPosInSet_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Element.prototype, "ariaPressed", {
  configurable: true,
  enumerable: true,
  get: function ariaPressed() {
    return bodavm.toolsFunc.dispatch(this, Element.prototype, "Element", "ariaPressed_get", arguments);
  },
  set: function ariaPressed() {
    return bodavm.toolsFunc.dispatch(this, Element.prototype, "Element", "ariaPressed_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Element.prototype, "ariaReadOnly", {
  configurable: true,
  enumerable: true,
  get: function ariaReadOnly() {
    return bodavm.toolsFunc.dispatch(this, Element.prototype, "Element", "ariaReadOnly_get", arguments);
  },
  set: function ariaReadOnly() {
    return bodavm.toolsFunc.dispatch(this, Element.prototype, "Element", "ariaReadOnly_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Element.prototype, "ariaRelevant", {
  configurable: true,
  enumerable: true,
  get: function ariaRelevant() {
    return bodavm.toolsFunc.dispatch(this, Element.prototype, "Element", "ariaRelevant_get", arguments);
  },
  set: function ariaRelevant() {
    return bodavm.toolsFunc.dispatch(this, Element.prototype, "Element", "ariaRelevant_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Element.prototype, "ariaRequired", {
  configurable: true,
  enumerable: true,
  get: function ariaRequired() {
    return bodavm.toolsFunc.dispatch(this, Element.prototype, "Element", "ariaRequired_get", arguments);
  },
  set: function ariaRequired() {
    return bodavm.toolsFunc.dispatch(this, Element.prototype, "Element", "ariaRequired_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Element.prototype, "ariaRoleDescription", {
  configurable: true,
  enumerable: true,
  get: function ariaRoleDescription() {
    return bodavm.toolsFunc.dispatch(this, Element.prototype, "Element", "ariaRoleDescription_get", arguments);
  },
  set: function ariaRoleDescription() {
    return bodavm.toolsFunc.dispatch(this, Element.prototype, "Element", "ariaRoleDescription_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Element.prototype, "ariaRowCount", {
  configurable: true,
  enumerable: true,
  get: function ariaRowCount() {
    return bodavm.toolsFunc.dispatch(this, Element.prototype, "Element", "ariaRowCount_get", arguments);
  },
  set: function ariaRowCount() {
    return bodavm.toolsFunc.dispatch(this, Element.prototype, "Element", "ariaRowCount_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Element.prototype, "ariaRowIndex", {
  configurable: true,
  enumerable: true,
  get: function ariaRowIndex() {
    return bodavm.toolsFunc.dispatch(this, Element.prototype, "Element", "ariaRowIndex_get", arguments);
  },
  set: function ariaRowIndex() {
    return bodavm.toolsFunc.dispatch(this, Element.prototype, "Element", "ariaRowIndex_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Element.prototype, "ariaRowSpan", {
  configurable: true,
  enumerable: true,
  get: function ariaRowSpan() {
    return bodavm.toolsFunc.dispatch(this, Element.prototype, "Element", "ariaRowSpan_get", arguments);
  },
  set: function ariaRowSpan() {
    return bodavm.toolsFunc.dispatch(this, Element.prototype, "Element", "ariaRowSpan_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Element.prototype, "ariaSelected", {
  configurable: true,
  enumerable: true,
  get: function ariaSelected() {
    return bodavm.toolsFunc.dispatch(this, Element.prototype, "Element", "ariaSelected_get", arguments);
  },
  set: function ariaSelected() {
    return bodavm.toolsFunc.dispatch(this, Element.prototype, "Element", "ariaSelected_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Element.prototype, "ariaSetSize", {
  configurable: true,
  enumerable: true,
  get: function ariaSetSize() {
    return bodavm.toolsFunc.dispatch(this, Element.prototype, "Element", "ariaSetSize_get", arguments);
  },
  set: function ariaSetSize() {
    return bodavm.toolsFunc.dispatch(this, Element.prototype, "Element", "ariaSetSize_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Element.prototype, "ariaSort", {
  configurable: true,
  enumerable: true,
  get: function ariaSort() {
    return bodavm.toolsFunc.dispatch(this, Element.prototype, "Element", "ariaSort_get", arguments);
  },
  set: function ariaSort() {
    return bodavm.toolsFunc.dispatch(this, Element.prototype, "Element", "ariaSort_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Element.prototype, "ariaValueMax", {
  configurable: true,
  enumerable: true,
  get: function ariaValueMax() {
    return bodavm.toolsFunc.dispatch(this, Element.prototype, "Element", "ariaValueMax_get", arguments);
  },
  set: function ariaValueMax() {
    return bodavm.toolsFunc.dispatch(this, Element.prototype, "Element", "ariaValueMax_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Element.prototype, "ariaValueMin", {
  configurable: true,
  enumerable: true,
  get: function ariaValueMin() {
    return bodavm.toolsFunc.dispatch(this, Element.prototype, "Element", "ariaValueMin_get", arguments);
  },
  set: function ariaValueMin() {
    return bodavm.toolsFunc.dispatch(this, Element.prototype, "Element", "ariaValueMin_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Element.prototype, "ariaValueNow", {
  configurable: true,
  enumerable: true,
  get: function ariaValueNow() {
    return bodavm.toolsFunc.dispatch(this, Element.prototype, "Element", "ariaValueNow_get", arguments);
  },
  set: function ariaValueNow() {
    return bodavm.toolsFunc.dispatch(this, Element.prototype, "Element", "ariaValueNow_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Element.prototype, "ariaValueText", {
  configurable: true,
  enumerable: true,
  get: function ariaValueText() {
    return bodavm.toolsFunc.dispatch(this, Element.prototype, "Element", "ariaValueText_get", arguments);
  },
  set: function ariaValueText() {
    return bodavm.toolsFunc.dispatch(this, Element.prototype, "Element", "ariaValueText_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Element.prototype, "children", {
  configurable: true,
  enumerable: true,
  get: function children() {
    return bodavm.toolsFunc.dispatch(this, Element.prototype, "Element", "children_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(Element.prototype, "firstElementChild", {
  configurable: true,
  enumerable: true,
  get: function firstElementChild() {
    return bodavm.toolsFunc.dispatch(this, Element.prototype, "Element", "firstElementChild_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(Element.prototype, "lastElementChild", {
  configurable: true,
  enumerable: true,
  get: function lastElementChild() {
    return bodavm.toolsFunc.dispatch(this, Element.prototype, "Element", "lastElementChild_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(Element.prototype, "childElementCount", {
  configurable: true,
  enumerable: true,
  get: function childElementCount() {
    return bodavm.toolsFunc.dispatch(this, Element.prototype, "Element", "childElementCount_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(Element.prototype, "previousElementSibling", {
  configurable: true,
  enumerable: true,
  get: function previousElementSibling() {
    return bodavm.toolsFunc.dispatch(this, Element.prototype, "Element", "previousElementSibling_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(Element.prototype, "nextElementSibling", {
  configurable: true,
  enumerable: true,
  get: function nextElementSibling() {
    return bodavm.toolsFunc.dispatch(this, Element.prototype, "Element", "nextElementSibling_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(Element.prototype, "after", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function after() {
    return bodavm.toolsFunc.dispatch(this, Element.prototype, "Element", "after", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Element.prototype, "animate", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function animate() {
    return bodavm.toolsFunc.dispatch(this, Element.prototype, "Element", "animate", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Element.prototype, "append", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function append() {
    return bodavm.toolsFunc.dispatch(this, Element.prototype, "Element", "append", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Element.prototype, "attachShadow", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function attachShadow() {
    return bodavm.toolsFunc.dispatch(this, Element.prototype, "Element", "attachShadow", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Element.prototype, "before", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function before() {
    return bodavm.toolsFunc.dispatch(this, Element.prototype, "Element", "before", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Element.prototype, "closest", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function closest() {
    return bodavm.toolsFunc.dispatch(this, Element.prototype, "Element", "closest", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Element.prototype, "computedStyleMap", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function computedStyleMap() {
    return bodavm.toolsFunc.dispatch(this, Element.prototype, "Element", "computedStyleMap", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Element.prototype, "getAttribute", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getAttribute() {
    return bodavm.toolsFunc.dispatch(this, Element.prototype, "Element", "getAttribute", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Element.prototype, "getAttributeNS", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getAttributeNS() {
    return bodavm.toolsFunc.dispatch(this, Element.prototype, "Element", "getAttributeNS", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Element.prototype, "getAttributeNames", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getAttributeNames() {
    return bodavm.toolsFunc.dispatch(this, Element.prototype, "Element", "getAttributeNames", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Element.prototype, "getAttributeNode", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getAttributeNode() {
    return bodavm.toolsFunc.dispatch(this, Element.prototype, "Element", "getAttributeNode", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Element.prototype, "getAttributeNodeNS", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getAttributeNodeNS() {
    return bodavm.toolsFunc.dispatch(this, Element.prototype, "Element", "getAttributeNodeNS", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Element.prototype, "getBoundingClientRect", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getBoundingClientRect() {
    return bodavm.toolsFunc.dispatch(this, Element.prototype, "Element", "getBoundingClientRect", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Element.prototype, "getClientRects", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getClientRects() {
    return bodavm.toolsFunc.dispatch(this, Element.prototype, "Element", "getClientRects", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Element.prototype, "getElementsByClassName", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getElementsByClassName() {
    return bodavm.toolsFunc.dispatch(this, Element.prototype, "Element", "getElementsByClassName", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Element.prototype, "getElementsByTagName", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getElementsByTagName() {
    return bodavm.toolsFunc.dispatch(this, Element.prototype, "Element", "getElementsByTagName", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Element.prototype, "getElementsByTagNameNS", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getElementsByTagNameNS() {
    return bodavm.toolsFunc.dispatch(this, Element.prototype, "Element", "getElementsByTagNameNS", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Element.prototype, "getInnerHTML", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getInnerHTML() {
    return bodavm.toolsFunc.dispatch(this, Element.prototype, "Element", "getInnerHTML", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Element.prototype, "hasAttribute", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function hasAttribute() {
    return bodavm.toolsFunc.dispatch(this, Element.prototype, "Element", "hasAttribute", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Element.prototype, "hasAttributeNS", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function hasAttributeNS() {
    return bodavm.toolsFunc.dispatch(this, Element.prototype, "Element", "hasAttributeNS", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Element.prototype, "hasAttributes", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function hasAttributes() {
    return bodavm.toolsFunc.dispatch(this, Element.prototype, "Element", "hasAttributes", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Element.prototype, "hasPointerCapture", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function hasPointerCapture() {
    return bodavm.toolsFunc.dispatch(this, Element.prototype, "Element", "hasPointerCapture", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Element.prototype, "insertAdjacentElement", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function insertAdjacentElement() {
    return bodavm.toolsFunc.dispatch(this, Element.prototype, "Element", "insertAdjacentElement", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Element.prototype, "insertAdjacentHTML", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function insertAdjacentHTML() {
    return bodavm.toolsFunc.dispatch(this, Element.prototype, "Element", "insertAdjacentHTML", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Element.prototype, "insertAdjacentText", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function insertAdjacentText() {
    return bodavm.toolsFunc.dispatch(this, Element.prototype, "Element", "insertAdjacentText", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Element.prototype, "matches", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function matches() {
    return bodavm.toolsFunc.dispatch(this, Element.prototype, "Element", "matches", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Element.prototype, "prepend", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function prepend() {
    return bodavm.toolsFunc.dispatch(this, Element.prototype, "Element", "prepend", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Element.prototype, "querySelector", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function querySelector() {
    return bodavm.toolsFunc.dispatch(this, Element.prototype, "Element", "querySelector", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Element.prototype, "querySelectorAll", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function querySelectorAll() {
    return bodavm.toolsFunc.dispatch(this, Element.prototype, "Element", "querySelectorAll", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Element.prototype, "releasePointerCapture", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function releasePointerCapture() {
    return bodavm.toolsFunc.dispatch(this, Element.prototype, "Element", "releasePointerCapture", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Element.prototype, "remove", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function remove() {
    return bodavm.toolsFunc.dispatch(this, Element.prototype, "Element", "remove", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Element.prototype, "removeAttribute", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function removeAttribute() {
    return bodavm.toolsFunc.dispatch(this, Element.prototype, "Element", "removeAttribute", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Element.prototype, "removeAttributeNS", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function removeAttributeNS() {
    return bodavm.toolsFunc.dispatch(this, Element.prototype, "Element", "removeAttributeNS", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Element.prototype, "removeAttributeNode", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function removeAttributeNode() {
    return bodavm.toolsFunc.dispatch(this, Element.prototype, "Element", "removeAttributeNode", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Element.prototype, "replaceChildren", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function replaceChildren() {
    return bodavm.toolsFunc.dispatch(this, Element.prototype, "Element", "replaceChildren", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Element.prototype, "replaceWith", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function replaceWith() {
    return bodavm.toolsFunc.dispatch(this, Element.prototype, "Element", "replaceWith", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Element.prototype, "requestFullscreen", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function requestFullscreen() {
    return bodavm.toolsFunc.dispatch(this, Element.prototype, "Element", "requestFullscreen", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Element.prototype, "requestPointerLock", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function requestPointerLock() {
    return bodavm.toolsFunc.dispatch(this, Element.prototype, "Element", "requestPointerLock", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Element.prototype, "scroll", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function scroll() {
    return bodavm.toolsFunc.dispatch(this, Element.prototype, "Element", "scroll", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Element.prototype, "scrollBy", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function scrollBy() {
    return bodavm.toolsFunc.dispatch(this, Element.prototype, "Element", "scrollBy", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Element.prototype, "scrollIntoView", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function scrollIntoView() {
    return bodavm.toolsFunc.dispatch(this, Element.prototype, "Element", "scrollIntoView", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Element.prototype, "scrollIntoViewIfNeeded", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function scrollIntoViewIfNeeded() {
    return bodavm.toolsFunc.dispatch(this, Element.prototype, "Element", "scrollIntoViewIfNeeded", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Element.prototype, "scrollTo", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function scrollTo() {
    return bodavm.toolsFunc.dispatch(this, Element.prototype, "Element", "scrollTo", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Element.prototype, "setAttribute", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function setAttribute() {
    return bodavm.toolsFunc.dispatch(this, Element.prototype, "Element", "setAttribute", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Element.prototype, "setAttributeNS", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function setAttributeNS() {
    return bodavm.toolsFunc.dispatch(this, Element.prototype, "Element", "setAttributeNS", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Element.prototype, "setAttributeNode", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function setAttributeNode() {
    return bodavm.toolsFunc.dispatch(this, Element.prototype, "Element", "setAttributeNode", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Element.prototype, "setAttributeNodeNS", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function setAttributeNodeNS() {
    return bodavm.toolsFunc.dispatch(this, Element.prototype, "Element", "setAttributeNodeNS", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Element.prototype, "setPointerCapture", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function setPointerCapture() {
    return bodavm.toolsFunc.dispatch(this, Element.prototype, "Element", "setPointerCapture", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Element.prototype, "toggleAttribute", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function toggleAttribute() {
    return bodavm.toolsFunc.dispatch(this, Element.prototype, "Element", "toggleAttribute", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Element.prototype, "webkitMatchesSelector", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function webkitMatchesSelector() {
    return bodavm.toolsFunc.dispatch(this, Element.prototype, "Element", "webkitMatchesSelector", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Element.prototype, "webkitRequestFullScreen", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function webkitRequestFullScreen() {
    return bodavm.toolsFunc.dispatch(this, Element.prototype, "Element", "webkitRequestFullScreen", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Element.prototype, "webkitRequestFullscreen", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function webkitRequestFullscreen() {
    return bodavm.toolsFunc.dispatch(this, Element.prototype, "Element", "webkitRequestFullscreen", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Element.prototype, "checkVisibility", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function checkVisibility() {
    return bodavm.toolsFunc.dispatch(this, Element.prototype, "Element", "checkVisibility", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Element.prototype, "getAnimations", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getAnimations() {
    return bodavm.toolsFunc.dispatch(this, Element.prototype, "Element", "getAnimations", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Element.prototype, "setHTML", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function setHTML() {
    return bodavm.toolsFunc.dispatch(this, Element.prototype, "Element", "setHTML", arguments);
  }
});