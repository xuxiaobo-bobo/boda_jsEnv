// CSSUnitValue对象
bodavm.memory.globalobj['CSSUnitValue'] = function CSSUnitValue(){if (!(this instanceof CSSUnitValue)){return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'CSSUnitValue': 2 arguments required, but only 0 present.")};this._boisinit=bodavm.config.isinit}
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['CSSUnitValue'], "CSSUnitValue");
bodavm.memory.globalobj['CSSUnitValue'].prototype.__proto__=bodavm.memory.globalobj['CSSNumericValue'].prototype;
bodavm.memory.globalobj['CSSUnitValue'].__proto__=bodavm.memory.globalobj['CSSNumericValue'];
bodavm.toolsFunc.defineProperty('CSSUnitValue', "value", {configurable:true, enumerable:true, get:function value (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['CSSUnitValue'].prototype, "CSSUnitValue", "value_get", arguments)}, set:function value (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['CSSUnitValue'].prototype, "CSSUnitValue", "value_set", arguments)}},'prototype');
bodavm.toolsFunc.defineProperty('CSSUnitValue', "unit", {configurable:true, enumerable:true, get:function unit (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['CSSUnitValue'].prototype, "CSSUnitValue", "unit_get", arguments)}, set:undefined},'prototype');
