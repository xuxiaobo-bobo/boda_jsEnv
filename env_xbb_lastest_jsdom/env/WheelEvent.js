// WheelEvent对象
bodavm.memory.globalobj['WheelEvent'] = function WheelEvent(){if (!(this instanceof WheelEvent)){return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'WheelEvent': 1 argument required, but only 0 present.")};this._boisinit=bodavm.config.isinit}
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['WheelEvent'], "WheelEvent");
bodavm.memory.globalobj['WheelEvent'].prototype.__proto__=bodavm.memory.globalobj['MouseEvent'].prototype;
bodavm.memory.globalobj['WheelEvent'].__proto__=bodavm.memory.globalobj['MouseEvent'];
bodavm.toolsFunc.defineProperty('WheelEvent', "DOM_DELTA_PIXEL", {configurable:false, enumerable:true, writable:false, value:0});
bodavm.toolsFunc.defineProperty('WheelEvent', "DOM_DELTA_LINE", {configurable:false, enumerable:true, writable:false, value:1});
bodavm.toolsFunc.defineProperty('WheelEvent', "DOM_DELTA_PAGE", {configurable:false, enumerable:true, writable:false, value:2});
bodavm.toolsFunc.defineProperty('WheelEvent', "deltaX", {configurable:true, enumerable:true, get:function deltaX (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['WheelEvent'].prototype, "WheelEvent", "deltaX_get", arguments)}, set:undefined},'prototype');
bodavm.toolsFunc.defineProperty('WheelEvent', "deltaY", {configurable:true, enumerable:true, get:function deltaY (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['WheelEvent'].prototype, "WheelEvent", "deltaY_get", arguments)}, set:undefined},'prototype');
bodavm.toolsFunc.defineProperty('WheelEvent', "deltaZ", {configurable:true, enumerable:true, get:function deltaZ (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['WheelEvent'].prototype, "WheelEvent", "deltaZ_get", arguments)}, set:undefined},'prototype');
bodavm.toolsFunc.defineProperty('WheelEvent', "deltaMode", {configurable:true, enumerable:true, get:function deltaMode (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['WheelEvent'].prototype, "WheelEvent", "deltaMode_get", arguments)}, set:undefined},'prototype');
bodavm.toolsFunc.defineProperty('WheelEvent', "wheelDeltaX", {configurable:true, enumerable:true, get:function wheelDeltaX (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['WheelEvent'].prototype, "WheelEvent", "wheelDeltaX_get", arguments)}, set:undefined},'prototype');
bodavm.toolsFunc.defineProperty('WheelEvent', "wheelDeltaY", {configurable:true, enumerable:true, get:function wheelDeltaY (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['WheelEvent'].prototype, "WheelEvent", "wheelDeltaY_get", arguments)}, set:undefined},'prototype');
bodavm.toolsFunc.defineProperty('WheelEvent', "wheelDelta", {configurable:true, enumerable:true, get:function wheelDelta (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['WheelEvent'].prototype, "WheelEvent", "wheelDelta_get", arguments)}, set:undefined},'prototype');
bodavm.toolsFunc.defineProperty('WheelEvent', "DOM_DELTA_PIXEL", {configurable:false, enumerable:true, writable:false, value:0},'prototype');
bodavm.toolsFunc.defineProperty('WheelEvent', "DOM_DELTA_LINE", {configurable:false, enumerable:true, writable:false, value:1},'prototype');
bodavm.toolsFunc.defineProperty('WheelEvent', "DOM_DELTA_PAGE", {configurable:false, enumerable:true, writable:false, value:2},'prototype');
