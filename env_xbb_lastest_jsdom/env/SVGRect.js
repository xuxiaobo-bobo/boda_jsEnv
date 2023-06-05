// SVGRect对象

bodavm.memory.globalobj['SVGRect'] = function SVGRect() {
  console.log_copy('SVGRect 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof SVGRect)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['SVGRect'], "SVGRect");
bodavm.toolsFunc.defineProperty('SVGRect', "x", {
  configurable: true,
  enumerable: true,
  get: function x() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGRect'].prototype, "SVGRect", "x_get", arguments);
  },
  set: function x() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGRect'].prototype, "SVGRect", "x_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGRect', "y", {
  configurable: true,
  enumerable: true,
  get: function y() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGRect'].prototype, "SVGRect", "y_get", arguments);
  },
  set: function y() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGRect'].prototype, "SVGRect", "y_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGRect', "width", {
  configurable: true,
  enumerable: true,
  get: function width() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGRect'].prototype, "SVGRect", "width_get", arguments);
  },
  set: function width() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGRect'].prototype, "SVGRect", "width_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGRect', "height", {
  configurable: true,
  enumerable: true,
  get: function height() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGRect'].prototype, "SVGRect", "height_get", arguments);
  },
  set: function height() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGRect'].prototype, "SVGRect", "height_set", arguments);
  }
}, 'prototype');