// DynamicsCompressorNode对象

bodavm.memory.globalobj['DynamicsCompressorNode'] = function DynamicsCompressorNode() {
  console.log_copy('DynamicsCompressorNode 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof DynamicsCompressorNode)) {
    return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'DynamicsCompressorNode': 1 argument required, but only 0 present.");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['DynamicsCompressorNode'], "DynamicsCompressorNode");
bodavm.memory.globalobj['DynamicsCompressorNode'].prototype.__proto__ = bodavm.memory.globalobj['AudioNode'].prototype;
bodavm.memory.globalobj['DynamicsCompressorNode'].__proto__ = bodavm.memory.globalobj['AudioNode'];
bodavm.toolsFunc.defineProperty('DynamicsCompressorNode', "threshold", {
  configurable: true,
  enumerable: true,
  get: function threshold() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['DynamicsCompressorNode'].prototype, "DynamicsCompressorNode", "threshold_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('DynamicsCompressorNode', "knee", {
  configurable: true,
  enumerable: true,
  get: function knee() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['DynamicsCompressorNode'].prototype, "DynamicsCompressorNode", "knee_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('DynamicsCompressorNode', "ratio", {
  configurable: true,
  enumerable: true,
  get: function ratio() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['DynamicsCompressorNode'].prototype, "DynamicsCompressorNode", "ratio_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('DynamicsCompressorNode', "reduction", {
  configurable: true,
  enumerable: true,
  get: function reduction() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['DynamicsCompressorNode'].prototype, "DynamicsCompressorNode", "reduction_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('DynamicsCompressorNode', "attack", {
  configurable: true,
  enumerable: true,
  get: function attack() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['DynamicsCompressorNode'].prototype, "DynamicsCompressorNode", "attack_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('DynamicsCompressorNode', "release", {
  configurable: true,
  enumerable: true,
  get: function release() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['DynamicsCompressorNode'].prototype, "DynamicsCompressorNode", "release_get", arguments);
  },
  set: undefined
}, 'prototype');