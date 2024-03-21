// debugger

if (bodaEnv.memory.SetTimeOutDelay10){
    for (const srcSetTimeout of bodaEnv.memory.SetTimeOutDelay10) {
    bodaEnv.toolsFunc.console_copy(`正在执行delay小于10的定时器-->`,bodaEnv.toolsFunc.stringify_bo(srcSetTimeout))


      srcSetTimeout.callback.apply(this,srcSetTimeout.args)
    }
    bodaEnv.memory.SetTimeOutDelay10=[]
  }



if (bodaEnv.config.listenerOpen){
    ///需要执行的事件写在这里面
    /// 事件demo   
    /// bodaEnv.toolsFunc.dolistener('click',bodaEnv.memory.asyncEvent['listener']['click'][0],bodaEnv.memory.clickData)
    /// bodaEnv.toolsFunc.dolistener('mousemove',bodaEnv.memory.asyncEvent['listener']['mousemove'][0],bodaEnv.memory.mouseMoveData)
    /// bodaEnv.toolsFunc.dolistener('mousedown',bodaEnv.memory.asyncEvent['listener']['mousedown'][0],bodaEnv.memory.mouseDownData)
    /// bodaEnv.toolsFunc.dolistener('mouseup',bodaEnv.memory.asyncEvent['listener']['mouseup'][0],bodaEnv.memory.mouseUpData)
    /// bodaEnv.toolsFunc.dolistener('mousemove',bodaEnv.memory.asyncEvent['listener']['mousemove'][0],bodaEnv.memory.mouseMoveData)
    /// bodaEnv.toolsFunc.dolistener('mousedown',bodaEnv.memory.asyncEvent['listener']['mousedown'][0],bodaEnv.memory.mouseDownData)
    /// bodaEnv.toolsFunc.dolistener('mouseup',bodaEnv.memory.asyncEvent['listener']['mouseup'][0],bodaEnv.memory.mouseUpData)
    /// bodaEnv.toolsFunc.dolistener('focusout',bodaEnv.memory.asyncEvent['listener']['focusout'][0],bodaEnv.memory.focusoutData)


    ///------------------------------------------------------
    bodaEnv.toolsFunc.dolistener('load',bodaEnv.memory.asyncEvent['listener']['load'][0],[])  //rs
    // // 只打开load 只会生成236位cookie
    // // 打开下面的事件会生成300多位的cookie ,不同网站需要的事件不同,自己调试
    // bodaEnv.toolsFunc.dolistener('input',bodaEnv.memory.asyncEvent['listener']['input'][1],bodaEnv.memory.inputData)//rs
    // bodaEnv.toolsFunc.dolistener('click',bodaEnv.memory.asyncEvent['listener']['click'][0],bodaEnv.memory.clickData)//rs
    // ///-------------------------

    // /// 非淘227 ----
    // debugger
    // bodaEnv.toolsFunc.dolistener('mousedown',bodaEnv.memory.asyncEvent['listener']['onmousedown']?bodaEnv.memory.asyncEvent['listener']['onmousedown'][0]:[],bodaEnv.memory.mouseDownData)
    // bodaEnv.toolsFunc.dolistener('mousedown',bodaEnv.memory.asyncEvent['listener']['mousedown']?bodaEnv.memory.asyncEvent['listener']['mousedown'][0]:[],bodaEnv.memory.mouseDownData)
    // bodaEnv.toolsFunc.dolistener('mousemove',bodaEnv.memory.asyncEvent['listener']['mousemove']?bodaEnv.memory.asyncEvent['listener']['mousemove'][0]:[],bodaEnv.memory.mouseMoveData)
    // bodaEnv.toolsFunc.dolistener('mousemove',bodaEnv.memory.asyncEvent['listener']['mousemove']?bodaEnv.memory.asyncEvent['listener']['mousemove'][1]:[],bodaEnv.memory.mouseMoveData)

    //tx
    // bodaEnv.toolsFunc.doRTClistener()

  }




