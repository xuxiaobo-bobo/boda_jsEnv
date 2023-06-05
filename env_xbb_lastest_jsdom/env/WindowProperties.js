bodavm.memory.globalobj['WindowProperties'] = function WindowProperties() {
  console.log_copy('WindowProperties 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor")
  // throw ReferenceError(`WindowProperties is not defined
  // at <anonymous>:1:100`)
  ;
};

bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['WindowProperties'], 'WindowProperties');
bodavm.memory.globalobj['WindowProperties'].prototype.__proto__ = bodavm.memory.globalobj['EventTarget'].prototype;
bodavm.memory.globalobj['WindowProperties'].__proto__ = bodavm.memory.globalobj['EventTarget'];
