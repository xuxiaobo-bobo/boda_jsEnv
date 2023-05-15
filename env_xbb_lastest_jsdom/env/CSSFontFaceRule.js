// CSSFontFaceRule对象
bodavm.memory.globalobj['CSSFontFaceRule'] = function CSSFontFaceRule(){if (!(this instanceof CSSFontFaceRule)){return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor")};this._boisinit=bodavm.config.isinit}
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['CSSFontFaceRule'], "CSSFontFaceRule");
bodavm.memory.globalobj['CSSFontFaceRule'].prototype.__proto__=bodavm.memory.globalobj['CSSRule'].prototype;
bodavm.memory.globalobj['CSSFontFaceRule'].__proto__=bodavm.memory.globalobj['CSSRule'];
bodavm.toolsFunc.defineProperty('CSSFontFaceRule', "style", {configurable:true, enumerable:true, get:function style (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['CSSFontFaceRule'].prototype, "CSSFontFaceRule", "style_get", arguments)}, set:undefined},'prototype');
