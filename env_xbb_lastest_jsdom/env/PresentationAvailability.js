// PresentationAvailability对象

bodavm.memory.globalobj['PresentationAvailability'] = function PresentationAvailability() {
  console.log_copy('PresentationAvailability 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof PresentationAvailability)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['PresentationAvailability'], "PresentationAvailability");
bodavm.memory.globalobj['PresentationAvailability'].prototype.__proto__ = bodavm.memory.globalobj['EventTarget'].prototype;
bodavm.memory.globalobj['PresentationAvailability'].__proto__ = bodavm.memory.globalobj['EventTarget'];
bodavm.toolsFunc.defineProperty('PresentationAvailability', "value", {
  configurable: true,
  enumerable: true,
  get: function value() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['PresentationAvailability'].prototype, "PresentationAvailability", "value_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('PresentationAvailability', "onchange", {
  configurable: true,
  enumerable: true,
  get: function onchange() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['PresentationAvailability'].prototype, "PresentationAvailability", "onchange_get", arguments);
  },
  set: function onchange() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['PresentationAvailability'].prototype, "PresentationAvailability", "onchange_set", arguments);
  }
}, 'prototype');