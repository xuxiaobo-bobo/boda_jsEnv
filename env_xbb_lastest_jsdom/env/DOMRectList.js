// DOMRectList对象
bodavm.memory.globalobj['DOMRectList'] = function DOMRectList(){if (!(this instanceof DOMRectList)){return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor")};this._boisinit=bodavm.config.isinit}
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['DOMRectList'], "DOMRectList");
bodavm.toolsFunc.defineProperty('DOMRectList', "length", {configurable:true, enumerable:true, get:function length (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['DOMRectList'].prototype, "DOMRectList", "length_get", arguments)}, set:undefined},'prototype');
bodavm.toolsFunc.defineProperty('DOMRectList', "item", {configurable:true, enumerable:true, writable:true, value:function item (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['DOMRectList'].prototype, "DOMRectList", "item", arguments)}},'prototype');
