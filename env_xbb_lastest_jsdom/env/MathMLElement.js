// MathMLElement对象

bodavm.memory.globalobj['MathMLElement'] = function MathMLElement() {
  console.log_copy('MathMLElement 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof MathMLElement)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['MathMLElement'], "MathMLElement");
bodavm.memory.globalobj['MathMLElement'].prototype.__proto__ = bodavm.memory.globalobj['Element'].prototype;
bodavm.memory.globalobj['MathMLElement'].__proto__ = bodavm.memory.globalobj['Element'];
bodavm.toolsFunc.defineProperty('MathMLElement', "onbeforexrselect", {
  configurable: true,
  enumerable: true,
  get: function onbeforexrselect() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MathMLElement'].prototype, "MathMLElement", "onbeforexrselect_get", arguments);
  },
  set: function onbeforexrselect() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MathMLElement'].prototype, "MathMLElement", "onbeforexrselect_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('MathMLElement', "onabort", {
  configurable: true,
  enumerable: true,
  get: function onabort() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MathMLElement'].prototype, "MathMLElement", "onabort_get", arguments);
  },
  set: function onabort() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MathMLElement'].prototype, "MathMLElement", "onabort_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('MathMLElement', "onbeforeinput", {
  configurable: true,
  enumerable: true,
  get: function onbeforeinput() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MathMLElement'].prototype, "MathMLElement", "onbeforeinput_get", arguments);
  },
  set: function onbeforeinput() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MathMLElement'].prototype, "MathMLElement", "onbeforeinput_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('MathMLElement', "onblur", {
  configurable: true,
  enumerable: true,
  get: function onblur() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MathMLElement'].prototype, "MathMLElement", "onblur_get", arguments);
  },
  set: function onblur() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MathMLElement'].prototype, "MathMLElement", "onblur_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('MathMLElement', "oncancel", {
  configurable: true,
  enumerable: true,
  get: function oncancel() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MathMLElement'].prototype, "MathMLElement", "oncancel_get", arguments);
  },
  set: function oncancel() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MathMLElement'].prototype, "MathMLElement", "oncancel_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('MathMLElement', "oncanplay", {
  configurable: true,
  enumerable: true,
  get: function oncanplay() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MathMLElement'].prototype, "MathMLElement", "oncanplay_get", arguments);
  },
  set: function oncanplay() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MathMLElement'].prototype, "MathMLElement", "oncanplay_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('MathMLElement', "oncanplaythrough", {
  configurable: true,
  enumerable: true,
  get: function oncanplaythrough() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MathMLElement'].prototype, "MathMLElement", "oncanplaythrough_get", arguments);
  },
  set: function oncanplaythrough() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MathMLElement'].prototype, "MathMLElement", "oncanplaythrough_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('MathMLElement', "onchange", {
  configurable: true,
  enumerable: true,
  get: function onchange() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MathMLElement'].prototype, "MathMLElement", "onchange_get", arguments);
  },
  set: function onchange() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MathMLElement'].prototype, "MathMLElement", "onchange_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('MathMLElement', "onclick", {
  configurable: true,
  enumerable: true,
  get: function onclick() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MathMLElement'].prototype, "MathMLElement", "onclick_get", arguments);
  },
  set: function onclick() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MathMLElement'].prototype, "MathMLElement", "onclick_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('MathMLElement', "onclose", {
  configurable: true,
  enumerable: true,
  get: function onclose() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MathMLElement'].prototype, "MathMLElement", "onclose_get", arguments);
  },
  set: function onclose() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MathMLElement'].prototype, "MathMLElement", "onclose_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('MathMLElement', "oncontextlost", {
  configurable: true,
  enumerable: true,
  get: function oncontextlost() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MathMLElement'].prototype, "MathMLElement", "oncontextlost_get", arguments);
  },
  set: function oncontextlost() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MathMLElement'].prototype, "MathMLElement", "oncontextlost_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('MathMLElement', "oncontextmenu", {
  configurable: true,
  enumerable: true,
  get: function oncontextmenu() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MathMLElement'].prototype, "MathMLElement", "oncontextmenu_get", arguments);
  },
  set: function oncontextmenu() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MathMLElement'].prototype, "MathMLElement", "oncontextmenu_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('MathMLElement', "oncontextrestored", {
  configurable: true,
  enumerable: true,
  get: function oncontextrestored() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MathMLElement'].prototype, "MathMLElement", "oncontextrestored_get", arguments);
  },
  set: function oncontextrestored() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MathMLElement'].prototype, "MathMLElement", "oncontextrestored_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('MathMLElement', "oncuechange", {
  configurable: true,
  enumerable: true,
  get: function oncuechange() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MathMLElement'].prototype, "MathMLElement", "oncuechange_get", arguments);
  },
  set: function oncuechange() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MathMLElement'].prototype, "MathMLElement", "oncuechange_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('MathMLElement', "ondblclick", {
  configurable: true,
  enumerable: true,
  get: function ondblclick() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MathMLElement'].prototype, "MathMLElement", "ondblclick_get", arguments);
  },
  set: function ondblclick() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MathMLElement'].prototype, "MathMLElement", "ondblclick_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('MathMLElement', "ondrag", {
  configurable: true,
  enumerable: true,
  get: function ondrag() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MathMLElement'].prototype, "MathMLElement", "ondrag_get", arguments);
  },
  set: function ondrag() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MathMLElement'].prototype, "MathMLElement", "ondrag_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('MathMLElement', "ondragend", {
  configurable: true,
  enumerable: true,
  get: function ondragend() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MathMLElement'].prototype, "MathMLElement", "ondragend_get", arguments);
  },
  set: function ondragend() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MathMLElement'].prototype, "MathMLElement", "ondragend_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('MathMLElement', "ondragenter", {
  configurable: true,
  enumerable: true,
  get: function ondragenter() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MathMLElement'].prototype, "MathMLElement", "ondragenter_get", arguments);
  },
  set: function ondragenter() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MathMLElement'].prototype, "MathMLElement", "ondragenter_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('MathMLElement', "ondragleave", {
  configurable: true,
  enumerable: true,
  get: function ondragleave() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MathMLElement'].prototype, "MathMLElement", "ondragleave_get", arguments);
  },
  set: function ondragleave() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MathMLElement'].prototype, "MathMLElement", "ondragleave_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('MathMLElement', "ondragover", {
  configurable: true,
  enumerable: true,
  get: function ondragover() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MathMLElement'].prototype, "MathMLElement", "ondragover_get", arguments);
  },
  set: function ondragover() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MathMLElement'].prototype, "MathMLElement", "ondragover_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('MathMLElement', "ondragstart", {
  configurable: true,
  enumerable: true,
  get: function ondragstart() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MathMLElement'].prototype, "MathMLElement", "ondragstart_get", arguments);
  },
  set: function ondragstart() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MathMLElement'].prototype, "MathMLElement", "ondragstart_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('MathMLElement', "ondrop", {
  configurable: true,
  enumerable: true,
  get: function ondrop() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MathMLElement'].prototype, "MathMLElement", "ondrop_get", arguments);
  },
  set: function ondrop() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MathMLElement'].prototype, "MathMLElement", "ondrop_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('MathMLElement', "ondurationchange", {
  configurable: true,
  enumerable: true,
  get: function ondurationchange() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MathMLElement'].prototype, "MathMLElement", "ondurationchange_get", arguments);
  },
  set: function ondurationchange() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MathMLElement'].prototype, "MathMLElement", "ondurationchange_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('MathMLElement', "onemptied", {
  configurable: true,
  enumerable: true,
  get: function onemptied() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MathMLElement'].prototype, "MathMLElement", "onemptied_get", arguments);
  },
  set: function onemptied() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MathMLElement'].prototype, "MathMLElement", "onemptied_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('MathMLElement', "onended", {
  configurable: true,
  enumerable: true,
  get: function onended() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MathMLElement'].prototype, "MathMLElement", "onended_get", arguments);
  },
  set: function onended() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MathMLElement'].prototype, "MathMLElement", "onended_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('MathMLElement', "onerror", {
  configurable: true,
  enumerable: true,
  get: function onerror() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MathMLElement'].prototype, "MathMLElement", "onerror_get", arguments);
  },
  set: function onerror() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MathMLElement'].prototype, "MathMLElement", "onerror_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('MathMLElement', "onfocus", {
  configurable: true,
  enumerable: true,
  get: function onfocus() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MathMLElement'].prototype, "MathMLElement", "onfocus_get", arguments);
  },
  set: function onfocus() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MathMLElement'].prototype, "MathMLElement", "onfocus_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('MathMLElement', "onformdata", {
  configurable: true,
  enumerable: true,
  get: function onformdata() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MathMLElement'].prototype, "MathMLElement", "onformdata_get", arguments);
  },
  set: function onformdata() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MathMLElement'].prototype, "MathMLElement", "onformdata_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('MathMLElement', "oninput", {
  configurable: true,
  enumerable: true,
  get: function oninput() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MathMLElement'].prototype, "MathMLElement", "oninput_get", arguments);
  },
  set: function oninput() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MathMLElement'].prototype, "MathMLElement", "oninput_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('MathMLElement', "oninvalid", {
  configurable: true,
  enumerable: true,
  get: function oninvalid() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MathMLElement'].prototype, "MathMLElement", "oninvalid_get", arguments);
  },
  set: function oninvalid() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MathMLElement'].prototype, "MathMLElement", "oninvalid_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('MathMLElement', "onkeydown", {
  configurable: true,
  enumerable: true,
  get: function onkeydown() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MathMLElement'].prototype, "MathMLElement", "onkeydown_get", arguments);
  },
  set: function onkeydown() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MathMLElement'].prototype, "MathMLElement", "onkeydown_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('MathMLElement', "onkeypress", {
  configurable: true,
  enumerable: true,
  get: function onkeypress() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MathMLElement'].prototype, "MathMLElement", "onkeypress_get", arguments);
  },
  set: function onkeypress() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MathMLElement'].prototype, "MathMLElement", "onkeypress_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('MathMLElement', "onkeyup", {
  configurable: true,
  enumerable: true,
  get: function onkeyup() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MathMLElement'].prototype, "MathMLElement", "onkeyup_get", arguments);
  },
  set: function onkeyup() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MathMLElement'].prototype, "MathMLElement", "onkeyup_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('MathMLElement', "onload", {
  configurable: true,
  enumerable: true,
  get: function onload() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MathMLElement'].prototype, "MathMLElement", "onload_get", arguments);
  },
  set: function onload() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MathMLElement'].prototype, "MathMLElement", "onload_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('MathMLElement', "onloadeddata", {
  configurable: true,
  enumerable: true,
  get: function onloadeddata() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MathMLElement'].prototype, "MathMLElement", "onloadeddata_get", arguments);
  },
  set: function onloadeddata() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MathMLElement'].prototype, "MathMLElement", "onloadeddata_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('MathMLElement', "onloadedmetadata", {
  configurable: true,
  enumerable: true,
  get: function onloadedmetadata() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MathMLElement'].prototype, "MathMLElement", "onloadedmetadata_get", arguments);
  },
  set: function onloadedmetadata() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MathMLElement'].prototype, "MathMLElement", "onloadedmetadata_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('MathMLElement', "onloadstart", {
  configurable: true,
  enumerable: true,
  get: function onloadstart() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MathMLElement'].prototype, "MathMLElement", "onloadstart_get", arguments);
  },
  set: function onloadstart() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MathMLElement'].prototype, "MathMLElement", "onloadstart_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('MathMLElement', "onmousedown", {
  configurable: true,
  enumerable: true,
  get: function onmousedown() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MathMLElement'].prototype, "MathMLElement", "onmousedown_get", arguments);
  },
  set: function onmousedown() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MathMLElement'].prototype, "MathMLElement", "onmousedown_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('MathMLElement', "onmouseenter", {
  configurable: true,
  enumerable: true,
  get: function onmouseenter() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MathMLElement'].prototype, "MathMLElement", "onmouseenter_get", arguments);
  },
  set: function onmouseenter() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MathMLElement'].prototype, "MathMLElement", "onmouseenter_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('MathMLElement', "onmouseleave", {
  configurable: true,
  enumerable: true,
  get: function onmouseleave() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MathMLElement'].prototype, "MathMLElement", "onmouseleave_get", arguments);
  },
  set: function onmouseleave() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MathMLElement'].prototype, "MathMLElement", "onmouseleave_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('MathMLElement', "onmousemove", {
  configurable: true,
  enumerable: true,
  get: function onmousemove() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MathMLElement'].prototype, "MathMLElement", "onmousemove_get", arguments);
  },
  set: function onmousemove() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MathMLElement'].prototype, "MathMLElement", "onmousemove_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('MathMLElement', "onmouseout", {
  configurable: true,
  enumerable: true,
  get: function onmouseout() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MathMLElement'].prototype, "MathMLElement", "onmouseout_get", arguments);
  },
  set: function onmouseout() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MathMLElement'].prototype, "MathMLElement", "onmouseout_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('MathMLElement', "onmouseover", {
  configurable: true,
  enumerable: true,
  get: function onmouseover() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MathMLElement'].prototype, "MathMLElement", "onmouseover_get", arguments);
  },
  set: function onmouseover() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MathMLElement'].prototype, "MathMLElement", "onmouseover_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('MathMLElement', "onmouseup", {
  configurable: true,
  enumerable: true,
  get: function onmouseup() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MathMLElement'].prototype, "MathMLElement", "onmouseup_get", arguments);
  },
  set: function onmouseup() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MathMLElement'].prototype, "MathMLElement", "onmouseup_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('MathMLElement', "onmousewheel", {
  configurable: true,
  enumerable: true,
  get: function onmousewheel() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MathMLElement'].prototype, "MathMLElement", "onmousewheel_get", arguments);
  },
  set: function onmousewheel() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MathMLElement'].prototype, "MathMLElement", "onmousewheel_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('MathMLElement', "onpause", {
  configurable: true,
  enumerable: true,
  get: function onpause() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MathMLElement'].prototype, "MathMLElement", "onpause_get", arguments);
  },
  set: function onpause() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MathMLElement'].prototype, "MathMLElement", "onpause_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('MathMLElement', "onplay", {
  configurable: true,
  enumerable: true,
  get: function onplay() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MathMLElement'].prototype, "MathMLElement", "onplay_get", arguments);
  },
  set: function onplay() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MathMLElement'].prototype, "MathMLElement", "onplay_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('MathMLElement', "onplaying", {
  configurable: true,
  enumerable: true,
  get: function onplaying() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MathMLElement'].prototype, "MathMLElement", "onplaying_get", arguments);
  },
  set: function onplaying() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MathMLElement'].prototype, "MathMLElement", "onplaying_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('MathMLElement', "onprogress", {
  configurable: true,
  enumerable: true,
  get: function onprogress() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MathMLElement'].prototype, "MathMLElement", "onprogress_get", arguments);
  },
  set: function onprogress() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MathMLElement'].prototype, "MathMLElement", "onprogress_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('MathMLElement', "onratechange", {
  configurable: true,
  enumerable: true,
  get: function onratechange() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MathMLElement'].prototype, "MathMLElement", "onratechange_get", arguments);
  },
  set: function onratechange() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MathMLElement'].prototype, "MathMLElement", "onratechange_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('MathMLElement', "onreset", {
  configurable: true,
  enumerable: true,
  get: function onreset() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MathMLElement'].prototype, "MathMLElement", "onreset_get", arguments);
  },
  set: function onreset() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MathMLElement'].prototype, "MathMLElement", "onreset_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('MathMLElement', "onresize", {
  configurable: true,
  enumerable: true,
  get: function onresize() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MathMLElement'].prototype, "MathMLElement", "onresize_get", arguments);
  },
  set: function onresize() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MathMLElement'].prototype, "MathMLElement", "onresize_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('MathMLElement', "onscroll", {
  configurable: true,
  enumerable: true,
  get: function onscroll() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MathMLElement'].prototype, "MathMLElement", "onscroll_get", arguments);
  },
  set: function onscroll() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MathMLElement'].prototype, "MathMLElement", "onscroll_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('MathMLElement', "onsecuritypolicyviolation", {
  configurable: true,
  enumerable: true,
  get: function onsecuritypolicyviolation() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MathMLElement'].prototype, "MathMLElement", "onsecuritypolicyviolation_get", arguments);
  },
  set: function onsecuritypolicyviolation() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MathMLElement'].prototype, "MathMLElement", "onsecuritypolicyviolation_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('MathMLElement', "onseeked", {
  configurable: true,
  enumerable: true,
  get: function onseeked() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MathMLElement'].prototype, "MathMLElement", "onseeked_get", arguments);
  },
  set: function onseeked() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MathMLElement'].prototype, "MathMLElement", "onseeked_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('MathMLElement', "onseeking", {
  configurable: true,
  enumerable: true,
  get: function onseeking() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MathMLElement'].prototype, "MathMLElement", "onseeking_get", arguments);
  },
  set: function onseeking() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MathMLElement'].prototype, "MathMLElement", "onseeking_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('MathMLElement', "onselect", {
  configurable: true,
  enumerable: true,
  get: function onselect() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MathMLElement'].prototype, "MathMLElement", "onselect_get", arguments);
  },
  set: function onselect() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MathMLElement'].prototype, "MathMLElement", "onselect_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('MathMLElement', "onslotchange", {
  configurable: true,
  enumerable: true,
  get: function onslotchange() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MathMLElement'].prototype, "MathMLElement", "onslotchange_get", arguments);
  },
  set: function onslotchange() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MathMLElement'].prototype, "MathMLElement", "onslotchange_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('MathMLElement', "onstalled", {
  configurable: true,
  enumerable: true,
  get: function onstalled() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MathMLElement'].prototype, "MathMLElement", "onstalled_get", arguments);
  },
  set: function onstalled() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MathMLElement'].prototype, "MathMLElement", "onstalled_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('MathMLElement', "onsubmit", {
  configurable: true,
  enumerable: true,
  get: function onsubmit() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MathMLElement'].prototype, "MathMLElement", "onsubmit_get", arguments);
  },
  set: function onsubmit() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MathMLElement'].prototype, "MathMLElement", "onsubmit_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('MathMLElement', "onsuspend", {
  configurable: true,
  enumerable: true,
  get: function onsuspend() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MathMLElement'].prototype, "MathMLElement", "onsuspend_get", arguments);
  },
  set: function onsuspend() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MathMLElement'].prototype, "MathMLElement", "onsuspend_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('MathMLElement', "ontimeupdate", {
  configurable: true,
  enumerable: true,
  get: function ontimeupdate() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MathMLElement'].prototype, "MathMLElement", "ontimeupdate_get", arguments);
  },
  set: function ontimeupdate() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MathMLElement'].prototype, "MathMLElement", "ontimeupdate_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('MathMLElement', "ontoggle", {
  configurable: true,
  enumerable: true,
  get: function ontoggle() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MathMLElement'].prototype, "MathMLElement", "ontoggle_get", arguments);
  },
  set: function ontoggle() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MathMLElement'].prototype, "MathMLElement", "ontoggle_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('MathMLElement', "onvolumechange", {
  configurable: true,
  enumerable: true,
  get: function onvolumechange() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MathMLElement'].prototype, "MathMLElement", "onvolumechange_get", arguments);
  },
  set: function onvolumechange() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MathMLElement'].prototype, "MathMLElement", "onvolumechange_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('MathMLElement', "onwaiting", {
  configurable: true,
  enumerable: true,
  get: function onwaiting() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MathMLElement'].prototype, "MathMLElement", "onwaiting_get", arguments);
  },
  set: function onwaiting() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MathMLElement'].prototype, "MathMLElement", "onwaiting_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('MathMLElement', "onwebkitanimationend", {
  configurable: true,
  enumerable: true,
  get: function onwebkitanimationend() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MathMLElement'].prototype, "MathMLElement", "onwebkitanimationend_get", arguments);
  },
  set: function onwebkitanimationend() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MathMLElement'].prototype, "MathMLElement", "onwebkitanimationend_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('MathMLElement', "onwebkitanimationiteration", {
  configurable: true,
  enumerable: true,
  get: function onwebkitanimationiteration() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MathMLElement'].prototype, "MathMLElement", "onwebkitanimationiteration_get", arguments);
  },
  set: function onwebkitanimationiteration() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MathMLElement'].prototype, "MathMLElement", "onwebkitanimationiteration_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('MathMLElement', "onwebkitanimationstart", {
  configurable: true,
  enumerable: true,
  get: function onwebkitanimationstart() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MathMLElement'].prototype, "MathMLElement", "onwebkitanimationstart_get", arguments);
  },
  set: function onwebkitanimationstart() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MathMLElement'].prototype, "MathMLElement", "onwebkitanimationstart_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('MathMLElement', "onwebkittransitionend", {
  configurable: true,
  enumerable: true,
  get: function onwebkittransitionend() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MathMLElement'].prototype, "MathMLElement", "onwebkittransitionend_get", arguments);
  },
  set: function onwebkittransitionend() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MathMLElement'].prototype, "MathMLElement", "onwebkittransitionend_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('MathMLElement', "onwheel", {
  configurable: true,
  enumerable: true,
  get: function onwheel() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MathMLElement'].prototype, "MathMLElement", "onwheel_get", arguments);
  },
  set: function onwheel() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MathMLElement'].prototype, "MathMLElement", "onwheel_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('MathMLElement', "onauxclick", {
  configurable: true,
  enumerable: true,
  get: function onauxclick() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MathMLElement'].prototype, "MathMLElement", "onauxclick_get", arguments);
  },
  set: function onauxclick() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MathMLElement'].prototype, "MathMLElement", "onauxclick_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('MathMLElement', "ongotpointercapture", {
  configurable: true,
  enumerable: true,
  get: function ongotpointercapture() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MathMLElement'].prototype, "MathMLElement", "ongotpointercapture_get", arguments);
  },
  set: function ongotpointercapture() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MathMLElement'].prototype, "MathMLElement", "ongotpointercapture_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('MathMLElement', "onlostpointercapture", {
  configurable: true,
  enumerable: true,
  get: function onlostpointercapture() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MathMLElement'].prototype, "MathMLElement", "onlostpointercapture_get", arguments);
  },
  set: function onlostpointercapture() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MathMLElement'].prototype, "MathMLElement", "onlostpointercapture_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('MathMLElement', "onpointerdown", {
  configurable: true,
  enumerable: true,
  get: function onpointerdown() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MathMLElement'].prototype, "MathMLElement", "onpointerdown_get", arguments);
  },
  set: function onpointerdown() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MathMLElement'].prototype, "MathMLElement", "onpointerdown_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('MathMLElement', "onpointermove", {
  configurable: true,
  enumerable: true,
  get: function onpointermove() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MathMLElement'].prototype, "MathMLElement", "onpointermove_get", arguments);
  },
  set: function onpointermove() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MathMLElement'].prototype, "MathMLElement", "onpointermove_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('MathMLElement', "onpointerrawupdate", {
  configurable: true,
  enumerable: true,
  get: function onpointerrawupdate() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MathMLElement'].prototype, "MathMLElement", "onpointerrawupdate_get", arguments);
  },
  set: function onpointerrawupdate() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MathMLElement'].prototype, "MathMLElement", "onpointerrawupdate_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('MathMLElement', "onpointerup", {
  configurable: true,
  enumerable: true,
  get: function onpointerup() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MathMLElement'].prototype, "MathMLElement", "onpointerup_get", arguments);
  },
  set: function onpointerup() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MathMLElement'].prototype, "MathMLElement", "onpointerup_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('MathMLElement', "onpointercancel", {
  configurable: true,
  enumerable: true,
  get: function onpointercancel() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MathMLElement'].prototype, "MathMLElement", "onpointercancel_get", arguments);
  },
  set: function onpointercancel() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MathMLElement'].prototype, "MathMLElement", "onpointercancel_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('MathMLElement', "onpointerover", {
  configurable: true,
  enumerable: true,
  get: function onpointerover() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MathMLElement'].prototype, "MathMLElement", "onpointerover_get", arguments);
  },
  set: function onpointerover() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MathMLElement'].prototype, "MathMLElement", "onpointerover_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('MathMLElement', "onpointerout", {
  configurable: true,
  enumerable: true,
  get: function onpointerout() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MathMLElement'].prototype, "MathMLElement", "onpointerout_get", arguments);
  },
  set: function onpointerout() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MathMLElement'].prototype, "MathMLElement", "onpointerout_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('MathMLElement', "onpointerenter", {
  configurable: true,
  enumerable: true,
  get: function onpointerenter() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MathMLElement'].prototype, "MathMLElement", "onpointerenter_get", arguments);
  },
  set: function onpointerenter() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MathMLElement'].prototype, "MathMLElement", "onpointerenter_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('MathMLElement', "onpointerleave", {
  configurable: true,
  enumerable: true,
  get: function onpointerleave() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MathMLElement'].prototype, "MathMLElement", "onpointerleave_get", arguments);
  },
  set: function onpointerleave() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MathMLElement'].prototype, "MathMLElement", "onpointerleave_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('MathMLElement', "onselectstart", {
  configurable: true,
  enumerable: true,
  get: function onselectstart() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MathMLElement'].prototype, "MathMLElement", "onselectstart_get", arguments);
  },
  set: function onselectstart() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MathMLElement'].prototype, "MathMLElement", "onselectstart_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('MathMLElement', "onselectionchange", {
  configurable: true,
  enumerable: true,
  get: function onselectionchange() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MathMLElement'].prototype, "MathMLElement", "onselectionchange_get", arguments);
  },
  set: function onselectionchange() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MathMLElement'].prototype, "MathMLElement", "onselectionchange_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('MathMLElement', "onanimationend", {
  configurable: true,
  enumerable: true,
  get: function onanimationend() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MathMLElement'].prototype, "MathMLElement", "onanimationend_get", arguments);
  },
  set: function onanimationend() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MathMLElement'].prototype, "MathMLElement", "onanimationend_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('MathMLElement', "onanimationiteration", {
  configurable: true,
  enumerable: true,
  get: function onanimationiteration() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MathMLElement'].prototype, "MathMLElement", "onanimationiteration_get", arguments);
  },
  set: function onanimationiteration() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MathMLElement'].prototype, "MathMLElement", "onanimationiteration_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('MathMLElement', "onanimationstart", {
  configurable: true,
  enumerable: true,
  get: function onanimationstart() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MathMLElement'].prototype, "MathMLElement", "onanimationstart_get", arguments);
  },
  set: function onanimationstart() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MathMLElement'].prototype, "MathMLElement", "onanimationstart_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('MathMLElement', "ontransitionrun", {
  configurable: true,
  enumerable: true,
  get: function ontransitionrun() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MathMLElement'].prototype, "MathMLElement", "ontransitionrun_get", arguments);
  },
  set: function ontransitionrun() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MathMLElement'].prototype, "MathMLElement", "ontransitionrun_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('MathMLElement', "ontransitionstart", {
  configurable: true,
  enumerable: true,
  get: function ontransitionstart() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MathMLElement'].prototype, "MathMLElement", "ontransitionstart_get", arguments);
  },
  set: function ontransitionstart() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MathMLElement'].prototype, "MathMLElement", "ontransitionstart_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('MathMLElement', "ontransitionend", {
  configurable: true,
  enumerable: true,
  get: function ontransitionend() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MathMLElement'].prototype, "MathMLElement", "ontransitionend_get", arguments);
  },
  set: function ontransitionend() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MathMLElement'].prototype, "MathMLElement", "ontransitionend_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('MathMLElement', "ontransitioncancel", {
  configurable: true,
  enumerable: true,
  get: function ontransitioncancel() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MathMLElement'].prototype, "MathMLElement", "ontransitioncancel_get", arguments);
  },
  set: function ontransitioncancel() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MathMLElement'].prototype, "MathMLElement", "ontransitioncancel_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('MathMLElement', "oncopy", {
  configurable: true,
  enumerable: true,
  get: function oncopy() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MathMLElement'].prototype, "MathMLElement", "oncopy_get", arguments);
  },
  set: function oncopy() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MathMLElement'].prototype, "MathMLElement", "oncopy_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('MathMLElement', "oncut", {
  configurable: true,
  enumerable: true,
  get: function oncut() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MathMLElement'].prototype, "MathMLElement", "oncut_get", arguments);
  },
  set: function oncut() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MathMLElement'].prototype, "MathMLElement", "oncut_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('MathMLElement', "onpaste", {
  configurable: true,
  enumerable: true,
  get: function onpaste() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MathMLElement'].prototype, "MathMLElement", "onpaste_get", arguments);
  },
  set: function onpaste() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MathMLElement'].prototype, "MathMLElement", "onpaste_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('MathMLElement', "dataset", {
  configurable: true,
  enumerable: true,
  get: function dataset() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MathMLElement'].prototype, "MathMLElement", "dataset_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('MathMLElement', "nonce", {
  configurable: true,
  enumerable: true,
  get: function nonce() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MathMLElement'].prototype, "MathMLElement", "nonce_get", arguments);
  },
  set: function nonce() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MathMLElement'].prototype, "MathMLElement", "nonce_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('MathMLElement', "autofocus", {
  configurable: true,
  enumerable: true,
  get: function autofocus() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MathMLElement'].prototype, "MathMLElement", "autofocus_get", arguments);
  },
  set: function autofocus() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MathMLElement'].prototype, "MathMLElement", "autofocus_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('MathMLElement', "tabIndex", {
  configurable: true,
  enumerable: true,
  get: function tabIndex() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MathMLElement'].prototype, "MathMLElement", "tabIndex_get", arguments);
  },
  set: function tabIndex() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MathMLElement'].prototype, "MathMLElement", "tabIndex_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('MathMLElement', "style", {
  configurable: true,
  enumerable: true,
  get: function style() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MathMLElement'].prototype, "MathMLElement", "style_get", arguments);
  },
  set: function style() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MathMLElement'].prototype, "MathMLElement", "style_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('MathMLElement', "attributeStyleMap", {
  configurable: true,
  enumerable: true,
  get: function attributeStyleMap() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MathMLElement'].prototype, "MathMLElement", "attributeStyleMap_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('MathMLElement', "blur", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function blur() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MathMLElement'].prototype, "MathMLElement", "blur", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('MathMLElement', "focus", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function focus() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MathMLElement'].prototype, "MathMLElement", "focus", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('MathMLElement', "oncontentvisibilityautostatechange", {
  configurable: true,
  enumerable: true,
  get: function oncontentvisibilityautostatechange() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MathMLElement'].prototype, "MathMLElement", "oncontentvisibilityautostatechange_get", arguments);
  },
  set: function oncontentvisibilityautostatechange() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MathMLElement'].prototype, "MathMLElement", "oncontentvisibilityautostatechange_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('MathMLElement', "onbeforematch", {
  configurable: true,
  enumerable: true,
  get: function onbeforematch() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MathMLElement'].prototype, "MathMLElement", "onbeforematch_get", arguments);
  },
  set: function onbeforematch() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MathMLElement'].prototype, "MathMLElement", "onbeforematch_set", arguments);
  }
}, 'prototype');