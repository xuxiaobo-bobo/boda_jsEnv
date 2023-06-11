// cancelIdleCallback对象
cancelIdleCallback=()=>{
    console.log_copy(`cancelIdleCallback arg->`,arguments)
}
bodavm.toolsFunc.safefunction(cancelIdleCallback, "cancelIdleCallback");

bodavm.toolsFunc.defineProperty(cancelIdleCallback, "length", {configurable:true, enumerable:false, writable:false, value:1});

bodavm.toolsFunc.defineProperty(cancelIdleCallback, "name", {configurable:true, enumerable:false, writable:false, value:'cancelIdleCallback'});

