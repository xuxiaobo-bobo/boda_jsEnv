document=new HTMLDocument('bobo')
for (let dom of bodaDom[0]) {
  debugger
  bodavm.memory.domParser = dom
  srciptCode = ''
  mypath=''
  try {
    if (dom['attrs'].length) {
      for (const attr of dom['attrs']) {
        if (attr['name'] == 'src') {
          mypath = attr['value']
          console.log_copy('处理script脚本代码中,获取到src标签中路径->', mypath)
          srciptCode = bofs.readFileSync(mypath).toString()

        }
      }
    } else {
      srciptCode = dom.childNodes[0].value
    }
  } catch {
    console.log_copy(mypath, '文件不存在,跳过')
    continue
  }

  eval.call(document, srciptCode)
}

bodavm.memory.domParserScriptFlag=false
bodavm.memory.domParser = bodaDom[1];




