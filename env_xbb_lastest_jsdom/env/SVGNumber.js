// SVGNumber对象
bodavm.memory.globalobj['SVGNumber'] = function SVGNumber(){if (!(this instanceof SVGNumber)){return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor")};this._boisinit=bodavm.config.isinit}
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['SVGNumber'], "SVGNumber");
bodavm.toolsFunc.defineProperty('SVGNumber', "value", {configurable:true, enumerable:true, get:function value (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGNumber'].prototype, "SVGNumber", "value_get", arguments)}, set:function value (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGNumber'].prototype, "SVGNumber", "value_set", arguments)}},'prototype');
