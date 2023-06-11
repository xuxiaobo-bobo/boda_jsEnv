// requestIdleCallback对象
requestIdleCallback=()=>{
    console.log_copy(`使用 requestIdleCallback arg->`,arguments)
}
bodavm.toolsFunc.safefunction(requestIdleCallback, "requestIdleCallback");
bodavm.toolsFunc.defineProperty(requestIdleCallback, "length", {configurable:true, enumerable:false, writable:false, value:1});

bodavm.toolsFunc.defineProperty(requestIdleCallback, "name", {configurable:true, enumerable:false, writable:false, value:'requestIdleCallback'});

