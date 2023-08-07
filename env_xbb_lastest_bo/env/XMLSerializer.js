// XMLSerializer对象

XMLSerializer = function XMLSerializer() {
  let arg = arguments[0];
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('XMLSerializer 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(XMLSerializer, "XMLSerializer");
bodavm.toolsFunc.defineProperty(XMLSerializer.prototype, "serializeToString", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function serializeToString() {
    return bodavm.toolsFunc.dispatch(this, XMLSerializer.prototype, "XMLSerializer", "serializeToString", arguments);
  }
});