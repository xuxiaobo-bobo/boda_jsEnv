// XRHitTestResult对象
bodavm.memory.globalobj['XRHitTestResult'] = function XRHitTestResult(){if (!(this instanceof XRHitTestResult)){return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor")};this._boisinit=bodavm.config.isinit}
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['XRHitTestResult'], "XRHitTestResult");
bodavm.toolsFunc.defineProperty('XRHitTestResult', "getPose", {configurable:true, enumerable:true, writable:true, value:function getPose (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['XRHitTestResult'].prototype, "XRHitTestResult", "getPose", arguments)}},'prototype');
bodavm.toolsFunc.defineProperty('XRHitTestResult', "createAnchor", {configurable:true, enumerable:true, writable:true, value:function createAnchor (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['XRHitTestResult'].prototype, "XRHitTestResult", "createAnchor", arguments)}},'prototype');
