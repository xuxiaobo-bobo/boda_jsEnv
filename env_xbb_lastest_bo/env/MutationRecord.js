// MutationRecord对象

MutationRecord = function MutationRecord() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof MutationRecord)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('MutationRecord 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(MutationRecord, "MutationRecord");
bodavm.toolsFunc.defineProperty(MutationRecord.prototype, "type", {
  configurable: true,
  enumerable: true,
  get: function type() {
    return bodavm.toolsFunc.dispatch(this, MutationRecord.prototype, "MutationRecord", "type_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(MutationRecord.prototype, "target", {
  configurable: true,
  enumerable: true,
  get: function target() {
    return bodavm.toolsFunc.dispatch(this, MutationRecord.prototype, "MutationRecord", "target_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(MutationRecord.prototype, "addedNodes", {
  configurable: true,
  enumerable: true,
  get: function addedNodes() {
    return bodavm.toolsFunc.dispatch(this, MutationRecord.prototype, "MutationRecord", "addedNodes_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(MutationRecord.prototype, "removedNodes", {
  configurable: true,
  enumerable: true,
  get: function removedNodes() {
    return bodavm.toolsFunc.dispatch(this, MutationRecord.prototype, "MutationRecord", "removedNodes_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(MutationRecord.prototype, "previousSibling", {
  configurable: true,
  enumerable: true,
  get: function previousSibling() {
    return bodavm.toolsFunc.dispatch(this, MutationRecord.prototype, "MutationRecord", "previousSibling_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(MutationRecord.prototype, "nextSibling", {
  configurable: true,
  enumerable: true,
  get: function nextSibling() {
    return bodavm.toolsFunc.dispatch(this, MutationRecord.prototype, "MutationRecord", "nextSibling_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(MutationRecord.prototype, "attributeName", {
  configurable: true,
  enumerable: true,
  get: function attributeName() {
    return bodavm.toolsFunc.dispatch(this, MutationRecord.prototype, "MutationRecord", "attributeName_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(MutationRecord.prototype, "attributeNamespace", {
  configurable: true,
  enumerable: true,
  get: function attributeNamespace() {
    return bodavm.toolsFunc.dispatch(this, MutationRecord.prototype, "MutationRecord", "attributeNamespace_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(MutationRecord.prototype, "oldValue", {
  configurable: true,
  enumerable: true,
  get: function oldValue() {
    return bodavm.toolsFunc.dispatch(this, MutationRecord.prototype, "MutationRecord", "oldValue_get", arguments);
  },
  set: undefined
});