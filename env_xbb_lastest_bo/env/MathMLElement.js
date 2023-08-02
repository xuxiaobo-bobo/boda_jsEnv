// MathMLElement对象

MathMLElement = function MathMLElement() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof MathMLElement)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('MathMLElement 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(MathMLElement, "MathMLElement");
MathMLElement.prototype.__proto__ = Element.prototype;
MathMLElement.__proto__ = Element;
bodavm.toolsFunc.defineProperty(MathMLElement.prototype, "onbeforexrselect", {
  configurable: true,
  enumerable: true,
  get: function onbeforexrselect() {
    return bodavm.toolsFunc.dispatch(this, MathMLElement.prototype, "MathMLElement", "onbeforexrselect_get", arguments);
  },
  set: function onbeforexrselect() {
    return bodavm.toolsFunc.dispatch(this, MathMLElement.prototype, "MathMLElement", "onbeforexrselect_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(MathMLElement.prototype, "onabort", {
  configurable: true,
  enumerable: true,
  get: function onabort() {
    return bodavm.toolsFunc.dispatch(this, MathMLElement.prototype, "MathMLElement", "onabort_get", arguments);
  },
  set: function onabort() {
    return bodavm.toolsFunc.dispatch(this, MathMLElement.prototype, "MathMLElement", "onabort_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(MathMLElement.prototype, "onbeforeinput", {
  configurable: true,
  enumerable: true,
  get: function onbeforeinput() {
    return bodavm.toolsFunc.dispatch(this, MathMLElement.prototype, "MathMLElement", "onbeforeinput_get", arguments);
  },
  set: function onbeforeinput() {
    return bodavm.toolsFunc.dispatch(this, MathMLElement.prototype, "MathMLElement", "onbeforeinput_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(MathMLElement.prototype, "onblur", {
  configurable: true,
  enumerable: true,
  get: function onblur() {
    return bodavm.toolsFunc.dispatch(this, MathMLElement.prototype, "MathMLElement", "onblur_get", arguments);
  },
  set: function onblur() {
    return bodavm.toolsFunc.dispatch(this, MathMLElement.prototype, "MathMLElement", "onblur_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(MathMLElement.prototype, "oncancel", {
  configurable: true,
  enumerable: true,
  get: function oncancel() {
    return bodavm.toolsFunc.dispatch(this, MathMLElement.prototype, "MathMLElement", "oncancel_get", arguments);
  },
  set: function oncancel() {
    return bodavm.toolsFunc.dispatch(this, MathMLElement.prototype, "MathMLElement", "oncancel_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(MathMLElement.prototype, "oncanplay", {
  configurable: true,
  enumerable: true,
  get: function oncanplay() {
    return bodavm.toolsFunc.dispatch(this, MathMLElement.prototype, "MathMLElement", "oncanplay_get", arguments);
  },
  set: function oncanplay() {
    return bodavm.toolsFunc.dispatch(this, MathMLElement.prototype, "MathMLElement", "oncanplay_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(MathMLElement.prototype, "oncanplaythrough", {
  configurable: true,
  enumerable: true,
  get: function oncanplaythrough() {
    return bodavm.toolsFunc.dispatch(this, MathMLElement.prototype, "MathMLElement", "oncanplaythrough_get", arguments);
  },
  set: function oncanplaythrough() {
    return bodavm.toolsFunc.dispatch(this, MathMLElement.prototype, "MathMLElement", "oncanplaythrough_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(MathMLElement.prototype, "onchange", {
  configurable: true,
  enumerable: true,
  get: function onchange() {
    return bodavm.toolsFunc.dispatch(this, MathMLElement.prototype, "MathMLElement", "onchange_get", arguments);
  },
  set: function onchange() {
    return bodavm.toolsFunc.dispatch(this, MathMLElement.prototype, "MathMLElement", "onchange_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(MathMLElement.prototype, "onclick", {
  configurable: true,
  enumerable: true,
  get: function onclick() {
    return bodavm.toolsFunc.dispatch(this, MathMLElement.prototype, "MathMLElement", "onclick_get", arguments);
  },
  set: function onclick() {
    return bodavm.toolsFunc.dispatch(this, MathMLElement.prototype, "MathMLElement", "onclick_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(MathMLElement.prototype, "onclose", {
  configurable: true,
  enumerable: true,
  get: function onclose() {
    return bodavm.toolsFunc.dispatch(this, MathMLElement.prototype, "MathMLElement", "onclose_get", arguments);
  },
  set: function onclose() {
    return bodavm.toolsFunc.dispatch(this, MathMLElement.prototype, "MathMLElement", "onclose_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(MathMLElement.prototype, "oncontextlost", {
  configurable: true,
  enumerable: true,
  get: function oncontextlost() {
    return bodavm.toolsFunc.dispatch(this, MathMLElement.prototype, "MathMLElement", "oncontextlost_get", arguments);
  },
  set: function oncontextlost() {
    return bodavm.toolsFunc.dispatch(this, MathMLElement.prototype, "MathMLElement", "oncontextlost_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(MathMLElement.prototype, "oncontextmenu", {
  configurable: true,
  enumerable: true,
  get: function oncontextmenu() {
    return bodavm.toolsFunc.dispatch(this, MathMLElement.prototype, "MathMLElement", "oncontextmenu_get", arguments);
  },
  set: function oncontextmenu() {
    return bodavm.toolsFunc.dispatch(this, MathMLElement.prototype, "MathMLElement", "oncontextmenu_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(MathMLElement.prototype, "oncontextrestored", {
  configurable: true,
  enumerable: true,
  get: function oncontextrestored() {
    return bodavm.toolsFunc.dispatch(this, MathMLElement.prototype, "MathMLElement", "oncontextrestored_get", arguments);
  },
  set: function oncontextrestored() {
    return bodavm.toolsFunc.dispatch(this, MathMLElement.prototype, "MathMLElement", "oncontextrestored_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(MathMLElement.prototype, "oncuechange", {
  configurable: true,
  enumerable: true,
  get: function oncuechange() {
    return bodavm.toolsFunc.dispatch(this, MathMLElement.prototype, "MathMLElement", "oncuechange_get", arguments);
  },
  set: function oncuechange() {
    return bodavm.toolsFunc.dispatch(this, MathMLElement.prototype, "MathMLElement", "oncuechange_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(MathMLElement.prototype, "ondblclick", {
  configurable: true,
  enumerable: true,
  get: function ondblclick() {
    return bodavm.toolsFunc.dispatch(this, MathMLElement.prototype, "MathMLElement", "ondblclick_get", arguments);
  },
  set: function ondblclick() {
    return bodavm.toolsFunc.dispatch(this, MathMLElement.prototype, "MathMLElement", "ondblclick_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(MathMLElement.prototype, "ondrag", {
  configurable: true,
  enumerable: true,
  get: function ondrag() {
    return bodavm.toolsFunc.dispatch(this, MathMLElement.prototype, "MathMLElement", "ondrag_get", arguments);
  },
  set: function ondrag() {
    return bodavm.toolsFunc.dispatch(this, MathMLElement.prototype, "MathMLElement", "ondrag_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(MathMLElement.prototype, "ondragend", {
  configurable: true,
  enumerable: true,
  get: function ondragend() {
    return bodavm.toolsFunc.dispatch(this, MathMLElement.prototype, "MathMLElement", "ondragend_get", arguments);
  },
  set: function ondragend() {
    return bodavm.toolsFunc.dispatch(this, MathMLElement.prototype, "MathMLElement", "ondragend_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(MathMLElement.prototype, "ondragenter", {
  configurable: true,
  enumerable: true,
  get: function ondragenter() {
    return bodavm.toolsFunc.dispatch(this, MathMLElement.prototype, "MathMLElement", "ondragenter_get", arguments);
  },
  set: function ondragenter() {
    return bodavm.toolsFunc.dispatch(this, MathMLElement.prototype, "MathMLElement", "ondragenter_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(MathMLElement.prototype, "ondragleave", {
  configurable: true,
  enumerable: true,
  get: function ondragleave() {
    return bodavm.toolsFunc.dispatch(this, MathMLElement.prototype, "MathMLElement", "ondragleave_get", arguments);
  },
  set: function ondragleave() {
    return bodavm.toolsFunc.dispatch(this, MathMLElement.prototype, "MathMLElement", "ondragleave_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(MathMLElement.prototype, "ondragover", {
  configurable: true,
  enumerable: true,
  get: function ondragover() {
    return bodavm.toolsFunc.dispatch(this, MathMLElement.prototype, "MathMLElement", "ondragover_get", arguments);
  },
  set: function ondragover() {
    return bodavm.toolsFunc.dispatch(this, MathMLElement.prototype, "MathMLElement", "ondragover_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(MathMLElement.prototype, "ondragstart", {
  configurable: true,
  enumerable: true,
  get: function ondragstart() {
    return bodavm.toolsFunc.dispatch(this, MathMLElement.prototype, "MathMLElement", "ondragstart_get", arguments);
  },
  set: function ondragstart() {
    return bodavm.toolsFunc.dispatch(this, MathMLElement.prototype, "MathMLElement", "ondragstart_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(MathMLElement.prototype, "ondrop", {
  configurable: true,
  enumerable: true,
  get: function ondrop() {
    return bodavm.toolsFunc.dispatch(this, MathMLElement.prototype, "MathMLElement", "ondrop_get", arguments);
  },
  set: function ondrop() {
    return bodavm.toolsFunc.dispatch(this, MathMLElement.prototype, "MathMLElement", "ondrop_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(MathMLElement.prototype, "ondurationchange", {
  configurable: true,
  enumerable: true,
  get: function ondurationchange() {
    return bodavm.toolsFunc.dispatch(this, MathMLElement.prototype, "MathMLElement", "ondurationchange_get", arguments);
  },
  set: function ondurationchange() {
    return bodavm.toolsFunc.dispatch(this, MathMLElement.prototype, "MathMLElement", "ondurationchange_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(MathMLElement.prototype, "onemptied", {
  configurable: true,
  enumerable: true,
  get: function onemptied() {
    return bodavm.toolsFunc.dispatch(this, MathMLElement.prototype, "MathMLElement", "onemptied_get", arguments);
  },
  set: function onemptied() {
    return bodavm.toolsFunc.dispatch(this, MathMLElement.prototype, "MathMLElement", "onemptied_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(MathMLElement.prototype, "onended", {
  configurable: true,
  enumerable: true,
  get: function onended() {
    return bodavm.toolsFunc.dispatch(this, MathMLElement.prototype, "MathMLElement", "onended_get", arguments);
  },
  set: function onended() {
    return bodavm.toolsFunc.dispatch(this, MathMLElement.prototype, "MathMLElement", "onended_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(MathMLElement.prototype, "onerror", {
  configurable: true,
  enumerable: true,
  get: function onerror() {
    return bodavm.toolsFunc.dispatch(this, MathMLElement.prototype, "MathMLElement", "onerror_get", arguments);
  },
  set: function onerror() {
    return bodavm.toolsFunc.dispatch(this, MathMLElement.prototype, "MathMLElement", "onerror_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(MathMLElement.prototype, "onfocus", {
  configurable: true,
  enumerable: true,
  get: function onfocus() {
    return bodavm.toolsFunc.dispatch(this, MathMLElement.prototype, "MathMLElement", "onfocus_get", arguments);
  },
  set: function onfocus() {
    return bodavm.toolsFunc.dispatch(this, MathMLElement.prototype, "MathMLElement", "onfocus_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(MathMLElement.prototype, "onformdata", {
  configurable: true,
  enumerable: true,
  get: function onformdata() {
    return bodavm.toolsFunc.dispatch(this, MathMLElement.prototype, "MathMLElement", "onformdata_get", arguments);
  },
  set: function onformdata() {
    return bodavm.toolsFunc.dispatch(this, MathMLElement.prototype, "MathMLElement", "onformdata_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(MathMLElement.prototype, "oninput", {
  configurable: true,
  enumerable: true,
  get: function oninput() {
    return bodavm.toolsFunc.dispatch(this, MathMLElement.prototype, "MathMLElement", "oninput_get", arguments);
  },
  set: function oninput() {
    return bodavm.toolsFunc.dispatch(this, MathMLElement.prototype, "MathMLElement", "oninput_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(MathMLElement.prototype, "oninvalid", {
  configurable: true,
  enumerable: true,
  get: function oninvalid() {
    return bodavm.toolsFunc.dispatch(this, MathMLElement.prototype, "MathMLElement", "oninvalid_get", arguments);
  },
  set: function oninvalid() {
    return bodavm.toolsFunc.dispatch(this, MathMLElement.prototype, "MathMLElement", "oninvalid_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(MathMLElement.prototype, "onkeydown", {
  configurable: true,
  enumerable: true,
  get: function onkeydown() {
    return bodavm.toolsFunc.dispatch(this, MathMLElement.prototype, "MathMLElement", "onkeydown_get", arguments);
  },
  set: function onkeydown() {
    return bodavm.toolsFunc.dispatch(this, MathMLElement.prototype, "MathMLElement", "onkeydown_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(MathMLElement.prototype, "onkeypress", {
  configurable: true,
  enumerable: true,
  get: function onkeypress() {
    return bodavm.toolsFunc.dispatch(this, MathMLElement.prototype, "MathMLElement", "onkeypress_get", arguments);
  },
  set: function onkeypress() {
    return bodavm.toolsFunc.dispatch(this, MathMLElement.prototype, "MathMLElement", "onkeypress_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(MathMLElement.prototype, "onkeyup", {
  configurable: true,
  enumerable: true,
  get: function onkeyup() {
    return bodavm.toolsFunc.dispatch(this, MathMLElement.prototype, "MathMLElement", "onkeyup_get", arguments);
  },
  set: function onkeyup() {
    return bodavm.toolsFunc.dispatch(this, MathMLElement.prototype, "MathMLElement", "onkeyup_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(MathMLElement.prototype, "onload", {
  configurable: true,
  enumerable: true,
  get: function onload() {
    return bodavm.toolsFunc.dispatch(this, MathMLElement.prototype, "MathMLElement", "onload_get", arguments);
  },
  set: function onload() {
    return bodavm.toolsFunc.dispatch(this, MathMLElement.prototype, "MathMLElement", "onload_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(MathMLElement.prototype, "onloadeddata", {
  configurable: true,
  enumerable: true,
  get: function onloadeddata() {
    return bodavm.toolsFunc.dispatch(this, MathMLElement.prototype, "MathMLElement", "onloadeddata_get", arguments);
  },
  set: function onloadeddata() {
    return bodavm.toolsFunc.dispatch(this, MathMLElement.prototype, "MathMLElement", "onloadeddata_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(MathMLElement.prototype, "onloadedmetadata", {
  configurable: true,
  enumerable: true,
  get: function onloadedmetadata() {
    return bodavm.toolsFunc.dispatch(this, MathMLElement.prototype, "MathMLElement", "onloadedmetadata_get", arguments);
  },
  set: function onloadedmetadata() {
    return bodavm.toolsFunc.dispatch(this, MathMLElement.prototype, "MathMLElement", "onloadedmetadata_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(MathMLElement.prototype, "onloadstart", {
  configurable: true,
  enumerable: true,
  get: function onloadstart() {
    return bodavm.toolsFunc.dispatch(this, MathMLElement.prototype, "MathMLElement", "onloadstart_get", arguments);
  },
  set: function onloadstart() {
    return bodavm.toolsFunc.dispatch(this, MathMLElement.prototype, "MathMLElement", "onloadstart_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(MathMLElement.prototype, "onmousedown", {
  configurable: true,
  enumerable: true,
  get: function onmousedown() {
    return bodavm.toolsFunc.dispatch(this, MathMLElement.prototype, "MathMLElement", "onmousedown_get", arguments);
  },
  set: function onmousedown() {
    return bodavm.toolsFunc.dispatch(this, MathMLElement.prototype, "MathMLElement", "onmousedown_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(MathMLElement.prototype, "onmouseenter", {
  configurable: true,
  enumerable: true,
  get: function onmouseenter() {
    return bodavm.toolsFunc.dispatch(this, MathMLElement.prototype, "MathMLElement", "onmouseenter_get", arguments);
  },
  set: function onmouseenter() {
    return bodavm.toolsFunc.dispatch(this, MathMLElement.prototype, "MathMLElement", "onmouseenter_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(MathMLElement.prototype, "onmouseleave", {
  configurable: true,
  enumerable: true,
  get: function onmouseleave() {
    return bodavm.toolsFunc.dispatch(this, MathMLElement.prototype, "MathMLElement", "onmouseleave_get", arguments);
  },
  set: function onmouseleave() {
    return bodavm.toolsFunc.dispatch(this, MathMLElement.prototype, "MathMLElement", "onmouseleave_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(MathMLElement.prototype, "onmousemove", {
  configurable: true,
  enumerable: true,
  get: function onmousemove() {
    return bodavm.toolsFunc.dispatch(this, MathMLElement.prototype, "MathMLElement", "onmousemove_get", arguments);
  },
  set: function onmousemove() {
    return bodavm.toolsFunc.dispatch(this, MathMLElement.prototype, "MathMLElement", "onmousemove_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(MathMLElement.prototype, "onmouseout", {
  configurable: true,
  enumerable: true,
  get: function onmouseout() {
    return bodavm.toolsFunc.dispatch(this, MathMLElement.prototype, "MathMLElement", "onmouseout_get", arguments);
  },
  set: function onmouseout() {
    return bodavm.toolsFunc.dispatch(this, MathMLElement.prototype, "MathMLElement", "onmouseout_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(MathMLElement.prototype, "onmouseover", {
  configurable: true,
  enumerable: true,
  get: function onmouseover() {
    return bodavm.toolsFunc.dispatch(this, MathMLElement.prototype, "MathMLElement", "onmouseover_get", arguments);
  },
  set: function onmouseover() {
    return bodavm.toolsFunc.dispatch(this, MathMLElement.prototype, "MathMLElement", "onmouseover_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(MathMLElement.prototype, "onmouseup", {
  configurable: true,
  enumerable: true,
  get: function onmouseup() {
    return bodavm.toolsFunc.dispatch(this, MathMLElement.prototype, "MathMLElement", "onmouseup_get", arguments);
  },
  set: function onmouseup() {
    return bodavm.toolsFunc.dispatch(this, MathMLElement.prototype, "MathMLElement", "onmouseup_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(MathMLElement.prototype, "onmousewheel", {
  configurable: true,
  enumerable: true,
  get: function onmousewheel() {
    return bodavm.toolsFunc.dispatch(this, MathMLElement.prototype, "MathMLElement", "onmousewheel_get", arguments);
  },
  set: function onmousewheel() {
    return bodavm.toolsFunc.dispatch(this, MathMLElement.prototype, "MathMLElement", "onmousewheel_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(MathMLElement.prototype, "onpause", {
  configurable: true,
  enumerable: true,
  get: function onpause() {
    return bodavm.toolsFunc.dispatch(this, MathMLElement.prototype, "MathMLElement", "onpause_get", arguments);
  },
  set: function onpause() {
    return bodavm.toolsFunc.dispatch(this, MathMLElement.prototype, "MathMLElement", "onpause_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(MathMLElement.prototype, "onplay", {
  configurable: true,
  enumerable: true,
  get: function onplay() {
    return bodavm.toolsFunc.dispatch(this, MathMLElement.prototype, "MathMLElement", "onplay_get", arguments);
  },
  set: function onplay() {
    return bodavm.toolsFunc.dispatch(this, MathMLElement.prototype, "MathMLElement", "onplay_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(MathMLElement.prototype, "onplaying", {
  configurable: true,
  enumerable: true,
  get: function onplaying() {
    return bodavm.toolsFunc.dispatch(this, MathMLElement.prototype, "MathMLElement", "onplaying_get", arguments);
  },
  set: function onplaying() {
    return bodavm.toolsFunc.dispatch(this, MathMLElement.prototype, "MathMLElement", "onplaying_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(MathMLElement.prototype, "onprogress", {
  configurable: true,
  enumerable: true,
  get: function onprogress() {
    return bodavm.toolsFunc.dispatch(this, MathMLElement.prototype, "MathMLElement", "onprogress_get", arguments);
  },
  set: function onprogress() {
    return bodavm.toolsFunc.dispatch(this, MathMLElement.prototype, "MathMLElement", "onprogress_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(MathMLElement.prototype, "onratechange", {
  configurable: true,
  enumerable: true,
  get: function onratechange() {
    return bodavm.toolsFunc.dispatch(this, MathMLElement.prototype, "MathMLElement", "onratechange_get", arguments);
  },
  set: function onratechange() {
    return bodavm.toolsFunc.dispatch(this, MathMLElement.prototype, "MathMLElement", "onratechange_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(MathMLElement.prototype, "onreset", {
  configurable: true,
  enumerable: true,
  get: function onreset() {
    return bodavm.toolsFunc.dispatch(this, MathMLElement.prototype, "MathMLElement", "onreset_get", arguments);
  },
  set: function onreset() {
    return bodavm.toolsFunc.dispatch(this, MathMLElement.prototype, "MathMLElement", "onreset_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(MathMLElement.prototype, "onresize", {
  configurable: true,
  enumerable: true,
  get: function onresize() {
    return bodavm.toolsFunc.dispatch(this, MathMLElement.prototype, "MathMLElement", "onresize_get", arguments);
  },
  set: function onresize() {
    return bodavm.toolsFunc.dispatch(this, MathMLElement.prototype, "MathMLElement", "onresize_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(MathMLElement.prototype, "onscroll", {
  configurable: true,
  enumerable: true,
  get: function onscroll() {
    return bodavm.toolsFunc.dispatch(this, MathMLElement.prototype, "MathMLElement", "onscroll_get", arguments);
  },
  set: function onscroll() {
    return bodavm.toolsFunc.dispatch(this, MathMLElement.prototype, "MathMLElement", "onscroll_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(MathMLElement.prototype, "onsecuritypolicyviolation", {
  configurable: true,
  enumerable: true,
  get: function onsecuritypolicyviolation() {
    return bodavm.toolsFunc.dispatch(this, MathMLElement.prototype, "MathMLElement", "onsecuritypolicyviolation_get", arguments);
  },
  set: function onsecuritypolicyviolation() {
    return bodavm.toolsFunc.dispatch(this, MathMLElement.prototype, "MathMLElement", "onsecuritypolicyviolation_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(MathMLElement.prototype, "onseeked", {
  configurable: true,
  enumerable: true,
  get: function onseeked() {
    return bodavm.toolsFunc.dispatch(this, MathMLElement.prototype, "MathMLElement", "onseeked_get", arguments);
  },
  set: function onseeked() {
    return bodavm.toolsFunc.dispatch(this, MathMLElement.prototype, "MathMLElement", "onseeked_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(MathMLElement.prototype, "onseeking", {
  configurable: true,
  enumerable: true,
  get: function onseeking() {
    return bodavm.toolsFunc.dispatch(this, MathMLElement.prototype, "MathMLElement", "onseeking_get", arguments);
  },
  set: function onseeking() {
    return bodavm.toolsFunc.dispatch(this, MathMLElement.prototype, "MathMLElement", "onseeking_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(MathMLElement.prototype, "onselect", {
  configurable: true,
  enumerable: true,
  get: function onselect() {
    return bodavm.toolsFunc.dispatch(this, MathMLElement.prototype, "MathMLElement", "onselect_get", arguments);
  },
  set: function onselect() {
    return bodavm.toolsFunc.dispatch(this, MathMLElement.prototype, "MathMLElement", "onselect_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(MathMLElement.prototype, "onslotchange", {
  configurable: true,
  enumerable: true,
  get: function onslotchange() {
    return bodavm.toolsFunc.dispatch(this, MathMLElement.prototype, "MathMLElement", "onslotchange_get", arguments);
  },
  set: function onslotchange() {
    return bodavm.toolsFunc.dispatch(this, MathMLElement.prototype, "MathMLElement", "onslotchange_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(MathMLElement.prototype, "onstalled", {
  configurable: true,
  enumerable: true,
  get: function onstalled() {
    return bodavm.toolsFunc.dispatch(this, MathMLElement.prototype, "MathMLElement", "onstalled_get", arguments);
  },
  set: function onstalled() {
    return bodavm.toolsFunc.dispatch(this, MathMLElement.prototype, "MathMLElement", "onstalled_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(MathMLElement.prototype, "onsubmit", {
  configurable: true,
  enumerable: true,
  get: function onsubmit() {
    return bodavm.toolsFunc.dispatch(this, MathMLElement.prototype, "MathMLElement", "onsubmit_get", arguments);
  },
  set: function onsubmit() {
    return bodavm.toolsFunc.dispatch(this, MathMLElement.prototype, "MathMLElement", "onsubmit_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(MathMLElement.prototype, "onsuspend", {
  configurable: true,
  enumerable: true,
  get: function onsuspend() {
    return bodavm.toolsFunc.dispatch(this, MathMLElement.prototype, "MathMLElement", "onsuspend_get", arguments);
  },
  set: function onsuspend() {
    return bodavm.toolsFunc.dispatch(this, MathMLElement.prototype, "MathMLElement", "onsuspend_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(MathMLElement.prototype, "ontimeupdate", {
  configurable: true,
  enumerable: true,
  get: function ontimeupdate() {
    return bodavm.toolsFunc.dispatch(this, MathMLElement.prototype, "MathMLElement", "ontimeupdate_get", arguments);
  },
  set: function ontimeupdate() {
    return bodavm.toolsFunc.dispatch(this, MathMLElement.prototype, "MathMLElement", "ontimeupdate_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(MathMLElement.prototype, "ontoggle", {
  configurable: true,
  enumerable: true,
  get: function ontoggle() {
    return bodavm.toolsFunc.dispatch(this, MathMLElement.prototype, "MathMLElement", "ontoggle_get", arguments);
  },
  set: function ontoggle() {
    return bodavm.toolsFunc.dispatch(this, MathMLElement.prototype, "MathMLElement", "ontoggle_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(MathMLElement.prototype, "onvolumechange", {
  configurable: true,
  enumerable: true,
  get: function onvolumechange() {
    return bodavm.toolsFunc.dispatch(this, MathMLElement.prototype, "MathMLElement", "onvolumechange_get", arguments);
  },
  set: function onvolumechange() {
    return bodavm.toolsFunc.dispatch(this, MathMLElement.prototype, "MathMLElement", "onvolumechange_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(MathMLElement.prototype, "onwaiting", {
  configurable: true,
  enumerable: true,
  get: function onwaiting() {
    return bodavm.toolsFunc.dispatch(this, MathMLElement.prototype, "MathMLElement", "onwaiting_get", arguments);
  },
  set: function onwaiting() {
    return bodavm.toolsFunc.dispatch(this, MathMLElement.prototype, "MathMLElement", "onwaiting_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(MathMLElement.prototype, "onwebkitanimationend", {
  configurable: true,
  enumerable: true,
  get: function onwebkitanimationend() {
    return bodavm.toolsFunc.dispatch(this, MathMLElement.prototype, "MathMLElement", "onwebkitanimationend_get", arguments);
  },
  set: function onwebkitanimationend() {
    return bodavm.toolsFunc.dispatch(this, MathMLElement.prototype, "MathMLElement", "onwebkitanimationend_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(MathMLElement.prototype, "onwebkitanimationiteration", {
  configurable: true,
  enumerable: true,
  get: function onwebkitanimationiteration() {
    return bodavm.toolsFunc.dispatch(this, MathMLElement.prototype, "MathMLElement", "onwebkitanimationiteration_get", arguments);
  },
  set: function onwebkitanimationiteration() {
    return bodavm.toolsFunc.dispatch(this, MathMLElement.prototype, "MathMLElement", "onwebkitanimationiteration_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(MathMLElement.prototype, "onwebkitanimationstart", {
  configurable: true,
  enumerable: true,
  get: function onwebkitanimationstart() {
    return bodavm.toolsFunc.dispatch(this, MathMLElement.prototype, "MathMLElement", "onwebkitanimationstart_get", arguments);
  },
  set: function onwebkitanimationstart() {
    return bodavm.toolsFunc.dispatch(this, MathMLElement.prototype, "MathMLElement", "onwebkitanimationstart_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(MathMLElement.prototype, "onwebkittransitionend", {
  configurable: true,
  enumerable: true,
  get: function onwebkittransitionend() {
    return bodavm.toolsFunc.dispatch(this, MathMLElement.prototype, "MathMLElement", "onwebkittransitionend_get", arguments);
  },
  set: function onwebkittransitionend() {
    return bodavm.toolsFunc.dispatch(this, MathMLElement.prototype, "MathMLElement", "onwebkittransitionend_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(MathMLElement.prototype, "onwheel", {
  configurable: true,
  enumerable: true,
  get: function onwheel() {
    return bodavm.toolsFunc.dispatch(this, MathMLElement.prototype, "MathMLElement", "onwheel_get", arguments);
  },
  set: function onwheel() {
    return bodavm.toolsFunc.dispatch(this, MathMLElement.prototype, "MathMLElement", "onwheel_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(MathMLElement.prototype, "onauxclick", {
  configurable: true,
  enumerable: true,
  get: function onauxclick() {
    return bodavm.toolsFunc.dispatch(this, MathMLElement.prototype, "MathMLElement", "onauxclick_get", arguments);
  },
  set: function onauxclick() {
    return bodavm.toolsFunc.dispatch(this, MathMLElement.prototype, "MathMLElement", "onauxclick_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(MathMLElement.prototype, "ongotpointercapture", {
  configurable: true,
  enumerable: true,
  get: function ongotpointercapture() {
    return bodavm.toolsFunc.dispatch(this, MathMLElement.prototype, "MathMLElement", "ongotpointercapture_get", arguments);
  },
  set: function ongotpointercapture() {
    return bodavm.toolsFunc.dispatch(this, MathMLElement.prototype, "MathMLElement", "ongotpointercapture_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(MathMLElement.prototype, "onlostpointercapture", {
  configurable: true,
  enumerable: true,
  get: function onlostpointercapture() {
    return bodavm.toolsFunc.dispatch(this, MathMLElement.prototype, "MathMLElement", "onlostpointercapture_get", arguments);
  },
  set: function onlostpointercapture() {
    return bodavm.toolsFunc.dispatch(this, MathMLElement.prototype, "MathMLElement", "onlostpointercapture_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(MathMLElement.prototype, "onpointerdown", {
  configurable: true,
  enumerable: true,
  get: function onpointerdown() {
    return bodavm.toolsFunc.dispatch(this, MathMLElement.prototype, "MathMLElement", "onpointerdown_get", arguments);
  },
  set: function onpointerdown() {
    return bodavm.toolsFunc.dispatch(this, MathMLElement.prototype, "MathMLElement", "onpointerdown_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(MathMLElement.prototype, "onpointermove", {
  configurable: true,
  enumerable: true,
  get: function onpointermove() {
    return bodavm.toolsFunc.dispatch(this, MathMLElement.prototype, "MathMLElement", "onpointermove_get", arguments);
  },
  set: function onpointermove() {
    return bodavm.toolsFunc.dispatch(this, MathMLElement.prototype, "MathMLElement", "onpointermove_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(MathMLElement.prototype, "onpointerrawupdate", {
  configurable: true,
  enumerable: true,
  get: function onpointerrawupdate() {
    return bodavm.toolsFunc.dispatch(this, MathMLElement.prototype, "MathMLElement", "onpointerrawupdate_get", arguments);
  },
  set: function onpointerrawupdate() {
    return bodavm.toolsFunc.dispatch(this, MathMLElement.prototype, "MathMLElement", "onpointerrawupdate_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(MathMLElement.prototype, "onpointerup", {
  configurable: true,
  enumerable: true,
  get: function onpointerup() {
    return bodavm.toolsFunc.dispatch(this, MathMLElement.prototype, "MathMLElement", "onpointerup_get", arguments);
  },
  set: function onpointerup() {
    return bodavm.toolsFunc.dispatch(this, MathMLElement.prototype, "MathMLElement", "onpointerup_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(MathMLElement.prototype, "onpointercancel", {
  configurable: true,
  enumerable: true,
  get: function onpointercancel() {
    return bodavm.toolsFunc.dispatch(this, MathMLElement.prototype, "MathMLElement", "onpointercancel_get", arguments);
  },
  set: function onpointercancel() {
    return bodavm.toolsFunc.dispatch(this, MathMLElement.prototype, "MathMLElement", "onpointercancel_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(MathMLElement.prototype, "onpointerover", {
  configurable: true,
  enumerable: true,
  get: function onpointerover() {
    return bodavm.toolsFunc.dispatch(this, MathMLElement.prototype, "MathMLElement", "onpointerover_get", arguments);
  },
  set: function onpointerover() {
    return bodavm.toolsFunc.dispatch(this, MathMLElement.prototype, "MathMLElement", "onpointerover_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(MathMLElement.prototype, "onpointerout", {
  configurable: true,
  enumerable: true,
  get: function onpointerout() {
    return bodavm.toolsFunc.dispatch(this, MathMLElement.prototype, "MathMLElement", "onpointerout_get", arguments);
  },
  set: function onpointerout() {
    return bodavm.toolsFunc.dispatch(this, MathMLElement.prototype, "MathMLElement", "onpointerout_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(MathMLElement.prototype, "onpointerenter", {
  configurable: true,
  enumerable: true,
  get: function onpointerenter() {
    return bodavm.toolsFunc.dispatch(this, MathMLElement.prototype, "MathMLElement", "onpointerenter_get", arguments);
  },
  set: function onpointerenter() {
    return bodavm.toolsFunc.dispatch(this, MathMLElement.prototype, "MathMLElement", "onpointerenter_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(MathMLElement.prototype, "onpointerleave", {
  configurable: true,
  enumerable: true,
  get: function onpointerleave() {
    return bodavm.toolsFunc.dispatch(this, MathMLElement.prototype, "MathMLElement", "onpointerleave_get", arguments);
  },
  set: function onpointerleave() {
    return bodavm.toolsFunc.dispatch(this, MathMLElement.prototype, "MathMLElement", "onpointerleave_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(MathMLElement.prototype, "onselectstart", {
  configurable: true,
  enumerable: true,
  get: function onselectstart() {
    return bodavm.toolsFunc.dispatch(this, MathMLElement.prototype, "MathMLElement", "onselectstart_get", arguments);
  },
  set: function onselectstart() {
    return bodavm.toolsFunc.dispatch(this, MathMLElement.prototype, "MathMLElement", "onselectstart_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(MathMLElement.prototype, "onselectionchange", {
  configurable: true,
  enumerable: true,
  get: function onselectionchange() {
    return bodavm.toolsFunc.dispatch(this, MathMLElement.prototype, "MathMLElement", "onselectionchange_get", arguments);
  },
  set: function onselectionchange() {
    return bodavm.toolsFunc.dispatch(this, MathMLElement.prototype, "MathMLElement", "onselectionchange_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(MathMLElement.prototype, "onanimationend", {
  configurable: true,
  enumerable: true,
  get: function onanimationend() {
    return bodavm.toolsFunc.dispatch(this, MathMLElement.prototype, "MathMLElement", "onanimationend_get", arguments);
  },
  set: function onanimationend() {
    return bodavm.toolsFunc.dispatch(this, MathMLElement.prototype, "MathMLElement", "onanimationend_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(MathMLElement.prototype, "onanimationiteration", {
  configurable: true,
  enumerable: true,
  get: function onanimationiteration() {
    return bodavm.toolsFunc.dispatch(this, MathMLElement.prototype, "MathMLElement", "onanimationiteration_get", arguments);
  },
  set: function onanimationiteration() {
    return bodavm.toolsFunc.dispatch(this, MathMLElement.prototype, "MathMLElement", "onanimationiteration_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(MathMLElement.prototype, "onanimationstart", {
  configurable: true,
  enumerable: true,
  get: function onanimationstart() {
    return bodavm.toolsFunc.dispatch(this, MathMLElement.prototype, "MathMLElement", "onanimationstart_get", arguments);
  },
  set: function onanimationstart() {
    return bodavm.toolsFunc.dispatch(this, MathMLElement.prototype, "MathMLElement", "onanimationstart_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(MathMLElement.prototype, "ontransitionrun", {
  configurable: true,
  enumerable: true,
  get: function ontransitionrun() {
    return bodavm.toolsFunc.dispatch(this, MathMLElement.prototype, "MathMLElement", "ontransitionrun_get", arguments);
  },
  set: function ontransitionrun() {
    return bodavm.toolsFunc.dispatch(this, MathMLElement.prototype, "MathMLElement", "ontransitionrun_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(MathMLElement.prototype, "ontransitionstart", {
  configurable: true,
  enumerable: true,
  get: function ontransitionstart() {
    return bodavm.toolsFunc.dispatch(this, MathMLElement.prototype, "MathMLElement", "ontransitionstart_get", arguments);
  },
  set: function ontransitionstart() {
    return bodavm.toolsFunc.dispatch(this, MathMLElement.prototype, "MathMLElement", "ontransitionstart_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(MathMLElement.prototype, "ontransitionend", {
  configurable: true,
  enumerable: true,
  get: function ontransitionend() {
    return bodavm.toolsFunc.dispatch(this, MathMLElement.prototype, "MathMLElement", "ontransitionend_get", arguments);
  },
  set: function ontransitionend() {
    return bodavm.toolsFunc.dispatch(this, MathMLElement.prototype, "MathMLElement", "ontransitionend_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(MathMLElement.prototype, "ontransitioncancel", {
  configurable: true,
  enumerable: true,
  get: function ontransitioncancel() {
    return bodavm.toolsFunc.dispatch(this, MathMLElement.prototype, "MathMLElement", "ontransitioncancel_get", arguments);
  },
  set: function ontransitioncancel() {
    return bodavm.toolsFunc.dispatch(this, MathMLElement.prototype, "MathMLElement", "ontransitioncancel_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(MathMLElement.prototype, "oncopy", {
  configurable: true,
  enumerable: true,
  get: function oncopy() {
    return bodavm.toolsFunc.dispatch(this, MathMLElement.prototype, "MathMLElement", "oncopy_get", arguments);
  },
  set: function oncopy() {
    return bodavm.toolsFunc.dispatch(this, MathMLElement.prototype, "MathMLElement", "oncopy_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(MathMLElement.prototype, "oncut", {
  configurable: true,
  enumerable: true,
  get: function oncut() {
    return bodavm.toolsFunc.dispatch(this, MathMLElement.prototype, "MathMLElement", "oncut_get", arguments);
  },
  set: function oncut() {
    return bodavm.toolsFunc.dispatch(this, MathMLElement.prototype, "MathMLElement", "oncut_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(MathMLElement.prototype, "onpaste", {
  configurable: true,
  enumerable: true,
  get: function onpaste() {
    return bodavm.toolsFunc.dispatch(this, MathMLElement.prototype, "MathMLElement", "onpaste_get", arguments);
  },
  set: function onpaste() {
    return bodavm.toolsFunc.dispatch(this, MathMLElement.prototype, "MathMLElement", "onpaste_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(MathMLElement.prototype, "dataset", {
  configurable: true,
  enumerable: true,
  get: function dataset() {
    return bodavm.toolsFunc.dispatch(this, MathMLElement.prototype, "MathMLElement", "dataset_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(MathMLElement.prototype, "nonce", {
  configurable: true,
  enumerable: true,
  get: function nonce() {
    return bodavm.toolsFunc.dispatch(this, MathMLElement.prototype, "MathMLElement", "nonce_get", arguments);
  },
  set: function nonce() {
    return bodavm.toolsFunc.dispatch(this, MathMLElement.prototype, "MathMLElement", "nonce_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(MathMLElement.prototype, "autofocus", {
  configurable: true,
  enumerable: true,
  get: function autofocus() {
    return bodavm.toolsFunc.dispatch(this, MathMLElement.prototype, "MathMLElement", "autofocus_get", arguments);
  },
  set: function autofocus() {
    return bodavm.toolsFunc.dispatch(this, MathMLElement.prototype, "MathMLElement", "autofocus_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(MathMLElement.prototype, "tabIndex", {
  configurable: true,
  enumerable: true,
  get: function tabIndex() {
    return bodavm.toolsFunc.dispatch(this, MathMLElement.prototype, "MathMLElement", "tabIndex_get", arguments);
  },
  set: function tabIndex() {
    return bodavm.toolsFunc.dispatch(this, MathMLElement.prototype, "MathMLElement", "tabIndex_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(MathMLElement.prototype, "style", {
  configurable: true,
  enumerable: true,
  get: function style() {
    return bodavm.toolsFunc.dispatch(this, MathMLElement.prototype, "MathMLElement", "style_get", arguments);
  },
  set: function style() {
    return bodavm.toolsFunc.dispatch(this, MathMLElement.prototype, "MathMLElement", "style_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(MathMLElement.prototype, "attributeStyleMap", {
  configurable: true,
  enumerable: true,
  get: function attributeStyleMap() {
    return bodavm.toolsFunc.dispatch(this, MathMLElement.prototype, "MathMLElement", "attributeStyleMap_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(MathMLElement.prototype, "blur", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function blur() {
    return bodavm.toolsFunc.dispatch(this, MathMLElement.prototype, "MathMLElement", "blur", arguments);
  }
});
bodavm.toolsFunc.defineProperty(MathMLElement.prototype, "focus", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function focus() {
    return bodavm.toolsFunc.dispatch(this, MathMLElement.prototype, "MathMLElement", "focus", arguments);
  }
});
bodavm.toolsFunc.defineProperty(MathMLElement.prototype, "oncontentvisibilityautostatechange", {
  configurable: true,
  enumerable: true,
  get: function oncontentvisibilityautostatechange() {
    return bodavm.toolsFunc.dispatch(this, MathMLElement.prototype, "MathMLElement", "oncontentvisibilityautostatechange_get", arguments);
  },
  set: function oncontentvisibilityautostatechange() {
    return bodavm.toolsFunc.dispatch(this, MathMLElement.prototype, "MathMLElement", "oncontentvisibilityautostatechange_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(MathMLElement.prototype, "onscrollend", {
  configurable: true,
  enumerable: true,
  get: function onscrollend() {
    return bodavm.toolsFunc.dispatch(this, MathMLElement.prototype, "MathMLElement", "onscrollend_get", arguments);
  },
  set: function onscrollend() {
    return bodavm.toolsFunc.dispatch(this, MathMLElement.prototype, "MathMLElement", "onscrollend_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(MathMLElement.prototype, "onbeforematch", {
  configurable: true,
  enumerable: true,
  get: function onbeforematch() {
    return bodavm.toolsFunc.dispatch(this, MathMLElement.prototype, "MathMLElement", "onbeforematch_get", arguments);
  },
  set: function onbeforematch() {
    return bodavm.toolsFunc.dispatch(this, MathMLElement.prototype, "MathMLElement", "onbeforematch_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(MathMLElement.prototype, "onbeforetoggle", {
  configurable: true,
  enumerable: true,
  get: function onbeforetoggle() {
    return bodavm.toolsFunc.dispatch(this, MathMLElement.prototype, "MathMLElement", "onbeforetoggle_get", arguments);
  },
  set: function onbeforetoggle() {
    return bodavm.toolsFunc.dispatch(this, MathMLElement.prototype, "MathMLElement", "onbeforetoggle_set", arguments);
  }
});