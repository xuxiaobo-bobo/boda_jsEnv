// HTMLObjectElement对象

bodaEnv.memory.globlProtoObj["HTMLObjectElement"] = function HTMLObjectElement() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('HTMLObjectElement 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["HTMLObjectElement"], "HTMLObjectElement");
bodaEnv.memory.globlProtoObj["HTMLObjectElement"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["HTMLElement"].prototype;
bodaEnv.memory.globlProtoObj["HTMLObjectElement"].__proto__ = bodaEnv.memory.globlProtoObj["HTMLElement"];
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLObjectElement"].prototype, "data", {
  configurable: true,
  enumerable: true,
  get: {
    data() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLObjectElement"].prototype, "HTMLObjectElement", "data_get", arguments);
    }
  }.data,
  set: {
    data() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLObjectElement"].prototype, "HTMLObjectElement", "data_set", arguments);
    }
  }.data
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLObjectElement"].prototype, "type", {
  configurable: true,
  enumerable: true,
  get: {
    type() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLObjectElement"].prototype, "HTMLObjectElement", "type_get", arguments);
    }
  }.type,
  set: {
    type() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLObjectElement"].prototype, "HTMLObjectElement", "type_set", arguments);
    }
  }.type
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLObjectElement"].prototype, "name", {
  configurable: true,
  enumerable: true,
  get: {
    name() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLObjectElement"].prototype, "HTMLObjectElement", "name_get", arguments);
    }
  }.name,
  set: {
    name() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLObjectElement"].prototype, "HTMLObjectElement", "name_set", arguments);
    }
  }.name
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLObjectElement"].prototype, "useMap", {
  configurable: true,
  enumerable: true,
  get: {
    useMap() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLObjectElement"].prototype, "HTMLObjectElement", "useMap_get", arguments);
    }
  }.useMap,
  set: {
    useMap() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLObjectElement"].prototype, "HTMLObjectElement", "useMap_set", arguments);
    }
  }.useMap
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLObjectElement"].prototype, "form", {
  configurable: true,
  enumerable: true,
  get: {
    form() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLObjectElement"].prototype, "HTMLObjectElement", "form_get", arguments);
    }
  }.form,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLObjectElement"].prototype, "width", {
  configurable: true,
  enumerable: true,
  get: {
    width() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLObjectElement"].prototype, "HTMLObjectElement", "width_get", arguments);
    }
  }.width,
  set: {
    width() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLObjectElement"].prototype, "HTMLObjectElement", "width_set", arguments);
    }
  }.width
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLObjectElement"].prototype, "height", {
  configurable: true,
  enumerable: true,
  get: {
    height() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLObjectElement"].prototype, "HTMLObjectElement", "height_get", arguments);
    }
  }.height,
  set: {
    height() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLObjectElement"].prototype, "HTMLObjectElement", "height_set", arguments);
    }
  }.height
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLObjectElement"].prototype, "contentDocument", {
  configurable: true,
  enumerable: true,
  get: {
    contentDocument() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLObjectElement"].prototype, "HTMLObjectElement", "contentDocument_get", arguments);
    }
  }.contentDocument,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLObjectElement"].prototype, "contentWindow", {
  configurable: true,
  enumerable: true,
  get: {
    contentWindow() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLObjectElement"].prototype, "HTMLObjectElement", "contentWindow_get", arguments);
    }
  }.contentWindow,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLObjectElement"].prototype, "willValidate", {
  configurable: true,
  enumerable: true,
  get: {
    willValidate() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLObjectElement"].prototype, "HTMLObjectElement", "willValidate_get", arguments);
    }
  }.willValidate,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLObjectElement"].prototype, "validity", {
  configurable: true,
  enumerable: true,
  get: {
    validity() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLObjectElement"].prototype, "HTMLObjectElement", "validity_get", arguments);
    }
  }.validity,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLObjectElement"].prototype, "validationMessage", {
  configurable: true,
  enumerable: true,
  get: {
    validationMessage() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLObjectElement"].prototype, "HTMLObjectElement", "validationMessage_get", arguments);
    }
  }.validationMessage,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLObjectElement"].prototype, "align", {
  configurable: true,
  enumerable: true,
  get: {
    align() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLObjectElement"].prototype, "HTMLObjectElement", "align_get", arguments);
    }
  }.align,
  set: {
    align() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLObjectElement"].prototype, "HTMLObjectElement", "align_set", arguments);
    }
  }.align
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLObjectElement"].prototype, "archive", {
  configurable: true,
  enumerable: true,
  get: {
    archive() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLObjectElement"].prototype, "HTMLObjectElement", "archive_get", arguments);
    }
  }.archive,
  set: {
    archive() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLObjectElement"].prototype, "HTMLObjectElement", "archive_set", arguments);
    }
  }.archive
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLObjectElement"].prototype, "code", {
  configurable: true,
  enumerable: true,
  get: {
    code() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLObjectElement"].prototype, "HTMLObjectElement", "code_get", arguments);
    }
  }.code,
  set: {
    code() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLObjectElement"].prototype, "HTMLObjectElement", "code_set", arguments);
    }
  }.code
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLObjectElement"].prototype, "declare", {
  configurable: true,
  enumerable: true,
  get: {
    declare() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLObjectElement"].prototype, "HTMLObjectElement", "declare_get", arguments);
    }
  }.declare,
  set: {
    declare() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLObjectElement"].prototype, "HTMLObjectElement", "declare_set", arguments);
    }
  }.declare
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLObjectElement"].prototype, "hspace", {
  configurable: true,
  enumerable: true,
  get: {
    hspace() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLObjectElement"].prototype, "HTMLObjectElement", "hspace_get", arguments);
    }
  }.hspace,
  set: {
    hspace() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLObjectElement"].prototype, "HTMLObjectElement", "hspace_set", arguments);
    }
  }.hspace
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLObjectElement"].prototype, "standby", {
  configurable: true,
  enumerable: true,
  get: {
    standby() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLObjectElement"].prototype, "HTMLObjectElement", "standby_get", arguments);
    }
  }.standby,
  set: {
    standby() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLObjectElement"].prototype, "HTMLObjectElement", "standby_set", arguments);
    }
  }.standby
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLObjectElement"].prototype, "vspace", {
  configurable: true,
  enumerable: true,
  get: {
    vspace() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLObjectElement"].prototype, "HTMLObjectElement", "vspace_get", arguments);
    }
  }.vspace,
  set: {
    vspace() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLObjectElement"].prototype, "HTMLObjectElement", "vspace_set", arguments);
    }
  }.vspace
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLObjectElement"].prototype, "codeBase", {
  configurable: true,
  enumerable: true,
  get: {
    codeBase() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLObjectElement"].prototype, "HTMLObjectElement", "codeBase_get", arguments);
    }
  }.codeBase,
  set: {
    codeBase() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLObjectElement"].prototype, "HTMLObjectElement", "codeBase_set", arguments);
    }
  }.codeBase
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLObjectElement"].prototype, "codeType", {
  configurable: true,
  enumerable: true,
  get: {
    codeType() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLObjectElement"].prototype, "HTMLObjectElement", "codeType_get", arguments);
    }
  }.codeType,
  set: {
    codeType() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLObjectElement"].prototype, "HTMLObjectElement", "codeType_set", arguments);
    }
  }.codeType
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLObjectElement"].prototype, "border", {
  configurable: true,
  enumerable: true,
  get: {
    border() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLObjectElement"].prototype, "HTMLObjectElement", "border_get", arguments);
    }
  }.border,
  set: {
    border() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLObjectElement"].prototype, "HTMLObjectElement", "border_set", arguments);
    }
  }.border
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLObjectElement"].prototype, "checkValidity", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    checkValidity() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLObjectElement"].prototype, "HTMLObjectElement", "checkValidity", arguments);
    }
  }.checkValidity
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLObjectElement"].prototype, "getSVGDocument", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    getSVGDocument() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLObjectElement"].prototype, "HTMLObjectElement", "getSVGDocument", arguments);
    }
  }.getSVGDocument
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLObjectElement"].prototype, "reportValidity", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    reportValidity() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLObjectElement"].prototype, "HTMLObjectElement", "reportValidity", arguments);
    }
  }.reportValidity
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLObjectElement"].prototype, "setCustomValidity", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    setCustomValidity() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLObjectElement"].prototype, "HTMLObjectElement", "setCustomValidity", arguments);
    }
  }.setCustomValidity
});