// File对象
File = function File(){let arg=arguments[0];
if (arg!='bobo' && !(this instanceof File) ){return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'File': 2 arguments required, but only 0 present.")};bodavm.toolsFunc.symbolProperty(this);
if (arg =='bobo'){console.log_copy('File 实例化对象 --->',JSON.stringify_bo(arguments,function(k,v){if (v==window){return 'window'}else{return v}}))};}

bodavm.toolsFunc.safeProto(File, "File");
File.prototype.__proto__=Blob.prototype;
File.__proto__=Blob;
bodavm.toolsFunc.defineProperty(File.prototype, "name", {configurable:true, enumerable:true, get:function bodefault (){return bodavm.toolsFunc.dispatch(this, File.prototype, "File", "bodefault_get", arguments)}, set:undefined},);
bodavm.toolsFunc.defineProperty(File.prototype, "lastModified", {configurable:true, enumerable:true, get:function bodefault (){return bodavm.toolsFunc.dispatch(this, File.prototype, "File", "bodefault_get", arguments)}, set:undefined},);
bodavm.toolsFunc.defineProperty(File.prototype, "lastModifiedDate", {configurable:true, enumerable:true, get:function bodefault (){return bodavm.toolsFunc.dispatch(this, File.prototype, "File", "bodefault_get", arguments)}, set:undefined},);
bodavm.toolsFunc.defineProperty(File.prototype, "webkitRelativePath", {configurable:true, enumerable:true, get:function bodefault (){return bodavm.toolsFunc.dispatch(this, File.prototype, "File", "bodefault_get", arguments)}, set:undefined},);
