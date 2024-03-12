// debugger

function bodaDoScript(){
      // debugger
      bodaEnv.config.printLog =bodaConifg['log']
      bodaEnv.config.SetTimeOutOpen=bodaConifg['SetTimeOutOpen'] //是否开启定时器事件
      bodaEnv.config.listenerOpen=bodaConifg['listenerOpen']

      if (bodaEnv.config.printLog){
          bodaEnv.toolsFunc.console_copy=console.log

      }else{
          bodaEnv.toolsFunc.console_copy=function(){}
      }


      //ip ua
      bodaEnv.memory.ip_addr=bodaConifg['ip_addr']?bodaConifg['ip_addr']:"117.85.204.68"
      bodaEnv.memory.navigator['userAgent']=bodaConifg['userAgent']?bodaConifg['userAgent']:'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
      bodaEnv.memory.navigator['appVerboda']=bodaConifg['userAgent']?bodaConifg['userAgent'].match(/\/(.+)/)[1]:'5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'



      bodaEnv.memory.readScriptList=[] //保存已经读取的script路径 防止重复读取
      bodaEnv.memory.domDocument = {}
      bodaEnv.memory.domDocument.all = []
      bodaEnv.memory.tempDocument=bodadominoWindow.document
      bodaEnv.memory.tempLocation=bodadominoWindow.location
      bodaEnv.memory.boWindowNum=0

      bodaEnv.memory.documentProto=bodaEnv.toolsFunc.setProto(bodaEnv.memory.tempDocument.documentElement.nodeName)
      // bodaEnv.toolsFunc.setProtoAttr.call(bodaEnv.memory.tempDocument.documentElement,bodaEnv.memory.tempDocument.documentElement,bodaEnv.memory.documentProto) 
      bodaEnv.memory.WeakMap.set(bodaEnv.memory.tempDocument.documentElement,bodaEnv.memory.documentProto)
      bodaEnv.memory.WeakMap.set(bodaEnv.memory.documentProto,bodaEnv.memory.tempDocument.documentElement)
      bodaEnv.memory.domDocument['HTML'] = [bodaEnv.memory.tempDocument.documentElement]
      bodaEnv.memory.domDocument.all.push(bodaEnv.memory.tempDocument.documentElement)
      bodaEnv.memory.currentFile=''
      bodaEnv.memory.InsertBeforeNeedDo=null // 处理script 标签 InsertBefore script标签的问题
      bodaEnv.memory.bodaCurrentScriptElement=null   //当前运行的script标签是哪一个    过document.currxxxscript 检测


      function bodaParseScript(element){
          let scriptCode=null;
          // debugger
          if (element['src']) {
              let mypath = element['src'] 
              let regexRule=bodaEnv.memory.regexRule['url'].exec(mypath)
                let urlPath=regexRule?regexRule[1].split('.')[0]:null
                // if (httpPath != -1) {
                  // debugger
                bodaEnv.toolsFunc.console_copy('处理script脚本代码中,获取到src标签中路径->', mypath,)
              //   bodaPath2 = bodaEnv.memory.location['host'] + '//' + urlPath[1].split('.')[0]+'.js'
                // debugger
                if (mypath =='https://g.alicdn.com/alilog/mlog/aplus_v2.js'){debugger}
                if (!urlPath){

                  urlPath=mypath.replace(/\.js/g, '').slice(-10);
                  
                }
                bodaPath2 = bodaEnv.memory.tempLocation['host'] + '//' + urlPath+'.js'
                if (bodaEnv.memory.readScriptList.includes(bodaPath2)){
                  bodaEnv.toolsFunc.console_copy(bodaPath2,'-> 已经读取过,跳过')
                  return ''
                }
                bodaEnv.memory.readScriptList.push(bodaPath2)
                bodaEnv.memory.currentFile=bodaPath2
                bodaEnv.toolsFunc.console_copy('转换为 -> ', bodaPath2)
                if (bodafs.existsSync(bodaRunPath+'//website//')){
                  scriptCode = bodafs.readFileSync(bodaRunPath+'//website//' + bodaPath2).toString()
                }else{
                  scriptCode = bodafs.readFileSync(bodaRunPath+bodaPath2).toString()

                }
              //   bodaEnv.toolsFunc.console_copy(scriptCode)

      
          }else{
              scriptCode=element.innerHTML
          }
          // scriptCode=scriptCode.replace(/await /g,'      ')
          return scriptCode
      }
      function bodaExecEle(element){
          // debugger
          // bodaEnv.memory.bodaCurrentElement=element;
          switch (element.nodeName) {
              case 'script'.toUpperCase():
                  // debugger
                  bodaEnv.memory.bodaCurrentScriptElement=element
                  let scriptCode_=bodaParseScript(element)
                  //存在作用域问题     
                  // debugger
                  // function aa(){
                  // eval('var bba=1; debugger;window.bba')
                  // } aa()
                  // if (bodaConifg['astChangeScope'] ==true){
                  //
                  //   let astCode=bodaBabelScript(scriptCode_)
                  //   eval(astCode)
                  // }else{
                    eval(scriptCode_)
                  // }
                  bodaEnv.toolsFunc.execSetTimeOutDelay10()
                  if (bodaEnv.memory.scriptNodeNeedReads){
                    // debugger
                    for (let node of bodaEnv.memory.scriptNodeNeedReads){
                      // debugger
                        let nodeNeedCode=bodaParseScript(node)
 
                          eval(nodeNeedCode)
                
                    }
                    bodaEnv.memory.scriptNodeNeedReads=null
                  }
                  break;
              case 'iframe'.toUpperCase():
                  // debugger
                  window[bodaEnv.memory.boWindowNum] = new Window('bobo')
                  window[bodaEnv.memory.boWindowNum] =bodaEnv.toolsFunc.proxyWindow(window[bodaEnv.memory.boWindowNum] ,'iframe::proxyWindow')
                  // window[bodaEnv.memory.boWindowNum] = Object.setPrototypeOf(window[bodaEnv.memory.boWindowNum], globalThis)
                  // window[bodaEnv.memory.boWindowNum]._boContentWindow = true
                  // window[bodaEnv.memory.boWindowNum].self = window[bodaEnv.memory.boWindowNum]
                  // window[bodaEnv.memory.boWindowNum].frames = window[bodaEnv.memory.boWindowNum]
                  bodaEnv.toolsFunc.setObjWeakMapProtoAttr.call(window[bodaEnv.memory.boWindowNum],'isiframe',true)

                  bodaEnv.toolsFunc.setObjWeakMapProtoAttr.call(window[bodaEnv.memory.boWindowNum],'self',window[bodaEnv.memory.boWindowNum])
                  bodaEnv.toolsFunc.setObjWeakMapProtoAttr.call(window[bodaEnv.memory.boWindowNum],'frames',window[bodaEnv.memory.boWindowNum])
                  bodaEnv.toolsFunc.setObjWeakMapProtoAttr.call(window[bodaEnv.memory.boWindowNum],'num',bodaEnv.memory.boWindowNum)

                  
                  bodaEnv.memory.iframe['thisWindow']['this'].push(window[bodaEnv.memory.boWindowNum])
                  bodaEnv.memory.boWindowNum += 1
                  break
              case 'LINK':
                  // debugger
                  let cssHref=bodaEnv.memory.regexRule['url'].exec(element.href)
                  let cssbodaPath2 =null
                  if (bodafs.existsSync(bodaRunPath+'//website//')){
                    cssbodaPath2= bodaRunPath+'//website//'+bodaEnv.memory.tempLocation['host'] + '//' + cssHref[1]

                  }else{
                    cssbodaPath2= bodaRunPath+bodaEnv.memory.tempLocation['host'] + '//' + cssHref[1]
                  }
                  scriptCode = bodafs.readFileSync(cssbodaPath2).toString()
                  bodaEnv.toolsFunc.CSSParse(scriptCode)
                  // bodaEnv.memory.cssStyle.push(scriptCode)
                  // debugger
                  // let scriptCode=element
                  break
              default:
                  break;
          }
      }

      function bodaTraverse(node){
          // debugger
          /*
          从html标签依次向下遍历html-head-body...,遇到link,script,iframe标签进行处理
          */ 
          let childNodes_=node.children;
          for(let childsIndex=0;childsIndex<childNodes_.length;childsIndex++){
              // debugger
              if (!bodaEnv.memory.domDocument[childNodes_[childsIndex].nodeName]){
                  bodaEnv.memory.domDocument[childNodes_[childsIndex].nodeName]=[]
              }
              // debugger
              bodaEnv.memory.domDocument[childNodes_[childsIndex].nodeName].push(childNodes_[childsIndex])
              bodaEnv.memory.domDocument.all.push(childNodes_[childsIndex])
              let temp=bodaEnv.toolsFunc.setProto(childNodes_[childsIndex].nodeName)
              // debugger
              // console.copy_log(temp,'nodename',childNodes_[childsIndex].nodeName)
              // if (childNodes_[childsIndex].nodeName=='DIV'){{debugger}}
              // bodaEnv.toolsFunc.setProtoAttr.call(temp,temp,childNodes_[childsIndex])
              // bodaEnv.toolsFunc.setProtoAttr.call(childNodes_[childsIndex],childNodes_[childsIndex],temp)
              bodaEnv.memory.WeakMap.set(temp,childNodes_[childsIndex])
              bodaEnv.memory.WeakMap.set(childNodes_[childsIndex],temp)

              let tempId=childNodes_[childsIndex].id
              if (tempId){

                  bodaEnv.toolsFunc.console_copy('正在处理html中带有id的元素  id ->', tempId)

                  // debugger
                  window.__proto__.__proto__[tempId]= bodaEnv.memory.WeakMap.get(childNodes_[childsIndex])
              
              }   
              // debugger
              bodaExecEle(childNodes_[childsIndex])
              bodaEnv.memory.InsertBeforeNeedDo=null
              if (childNodes_[childsIndex].childNodes.length){
                  let _tempchildsIndexNode=childNodes_[childsIndex];

                  // if (_tempchildsIndexNode==bodaEnv.memory.bodaCurrentScriptElement){
                  //     ++childsIndex;
                  //     continue
                  // };
                  bodaTraverse(_tempchildsIndexNode)
                  if (bodaEnv.memory.InsertBeforeNeedDo){
                      childsIndex++;
                      bodaTraverse(bodaEnv.memory.InsertBeforeNeedDo)
                      bodaEnv.memory.InsertBeforeNeedDo=null
                  }
                  bodaEnv.memory.bodaCurrentScriptElement=null


              }

          }
          if (childNodes_.length==0){
              return 
          }
          

      }
      // debugger
      bodaTraverse(bodaEnv.memory.tempDocument.documentElement)

      bodaEnv.memory.currentFile=null
      bodaEnv.memory.bodaCurrentScriptElement=null 
}


// debugger