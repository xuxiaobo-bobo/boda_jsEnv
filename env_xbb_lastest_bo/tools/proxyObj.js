// if (bodavm.config.proxy){
//     window22=bodavm.toolsFunc.proxy(window,"window")
    
// }

// Function=bodavm.toolsFunc.proxyObjHook(Function,'Function')
// const originalFuncProto = Function.prototype;

// const newFuncProto = bodavm.toolsFunc.proxyObjHook(originalFuncProto,'Function.prototype')

// Function.prototype = newFuncProto;

// Function=bodavm.toolsFunc.proxyObjHook(Function,'Function::proxyObjHook')
// bodavm.toolsFunc.safefunction(Function,'Function')

// String=bodavm.toolsFunc.proxyObjHook(String,'String::proxyObjHook')
// bodavm.toolsFunc.safefunction(String,'String')
// addEventListener=bodavm.toolsFunc.proxyObjHook(addEventListener,'addEventListener::proxyObjHook')
// bodavm.toolsFunc.safefunction(addEventListener,'addEventListener')

// String.prototype.toString=bodavm.toolsFunc.proxyObjHook(String.prototype.toString,'String.prototype.toString::proxyObjHook')
// decodeURIComponent=bodavm.toolsFunc.proxyObjHook(decodeURIComponent,'decodeURIComponent:proxyObjHook')
// bodavm.toolsFunc.safefunction(decodeURIComponent,'decodeURIComponent')

// encodeURIComponent=bodavm.toolsFunc.proxyObjHook(encodeURIComponent,'encodeURIComponent:proxyObjHook')
// bodavm.toolsFunc.safefunction(encodeURIComponent,'encodeURIComponent')

// Array=bodavm.toolsFunc.proxyObjHook(Array,'Array::proxyObjHook')
// bodavm.toolsFunc.safefunction(Array,'Array')

// Array.prototype.toString=bodavm.toolsFunc.proxyObjHook(Array.prototype.toString,'Array.prototype.toString::proxyObjHook')
// Uint8Array=bodavm.toolsFunc.proxyObjHook(Uint8Array,'Uint8Array::proxyObjHook')
// bodavm.toolsFunc.safefunction(Uint8Array,'Uint8Array')

// Uint8Array.prototype=bodavm.toolsFunc.proxyObjHook(Uint8Array.prototype,'TypedArray::proxyObjHook')
// RegExp=bodavm.toolsFunc.proxyObjHook(RegExp,'RegExp::proxyObjHook')
// bodavm.toolsFunc.safefunction(RegExp,'RegExp')

// CSS=bodavm.toolsFunc.proxy(CSS,"CSS");
// let newThi = {};
// var proxy=function (o){
//     return new Proxy(o,{
//         set(target,prop,value){
//             console.log('set',target,prop);
//             if (target.toString() == "[object Window]"){
//                 newThi[prop] = value
//                 return value;
//             }
//             return Reflect.set(...arguments)
//         },
//         get(target,prop,value){
//             // console.log('get',target,prop)
//             if (target.toString() == "[object Window]"){
//                 if (prop == "self"){
//                     return window;
//                 } // 是window都往下写
//                 return newThi[prop]
//             }
//             return Reflect.get(...arguments)
//         },
//         deleteProperty(target){
//             console.log('delete',target)
//             return false
//         }
//     })
// }
// let xtd;
// let xtd_isProxy = 1;
// Object.defineProperty(this,"window",{
//     "get":function window(){
//         if (xtd_isProxy){
//             xtd ? 1 : xtd = proxy(this); // 防止重复代理
//             return xtd;
//         }else{
//             return this;
//         }
//     },
//     configurable:false,
//     enumerable:true
// })

// debugger

// Object.getOwnPropertyDescriptor_ =Object.getOwnPropertyDescriptor;
// Object.getOwnPropertyDescriptor = function (a,b){  // 记得保护函数
//     if (a == window){
//         return {
//             'configurable': false,
//             'enumerable':false,
//             'value':undefined,
//             'writable':false
//         }
//     }else{
//         return Object.getOwnPropertyDescriptor_.apply(this,arguments);
//     }
// }
// performance=bodavm.toolsFunc.proxy(performance,'performance')
// Storage=bodavm.toolsFunc.proxy(Storage,Storage)
// database=bodavm.toolsFunc.proxy(database,'database')
// navigation=bodavm.toolsFunc.proxy(navigation,'navigation')
// webkitStorageInfo=bodavm.toolsFunc.proxy(webkitStorageInfo,'webkitStorageInfo')
// speechSynthesis=bodavm.toolsFunc.proxy(speechSynthesis,'speechSynthesis')
// localStorage=bodavm.toolsFunc.proxy(localStorage,"localStorage")
// sessionStorage=bodavm.toolsFunc.proxy(sessionStorage,"sessionStorage")
// location=bodavm.toolsFunc.proxy(location,"location")
// customElements=bodavm.toolsFunc.proxy(customElements,'customElements')
// clientInformation=bodavm.toolsFunc.proxy(clientInformation,'clientInformation')
// document=bodavm.toolsFunc.proxy(document,"document")
// menubar=bodavm.toolsFunc.proxy(menubar,'menubar')
// toolbar=bodavm.toolsFunc.proxy(toolbar,'toolbar')
// visualViewport=bodavm.toolsFunc.proxy(visualViewport,'visualViewport')
// history = bodavm.toolsFunc.proxy(history, "history")
// styleMedia=bodavm.toolsFunc.proxy(styleMedia,'styleMedia')
// screen = bodavm.toolsFunc.proxy(screen, "screen")
// navigator = bodavm.toolsFunc.proxy(navigator, "navigator")
// locationbar=bodavm.toolsFunc.proxy(locationbar,'locationbar')
// scheduler=bodavm.toolsFunc.proxy(scheduler,"scheduler")
// indexedDB=bodavm.toolsFunc.proxy(indexedDB,'indexedDB')
// trustedTypes=bodavm.toolsFunc.proxy(trustedTypes,'trustedTypes')
// cookieStore=bodavm.toolsFunc.proxy(cookieStore,'cookieStore')
// external=bodavm.toolsFunc.proxy(external,'external')
// caches=bodavm.toolsFunc.proxy(caches,'caches')







console.log(`===============================================================================================================`);
console.log(`===============================================================================================================`);
console.log(`===============================================================================================================`);
console.log(`===============================================================================================================`);
console.log(`======================================调         试        代          码======================================`);
console.log(`===============================================================================================================`);
console.log(`===============================================================================================================`);
console.log(`===============================================================================================================`);
console.log(`===============================================================================================================`);

///===================================================
///===================================================
///扣下的js代码运行
// delete SpeechSynthesis

// delete DeprecatedStorageInfo
// delete Database;
// debugger;




