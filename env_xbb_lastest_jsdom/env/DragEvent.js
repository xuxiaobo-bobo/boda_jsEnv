// DragEvent对象
bodavm.memory.globalobj['DragEvent'] = function DragEvent(){if (!(this instanceof DragEvent)){return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'DragEvent': 1 argument required, but only 0 present.")};this._boisinit=bodavm.config.isinit}
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['DragEvent'], "DragEvent");
bodavm.memory.globalobj['DragEvent'].prototype.__proto__=bodavm.memory.globalobj['MouseEvent'].prototype;
bodavm.memory.globalobj['DragEvent'].__proto__=bodavm.memory.globalobj['MouseEvent'];
bodavm.toolsFunc.defineProperty('DragEvent', "dataTransfer", {configurable:true, enumerable:true, get:function dataTransfer (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['DragEvent'].prototype, "DragEvent", "dataTransfer_get", arguments)}, set:undefined},'prototype');
