
//document.all 下面变量回收

// debugger
bodaEnv.memory.islastDeal=true
bodaEnv.memory.asyncEvent={
    onload:[],
    onerror:[],
    onselectstart:[],
    onclick:[],
    listener:[],
    setTimeout:[]

}
bodaEnv.memory.scriptNodeNeedReads=[]


bodaEnv.memory.SetTimeOutDelay10=[]
bodaEnv.memory.WeakMap=new WeakMap()
bodaEnv.memory.ObjWeakMapProtoAttr=new WeakMap()


bodadominoWindow.document=null
bodadominoWindow.location=null
bodaEnv.memory.lastWindowProp=bodaEnv.toolsFunc.getOwnPropertyNames_bo(window)
for (let lastind=0;lastind<bodaEnv.memory.lastWindowProp.length;lastind++){
    if (bodaEnv.memory.allwindowProp.indexOf(bodaEnv.memory.lastWindowProp[lastind])==-1){
        // debugger
        delete window[bodaEnv.memory.lastWindowProp[lastind]]
        // console.log(window[bodaEnv.memory.lastWindowProp[lastind]])
    }


}
// debugger
bodaEnv.toolsFunc.console_copy('删除window 新增属性完成',)

bodaEnv.memory.lastWindowProp=null


// debugger


for (let _timeLength=0;_timeLength<bodaEnv.memory.asyncEvent.setTimeout.length;_timeLength++){
    bodaEnv.memory.asyncEvent.setTimeout[_timeLength]=null
}
bodaEnv.memory.asyncEvent.setTimeout=[]

// debugger
// config.js 回收

bodaEnv.memory.documentCollection={}  //存放document.getelementbytagname
// bodaEnv.memory.ElementCollectionMap.clear() //存放Element.getelementbytagname
bodaEnv.memory.childrenCollectionMap.clear() ///存放Element.children
bodaEnv.memory.classListMap.clear()   //存放classList
bodaEnv.memory.nodeListMap.clear()   //存放classList

bodaEnv.memory.RTCPeerConnection=[]
bodaEnv.memory.scroll=[0,0]
bodaEnv.memory.all=[]
bodaEnv.memory.IDBRequest={}
bodaEnv.memory.IDBOpenDBRequest={}
bodaEnv.memory.evnent=null
bodaEnv.memory.jsonCookie = {};// json格式的cookie
bodaEnv.memory.symbolData=Symbol('data')
bodaEnv.memory.WeakMap=new WeakMap()
bodaEnv.memory.window['onload']=null
bodaEnv.memory.timeoutID =0
bodaEnv.memory.asyncEvent={


    MessageChannel:{
        onmessage:[]
    },
    setTimeout:[],
}
bodaEnv.memory.asyncEvent['listener']={
    'focus':[],
    'mousemove':[],
    'mousedown':[],
    'mouseup':[],
    'load':[],
    'deviceorientation':[],
    'onmousedown':[],
    'onselectstart':[],
    'onload':[],
    'onclick':[],
    'onerror':[],
    'message':[],
    'click':[],
    'input':[],
    'focusout':[],
    'focusin':[],
    'onaudioprocess':[],
    'error':[],
    'onselectionchange':[],
    'onresize':[],
    'onmouseenter':[],
    'onmousemove':[]


}
bodaEnv.memory.asyncEvent['websocket']={
    'onmessage':[]
}
for (let _allele of bodaEnv.memory.domDocument.all){
    _allele=null
}
bodaEnv.memory.domDocument.all = []
for (let _domele in bodaEnv.memory.domDocument){
    for (let _inele of _domele){
        _inele=null
    }
    _domele=null
}


bodaEnv.memory.readScriptList=[]
bodaEnv.memory.domDocument = {}
bodaEnv.memory.domDocument = null
bodaEnv.memory.tempDocument=null
bodaEnv.memory.tempLocation=null
bodaEnv.memory.boWindowNum=null
documentProto=null
// bodaEnv.toolsFunc.setProtoAttr.call(bodaEnv.memory.tempDocument.documentElement,bodaEnv.memory.tempDocument.documentElement,documentProto) 
bodaEnv.memory.bodaCurrentElement=null;  //当前运行的script标签是哪一个    过document.currxxxscript 检测
bodaEnv.memory.currentFile=null
// debugger
bodaEnv.memory.iframe = {
    "contentWindow":[],
    "contentDocument": {
        'this': '',
        'res': ''
    },
    "thisWindow": {
        "this": [],
        // "res":''
    }
}  //存放iframe相关



// listenData 回收
bodaEnv.memory.currentEee=null
bodaEnv.memory.mouseMoveData=null
bodaEnv.memory.deviceorientationData=null
bodaEnv.memory.mouseDownData=null
bodaEnv.memory.focusData=null
bodaEnv.memory.mouseUpData=null
bodaEnv.memory.focusoutData =null
bodaEnv.memory.inputData =null
bodaEnv.memory.clickData =null
// debugger
bodaTraverse=null

bodadominoWindow=null
bodaconifg_=null
bodaExecEle=null
bodaParseScript=null
bodaEnv.memory.documentProto=null
// console.log('当前已经完成 !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!')
return bodaEnv.memory.last_value