// CSSStyleValue对象
bodavm.memory.globalobj['CSSStyleValue'] = function CSSStyleValue(){if (!(this instanceof CSSStyleValue)){return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor")};this._boisinit=bodavm.config.isinit}
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['CSSStyleValue'], "CSSStyleValue");
bodavm.toolsFunc.defineProperty('CSSStyleValue', "parse", {configurable:true, enumerable:true, writable:true, value:function parse (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['CSSStyleValue'].undefined, "CSSStyleValue", "parse", arguments)}});
bodavm.toolsFunc.defineProperty('CSSStyleValue', "parseAll", {configurable:true, enumerable:true, writable:true, value:function parseAll (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['CSSStyleValue'].undefined, "CSSStyleValue", "parseAll", arguments)}});
bodavm.toolsFunc.defineProperty('CSSStyleValue', "toString", {configurable:true, enumerable:true, writable:true, value:function toString (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['CSSStyleValue'].prototype, "CSSStyleValue", "toString", arguments)}},'prototype');
