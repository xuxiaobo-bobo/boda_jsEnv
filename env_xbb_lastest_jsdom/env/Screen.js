// Screen对象

bodavm.memory.globalobj['Screen'] = function Screen() {
  console.log_copy('Screen 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof Screen)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['Screen'], "Screen");
bodavm.memory.globalobj['Screen'].prototype.__proto__ = bodavm.memory.globalobj['EventTarget'].prototype;
bodavm.memory.globalobj['Screen'].__proto__ = bodavm.memory.globalobj['EventTarget'];
bodavm.toolsFunc.defineProperty('Screen', "availWidth", {
  configurable: true,
  enumerable: true,
  get: function availWidth() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Screen'].prototype, "Screen", "availWidth_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('Screen', "availHeight", {
  configurable: true,
  enumerable: true,
  get: function availHeight() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Screen'].prototype, "Screen", "availHeight_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('Screen', "width", {
  configurable: true,
  enumerable: true,
  get: function width() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Screen'].prototype, "Screen", "width_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('Screen', "height", {
  configurable: true,
  enumerable: true,
  get: function height() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Screen'].prototype, "Screen", "height_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('Screen', "colorDepth", {
  configurable: true,
  enumerable: true,
  get: function colorDepth() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Screen'].prototype, "Screen", "colorDepth_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('Screen', "pixelDepth", {
  configurable: true,
  enumerable: true,
  get: function pixelDepth() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Screen'].prototype, "Screen", "pixelDepth_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('Screen', "availLeft", {
  configurable: true,
  enumerable: true,
  get: function availLeft() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Screen'].prototype, "Screen", "availLeft_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('Screen', "availTop", {
  configurable: true,
  enumerable: true,
  get: function availTop() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Screen'].prototype, "Screen", "availTop_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('Screen', "orientation", {
  configurable: true,
  enumerable: true,
  get: function orientation() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Screen'].prototype, "Screen", "orientation_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('Screen', "onchange", {
  configurable: true,
  enumerable: true,
  get: function onchange() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Screen'].prototype, "Screen", "onchange_get", arguments);
  },
  set: function onchange() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Screen'].prototype, "Screen", "onchange_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Screen', "isExtended", {
  configurable: true,
  enumerable: true,
  get: function isExtended() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Screen'].prototype, "Screen", "isExtended_get", arguments);
  },
  set: undefined
}, 'prototype');

// screen对象

bodavm.memory.globalobj['screen'] = {
  _boisinit: bodavm.config.isinit
};
bodavm.memory.globalobj['screen'].__proto__ = bodavm.memory.globalobj['Screen'].prototype;