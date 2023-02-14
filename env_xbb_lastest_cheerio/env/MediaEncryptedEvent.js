// MediaEncryptedEvent对象
MediaEncryptedEvent = function MediaEncryptedEvent(){return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'MediaEncryptedEvent': 1 argument required, but only 0 present.")}
bodavm.toolsFunc.safeProto(MediaEncryptedEvent, "MediaEncryptedEvent");
MediaEncryptedEvent.prototype.__proto__=Event.prototype;
MediaEncryptedEvent.__proto__=Event;
bodavm.toolsFunc.defineProperty(MediaEncryptedEvent.prototype, "initDataType", {configurable:true, enumerable:true, get:function initDataType (){return bodavm.toolsFunc.dispatch(this, MediaEncryptedEvent.prototype, "MediaEncryptedEvent", "initDataType_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(MediaEncryptedEvent.prototype, "initData", {configurable:true, enumerable:true, get:function initData (){return bodavm.toolsFunc.dispatch(this, MediaEncryptedEvent.prototype, "MediaEncryptedEvent", "initData_get", arguments)}, set:undefined});
