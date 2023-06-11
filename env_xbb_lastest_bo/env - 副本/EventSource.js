// EventSource对象

EventSource = function EventSource(){let arg=arguments[0];

if (arg!='bobo' && !(this instanceof EventSource) ){return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'EventSource': 1 argument required, but only 0 present.")};bodavm.toolsFunc.symbolProperty(this);

if (arg =='bobo'){console.log_copy('EventSource 实例化对象 --->',JSON.stringify_bo(arguments,function(k,v){if (v==window){return 'window'}else{return v}}))};}


bodavm.toolsFunc.safeProto(EventSource, "EventSource");

EventSource.prototype.__proto__=EventTarget.prototype;

EventSource.__proto__=EventTarget;

bodavm.toolsFunc.defineProperty(EventSource, "CONNECTING", {configurable:false, enumerable:true, writable:false, value:0});

bodavm.toolsFunc.defineProperty(EventSource, "OPEN", {configurable:false, enumerable:true, writable:false, value:1});

bodavm.toolsFunc.defineProperty(EventSource, "CLOSED", {configurable:false, enumerable:true, writable:false, value:2});

bodavm.toolsFunc.defineProperty(EventSource.prototype, "url", {configurable:true, enumerable:true, get:function bodefault (){return bodavm.toolsFunc.dispatch(this, EventSource.prototype, "EventSource", "bodefault_get", arguments)}, set:undefined},);

bodavm.toolsFunc.defineProperty(EventSource.prototype, "withCredentials", {configurable:true, enumerable:true, get:function bodefault (){return bodavm.toolsFunc.dispatch(this, EventSource.prototype, "EventSource", "bodefault_get", arguments)}, set:undefined},);

bodavm.toolsFunc.defineProperty(EventSource.prototype, "readyState", {configurable:true, enumerable:true, get:function bodefault (){return bodavm.toolsFunc.dispatch(this, EventSource.prototype, "EventSource", "bodefault_get", arguments)}, set:undefined},);

bodavm.toolsFunc.defineProperty(EventSource.prototype, "onopen", {configurable:true, enumerable:true, get:function bodefault (){return bodavm.toolsFunc.dispatch(this, EventSource.prototype, "EventSource", "bodefault_get", arguments)}, set:function bodefault (){return bodavm.toolsFunc.dispatch(this, EventSource.prototype, "EventSource", "bodefault_set", arguments)}},);

bodavm.toolsFunc.defineProperty(EventSource.prototype, "onmessage", {configurable:true, enumerable:true, get:function bodefault (){return bodavm.toolsFunc.dispatch(this, EventSource.prototype, "EventSource", "bodefault_get", arguments)}, set:function bodefault (){return bodavm.toolsFunc.dispatch(this, EventSource.prototype, "EventSource", "bodefault_set", arguments)}},);

bodavm.toolsFunc.defineProperty(EventSource.prototype, "onerror", {configurable:true, enumerable:true, get:function bodefault (){return bodavm.toolsFunc.dispatch(this, EventSource.prototype, "EventSource", "bodefault_get", arguments)}, set:function bodefault (){return bodavm.toolsFunc.dispatch(this, EventSource.prototype, "EventSource", "bodefault_set", arguments)}},);

bodavm.toolsFunc.defineProperty(EventSource.prototype, "CONNECTING", {configurable:false, enumerable:true, writable:false, value:0},);

bodavm.toolsFunc.defineProperty(EventSource.prototype, "OPEN", {configurable:false, enumerable:true, writable:false, value:1},);

bodavm.toolsFunc.defineProperty(EventSource.prototype, "CLOSED", {configurable:false, enumerable:true, writable:false, value:2},);

bodavm.toolsFunc.defineProperty(EventSource.prototype, "close", {configurable:true, enumerable:true, writable:true, value:function close (){return bodavm.toolsFunc.dispatch(this, EventSource.prototype, "EventSource", "close", arguments)}},);

