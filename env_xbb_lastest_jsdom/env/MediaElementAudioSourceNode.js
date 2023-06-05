// MediaElementAudioSourceNode对象

bodavm.memory.globalobj['MediaElementAudioSourceNode'] = function MediaElementAudioSourceNode() {
  console.log_copy('MediaElementAudioSourceNode 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof MediaElementAudioSourceNode)) {
    return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'MediaElementAudioSourceNode': 2 arguments required, but only 0 present.");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['MediaElementAudioSourceNode'], "MediaElementAudioSourceNode");
bodavm.memory.globalobj['MediaElementAudioSourceNode'].prototype.__proto__ = bodavm.memory.globalobj['AudioNode'].prototype;
bodavm.memory.globalobj['MediaElementAudioSourceNode'].__proto__ = bodavm.memory.globalobj['AudioNode'];
bodavm.toolsFunc.defineProperty('MediaElementAudioSourceNode', "mediaElement", {
  configurable: true,
  enumerable: true,
  get: function mediaElement() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MediaElementAudioSourceNode'].prototype, "MediaElementAudioSourceNode", "mediaElement_get", arguments);
  },
  set: undefined
}, 'prototype');