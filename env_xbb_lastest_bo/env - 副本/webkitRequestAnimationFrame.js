// webkitRequestAnimationFrame对象
webkitRequestAnimationFrame=()=>{
    console.log_copy(`webkitRequestAnimationFrame 使用arg->`,arguments)
}
bodavm.toolsFunc.safefunction(webkitRequestAnimationFrame, "webkitRequestAnimationFrame");
bodavm.toolsFunc.defineProperty(webkitRequestAnimationFrame, "length", {configurable:true, enumerable:false, writable:false, value:1});

bodavm.toolsFunc.defineProperty(webkitRequestAnimationFrame, "name", {configurable:true, enumerable:false, writable:false, value:'webkitRequestAnimationFrame'});

