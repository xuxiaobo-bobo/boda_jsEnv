// FileSystemFileHandle对象
bodavm.memory.globalobj['FileSystemFileHandle'] = function FileSystemFileHandle(){if (!(this instanceof FileSystemFileHandle)){return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor")};this._boisinit=bodavm.config.isinit}
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['FileSystemFileHandle'], "FileSystemFileHandle");
bodavm.memory.globalobj['FileSystemFileHandle'].prototype.__proto__=bodavm.memory.globalobj['FileSystemHandle'].prototype;
bodavm.memory.globalobj['FileSystemFileHandle'].__proto__=bodavm.memory.globalobj['FileSystemHandle'];
bodavm.toolsFunc.defineProperty('FileSystemFileHandle', "createWritable", {configurable:true, enumerable:true, writable:true, value:function createWritable (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['FileSystemFileHandle'].prototype, "FileSystemFileHandle", "createWritable", arguments)}},'prototype');
bodavm.toolsFunc.defineProperty('FileSystemFileHandle', "getFile", {configurable:true, enumerable:true, writable:true, value:function getFile (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['FileSystemFileHandle'].prototype, "FileSystemFileHandle", "getFile", arguments)}},'prototype');
bodavm.toolsFunc.defineProperty('FileSystemFileHandle', "move", {configurable:true, enumerable:true, writable:true, value:function move (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['FileSystemFileHandle'].prototype, "FileSystemFileHandle", "move", arguments)}},'prototype');
