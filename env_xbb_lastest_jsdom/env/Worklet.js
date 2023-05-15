// Worklet对象
bodavm.memory.globalobj['Worklet'] = function Worklet(){if (!(this instanceof Worklet)){return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor")};this._boisinit=bodavm.config.isinit}
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['Worklet'], "Worklet");
bodavm.toolsFunc.defineProperty('Worklet', "addModule", {configurable:true, enumerable:true, writable:true, value:function addModule (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Worklet'].prototype, "Worklet", "addModule", arguments)}},'prototype');
