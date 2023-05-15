// XRReferenceSpace对象
bodavm.memory.globalobj['XRReferenceSpace'] = function XRReferenceSpace(){if (!(this instanceof XRReferenceSpace)){return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor")};this._boisinit=bodavm.config.isinit}
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['XRReferenceSpace'], "XRReferenceSpace");
bodavm.memory.globalobj['XRReferenceSpace'].prototype.__proto__=bodavm.memory.globalobj['XRSpace'].prototype;
bodavm.memory.globalobj['XRReferenceSpace'].__proto__=bodavm.memory.globalobj['XRSpace'];
bodavm.toolsFunc.defineProperty('XRReferenceSpace', "onreset", {configurable:true, enumerable:true, get:function onreset (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['XRReferenceSpace'].prototype, "XRReferenceSpace", "onreset_get", arguments)}, set:function onreset (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['XRReferenceSpace'].prototype, "XRReferenceSpace", "onreset_set", arguments)}},'prototype');
bodavm.toolsFunc.defineProperty('XRReferenceSpace', "getOffsetReferenceSpace", {configurable:true, enumerable:true, writable:true, value:function getOffsetReferenceSpace (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['XRReferenceSpace'].prototype, "XRReferenceSpace", "getOffsetReferenceSpace", arguments)}},'prototype');
