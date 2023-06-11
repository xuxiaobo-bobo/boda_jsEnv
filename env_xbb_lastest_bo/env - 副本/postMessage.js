// postMessage对象
postMessage=()=>{
    console.log_copy(`使用 postMessage arg->`,arguments)
}
bodavm.toolsFunc.safefunction(postMessage, "postMessage");

bodavm.toolsFunc.defineProperty(postMessage, "length", {configurable:true, enumerable:false, writable:false, value:1});

bodavm.toolsFunc.defineProperty(postMessage, "name", {configurable:true, enumerable:false, writable:false, value:'postMessage'});

