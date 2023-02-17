// EventTarget对象
bodavm.memory.globalobj['EventTarget'] = function EventTarget(){}
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['EventTarget'], "EventTarget");
bodavm.toolsFunc.defineProperty('EventTarget', "addEventListener", {configurable:true, enumerable:true, writable:true, value:function addEventListener (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['EventTarget'].prototype, "EventTarget", "addEventListener", arguments)}},'prototype');
bodavm.toolsFunc.defineProperty('EventTarget', "dispatchEvent", {configurable:true, enumerable:true, writable:true, value:function dispatchEvent (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['EventTarget'].prototype, "EventTarget", "dispatchEvent", arguments)}},'prototype');
bodavm.toolsFunc.defineProperty('EventTarget', "removeEventListener", {configurable:true, enumerable:true, writable:true, value:function removeEventListener (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['EventTarget'].prototype, "EventTarget", "removeEventListener", arguments)}},'prototype');
