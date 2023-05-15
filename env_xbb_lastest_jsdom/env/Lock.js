// Lock对象
bodavm.memory.globalobj['Lock'] = function Lock(){if (!(this instanceof Lock)){return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor")};this._boisinit=bodavm.config.isinit}
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['Lock'], "Lock");
bodavm.toolsFunc.defineProperty('Lock', "name", {configurable:true, enumerable:true, get:function name (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Lock'].prototype, "Lock", "name_get", arguments)}, set:undefined},'prototype');
bodavm.toolsFunc.defineProperty('Lock', "mode", {configurable:true, enumerable:true, get:function mode (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Lock'].prototype, "Lock", "mode_get", arguments)}, set:undefined},'prototype');
