// CSSContainerRule对象
bodavm.memory.globalobj['CSSContainerRule'] = function CSSContainerRule(){if (!(this instanceof CSSContainerRule)){return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor")};this._boisinit=bodavm.config.isinit}
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['CSSContainerRule'], "CSSContainerRule");
bodavm.memory.globalobj['CSSContainerRule'].prototype.__proto__=bodavm.memory.globalobj['CSSConditionRule'].prototype;
bodavm.memory.globalobj['CSSContainerRule'].__proto__=bodavm.memory.globalobj['CSSConditionRule'];
bodavm.toolsFunc.defineProperty('CSSContainerRule', "containerName", {configurable:true, enumerable:true, get:function containerName (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['CSSContainerRule'].prototype, "CSSContainerRule", "containerName_get", arguments)}, set:undefined},'prototype');
bodavm.toolsFunc.defineProperty('CSSContainerRule', "containerQuery", {configurable:true, enumerable:true, get:function containerQuery (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['CSSContainerRule'].prototype, "CSSContainerRule", "containerQuery_get", arguments)}, set:undefined},'prototype');
