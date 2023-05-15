// XRLightProbe对象
bodavm.memory.globalobj['XRLightProbe'] = function XRLightProbe(){if (!(this instanceof XRLightProbe)){return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor")};this._boisinit=bodavm.config.isinit}
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['XRLightProbe'], "XRLightProbe");
bodavm.memory.globalobj['XRLightProbe'].prototype.__proto__=bodavm.memory.globalobj['EventTarget'].prototype;
bodavm.memory.globalobj['XRLightProbe'].__proto__=bodavm.memory.globalobj['EventTarget'];
bodavm.toolsFunc.defineProperty('XRLightProbe', "probeSpace", {configurable:true, enumerable:true, get:function probeSpace (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['XRLightProbe'].prototype, "XRLightProbe", "probeSpace_get", arguments)}, set:undefined},'prototype');
bodavm.toolsFunc.defineProperty('XRLightProbe', "onreflectionchange", {configurable:true, enumerable:true, get:function onreflectionchange (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['XRLightProbe'].prototype, "XRLightProbe", "onreflectionchange_get", arguments)}, set:function onreflectionchange (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['XRLightProbe'].prototype, "XRLightProbe", "onreflectionchange_set", arguments)}},'prototype');
