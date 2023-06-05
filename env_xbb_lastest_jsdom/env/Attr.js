// Attr对象

bodavm.memory.globalobj['Attr'] = function Attr() {
  console.log_copy('Attr 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof Attr)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['Attr'], "Attr");
bodavm.memory.globalobj['Attr'].prototype.__proto__ = bodavm.memory.globalobj['Node'].prototype;
bodavm.memory.globalobj['Attr'].__proto__ = bodavm.memory.globalobj['Node'];
bodavm.toolsFunc.defineProperty('Attr', "namespaceURI", {
  configurable: true,
  enumerable: true,
  get: function namespaceURI() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Attr'].prototype, "Attr", "namespaceURI_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('Attr', "prefix", {
  configurable: true,
  enumerable: true,
  get: function prefix() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Attr'].prototype, "Attr", "prefix_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('Attr', "localName", {
  configurable: true,
  enumerable: true,
  get: function localName() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Attr'].prototype, "Attr", "localName_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('Attr', "name", {
  configurable: true,
  enumerable: true,
  get: function name() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Attr'].prototype, "Attr", "name_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('Attr', "value", {
  configurable: true,
  enumerable: true,
  get: function value() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Attr'].prototype, "Attr", "value_get", arguments);
  },
  set: function value() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Attr'].prototype, "Attr", "value_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Attr', "ownerElement", {
  configurable: true,
  enumerable: true,
  get: function ownerElement() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Attr'].prototype, "Attr", "ownerElement_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('Attr', "specified", {
  configurable: true,
  enumerable: true,
  get: function specified() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Attr'].prototype, "Attr", "specified_get", arguments);
  },
  set: undefined
}, 'prototype');