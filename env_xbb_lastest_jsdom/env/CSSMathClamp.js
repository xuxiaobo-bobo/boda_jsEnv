// CSSMathClamp对象
bodavm.memory.globalobj['CSSMathClamp'] = function CSSMathClamp(){if (!(this instanceof CSSMathClamp)){return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'CSSMathClamp': 3 arguments required, but only 0 present.")};this._boisinit=bodavm.config.isinit}
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['CSSMathClamp'], "CSSMathClamp");
bodavm.memory.globalobj['CSSMathClamp'].prototype.__proto__=bodavm.memory.globalobj['CSSMathValue'].prototype;
bodavm.memory.globalobj['CSSMathClamp'].__proto__=bodavm.memory.globalobj['CSSMathValue'];
bodavm.toolsFunc.defineProperty('CSSMathClamp', "lower", {configurable:true, enumerable:true, get:function lower (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['CSSMathClamp'].prototype, "CSSMathClamp", "lower_get", arguments)}, set:undefined},'prototype');
bodavm.toolsFunc.defineProperty('CSSMathClamp', "value", {configurable:true, enumerable:true, get:function value (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['CSSMathClamp'].prototype, "CSSMathClamp", "value_get", arguments)}, set:undefined},'prototype');
bodavm.toolsFunc.defineProperty('CSSMathClamp', "upper", {configurable:true, enumerable:true, get:function upper (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['CSSMathClamp'].prototype, "CSSMathClamp", "upper_get", arguments)}, set:undefined},'prototype');
