// GPUShaderModule对象
GPUShaderModule = function GPUShaderModule(){let arg=arguments[0];
if (arg!='bobo' && !(this instanceof GPUShaderModule) ){return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor")};bodavm.toolsFunc.symbolProperty(this);
if (arg =='bobo'){console.log_copy('GPUShaderModule 实例化对象 --->',JSON.stringify_bo(arguments,function(k,v){if (v==window){return 'window'}else{return v}}))};}

bodavm.toolsFunc.safeProto(GPUShaderModule, "GPUShaderModule");
bodavm.toolsFunc.defineProperty(GPUShaderModule.prototype, "label", {configurable:true, enumerable:true, get:function bodefault (){return bodavm.toolsFunc.dispatch(this, GPUShaderModule.prototype, "GPUShaderModule", "bodefault_get", arguments)}, set:function bodefault (){return bodavm.toolsFunc.dispatch(this, GPUShaderModule.prototype, "GPUShaderModule", "bodefault_set", arguments)}},);
bodavm.toolsFunc.defineProperty(GPUShaderModule.prototype, "getCompilationInfo", {configurable:true, enumerable:true, writable:true, value:function getCompilationInfo (){return bodavm.toolsFunc.dispatch(this, GPUShaderModule.prototype, "GPUShaderModule", "getCompilationInfo", arguments)}},);
