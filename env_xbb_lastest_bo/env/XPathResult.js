// XPathResult对象

XPathResult = function XPathResult() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof XPathResult)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('XPathResult 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(XPathResult, "XPathResult");
bodavm.toolsFunc.defineProperty(XPathResult, "ANY_TYPE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 0
});
bodavm.toolsFunc.defineProperty(XPathResult, "NUMBER_TYPE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 1
});
bodavm.toolsFunc.defineProperty(XPathResult, "STRING_TYPE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2
});
bodavm.toolsFunc.defineProperty(XPathResult, "BOOLEAN_TYPE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 3
});
bodavm.toolsFunc.defineProperty(XPathResult, "UNORDERED_NODE_ITERATOR_TYPE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 4
});
bodavm.toolsFunc.defineProperty(XPathResult, "ORDERED_NODE_ITERATOR_TYPE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 5
});
bodavm.toolsFunc.defineProperty(XPathResult, "UNORDERED_NODE_SNAPSHOT_TYPE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 6
});
bodavm.toolsFunc.defineProperty(XPathResult, "ORDERED_NODE_SNAPSHOT_TYPE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 7
});
bodavm.toolsFunc.defineProperty(XPathResult, "ANY_UNORDERED_NODE_TYPE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 8
});
bodavm.toolsFunc.defineProperty(XPathResult, "FIRST_ORDERED_NODE_TYPE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 9
});
bodavm.toolsFunc.defineProperty(XPathResult.prototype, "resultType", {
  configurable: true,
  enumerable: true,
  get: function resultType() {
    return bodavm.toolsFunc.dispatch(this, XPathResult.prototype, "XPathResult", "resultType_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(XPathResult.prototype, "numberValue", {
  configurable: true,
  enumerable: true,
  get: function numberValue() {
    return bodavm.toolsFunc.dispatch(this, XPathResult.prototype, "XPathResult", "numberValue_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(XPathResult.prototype, "stringValue", {
  configurable: true,
  enumerable: true,
  get: function stringValue() {
    return bodavm.toolsFunc.dispatch(this, XPathResult.prototype, "XPathResult", "stringValue_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(XPathResult.prototype, "booleanValue", {
  configurable: true,
  enumerable: true,
  get: function booleanValue() {
    return bodavm.toolsFunc.dispatch(this, XPathResult.prototype, "XPathResult", "booleanValue_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(XPathResult.prototype, "singleNodeValue", {
  configurable: true,
  enumerable: true,
  get: function singleNodeValue() {
    return bodavm.toolsFunc.dispatch(this, XPathResult.prototype, "XPathResult", "singleNodeValue_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(XPathResult.prototype, "invalidIteratorState", {
  configurable: true,
  enumerable: true,
  get: function invalidIteratorState() {
    return bodavm.toolsFunc.dispatch(this, XPathResult.prototype, "XPathResult", "invalidIteratorState_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(XPathResult.prototype, "snapshotLength", {
  configurable: true,
  enumerable: true,
  get: function snapshotLength() {
    return bodavm.toolsFunc.dispatch(this, XPathResult.prototype, "XPathResult", "snapshotLength_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(XPathResult.prototype, "ANY_TYPE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 0
});
bodavm.toolsFunc.defineProperty(XPathResult.prototype, "NUMBER_TYPE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 1
});
bodavm.toolsFunc.defineProperty(XPathResult.prototype, "STRING_TYPE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2
});
bodavm.toolsFunc.defineProperty(XPathResult.prototype, "BOOLEAN_TYPE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 3
});
bodavm.toolsFunc.defineProperty(XPathResult.prototype, "UNORDERED_NODE_ITERATOR_TYPE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 4
});
bodavm.toolsFunc.defineProperty(XPathResult.prototype, "ORDERED_NODE_ITERATOR_TYPE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 5
});
bodavm.toolsFunc.defineProperty(XPathResult.prototype, "UNORDERED_NODE_SNAPSHOT_TYPE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 6
});
bodavm.toolsFunc.defineProperty(XPathResult.prototype, "ORDERED_NODE_SNAPSHOT_TYPE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 7
});
bodavm.toolsFunc.defineProperty(XPathResult.prototype, "ANY_UNORDERED_NODE_TYPE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 8
});
bodavm.toolsFunc.defineProperty(XPathResult.prototype, "FIRST_ORDERED_NODE_TYPE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 9
});
bodavm.toolsFunc.defineProperty(XPathResult.prototype, "iterateNext", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function iterateNext() {
    return bodavm.toolsFunc.dispatch(this, XPathResult.prototype, "XPathResult", "iterateNext", arguments);
  }
});
bodavm.toolsFunc.defineProperty(XPathResult.prototype, "snapshotItem", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function snapshotItem() {
    return bodavm.toolsFunc.dispatch(this, XPathResult.prototype, "XPathResult", "snapshotItem", arguments);
  }
});