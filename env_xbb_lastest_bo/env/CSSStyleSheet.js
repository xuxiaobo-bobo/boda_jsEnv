// CSSStyleSheet对象

CSSStyleSheet = function CSSStyleSheet() {
  let arg = arguments[0];
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('CSSStyleSheet 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(CSSStyleSheet, "CSSStyleSheet");
CSSStyleSheet.prototype.__proto__ = StyleSheet.prototype;
CSSStyleSheet.__proto__ = StyleSheet;
bodavm.toolsFunc.defineProperty(CSSStyleSheet.prototype, "ownerRule", {
  configurable: true,
  enumerable: true,
  get: function ownerRule() {
    return bodavm.toolsFunc.dispatch(this, CSSStyleSheet.prototype, "CSSStyleSheet", "ownerRule_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(CSSStyleSheet.prototype, "cssRules", {
  configurable: true,
  enumerable: true,
  get: function cssRules() {
    return bodavm.toolsFunc.dispatch(this, CSSStyleSheet.prototype, "CSSStyleSheet", "cssRules_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(CSSStyleSheet.prototype, "rules", {
  configurable: true,
  enumerable: true,
  get: function rules() {
    return bodavm.toolsFunc.dispatch(this, CSSStyleSheet.prototype, "CSSStyleSheet", "rules_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(CSSStyleSheet.prototype, "addRule", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function addRule() {
    return bodavm.toolsFunc.dispatch(this, CSSStyleSheet.prototype, "CSSStyleSheet", "addRule", arguments);
  }
});
bodavm.toolsFunc.defineProperty(CSSStyleSheet.prototype, "deleteRule", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function deleteRule() {
    return bodavm.toolsFunc.dispatch(this, CSSStyleSheet.prototype, "CSSStyleSheet", "deleteRule", arguments);
  }
});
bodavm.toolsFunc.defineProperty(CSSStyleSheet.prototype, "insertRule", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function insertRule() {
    return bodavm.toolsFunc.dispatch(this, CSSStyleSheet.prototype, "CSSStyleSheet", "insertRule", arguments);
  }
});
bodavm.toolsFunc.defineProperty(CSSStyleSheet.prototype, "removeRule", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function removeRule() {
    return bodavm.toolsFunc.dispatch(this, CSSStyleSheet.prototype, "CSSStyleSheet", "removeRule", arguments);
  }
});
bodavm.toolsFunc.defineProperty(CSSStyleSheet.prototype, "replace", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function replace() {
    return bodavm.toolsFunc.dispatch(this, CSSStyleSheet.prototype, "CSSStyleSheet", "replace", arguments);
  }
});
bodavm.toolsFunc.defineProperty(CSSStyleSheet.prototype, "replaceSync", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function replaceSync() {
    return bodavm.toolsFunc.dispatch(this, CSSStyleSheet.prototype, "CSSStyleSheet", "replaceSync", arguments);
  }
});