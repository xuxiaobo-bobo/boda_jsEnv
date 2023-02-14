// Window对象
Window = function Window(){
    if (arguments[0] !=='bobo'){
        return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor")
    }}
bodavm.toolsFunc.safeProto(Window, "Window");
Window.prototype.__proto__=WindowProperties.prototype;
Window.__proto__=EventTarget;
bodavm.toolsFunc.defineProperty(Window, "TEMPORARY", {configurable:false, enumerable:true, writable:false, value:0});
bodavm.toolsFunc.defineProperty(Window, "PERSISTENT", {configurable:false, enumerable:true, writable:false, value:1});
bodavm.toolsFunc.defineProperty(Window.prototype, "TEMPORARY", {configurable:false, enumerable:true, writable:false, value:0});
bodavm.toolsFunc.defineProperty(Window.prototype, "PERSISTENT", {configurable:false, enumerable:true, writable:false, value:1});

// self=window;
// window==self ; ///true
// window =new Proxy(window,{});
// window==self;//false
//需要连续赋值,可以过代理检测
// top=self=window=new Proxy(window,{})
