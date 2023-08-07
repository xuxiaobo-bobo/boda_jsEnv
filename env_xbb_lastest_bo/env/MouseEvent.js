// MouseEvent对象

MouseEvent = function MouseEvent() {
  let arg = arguments[0];
  ;
  if (bodavm.memory.listenerProxy[arg]['res']) {
    return bodavm.memory.listenerProxy[arg]['res'];
  }
  this.isTrusted = false;
  bodavm.toolsFunc.setProtoAttr.call(this, this, arg);
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('MouseEvent 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(MouseEvent, "MouseEvent");
MouseEvent.prototype.__proto__ = UIEvent.prototype;
MouseEvent.__proto__ = UIEvent;
bodavm.toolsFunc.defineProperty(MouseEvent.prototype, "screenX", {
  configurable: true,
  enumerable: true,
  get: function screenX() {
    return bodavm.toolsFunc.dispatch(this, MouseEvent.prototype, "MouseEvent", "screenX_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(MouseEvent.prototype, "screenY", {
  configurable: true,
  enumerable: true,
  get: function screenY() {
    return bodavm.toolsFunc.dispatch(this, MouseEvent.prototype, "MouseEvent", "screenY_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(MouseEvent.prototype, "clientX", {
  configurable: true,
  enumerable: true,
  get: function clientX() {
    return bodavm.toolsFunc.dispatch(this, MouseEvent.prototype, "MouseEvent", "clientX_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(MouseEvent.prototype, "clientY", {
  configurable: true,
  enumerable: true,
  get: function clientY() {
    return bodavm.toolsFunc.dispatch(this, MouseEvent.prototype, "MouseEvent", "clientY_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(MouseEvent.prototype, "ctrlKey", {
  configurable: true,
  enumerable: true,
  get: function ctrlKey() {
    return bodavm.toolsFunc.dispatch(this, MouseEvent.prototype, "MouseEvent", "ctrlKey_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(MouseEvent.prototype, "shiftKey", {
  configurable: true,
  enumerable: true,
  get: function shiftKey() {
    return bodavm.toolsFunc.dispatch(this, MouseEvent.prototype, "MouseEvent", "shiftKey_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(MouseEvent.prototype, "altKey", {
  configurable: true,
  enumerable: true,
  get: function altKey() {
    return bodavm.toolsFunc.dispatch(this, MouseEvent.prototype, "MouseEvent", "altKey_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(MouseEvent.prototype, "metaKey", {
  configurable: true,
  enumerable: true,
  get: function metaKey() {
    return bodavm.toolsFunc.dispatch(this, MouseEvent.prototype, "MouseEvent", "metaKey_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(MouseEvent.prototype, "button", {
  configurable: true,
  enumerable: true,
  get: function button() {
    return bodavm.toolsFunc.dispatch(this, MouseEvent.prototype, "MouseEvent", "button_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(MouseEvent.prototype, "buttons", {
  configurable: true,
  enumerable: true,
  get: function buttons() {
    return bodavm.toolsFunc.dispatch(this, MouseEvent.prototype, "MouseEvent", "buttons_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(MouseEvent.prototype, "relatedTarget", {
  configurable: true,
  enumerable: true,
  get: function relatedTarget() {
    return bodavm.toolsFunc.dispatch(this, MouseEvent.prototype, "MouseEvent", "relatedTarget_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(MouseEvent.prototype, "pageX", {
  configurable: true,
  enumerable: true,
  get: function pageX() {
    return bodavm.toolsFunc.dispatch(this, MouseEvent.prototype, "MouseEvent", "pageX_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(MouseEvent.prototype, "pageY", {
  configurable: true,
  enumerable: true,
  get: function pageY() {
    return bodavm.toolsFunc.dispatch(this, MouseEvent.prototype, "MouseEvent", "pageY_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(MouseEvent.prototype, "x", {
  configurable: true,
  enumerable: true,
  get: function x() {
    return bodavm.toolsFunc.dispatch(this, MouseEvent.prototype, "MouseEvent", "x_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(MouseEvent.prototype, "y", {
  configurable: true,
  enumerable: true,
  get: function y() {
    return bodavm.toolsFunc.dispatch(this, MouseEvent.prototype, "MouseEvent", "y_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(MouseEvent.prototype, "offsetX", {
  configurable: true,
  enumerable: true,
  get: function offsetX() {
    return bodavm.toolsFunc.dispatch(this, MouseEvent.prototype, "MouseEvent", "offsetX_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(MouseEvent.prototype, "offsetY", {
  configurable: true,
  enumerable: true,
  get: function offsetY() {
    return bodavm.toolsFunc.dispatch(this, MouseEvent.prototype, "MouseEvent", "offsetY_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(MouseEvent.prototype, "movementX", {
  configurable: true,
  enumerable: true,
  get: function movementX() {
    return bodavm.toolsFunc.dispatch(this, MouseEvent.prototype, "MouseEvent", "movementX_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(MouseEvent.prototype, "movementY", {
  configurable: true,
  enumerable: true,
  get: function movementY() {
    return bodavm.toolsFunc.dispatch(this, MouseEvent.prototype, "MouseEvent", "movementY_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(MouseEvent.prototype, "fromElement", {
  configurable: true,
  enumerable: true,
  get: function fromElement() {
    return bodavm.toolsFunc.dispatch(this, MouseEvent.prototype, "MouseEvent", "fromElement_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(MouseEvent.prototype, "toElement", {
  configurable: true,
  enumerable: true,
  get: function toElement() {
    return bodavm.toolsFunc.dispatch(this, MouseEvent.prototype, "MouseEvent", "toElement_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(MouseEvent.prototype, "layerX", {
  configurable: true,
  enumerable: true,
  get: function layerX() {
    return bodavm.toolsFunc.dispatch(this, MouseEvent.prototype, "MouseEvent", "layerX_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(MouseEvent.prototype, "layerY", {
  configurable: true,
  enumerable: true,
  get: function layerY() {
    return bodavm.toolsFunc.dispatch(this, MouseEvent.prototype, "MouseEvent", "layerY_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(MouseEvent.prototype, "getModifierState", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getModifierState() {
    return bodavm.toolsFunc.dispatch(this, MouseEvent.prototype, "MouseEvent", "getModifierState", arguments);
  }
});
bodavm.toolsFunc.defineProperty(MouseEvent.prototype, "initMouseEvent", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function initMouseEvent() {
    return bodavm.toolsFunc.dispatch(this, MouseEvent.prototype, "MouseEvent", "initMouseEvent", arguments);
  }
});