// MediaKeyMessageEvent对象
bodavm.memory.globalobj['MediaKeyMessageEvent'] = function MediaKeyMessageEvent(){if (!(this instanceof MediaKeyMessageEvent)){return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'MediaKeyMessageEvent': 2 arguments required, but only 0 present.")};this._boisinit=bodavm.config.isinit}
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['MediaKeyMessageEvent'], "MediaKeyMessageEvent");
bodavm.memory.globalobj['MediaKeyMessageEvent'].prototype.__proto__=bodavm.memory.globalobj['Event'].prototype;
bodavm.memory.globalobj['MediaKeyMessageEvent'].__proto__=bodavm.memory.globalobj['Event'];
bodavm.toolsFunc.defineProperty('MediaKeyMessageEvent', "messageType", {configurable:true, enumerable:true, get:function messageType (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MediaKeyMessageEvent'].prototype, "MediaKeyMessageEvent", "messageType_get", arguments)}, set:undefined},'prototype');
bodavm.toolsFunc.defineProperty('MediaKeyMessageEvent', "message", {configurable:true, enumerable:true, get:function message (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MediaKeyMessageEvent'].prototype, "MediaKeyMessageEvent", "message_get", arguments)}, set:undefined},'prototype');
