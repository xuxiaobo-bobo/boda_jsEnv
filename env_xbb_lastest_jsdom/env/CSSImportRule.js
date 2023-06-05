// CSSImportRule对象

bodavm.memory.globalobj['CSSImportRule'] = function CSSImportRule() {
  console.log_copy('CSSImportRule 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof CSSImportRule)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['CSSImportRule'], "CSSImportRule");
bodavm.memory.globalobj['CSSImportRule'].prototype.__proto__ = bodavm.memory.globalobj['CSSRule'].prototype;
bodavm.memory.globalobj['CSSImportRule'].__proto__ = bodavm.memory.globalobj['CSSRule'];
bodavm.toolsFunc.defineProperty('CSSImportRule', "href", {
  configurable: true,
  enumerable: true,
  get: function href() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['CSSImportRule'].prototype, "CSSImportRule", "href_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('CSSImportRule', "media", {
  configurable: true,
  enumerable: true,
  get: function media() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['CSSImportRule'].prototype, "CSSImportRule", "media_get", arguments);
  },
  set: function media() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['CSSImportRule'].prototype, "CSSImportRule", "media_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('CSSImportRule', "styleSheet", {
  configurable: true,
  enumerable: true,
  get: function styleSheet() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['CSSImportRule'].prototype, "CSSImportRule", "styleSheet_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('CSSImportRule', "layerName", {
  configurable: true,
  enumerable: true,
  get: function layerName() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['CSSImportRule'].prototype, "CSSImportRule", "layerName_get", arguments);
  },
  set: undefined
}, 'prototype');