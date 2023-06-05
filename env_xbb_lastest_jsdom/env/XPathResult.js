// XPathResult对象

bodavm.memory.globalobj['XPathResult'] = function XPathResult() {
  console.log_copy('XPathResult 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof XPathResult)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['XPathResult'], "XPathResult");
bodavm.toolsFunc.defineProperty('XPathResult', "ANY_TYPE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 0
});
bodavm.toolsFunc.defineProperty('XPathResult', "NUMBER_TYPE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 1
});
bodavm.toolsFunc.defineProperty('XPathResult', "STRING_TYPE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2
});
bodavm.toolsFunc.defineProperty('XPathResult', "BOOLEAN_TYPE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 3
});
bodavm.toolsFunc.defineProperty('XPathResult', "UNORDERED_NODE_ITERATOR_TYPE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 4
});
bodavm.toolsFunc.defineProperty('XPathResult', "ORDERED_NODE_ITERATOR_TYPE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 5
});
bodavm.toolsFunc.defineProperty('XPathResult', "UNORDERED_NODE_SNAPSHOT_TYPE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 6
});
bodavm.toolsFunc.defineProperty('XPathResult', "ORDERED_NODE_SNAPSHOT_TYPE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 7
});
bodavm.toolsFunc.defineProperty('XPathResult', "ANY_UNORDERED_NODE_TYPE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 8
});
bodavm.toolsFunc.defineProperty('XPathResult', "FIRST_ORDERED_NODE_TYPE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 9
});
bodavm.toolsFunc.defineProperty('XPathResult', "resultType", {
  configurable: true,
  enumerable: true,
  get: function resultType() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['XPathResult'].prototype, "XPathResult", "resultType_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('XPathResult', "numberValue", {
  configurable: true,
  enumerable: true,
  get: function numberValue() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['XPathResult'].prototype, "XPathResult", "numberValue_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('XPathResult', "stringValue", {
  configurable: true,
  enumerable: true,
  get: function stringValue() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['XPathResult'].prototype, "XPathResult", "stringValue_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('XPathResult', "booleanValue", {
  configurable: true,
  enumerable: true,
  get: function booleanValue() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['XPathResult'].prototype, "XPathResult", "booleanValue_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('XPathResult', "singleNodeValue", {
  configurable: true,
  enumerable: true,
  get: function singleNodeValue() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['XPathResult'].prototype, "XPathResult", "singleNodeValue_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('XPathResult', "invalidIteratorState", {
  configurable: true,
  enumerable: true,
  get: function invalidIteratorState() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['XPathResult'].prototype, "XPathResult", "invalidIteratorState_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('XPathResult', "snapshotLength", {
  configurable: true,
  enumerable: true,
  get: function snapshotLength() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['XPathResult'].prototype, "XPathResult", "snapshotLength_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('XPathResult', "ANY_TYPE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 0
}, 'prototype');
bodavm.toolsFunc.defineProperty('XPathResult', "NUMBER_TYPE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 1
}, 'prototype');
bodavm.toolsFunc.defineProperty('XPathResult', "STRING_TYPE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2
}, 'prototype');
bodavm.toolsFunc.defineProperty('XPathResult', "BOOLEAN_TYPE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 3
}, 'prototype');
bodavm.toolsFunc.defineProperty('XPathResult', "UNORDERED_NODE_ITERATOR_TYPE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 4
}, 'prototype');
bodavm.toolsFunc.defineProperty('XPathResult', "ORDERED_NODE_ITERATOR_TYPE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 5
}, 'prototype');
bodavm.toolsFunc.defineProperty('XPathResult', "UNORDERED_NODE_SNAPSHOT_TYPE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 6
}, 'prototype');
bodavm.toolsFunc.defineProperty('XPathResult', "ORDERED_NODE_SNAPSHOT_TYPE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 7
}, 'prototype');
bodavm.toolsFunc.defineProperty('XPathResult', "ANY_UNORDERED_NODE_TYPE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 8
}, 'prototype');
bodavm.toolsFunc.defineProperty('XPathResult', "FIRST_ORDERED_NODE_TYPE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 9
}, 'prototype');
bodavm.toolsFunc.defineProperty('XPathResult', "iterateNext", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function iterateNext() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['XPathResult'].prototype, "XPathResult", "iterateNext", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('XPathResult', "snapshotItem", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function snapshotItem() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['XPathResult'].prototype, "XPathResult", "snapshotItem", arguments);
  }
}, 'prototype');