// CropTarget对象
bodavm.memory.globalobj['CropTarget'] = function CropTarget(){if (!(this instanceof CropTarget)){return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor")};this._boisinit=bodavm.config.isinit}
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['CropTarget'], "CropTarget");
bodavm.toolsFunc.defineProperty('CropTarget', "fromElement", {configurable:true, enumerable:true, writable:true, value:function fromElement (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['CropTarget'].undefined, "CropTarget", "fromElement", arguments)}});
