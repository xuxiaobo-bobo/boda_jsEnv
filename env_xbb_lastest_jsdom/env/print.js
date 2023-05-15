// print对象
bodavm.memory.globalobj['print'] = {
    _boisinit:bodavm.config.isinit
    }
bodavm.toolsFunc.defineProperty('print', "length", {configurable:true, enumerable:false, writable:false, value:0});
bodavm.toolsFunc.defineProperty('print', "name", {configurable:true, enumerable:false, writable:false, value:"print"});
