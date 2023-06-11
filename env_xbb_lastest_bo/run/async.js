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
let HTMLElement_promise=bodavm.memory.asyncEvent['HTMLElement']
for (const key in HTMLElement_promise) {
    let leng_=HTMLElement_promise[key].length
    for (let i = 0; i < leng_; i++) {
        console.log(`HTMLElement_promise异步事件执行`,`type:${HTMLElement_promise[key]}`,`func:${HTMLElement_promise[key][i]}`);
        HTMLElement_promise[key][i]()

    }
    
}
// debugger
// addEventListener  比settimeout先执行
// // debugger

//setTimeout



// addEventListener  比settimeout先执行
if (bodavm.memory.asyncEvent.listener) {
    for (const key in bodavm.memory.asyncEvent.listener) {
        let event = bodavm.memory.asyncEvent.listener[key]
            for (let i = 0; i < event.length; i++) {
                // debugger
                console.log(`开始执行浏览器事件==========`,`当前为事件类型为==>: ${event[i].type}`);
                window.dispatchEvent(event[i])

            }
        

    }
}

let setTimeEvent = bodavm.memory.asyncEvent.setTimeout
console.log(`当前setTimeEvent有===>${JSON.stringify(setTimeEvent)}`)
if (setTimeEvent) {
    setTimeEvent.sort((a, b) => {
        return a.delay > b.delay ? 1 : -1;
    })
    for (let i = 0; i < setTimeEvent.length; i++) {
        let event = setTimeEvent[i]
        if (event == undefined) { continue }
        console.log(`异步回调执行settime=======================================>${JSON.stringify(event)}   callback:${event.callback}`);
        if (event.type) {
            event.callback()
        } else {
            eval(event.callback)
        }
    }
}

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


// // debugger
// if (bodavm.memory.asyncEvent.listener) {
//     for (let i = 0; i < mouseEvent.length; i++) {
//         let event = mouseEvent[i];
//         let type = event.type;
//         let mouseEventObj = {
//             "isTrusted": true
//         };
//         mouseEventObj = Object.setPrototypeOf(mouseEventObj, MouseEvent.prototype);
//         bodavm.toolsFunc.setProtoAttr.call(mouseEventObj, "clientX", event.clientX);
//         bodavm.toolsFunc.setProtoAttr.call(mouseEventObj, "clientY", event.clientY);
//         bodavm.toolsFunc.setProtoAttr.call(mouseEventObj, "timeStamp", event.timeStamp);
//         bodavm.toolsFunc.setProtoAttr.call(mouseEventObj, "type", event.type);
//         //bodavm.toolsFunc.setProtoAttr.call(mouseEventObj, "pagex", event.type);
//         let listenerList = bodavm.memory.asyncEvent.listener[type];
//         //debugger;
//         console.log(`listenerList====>`, listenerList)

//         if(listenerList ==undefined){debugger;continue}
//         for (let j = 0; j < listenerList.length; j++) {
//             let callBack = listenerList[j].listener;
//             let self = listenerList[j].self;
//             console.log(`执行异步回调second=======>`, `self:${self}  mouseEventObj:${mouseEventObj}`);
//             callBack.call(self, mouseEventObj);

//         }

//     }
// }


