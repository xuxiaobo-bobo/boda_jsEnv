// DocumentFragment对象

bodaEnv.memory.globlProtoObj["DocumentFragment"] = function DocumentFragment() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('DocumentFragment 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["DocumentFragment"], "DocumentFragment");
bodaEnv.memory.globlProtoObj["DocumentFragment"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["Node"].prototype;
bodaEnv.memory.globlProtoObj["DocumentFragment"].__proto__ = bodaEnv.memory.globlProtoObj["Node"];
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["DocumentFragment"].prototype, "children", {
  configurable: true,
  enumerable: true,
  get: {
    children() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["DocumentFragment"].prototype, "DocumentFragment", "children_get", arguments);
    }
  }.children,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["DocumentFragment"].prototype, "firstElementChild", {
  configurable: true,
  enumerable: true,
  get: {
    firstElementChild() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["DocumentFragment"].prototype, "DocumentFragment", "firstElementChild_get", arguments);
    }
  }.firstElementChild,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["DocumentFragment"].prototype, "lastElementChild", {
  configurable: true,
  enumerable: true,
  get: {
    lastElementChild() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["DocumentFragment"].prototype, "DocumentFragment", "lastElementChild_get", arguments);
    }
  }.lastElementChild,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["DocumentFragment"].prototype, "childElementCount", {
  configurable: true,
  enumerable: true,
  get: {
    childElementCount() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["DocumentFragment"].prototype, "DocumentFragment", "childElementCount_get", arguments);
    }
  }.childElementCount,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["DocumentFragment"].prototype, "append", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    append() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["DocumentFragment"].prototype, "DocumentFragment", "append", arguments);
    }
  }.append
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["DocumentFragment"].prototype, "getElementById", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    getElementById() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["DocumentFragment"].prototype, "DocumentFragment", "getElementById", arguments);
    }
  }.getElementById
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["DocumentFragment"].prototype, "prepend", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    prepend() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["DocumentFragment"].prototype, "DocumentFragment", "prepend", arguments);
    }
  }.prepend
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["DocumentFragment"].prototype, "querySelector", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    querySelector() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["DocumentFragment"].prototype, "DocumentFragment", "querySelector", arguments);
    }
  }.querySelector
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["DocumentFragment"].prototype, "querySelectorAll", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    querySelectorAll() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["DocumentFragment"].prototype, "DocumentFragment", "querySelectorAll", arguments);
    }
  }.querySelectorAll
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["DocumentFragment"].prototype, "replaceChildren", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    replaceChildren() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["DocumentFragment"].prototype, "DocumentFragment", "replaceChildren", arguments);
    }
  }.replaceChildren
});