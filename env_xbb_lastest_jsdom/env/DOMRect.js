// DOMRect对象

bodavm.memory.globalobj['DOMRect'] = function DOMRect() {
  console.log_copy('DOMRect 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  this._boarg = new bodaobj.window.DOMRect();
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['DOMRect'], "DOMRect");
bodavm.memory.globalobj['DOMRect'].prototype.__proto__ = bodavm.memory.globalobj['DOMRectReadOnly'].prototype;
bodavm.memory.globalobj['DOMRect'].__proto__ = bodavm.memory.globalobj['DOMRectReadOnly'];
bodavm.toolsFunc.defineProperty('DOMRect', "fromRect", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function fromRect() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['DOMRect'].undefined, "DOMRect", "fromRect", arguments);
  }
});
bodavm.toolsFunc.defineProperty('DOMRect', "x", {
  configurable: true,
  enumerable: true,
  get: function x() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['DOMRect'].prototype, "DOMRect", "x_get", arguments);
  },
  set: function x() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['DOMRect'].prototype, "DOMRect", "x_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('DOMRect', "y", {
  configurable: true,
  enumerable: true,
  get: function y() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['DOMRect'].prototype, "DOMRect", "y_get", arguments);
  },
  set: function y() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['DOMRect'].prototype, "DOMRect", "y_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('DOMRect', "width", {
  configurable: true,
  enumerable: true,
  get: function width() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['DOMRect'].prototype, "DOMRect", "width_get", arguments);
  },
  set: function width() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['DOMRect'].prototype, "DOMRect", "width_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('DOMRect', "height", {
  configurable: true,
  enumerable: true,
  get: function height() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['DOMRect'].prototype, "DOMRect", "height_get", arguments);
  },
  set: function height() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['DOMRect'].prototype, "DOMRect", "height_set", arguments);
  }
}, 'prototype');