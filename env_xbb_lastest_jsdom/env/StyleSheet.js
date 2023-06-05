// StyleSheet对象

bodavm.memory.globalobj['StyleSheet'] = function StyleSheet() {
  console.log_copy('StyleSheet 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof StyleSheet)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['StyleSheet'], "StyleSheet");
bodavm.toolsFunc.defineProperty('StyleSheet', "type", {
  configurable: true,
  enumerable: true,
  get: function type() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['StyleSheet'].prototype, "StyleSheet", "type_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('StyleSheet', "href", {
  configurable: true,
  enumerable: true,
  get: function href() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['StyleSheet'].prototype, "StyleSheet", "href_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('StyleSheet', "ownerNode", {
  configurable: true,
  enumerable: true,
  get: function ownerNode() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['StyleSheet'].prototype, "StyleSheet", "ownerNode_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('StyleSheet', "parentStyleSheet", {
  configurable: true,
  enumerable: true,
  get: function parentStyleSheet() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['StyleSheet'].prototype, "StyleSheet", "parentStyleSheet_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('StyleSheet', "title", {
  configurable: true,
  enumerable: true,
  get: function title() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['StyleSheet'].prototype, "StyleSheet", "title_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('StyleSheet', "media", {
  configurable: true,
  enumerable: true,
  get: function media() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['StyleSheet'].prototype, "StyleSheet", "media_get", arguments);
  },
  set: function media() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['StyleSheet'].prototype, "StyleSheet", "media_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('StyleSheet', "disabled", {
  configurable: true,
  enumerable: true,
  get: function disabled() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['StyleSheet'].prototype, "StyleSheet", "disabled_get", arguments);
  },
  set: function disabled() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['StyleSheet'].prototype, "StyleSheet", "disabled_set", arguments);
  }
}, 'prototype');