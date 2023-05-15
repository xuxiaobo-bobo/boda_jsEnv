// XRPose对象
bodavm.memory.globalobj['XRPose'] = function XRPose(){if (!(this instanceof XRPose)){return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor")};this._boisinit=bodavm.config.isinit}
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['XRPose'], "XRPose");
bodavm.toolsFunc.defineProperty('XRPose', "transform", {configurable:true, enumerable:true, get:function transform (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['XRPose'].prototype, "XRPose", "transform_get", arguments)}, set:undefined},'prototype');
bodavm.toolsFunc.defineProperty('XRPose', "emulatedPosition", {configurable:true, enumerable:true, get:function emulatedPosition (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['XRPose'].prototype, "XRPose", "emulatedPosition_get", arguments)}, set:undefined},'prototype');
