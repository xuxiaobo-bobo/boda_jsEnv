// HTMLElement对象

bodaEnv.memory.globlProtoObj["HTMLElement"] = function HTMLElement() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('HTMLElement 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["HTMLElement"], "HTMLElement");
bodaEnv.memory.globlProtoObj["HTMLElement"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["Element"].prototype;
bodaEnv.memory.globlProtoObj["HTMLElement"].__proto__ = bodaEnv.memory.globlProtoObj["Element"];
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "title", {
  configurable: true,
  enumerable: true,
  get: {
    title() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "HTMLElement", "title_get", arguments);
    }
  }.title,
  set: {
    title() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "HTMLElement", "title_set", arguments);
    }
  }.title
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "lang", {
  configurable: true,
  enumerable: true,
  get: {
    lang() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "HTMLElement", "lang_get", arguments);
    }
  }.lang,
  set: {
    lang() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "HTMLElement", "lang_set", arguments);
    }
  }.lang
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "translate", {
  configurable: true,
  enumerable: true,
  get: {
    translate() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "HTMLElement", "translate_get", arguments);
    }
  }.translate,
  set: {
    translate() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "HTMLElement", "translate_set", arguments);
    }
  }.translate
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "dir", {
  configurable: true,
  enumerable: true,
  get: {
    dir() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "HTMLElement", "dir_get", arguments);
    }
  }.dir,
  set: {
    dir() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "HTMLElement", "dir_set", arguments);
    }
  }.dir
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "hidden", {
  configurable: true,
  enumerable: true,
  get: {
    hidden() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "HTMLElement", "hidden_get", arguments);
    }
  }.hidden,
  set: {
    hidden() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "HTMLElement", "hidden_set", arguments);
    }
  }.hidden
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "accessKey", {
  configurable: true,
  enumerable: true,
  get: {
    accessKey() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "HTMLElement", "accessKey_get", arguments);
    }
  }.accessKey,
  set: {
    accessKey() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "HTMLElement", "accessKey_set", arguments);
    }
  }.accessKey
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "draggable", {
  configurable: true,
  enumerable: true,
  get: {
    draggable() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "HTMLElement", "draggable_get", arguments);
    }
  }.draggable,
  set: {
    draggable() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "HTMLElement", "draggable_set", arguments);
    }
  }.draggable
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "spellcheck", {
  configurable: true,
  enumerable: true,
  get: {
    spellcheck() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "HTMLElement", "spellcheck_get", arguments);
    }
  }.spellcheck,
  set: {
    spellcheck() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "HTMLElement", "spellcheck_set", arguments);
    }
  }.spellcheck
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "autocapitalize", {
  configurable: true,
  enumerable: true,
  get: {
    autocapitalize() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "HTMLElement", "autocapitalize_get", arguments);
    }
  }.autocapitalize,
  set: {
    autocapitalize() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "HTMLElement", "autocapitalize_set", arguments);
    }
  }.autocapitalize
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "contentEditable", {
  configurable: true,
  enumerable: true,
  get: {
    contentEditable() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "HTMLElement", "contentEditable_get", arguments);
    }
  }.contentEditable,
  set: {
    contentEditable() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "HTMLElement", "contentEditable_set", arguments);
    }
  }.contentEditable
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "enterKeyHint", {
  configurable: true,
  enumerable: true,
  get: {
    enterKeyHint() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "HTMLElement", "enterKeyHint_get", arguments);
    }
  }.enterKeyHint,
  set: {
    enterKeyHint() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "HTMLElement", "enterKeyHint_set", arguments);
    }
  }.enterKeyHint
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "isContentEditable", {
  configurable: true,
  enumerable: true,
  get: {
    isContentEditable() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "HTMLElement", "isContentEditable_get", arguments);
    }
  }.isContentEditable,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "inputMode", {
  configurable: true,
  enumerable: true,
  get: {
    inputMode() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "HTMLElement", "inputMode_get", arguments);
    }
  }.inputMode,
  set: {
    inputMode() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "HTMLElement", "inputMode_set", arguments);
    }
  }.inputMode
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "virtualKeyboardPolicy", {
  configurable: true,
  enumerable: true,
  get: {
    virtualKeyboardPolicy() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "HTMLElement", "virtualKeyboardPolicy_get", arguments);
    }
  }.virtualKeyboardPolicy,
  set: {
    virtualKeyboardPolicy() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "HTMLElement", "virtualKeyboardPolicy_set", arguments);
    }
  }.virtualKeyboardPolicy
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "offsetParent", {
  configurable: true,
  enumerable: true,
  get: {
    offsetParent() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "HTMLElement", "offsetParent_get", arguments);
    }
  }.offsetParent,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "offsetTop", {
  configurable: true,
  enumerable: true,
  get: {
    offsetTop() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "HTMLElement", "offsetTop_get", arguments);
    }
  }.offsetTop,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "offsetLeft", {
  configurable: true,
  enumerable: true,
  get: {
    offsetLeft() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "HTMLElement", "offsetLeft_get", arguments);
    }
  }.offsetLeft,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "offsetWidth", {
  configurable: true,
  enumerable: true,
  get: {
    offsetWidth() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "HTMLElement", "offsetWidth_get", arguments);
    }
  }.offsetWidth,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "offsetHeight", {
  configurable: true,
  enumerable: true,
  get: {
    offsetHeight() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "HTMLElement", "offsetHeight_get", arguments);
    }
  }.offsetHeight,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "innerText", {
  configurable: true,
  enumerable: true,
  get: {
    innerText() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "HTMLElement", "innerText_get", arguments);
    }
  }.innerText,
  set: {
    innerText() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "HTMLElement", "innerText_set", arguments);
    }
  }.innerText
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "outerText", {
  configurable: true,
  enumerable: true,
  get: {
    outerText() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "HTMLElement", "outerText_get", arguments);
    }
  }.outerText,
  set: {
    outerText() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "HTMLElement", "outerText_set", arguments);
    }
  }.outerText
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "onbeforexrselect", {
  configurable: true,
  enumerable: true,
  get: {
    onbeforexrselect() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "HTMLElement", "onbeforexrselect_get", arguments);
    }
  }.onbeforexrselect,
  set: {
    onbeforexrselect() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "HTMLElement", "onbeforexrselect_set", arguments);
    }
  }.onbeforexrselect
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "onabort", {
  configurable: true,
  enumerable: true,
  get: {
    onabort() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "HTMLElement", "onabort_get", arguments);
    }
  }.onabort,
  set: {
    onabort() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "HTMLElement", "onabort_set", arguments);
    }
  }.onabort
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "onbeforeinput", {
  configurable: true,
  enumerable: true,
  get: {
    onbeforeinput() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "HTMLElement", "onbeforeinput_get", arguments);
    }
  }.onbeforeinput,
  set: {
    onbeforeinput() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "HTMLElement", "onbeforeinput_set", arguments);
    }
  }.onbeforeinput
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "onblur", {
  configurable: true,
  enumerable: true,
  get: {
    onblur() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "HTMLElement", "onblur_get", arguments);
    }
  }.onblur,
  set: {
    onblur() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "HTMLElement", "onblur_set", arguments);
    }
  }.onblur
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "oncancel", {
  configurable: true,
  enumerable: true,
  get: {
    oncancel() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "HTMLElement", "oncancel_get", arguments);
    }
  }.oncancel,
  set: {
    oncancel() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "HTMLElement", "oncancel_set", arguments);
    }
  }.oncancel
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "oncanplay", {
  configurable: true,
  enumerable: true,
  get: {
    oncanplay() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "HTMLElement", "oncanplay_get", arguments);
    }
  }.oncanplay,
  set: {
    oncanplay() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "HTMLElement", "oncanplay_set", arguments);
    }
  }.oncanplay
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "oncanplaythrough", {
  configurable: true,
  enumerable: true,
  get: {
    oncanplaythrough() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "HTMLElement", "oncanplaythrough_get", arguments);
    }
  }.oncanplaythrough,
  set: {
    oncanplaythrough() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "HTMLElement", "oncanplaythrough_set", arguments);
    }
  }.oncanplaythrough
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "onchange", {
  configurable: true,
  enumerable: true,
  get: {
    onchange() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "HTMLElement", "onchange_get", arguments);
    }
  }.onchange,
  set: {
    onchange() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "HTMLElement", "onchange_set", arguments);
    }
  }.onchange
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "onclick", {
  configurable: true,
  enumerable: true,
  get: {
    onclick() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "HTMLElement", "onclick_get", arguments);
    }
  }.onclick,
  set: {
    onclick() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "HTMLElement", "onclick_set", arguments);
    }
  }.onclick
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "onclose", {
  configurable: true,
  enumerable: true,
  get: {
    onclose() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "HTMLElement", "onclose_get", arguments);
    }
  }.onclose,
  set: {
    onclose() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "HTMLElement", "onclose_set", arguments);
    }
  }.onclose
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "oncontextlost", {
  configurable: true,
  enumerable: true,
  get: {
    oncontextlost() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "HTMLElement", "oncontextlost_get", arguments);
    }
  }.oncontextlost,
  set: {
    oncontextlost() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "HTMLElement", "oncontextlost_set", arguments);
    }
  }.oncontextlost
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "oncontextmenu", {
  configurable: true,
  enumerable: true,
  get: {
    oncontextmenu() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "HTMLElement", "oncontextmenu_get", arguments);
    }
  }.oncontextmenu,
  set: {
    oncontextmenu() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "HTMLElement", "oncontextmenu_set", arguments);
    }
  }.oncontextmenu
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "oncontextrestored", {
  configurable: true,
  enumerable: true,
  get: {
    oncontextrestored() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "HTMLElement", "oncontextrestored_get", arguments);
    }
  }.oncontextrestored,
  set: {
    oncontextrestored() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "HTMLElement", "oncontextrestored_set", arguments);
    }
  }.oncontextrestored
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "oncuechange", {
  configurable: true,
  enumerable: true,
  get: {
    oncuechange() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "HTMLElement", "oncuechange_get", arguments);
    }
  }.oncuechange,
  set: {
    oncuechange() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "HTMLElement", "oncuechange_set", arguments);
    }
  }.oncuechange
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "ondblclick", {
  configurable: true,
  enumerable: true,
  get: {
    ondblclick() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "HTMLElement", "ondblclick_get", arguments);
    }
  }.ondblclick,
  set: {
    ondblclick() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "HTMLElement", "ondblclick_set", arguments);
    }
  }.ondblclick
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "ondrag", {
  configurable: true,
  enumerable: true,
  get: {
    ondrag() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "HTMLElement", "ondrag_get", arguments);
    }
  }.ondrag,
  set: {
    ondrag() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "HTMLElement", "ondrag_set", arguments);
    }
  }.ondrag
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "ondragend", {
  configurable: true,
  enumerable: true,
  get: {
    ondragend() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "HTMLElement", "ondragend_get", arguments);
    }
  }.ondragend,
  set: {
    ondragend() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "HTMLElement", "ondragend_set", arguments);
    }
  }.ondragend
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "ondragenter", {
  configurable: true,
  enumerable: true,
  get: {
    ondragenter() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "HTMLElement", "ondragenter_get", arguments);
    }
  }.ondragenter,
  set: {
    ondragenter() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "HTMLElement", "ondragenter_set", arguments);
    }
  }.ondragenter
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "ondragleave", {
  configurable: true,
  enumerable: true,
  get: {
    ondragleave() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "HTMLElement", "ondragleave_get", arguments);
    }
  }.ondragleave,
  set: {
    ondragleave() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "HTMLElement", "ondragleave_set", arguments);
    }
  }.ondragleave
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "ondragover", {
  configurable: true,
  enumerable: true,
  get: {
    ondragover() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "HTMLElement", "ondragover_get", arguments);
    }
  }.ondragover,
  set: {
    ondragover() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "HTMLElement", "ondragover_set", arguments);
    }
  }.ondragover
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "ondragstart", {
  configurable: true,
  enumerable: true,
  get: {
    ondragstart() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "HTMLElement", "ondragstart_get", arguments);
    }
  }.ondragstart,
  set: {
    ondragstart() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "HTMLElement", "ondragstart_set", arguments);
    }
  }.ondragstart
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "ondrop", {
  configurable: true,
  enumerable: true,
  get: {
    ondrop() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "HTMLElement", "ondrop_get", arguments);
    }
  }.ondrop,
  set: {
    ondrop() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "HTMLElement", "ondrop_set", arguments);
    }
  }.ondrop
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "ondurationchange", {
  configurable: true,
  enumerable: true,
  get: {
    ondurationchange() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "HTMLElement", "ondurationchange_get", arguments);
    }
  }.ondurationchange,
  set: {
    ondurationchange() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "HTMLElement", "ondurationchange_set", arguments);
    }
  }.ondurationchange
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "onemptied", {
  configurable: true,
  enumerable: true,
  get: {
    onemptied() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "HTMLElement", "onemptied_get", arguments);
    }
  }.onemptied,
  set: {
    onemptied() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "HTMLElement", "onemptied_set", arguments);
    }
  }.onemptied
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "onended", {
  configurable: true,
  enumerable: true,
  get: {
    onended() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "HTMLElement", "onended_get", arguments);
    }
  }.onended,
  set: {
    onended() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "HTMLElement", "onended_set", arguments);
    }
  }.onended
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "onerror", {
  configurable: true,
  enumerable: true,
  get: {
    onerror() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "HTMLElement", "onerror_get", arguments);
    }
  }.onerror,
  set: {
    onerror() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "HTMLElement", "onerror_set", arguments);
    }
  }.onerror
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "onfocus", {
  configurable: true,
  enumerable: true,
  get: {
    onfocus() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "HTMLElement", "onfocus_get", arguments);
    }
  }.onfocus,
  set: {
    onfocus() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "HTMLElement", "onfocus_set", arguments);
    }
  }.onfocus
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "onformdata", {
  configurable: true,
  enumerable: true,
  get: {
    onformdata() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "HTMLElement", "onformdata_get", arguments);
    }
  }.onformdata,
  set: {
    onformdata() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "HTMLElement", "onformdata_set", arguments);
    }
  }.onformdata
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "oninput", {
  configurable: true,
  enumerable: true,
  get: {
    oninput() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "HTMLElement", "oninput_get", arguments);
    }
  }.oninput,
  set: {
    oninput() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "HTMLElement", "oninput_set", arguments);
    }
  }.oninput
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "oninvalid", {
  configurable: true,
  enumerable: true,
  get: {
    oninvalid() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "HTMLElement", "oninvalid_get", arguments);
    }
  }.oninvalid,
  set: {
    oninvalid() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "HTMLElement", "oninvalid_set", arguments);
    }
  }.oninvalid
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "onkeydown", {
  configurable: true,
  enumerable: true,
  get: {
    onkeydown() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "HTMLElement", "onkeydown_get", arguments);
    }
  }.onkeydown,
  set: {
    onkeydown() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "HTMLElement", "onkeydown_set", arguments);
    }
  }.onkeydown
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "onkeypress", {
  configurable: true,
  enumerable: true,
  get: {
    onkeypress() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "HTMLElement", "onkeypress_get", arguments);
    }
  }.onkeypress,
  set: {
    onkeypress() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "HTMLElement", "onkeypress_set", arguments);
    }
  }.onkeypress
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "onkeyup", {
  configurable: true,
  enumerable: true,
  get: {
    onkeyup() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "HTMLElement", "onkeyup_get", arguments);
    }
  }.onkeyup,
  set: {
    onkeyup() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "HTMLElement", "onkeyup_set", arguments);
    }
  }.onkeyup
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "onload", {
  configurable: true,
  enumerable: true,
  get: {
    onload() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "HTMLElement", "onload_get", arguments);
    }
  }.onload,
  set: {
    onload() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "HTMLElement", "onload_set", arguments);
    }
  }.onload
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "onloadeddata", {
  configurable: true,
  enumerable: true,
  get: {
    onloadeddata() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "HTMLElement", "onloadeddata_get", arguments);
    }
  }.onloadeddata,
  set: {
    onloadeddata() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "HTMLElement", "onloadeddata_set", arguments);
    }
  }.onloadeddata
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "onloadedmetadata", {
  configurable: true,
  enumerable: true,
  get: {
    onloadedmetadata() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "HTMLElement", "onloadedmetadata_get", arguments);
    }
  }.onloadedmetadata,
  set: {
    onloadedmetadata() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "HTMLElement", "onloadedmetadata_set", arguments);
    }
  }.onloadedmetadata
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "onloadstart", {
  configurable: true,
  enumerable: true,
  get: {
    onloadstart() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "HTMLElement", "onloadstart_get", arguments);
    }
  }.onloadstart,
  set: {
    onloadstart() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "HTMLElement", "onloadstart_set", arguments);
    }
  }.onloadstart
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "onmousedown", {
  configurable: true,
  enumerable: true,
  get: {
    onmousedown() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "HTMLElement", "onmousedown_get", arguments);
    }
  }.onmousedown,
  set: {
    onmousedown() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "HTMLElement", "onmousedown_set", arguments);
    }
  }.onmousedown
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "onmouseenter", {
  configurable: true,
  enumerable: true,
  get: {
    onmouseenter() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "HTMLElement", "onmouseenter_get", arguments);
    }
  }.onmouseenter,
  set: {
    onmouseenter() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "HTMLElement", "onmouseenter_set", arguments);
    }
  }.onmouseenter
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "onmouseleave", {
  configurable: true,
  enumerable: true,
  get: {
    onmouseleave() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "HTMLElement", "onmouseleave_get", arguments);
    }
  }.onmouseleave,
  set: {
    onmouseleave() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "HTMLElement", "onmouseleave_set", arguments);
    }
  }.onmouseleave
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "onmousemove", {
  configurable: true,
  enumerable: true,
  get: {
    onmousemove() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "HTMLElement", "onmousemove_get", arguments);
    }
  }.onmousemove,
  set: {
    onmousemove() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "HTMLElement", "onmousemove_set", arguments);
    }
  }.onmousemove
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "onmouseout", {
  configurable: true,
  enumerable: true,
  get: {
    onmouseout() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "HTMLElement", "onmouseout_get", arguments);
    }
  }.onmouseout,
  set: {
    onmouseout() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "HTMLElement", "onmouseout_set", arguments);
    }
  }.onmouseout
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "onmouseover", {
  configurable: true,
  enumerable: true,
  get: {
    onmouseover() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "HTMLElement", "onmouseover_get", arguments);
    }
  }.onmouseover,
  set: {
    onmouseover() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "HTMLElement", "onmouseover_set", arguments);
    }
  }.onmouseover
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "onmouseup", {
  configurable: true,
  enumerable: true,
  get: {
    onmouseup() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "HTMLElement", "onmouseup_get", arguments);
    }
  }.onmouseup,
  set: {
    onmouseup() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "HTMLElement", "onmouseup_set", arguments);
    }
  }.onmouseup
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "onmousewheel", {
  configurable: true,
  enumerable: true,
  get: {
    onmousewheel() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "HTMLElement", "onmousewheel_get", arguments);
    }
  }.onmousewheel,
  set: {
    onmousewheel() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "HTMLElement", "onmousewheel_set", arguments);
    }
  }.onmousewheel
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "onpause", {
  configurable: true,
  enumerable: true,
  get: {
    onpause() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "HTMLElement", "onpause_get", arguments);
    }
  }.onpause,
  set: {
    onpause() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "HTMLElement", "onpause_set", arguments);
    }
  }.onpause
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "onplay", {
  configurable: true,
  enumerable: true,
  get: {
    onplay() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "HTMLElement", "onplay_get", arguments);
    }
  }.onplay,
  set: {
    onplay() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "HTMLElement", "onplay_set", arguments);
    }
  }.onplay
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "onplaying", {
  configurable: true,
  enumerable: true,
  get: {
    onplaying() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "HTMLElement", "onplaying_get", arguments);
    }
  }.onplaying,
  set: {
    onplaying() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "HTMLElement", "onplaying_set", arguments);
    }
  }.onplaying
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "onprogress", {
  configurable: true,
  enumerable: true,
  get: {
    onprogress() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "HTMLElement", "onprogress_get", arguments);
    }
  }.onprogress,
  set: {
    onprogress() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "HTMLElement", "onprogress_set", arguments);
    }
  }.onprogress
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "onratechange", {
  configurable: true,
  enumerable: true,
  get: {
    onratechange() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "HTMLElement", "onratechange_get", arguments);
    }
  }.onratechange,
  set: {
    onratechange() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "HTMLElement", "onratechange_set", arguments);
    }
  }.onratechange
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "onreset", {
  configurable: true,
  enumerable: true,
  get: {
    onreset() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "HTMLElement", "onreset_get", arguments);
    }
  }.onreset,
  set: {
    onreset() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "HTMLElement", "onreset_set", arguments);
    }
  }.onreset
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "onresize", {
  configurable: true,
  enumerable: true,
  get: {
    onresize() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "HTMLElement", "onresize_get", arguments);
    }
  }.onresize,
  set: {
    onresize() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "HTMLElement", "onresize_set", arguments);
    }
  }.onresize
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "onscroll", {
  configurable: true,
  enumerable: true,
  get: {
    onscroll() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "HTMLElement", "onscroll_get", arguments);
    }
  }.onscroll,
  set: {
    onscroll() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "HTMLElement", "onscroll_set", arguments);
    }
  }.onscroll
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "onsecuritypolicyviolation", {
  configurable: true,
  enumerable: true,
  get: {
    onsecuritypolicyviolation() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "HTMLElement", "onsecuritypolicyviolation_get", arguments);
    }
  }.onsecuritypolicyviolation,
  set: {
    onsecuritypolicyviolation() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "HTMLElement", "onsecuritypolicyviolation_set", arguments);
    }
  }.onsecuritypolicyviolation
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "onseeked", {
  configurable: true,
  enumerable: true,
  get: {
    onseeked() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "HTMLElement", "onseeked_get", arguments);
    }
  }.onseeked,
  set: {
    onseeked() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "HTMLElement", "onseeked_set", arguments);
    }
  }.onseeked
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "onseeking", {
  configurable: true,
  enumerable: true,
  get: {
    onseeking() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "HTMLElement", "onseeking_get", arguments);
    }
  }.onseeking,
  set: {
    onseeking() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "HTMLElement", "onseeking_set", arguments);
    }
  }.onseeking
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "onselect", {
  configurable: true,
  enumerable: true,
  get: {
    onselect() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "HTMLElement", "onselect_get", arguments);
    }
  }.onselect,
  set: {
    onselect() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "HTMLElement", "onselect_set", arguments);
    }
  }.onselect
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "onslotchange", {
  configurable: true,
  enumerable: true,
  get: {
    onslotchange() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "HTMLElement", "onslotchange_get", arguments);
    }
  }.onslotchange,
  set: {
    onslotchange() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "HTMLElement", "onslotchange_set", arguments);
    }
  }.onslotchange
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "onstalled", {
  configurable: true,
  enumerable: true,
  get: {
    onstalled() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "HTMLElement", "onstalled_get", arguments);
    }
  }.onstalled,
  set: {
    onstalled() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "HTMLElement", "onstalled_set", arguments);
    }
  }.onstalled
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "onsubmit", {
  configurable: true,
  enumerable: true,
  get: {
    onsubmit() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "HTMLElement", "onsubmit_get", arguments);
    }
  }.onsubmit,
  set: {
    onsubmit() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "HTMLElement", "onsubmit_set", arguments);
    }
  }.onsubmit
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "onsuspend", {
  configurable: true,
  enumerable: true,
  get: {
    onsuspend() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "HTMLElement", "onsuspend_get", arguments);
    }
  }.onsuspend,
  set: {
    onsuspend() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "HTMLElement", "onsuspend_set", arguments);
    }
  }.onsuspend
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "ontimeupdate", {
  configurable: true,
  enumerable: true,
  get: {
    ontimeupdate() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "HTMLElement", "ontimeupdate_get", arguments);
    }
  }.ontimeupdate,
  set: {
    ontimeupdate() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "HTMLElement", "ontimeupdate_set", arguments);
    }
  }.ontimeupdate
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "ontoggle", {
  configurable: true,
  enumerable: true,
  get: {
    ontoggle() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "HTMLElement", "ontoggle_get", arguments);
    }
  }.ontoggle,
  set: {
    ontoggle() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "HTMLElement", "ontoggle_set", arguments);
    }
  }.ontoggle
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "onvolumechange", {
  configurable: true,
  enumerable: true,
  get: {
    onvolumechange() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "HTMLElement", "onvolumechange_get", arguments);
    }
  }.onvolumechange,
  set: {
    onvolumechange() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "HTMLElement", "onvolumechange_set", arguments);
    }
  }.onvolumechange
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "onwaiting", {
  configurable: true,
  enumerable: true,
  get: {
    onwaiting() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "HTMLElement", "onwaiting_get", arguments);
    }
  }.onwaiting,
  set: {
    onwaiting() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "HTMLElement", "onwaiting_set", arguments);
    }
  }.onwaiting
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "onwebkitanimationend", {
  configurable: true,
  enumerable: true,
  get: {
    onwebkitanimationend() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "HTMLElement", "onwebkitanimationend_get", arguments);
    }
  }.onwebkitanimationend,
  set: {
    onwebkitanimationend() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "HTMLElement", "onwebkitanimationend_set", arguments);
    }
  }.onwebkitanimationend
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "onwebkitanimationiteration", {
  configurable: true,
  enumerable: true,
  get: {
    onwebkitanimationiteration() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "HTMLElement", "onwebkitanimationiteration_get", arguments);
    }
  }.onwebkitanimationiteration,
  set: {
    onwebkitanimationiteration() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "HTMLElement", "onwebkitanimationiteration_set", arguments);
    }
  }.onwebkitanimationiteration
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "onwebkitanimationstart", {
  configurable: true,
  enumerable: true,
  get: {
    onwebkitanimationstart() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "HTMLElement", "onwebkitanimationstart_get", arguments);
    }
  }.onwebkitanimationstart,
  set: {
    onwebkitanimationstart() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "HTMLElement", "onwebkitanimationstart_set", arguments);
    }
  }.onwebkitanimationstart
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "onwebkittransitionend", {
  configurable: true,
  enumerable: true,
  get: {
    onwebkittransitionend() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "HTMLElement", "onwebkittransitionend_get", arguments);
    }
  }.onwebkittransitionend,
  set: {
    onwebkittransitionend() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "HTMLElement", "onwebkittransitionend_set", arguments);
    }
  }.onwebkittransitionend
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "onwheel", {
  configurable: true,
  enumerable: true,
  get: {
    onwheel() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "HTMLElement", "onwheel_get", arguments);
    }
  }.onwheel,
  set: {
    onwheel() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "HTMLElement", "onwheel_set", arguments);
    }
  }.onwheel
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "onauxclick", {
  configurable: true,
  enumerable: true,
  get: {
    onauxclick() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "HTMLElement", "onauxclick_get", arguments);
    }
  }.onauxclick,
  set: {
    onauxclick() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "HTMLElement", "onauxclick_set", arguments);
    }
  }.onauxclick
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "ongotpointercapture", {
  configurable: true,
  enumerable: true,
  get: {
    ongotpointercapture() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "HTMLElement", "ongotpointercapture_get", arguments);
    }
  }.ongotpointercapture,
  set: {
    ongotpointercapture() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "HTMLElement", "ongotpointercapture_set", arguments);
    }
  }.ongotpointercapture
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "onlostpointercapture", {
  configurable: true,
  enumerable: true,
  get: {
    onlostpointercapture() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "HTMLElement", "onlostpointercapture_get", arguments);
    }
  }.onlostpointercapture,
  set: {
    onlostpointercapture() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "HTMLElement", "onlostpointercapture_set", arguments);
    }
  }.onlostpointercapture
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "onpointerdown", {
  configurable: true,
  enumerable: true,
  get: {
    onpointerdown() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "HTMLElement", "onpointerdown_get", arguments);
    }
  }.onpointerdown,
  set: {
    onpointerdown() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "HTMLElement", "onpointerdown_set", arguments);
    }
  }.onpointerdown
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "onpointermove", {
  configurable: true,
  enumerable: true,
  get: {
    onpointermove() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "HTMLElement", "onpointermove_get", arguments);
    }
  }.onpointermove,
  set: {
    onpointermove() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "HTMLElement", "onpointermove_set", arguments);
    }
  }.onpointermove
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "onpointerrawupdate", {
  configurable: true,
  enumerable: true,
  get: {
    onpointerrawupdate() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "HTMLElement", "onpointerrawupdate_get", arguments);
    }
  }.onpointerrawupdate,
  set: {
    onpointerrawupdate() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "HTMLElement", "onpointerrawupdate_set", arguments);
    }
  }.onpointerrawupdate
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "onpointerup", {
  configurable: true,
  enumerable: true,
  get: {
    onpointerup() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "HTMLElement", "onpointerup_get", arguments);
    }
  }.onpointerup,
  set: {
    onpointerup() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "HTMLElement", "onpointerup_set", arguments);
    }
  }.onpointerup
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "onpointercancel", {
  configurable: true,
  enumerable: true,
  get: {
    onpointercancel() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "HTMLElement", "onpointercancel_get", arguments);
    }
  }.onpointercancel,
  set: {
    onpointercancel() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "HTMLElement", "onpointercancel_set", arguments);
    }
  }.onpointercancel
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "onpointerover", {
  configurable: true,
  enumerable: true,
  get: {
    onpointerover() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "HTMLElement", "onpointerover_get", arguments);
    }
  }.onpointerover,
  set: {
    onpointerover() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "HTMLElement", "onpointerover_set", arguments);
    }
  }.onpointerover
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "onpointerout", {
  configurable: true,
  enumerable: true,
  get: {
    onpointerout() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "HTMLElement", "onpointerout_get", arguments);
    }
  }.onpointerout,
  set: {
    onpointerout() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "HTMLElement", "onpointerout_set", arguments);
    }
  }.onpointerout
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "onpointerenter", {
  configurable: true,
  enumerable: true,
  get: {
    onpointerenter() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "HTMLElement", "onpointerenter_get", arguments);
    }
  }.onpointerenter,
  set: {
    onpointerenter() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "HTMLElement", "onpointerenter_set", arguments);
    }
  }.onpointerenter
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "onpointerleave", {
  configurable: true,
  enumerable: true,
  get: {
    onpointerleave() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "HTMLElement", "onpointerleave_get", arguments);
    }
  }.onpointerleave,
  set: {
    onpointerleave() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "HTMLElement", "onpointerleave_set", arguments);
    }
  }.onpointerleave
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "onselectstart", {
  configurable: true,
  enumerable: true,
  get: {
    onselectstart() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "HTMLElement", "onselectstart_get", arguments);
    }
  }.onselectstart,
  set: {
    onselectstart() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "HTMLElement", "onselectstart_set", arguments);
    }
  }.onselectstart
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "onselectionchange", {
  configurable: true,
  enumerable: true,
  get: {
    onselectionchange() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "HTMLElement", "onselectionchange_get", arguments);
    }
  }.onselectionchange,
  set: {
    onselectionchange() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "HTMLElement", "onselectionchange_set", arguments);
    }
  }.onselectionchange
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "onanimationend", {
  configurable: true,
  enumerable: true,
  get: {
    onanimationend() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "HTMLElement", "onanimationend_get", arguments);
    }
  }.onanimationend,
  set: {
    onanimationend() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "HTMLElement", "onanimationend_set", arguments);
    }
  }.onanimationend
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "onanimationiteration", {
  configurable: true,
  enumerable: true,
  get: {
    onanimationiteration() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "HTMLElement", "onanimationiteration_get", arguments);
    }
  }.onanimationiteration,
  set: {
    onanimationiteration() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "HTMLElement", "onanimationiteration_set", arguments);
    }
  }.onanimationiteration
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "onanimationstart", {
  configurable: true,
  enumerable: true,
  get: {
    onanimationstart() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "HTMLElement", "onanimationstart_get", arguments);
    }
  }.onanimationstart,
  set: {
    onanimationstart() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "HTMLElement", "onanimationstart_set", arguments);
    }
  }.onanimationstart
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "ontransitionrun", {
  configurable: true,
  enumerable: true,
  get: {
    ontransitionrun() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "HTMLElement", "ontransitionrun_get", arguments);
    }
  }.ontransitionrun,
  set: {
    ontransitionrun() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "HTMLElement", "ontransitionrun_set", arguments);
    }
  }.ontransitionrun
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "ontransitionstart", {
  configurable: true,
  enumerable: true,
  get: {
    ontransitionstart() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "HTMLElement", "ontransitionstart_get", arguments);
    }
  }.ontransitionstart,
  set: {
    ontransitionstart() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "HTMLElement", "ontransitionstart_set", arguments);
    }
  }.ontransitionstart
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "ontransitionend", {
  configurable: true,
  enumerable: true,
  get: {
    ontransitionend() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "HTMLElement", "ontransitionend_get", arguments);
    }
  }.ontransitionend,
  set: {
    ontransitionend() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "HTMLElement", "ontransitionend_set", arguments);
    }
  }.ontransitionend
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "ontransitioncancel", {
  configurable: true,
  enumerable: true,
  get: {
    ontransitioncancel() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "HTMLElement", "ontransitioncancel_get", arguments);
    }
  }.ontransitioncancel,
  set: {
    ontransitioncancel() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "HTMLElement", "ontransitioncancel_set", arguments);
    }
  }.ontransitioncancel
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "oncopy", {
  configurable: true,
  enumerable: true,
  get: {
    oncopy() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "HTMLElement", "oncopy_get", arguments);
    }
  }.oncopy,
  set: {
    oncopy() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "HTMLElement", "oncopy_set", arguments);
    }
  }.oncopy
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "oncut", {
  configurable: true,
  enumerable: true,
  get: {
    oncut() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "HTMLElement", "oncut_get", arguments);
    }
  }.oncut,
  set: {
    oncut() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "HTMLElement", "oncut_set", arguments);
    }
  }.oncut
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "onpaste", {
  configurable: true,
  enumerable: true,
  get: {
    onpaste() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "HTMLElement", "onpaste_get", arguments);
    }
  }.onpaste,
  set: {
    onpaste() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "HTMLElement", "onpaste_set", arguments);
    }
  }.onpaste
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "dataset", {
  configurable: true,
  enumerable: true,
  get: {
    dataset() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "HTMLElement", "dataset_get", arguments);
    }
  }.dataset,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "nonce", {
  configurable: true,
  enumerable: true,
  get: {
    nonce() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "HTMLElement", "nonce_get", arguments);
    }
  }.nonce,
  set: {
    nonce() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "HTMLElement", "nonce_set", arguments);
    }
  }.nonce
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "autofocus", {
  configurable: true,
  enumerable: true,
  get: {
    autofocus() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "HTMLElement", "autofocus_get", arguments);
    }
  }.autofocus,
  set: {
    autofocus() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "HTMLElement", "autofocus_set", arguments);
    }
  }.autofocus
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "tabIndex", {
  configurable: true,
  enumerable: true,
  get: {
    tabIndex() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "HTMLElement", "tabIndex_get", arguments);
    }
  }.tabIndex,
  set: {
    tabIndex() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "HTMLElement", "tabIndex_set", arguments);
    }
  }.tabIndex
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "style", {
  configurable: true,
  enumerable: true,
  get: {
    style() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "HTMLElement", "style_get", arguments);
    }
  }.style,
  set: {
    style() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "HTMLElement", "style_set", arguments);
    }
  }.style
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "attributeStyleMap", {
  configurable: true,
  enumerable: true,
  get: {
    attributeStyleMap() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "HTMLElement", "attributeStyleMap_get", arguments);
    }
  }.attributeStyleMap,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "attachInternals", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    attachInternals() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "HTMLElement", "attachInternals", arguments);
    }
  }.attachInternals
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "blur", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    blur() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "HTMLElement", "blur", arguments);
    }
  }.blur
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "click", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    click() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "HTMLElement", "click", arguments);
    }
  }.click
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "focus", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    focus() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "HTMLElement", "focus", arguments);
    }
  }.focus
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "inert", {
  configurable: true,
  enumerable: true,
  get: {
    inert() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "HTMLElement", "inert_get", arguments);
    }
  }.inert,
  set: {
    inert() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "HTMLElement", "inert_set", arguments);
    }
  }.inert
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "oncontentvisibilityautostatechange", {
  configurable: true,
  enumerable: true,
  get: {
    oncontentvisibilityautostatechange() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "HTMLElement", "oncontentvisibilityautostatechange_get", arguments);
    }
  }.oncontentvisibilityautostatechange,
  set: {
    oncontentvisibilityautostatechange() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "HTMLElement", "oncontentvisibilityautostatechange_set", arguments);
    }
  }.oncontentvisibilityautostatechange
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "onscrollend", {
  configurable: true,
  enumerable: true,
  get: {
    onscrollend() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "HTMLElement", "onscrollend_get", arguments);
    }
  }.onscrollend,
  set: {
    onscrollend() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "HTMLElement", "onscrollend_set", arguments);
    }
  }.onscrollend
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "popover", {
  configurable: true,
  enumerable: true,
  get: {
    popover() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "HTMLElement", "popover_get", arguments);
    }
  }.popover,
  set: {
    popover() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "HTMLElement", "popover_set", arguments);
    }
  }.popover
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "onbeforetoggle", {
  configurable: true,
  enumerable: true,
  get: {
    onbeforetoggle() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "HTMLElement", "onbeforetoggle_get", arguments);
    }
  }.onbeforetoggle,
  set: {
    onbeforetoggle() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "HTMLElement", "onbeforetoggle_set", arguments);
    }
  }.onbeforetoggle
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "onbeforematch", {
  configurable: true,
  enumerable: true,
  get: {
    onbeforematch() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "HTMLElement", "onbeforematch_get", arguments);
    }
  }.onbeforematch,
  set: {
    onbeforematch() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "HTMLElement", "onbeforematch_set", arguments);
    }
  }.onbeforematch
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "hidePopover", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    hidePopover() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "HTMLElement", "hidePopover", arguments);
    }
  }.hidePopover
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "showPopover", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    showPopover() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "HTMLElement", "showPopover", arguments);
    }
  }.showPopover
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "togglePopover", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    togglePopover() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLElement"].prototype, "HTMLElement", "togglePopover", arguments);
    }
  }.togglePopover
});