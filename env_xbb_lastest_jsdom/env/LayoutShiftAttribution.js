// LayoutShiftAttribution对象

bodavm.memory.globalobj['LayoutShiftAttribution'] = function LayoutShiftAttribution() {
  console.log_copy('LayoutShiftAttribution 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof LayoutShiftAttribution)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['LayoutShiftAttribution'], "LayoutShiftAttribution");
bodavm.toolsFunc.defineProperty('LayoutShiftAttribution', "node", {
  configurable: true,
  enumerable: true,
  get: function node() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['LayoutShiftAttribution'].prototype, "LayoutShiftAttribution", "node_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('LayoutShiftAttribution', "previousRect", {
  configurable: true,
  enumerable: true,
  get: function previousRect() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['LayoutShiftAttribution'].prototype, "LayoutShiftAttribution", "previousRect_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('LayoutShiftAttribution', "currentRect", {
  configurable: true,
  enumerable: true,
  get: function currentRect() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['LayoutShiftAttribution'].prototype, "LayoutShiftAttribution", "currentRect_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('LayoutShiftAttribution', "toJSON", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function toJSON() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['LayoutShiftAttribution'].prototype, "LayoutShiftAttribution", "toJSON", arguments);
  }
}, 'prototype');