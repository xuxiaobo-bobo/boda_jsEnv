// NavigateEvent对象
NavigateEvent = function NavigateEvent(){let arg=arguments[0];
if (arg!='bobo' && !(this instanceof NavigateEvent) ){return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'NavigateEvent': 2 arguments required, but only 0 present.")};bodavm.toolsFunc.symbolProperty(this);
if (arg =='bobo'){console.log_copy('NavigateEvent 实例化对象 --->',JSON.stringify_bo(arguments,function(k,v){if (v==window){return 'window'}else{return v}}))};}

bodavm.toolsFunc.safeProto(NavigateEvent, "NavigateEvent");
NavigateEvent.prototype.__proto__=Event.prototype;
NavigateEvent.__proto__=Event;
bodavm.toolsFunc.defineProperty(NavigateEvent.prototype, "navigationType", {configurable:true, enumerable:true, get:function bodefault (){return bodavm.toolsFunc.dispatch(this, NavigateEvent.prototype, "NavigateEvent", "bodefault_get", arguments)}, set:undefined},);
bodavm.toolsFunc.defineProperty(NavigateEvent.prototype, "destination", {configurable:true, enumerable:true, get:function bodefault (){return bodavm.toolsFunc.dispatch(this, NavigateEvent.prototype, "NavigateEvent", "bodefault_get", arguments)}, set:undefined},);
bodavm.toolsFunc.defineProperty(NavigateEvent.prototype, "canTransition", {configurable:true, enumerable:true, get:function bodefault (){return bodavm.toolsFunc.dispatch(this, NavigateEvent.prototype, "NavigateEvent", "bodefault_get", arguments)}, set:undefined},);
bodavm.toolsFunc.defineProperty(NavigateEvent.prototype, "canIntercept", {configurable:true, enumerable:true, get:function bodefault (){return bodavm.toolsFunc.dispatch(this, NavigateEvent.prototype, "NavigateEvent", "bodefault_get", arguments)}, set:undefined},);
bodavm.toolsFunc.defineProperty(NavigateEvent.prototype, "userInitiated", {configurable:true, enumerable:true, get:function bodefault (){return bodavm.toolsFunc.dispatch(this, NavigateEvent.prototype, "NavigateEvent", "bodefault_get", arguments)}, set:undefined},);
bodavm.toolsFunc.defineProperty(NavigateEvent.prototype, "hashChange", {configurable:true, enumerable:true, get:function bodefault (){return bodavm.toolsFunc.dispatch(this, NavigateEvent.prototype, "NavigateEvent", "bodefault_get", arguments)}, set:undefined},);
bodavm.toolsFunc.defineProperty(NavigateEvent.prototype, "signal", {configurable:true, enumerable:true, get:function bodefault (){return bodavm.toolsFunc.dispatch(this, NavigateEvent.prototype, "NavigateEvent", "bodefault_get", arguments)}, set:undefined},);
bodavm.toolsFunc.defineProperty(NavigateEvent.prototype, "formData", {configurable:true, enumerable:true, get:function bodefault (){return bodavm.toolsFunc.dispatch(this, NavigateEvent.prototype, "NavigateEvent", "bodefault_get", arguments)}, set:undefined},);
bodavm.toolsFunc.defineProperty(NavigateEvent.prototype, "downloadRequest", {configurable:true, enumerable:true, get:function bodefault (){return bodavm.toolsFunc.dispatch(this, NavigateEvent.prototype, "NavigateEvent", "bodefault_get", arguments)}, set:undefined},);
bodavm.toolsFunc.defineProperty(NavigateEvent.prototype, "info", {configurable:true, enumerable:true, get:function bodefault (){return bodavm.toolsFunc.dispatch(this, NavigateEvent.prototype, "NavigateEvent", "bodefault_get", arguments)}, set:undefined},);
bodavm.toolsFunc.defineProperty(NavigateEvent.prototype, "intercept", {configurable:true, enumerable:true, writable:true, value:function intercept (){return bodavm.toolsFunc.dispatch(this, NavigateEvent.prototype, "NavigateEvent", "intercept", arguments)}},);
bodavm.toolsFunc.defineProperty(NavigateEvent.prototype, "scroll", {configurable:true, enumerable:true, writable:true, value:function scroll (){return bodavm.toolsFunc.dispatch(this, NavigateEvent.prototype, "NavigateEvent", "scroll", arguments)}},);
