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
debugger
if(window.onload){
    window.onload()
    console.log_copy(`执行结束 window.onload 事件====> load事件=============>`,);

}else{
    console.log_copy(`执行结束 window.onload 事件====> load事件=============>`,);

}




debugger




if (bodavm.memory.waitExec.length) {
    // debugger
    for (let index = 0; index < bodavm.memory.waitExec.length; index++) {
      let _scriptElement = bodavm.memory.waitExec[index];
      let _scriptCode = bodaParseScript(_scriptElement)
      eval(_scriptCode)

    }

    bodavm.memory.waitExec = []
  }
