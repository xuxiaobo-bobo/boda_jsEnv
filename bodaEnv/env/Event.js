// Event对象

bodaEnv.memory.globlProtoObj["Event"] = function Event() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('Event 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["Event"], "Event");
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Event"], "NONE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 0
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Event"], "CAPTURING_PHASE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 1
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Event"], "AT_TARGET", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Event"], "BUBBLING_PHASE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 3
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Event"].prototype, "type", {
  configurable: true,
  enumerable: true,
  get: {
    type() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Event"].prototype, "Event", "type_get", arguments);
    }
  }.type,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Event"].prototype, "target", {
  configurable: true,
  enumerable: true,
  get: {
    target() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Event"].prototype, "Event", "target_get", arguments);
    }
  }.target,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Event"].prototype, "currentTarget", {
  configurable: true,
  enumerable: true,
  get: {
    currentTarget() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Event"].prototype, "Event", "currentTarget_get", arguments);
    }
  }.currentTarget,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Event"].prototype, "eventPhase", {
  configurable: true,
  enumerable: true,
  get: {
    eventPhase() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Event"].prototype, "Event", "eventPhase_get", arguments);
    }
  }.eventPhase,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Event"].prototype, "bubbles", {
  configurable: true,
  enumerable: true,
  get: {
    bubbles() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Event"].prototype, "Event", "bubbles_get", arguments);
    }
  }.bubbles,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Event"].prototype, "cancelable", {
  configurable: true,
  enumerable: true,
  get: {
    cancelable() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Event"].prototype, "Event", "cancelable_get", arguments);
    }
  }.cancelable,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Event"].prototype, "defaultPrevented", {
  configurable: true,
  enumerable: true,
  get: {
    defaultPrevented() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Event"].prototype, "Event", "defaultPrevented_get", arguments);
    }
  }.defaultPrevented,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Event"].prototype, "composed", {
  configurable: true,
  enumerable: true,
  get: {
    composed() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Event"].prototype, "Event", "composed_get", arguments);
    }
  }.composed,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Event"].prototype, "timeStamp", {
  configurable: true,
  enumerable: true,
  get: {
    timeStamp() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Event"].prototype, "Event", "timeStamp_get", arguments);
    }
  }.timeStamp,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Event"].prototype, "srcElement", {
  configurable: true,
  enumerable: true,
  get: {
    srcElement() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Event"].prototype, "Event", "srcElement_get", arguments);
    }
  }.srcElement,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Event"].prototype, "returnValue", {
  configurable: true,
  enumerable: true,
  get: {
    returnValue() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Event"].prototype, "Event", "returnValue_get", arguments);
    }
  }.returnValue,
  set: {
    returnValue() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Event"].prototype, "Event", "returnValue_set", arguments);
    }
  }.returnValue
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Event"].prototype, "cancelBubble", {
  configurable: true,
  enumerable: true,
  get: {
    cancelBubble() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Event"].prototype, "Event", "cancelBubble_get", arguments);
    }
  }.cancelBubble,
  set: {
    cancelBubble() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Event"].prototype, "Event", "cancelBubble_set", arguments);
    }
  }.cancelBubble
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Event"].prototype, "NONE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 0
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Event"].prototype, "CAPTURING_PHASE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 1
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Event"].prototype, "AT_TARGET", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Event"].prototype, "BUBBLING_PHASE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 3
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Event"].prototype, "composedPath", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    composedPath() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Event"].prototype, "Event", "composedPath", arguments);
    }
  }.composedPath
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Event"].prototype, "initEvent", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    initEvent() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Event"].prototype, "Event", "initEvent", arguments);
    }
  }.initEvent
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Event"].prototype, "preventDefault", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    preventDefault() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Event"].prototype, "Event", "preventDefault", arguments);
    }
  }.preventDefault
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Event"].prototype, "stopImmediatePropagation", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    stopImmediatePropagation() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Event"].prototype, "Event", "stopImmediatePropagation", arguments);
    }
  }.stopImmediatePropagation
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Event"].prototype, "stopPropagation", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    stopPropagation() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Event"].prototype, "Event", "stopPropagation", arguments);
    }
  }.stopPropagation
});

// event对象

bodaEnv.memory.globlProtoObj["event"] = new bodaEnv.memory.globlProtoObj["Event"]('bobo');
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["event"], "isTrusted", {
  configurable: false,
  enumerable: true,
  get: {
    isTrusted() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["event"], "event", "isTrusted_get", arguments, true);
    }
  }.isTrusted,
  set: undefined
});