// DOMParser对象

DOMParser = function DOMParser() {
  let arg = arguments[0];
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('DOMParser 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(DOMParser, "DOMParser");
bodavm.toolsFunc.defineProperty(DOMParser.prototype, "parseFromString", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function parseFromString() {
    return bodavm.toolsFunc.dispatch(this, DOMParser.prototype, "DOMParser", "parseFromString", arguments);
  }
});