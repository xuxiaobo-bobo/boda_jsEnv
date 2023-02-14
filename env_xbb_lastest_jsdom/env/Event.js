//Event对象
Event=function Event(){
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
    })
    }
bodavm.toolsFunc.safeProto(Event,"Event");
bodavm.toolsFunc.defineProperty(Event,"NONE",{configurable:false, enumerable:true, writable:false, value:0});
bodavm.toolsFunc.defineProperty(Event,"CAPTURING_PHASE",{configurable:false, enumerable:true, writable:false, value:1});
bodavm.toolsFunc.defineProperty(Event,"AT_TARGET",{configurable:false, enumerable:true, writable:false, value:2});
bodavm.toolsFunc.defineProperty(Event,"BUBBLING_PHASE",{configurable:false, enumerable:true, writable:false, value:3});
bodavm.toolsFunc.defineProperty(Event.prototype,"type",{configurable:true, enumerable:true, get:function type () {return bodavm.toolsFunc.dispatch(this,Event.prototype,"Event","type_get",arguments)},set:undefined});
bodavm.toolsFunc.defineProperty(Event.prototype,"target",{configurable:true, enumerable:true, get:function target () {return bodavm.toolsFunc.dispatch(this,Event.prototype,"Event","target_get",arguments)},set:undefined});
bodavm.toolsFunc.defineProperty(Event.prototype,"currentTarget",{configurable:true, enumerable:true, get:function currentTarget () {return bodavm.toolsFunc.dispatch(this,Event.prototype,"Event","currentTarget_get",arguments)},set:undefined});
bodavm.toolsFunc.defineProperty(Event.prototype,"eventPhase",{configurable:true, enumerable:true, get:function eventPhase () {return bodavm.toolsFunc.dispatch(this,Event.prototype,"Event","eventPhase_get",arguments)},set:undefined});
bodavm.toolsFunc.defineProperty(Event.prototype,"bubbles",{configurable:true, enumerable:true, get:function bubbles () {return bodavm.toolsFunc.dispatch(this,Event.prototype,"Event","bubbles_get",arguments)},set:undefined});
bodavm.toolsFunc.defineProperty(Event.prototype,"cancelable",{configurable:true, enumerable:true, get:function cancelable () {return bodavm.toolsFunc.dispatch(this,Event.prototype,"Event","cancelable_get",arguments)},set:undefined});
bodavm.toolsFunc.defineProperty(Event.prototype,"defaultPrevented",{configurable:true, enumerable:true, get:function defaultPrevented () {return bodavm.toolsFunc.dispatch(this,Event.prototype,"Event","defaultPrevented_get",arguments)},set:undefined});
bodavm.toolsFunc.defineProperty(Event.prototype,"composed",{configurable:true, enumerable:true, get:function composed () {return bodavm.toolsFunc.dispatch(this,Event.prototype,"Event","composed_get",arguments)},set:undefined});
bodavm.toolsFunc.defineProperty(Event.prototype,"timeStamp",{configurable:true, enumerable:true, get:function timeStamp () {return bodavm.toolsFunc.dispatch(this,Event.prototype,"Event","timeStamp_get",arguments)},set:undefined});
bodavm.toolsFunc.defineProperty(Event.prototype,"srcElement",{configurable:true, enumerable:true, get:function srcElement () {return bodavm.toolsFunc.dispatch(this,Event.prototype,"Event","srcElement_get",arguments)},set:undefined});
bodavm.toolsFunc.defineProperty(Event.prototype,"returnValue",{configurable:true, enumerable:true, get:function returnValue () {return bodavm.toolsFunc.dispatch(this,Event.prototype,"Event","returnValue_get",arguments)},set:function returnValue () {return bodavm.toolsFunc.dispatch(this,Event.prototype,"Event","returnValue_set",arguments)},});
bodavm.toolsFunc.defineProperty(Event.prototype,"cancelBubble",{configurable:true, enumerable:true, get:function cancelBubble () {return bodavm.toolsFunc.dispatch(this,Event.prototype,"Event","cancelBubble_get",arguments)},set:function cancelBubble () {return bodavm.toolsFunc.dispatch(this,Event.prototype,"Event","cancelBubble_set",arguments)},});
bodavm.toolsFunc.defineProperty(Event.prototype,"NONE",{configurable:false, enumerable:true, writable:false, value:0});
bodavm.toolsFunc.defineProperty(Event.prototype,"CAPTURING_PHASE",{configurable:false, enumerable:true, writable:false, value:1});
bodavm.toolsFunc.defineProperty(Event.prototype,"AT_TARGET",{configurable:false, enumerable:true, writable:false, value:2});
bodavm.toolsFunc.defineProperty(Event.prototype,"BUBBLING_PHASE",{configurable:false, enumerable:true, writable:false, value:3});
bodavm.toolsFunc.defineProperty(Event.prototype,"composedPath",{configurable:true, enumerable:true, writable:true, value:function composedPath() {return bodavm.toolsFunc.dispatch(this,Event.prototype,"Event","composedPath",arguments)}});
bodavm.toolsFunc.defineProperty(Event.prototype,"initEvent",{configurable:true, enumerable:true, writable:true, value:function initEvent() {return bodavm.toolsFunc.dispatch(this,Event.prototype,"Event","initEvent",arguments)}});
bodavm.toolsFunc.defineProperty(Event.prototype,"preventDefault",{configurable:true, enumerable:true, writable:true, value:function preventDefault() {return bodavm.toolsFunc.dispatch(this,Event.prototype,"Event","preventDefault",arguments)}});
bodavm.toolsFunc.defineProperty(Event.prototype,"stopImmediatePropagation",{configurable:true, enumerable:true, writable:true, value:function stopImmediatePropagation() {return bodavm.toolsFunc.dispatch(this,Event.prototype,"Event","stopImmediatePropagation",arguments)}});
bodavm.toolsFunc.defineProperty(Event.prototype,"stopPropagation",{configurable:true, enumerable:true, writable:true, value:function stopPropagation() {return bodavm.toolsFunc.dispatch(this,Event.prototype,"Event","stopPropagation",arguments)}});
bodavm.toolsFunc.defineProperty(Event.prototype,"path",{configurable:true, enumerable:true, get:function path () {return bodavm.toolsFunc.dispatch(this,Event.prototype,"Event","path_get",arguments)},set:undefined});
