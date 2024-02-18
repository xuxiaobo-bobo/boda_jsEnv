
if (bodaEnv.config.SetTimeOutOpen) {


  let setTimeEvent = bodaEnv.memory.asyncEvent.setTimeout
  // // debugger

  bodaEnv.toolsFunc.console_copy(`开始执行定时器异步事件===>`)


  if (setTimeEvent) {
    setTimeEvent.sort((a, b) => {
      if (a.delay < b.delay) {
        return -1;
      } else if (a.delay > b.delay) {
        return 1;
      } else {
        if (a.timeoutID < b.timeoutID) {
          return -1;
        } else if (a.timeoutID > b.timeoutID) {
          return 1;
        } else {
          return 0;
        }
      }
    });
    // bodaEnv.memory.listenerFlag='setTimeout'
    // debugger
    for (let i = 0; i < setTimeEvent.length; i++) {
      let bodaevent = setTimeEvent[i]
      // debugger
      if (bodaevent.delay >=5000){
        bodaEnv.toolsFunc.console_copy(`定时器异步回调delay大于等于5000不执行======>delay->${bodaevent['delay']}  timeoutID->${bodaevent['timeoutID']} callback:${(bodaevent.callback + '').length > 50 ? (bodaevent.callback + '').substring(0, 50) : bodaevent.callback + ''}`);

        continue
      }
      if (bodaevent == undefined) { continue }
        bodaEnv.toolsFunc.console_copy(`定时器异步回调执行======> delay->${bodaevent['delay']}  timeoutID->${bodaevent['timeoutID']} callback:${(bodaevent.callback + ''.length) > 50 ? (bodaevent.callback + '').substring(0, 50) : bodaevent.callback + ''}`);
      try {
        window.event = undefined;

        if (bodaevent.type) {
          // debugger
          bodaevent.callback()
        } else {
          eval(bodaevent.callback)
        }
        bodaEnv.memory.innerListener = []
      } catch (e) {
        bodaEnv.toolsFunc.console_copy(`定时器异步回调执行失败======>${JSON.stringify(bodaevent)}   callback:${bodaevent.callback + ''.length > 50 ? bodaevent.callback + ''.substring(0, 50) : bodaevent.callback + ''}`);
        bodaEnv.toolsFunc.console_copy(`定时器异步回调执行失败msg======>`, e.message);
        bodaEnv.toolsFunc.console_copy(`定时器异步回调执行失败stack======>`, e.stack);

      }

    }

  }
}