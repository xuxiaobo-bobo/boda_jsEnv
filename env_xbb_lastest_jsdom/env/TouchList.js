// TouchList对象
bodavm.memory.globalobj['TouchList'] = function TouchList(){if (!(this instanceof TouchList)){return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor")};this._boisinit=bodavm.config.isinit}
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['TouchList'], "TouchList");
bodavm.toolsFunc.defineProperty('TouchList', "length", {configurable:true, enumerable:true, get:function length (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['TouchList'].prototype, "TouchList", "length_get", arguments)}, set:undefined},'prototype');
bodavm.toolsFunc.defineProperty('TouchList', "item", {configurable:true, enumerable:true, writable:true, value:function item (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['TouchList'].prototype, "TouchList", "item", arguments)}},'prototype');
