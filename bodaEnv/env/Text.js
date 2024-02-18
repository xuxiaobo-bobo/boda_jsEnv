// Text对象

bodaEnv.memory.globlProtoObj["Text"] = function Text() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('Text 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["Text"], "Text");
bodaEnv.memory.globlProtoObj["Text"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["CharacterData"].prototype;
bodaEnv.memory.globlProtoObj["Text"].__proto__ = bodaEnv.memory.globlProtoObj["CharacterData"];
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Text"].prototype, "wholeText", {
  configurable: true,
  enumerable: true,
  get: {
    wholeText() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Text"].prototype, "Text", "wholeText_get", arguments);
    }
  }.wholeText,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Text"].prototype, "assignedSlot", {
  configurable: true,
  enumerable: true,
  get: {
    assignedSlot() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Text"].prototype, "Text", "assignedSlot_get", arguments);
    }
  }.assignedSlot,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Text"].prototype, "splitText", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    splitText() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Text"].prototype, "Text", "splitText", arguments);
    }
  }.splitText
});