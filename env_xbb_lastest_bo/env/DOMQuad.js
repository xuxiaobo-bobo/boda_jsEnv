// DOMQuad对象

DOMQuad = function DOMQuad() {
  let arg = arguments[0];
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('DOMQuad 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(DOMQuad, "DOMQuad");
bodavm.toolsFunc.defineProperty(DOMQuad, "fromQuad", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function fromQuad() {
    return bodavm.toolsFunc.dispatch(this, DOMQuad, "DOMQuad", "fromQuad", arguments);
  }
});
bodavm.toolsFunc.defineProperty(DOMQuad, "fromRect", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function fromRect() {
    return bodavm.toolsFunc.dispatch(this, DOMQuad, "DOMQuad", "fromRect", arguments);
  }
});
bodavm.toolsFunc.defineProperty(DOMQuad.prototype, "p1", {
  configurable: true,
  enumerable: true,
  get: function p1() {
    return bodavm.toolsFunc.dispatch(this, DOMQuad.prototype, "DOMQuad", "p1_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(DOMQuad.prototype, "p2", {
  configurable: true,
  enumerable: true,
  get: function p2() {
    return bodavm.toolsFunc.dispatch(this, DOMQuad.prototype, "DOMQuad", "p2_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(DOMQuad.prototype, "p3", {
  configurable: true,
  enumerable: true,
  get: function p3() {
    return bodavm.toolsFunc.dispatch(this, DOMQuad.prototype, "DOMQuad", "p3_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(DOMQuad.prototype, "p4", {
  configurable: true,
  enumerable: true,
  get: function p4() {
    return bodavm.toolsFunc.dispatch(this, DOMQuad.prototype, "DOMQuad", "p4_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(DOMQuad.prototype, "getBounds", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getBounds() {
    return bodavm.toolsFunc.dispatch(this, DOMQuad.prototype, "DOMQuad", "getBounds", arguments);
  }
});
bodavm.toolsFunc.defineProperty(DOMQuad.prototype, "toJSON", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function toJSON() {
    return bodavm.toolsFunc.dispatch(this, DOMQuad.prototype, "DOMQuad", "toJSON", arguments);
  }
});