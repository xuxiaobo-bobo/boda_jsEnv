//UIEvent对象
bodavm.memory.globalobj['UIEvent']  = function UIEvent() {this._boisinit=bodavm.config.isinit;
    if (!(this instanceof UIEvent)) {
        return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'UIEvent': Please use the 'new' operator, this DOM object constructor cannot be called as a function")
    }; 
    if (arguments.length < 1) {
        return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'UIEvent': 1 argument required, but only 0 present.")
    }

}
// UIEvent对象
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['UIEvent'], "UIEvent");
bodavm.memory.globalobj['UIEvent'].prototype.__proto__=bodavm.memory.globalobj['Event'].prototype;
bodavm.memory.globalobj['UIEvent'].__proto__=bodavm.memory.globalobj['Event'];
bodavm.toolsFunc.defineProperty('UIEvent', "view", {configurable:true, enumerable:true, get:function view (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['UIEvent'].prototype, "UIEvent", "view_get", arguments)}, set:undefined},'prototype');
bodavm.toolsFunc.defineProperty('UIEvent', "detail", {configurable:true, enumerable:true, get:function detail (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['UIEvent'].prototype, "UIEvent", "detail_get", arguments)}, set:undefined},'prototype');
bodavm.toolsFunc.defineProperty('UIEvent', "sourceCapabilities", {configurable:true, enumerable:true, get:function sourceCapabilities (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['UIEvent'].prototype, "UIEvent", "sourceCapabilities_get", arguments)}, set:undefined},'prototype');
bodavm.toolsFunc.defineProperty('UIEvent', "which", {configurable:true, enumerable:true, get:function which (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['UIEvent'].prototype, "UIEvent", "which_get", arguments)}, set:undefined},'prototype');
bodavm.toolsFunc.defineProperty('UIEvent', "initUIEvent", {configurable:true, enumerable:true, writable:true, value:function initUIEvent (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['UIEvent'].prototype, "UIEvent", "initUIEvent", arguments)}},'prototype');
