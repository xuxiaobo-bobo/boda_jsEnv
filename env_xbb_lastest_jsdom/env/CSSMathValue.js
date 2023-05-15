// CSSMathValue对象
bodavm.memory.globalobj['CSSMathValue'] = function CSSMathValue(){if (!(this instanceof CSSMathValue)){return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor")};this._boisinit=bodavm.config.isinit}
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['CSSMathValue'], "CSSMathValue");
bodavm.memory.globalobj['CSSMathValue'].prototype.__proto__=bodavm.memory.globalobj['CSSNumericValue'].prototype;
bodavm.memory.globalobj['CSSMathValue'].__proto__=bodavm.memory.globalobj['CSSNumericValue'];
bodavm.toolsFunc.defineProperty('CSSMathValue', "operator", {configurable:true, enumerable:true, get:function operator (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['CSSMathValue'].prototype, "CSSMathValue", "operator_get", arguments)}, set:undefined},'prototype');
