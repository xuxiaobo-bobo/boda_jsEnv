//改文件下的代码 只能在windows电脑下运行
bodavm.envFunc.Document_all_get = function Document_all_get() {
    debugger
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
    else {
        if (tags.length !=bodavm.memory.all.length){
            bodavm.memory.all=[]
            for (let i = 0; i < tags.length; i++) {
            
                // bodavm.memory.all[i2] = tags[i2];
                a[i] = bodavm.toolsFunc.setProto(tags[i].nodeName)
                a[i]._boarg=tags[i]
                bodavm.memory.all.push(a[i])
            }
        }else{
            console.log(`Document_all_get ->`,`长度未变化直接返回 bodavm.memory.all`);
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


//document.all[0]==document.all.item(0)存在问题  已解决
// ldvm.toolsFunc.deleteProperty(alert,"arguments"); // 强行删除
// ldvm.toolsFunc.deleteProperty(alert,"caller");
// ldvm.toolsFunc.deleteProperty(alert,"prototype");
// debugger

//未解决
// var cc=navigator.plugins[0]
// cc[0]==cc[0]