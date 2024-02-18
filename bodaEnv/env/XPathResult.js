// XPathResult对象

bodaEnv.memory.globlProtoObj["XPathResult"] = function XPathResult() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('XPathResult 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["XPathResult"], "XPathResult");
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["XPathResult"], "ANY_TYPE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 0
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["XPathResult"], "NUMBER_TYPE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 1
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["XPathResult"], "STRING_TYPE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["XPathResult"], "BOOLEAN_TYPE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 3
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["XPathResult"], "UNORDERED_NODE_ITERATOR_TYPE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 4
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["XPathResult"], "ORDERED_NODE_ITERATOR_TYPE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 5
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["XPathResult"], "UNORDERED_NODE_SNAPSHOT_TYPE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 6
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["XPathResult"], "ORDERED_NODE_SNAPSHOT_TYPE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 7
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["XPathResult"], "ANY_UNORDERED_NODE_TYPE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 8
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["XPathResult"], "FIRST_ORDERED_NODE_TYPE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 9
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["XPathResult"].prototype, "resultType", {
  configurable: true,
  enumerable: true,
  get: {
    resultType() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["XPathResult"].prototype, "XPathResult", "resultType_get", arguments);
    }
  }.resultType,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["XPathResult"].prototype, "numberValue", {
  configurable: true,
  enumerable: true,
  get: {
    numberValue() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["XPathResult"].prototype, "XPathResult", "numberValue_get", arguments);
    }
  }.numberValue,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["XPathResult"].prototype, "stringValue", {
  configurable: true,
  enumerable: true,
  get: {
    stringValue() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["XPathResult"].prototype, "XPathResult", "stringValue_get", arguments);
    }
  }.stringValue,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["XPathResult"].prototype, "booleanValue", {
  configurable: true,
  enumerable: true,
  get: {
    booleanValue() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["XPathResult"].prototype, "XPathResult", "booleanValue_get", arguments);
    }
  }.booleanValue,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["XPathResult"].prototype, "singleNodeValue", {
  configurable: true,
  enumerable: true,
  get: {
    singleNodeValue() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["XPathResult"].prototype, "XPathResult", "singleNodeValue_get", arguments);
    }
  }.singleNodeValue,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["XPathResult"].prototype, "invalidIteratorState", {
  configurable: true,
  enumerable: true,
  get: {
    invalidIteratorState() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["XPathResult"].prototype, "XPathResult", "invalidIteratorState_get", arguments);
    }
  }.invalidIteratorState,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["XPathResult"].prototype, "snapshotLength", {
  configurable: true,
  enumerable: true,
  get: {
    snapshotLength() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["XPathResult"].prototype, "XPathResult", "snapshotLength_get", arguments);
    }
  }.snapshotLength,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["XPathResult"].prototype, "ANY_TYPE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 0
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["XPathResult"].prototype, "NUMBER_TYPE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 1
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["XPathResult"].prototype, "STRING_TYPE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["XPathResult"].prototype, "BOOLEAN_TYPE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 3
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["XPathResult"].prototype, "UNORDERED_NODE_ITERATOR_TYPE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 4
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["XPathResult"].prototype, "ORDERED_NODE_ITERATOR_TYPE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 5
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["XPathResult"].prototype, "UNORDERED_NODE_SNAPSHOT_TYPE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 6
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["XPathResult"].prototype, "ORDERED_NODE_SNAPSHOT_TYPE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 7
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["XPathResult"].prototype, "ANY_UNORDERED_NODE_TYPE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 8
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["XPathResult"].prototype, "FIRST_ORDERED_NODE_TYPE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 9
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["XPathResult"].prototype, "iterateNext", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    iterateNext() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["XPathResult"].prototype, "XPathResult", "iterateNext", arguments);
    }
  }.iterateNext
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["XPathResult"].prototype, "snapshotItem", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    snapshotItem() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["XPathResult"].prototype, "XPathResult", "snapshotItem", arguments);
    }
  }.snapshotItem
});