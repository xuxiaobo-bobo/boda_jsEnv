// CanvasCaptureMediaStreamTrack对象
bodavm.memory.globalobj['CanvasCaptureMediaStreamTrack'] = function CanvasCaptureMediaStreamTrack(){if (!(this instanceof CanvasCaptureMediaStreamTrack)){return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor")};this._boisinit=bodavm.config.isinit}
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['CanvasCaptureMediaStreamTrack'], "CanvasCaptureMediaStreamTrack");
bodavm.memory.globalobj['CanvasCaptureMediaStreamTrack'].prototype.__proto__=bodavm.memory.globalobj['MediaStreamTrack'].prototype;
bodavm.memory.globalobj['CanvasCaptureMediaStreamTrack'].__proto__=bodavm.memory.globalobj['MediaStreamTrack'];
bodavm.toolsFunc.defineProperty('CanvasCaptureMediaStreamTrack', "canvas", {configurable:true, enumerable:true, get:function canvas (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['CanvasCaptureMediaStreamTrack'].prototype, "CanvasCaptureMediaStreamTrack", "canvas_get", arguments)}, set:undefined},'prototype');
bodavm.toolsFunc.defineProperty('CanvasCaptureMediaStreamTrack', "requestFrame", {configurable:true, enumerable:true, writable:true, value:function requestFrame (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['CanvasCaptureMediaStreamTrack'].prototype, "CanvasCaptureMediaStreamTrack", "requestFrame", arguments)}},'prototype');
