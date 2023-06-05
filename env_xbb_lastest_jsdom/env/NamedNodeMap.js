// NamedNodeMap对象

bodavm.memory.globalobj['NamedNodeMap'] = function NamedNodeMap() {
  console.log_copy('NamedNodeMap 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof NamedNodeMap)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['NamedNodeMap'], "NamedNodeMap");
bodavm.toolsFunc.defineProperty('NamedNodeMap', "length", {
  configurable: true,
  enumerable: true,
  get: function length() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['NamedNodeMap'].prototype, "NamedNodeMap", "length_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('NamedNodeMap', "getNamedItem", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getNamedItem() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['NamedNodeMap'].prototype, "NamedNodeMap", "getNamedItem", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('NamedNodeMap', "getNamedItemNS", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getNamedItemNS() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['NamedNodeMap'].prototype, "NamedNodeMap", "getNamedItemNS", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('NamedNodeMap', "item", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function item() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['NamedNodeMap'].prototype, "NamedNodeMap", "item", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('NamedNodeMap', "removeNamedItem", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function removeNamedItem() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['NamedNodeMap'].prototype, "NamedNodeMap", "removeNamedItem", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('NamedNodeMap', "removeNamedItemNS", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function removeNamedItemNS() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['NamedNodeMap'].prototype, "NamedNodeMap", "removeNamedItemNS", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('NamedNodeMap', "setNamedItem", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function setNamedItem() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['NamedNodeMap'].prototype, "NamedNodeMap", "setNamedItem", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('NamedNodeMap', "setNamedItemNS", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function setNamedItemNS() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['NamedNodeMap'].prototype, "NamedNodeMap", "setNamedItemNS", arguments);
  }
}, 'prototype');