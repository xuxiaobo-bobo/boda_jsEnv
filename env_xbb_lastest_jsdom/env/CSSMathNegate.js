// CSSMathNegate对象
bodavm.memory.globalobj['CSSMathNegate'] = function CSSMathNegate(){if (!(this instanceof CSSMathNegate)){return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'CSSMathNegate': 1 argument required, but only 0 present.")};this._boisinit=bodavm.config.isinit}
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['CSSMathNegate'], "CSSMathNegate");
bodavm.memory.globalobj['CSSMathNegate'].prototype.__proto__=bodavm.memory.globalobj['CSSMathValue'].prototype;
bodavm.memory.globalobj['CSSMathNegate'].__proto__=bodavm.memory.globalobj['CSSMathValue'];
bodavm.toolsFunc.defineProperty('CSSMathNegate', "value", {configurable:true, enumerable:true, get:function value (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['CSSMathNegate'].prototype, "CSSMathNegate", "value_get", arguments)}, set:undefined},'prototype');
