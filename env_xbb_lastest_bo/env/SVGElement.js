// SVGElement对象

SVGElement = function SVGElement() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof SVGElement)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('SVGElement 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(SVGElement, "SVGElement");
SVGElement.prototype.__proto__ = Element.prototype;
SVGElement.__proto__ = Element;
bodavm.toolsFunc.defineProperty(SVGElement.prototype, "className", {
  configurable: true,
  enumerable: true,
  get: function className() {
    return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "className_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(SVGElement.prototype, "ownerSVGElement", {
  configurable: true,
  enumerable: true,
  get: function ownerSVGElement() {
    return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "ownerSVGElement_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(SVGElement.prototype, "viewportElement", {
  configurable: true,
  enumerable: true,
  get: function viewportElement() {
    return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "viewportElement_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(SVGElement.prototype, "onbeforexrselect", {
  configurable: true,
  enumerable: true,
  get: function onbeforexrselect() {
    return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "onbeforexrselect_get", arguments);
  },
  set: function onbeforexrselect() {
    return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "onbeforexrselect_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(SVGElement.prototype, "onabort", {
  configurable: true,
  enumerable: true,
  get: function onabort() {
    return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "onabort_get", arguments);
  },
  set: function onabort() {
    return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "onabort_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(SVGElement.prototype, "onbeforeinput", {
  configurable: true,
  enumerable: true,
  get: function onbeforeinput() {
    return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "onbeforeinput_get", arguments);
  },
  set: function onbeforeinput() {
    return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "onbeforeinput_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(SVGElement.prototype, "onblur", {
  configurable: true,
  enumerable: true,
  get: function onblur() {
    return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "onblur_get", arguments);
  },
  set: function onblur() {
    return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "onblur_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(SVGElement.prototype, "oncancel", {
  configurable: true,
  enumerable: true,
  get: function oncancel() {
    return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "oncancel_get", arguments);
  },
  set: function oncancel() {
    return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "oncancel_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(SVGElement.prototype, "oncanplay", {
  configurable: true,
  enumerable: true,
  get: function oncanplay() {
    return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "oncanplay_get", arguments);
  },
  set: function oncanplay() {
    return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "oncanplay_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(SVGElement.prototype, "oncanplaythrough", {
  configurable: true,
  enumerable: true,
  get: function oncanplaythrough() {
    return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "oncanplaythrough_get", arguments);
  },
  set: function oncanplaythrough() {
    return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "oncanplaythrough_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(SVGElement.prototype, "onchange", {
  configurable: true,
  enumerable: true,
  get: function onchange() {
    return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "onchange_get", arguments);
  },
  set: function onchange() {
    return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "onchange_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(SVGElement.prototype, "onclick", {
  configurable: true,
  enumerable: true,
  get: function onclick() {
    return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "onclick_get", arguments);
  },
  set: function onclick() {
    return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "onclick_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(SVGElement.prototype, "onclose", {
  configurable: true,
  enumerable: true,
  get: function onclose() {
    return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "onclose_get", arguments);
  },
  set: function onclose() {
    return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "onclose_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(SVGElement.prototype, "oncontextlost", {
  configurable: true,
  enumerable: true,
  get: function oncontextlost() {
    return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "oncontextlost_get", arguments);
  },
  set: function oncontextlost() {
    return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "oncontextlost_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(SVGElement.prototype, "oncontextmenu", {
  configurable: true,
  enumerable: true,
  get: function oncontextmenu() {
    return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "oncontextmenu_get", arguments);
  },
  set: function oncontextmenu() {
    return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "oncontextmenu_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(SVGElement.prototype, "oncontextrestored", {
  configurable: true,
  enumerable: true,
  get: function oncontextrestored() {
    return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "oncontextrestored_get", arguments);
  },
  set: function oncontextrestored() {
    return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "oncontextrestored_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(SVGElement.prototype, "oncuechange", {
  configurable: true,
  enumerable: true,
  get: function oncuechange() {
    return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "oncuechange_get", arguments);
  },
  set: function oncuechange() {
    return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "oncuechange_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(SVGElement.prototype, "ondblclick", {
  configurable: true,
  enumerable: true,
  get: function ondblclick() {
    return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "ondblclick_get", arguments);
  },
  set: function ondblclick() {
    return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "ondblclick_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(SVGElement.prototype, "ondrag", {
  configurable: true,
  enumerable: true,
  get: function ondrag() {
    return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "ondrag_get", arguments);
  },
  set: function ondrag() {
    return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "ondrag_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(SVGElement.prototype, "ondragend", {
  configurable: true,
  enumerable: true,
  get: function ondragend() {
    return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "ondragend_get", arguments);
  },
  set: function ondragend() {
    return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "ondragend_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(SVGElement.prototype, "ondragenter", {
  configurable: true,
  enumerable: true,
  get: function ondragenter() {
    return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "ondragenter_get", arguments);
  },
  set: function ondragenter() {
    return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "ondragenter_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(SVGElement.prototype, "ondragleave", {
  configurable: true,
  enumerable: true,
  get: function ondragleave() {
    return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "ondragleave_get", arguments);
  },
  set: function ondragleave() {
    return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "ondragleave_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(SVGElement.prototype, "ondragover", {
  configurable: true,
  enumerable: true,
  get: function ondragover() {
    return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "ondragover_get", arguments);
  },
  set: function ondragover() {
    return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "ondragover_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(SVGElement.prototype, "ondragstart", {
  configurable: true,
  enumerable: true,
  get: function ondragstart() {
    return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "ondragstart_get", arguments);
  },
  set: function ondragstart() {
    return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "ondragstart_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(SVGElement.prototype, "ondrop", {
  configurable: true,
  enumerable: true,
  get: function ondrop() {
    return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "ondrop_get", arguments);
  },
  set: function ondrop() {
    return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "ondrop_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(SVGElement.prototype, "ondurationchange", {
  configurable: true,
  enumerable: true,
  get: function ondurationchange() {
    return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "ondurationchange_get", arguments);
  },
  set: function ondurationchange() {
    return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "ondurationchange_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(SVGElement.prototype, "onemptied", {
  configurable: true,
  enumerable: true,
  get: function onemptied() {
    return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "onemptied_get", arguments);
  },
  set: function onemptied() {
    return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "onemptied_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(SVGElement.prototype, "onended", {
  configurable: true,
  enumerable: true,
  get: function onended() {
    return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "onended_get", arguments);
  },
  set: function onended() {
    return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "onended_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(SVGElement.prototype, "onerror", {
  configurable: true,
  enumerable: true,
  get: function onerror() {
    return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "onerror_get", arguments);
  },
  set: function onerror() {
    return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "onerror_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(SVGElement.prototype, "onfocus", {
  configurable: true,
  enumerable: true,
  get: function onfocus() {
    return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "onfocus_get", arguments);
  },
  set: function onfocus() {
    return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "onfocus_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(SVGElement.prototype, "onformdata", {
  configurable: true,
  enumerable: true,
  get: function onformdata() {
    return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "onformdata_get", arguments);
  },
  set: function onformdata() {
    return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "onformdata_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(SVGElement.prototype, "oninput", {
  configurable: true,
  enumerable: true,
  get: function oninput() {
    return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "oninput_get", arguments);
  },
  set: function oninput() {
    return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "oninput_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(SVGElement.prototype, "oninvalid", {
  configurable: true,
  enumerable: true,
  get: function oninvalid() {
    return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "oninvalid_get", arguments);
  },
  set: function oninvalid() {
    return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "oninvalid_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(SVGElement.prototype, "onkeydown", {
  configurable: true,
  enumerable: true,
  get: function onkeydown() {
    return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "onkeydown_get", arguments);
  },
  set: function onkeydown() {
    return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "onkeydown_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(SVGElement.prototype, "onkeypress", {
  configurable: true,
  enumerable: true,
  get: function onkeypress() {
    return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "onkeypress_get", arguments);
  },
  set: function onkeypress() {
    return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "onkeypress_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(SVGElement.prototype, "onkeyup", {
  configurable: true,
  enumerable: true,
  get: function onkeyup() {
    return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "onkeyup_get", arguments);
  },
  set: function onkeyup() {
    return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "onkeyup_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(SVGElement.prototype, "onload", {
  configurable: true,
  enumerable: true,
  get: function onload() {
    return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "onload_get", arguments);
  },
  set: function onload() {
    return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "onload_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(SVGElement.prototype, "onloadeddata", {
  configurable: true,
  enumerable: true,
  get: function onloadeddata() {
    return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "onloadeddata_get", arguments);
  },
  set: function onloadeddata() {
    return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "onloadeddata_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(SVGElement.prototype, "onloadedmetadata", {
  configurable: true,
  enumerable: true,
  get: function onloadedmetadata() {
    return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "onloadedmetadata_get", arguments);
  },
  set: function onloadedmetadata() {
    return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "onloadedmetadata_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(SVGElement.prototype, "onloadstart", {
  configurable: true,
  enumerable: true,
  get: function onloadstart() {
    return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "onloadstart_get", arguments);
  },
  set: function onloadstart() {
    return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "onloadstart_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(SVGElement.prototype, "onmousedown", {
  configurable: true,
  enumerable: true,
  get: function onmousedown() {
    return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "onmousedown_get", arguments);
  },
  set: function onmousedown() {
    return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "onmousedown_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(SVGElement.prototype, "onmouseenter", {
  configurable: true,
  enumerable: true,
  get: function onmouseenter() {
    return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "onmouseenter_get", arguments);
  },
  set: function onmouseenter() {
    return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "onmouseenter_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(SVGElement.prototype, "onmouseleave", {
  configurable: true,
  enumerable: true,
  get: function onmouseleave() {
    return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "onmouseleave_get", arguments);
  },
  set: function onmouseleave() {
    return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "onmouseleave_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(SVGElement.prototype, "onmousemove", {
  configurable: true,
  enumerable: true,
  get: function onmousemove() {
    return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "onmousemove_get", arguments);
  },
  set: function onmousemove() {
    return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "onmousemove_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(SVGElement.prototype, "onmouseout", {
  configurable: true,
  enumerable: true,
  get: function onmouseout() {
    return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "onmouseout_get", arguments);
  },
  set: function onmouseout() {
    return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "onmouseout_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(SVGElement.prototype, "onmouseover", {
  configurable: true,
  enumerable: true,
  get: function onmouseover() {
    return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "onmouseover_get", arguments);
  },
  set: function onmouseover() {
    return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "onmouseover_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(SVGElement.prototype, "onmouseup", {
  configurable: true,
  enumerable: true,
  get: function onmouseup() {
    return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "onmouseup_get", arguments);
  },
  set: function onmouseup() {
    return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "onmouseup_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(SVGElement.prototype, "onmousewheel", {
  configurable: true,
  enumerable: true,
  get: function onmousewheel() {
    return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "onmousewheel_get", arguments);
  },
  set: function onmousewheel() {
    return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "onmousewheel_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(SVGElement.prototype, "onpause", {
  configurable: true,
  enumerable: true,
  get: function onpause() {
    return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "onpause_get", arguments);
  },
  set: function onpause() {
    return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "onpause_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(SVGElement.prototype, "onplay", {
  configurable: true,
  enumerable: true,
  get: function onplay() {
    return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "onplay_get", arguments);
  },
  set: function onplay() {
    return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "onplay_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(SVGElement.prototype, "onplaying", {
  configurable: true,
  enumerable: true,
  get: function onplaying() {
    return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "onplaying_get", arguments);
  },
  set: function onplaying() {
    return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "onplaying_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(SVGElement.prototype, "onprogress", {
  configurable: true,
  enumerable: true,
  get: function onprogress() {
    return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "onprogress_get", arguments);
  },
  set: function onprogress() {
    return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "onprogress_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(SVGElement.prototype, "onratechange", {
  configurable: true,
  enumerable: true,
  get: function onratechange() {
    return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "onratechange_get", arguments);
  },
  set: function onratechange() {
    return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "onratechange_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(SVGElement.prototype, "onreset", {
  configurable: true,
  enumerable: true,
  get: function onreset() {
    return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "onreset_get", arguments);
  },
  set: function onreset() {
    return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "onreset_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(SVGElement.prototype, "onresize", {
  configurable: true,
  enumerable: true,
  get: function onresize() {
    return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "onresize_get", arguments);
  },
  set: function onresize() {
    return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "onresize_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(SVGElement.prototype, "onscroll", {
  configurable: true,
  enumerable: true,
  get: function onscroll() {
    return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "onscroll_get", arguments);
  },
  set: function onscroll() {
    return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "onscroll_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(SVGElement.prototype, "onsecuritypolicyviolation", {
  configurable: true,
  enumerable: true,
  get: function onsecuritypolicyviolation() {
    return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "onsecuritypolicyviolation_get", arguments);
  },
  set: function onsecuritypolicyviolation() {
    return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "onsecuritypolicyviolation_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(SVGElement.prototype, "onseeked", {
  configurable: true,
  enumerable: true,
  get: function onseeked() {
    return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "onseeked_get", arguments);
  },
  set: function onseeked() {
    return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "onseeked_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(SVGElement.prototype, "onseeking", {
  configurable: true,
  enumerable: true,
  get: function onseeking() {
    return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "onseeking_get", arguments);
  },
  set: function onseeking() {
    return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "onseeking_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(SVGElement.prototype, "onselect", {
  configurable: true,
  enumerable: true,
  get: function onselect() {
    return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "onselect_get", arguments);
  },
  set: function onselect() {
    return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "onselect_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(SVGElement.prototype, "onslotchange", {
  configurable: true,
  enumerable: true,
  get: function onslotchange() {
    return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "onslotchange_get", arguments);
  },
  set: function onslotchange() {
    return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "onslotchange_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(SVGElement.prototype, "onstalled", {
  configurable: true,
  enumerable: true,
  get: function onstalled() {
    return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "onstalled_get", arguments);
  },
  set: function onstalled() {
    return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "onstalled_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(SVGElement.prototype, "onsubmit", {
  configurable: true,
  enumerable: true,
  get: function onsubmit() {
    return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "onsubmit_get", arguments);
  },
  set: function onsubmit() {
    return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "onsubmit_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(SVGElement.prototype, "onsuspend", {
  configurable: true,
  enumerable: true,
  get: function onsuspend() {
    return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "onsuspend_get", arguments);
  },
  set: function onsuspend() {
    return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "onsuspend_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(SVGElement.prototype, "ontimeupdate", {
  configurable: true,
  enumerable: true,
  get: function ontimeupdate() {
    return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "ontimeupdate_get", arguments);
  },
  set: function ontimeupdate() {
    return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "ontimeupdate_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(SVGElement.prototype, "ontoggle", {
  configurable: true,
  enumerable: true,
  get: function ontoggle() {
    return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "ontoggle_get", arguments);
  },
  set: function ontoggle() {
    return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "ontoggle_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(SVGElement.prototype, "onvolumechange", {
  configurable: true,
  enumerable: true,
  get: function onvolumechange() {
    return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "onvolumechange_get", arguments);
  },
  set: function onvolumechange() {
    return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "onvolumechange_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(SVGElement.prototype, "onwaiting", {
  configurable: true,
  enumerable: true,
  get: function onwaiting() {
    return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "onwaiting_get", arguments);
  },
  set: function onwaiting() {
    return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "onwaiting_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(SVGElement.prototype, "onwebkitanimationend", {
  configurable: true,
  enumerable: true,
  get: function onwebkitanimationend() {
    return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "onwebkitanimationend_get", arguments);
  },
  set: function onwebkitanimationend() {
    return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "onwebkitanimationend_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(SVGElement.prototype, "onwebkitanimationiteration", {
  configurable: true,
  enumerable: true,
  get: function onwebkitanimationiteration() {
    return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "onwebkitanimationiteration_get", arguments);
  },
  set: function onwebkitanimationiteration() {
    return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "onwebkitanimationiteration_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(SVGElement.prototype, "onwebkitanimationstart", {
  configurable: true,
  enumerable: true,
  get: function onwebkitanimationstart() {
    return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "onwebkitanimationstart_get", arguments);
  },
  set: function onwebkitanimationstart() {
    return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "onwebkitanimationstart_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(SVGElement.prototype, "onwebkittransitionend", {
  configurable: true,
  enumerable: true,
  get: function onwebkittransitionend() {
    return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "onwebkittransitionend_get", arguments);
  },
  set: function onwebkittransitionend() {
    return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "onwebkittransitionend_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(SVGElement.prototype, "onwheel", {
  configurable: true,
  enumerable: true,
  get: function onwheel() {
    return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "onwheel_get", arguments);
  },
  set: function onwheel() {
    return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "onwheel_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(SVGElement.prototype, "onauxclick", {
  configurable: true,
  enumerable: true,
  get: function onauxclick() {
    return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "onauxclick_get", arguments);
  },
  set: function onauxclick() {
    return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "onauxclick_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(SVGElement.prototype, "ongotpointercapture", {
  configurable: true,
  enumerable: true,
  get: function ongotpointercapture() {
    return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "ongotpointercapture_get", arguments);
  },
  set: function ongotpointercapture() {
    return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "ongotpointercapture_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(SVGElement.prototype, "onlostpointercapture", {
  configurable: true,
  enumerable: true,
  get: function onlostpointercapture() {
    return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "onlostpointercapture_get", arguments);
  },
  set: function onlostpointercapture() {
    return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "onlostpointercapture_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(SVGElement.prototype, "onpointerdown", {
  configurable: true,
  enumerable: true,
  get: function onpointerdown() {
    return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "onpointerdown_get", arguments);
  },
  set: function onpointerdown() {
    return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "onpointerdown_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(SVGElement.prototype, "onpointermove", {
  configurable: true,
  enumerable: true,
  get: function onpointermove() {
    return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "onpointermove_get", arguments);
  },
  set: function onpointermove() {
    return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "onpointermove_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(SVGElement.prototype, "onpointerrawupdate", {
  configurable: true,
  enumerable: true,
  get: function onpointerrawupdate() {
    return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "onpointerrawupdate_get", arguments);
  },
  set: function onpointerrawupdate() {
    return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "onpointerrawupdate_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(SVGElement.prototype, "onpointerup", {
  configurable: true,
  enumerable: true,
  get: function onpointerup() {
    return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "onpointerup_get", arguments);
  },
  set: function onpointerup() {
    return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "onpointerup_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(SVGElement.prototype, "onpointercancel", {
  configurable: true,
  enumerable: true,
  get: function onpointercancel() {
    return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "onpointercancel_get", arguments);
  },
  set: function onpointercancel() {
    return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "onpointercancel_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(SVGElement.prototype, "onpointerover", {
  configurable: true,
  enumerable: true,
  get: function onpointerover() {
    return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "onpointerover_get", arguments);
  },
  set: function onpointerover() {
    return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "onpointerover_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(SVGElement.prototype, "onpointerout", {
  configurable: true,
  enumerable: true,
  get: function onpointerout() {
    return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "onpointerout_get", arguments);
  },
  set: function onpointerout() {
    return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "onpointerout_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(SVGElement.prototype, "onpointerenter", {
  configurable: true,
  enumerable: true,
  get: function onpointerenter() {
    return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "onpointerenter_get", arguments);
  },
  set: function onpointerenter() {
    return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "onpointerenter_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(SVGElement.prototype, "onpointerleave", {
  configurable: true,
  enumerable: true,
  get: function onpointerleave() {
    return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "onpointerleave_get", arguments);
  },
  set: function onpointerleave() {
    return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "onpointerleave_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(SVGElement.prototype, "onselectstart", {
  configurable: true,
  enumerable: true,
  get: function onselectstart() {
    return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "onselectstart_get", arguments);
  },
  set: function onselectstart() {
    return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "onselectstart_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(SVGElement.prototype, "onselectionchange", {
  configurable: true,
  enumerable: true,
  get: function onselectionchange() {
    return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "onselectionchange_get", arguments);
  },
  set: function onselectionchange() {
    return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "onselectionchange_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(SVGElement.prototype, "onanimationend", {
  configurable: true,
  enumerable: true,
  get: function onanimationend() {
    return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "onanimationend_get", arguments);
  },
  set: function onanimationend() {
    return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "onanimationend_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(SVGElement.prototype, "onanimationiteration", {
  configurable: true,
  enumerable: true,
  get: function onanimationiteration() {
    return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "onanimationiteration_get", arguments);
  },
  set: function onanimationiteration() {
    return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "onanimationiteration_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(SVGElement.prototype, "onanimationstart", {
  configurable: true,
  enumerable: true,
  get: function onanimationstart() {
    return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "onanimationstart_get", arguments);
  },
  set: function onanimationstart() {
    return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "onanimationstart_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(SVGElement.prototype, "ontransitionrun", {
  configurable: true,
  enumerable: true,
  get: function ontransitionrun() {
    return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "ontransitionrun_get", arguments);
  },
  set: function ontransitionrun() {
    return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "ontransitionrun_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(SVGElement.prototype, "ontransitionstart", {
  configurable: true,
  enumerable: true,
  get: function ontransitionstart() {
    return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "ontransitionstart_get", arguments);
  },
  set: function ontransitionstart() {
    return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "ontransitionstart_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(SVGElement.prototype, "ontransitionend", {
  configurable: true,
  enumerable: true,
  get: function ontransitionend() {
    return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "ontransitionend_get", arguments);
  },
  set: function ontransitionend() {
    return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "ontransitionend_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(SVGElement.prototype, "ontransitioncancel", {
  configurable: true,
  enumerable: true,
  get: function ontransitioncancel() {
    return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "ontransitioncancel_get", arguments);
  },
  set: function ontransitioncancel() {
    return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "ontransitioncancel_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(SVGElement.prototype, "oncopy", {
  configurable: true,
  enumerable: true,
  get: function oncopy() {
    return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "oncopy_get", arguments);
  },
  set: function oncopy() {
    return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "oncopy_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(SVGElement.prototype, "oncut", {
  configurable: true,
  enumerable: true,
  get: function oncut() {
    return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "oncut_get", arguments);
  },
  set: function oncut() {
    return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "oncut_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(SVGElement.prototype, "onpaste", {
  configurable: true,
  enumerable: true,
  get: function onpaste() {
    return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "onpaste_get", arguments);
  },
  set: function onpaste() {
    return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "onpaste_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(SVGElement.prototype, "dataset", {
  configurable: true,
  enumerable: true,
  get: function dataset() {
    return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "dataset_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(SVGElement.prototype, "nonce", {
  configurable: true,
  enumerable: true,
  get: function nonce() {
    return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "nonce_get", arguments);
  },
  set: function nonce() {
    return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "nonce_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(SVGElement.prototype, "autofocus", {
  configurable: true,
  enumerable: true,
  get: function autofocus() {
    return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "autofocus_get", arguments);
  },
  set: function autofocus() {
    return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "autofocus_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(SVGElement.prototype, "tabIndex", {
  configurable: true,
  enumerable: true,
  get: function tabIndex() {
    return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "tabIndex_get", arguments);
  },
  set: function tabIndex() {
    return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "tabIndex_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(SVGElement.prototype, "style", {
  configurable: true,
  enumerable: true,
  get: function style() {
    return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "style_get", arguments);
  },
  set: function style() {
    return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "style_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(SVGElement.prototype, "attributeStyleMap", {
  configurable: true,
  enumerable: true,
  get: function attributeStyleMap() {
    return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "attributeStyleMap_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(SVGElement.prototype, "blur", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function blur() {
    return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "blur", arguments);
  }
});
bodavm.toolsFunc.defineProperty(SVGElement.prototype, "focus", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function focus() {
    return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "focus", arguments);
  }
});
bodavm.toolsFunc.defineProperty(SVGElement.prototype, "oncontentvisibilityautostatechange", {
  configurable: true,
  enumerable: true,
  get: function oncontentvisibilityautostatechange() {
    return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "oncontentvisibilityautostatechange_get", arguments);
  },
  set: function oncontentvisibilityautostatechange() {
    return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "oncontentvisibilityautostatechange_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(SVGElement.prototype, "onscrollend", {
  configurable: true,
  enumerable: true,
  get: function onscrollend() {
    return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "onscrollend_get", arguments);
  },
  set: function onscrollend() {
    return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "onscrollend_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(SVGElement.prototype, "onbeforematch", {
  configurable: true,
  enumerable: true,
  get: function onbeforematch() {
    return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "onbeforematch_get", arguments);
  },
  set: function onbeforematch() {
    return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "onbeforematch_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(SVGElement.prototype, "onbeforetoggle", {
  configurable: true,
  enumerable: true,
  get: function onbeforetoggle() {
    return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "onbeforetoggle_get", arguments);
  },
  set: function onbeforetoggle() {
    return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "onbeforetoggle_set", arguments);
  }
});