// TransformStream对象

TransformStream = function TransformStream() {
  let arg = arguments[0];
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('TransformStream 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(TransformStream, "TransformStream");
bodavm.toolsFunc.defineProperty(TransformStream.prototype, "readable", {
  configurable: true,
  enumerable: true,
  get: function readable() {
    return bodavm.toolsFunc.dispatch(this, TransformStream.prototype, "TransformStream", "readable_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(TransformStream.prototype, "writable", {
  configurable: true,
  enumerable: true,
  get: function writable() {
    return bodavm.toolsFunc.dispatch(this, TransformStream.prototype, "TransformStream", "writable_get", arguments);
  },
  set: undefined
});