// XRCamera对象
bodavm.memory.globalobj['XRCamera'] = function XRCamera(){if (!(this instanceof XRCamera)){return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor")};this._boisinit=bodavm.config.isinit}
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['XRCamera'], "XRCamera");
bodavm.toolsFunc.defineProperty('XRCamera', "width", {configurable:true, enumerable:true, get:function width (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['XRCamera'].prototype, "XRCamera", "width_get", arguments)}, set:undefined},'prototype');
bodavm.toolsFunc.defineProperty('XRCamera', "height", {configurable:true, enumerable:true, get:function height (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['XRCamera'].prototype, "XRCamera", "height_get", arguments)}, set:undefined},'prototype');
