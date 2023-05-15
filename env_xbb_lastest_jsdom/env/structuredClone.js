// structuredClone对象
bodavm.memory.globalobj['structuredClone'] = {
    _boisinit:bodavm.config.isinit
    }
bodavm.toolsFunc.defineProperty('structuredClone', "length", {configurable:true, enumerable:false, writable:false, value:1});
bodavm.toolsFunc.defineProperty('structuredClone', "name", {configurable:true, enumerable:false, writable:false, value:"structuredClone"});
