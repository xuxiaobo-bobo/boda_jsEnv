//改文件下的代码 只能在windows电脑下运行
bodavm.envFunc.Document_all_get = function Document_all_get() {
    debugger
    bodavm.memory.all = []
    let a = boallundefined
    tags = bodaobj.document.getElementsByTagName("*")
    a.__proto__ = bodavm.memory.globalobj['HTMLAllCollection'].prototype
    if (bodavm.memory.rs6 && bodavm.memory.rs6_body == 0) {
        // let num = 0
        for (let i = 0; i < tags.length - 5; i++) {
            // bodavm.memory.all[num] = 
            a[i] = bodavm.toolsFunc.setProto(tags[i].nodeName)
            a[i]._boarg=tags[i]
            bodavm.memory.all.push(a[i])
        
            // num++

        }
    } 
    // else if (bodavm.memory.rs6 && bodavm.memory.rs6_body) {
    //     for (let i = 0; i < tags.length - 2; i++) {
    //         a[i] = bodavm.toolsFunc.setProto(tags[i].nodeName)
    //         a[i]._boarg=tags[i]
    //         bodavm.memory.all.push(a[i])
    //         // num++

    //     }
    // }


    else {
        for (let i = 0; i < tags.length; i++) {
            // bodavm.memory.all[i2] = tags[i2];
            a[i] = bodavm.toolsFunc.setProto(tags[i].nodeName)
            a[i]._boarg=tags[i]
            bodavm.memory.all.push(a[i])
        }

        // let arg=arguments[0]
        // debugger
        // if (arg){
        //     res=a[arg]
        //     console.log(`Document_all_get ->`,`arg :${arg} `,`res -> ${res}`)
        //     return res
    }


    // debugger
    a._boarg = true
    a.__proto__[Symbol.iterator] = Array.prototype[Symbol.iterator];
    console.log("Document_all_get  ", `all ->${a}`)
    return a
}



// ldvm.toolsFunc.deleteProperty(alert,"arguments"); // 强行删除
// ldvm.toolsFunc.deleteProperty(alert,"caller");
// ldvm.toolsFunc.deleteProperty(alert,"prototype");
// debugger