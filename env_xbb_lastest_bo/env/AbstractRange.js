// AbstractRange对象

AbstractRange = function AbstractRange() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof AbstractRange)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('AbstractRange 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(AbstractRange, "AbstractRange");
bodavm.toolsFunc.defineProperty(AbstractRange.prototype, "startContainer", {
  configurable: true,
  enumerable: true,
  get: function startContainer() {
    return bodavm.toolsFunc.dispatch(this, AbstractRange.prototype, "AbstractRange", "startContainer_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(AbstractRange.prototype, "startOffset", {
  configurable: true,
  enumerable: true,
  get: function startOffset() {
    return bodavm.toolsFunc.dispatch(this, AbstractRange.prototype, "AbstractRange", "startOffset_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(AbstractRange.prototype, "endContainer", {
  configurable: true,
  enumerable: true,
  get: function endContainer() {
    return bodavm.toolsFunc.dispatch(this, AbstractRange.prototype, "AbstractRange", "endContainer_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(AbstractRange.prototype, "endOffset", {
  configurable: true,
  enumerable: true,
  get: function endOffset() {
    return bodavm.toolsFunc.dispatch(this, AbstractRange.prototype, "AbstractRange", "endOffset_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(AbstractRange.prototype, "collapsed", {
  configurable: true,
  enumerable: true,
  get: function collapsed() {
    return bodavm.toolsFunc.dispatch(this, AbstractRange.prototype, "AbstractRange", "collapsed_get", arguments);
  },
  set: undefined
});