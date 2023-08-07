
// addEventListener  比settimeout先执行

let noexecListener={
    'unload':true,
    'popstate':true,
    'driver-evaluate':true,
    'webdriver-evaluate':true,
    'contextmenu':true,
    'selenium-evaluate':true,
    'error':true,
    "mouseEvent":true,
    "touchstart":true,
    "touchmove":true,
    // "deviceorientation":true
}
debugger

if (bodavm.memory.asyncEvent.listener && bodavm.memory.asyncEvent.listener['load'] )  delete bodavm.memory.asyncEvent.listener['load']  //load事件已经执行,这边可以直接删除
if (bodavm.memory.asyncEvent.listener) {
    bodavm.memory.listenerFlag='pending'
    // debugger
    for (var key in bodavm.memory.asyncEvent.listener) {
        let event = bodavm.memory.asyncEvent.listener[key]
        // debugger
            for (let i = 0; i < event.length; i++) {
                // debugger
                // let innerListener=[]
                if (!event[i]){
                    continue
                }
                if (noexecListener[event[i].type]){
                    console.log_copy(`开始执行浏览器事件==========`,`当前为事件类型为==>: ${event[i].type}  无需执行`);
                    continue
                }
                // debugger
                console.log_copy(`开始执行浏览器事件==========`,`当前为事件类型为==>: ${event[i].type} `);
                // try{
                    // if (event[i].type=='load'){
                window.dispatchEvent(event[i],'bobobo')
                if (bodavm.memory.innerListener.length>0){
                    for (let index = 0; index < bodavm.memory.innerListener.length; index++) {
                        // debugger
                         let eventInner=bodavm.memory.innerListener[index];
                         console.log_copy(`当前 ${event[i].type} 事件内部创建新的事件==========开始执行`,`当前为事件类型为==>: ${eventInner.type} `);
                         window.dispatchEvent(eventInner,'bobobo')

                    }
                
                }
                bodavm.memory.innerListener=[]
                    // }
                // }catch(e){
                //     console.log_copy(`浏览器事件执行失败==========`,`当前为事件类型为==>: ${event[i].type}`,`错误msg ->`,e.message);}
            }
    }
}

//执行事件内创建的新的事件  
// bodavm.memory.listenerDone=2
// if (bodavm.memory.asyncEvent.listener2) {
//     for (var key in bodavm.memory.asyncEvent.listener2) {
//         let event = bodavm.memory.asyncEvent.listener2[key]
//         // debugger
//             for (let i = 0; i < event.length; i++) {
//                 // debugger
//                 if (!event[i]){
//                     continue
//                 }
//                 if (noexecListener[event[i].type]){
//                     console.log_copy(`开始执行浏览器事件2==========`,`当前为事件类型为==>: ${event[i].type}  无需执行`);
//                     continue
//                 }
//                 console.log_copy(`开始执行浏览器事件2==========`,`当前为事件类型为==>: ${event[i].type} ==>`);
//                 // try{
//                 window.dispatchEvent(event[i],'bobobo')
//                 // }catch(e){
//                 //     console.log_copy(`浏览器事件执行失败==========`,`当前为事件类型为==>: ${event[i].type}`,`错误msg ->`,e.message);}
//             }
//     }
// }


// debugger
let setTimeEvent = bodavm.memory.asyncEvent.setTimeout
// debugger

console.log_copy(`开始执行定时器异步事件===>${JSON.stringify_bo(setTimeEvent)}`)

if (setTimeEvent && bodavm.config.settime_on) {
    setTimeEvent.sort((a, b) => {
        if (a.delay < b.delay) {
          return -1;
        } else if (a.delay > b.delay) {
          return 1;
        } else {
          if (a.timeoutID < b.timeoutID) {
            return -1;
          } else if (a.timeoutID > b.timeoutID) {
            return 1;
          } else {
            return 0;
          }
        }
      });
      
    for (let i = 0; i < setTimeEvent.length; i++) {
        let event = setTimeEvent[i]
        // debugger
        if (event == undefined) { continue }
        console.log_copy(`定时器异步回调执行======>${JSON.stringify(event)}   callback:${event.callback+''.length>50?event.callback+''.substring(0,50):event.callback+''}`);
        try{
            if (event.type) {
                // debugger
                event.callback()
            } else {
                eval(event.callback)
            }
        }catch (e){
            console.log_copy(`定时器异步回调执行失败======>${JSON.stringify(event)}   callback:${event.callback+''.length>50?event.callback+''.substring(0,50):event.callback+''}`);
            console.log_copy(`定时器异步回调执行失败msg======>`,e.message);
            console.log_copy(`定时器异步回调执行失败stack======>`,e.stack);

        }

    }
}
