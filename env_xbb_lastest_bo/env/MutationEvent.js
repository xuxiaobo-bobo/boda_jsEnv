// MutationEvent对象

MutationEvent = function MutationEvent() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof MutationEvent)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('MutationEvent 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(MutationEvent, "MutationEvent");
MutationEvent.prototype.__proto__ = Event.prototype;
MutationEvent.__proto__ = Event;
bodavm.toolsFunc.defineProperty(MutationEvent, "MODIFICATION", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 1
});
bodavm.toolsFunc.defineProperty(MutationEvent, "ADDITION", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2
});
bodavm.toolsFunc.defineProperty(MutationEvent, "REMOVAL", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 3
});
bodavm.toolsFunc.defineProperty(MutationEvent.prototype, "relatedNode", {
  configurable: true,
  enumerable: true,
  get: function relatedNode() {
    return bodavm.toolsFunc.dispatch(this, MutationEvent.prototype, "MutationEvent", "relatedNode_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(MutationEvent.prototype, "prevValue", {
  configurable: true,
  enumerable: true,
  get: function prevValue() {
    return bodavm.toolsFunc.dispatch(this, MutationEvent.prototype, "MutationEvent", "prevValue_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(MutationEvent.prototype, "newValue", {
  configurable: true,
  enumerable: true,
  get: function newValue() {
    return bodavm.toolsFunc.dispatch(this, MutationEvent.prototype, "MutationEvent", "newValue_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(MutationEvent.prototype, "attrName", {
  configurable: true,
  enumerable: true,
  get: function attrName() {
    return bodavm.toolsFunc.dispatch(this, MutationEvent.prototype, "MutationEvent", "attrName_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(MutationEvent.prototype, "attrChange", {
  configurable: true,
  enumerable: true,
  get: function attrChange() {
    return bodavm.toolsFunc.dispatch(this, MutationEvent.prototype, "MutationEvent", "attrChange_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(MutationEvent.prototype, "MODIFICATION", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 1
});
bodavm.toolsFunc.defineProperty(MutationEvent.prototype, "ADDITION", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2
});
bodavm.toolsFunc.defineProperty(MutationEvent.prototype, "REMOVAL", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 3
});
bodavm.toolsFunc.defineProperty(MutationEvent.prototype, "initMutationEvent", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function initMutationEvent() {
    return bodavm.toolsFunc.dispatch(this, MutationEvent.prototype, "MutationEvent", "initMutationEvent", arguments);
  }
});