// StyleSheet对象

StyleSheet = function StyleSheet() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof StyleSheet)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('StyleSheet 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(StyleSheet, "StyleSheet");
bodavm.toolsFunc.defineProperty(StyleSheet.prototype, "type", {
  configurable: true,
  enumerable: true,
  get: function type() {
    return bodavm.toolsFunc.dispatch(this, StyleSheet.prototype, "StyleSheet", "type_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(StyleSheet.prototype, "href", {
  configurable: true,
  enumerable: true,
  get: function href() {
    return bodavm.toolsFunc.dispatch(this, StyleSheet.prototype, "StyleSheet", "href_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(StyleSheet.prototype, "ownerNode", {
  configurable: true,
  enumerable: true,
  get: function ownerNode() {
    return bodavm.toolsFunc.dispatch(this, StyleSheet.prototype, "StyleSheet", "ownerNode_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(StyleSheet.prototype, "parentStyleSheet", {
  configurable: true,
  enumerable: true,
  get: function parentStyleSheet() {
    return bodavm.toolsFunc.dispatch(this, StyleSheet.prototype, "StyleSheet", "parentStyleSheet_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(StyleSheet.prototype, "title", {
  configurable: true,
  enumerable: true,
  get: function title() {
    return bodavm.toolsFunc.dispatch(this, StyleSheet.prototype, "StyleSheet", "title_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(StyleSheet.prototype, "media", {
  configurable: true,
  enumerable: true,
  get: function media() {
    return bodavm.toolsFunc.dispatch(this, StyleSheet.prototype, "StyleSheet", "media_get", arguments);
  },
  set: function media() {
    return bodavm.toolsFunc.dispatch(this, StyleSheet.prototype, "StyleSheet", "media_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(StyleSheet.prototype, "disabled", {
  configurable: true,
  enumerable: true,
  get: function disabled() {
    return bodavm.toolsFunc.dispatch(this, StyleSheet.prototype, "StyleSheet", "disabled_get", arguments);
  },
  set: function disabled() {
    return bodavm.toolsFunc.dispatch(this, StyleSheet.prototype, "StyleSheet", "disabled_set", arguments);
  }
});