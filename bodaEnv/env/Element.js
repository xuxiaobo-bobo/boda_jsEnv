// Element对象

bodaEnv.memory.globlProtoObj["Element"] = function Element() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('Element 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["Element"], "Element");
bodaEnv.memory.globlProtoObj["Element"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["Node"].prototype;
bodaEnv.memory.globlProtoObj["Element"].__proto__ = bodaEnv.memory.globlProtoObj["Node"];
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Element"].prototype, "namespaceURI", {
  configurable: true,
  enumerable: true,
  get: {
    namespaceURI() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Element"].prototype, "Element", "namespaceURI_get", arguments);
    }
  }.namespaceURI,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Element"].prototype, "prefix", {
  configurable: true,
  enumerable: true,
  get: {
    prefix() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Element"].prototype, "Element", "prefix_get", arguments);
    }
  }.prefix,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Element"].prototype, "localName", {
  configurable: true,
  enumerable: true,
  get: {
    localName() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Element"].prototype, "Element", "localName_get", arguments);
    }
  }.localName,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Element"].prototype, "tagName", {
  configurable: true,
  enumerable: true,
  get: {
    tagName() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Element"].prototype, "Element", "tagName_get", arguments);
    }
  }.tagName,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Element"].prototype, "id", {
  configurable: true,
  enumerable: true,
  get: {
    id() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Element"].prototype, "Element", "id_get", arguments);
    }
  }.id,
  set: {
    id() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Element"].prototype, "Element", "id_set", arguments);
    }
  }.id
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Element"].prototype, "className", {
  configurable: true,
  enumerable: true,
  get: {
    className() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Element"].prototype, "Element", "className_get", arguments);
    }
  }.className,
  set: {
    className() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Element"].prototype, "Element", "className_set", arguments);
    }
  }.className
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Element"].prototype, "classList", {
  configurable: true,
  enumerable: true,
  get: {
    classList() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Element"].prototype, "Element", "classList_get", arguments);
    }
  }.classList,
  set: {
    classList() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Element"].prototype, "Element", "classList_set", arguments);
    }
  }.classList
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Element"].prototype, "slot", {
  configurable: true,
  enumerable: true,
  get: {
    slot() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Element"].prototype, "Element", "slot_get", arguments);
    }
  }.slot,
  set: {
    slot() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Element"].prototype, "Element", "slot_set", arguments);
    }
  }.slot
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Element"].prototype, "attributes", {
  configurable: true,
  enumerable: true,
  get: {
    attributes() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Element"].prototype, "Element", "attributes_get", arguments);
    }
  }.attributes,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Element"].prototype, "shadowRoot", {
  configurable: true,
  enumerable: true,
  get: {
    shadowRoot() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Element"].prototype, "Element", "shadowRoot_get", arguments);
    }
  }.shadowRoot,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Element"].prototype, "part", {
  configurable: true,
  enumerable: true,
  get: {
    part() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Element"].prototype, "Element", "part_get", arguments);
    }
  }.part,
  set: {
    part() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Element"].prototype, "Element", "part_set", arguments);
    }
  }.part
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Element"].prototype, "assignedSlot", {
  configurable: true,
  enumerable: true,
  get: {
    assignedSlot() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Element"].prototype, "Element", "assignedSlot_get", arguments);
    }
  }.assignedSlot,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Element"].prototype, "innerHTML", {
  configurable: true,
  enumerable: true,
  get: {
    innerHTML() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Element"].prototype, "Element", "innerHTML_get", arguments);
    }
  }.innerHTML,
  set: {
    innerHTML() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Element"].prototype, "Element", "innerHTML_set", arguments);
    }
  }.innerHTML
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Element"].prototype, "outerHTML", {
  configurable: true,
  enumerable: true,
  get: {
    outerHTML() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Element"].prototype, "Element", "outerHTML_get", arguments);
    }
  }.outerHTML,
  set: {
    outerHTML() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Element"].prototype, "Element", "outerHTML_set", arguments);
    }
  }.outerHTML
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Element"].prototype, "scrollTop", {
  configurable: true,
  enumerable: true,
  get: {
    scrollTop() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Element"].prototype, "Element", "scrollTop_get", arguments);
    }
  }.scrollTop,
  set: {
    scrollTop() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Element"].prototype, "Element", "scrollTop_set", arguments);
    }
  }.scrollTop
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Element"].prototype, "scrollLeft", {
  configurable: true,
  enumerable: true,
  get: {
    scrollLeft() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Element"].prototype, "Element", "scrollLeft_get", arguments);
    }
  }.scrollLeft,
  set: {
    scrollLeft() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Element"].prototype, "Element", "scrollLeft_set", arguments);
    }
  }.scrollLeft
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Element"].prototype, "scrollWidth", {
  configurable: true,
  enumerable: true,
  get: {
    scrollWidth() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Element"].prototype, "Element", "scrollWidth_get", arguments);
    }
  }.scrollWidth,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Element"].prototype, "scrollHeight", {
  configurable: true,
  enumerable: true,
  get: {
    scrollHeight() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Element"].prototype, "Element", "scrollHeight_get", arguments);
    }
  }.scrollHeight,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Element"].prototype, "clientTop", {
  configurable: true,
  enumerable: true,
  get: {
    clientTop() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Element"].prototype, "Element", "clientTop_get", arguments);
    }
  }.clientTop,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Element"].prototype, "clientLeft", {
  configurable: true,
  enumerable: true,
  get: {
    clientLeft() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Element"].prototype, "Element", "clientLeft_get", arguments);
    }
  }.clientLeft,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Element"].prototype, "clientWidth", {
  configurable: true,
  enumerable: true,
  get: {
    clientWidth() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Element"].prototype, "Element", "clientWidth_get", arguments);
    }
  }.clientWidth,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Element"].prototype, "clientHeight", {
  configurable: true,
  enumerable: true,
  get: {
    clientHeight() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Element"].prototype, "Element", "clientHeight_get", arguments);
    }
  }.clientHeight,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Element"].prototype, "onbeforecopy", {
  configurable: true,
  enumerable: true,
  get: {
    onbeforecopy() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Element"].prototype, "Element", "onbeforecopy_get", arguments);
    }
  }.onbeforecopy,
  set: {
    onbeforecopy() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Element"].prototype, "Element", "onbeforecopy_set", arguments);
    }
  }.onbeforecopy
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Element"].prototype, "onbeforecut", {
  configurable: true,
  enumerable: true,
  get: {
    onbeforecut() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Element"].prototype, "Element", "onbeforecut_get", arguments);
    }
  }.onbeforecut,
  set: {
    onbeforecut() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Element"].prototype, "Element", "onbeforecut_set", arguments);
    }
  }.onbeforecut
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Element"].prototype, "onbeforepaste", {
  configurable: true,
  enumerable: true,
  get: {
    onbeforepaste() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Element"].prototype, "Element", "onbeforepaste_get", arguments);
    }
  }.onbeforepaste,
  set: {
    onbeforepaste() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Element"].prototype, "Element", "onbeforepaste_set", arguments);
    }
  }.onbeforepaste
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Element"].prototype, "onsearch", {
  configurable: true,
  enumerable: true,
  get: {
    onsearch() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Element"].prototype, "Element", "onsearch_get", arguments);
    }
  }.onsearch,
  set: {
    onsearch() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Element"].prototype, "Element", "onsearch_set", arguments);
    }
  }.onsearch
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Element"].prototype, "elementTiming", {
  configurable: true,
  enumerable: true,
  get: {
    elementTiming() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Element"].prototype, "Element", "elementTiming_get", arguments);
    }
  }.elementTiming,
  set: {
    elementTiming() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Element"].prototype, "Element", "elementTiming_set", arguments);
    }
  }.elementTiming
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Element"].prototype, "onfullscreenchange", {
  configurable: true,
  enumerable: true,
  get: {
    onfullscreenchange() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Element"].prototype, "Element", "onfullscreenchange_get", arguments);
    }
  }.onfullscreenchange,
  set: {
    onfullscreenchange() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Element"].prototype, "Element", "onfullscreenchange_set", arguments);
    }
  }.onfullscreenchange
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Element"].prototype, "onfullscreenerror", {
  configurable: true,
  enumerable: true,
  get: {
    onfullscreenerror() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Element"].prototype, "Element", "onfullscreenerror_get", arguments);
    }
  }.onfullscreenerror,
  set: {
    onfullscreenerror() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Element"].prototype, "Element", "onfullscreenerror_set", arguments);
    }
  }.onfullscreenerror
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Element"].prototype, "onwebkitfullscreenchange", {
  configurable: true,
  enumerable: true,
  get: {
    onwebkitfullscreenchange() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Element"].prototype, "Element", "onwebkitfullscreenchange_get", arguments);
    }
  }.onwebkitfullscreenchange,
  set: {
    onwebkitfullscreenchange() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Element"].prototype, "Element", "onwebkitfullscreenchange_set", arguments);
    }
  }.onwebkitfullscreenchange
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Element"].prototype, "onwebkitfullscreenerror", {
  configurable: true,
  enumerable: true,
  get: {
    onwebkitfullscreenerror() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Element"].prototype, "Element", "onwebkitfullscreenerror_get", arguments);
    }
  }.onwebkitfullscreenerror,
  set: {
    onwebkitfullscreenerror() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Element"].prototype, "Element", "onwebkitfullscreenerror_set", arguments);
    }
  }.onwebkitfullscreenerror
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Element"].prototype, "role", {
  configurable: true,
  enumerable: true,
  get: {
    role() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Element"].prototype, "Element", "role_get", arguments);
    }
  }.role,
  set: {
    role() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Element"].prototype, "Element", "role_set", arguments);
    }
  }.role
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Element"].prototype, "ariaAtomic", {
  configurable: true,
  enumerable: true,
  get: {
    ariaAtomic() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Element"].prototype, "Element", "ariaAtomic_get", arguments);
    }
  }.ariaAtomic,
  set: {
    ariaAtomic() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Element"].prototype, "Element", "ariaAtomic_set", arguments);
    }
  }.ariaAtomic
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Element"].prototype, "ariaAutoComplete", {
  configurable: true,
  enumerable: true,
  get: {
    ariaAutoComplete() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Element"].prototype, "Element", "ariaAutoComplete_get", arguments);
    }
  }.ariaAutoComplete,
  set: {
    ariaAutoComplete() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Element"].prototype, "Element", "ariaAutoComplete_set", arguments);
    }
  }.ariaAutoComplete
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Element"].prototype, "ariaBusy", {
  configurable: true,
  enumerable: true,
  get: {
    ariaBusy() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Element"].prototype, "Element", "ariaBusy_get", arguments);
    }
  }.ariaBusy,
  set: {
    ariaBusy() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Element"].prototype, "Element", "ariaBusy_set", arguments);
    }
  }.ariaBusy
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Element"].prototype, "ariaBrailleLabel", {
  configurable: true,
  enumerable: true,
  get: {
    ariaBrailleLabel() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Element"].prototype, "Element", "ariaBrailleLabel_get", arguments);
    }
  }.ariaBrailleLabel,
  set: {
    ariaBrailleLabel() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Element"].prototype, "Element", "ariaBrailleLabel_set", arguments);
    }
  }.ariaBrailleLabel
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Element"].prototype, "ariaBrailleRoleDescription", {
  configurable: true,
  enumerable: true,
  get: {
    ariaBrailleRoleDescription() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Element"].prototype, "Element", "ariaBrailleRoleDescription_get", arguments);
    }
  }.ariaBrailleRoleDescription,
  set: {
    ariaBrailleRoleDescription() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Element"].prototype, "Element", "ariaBrailleRoleDescription_set", arguments);
    }
  }.ariaBrailleRoleDescription
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Element"].prototype, "ariaChecked", {
  configurable: true,
  enumerable: true,
  get: {
    ariaChecked() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Element"].prototype, "Element", "ariaChecked_get", arguments);
    }
  }.ariaChecked,
  set: {
    ariaChecked() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Element"].prototype, "Element", "ariaChecked_set", arguments);
    }
  }.ariaChecked
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Element"].prototype, "ariaColCount", {
  configurable: true,
  enumerable: true,
  get: {
    ariaColCount() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Element"].prototype, "Element", "ariaColCount_get", arguments);
    }
  }.ariaColCount,
  set: {
    ariaColCount() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Element"].prototype, "Element", "ariaColCount_set", arguments);
    }
  }.ariaColCount
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Element"].prototype, "ariaColIndex", {
  configurable: true,
  enumerable: true,
  get: {
    ariaColIndex() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Element"].prototype, "Element", "ariaColIndex_get", arguments);
    }
  }.ariaColIndex,
  set: {
    ariaColIndex() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Element"].prototype, "Element", "ariaColIndex_set", arguments);
    }
  }.ariaColIndex
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Element"].prototype, "ariaColSpan", {
  configurable: true,
  enumerable: true,
  get: {
    ariaColSpan() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Element"].prototype, "Element", "ariaColSpan_get", arguments);
    }
  }.ariaColSpan,
  set: {
    ariaColSpan() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Element"].prototype, "Element", "ariaColSpan_set", arguments);
    }
  }.ariaColSpan
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Element"].prototype, "ariaCurrent", {
  configurable: true,
  enumerable: true,
  get: {
    ariaCurrent() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Element"].prototype, "Element", "ariaCurrent_get", arguments);
    }
  }.ariaCurrent,
  set: {
    ariaCurrent() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Element"].prototype, "Element", "ariaCurrent_set", arguments);
    }
  }.ariaCurrent
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Element"].prototype, "ariaDescription", {
  configurable: true,
  enumerable: true,
  get: {
    ariaDescription() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Element"].prototype, "Element", "ariaDescription_get", arguments);
    }
  }.ariaDescription,
  set: {
    ariaDescription() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Element"].prototype, "Element", "ariaDescription_set", arguments);
    }
  }.ariaDescription
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Element"].prototype, "ariaDisabled", {
  configurable: true,
  enumerable: true,
  get: {
    ariaDisabled() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Element"].prototype, "Element", "ariaDisabled_get", arguments);
    }
  }.ariaDisabled,
  set: {
    ariaDisabled() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Element"].prototype, "Element", "ariaDisabled_set", arguments);
    }
  }.ariaDisabled
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Element"].prototype, "ariaExpanded", {
  configurable: true,
  enumerable: true,
  get: {
    ariaExpanded() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Element"].prototype, "Element", "ariaExpanded_get", arguments);
    }
  }.ariaExpanded,
  set: {
    ariaExpanded() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Element"].prototype, "Element", "ariaExpanded_set", arguments);
    }
  }.ariaExpanded
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Element"].prototype, "ariaHasPopup", {
  configurable: true,
  enumerable: true,
  get: {
    ariaHasPopup() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Element"].prototype, "Element", "ariaHasPopup_get", arguments);
    }
  }.ariaHasPopup,
  set: {
    ariaHasPopup() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Element"].prototype, "Element", "ariaHasPopup_set", arguments);
    }
  }.ariaHasPopup
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Element"].prototype, "ariaHidden", {
  configurable: true,
  enumerable: true,
  get: {
    ariaHidden() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Element"].prototype, "Element", "ariaHidden_get", arguments);
    }
  }.ariaHidden,
  set: {
    ariaHidden() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Element"].prototype, "Element", "ariaHidden_set", arguments);
    }
  }.ariaHidden
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Element"].prototype, "ariaInvalid", {
  configurable: true,
  enumerable: true,
  get: {
    ariaInvalid() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Element"].prototype, "Element", "ariaInvalid_get", arguments);
    }
  }.ariaInvalid,
  set: {
    ariaInvalid() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Element"].prototype, "Element", "ariaInvalid_set", arguments);
    }
  }.ariaInvalid
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Element"].prototype, "ariaKeyShortcuts", {
  configurable: true,
  enumerable: true,
  get: {
    ariaKeyShortcuts() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Element"].prototype, "Element", "ariaKeyShortcuts_get", arguments);
    }
  }.ariaKeyShortcuts,
  set: {
    ariaKeyShortcuts() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Element"].prototype, "Element", "ariaKeyShortcuts_set", arguments);
    }
  }.ariaKeyShortcuts
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Element"].prototype, "ariaLabel", {
  configurable: true,
  enumerable: true,
  get: {
    ariaLabel() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Element"].prototype, "Element", "ariaLabel_get", arguments);
    }
  }.ariaLabel,
  set: {
    ariaLabel() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Element"].prototype, "Element", "ariaLabel_set", arguments);
    }
  }.ariaLabel
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Element"].prototype, "ariaLevel", {
  configurable: true,
  enumerable: true,
  get: {
    ariaLevel() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Element"].prototype, "Element", "ariaLevel_get", arguments);
    }
  }.ariaLevel,
  set: {
    ariaLevel() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Element"].prototype, "Element", "ariaLevel_set", arguments);
    }
  }.ariaLevel
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Element"].prototype, "ariaLive", {
  configurable: true,
  enumerable: true,
  get: {
    ariaLive() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Element"].prototype, "Element", "ariaLive_get", arguments);
    }
  }.ariaLive,
  set: {
    ariaLive() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Element"].prototype, "Element", "ariaLive_set", arguments);
    }
  }.ariaLive
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Element"].prototype, "ariaModal", {
  configurable: true,
  enumerable: true,
  get: {
    ariaModal() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Element"].prototype, "Element", "ariaModal_get", arguments);
    }
  }.ariaModal,
  set: {
    ariaModal() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Element"].prototype, "Element", "ariaModal_set", arguments);
    }
  }.ariaModal
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Element"].prototype, "ariaMultiLine", {
  configurable: true,
  enumerable: true,
  get: {
    ariaMultiLine() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Element"].prototype, "Element", "ariaMultiLine_get", arguments);
    }
  }.ariaMultiLine,
  set: {
    ariaMultiLine() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Element"].prototype, "Element", "ariaMultiLine_set", arguments);
    }
  }.ariaMultiLine
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Element"].prototype, "ariaMultiSelectable", {
  configurable: true,
  enumerable: true,
  get: {
    ariaMultiSelectable() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Element"].prototype, "Element", "ariaMultiSelectable_get", arguments);
    }
  }.ariaMultiSelectable,
  set: {
    ariaMultiSelectable() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Element"].prototype, "Element", "ariaMultiSelectable_set", arguments);
    }
  }.ariaMultiSelectable
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Element"].prototype, "ariaOrientation", {
  configurable: true,
  enumerable: true,
  get: {
    ariaOrientation() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Element"].prototype, "Element", "ariaOrientation_get", arguments);
    }
  }.ariaOrientation,
  set: {
    ariaOrientation() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Element"].prototype, "Element", "ariaOrientation_set", arguments);
    }
  }.ariaOrientation
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Element"].prototype, "ariaPlaceholder", {
  configurable: true,
  enumerable: true,
  get: {
    ariaPlaceholder() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Element"].prototype, "Element", "ariaPlaceholder_get", arguments);
    }
  }.ariaPlaceholder,
  set: {
    ariaPlaceholder() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Element"].prototype, "Element", "ariaPlaceholder_set", arguments);
    }
  }.ariaPlaceholder
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Element"].prototype, "ariaPosInSet", {
  configurable: true,
  enumerable: true,
  get: {
    ariaPosInSet() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Element"].prototype, "Element", "ariaPosInSet_get", arguments);
    }
  }.ariaPosInSet,
  set: {
    ariaPosInSet() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Element"].prototype, "Element", "ariaPosInSet_set", arguments);
    }
  }.ariaPosInSet
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Element"].prototype, "ariaPressed", {
  configurable: true,
  enumerable: true,
  get: {
    ariaPressed() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Element"].prototype, "Element", "ariaPressed_get", arguments);
    }
  }.ariaPressed,
  set: {
    ariaPressed() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Element"].prototype, "Element", "ariaPressed_set", arguments);
    }
  }.ariaPressed
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Element"].prototype, "ariaReadOnly", {
  configurable: true,
  enumerable: true,
  get: {
    ariaReadOnly() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Element"].prototype, "Element", "ariaReadOnly_get", arguments);
    }
  }.ariaReadOnly,
  set: {
    ariaReadOnly() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Element"].prototype, "Element", "ariaReadOnly_set", arguments);
    }
  }.ariaReadOnly
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Element"].prototype, "ariaRelevant", {
  configurable: true,
  enumerable: true,
  get: {
    ariaRelevant() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Element"].prototype, "Element", "ariaRelevant_get", arguments);
    }
  }.ariaRelevant,
  set: {
    ariaRelevant() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Element"].prototype, "Element", "ariaRelevant_set", arguments);
    }
  }.ariaRelevant
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Element"].prototype, "ariaRequired", {
  configurable: true,
  enumerable: true,
  get: {
    ariaRequired() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Element"].prototype, "Element", "ariaRequired_get", arguments);
    }
  }.ariaRequired,
  set: {
    ariaRequired() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Element"].prototype, "Element", "ariaRequired_set", arguments);
    }
  }.ariaRequired
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Element"].prototype, "ariaRoleDescription", {
  configurable: true,
  enumerable: true,
  get: {
    ariaRoleDescription() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Element"].prototype, "Element", "ariaRoleDescription_get", arguments);
    }
  }.ariaRoleDescription,
  set: {
    ariaRoleDescription() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Element"].prototype, "Element", "ariaRoleDescription_set", arguments);
    }
  }.ariaRoleDescription
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Element"].prototype, "ariaRowCount", {
  configurable: true,
  enumerable: true,
  get: {
    ariaRowCount() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Element"].prototype, "Element", "ariaRowCount_get", arguments);
    }
  }.ariaRowCount,
  set: {
    ariaRowCount() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Element"].prototype, "Element", "ariaRowCount_set", arguments);
    }
  }.ariaRowCount
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Element"].prototype, "ariaRowIndex", {
  configurable: true,
  enumerable: true,
  get: {
    ariaRowIndex() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Element"].prototype, "Element", "ariaRowIndex_get", arguments);
    }
  }.ariaRowIndex,
  set: {
    ariaRowIndex() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Element"].prototype, "Element", "ariaRowIndex_set", arguments);
    }
  }.ariaRowIndex
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Element"].prototype, "ariaRowSpan", {
  configurable: true,
  enumerable: true,
  get: {
    ariaRowSpan() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Element"].prototype, "Element", "ariaRowSpan_get", arguments);
    }
  }.ariaRowSpan,
  set: {
    ariaRowSpan() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Element"].prototype, "Element", "ariaRowSpan_set", arguments);
    }
  }.ariaRowSpan
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Element"].prototype, "ariaSelected", {
  configurable: true,
  enumerable: true,
  get: {
    ariaSelected() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Element"].prototype, "Element", "ariaSelected_get", arguments);
    }
  }.ariaSelected,
  set: {
    ariaSelected() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Element"].prototype, "Element", "ariaSelected_set", arguments);
    }
  }.ariaSelected
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Element"].prototype, "ariaSetSize", {
  configurable: true,
  enumerable: true,
  get: {
    ariaSetSize() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Element"].prototype, "Element", "ariaSetSize_get", arguments);
    }
  }.ariaSetSize,
  set: {
    ariaSetSize() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Element"].prototype, "Element", "ariaSetSize_set", arguments);
    }
  }.ariaSetSize
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Element"].prototype, "ariaSort", {
  configurable: true,
  enumerable: true,
  get: {
    ariaSort() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Element"].prototype, "Element", "ariaSort_get", arguments);
    }
  }.ariaSort,
  set: {
    ariaSort() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Element"].prototype, "Element", "ariaSort_set", arguments);
    }
  }.ariaSort
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Element"].prototype, "ariaValueMax", {
  configurable: true,
  enumerable: true,
  get: {
    ariaValueMax() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Element"].prototype, "Element", "ariaValueMax_get", arguments);
    }
  }.ariaValueMax,
  set: {
    ariaValueMax() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Element"].prototype, "Element", "ariaValueMax_set", arguments);
    }
  }.ariaValueMax
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Element"].prototype, "ariaValueMin", {
  configurable: true,
  enumerable: true,
  get: {
    ariaValueMin() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Element"].prototype, "Element", "ariaValueMin_get", arguments);
    }
  }.ariaValueMin,
  set: {
    ariaValueMin() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Element"].prototype, "Element", "ariaValueMin_set", arguments);
    }
  }.ariaValueMin
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Element"].prototype, "ariaValueNow", {
  configurable: true,
  enumerable: true,
  get: {
    ariaValueNow() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Element"].prototype, "Element", "ariaValueNow_get", arguments);
    }
  }.ariaValueNow,
  set: {
    ariaValueNow() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Element"].prototype, "Element", "ariaValueNow_set", arguments);
    }
  }.ariaValueNow
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Element"].prototype, "ariaValueText", {
  configurable: true,
  enumerable: true,
  get: {
    ariaValueText() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Element"].prototype, "Element", "ariaValueText_get", arguments);
    }
  }.ariaValueText,
  set: {
    ariaValueText() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Element"].prototype, "Element", "ariaValueText_set", arguments);
    }
  }.ariaValueText
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Element"].prototype, "children", {
  configurable: true,
  enumerable: true,
  get: {
    children() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Element"].prototype, "Element", "children_get", arguments);
    }
  }.children,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Element"].prototype, "firstElementChild", {
  configurable: true,
  enumerable: true,
  get: {
    firstElementChild() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Element"].prototype, "Element", "firstElementChild_get", arguments);
    }
  }.firstElementChild,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Element"].prototype, "lastElementChild", {
  configurable: true,
  enumerable: true,
  get: {
    lastElementChild() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Element"].prototype, "Element", "lastElementChild_get", arguments);
    }
  }.lastElementChild,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Element"].prototype, "childElementCount", {
  configurable: true,
  enumerable: true,
  get: {
    childElementCount() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Element"].prototype, "Element", "childElementCount_get", arguments);
    }
  }.childElementCount,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Element"].prototype, "previousElementSibling", {
  configurable: true,
  enumerable: true,
  get: {
    previousElementSibling() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Element"].prototype, "Element", "previousElementSibling_get", arguments);
    }
  }.previousElementSibling,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Element"].prototype, "nextElementSibling", {
  configurable: true,
  enumerable: true,
  get: {
    nextElementSibling() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Element"].prototype, "Element", "nextElementSibling_get", arguments);
    }
  }.nextElementSibling,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Element"].prototype, "after", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    after() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Element"].prototype, "Element", "after", arguments);
    }
  }.after
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Element"].prototype, "animate", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    animate() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Element"].prototype, "Element", "animate", arguments);
    }
  }.animate
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Element"].prototype, "append", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    append() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Element"].prototype, "Element", "append", arguments);
    }
  }.append
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Element"].prototype, "attachShadow", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    attachShadow() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Element"].prototype, "Element", "attachShadow", arguments);
    }
  }.attachShadow
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Element"].prototype, "before", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    before() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Element"].prototype, "Element", "before", arguments);
    }
  }.before
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Element"].prototype, "closest", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    closest() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Element"].prototype, "Element", "closest", arguments);
    }
  }.closest
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Element"].prototype, "computedStyleMap", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    computedStyleMap() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Element"].prototype, "Element", "computedStyleMap", arguments);
    }
  }.computedStyleMap
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Element"].prototype, "getAttribute", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    getAttribute() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Element"].prototype, "Element", "getAttribute", arguments);
    }
  }.getAttribute
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Element"].prototype, "getAttributeNS", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    getAttributeNS() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Element"].prototype, "Element", "getAttributeNS", arguments);
    }
  }.getAttributeNS
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Element"].prototype, "getAttributeNames", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    getAttributeNames() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Element"].prototype, "Element", "getAttributeNames", arguments);
    }
  }.getAttributeNames
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Element"].prototype, "getAttributeNode", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    getAttributeNode() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Element"].prototype, "Element", "getAttributeNode", arguments);
    }
  }.getAttributeNode
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Element"].prototype, "getAttributeNodeNS", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    getAttributeNodeNS() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Element"].prototype, "Element", "getAttributeNodeNS", arguments);
    }
  }.getAttributeNodeNS
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Element"].prototype, "getBoundingClientRect", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    getBoundingClientRect() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Element"].prototype, "Element", "getBoundingClientRect", arguments);
    }
  }.getBoundingClientRect
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Element"].prototype, "getClientRects", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    getClientRects() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Element"].prototype, "Element", "getClientRects", arguments);
    }
  }.getClientRects
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Element"].prototype, "getElementsByClassName", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    getElementsByClassName() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Element"].prototype, "Element", "getElementsByClassName", arguments);
    }
  }.getElementsByClassName
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Element"].prototype, "getElementsByTagName", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    getElementsByTagName() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Element"].prototype, "Element", "getElementsByTagName", arguments);
    }
  }.getElementsByTagName
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Element"].prototype, "getElementsByTagNameNS", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    getElementsByTagNameNS() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Element"].prototype, "Element", "getElementsByTagNameNS", arguments);
    }
  }.getElementsByTagNameNS
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Element"].prototype, "getInnerHTML", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    getInnerHTML() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Element"].prototype, "Element", "getInnerHTML", arguments);
    }
  }.getInnerHTML
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Element"].prototype, "hasAttribute", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    hasAttribute() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Element"].prototype, "Element", "hasAttribute", arguments);
    }
  }.hasAttribute
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Element"].prototype, "hasAttributeNS", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    hasAttributeNS() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Element"].prototype, "Element", "hasAttributeNS", arguments);
    }
  }.hasAttributeNS
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Element"].prototype, "hasAttributes", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    hasAttributes() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Element"].prototype, "Element", "hasAttributes", arguments);
    }
  }.hasAttributes
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Element"].prototype, "hasPointerCapture", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    hasPointerCapture() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Element"].prototype, "Element", "hasPointerCapture", arguments);
    }
  }.hasPointerCapture
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Element"].prototype, "insertAdjacentElement", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    insertAdjacentElement() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Element"].prototype, "Element", "insertAdjacentElement", arguments);
    }
  }.insertAdjacentElement
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Element"].prototype, "insertAdjacentHTML", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    insertAdjacentHTML() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Element"].prototype, "Element", "insertAdjacentHTML", arguments);
    }
  }.insertAdjacentHTML
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Element"].prototype, "insertAdjacentText", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    insertAdjacentText() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Element"].prototype, "Element", "insertAdjacentText", arguments);
    }
  }.insertAdjacentText
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Element"].prototype, "matches", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    matches() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Element"].prototype, "Element", "matches", arguments);
    }
  }.matches
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Element"].prototype, "prepend", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    prepend() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Element"].prototype, "Element", "prepend", arguments);
    }
  }.prepend
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Element"].prototype, "querySelector", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    querySelector() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Element"].prototype, "Element", "querySelector", arguments);
    }
  }.querySelector
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Element"].prototype, "querySelectorAll", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    querySelectorAll() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Element"].prototype, "Element", "querySelectorAll", arguments);
    }
  }.querySelectorAll
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Element"].prototype, "releasePointerCapture", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    releasePointerCapture() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Element"].prototype, "Element", "releasePointerCapture", arguments);
    }
  }.releasePointerCapture
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Element"].prototype, "remove", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    remove() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Element"].prototype, "Element", "remove", arguments);
    }
  }.remove
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Element"].prototype, "removeAttribute", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    removeAttribute() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Element"].prototype, "Element", "removeAttribute", arguments);
    }
  }.removeAttribute
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Element"].prototype, "removeAttributeNS", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    removeAttributeNS() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Element"].prototype, "Element", "removeAttributeNS", arguments);
    }
  }.removeAttributeNS
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Element"].prototype, "removeAttributeNode", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    removeAttributeNode() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Element"].prototype, "Element", "removeAttributeNode", arguments);
    }
  }.removeAttributeNode
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Element"].prototype, "replaceChildren", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    replaceChildren() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Element"].prototype, "Element", "replaceChildren", arguments);
    }
  }.replaceChildren
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Element"].prototype, "replaceWith", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    replaceWith() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Element"].prototype, "Element", "replaceWith", arguments);
    }
  }.replaceWith
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Element"].prototype, "requestFullscreen", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    requestFullscreen() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Element"].prototype, "Element", "requestFullscreen", arguments);
    }
  }.requestFullscreen
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Element"].prototype, "requestPointerLock", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    requestPointerLock() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Element"].prototype, "Element", "requestPointerLock", arguments);
    }
  }.requestPointerLock
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Element"].prototype, "scroll", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    scroll() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Element"].prototype, "Element", "scroll", arguments);
    }
  }.scroll
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Element"].prototype, "scrollBy", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    scrollBy() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Element"].prototype, "Element", "scrollBy", arguments);
    }
  }.scrollBy
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Element"].prototype, "scrollIntoView", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    scrollIntoView() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Element"].prototype, "Element", "scrollIntoView", arguments);
    }
  }.scrollIntoView
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Element"].prototype, "scrollIntoViewIfNeeded", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    scrollIntoViewIfNeeded() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Element"].prototype, "Element", "scrollIntoViewIfNeeded", arguments);
    }
  }.scrollIntoViewIfNeeded
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Element"].prototype, "scrollTo", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    scrollTo() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Element"].prototype, "Element", "scrollTo", arguments);
    }
  }.scrollTo
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Element"].prototype, "setAttribute", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    setAttribute() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Element"].prototype, "Element", "setAttribute", arguments);
    }
  }.setAttribute
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Element"].prototype, "setAttributeNS", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    setAttributeNS() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Element"].prototype, "Element", "setAttributeNS", arguments);
    }
  }.setAttributeNS
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Element"].prototype, "setAttributeNode", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    setAttributeNode() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Element"].prototype, "Element", "setAttributeNode", arguments);
    }
  }.setAttributeNode
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Element"].prototype, "setAttributeNodeNS", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    setAttributeNodeNS() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Element"].prototype, "Element", "setAttributeNodeNS", arguments);
    }
  }.setAttributeNodeNS
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Element"].prototype, "setPointerCapture", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    setPointerCapture() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Element"].prototype, "Element", "setPointerCapture", arguments);
    }
  }.setPointerCapture
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Element"].prototype, "toggleAttribute", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    toggleAttribute() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Element"].prototype, "Element", "toggleAttribute", arguments);
    }
  }.toggleAttribute
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Element"].prototype, "webkitMatchesSelector", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    webkitMatchesSelector() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Element"].prototype, "Element", "webkitMatchesSelector", arguments);
    }
  }.webkitMatchesSelector
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Element"].prototype, "webkitRequestFullScreen", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    webkitRequestFullScreen() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Element"].prototype, "Element", "webkitRequestFullScreen", arguments);
    }
  }.webkitRequestFullScreen
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Element"].prototype, "webkitRequestFullscreen", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    webkitRequestFullscreen() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Element"].prototype, "Element", "webkitRequestFullscreen", arguments);
    }
  }.webkitRequestFullscreen
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Element"].prototype, "checkVisibility", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    checkVisibility() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Element"].prototype, "Element", "checkVisibility", arguments);
    }
  }.checkVisibility
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Element"].prototype, "getAnimations", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    getAnimations() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Element"].prototype, "Element", "getAnimations", arguments);
    }
  }.getAnimations
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Element"].prototype, "setHTML", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    setHTML() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Element"].prototype, "Element", "setHTML", arguments);
    }
  }.setHTML
});