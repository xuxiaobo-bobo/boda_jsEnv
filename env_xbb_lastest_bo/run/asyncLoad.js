//异步;;;
// 宏队列，macrotask,也叫tasks.一些异步任务的回调会依次进入 macro task queue，等待后渎被调用，这些异步任务包括：

// setTimeout
// setInterval
// setImmediate(Node独有)
// requestAnimationFrame(浏览器独有)
// I/O
// UI rendering(浏览器独有)


// 微队列，microtask,也叫jobs。另一些异步任务的回调会依次进入micro task queue,等待后渎被调用，这些异步任务包括：
// process.nextTick(Node独有)
// Promise
// Object.observe
// MutationObserver
//先执行微任务,在执行宏任务


//html的onload未实现
// onload:[{self:'',callback:''}]
let HTMLElement_promise=bodavm.memory.asyncEvent['HTMLElement']['onload']
console.log_copy(`开始执行HtmlElement====> onload事件=============>`,);
for (let  eleIndex= 0;  eleIndex< HTMLElement_promise.length; eleIndex++) {
    event=HTMLElement_promise[eleIndex]
    debugger
    let self=event['self']
    let callbk=event['callback']
    console.log_copy(`开始执行HtmlElement load 事件==========`,`当前为事件元素为==>: ${self} `,` ==> callback =>`,callbk);
    callbk.call(self)
}
// debugger
// addEventListener  比settimeout先执行
// // debugger

//setTimeout



if (bodavm.memory.asyncEvent.listener){
    // debugger
    console.log_copy(`开始执行addlistener ====> load事件=============>`,);
    let loadEvent = bodavm.memory.asyncEvent.listener['load']
    if (loadEvent){
        for (let i = 0; i < loadEvent.length; i++) {
            // debugge
            // debugger
            console.log_copy(`开始执行浏览器 load 事件==========`,`当前为事件类型为==>: ${loadEvent[i].type} `);
            window.dispatchEvent(loadEvent[i],'bobobo')

        }
    }
    console.log_copy(`执行结束addlistener ====> load事件=============>`,);

}

console.log_copy(`开始执行 window.onload 事件====> load事件=============>`,);
if(window.onload){
    window.onload()
    console.log_copy(`执行结束 window.onload 事件====> load事件=============>`,);

}else{
    console.log_copy(`执行结束 window.onload 事件====> load事件=============>`,);

}




debugger


// 鼠标事件最后执行,模仿网站加载完成后再移动鼠标触发事件
// //鼠标轨迹,获取实际网站的
// let mouseEvent = [

//     {
//         "clientX": 154,
//         "clientY": 514,
//         "timeStamp": 14198.5,
//         "type": "mousemove"
//     },
//     {
//         "clientX": 154,
//         "clientY": 513,
//         "timeStamp": 14203.700000001118,
//         "type": "mousemove"
//     },
//     {
//         "clientX": 154,
//         "clientY": 511,
//         "timeStamp": 14211.5,
//         "type": "mousemove"
//     },
//     {
//         "clientX": 154,
//         "clientY": 508,
//         "timeStamp": 14219.700000001118,
//         "type": "mousemove"
//     },
//     {
//         "clientX": 155,
//         "clientY": 506,
//         "timeStamp": 14227.5,
//         "type": "mousemove"
//     },
//     {
//         "clientX": 157,
//         "clientY": 503,
//         "timeStamp": 14236,
//         "type": "mousemove"
//     },
//     {
//         "clientX": 158,
//         "clientY": 498,
//         "timeStamp": 14243.599999999627,
//         "type": "mousemove"
//     },
//     {
//         "clientX": 160,
//         "clientY": 495,
//         "timeStamp": 14251.900000000373,
//         "type": "mousemove"
//     },
//     {
//         "clientX": 162,
//         "clientY": 492,
//         "timeStamp": 14260.300000000745,
//         "type": "mousemove"
//     },
//     {
//         "clientX": 162,
//         "clientY": 490,
//         "timeStamp": 14268.700000001118,
//         "type": "mousemove"
//     },
//     {
//         "clientX": 164,
//         "clientY": 487,
//         "timeStamp": 14276,
//         "type": "mousemove"
//     },
//     {
//         "clientX": 165,
//         "clientY": 486,
//         "timeStamp": 14283.599999999627,
//         "type": "mousemove"
//     },
//     {
//         "clientX": 165,
//         "clientY": 485,
//         "timeStamp": 14292.099999999627,
//         "type": "mousemove"
//     },
//     {
//         "clientX": 166,
//         "clientY": 485,
//         "timeStamp": 14299.599999999627,
//         "type": "mousemove"
//     },
//     {
//         "clientX": 166,
//         "clientY": 484,
//         "timeStamp": 14308,
//         "type": "mousemove"
//     },
//     {
//         "clientX": 166,
//         "clientY": 484,
//         "timeStamp": 14497.900000000373,
//         "type": "mousedown"
//     },
//     {
//         "clientX": 166,
//         "clientY": 484,
//         "timeStamp": 14506.800000000745,
//         "type": "mousemove"
//     },
//     {
//         "clientX": 166,
//         "clientY": 484,
//         "timeStamp": 14515.800000000745,
//         "type": "mousemove"
//     },
//     {
//         "clientX": 166,
//         "clientY": 484,
//         "timeStamp": 14555.800000000745,
//         "type": "mouseup"
//     }
// ];


// debugger

