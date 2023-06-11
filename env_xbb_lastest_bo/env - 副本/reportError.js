// reportError对象
reportError=()=>{
    console.log_copy(`使用 reportError arg->`,arguments)
}
bodavm.toolsFunc.safefunction(reportError, "reportError");

bodavm.toolsFunc.defineProperty(reportError, "length", {configurable:true, enumerable:false, writable:false, value:1});

bodavm.toolsFunc.defineProperty(reportError, "name", {configurable:true, enumerable:false, writable:false, value:'reportError'});

