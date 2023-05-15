// File对象
bodavm.memory.globalobj['File'] = function File(){if (!(this instanceof File)){return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'File': 2 arguments required, but only 0 present.")};this._boisinit=bodavm.config.isinit}
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['File'], "File");
bodavm.memory.globalobj['File'].prototype.__proto__=bodavm.memory.globalobj['Blob'].prototype;
bodavm.memory.globalobj['File'].__proto__=bodavm.memory.globalobj['Blob'];
bodavm.toolsFunc.defineProperty('File', "name", {configurable:true, enumerable:true, get:function name (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['File'].prototype, "File", "name_get", arguments)}, set:undefined},'prototype');
bodavm.toolsFunc.defineProperty('File', "lastModified", {configurable:true, enumerable:true, get:function lastModified (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['File'].prototype, "File", "lastModified_get", arguments)}, set:undefined},'prototype');
bodavm.toolsFunc.defineProperty('File', "lastModifiedDate", {configurable:true, enumerable:true, get:function lastModifiedDate (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['File'].prototype, "File", "lastModifiedDate_get", arguments)}, set:undefined},'prototype');
bodavm.toolsFunc.defineProperty('File', "webkitRelativePath", {configurable:true, enumerable:true, get:function webkitRelativePath (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['File'].prototype, "File", "webkitRelativePath_get", arguments)}, set:undefined},'prototype');
