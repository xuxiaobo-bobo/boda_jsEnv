// NodeIterator对象

bodavm.memory.globalobj['NodeIterator'] = function NodeIterator() {
  console.log_copy('NodeIterator 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof NodeIterator)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['NodeIterator'], "NodeIterator");
bodavm.toolsFunc.defineProperty('NodeIterator', "root", {
  configurable: true,
  enumerable: true,
  get: function root() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['NodeIterator'].prototype, "NodeIterator", "root_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('NodeIterator', "referenceNode", {
  configurable: true,
  enumerable: true,
  get: function referenceNode() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['NodeIterator'].prototype, "NodeIterator", "referenceNode_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('NodeIterator', "pointerBeforeReferenceNode", {
  configurable: true,
  enumerable: true,
  get: function pointerBeforeReferenceNode() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['NodeIterator'].prototype, "NodeIterator", "pointerBeforeReferenceNode_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('NodeIterator', "whatToShow", {
  configurable: true,
  enumerable: true,
  get: function whatToShow() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['NodeIterator'].prototype, "NodeIterator", "whatToShow_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('NodeIterator', "filter", {
  configurable: true,
  enumerable: true,
  get: function filter() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['NodeIterator'].prototype, "NodeIterator", "filter_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('NodeIterator', "detach", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function detach() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['NodeIterator'].prototype, "NodeIterator", "detach", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('NodeIterator', "nextNode", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function nextNode() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['NodeIterator'].prototype, "NodeIterator", "nextNode", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('NodeIterator', "previousNode", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function previousNode() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['NodeIterator'].prototype, "NodeIterator", "previousNode", arguments);
  }
}, 'prototype');