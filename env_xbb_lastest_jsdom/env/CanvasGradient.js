// CanvasGradient对象
bodavm.memory.globalobj['CanvasGradient'] = function CanvasGradient(){if (!(this instanceof CanvasGradient)){return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor")};this._boisinit=bodavm.config.isinit}
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['CanvasGradient'], "CanvasGradient");
bodavm.toolsFunc.defineProperty('CanvasGradient', "addColorStop", {configurable:true, enumerable:true, writable:true, value:function addColorStop (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['CanvasGradient'].prototype, "CanvasGradient", "addColorStop", arguments)}},'prototype');
