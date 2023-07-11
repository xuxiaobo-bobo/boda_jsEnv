//改文件下的代码 只能在windows电脑下运行
bodavm.envFunc.Document_all_get = function Document_all_get() {
    // debugger
    let a = boallundefined
    
    // debugger
    let tags=[]
    for (let dom of bodavm.memory.domDocument['all']) {
            let newNode=bodavm.toolsFunc.setProto(dom.name)
            bodavm.toolsFunc.setProtoAttr.call(newNode,newNode,dom)
            tags.push(newNode)
    }

    // debugger
    a.__proto__ = HTMLAllCollection.prototype

    if (tags.length !=bodavm.memory.all.length){
        bodavm.memory.all=[]
        for (let i = 0; i < tags.length; i++) {
            a[i]=tags[i]
            bodavm.memory.all[i]=tags[i]
        }
    }

    a.__proto__[Symbol.iterator] = Array.prototype[Symbol.iterator];
    console.log("Document_all_get  ", `all ->`,a)
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