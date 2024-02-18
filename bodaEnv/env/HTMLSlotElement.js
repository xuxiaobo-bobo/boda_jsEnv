// HTMLSlotElement对象

bodaEnv.memory.globlProtoObj["HTMLSlotElement"] = function HTMLSlotElement() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('HTMLSlotElement 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["HTMLSlotElement"], "HTMLSlotElement");
bodaEnv.memory.globlProtoObj["HTMLSlotElement"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["HTMLElement"].prototype;
bodaEnv.memory.globlProtoObj["HTMLSlotElement"].__proto__ = bodaEnv.memory.globlProtoObj["HTMLElement"];
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLSlotElement"].prototype, "name", {
  configurable: true,
  enumerable: true,
  get: {
    name() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLSlotElement"].prototype, "HTMLSlotElement", "name_get", arguments);
    }
  }.name,
  set: {
    name() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLSlotElement"].prototype, "HTMLSlotElement", "name_set", arguments);
    }
  }.name
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLSlotElement"].prototype, "assign", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    assign() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLSlotElement"].prototype, "HTMLSlotElement", "assign", arguments);
    }
  }.assign
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLSlotElement"].prototype, "assignedElements", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    assignedElements() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLSlotElement"].prototype, "HTMLSlotElement", "assignedElements", arguments);
    }
  }.assignedElements
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLSlotElement"].prototype, "assignedNodes", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    assignedNodes() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLSlotElement"].prototype, "HTMLSlotElement", "assignedNodes", arguments);
    }
  }.assignedNodes
});