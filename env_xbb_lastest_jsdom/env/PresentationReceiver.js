// PresentationReceiver对象
bodavm.memory.globalobj['PresentationReceiver'] = function PresentationReceiver(){if (!(this instanceof PresentationReceiver)){return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor")};this._boisinit=bodavm.config.isinit}
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['PresentationReceiver'], "PresentationReceiver");
bodavm.toolsFunc.defineProperty('PresentationReceiver', "connectionList", {configurable:true, enumerable:true, get:function connectionList (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['PresentationReceiver'].prototype, "PresentationReceiver", "connectionList_get", arguments)}, set:undefined},'prototype');
