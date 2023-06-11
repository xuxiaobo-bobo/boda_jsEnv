// webkitCancelAnimationFrame对象
webkitCancelAnimationFrame=()=>{
    console.log_copy(`webkitCancelAnimationFrame 使用arg->`,arguments)
}
bodavm.toolsFunc.safefunction(webkitCancelAnimationFrame, "webkitCancelAnimationFrame");

bodavm.toolsFunc.defineProperty(webkitCancelAnimationFrame, "length", {configurable:true, enumerable:false, writable:false, value:1});

bodavm.toolsFunc.defineProperty(webkitCancelAnimationFrame, "name", {configurable:true, enumerable:false, writable:false, value:'webkitCancelAnimationFrame'});

