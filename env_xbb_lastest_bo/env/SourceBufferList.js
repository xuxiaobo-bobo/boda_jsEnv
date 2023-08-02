// SourceBufferList对象

SourceBufferList = function SourceBufferList() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof SourceBufferList)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('SourceBufferList 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(SourceBufferList, "SourceBufferList");
SourceBufferList.prototype.__proto__ = EventTarget.prototype;
SourceBufferList.__proto__ = EventTarget;
bodavm.toolsFunc.defineProperty(SourceBufferList.prototype, "length", {
  configurable: true,
  enumerable: true,
  get: function length() {
    return bodavm.toolsFunc.dispatch(this, SourceBufferList.prototype, "SourceBufferList", "length_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(SourceBufferList.prototype, "onaddsourcebuffer", {
  configurable: true,
  enumerable: true,
  get: function onaddsourcebuffer() {
    return bodavm.toolsFunc.dispatch(this, SourceBufferList.prototype, "SourceBufferList", "onaddsourcebuffer_get", arguments);
  },
  set: function onaddsourcebuffer() {
    return bodavm.toolsFunc.dispatch(this, SourceBufferList.prototype, "SourceBufferList", "onaddsourcebuffer_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(SourceBufferList.prototype, "onremovesourcebuffer", {
  configurable: true,
  enumerable: true,
  get: function onremovesourcebuffer() {
    return bodavm.toolsFunc.dispatch(this, SourceBufferList.prototype, "SourceBufferList", "onremovesourcebuffer_get", arguments);
  },
  set: function onremovesourcebuffer() {
    return bodavm.toolsFunc.dispatch(this, SourceBufferList.prototype, "SourceBufferList", "onremovesourcebuffer_set", arguments);
  }
});