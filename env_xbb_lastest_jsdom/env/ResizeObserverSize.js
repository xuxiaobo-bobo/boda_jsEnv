// ResizeObserverSize对象
bodavm.memory.globalobj['ResizeObserverSize'] = function ResizeObserverSize(){if (!(this instanceof ResizeObserverSize)){return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor")};this._boisinit=bodavm.config.isinit}
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['ResizeObserverSize'], "ResizeObserverSize");
bodavm.toolsFunc.defineProperty('ResizeObserverSize', "inlineSize", {configurable:true, enumerable:true, get:function inlineSize (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['ResizeObserverSize'].prototype, "ResizeObserverSize", "inlineSize_get", arguments)}, set:undefined},'prototype');
bodavm.toolsFunc.defineProperty('ResizeObserverSize', "blockSize", {configurable:true, enumerable:true, get:function blockSize (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['ResizeObserverSize'].prototype, "ResizeObserverSize", "blockSize_get", arguments)}, set:undefined},'prototype');
