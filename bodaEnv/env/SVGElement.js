// SVGElement对象

bodaEnv.memory.globlProtoObj["SVGElement"] = function SVGElement() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('SVGElement 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["SVGElement"], "SVGElement");
bodaEnv.memory.globlProtoObj["SVGElement"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["Element"].prototype;
bodaEnv.memory.globlProtoObj["SVGElement"].__proto__ = bodaEnv.memory.globlProtoObj["Element"];
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGElement"].prototype, "className", {
  configurable: true,
  enumerable: true,
  get: {
    className() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGElement"].prototype, "SVGElement", "className_get", arguments);
    }
  }.className,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGElement"].prototype, "ownerSVGElement", {
  configurable: true,
  enumerable: true,
  get: {
    ownerSVGElement() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGElement"].prototype, "SVGElement", "ownerSVGElement_get", arguments);
    }
  }.ownerSVGElement,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGElement"].prototype, "viewportElement", {
  configurable: true,
  enumerable: true,
  get: {
    viewportElement() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGElement"].prototype, "SVGElement", "viewportElement_get", arguments);
    }
  }.viewportElement,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGElement"].prototype, "onbeforexrselect", {
  configurable: true,
  enumerable: true,
  get: {
    onbeforexrselect() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGElement"].prototype, "SVGElement", "onbeforexrselect_get", arguments);
    }
  }.onbeforexrselect,
  set: {
    onbeforexrselect() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGElement"].prototype, "SVGElement", "onbeforexrselect_set", arguments);
    }
  }.onbeforexrselect
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGElement"].prototype, "onabort", {
  configurable: true,
  enumerable: true,
  get: {
    onabort() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGElement"].prototype, "SVGElement", "onabort_get", arguments);
    }
  }.onabort,
  set: {
    onabort() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGElement"].prototype, "SVGElement", "onabort_set", arguments);
    }
  }.onabort
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGElement"].prototype, "onbeforeinput", {
  configurable: true,
  enumerable: true,
  get: {
    onbeforeinput() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGElement"].prototype, "SVGElement", "onbeforeinput_get", arguments);
    }
  }.onbeforeinput,
  set: {
    onbeforeinput() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGElement"].prototype, "SVGElement", "onbeforeinput_set", arguments);
    }
  }.onbeforeinput
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGElement"].prototype, "onblur", {
  configurable: true,
  enumerable: true,
  get: {
    onblur() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGElement"].prototype, "SVGElement", "onblur_get", arguments);
    }
  }.onblur,
  set: {
    onblur() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGElement"].prototype, "SVGElement", "onblur_set", arguments);
    }
  }.onblur
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGElement"].prototype, "oncancel", {
  configurable: true,
  enumerable: true,
  get: {
    oncancel() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGElement"].prototype, "SVGElement", "oncancel_get", arguments);
    }
  }.oncancel,
  set: {
    oncancel() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGElement"].prototype, "SVGElement", "oncancel_set", arguments);
    }
  }.oncancel
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGElement"].prototype, "oncanplay", {
  configurable: true,
  enumerable: true,
  get: {
    oncanplay() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGElement"].prototype, "SVGElement", "oncanplay_get", arguments);
    }
  }.oncanplay,
  set: {
    oncanplay() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGElement"].prototype, "SVGElement", "oncanplay_set", arguments);
    }
  }.oncanplay
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGElement"].prototype, "oncanplaythrough", {
  configurable: true,
  enumerable: true,
  get: {
    oncanplaythrough() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGElement"].prototype, "SVGElement", "oncanplaythrough_get", arguments);
    }
  }.oncanplaythrough,
  set: {
    oncanplaythrough() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGElement"].prototype, "SVGElement", "oncanplaythrough_set", arguments);
    }
  }.oncanplaythrough
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGElement"].prototype, "onchange", {
  configurable: true,
  enumerable: true,
  get: {
    onchange() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGElement"].prototype, "SVGElement", "onchange_get", arguments);
    }
  }.onchange,
  set: {
    onchange() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGElement"].prototype, "SVGElement", "onchange_set", arguments);
    }
  }.onchange
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGElement"].prototype, "onclick", {
  configurable: true,
  enumerable: true,
  get: {
    onclick() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGElement"].prototype, "SVGElement", "onclick_get", arguments);
    }
  }.onclick,
  set: {
    onclick() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGElement"].prototype, "SVGElement", "onclick_set", arguments);
    }
  }.onclick
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGElement"].prototype, "onclose", {
  configurable: true,
  enumerable: true,
  get: {
    onclose() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGElement"].prototype, "SVGElement", "onclose_get", arguments);
    }
  }.onclose,
  set: {
    onclose() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGElement"].prototype, "SVGElement", "onclose_set", arguments);
    }
  }.onclose
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGElement"].prototype, "oncontextlost", {
  configurable: true,
  enumerable: true,
  get: {
    oncontextlost() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGElement"].prototype, "SVGElement", "oncontextlost_get", arguments);
    }
  }.oncontextlost,
  set: {
    oncontextlost() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGElement"].prototype, "SVGElement", "oncontextlost_set", arguments);
    }
  }.oncontextlost
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGElement"].prototype, "oncontextmenu", {
  configurable: true,
  enumerable: true,
  get: {
    oncontextmenu() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGElement"].prototype, "SVGElement", "oncontextmenu_get", arguments);
    }
  }.oncontextmenu,
  set: {
    oncontextmenu() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGElement"].prototype, "SVGElement", "oncontextmenu_set", arguments);
    }
  }.oncontextmenu
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGElement"].prototype, "oncontextrestored", {
  configurable: true,
  enumerable: true,
  get: {
    oncontextrestored() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGElement"].prototype, "SVGElement", "oncontextrestored_get", arguments);
    }
  }.oncontextrestored,
  set: {
    oncontextrestored() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGElement"].prototype, "SVGElement", "oncontextrestored_set", arguments);
    }
  }.oncontextrestored
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGElement"].prototype, "oncuechange", {
  configurable: true,
  enumerable: true,
  get: {
    oncuechange() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGElement"].prototype, "SVGElement", "oncuechange_get", arguments);
    }
  }.oncuechange,
  set: {
    oncuechange() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGElement"].prototype, "SVGElement", "oncuechange_set", arguments);
    }
  }.oncuechange
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGElement"].prototype, "ondblclick", {
  configurable: true,
  enumerable: true,
  get: {
    ondblclick() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGElement"].prototype, "SVGElement", "ondblclick_get", arguments);
    }
  }.ondblclick,
  set: {
    ondblclick() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGElement"].prototype, "SVGElement", "ondblclick_set", arguments);
    }
  }.ondblclick
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGElement"].prototype, "ondrag", {
  configurable: true,
  enumerable: true,
  get: {
    ondrag() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGElement"].prototype, "SVGElement", "ondrag_get", arguments);
    }
  }.ondrag,
  set: {
    ondrag() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGElement"].prototype, "SVGElement", "ondrag_set", arguments);
    }
  }.ondrag
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGElement"].prototype, "ondragend", {
  configurable: true,
  enumerable: true,
  get: {
    ondragend() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGElement"].prototype, "SVGElement", "ondragend_get", arguments);
    }
  }.ondragend,
  set: {
    ondragend() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGElement"].prototype, "SVGElement", "ondragend_set", arguments);
    }
  }.ondragend
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGElement"].prototype, "ondragenter", {
  configurable: true,
  enumerable: true,
  get: {
    ondragenter() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGElement"].prototype, "SVGElement", "ondragenter_get", arguments);
    }
  }.ondragenter,
  set: {
    ondragenter() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGElement"].prototype, "SVGElement", "ondragenter_set", arguments);
    }
  }.ondragenter
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGElement"].prototype, "ondragleave", {
  configurable: true,
  enumerable: true,
  get: {
    ondragleave() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGElement"].prototype, "SVGElement", "ondragleave_get", arguments);
    }
  }.ondragleave,
  set: {
    ondragleave() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGElement"].prototype, "SVGElement", "ondragleave_set", arguments);
    }
  }.ondragleave
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGElement"].prototype, "ondragover", {
  configurable: true,
  enumerable: true,
  get: {
    ondragover() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGElement"].prototype, "SVGElement", "ondragover_get", arguments);
    }
  }.ondragover,
  set: {
    ondragover() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGElement"].prototype, "SVGElement", "ondragover_set", arguments);
    }
  }.ondragover
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGElement"].prototype, "ondragstart", {
  configurable: true,
  enumerable: true,
  get: {
    ondragstart() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGElement"].prototype, "SVGElement", "ondragstart_get", arguments);
    }
  }.ondragstart,
  set: {
    ondragstart() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGElement"].prototype, "SVGElement", "ondragstart_set", arguments);
    }
  }.ondragstart
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGElement"].prototype, "ondrop", {
  configurable: true,
  enumerable: true,
  get: {
    ondrop() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGElement"].prototype, "SVGElement", "ondrop_get", arguments);
    }
  }.ondrop,
  set: {
    ondrop() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGElement"].prototype, "SVGElement", "ondrop_set", arguments);
    }
  }.ondrop
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGElement"].prototype, "ondurationchange", {
  configurable: true,
  enumerable: true,
  get: {
    ondurationchange() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGElement"].prototype, "SVGElement", "ondurationchange_get", arguments);
    }
  }.ondurationchange,
  set: {
    ondurationchange() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGElement"].prototype, "SVGElement", "ondurationchange_set", arguments);
    }
  }.ondurationchange
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGElement"].prototype, "onemptied", {
  configurable: true,
  enumerable: true,
  get: {
    onemptied() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGElement"].prototype, "SVGElement", "onemptied_get", arguments);
    }
  }.onemptied,
  set: {
    onemptied() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGElement"].prototype, "SVGElement", "onemptied_set", arguments);
    }
  }.onemptied
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGElement"].prototype, "onended", {
  configurable: true,
  enumerable: true,
  get: {
    onended() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGElement"].prototype, "SVGElement", "onended_get", arguments);
    }
  }.onended,
  set: {
    onended() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGElement"].prototype, "SVGElement", "onended_set", arguments);
    }
  }.onended
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGElement"].prototype, "onerror", {
  configurable: true,
  enumerable: true,
  get: {
    onerror() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGElement"].prototype, "SVGElement", "onerror_get", arguments);
    }
  }.onerror,
  set: {
    onerror() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGElement"].prototype, "SVGElement", "onerror_set", arguments);
    }
  }.onerror
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGElement"].prototype, "onfocus", {
  configurable: true,
  enumerable: true,
  get: {
    onfocus() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGElement"].prototype, "SVGElement", "onfocus_get", arguments);
    }
  }.onfocus,
  set: {
    onfocus() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGElement"].prototype, "SVGElement", "onfocus_set", arguments);
    }
  }.onfocus
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGElement"].prototype, "onformdata", {
  configurable: true,
  enumerable: true,
  get: {
    onformdata() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGElement"].prototype, "SVGElement", "onformdata_get", arguments);
    }
  }.onformdata,
  set: {
    onformdata() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGElement"].prototype, "SVGElement", "onformdata_set", arguments);
    }
  }.onformdata
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGElement"].prototype, "oninput", {
  configurable: true,
  enumerable: true,
  get: {
    oninput() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGElement"].prototype, "SVGElement", "oninput_get", arguments);
    }
  }.oninput,
  set: {
    oninput() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGElement"].prototype, "SVGElement", "oninput_set", arguments);
    }
  }.oninput
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGElement"].prototype, "oninvalid", {
  configurable: true,
  enumerable: true,
  get: {
    oninvalid() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGElement"].prototype, "SVGElement", "oninvalid_get", arguments);
    }
  }.oninvalid,
  set: {
    oninvalid() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGElement"].prototype, "SVGElement", "oninvalid_set", arguments);
    }
  }.oninvalid
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGElement"].prototype, "onkeydown", {
  configurable: true,
  enumerable: true,
  get: {
    onkeydown() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGElement"].prototype, "SVGElement", "onkeydown_get", arguments);
    }
  }.onkeydown,
  set: {
    onkeydown() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGElement"].prototype, "SVGElement", "onkeydown_set", arguments);
    }
  }.onkeydown
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGElement"].prototype, "onkeypress", {
  configurable: true,
  enumerable: true,
  get: {
    onkeypress() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGElement"].prototype, "SVGElement", "onkeypress_get", arguments);
    }
  }.onkeypress,
  set: {
    onkeypress() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGElement"].prototype, "SVGElement", "onkeypress_set", arguments);
    }
  }.onkeypress
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGElement"].prototype, "onkeyup", {
  configurable: true,
  enumerable: true,
  get: {
    onkeyup() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGElement"].prototype, "SVGElement", "onkeyup_get", arguments);
    }
  }.onkeyup,
  set: {
    onkeyup() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGElement"].prototype, "SVGElement", "onkeyup_set", arguments);
    }
  }.onkeyup
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGElement"].prototype, "onload", {
  configurable: true,
  enumerable: true,
  get: {
    onload() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGElement"].prototype, "SVGElement", "onload_get", arguments);
    }
  }.onload,
  set: {
    onload() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGElement"].prototype, "SVGElement", "onload_set", arguments);
    }
  }.onload
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGElement"].prototype, "onloadeddata", {
  configurable: true,
  enumerable: true,
  get: {
    onloadeddata() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGElement"].prototype, "SVGElement", "onloadeddata_get", arguments);
    }
  }.onloadeddata,
  set: {
    onloadeddata() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGElement"].prototype, "SVGElement", "onloadeddata_set", arguments);
    }
  }.onloadeddata
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGElement"].prototype, "onloadedmetadata", {
  configurable: true,
  enumerable: true,
  get: {
    onloadedmetadata() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGElement"].prototype, "SVGElement", "onloadedmetadata_get", arguments);
    }
  }.onloadedmetadata,
  set: {
    onloadedmetadata() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGElement"].prototype, "SVGElement", "onloadedmetadata_set", arguments);
    }
  }.onloadedmetadata
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGElement"].prototype, "onloadstart", {
  configurable: true,
  enumerable: true,
  get: {
    onloadstart() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGElement"].prototype, "SVGElement", "onloadstart_get", arguments);
    }
  }.onloadstart,
  set: {
    onloadstart() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGElement"].prototype, "SVGElement", "onloadstart_set", arguments);
    }
  }.onloadstart
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGElement"].prototype, "onmousedown", {
  configurable: true,
  enumerable: true,
  get: {
    onmousedown() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGElement"].prototype, "SVGElement", "onmousedown_get", arguments);
    }
  }.onmousedown,
  set: {
    onmousedown() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGElement"].prototype, "SVGElement", "onmousedown_set", arguments);
    }
  }.onmousedown
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGElement"].prototype, "onmouseenter", {
  configurable: true,
  enumerable: true,
  get: {
    onmouseenter() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGElement"].prototype, "SVGElement", "onmouseenter_get", arguments);
    }
  }.onmouseenter,
  set: {
    onmouseenter() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGElement"].prototype, "SVGElement", "onmouseenter_set", arguments);
    }
  }.onmouseenter
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGElement"].prototype, "onmouseleave", {
  configurable: true,
  enumerable: true,
  get: {
    onmouseleave() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGElement"].prototype, "SVGElement", "onmouseleave_get", arguments);
    }
  }.onmouseleave,
  set: {
    onmouseleave() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGElement"].prototype, "SVGElement", "onmouseleave_set", arguments);
    }
  }.onmouseleave
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGElement"].prototype, "onmousemove", {
  configurable: true,
  enumerable: true,
  get: {
    onmousemove() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGElement"].prototype, "SVGElement", "onmousemove_get", arguments);
    }
  }.onmousemove,
  set: {
    onmousemove() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGElement"].prototype, "SVGElement", "onmousemove_set", arguments);
    }
  }.onmousemove
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGElement"].prototype, "onmouseout", {
  configurable: true,
  enumerable: true,
  get: {
    onmouseout() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGElement"].prototype, "SVGElement", "onmouseout_get", arguments);
    }
  }.onmouseout,
  set: {
    onmouseout() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGElement"].prototype, "SVGElement", "onmouseout_set", arguments);
    }
  }.onmouseout
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGElement"].prototype, "onmouseover", {
  configurable: true,
  enumerable: true,
  get: {
    onmouseover() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGElement"].prototype, "SVGElement", "onmouseover_get", arguments);
    }
  }.onmouseover,
  set: {
    onmouseover() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGElement"].prototype, "SVGElement", "onmouseover_set", arguments);
    }
  }.onmouseover
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGElement"].prototype, "onmouseup", {
  configurable: true,
  enumerable: true,
  get: {
    onmouseup() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGElement"].prototype, "SVGElement", "onmouseup_get", arguments);
    }
  }.onmouseup,
  set: {
    onmouseup() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGElement"].prototype, "SVGElement", "onmouseup_set", arguments);
    }
  }.onmouseup
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGElement"].prototype, "onmousewheel", {
  configurable: true,
  enumerable: true,
  get: {
    onmousewheel() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGElement"].prototype, "SVGElement", "onmousewheel_get", arguments);
    }
  }.onmousewheel,
  set: {
    onmousewheel() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGElement"].prototype, "SVGElement", "onmousewheel_set", arguments);
    }
  }.onmousewheel
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGElement"].prototype, "onpause", {
  configurable: true,
  enumerable: true,
  get: {
    onpause() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGElement"].prototype, "SVGElement", "onpause_get", arguments);
    }
  }.onpause,
  set: {
    onpause() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGElement"].prototype, "SVGElement", "onpause_set", arguments);
    }
  }.onpause
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGElement"].prototype, "onplay", {
  configurable: true,
  enumerable: true,
  get: {
    onplay() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGElement"].prototype, "SVGElement", "onplay_get", arguments);
    }
  }.onplay,
  set: {
    onplay() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGElement"].prototype, "SVGElement", "onplay_set", arguments);
    }
  }.onplay
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGElement"].prototype, "onplaying", {
  configurable: true,
  enumerable: true,
  get: {
    onplaying() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGElement"].prototype, "SVGElement", "onplaying_get", arguments);
    }
  }.onplaying,
  set: {
    onplaying() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGElement"].prototype, "SVGElement", "onplaying_set", arguments);
    }
  }.onplaying
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGElement"].prototype, "onprogress", {
  configurable: true,
  enumerable: true,
  get: {
    onprogress() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGElement"].prototype, "SVGElement", "onprogress_get", arguments);
    }
  }.onprogress,
  set: {
    onprogress() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGElement"].prototype, "SVGElement", "onprogress_set", arguments);
    }
  }.onprogress
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGElement"].prototype, "onratechange", {
  configurable: true,
  enumerable: true,
  get: {
    onratechange() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGElement"].prototype, "SVGElement", "onratechange_get", arguments);
    }
  }.onratechange,
  set: {
    onratechange() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGElement"].prototype, "SVGElement", "onratechange_set", arguments);
    }
  }.onratechange
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGElement"].prototype, "onreset", {
  configurable: true,
  enumerable: true,
  get: {
    onreset() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGElement"].prototype, "SVGElement", "onreset_get", arguments);
    }
  }.onreset,
  set: {
    onreset() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGElement"].prototype, "SVGElement", "onreset_set", arguments);
    }
  }.onreset
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGElement"].prototype, "onresize", {
  configurable: true,
  enumerable: true,
  get: {
    onresize() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGElement"].prototype, "SVGElement", "onresize_get", arguments);
    }
  }.onresize,
  set: {
    onresize() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGElement"].prototype, "SVGElement", "onresize_set", arguments);
    }
  }.onresize
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGElement"].prototype, "onscroll", {
  configurable: true,
  enumerable: true,
  get: {
    onscroll() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGElement"].prototype, "SVGElement", "onscroll_get", arguments);
    }
  }.onscroll,
  set: {
    onscroll() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGElement"].prototype, "SVGElement", "onscroll_set", arguments);
    }
  }.onscroll
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGElement"].prototype, "onsecuritypolicyviolation", {
  configurable: true,
  enumerable: true,
  get: {
    onsecuritypolicyviolation() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGElement"].prototype, "SVGElement", "onsecuritypolicyviolation_get", arguments);
    }
  }.onsecuritypolicyviolation,
  set: {
    onsecuritypolicyviolation() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGElement"].prototype, "SVGElement", "onsecuritypolicyviolation_set", arguments);
    }
  }.onsecuritypolicyviolation
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGElement"].prototype, "onseeked", {
  configurable: true,
  enumerable: true,
  get: {
    onseeked() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGElement"].prototype, "SVGElement", "onseeked_get", arguments);
    }
  }.onseeked,
  set: {
    onseeked() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGElement"].prototype, "SVGElement", "onseeked_set", arguments);
    }
  }.onseeked
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGElement"].prototype, "onseeking", {
  configurable: true,
  enumerable: true,
  get: {
    onseeking() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGElement"].prototype, "SVGElement", "onseeking_get", arguments);
    }
  }.onseeking,
  set: {
    onseeking() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGElement"].prototype, "SVGElement", "onseeking_set", arguments);
    }
  }.onseeking
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGElement"].prototype, "onselect", {
  configurable: true,
  enumerable: true,
  get: {
    onselect() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGElement"].prototype, "SVGElement", "onselect_get", arguments);
    }
  }.onselect,
  set: {
    onselect() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGElement"].prototype, "SVGElement", "onselect_set", arguments);
    }
  }.onselect
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGElement"].prototype, "onslotchange", {
  configurable: true,
  enumerable: true,
  get: {
    onslotchange() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGElement"].prototype, "SVGElement", "onslotchange_get", arguments);
    }
  }.onslotchange,
  set: {
    onslotchange() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGElement"].prototype, "SVGElement", "onslotchange_set", arguments);
    }
  }.onslotchange
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGElement"].prototype, "onstalled", {
  configurable: true,
  enumerable: true,
  get: {
    onstalled() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGElement"].prototype, "SVGElement", "onstalled_get", arguments);
    }
  }.onstalled,
  set: {
    onstalled() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGElement"].prototype, "SVGElement", "onstalled_set", arguments);
    }
  }.onstalled
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGElement"].prototype, "onsubmit", {
  configurable: true,
  enumerable: true,
  get: {
    onsubmit() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGElement"].prototype, "SVGElement", "onsubmit_get", arguments);
    }
  }.onsubmit,
  set: {
    onsubmit() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGElement"].prototype, "SVGElement", "onsubmit_set", arguments);
    }
  }.onsubmit
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGElement"].prototype, "onsuspend", {
  configurable: true,
  enumerable: true,
  get: {
    onsuspend() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGElement"].prototype, "SVGElement", "onsuspend_get", arguments);
    }
  }.onsuspend,
  set: {
    onsuspend() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGElement"].prototype, "SVGElement", "onsuspend_set", arguments);
    }
  }.onsuspend
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGElement"].prototype, "ontimeupdate", {
  configurable: true,
  enumerable: true,
  get: {
    ontimeupdate() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGElement"].prototype, "SVGElement", "ontimeupdate_get", arguments);
    }
  }.ontimeupdate,
  set: {
    ontimeupdate() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGElement"].prototype, "SVGElement", "ontimeupdate_set", arguments);
    }
  }.ontimeupdate
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGElement"].prototype, "ontoggle", {
  configurable: true,
  enumerable: true,
  get: {
    ontoggle() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGElement"].prototype, "SVGElement", "ontoggle_get", arguments);
    }
  }.ontoggle,
  set: {
    ontoggle() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGElement"].prototype, "SVGElement", "ontoggle_set", arguments);
    }
  }.ontoggle
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGElement"].prototype, "onvolumechange", {
  configurable: true,
  enumerable: true,
  get: {
    onvolumechange() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGElement"].prototype, "SVGElement", "onvolumechange_get", arguments);
    }
  }.onvolumechange,
  set: {
    onvolumechange() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGElement"].prototype, "SVGElement", "onvolumechange_set", arguments);
    }
  }.onvolumechange
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGElement"].prototype, "onwaiting", {
  configurable: true,
  enumerable: true,
  get: {
    onwaiting() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGElement"].prototype, "SVGElement", "onwaiting_get", arguments);
    }
  }.onwaiting,
  set: {
    onwaiting() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGElement"].prototype, "SVGElement", "onwaiting_set", arguments);
    }
  }.onwaiting
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGElement"].prototype, "onwebkitanimationend", {
  configurable: true,
  enumerable: true,
  get: {
    onwebkitanimationend() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGElement"].prototype, "SVGElement", "onwebkitanimationend_get", arguments);
    }
  }.onwebkitanimationend,
  set: {
    onwebkitanimationend() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGElement"].prototype, "SVGElement", "onwebkitanimationend_set", arguments);
    }
  }.onwebkitanimationend
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGElement"].prototype, "onwebkitanimationiteration", {
  configurable: true,
  enumerable: true,
  get: {
    onwebkitanimationiteration() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGElement"].prototype, "SVGElement", "onwebkitanimationiteration_get", arguments);
    }
  }.onwebkitanimationiteration,
  set: {
    onwebkitanimationiteration() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGElement"].prototype, "SVGElement", "onwebkitanimationiteration_set", arguments);
    }
  }.onwebkitanimationiteration
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGElement"].prototype, "onwebkitanimationstart", {
  configurable: true,
  enumerable: true,
  get: {
    onwebkitanimationstart() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGElement"].prototype, "SVGElement", "onwebkitanimationstart_get", arguments);
    }
  }.onwebkitanimationstart,
  set: {
    onwebkitanimationstart() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGElement"].prototype, "SVGElement", "onwebkitanimationstart_set", arguments);
    }
  }.onwebkitanimationstart
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGElement"].prototype, "onwebkittransitionend", {
  configurable: true,
  enumerable: true,
  get: {
    onwebkittransitionend() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGElement"].prototype, "SVGElement", "onwebkittransitionend_get", arguments);
    }
  }.onwebkittransitionend,
  set: {
    onwebkittransitionend() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGElement"].prototype, "SVGElement", "onwebkittransitionend_set", arguments);
    }
  }.onwebkittransitionend
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGElement"].prototype, "onwheel", {
  configurable: true,
  enumerable: true,
  get: {
    onwheel() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGElement"].prototype, "SVGElement", "onwheel_get", arguments);
    }
  }.onwheel,
  set: {
    onwheel() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGElement"].prototype, "SVGElement", "onwheel_set", arguments);
    }
  }.onwheel
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGElement"].prototype, "onauxclick", {
  configurable: true,
  enumerable: true,
  get: {
    onauxclick() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGElement"].prototype, "SVGElement", "onauxclick_get", arguments);
    }
  }.onauxclick,
  set: {
    onauxclick() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGElement"].prototype, "SVGElement", "onauxclick_set", arguments);
    }
  }.onauxclick
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGElement"].prototype, "ongotpointercapture", {
  configurable: true,
  enumerable: true,
  get: {
    ongotpointercapture() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGElement"].prototype, "SVGElement", "ongotpointercapture_get", arguments);
    }
  }.ongotpointercapture,
  set: {
    ongotpointercapture() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGElement"].prototype, "SVGElement", "ongotpointercapture_set", arguments);
    }
  }.ongotpointercapture
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGElement"].prototype, "onlostpointercapture", {
  configurable: true,
  enumerable: true,
  get: {
    onlostpointercapture() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGElement"].prototype, "SVGElement", "onlostpointercapture_get", arguments);
    }
  }.onlostpointercapture,
  set: {
    onlostpointercapture() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGElement"].prototype, "SVGElement", "onlostpointercapture_set", arguments);
    }
  }.onlostpointercapture
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGElement"].prototype, "onpointerdown", {
  configurable: true,
  enumerable: true,
  get: {
    onpointerdown() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGElement"].prototype, "SVGElement", "onpointerdown_get", arguments);
    }
  }.onpointerdown,
  set: {
    onpointerdown() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGElement"].prototype, "SVGElement", "onpointerdown_set", arguments);
    }
  }.onpointerdown
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGElement"].prototype, "onpointermove", {
  configurable: true,
  enumerable: true,
  get: {
    onpointermove() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGElement"].prototype, "SVGElement", "onpointermove_get", arguments);
    }
  }.onpointermove,
  set: {
    onpointermove() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGElement"].prototype, "SVGElement", "onpointermove_set", arguments);
    }
  }.onpointermove
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGElement"].prototype, "onpointerrawupdate", {
  configurable: true,
  enumerable: true,
  get: {
    onpointerrawupdate() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGElement"].prototype, "SVGElement", "onpointerrawupdate_get", arguments);
    }
  }.onpointerrawupdate,
  set: {
    onpointerrawupdate() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGElement"].prototype, "SVGElement", "onpointerrawupdate_set", arguments);
    }
  }.onpointerrawupdate
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGElement"].prototype, "onpointerup", {
  configurable: true,
  enumerable: true,
  get: {
    onpointerup() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGElement"].prototype, "SVGElement", "onpointerup_get", arguments);
    }
  }.onpointerup,
  set: {
    onpointerup() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGElement"].prototype, "SVGElement", "onpointerup_set", arguments);
    }
  }.onpointerup
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGElement"].prototype, "onpointercancel", {
  configurable: true,
  enumerable: true,
  get: {
    onpointercancel() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGElement"].prototype, "SVGElement", "onpointercancel_get", arguments);
    }
  }.onpointercancel,
  set: {
    onpointercancel() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGElement"].prototype, "SVGElement", "onpointercancel_set", arguments);
    }
  }.onpointercancel
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGElement"].prototype, "onpointerover", {
  configurable: true,
  enumerable: true,
  get: {
    onpointerover() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGElement"].prototype, "SVGElement", "onpointerover_get", arguments);
    }
  }.onpointerover,
  set: {
    onpointerover() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGElement"].prototype, "SVGElement", "onpointerover_set", arguments);
    }
  }.onpointerover
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGElement"].prototype, "onpointerout", {
  configurable: true,
  enumerable: true,
  get: {
    onpointerout() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGElement"].prototype, "SVGElement", "onpointerout_get", arguments);
    }
  }.onpointerout,
  set: {
    onpointerout() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGElement"].prototype, "SVGElement", "onpointerout_set", arguments);
    }
  }.onpointerout
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGElement"].prototype, "onpointerenter", {
  configurable: true,
  enumerable: true,
  get: {
    onpointerenter() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGElement"].prototype, "SVGElement", "onpointerenter_get", arguments);
    }
  }.onpointerenter,
  set: {
    onpointerenter() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGElement"].prototype, "SVGElement", "onpointerenter_set", arguments);
    }
  }.onpointerenter
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGElement"].prototype, "onpointerleave", {
  configurable: true,
  enumerable: true,
  get: {
    onpointerleave() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGElement"].prototype, "SVGElement", "onpointerleave_get", arguments);
    }
  }.onpointerleave,
  set: {
    onpointerleave() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGElement"].prototype, "SVGElement", "onpointerleave_set", arguments);
    }
  }.onpointerleave
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGElement"].prototype, "onselectstart", {
  configurable: true,
  enumerable: true,
  get: {
    onselectstart() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGElement"].prototype, "SVGElement", "onselectstart_get", arguments);
    }
  }.onselectstart,
  set: {
    onselectstart() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGElement"].prototype, "SVGElement", "onselectstart_set", arguments);
    }
  }.onselectstart
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGElement"].prototype, "onselectionchange", {
  configurable: true,
  enumerable: true,
  get: {
    onselectionchange() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGElement"].prototype, "SVGElement", "onselectionchange_get", arguments);
    }
  }.onselectionchange,
  set: {
    onselectionchange() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGElement"].prototype, "SVGElement", "onselectionchange_set", arguments);
    }
  }.onselectionchange
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGElement"].prototype, "onanimationend", {
  configurable: true,
  enumerable: true,
  get: {
    onanimationend() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGElement"].prototype, "SVGElement", "onanimationend_get", arguments);
    }
  }.onanimationend,
  set: {
    onanimationend() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGElement"].prototype, "SVGElement", "onanimationend_set", arguments);
    }
  }.onanimationend
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGElement"].prototype, "onanimationiteration", {
  configurable: true,
  enumerable: true,
  get: {
    onanimationiteration() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGElement"].prototype, "SVGElement", "onanimationiteration_get", arguments);
    }
  }.onanimationiteration,
  set: {
    onanimationiteration() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGElement"].prototype, "SVGElement", "onanimationiteration_set", arguments);
    }
  }.onanimationiteration
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGElement"].prototype, "onanimationstart", {
  configurable: true,
  enumerable: true,
  get: {
    onanimationstart() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGElement"].prototype, "SVGElement", "onanimationstart_get", arguments);
    }
  }.onanimationstart,
  set: {
    onanimationstart() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGElement"].prototype, "SVGElement", "onanimationstart_set", arguments);
    }
  }.onanimationstart
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGElement"].prototype, "ontransitionrun", {
  configurable: true,
  enumerable: true,
  get: {
    ontransitionrun() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGElement"].prototype, "SVGElement", "ontransitionrun_get", arguments);
    }
  }.ontransitionrun,
  set: {
    ontransitionrun() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGElement"].prototype, "SVGElement", "ontransitionrun_set", arguments);
    }
  }.ontransitionrun
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGElement"].prototype, "ontransitionstart", {
  configurable: true,
  enumerable: true,
  get: {
    ontransitionstart() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGElement"].prototype, "SVGElement", "ontransitionstart_get", arguments);
    }
  }.ontransitionstart,
  set: {
    ontransitionstart() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGElement"].prototype, "SVGElement", "ontransitionstart_set", arguments);
    }
  }.ontransitionstart
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGElement"].prototype, "ontransitionend", {
  configurable: true,
  enumerable: true,
  get: {
    ontransitionend() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGElement"].prototype, "SVGElement", "ontransitionend_get", arguments);
    }
  }.ontransitionend,
  set: {
    ontransitionend() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGElement"].prototype, "SVGElement", "ontransitionend_set", arguments);
    }
  }.ontransitionend
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGElement"].prototype, "ontransitioncancel", {
  configurable: true,
  enumerable: true,
  get: {
    ontransitioncancel() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGElement"].prototype, "SVGElement", "ontransitioncancel_get", arguments);
    }
  }.ontransitioncancel,
  set: {
    ontransitioncancel() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGElement"].prototype, "SVGElement", "ontransitioncancel_set", arguments);
    }
  }.ontransitioncancel
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGElement"].prototype, "oncopy", {
  configurable: true,
  enumerable: true,
  get: {
    oncopy() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGElement"].prototype, "SVGElement", "oncopy_get", arguments);
    }
  }.oncopy,
  set: {
    oncopy() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGElement"].prototype, "SVGElement", "oncopy_set", arguments);
    }
  }.oncopy
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGElement"].prototype, "oncut", {
  configurable: true,
  enumerable: true,
  get: {
    oncut() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGElement"].prototype, "SVGElement", "oncut_get", arguments);
    }
  }.oncut,
  set: {
    oncut() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGElement"].prototype, "SVGElement", "oncut_set", arguments);
    }
  }.oncut
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGElement"].prototype, "onpaste", {
  configurable: true,
  enumerable: true,
  get: {
    onpaste() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGElement"].prototype, "SVGElement", "onpaste_get", arguments);
    }
  }.onpaste,
  set: {
    onpaste() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGElement"].prototype, "SVGElement", "onpaste_set", arguments);
    }
  }.onpaste
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGElement"].prototype, "dataset", {
  configurable: true,
  enumerable: true,
  get: {
    dataset() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGElement"].prototype, "SVGElement", "dataset_get", arguments);
    }
  }.dataset,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGElement"].prototype, "nonce", {
  configurable: true,
  enumerable: true,
  get: {
    nonce() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGElement"].prototype, "SVGElement", "nonce_get", arguments);
    }
  }.nonce,
  set: {
    nonce() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGElement"].prototype, "SVGElement", "nonce_set", arguments);
    }
  }.nonce
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGElement"].prototype, "autofocus", {
  configurable: true,
  enumerable: true,
  get: {
    autofocus() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGElement"].prototype, "SVGElement", "autofocus_get", arguments);
    }
  }.autofocus,
  set: {
    autofocus() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGElement"].prototype, "SVGElement", "autofocus_set", arguments);
    }
  }.autofocus
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGElement"].prototype, "tabIndex", {
  configurable: true,
  enumerable: true,
  get: {
    tabIndex() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGElement"].prototype, "SVGElement", "tabIndex_get", arguments);
    }
  }.tabIndex,
  set: {
    tabIndex() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGElement"].prototype, "SVGElement", "tabIndex_set", arguments);
    }
  }.tabIndex
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGElement"].prototype, "style", {
  configurable: true,
  enumerable: true,
  get: {
    style() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGElement"].prototype, "SVGElement", "style_get", arguments);
    }
  }.style,
  set: {
    style() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGElement"].prototype, "SVGElement", "style_set", arguments);
    }
  }.style
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGElement"].prototype, "attributeStyleMap", {
  configurable: true,
  enumerable: true,
  get: {
    attributeStyleMap() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGElement"].prototype, "SVGElement", "attributeStyleMap_get", arguments);
    }
  }.attributeStyleMap,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGElement"].prototype, "blur", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    blur() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGElement"].prototype, "SVGElement", "blur", arguments);
    }
  }.blur
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGElement"].prototype, "focus", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    focus() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGElement"].prototype, "SVGElement", "focus", arguments);
    }
  }.focus
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGElement"].prototype, "oncontentvisibilityautostatechange", {
  configurable: true,
  enumerable: true,
  get: {
    oncontentvisibilityautostatechange() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGElement"].prototype, "SVGElement", "oncontentvisibilityautostatechange_get", arguments);
    }
  }.oncontentvisibilityautostatechange,
  set: {
    oncontentvisibilityautostatechange() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGElement"].prototype, "SVGElement", "oncontentvisibilityautostatechange_set", arguments);
    }
  }.oncontentvisibilityautostatechange
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGElement"].prototype, "onscrollend", {
  configurable: true,
  enumerable: true,
  get: {
    onscrollend() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGElement"].prototype, "SVGElement", "onscrollend_get", arguments);
    }
  }.onscrollend,
  set: {
    onscrollend() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGElement"].prototype, "SVGElement", "onscrollend_set", arguments);
    }
  }.onscrollend
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGElement"].prototype, "onbeforematch", {
  configurable: true,
  enumerable: true,
  get: {
    onbeforematch() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGElement"].prototype, "SVGElement", "onbeforematch_get", arguments);
    }
  }.onbeforematch,
  set: {
    onbeforematch() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGElement"].prototype, "SVGElement", "onbeforematch_set", arguments);
    }
  }.onbeforematch
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGElement"].prototype, "onbeforetoggle", {
  configurable: true,
  enumerable: true,
  get: {
    onbeforetoggle() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGElement"].prototype, "SVGElement", "onbeforetoggle_get", arguments);
    }
  }.onbeforetoggle,
  set: {
    onbeforetoggle() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGElement"].prototype, "SVGElement", "onbeforetoggle_set", arguments);
    }
  }.onbeforetoggle
});