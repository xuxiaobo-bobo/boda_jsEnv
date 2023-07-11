let boMouseMove = new MouseEvent('mousemove', 'bobo')
boMouseMove = bodavm.toolsFunc.proxy2(boMouseMove, 'mousemove')
bodavm.memory.listenerProxy['mousemove']['res'] = boMouseMove

let boMouseUp = new MouseEvent('mouseup', 'bobo')
mousemove_ = bodavm.toolsFunc.proxy2(boMouseUp, 'mouseup')
bodavm.memory.listenerProxy['mouseup']['res'] = boMouseUp

let boClick = new PointerEvent('click', 'bobo')
boClick = bodavm.toolsFunc.proxy2(boClick, 'click')
bodavm.memory.listenerProxy['click']['res'] = boClick

let loadEvent = new Event('load', 'bobo')
loadEvent = bodavm.toolsFunc.proxy2(loadEvent, 'load')
bodavm.memory.listenerProxy['load']['res'] = loadEvent

let windowLengthFlag = 1
let bodaPath = 1
let boWindowNum=0
// debugger
let bodaCurrentElement=''   //当前运行的ele元素
bodavm.memory.domDocument = {}
bodavm.memory.domDocument.all=[]
bodavm.memory.domDocument['html'] = [boda$('html')[0]]
bodavm.memory.domDocument.all.push(boda$('html')[0])
function bodatraverse(node) {

  for (let index = 0; index < node.children().length; index++) {

    let thisNode = node.children()[index];
    if (!bodavm.memory.domDocument[thisNode.name]) {
      bodavm.memory.domDocument[thisNode.name] = []
    }
    // thisNode
    bodaCurrentElement=thisNode
    bodavm.memory.domDocument[thisNode.name].push(thisNode)
    bodavm.memory.domDocument.all.push(thisNode)
    let id = boda$(thisNode).attr()['id']
    if (id) {
      let newNode = bodavm.toolsFunc.setProto(thisNode.name)
      bodavm.toolsFunc.setProtoAttr.call(newNode, newNode, node)
      console.log_copy('正在处理html中带有id的元素  id ->', id)
      window.__proto__.__proto__[id] = newNode
    }
    switch (thisNode.name) {
      case 'script':
          let attr = boda$(thisNode).attr()
          let scriptCode = ''
          // debugger
          if (attr['src']) {
            let mypath = attr['src']
            let httpPath = mypath.indexOf('http')
            if (httpPath != -1) {
              console.log_copy('处理script脚本代码中,获取到src标签中路径->', mypath, ` 转换为 -> `, bodaPath)
              mypath = bodaPath
              bodaPath += 1
              scriptCode = bofs.readFileSync('env_xbb_lastest_bo\\run\\new\\' + mypath + '.js').toString()

            } else {
              console.log_copy('处理script脚本代码中,获取到src标签中路径->', mypath)
              scriptCode = bofs.readFileSync('env_xbb_lastest_bo\\run' + mypath).toString()
            }
          } else {
            scriptCode = boda$(thisNode).html()
          }
          eval(scriptCode)
          break;
        case 'iframe':
          window[boWindowNum]=new Window('bobo')
          window[boWindowNum]=Object.setPrototypeOf(window[boWindowNum],globalThis)
          window[boWindowNum]._boContentWindow=true
          window[boWindowNum].self=window[boWindowNum]
          window[boWindowNum].frames=window[boWindowNum]
          bodavm.memory.iframe['thisWindow']['this'].push(window[boWindowNum])
          boWindowNum+=1
          break;
          // debugger
    }
    bodatraverse(boda$(thisNode))
  
  }
}
bodatraverse(boda$('html'))
bodavm.memory.domParserScriptFlag=false  
debugger