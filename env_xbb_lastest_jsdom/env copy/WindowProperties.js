bodavm.memory.globalobj['WindowProperties'] = function WindowProperties() {
    return bodavm.toolsFunc.throwError("TypeError","Illegal constructor")
    // throw ReferenceError(`WindowProperties is not defined
    // at <anonymous>:1:100`)
    ;
}
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['WindowProperties'], 'WindowProperties')
bodavm.memory.globalobj['WindowProperties'].prototype.__proto__=bodavm.memory.globalobj['EventTarget'].prototype;
bodavm.memory.globalobj['WindowProperties'].__proto__=bodavm.memory.globalobj['EventTarget'];
