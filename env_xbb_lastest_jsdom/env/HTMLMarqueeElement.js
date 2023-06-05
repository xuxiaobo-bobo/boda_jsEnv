// HTMLMarqueeElement对象

bodavm.memory.globalobj['HTMLMarqueeElement'] = function HTMLMarqueeElement() {
  console.log_copy('HTMLMarqueeElement 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof HTMLMarqueeElement)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['HTMLMarqueeElement'], "HTMLMarqueeElement");
bodavm.memory.globalobj['HTMLMarqueeElement'].prototype.__proto__ = bodavm.memory.globalobj['HTMLElement'].prototype;
bodavm.memory.globalobj['HTMLMarqueeElement'].__proto__ = bodavm.memory.globalobj['HTMLElement'];
bodavm.toolsFunc.defineProperty('HTMLMarqueeElement', "behavior", {
  configurable: true,
  enumerable: true,
  get: function behavior() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLMarqueeElement'].prototype, "HTMLMarqueeElement", "behavior_get", arguments);
  },
  set: function behavior() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLMarqueeElement'].prototype, "HTMLMarqueeElement", "behavior_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLMarqueeElement', "bgColor", {
  configurable: true,
  enumerable: true,
  get: function bgColor() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLMarqueeElement'].prototype, "HTMLMarqueeElement", "bgColor_get", arguments);
  },
  set: function bgColor() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLMarqueeElement'].prototype, "HTMLMarqueeElement", "bgColor_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLMarqueeElement', "direction", {
  configurable: true,
  enumerable: true,
  get: function direction() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLMarqueeElement'].prototype, "HTMLMarqueeElement", "direction_get", arguments);
  },
  set: function direction() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLMarqueeElement'].prototype, "HTMLMarqueeElement", "direction_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLMarqueeElement', "height", {
  configurable: true,
  enumerable: true,
  get: function height() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLMarqueeElement'].prototype, "HTMLMarqueeElement", "height_get", arguments);
  },
  set: function height() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLMarqueeElement'].prototype, "HTMLMarqueeElement", "height_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLMarqueeElement', "hspace", {
  configurable: true,
  enumerable: true,
  get: function hspace() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLMarqueeElement'].prototype, "HTMLMarqueeElement", "hspace_get", arguments);
  },
  set: function hspace() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLMarqueeElement'].prototype, "HTMLMarqueeElement", "hspace_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLMarqueeElement', "loop", {
  configurable: true,
  enumerable: true,
  get: function loop() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLMarqueeElement'].prototype, "HTMLMarqueeElement", "loop_get", arguments);
  },
  set: function loop() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLMarqueeElement'].prototype, "HTMLMarqueeElement", "loop_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLMarqueeElement', "scrollAmount", {
  configurable: true,
  enumerable: true,
  get: function scrollAmount() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLMarqueeElement'].prototype, "HTMLMarqueeElement", "scrollAmount_get", arguments);
  },
  set: function scrollAmount() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLMarqueeElement'].prototype, "HTMLMarqueeElement", "scrollAmount_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLMarqueeElement', "scrollDelay", {
  configurable: true,
  enumerable: true,
  get: function scrollDelay() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLMarqueeElement'].prototype, "HTMLMarqueeElement", "scrollDelay_get", arguments);
  },
  set: function scrollDelay() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLMarqueeElement'].prototype, "HTMLMarqueeElement", "scrollDelay_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLMarqueeElement', "trueSpeed", {
  configurable: true,
  enumerable: true,
  get: function trueSpeed() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLMarqueeElement'].prototype, "HTMLMarqueeElement", "trueSpeed_get", arguments);
  },
  set: function trueSpeed() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLMarqueeElement'].prototype, "HTMLMarqueeElement", "trueSpeed_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLMarqueeElement', "vspace", {
  configurable: true,
  enumerable: true,
  get: function vspace() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLMarqueeElement'].prototype, "HTMLMarqueeElement", "vspace_get", arguments);
  },
  set: function vspace() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLMarqueeElement'].prototype, "HTMLMarqueeElement", "vspace_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLMarqueeElement', "width", {
  configurable: true,
  enumerable: true,
  get: function width() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLMarqueeElement'].prototype, "HTMLMarqueeElement", "width_get", arguments);
  },
  set: function width() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLMarqueeElement'].prototype, "HTMLMarqueeElement", "width_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLMarqueeElement', "start", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function start() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLMarqueeElement'].prototype, "HTMLMarqueeElement", "start", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLMarqueeElement', "stop", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function stop() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLMarqueeElement'].prototype, "HTMLMarqueeElement", "stop", arguments);
  }
}, 'prototype');