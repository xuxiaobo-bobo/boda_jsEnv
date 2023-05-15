// XRWebGLDepthInformation对象
bodavm.memory.globalobj['XRWebGLDepthInformation'] = function XRWebGLDepthInformation(){if (!(this instanceof XRWebGLDepthInformation)){return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor")};this._boisinit=bodavm.config.isinit}
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['XRWebGLDepthInformation'], "XRWebGLDepthInformation");
bodavm.memory.globalobj['XRWebGLDepthInformation'].prototype.__proto__=bodavm.memory.globalobj['XRDepthInformation'].prototype;
bodavm.memory.globalobj['XRWebGLDepthInformation'].__proto__=bodavm.memory.globalobj['XRDepthInformation'];
bodavm.toolsFunc.defineProperty('XRWebGLDepthInformation', "texture", {configurable:true, enumerable:true, get:function texture (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['XRWebGLDepthInformation'].prototype, "XRWebGLDepthInformation", "texture_get", arguments)}, set:undefined},'prototype');
