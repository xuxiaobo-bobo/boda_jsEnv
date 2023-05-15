// CSSTransition对象
bodavm.memory.globalobj['CSSTransition'] = function CSSTransition(){if (!(this instanceof CSSTransition)){return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor")};this._boisinit=bodavm.config.isinit}
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['CSSTransition'], "CSSTransition");
bodavm.memory.globalobj['CSSTransition'].prototype.__proto__=bodavm.memory.globalobj['Animation'].prototype;
bodavm.memory.globalobj['CSSTransition'].__proto__=bodavm.memory.globalobj['Animation'];
bodavm.toolsFunc.defineProperty('CSSTransition', "transitionProperty", {configurable:true, enumerable:true, get:function transitionProperty (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['CSSTransition'].prototype, "CSSTransition", "transitionProperty_get", arguments)}, set:undefined},'prototype');
