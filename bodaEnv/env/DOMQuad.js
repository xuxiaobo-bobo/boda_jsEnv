// DOMQuad对象

bodaEnv.memory.globlProtoObj["DOMQuad"] = function DOMQuad() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('DOMQuad 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["DOMQuad"], "DOMQuad");
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["DOMQuad"], "fromQuad", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    fromQuad() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["DOMRect"], "DOMQuad", "fromQuad", arguments);
    }
  }.fromQuad
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["DOMQuad"], "fromRect", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    fromRect() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["DOMRect"], "DOMQuad", "fromRect", arguments);
    }
  }.fromRect
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["DOMQuad"].prototype, "p1", {
  configurable: true,
  enumerable: true,
  get: {
    p1() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["DOMQuad"].prototype, "DOMQuad", "p1_get", arguments);
    }
  }.p1,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["DOMQuad"].prototype, "p2", {
  configurable: true,
  enumerable: true,
  get: {
    p2() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["DOMQuad"].prototype, "DOMQuad", "p2_get", arguments);
    }
  }.p2,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["DOMQuad"].prototype, "p3", {
  configurable: true,
  enumerable: true,
  get: {
    p3() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["DOMQuad"].prototype, "DOMQuad", "p3_get", arguments);
    }
  }.p3,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["DOMQuad"].prototype, "p4", {
  configurable: true,
  enumerable: true,
  get: {
    p4() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["DOMQuad"].prototype, "DOMQuad", "p4_get", arguments);
    }
  }.p4,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["DOMQuad"].prototype, "getBounds", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    getBounds() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["DOMQuad"].prototype, "DOMQuad", "getBounds", arguments);
    }
  }.getBounds
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["DOMQuad"].prototype, "toJSON", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    toJSON() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["DOMQuad"].prototype, "DOMQuad", "toJSON", arguments);
    }
  }.toJSON
});