let boMouseMove = new MouseEvent('mousemove', 'bobo')
boMouseMove = bodavm.toolsFunc.proxy2(boMouseMove, 'mousemove')
bodavm.memory.listenerProxy['mousemove']['res'] = boMouseMove

let boMouseUp = new MouseEvent('mouseup', 'bobo')
mousemove_ = bodavm.toolsFunc.proxy2(boMouseUp, 'mouseup')
bodavm.memory.listenerProxy['mouseup']['res'] = boMouseUp

let bomouseDown=new MouseEvent('mousedown','bobo')
bomouseDown = bodavm.toolsFunc.proxy2(bomouseDown, 'bomouseDown')
bodavm.memory.listenerProxy['mousedown']['res'] = bomouseDown

let bomouseUp=new MouseEvent('mouseup','bobo')
bomouseUp = bodavm.toolsFunc.proxy2(bomouseUp, 'bomouseUp')
bodavm.memory.listenerProxy['mouseup']['res'] = bomouseUp

let boClick = new PointerEvent('click', 'bobo')
boClick = bodavm.toolsFunc.proxy2(boClick, 'click')
bodavm.memory.listenerProxy['click']['res'] = boClick

let loadEvent = new Event('load', 'bobo')
loadEvent = bodavm.toolsFunc.proxy2(loadEvent, 'load')
bodavm.memory.listenerProxy['load']['res'] = loadEvent

let boreadystatechange=new Event('readystatechange', 'bobo')
boreadystatechange = bodavm.toolsFunc.proxy2(boreadystatechange, 'readystatechange')
bodavm.memory.listenerProxy['readystatechange']['res'] = boreadystatechange
bodavm.toolsFunc.defineProperty(boreadystatechange, "isTrusted", { configurable: false, enumerable: true, get: function isTrusted() { return bodavm.toolsFunc.dispatch(this, boreadystatechange, "isTrusted", "isTrusted_get", arguments) }, set: undefined });

let boxhronload=new Event('onload', 'bobo')
boxhronload = bodavm.toolsFunc.proxy2(boxhronload, 'xhronload')
bodavm.memory.listenerProxy['onload']['res'] = boxhronload
bodavm.toolsFunc.defineProperty(boxhronload, "isTrusted", { configurable: false, enumerable: true, get: function isTrusted() { return bodavm.toolsFunc.dispatch(this, boxhronload, "isTrusted", "isTrusted_get", arguments) }, set: undefined });
// debugger
let bodeviceorientation=new DeviceOrientationEvent('deviceorientation','bobo')
bodeviceorientation = bodavm.toolsFunc.proxy2(bodeviceorientation, 'deviceorientation')
bodavm.memory.listenerProxy['deviceorientation']['res'] = bodeviceorientation
// bodavm.toolsFunc.defineProperty(bodeviceorientation, "isTrusted", { configurable: false, enumerable: true, get: function isTrusted() { return bodavm.toolsFunc.dispatch(this, bodeviceorientation, "isTrusted", "isTrusted_get", arguments) }, set: undefined });




let windowLengthFlag = 1
let bodaPath = 1
let issrc=0
let boWindowNum = 0
// debugger
let bodaCurrentElement = ''   //当前运行的ele元素
bodavm.memory.domDocument = {}
bodavm.memory.domDocument.all = []
bodavm.memory.waitExec = []
bodavm.memory.domDocument['html'] = [boda$('html')[0]]
bodavm.memory.domDocument.all.push(boda$('html')[0])
bodavm.memory.initDone=true
bodavm.memory.domCache=null  //解决死递归 script标签插入script标签,
/*会造成死循环的问题
var hm = document.createElement("script");
hm.src = "https://hm.baidu.com/hm.js?2a795944b81b391f12d70da5971ba616";
var s = document.getElementsByTagName("script")[0];
s.parentNode.insertBefore(hm, s);
*/// debugger
function bodaParseScript(thisNode) {
  //解析script 标签
  let attr = boda$(thisNode).attr()
  let scriptCode = ''
  // debugger
  if (attr['src']) {
    let mypath = attr['src']
    issrc=1
    let httpPath = mypath.indexOf('http')
    if (httpPath == -1) {
      mypath = bodavm.memory.location['origin'] + mypath
    }
    // debugger
    // if (httpPath != -1) {
    bodaPath2 = bodavm.memory.location['host'] + '\\' + bodaPath
    console.log_copy('处理script脚本代码中,获取到src标签中路径->', mypath, ` 转换为 -> `, bodaPath2)
    mypath = bodaPath2
    // mypath = '226\\' + bodaPath

    bodaPath += 1
    try{
      scriptCode = bofs.readFileSync('.\\env_xbb_lastest_bo\\run\\new\\' + mypath + '.js').toString()
      console.log_copy(scriptCode)
    }catch{
      console.log_copy(`读取`,'env_xbb_lastest_bo\\run\\new\\' + mypath + '.js','失败')
    }

    // } else {
    //   console.log_copy('处理script脚本代码中,获取到src标签中路径->', mypath)
    //   scriptCode = bofs.readFileSync('env_xbb_lastest_bo\\run' + mypath).toString()
    // }
  } else {
    issrc=0
    scriptCode = boda$(thisNode).html()
  }
  scriptCode=scriptCode.replace(/await /g,'      ')
  return scriptCode
}

function bodaExecEle(thisNode) {
  switch (thisNode.name) {
    case 'script':
      // debugger
      let scriptCode_ = bodaParseScript(thisNode)

    //   scriptCode_=`(function(){
    //     if (bodavm.config.proxy){
    //         Object.defineProperty(this,'window',{configurable:false,set:undefined,get:function(){return window22},},'bobo')
    //     };;;;
    //     ${scriptCode_}
    // }).call(window22)
    // ;;`
      eval(scriptCode_)
      // debugger
      if (bodavm.memory.SrcSetTimeOut){
        // debugger
        //setInterval 先不做处理
        for (const srcSetTimeout of bodavm.memory.SrcSetTimeOut) {
        console.log_copy(`正在执行src标签中delay为0的定时器-->`,JSON.stringify_bo(srcSetTimeout))

          srcSetTimeout.callback.apply(this,srcSetTimeout.args)
          // for 
        }
        bodavm.memory.SrcSetTimeOut=[]
      }
      // debugger
      if (bodavm.memory.waitExec.length) {
        // debugger
        for (let index = 0; index < bodavm.memory.waitExec.length; index++) {
          let _scriptElement = bodavm.memory.waitExec[index];
          let _scriptCode = bodaParseScript(_scriptElement)
          eval(_scriptCode)
          if (bodavm.memory.SrcSetTimeOut){
            // debugger
            //setInterval 先不做处理
            for (const srcSetTimeout of bodavm.memory.SrcSetTimeOut) {
            console.log_copy(`正在执行src标签中delay为0的定时器-->`,JSON.stringify_bo(srcSetTimeout))
    
              srcSetTimeout.callback.apply(this,srcSetTimeout.args)
              // for 
            }
            bodavm.memory.SrcSetTimeOut=[]
          }
         
        }

        bodavm.memory.waitExec = []
      }
      break;
    case 'iframe':
      window[boWindowNum] = new Window('bobo')
      window[boWindowNum] = Object.setPrototypeOf(window[boWindowNum], globalThis)
      window[boWindowNum]._boContentWindow = true
      window[boWindowNum].self = window[boWindowNum]
      window[boWindowNum].frames = window[boWindowNum]
      bodavm.memory.iframe['thisWindow']['this'].push(window[boWindowNum])
      boWindowNum += 1
      break;
    // debugger
  }
}
function bodatraverse(node) {

  for (let index = 0; index < node.children().length; index++) {
      if (bodavm.memory.domCache==node.children()[index]){
        debugger
        index++
      }
    let thisNode = node.children()[index];
    if(!thisNode){break}
    bodavm.memory.domCache=thisNode
    if (!bodavm.memory.domDocument[thisNode.name]) {
      bodavm.memory.domDocument[thisNode.name] = []
    }
    // thisNode
    bodaCurrentElement = thisNode
    bodavm.memory.domDocument[thisNode.name].push(thisNode)
    bodavm.memory.domDocument.all.push(thisNode)
    let id = boda$(thisNode).attr()['id']
    if (id) {
      let newNode = bodavm.toolsFunc.setProto(thisNode.name)
      bodavm.toolsFunc.setProtoAttr.call(newNode, newNode, node)
      console.log_copy('正在处理html中带有id的元素  id ->', id)
      window.__proto__.__proto__[id] = newNode
    }
    bodaExecEle(thisNode)

    bodatraverse(boda$(thisNode))

  }
}
bodatraverse(boda$('html'))
bodavm.memory.domParserScriptFlag = false
// debugger
bodaCurrentElement = ''