// DOMParser对象
bodavm.memory.globalobj['DOMParser'] = function DOMParser(){}
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['DOMParser'], "DOMParser");
bodavm.toolsFunc.defineProperty('DOMParser', "parseFromString", {configurable:true, enumerable:true, writable:true, value:function parseFromString (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['DOMParser'].prototype, "DOMParser", "parseFromString", arguments)}},'prototype');
