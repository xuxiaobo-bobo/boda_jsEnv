// ProcessingInstruction对象

bodavm.memory.globalobj['ProcessingInstruction'] = function ProcessingInstruction() {
  console.log_copy('ProcessingInstruction 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof ProcessingInstruction)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['ProcessingInstruction'], "ProcessingInstruction");
bodavm.memory.globalobj['ProcessingInstruction'].prototype.__proto__ = bodavm.memory.globalobj['CharacterData'].prototype;
bodavm.memory.globalobj['ProcessingInstruction'].__proto__ = bodavm.memory.globalobj['CharacterData'];
bodavm.toolsFunc.defineProperty('ProcessingInstruction', "target", {
  configurable: true,
  enumerable: true,
  get: function target() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['ProcessingInstruction'].prototype, "ProcessingInstruction", "target_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('ProcessingInstruction', "sheet", {
  configurable: true,
  enumerable: true,
  get: function sheet() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['ProcessingInstruction'].prototype, "ProcessingInstruction", "sheet_get", arguments);
  },
  set: undefined
}, 'prototype');