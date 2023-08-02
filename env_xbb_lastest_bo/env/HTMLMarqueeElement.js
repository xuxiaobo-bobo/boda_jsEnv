// HTMLMarqueeElement对象

HTMLMarqueeElement = function HTMLMarqueeElement() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof HTMLMarqueeElement)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('HTMLMarqueeElement 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(HTMLMarqueeElement, "HTMLMarqueeElement");
HTMLMarqueeElement.prototype.__proto__ = HTMLElement.prototype;
HTMLMarqueeElement.__proto__ = HTMLElement;
bodavm.toolsFunc.defineProperty(HTMLMarqueeElement.prototype, "behavior", {
  configurable: true,
  enumerable: true,
  get: function behavior() {
    return bodavm.toolsFunc.dispatch(this, HTMLMarqueeElement.prototype, "HTMLMarqueeElement", "behavior_get", arguments);
  },
  set: function behavior() {
    return bodavm.toolsFunc.dispatch(this, HTMLMarqueeElement.prototype, "HTMLMarqueeElement", "behavior_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLMarqueeElement.prototype, "bgColor", {
  configurable: true,
  enumerable: true,
  get: function bgColor() {
    return bodavm.toolsFunc.dispatch(this, HTMLMarqueeElement.prototype, "HTMLMarqueeElement", "bgColor_get", arguments);
  },
  set: function bgColor() {
    return bodavm.toolsFunc.dispatch(this, HTMLMarqueeElement.prototype, "HTMLMarqueeElement", "bgColor_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLMarqueeElement.prototype, "direction", {
  configurable: true,
  enumerable: true,
  get: function direction() {
    return bodavm.toolsFunc.dispatch(this, HTMLMarqueeElement.prototype, "HTMLMarqueeElement", "direction_get", arguments);
  },
  set: function direction() {
    return bodavm.toolsFunc.dispatch(this, HTMLMarqueeElement.prototype, "HTMLMarqueeElement", "direction_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLMarqueeElement.prototype, "height", {
  configurable: true,
  enumerable: true,
  get: function height() {
    return bodavm.toolsFunc.dispatch(this, HTMLMarqueeElement.prototype, "HTMLMarqueeElement", "height_get", arguments);
  },
  set: function height() {
    return bodavm.toolsFunc.dispatch(this, HTMLMarqueeElement.prototype, "HTMLMarqueeElement", "height_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLMarqueeElement.prototype, "hspace", {
  configurable: true,
  enumerable: true,
  get: function hspace() {
    return bodavm.toolsFunc.dispatch(this, HTMLMarqueeElement.prototype, "HTMLMarqueeElement", "hspace_get", arguments);
  },
  set: function hspace() {
    return bodavm.toolsFunc.dispatch(this, HTMLMarqueeElement.prototype, "HTMLMarqueeElement", "hspace_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLMarqueeElement.prototype, "loop", {
  configurable: true,
  enumerable: true,
  get: function loop() {
    return bodavm.toolsFunc.dispatch(this, HTMLMarqueeElement.prototype, "HTMLMarqueeElement", "loop_get", arguments);
  },
  set: function loop() {
    return bodavm.toolsFunc.dispatch(this, HTMLMarqueeElement.prototype, "HTMLMarqueeElement", "loop_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLMarqueeElement.prototype, "scrollAmount", {
  configurable: true,
  enumerable: true,
  get: function scrollAmount() {
    return bodavm.toolsFunc.dispatch(this, HTMLMarqueeElement.prototype, "HTMLMarqueeElement", "scrollAmount_get", arguments);
  },
  set: function scrollAmount() {
    return bodavm.toolsFunc.dispatch(this, HTMLMarqueeElement.prototype, "HTMLMarqueeElement", "scrollAmount_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLMarqueeElement.prototype, "scrollDelay", {
  configurable: true,
  enumerable: true,
  get: function scrollDelay() {
    return bodavm.toolsFunc.dispatch(this, HTMLMarqueeElement.prototype, "HTMLMarqueeElement", "scrollDelay_get", arguments);
  },
  set: function scrollDelay() {
    return bodavm.toolsFunc.dispatch(this, HTMLMarqueeElement.prototype, "HTMLMarqueeElement", "scrollDelay_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLMarqueeElement.prototype, "trueSpeed", {
  configurable: true,
  enumerable: true,
  get: function trueSpeed() {
    return bodavm.toolsFunc.dispatch(this, HTMLMarqueeElement.prototype, "HTMLMarqueeElement", "trueSpeed_get", arguments);
  },
  set: function trueSpeed() {
    return bodavm.toolsFunc.dispatch(this, HTMLMarqueeElement.prototype, "HTMLMarqueeElement", "trueSpeed_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLMarqueeElement.prototype, "vspace", {
  configurable: true,
  enumerable: true,
  get: function vspace() {
    return bodavm.toolsFunc.dispatch(this, HTMLMarqueeElement.prototype, "HTMLMarqueeElement", "vspace_get", arguments);
  },
  set: function vspace() {
    return bodavm.toolsFunc.dispatch(this, HTMLMarqueeElement.prototype, "HTMLMarqueeElement", "vspace_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLMarqueeElement.prototype, "width", {
  configurable: true,
  enumerable: true,
  get: function width() {
    return bodavm.toolsFunc.dispatch(this, HTMLMarqueeElement.prototype, "HTMLMarqueeElement", "width_get", arguments);
  },
  set: function width() {
    return bodavm.toolsFunc.dispatch(this, HTMLMarqueeElement.prototype, "HTMLMarqueeElement", "width_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLMarqueeElement.prototype, "start", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function start() {
    return bodavm.toolsFunc.dispatch(this, HTMLMarqueeElement.prototype, "HTMLMarqueeElement", "start", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLMarqueeElement.prototype, "stop", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function stop() {
    return bodavm.toolsFunc.dispatch(this, HTMLMarqueeElement.prototype, "HTMLMarqueeElement", "stop", arguments);
  }
});