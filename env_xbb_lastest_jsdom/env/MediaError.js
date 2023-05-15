// MediaError对象
bodavm.memory.globalobj['MediaError'] = function MediaError(){if (!(this instanceof MediaError)){return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor")};this._boisinit=bodavm.config.isinit}
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['MediaError'], "MediaError");
bodavm.toolsFunc.defineProperty('MediaError', "MEDIA_ERR_ABORTED", {configurable:false, enumerable:true, writable:false, value:1});
bodavm.toolsFunc.defineProperty('MediaError', "MEDIA_ERR_NETWORK", {configurable:false, enumerable:true, writable:false, value:2});
bodavm.toolsFunc.defineProperty('MediaError', "MEDIA_ERR_DECODE", {configurable:false, enumerable:true, writable:false, value:3});
bodavm.toolsFunc.defineProperty('MediaError', "MEDIA_ERR_SRC_NOT_SUPPORTED", {configurable:false, enumerable:true, writable:false, value:4});
bodavm.toolsFunc.defineProperty('MediaError', "code", {configurable:true, enumerable:true, get:function code (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MediaError'].prototype, "MediaError", "code_get", arguments)}, set:undefined},'prototype');
bodavm.toolsFunc.defineProperty('MediaError', "message", {configurable:true, enumerable:true, get:function message (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MediaError'].prototype, "MediaError", "message_get", arguments)}, set:undefined},'prototype');
bodavm.toolsFunc.defineProperty('MediaError', "MEDIA_ERR_ABORTED", {configurable:false, enumerable:true, writable:false, value:1},'prototype');
bodavm.toolsFunc.defineProperty('MediaError', "MEDIA_ERR_NETWORK", {configurable:false, enumerable:true, writable:false, value:2},'prototype');
bodavm.toolsFunc.defineProperty('MediaError', "MEDIA_ERR_DECODE", {configurable:false, enumerable:true, writable:false, value:3},'prototype');
bodavm.toolsFunc.defineProperty('MediaError', "MEDIA_ERR_SRC_NOT_SUPPORTED", {configurable:false, enumerable:true, writable:false, value:4},'prototype');
