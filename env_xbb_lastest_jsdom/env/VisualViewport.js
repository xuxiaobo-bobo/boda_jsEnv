// VisualViewport对象

bodavm.memory.globalobj['VisualViewport'] = function VisualViewport() {
  console.log_copy('VisualViewport 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof VisualViewport)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['VisualViewport'], "VisualViewport");
bodavm.memory.globalobj['VisualViewport'].prototype.__proto__ = bodavm.memory.globalobj['EventTarget'].prototype;
bodavm.memory.globalobj['VisualViewport'].__proto__ = bodavm.memory.globalobj['EventTarget'];
bodavm.toolsFunc.defineProperty('VisualViewport', "offsetLeft", {
  configurable: true,
  enumerable: true,
  get: function offsetLeft() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['VisualViewport'].prototype, "VisualViewport", "offsetLeft_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('VisualViewport', "offsetTop", {
  configurable: true,
  enumerable: true,
  get: function offsetTop() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['VisualViewport'].prototype, "VisualViewport", "offsetTop_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('VisualViewport', "pageLeft", {
  configurable: true,
  enumerable: true,
  get: function pageLeft() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['VisualViewport'].prototype, "VisualViewport", "pageLeft_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('VisualViewport', "pageTop", {
  configurable: true,
  enumerable: true,
  get: function pageTop() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['VisualViewport'].prototype, "VisualViewport", "pageTop_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('VisualViewport', "width", {
  configurable: true,
  enumerable: true,
  get: function width() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['VisualViewport'].prototype, "VisualViewport", "width_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('VisualViewport', "height", {
  configurable: true,
  enumerable: true,
  get: function height() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['VisualViewport'].prototype, "VisualViewport", "height_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('VisualViewport', "scale", {
  configurable: true,
  enumerable: true,
  get: function scale() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['VisualViewport'].prototype, "VisualViewport", "scale_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('VisualViewport', "onresize", {
  configurable: true,
  enumerable: true,
  get: function onresize() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['VisualViewport'].prototype, "VisualViewport", "onresize_get", arguments);
  },
  set: function onresize() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['VisualViewport'].prototype, "VisualViewport", "onresize_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('VisualViewport', "onscroll", {
  configurable: true,
  enumerable: true,
  get: function onscroll() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['VisualViewport'].prototype, "VisualViewport", "onscroll_get", arguments);
  },
  set: function onscroll() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['VisualViewport'].prototype, "VisualViewport", "onscroll_set", arguments);
  }
}, 'prototype');

// visualViewport对象

bodavm.memory.globalobj['visualViewport'] = {
  _boisinit: bodavm.config.isinit
};
bodavm.memory.globalobj['visualViewport'].__proto__ = bodavm.memory.globalobj['VisualViewport'].prototype;