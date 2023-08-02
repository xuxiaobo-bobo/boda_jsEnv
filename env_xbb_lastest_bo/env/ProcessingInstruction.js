// ProcessingInstruction对象

ProcessingInstruction = function ProcessingInstruction() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof ProcessingInstruction)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('ProcessingInstruction 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(ProcessingInstruction, "ProcessingInstruction");
ProcessingInstruction.prototype.__proto__ = CharacterData.prototype;
ProcessingInstruction.__proto__ = CharacterData;
bodavm.toolsFunc.defineProperty(ProcessingInstruction.prototype, "target", {
  configurable: true,
  enumerable: true,
  get: function target() {
    return bodavm.toolsFunc.dispatch(this, ProcessingInstruction.prototype, "ProcessingInstruction", "target_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(ProcessingInstruction.prototype, "sheet", {
  configurable: true,
  enumerable: true,
  get: function sheet() {
    return bodavm.toolsFunc.dispatch(this, ProcessingInstruction.prototype, "ProcessingInstruction", "sheet_get", arguments);
  },
  set: undefined
});