// ProcessingInstruction对象

bodaEnv.memory.globlProtoObj["ProcessingInstruction"] = function ProcessingInstruction() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('ProcessingInstruction 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["ProcessingInstruction"], "ProcessingInstruction");
bodaEnv.memory.globlProtoObj["ProcessingInstruction"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["CharacterData"].prototype;
bodaEnv.memory.globlProtoObj["ProcessingInstruction"].__proto__ = bodaEnv.memory.globlProtoObj["CharacterData"];
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["ProcessingInstruction"].prototype, "target", {
  configurable: true,
  enumerable: true,
  get: {
    target() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["ProcessingInstruction"].prototype, "ProcessingInstruction", "target_get", arguments);
    }
  }.target,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["ProcessingInstruction"].prototype, "sheet", {
  configurable: true,
  enumerable: true,
  get: {
    sheet() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["ProcessingInstruction"].prototype, "ProcessingInstruction", "sheet_get", arguments);
    }
  }.sheet,
  set: undefined
});