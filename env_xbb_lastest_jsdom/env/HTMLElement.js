// HTMLElement对象

bodavm.memory.globalobj['HTMLElement'] = function HTMLElement() {
  console.log_copy('HTMLElement 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof HTMLElement)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['HTMLElement'], "HTMLElement");
bodavm.memory.globalobj['HTMLElement'].prototype.__proto__ = bodavm.memory.globalobj['Element'].prototype;
bodavm.memory.globalobj['HTMLElement'].__proto__ = bodavm.memory.globalobj['Element'];
bodavm.toolsFunc.defineProperty('HTMLElement', "title", {
  configurable: true,
  enumerable: true,
  get: function title() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLElement'].prototype, "HTMLElement", "title_get", arguments);
  },
  set: function title() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLElement'].prototype, "HTMLElement", "title_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLElement', "lang", {
  configurable: true,
  enumerable: true,
  get: function lang() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLElement'].prototype, "HTMLElement", "lang_get", arguments);
  },
  set: function lang() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLElement'].prototype, "HTMLElement", "lang_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLElement', "translate", {
  configurable: true,
  enumerable: true,
  get: function translate() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLElement'].prototype, "HTMLElement", "translate_get", arguments);
  },
  set: function translate() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLElement'].prototype, "HTMLElement", "translate_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLElement', "dir", {
  configurable: true,
  enumerable: true,
  get: function dir() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLElement'].prototype, "HTMLElement", "dir_get", arguments);
  },
  set: function dir() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLElement'].prototype, "HTMLElement", "dir_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLElement', "hidden", {
  configurable: true,
  enumerable: true,
  get: function hidden() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLElement'].prototype, "HTMLElement", "hidden_get", arguments);
  },
  set: function hidden() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLElement'].prototype, "HTMLElement", "hidden_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLElement', "accessKey", {
  configurable: true,
  enumerable: true,
  get: function accessKey() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLElement'].prototype, "HTMLElement", "accessKey_get", arguments);
  },
  set: function accessKey() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLElement'].prototype, "HTMLElement", "accessKey_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLElement', "draggable", {
  configurable: true,
  enumerable: true,
  get: function draggable() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLElement'].prototype, "HTMLElement", "draggable_get", arguments);
  },
  set: function draggable() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLElement'].prototype, "HTMLElement", "draggable_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLElement', "spellcheck", {
  configurable: true,
  enumerable: true,
  get: function spellcheck() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLElement'].prototype, "HTMLElement", "spellcheck_get", arguments);
  },
  set: function spellcheck() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLElement'].prototype, "HTMLElement", "spellcheck_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLElement', "autocapitalize", {
  configurable: true,
  enumerable: true,
  get: function autocapitalize() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLElement'].prototype, "HTMLElement", "autocapitalize_get", arguments);
  },
  set: function autocapitalize() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLElement'].prototype, "HTMLElement", "autocapitalize_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLElement', "contentEditable", {
  configurable: true,
  enumerable: true,
  get: function contentEditable() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLElement'].prototype, "HTMLElement", "contentEditable_get", arguments);
  },
  set: function contentEditable() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLElement'].prototype, "HTMLElement", "contentEditable_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLElement', "enterKeyHint", {
  configurable: true,
  enumerable: true,
  get: function enterKeyHint() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLElement'].prototype, "HTMLElement", "enterKeyHint_get", arguments);
  },
  set: function enterKeyHint() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLElement'].prototype, "HTMLElement", "enterKeyHint_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLElement', "isContentEditable", {
  configurable: true,
  enumerable: true,
  get: function isContentEditable() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLElement'].prototype, "HTMLElement", "isContentEditable_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLElement', "inputMode", {
  configurable: true,
  enumerable: true,
  get: function inputMode() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLElement'].prototype, "HTMLElement", "inputMode_get", arguments);
  },
  set: function inputMode() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLElement'].prototype, "HTMLElement", "inputMode_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLElement', "virtualKeyboardPolicy", {
  configurable: true,
  enumerable: true,
  get: function virtualKeyboardPolicy() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLElement'].prototype, "HTMLElement", "virtualKeyboardPolicy_get", arguments);
  },
  set: function virtualKeyboardPolicy() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLElement'].prototype, "HTMLElement", "virtualKeyboardPolicy_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLElement', "offsetParent", {
  configurable: true,
  enumerable: true,
  get: function offsetParent() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLElement'].prototype, "HTMLElement", "offsetParent_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLElement', "offsetTop", {
  configurable: true,
  enumerable: true,
  get: function offsetTop() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLElement'].prototype, "HTMLElement", "offsetTop_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLElement', "offsetLeft", {
  configurable: true,
  enumerable: true,
  get: function offsetLeft() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLElement'].prototype, "HTMLElement", "offsetLeft_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLElement', "offsetWidth", {
  configurable: true,
  enumerable: true,
  get: function offsetWidth() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLElement'].prototype, "HTMLElement", "offsetWidth_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLElement', "offsetHeight", {
  configurable: true,
  enumerable: true,
  get: function offsetHeight() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLElement'].prototype, "HTMLElement", "offsetHeight_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLElement', "innerText", {
  configurable: true,
  enumerable: true,
  get: function innerText() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLElement'].prototype, "HTMLElement", "innerText_get", arguments);
  },
  set: function innerText() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLElement'].prototype, "HTMLElement", "innerText_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLElement', "outerText", {
  configurable: true,
  enumerable: true,
  get: function outerText() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLElement'].prototype, "HTMLElement", "outerText_get", arguments);
  },
  set: function outerText() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLElement'].prototype, "HTMLElement", "outerText_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLElement', "onbeforexrselect", {
  configurable: true,
  enumerable: true,
  get: function onbeforexrselect() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLElement'].prototype, "HTMLElement", "onbeforexrselect_get", arguments);
  },
  set: function onbeforexrselect() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLElement'].prototype, "HTMLElement", "onbeforexrselect_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLElement', "onabort", {
  configurable: true,
  enumerable: true,
  get: function onabort() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLElement'].prototype, "HTMLElement", "onabort_get", arguments);
  },
  set: function onabort() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLElement'].prototype, "HTMLElement", "onabort_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLElement', "onbeforeinput", {
  configurable: true,
  enumerable: true,
  get: function onbeforeinput() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLElement'].prototype, "HTMLElement", "onbeforeinput_get", arguments);
  },
  set: function onbeforeinput() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLElement'].prototype, "HTMLElement", "onbeforeinput_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLElement', "onblur", {
  configurable: true,
  enumerable: true,
  get: function onblur() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLElement'].prototype, "HTMLElement", "onblur_get", arguments);
  },
  set: function onblur() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLElement'].prototype, "HTMLElement", "onblur_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLElement', "oncancel", {
  configurable: true,
  enumerable: true,
  get: function oncancel() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLElement'].prototype, "HTMLElement", "oncancel_get", arguments);
  },
  set: function oncancel() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLElement'].prototype, "HTMLElement", "oncancel_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLElement', "oncanplay", {
  configurable: true,
  enumerable: true,
  get: function oncanplay() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLElement'].prototype, "HTMLElement", "oncanplay_get", arguments);
  },
  set: function oncanplay() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLElement'].prototype, "HTMLElement", "oncanplay_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLElement', "oncanplaythrough", {
  configurable: true,
  enumerable: true,
  get: function oncanplaythrough() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLElement'].prototype, "HTMLElement", "oncanplaythrough_get", arguments);
  },
  set: function oncanplaythrough() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLElement'].prototype, "HTMLElement", "oncanplaythrough_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLElement', "onchange", {
  configurable: true,
  enumerable: true,
  get: function onchange() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLElement'].prototype, "HTMLElement", "onchange_get", arguments);
  },
  set: function onchange() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLElement'].prototype, "HTMLElement", "onchange_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLElement', "onclick", {
  configurable: true,
  enumerable: true,
  get: function onclick() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLElement'].prototype, "HTMLElement", "onclick_get", arguments);
  },
  set: function onclick() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLElement'].prototype, "HTMLElement", "onclick_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLElement', "onclose", {
  configurable: true,
  enumerable: true,
  get: function onclose() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLElement'].prototype, "HTMLElement", "onclose_get", arguments);
  },
  set: function onclose() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLElement'].prototype, "HTMLElement", "onclose_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLElement', "oncontextlost", {
  configurable: true,
  enumerable: true,
  get: function oncontextlost() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLElement'].prototype, "HTMLElement", "oncontextlost_get", arguments);
  },
  set: function oncontextlost() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLElement'].prototype, "HTMLElement", "oncontextlost_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLElement', "oncontextmenu", {
  configurable: true,
  enumerable: true,
  get: function oncontextmenu() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLElement'].prototype, "HTMLElement", "oncontextmenu_get", arguments);
  },
  set: function oncontextmenu() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLElement'].prototype, "HTMLElement", "oncontextmenu_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLElement', "oncontextrestored", {
  configurable: true,
  enumerable: true,
  get: function oncontextrestored() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLElement'].prototype, "HTMLElement", "oncontextrestored_get", arguments);
  },
  set: function oncontextrestored() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLElement'].prototype, "HTMLElement", "oncontextrestored_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLElement', "oncuechange", {
  configurable: true,
  enumerable: true,
  get: function oncuechange() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLElement'].prototype, "HTMLElement", "oncuechange_get", arguments);
  },
  set: function oncuechange() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLElement'].prototype, "HTMLElement", "oncuechange_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLElement', "ondblclick", {
  configurable: true,
  enumerable: true,
  get: function ondblclick() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLElement'].prototype, "HTMLElement", "ondblclick_get", arguments);
  },
  set: function ondblclick() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLElement'].prototype, "HTMLElement", "ondblclick_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLElement', "ondrag", {
  configurable: true,
  enumerable: true,
  get: function ondrag() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLElement'].prototype, "HTMLElement", "ondrag_get", arguments);
  },
  set: function ondrag() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLElement'].prototype, "HTMLElement", "ondrag_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLElement', "ondragend", {
  configurable: true,
  enumerable: true,
  get: function ondragend() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLElement'].prototype, "HTMLElement", "ondragend_get", arguments);
  },
  set: function ondragend() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLElement'].prototype, "HTMLElement", "ondragend_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLElement', "ondragenter", {
  configurable: true,
  enumerable: true,
  get: function ondragenter() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLElement'].prototype, "HTMLElement", "ondragenter_get", arguments);
  },
  set: function ondragenter() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLElement'].prototype, "HTMLElement", "ondragenter_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLElement', "ondragleave", {
  configurable: true,
  enumerable: true,
  get: function ondragleave() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLElement'].prototype, "HTMLElement", "ondragleave_get", arguments);
  },
  set: function ondragleave() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLElement'].prototype, "HTMLElement", "ondragleave_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLElement', "ondragover", {
  configurable: true,
  enumerable: true,
  get: function ondragover() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLElement'].prototype, "HTMLElement", "ondragover_get", arguments);
  },
  set: function ondragover() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLElement'].prototype, "HTMLElement", "ondragover_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLElement', "ondragstart", {
  configurable: true,
  enumerable: true,
  get: function ondragstart() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLElement'].prototype, "HTMLElement", "ondragstart_get", arguments);
  },
  set: function ondragstart() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLElement'].prototype, "HTMLElement", "ondragstart_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLElement', "ondrop", {
  configurable: true,
  enumerable: true,
  get: function ondrop() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLElement'].prototype, "HTMLElement", "ondrop_get", arguments);
  },
  set: function ondrop() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLElement'].prototype, "HTMLElement", "ondrop_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLElement', "ondurationchange", {
  configurable: true,
  enumerable: true,
  get: function ondurationchange() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLElement'].prototype, "HTMLElement", "ondurationchange_get", arguments);
  },
  set: function ondurationchange() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLElement'].prototype, "HTMLElement", "ondurationchange_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLElement', "onemptied", {
  configurable: true,
  enumerable: true,
  get: function onemptied() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLElement'].prototype, "HTMLElement", "onemptied_get", arguments);
  },
  set: function onemptied() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLElement'].prototype, "HTMLElement", "onemptied_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLElement', "onended", {
  configurable: true,
  enumerable: true,
  get: function onended() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLElement'].prototype, "HTMLElement", "onended_get", arguments);
  },
  set: function onended() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLElement'].prototype, "HTMLElement", "onended_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLElement', "onerror", {
  configurable: true,
  enumerable: true,
  get: function onerror() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLElement'].prototype, "HTMLElement", "onerror_get", arguments);
  },
  set: function onerror() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLElement'].prototype, "HTMLElement", "onerror_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLElement', "onfocus", {
  configurable: true,
  enumerable: true,
  get: function onfocus() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLElement'].prototype, "HTMLElement", "onfocus_get", arguments);
  },
  set: function onfocus() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLElement'].prototype, "HTMLElement", "onfocus_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLElement', "onformdata", {
  configurable: true,
  enumerable: true,
  get: function onformdata() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLElement'].prototype, "HTMLElement", "onformdata_get", arguments);
  },
  set: function onformdata() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLElement'].prototype, "HTMLElement", "onformdata_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLElement', "oninput", {
  configurable: true,
  enumerable: true,
  get: function oninput() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLElement'].prototype, "HTMLElement", "oninput_get", arguments);
  },
  set: function oninput() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLElement'].prototype, "HTMLElement", "oninput_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLElement', "oninvalid", {
  configurable: true,
  enumerable: true,
  get: function oninvalid() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLElement'].prototype, "HTMLElement", "oninvalid_get", arguments);
  },
  set: function oninvalid() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLElement'].prototype, "HTMLElement", "oninvalid_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLElement', "onkeydown", {
  configurable: true,
  enumerable: true,
  get: function onkeydown() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLElement'].prototype, "HTMLElement", "onkeydown_get", arguments);
  },
  set: function onkeydown() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLElement'].prototype, "HTMLElement", "onkeydown_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLElement', "onkeypress", {
  configurable: true,
  enumerable: true,
  get: function onkeypress() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLElement'].prototype, "HTMLElement", "onkeypress_get", arguments);
  },
  set: function onkeypress() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLElement'].prototype, "HTMLElement", "onkeypress_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLElement', "onkeyup", {
  configurable: true,
  enumerable: true,
  get: function onkeyup() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLElement'].prototype, "HTMLElement", "onkeyup_get", arguments);
  },
  set: function onkeyup() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLElement'].prototype, "HTMLElement", "onkeyup_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLElement', "onload", {
  configurable: true,
  enumerable: true,
  get: function onload() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLElement'].prototype, "HTMLElement", "onload_get", arguments);
  },
  set: function onload() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLElement'].prototype, "HTMLElement", "onload_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLElement', "onloadeddata", {
  configurable: true,
  enumerable: true,
  get: function onloadeddata() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLElement'].prototype, "HTMLElement", "onloadeddata_get", arguments);
  },
  set: function onloadeddata() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLElement'].prototype, "HTMLElement", "onloadeddata_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLElement', "onloadedmetadata", {
  configurable: true,
  enumerable: true,
  get: function onloadedmetadata() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLElement'].prototype, "HTMLElement", "onloadedmetadata_get", arguments);
  },
  set: function onloadedmetadata() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLElement'].prototype, "HTMLElement", "onloadedmetadata_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLElement', "onloadstart", {
  configurable: true,
  enumerable: true,
  get: function onloadstart() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLElement'].prototype, "HTMLElement", "onloadstart_get", arguments);
  },
  set: function onloadstart() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLElement'].prototype, "HTMLElement", "onloadstart_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLElement', "onmousedown", {
  configurable: true,
  enumerable: true,
  get: function onmousedown() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLElement'].prototype, "HTMLElement", "onmousedown_get", arguments);
  },
  set: function onmousedown() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLElement'].prototype, "HTMLElement", "onmousedown_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLElement', "onmouseenter", {
  configurable: true,
  enumerable: true,
  get: function onmouseenter() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLElement'].prototype, "HTMLElement", "onmouseenter_get", arguments);
  },
  set: function onmouseenter() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLElement'].prototype, "HTMLElement", "onmouseenter_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLElement', "onmouseleave", {
  configurable: true,
  enumerable: true,
  get: function onmouseleave() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLElement'].prototype, "HTMLElement", "onmouseleave_get", arguments);
  },
  set: function onmouseleave() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLElement'].prototype, "HTMLElement", "onmouseleave_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLElement', "onmousemove", {
  configurable: true,
  enumerable: true,
  get: function onmousemove() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLElement'].prototype, "HTMLElement", "onmousemove_get", arguments);
  },
  set: function onmousemove() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLElement'].prototype, "HTMLElement", "onmousemove_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLElement', "onmouseout", {
  configurable: true,
  enumerable: true,
  get: function onmouseout() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLElement'].prototype, "HTMLElement", "onmouseout_get", arguments);
  },
  set: function onmouseout() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLElement'].prototype, "HTMLElement", "onmouseout_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLElement', "onmouseover", {
  configurable: true,
  enumerable: true,
  get: function onmouseover() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLElement'].prototype, "HTMLElement", "onmouseover_get", arguments);
  },
  set: function onmouseover() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLElement'].prototype, "HTMLElement", "onmouseover_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLElement', "onmouseup", {
  configurable: true,
  enumerable: true,
  get: function onmouseup() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLElement'].prototype, "HTMLElement", "onmouseup_get", arguments);
  },
  set: function onmouseup() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLElement'].prototype, "HTMLElement", "onmouseup_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLElement', "onmousewheel", {
  configurable: true,
  enumerable: true,
  get: function onmousewheel() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLElement'].prototype, "HTMLElement", "onmousewheel_get", arguments);
  },
  set: function onmousewheel() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLElement'].prototype, "HTMLElement", "onmousewheel_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLElement', "onpause", {
  configurable: true,
  enumerable: true,
  get: function onpause() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLElement'].prototype, "HTMLElement", "onpause_get", arguments);
  },
  set: function onpause() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLElement'].prototype, "HTMLElement", "onpause_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLElement', "onplay", {
  configurable: true,
  enumerable: true,
  get: function onplay() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLElement'].prototype, "HTMLElement", "onplay_get", arguments);
  },
  set: function onplay() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLElement'].prototype, "HTMLElement", "onplay_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLElement', "onplaying", {
  configurable: true,
  enumerable: true,
  get: function onplaying() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLElement'].prototype, "HTMLElement", "onplaying_get", arguments);
  },
  set: function onplaying() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLElement'].prototype, "HTMLElement", "onplaying_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLElement', "onprogress", {
  configurable: true,
  enumerable: true,
  get: function onprogress() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLElement'].prototype, "HTMLElement", "onprogress_get", arguments);
  },
  set: function onprogress() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLElement'].prototype, "HTMLElement", "onprogress_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLElement', "onratechange", {
  configurable: true,
  enumerable: true,
  get: function onratechange() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLElement'].prototype, "HTMLElement", "onratechange_get", arguments);
  },
  set: function onratechange() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLElement'].prototype, "HTMLElement", "onratechange_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLElement', "onreset", {
  configurable: true,
  enumerable: true,
  get: function onreset() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLElement'].prototype, "HTMLElement", "onreset_get", arguments);
  },
  set: function onreset() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLElement'].prototype, "HTMLElement", "onreset_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLElement', "onresize", {
  configurable: true,
  enumerable: true,
  get: function onresize() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLElement'].prototype, "HTMLElement", "onresize_get", arguments);
  },
  set: function onresize() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLElement'].prototype, "HTMLElement", "onresize_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLElement', "onscroll", {
  configurable: true,
  enumerable: true,
  get: function onscroll() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLElement'].prototype, "HTMLElement", "onscroll_get", arguments);
  },
  set: function onscroll() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLElement'].prototype, "HTMLElement", "onscroll_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLElement', "onsecuritypolicyviolation", {
  configurable: true,
  enumerable: true,
  get: function onsecuritypolicyviolation() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLElement'].prototype, "HTMLElement", "onsecuritypolicyviolation_get", arguments);
  },
  set: function onsecuritypolicyviolation() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLElement'].prototype, "HTMLElement", "onsecuritypolicyviolation_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLElement', "onseeked", {
  configurable: true,
  enumerable: true,
  get: function onseeked() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLElement'].prototype, "HTMLElement", "onseeked_get", arguments);
  },
  set: function onseeked() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLElement'].prototype, "HTMLElement", "onseeked_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLElement', "onseeking", {
  configurable: true,
  enumerable: true,
  get: function onseeking() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLElement'].prototype, "HTMLElement", "onseeking_get", arguments);
  },
  set: function onseeking() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLElement'].prototype, "HTMLElement", "onseeking_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLElement', "onselect", {
  configurable: true,
  enumerable: true,
  get: function onselect() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLElement'].prototype, "HTMLElement", "onselect_get", arguments);
  },
  set: function onselect() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLElement'].prototype, "HTMLElement", "onselect_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLElement', "onslotchange", {
  configurable: true,
  enumerable: true,
  get: function onslotchange() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLElement'].prototype, "HTMLElement", "onslotchange_get", arguments);
  },
  set: function onslotchange() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLElement'].prototype, "HTMLElement", "onslotchange_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLElement', "onstalled", {
  configurable: true,
  enumerable: true,
  get: function onstalled() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLElement'].prototype, "HTMLElement", "onstalled_get", arguments);
  },
  set: function onstalled() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLElement'].prototype, "HTMLElement", "onstalled_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLElement', "onsubmit", {
  configurable: true,
  enumerable: true,
  get: function onsubmit() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLElement'].prototype, "HTMLElement", "onsubmit_get", arguments);
  },
  set: function onsubmit() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLElement'].prototype, "HTMLElement", "onsubmit_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLElement', "onsuspend", {
  configurable: true,
  enumerable: true,
  get: function onsuspend() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLElement'].prototype, "HTMLElement", "onsuspend_get", arguments);
  },
  set: function onsuspend() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLElement'].prototype, "HTMLElement", "onsuspend_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLElement', "ontimeupdate", {
  configurable: true,
  enumerable: true,
  get: function ontimeupdate() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLElement'].prototype, "HTMLElement", "ontimeupdate_get", arguments);
  },
  set: function ontimeupdate() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLElement'].prototype, "HTMLElement", "ontimeupdate_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLElement', "ontoggle", {
  configurable: true,
  enumerable: true,
  get: function ontoggle() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLElement'].prototype, "HTMLElement", "ontoggle_get", arguments);
  },
  set: function ontoggle() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLElement'].prototype, "HTMLElement", "ontoggle_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLElement', "onvolumechange", {
  configurable: true,
  enumerable: true,
  get: function onvolumechange() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLElement'].prototype, "HTMLElement", "onvolumechange_get", arguments);
  },
  set: function onvolumechange() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLElement'].prototype, "HTMLElement", "onvolumechange_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLElement', "onwaiting", {
  configurable: true,
  enumerable: true,
  get: function onwaiting() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLElement'].prototype, "HTMLElement", "onwaiting_get", arguments);
  },
  set: function onwaiting() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLElement'].prototype, "HTMLElement", "onwaiting_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLElement', "onwebkitanimationend", {
  configurable: true,
  enumerable: true,
  get: function onwebkitanimationend() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLElement'].prototype, "HTMLElement", "onwebkitanimationend_get", arguments);
  },
  set: function onwebkitanimationend() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLElement'].prototype, "HTMLElement", "onwebkitanimationend_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLElement', "onwebkitanimationiteration", {
  configurable: true,
  enumerable: true,
  get: function onwebkitanimationiteration() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLElement'].prototype, "HTMLElement", "onwebkitanimationiteration_get", arguments);
  },
  set: function onwebkitanimationiteration() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLElement'].prototype, "HTMLElement", "onwebkitanimationiteration_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLElement', "onwebkitanimationstart", {
  configurable: true,
  enumerable: true,
  get: function onwebkitanimationstart() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLElement'].prototype, "HTMLElement", "onwebkitanimationstart_get", arguments);
  },
  set: function onwebkitanimationstart() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLElement'].prototype, "HTMLElement", "onwebkitanimationstart_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLElement', "onwebkittransitionend", {
  configurable: true,
  enumerable: true,
  get: function onwebkittransitionend() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLElement'].prototype, "HTMLElement", "onwebkittransitionend_get", arguments);
  },
  set: function onwebkittransitionend() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLElement'].prototype, "HTMLElement", "onwebkittransitionend_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLElement', "onwheel", {
  configurable: true,
  enumerable: true,
  get: function onwheel() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLElement'].prototype, "HTMLElement", "onwheel_get", arguments);
  },
  set: function onwheel() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLElement'].prototype, "HTMLElement", "onwheel_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLElement', "onauxclick", {
  configurable: true,
  enumerable: true,
  get: function onauxclick() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLElement'].prototype, "HTMLElement", "onauxclick_get", arguments);
  },
  set: function onauxclick() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLElement'].prototype, "HTMLElement", "onauxclick_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLElement', "ongotpointercapture", {
  configurable: true,
  enumerable: true,
  get: function ongotpointercapture() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLElement'].prototype, "HTMLElement", "ongotpointercapture_get", arguments);
  },
  set: function ongotpointercapture() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLElement'].prototype, "HTMLElement", "ongotpointercapture_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLElement', "onlostpointercapture", {
  configurable: true,
  enumerable: true,
  get: function onlostpointercapture() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLElement'].prototype, "HTMLElement", "onlostpointercapture_get", arguments);
  },
  set: function onlostpointercapture() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLElement'].prototype, "HTMLElement", "onlostpointercapture_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLElement', "onpointerdown", {
  configurable: true,
  enumerable: true,
  get: function onpointerdown() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLElement'].prototype, "HTMLElement", "onpointerdown_get", arguments);
  },
  set: function onpointerdown() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLElement'].prototype, "HTMLElement", "onpointerdown_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLElement', "onpointermove", {
  configurable: true,
  enumerable: true,
  get: function onpointermove() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLElement'].prototype, "HTMLElement", "onpointermove_get", arguments);
  },
  set: function onpointermove() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLElement'].prototype, "HTMLElement", "onpointermove_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLElement', "onpointerrawupdate", {
  configurable: true,
  enumerable: true,
  get: function onpointerrawupdate() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLElement'].prototype, "HTMLElement", "onpointerrawupdate_get", arguments);
  },
  set: function onpointerrawupdate() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLElement'].prototype, "HTMLElement", "onpointerrawupdate_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLElement', "onpointerup", {
  configurable: true,
  enumerable: true,
  get: function onpointerup() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLElement'].prototype, "HTMLElement", "onpointerup_get", arguments);
  },
  set: function onpointerup() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLElement'].prototype, "HTMLElement", "onpointerup_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLElement', "onpointercancel", {
  configurable: true,
  enumerable: true,
  get: function onpointercancel() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLElement'].prototype, "HTMLElement", "onpointercancel_get", arguments);
  },
  set: function onpointercancel() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLElement'].prototype, "HTMLElement", "onpointercancel_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLElement', "onpointerover", {
  configurable: true,
  enumerable: true,
  get: function onpointerover() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLElement'].prototype, "HTMLElement", "onpointerover_get", arguments);
  },
  set: function onpointerover() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLElement'].prototype, "HTMLElement", "onpointerover_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLElement', "onpointerout", {
  configurable: true,
  enumerable: true,
  get: function onpointerout() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLElement'].prototype, "HTMLElement", "onpointerout_get", arguments);
  },
  set: function onpointerout() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLElement'].prototype, "HTMLElement", "onpointerout_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLElement', "onpointerenter", {
  configurable: true,
  enumerable: true,
  get: function onpointerenter() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLElement'].prototype, "HTMLElement", "onpointerenter_get", arguments);
  },
  set: function onpointerenter() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLElement'].prototype, "HTMLElement", "onpointerenter_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLElement', "onpointerleave", {
  configurable: true,
  enumerable: true,
  get: function onpointerleave() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLElement'].prototype, "HTMLElement", "onpointerleave_get", arguments);
  },
  set: function onpointerleave() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLElement'].prototype, "HTMLElement", "onpointerleave_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLElement', "onselectstart", {
  configurable: true,
  enumerable: true,
  get: function onselectstart() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLElement'].prototype, "HTMLElement", "onselectstart_get", arguments);
  },
  set: function onselectstart() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLElement'].prototype, "HTMLElement", "onselectstart_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLElement', "onselectionchange", {
  configurable: true,
  enumerable: true,
  get: function onselectionchange() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLElement'].prototype, "HTMLElement", "onselectionchange_get", arguments);
  },
  set: function onselectionchange() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLElement'].prototype, "HTMLElement", "onselectionchange_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLElement', "onanimationend", {
  configurable: true,
  enumerable: true,
  get: function onanimationend() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLElement'].prototype, "HTMLElement", "onanimationend_get", arguments);
  },
  set: function onanimationend() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLElement'].prototype, "HTMLElement", "onanimationend_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLElement', "onanimationiteration", {
  configurable: true,
  enumerable: true,
  get: function onanimationiteration() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLElement'].prototype, "HTMLElement", "onanimationiteration_get", arguments);
  },
  set: function onanimationiteration() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLElement'].prototype, "HTMLElement", "onanimationiteration_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLElement', "onanimationstart", {
  configurable: true,
  enumerable: true,
  get: function onanimationstart() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLElement'].prototype, "HTMLElement", "onanimationstart_get", arguments);
  },
  set: function onanimationstart() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLElement'].prototype, "HTMLElement", "onanimationstart_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLElement', "ontransitionrun", {
  configurable: true,
  enumerable: true,
  get: function ontransitionrun() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLElement'].prototype, "HTMLElement", "ontransitionrun_get", arguments);
  },
  set: function ontransitionrun() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLElement'].prototype, "HTMLElement", "ontransitionrun_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLElement', "ontransitionstart", {
  configurable: true,
  enumerable: true,
  get: function ontransitionstart() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLElement'].prototype, "HTMLElement", "ontransitionstart_get", arguments);
  },
  set: function ontransitionstart() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLElement'].prototype, "HTMLElement", "ontransitionstart_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLElement', "ontransitionend", {
  configurable: true,
  enumerable: true,
  get: function ontransitionend() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLElement'].prototype, "HTMLElement", "ontransitionend_get", arguments);
  },
  set: function ontransitionend() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLElement'].prototype, "HTMLElement", "ontransitionend_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLElement', "ontransitioncancel", {
  configurable: true,
  enumerable: true,
  get: function ontransitioncancel() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLElement'].prototype, "HTMLElement", "ontransitioncancel_get", arguments);
  },
  set: function ontransitioncancel() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLElement'].prototype, "HTMLElement", "ontransitioncancel_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLElement', "oncopy", {
  configurable: true,
  enumerable: true,
  get: function oncopy() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLElement'].prototype, "HTMLElement", "oncopy_get", arguments);
  },
  set: function oncopy() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLElement'].prototype, "HTMLElement", "oncopy_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLElement', "oncut", {
  configurable: true,
  enumerable: true,
  get: function oncut() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLElement'].prototype, "HTMLElement", "oncut_get", arguments);
  },
  set: function oncut() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLElement'].prototype, "HTMLElement", "oncut_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLElement', "onpaste", {
  configurable: true,
  enumerable: true,
  get: function onpaste() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLElement'].prototype, "HTMLElement", "onpaste_get", arguments);
  },
  set: function onpaste() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLElement'].prototype, "HTMLElement", "onpaste_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLElement', "dataset", {
  configurable: true,
  enumerable: true,
  get: function dataset() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLElement'].prototype, "HTMLElement", "dataset_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLElement', "nonce", {
  configurable: true,
  enumerable: true,
  get: function nonce() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLElement'].prototype, "HTMLElement", "nonce_get", arguments);
  },
  set: function nonce() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLElement'].prototype, "HTMLElement", "nonce_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLElement', "autofocus", {
  configurable: true,
  enumerable: true,
  get: function autofocus() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLElement'].prototype, "HTMLElement", "autofocus_get", arguments);
  },
  set: function autofocus() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLElement'].prototype, "HTMLElement", "autofocus_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLElement', "tabIndex", {
  configurable: true,
  enumerable: true,
  get: function tabIndex() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLElement'].prototype, "HTMLElement", "tabIndex_get", arguments);
  },
  set: function tabIndex() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLElement'].prototype, "HTMLElement", "tabIndex_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLElement', "style", {
  configurable: true,
  enumerable: true,
  get: function style() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLElement'].prototype, "HTMLElement", "style_get", arguments);
  },
  set: function style() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLElement'].prototype, "HTMLElement", "style_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLElement', "attributeStyleMap", {
  configurable: true,
  enumerable: true,
  get: function attributeStyleMap() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLElement'].prototype, "HTMLElement", "attributeStyleMap_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLElement', "attachInternals", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function attachInternals() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLElement'].prototype, "HTMLElement", "attachInternals", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLElement', "blur", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function blur() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLElement'].prototype, "HTMLElement", "blur", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLElement', "click", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function click() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLElement'].prototype, "HTMLElement", "click", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLElement', "focus", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function focus() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLElement'].prototype, "HTMLElement", "focus", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLElement', "inert", {
  configurable: true,
  enumerable: true,
  get: function inert() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLElement'].prototype, "HTMLElement", "inert_get", arguments);
  },
  set: function inert() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLElement'].prototype, "HTMLElement", "inert_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLElement', "oncontentvisibilityautostatechange", {
  configurable: true,
  enumerable: true,
  get: function oncontentvisibilityautostatechange() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLElement'].prototype, "HTMLElement", "oncontentvisibilityautostatechange_get", arguments);
  },
  set: function oncontentvisibilityautostatechange() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLElement'].prototype, "HTMLElement", "oncontentvisibilityautostatechange_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLElement', "onbeforematch", {
  configurable: true,
  enumerable: true,
  get: function onbeforematch() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLElement'].prototype, "HTMLElement", "onbeforematch_get", arguments);
  },
  set: function onbeforematch() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLElement'].prototype, "HTMLElement", "onbeforematch_set", arguments);
  }
}, 'prototype');