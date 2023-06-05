// TextMetrics对象

bodavm.memory.globalobj['TextMetrics'] = function TextMetrics() {
  console.log_copy('TextMetrics 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof TextMetrics)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['TextMetrics'], "TextMetrics");
bodavm.toolsFunc.defineProperty('TextMetrics', "width", {
  configurable: true,
  enumerable: true,
  get: function width() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['TextMetrics'].prototype, "TextMetrics", "width_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('TextMetrics', "actualBoundingBoxLeft", {
  configurable: true,
  enumerable: true,
  get: function actualBoundingBoxLeft() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['TextMetrics'].prototype, "TextMetrics", "actualBoundingBoxLeft_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('TextMetrics', "actualBoundingBoxRight", {
  configurable: true,
  enumerable: true,
  get: function actualBoundingBoxRight() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['TextMetrics'].prototype, "TextMetrics", "actualBoundingBoxRight_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('TextMetrics', "fontBoundingBoxAscent", {
  configurable: true,
  enumerable: true,
  get: function fontBoundingBoxAscent() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['TextMetrics'].prototype, "TextMetrics", "fontBoundingBoxAscent_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('TextMetrics', "fontBoundingBoxDescent", {
  configurable: true,
  enumerable: true,
  get: function fontBoundingBoxDescent() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['TextMetrics'].prototype, "TextMetrics", "fontBoundingBoxDescent_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('TextMetrics', "actualBoundingBoxAscent", {
  configurable: true,
  enumerable: true,
  get: function actualBoundingBoxAscent() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['TextMetrics'].prototype, "TextMetrics", "actualBoundingBoxAscent_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('TextMetrics', "actualBoundingBoxDescent", {
  configurable: true,
  enumerable: true,
  get: function actualBoundingBoxDescent() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['TextMetrics'].prototype, "TextMetrics", "actualBoundingBoxDescent_get", arguments);
  },
  set: undefined
}, 'prototype');