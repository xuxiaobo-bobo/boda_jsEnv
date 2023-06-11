// MediaKeySession对象
MediaKeySession = function MediaKeySession(){let arg=arguments[0];
if (arg!='bobo' && !(this instanceof MediaKeySession) ){return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor")};bodavm.toolsFunc.symbolProperty(this);
if (arg =='bobo'){console.log_copy('MediaKeySession 实例化对象 --->',JSON.stringify_bo(arguments,function(k,v){if (v==window){return 'window'}else{return v}}))};}

bodavm.toolsFunc.safeProto(MediaKeySession, "MediaKeySession");
MediaKeySession.prototype.__proto__=EventTarget.prototype;
MediaKeySession.__proto__=EventTarget;
bodavm.toolsFunc.defineProperty(MediaKeySession.prototype, "sessionId", {configurable:true, enumerable:true, get:function bodefault (){return bodavm.toolsFunc.dispatch(this, MediaKeySession.prototype, "MediaKeySession", "bodefault_get", arguments)}, set:undefined},);
bodavm.toolsFunc.defineProperty(MediaKeySession.prototype, "expiration", {configurable:true, enumerable:true, get:function bodefault (){return bodavm.toolsFunc.dispatch(this, MediaKeySession.prototype, "MediaKeySession", "bodefault_get", arguments)}, set:undefined},);
bodavm.toolsFunc.defineProperty(MediaKeySession.prototype, "closed", {configurable:true, enumerable:true, get:function bodefault (){return bodavm.toolsFunc.dispatch(this, MediaKeySession.prototype, "MediaKeySession", "bodefault_get", arguments)}, set:undefined},);
bodavm.toolsFunc.defineProperty(MediaKeySession.prototype, "keyStatuses", {configurable:true, enumerable:true, get:function bodefault (){return bodavm.toolsFunc.dispatch(this, MediaKeySession.prototype, "MediaKeySession", "bodefault_get", arguments)}, set:undefined},);
bodavm.toolsFunc.defineProperty(MediaKeySession.prototype, "onkeystatuseschange", {configurable:true, enumerable:true, get:function bodefault (){return bodavm.toolsFunc.dispatch(this, MediaKeySession.prototype, "MediaKeySession", "bodefault_get", arguments)}, set:function bodefault (){return bodavm.toolsFunc.dispatch(this, MediaKeySession.prototype, "MediaKeySession", "bodefault_set", arguments)}},);
bodavm.toolsFunc.defineProperty(MediaKeySession.prototype, "onmessage", {configurable:true, enumerable:true, get:function bodefault (){return bodavm.toolsFunc.dispatch(this, MediaKeySession.prototype, "MediaKeySession", "bodefault_get", arguments)}, set:function bodefault (){return bodavm.toolsFunc.dispatch(this, MediaKeySession.prototype, "MediaKeySession", "bodefault_set", arguments)}},);
bodavm.toolsFunc.defineProperty(MediaKeySession.prototype, "close", {configurable:true, enumerable:true, writable:true, value:function close (){return bodavm.toolsFunc.dispatch(this, MediaKeySession.prototype, "MediaKeySession", "close", arguments)}},);
bodavm.toolsFunc.defineProperty(MediaKeySession.prototype, "generateRequest", {configurable:true, enumerable:true, writable:true, value:function generateRequest (){return bodavm.toolsFunc.dispatch(this, MediaKeySession.prototype, "MediaKeySession", "generateRequest", arguments)}},);
bodavm.toolsFunc.defineProperty(MediaKeySession.prototype, "load", {configurable:true, enumerable:true, writable:true, value:function load (){return bodavm.toolsFunc.dispatch(this, MediaKeySession.prototype, "MediaKeySession", "load", arguments)}},);
bodavm.toolsFunc.defineProperty(MediaKeySession.prototype, "remove", {configurable:true, enumerable:true, writable:true, value:function remove (){return bodavm.toolsFunc.dispatch(this, MediaKeySession.prototype, "MediaKeySession", "remove", arguments)}},);
bodavm.toolsFunc.defineProperty(MediaKeySession.prototype, "update", {configurable:true, enumerable:true, writable:true, value:function update (){return bodavm.toolsFunc.dispatch(this, MediaKeySession.prototype, "MediaKeySession", "update", arguments)}},);
