// HTMLElement对象

HTMLElement = function HTMLElement() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof HTMLElement)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('HTMLElement 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(HTMLElement, "HTMLElement");
HTMLElement.prototype.__proto__ = Element.prototype;
HTMLElement.__proto__ = Element;
bodavm.toolsFunc.defineProperty(HTMLElement.prototype, "title", {
  configurable: true,
  enumerable: true,
  get: function title() {
    return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "title_get", arguments);
  },
  set: function title() {
    return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "title_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLElement.prototype, "lang", {
  configurable: true,
  enumerable: true,
  get: function lang() {
    return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "lang_get", arguments);
  },
  set: function lang() {
    return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "lang_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLElement.prototype, "translate", {
  configurable: true,
  enumerable: true,
  get: function translate() {
    return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "translate_get", arguments);
  },
  set: function translate() {
    return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "translate_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLElement.prototype, "dir", {
  configurable: true,
  enumerable: true,
  get: function dir() {
    return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "dir_get", arguments);
  },
  set: function dir() {
    return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "dir_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLElement.prototype, "hidden", {
  configurable: true,
  enumerable: true,
  get: function hidden() {
    return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "hidden_get", arguments);
  },
  set: function hidden() {
    return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "hidden_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLElement.prototype, "accessKey", {
  configurable: true,
  enumerable: true,
  get: function accessKey() {
    return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "accessKey_get", arguments);
  },
  set: function accessKey() {
    return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "accessKey_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLElement.prototype, "draggable", {
  configurable: true,
  enumerable: true,
  get: function draggable() {
    return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "draggable_get", arguments);
  },
  set: function draggable() {
    return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "draggable_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLElement.prototype, "spellcheck", {
  configurable: true,
  enumerable: true,
  get: function spellcheck() {
    return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "spellcheck_get", arguments);
  },
  set: function spellcheck() {
    return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "spellcheck_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLElement.prototype, "autocapitalize", {
  configurable: true,
  enumerable: true,
  get: function autocapitalize() {
    return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "autocapitalize_get", arguments);
  },
  set: function autocapitalize() {
    return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "autocapitalize_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLElement.prototype, "contentEditable", {
  configurable: true,
  enumerable: true,
  get: function contentEditable() {
    return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "contentEditable_get", arguments);
  },
  set: function contentEditable() {
    return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "contentEditable_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLElement.prototype, "enterKeyHint", {
  configurable: true,
  enumerable: true,
  get: function enterKeyHint() {
    return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "enterKeyHint_get", arguments);
  },
  set: function enterKeyHint() {
    return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "enterKeyHint_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLElement.prototype, "isContentEditable", {
  configurable: true,
  enumerable: true,
  get: function isContentEditable() {
    return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "isContentEditable_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(HTMLElement.prototype, "inputMode", {
  configurable: true,
  enumerable: true,
  get: function inputMode() {
    return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "inputMode_get", arguments);
  },
  set: function inputMode() {
    return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "inputMode_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLElement.prototype, "virtualKeyboardPolicy", {
  configurable: true,
  enumerable: true,
  get: function virtualKeyboardPolicy() {
    return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "virtualKeyboardPolicy_get", arguments);
  },
  set: function virtualKeyboardPolicy() {
    return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "virtualKeyboardPolicy_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLElement.prototype, "offsetParent", {
  configurable: true,
  enumerable: true,
  get: function offsetParent() {
    return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "offsetParent_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(HTMLElement.prototype, "offsetTop", {
  configurable: true,
  enumerable: true,
  get: function offsetTop() {
    return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "offsetTop_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(HTMLElement.prototype, "offsetLeft", {
  configurable: true,
  enumerable: true,
  get: function offsetLeft() {
    return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "offsetLeft_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(HTMLElement.prototype, "offsetWidth", {
  configurable: true,
  enumerable: true,
  get: function offsetWidth() {
    return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "offsetWidth_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(HTMLElement.prototype, "offsetHeight", {
  configurable: true,
  enumerable: true,
  get: function offsetHeight() {
    return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "offsetHeight_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(HTMLElement.prototype, "innerText", {
  configurable: true,
  enumerable: true,
  get: function innerText() {
    return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "innerText_get", arguments);
  },
  set: function innerText() {
    return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "innerText_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLElement.prototype, "outerText", {
  configurable: true,
  enumerable: true,
  get: function outerText() {
    return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "outerText_get", arguments);
  },
  set: function outerText() {
    return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "outerText_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLElement.prototype, "onbeforexrselect", {
  configurable: true,
  enumerable: true,
  get: function onbeforexrselect() {
    return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "onbeforexrselect_get", arguments);
  },
  set: function onbeforexrselect() {
    return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "onbeforexrselect_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLElement.prototype, "onabort", {
  configurable: true,
  enumerable: true,
  get: function onabort() {
    return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "onabort_get", arguments);
  },
  set: function onabort() {
    return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "onabort_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLElement.prototype, "onbeforeinput", {
  configurable: true,
  enumerable: true,
  get: function onbeforeinput() {
    return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "onbeforeinput_get", arguments);
  },
  set: function onbeforeinput() {
    return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "onbeforeinput_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLElement.prototype, "onblur", {
  configurable: true,
  enumerable: true,
  get: function onblur() {
    return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "onblur_get", arguments);
  },
  set: function onblur() {
    return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "onblur_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLElement.prototype, "oncancel", {
  configurable: true,
  enumerable: true,
  get: function oncancel() {
    return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "oncancel_get", arguments);
  },
  set: function oncancel() {
    return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "oncancel_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLElement.prototype, "oncanplay", {
  configurable: true,
  enumerable: true,
  get: function oncanplay() {
    return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "oncanplay_get", arguments);
  },
  set: function oncanplay() {
    return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "oncanplay_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLElement.prototype, "oncanplaythrough", {
  configurable: true,
  enumerable: true,
  get: function oncanplaythrough() {
    return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "oncanplaythrough_get", arguments);
  },
  set: function oncanplaythrough() {
    return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "oncanplaythrough_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLElement.prototype, "onchange", {
  configurable: true,
  enumerable: true,
  get: function onchange() {
    return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "onchange_get", arguments);
  },
  set: function onchange() {
    return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "onchange_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLElement.prototype, "onclick", {
  configurable: true,
  enumerable: true,
  get: function onclick() {
    return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "onclick_get", arguments);
  },
  set: function onclick() {
    return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "onclick_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLElement.prototype, "onclose", {
  configurable: true,
  enumerable: true,
  get: function onclose() {
    return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "onclose_get", arguments);
  },
  set: function onclose() {
    return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "onclose_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLElement.prototype, "oncontextlost", {
  configurable: true,
  enumerable: true,
  get: function oncontextlost() {
    return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "oncontextlost_get", arguments);
  },
  set: function oncontextlost() {
    return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "oncontextlost_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLElement.prototype, "oncontextmenu", {
  configurable: true,
  enumerable: true,
  get: function oncontextmenu() {
    return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "oncontextmenu_get", arguments);
  },
  set: function oncontextmenu() {
    return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "oncontextmenu_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLElement.prototype, "oncontextrestored", {
  configurable: true,
  enumerable: true,
  get: function oncontextrestored() {
    return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "oncontextrestored_get", arguments);
  },
  set: function oncontextrestored() {
    return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "oncontextrestored_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLElement.prototype, "oncuechange", {
  configurable: true,
  enumerable: true,
  get: function oncuechange() {
    return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "oncuechange_get", arguments);
  },
  set: function oncuechange() {
    return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "oncuechange_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLElement.prototype, "ondblclick", {
  configurable: true,
  enumerable: true,
  get: function ondblclick() {
    return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "ondblclick_get", arguments);
  },
  set: function ondblclick() {
    return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "ondblclick_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLElement.prototype, "ondrag", {
  configurable: true,
  enumerable: true,
  get: function ondrag() {
    return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "ondrag_get", arguments);
  },
  set: function ondrag() {
    return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "ondrag_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLElement.prototype, "ondragend", {
  configurable: true,
  enumerable: true,
  get: function ondragend() {
    return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "ondragend_get", arguments);
  },
  set: function ondragend() {
    return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "ondragend_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLElement.prototype, "ondragenter", {
  configurable: true,
  enumerable: true,
  get: function ondragenter() {
    return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "ondragenter_get", arguments);
  },
  set: function ondragenter() {
    return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "ondragenter_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLElement.prototype, "ondragleave", {
  configurable: true,
  enumerable: true,
  get: function ondragleave() {
    return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "ondragleave_get", arguments);
  },
  set: function ondragleave() {
    return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "ondragleave_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLElement.prototype, "ondragover", {
  configurable: true,
  enumerable: true,
  get: function ondragover() {
    return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "ondragover_get", arguments);
  },
  set: function ondragover() {
    return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "ondragover_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLElement.prototype, "ondragstart", {
  configurable: true,
  enumerable: true,
  get: function ondragstart() {
    return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "ondragstart_get", arguments);
  },
  set: function ondragstart() {
    return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "ondragstart_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLElement.prototype, "ondrop", {
  configurable: true,
  enumerable: true,
  get: function ondrop() {
    return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "ondrop_get", arguments);
  },
  set: function ondrop() {
    return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "ondrop_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLElement.prototype, "ondurationchange", {
  configurable: true,
  enumerable: true,
  get: function ondurationchange() {
    return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "ondurationchange_get", arguments);
  },
  set: function ondurationchange() {
    return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "ondurationchange_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLElement.prototype, "onemptied", {
  configurable: true,
  enumerable: true,
  get: function onemptied() {
    return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "onemptied_get", arguments);
  },
  set: function onemptied() {
    return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "onemptied_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLElement.prototype, "onended", {
  configurable: true,
  enumerable: true,
  get: function onended() {
    return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "onended_get", arguments);
  },
  set: function onended() {
    return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "onended_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLElement.prototype, "onerror", {
  configurable: true,
  enumerable: true,
  get: function onerror() {
    return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "onerror_get", arguments);
  },
  set: function onerror() {
    return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "onerror_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLElement.prototype, "onfocus", {
  configurable: true,
  enumerable: true,
  get: function onfocus() {
    return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "onfocus_get", arguments);
  },
  set: function onfocus() {
    return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "onfocus_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLElement.prototype, "onformdata", {
  configurable: true,
  enumerable: true,
  get: function onformdata() {
    return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "onformdata_get", arguments);
  },
  set: function onformdata() {
    return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "onformdata_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLElement.prototype, "oninput", {
  configurable: true,
  enumerable: true,
  get: function oninput() {
    return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "oninput_get", arguments);
  },
  set: function oninput() {
    return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "oninput_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLElement.prototype, "oninvalid", {
  configurable: true,
  enumerable: true,
  get: function oninvalid() {
    return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "oninvalid_get", arguments);
  },
  set: function oninvalid() {
    return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "oninvalid_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLElement.prototype, "onkeydown", {
  configurable: true,
  enumerable: true,
  get: function onkeydown() {
    return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "onkeydown_get", arguments);
  },
  set: function onkeydown() {
    return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "onkeydown_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLElement.prototype, "onkeypress", {
  configurable: true,
  enumerable: true,
  get: function onkeypress() {
    return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "onkeypress_get", arguments);
  },
  set: function onkeypress() {
    return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "onkeypress_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLElement.prototype, "onkeyup", {
  configurable: true,
  enumerable: true,
  get: function onkeyup() {
    return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "onkeyup_get", arguments);
  },
  set: function onkeyup() {
    return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "onkeyup_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLElement.prototype, "onload", {
  configurable: true,
  enumerable: true,
  get: function onload() {
    return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "onload_get", arguments);
  },
  set: function onload() {
    return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "onload_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLElement.prototype, "onloadeddata", {
  configurable: true,
  enumerable: true,
  get: function onloadeddata() {
    return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "onloadeddata_get", arguments);
  },
  set: function onloadeddata() {
    return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "onloadeddata_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLElement.prototype, "onloadedmetadata", {
  configurable: true,
  enumerable: true,
  get: function onloadedmetadata() {
    return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "onloadedmetadata_get", arguments);
  },
  set: function onloadedmetadata() {
    return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "onloadedmetadata_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLElement.prototype, "onloadstart", {
  configurable: true,
  enumerable: true,
  get: function onloadstart() {
    return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "onloadstart_get", arguments);
  },
  set: function onloadstart() {
    return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "onloadstart_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLElement.prototype, "onmousedown", {
  configurable: true,
  enumerable: true,
  get: function onmousedown() {
    return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "onmousedown_get", arguments);
  },
  set: function onmousedown() {
    return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "onmousedown_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLElement.prototype, "onmouseenter", {
  configurable: true,
  enumerable: true,
  get: function onmouseenter() {
    return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "onmouseenter_get", arguments);
  },
  set: function onmouseenter() {
    return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "onmouseenter_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLElement.prototype, "onmouseleave", {
  configurable: true,
  enumerable: true,
  get: function onmouseleave() {
    return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "onmouseleave_get", arguments);
  },
  set: function onmouseleave() {
    return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "onmouseleave_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLElement.prototype, "onmousemove", {
  configurable: true,
  enumerable: true,
  get: function onmousemove() {
    return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "onmousemove_get", arguments);
  },
  set: function onmousemove() {
    return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "onmousemove_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLElement.prototype, "onmouseout", {
  configurable: true,
  enumerable: true,
  get: function onmouseout() {
    return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "onmouseout_get", arguments);
  },
  set: function onmouseout() {
    return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "onmouseout_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLElement.prototype, "onmouseover", {
  configurable: true,
  enumerable: true,
  get: function onmouseover() {
    return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "onmouseover_get", arguments);
  },
  set: function onmouseover() {
    return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "onmouseover_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLElement.prototype, "onmouseup", {
  configurable: true,
  enumerable: true,
  get: function onmouseup() {
    return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "onmouseup_get", arguments);
  },
  set: function onmouseup() {
    return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "onmouseup_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLElement.prototype, "onmousewheel", {
  configurable: true,
  enumerable: true,
  get: function onmousewheel() {
    return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "onmousewheel_get", arguments);
  },
  set: function onmousewheel() {
    return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "onmousewheel_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLElement.prototype, "onpause", {
  configurable: true,
  enumerable: true,
  get: function onpause() {
    return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "onpause_get", arguments);
  },
  set: function onpause() {
    return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "onpause_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLElement.prototype, "onplay", {
  configurable: true,
  enumerable: true,
  get: function onplay() {
    return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "onplay_get", arguments);
  },
  set: function onplay() {
    return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "onplay_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLElement.prototype, "onplaying", {
  configurable: true,
  enumerable: true,
  get: function onplaying() {
    return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "onplaying_get", arguments);
  },
  set: function onplaying() {
    return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "onplaying_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLElement.prototype, "onprogress", {
  configurable: true,
  enumerable: true,
  get: function onprogress() {
    return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "onprogress_get", arguments);
  },
  set: function onprogress() {
    return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "onprogress_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLElement.prototype, "onratechange", {
  configurable: true,
  enumerable: true,
  get: function onratechange() {
    return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "onratechange_get", arguments);
  },
  set: function onratechange() {
    return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "onratechange_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLElement.prototype, "onreset", {
  configurable: true,
  enumerable: true,
  get: function onreset() {
    return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "onreset_get", arguments);
  },
  set: function onreset() {
    return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "onreset_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLElement.prototype, "onresize", {
  configurable: true,
  enumerable: true,
  get: function onresize() {
    return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "onresize_get", arguments);
  },
  set: function onresize() {
    return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "onresize_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLElement.prototype, "onscroll", {
  configurable: true,
  enumerable: true,
  get: function onscroll() {
    return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "onscroll_get", arguments);
  },
  set: function onscroll() {
    return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "onscroll_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLElement.prototype, "onsecuritypolicyviolation", {
  configurable: true,
  enumerable: true,
  get: function onsecuritypolicyviolation() {
    return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "onsecuritypolicyviolation_get", arguments);
  },
  set: function onsecuritypolicyviolation() {
    return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "onsecuritypolicyviolation_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLElement.prototype, "onseeked", {
  configurable: true,
  enumerable: true,
  get: function onseeked() {
    return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "onseeked_get", arguments);
  },
  set: function onseeked() {
    return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "onseeked_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLElement.prototype, "onseeking", {
  configurable: true,
  enumerable: true,
  get: function onseeking() {
    return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "onseeking_get", arguments);
  },
  set: function onseeking() {
    return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "onseeking_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLElement.prototype, "onselect", {
  configurable: true,
  enumerable: true,
  get: function onselect() {
    return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "onselect_get", arguments);
  },
  set: function onselect() {
    return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "onselect_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLElement.prototype, "onslotchange", {
  configurable: true,
  enumerable: true,
  get: function onslotchange() {
    return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "onslotchange_get", arguments);
  },
  set: function onslotchange() {
    return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "onslotchange_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLElement.prototype, "onstalled", {
  configurable: true,
  enumerable: true,
  get: function onstalled() {
    return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "onstalled_get", arguments);
  },
  set: function onstalled() {
    return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "onstalled_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLElement.prototype, "onsubmit", {
  configurable: true,
  enumerable: true,
  get: function onsubmit() {
    return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "onsubmit_get", arguments);
  },
  set: function onsubmit() {
    return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "onsubmit_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLElement.prototype, "onsuspend", {
  configurable: true,
  enumerable: true,
  get: function onsuspend() {
    return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "onsuspend_get", arguments);
  },
  set: function onsuspend() {
    return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "onsuspend_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLElement.prototype, "ontimeupdate", {
  configurable: true,
  enumerable: true,
  get: function ontimeupdate() {
    return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "ontimeupdate_get", arguments);
  },
  set: function ontimeupdate() {
    return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "ontimeupdate_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLElement.prototype, "ontoggle", {
  configurable: true,
  enumerable: true,
  get: function ontoggle() {
    return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "ontoggle_get", arguments);
  },
  set: function ontoggle() {
    return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "ontoggle_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLElement.prototype, "onvolumechange", {
  configurable: true,
  enumerable: true,
  get: function onvolumechange() {
    return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "onvolumechange_get", arguments);
  },
  set: function onvolumechange() {
    return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "onvolumechange_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLElement.prototype, "onwaiting", {
  configurable: true,
  enumerable: true,
  get: function onwaiting() {
    return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "onwaiting_get", arguments);
  },
  set: function onwaiting() {
    return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "onwaiting_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLElement.prototype, "onwebkitanimationend", {
  configurable: true,
  enumerable: true,
  get: function onwebkitanimationend() {
    return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "onwebkitanimationend_get", arguments);
  },
  set: function onwebkitanimationend() {
    return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "onwebkitanimationend_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLElement.prototype, "onwebkitanimationiteration", {
  configurable: true,
  enumerable: true,
  get: function onwebkitanimationiteration() {
    return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "onwebkitanimationiteration_get", arguments);
  },
  set: function onwebkitanimationiteration() {
    return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "onwebkitanimationiteration_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLElement.prototype, "onwebkitanimationstart", {
  configurable: true,
  enumerable: true,
  get: function onwebkitanimationstart() {
    return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "onwebkitanimationstart_get", arguments);
  },
  set: function onwebkitanimationstart() {
    return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "onwebkitanimationstart_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLElement.prototype, "onwebkittransitionend", {
  configurable: true,
  enumerable: true,
  get: function onwebkittransitionend() {
    return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "onwebkittransitionend_get", arguments);
  },
  set: function onwebkittransitionend() {
    return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "onwebkittransitionend_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLElement.prototype, "onwheel", {
  configurable: true,
  enumerable: true,
  get: function onwheel() {
    return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "onwheel_get", arguments);
  },
  set: function onwheel() {
    return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "onwheel_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLElement.prototype, "onauxclick", {
  configurable: true,
  enumerable: true,
  get: function onauxclick() {
    return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "onauxclick_get", arguments);
  },
  set: function onauxclick() {
    return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "onauxclick_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLElement.prototype, "ongotpointercapture", {
  configurable: true,
  enumerable: true,
  get: function ongotpointercapture() {
    return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "ongotpointercapture_get", arguments);
  },
  set: function ongotpointercapture() {
    return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "ongotpointercapture_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLElement.prototype, "onlostpointercapture", {
  configurable: true,
  enumerable: true,
  get: function onlostpointercapture() {
    return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "onlostpointercapture_get", arguments);
  },
  set: function onlostpointercapture() {
    return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "onlostpointercapture_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLElement.prototype, "onpointerdown", {
  configurable: true,
  enumerable: true,
  get: function onpointerdown() {
    return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "onpointerdown_get", arguments);
  },
  set: function onpointerdown() {
    return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "onpointerdown_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLElement.prototype, "onpointermove", {
  configurable: true,
  enumerable: true,
  get: function onpointermove() {
    return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "onpointermove_get", arguments);
  },
  set: function onpointermove() {
    return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "onpointermove_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLElement.prototype, "onpointerrawupdate", {
  configurable: true,
  enumerable: true,
  get: function onpointerrawupdate() {
    return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "onpointerrawupdate_get", arguments);
  },
  set: function onpointerrawupdate() {
    return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "onpointerrawupdate_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLElement.prototype, "onpointerup", {
  configurable: true,
  enumerable: true,
  get: function onpointerup() {
    return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "onpointerup_get", arguments);
  },
  set: function onpointerup() {
    return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "onpointerup_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLElement.prototype, "onpointercancel", {
  configurable: true,
  enumerable: true,
  get: function onpointercancel() {
    return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "onpointercancel_get", arguments);
  },
  set: function onpointercancel() {
    return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "onpointercancel_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLElement.prototype, "onpointerover", {
  configurable: true,
  enumerable: true,
  get: function onpointerover() {
    return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "onpointerover_get", arguments);
  },
  set: function onpointerover() {
    return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "onpointerover_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLElement.prototype, "onpointerout", {
  configurable: true,
  enumerable: true,
  get: function onpointerout() {
    return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "onpointerout_get", arguments);
  },
  set: function onpointerout() {
    return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "onpointerout_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLElement.prototype, "onpointerenter", {
  configurable: true,
  enumerable: true,
  get: function onpointerenter() {
    return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "onpointerenter_get", arguments);
  },
  set: function onpointerenter() {
    return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "onpointerenter_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLElement.prototype, "onpointerleave", {
  configurable: true,
  enumerable: true,
  get: function onpointerleave() {
    return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "onpointerleave_get", arguments);
  },
  set: function onpointerleave() {
    return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "onpointerleave_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLElement.prototype, "onselectstart", {
  configurable: true,
  enumerable: true,
  get: function onselectstart() {
    return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "onselectstart_get", arguments);
  },
  set: function onselectstart() {
    return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "onselectstart_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLElement.prototype, "onselectionchange", {
  configurable: true,
  enumerable: true,
  get: function onselectionchange() {
    return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "onselectionchange_get", arguments);
  },
  set: function onselectionchange() {
    return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "onselectionchange_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLElement.prototype, "onanimationend", {
  configurable: true,
  enumerable: true,
  get: function onanimationend() {
    return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "onanimationend_get", arguments);
  },
  set: function onanimationend() {
    return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "onanimationend_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLElement.prototype, "onanimationiteration", {
  configurable: true,
  enumerable: true,
  get: function onanimationiteration() {
    return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "onanimationiteration_get", arguments);
  },
  set: function onanimationiteration() {
    return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "onanimationiteration_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLElement.prototype, "onanimationstart", {
  configurable: true,
  enumerable: true,
  get: function onanimationstart() {
    return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "onanimationstart_get", arguments);
  },
  set: function onanimationstart() {
    return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "onanimationstart_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLElement.prototype, "ontransitionrun", {
  configurable: true,
  enumerable: true,
  get: function ontransitionrun() {
    return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "ontransitionrun_get", arguments);
  },
  set: function ontransitionrun() {
    return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "ontransitionrun_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLElement.prototype, "ontransitionstart", {
  configurable: true,
  enumerable: true,
  get: function ontransitionstart() {
    return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "ontransitionstart_get", arguments);
  },
  set: function ontransitionstart() {
    return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "ontransitionstart_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLElement.prototype, "ontransitionend", {
  configurable: true,
  enumerable: true,
  get: function ontransitionend() {
    return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "ontransitionend_get", arguments);
  },
  set: function ontransitionend() {
    return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "ontransitionend_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLElement.prototype, "ontransitioncancel", {
  configurable: true,
  enumerable: true,
  get: function ontransitioncancel() {
    return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "ontransitioncancel_get", arguments);
  },
  set: function ontransitioncancel() {
    return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "ontransitioncancel_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLElement.prototype, "oncopy", {
  configurable: true,
  enumerable: true,
  get: function oncopy() {
    return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "oncopy_get", arguments);
  },
  set: function oncopy() {
    return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "oncopy_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLElement.prototype, "oncut", {
  configurable: true,
  enumerable: true,
  get: function oncut() {
    return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "oncut_get", arguments);
  },
  set: function oncut() {
    return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "oncut_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLElement.prototype, "onpaste", {
  configurable: true,
  enumerable: true,
  get: function onpaste() {
    return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "onpaste_get", arguments);
  },
  set: function onpaste() {
    return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "onpaste_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLElement.prototype, "dataset", {
  configurable: true,
  enumerable: true,
  get: function dataset() {
    return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "dataset_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(HTMLElement.prototype, "nonce", {
  configurable: true,
  enumerable: true,
  get: function nonce() {
    return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "nonce_get", arguments);
  },
  set: function nonce() {
    return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "nonce_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLElement.prototype, "autofocus", {
  configurable: true,
  enumerable: true,
  get: function autofocus() {
    return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "autofocus_get", arguments);
  },
  set: function autofocus() {
    return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "autofocus_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLElement.prototype, "tabIndex", {
  configurable: true,
  enumerable: true,
  get: function tabIndex() {
    return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "tabIndex_get", arguments);
  },
  set: function tabIndex() {
    return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "tabIndex_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLElement.prototype, "style", {
  configurable: true,
  enumerable: true,
  get: function style() {
    return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "style_get", arguments);
  },
  set: function style() {
    return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "style_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLElement.prototype, "attributeStyleMap", {
  configurable: true,
  enumerable: true,
  get: function attributeStyleMap() {
    return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "attributeStyleMap_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(HTMLElement.prototype, "attachInternals", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function attachInternals() {
    return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "attachInternals", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLElement.prototype, "blur", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function blur() {
    return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "blur", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLElement.prototype, "click", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function click() {
    return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "click", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLElement.prototype, "focus", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function focus() {
    return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "focus", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLElement.prototype, "inert", {
  configurable: true,
  enumerable: true,
  get: function inert() {
    return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "inert_get", arguments);
  },
  set: function inert() {
    return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "inert_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLElement.prototype, "oncontentvisibilityautostatechange", {
  configurable: true,
  enumerable: true,
  get: function oncontentvisibilityautostatechange() {
    return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "oncontentvisibilityautostatechange_get", arguments);
  },
  set: function oncontentvisibilityautostatechange() {
    return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "oncontentvisibilityautostatechange_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLElement.prototype, "onscrollend", {
  configurable: true,
  enumerable: true,
  get: function onscrollend() {
    return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "onscrollend_get", arguments);
  },
  set: function onscrollend() {
    return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "onscrollend_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLElement.prototype, "popover", {
  configurable: true,
  enumerable: true,
  get: function popover() {
    return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "popover_get", arguments);
  },
  set: function popover() {
    return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "popover_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLElement.prototype, "onbeforetoggle", {
  configurable: true,
  enumerable: true,
  get: function onbeforetoggle() {
    return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "onbeforetoggle_get", arguments);
  },
  set: function onbeforetoggle() {
    return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "onbeforetoggle_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLElement.prototype, "onbeforematch", {
  configurable: true,
  enumerable: true,
  get: function onbeforematch() {
    return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "onbeforematch_get", arguments);
  },
  set: function onbeforematch() {
    return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "onbeforematch_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLElement.prototype, "hidePopover", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function hidePopover() {
    return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "hidePopover", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLElement.prototype, "showPopover", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function showPopover() {
    return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "showPopover", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLElement.prototype, "togglePopover", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function togglePopover() {
    return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "togglePopover", arguments);
  }
});