// DOMPoint对象

bodavm.memory.globalobj['DOMPoint'] = function DOMPoint() {
  console.log_copy('DOMPoint 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  this._boarg = new bodaobj.window.DOMPoint();
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['DOMPoint'], "DOMPoint");
bodavm.memory.globalobj['DOMPoint'].prototype.__proto__ = bodavm.memory.globalobj['DOMPointReadOnly'].prototype;
bodavm.memory.globalobj['DOMPoint'].__proto__ = bodavm.memory.globalobj['DOMPointReadOnly'];
bodavm.toolsFunc.defineProperty('DOMPoint', "fromPoint", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function fromPoint() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['DOMPoint'].undefined, "DOMPoint", "fromPoint", arguments);
  }
});
bodavm.toolsFunc.defineProperty('DOMPoint', "x", {
  configurable: true,
  enumerable: true,
  get: function x() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['DOMPoint'].prototype, "DOMPoint", "x_get", arguments);
  },
  set: function x() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['DOMPoint'].prototype, "DOMPoint", "x_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('DOMPoint', "y", {
  configurable: true,
  enumerable: true,
  get: function y() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['DOMPoint'].prototype, "DOMPoint", "y_get", arguments);
  },
  set: function y() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['DOMPoint'].prototype, "DOMPoint", "y_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('DOMPoint', "z", {
  configurable: true,
  enumerable: true,
  get: function z() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['DOMPoint'].prototype, "DOMPoint", "z_get", arguments);
  },
  set: function z() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['DOMPoint'].prototype, "DOMPoint", "z_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('DOMPoint', "w", {
  configurable: true,
  enumerable: true,
  get: function w() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['DOMPoint'].prototype, "DOMPoint", "w_get", arguments);
  },
  set: function w() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['DOMPoint'].prototype, "DOMPoint", "w_set", arguments);
  }
}, 'prototype');