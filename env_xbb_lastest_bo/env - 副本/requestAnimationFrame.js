// requestAnimationFrame对象
requestAnimationFrame=()=>{
    console.log_copy(`使用 requestAnimationFrame arg->`,arguments)
}
bodavm.toolsFunc.safefunction(requestAnimationFrame, "requestAnimationFrame");

bodavm.toolsFunc.defineProperty(requestAnimationFrame, "length", {configurable:true, enumerable:false, writable:false, value:1});

bodavm.toolsFunc.defineProperty(requestAnimationFrame, "name", {configurable:true, enumerable:false, writable:false, value:'requestAnimationFrame'});

