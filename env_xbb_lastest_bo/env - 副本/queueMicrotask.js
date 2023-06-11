// queueMicrotask对象
queueMicrotask=()=>{
    console.log_copy(`使用 queueMicrotask arg->`,arguments)
}
bodavm.toolsFunc.safefunction(queueMicrotask, "queueMicrotask");

bodavm.toolsFunc.defineProperty(queueMicrotask, "length", {configurable:true, enumerable:false, writable:false, value:1});

bodavm.toolsFunc.defineProperty(queueMicrotask, "name", {configurable:true, enumerable:false, writable:false, value:'queueMicrotask'});

