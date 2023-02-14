//EventTarget对象
EventTarget=function EventTarget(){}
bodavm.toolsFunc.safeProto(EventTarget,"EventTarget");
bodavm.toolsFunc.defineProperty(EventTarget.prototype,"addEventListener",{configurable:true, enumerable:true, writable:true, value:function () {return bodavm.toolsFunc.dispatch(this,EventTarget.prototype,"EventTarget","addEventListener",arguments)}});
bodavm.toolsFunc.defineProperty(EventTarget.prototype,"dispatchEvent",{configurable:true, enumerable:true, writable:true, value:function () {return bodavm.toolsFunc.dispatch(this,EventTarget.prototype,"EventTarget","dispatchEvent",arguments)}});
bodavm.toolsFunc.defineProperty(EventTarget.prototype,"removeEventListener",{configurable:true, enumerable:true, writable:true, value:function () {return bodavm.toolsFunc.dispatch(this,EventTarget.prototype,"EventTarget","removeEventListener",arguments)}});
