// MouseEvent对象
bodavm.memory.globalobj['MouseEvent'] = function MouseEvent() {
    if (!(this instanceof MouseEvent)) {
        return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'MouseEvent': Please use the 'new' operator, this DOM object constructor cannot be called as a function")
    };
    if (arguments.length < 1) { 

        return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'MouseEvent': 1 argument required, but only 0 present.")
    }
}
// MouseEvent对象
bodavm.memory.globalobj['MouseEvent'] = function MouseEvent(){return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'MouseEvent': 1 argument required, but only 0 present.")}
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['MouseEvent'], "MouseEvent");
bodavm.memory.globalobj['MouseEvent'].prototype.__proto__=bodavm.memory.globalobj['UIEvent'].prototype;
bodavm.memory.globalobj['MouseEvent'].__proto__=bodavm.memory.globalobj['UIEvent'];
bodavm.toolsFunc.defineProperty('MouseEvent', "screenX", {configurable:true, enumerable:true, get:function screenX (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MouseEvent'].prototype, "MouseEvent", "screenX_get", arguments)}, set:undefined},'prototype');
bodavm.toolsFunc.defineProperty('MouseEvent', "screenY", {configurable:true, enumerable:true, get:function screenY (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MouseEvent'].prototype, "MouseEvent", "screenY_get", arguments)}, set:undefined},'prototype');
bodavm.toolsFunc.defineProperty('MouseEvent', "clientX", {configurable:true, enumerable:true, get:function clientX (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MouseEvent'].prototype, "MouseEvent", "clientX_get", arguments)}, set:undefined},'prototype');
bodavm.toolsFunc.defineProperty('MouseEvent', "clientY", {configurable:true, enumerable:true, get:function clientY (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MouseEvent'].prototype, "MouseEvent", "clientY_get", arguments)}, set:undefined},'prototype');
bodavm.toolsFunc.defineProperty('MouseEvent', "ctrlKey", {configurable:true, enumerable:true, get:function ctrlKey (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MouseEvent'].prototype, "MouseEvent", "ctrlKey_get", arguments)}, set:undefined},'prototype');
bodavm.toolsFunc.defineProperty('MouseEvent', "shiftKey", {configurable:true, enumerable:true, get:function shiftKey (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MouseEvent'].prototype, "MouseEvent", "shiftKey_get", arguments)}, set:undefined},'prototype');
bodavm.toolsFunc.defineProperty('MouseEvent', "altKey", {configurable:true, enumerable:true, get:function altKey (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MouseEvent'].prototype, "MouseEvent", "altKey_get", arguments)}, set:undefined},'prototype');
bodavm.toolsFunc.defineProperty('MouseEvent', "metaKey", {configurable:true, enumerable:true, get:function metaKey (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MouseEvent'].prototype, "MouseEvent", "metaKey_get", arguments)}, set:undefined},'prototype');
bodavm.toolsFunc.defineProperty('MouseEvent', "button", {configurable:true, enumerable:true, get:function button (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MouseEvent'].prototype, "MouseEvent", "button_get", arguments)}, set:undefined},'prototype');
bodavm.toolsFunc.defineProperty('MouseEvent', "buttons", {configurable:true, enumerable:true, get:function buttons (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MouseEvent'].prototype, "MouseEvent", "buttons_get", arguments)}, set:undefined},'prototype');
bodavm.toolsFunc.defineProperty('MouseEvent', "relatedTarget", {configurable:true, enumerable:true, get:function relatedTarget (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MouseEvent'].prototype, "MouseEvent", "relatedTarget_get", arguments)}, set:undefined},'prototype');
bodavm.toolsFunc.defineProperty('MouseEvent', "pageX", {configurable:true, enumerable:true, get:function pageX (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MouseEvent'].prototype, "MouseEvent", "pageX_get", arguments)}, set:undefined},'prototype');
bodavm.toolsFunc.defineProperty('MouseEvent', "pageY", {configurable:true, enumerable:true, get:function pageY (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MouseEvent'].prototype, "MouseEvent", "pageY_get", arguments)}, set:undefined},'prototype');
bodavm.toolsFunc.defineProperty('MouseEvent', "x", {configurable:true, enumerable:true, get:function x (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MouseEvent'].prototype, "MouseEvent", "x_get", arguments)}, set:undefined},'prototype');
bodavm.toolsFunc.defineProperty('MouseEvent', "y", {configurable:true, enumerable:true, get:function y (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MouseEvent'].prototype, "MouseEvent", "y_get", arguments)}, set:undefined},'prototype');
bodavm.toolsFunc.defineProperty('MouseEvent', "offsetX", {configurable:true, enumerable:true, get:function offsetX (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MouseEvent'].prototype, "MouseEvent", "offsetX_get", arguments)}, set:undefined},'prototype');
bodavm.toolsFunc.defineProperty('MouseEvent', "offsetY", {configurable:true, enumerable:true, get:function offsetY (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MouseEvent'].prototype, "MouseEvent", "offsetY_get", arguments)}, set:undefined},'prototype');
bodavm.toolsFunc.defineProperty('MouseEvent', "movementX", {configurable:true, enumerable:true, get:function movementX (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MouseEvent'].prototype, "MouseEvent", "movementX_get", arguments)}, set:undefined},'prototype');
bodavm.toolsFunc.defineProperty('MouseEvent', "movementY", {configurable:true, enumerable:true, get:function movementY (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MouseEvent'].prototype, "MouseEvent", "movementY_get", arguments)}, set:undefined},'prototype');
bodavm.toolsFunc.defineProperty('MouseEvent', "fromElement", {configurable:true, enumerable:true, get:function fromElement (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MouseEvent'].prototype, "MouseEvent", "fromElement_get", arguments)}, set:undefined},'prototype');
bodavm.toolsFunc.defineProperty('MouseEvent', "toElement", {configurable:true, enumerable:true, get:function toElement (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MouseEvent'].prototype, "MouseEvent", "toElement_get", arguments)}, set:undefined},'prototype');
bodavm.toolsFunc.defineProperty('MouseEvent', "layerX", {configurable:true, enumerable:true, get:function layerX (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MouseEvent'].prototype, "MouseEvent", "layerX_get", arguments)}, set:undefined},'prototype');
bodavm.toolsFunc.defineProperty('MouseEvent', "layerY", {configurable:true, enumerable:true, get:function layerY (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MouseEvent'].prototype, "MouseEvent", "layerY_get", arguments)}, set:undefined},'prototype');
bodavm.toolsFunc.defineProperty('MouseEvent', "getModifierState", {configurable:true, enumerable:true, writable:true, value:function getModifierState (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MouseEvent'].prototype, "MouseEvent", "getModifierState", arguments)}},'prototype');
bodavm.toolsFunc.defineProperty('MouseEvent', "initMouseEvent", {configurable:true, enumerable:true, writable:true, value:function initMouseEvent (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MouseEvent'].prototype, "MouseEvent", "initMouseEvent", arguments)}},'prototype');
