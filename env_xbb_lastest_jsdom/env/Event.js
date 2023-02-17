//Event对象
bodavm.memory.globalobj['Event']=function Event(){
    if (arguments.length <1){
        return bodavm.toolsFunc.throwError("TypeError","Failed to construct 'Event': 1 argument required, but only 0 present.")
    }
    this._type=arguments[0]
    Object.defineProperty(this,'isTrusted',{
        configurable:false,
        enumerable:true,
        set:undefined,
        get:function (){
            return true
        }
    },'bobo')
    }
// Event对象
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['Event'], "Event");
bodavm.toolsFunc.defineProperty('Event', "NONE", {configurable:false, enumerable:true, writable:false, value:0});
bodavm.toolsFunc.defineProperty('Event', "CAPTURING_PHASE", {configurable:false, enumerable:true, writable:false, value:1});
bodavm.toolsFunc.defineProperty('Event', "AT_TARGET", {configurable:false, enumerable:true, writable:false, value:2});
bodavm.toolsFunc.defineProperty('Event', "BUBBLING_PHASE", {configurable:false, enumerable:true, writable:false, value:3});
bodavm.toolsFunc.defineProperty('Event', "type", {configurable:true, enumerable:true, get:function type (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Event'].prototype, "Event", "type_get", arguments)}, set:undefined},'prototype');
bodavm.toolsFunc.defineProperty('Event', "target", {configurable:true, enumerable:true, get:function target (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Event'].prototype, "Event", "target_get", arguments)}, set:undefined},'prototype');
bodavm.toolsFunc.defineProperty('Event', "currentTarget", {configurable:true, enumerable:true, get:function currentTarget (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Event'].prototype, "Event", "currentTarget_get", arguments)}, set:undefined},'prototype');
bodavm.toolsFunc.defineProperty('Event', "eventPhase", {configurable:true, enumerable:true, get:function eventPhase (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Event'].prototype, "Event", "eventPhase_get", arguments)}, set:undefined},'prototype');
bodavm.toolsFunc.defineProperty('Event', "bubbles", {configurable:true, enumerable:true, get:function bubbles (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Event'].prototype, "Event", "bubbles_get", arguments)}, set:undefined},'prototype');
bodavm.toolsFunc.defineProperty('Event', "cancelable", {configurable:true, enumerable:true, get:function cancelable (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Event'].prototype, "Event", "cancelable_get", arguments)}, set:undefined},'prototype');
bodavm.toolsFunc.defineProperty('Event', "defaultPrevented", {configurable:true, enumerable:true, get:function defaultPrevented (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Event'].prototype, "Event", "defaultPrevented_get", arguments)}, set:undefined},'prototype');
bodavm.toolsFunc.defineProperty('Event', "composed", {configurable:true, enumerable:true, get:function composed (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Event'].prototype, "Event", "composed_get", arguments)}, set:undefined},'prototype');
bodavm.toolsFunc.defineProperty('Event', "timeStamp", {configurable:true, enumerable:true, get:function timeStamp (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Event'].prototype, "Event", "timeStamp_get", arguments)}, set:undefined},'prototype');
bodavm.toolsFunc.defineProperty('Event', "srcElement", {configurable:true, enumerable:true, get:function srcElement (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Event'].prototype, "Event", "srcElement_get", arguments)}, set:undefined},'prototype');
bodavm.toolsFunc.defineProperty('Event', "returnValue", {configurable:true, enumerable:true, get:function returnValue (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Event'].prototype, "Event", "returnValue_get", arguments)}, set:function returnValue (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Event'].prototype, "Event", "returnValue_set", arguments)}},'prototype');
bodavm.toolsFunc.defineProperty('Event', "cancelBubble", {configurable:true, enumerable:true, get:function cancelBubble (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Event'].prototype, "Event", "cancelBubble_get", arguments)}, set:function cancelBubble (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Event'].prototype, "Event", "cancelBubble_set", arguments)}},'prototype');
bodavm.toolsFunc.defineProperty('Event', "NONE", {configurable:false, enumerable:true, writable:false, value:0},'prototype');
bodavm.toolsFunc.defineProperty('Event', "CAPTURING_PHASE", {configurable:false, enumerable:true, writable:false, value:1},'prototype');
bodavm.toolsFunc.defineProperty('Event', "AT_TARGET", {configurable:false, enumerable:true, writable:false, value:2},'prototype');
bodavm.toolsFunc.defineProperty('Event', "BUBBLING_PHASE", {configurable:false, enumerable:true, writable:false, value:3},'prototype');
bodavm.toolsFunc.defineProperty('Event', "composedPath", {configurable:true, enumerable:true, writable:true, value:function composedPath (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Event'].prototype, "Event", "composedPath", arguments)}},'prototype');
bodavm.toolsFunc.defineProperty('Event', "initEvent", {configurable:true, enumerable:true, writable:true, value:function initEvent (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Event'].prototype, "Event", "initEvent", arguments)}},'prototype');
bodavm.toolsFunc.defineProperty('Event', "preventDefault", {configurable:true, enumerable:true, writable:true, value:function preventDefault (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Event'].prototype, "Event", "preventDefault", arguments)}},'prototype');
bodavm.toolsFunc.defineProperty('Event', "stopImmediatePropagation", {configurable:true, enumerable:true, writable:true, value:function stopImmediatePropagation (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Event'].prototype, "Event", "stopImmediatePropagation", arguments)}},'prototype');
bodavm.toolsFunc.defineProperty('Event', "stopPropagation", {configurable:true, enumerable:true, writable:true, value:function stopPropagation (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Event'].prototype, "Event", "stopPropagation", arguments)}},'prototype');
bodavm.toolsFunc.defineProperty('Event', "path", {configurable:true, enumerable:true, get:function path (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Event'].prototype, "Event", "path_get", arguments)}, set:undefined},'prototype');
