WindowProperties = function WindowProperties() {
    return bodavm.toolsFunc.throwError("TypeError","Illegal constructor")
    // throw ReferenceError(`WindowProperties is not defined
    // at <anonymous>:1:100`)
    ;
}
bodavm.toolsFunc.safeProto(WindowProperties, 'WindowProperties')
WindowProperties.prototype.__proto__=EventTarget.prototype;
WindowProperties.__proto__=EventTarget;
delete WindowProperties.prototype.constructor;
