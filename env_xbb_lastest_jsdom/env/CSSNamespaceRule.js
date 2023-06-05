// CSSNamespaceRule对象

bodavm.memory.globalobj['CSSNamespaceRule'] = function CSSNamespaceRule() {
  console.log_copy('CSSNamespaceRule 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof CSSNamespaceRule)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['CSSNamespaceRule'], "CSSNamespaceRule");
bodavm.memory.globalobj['CSSNamespaceRule'].prototype.__proto__ = bodavm.memory.globalobj['CSSRule'].prototype;
bodavm.memory.globalobj['CSSNamespaceRule'].__proto__ = bodavm.memory.globalobj['CSSRule'];
bodavm.toolsFunc.defineProperty('CSSNamespaceRule', "namespaceURI", {
  configurable: true,
  enumerable: true,
  get: function namespaceURI() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['CSSNamespaceRule'].prototype, "CSSNamespaceRule", "namespaceURI_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('CSSNamespaceRule', "prefix", {
  configurable: true,
  enumerable: true,
  get: function prefix() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['CSSNamespaceRule'].prototype, "CSSNamespaceRule", "prefix_get", arguments);
  },
  set: undefined
}, 'prototype');