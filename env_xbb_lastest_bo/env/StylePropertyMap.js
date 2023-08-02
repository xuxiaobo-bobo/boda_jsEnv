// StylePropertyMap对象

StylePropertyMap = function StylePropertyMap() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof StylePropertyMap)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('StylePropertyMap 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(StylePropertyMap, "StylePropertyMap");
StylePropertyMap.prototype.__proto__ = StylePropertyMapReadOnly.prototype;
StylePropertyMap.__proto__ = StylePropertyMapReadOnly;
bodavm.toolsFunc.defineProperty(StylePropertyMap.prototype, "append", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function append() {
    return bodavm.toolsFunc.dispatch(this, StylePropertyMap.prototype, "StylePropertyMap", "append", arguments);
  }
});
bodavm.toolsFunc.defineProperty(StylePropertyMap.prototype, "clear", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function clear() {
    return bodavm.toolsFunc.dispatch(this, StylePropertyMap.prototype, "StylePropertyMap", "clear", arguments);
  }
});
bodavm.toolsFunc.defineProperty(StylePropertyMap.prototype, "delete", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function bodelete() {
    return bodavm.toolsFunc.dispatch(this, StylePropertyMap.prototype, "StylePropertyMap", "delete", arguments);
  }
});
bodavm.toolsFunc.defineProperty(StylePropertyMap.prototype, "set", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function set() {
    return bodavm.toolsFunc.dispatch(this, StylePropertyMap.prototype, "StylePropertyMap", "set", arguments);
  }
});