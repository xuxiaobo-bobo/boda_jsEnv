// window=bodavm.toolsFunc.proxy(window,"window")

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
debugger;




