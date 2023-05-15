// BarProp对象
bodavm.memory.globalobj['BarProp'] = function BarProp(){if (!(this instanceof BarProp)){return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor")};this._boisinit=bodavm.config.isinit}
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['BarProp'], "BarProp");
bodavm.toolsFunc.defineProperty('BarProp', "visible", {configurable:true, enumerable:true, get:function visible (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['BarProp'].prototype, "BarProp", "visible_get", arguments)}, set:undefined},'prototype');
