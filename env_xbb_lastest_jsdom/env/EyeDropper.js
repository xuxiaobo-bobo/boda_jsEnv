// EyeDropper对象
bodavm.memory.globalobj['EyeDropper'] = function EyeDropper(){this._boarg= new bodaobj.window.EyeDropper();this._boisinit=bodavm.config.isinit}
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['EyeDropper'], "EyeDropper");
bodavm.toolsFunc.defineProperty('EyeDropper', "open", {configurable:true, enumerable:true, writable:true, value:function open (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['EyeDropper'].prototype, "EyeDropper", "open", arguments)}},'prototype');
