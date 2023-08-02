// StereoPannerNode对象

StereoPannerNode = function StereoPannerNode() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof StereoPannerNode)) {
    return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'StereoPannerNode': 1 argument required, but only 0 present.");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('StereoPannerNode 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(StereoPannerNode, "StereoPannerNode");
StereoPannerNode.prototype.__proto__ = AudioNode.prototype;
StereoPannerNode.__proto__ = AudioNode;
bodavm.toolsFunc.defineProperty(StereoPannerNode.prototype, "pan", {
  configurable: true,
  enumerable: true,
  get: function pan() {
    return bodavm.toolsFunc.dispatch(this, StereoPannerNode.prototype, "StereoPannerNode", "pan_get", arguments);
  },
  set: undefined
});