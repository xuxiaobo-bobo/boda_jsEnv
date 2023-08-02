// GPUCompilationMessage对象

GPUCompilationMessage = function GPUCompilationMessage() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof GPUCompilationMessage)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('GPUCompilationMessage 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(GPUCompilationMessage, "GPUCompilationMessage");
bodavm.toolsFunc.defineProperty(GPUCompilationMessage.prototype, "message", {
  configurable: true,
  enumerable: true,
  get: function message() {
    return bodavm.toolsFunc.dispatch(this, GPUCompilationMessage.prototype, "GPUCompilationMessage", "message_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(GPUCompilationMessage.prototype, "type", {
  configurable: true,
  enumerable: true,
  get: function type() {
    return bodavm.toolsFunc.dispatch(this, GPUCompilationMessage.prototype, "GPUCompilationMessage", "type_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(GPUCompilationMessage.prototype, "lineNum", {
  configurable: true,
  enumerable: true,
  get: function lineNum() {
    return bodavm.toolsFunc.dispatch(this, GPUCompilationMessage.prototype, "GPUCompilationMessage", "lineNum_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(GPUCompilationMessage.prototype, "linePos", {
  configurable: true,
  enumerable: true,
  get: function linePos() {
    return bodavm.toolsFunc.dispatch(this, GPUCompilationMessage.prototype, "GPUCompilationMessage", "linePos_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(GPUCompilationMessage.prototype, "offset", {
  configurable: true,
  enumerable: true,
  get: function offset() {
    return bodavm.toolsFunc.dispatch(this, GPUCompilationMessage.prototype, "GPUCompilationMessage", "offset_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(GPUCompilationMessage.prototype, "length", {
  configurable: true,
  enumerable: true,
  get: function length() {
    return bodavm.toolsFunc.dispatch(this, GPUCompilationMessage.prototype, "GPUCompilationMessage", "length_get", arguments);
  },
  set: undefined
});