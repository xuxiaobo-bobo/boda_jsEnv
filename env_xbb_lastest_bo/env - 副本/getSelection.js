// getSelection对象
getSelection=()=>{
    console.log(`使用 getSelection arg->`,arguments)
}
bodavm.toolsFunc.safefunction(getSelection, "getSelection");

bodavm.toolsFunc.defineProperty(getSelection, "length", {configurable:true, enumerable:false, writable:false, value:0});

bodavm.toolsFunc.defineProperty(getSelection, "name", {configurable:true, enumerable:false, writable:false, value:'getSelection'});

