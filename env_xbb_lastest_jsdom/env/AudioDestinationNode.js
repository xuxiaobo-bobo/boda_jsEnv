// AudioDestinationNode对象

bodavm.memory.globalobj['AudioDestinationNode'] = function AudioDestinationNode() {
  console.log_copy('AudioDestinationNode 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof AudioDestinationNode)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['AudioDestinationNode'], "AudioDestinationNode");
bodavm.memory.globalobj['AudioDestinationNode'].prototype.__proto__ = bodavm.memory.globalobj['AudioNode'].prototype;
bodavm.memory.globalobj['AudioDestinationNode'].__proto__ = bodavm.memory.globalobj['AudioNode'];
bodavm.toolsFunc.defineProperty('AudioDestinationNode', "maxChannelCount", {
  configurable: true,
  enumerable: true,
  get: function maxChannelCount() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['AudioDestinationNode'].prototype, "AudioDestinationNode", "maxChannelCount_get", arguments);
  },
  set: undefined
}, 'prototype');