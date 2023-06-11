// cancelAnimationFrame对象
cancelAnimationFrame=()=>{
    console.log_copy(`使用cancelAnimationFrame arg->`,arguments)
}
bodavm.toolsFunc.safefunction(cancelAnimationFrame, "cancelAnimationFrame");

bodavm.toolsFunc.defineProperty(cancelAnimationFrame, "length", {configurable:true, enumerable:false, writable:false, value:1});

bodavm.toolsFunc.defineProperty(cancelAnimationFrame, "name", {configurable:true, enumerable:false, writable:false, value:'cancelAnimationFrame'});

