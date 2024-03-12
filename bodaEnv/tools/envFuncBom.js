;;(function() {
    bodaEnv.envFunc.window_$ = function() {
        bodaEnv.toolsFunc.console_copy(`window_$  未实现 `)
        bodaEnv.toolsFunc.throwError('TypeError','主动报错 window_$  未实现')

    }
    bodaEnv.envFunc.window_name_set = function() {
        let _nameVal =arguments[0]
        bodaEnv.toolsFunc.console_copy(`window_name_set  ->res -> `, _nameVal)
        bodaEnv.memory.window['name']=_nameVal
        return _nameVal
    }
    bodaEnv.envFunc.window_Function_get=function(){
        // debugger
        let isliveFunc=bodaEnv.toolsFunc.getObjWeakMapProtoAttr.call(this,'Function')
        if (isliveFunc){
            bodaEnv.toolsFunc.console_copy(`iframe window_Function_get  ->res -> iframe下的Function`)
            return isliveFunc

        }
        let iframeFunction=bodaEnv.toolsFunc.proxyHelper(Function,'iframeFunction::proxyHelper')
        bodaEnv.toolsFunc.console_copy(`iframe window_Function_get  ->res -> iframe下的Function`)
        bodaEnv.toolsFunc.setObjWeakMapProtoAttr.call(this,'Function',iframeFunction)
        return iframeFunction
    }
    bodaEnv.envFunc.window_constructor_get=function(){
        // debugger
        let isliveWindow=bodaEnv.toolsFunc.getObjWeakMapProtoAttr.call(this,'Window')
        if (isliveWindow){
            bodaEnv.toolsFunc.console_copy(`iframe window_constructor_get  ->res -> iframe下的Window`)
            return isliveWindow

        }
        let iframeWindow=bodaEnv.toolsFunc.proxyHelper(Window,'iframeWindow::proxyHelper')
        bodaEnv.toolsFunc.console_copy(`iframe window_constructor_get  ->res -> iframe下的Window`)
        bodaEnv.toolsFunc.setObjWeakMapProtoAttr.call(this,'Window',iframeWindow)
        return iframeWindow
    }

    bodaEnv.envFunc.TextDecoder_decode = function () {
        // debugger
        let arg0 = arguments[0]
        let _res = new sionTextDecoder().decode(arg0)
        bodaEnv.toolsFunc.console_copy(`TextDecoder_decode -> arg -> ${arguments[0]} ->`, `res-> ${_res}`);

        return _res
    }
	
  bodaEnv.envFunc.NavigatorUAData_mobile_get = function() {
      // debugger
      let _res = false
      bodaEnv.toolsFunc.console_copy(`NavigatorUAData_mobile_get `, `res  默认返回false 手机端应该为true-> ${_res}`);
      return _res
  }

  bodaEnv.envFunc.URL_href_get = function() {
      let thisObj = bodaEnv.memory.WeakMap.get(this)
      let _href = thisObj.href
      bodaEnv.toolsFunc.console_copy(`URL_href_get `, `res -> ${_href}`);
      return _href

  }

  bodaEnv.envFunc.CSS_supports = function() {
      // debugger
      let arg0 = arguments[0]
      let arg1 = arguments[1]
      if (arg0 == "display" && arg1 == "block") {
          bodaEnv.toolsFunc.console_copy(`CSS_supports `, `arg0 -> ${arg0} -> arg1 -> ${arg1} -> res -> true`);

          return true
      }
      bodaEnv.toolsFunc.console_copy(`CSS_supports `, `arg0 -> ${arg0} -> arg1 -> ${arg1} -> 未实现 !!!!!!!!!!`);

  }
  // bodaEnv.envFunc.window_postMessage=function(){
  //     let _arg=arguments[0]
  //     bodaEnv.toolsFunc.console_copy(`window_postMessage 该事件可能需要调用 message 事件!! `, `_arg -> ${_arg}`);

  // }

  bodaEnv.envFunc.window_requestAnimationFrame = function() {
      // debugger
      bodaEnv.toolsFunc.console_copy(`window_requestAnimationFrame `, `_arg -> ${arguments[0]}`);

  }

  bodaEnv.envFunc.TextEncoder_encode = function() {

      let _arg = arguments[0]
      let _res = bodaEnv.memory.WeakMap.get(this).encode(_arg)
      bodaEnv.toolsFunc.console_copy(`TextEncoder_encode `, `_arg -> ${_arg} -> _res ->${_res}`);

      return _res
  }
  // bodaEnv.envFunc.window_postMessage=function(){

  // }

  bodaEnv.envFunc.window_fetch = function() {

      let _fetchVal = new bodaEnv.memory.globlProtoObj['Response']('bobo')
      let promise = new Promise((resolve,reject)=>{
          resolve(_fetchVal);
      }
      );
      bodaEnv.toolsFunc.console_copy(`window_fetch `, `-> _res ->${promise}`);
      return promise
  }
  bodaEnv.envFunc.window_onerror_set = function() {
      let _arg = arguments[0]
      bodaEnv.memory.window['onerror'] = _arg
      bodaEnv.toolsFunc.console_copy(`window_onerror_set `, `-> _arg ->${_arg}`);

      return _arg
  }

  bodaEnv.envFunc.Navigator_userAgentData_get = function() {
      let _res = new NavigatorUAData('bobo')
      bodaEnv.toolsFunc.console_copy(`Navigator_userAgentData_get  -> res ->${_res}`, );
      return _res
  }

  bodaEnv.envFunc.Navigator_pdfViewerEnabled_get = function() {
      bodaEnv.toolsFunc.console_copy(`Navigator_pdfViewerEnabled_get `, `->_res -> true`);

      return true
  }
  bodaEnv.envFunc.Navigator_sendBeacon = function() {
      let _arg = arguments[0]
      bodaEnv.toolsFunc.console_copy(`Navigator_sendBeacon `, `-> _arg ->${_arg}`);
      if (_arg == '//gm.mmstat.com/fsp.1.1') {
          return true
      } else {
          bodaEnv.toolsFunc.console_copy(`Navigator_sendBeacon `, `-> _arg ->${_arg} 未实现`);

      }
  }
  bodaEnv.envFunc.Navigator_appCodeName_get = function() {
      let _res = bodaEnv.memory.navigator['appCodeName']
      bodaEnv.toolsFunc.console_copy(`Navigator_appCodeName_get `, `-> res ->${_res}`);

      return _res
  }
  bodaEnv.envFunc.window_onbeforeunload_set = function() {
      let _arg = arguments[0]
      bodaEnv.memory.window['onbeforeunload'] = _arg
      bodaEnv.toolsFunc.console_copy(`window_onbeforeunload_set `, `arg ->${_arg}`);

      return _arg
  }
  bodaEnv.envFunc.window_matchMedia = function window_matchMedia() {
      // debugger
      let arg = arguments[0]
      let res = new bodaEnv.memory.globlProtoObj['MediaQueryList']('bobo')
      bodaEnv.toolsFunc.console_copy(`window_matchMedia `, `arg ->${arg}`, `-> res ->${res}`);
      bodaEnv.toolsFunc.setObjWeakMapProtoAttr.call(res, 'matchMedia', arg)
      return res
  }

  bodaEnv.envFunc.window_getComputedStyle = function() {
      bodaEnv.toolsFunc.console_copy(`window_getComputedStyle -> `)
      // debugger
      return bodaEnv.memory.globlProtoObj['getComputedStyle'].apply(this, arguments)

  }
  bodaEnv.envFunc.window_alert = function() {
      // debugger
      bodaEnv.toolsFunc.console_copy(`window_alert -> `)
      return bodaEnv.memory.globlProtoObj['alert'].apply(this, arguments)
  }
  bodaEnv.envFunc.window_isTrusted_get = function() {
      // debugger

      if (bodaEnv.memory.runningListern) {
          bodaEnv.toolsFunc.console_copy(this + '', ` window_isTrusted_get 正在获取 isTrusted属性 返回true`)
          return true
      }
      bodaEnv.toolsFunc.console_copy(this + '', ` window_isTrusted_get 正在获取 isTrusted属性 当前没有事件运行中,直接返回false`)
      return false
  }
  // bodaEnv.envFunc.window_event_get=function(){
  //     bodaEnv.toolsFunc.console_copy(`window_event_get ->`,bodaEnv.memory.evnent )

  //     return bodaEnv.memory.evnent
  // }
  // bodaEnv.envFunc.window_event_set=function(){
  //     let arg=arguments[0]
  //     bodaEnv.toolsFunc.console_copy(`window_event_set ->`,arg )
  //     let isliveTrue=bodaEnv.toolsFunc.getObjWeakMapProtoAttr.call(this,'isTrusted')
  //     if (!isliveTrue){
  //         Object.defineProperty_bo(arg,'isTrusted',{
  //             set:undefined,
  //             enumerable:true,
  //             configurable:false,
  //             get:function isTrusted (){return bodaEnv.toolsFunc.dispatch(this,window, "window", "isTrusted_get", arguments)}
  //         })
  //     }

  //     bodaEnv.toolsFunc.setObjWeakMapProtoAttr.call(this,'isTrusted',true)
  //     return arg
  // }
  bodaEnv.envFunc.window_webkitRequestFileSystem = function() {
      if (arguments.length < 3) {
          bodaEnv.toolsFunc.throwError('TypeError', `Failed to execute 'webkitRequestFileSystem' on 'Window': 3 arguments required, but only 1 present.`)
      }
      let _val = bodaEnv.memory.globlProtoObj['webkitRequestFileSystem'].apply(this, arguments)
      bodaEnv.toolsFunc.console_copy(`window_webkitRequestFileSystem ->`, _val)
      return _val
  }
  bodaEnv.envFunc.window_clearTimeout = function window_clearTimeout() {

      let id = arguments[0];
      bodaEnv.toolsFunc.console_copy(`window_clearTimeout `, `${id}  `);
      // debugger
      bodaEnv.memory.asyncEvent.setTimeout.forEach(function(item, index, arr) {

          if (item["timeoutID"] == id) {
              arr.splice(index, 1);
              return
          }
      });
      if (bodaEnv.memory.SetTimeOutDelay10) {
          bodaEnv.memory.SetTimeOutDelay10.forEach(function(item, index, arr) {

              if (item["timeoutID"] == id) {
                  arr.splice(index, 1);
                  return
              }
          });
      }

      //     }
  }
  ;
  bodaEnv.envFunc.window_clearInterval = function window_clearInterval() {

      let id = arguments[0];
      bodaEnv.toolsFunc.console_copy(`window_clearInterval `, `${id}  `);
      // debugger
      bodaEnv.memory.asyncEvent.setTimeout.forEach(function(item, index, arr) {

          if (item["timeoutID"] == id) {
              arr.splice(index, 1);
              return
          }
      });
      if (bodaEnv.memory.SetTimeOutDelay10) {
          bodaEnv.memory.SetTimeOutDelay10.forEach(function(item, index, arr) {

              if (item["timeoutID"] == id) {
                  arr.splice(index, 1);
                  return
              }
          });
      }

      //     }
  }
  ;

  // bodaEnv.envFunc.window_setTimeout=setTimeout
  bodaEnv.envFunc.window_setTimeout = function window_setTimeout() {
      // debugger
      let func = arguments[0];
      let delay = arguments[1] || 0;
      let length = arguments.length;
      let argList = [];
      for (let i = 2; i < length; i++) {
          argList.push(arguments[i]);
      }
      if (!argList) {
          argList = undefined
      }
      // debugger
      // func = func.toString().replace(/debugger/, "").replace(/function ()/, "function xxx");
      // bodaEnv.toolsFunc.console_copy(`window_setTimeout `, `func->${func} `, `delay->${delay} `, `argList->${argList}  `)
      bodaEnv.toolsFunc.console_copy(`window_setTimeout -> delay值可能会影响执行结果,如果网站中执行的方法框架内没有执行,可以与delay值有关,尝试修改判断条件
      `, `delay->${delay} `, `argList->${[argList]} ->func -> `, func)
      // debugger
      bodaEnv.memory.timeoutID += 1;
      let bodaevent = {
          "callback": func,
          "delay": delay,
          'self': this,
          "args": argList,
          "type": typeof func == 'function' ? 1 : 0,
          //1代表函数,0代表code
          "timeoutID": bodaEnv.memory.timeoutID,
          'settime_name': 'setTimeout'
      };
      // debugger
      // if (bodaEnv.memory.issrc && delay < 10) {
      //     //第一个src标签的settimeout为0时会在文件加载完成后立马执行
      //     if (!bodaEnv.memory.SrcSetTimeOut) {
      //         bodaEnv.memory.SrcSetTimeOut = []
      //     }

      //     bodaEnv.memory.SrcSetTimeOut.push(bodaevent)
      //     // bodaEnv.memory.issrc=0
      //     bodaEnv.toolsFunc.console_copy(`window_setTimeout `, `当前处于src标签解析中,并且delay小于10,当前script解析执行完成后,进行调用  `);
      //     return bodaEnv.memory.timeoutID

      // }
      if (delay <= 4) {
          // debugger

          if (arguments[2] == 'Promise') {
              bodaEnv.toolsFunc.console_copy(this, `-> Promise异步调用--->`, `立马开始执行`);

          } else {
              bodaEnv.toolsFunc.console_copy(`window_setTimeout `, `delay->小于等于4 立马开始执行`);

          }
          // window.event=undefined
          // try{
          func.call(this, argList)

          // }catch{
          //     bodaEnv.toolsFunc.console_copy(`定时器调用失败---->`)
          // }
          return bodaEnv.memory.timeoutID;
      }
      if (delay < 10) {
          if (!bodaEnv.memory.SetTimeOutDelay10) {
              bodaEnv.memory.SetTimeOutDelay10 = []
          }
          // debugger
          // func.call(this, argList)
          bodaEnv.memory.SetTimeOutDelay10.push(bodaevent)
          // bodaEnv.memory.issrc=0
          bodaEnv.toolsFunc.console_copy(`window_setTimeout `, `delay小于10,稍后进行调用  `);
          return bodaEnv.memory.timeoutID
      }
      // if (bodaEnv.memory.listenerFlag=='pending' && delay<=10){
      //     bodaEnv.toolsFunc.console_copy(`当前处于事件调用内,delay 小于 10 直接进行调用 -->`)
      //     bodaevent['callback'].apply(window,bodaevent.args)
      //     return bodaEnv.memory.timeoutID
      // }

      // if (bodaEnv.memory.asyncEventStatus=='load'){

      //     if (bodaEnv.memory.asyncEvent.loadSettimeout==undefined){
      //         bodaEnv.memory.asyncEvent.loadSettimeout=[]
      //     }
      //     bodaEnv.memory.asyncEvent.loadSettimeout.push(event)
      //     return bodaEnv.memory.timeoutID;

      // }
      // debugger
      // else {
      if (bodaEnv.memory.asyncEvent.setTimeout.indexOf(bodaevent) != -1) {
          return bodaEnv.memory.timeoutID;
      }
      // bodaEnv.sionTools.symbolProperty(bodaevent)
      bodaEnv.memory.asyncEvent.setTimeout.push(bodaevent);
      // }

      return bodaEnv.memory.timeoutID;
  }
  ;
  bodaEnv.envFunc.window_setInterval = function() {
      let func = arguments[0];
      let delay = arguments[1] || 0;
      let length = arguments.length;
      // bodaEnv.sionTools.symbolProperty(func)
      let argList = [];
      for (let i = 2; i < length; i++) {
          argList.push(arguments[i]);
      }

      // func = func.toString().replace(/debugger/, "").replace(/function ()/, "function xxx");
      bodaEnv.toolsFunc.console_copy(`window_setInterval ->delay值可能会影响执行结果,如果网站中执行的方法框架内没有执行,可以与delay值有关,尝试修改判断条件
      `, `delay->${delay} `, `argList->${[argList]}  -> func ->`, (func.toString().length > 100 ? func.toString().slice(0, 100) : func.toString()));

      bodaEnv.memory.timeoutID += 1;

      let bodaevent = {
          "callback": func,
          "delay": delay,
          "args": argList,
          "type": typeof func == 'function' ? 1 : 0,
          //1代表函数,0代表code
          "timeoutID": bodaEnv.memory.timeoutID,
          'settime_name': 'setInterval'
      };

      if (delay < 10) {
          //第一个src标签的settimeout为0时会在文件加载完成后立马执行
          bodaevent.callback.call(this, ...argList)
          // bodaEnv.memory.issrc=0
          bodaEnv.toolsFunc.console_copy(`window_setTimeout `, `结束后,立马调用  `);
          return bodaEnv.memory.timeoutID
      }
      // bodaEnv.sionTools.symbolProperty(bodaevent)
      if (bodaEnv.memory.asyncEvent.setTimeout.indexOf(bodaevent) != -1) {
          return bodaEnv.memory.timeoutID;
      }
      // bodaEnv.sionTools.symbolProperty(bodaevent)
      bodaEnv.memory.asyncEvent.setTimeout.push(bodaevent);
      // }
      return bodaEnv.memory.timeoutID;
  }
  bodaEnv.envFunc.window_indexedDB_get = function() {
      let _indexedDBVal = bodaEnv.memory.globlProtoObj['indexedDB']
      bodaEnv.toolsFunc.console_copy(`window_indexedDB_get  ->res -> `, _indexedDBVal)

      return _indexedDBVal
  }
  bodaEnv.envFunc.window_name_get = function() {
      let _nameVal = bodaEnv.memory.window['name']
      bodaEnv.toolsFunc.console_copy(`window_name_get  ->res -> `, _nameVal)

      return _nameVal
  }

  bodaEnv.envFunc.window_localStorage_get = function() {

      let localStorageVal = bodaEnv.memory.globlProtoObj['localStorage']
      bodaEnv.toolsFunc.console_copy(`window_localStorage_get  ->res -> `, localStorageVal)

      return localStorageVal
  }
  bodaEnv.envFunc.window_sessionStorage_get = function() {

      let sessionStorageVal = bodaEnv.memory.globlProtoObj['sessionStorage']
      bodaEnv.toolsFunc.console_copy(`window_localStorage_get  ->res -> `, sessionStorageVal)

      return sessionStorageVal
  }
  bodaEnv.envFunc.window_onload_set = function() {
      bodaEnv.memory.window['onload'] = arguments[0]
      // debugger
      bodaEnv.toolsFunc.console_copy(`window_onload_set  ->res -> `)
      return arguments[0]
  }
  bodaEnv.envFunc.MediaDeviceInfo_deviceId_get = function() {
      // debugger
      bodaEnv.toolsFunc.console_copy(`MediaDeviceInfo_deviceId_get  ->res -> `, '默认返回""')
      return ''

  }
  bodaEnv.envFunc.location_ancestorOrigins_get = function() {
      // debugger
      let res = new DOMStringList('bobo')
      bodaEnv.toolsFunc.console_copy(`location_ancestorOrigins_get  ->res -> `, res)

      return res
  }
  bodaEnv.envFunc.location_toString = function() {
      let string = location.href
      bodaEnv.toolsFunc.console_copy(`location_toString  ->res -> `, string)
      return string
  }
  bodaEnv.envFunc.Navigator_xr_get = function() {
      let islive = bodaEnv.toolsFunc.getObjWeakMapProtoAttr.call(this, 'xr')
      if (islive) {
          bodaEnv.toolsFunc.console_copy(`Navigator_xr_get 已存在返回`, islive)
          return islive
      }
      let xr = new XRSystem('bobo')
      bodaEnv.toolsFunc.setObjWeakMapProtoAttr.call(this, 'xr', xr)
      bodaEnv.toolsFunc.console_copy(`Navigator_xr_get -> xr -> ${xr}`)
      return xr
  }
  bodaEnv.envFunc.Navigator_serial_get = function() {
      let islive = bodaEnv.toolsFunc.getObjWeakMapProtoAttr.call(this, 'serial')
      if (islive) {
          bodaEnv.toolsFunc.console_copy(`Navigator_serial_get 已存在返回`, islive)
          return islive
      }
      let serial = new Serial('bobo')
      bodaEnv.toolsFunc.setObjWeakMapProtoAttr.call(this, 'serial', serial)
      bodaEnv.toolsFunc.console_copy(`Navigator_serial_get -> serial -> ${serial}`)
      return serial
  }

  bodaEnv.envFunc.Navigator_presentation_get = function() {
      let islive = bodaEnv.toolsFunc.getObjWeakMapProtoAttr.call(this, 'presentation')
      if (islive) {
          bodaEnv.toolsFunc.console_copy(`Navigator_presentation_get 已存在返回`, islive)
          return islive
      }
      let presentation = new Presentation('bobo')
      bodaEnv.toolsFunc.setObjWeakMapProtoAttr.call(this, 'presentation', presentation)
      bodaEnv.toolsFunc.console_copy(`Navigator_presentation_get -> presentation -> ${presentation}`)
      return presentation
  }

  bodaEnv.envFunc.Navigator_permissions_get = function() {
      let islive = bodaEnv.toolsFunc.getObjWeakMapProtoAttr.call(this, 'permission()')
      if (islive) {
          bodaEnv.toolsFunc.console_copy(`Navigator_permissions_get 已存在返回`, islive)
          return islive
      }
      let permissions = new Permissions('bobo')
      bodaEnv.toolsFunc.setObjWeakMapProtoAttr.call(this, 'permissions', permissions)
      bodaEnv.toolsFunc.console_copy(`Navigator_permissions_get -> permissions -> ${permissions}`)
      return permissions
  }
  bodaEnv.envFunc.Navigator_mediaSession_get = function() {
      let islive = bodaEnv.toolsFunc.getObjWeakMapProtoAttr.call(this, 'mediaSession')
      if (islive) {
          bodaEnv.toolsFunc.console_copy(`Navigator_mediaSession_get 已存在返回`, islive)
          return islive
      }
      let mediaSession = new MediaSession('bobo')
      bodaEnv.toolsFunc.setObjWeakMapProtoAttr.call(this, 'mediaSession', mediaSession)
      bodaEnv.toolsFunc.console_copy(`Navigator_mediaSession_get -> mediaSesboda -> ${mediaSession}`)
      return mediaSession
  }

  bodaEnv.envFunc.Navigator_keyboard_get = function() {
      let islive = bodaEnv.toolsFunc.getObjWeakMapProtoAttr.call(this, 'keyboard')
      if (islive) {
          bodaEnv.toolsFunc.console_copy(`Navigator_keyboard_get 已存在返回`, islive)
          return islive
      }
      let keyboard = new Keyboard('bobo')
      bodaEnv.toolsFunc.setObjWeakMapProtoAttr.call(this, 'keyboard', keyboard)
      bodaEnv.toolsFunc.console_copy(`Navigator_keyboard_get -> keyboard -> ${keyboard}`)
      return keyboard
  }

  bodaEnv.envFunc.Navigator_hid_get = function() {
      let ishid = bodaEnv.toolsFunc.getObjWeakMapProtoAttr.call(this, 'hid')
      if (ishid) {
          bodaEnv.toolsFunc.console_copy(`Navigator_hid_get 已存在返回`, ishid)
          return ishid
      }
      let hid = new HID('bobo')
      bodaEnv.toolsFunc.setObjWeakMapProtoAttr.call(this, 'hid', hid)
      bodaEnv.toolsFunc.console_copy(`Navigator_hid_get -> hid -> ${hid}`)
      return hid
  }
  bodaEnv.envFunc.Navigator_credentials_get = function() {
      let iscredentials = bodaEnv.toolsFunc.getObjWeakMapProtoAttr.call(this, 'credentials')
      if (iscredentials) {
          bodaEnv.toolsFunc.console_copy(`Navigator_credentials_get 已存在返回`, iscredentials)
          return iscredentials
      }
      let credentials = new CredentialsContainer('bobo')
      bodaEnv.toolsFunc.setObjWeakMapProtoAttr.call(this, 'credentials', credentials)
      bodaEnv.toolsFunc.console_copy(`Navigator_credentials_get -> credentials -> ${credentials}`)
      return credentials
  }
  bodaEnv.envFunc.Navigator_clipboard_get = function() {
      let isclipboard = bodaEnv.toolsFunc.getObjWeakMapProtoAttr.call(this, 'clipboard')
      if (isclipboard) {
          bodaEnv.toolsFunc.console_copy(`Navigator_clipboard_get 已存在返回`, isclipboard)
          return isclipboard
      }
      let clipboard = new Clipboard('bobo')
      bodaEnv.toolsFunc.setObjWeakMapProtoAttr.call(this, 'clipboard', clipboard)
      bodaEnv.toolsFunc.console_copy(`Navigator_clipboard_get -> clipboard -> ${clipboard}`)
      return clipboard
  }
  bodaEnv.envFunc.MessagePort_onmessage_set = function() {
      let arg = arguments[0]
      let bodaevent = {
          'self': this,
          'callback': arg
      }
      bodaEnv.memory.asyncEvent['MessageChannel']['onmessage'].push(bodaevent)
      bodaEnv.toolsFunc.console_copy(`MessagePort_onmessage_set 当前func 属于事件 可能需要进行调用 arg ->`, arg)
      return arg
  }
  bodaEnv.envFunc.Navigator_mediaDevices_get = function() {
      let ismediaDevices = bodaEnv.toolsFunc.getObjWeakMapProtoAttr.call(this, 'mediaDevices')
      if (ismediaDevices) {
          bodaEnv.toolsFunc.console_copy(`Navigator_mediaDevices_get 已存在返回`, ismediaDevices)
          return ismediaDevices
      }
      let medias = new MediaDevices('bobo')
      bodaEnv.toolsFunc.setObjWeakMapProtoAttr.call(this, 'mediaDevices', medias)
      bodaEnv.toolsFunc.console_copy(`Navigator_mediaDevices_get -> medias -> ${medias}`)
      return medias

  }
  bodaEnv.envFunc.MediaDevices_enumerateDevices = function() {
      if (bodaEnv.memory.cache['MediaDevices_enumerateDevices']["res"]) {
          bodaEnv.toolsFunc.console_copy(`MediaDevices_enumerateDevices cache已存在直接返回`)
          return bodaEnv.memory.cache['MediaDevices_enumerateDevices']["res"]
      }

      let enulist = [new InputDeviceInfo('bobo'), new InputDeviceInfo('bobo'), new MediaDeviceInfo('bobo')]
      let promise = new Promise((resolve,reject)=>{
          resolve(enulist);
      }
      );
      bodaEnv.toolsFunc.console_copy(`MediaDevices_enumerateDevices  `, '获取当前可用媒体设备信息 ->', enulist, ` ->返回值为异步promise ->`, promise);
      bodaEnv.memory.cache['MediaDevices_enumerateDevices']["res"] = promise;
      // bodaEnv.memory.cache['MediaDevices_enumerateDevices']["this"] = this;
      return promise;
  }

  bodaEnv.envFunc.location_origin_get = function() {
      let origin = bodaEnv.memory.tempLocation.origin
      bodaEnv.toolsFunc.console_copy(`location_origin_get res->`, origin)

      return origin
  }
  bodaEnv.envFunc.WebSocket_onmessage_set = function() {
      let arg = arguments[0]
      bodaEnv.memory.asyncEvent['websocket']['onmessage'].push(arg)
      bodaEnv.toolsFunc.console_copy(this, ` -> WebSocket_onmessage_set -> arg ->`, arg)
      return arg

  }

  bodaEnv.envFunc.History_length_get = function() {
      bodaEnv.toolsFunc.console_copy(`History_length_get res->默认返回2`)
      return 2
  }
  bodaEnv.envFunc.History_replaceState = function() {
      let arg0 = arguments[0]
      let arg1 = arguments[1]
      let arg2 = arguments[2]
      bodaEnv.toolsFunc.console_copy(this, ` -> History_replaceState 未实现!!!!  需要触发popstate事件,暂时不实现-> arg0,arg1,arg2 ->`, arg0, ' -> ', arg1, ' -> ', arg2)

      // bodaEnv.toolsFunc.console_copy(this, ` -> History_replaceState   需要触发popstate事件,暂时不实现-> arg0,arg1,arg2 ->`, arg0, ' -> ', arg1, ' -> ', arg2)
      // let _href = bodaEnv.memory.location['_href']
      // let _search = bodaEnv.memory.location['_search']
      // let sufIndex = arg2.indexOf('?')
      // if (sufIndex != -1) {
      //     let temp = arg2.slice(sufIndex)
      //     bodaEnv.memory.location['search'] = _search + temp
      //     bodaEnv.memory.location['href'] = _href + temp

      // } else {
      //     bodaEnv.memory.location['search'] = ''
      //     bodaEnv.memory.location['href'] = _href + arg2

      // }
      // document.currentScript.src = 'https://challenges.cloudflare.com/turnstile/v0/g/313d8a27/api.js?onload=URXdVe4&render=explicit'
      // let newcode = sionfs.readFileSync('D://My_Dir//env_xbb_lastest_bo//run//new//www.e-food.gr//onload.js').toString()
      // eval(newcode)
  }

  bodaEnv.envFunc.NetworkInformation_effectiveType_get = function() {
      bodaEnv.toolsFunc.console_copy(this, ` -> NetworkInformation_effectiveType_get res-> 默认返回`, '4g')
      return '4g'

  }
  bodaEnv.envFunc.PerformanceResourceTiming_decodedBodySize_get = function() {
      // debugger
      let thisObj = bodaEnv.toolsFunc.getObjWeakMapProtoAttr.call(this, 'getEntriesByType')
      let _decodedBodySize = thisObj['decodedBodySize']
      bodaEnv.toolsFunc.console_copy(`PerformanceResourceTiming_decodedBodySize_get _decodedBodySize-> ${_decodedBodySize} `)
      return _decodedBodySize
  }



  bodaEnv.envFunc.Performance_setResourceTimingBufferSize = function() {
      let _arg = arguments[0]
      bodaEnv.toolsFunc.setObjWeakMapProtoAttr.call(this, 'setResourceTimingBufferSize', _arg)
      // debugger
      bodaEnv.toolsFunc.console_copy(`Performance_setResourceTimingBufferSize _arg->`, _arg)

  }
  bodaEnv.envFunc.Performance_timing_get = function() {
      let islive = bodaEnv.toolsFunc.getObjWeakMapProtoAttr.call(this, 'timing')
      if (islive) {
          bodaEnv.toolsFunc.console_copy(`Performance_timing_get res->`, islive)

          return islive
      }
      let _res = new bodaEnv.memory.globlProtoObj['PerformanceTiming']('bobo')
      bodaEnv.toolsFunc.setObjWeakMapProtoAttr.call(this, 'timing', _res)
      bodaEnv.toolsFunc.console_copy(`Performance_timing_get res->`, _res)

      return _res

  }
  bodaEnv.envFunc.PerformanceEntry_name_get = function() {
      // let per=
      // debugger
      let thisNode = bodaEnv.toolsFunc.getObjWeakMapProtoAttr.call(this, 'getEntriesByType')
      let _name = thisNode["name"]
      bodaEnv.toolsFunc.console_copy(`PerformanceEntry_name_get res-> 可能是检测点`, _name)
      return _name
  }
  bodaEnv.envFunc.Navigator_vendor_get = function() {
      let res = bodaEnv.memory.navigator['vendor']
      bodaEnv.toolsFunc.console_copy(`Navigator_vendor_get res->`, res);

      return res
  }
  bodaEnv.envFunc.Navigator_cookieEnabled_get = function() {
      let res = bodaEnv.memory.navigator['cookieEnabled']
      bodaEnv.toolsFunc.console_copy(`Navigator_cookieEnabled_get res->`, res);

      return true
  }
  bodaEnv.envFunc.Navigator_javaEnabled = function() {
      let res = bodaEnv.memory.navigator['javaEnabled']
      bodaEnv.toolsFunc.console_copy(`Navigator_javaEnabled res->`, res);

      return res
  }

  bodaEnv.envFunc.Crypto_getRandomValues = function() {
      let arg = arguments[0]
      if (arg instanceof Uint8Array) {
          // debugger
          for (let index = 0; index < arg.length; index++) {
              arg[index] = 1

          }
          // res.__proto__=TypedArray.prototype
          // debugger
          bodaEnv.toolsFunc.console_copy(`Crypto_getRandomValues arg->`, arg, `长度->${arg.length} ->默认全部为1`)
          // debugger
          return arg
      } else {
          bodaEnv.toolsFunc.console_copy(`Crypto_getRandomValues arg->`, arg, `类型未实现!!!!!!!!!!!!`)

      }
  }

  bodaEnv.envFunc.Screen_onchange_set = function Screen_onchange_set() {
      let onchange = arguments[0]
      bodaEnv.memory.screen["onchange"] = onchange
      bodaEnv.toolsFunc.console_copy(`Screen_onchange_set `, `${onchange}  `)

      return onchange
  }
  bodaEnv.envFunc.Screen_onchange_get = function Screen_onchange_get() {
      let onchange = bodaEnv.memory.screen["onchange"]
      bodaEnv.toolsFunc.console_copy(`Screen_onchange_get `, `${onchange}  `)

      return onchange
  }

  bodaEnv.envFunc.Navigator_language_get = function() {
      let res = bodaEnv.memory.navigator['language']
      bodaEnv.toolsFunc.console_copy(`Navigator_language_get  res->`, res);
      return res
  }
  bodaEnv.envFunc.Navigator_locks_get = function() {
      let islive = bodaEnv.toolsFunc.getObjWeakMapProtoAttr.call(this, 'locks')
      if (islive) {
          bodaEnv.toolsFunc.console_copy(`Navigator_locks_get  res->`, islive);
          return islive
      }
      let locks_ = new bodaEnv.memory.globlProtoObj['LockManager']('bobo')
      bodaEnv.toolsFunc.console_copy(`Navigator_locks_get  res->`, locks_);
      // bodaEnv.memory.cache['Navigator_locks_get'] = locks_
      bodaEnv.toolsFunc.setObjWeakMapProtoAttr.call(this, 'locks', locks_)
      return locks_
  }

  bodaEnv.envFunc.Navigator_storage_get = function() {
      let islive = bodaEnv.toolsFunc.getObjWeakMapProtoAttr.call(this, 'storage')
      if (islive) {
          bodaEnv.toolsFunc.console_copy(`Navigator_storage_get -> cache已存在`, `${islive}  `);

          return islive
      }
      let storage = new StorageManager('bobo')
      bodaEnv.toolsFunc.setObjWeakMapProtoAttr.call(this, 'storage', storage)
      bodaEnv.toolsFunc.console_copy(`Navigator_storage_get `, `${storage}  `);

      return storage
  }
  bodaEnv.envFunc.Navigator_productSub_get = function() {

      let productSub = bodaEnv.memory.navigator["productSub"]
      bodaEnv.toolsFunc.console_copy(`Navigator_productSub_get ->`, `${productSub}  `);
      return productSub
  }
  bodaEnv.envFunc.Navigator_appName_get = function Navigator_appName_get() {
      let appName = bodaEnv.memory.navigator["appName"]
      bodaEnv.toolsFunc.console_copy(`Navigator_appName_get ->`, `${appName}  `);

      ;;
      return appName
  }
  bodaEnv.envFunc.Navigator_hardwareConcurrency_get = function Navigator_hardwareConcurrency_get() {
      bodaEnv.toolsFunc.console_copy(`Navigator_hardwareConcurrency_get ->`, `${8}  `);
      return 8
  }

  bodaEnv.envFunc.Performance_now = function() {
      bodaEnv.toolsFunc.console_copy(`Performance_now -> res`, 4809.79999999702)
      return 4809.79999999702
  }

  bodaEnv.envFunc.Navigator_connection_get = function() {
      let islive = bodaEnv.toolsFunc.getObjWeakMapProtoAttr.call(this, 'connection')
      if (islive) {
          bodaEnv.toolsFunc.console_copy(`Navigator_connection_get res->`, islive)

          return islive
      }
      let networkInformation = new NetworkInformation('bobo')
      bodaEnv.toolsFunc.setObjWeakMapProtoAttr.call(this, 'connection', networkInformation)
      bodaEnv.toolsFunc.console_copy(`Navigator_connection_get res->`, networkInformation)
      return networkInformation
  }

  bodaEnv.envFunc.Navigator_platform_get = function() {

      let platform = bodaEnv.memory.navigator['platform'];
      bodaEnv.toolsFunc.console_copy(`Navigator_platform_get res->`, platform);
      return platform;
  }
  ;

  bodaEnv.envFunc.location_hash_get = function() {

      let _host = bodaEnv.memory.tempLocation['hash'];
      bodaEnv.toolsFunc.console_copy(`location_hash_get `, `res ->${_host}`);
      return _host;
  }
  ;
  bodaEnv.envFunc.location_host_get = function() {

      let _host = bodaEnv.memory.tempLocation['host'];
      // debugger
      bodaEnv.toolsFunc.console_copy(`location_host_get `, `res ->${_host}`);
      return _host;
  }
  ;

  bodaEnv.envFunc.location_pathname_get = function() {

      let pathname = bodaEnv.memory.tempLocation['pathname'];
      bodaEnv.toolsFunc.console_copy(`location_pathname_get `, `arg ->${pathname}`);
      return pathname;
  }
  ;

  bodaEnv.envFunc.location_hostname_get = function() {

      let hostname_ = bodaEnv.memory.tempLocation['hostname'];
      bodaEnv.toolsFunc.console_copy(`location_hostname_get `, `arg ->${hostname_}`);
      return hostname_;
  }
  ;

  bodaEnv.envFunc.location_port_get = function() {

      let _port = bodaEnv.memory.tempLocation['port'];
      bodaEnv.toolsFunc.console_copy(`location_port_get `, `res ->${_port}`);
      return _port;
  }
  ;

  bodaEnv.envFunc.Navigator_webdriver_get = function() {

      bodaEnv.toolsFunc.console_copy("Navigator_webdriver_get ->", false);
      return false;
  }
  ;

  bodaEnv.envFunc.Navigator_getBattery = function() {

      let islive = bodaEnv.toolsFunc.getObjWeakMapProtoAttr.call(this, 'getBattery')
      if (islive) {
          bodaEnv.toolsFunc.console_copy(`Navigator_getBattery ->cache已存在直接返回 `, islive);
          return islive
      }
      let batteryManager = new bodaEnv.memory.globlProtoObj['BatteryManager']('bobo');
      let promise = new Promise((resolve,reject)=>{
          resolve(batteryManager);
      }
      );
      bodaEnv.toolsFunc.console_copy(`Navigator_getBattery  `, '添加异步电池信息 ->', batteryManager, ` ->返回值为异步promise ->`, promise);
      bodaEnv.toolsFunc.setObjWeakMapProtoAttr.call(this, 'getBattery', promise)
      return promise;
  }
  ;
  bodaEnv.envFunc.location_protocol_get = function() {

      let protocol = bodaEnv.memory.tempLocation['protocol'];
      bodaEnv.toolsFunc.console_copy(`location_protocol_get res->`, protocol);
      return protocol;
  }
  ;
  bodaEnv.envFunc.Navigator_appVerboda_get = function() {

      let appVerboda = bodaEnv.memory.navigator['appVerboda'];
      bodaEnv.toolsFunc.console_copy(`Navigator_appVerboda_get res->`, appVerboda);
      return appVerboda;
  }
  ;
  bodaEnv.envFunc.Navigator_languages_get = function() {

      let langues = bodaEnv.memory.navigator['languages'];
      bodaEnv.toolsFunc.console_copy(`Navigator_languages_get res->`, langues);
      return langues;
  }
  ;
  bodaEnv.envFunc.Navigator_webkitPersistentStorage_get = function() {

      // debugger
      let islive = bodaEnv.toolsFunc.getObjWeakMapProtoAttr.call(this, 'webkitPersistentStorage')
      if (islive) {
          bodaEnv.toolsFunc.console_copy(`Navigator_webkitPersistentStorage_get 已存在,直接从cache中取值`, 'res- >', islive);
          return islive;
      }
      let _webkit = new bodaEnv.memory.globlProtoObj["DeprecatedStorageQuota"]("bobo");
      // delete _webkit.__proto__.constructor
      bodaEnv.toolsFunc.setObjWeakMapProtoAttr.call(this, 'webkitPersistentStorage', _webkit)
      bodaEnv.toolsFunc.console_copy(`Navigator_webkitPersistentStorage_get res->`, _webkit);
      return _webkit;
  }
  ;
  bodaEnv.envFunc.Navigator_userAgent_get = function() {

      let ua = bodaEnv.memory.navigator["userAgent"];
      bodaEnv.toolsFunc.console_copy(`Navigator_userAgent_get res->`, ua);
      return ua;
  }
  ;
  bodaEnv.envFunc.location_href_get = function() {

      //   debugger;
      let _href = bodaEnv.memory.tempLocation['href'];
      bodaEnv.toolsFunc.console_copy(`location_href_get res->`, _href);
      return _href;
  }
  ;

  bodaEnv.envFunc.location_search_get = function() {
      let search_ = bodaEnv.memory.tempLocation['search']
      bodaEnv.toolsFunc.console_copy(`location_search_get res ->`, search_)
      return search_

  }
  bodaEnv.envFunc.location_replace = function() {
      let r = arguments[0]
      debugger // res = sionobj.location.replace(r)
      bodaEnv.toolsFunc.console_copy(`location_replace `, `replace->${r}`, );
      bodaEnv.toolsFunc.console_copy(`--------------------页面跳转停止执行--------------------`, );
      bodaEnv.toolsFunc.console_copy(`--------------------页面跳转停止执行--------------------`, );
      // bodaEnv.toolsFunc.console_copy(`--------------------直接执行lastDeal--------------------`,);
      bodaEnv.toolsFunc.console_copy(document.cookie)
      // throw ('End', `--------------------直接执行lastDeal--------------------`)

  }

  bodaEnv.envFunc.Navigator_plugins_get = function() {

      bodaEnv.toolsFunc.console_copy(`Navigator_plugins_get res ->`, bodaEnv.memory.PluginArray)

      return bodaEnv.memory.PluginArray
  }
  bodaEnv.envFunc.location_valueOf = function() {
      let locationValue = bodaEnv.memory.globlProtoObj['location'];
      bodaEnv.toolsFunc.console_copy(`location_valueOf res ->`, 'location');
      return locationValue;
  }

  bodaEnv.envFunc.MessageChannel_port2_get = function() {

      let islive = bodaEnv.toolsFunc.getObjWeakMapProtoAttr.call(this, 'port2')
      if (islive) {
          bodaEnv.toolsFunc.console_copy(`MessageChannel_port2_get -> `, ` -> res ->`, mesPort);
          return islive;

      }
      // let cachePort2=
      let mesPort = new MessagePort('bobo');
      bodaEnv.toolsFunc.setObjWeakMapProtoAttr.call(this, 'port2', mesPort)
      bodaEnv.toolsFunc.console_copy(`MessageChannel_port2_get -> `, ` -> res ->`, mesPort);
      return mesPort;
  }
  ;
  bodaEnv.envFunc.MessageChannel_port1_get = function() {

      let islive = bodaEnv.toolsFunc.getObjWeakMapProtoAttr.call(this, 'port1')
      if (islive) {
          bodaEnv.toolsFunc.console_copy(`MessageChannel_port2_get -> `, ` -> res ->`, mesPort);
          return islive;

      }
      // let cachePort2=
      let mesPort = new MessagePort('bobo');
      bodaEnv.toolsFunc.setObjWeakMapProtoAttr.call(this, 'port1', mesPort)

      bodaEnv.toolsFunc.console_copy(`MessageChannel_port1_get -> `, ` -> res ->`, mesPort);
      return mesPort;
  }
  ;

  bodaEnv.envFunc.StorageManager_estimate = function() {

      // debugger

      let res = {
          quota: 51539605094,
          usage: 0,
          usageDetails: {}
      };
      let promise = new Promise((resolve,reject)=>{
          resolve(res);
      }
      );
      bodaEnv.toolsFunc.console_copy(`StorageManager_estimate `, `-> res  需要根据网站修改!!!->${promise}`);
      return promise;
  }
  ;
  bodaEnv.envFunc.Performance_getEntriesByType = function() {
        // debugger
      let type = arguments[0];
      let typeList = []

          let reslist = bodaEnv.memory.Performance['getEntriesByType'];
          // numm=0
          for (let res of reslist) {
              let islive=bodaEnv.toolsFunc.getObjWeakMapProtoAttr.call(res, 'getEntriesByType')
              if (islive){
                typeList.push(islive)
              }else{
                let res_ = new PerformanceResourceTiming('bobo');
                res_=bodaEnv.toolsFunc.proxyPerformance(res_,'PerformanceResourceTiming ::proxyPerformance ')
                bodaEnv.toolsFunc.setObjWeakMapProtoAttr.call(res_, 'getEntriesByType', res)
                bodaEnv.toolsFunc.setObjWeakMapProtoAttr.call(res_, 'type',type)

                bodaEnv.toolsFunc.setObjWeakMapProtoAttr.call(res, 'getEntriesByType',res_)
                typeList.push(res_)
              }

              // numm+=1
          }
          //  debugger
          bodaEnv.toolsFunc.console_copy(`Performance_getEntriesByType- >`, `arg->${type}`, `-> res ->${typeList}`);
          return typeList;
  }
  ;

  bodaEnv.envFunc.Performance_timeOrigin_get = function() {

      let date = bodaEnv.memory.Performance['timeOrigin'];
      bodaEnv.toolsFunc.console_copy(`Performance_timeOrigin_get-> `, `-> res ->${date}`);
      return date;
  }
  ;
  bodaEnv.envFunc.BarProp_visible_get = function BarProp_visible_get() {

      // debugger
      let boolres = true;
      bodaEnv.toolsFunc.console_copy(`BarProp_visible_get `, `boolres ->${boolres}`, `未完善`);
      return boolres;
  }
  ;

  bodaEnv.envFunc.XMLHttpRequest_timeout_set = function() {
      let time_ = arguments[0]
      bodaEnv.toolsFunc.setObjWeakMapProtoAttr.call(this, 'timeout', time_)
      bodaEnv.toolsFunc.console_copy(`XMLHttpRequest_timeout_set `, `time_ -> ${time_}`);

  }
  bodaEnv.envFunc.XMLHttpRequest_setRequestHeader = function() {
    // debugger
      let header = arguments[0]
      let value = arguments[1]
      if (header=='Param'){
        debugger
        globalThis.xxxxxheader=header
        globalThis.xxxxxvalue=value
      }

      bodaEnv.toolsFunc.setObjWeakMapProtoAttr.call(this, 'setRequestHeader', arguments)
      // debugger
      bodaEnv.toolsFunc.console_copy(`XMLHttpRequest_setRequestHeader `, `header -> ${header} ->value->${value}`);

  }
  bodaEnv.envFunc.XMLHttpRequest_abort = function() {
      // debugger
      bodaEnv.toolsFunc.console_copy(`XMLHttpRequest_abort `, `abort ->用于终止当前请求 修改abort为ture `);
      bodaEnv.toolsFunc.setObjWeakMapProtoAttr.call(this, 'abort', true)

  }
  bodaEnv.envFunc.XMLHttpRequest_responseText_get = function() {
      let responseText = bodaEnv.toolsFunc.getObjWeakMapProtoAttr.call(this, 'responseText') ? bodaEnv.toolsFunc.getObjWeakMapProtoAttr.call(this, 'responseText') : null
      bodaEnv.toolsFunc.console_copy(`XMLHttpRequest_responseText_get `, `responseText -> ${responseText}`);

      return responseText
  }
  bodaEnv.envFunc.XMLHttpRequest_responseXML_get = function() {
      let responseXML = bodaEnv.toolsFunc.getObjWeakMapProtoAttr.call(this, 'responseXML') ? bodaEnv.toolsFunc.getObjWeakMapProtoAttr.call(this, 'responseXML') : null
      bodaEnv.toolsFunc.console_copy(`XMLHttpRequest_responseXML_get `, `responseXML -> ${responseXML}`);

      return responseXML
  }
  bodaEnv.envFunc.XMLHttpRequest_responseType_get = function() {
      let responseType = bodaEnv.toolsFunc.getObjWeakMapProtoAttr.call(this, 'responseType') ? bodaEnv.toolsFunc.getObjWeakMapProtoAttr.call(this, 'responseType') : null
      bodaEnv.toolsFunc.console_copy(`XMLHttpRequest_responseType_get `, `responseType -> ${responseType}`);

      return responseType
  }
  bodaEnv.envFunc.XMLHttpRequest_response_get = function() {
      let response = bodaEnv.toolsFunc.getObjWeakMapProtoAttr.call(this, 'response') ? bodaEnv.toolsFunc.getObjWeakMapProtoAttr.call(this, 'response') : null
      bodaEnv.toolsFunc.console_copy(`XMLHttpRequest_response_get `, `response -> ${response}`);

      return response
  }
  bodaEnv.envFunc.XMLHttpRequest_statusText_get = function() {
      let statusText = bodaEnv.toolsFunc.getObjWeakMapProtoAttr.call(this, 'statusText') ? bodaEnv.toolsFunc.getObjWeakMapProtoAttr.call(this, 'statusText') : null
      bodaEnv.toolsFunc.console_copy(`XMLHttpRequest_statusText_get `, `statusText -> ${statusText}`);

      return statusText
  }
  bodaEnv.envFunc.XMLHttpRequest_status_get = function() {
      let status = bodaEnv.toolsFunc.getObjWeakMapProtoAttr.call(this, 'status') ? bodaEnv.toolsFunc.getObjWeakMapProtoAttr.call(this, 'status') : null
      bodaEnv.toolsFunc.console_copy(`XMLHttpRequest_status_get `, `status -> ${status}`);

      return status
  }
  bodaEnv.envFunc.XMLHttpRequest_responseURL_get = function() {
      let responseURL = bodaEnv.toolsFunc.getObjWeakMapProtoAttr.call(this, 'responseURL') ? bodaEnv.toolsFunc.getObjWeakMapProtoAttr.call(this, 'responseURL') : null
      bodaEnv.toolsFunc.console_copy(`XMLHttpRequest_responseURL_get `, `responseURL -> ${responseURL}`);

      return responseURL
  }
  bodaEnv.envFunc.XMLHttpRequest_withCredentials_get = function() {
      let withCredentials = bodaEnv.toolsFunc.getObjWeakMapProtoAttr.call(this, 'withCredentials') ? bodaEnv.toolsFunc.getObjWeakMapProtoAttr.call(this, 'withCredentials') : null
      bodaEnv.toolsFunc.console_copy(`XMLHttpRequest_withCredentials_get `, `withCredentials -> ${withCredentials}`);

      return withCredentials
  }
  bodaEnv.envFunc.XMLHttpRequestEventTarget_onabort_set = function() {
      let _onabort = arguments[0]

      bodaEnv.toolsFunc.setObjWeakMapProtoAttr.call(this, 'onloadend', _onabort)
      bodaEnv.toolsFunc.console_copy(`XMLHttpRequestEventTarget_onloadend_set `, `onload -> ${_onabort}`);

      return _onabort
  }
  bodaEnv.envFunc.XMLHttpRequestEventTarget_onloadend_set = function() {
      let onloadend = arguments[0]

      bodaEnv.toolsFunc.setObjWeakMapProtoAttr.call(this, 'onloadend', onloadend)
      bodaEnv.toolsFunc.console_copy(`XMLHttpRequestEventTarget_onloadend_set `, `onload -> ${onloadend}`);

      return onloadend
  }
  bodaEnv.envFunc.XMLHttpRequestEventTarget_onload_set = function() {
      let onload = arguments[0]

      bodaEnv.toolsFunc.setObjWeakMapProtoAttr.call(this, 'onload', onload)
      bodaEnv.toolsFunc.console_copy(`XMLHttpRequestEventTarget_onload_set `, `onload -> ${onload}`);

      return onload
  }
  bodaEnv.envFunc.XMLHttpRequest_onreadystatechange_set = function() {
      let onreadystatechange = arguments[0]
      // debugger
      bodaEnv.toolsFunc.setObjWeakMapProtoAttr.call(this, 'onreadystatechange', onreadystatechange)
      bodaEnv.toolsFunc.console_copy(`XMLHttpRequest_onreadystatechange_set `, `onreadystatechange -> ${onreadystatechange}`);

      return onreadystatechange
  }

  bodaEnv.envFunc.XMLHttpRequest_timeout_get = function() {
      let timeout = bodaEnv.toolsFunc.getObjWeakMapProtoAttr.call(this, 'timeout') ? bodaEnv.toolsFunc.getObjWeakMapProtoAttr.call(this, 'timeout') : null
      bodaEnv.toolsFunc.console_copy(`XMLHttpRequest_timeout_get `, `timeout -> ${timeout}`);

      return timeout
  }
  bodaEnv.envFunc.XMLHttpRequest_readyState_get = function() {
      // debugger
      // if (){}
      let isopen = bodaEnv.toolsFunc.getObjWeakMapProtoAttr.call(this, 'open') ? 1 : 0
      let issend = bodaEnv.toolsFunc.getObjWeakMapProtoAttr.call(this, 'send') ? 2 : isopen
      // let iscompleted=bodaEnv.toolsFunc.getObjWeakMapProtoAttr.call(this,'onload')?4:issend  //默认不需要3,直接4
      let readyState = bodaEnv.toolsFunc.getObjWeakMapProtoAttr.call(this, 'readyState') ? bodaEnv.toolsFunc.getObjWeakMapProtoAttr.call(this, 'readyState') : issend
      bodaEnv.toolsFunc.console_copy(`XMLHttpRequest_readyState_get `, `readyState -> ${readyState}`);

      return readyState
  }
  bodaEnv.envFunc.XMLHttpRequest_onreadystatechange_get = function() {
      let onreadystatechange = bodaEnv.toolsFunc.getObjWeakMapProtoAttr.call(this, 'onreadystatechange') ? bodaEnv.toolsFunc.getObjWeakMapProtoAttr.call(this, 'onreadystatechange') : null
      bodaEnv.toolsFunc.console_copy(`XMLHttpRequest_onreadystatechange_get `, `onreadystatechange -> ${onreadystatechange}`);

      return onreadystatechange
  }
  bodaEnv.envFunc.XMLHttpRequest_upload_get = function XMLHttpRequest_upload_get() {

      let upload = bodaEnv.toolsFunc.getObjWeakMapProtoAttr.call(this, 'upload') ? bodaEnv.toolsFunc.getObjWeakMapProtoAttr.call(this, 'upload') : null;
      bodaEnv.toolsFunc.console_copy(`XMLHttpRequestEventTarget_upload_get `, `upload -> ${upload}`);
      return upload;
  }
  ;
  bodaEnv.envFunc.XMLHttpRequestEventTarget_ontimeout_get = function XMLHttpRequestEventTarget_ontimeout_get() {

      let ontimeout = bodaEnv.toolsFunc.getObjWeakMapProtoAttr.call(this, 'ontimeout') ? bodaEnv.toolsFunc.getObjWeakMapProtoAttr.call(this, 'ontimeout') : null;
      bodaEnv.toolsFunc.console_copy(`XMLHttpRequestEventTarget_ontimeout_get `, `ontimeout -> ${ontimeout}`);
      return ontimeout;
  }
  ;
  bodaEnv.envFunc.XMLHttpRequestEventTarget_onprogress_get = function XMLHttpRequestEventTarget_onprogress_get() {

      let onprogress = bodaEnv.toolsFunc.getObjWeakMapProtoAttr.call(this, 'onprogress') ? bodaEnv.toolsFunc.getObjWeakMapProtoAttr.call(this, 'onprogress') : null;
      bodaEnv.toolsFunc.console_copy(`XMLHttpRequestEventTarget_onprogress_get `, `onprogress -> ${onprogress}`);
      return onprogress;
  }
  ;
  bodaEnv.envFunc.XMLHttpRequestEventTarget_onloadend_get = function XMLHttpRequestEventTarget_onloadend_get() {

      let onloadend = bodaEnv.toolsFunc.getObjWeakMapProtoAttr.call(this, 'onloadend') ? bodaEnv.toolsFunc.getObjWeakMapProtoAttr.call(this, 'onloadend') : null;
      bodaEnv.toolsFunc.console_copy(`XMLHttpRequestEventTarget_onloadend_get `, `onloadend -> ${onloadend}`);
      return onloadend;
  }
  ;
  bodaEnv.envFunc.XMLHttpRequestEventTarget_onloadstart_get = function XMLHttpRequestEventTarget_onloadstart_get() {

      // debugger
      let onloadstart = bodaEnv.toolsFunc.getObjWeakMapProtoAttr.call(this, 'onloadstart') ? bodaEnv.toolsFunc.getObjWeakMapProtoAttr.call(this, 'onloadstart') : null;
      bodaEnv.toolsFunc.console_copy(`XMLHttpRequestEventTarget_onloadstart_get `, `onloadstart -> ${onloadstart}`);
      return onloadstart;
  }
  ;
  bodaEnv.envFunc.XMLHttpRequestEventTarget_onerror_get = function XMLHttpRequestEventTarget_onerror_get() {

      let onerror = bodaEnv.toolsFunc.getObjWeakMapProtoAttr.call(this, 'onerror') ? bodaEnv.toolsFunc.getObjWeakMapProtoAttr.call(this, 'onerror') : null;
      bodaEnv.toolsFunc.console_copy(`XMLHttpRequestEventTarget_onerror_get `, `onerror -> ${onerror}`);
      return onerror;
  }
  ;
  bodaEnv.envFunc.XMLHttpRequestEventTarget_onload_get = function XMLHttpRequestEventTarget_onload_get() {

      let onload = bodaEnv.toolsFunc.getObjWeakMapProtoAttr.call(this, 'onload') ? bodaEnv.toolsFunc.getObjWeakMapProtoAttr.call(this, 'onload') : null;
      bodaEnv.toolsFunc.console_copy(`XMLHttpRequestEventTarget_onload_get `, `onerror -> ${onload}`);
      return onload;
  }
  ;
  bodaEnv.envFunc.XMLHttpRequestEventTarget_onabort_get = function XMLHttpRequestEventTarget_onabort_get() {

      // debugger
      let onabort = bodaEnv.toolsFunc.getObjWeakMapProtoAttr.call(this, 'onabort') ? bodaEnv.toolsFunc.getObjWeakMapProtoAttr.call(this, 'onabort') : null;
      bodaEnv.toolsFunc.console_copy(`XMLHttpRequestEventTarget_onabort_get `, `onabort -> ${onabort}`);
      return onabort;
  }
  ;

  bodaEnv.envFunc.XMLHttpRequestEventTarget_onerror_set = function() {
      let arg = arguments[0];
      // this._boarg.withCredentials = arg
      bodaEnv.toolsFunc.setObjWeakMapProtoAttr.call(this, 'onerror', arg);
      bodaEnv.toolsFunc.console_copy(`XMLHttpRequestEventTarget_onerror_set `, `arg -> ${arg}`);
      return arg;
  }
  bodaEnv.envFunc.XMLHttpRequestEventTarget_ontimeout_set = function() {
      let arg = arguments[0];
      // this._boarg.withCredentials = arg
      bodaEnv.toolsFunc.setObjWeakMapProtoAttr.call(this, 'ontimeout', arg);
      bodaEnv.toolsFunc.console_copy(`XMLHttpRequestEventTarget_ontimeout_set `, `arg -> ${arg}`);
      return arg;
  }
  bodaEnv.envFunc.XMLHttpRequest_withCredentials_set = function XMLHttpRequest_withCredentials_set() {

      // debugger
      let arg = arguments[0];
      // this._boarg.withCredentials = arg
      bodaEnv.toolsFunc.setObjWeakMapProtoAttr.call(this, 'withCredentials', arg);
      bodaEnv.toolsFunc.console_copy(`XMLHttpRequest_withCredentials_set `, `arg -> ${arg}`);
      return arg;
  }
  ;
  bodaEnv.envFunc.Permissions_query = function Permissions_query() {

      // debugger
      let query = arguments[0];
      if (query['name'] == 'geolocation') {
          let res = new PermissionStatus('bobo');
          // res.__proto__ = bodaEnv.memory.globalobj['PermissionStatus'].prototype
          let promise = new Promise((resolve,reject)=>{
              resolve(res);
          }
          );
          bodaEnv.toolsFunc.console_copy(`Permissions_query `, `-> res ->${promise}`);
          return promise;
      } else {
          bodaEnv.toolsFunc.console_copy(`Permissions_query `, `${query} 未实现`);
      }
  }
  ;
  bodaEnv.envFunc.Navigator_deviceMemory_get = function Navigator_deviceMemory_get() {

      // debugger
      let deviceMemory = bodaEnv.memory.navigator['deviceMemory'];
      bodaEnv.toolsFunc.console_copy(`Navigator_deviceMemory_get `, `deviceMemory ->${deviceMemory}`);
      return deviceMemory;
  }
  ;
  bodaEnv.envFunc.Navigator_maxTouchPoints_get = function Navigator_maxTouchPoints_get() {

      let maxTouchPoints = bodaEnv.memory.navigator['maxTouchPoints'];
      bodaEnv.toolsFunc.console_copy(`Navigator_maxTouchPoints_get `, `maxTouchPoints ->${maxTouchPoints}`);
      return maxTouchPoints;
  }
  ;
  bodaEnv.envFunc.Navigator_vendorSub_get = function Navigator_vendorSub_get() {

      let vendorSub = bodaEnv.memory.navigator['vendorSub'];
      bodaEnv.toolsFunc.console_copy(`Navigator_vendorSub_get `, `vendorSub ->${vendorSub}`);
      return vendorSub;
  }
  ;
  bodaEnv.envFunc.Navigator_product_get = function Navigator_product_get() {

      let product = bodaEnv.memory.navigator['product'];
      bodaEnv.toolsFunc.console_copy(`Navigator_product_get `, `product ->${product}`);
      return product;
  }
  ;
  bodaEnv.envFunc.Navigator_doNotTrack_get = function Navigator_doNotTrack_get() {

      let doNotTrack = null;
      bodaEnv.toolsFunc.console_copy(`Navigator_doNotTrack_get `, `doNotTrack ->${doNotTrack}`);
      return doNotTrack;
  }
  ;

  bodaEnv.envFunc.RTCPeerConnection_setLocalDescription = function() {
      // debugger
      let _obj = arguments[0]
      let promise = bodaEnv.toolsFunc.getObjWeakMapProtoAttr.call(this, 'createOffer')

      bodaEnv.toolsFunc.setObjWeakMapProtoAttr.call(this, 'setLocalDescription', _obj)

      return promise
  }
  bodaEnv.envFunc.RTCPeerConnection_createDataChannel = function RTCPeerConnection_createDataChannel() {

      let label = arguments[0];
      let options = arguments[1];
      if (label == 'label') {
          let DataChannel = new RTCDataChannel('bobo');
          // DataChannel.__proto__ = bodaEnv.memory.globalobj['RTCDataChannel'].prototype
          bodaEnv.toolsFunc.console_copy(`RTCPeerConnection_createDataChannel `, `label->${label} `, `options->${options} `, `DataChannel->${DataChannel}  `);
          return DataChannel;
      }
  }
  ;
  bodaEnv.envFunc.RTCPeerConnection_createOffer = function() {

      let _successCallback = arguments[0]
      let _failureCallback = arguments[1]
      let _options = arguments[3]
      let promise = new Promise((resolve,reject)=>{
          resolve(_successCallback);
      }
      );
      bodaEnv.toolsFunc.setObjWeakMapProtoAttr.call(this, 'createOffer', promise)
      if (bodaEnv.memory.RTCPeerConnection.indexOf(this) == -1) {
          bodaEnv.memory.RTCPeerConnection.push(this)
      }
      // debugger
      return promise

  }
  bodaEnv.envFunc.RTCPeerConnection_localDescription_get = function() {
      // debugger
      let _res = bodaEnv.toolsFunc.getObjWeakMapProtoAttr.call(this, 'localDescription') ? bodaEnv.toolsFunc.getObjWeakMapProtoAttr.call(this, 'localDescription') : null
      bodaEnv.toolsFunc.console_copy(`RTCPeerConnection_localDescription_get res->`, _res)

      return _res

  }
  bodaEnv.envFunc.RTCSessionDescription_sdp_get = function() {
      let _sdp = 'v=0\r\no=- 283646262374240015 2 IN IP4 127.0.0.1\r\ns=-\r\nt=0 0\r\na=group:BUNDLE 0\r\na=extmap-allow-mixed\r\na=msid-semantic: WMS\r\nm=application 9 UDP/DTLS/SCTP webrtc-datachannel\r\nc=IN IP4 0.0.0.0\r\na=candidate:3810267142 1 udp 2113937151 c9d17d26-c64c-4f6d-8935-d34d0c8b0e25.local 51806 typ host generation 0 network-cost 999\r\na=ice-ufrag:zByE\r\na=ice-pwd:2UoKT0eOwJeeZwAgjWodRyqU\r\na=ice-options:trickle\r\na=fingerprint:sha-256 9A:C4:12:A0:BE:38:9F:A6:AA:55:24:66:A0:5F:81:91:B2:9C:27:41:67:56:3C:0F:4E:16:C0:E6:77:E3:41:C7\r\na=setup:actpass\r\na=mid:0\r\na=sctp-port:5000\r\na=max-message-size:262144\r\n'
      bodaEnv.toolsFunc.console_copy(`RTCSessionDescription_sdp_get IP检测 res->`, _sdp)

      return _sdp
  }
  bodaEnv.envFunc.RTCPeerConnectionIceEvent_candidate_get = function() {
      let _candidate = new bodaEnv.memory.globlProtoObj['RTCIceCandidate']('bobo')
      bodaEnv.toolsFunc.console_copy(`RTCPeerConnectionIceEvent_candidate_get res->`, _candidate)

      return _candidate
  }
  bodaEnv.envFunc.RTCIceCandidate_candidate_get = function() {
      let _candidate = `candidate:3944232574 1 udp 1677729535 ${bodaEnv.memory.ip_addr} 61349 typ srflx raddr 0.0.0.0 rport 0 generation 0 ufrag CgZQ network-cost 999`

      bodaEnv.toolsFunc.console_copy(`RTCIceCandidate_candidate_get  IP检测  res->`, _candidate)

      return _candidate
  }
  bodaEnv.envFunc.RTCPeerConnection_onicecandidate_set = function() {
      let _arg = arguments[0]
      bodaEnv.toolsFunc.setObjWeakMapProtoAttr.call(this, 'onicecandidate', _arg);

      bodaEnv.toolsFunc.console_copy(`RTCPeerConnection_onicecandidate_set arg->`, _arg)
      if (bodaEnv.memory.RTCPeerConnection.indexOf(this) == -1) {
          bodaEnv.memory.RTCPeerConnection.push(this)
      }
      return _arg

  }
  bodaEnv.envFunc.RTCPeerConnection_onicegatheringstatechange_set = function RTCPeerConnection_onicegatheringstatechange_set() {

      let change = arguments[0];

      // this._onicegatheringstatechange = change
      bodaEnv.toolsFunc.setObjWeakMapProtoAttr.call(this, 'onicegatheringstatechange', change);
      if (bodaEnv.memory.RTCPeerConnection.indexOf(this) == -1) {
          bodaEnv.memory.RTCPeerConnection.push(this)
      }
      bodaEnv.toolsFunc.console_copy(`RTCPeerConnection_onicegatheringstatechange_set `, `onicegatheringstatechange ->${_onicegatheringstatechange}`);
      return change;
  }
  ;

  bodaEnv.envFunc.Storage_setItem = function Storage_setItem() {

      // debugger
      let keyName = arguments[0];
      let keyValue = arguments[1];
    //   this[keyName] = keyValue;
      bodaEnv.toolsFunc.setObjWeakMapProtoAttr.call(this,keyName,keyValue)
      bodaEnv.toolsFunc.console_copy(`Storage_setItem `, `keyName->${keyName} `, `keyValue->${keyValue}  `);
  }
  ;
  bodaEnv.envFunc.Storage_getItem = function Storage_getItem() {

      let key = arguments[0];
      let item = bodaEnv.toolsFunc.getObjWeakMapProtoAttr.call(this,key) ? bodaEnv.toolsFunc.getObjWeakMapProtoAttr.call(this,key) : null;
      if (!item) {
          let _item = bodaEnv.memory.localStorage[key];
          if (_item) {
              bodaEnv.toolsFunc.console_copy(`Storage_getItem `, `key->${key} 存在于bodaEnv.memory.localStorage中直接取值`, `item->${_item}  `);

              // item=_item
              return _item;
          }
      }
      bodaEnv.toolsFunc.console_copy(`Storage_getItem `, `key->${key} `, `item->${item}  `);
      return item;
  }
  ;
  bodaEnv.envFunc.Storage_removeItem = function Storage_removeItem() {

      let key = arguments[0];
      bodaEnv.toolsFunc.console_copy(`Storage_removeItem `, `key->${key}  `);
      delete this[key];
  }
  ;
  bodaEnv.envFunc.Storage_key = function Storage_key() {

      let index = arguments[0];
      let i = 0;
      bodaEnv.toolsFunc.console_copy(`Storage_key `, `index${index}  `);
      for (var key in this) {
          // if (key == 'hasOwnProperty_bo') {
          //     continue;
          // }
          if (i === index) {
              return this[key];
          }
          i++;
      }
      return null;
  }
  ;
  bodaEnv.envFunc.Storage_clear = function Storage_clear() {

      // debugger
      // this = {}
      // this.__proto__=Storage.prototype
      bodaEnv.toolsFunc.console_copy(`Storage_clear `, `未实现!!!`);
  }
  ;
  bodaEnv.envFunc.Storage_length_get = function Storage_length_get() {

      i = 0
      // debugger
      for (var key in Object.getOwnPropertyDescriptors(this)) {
          // if (key == 'hasOwnProperty_bo') {
          //     continue;
          // }
          i++;
      }
      bodaEnv.toolsFunc.console_copy(`Storage_length_get `, `length->${i}   `);
      return i;
  }
  ;

  bodaEnv.envFunc.XMLHttpRequest_open = function XMLHttpRequest_open() {

      let method = arguments[0];
      let url = arguments[1];
      let type = arguments[2]
      bodaEnv.toolsFunc.console_copy(`XMLHttpRequest_open `, `[${method}] `, `[${url}]  [${type}]`);
    // debugger
      // this.mymethod=method
      bodaEnv.toolsFunc.setObjWeakMapProtoAttr.call(this, 'open', arguments);
    //   bodaEnv.toolsFunc.setObjWeakMapProtoAttr.call(this, 'self', this);
    // let dicccc=Object.getOwnPropertyDescriptors(this)
    // for (let oo in dicccc){
    // delete this[oo]
    // }
      // this.myurl=url
      // this._boarg.method = method
      // this._boarg.url = url
  }
  ;

  bodaEnv.envFunc.XMLHttpRequest_send = function XMLHttpRequest_send() {

      let body = arguments[0];
      bodaEnv.toolsFunc.console_copy(`XMLHttpRequest_send `, `body->${body}  `, `!!!!!!!!!未完善!!!!!!!!!!!!`);
      // this._boarg.send(body)
      bodaEnv.toolsFunc.setObjWeakMapProtoAttr.call(this, 'send', arguments);

      bodaEnv.toolsFunc.console_copy(`使用send发送数据,立马调用onreadystatechange或onload 事件`)
      // debugger
      let onreadystatechange = bodaEnv.toolsFunc.getObjWeakMapProtoAttr.call(this, 'onreadystatechange') ? bodaEnv.toolsFunc.getObjWeakMapProtoAttr.call(this, 'onreadystatechange') : null
      if (onreadystatechange) {
          bodaEnv.toolsFunc.setObjWeakMapProtoAttr.call(this, 'readyState', 4)
          bodaEnv.toolsFunc.setObjWeakMapProtoAttr.call(this, 'status', 200)
          bodaEnv.toolsFunc.setObjWeakMapProtoAttr.call(this, 'responseText', '这是测试数据')
          bodaEnv.toolsFunc.setObjWeakMapProtoAttr.call(this, 'response', new Uint8Array(32))
          bodaEnv.toolsFunc.setObjWeakMapProtoAttr.call(this, 'responseURL', '这是测试url,需要根据实际网站修改')
          // bodaEnv.toolsFunc.setObjWeakMapProtoAttr.call(this,'responseType','json')
          // bodaEnv.toolsFunc.setObjWeakMapProtoAttr.call(this,'responseType','document')
          onreadystatechange(this)
          return
      }
      let onload = bodaEnv.toolsFunc.getObjWeakMapProtoAttr.call(this, 'onload') ? bodaEnv.toolsFunc.getObjWeakMapProtoAttr.call(this, 'onload') : null
      if (onload) {
          bodaEnv.toolsFunc.setObjWeakMapProtoAttr.call(this, 'readyState', 4)
          bodaEnv.toolsFunc.setObjWeakMapProtoAttr.call(this, 'status', 200)
          bodaEnv.toolsFunc.setObjWeakMapProtoAttr.call(this, 'responseText', '这是测试数据')
          bodaEnv.toolsFunc.setObjWeakMapProtoAttr.call(this, 'response', new Uint8Array(32))
          bodaEnv.toolsFunc.setObjWeakMapProtoAttr.call(this, 'responseURL', '这是测试url,需要根据实际网站修改')
          // bodaEnv.toolsFunc.setObjWeakMapProtoAttr.call(this,'responseType','json')
          // bodaEnv.toolsFunc.setObjWeakMapProtoAttr.call(this,'responseType','document')
          onload(this)
          return
      }
  }
  ;

  bodaEnv.envFunc.Navigator_mimeTypes_get = function Navigator_mimeTypes_get() {

      let res = bodaEnv.memory.mimeTypes
      bodaEnv.toolsFunc.console_copy(`Navigator_mimeTypes_get - >res ->`, res)

      return res
  }
  ;

  bodaEnv.envFunc.MimeTypeArray_namedItem = function MimeTypeArray_namedItem() {

      let name = arguments[0];
      bodaEnv.toolsFunc.console_copy(`MimeTypeArray_namedItem - >name ->`, name)

      return this[name];
  }
  ;
  bodaEnv.envFunc.MimeTypeArray_item = function MimeTypeArray_item() {

      let index = arguments[0];
      bodaEnv.toolsFunc.console_copy(`MimeTypeArray_item - >arg ->`, index)

      return this[index];
  }
  ;
  bodaEnv.envFunc.Plugin_namedItem = function Plugin_namedItem() {

      let name = arguments[0];
      bodaEnv.toolsFunc.console_copy(`Plugin_namedItem - >name ->`, name)

      return this[name];
  }
  ;
  bodaEnv.envFunc.Plugin_item = function Plugin_item() {

      let index = arguments[0];
      itemindex = (index % 4294967296)<=6?(index % 4294967296):(index % 42949672960)
      //   debugger
      let _res=this[itemindex];
      bodaEnv.toolsFunc.console_copy(`Plugin_item - >arg ->`, index,'->_res ->',_res)

      return _res
  }
  ;
  bodaEnv.envFunc.PluginArray_namedItem = function PluginArray_namedItem() {

      let name = arguments[0];
      bodaEnv.toolsFunc.console_copy(`PluginArray_namedItem - >arg ->`, name)

      return this[name];
  }
  ;
  bodaEnv.envFunc.PluginArray_item = function PluginArray_item() {

      let index = arguments[0];
      itemindex = (index % 4294967296)<=6?(index % 4294967296):(index % 42949672960)
    //   debugger
      let _res=this[itemindex];
      bodaEnv.toolsFunc.console_copy(`PluginArray_item -> `, `arg -> `, index,'->_res ->',_res);
      return _res
  }
  ;

  bodaEnv.envFunc.MimeType_suffixes_get = function MimeType_suffixes_get() {

      let res = bodaEnv.toolsFunc.getObjWeakMapProtoAttr.call(this, "suffixes");
      bodaEnv.toolsFunc.console_copy(`MimeType_suffixes_get - >res ->`, res)

      return res
  }
  ;
  bodaEnv.envFunc.MimeType_enabledPlugin_get = function MimeType_enabledPlugin_get() {

      // debugger
      let res = bodaEnv.memory.WeakMap.get(this);
      bodaEnv.toolsFunc.console_copy(`MimeType_enabledPlugin_get - >res ->`, res)

      return res
  }
  ;
  bodaEnv.envFunc.MimeType_description_get = function MimeType_description_get() {

      let res = bodaEnv.toolsFunc.getObjWeakMapProtoAttr.call(this, "description");

      bodaEnv.toolsFunc.console_copy(`MimeType_description_get - >res ->`, res)

      return res
  }
  ;
  bodaEnv.envFunc.Plugin_length_get = function Plugin_length_get() {

      let res = bodaEnv.memory.WeakMap.get(this)['length']
      // if (!res){
      //     res=5
      // }
      bodaEnv.toolsFunc.console_copy(`Plugin_length_get - >res ->`, res)

      return res
  }
  ;
  bodaEnv.envFunc.Plugin_filename_get = function Plugin_filename_get() {

      let _filename = bodaEnv.memory.WeakMap.get(this)['filename']
      bodaEnv.toolsFunc.console_copy(`Plugin_filename_get - >res ->`, _filename)

      return _filename
  }
  ;
  bodaEnv.envFunc.Plugin_description_get = function Plugin_description_get() {

      let res = bodaEnv.toolsFunc.getObjWeakMapProtoAttr.call(this, "description");
      bodaEnv.toolsFunc.console_copy(`Plugin_description_get - >res ->`, res)

      return res
  }
  ;
  bodaEnv.envFunc.Plugin_name_get = function Plugin_name_get() {

      let _name = bodaEnv.memory.WeakMap.get(this)['name']
      bodaEnv.toolsFunc.console_copy(`Plugin_name_get - >res ->`, _name)

      return _name
  }
  ;
  bodaEnv.envFunc.PluginArray_length_get = function PluginArray_length_get() {

      // let res = bodaEnv.toolsFunc.getObjWeakMapProtoAttr.call(this, "length");
      //         if (!res){
      //     res=0
      // }
      bodaEnv.toolsFunc.console_copy(`PluginArray_length_get - >res ->`, 5)
      // debugger
      return 5
  }
  ;
  bodaEnv.envFunc.MimeType_type_get = function MimeType_type_get() {

      let res = bodaEnv.toolsFunc.getObjWeakMapProtoAttr.call(this, "type");
      bodaEnv.toolsFunc.console_copy(`MimeType_type_get - >res ->`, res)

      return res
  }
  ;
  bodaEnv.envFunc.MimeTypeArray_length_get = function MimeTypeArray_length_get() {

      // let res = bodaEnv.toolsFunc.getObjWeakMapProtoAttr.call(this, "length");
      bodaEnv.toolsFunc.console_copy(`MimeTypeArray_length_get - >res ->`, 2)

      return 2
  }
  ;

  bodaEnv.envFunc.window_document_get = function() {

      let _retVal = bodaEnv.toolsFunc.checkObjIsIframe(this, bodaEnv.memory.globlProtoObj['document'], 'window_document_get')
      if (_retVal) {
          return _retVal
      }
      let _val = bodaEnv.memory.globlProtoObj['document']
      bodaEnv.toolsFunc.console_copy(`window_document_get ->`, _val)

      return _val
  }
  bodaEnv.envFunc.window_location_get = function() {

      let _retVal = bodaEnv.toolsFunc.checkObjIsIframe(this, bodaEnv.memory.globlProtoObj['location'], 'window_location_get')
      if (_retVal) {
          return _retVal
      }
      bodaEnv.toolsFunc.console_copy(`window_location_get ->`)

      return bodaEnv.memory.globlProtoObj['location']
  }
  bodaEnv.envFunc.window_navigator_get = function() {
      let _retVal = bodaEnv.toolsFunc.checkObjIsIframe(this, bodaEnv.memory.globlProtoObj['navigator'], 'window_navigator_get')
      if (_retVal) {
          return _retVal
      }

      let _val = bodaEnv.memory.globlProtoObj['navigator']

      bodaEnv.toolsFunc.console_copy(`window_navigator_get ->`, _val)

      return _val

  }
  bodaEnv.envFunc.window_self_get = function() {

      let isiframe = bodaEnv.toolsFunc.getObjWeakMapProtoAttr.call(this, 'isiframe')
      if (isiframe) {
          let _instance = bodaEnv.toolsFunc.getObjWeakMapProtoAttr.call(this, 'self')
          bodaEnv.toolsFunc.console_copy(`iframe window_self_get res->window`);

          return _instance
      }
      bodaEnv.toolsFunc.console_copy(`window_self_get res->window`);
      return window;
  }
  ;

  bodaEnv.envFunc.window_top_get = function() {
      return window
  }

  bodaEnv.envFunc.window_history_get = function() {
      let _retVal = bodaEnv.toolsFunc.checkObjIsIframe(this, bodaEnv.memory.globlProtoObj['history'], 'window_history_get')
      if (_retVal) {
          return _retVal
      }

      let _history = bodaEnv.memory.globlProtoObj['history']
      bodaEnv.toolsFunc.console_copy(`window_history_get ->`, _history)
      return _history
  }
  bodaEnv.envFunc.window_customElements_get = function() {
      let _retVal = bodaEnv.toolsFunc.checkObjIsIframe(this, bodaEnv.memory.globlProtoObj['customElements'], 'window_customElements_get')
      if (_retVal) {
          return _retVal
      }

      let _val = bodaEnv.memory.globlProtoObj['customElements']
      bodaEnv.toolsFunc.console_copy(`window_customElements_get ->`, _val)
      return _val
  }
  bodaEnv.envFunc.window_navigation_get = function() {
      let _retVal = bodaEnv.toolsFunc.checkObjIsIframe(this, bodaEnv.memory.globlProtoObj['navigation'], 'window_navigation_get')
      if (_retVal) {
          return _retVal
      }
      let _val = bodaEnv.memory.globlProtoObj['navigation']
      bodaEnv.toolsFunc.console_copy(`window_navigation_get ->`, _val)
      return _val
  }

  bodaEnv.envFunc.window_locationbar_get = function() {
      let _retVal = bodaEnv.toolsFunc.checkObjIsIframe(this, bodaEnv.memory.globlProtoObj['locationbar'], 'window_locationbar_get')
      if (_retVal) {
          return _retVal
      }
      let _val = bodaEnv.memory.globlProtoObj['locationbar']
      bodaEnv.toolsFunc.console_copy(`window_locationbar_get ->`, _val)
      return _val
  }
  bodaEnv.envFunc.window_menubar_get = function() {
      let _retVal = bodaEnv.toolsFunc.checkObjIsIframe(this, bodaEnv.memory.globlProtoObj['menubar'], 'window_menubar_get')
      if (_retVal) {
          return _retVal
      }
      let _val = bodaEnv.memory.globlProtoObj['menubar']
      bodaEnv.toolsFunc.console_copy(`window_menubar_get ->`, _val)
      return _val
  }
  bodaEnv.envFunc.window_personalbar_get = function() {
      let _retVal = bodaEnv.toolsFunc.checkObjIsIframe(this, bodaEnv.memory.globlProtoObj['personalbar'], 'window_personalbar_get')
      if (_retVal) {
          return _retVal
      }
      let _val = bodaEnv.memory.globlProtoObj['personalbar']
      bodaEnv.toolsFunc.console_copy(`window_personalbar_get ->`, _val)
      return _val
  }
  bodaEnv.envFunc.window_scrollbars_get = function() {
      let _retVal = bodaEnv.toolsFunc.checkObjIsIframe(this, bodaEnv.memory.globlProtoObj['scrollbars'], "window_scrollbars_get");
      if (_retVal) {
          return _retVal;
      }
      let _val = bodaEnv.memory.globlProtoObj['scrollbars'];
      bodaEnv.toolsFunc.console_copy(`window_scrollbars_get ->`, _val);
      return _val;
  }
  ;
  bodaEnv.envFunc.window_statusbar_get = function() {
      let _retVal = bodaEnv.toolsFunc.checkObjIsIframe(this, bodaEnv.memory.globlProtoObj['statusbar'], "window_statusbar_get");
      if (_retVal) {
          return _retVal;
      }
      let _val = bodaEnv.memory.globlProtoObj['statusbar'];
      bodaEnv.toolsFunc.console_copy(`window_statusbar_get ->`, _val);
      return _val;
  }
  ;
  bodaEnv.envFunc.window_external_get = function() {
      let _retVal = bodaEnv.toolsFunc.checkObjIsIframe(this, bodaEnv.memory.globlProtoObj['external'], "window_external_get");
      if (_retVal) {
          return _retVal;
      }
      let _val = bodaEnv.memory.globlProtoObj['external'];
      bodaEnv.toolsFunc.console_copy(`window_external_get ->`, _val);
      return _val;
  }
  ;
  bodaEnv.envFunc.window_screen_get = function() {
      let _retVal = bodaEnv.toolsFunc.checkObjIsIframe(this, bodaEnv.memory.globlProtoObj['screen'], "window_screen_get");
      if (_retVal) {
          return _retVal;
      }
      let _val = bodaEnv.memory.globlProtoObj['screen'];
      bodaEnv.toolsFunc.console_copy(`window_screen_get ->`, _val);
      return _val;
  }
  ;
  bodaEnv.envFunc.window_toolbar_get = function() {
      let _retVal = bodaEnv.toolsFunc.checkObjIsIframe(this, bodaEnv.memory.globlProtoObj['toolbar'], "window_toolbar_get");
      if (_retVal) {
          return _retVal;
      }
      let _val = bodaEnv.memory.globlProtoObj['toolbar'];
      bodaEnv.toolsFunc.console_copy(`window_toolbar_get ->`, _val);
      return _val;
  }
  ;
  bodaEnv.envFunc.window_status_get = function() {
      let _retVal = bodaEnv.toolsFunc.checkObjIsIframe(this, bodaEnv.memory.window['status'], "window_status_get");
      if (_retVal) {
          return _retVal;
      }
      let _val = bodaEnv.memory.window['status'];
      bodaEnv.toolsFunc.console_copy(`window_status_get ->`, _val);
      return _val;
  }
  ;
  bodaEnv.envFunc.window_closed_get = function() {
      let _retVal = bodaEnv.toolsFunc.checkObjIsIframe(this, bodaEnv.memory.window['closed'], "window_closed_get");
      if (_retVal) {
          return _retVal;
      }
      let _val = bodaEnv.memory.window['closed'];
      bodaEnv.toolsFunc.console_copy(`window_closed_get ->`, _val);
      return _val;
  }
  ;
  bodaEnv.envFunc.window_frameElement_get = function() {
      let _retVal = bodaEnv.toolsFunc.checkObjIsIframe(this, bodaEnv.memory.window['frameElement'], "window_frameElement_get");
      if (_retVal) {
          return _retVal;
      }
      let _val = bodaEnv.memory.window['frameElement'];
      bodaEnv.toolsFunc.console_copy(`window_frameElement_get ->`, _val);
      return _val;
  }
  ;
  bodaEnv.envFunc.window_origin_get = function() {
      let _retVal = bodaEnv.toolsFunc.checkObjIsIframe(this, bodaEnv.memory.window['origin'], "window_origin_get");
      if (_retVal) {
          return _retVal;
      }
      let _val = bodaEnv.memory.window['origin'];
      bodaEnv.toolsFunc.console_copy(`window_origin_get ->`, _val);
      return _val;
  }
  ;
  bodaEnv.envFunc.window_closed_get = function() {
      let _retVal = bodaEnv.toolsFunc.checkObjIsIframe(this, bodaEnv.memory.window['closed'], "window_closed_get");
      if (_retVal) {
          return _retVal;
      }
      let _val = bodaEnv.memory.window['closed'];
      bodaEnv.toolsFunc.console_copy(`window_closed_get ->`, _val);
      return _val;
  }
  ;
  bodaEnv.envFunc.window_opener_get = function() {
      let _retVal = bodaEnv.toolsFunc.checkObjIsIframe(this, bodaEnv.memory.window['opener'], "window_opener_get");
      if (_retVal) {
          return _retVal;
      }
      let _val = bodaEnv.memory.window['opener'];
      bodaEnv.toolsFunc.console_copy(`window_closed_get ->`, _val);
      return _val;
  }
  ;
  bodaEnv.envFunc.window_frames_get = function() {
      bodaEnv.toolsFunc.console_copy(`window_frames_get res->window`);
      return window;
  }
  ;
  bodaEnv.envFunc.window_length_get = function() {

      let _length = bodaEnv.memory.boWindowNum
      bodaEnv.toolsFunc.console_copy(`window_length_get  存在问题需要调整 res->`, _length);
      return _length;
  }
  ;
  bodaEnv.envFunc.window_parent_get = function() {
      bodaEnv.toolsFunc.console_copy(`window_parent_get res->window`);
      return window;
  }
  ;

  bodaEnv.envFunc.window_scrollX_get = function() {
      let _retVal = bodaEnv.toolsFunc.checkObjIsIframe(this, bodaEnv.memory.scroll[0], "window_scrollX_get");
      if (_retVal) {
          return _retVal;
      }
      ;let x = bodaEnv.memory.scroll[0];
      bodaEnv.toolsFunc.console_copy(`window_origin_get `, `res ->${x}`);
      return x;
  }
  ;
  bodaEnv.envFunc.window_pageXOffset_get = function() {
      let _retVal = bodaEnv.toolsFunc.checkObjIsIframe(this, bodaEnv.memory.scroll[0], "window_pageXOffset_get");
      if (_retVal) {
          return _retVal;
      }
      let x = bodaEnv.memory.scroll[0];
      bodaEnv.toolsFunc.console_copy(`window_pageXOffset_get `, `res ->${x}`);
      return x;
  }
  ;
  bodaEnv.envFunc.window_pageYOffset_get = function() {
      let _retVal = bodaEnv.toolsFunc.checkObjIsIframe(this, bodaEnv.memory.scroll[1], "window_pageYOffset_get");
      if (_retVal) {
          return _retVal;
      }
      let x = bodaEnv.memory.scroll[1];
      bodaEnv.toolsFunc.console_copy(`window_pageYOffset_get `, `res ->${x}`);
      return x;
  }
  ;
  bodaEnv.envFunc.window_scrollY_get = function() {
      let _retVal = bodaEnv.toolsFunc.checkObjIsIframe(this, bodaEnv.memory.scroll[1], "window_scrollY_get");
      if (_retVal) {
          return _retVal;
      }
      let x = bodaEnv.memory.scroll[1];
      bodaEnv.toolsFunc.console_copy(`window_scrollY_get `, `res ->${x}`);
      return x;
  }
  ;
  bodaEnv.envFunc.window_visualViewport_get = function() {
      let _retVal = bodaEnv.toolsFunc.checkObjIsIframe(this, bodaEnv.memory.globlProtoObj['visualViewport'], "window_visualViewport_get");
      if (_retVal) {
          return _retVal;
      }
      let _val = bodaEnv.memory.globlProtoObj['visualViewport'];
      bodaEnv.toolsFunc.console_copy(`window_visualViewport_get ->`, _val);
      return _val;
  }
  ;
  bodaEnv.envFunc.window_screenY_get = function() {
      bodaEnv.toolsFunc.console_copy(`window_screenY_get `, `screenY ->${0}`);
      return 0;
  }
  ;
  bodaEnv.envFunc.window_screenX_get = function() {
      bodaEnv.toolsFunc.console_copy(`window_screenX_get `, `screenX ->${0}`);
      return 0;
  }
  ;
  bodaEnv.envFunc.window_screenTop_get = function() {
      bodaEnv.toolsFunc.console_copy(`window_screenTop_get `, `screenTop ->${0}`);
      return 0;
  }
  ;
  bodaEnv.envFunc.window_screenLeft_get = function() {
      bodaEnv.toolsFunc.console_copy(`window_screenLeft_get `, `screenLeft ->${0}`);
      return 0;
  }
  ;
  bodaEnv.envFunc.window_devicePixelRatio_get = function() {
      // let x=bodaEnv.memory.scroll[1]
      bodaEnv.toolsFunc.console_copy(`window_devicePixelRatio_get `, `res ->${1.5}`);
      return 1.5;
  }
  ;
  bodaEnv.envFunc.window_clientInformation_get = function() {
      let _retVal = bodaEnv.toolsFunc.checkObjIsIframe(this, bodaEnv.memory.globlProtoObj['clientInformation'], "window_clientInformation_get");
      if (_retVal) {
          return _retVal;
      }
      let _val = bodaEnv.memory.globlProtoObj['clientInformation'];
      bodaEnv.toolsFunc.console_copy(`window_clientInformation_get ->`, _val);
      return _val;
  }
  ;
  bodaEnv.envFunc.window_styleMedia_get = function() {
      let _retVal = bodaEnv.toolsFunc.checkObjIsIframe(this, bodaEnv.memory.globlProtoObj['styleMedia'], "window_styleMedia_get");
      if (_retVal) {
          return _retVal;
      }
      let _val = bodaEnv.memory.globlProtoObj['styleMedia'];
      bodaEnv.toolsFunc.console_copy(`window_styleMedia_get ->`, _val);
      return _val;
  }
  ;
  bodaEnv.envFunc.window_onsearch_get = function() {
      let _retVal = bodaEnv.toolsFunc.checkObjIsIframe(this, bodaEnv.memory.window['onsearch'], "window_onsearch_get");
      if (_retVal) {
          return _retVal;
      }
      let _val = bodaEnv.memory.window['onsearch'];
      bodaEnv.toolsFunc.console_copy(`window_onsearch_get ->`, _val);
      return _val;
  }
  ;
  bodaEnv.envFunc.window_isSecureContext_get = function() {
      let _retVal = bodaEnv.toolsFunc.checkObjIsIframe(this, bodaEnv.memory.window['isSecureContext'], "window_isSecureContext_get");
      if (_retVal) {
          return _retVal;
      }
      let _val = bodaEnv.memory.window['isSecureContext'];
      bodaEnv.toolsFunc.console_copy(`window_isSecureContext_get ->`, _val);
      return _val;
  }
  ;
  bodaEnv.envFunc.window_trustedTypes_get = function() {
      let _retVal = bodaEnv.toolsFunc.checkObjIsIframe(this, bodaEnv.memory.globlProtoObj['trustedTypes'], "window_trustedTypes_get");
      if (_retVal) {
          return _retVal;
      }
      let _val = bodaEnv.memory.globlProtoObj['trustedTypes'];
      bodaEnv.toolsFunc.console_copy(`window_trustedTypes_get ->`, _val);
      return _val;
  }
  ;
  bodaEnv.envFunc.window_performance_get = function() {
      let _retVal = bodaEnv.toolsFunc.checkObjIsIframe(this, bodaEnv.memory.globlProtoObj['performance'], "window_performance_get");
      if (_retVal) {
          return _retVal;
      }
    //   debugger
      let _val = bodaEnv.memory.globlProtoObj['performance'];
      bodaEnv.toolsFunc.console_copy(`window_performance_get ->`, _val);
      return _val;
  }
  ;
  bodaEnv.envFunc.window_onappinstalled_get = function() {
      let _retVal = bodaEnv.toolsFunc.checkObjIsIframe(this, bodaEnv.memory.window['onappinstalled'], "window_onappinstalled_get");
      if (_retVal) {
          return _retVal;
      }
      let _val = bodaEnv.memory.window['onappinstalled'];
      bodaEnv.toolsFunc.console_copy(`window_onappinstalled_get ->`, _val);
      return _val;
  }
  ;
  bodaEnv.envFunc.window_onbeforeinstallprompt_get = function() {
      let _retVal = bodaEnv.toolsFunc.checkObjIsIframe(this, bodaEnv.memory.window['onbeforeinstallprompt'], "window_onbeforeinstallprompt_get");
      if (_retVal) {
          return _retVal;
      }
      let _val = bodaEnv.memory.window['onbeforeinstallprompt'];
      bodaEnv.toolsFunc.console_copy(`window_onbeforeinstallprompt_get ->`, _val);
      return _val;
  }
  ;
  bodaEnv.envFunc.window_crypto_get = function() {
      let _retVal = bodaEnv.toolsFunc.checkObjIsIframe(this, bodaEnv.memory.globlProtoObj['crypto'], "window_crypto_get");
      if (_retVal) {
          return _retVal;
      }
      let _val = bodaEnv.memory.globlProtoObj['crypto'];
      bodaEnv.toolsFunc.console_copy(`window_crypto_get ->`, _val);
      return _val;
  }
  ;
  bodaEnv.envFunc.window_caches_get = function() {
      let _retVal = bodaEnv.toolsFunc.checkObjIsIframe(this, bodaEnv.memory.globlProtoObj['caches'], "window_caches_get");
      if (_retVal) {
          return _retVal;
      }
      let _val = bodaEnv.memory.globlProtoObj['caches'];
      bodaEnv.toolsFunc.console_copy(`window_caches_get ->`, _val);
      return _val;
  }
  ;
  bodaEnv.envFunc.window_cookieStore_get = function() {
      let _retVal = bodaEnv.toolsFunc.checkObjIsIframe(this, bodaEnv.memory.globlProtoObj['cookieStore'], "window_cookieStore_get");
      if (_retVal) {
          return _retVal;
      }
      let _val = bodaEnv.memory.globlProtoObj['cookieStore'];
      bodaEnv.toolsFunc.console_copy(`window_cookieStore_get ->`, _val);
      return _val;
  }
  ;
  bodaEnv.envFunc.window_launchQueue_get = function() {
      let _retVal = bodaEnv.toolsFunc.checkObjIsIframe(this, bodaEnv.memory.globlProtoObj['launchQueue'], "window_launchQueue_get");
      if (_retVal) {
          return _retVal;
      }
      let _val = bodaEnv.memory.globlProtoObj['launchQueue'];
      bodaEnv.toolsFunc.console_copy(`window_launchQueue_get ->`, _val);
      return _val;
  }
  ;
  bodaEnv.envFunc.window_speechSynthesis_get = function() {
      let _retVal = bodaEnv.toolsFunc.checkObjIsIframe(this, bodaEnv.memory.globlProtoObj['speechSynthesis'], "window_speechSynthesis_get");
      if (_retVal) {
          return _retVal;
      }
      let _val = bodaEnv.memory.globlProtoObj['speechSynthesis'];
      bodaEnv.toolsFunc.console_copy(`window_speechSynthesis_get ->`, _val);
      return _val;
  }
  ;
  bodaEnv.envFunc.window_documentPictureInPicture_get = function() {
      let _retVal = bodaEnv.toolsFunc.checkObjIsIframe(this, bodaEnv.memory.globlProtoObj['documentPictureInPicture'], "window_documentPictureInPicture_get");
      if (_retVal) {
          return _retVal;
      }
      let _val = bodaEnv.memory.globlProtoObj['documentPictureInPicture'];
      bodaEnv.toolsFunc.console_copy(`window_documentPictureInPicture_get ->`, _val);
      return _val;
  }
  ;
  bodaEnv.envFunc.window_scheduler_get = function() {
      let _retVal = bodaEnv.toolsFunc.checkObjIsIframe(this, bodaEnv.memory.globlProtoObj['scheduler'], "window_scheduler_get");
      if (_retVal) {
          return _retVal;
      }
      let _val = bodaEnv.memory.globlProtoObj['scheduler'];
      bodaEnv.toolsFunc.console_copy(`window_scheduler_get ->`, _val);
      return _val;
  }
  ;
  bodaEnv.envFunc.window_onbeforexrselect_get = function() {
      let _retVal = bodaEnv.toolsFunc.checkObjIsIframe(this, bodaEnv.memory.window['onbeforexrselect'], "window_onbeforexrselect_get");
      if (_retVal) {
          return _retVal;
      }
      let _val = bodaEnv.memory.window['onbeforexrselect'];
      bodaEnv.toolsFunc.console_copy(`window_onbeforexrselect_get ->`, _val);
      return _val;
  }
  ;
  bodaEnv.envFunc.window_onabort_get = function() {
      let _retVal = bodaEnv.toolsFunc.checkObjIsIframe(this, bodaEnv.memory.window['onabort'], "window_onabort_get");
      if (_retVal) {
          return _retVal;
      }
      let _val = bodaEnv.memory.window['onabort'];
      bodaEnv.toolsFunc.console_copy(`window_onabort_get ->`, _val);
      return _val;
  }
  ;
  bodaEnv.envFunc.window_onblur_get = function() {
      let _retVal = bodaEnv.toolsFunc.checkObjIsIframe(this, bodaEnv.memory.window['onblur'], "window_onblur_get");
      if (_retVal) {
          return _retVal;
      }
      let _val = bodaEnv.memory.window['onblur'];
      bodaEnv.toolsFunc.console_copy(`window_onblur_get ->`, _val);
      return _val;
  }
  ;
  bodaEnv.envFunc.window_oncancel_get = function() {
      let _retVal = bodaEnv.toolsFunc.checkObjIsIframe(this, bodaEnv.memory.window['oncancel'], "window_oncancel_get");
      if (_retVal) {
          return _retVal;
      }
      let _val = bodaEnv.memory.window['oncancel'];
      bodaEnv.toolsFunc.console_copy(`window_oncancel_get ->`, _val);
      return _val;
  }
  ;
  bodaEnv.envFunc.window_onbeforeinput_get = function() {
      let _retVal = bodaEnv.toolsFunc.checkObjIsIframe(this, bodaEnv.memory.window['onbeforeinput'], "window_onbeforeinput_get");
      if (_retVal) {
          return _retVal;
      }
      let _val = bodaEnv.memory.window['onbeforeinput'];
      bodaEnv.toolsFunc.console_copy(`window_onbeforeinput_get ->`, _val);
      return _val;
  }
  ;
  bodaEnv.envFunc.window_oncanplay_get = function() {
      let _val = bodaEnv.memory.window['oncanplay'] ? bodaEnv.memory.window['oncanplay'] : null;
      bodaEnv.toolsFunc.console_copy(`window_oncanplay_get ->`, _val);
      return _val;
  }
  ;
  bodaEnv.envFunc.window_oncanplaythrough_get = function() {
      let _val = bodaEnv.memory.window['oncanplaythrough'] ? bodaEnv.memory.window['oncanplaythrough'] : null;
      bodaEnv.toolsFunc.console_copy(`window_oncanplaythrough_get ->`, _val);
      return _val;
  }
  ;
  bodaEnv.envFunc.window_onchange_get = function() {
      let _val = bodaEnv.memory.window['onchange'] ? bodaEnv.memory.window['onchange'] : null;
      bodaEnv.toolsFunc.console_copy(`window_onchange_get ->`, _val);
      return _val;
  }
  ;
  bodaEnv.envFunc.window_onclick_get = function() {
      let _val = bodaEnv.memory.window['onclick'] ? bodaEnv.memory.window['onclick'] : null;
      bodaEnv.toolsFunc.console_copy(`window_onclick_get ->`, _val);
      return _val;
  }
  ;
  bodaEnv.envFunc.window_onclose_get = function() {
      let _val = bodaEnv.memory.window['onclose'] ? bodaEnv.memory.window['onclose'] : null;
      bodaEnv.toolsFunc.console_copy(`window_onclose_get ->`, _val);
      return _val;
  }
  ;
  bodaEnv.envFunc.window_oncontextlost_get = function() {
      let _val = bodaEnv.memory.window['oncontextlost'] ? bodaEnv.memory.window['oncontextlost'] : null;
      bodaEnv.toolsFunc.console_copy(`window_oncontextlost_get ->`, _val);
      return _val;
  }
  ;
  bodaEnv.envFunc.window_oncontextmenu_get = function() {
      let _retVal = bodaEnv.toolsFunc.checkObjIsIframe(this, bodaEnv.memory.window['oncontextmenu'], "window_oncontextmenu_get");
      if (_retVal) {
          return _retVal;
      }
      let _val = bodaEnv.memory.window['oncontextmenu'];
      bodaEnv.toolsFunc.console_copy(`window_oncontextmenu_get ->`, _val);
      return _val;
  }
  ;
  bodaEnv.envFunc.window_oncontextrestored_get = function() {
      let _retVal = bodaEnv.toolsFunc.checkObjIsIframe(this, bodaEnv.memory.window['oncontextrestored'], "window_oncontextrestored_get");
      if (_retVal) {
          return _retVal;
      }
      let _val = bodaEnv.memory.window['oncontextrestored'];
      bodaEnv.toolsFunc.console_copy(`window_oncontextrestored_get ->`, _val);
      return _val;
  }
  ;
  bodaEnv.envFunc.window_oncuechange_get = function() {
      let _retVal = bodaEnv.toolsFunc.checkObjIsIframe(this, bodaEnv.memory.window['oncuechange'], "window_oncuechange_get");
      if (_retVal) {
          return _retVal;
      }
      let _val = bodaEnv.memory.window['oncuechange'];
      bodaEnv.toolsFunc.console_copy(`window_oncuechange_get ->`, _val);
      return _val;
  }
  ;
  bodaEnv.envFunc.window_ondblclick_get = function() {
      let _retVal = bodaEnv.toolsFunc.checkObjIsIframe(this, bodaEnv.memory.window['ondblclick'], "window_ondblclick_get");
      if (_retVal) {
          return _retVal;
      }
      let _val = bodaEnv.memory.window['ondblclick'];
      bodaEnv.toolsFunc.console_copy(`window_ondblclick_get ->`, _val);
      return _val;
  }
  ;
  bodaEnv.envFunc.window_ondrag_get = function() {
      let _retVal = bodaEnv.toolsFunc.checkObjIsIframe(this, bodaEnv.memory.window['ondrag'], "window_ondrag_get");
      if (_retVal) {
          return _retVal;
      }
      let _val = bodaEnv.memory.window['ondrag'];
      bodaEnv.toolsFunc.console_copy(`window_ondrag_get ->`, _val);
      return _val;
  }
  ;
  bodaEnv.envFunc.window_ondragend_get = function() {
      let _retVal = bodaEnv.toolsFunc.checkObjIsIframe(this, bodaEnv.memory.window['ondragend'], "window_ondragend_get");
      if (_retVal) {
          return _retVal;
      }
      let _val = bodaEnv.memory.window['ondragend'];
      bodaEnv.toolsFunc.console_copy(`window_ondragend_get ->`, _val);
      return _val;
  }
  ;
  bodaEnv.envFunc.window_ondragenter_get = function() {
      let _retVal = bodaEnv.toolsFunc.checkObjIsIframe(this, bodaEnv.memory.window['ondragenter'], "window_ondragenter_get");
      if (_retVal) {
          return _retVal;
      }
      let _val = bodaEnv.memory.window['ondragenter'];
      bodaEnv.toolsFunc.console_copy(`window_ondragenter_get ->`, _val);
      return _val;
  }
  ;
  bodaEnv.envFunc.window_ondragleave_get = function() {
      let _retVal = bodaEnv.toolsFunc.checkObjIsIframe(this, bodaEnv.memory.window['ondragleave'], "window_ondragleave_get");
      if (_retVal) {
          return _retVal;
      }
      let _val = bodaEnv.memory.window['ondragleave'];
      bodaEnv.toolsFunc.console_copy(`window_ondragleave_get ->`, _val);
      return _val;
  }
  ;
  bodaEnv.envFunc.window_ondragover_get = function() {
      let _retVal = bodaEnv.toolsFunc.checkObjIsIframe(this, bodaEnv.memory.window['ondragover'], "window_ondragover_get");
      if (_retVal) {
          return _retVal;
      }
      let _val = bodaEnv.memory.window['ondragover'];
      bodaEnv.toolsFunc.console_copy(`window_ondragover_get ->`, _val);
      return _val;
  }
  ;
  bodaEnv.envFunc.window_ondragstart_get = function() {
      let _retVal = bodaEnv.toolsFunc.checkObjIsIframe(this, bodaEnv.memory.window['ondragstart'], "window_ondragstart_get");
      if (_retVal) {
          return _retVal;
      }
      let _val = bodaEnv.memory.window['ondragstart'];
      bodaEnv.toolsFunc.console_copy(`window_ondragstart_get ->`, _val);
      return _val;
  }
  ;
  bodaEnv.envFunc.window_ondrop_get = function() {
      let _retVal = bodaEnv.toolsFunc.checkObjIsIframe(this, bodaEnv.memory.window['ondrop'], "window_ondrop_get");
      if (_retVal) {
          return _retVal;
      }
      let _val = bodaEnv.memory.window['ondrop'];
      bodaEnv.toolsFunc.console_copy(`window_ondrop_get ->`, _val);
      return _val;
  }
  ;
  bodaEnv.envFunc.window_ondurationchange_get = function() {
      let _retVal = bodaEnv.toolsFunc.checkObjIsIframe(this, bodaEnv.memory.window['ondurationchange'], "window_ondurationchange_get");
      if (_retVal) {
          return _retVal;
      }
      let _val = bodaEnv.memory.window['ondurationchange'];
      bodaEnv.toolsFunc.console_copy(`window_ondurationchange_get ->`, _val);
      return _val;
  }
  ;
  bodaEnv.envFunc.window_onemptied_get = function() {
      let _retVal = bodaEnv.toolsFunc.checkObjIsIframe(this, bodaEnv.memory.window['onemptied'], "window_onemptied_get");
      if (_retVal) {
          return _retVal;
      }
      let _val = bodaEnv.memory.window['onemptied'];
      bodaEnv.toolsFunc.console_copy(`window_onemptied_get ->`, _val);
      return _val;
  }
  ;
  bodaEnv.envFunc.window_onended_get = function() {
      let _retVal = bodaEnv.toolsFunc.checkObjIsIframe(this, bodaEnv.memory.window['onended'], "window_onended_get");
      if (_retVal) {
          return _retVal;
      }
      let _val = bodaEnv.memory.window['onended'];
      bodaEnv.toolsFunc.console_copy(`window_onended_get ->`, _val);
      return _val;
  }
  ;
  bodaEnv.envFunc.window_onerror_get = function() {
      let _retVal = bodaEnv.toolsFunc.checkObjIsIframe(this, bodaEnv.memory.window['onerror'], "window_onerror_get");
      if (_retVal) {
          return _retVal;
      }
      let _val = bodaEnv.memory.window['onerror'];
      bodaEnv.toolsFunc.console_copy(`window_onerror_get ->`, _val);
      return _val;
  }
  ;
  bodaEnv.envFunc.window_onfocus_get = function() {
      let _retVal = bodaEnv.toolsFunc.checkObjIsIframe(this, bodaEnv.memory.window['onfocus'], "window_onfocus_get");
      if (_retVal) {
          return _retVal;
      }
      let _val = bodaEnv.memory.window['onfocus'];
      bodaEnv.toolsFunc.console_copy(`window_onfocus_get ->`, _val);
      return _val;
  }
  ;
  bodaEnv.envFunc.window_onformdata_get = function() {
      let _retVal = bodaEnv.toolsFunc.checkObjIsIframe(this, bodaEnv.memory.window['onformdata'], "window_onformdata_get");
      if (_retVal) {
          return _retVal;
      }
      let _val = bodaEnv.memory.window['onformdata'];
      bodaEnv.toolsFunc.console_copy(`window_onformdata_get ->`, _val);
      return _val;
  }
  ;
  bodaEnv.envFunc.window_oninput_get = function() {
      let _retVal = bodaEnv.toolsFunc.checkObjIsIframe(this, bodaEnv.memory.window['oninput'], "window_oninput_get");
      if (_retVal) {
          return _retVal;
      }
      let _val = bodaEnv.memory.window['oninput'];
      bodaEnv.toolsFunc.console_copy(`window_oninput_get ->`, _val);
      return _val;
  }
  ;
  bodaEnv.envFunc.window_oninvalid_get = function() {
      let _retVal = bodaEnv.toolsFunc.checkObjIsIframe(this, bodaEnv.memory.window['oninvalid'], "window_oninvalid_get");
      if (_retVal) {
          return _retVal;
      }
      let _val = bodaEnv.memory.window['oninvalid'];
      bodaEnv.toolsFunc.console_copy(`window_oninvalid_get ->`, _val);
      return _val;
  }
  ;
  bodaEnv.envFunc.window_onkeydown_get = function() {
      let _retVal = bodaEnv.toolsFunc.checkObjIsIframe(this, bodaEnv.memory.window['onkeydown'], "window_onkeydown_get");
      if (_retVal) {
          return _retVal;
      }
      let _val = bodaEnv.memory.window['onkeydown'];
      bodaEnv.toolsFunc.console_copy(`window_onkeydown_get ->`, _val);
      return _val;
  }
  ;
  bodaEnv.envFunc.window_onkeypress_get = function() {
      let _retVal = bodaEnv.toolsFunc.checkObjIsIframe(this, bodaEnv.memory.window['onkeypress'], "window_onkeypress_get");
      if (_retVal) {
          return _retVal;
      }
      let _val = bodaEnv.memory.window['onkeypress'];
      bodaEnv.toolsFunc.console_copy(`window_onkeypress_get ->`, _val);
      return _val;
  }
  ;
  bodaEnv.envFunc.window_onkeyup_get = function() {
      let _retVal = bodaEnv.toolsFunc.checkObjIsIframe(this, bodaEnv.memory.window['onkeyup'], "window_onkeyup_get");
      if (_retVal) {
          return _retVal;
      }
      let _val = bodaEnv.memory.window['onkeyup'];
      bodaEnv.toolsFunc.console_copy(`window_onkeyup_get ->`, _val);
      return _val;
  }
  ;
  bodaEnv.envFunc.window_onload_get = function() {
      let _retVal = bodaEnv.toolsFunc.checkObjIsIframe(this, bodaEnv.memory.window['onload'], "window_onload_get");
      if (_retVal) {
          return _retVal;
      }
      let _val = bodaEnv.memory.window['onload'];
      bodaEnv.toolsFunc.console_copy(`window_onload_get ->`, _val);
      return _val;
  }
  ;
  bodaEnv.envFunc.window_onloadeddata_get = function() {
      let _retVal = bodaEnv.toolsFunc.checkObjIsIframe(this, bodaEnv.memory.window['onloadeddata'], "window_onloadeddata_get");
      if (_retVal) {
          return _retVal;
      }
      let _val = bodaEnv.memory.window['onloadeddata'];
      bodaEnv.toolsFunc.console_copy(`window_onloadeddata_get ->`, _val);
      return _val;
  }
  ;
  bodaEnv.envFunc.window_onloadedmetadata_get = function() {
      let _retVal = bodaEnv.toolsFunc.checkObjIsIframe(this, bodaEnv.memory.window['onloadedmetadata'], "window_onloadedmetadata_get");
      if (_retVal) {
          return _retVal;
      }
      let _val = bodaEnv.memory.window['onloadedmetadata'];
      bodaEnv.toolsFunc.console_copy(`window_onloadedmetadata_get ->`, _val);
      return _val;
  }
  ;
  bodaEnv.envFunc.window_onloadstart_get = function() {
      let _retVal = bodaEnv.toolsFunc.checkObjIsIframe(this, bodaEnv.memory.window['onloadstart'], "window_onloadstart_get");
      if (_retVal) {
          return _retVal;
      }
      let _val = bodaEnv.memory.window['onloadstart'];
      bodaEnv.toolsFunc.console_copy(`window_onloadstart_get ->`, _val);
      return _val;
  }
  ;
  bodaEnv.envFunc.window_onmousedown_get = function() {
      let _retVal = bodaEnv.toolsFunc.checkObjIsIframe(this, bodaEnv.memory.window['onmousedown'], "window_onmousedown_get");
      if (_retVal) {
          return _retVal;
      }
      let _val = bodaEnv.memory.window['onmousedown'];
      bodaEnv.toolsFunc.console_copy(`window_onmousedown_get ->`, _val);
      return _val;
  }
  ;
  bodaEnv.envFunc.window_onmouseenter_get = function() {
      let _retVal = bodaEnv.toolsFunc.checkObjIsIframe(this, bodaEnv.memory.window['onmouseenter'], "window_onmouseenter_get");
      if (_retVal) {
          return _retVal;
      }
      let _val = bodaEnv.memory.window['onmouseenter'];
      bodaEnv.toolsFunc.console_copy(`window_onmouseenter_get ->`, _val);
      return _val;
  }
  ;
  bodaEnv.envFunc.window_onmouseleave_get = function() {
      let _retVal = bodaEnv.toolsFunc.checkObjIsIframe(this, bodaEnv.memory.window['onmouseleave'], "window_onmouseleave_get");
      if (_retVal) {
          return _retVal;
      }
      let _val = bodaEnv.memory.window['onmouseleave'];
      bodaEnv.toolsFunc.console_copy(`window_onmouseleave_get ->`, _val);
      return _val;
  }
  ;
  bodaEnv.envFunc.window_onmousemove_get = function() {
      let _retVal = bodaEnv.toolsFunc.checkObjIsIframe(this, bodaEnv.memory.window['onmousemove'], "window_onmousemove_get");
      if (_retVal) {
          return _retVal;
      }
      let _val = bodaEnv.memory.window['onmousemove'];
      bodaEnv.toolsFunc.console_copy(`window_onmousemove_get ->`, _val);
      return _val;
  }
  ;
  bodaEnv.envFunc.window_onmouseout_get = function() {
      let _retVal = bodaEnv.toolsFunc.checkObjIsIframe(this, bodaEnv.memory.window['onmouseout'], "window_onmouseout_get");
      if (_retVal) {
          return _retVal;
      }
      let _val = bodaEnv.memory.window['onmouseout'];
      bodaEnv.toolsFunc.console_copy(`window_onmouseout_get ->`, _val);
      return _val;
  }
  ;
  bodaEnv.envFunc.window_onmouseover_get = function() {
      let _retVal = bodaEnv.toolsFunc.checkObjIsIframe(this, bodaEnv.memory.window['onmouseover'], "window_onmouseover_get");
      if (_retVal) {
          return _retVal;
      }
      let _val = bodaEnv.memory.window['onmouseover'];
      bodaEnv.toolsFunc.console_copy(`window_onmouseover_get ->`, _val);
      return _val;
  }
  ;
  bodaEnv.envFunc.window_onmouseup_get = function() {
      let _retVal = bodaEnv.toolsFunc.checkObjIsIframe(this, bodaEnv.memory.window['onmouseup'], "window_onmouseup_get");
      if (_retVal) {
          return _retVal;
      }
      let _val = bodaEnv.memory.window['onmouseup'];
      bodaEnv.toolsFunc.console_copy(`window_onmouseup_get ->`, _val);
      return _val;
  }
  ;
  bodaEnv.envFunc.window_onmousewheel_get = function() {
      let _retVal = bodaEnv.toolsFunc.checkObjIsIframe(this, bodaEnv.memory.window['onmousewheel'], "window_onmousewheel_get");
      if (_retVal) {
          return _retVal;
      }
      let _val = bodaEnv.memory.window['onmousewheel'];
      bodaEnv.toolsFunc.console_copy(`window_onmousewheel_get ->`, _val);
      return _val;
  }
  ;
  bodaEnv.envFunc.window_onpause_get = function() {
      let _retVal = bodaEnv.toolsFunc.checkObjIsIframe(this, bodaEnv.memory.window['onpause'], "window_onpause_get");
      if (_retVal) {
          return _retVal;
      }
      let _val = bodaEnv.memory.window['onpause'];
      bodaEnv.toolsFunc.console_copy(`window_onpause_get ->`, _val);
      return _val;
  }
  ;
  bodaEnv.envFunc.window_onplay_get = function() {
      let _retVal = bodaEnv.toolsFunc.checkObjIsIframe(this, bodaEnv.memory.window['onplay'], "window_onplay_get");
      if (_retVal) {
          return _retVal;
      }
      let _val = bodaEnv.memory.window['onplay'];
      bodaEnv.toolsFunc.console_copy(`window_onplay_get ->`, _val);
      return _val;
  }
  ;
  bodaEnv.envFunc.window_onplaying_get = function() {
      let _retVal = bodaEnv.toolsFunc.checkObjIsIframe(this, bodaEnv.memory.window['onplaying'], "window_onplaying_get");
      if (_retVal) {
          return _retVal;
      }
      let _val = bodaEnv.memory.window['onplaying'];
      bodaEnv.toolsFunc.console_copy(`window_onplaying_get ->`, _val);
      return _val;
  }
  ;
  bodaEnv.envFunc.window_onprogress_get = function() {
      let _retVal = bodaEnv.toolsFunc.checkObjIsIframe(this, bodaEnv.memory.window['onprogress'], "window_onprogress_get");
      if (_retVal) {
          return _retVal;
      }
      let _val = bodaEnv.memory.window['onprogress'];
      bodaEnv.toolsFunc.console_copy(`window_onprogress_get ->`, _val);
      return _val;
  }
  ;
  bodaEnv.envFunc.window_onratechange_get = function() {
      let _retVal = bodaEnv.toolsFunc.checkObjIsIframe(this, bodaEnv.memory.window['onratechange'], "window_onratechange_get");
      if (_retVal) {
          return _retVal;
      }
      let _val = bodaEnv.memory.window['onratechange'];
      bodaEnv.toolsFunc.console_copy(`window_onratechange_get ->`, _val);
      return _val;
  }
  ;
  bodaEnv.envFunc.window_onreset_get = function() {
      let _retVal = bodaEnv.toolsFunc.checkObjIsIframe(this, bodaEnv.memory.window['onreset'], "window_onreset_get");
      if (_retVal) {
          return _retVal;
      }
      let _val = bodaEnv.memory.window['onreset'];
      bodaEnv.toolsFunc.console_copy(`window_onreset_get ->`, _val);
      return _val;
  }
  ;
  bodaEnv.envFunc.window_onresize_set = function() {
      let _retVal = bodaEnv.toolsFunc.checkObjIsIframe(this, arguments[0], "window_onresize_set");
      if (_retVal) {
          return _retVal;
      }
      let arg = arguments[0];
      bodaEnv.memory.window['onresize'] = arg;
      bodaEnv.toolsFunc.console_copy(`浏览器窗口大小发生变化时执行 window_onresize_set ->`, arg);
      return arg;
  }
  ;
  bodaEnv.envFunc.window_onresize_get = function() {
      let _retVal = bodaEnv.toolsFunc.checkObjIsIframe(this, bodaEnv.memory.window['onresize'], "window_onresize_get");
      if (_retVal) {
          return _retVal;
      }
      let _val = bodaEnv.memory.window['onresize'];
      bodaEnv.toolsFunc.console_copy(`浏览器窗口大小发生变化时执行 window_onresize_get ->`, _val);
      return _val;
  }
  ;
  bodaEnv.envFunc.window_onscroll_get = function() {
      let _retVal = bodaEnv.toolsFunc.checkObjIsIframe(this, bodaEnv.memory.window['onscroll'], "window_onscroll_get");
      if (_retVal) {
          return _retVal;
      }
      let _val = bodaEnv.memory.window['onscroll'];
      bodaEnv.toolsFunc.console_copy(`window_onscroll_get ->`, _val);
      return _val;
  }
  ;
  bodaEnv.envFunc.window_onsecuritypolicyviolation_get = function() {
      let _retVal = bodaEnv.toolsFunc.checkObjIsIframe(this, bodaEnv.memory.window['onsecuritypolicyviolation'], "window_onsecuritypolicyviolation_get");
      if (_retVal) {
          return _retVal;
      }
      let _val = bodaEnv.memory.window['onsecuritypolicyviolation'];
      bodaEnv.toolsFunc.console_copy(`window_onsecuritypolicyviolation_get ->`, _val);
      return _val;
  }
  ;
  bodaEnv.envFunc.window_onseeked_get = function() {
      let _retVal = bodaEnv.toolsFunc.checkObjIsIframe(this, bodaEnv.memory.window['onseeked'], "window_onseeked_get");
      if (_retVal) {
          return _retVal;
      }
      let _val = bodaEnv.memory.window['onseeked'];
      bodaEnv.toolsFunc.console_copy(`window_onseeked_get ->`, _val);
      return _val;
  }
  ;
  bodaEnv.envFunc.window_onseeking_get = function() {
      let _retVal = bodaEnv.toolsFunc.checkObjIsIframe(this, bodaEnv.memory.window['onseeking'], "window_onseeking_get");
      if (_retVal) {
          return _retVal;
      }
      let _val = bodaEnv.memory.window['onseeking'];
      bodaEnv.toolsFunc.console_copy(`window_onseeking_get ->`, _val);
      return _val;
  }
  ;
  bodaEnv.envFunc.window_onselect_get = function() {
      let _retVal = bodaEnv.toolsFunc.checkObjIsIframe(this, bodaEnv.memory.window['onselect'], "window_onselect_get");
      if (_retVal) {
          return _retVal;
      }
      let _val = bodaEnv.memory.window['onselect'];
      bodaEnv.toolsFunc.console_copy(`window_onselect_get ->`, _val);
      return _val;
  }
  ;
  bodaEnv.envFunc.window_onslotchange_get = function() {
      let _retVal = bodaEnv.toolsFunc.checkObjIsIframe(this, bodaEnv.memory.window['onslotchange'], "window_onslotchange_get");
      if (_retVal) {
          return _retVal;
      }
      let _val = bodaEnv.memory.window['onslotchange'];
      bodaEnv.toolsFunc.console_copy(`window_onslotchange_get ->`, _val);
      return _val;
  }
  ;
  bodaEnv.envFunc.window_onstalled_get = function() {
      let _retVal = bodaEnv.toolsFunc.checkObjIsIframe(this, bodaEnv.memory.window['onstalled'], "window_onstalled_get");
      if (_retVal) {
          return _retVal;
      }
      let _val = bodaEnv.memory.window['onstalled'];
      bodaEnv.toolsFunc.console_copy(`window_onstalled_get ->`, _val);
      return _val;
  }
  ;
  bodaEnv.envFunc.window_onsubmit_get = function() {
      let _retVal = bodaEnv.toolsFunc.checkObjIsIframe(this, bodaEnv.memory.window['onsubmit'], "window_onsubmit_get");
      if (_retVal) {
          return _retVal;
      }
      let _val = bodaEnv.memory.window['onsubmit'];
      bodaEnv.toolsFunc.console_copy(`window_onsubmit_get ->`, _val);
      return _val;
  }
  ;
  bodaEnv.envFunc.window_onsuspend_get = function() {
      let _retVal = bodaEnv.toolsFunc.checkObjIsIframe(this, bodaEnv.memory.window['onsuspend'], "window_onsuspend_get");
      if (_retVal) {
          return _retVal;
      }
      let _val = bodaEnv.memory.window['onsuspend'];
      bodaEnv.toolsFunc.console_copy(`window_onsuspend_get ->`, _val);
      return _val;
  }
  ;
  bodaEnv.envFunc.window_ontimeupdate_get = function() {
      let _retVal = bodaEnv.toolsFunc.checkObjIsIframe(this, bodaEnv.memory.window['ontimeupdate'], "window_ontimeupdate_get");
      if (_retVal) {
          return _retVal;
      }
      let _val = bodaEnv.memory.window['ontimeupdate'];
      bodaEnv.toolsFunc.console_copy(`window_ontimeupdate_get ->`, _val);
      return _val;
  }
  ;
  bodaEnv.envFunc.window_ontoggle_get = function() {
      let _retVal = bodaEnv.toolsFunc.checkObjIsIframe(this, bodaEnv.memory.window['ontoggle'], "window_ontoggle_get");
      if (_retVal) {
          return _retVal;
      }
      let _val = bodaEnv.memory.window['ontoggle'];
      bodaEnv.toolsFunc.console_copy(`window_ontoggle_get ->`, _val);
      return _val;
  }
  ;
  bodaEnv.envFunc.window_onvolumechange_get = function() {
      let _retVal = bodaEnv.toolsFunc.checkObjIsIframe(this, bodaEnv.memory.window['onvolumechange'], "window_onvolumechange_get");
      if (_retVal) {
          return _retVal;
      }
      let _val = bodaEnv.memory.window['onvolumechange'];
      bodaEnv.toolsFunc.console_copy(`window_onvolumechange_get ->`, _val);
      return _val;
  }
  ;
  bodaEnv.envFunc.window_onwaiting_get = function() {
      let _retVal = bodaEnv.toolsFunc.checkObjIsIframe(this, bodaEnv.memory.window['onwaiting'], "window_onwaiting_get");
      if (_retVal) {
          return _retVal;
      }
      let _val = bodaEnv.memory.window['onwaiting'];
      bodaEnv.toolsFunc.console_copy(`window_onwaiting_get ->`, _val);
      return _val;
  }
  ;
  bodaEnv.envFunc.window_onwebkitanimationend_get = function() {
      let _retVal = bodaEnv.toolsFunc.checkObjIsIframe(this, bodaEnv.memory.window['onwebkitanimationend'], "window_onwebkitanimationend_get");
      if (_retVal) {
          return _retVal;
      }
      let _val = bodaEnv.memory.window['onwebkitanimationend'];
      bodaEnv.toolsFunc.console_copy(`window_onwebkitanimationend_get ->`, _val);
      return _val;
  }
  ;
  bodaEnv.envFunc.window_onwebkitanimationiteration_get = function() {
      let _retVal = bodaEnv.toolsFunc.checkObjIsIframe(this, bodaEnv.memory.window['onwebkitanimationiteration'], "window_onwebkitanimationiteration_get");
      if (_retVal) {
          return _retVal;
      }
      let _val = bodaEnv.memory.window['onwebkitanimationiteration'];
      bodaEnv.toolsFunc.console_copy(`window_onwebkitanimationiteration_get ->`, _val);
      return _val;
  }
  ;
  bodaEnv.envFunc.window_onwebkitanimationstart_get = function() {
      let _retVal = bodaEnv.toolsFunc.checkObjIsIframe(this, bodaEnv.memory.window['onwebkitanimationstart'], "window_onwebkitanimationstart_get");
      if (_retVal) {
          return _retVal;
      }
      let _val = bodaEnv.memory.window['onwebkitanimationstart'];
      bodaEnv.toolsFunc.console_copy(`window_onwebkitanimationstart_get ->`, _val);
      return _val;
  }
  ;
  bodaEnv.envFunc.window_onwebkittransitionend_get = function() {
      let _retVal = bodaEnv.toolsFunc.checkObjIsIframe(this, bodaEnv.memory.window['onwebkittransitionend'], "window_onwebkittransitionend_get");
      if (_retVal) {
          return _retVal;
      }
      let _val = bodaEnv.memory.window['onwebkittransitionend'];
      bodaEnv.toolsFunc.console_copy(`window_onwebkittransitionend_get ->`, _val);
      return _val;
  }
  ;
  bodaEnv.envFunc.window_onwheel_get = function() {
      let _retVal = bodaEnv.toolsFunc.checkObjIsIframe(this, bodaEnv.memory.window['onwheel'], "window_onwheel_get");
      if (_retVal) {
          return _retVal;
      }
      let _val = bodaEnv.memory.window['onwheel'];
      bodaEnv.toolsFunc.console_copy(`window_onwheel_get ->`, _val);
      return _val;
  }
  ;
  bodaEnv.envFunc.window_onauxclick_get = function() {
      let _retVal = bodaEnv.toolsFunc.checkObjIsIframe(this, bodaEnv.memory.window['onauxclick'], "window_onauxclick_get");
      if (_retVal) {
          return _retVal;
      }
      let _val = bodaEnv.memory.window['onauxclick'];
      bodaEnv.toolsFunc.console_copy(`window_onauxclick_get ->`, _val);
      return _val;
  }
  ;
  bodaEnv.envFunc.window_ongotpointercapture_get = function() {
      let _retVal = bodaEnv.toolsFunc.checkObjIsIframe(this, bodaEnv.memory.window['ongotpointercapture'], "window_ongotpointercapture_get");
      if (_retVal) {
          return _retVal;
      }
      let _val = bodaEnv.memory.window['ongotpointercapture'];
      bodaEnv.toolsFunc.console_copy(`window_ongotpointercapture_get ->`, _val);
      return _val;
  }
  ;
  bodaEnv.envFunc.window_onlostpointercapture_get = function() {
      let _retVal = bodaEnv.toolsFunc.checkObjIsIframe(this, bodaEnv.memory.window['onlostpointercapture'], "window_onlostpointercapture_get");
      if (_retVal) {
          return _retVal;
      }
      let _val = bodaEnv.memory.window['onlostpointercapture'];
      bodaEnv.toolsFunc.console_copy(`window_onlostpointercapture_get ->`, _val);
      return _val;
  }
  ;
  bodaEnv.envFunc.window_onpointerdown_get = function() {
      let _retVal = bodaEnv.toolsFunc.checkObjIsIframe(this, bodaEnv.memory.window['onpointerdown'], "window_onpointerdown_get");
      if (_retVal) {
          return _retVal;
      }
      let _val = bodaEnv.memory.window['onpointerdown'];
      bodaEnv.toolsFunc.console_copy(`window_onpointerdown_get ->`, _val);
      return _val;
  }
  ;
  bodaEnv.envFunc.window_onpointermove_get = function() {
      let _retVal = bodaEnv.toolsFunc.checkObjIsIframe(this, bodaEnv.memory.window['onpointermove'], "window_onpointermove_get");
      if (_retVal) {
          return _retVal;
      }
      let _val = bodaEnv.memory.window['onpointermove'];
      bodaEnv.toolsFunc.console_copy(`window_onpointermove_get ->`, _val);
      return _val;
  }
  ;
  bodaEnv.envFunc.window_onpointerrawupdate_get = function() {
      let _retVal = bodaEnv.toolsFunc.checkObjIsIframe(this, bodaEnv.memory.window['onpointerrawupdate'], "window_onpointerrawupdate_get");
      if (_retVal) {
          return _retVal;
      }
      let _val = bodaEnv.memory.window['onpointerrawupdate'];
      bodaEnv.toolsFunc.console_copy(`window_onpointerrawupdate_get ->`, _val);
      return _val;
  }
  ;
  bodaEnv.envFunc.window_onpointerup_get = function() {
      let _retVal = bodaEnv.toolsFunc.checkObjIsIframe(this, bodaEnv.memory.window['onpointerup'], "window_onpointerup_get");
      if (_retVal) {
          return _retVal;
      }
      let _val = bodaEnv.memory.window['onpointerup'];
      bodaEnv.toolsFunc.console_copy(`window_onpointerup_get ->`, _val);
      return _val;
  }
  ;
  bodaEnv.envFunc.window_onpointercancel_get = function() {
      let _retVal = bodaEnv.toolsFunc.checkObjIsIframe(this, bodaEnv.memory.window['onpointercancel'], "window_onpointercancel_get");
      if (_retVal) {
          return _retVal;
      }
      let _val = bodaEnv.memory.window['onpointercancel'];
      bodaEnv.toolsFunc.console_copy(`window_onpointercancel_get ->`, _val);
      return _val;
  }
  ;
  bodaEnv.envFunc.window_onpointerover_get = function() {
      let _retVal = bodaEnv.toolsFunc.checkObjIsIframe(this, bodaEnv.memory.window['onpointerover'], "window_onpointerover_get");
      if (_retVal) {
          return _retVal;
      }
      let _val = bodaEnv.memory.window['onpointerover'];
      bodaEnv.toolsFunc.console_copy(`window_onpointerover_get ->`, _val);
      return _val;
  }
  ;
  bodaEnv.envFunc.window_onpointerout_get = function() {
      let _retVal = bodaEnv.toolsFunc.checkObjIsIframe(this, bodaEnv.memory.window['onpointerout'], "window_onpointerout_get");
      if (_retVal) {
          return _retVal;
      }
      let _val = bodaEnv.memory.window['onpointerout'];
      bodaEnv.toolsFunc.console_copy(`window_onpointerout_get ->`, _val);
      return _val;
  }
  ;
  bodaEnv.envFunc.window_onpointerenter_get = function() {
      let _retVal = bodaEnv.toolsFunc.checkObjIsIframe(this, bodaEnv.memory.window['onpointerenter'], "window_onpointerenter_get");
      if (_retVal) {
          return _retVal;
      }
      let _val = bodaEnv.memory.window['onpointerenter'];
      bodaEnv.toolsFunc.console_copy(`window_onpointerenter_get ->`, _val);
      return _val;
  }
  ;
  bodaEnv.envFunc.window_onpointerleave_get = function() {
      let _retVal = bodaEnv.toolsFunc.checkObjIsIframe(this, bodaEnv.memory.window['onpointerleave'], "window_onpointerleave_get");
      if (_retVal) {
          return _retVal;
      }
      let _val = bodaEnv.memory.window['onpointerleave'];
      bodaEnv.toolsFunc.console_copy(`window_onpointerleave_get ->`, _val);
      return _val;
  }
  ;
  bodaEnv.envFunc.window_onselectstart_get = function() {
      let _retVal = bodaEnv.toolsFunc.checkObjIsIframe(this, bodaEnv.memory.window['onselectstart'], "window_onselectstart_get");
      if (_retVal) {
          return _retVal;
      }
      let _val = bodaEnv.memory.window['onselectstart'];
      bodaEnv.toolsFunc.console_copy(`window_onselectstart_get ->`, _val);
      return _val;
  }
  ;
  bodaEnv.envFunc.window_onselectionchange_get = function() {
      let _retVal = bodaEnv.toolsFunc.checkObjIsIframe(this, bodaEnv.memory.window['onselectionchange'], "window_onselectionchange_get");
      if (_retVal) {
          return _retVal;
      }
      let _val = bodaEnv.memory.window['onselectionchange'];
      bodaEnv.toolsFunc.console_copy(`window_onselectionchange_get ->`, _val);
      return _val;
  }
  ;
  bodaEnv.envFunc.window_onanimationend_get = function() {
      let _retVal = bodaEnv.toolsFunc.checkObjIsIframe(this, bodaEnv.memory.window['onanimationend'], "window_onanimationend_get");
      if (_retVal) {
          return _retVal;
      }
      let _val = bodaEnv.memory.window['onanimationend'];
      bodaEnv.toolsFunc.console_copy(`window_onanimationend_get ->`, _val);
      return _val;
  }
  ;
  bodaEnv.envFunc.window_onanimationiteration_get = function() {
      let _retVal = bodaEnv.toolsFunc.checkObjIsIframe(this, bodaEnv.memory.window['onanimationiteration'], "window_onanimationiteration_get");
      if (_retVal) {
          return _retVal;
      }
      let _val = bodaEnv.memory.window['onanimationiteration'];
      bodaEnv.toolsFunc.console_copy(`window_onanimationiteration_get ->`, _val);
      return _val;
  }
  ;
  bodaEnv.envFunc.window_onanimationstart_get = function() {
      let _retVal = bodaEnv.toolsFunc.checkObjIsIframe(this, bodaEnv.memory.window['onanimationstart'], "window_onanimationstart_get");
      if (_retVal) {
          return _retVal;
      }
      let _val = bodaEnv.memory.window['onanimationstart'];
      bodaEnv.toolsFunc.console_copy(`window_onanimationstart_get ->`, _val);
      return _val;
  }
  ;
  bodaEnv.envFunc.window_ontransitionrun_get = function() {
      let _retVal = bodaEnv.toolsFunc.checkObjIsIframe(this, bodaEnv.memory.window['ontransitionrun'], "window_ontransitionrun_get");
      if (_retVal) {
          return _retVal;
      }
      let _val = bodaEnv.memory.window['ontransitionrun'];
      bodaEnv.toolsFunc.console_copy(`window_ontransitionrun_get ->`, _val);
      return _val;
  }
  ;
  bodaEnv.envFunc.window_ontransitionstart_get = function() {
      let _retVal = bodaEnv.toolsFunc.checkObjIsIframe(this, bodaEnv.memory.window['ontransitionstart'], "window_ontransitionstart_get");
      if (_retVal) {
          return _retVal;
      }
      let _val = bodaEnv.memory.window['ontransitionstart'];
      bodaEnv.toolsFunc.console_copy(`window_ontransitionstart_get ->`, _val);
      return _val;
  }
  ;
  bodaEnv.envFunc.window_ontransitionend_get = function() {
      let _retVal = bodaEnv.toolsFunc.checkObjIsIframe(this, bodaEnv.memory.window['ontransitionend'], "window_ontransitionend_get");
      if (_retVal) {
          return _retVal;
      }
      let _val = bodaEnv.memory.window['ontransitionend'];
      bodaEnv.toolsFunc.console_copy(`window_ontransitionend_get ->`, _val);
      return _val;
  }
  ;
  bodaEnv.envFunc.window_ontransitioncancel_get = function() {
      let _retVal = bodaEnv.toolsFunc.checkObjIsIframe(this, bodaEnv.memory.window['ontransitioncancel'], "window_ontransitioncancel_get");
      if (_retVal) {
          return _retVal;
      }
      let _val = bodaEnv.memory.window['ontransitioncancel'];
      bodaEnv.toolsFunc.console_copy(`window_ontransitioncancel_get ->`, _val);
      return _val;
  }
  ;
  bodaEnv.envFunc.window_onafterprint_get = function() {
      let _retVal = bodaEnv.toolsFunc.checkObjIsIframe(this, bodaEnv.memory.window['onafterprint'], "window_onafterprint_get");
      if (_retVal) {
          return _retVal;
      }
      let _val = bodaEnv.memory.window['onafterprint'];
      bodaEnv.toolsFunc.console_copy(`window_onafterprint_get ->`, _val);
      return _val;
  }
  ;
  bodaEnv.envFunc.window_onbeforeprint_get = function() {
      let _retVal = bodaEnv.toolsFunc.checkObjIsIframe(this, bodaEnv.memory.window['onbeforeprint'], "window_onbeforeprint_get");
      if (_retVal) {
          return _retVal;
      }
      let _val = bodaEnv.memory.window['onbeforeprint'];
      bodaEnv.toolsFunc.console_copy(`window_onbeforeprint_get ->`, _val);
      return _val;
  }
  ;
  bodaEnv.envFunc.window_onbeforeunload_get = function() {
      let _retVal = bodaEnv.toolsFunc.checkObjIsIframe(this, bodaEnv.memory.window['onbeforeunload'], "window_onbeforeunload_get");
      if (_retVal) {
          return _retVal;
      }
      let _val = bodaEnv.memory.window['onbeforeunload'];
      bodaEnv.toolsFunc.console_copy(`window_onbeforeunload_get ->`, _val);
      return _val;
  }
  ;
  bodaEnv.envFunc.window_onhashchange_get = function() {
      let _retVal = bodaEnv.toolsFunc.checkObjIsIframe(this, bodaEnv.memory.window['onhashchange'], "window_onhashchange_get");
      if (_retVal) {
          return _retVal;
      }
      let _val = bodaEnv.memory.window['onhashchange'];
      bodaEnv.toolsFunc.console_copy(`window_onhashchange_get ->`, _val);
      return _val;
  }
  ;
  bodaEnv.envFunc.window_onlanguagechange_get = function() {
      let _retVal = bodaEnv.toolsFunc.checkObjIsIframe(this, bodaEnv.memory.window['onlanguagechange'], "window_onlanguagechange_get");
      if (_retVal) {
          return _retVal;
      }
      let _val = bodaEnv.memory.window['onlanguagechange'];
      bodaEnv.toolsFunc.console_copy(`window_onlanguagechange_get ->`, _val);
      return _val;
  }
  ;
  bodaEnv.envFunc.window_onmessage_get = function() {
      let _retVal = bodaEnv.toolsFunc.checkObjIsIframe(this, bodaEnv.memory.window['onmessage'], "window_onmessage_get");
      if (_retVal) {
          return _retVal;
      }
      let _val = bodaEnv.memory.window['onmessage'];
      bodaEnv.toolsFunc.console_copy(`window_onmessage_get ->`, _val);
      return _val;
  }
  ;
  bodaEnv.envFunc.window_onmessageerror_get = function() {
      let _retVal = bodaEnv.toolsFunc.checkObjIsIframe(this, bodaEnv.memory.window['onmessageerror'], "window_onmessageerror_get");
      if (_retVal) {
          return _retVal;
      }
      let _val = bodaEnv.memory.window['onmessageerror'];
      bodaEnv.toolsFunc.console_copy(`window_onmessageerror_get ->`, _val);
      return _val;
  }
  ;
  bodaEnv.envFunc.window_onoffline_get = function() {
      let _retVal = bodaEnv.toolsFunc.checkObjIsIframe(this, bodaEnv.memory.window['onoffline'], "window_onoffline_get");
      if (_retVal) {
          return _retVal;
      }
      let _val = bodaEnv.memory.window['onoffline'];
      bodaEnv.toolsFunc.console_copy(`window_onoffline_get ->`, _val);
      return _val;
  }
  ;
  bodaEnv.envFunc.window_ononline_get = function() {
      let _retVal = bodaEnv.toolsFunc.checkObjIsIframe(this, bodaEnv.memory.window['ononline'], "window_ononline_get");
      if (_retVal) {
          return _retVal;
      }
      let _val = bodaEnv.memory.window['ononline'];
      bodaEnv.toolsFunc.console_copy(`window_ononline_get ->`, _val);
      return _val;
  }
  ;
  bodaEnv.envFunc.window_onpagehide_get = function() {
      let _retVal = bodaEnv.toolsFunc.checkObjIsIframe(this, bodaEnv.memory.window['onpagehide'], "window_onpagehide_get");
      if (_retVal) {
          return _retVal;
      }
      let _val = bodaEnv.memory.window['onpagehide'];
      bodaEnv.toolsFunc.console_copy(`window_onpagehide_get ->`, _val);
      return _val;
  }
  ;
  bodaEnv.envFunc.window_onpageshow_get = function() {
      let _retVal = bodaEnv.toolsFunc.checkObjIsIframe(this, bodaEnv.memory.window['onpageshow'], "window_onpageshow_get");
      if (_retVal) {
          return _retVal;
      }
      let _val = bodaEnv.memory.window['onpageshow'];
      bodaEnv.toolsFunc.console_copy(`window_onpageshow_get ->`, _val);
      return _val;
  }
  ;
  bodaEnv.envFunc.window_onpopstate_get = function() {
      let _retVal = bodaEnv.toolsFunc.checkObjIsIframe(this, bodaEnv.memory.window['onpopstate'], "window_onpopstate_get");
      if (_retVal) {
          return _retVal;
      }
      let _val = bodaEnv.memory.window['onpopstate'];
      bodaEnv.toolsFunc.console_copy(`window_onpopstate_get ->`, _val);
      return _val;
  }
  ;
  bodaEnv.envFunc.window_onrejectionhandled_get = function() {
      let _retVal = bodaEnv.toolsFunc.checkObjIsIframe(this, bodaEnv.memory.window['onrejectionhandled'], "window_onrejectionhandled_get");
      if (_retVal) {
          return _retVal;
      }
      let _val = bodaEnv.memory.window['onrejectionhandled'];
      bodaEnv.toolsFunc.console_copy(`window_onrejectionhandled_get ->`, _val);
      return _val;
  }
  ;
  bodaEnv.envFunc.window_onstorage_get = function() {
      let _retVal = bodaEnv.toolsFunc.checkObjIsIframe(this, bodaEnv.memory.window['onstorage'], "window_onstorage_get");
      if (_retVal) {
          return _retVal;
      }
      let _val = bodaEnv.memory.window['onstorage'];
      bodaEnv.toolsFunc.console_copy(`window_onstorage_get ->`, _val);
      return _val;
  }
  ;
  bodaEnv.envFunc.window_onunhandledrejection_get = function() {
      let _retVal = bodaEnv.toolsFunc.checkObjIsIframe(this, bodaEnv.memory.window['onunhandledrejection'], "window_onunhandledrejection_get");
      if (_retVal) {
          return _retVal;
      }
      let _val = bodaEnv.memory.window['onunhandledrejection'];
      bodaEnv.toolsFunc.console_copy(`window_onunhandledrejection_get ->`, _val);
      return _val;
  }
  ;
  bodaEnv.envFunc.window_onunload_get = function() {
      let _retVal = bodaEnv.toolsFunc.checkObjIsIframe(this, bodaEnv.memory.window['onunload'], "window_onunload_get");
      if (_retVal) {
          return _retVal;
      }
      let _val = bodaEnv.memory.window['onunload'];
      bodaEnv.toolsFunc.console_copy(`window_onunload_get ->`, _val);
      return _val;
  }
  ;
  bodaEnv.envFunc.window_crossOriginIsolated_get = function() {
      let _val = bodaEnv.memory.globlProtoObj['crossOriginIsolated'] ? bodaEnv.memory.globlProtoObj['crossOriginIsolated'] : false;
      bodaEnv.toolsFunc.console_copy(`window_crossOriginIsolated_get ->`, _val);
      return _val;
  }
  ;
  bodaEnv.envFunc.window_scheduler_get = function() {
      let _retVal = bodaEnv.toolsFunc.checkObjIsIframe(this, bodaEnv.memory.globlProtoObj['scheduler'], "window_scheduler_get");
      if (_retVal) {
          return _retVal;
      }
      let _val = bodaEnv.memory.globlProtoObj['scheduler'];
      bodaEnv.toolsFunc.console_copy(`window_scheduler_get ->`, _val);
      return _val;
  }
  ;
  bodaEnv.envFunc.window_ondevicemotion_get = function() {
      let _retVal = bodaEnv.toolsFunc.checkObjIsIframe(this, bodaEnv.memory.window['ondevicemotion'], "window_ondevicemotion_get");
      if (_retVal) {
          return _retVal;
      }
      let _val = bodaEnv.memory.window['ondevicemotion'];
      bodaEnv.toolsFunc.console_copy(`window_ondevicemotion_get ->`, _val);
      return _val;
  }
  ;
  bodaEnv.envFunc.window_ondeviceorientation_get = function() {
      let _retVal = bodaEnv.toolsFunc.checkObjIsIframe(this, bodaEnv.memory.window['ondeviceorientation'], "window_ondeviceorientation_get");
      if (_retVal) {
          return _retVal;
      }
      let _val = bodaEnv.memory.window['ondeviceorientation'];
      bodaEnv.toolsFunc.console_copy(`window_ondeviceorientation_get ->`, _val);
      return _val;
  }
  ;
  bodaEnv.envFunc.window_ondeviceorientationabsolute_get = function() {
      let _retVal = bodaEnv.toolsFunc.checkObjIsIframe(this, bodaEnv.memory.window['ondeviceorientationabsolute'], "window_ondeviceorientationabsolute_get");
      if (_retVal) {
          return _retVal;
      }
      let _val = bodaEnv.memory.window['ondeviceorientationabsolute'];
      bodaEnv.toolsFunc.console_copy(`window_ondeviceorientationabsolute_get ->`, _val);
      return _val;
  }
  ;
  bodaEnv.envFunc.window_onbeforematch_get = function() {
      let _retVal = bodaEnv.toolsFunc.checkObjIsIframe(this, bodaEnv.memory.window['onbeforematch'], "window_onbeforematch_get");
      if (_retVal) {
          return _retVal;
      }
      let _val = bodaEnv.memory.window['onbeforematch'];
      bodaEnv.toolsFunc.console_copy(`window_onbeforematch_get ->`, _val);
      return _val;
  }
  ;
  bodaEnv.envFunc.window_onbeforetoggle_get = function() {
      let _retVal = bodaEnv.toolsFunc.checkObjIsIframe(this, bodaEnv.memory.window['onbeforetoggle'], "window_onbeforetoggle_get");
      if (_retVal) {
          return _retVal;
      }
      let _val = bodaEnv.memory.window['onbeforetoggle'];
      bodaEnv.toolsFunc.console_copy(`window_onbeforetoggle_get ->`, _val);
      return _val;
  }
  ;
  bodaEnv.envFunc.window_originAgentCluster_get = function() {
      let _val = bodaEnv.memory.globlProtoObj['originAgentCluster'] ? bodaEnv.memory.globlProtoObj['originAgentCluster'] : null;
      bodaEnv.toolsFunc.console_copy(`window_originAgentCluster_get ->`, _val);
      return _val;
  }
  ;
  bodaEnv.envFunc.window_credentialless_get = function() {

      let _val = bodaEnv.memory.window['credentialless'] ? bodaEnv.memory.window['credentialless'] : false;
      bodaEnv.toolsFunc.console_copy(`window_credentialless_get -> 默认返回false`, _val);
      return _val;
  }
  ;
  bodaEnv.envFunc.window_oncontentvisibilityautostatechange_get = function() {
      let _retVal = bodaEnv.toolsFunc.checkObjIsIframe(this, bodaEnv.memory.window['oncontentvisibilityautostatechange'], "window_oncontentvisibilityautostatechange_get");
      if (_retVal) {
          return _retVal;
      }
      let _val = bodaEnv.memory.window['oncontentvisibilityautostatechange'];
      bodaEnv.toolsFunc.console_copy(`window_oncontentvisibilityautostatechange_get ->`, _val);
      return _val;
  }
  ;
  bodaEnv.envFunc.window_onscrollend_get = function() {
      let _retVal = bodaEnv.toolsFunc.checkObjIsIframe(this, bodaEnv.memory.window['onscrollend'], "window_onscrollend_get");
      if (_retVal) {
          return _retVal;
      }
      let _val = bodaEnv.memory.window['onscrollend'];
      bodaEnv.toolsFunc.console_copy(`window_onscrollend_get ->`, _val);
      return _val;
  }
  ;

  ///screen 相关
  bodaEnv.envFunc.Screen_pixelDepth_get = function Screen_pixelDepth_get() {
      let pixelDepth = bodaEnv.memory.screen["pixelDepth"]
      bodaEnv.toolsFunc.console_copy(`Screen_pixelDepth_get `, `${pixelDepth}  `)

      return pixelDepth
  }
  bodaEnv.envFunc.Screen_colorDepth_get = function Screen_colorDepth_get() {
      let colorDepth = 24
      bodaEnv.toolsFunc.console_copy(`Screen_colorDepth_get `, `${colorDepth}  `)

      return colorDepth
  }

  bodaEnv.envFunc.Screen_availLeft_get = function Screen_availLeft_get() {
      let availLeft = bodaEnv.memory.screen["availLeft"]
      bodaEnv.toolsFunc.console_copy(`Screen_availLeft_get `, `${availLeft}  `)

      return availLeft
  }
  bodaEnv.envFunc.Screen_availTop_get = function Screen_availTop_get() {
      let availTop = bodaEnv.memory.screen["availTop"]
      bodaEnv.toolsFunc.console_copy(`Screen_availTop_get `, `${availTop}  `)

      return availTop
  }
  bodaEnv.envFunc.Screen_orientation_get = function Screen_orientation_get() {
      let orientation = bodaEnv.memory.screen["orientation"]
      bodaEnv.toolsFunc.console_copy(`Screen_orientation_get `, `${orientation}  `)

      Object.setPrototypeOf(orientation, ScreenOrientation.prototype)
      return orientation
  }
  bodaEnv.envFunc.Screen_isExtended_get = function Screen_isExtended_get() {
      let isExtended = bodaEnv.memory.screen["isExtended"]
      bodaEnv.toolsFunc.console_copy(`Screen_isExtended_get `, `${isExtended}  `)

      return isExtended
  }
  bodaEnv.envFunc.Screen_width_get = function Screen_width_get() {
      let width = bodaEnv.memory.screenDimensions['screen_width'];
      bodaEnv.toolsFunc.console_copy(`Screen_width_get `, `${width}  `)

      return width
  }
  bodaEnv.envFunc.Screen_height_get = function Screen_height_get() {
      let height = bodaEnv.memory.screenDimensions['screen_height'];
      bodaEnv.toolsFunc.console_copy(`Screen_height_get `, `${height}  `)

      return height
  }
  bodaEnv.envFunc.Screen_availWidth_get = function Screen_availWidth_get() {
      let availWidth = bodaEnv.memory.screenDimensions['screen_availWidth'];
      bodaEnv.toolsFunc.console_copy(`Screen_availWidth_get `, `${availWidth}  `)

      return availWidth
  }
  bodaEnv.envFunc.Screen_availHeight_get = function Screen_availHeight_get() {
      let availHeight = bodaEnv.memory.screenDimensions['screen_availHeight']
      bodaEnv.toolsFunc.console_copy(`Screen_availHeight_get `, `${availHeight}  `)

      return availHeight
  }
  bodaEnv.envFunc.window_innerHeight_get = function() {
      let innerHeight = bodaEnv.memory.screenDimensions['window_innerHeight'];
      bodaEnv.toolsFunc.console_copy(`window_innerHeight_get `, `innerHeight ->${innerHeight}`);
      return innerHeight;
  }
  ;
  bodaEnv.envFunc.window_innerWidth_get = function() {
      let innerWidth = bodaEnv.memory.screenDimensions['window_innerWidth'];;
      bodaEnv.toolsFunc.console_copy(`window_innerWidth_get `, `innerWidth ->${innerWidth}`);
      return innerWidth;
  }
  ;
  bodaEnv.envFunc.window_outerWidth_get = function window_outerWidth_get() {
      ;let outerWidth = bodaEnv.memory.screenDimensions['window_outerWidth'];
      bodaEnv.toolsFunc.console_copy(`window_outerWidth_get `, `outerWidth ->${outerWidth}`);
      return outerWidth;
  }
  ;
  bodaEnv.envFunc.window_outerHeight_get = function window_outerHeight_get() {
      ;let outerHeight = bodaEnv.memory.screenDimensions['window_outerHeight'];
      bodaEnv.toolsFunc.console_copy(`window_outerHeight_get `, `outerHeight ->${outerHeight}`);
      return outerHeight;
  }
  ;
   bodaEnv.envFunc.Navigator_virtualKeyboard_get=function(){
        let isliveAttr=bodaEnv.toolsFunc.getObjWeakMapProtoAttr.call(this,'virtualKeyboard')
        if (isliveAttr){
            bodaEnv.toolsFunc.console_copy(`Navigator_virtualKeyboard_get `, `virtualKeyboard -> ${isliveAttr}`);
            return isliveAttr
        }
        let _res=new VirtualKeyboard('boob')
        bodaEnv.toolsFunc.console_copy(`Navigator_virtualKeyboard_get `, `virtualKeyboard -> ${_res}`);
        bodaEnv.toolsFunc.setObjWeakMapProtoAttr.call(this,'virtualKeyboard',_res)
        return _res
    }

    bodaEnv.envFunc.Navigator_mediaCapabilities_get=function(){
        let isliveAttr=bodaEnv.toolsFunc.getObjWeakMapProtoAttr.call(this,'mediaCapabilities')
        if (isliveAttr){
            bodaEnv.toolsFunc.console_copy(`Navigator_mediaCapabilities_get `, `mediaCapabilities -> ${isliveAttr}`);
            return isliveAttr
        }
        let _res=new MediaCapabilities('boob')
        bodaEnv.toolsFunc.console_copy(`Navigator_mediaCapabilities_get `, `mediaCapabilities -> ${_res}`);
        bodaEnv.toolsFunc.setObjWeakMapProtoAttr.call(this,'ink',_res)
        return _res
    }

    bodaEnv.envFunc.Navigator_ink_get=function(){
        let isliveAttr=bodaEnv.toolsFunc.getObjWeakMapProtoAttr.call(this,'ink')
        if (isliveAttr){
            bodaEnv.toolsFunc.console_copy(`Navigator_ink_get `, `ink -> ${isliveAttr}`);
            return isliveAttr
        }
        let _res=new Ink('boob')
        bodaEnv.toolsFunc.console_copy(`Navigator_ink_get `, `ink -> ${_res}`);
        bodaEnv.toolsFunc.setObjWeakMapProtoAttr.call(this,'ink',_res)
        return _res
    }

    bodaEnv.envFunc.Navigator_wakeLock_get=function(){
        debugger
        let isliveAttr=bodaEnv.toolsFunc.getObjWeakMapProtoAttr.call(this,'wakeLock')
        if (isliveAttr){
            bodaEnv.toolsFunc.console_copy(`Navigator_wakeLock_get `, `wakeLock -> ${isliveAttr}`);
            return isliveAttr
        }
        let _res=new WakeLock('boob')
        bodaEnv.toolsFunc.console_copy(`Navigator_wakeLock_get `, `wakeLock -> ${_res}`);
        bodaEnv.toolsFunc.setObjWeakMapProtoAttr.call(this,'wakeLock',_res)
        return _res
    }

    bodaEnv.envFunc.Navigator_serviceWorker_get=function(){
        let isliveAttr=bodaEnv.toolsFunc.getObjWeakMapProtoAttr.call(this,'serviceWorker')
        if (isliveAttr){
            bodaEnv.toolsFunc.console_copy(`Navigator_serviceWorker_get `, `serviceWorker -> ${isliveAttr}`);
            return isliveAttr
        }
        let _res=new ServiceWorkerContainer('boob')
        bodaEnv.toolsFunc.console_copy(`Navigator_serviceWorker_get `, `serviceWorker -> ${_res}`);
        bodaEnv.toolsFunc.setObjWeakMapProtoAttr.call(this,'serviceWorker',_res)
        return _res
    }

    bodaEnv.envFunc.Navigator_managed_get=function(){
        let isliveAttr=bodaEnv.toolsFunc.getObjWeakMapProtoAttr.call(this,'managed')
        if (isliveAttr){
            bodaEnv.toolsFunc.console_copy(`Navigator_managed_get `, `managed -> ${isliveAttr}`);
            return isliveAttr
        }
        let _res=new NavigatorManagedData('boob')
        bodaEnv.toolsFunc.console_copy(`Navigator_managed_get `, `managed -> ${_res}`);
        bodaEnv.toolsFunc.setObjWeakMapProtoAttr.call(this,'managed',_res)
        return _res
    }
    bodaEnv.envFunc.Navigator_bluetooth_get=function(){
        let isliveAttr=bodaEnv.toolsFunc.getObjWeakMapProtoAttr.call(this,'bluetooth')
        if (isliveAttr){
            bodaEnv.toolsFunc.console_copy(`Navigator_bluetooth_get `, `bluetooth -> ${isliveAttr}`);
            return isliveAttr
        }
        let _res=new Bluetooth('boob')
        bodaEnv.toolsFunc.console_copy(`Navigator_bluetooth_get `, `bluetooth -> ${_res}`);
        bodaEnv.toolsFunc.setObjWeakMapProtoAttr.call(this,'bluetooth',_res)
        return _res

    }
    bodaEnv.envFunc.Navigator_onLine_get=function(){
        let _res=true
        bodaEnv.toolsFunc.console_copy(`Navigator_onLine_get `, `_res -> ${_res}`);

        return _res

    }
    bodaEnv.envFunc.Navigator_webkitTemporaryStorage_get=function(){
        let isliveAttr=bodaEnv.toolsFunc.getObjWeakMapProtoAttr.call(this,'webkitTemporaryStorage')
        if (isliveAttr){
            bodaEnv.toolsFunc.console_copy(`Navigator_webkitTemporaryStorage_get `, `webkitTemporaryStorage -> ${isliveAttr}`);
            return isliveAttr
        }
        let _res=new bodaEnv.memory.globlProtoObj['DeprecatedStorageQuota']('boob')
        bodaEnv.toolsFunc.console_copy(`Navigator_webkitTemporaryStorage_get `, `webkitTemporaryStorage -> ${_res}`);
        bodaEnv.toolsFunc.setObjWeakMapProtoAttr.call(this,'webkitTemporaryStorage',_res)
        return _res
    }

    bodaEnv.envFunc.Navigator_geolocation_get=function(){
        let isliveAttr=bodaEnv.toolsFunc.getObjWeakMapProtoAttr.call(this,'geolocation')
        if (isliveAttr){
            bodaEnv.toolsFunc.console_copy(`Navigator_geolocation_get `, `geolocation -> ${isliveAttr}`);
            return isliveAttr
        }
        let _res=new Geolocation('boob')
        bodaEnv.toolsFunc.console_copy(`Navigator_geolocation_get `, `geolocation -> ${_res}`);
        bodaEnv.toolsFunc.setObjWeakMapProtoAttr.call(this,'geolocation',_res)
        return _res
    }
    bodaEnv.envFunc.Navigator_userActivation_get=function(){
        let isliveAttr=bodaEnv.toolsFunc.getObjWeakMapProtoAttr.call(this,'UserActivation')
        if (isliveAttr){
            bodaEnv.toolsFunc.console_copy(`Navigator_userActivation_get `, `UserActivation -> ${isliveAttr}`);
            return isliveAttr
        }
        let _res=new UserActivation('boob')
        bodaEnv.toolsFunc.console_copy(`Navigator_userActivation_get `, `UserActivation -> ${_res}`);
        bodaEnv.toolsFunc.setObjWeakMapProtoAttr.call(this,'UserActivation',_res)
        return _res
    }

    bodaEnv.envFunc.Navigator_scheduling_get=function(){
        let isliveAttr=bodaEnv.toolsFunc.getObjWeakMapProtoAttr.call(this,'scheduling')
        if (isliveAttr){
            bodaEnv.toolsFunc.console_copy(`Navigator_scheduling_get `, `scheduling -> ${isliveAttr}`);
            return isliveAttr
        }
        let _res=new Scheduling('boob')
        bodaEnv.toolsFunc.console_copy(`Navigator_scheduling_get `, `scheduling -> ${_res}`);
        bodaEnv.toolsFunc.setObjWeakMapProtoAttr.call(this,'scheduling',_res)
        return _res
    }

    bodaEnv.envFunc.Navigator_windowControlsOverlay_get=function(){
        let isliveAttr=bodaEnv.toolsFunc.getObjWeakMapProtoAttr.call(this,'windowControlsOverlay')
        if (isliveAttr){
            bodaEnv.toolsFunc.console_copy(`Navigator_windowControlsOverlay_get `, `windowControlsOverlay -> ${isliveAttr}`);
            return isliveAttr
        }
        let _res=new WindowControlsOverlay('boob')
        bodaEnv.toolsFunc.console_copy(`Navigator_windowControlsOverlay_get `, `windowControlsOverlay -> ${_res}`);
        bodaEnv.toolsFunc.setObjWeakMapProtoAttr.call(this,'windowControlsOverlay',_res)
        return _res
    }
    bodaEnv.envFunc.Navigator_usb_get=function(){
        let isliveAttr=bodaEnv.toolsFunc.getObjWeakMapProtoAttr.call(this,'usb')
        if (isliveAttr){
            bodaEnv.toolsFunc.console_copy(`Navigator_usb_get `, `usb -> ${isliveAttr}`);
            return isliveAttr
        }
        let _usb=new GPU('boob')
        bodaEnv.toolsFunc.console_copy(`Navigator_gpu_get `, `usb -> ${_usb}`);
        bodaEnv.toolsFunc.setObjWeakMapProtoAttr.call(this,'usb',_usb)
        return _usb
    }
    bodaEnv.envFunc.Navigator_gpu_get = function () {

        let isliveAttr=bodaEnv.toolsFunc.getObjWeakMapProtoAttr.call(this,'gpu')
        if (isliveAttr){
            bodaEnv.toolsFunc.console_copy(`Navigator_gpu_get `, `_gpu -> ${isliveAttr}`);

            return isliveAttr
        }
        let _gpu=new GPU('boob')
        bodaEnv.toolsFunc.console_copy(`Navigator_gpu_get `, `_gpu -> ${_gpu}`);
        bodaEnv.toolsFunc.setObjWeakMapProtoAttr.call(this,'gpu',_gpu)
        return _gpu
    }
    bodaEnv.envFunc.Navigator_appVersion_get = function () {

        let appVersion = bodaEnv.memory.navigator['appVersion'];
        bodaEnv.toolsFunc.console_copy(`Navigator_appVersion_get res->`, appVersion);
        return appVersion;
    }

      bodaEnv.envFunc.Performance_getEntriesByName = function() {
      let _name = arguments[0]
      let _entries = bodaEnv.memory.Performance.getEntriesByType
      let _res = []
      for (let _entry of _entries) {
          if (_name == _entry['name']) {
              let entryObj = new PerformanceResourceTiming('bobo')
              bodaEnv.toolsFunc.setObjWeakMapProtoAttr.call(entryObj, 'getEntriesByType', _entry)
              _res.push(entryObj)
              break
          }
      }
      bodaEnv.toolsFunc.console_copy(`Performance_getEntriesByName _name-> ${_name} _res->`, _res)

      return _res
  }
  bodaEnv.envFunc.PerformanceObserver_supportedEntryTypes_get=function(){
    // debugger
    let _res=['element', 'event', 'first-input', 'largest-contentful-paint', 'layout-shift', 'longtask', 'mark', 'measure', 'navigation', 'paint', 'resource', 'visibility-state']
    bodaEnv.toolsFunc.console_copy(`PerformanceObserver_supportedEntryTypes_get 可能需要根据网站修改!!!! _res->`, _res)

    return _res
  }
  bodaEnv.envFunc.PerformanceObserver_observe=function(){
    // debugger
    let _obs=bodaEnv.toolsFunc.getObjWeakMapProtoAttr.call(this)['PerformanceObserver']
    if (_obs){
        let _func=_obs[0]
        bodaEnv.toolsFunc.console_copy(`PerformanceObserver_observe 直接调用PerformanceObserver 下的func`)
        // debugger
        _func.call(undefined,new PerformanceObserverEntryList('bobo'),this)
        return 
    }
    bodaEnv.toolsFunc.throwError('TypeError','主动报错 PerformanceObserver_observe')
  }
  bodaEnv.envFunc.PerformanceObserverEntryList_getEntries=function(){
    let _res=[]
    let islive1=bodaEnv.toolsFunc.getObjWeakMapProtoAttr.call(this,'PerformancePaintTiming_1')
    let islive2=bodaEnv.toolsFunc.getObjWeakMapProtoAttr.call(this,'PerformancePaintTiming_2')
    if (islive1 || islive2){
        _res.push(islive1)
        _res.push(islive1)
    }else{
        let _res1=new PerformancePaintTiming('bobo')
        let _res2=new PerformancePaintTiming('bobo')
        bodaEnv.toolsFunc.setObjWeakMapProtoAttr.call(this, 'PerformancePaintTiming_1',_res1)
        bodaEnv.toolsFunc.setObjWeakMapProtoAttr.call(_res1, 'name',"first-paint")
        bodaEnv.toolsFunc.setObjWeakMapProtoAttr.call(_res1, 'entryType',"paint")
        bodaEnv.toolsFunc.setObjWeakMapProtoAttr.call(_res1, 'startTime',15854.90000000596)

        bodaEnv.toolsFunc.setObjWeakMapProtoAttr.call(this, 'PerformancePaintTiming_2',_res2)
        bodaEnv.toolsFunc.setObjWeakMapProtoAttr.call(_res2, 'name',"first-contentful-paint")
        bodaEnv.toolsFunc.setObjWeakMapProtoAttr.call(_res2, 'entryType',"paint")
        bodaEnv.toolsFunc.setObjWeakMapProtoAttr.call(_res2, 'startTime',15854.90000000596)

        _res.push(_res1)
        _res.push(_res2)
    }

    bodaEnv.toolsFunc.console_copy(`PerformanceObserverEntryList_getEntries _res ->`,_res)

    return _res
  }

  bodaEnv.envFunc.PerformanceEntry_name_get=function(){
        let _name=bodaEnv.toolsFunc.getObjWeakMapProtoAttr.call(this, 'name')
        bodaEnv.toolsFunc.console_copy(`PerformanceEntry_name_get _res ->`,_name)

        return _name
  }

  bodaEnv.envFunc.PerformanceEntry_startTime_get=function(){
    let startTime=bodaEnv.toolsFunc.getObjWeakMapProtoAttr.call(this, 'startTime')
    bodaEnv.toolsFunc.console_copy(`PerformanceEntry_startTime_get _res ->`,startTime)
    return startTime
  }
  bodaEnv.envFunc.PerformanceEntry_entryType_get=function(){
    let entryType=bodaEnv.toolsFunc.getObjWeakMapProtoAttr.call(this, 'entryType')
    bodaEnv.toolsFunc.console_copy(`PerformanceEntry_entryType_get _res ->`,entryType)
    return entryType
  }
}
)()
