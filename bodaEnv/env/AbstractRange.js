// AbstractRange对象

bodaEnv.memory.globlProtoObj["AbstractRange"] = function AbstractRange() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('AbstractRange 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["AbstractRange"], "AbstractRange");
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["AbstractRange"].prototype, "startContainer", {
  configurable: true,
  enumerable: true,
  get: {
    startContainer() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["AbstractRange"].prototype, "AbstractRange", "startContainer_get", arguments);
    }
  }.startContainer,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["AbstractRange"].prototype, "startOffset", {
  configurable: true,
  enumerable: true,
  get: {
    startOffset() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["AbstractRange"].prototype, "AbstractRange", "startOffset_get", arguments);
    }
  }.startOffset,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["AbstractRange"].prototype, "endContainer", {
  configurable: true,
  enumerable: true,
  get: {
    endContainer() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["AbstractRange"].prototype, "AbstractRange", "endContainer_get", arguments);
    }
  }.endContainer,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["AbstractRange"].prototype, "endOffset", {
  configurable: true,
  enumerable: true,
  get: {
    endOffset() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["AbstractRange"].prototype, "AbstractRange", "endOffset_get", arguments);
    }
  }.endOffset,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["AbstractRange"].prototype, "collapsed", {
  configurable: true,
  enumerable: true,
  get: {
    collapsed() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["AbstractRange"].prototype, "AbstractRange", "collapsed_get", arguments);
    }
  }.collapsed,
  set: undefined
});