//主要用来保护伪造的函数 让其更难被识破
/*
保存原函数
修改原函数为自定义函数
自定义函数里面修改逻辑然后调用原函数
*/
;;
!function () {
    bodaEnv.toolsFunc.getApi=function(_api){
        let boreq=new XMLHttpRequest()
        boreq.open('POST',_api,true)
        let _res=bodaEnv.toolsFunc.getObjWeakMapProtoAttr.call(boreq)['open'][1]
        boreq=null
    
        bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["XMLHttpRequest"].prototype, "open", {
            configurable: true,
            enumerable: true,
            writable: true,
            value: {
              open() {
                return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["XMLHttpRequest"].prototype, "XMLHttpRequest", "open", arguments);
              }
            }.open
          });


        return _res
    }

    bodaEnv.toolsFunc.doRTClistener=function(){
        //RTC事件执行
        // debugger
        if (bodaEnv.memory.RTCPeerConnection.length>0){
            let _RTCList=bodaEnv.memory.RTCPeerConnection
            
            for (let _RTC of _RTCList){
                let _onicecandidate=bodaEnv.toolsFunc.getObjWeakMapProtoAttr.call(_RTC,'onicecandidate')
                if (_onicecandidate){
                    let _event=new bodaEnv.memory.globlProtoObj['RTCPeerConnectionIceEvent']('bobo')
                    window.event=_event
                    bodaEnv.toolsFunc.defineProperty_bo(_event,'isTrusted',{
                        set:undefined,
                        enumerable:true,
                        configurable:false,
                        get:function isTrusted (){return bodaEnv.toolsFunc.dispatch(this,window, "window", "isTrusted_get", arguments)}
                    })
                    bodaEnv.toolsFunc.console_copy(`开始执行 RTC 事件  当前 事件 ::  ${_RTC}`)
                    let _localDescription=new bodaEnv.memory.globlProtoObj['RTCSessionDescription']('bobo')
                    bodaEnv.toolsFunc.setObjWeakMapProtoAttr.call(_RTC,'localDescription',_localDescription)
                    _onicecandidate.call(_RTC,_event)

                }
            }
            return 
        }
        bodaEnv.toolsFunc.console_copy(`没有 RTC 事件 需要执行`)

    }
    bodaEnv.toolsFunc.getRandomNumber=function (min,max) {
        // var min = 0.91;
        // var max = 0.99;
        // 保留两位小数
        return (Math.random() * (max - min) + min).toFixed(2);

    }
    bodaEnv.toolsFunc.getRandomInteger=function (min,max){
        // var min = 400;
        // var max = 1000;
        // Math.floor 用于向下取整
        return Math.floor(Math.random() * (max - min + 1) ) + min;
    }
    
    bodaEnv.toolsFunc.generateRandomString= function (length) {
        var text = '';
        var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
         
        for (var i = 0; i < length-1; i++) {
          text += possible.charAt(Math.floor(Math.random() * possible.length));
        }
         
        // 保证"="只出现在字符串结尾
        text += '=';
         
        return text;
      }
      

    bodaEnv.toolsFunc.initEnvFingerPrint=function(){
        //初始化环境内指纹
        //canvas
        //navigator
        //
        let fingerPrintList={
            'WebGLRenderingContext_getParameter_37446':[
                "ANGLE (Intel, Intel(R) UHD Graphics 630 (0x00003E92) Direct3D11 vs_5_0 ps_5_0, D3D11)",
                "ANGLE (Intel, Intel(R) Iris Plus Graphics 640 (0x00003E93) Direct3D11 vs_5_0 ps_5_0, D3D11)",
                "ANGLE (Intel, Intel(R) Iris Plus Graphics 645 (0x00003E94) Direct3D11 vs_5_0 ps_5_0, D3D11)",
                "ANGLE (Intel, Intel(R) UHD Graphics 610 (0x00003E76) Direct3D11 vs_5_0 ps_5_0, D3D11)",
                "ANGLE (Intel, Intel(R) UHD Graphics 615 (0x00003E78) Direct3D11 vs_5_0 ps_5_0, D3D11)",
                "ANGLE (Intel, Intel(R) Iris Pro Graphics 5200 (0x0000D26) Direct3D11 vs_5_0 ps_5_0, D3D11)",
                "ANGLE (Intel, Intel(R) Iris Graphics 5100 (0x0000D28) Direct3D11 vs_5_0 ps_5_0, D3D11)",
                "ANGLE (Intel, Intel(R) HD Graphics 5000 (0x0000D22) Direct3D11 vs_5_0 ps_5_0, D3D11)",
                "ANGLE (Intel, Intel(R) HD Graphics 4400 (0x0000A16) Direct3D11 vs_5_0 ps_5_0, D3D11)",
                "ANGLE (Intel, Intel(R) HD Graphics 4600 (0x0000C16) Direct3D11 vs_5_0 ps_5_0, D3D11)",
                ],
            'BatteryManager_level_get':bodaEnv.toolsFunc.getRandomNumber(0.91,0.99),
            'BatteryManager_chargingTime_get':bodaEnv.toolsFunc.getRandomInteger(400,1000),
            'webgl':'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAYAAABccqhmAAAAAXNSR0IArs4c6QAABkhJREFUeF7t1AERAAAIAjHpX9ogPxswPHaOAIGswLLJBSdA4AyAJyAQFjAA4fJFJ2AA/ACBsIABCJcvOgED4AcIhAUMQLh80QkYAD9AICxgAMLli07AAPgBAmEBAxAuX3QCBsAPEAgLGIBw+aITMAB+gEBYwACEyxedgAHwAwTCAgYgXL7oBAyAHyAQFjAA4fJFJ2AA/ACBsIABCJcvOgED4AcIhAUMQLh80QkYAD9AICxgAMLli07AAPgBAmEBAxAuX3QCBsAPEAgLGIBw+aITMAB+gEBYwACEyxedgAHwAwTCAgYgXL7oBAyAHyAQFjAA4fJFJ2AA/ACBsIABCJcvOgED4AcIhAUMQLh80QkYAD9AICxgAMLli07AAPgBAmEBAxAuX3QCBsAPEAgLGIBw+aITMAB+gEBYwACEyxedgAHwAwTCAgYgXL7oBAyAHyAQFjAA4fJFJ2AA/ACBsIABCJcvOgED4AcIhAUMQLh80QkYAD9AICxgAMLli07AAPgBAmEBAxAuX3QCBsAPEAgLGIBw+aITMAB+gEBYwACEyxedgAHwAwTCAgYgXL7oBAyAHyAQFjAA4fJFJ2AA/ACBsIABCJcvOgED4AcIhAUMQLh80QkYAD9AICxgAMLli07AAPgBAmEBAxAuX3QCBsAPEAgLGIBw+aITMAB+gEBYwACEyxedgAHwAwTCAgYgXL7oBAyAHyAQFjAA4fJFJ2AA/ACBsIABCJcvOgED4AcIhAUMQLh80QkYAD9AICxgAMLli07AAPgBAmEBAxAuX3QCBsAPEAgLGIBw+aITMAB+gEBYwACEyxedgAHwAwTCAgYgXL7oBAyAHyAQFjAA4fJFJ2AA/ACBsIABCJcvOgED4AcIhAUMQLh80QkYAD9AICxgAMLli07AAPgBAmEBAxAuX3QCBsAPEAgLGIBw+aITMAB+gEBYwACEyxedgAHwAwTCAgYgXL7oBAyAHyAQFjAA4fJFJ2AA/ACBsIABCJcvOgED4AcIhAUMQLh80QkYAD9AICxgAMLli07AAPgBAmEBAxAuX3QCBsAPEAgLGIBw+aITMAB+gEBYwACEyxedgAHwAwTCAgYgXL7oBAyAHyAQFjAA4fJFJ2AA/ACBsIABCJcvOgED4AcIhAUMQLh80QkYAD9AICxgAMLli07AAPgBAmEBAxAuX3QCBsAPEAgLGIBw+aITMAB+gEBYwACEyxedgAHwAwTCAgYgXL7oBAyAHyAQFjAA4fJFJ2AA/ACBsIABCJcvOgED4AcIhAUMQLh80QkYAD9AICxgAMLli07AAPgBAmEBAxAuX3QCBsAPEAgLGIBw+aITMAB+gEBYwACEyxedgAHwAwTCAgYgXL7oBAyAHyAQFjAA4fJFJ2AA/ACBsIABCJcvOgED4AcIhAUMQLh80QkYAD9AICxgAMLli07AAPgBAmEBAxAuX3QCBsAPEAgLGIBw+aITMAB+gEBYwACEyxedgAHwAwTCAgYgXL7oBAyAHyAQFjAA4fJFJ2AA/ACBsIABCJcvOgED4AcIhAUMQLh80QkYAD9AICxgAMLli07AAPgBAmEBAxAuX3QCBsAPEAgLGIBw+aITMAB+gEBYwACEyxedgAHwAwTCAgYgXL7oBAyAHyAQFjAA4fJFJ2AA/ACBsIABCJcvOgED4AcIhAUMQLh80QkYAD9AICxgAMLli07AAPgBAmEBAxAuX3QCBsAPEAgLGIBw+aITMAB+gEBYwACEyxedgAHwAwTCAgYgXL7oBAyAHyAQFjAA4fJFJ2AA/ACBsIABCJcvOgED4AcIhAUMQLh80QkYAD9AICxgAMLli07AAPgBAmEBAxAuX3QCBsAPEAgLGIBw+aITMAB+gEBYwACEyxedgAHwAwTCAgYgXL7oBAyAHyAQFjAA4fJFJ2AA/ACBsIABCJcvOgED4AcIhAUMQLh80QkYAD9AICxgAMLli07AAPgBAmEBAxAuX3QCBsAPEAgLGIBw+aITMAB+gEBYwACEyxedgAHwAwTCAgYgXL7oBAyAHyAQFjAA4fJFJ2AA/ACBsIABCJcvOgED4AcIhAUMQLh80QkYAD9AICxgAMLli07AAPgBAmEBAxAuX3QCBsAPEAgLGIBw+aITMAB+gEBYwACEyxedwAOf2gEBwEDqbgAAAABJRU5ErkJggg6'+bodaEnv.toolsFunc.generateRandomString(36)+'=',
            'canvas':'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAACWCAYAAABkW7XSAAAEYklEQVR4Xu3UAQkAAAwCwdm/9HI83BLIOdw5AgQIRAQWySkmAQIEzmB5AgIEMgIGK1OVoAQIGCw/QIBARsBgZaoSlAABg+UHCBDICBisTFWCEiBgsPwAAQIZAYOVqUpQAgQMlh8gQCAjYLAyVQlKgIDB8gMECGQEDFamKkEJEDBYfoAAgYyAwcpUJSgBAgbLDxAgkBEwWJmqBCVAwGD5AQIEMgIGK1OVoAQIGCw/QIBARsBgZaoSlAABg+UHCBDICBisTFWCEiBgsPwAAQIZAYOVqUpQAgQMlh8gQCAjYLAyVQlKgIDB8gMECGQEDFamKkEJEDBYfoAAgYyAwcpUJSgBAgbLDxAgkBEwWJmqBCVAwGD5AQIEMgIGK1OVoAQIGCw/QIBARsBgZaoSlAABg+UHCBDICBisTFWCEiBgsPwAAQIZAYOVqUpQAgQMlh8gQCAjYLAyVQlKgIDB8gMECGQEDFamKkEJEDBYfoAAgYyAwcpUJSgBAgbLDxAgkBEwWJmqBCVAwGD5AQIEMgIGK1OVoAQIGCw/QIBARsBgZaoSlAABg+UHCBDICBisTFWCEiBgsPwAAQIZAYOVqUpQAgQMlh8gQCAjYLAyVQlKgIDB8gMECGQEDFamKkEJEDBYfoAAgYyAwcpUJSgBAgbLDxAgkBEwWJmqBCVAwGD5AQIEMgIGK1OVoAQIGCw/QIBARsBgZaoSlAABg+UHCBDICBisTFWCEiBgsPwAAQIZAYOVqUpQAgQMlh8gQCAjYLAyVQlKgIDB8gMECGQEDFamKkEJEDBYfoAAgYyAwcpUJSgBAgbLDxAgkBEwWJmqBCVAwGD5AQIEMgIGK1OVoAQIGCw/QIBARsBgZaoSlAABg+UHCBDICBisTFWCEiBgsPwAAQIZAYOVqUpQAgQMlh8gQCAjYLAyVQlKgIDB8gMECGQEDFamKkEJEDBYfoAAgYyAwcpUJSgBAgbLDxAgkBEwWJmqBCVAwGD5AQIEMgIGK1OVoAQIGCw/QIBARsBgZaoSlAABg+UHCBDICBisTFWCEiBgsPwAAQIZAYOVqUpQAgQMlh8gQCAjYLAyVQlKgIDB8gMECGQEDFamKkEJEDBYfoAAgYyAwcpUJSgBAgbLDxAgkBEwWJmqBCVAwGD5AQIEMgIGK1OVoAQIGCw/QIBARsBgZaoSlAABg+UHCBDICBisTFWCEiBgsPwAAQIZAYOVqUpQAgQMlh8gQCAjYLAyVQlKgIDB8gMECGQEDFamKkEJEDBYfoAAgYyAwcpUJSgBAgbLDxAgkBEwWJmqBCVAwGD5AQIEMgIGK1OVoAQIGCw/QIBARsBgZaoSlAABg+UHCBDICBisTFWCEiBgsPwAAQIZAYOVqUpQAgQMlh8gQCAjYLAyVQlKgIDB8gMECGQEDFamKkEJEDBYfoAAgYyAwcpUJSgBAgbLDxAgkBEwWJmqBCVAwGD5AQIEMgIGK1OVoAQIGCw/QIBARsBgZaoSlACBB1YxAJfjJb2jAAAAAElFTkSuQmCC'+bodaEnv.toolsFunc.generateRandomString(36),
            'screenDimensions': [
                {'screen_width': 1440, 'screen_height': 900, 'screen_availWidth': 1400, 'screen_availHeight': 850, 'window_innerWidth': 1440, 'window_innerHeight': 791, 'window_outerWidth': 1440, 'window_outerHeight': 912},
                {'screen_width': 1366, 'screen_height': 768, 'screen_availWidth': 1336, 'screen_availHeight': 718, 'window_innerWidth': 1360, 'window_innerHeight': 680, 'window_outerWidth': 1360, 'window_outerHeight': 800},
                {'screen_width': 1280, 'screen_height': 800, 'screen_availWidth': 1250, 'screen_availHeight': 750, 'window_innerWidth': 1274, 'window_innerHeight': 650, 'window_outerWidth': 1274, 'window_outerHeight': 770},
                {'screen_width': 1920, 'screen_height': 1080, 'screen_availWidth': 1890, 'screen_availHeight': 1030, 'window_innerWidth': 1914, 'window_innerHeight': 930, 'window_outerWidth': 1914, 'window_outerHeight': 1050},
                {'screen_width': 1600, 'screen_height': 900, 'screen_availWidth': 1570, 'screen_availHeight': 850, 'window_innerWidth': 1594, 'window_innerHeight': 750, 'window_outerWidth': 1594, 'window_outerHeight': 870},
                {'screen_width': 1024, 'screen_height': 768, 'screen_availWidth': 994, 'screen_availHeight': 718, 'window_innerWidth': 1018, 'window_innerHeight': 618, 'window_outerWidth': 1018, 'window_outerHeight': 738},
                {'screen_width': 800, 'screen_height': 600, 'screen_availWidth': 770, 'screen_availHeight': 550, 'window_innerWidth': 794, 'window_innerHeight': 450, 'window_outerWidth': 794, 'window_outerHeight': 570},
                {'screen_width': 640, 'screen_height': 480, 'screen_availWidth': 610, 'screen_availHeight': 430, 'window_innerWidth': 634, 'window_innerHeight': 330, 'window_outerWidth': 634, 'window_outerHeight': 450},
                {'screen_width': 2560, 'screen_height': 1440, 'screen_availWidth': 2530, 'screen_availHeight': 1390, 'window_innerWidth': 2554, 'window_innerHeight': 1290, 'window_outerWidth': 2554, 'window_outerHeight': 1410},
                {'screen_width': 1368, 'screen_height': 912, 'screen_availWidth': 1338, 'screen_availHeight': 862, 'window_innerWidth': 1362, 'window_innerHeight': 762, 'window_outerWidth': 1362, 'window_outerHeight': 882},
                {'screen_width': 1280, 'screen_height': 960, 'screen_availWidth': 1250, 'screen_availHeight': 910, 'window_innerWidth': 1274, 'window_innerHeight': 810, 'window_outerWidth': 1274, 'window_outerHeight': 930},
                {'screen_width': 1536, 'screen_height': 864, 'screen_availWidth': 1506, 'screen_availHeight': 814, 'window_innerWidth': 1530, 'window_innerHeight': 714, 'window_outerWidth': 1530, 'window_outerHeight': 834},
                {'screen_width': 1680, 'screen_height': 1050, 'screen_availWidth': 1650, 'screen_availHeight': 1000, 'window_innerWidth': 1674, 'window_innerHeight': 900, 'window_outerWidth': 1674, 'window_outerHeight': 1020},
                {'screen_width': 1152, 'screen_height': 864, 'screen_availWidth': 1122, 'screen_availHeight': 814, 'window_innerWidth': 1146, 'window_innerHeight': 714, 'window_outerWidth': 1146, 'window_outerHeight': 834},
                {'screen_width': 1440, 'screen_height': 900, 'screen_availWidth': 1410, 'screen_availHeight': 850, 'window_innerWidth': 1434, 'window_innerHeight': 750, 'window_outerWidth': 1434, 'window_outerHeight': 870},
                {'screen_width': 2048, 'screen_height': 1152, 'screen_availWidth': 2018, 'screen_availHeight': 1102, 'window_innerWidth': 2042, 'window_innerHeight': 1002, 'window_outerWidth': 2042, 'window_outerHeight': 1122},
                {'screen_width': 1280, 'screen_height': 1024, 'screen_availWidth': 1250, 'screen_availHeight': 974, 'window_innerWidth': 1274, 'window_innerHeight': 874, 'window_outerWidth': 1274, 'window_outerHeight': 994},
                {'screen_width': 1360, 'screen_height': 768, 'screen_availWidth': 1330, 'screen_availHeight': 718, 'window_innerWidth': 1354, 'window_innerHeight': 528, 'window_outerWidth': 1354, 'window_outerHeight': 648},
                {'screen_width': 1600, 'screen_height': 1200, 'screen_availWidth': 1570, 'screen_availHeight': 1150, 'window_innerWidth': 1594, 'window_innerHeight': 1050, 'window_outerWidth': 1594, 'window_outerHeight': 1170},
                {'screen_width': 1400, 'screen_height': 1050, 'screen_availWidth': 1370, 'screen_availHeight': 1000, 'window_innerWidth': 1394, 'window_innerHeight': 900, 'window_outerWidth': 1394, 'window_outerHeight': 1020}
            ]}
        let getParameter_37446=fingerPrintList['WebGLRenderingContext_getParameter_37446']
        bodaEnv.memory.WebGLRenderingContext_getParameter_37446=getParameter_37446[Math.floor(Math.random() * (getParameter_37446.length))]
        bodaEnv.memory.BatteryManager_level_get=fingerPrintList['BatteryManager_level_get']
        bodaEnv.memory.BatteryManager_chargingTime_get=fingerPrintList['BatteryManager_chargingTime_get']
        bodaEnv.memory.HTMLCanvasElement_toDataURL_canvas=fingerPrintList['canvas']
        bodaEnv.memory.HTMLCanvasElement_toDataURL_webgl=fingerPrintList['webgl']
        let _screenDimensions=fingerPrintList['screenDimensions']
        bodaEnv.memory.screenDimensions=_screenDimensions[Math.floor(Math.random() * (_screenDimensions.length))]
        fingerPrintList=null
        getParameter_37446=null
        screenDimensions_=null
    }   

    bodaEnv.toolsFunc.SetStyleProp=function(target){
            // let styleObj={};
            // 给 element 对象 设置css 样式 同时也会给element.style 设置css样式
            let _style=target.getAttribute('style')
            if (!_style) return null
            let _styleNum=0
            let _styleInclude=_style.includes(';')
            // debugger
            if (_styleInclude){
                let _tempStyle=_style.split(';')
                // try{
                    for (let _obj of _tempStyle){
                        if (!(_obj.length)) continue
                        let spStyle=_obj.split(':')
                        let _name=spStyle[0].trim()
                        let tempName=_name
                        let _value =spStyle[1].trim()
                        if (!_name || !_value){debugger}
                        target.style[_name]=_value
                        target.style[_styleNum]=_name
                        tempName.split('-').map((word, index) => index === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1)).join('');
                        target.style[tempName]=_value
                        bodaEnv.toolsFunc.setObjWeakMapProtoAttr.call(target,_name,_value)
                        bodaEnv.toolsFunc.setObjWeakMapProtoAttr.call(target,tempName,_value)
                        _styleNum++
                    }

                // }catch(e){
                //     debugger
                // }
 
            }


    }

    bodaEnv.toolsFunc.checkObjIsIframe=function(target,proto,funcName){
        // debugger
        let isiframe=bodaEnv.toolsFunc.getObjWeakMapProtoAttr.call(target,'isiframe')
        if (isiframe){
            let iframeNum=bodaEnv.toolsFunc.getObjWeakMapProtoAttr.call(target,'num')
            let isliveAttr=bodaEnv.toolsFunc.getObjWeakMapProtoAttr.call(target,funcName)
            if (isliveAttr){
                bodaEnv.toolsFunc.console_copy(`iframe ${funcName} ->`, isliveAttr)
                return isliveAttr
            }
            let _instance;
            if (proto.constructor){
                _instance=new proto.constructor('bobo')
                bodaEnv.toolsFunc.console_copy(`iframe ${funcName} ->`, _instance)
                bodaEnv.toolsFunc.setObjWeakMapProtoAttr.call(_instance,'num',iframeNum)
                bodaEnv.toolsFunc.setObjWeakMapProtoAttr.call(_instance,'isiframe',true)
                bodaEnv.toolsFunc.setObjWeakMapProtoAttr.call(target,funcName,_instance)
            }else{
                bodaEnv.toolsFunc.console_copy(`iframe ${funcName} -> res -> null`)
                bodaEnv.toolsFunc.setObjWeakMapProtoAttr.call(target,funcName,null)
                return null
            }
 
            return _instance
        }
    }


    bodaEnv.toolsFunc.generatorTracker=function (){
        function factorial(n) {
            if (n === 0 || n === 1) {
              return 1;
            } else {
              return n * factorial(n - 1);
            }
          }
          
        this._bztsg=function _bztsg(dataTrajectory) {
          var lengthOfData = dataTrajectory.length;
      
          function staer(x) {
            var t = (x - dataTrajectory[0][0]) / (dataTrajectory[lengthOfData - 1][0] - dataTrajectory[0][0]);
            let y = [0, 0];
            for (let s = 0; s < dataTrajectory.length; s++) {
              y = y.map((val, index) => val + (dataTrajectory[s][index] * (
                (factorial(lengthOfData - 1) / (factorial(s) * factorial(lengthOfData - 1 - s))) *
                Math.pow(t, s) * Math.pow((1 - t), lengthOfData - 1 - s)
              )));
            }
            return y[1];
          }
      
          return staer;
        }
      
        this._type=function _type(type, x, numberList) {
          var numberListre = [];
          var pin = (x[1] - x[0]) / numberList;
      
          if (type === 0) {
            for (let i = 0; i < numberList; i++) {
              numberListre.push(i * pin);
            }
          } else if (type === 1) {
            for (let i = 0; i < numberList; i++) {
              numberListre.push(1 * Math.pow(i * pin, 2));
            }
          } else if (type === 2) {
            for (let i = 0; i < numberList; i++) {
              numberListre.push(1 * Math.pow(i * pin - x[1], 2));
            }
          } else if (type === 3) {
            var dataTrajectory = [
              [0, 0],
              [(x[1] - x[0]) * 0.8, (x[1] - x[0]) * 0.6],
              [x[1] - x[0], 0]
            ];
            var fun = this._bztsg(dataTrajectory);
            numberListre.push(0);
            for (let i = 1; i < numberList; i++) {
              numberListre.push(fun(i * pin) + numberListre[numberListre.length - 1]);
            }
          }
      
          var minVal = Math.min(...numberListre);
          var maxVal = Math.max(...numberListre);
          var biaoNumberList = numberListre.map((val) => ((val - minVal) / (maxVal - minVal)) * (x[1] - x[0]) + x[0]);
          biaoNumberList[0] = x[0];
          biaoNumberList[biaoNumberList.length - 1] = x[1];
          return biaoNumberList;
        }
      
        this.getFun=function getFun(s) {
          var dataTrajectory = s.map((i) => i.map(parseFloat));
          return this._bztsg(dataTrajectory);
        }
      
        this.simulation=function simulation(start, end, le = 1, deviation = 0, bias = 0.5) {
          start = start.map(parseFloat);
          end = end.map(parseFloat);
          let cbb = [];
      
          if (le !== 1) {
            var e = (1 - bias) / (le - 1);
            cbb = Array.from({ length: le - 1 }, (_, i) => [bias + e * i, bias + e * (i + 1)]);
          }
      
          var dataTrajectoryList = [start];
          let t = [-1, 1][Math.floor(Math.random() * 2)];
          let w = 0;
      
          for (var i of cbb) {
            var px1 = start[0] + (end[0] - start[0]) * (Math.random() * (i[1] - i[0]) + i[0]);
            var p = [px1, this._bztsg([start, end])(px1) + t * deviation];
            dataTrajectoryList.push(p);
            w++;
            if (w >= 2) {
              w = 0;
              t = -1 * t;
            }
          }
      
          dataTrajectoryList.push(end);
          return { equation: this._bztsg(dataTrajectoryList), P: dataTrajectoryList };
        }
      
        this.trackArray=function trackArray(start, end, numberList, le = 1, deviation = 0, bias = 0.5, type = 0, cbb = 0, yhh = 10) {
          var s = [];
          var fun = this.simulation(start, end, le, deviation, bias);
          let w = fun.P;
          fun = fun.equation;
      
          if (cbb !== 0) {
            var numberListOfcbb = Math.round(numberList * 0.2 / (cbb + 1));
            numberList -= numberListOfcbb * (cbb + 1);
      
            var xTrackArray = this._type(type, [start[0], end[0]], numberList);
            for (var i of xTrackArray) {
              s.push([i, fun(i)]);
            }
      
            let dq = yhh / cbb;
            let kg = 0;
            let ends = [...end];
      
            for (let i = 0; i < cbb; i++) {
              let d;
              if (kg === 0) {
                d = [
                  end[0] + (yhh - dq * i),
                  ((end[1] - start[1]) / (end[0] - start[0])) * (end[0] + (yhh - dq * i)) +
                    (end[1] - ((end[1] - start[1]) / (end[0] - start[0])) * end[0])
                ];
                kg = 1;
              } else {
                d = [
                  end[0] - (yhh - dq * i),
                  ((end[1] - start[1]) / (end[0] - start[0])) * (end[0] - (yhh - dq * i)) +
                    (end[1] - ((end[1] - start[1]) / (end[0] - start[0])) * end[0])
                ];
                kg = 0;
              }
      
              var y = this.trackArray(ends, d, numberListOfcbb, 2, 0, 0.5, 0, 0, 10);
              s.push(...y.trackArray);
              ends = [...d];
            }
      
            var y = this.trackArray(ends, end, numberListOfcbb, 2, 0, 0.5, 0, 0, 10);
            s.push(...y.trackArray);
          } else {
            var xTrackArray = this._type(type, [start[0], end[0]], numberList);
            for (var i of xTrackArray) {
              s.push([i, fun(i)]);
            }
          }
      
          return { trackArray: s, P: w };
        }
      }


    
    
    
    
      bodaEnv.toolsFunc.delHookObj=function (objList){
        ///配合globlhook 使用 删除 boda xxx等特字符
        let targetList=['require','addEventListener',
        'dispatchEvent',
        'removeEventListener',
        'TEMPORARY',
        'PERSISTENT',
        'bodaRunPath',
        'bodafs',
        'bodaallundefined',
        'bodaError',
        'bodaTextEncoder',
        'bodaBabelParser',
        'bodaBabeltraverse','bodaDoScript','getValue','bodaEnv','mytime_stamp',
        'bodaBabeltypes',
        'bodaBabelgenerator']
        for (let target of targetList){
            let targetIndex=objList.indexOf(target)
            objList.splice(targetIndex,1)
        }


    }

    bodaEnv.toolsFunc.CSSParse=function(cssText){
            // 移除注释
            cssText = cssText.replace(/\/\*(.*?)\*\//g, '');
          
            // 正则表达式匹配选择器和样式规则
            var selectorRegex = /([^\{\}]+)\s*\{([^}]+)\}/g;
            var propertyRegex = /\s*([^:]+)\s*:\s*([^;]+)\s*;/g;
            if (!bodaEnv.memory.styles){
                bodaEnv.memory.styles={}
            }
          
            // 解析选择器和样式规则
            var match;
            while ((match = selectorRegex.exec(cssText)) !== null) {
              var selector = null
              if (match[1].trim().split(' ').length >=2){
                selector=match[1].trim().split(' ')[1]
              }else{
                selector=match[1].trim()
              }

              var rules = match[2];
          
              // 解析样式属性
              var properties = {};
              var propertyMatch;
              while ((propertyMatch = propertyRegex.exec(rules)) !== null) {
                var propertyName = propertyMatch[1].trim();
                var propertyValue = propertyMatch[2].trim();
                properties[propertyName] = propertyValue;
              }
          
              bodaEnv.memory.styles[selector] = properties;
            }
          
            return bodaEnv.memory.styles;
          
    }
    
    bodaEnv.toolsFunc.dolistener=function(eventName,event_,evnentData){
        /*
        eventName : 事件名称
        event_ : 事件对象
        envnentData : 事件数据
        */ 
        if (!event_) return 
        bodaEnv.memory.runningListern=true
        bodaEnv.memory.listenerEnd=false
        let eventType=null
        switch (eventName) {
            case 'deviceorientation':
                eventType=new DeviceOrientationEvent('bobo')
                break;
            case 'mousedown' :
                eventType=new MouseEvent('bobo')
                break;
            case 'mousemove' :
                eventType=new MouseEvent('bobo')
                break;
            case 'mouseup' :
                eventType=new MouseEvent('bobo')
                break;
            case 'focus' :
                eventType=new FocusEvent('bobo')
                break;
            case 'window_onload':
                eventType=new Event('bobo')
                break;   
            case 'load':
                eventType=new Event('bobo')
                break   
            case 'onload':
                eventType=new Event('bobo')
                break   
            case 'focusout':
                eventType=new FocusEvent('bobo')
                break
            case 'input':
                eventType=new InputEvent('bobo')
                break
            case 'click':
                eventType=new PointerEvent('bobo')
                break          
            default:
                bodaEnv.toolsFunc.console_copy(`${eventName} dolistener 未实现 `)
        }

        bodaEnv.toolsFunc.console_copy(`当前正在执行的事件 ${event_['type']} -> ${event_} -> ${eventType} -> ${evnentData}`)
        if (eventName=='load' || eventName=='onload'){
            bodaEnv.memory.runningListern=false            
            eventType=bodaEnv.toolsFunc.proxy2(eventType,`proxy2::${eventName}`)
            let eventType_=eventType
            window.event=eventType_
            bodaEnv.toolsFunc.defineProperty_bo(event,'isTrusted',{
                set:undefined,
                enumerable:true,
                configurable:false,
                get:function isTrusted (){return bodaEnv.toolsFunc.dispatch(this,window, "window", "isTrusted_get", arguments)}
            })
            // debugger
            bodaEnv.toolsFunc.setObjWeakMapProtoAttr.call(eventType_,'type','load')
            let callback_=event_['callback']
            let self_=event_['self']
            if(!callback_){
                bodaEnv.memory.window['onload'].call(window,eventType_)
                bodaEnv.memory.window['onload']=undefined
                window.event=null
                return 
            }
            callback_.call(self_,eventType_) 
            window.event=null
            bodaEnv.memory.scriptExecDone=true //load 事件完成 readyState变为complete
            return 
        }   
        // debugger
        eventType=bodaEnv.toolsFunc.proxy2(eventType,`proxy2::${eventName}`)
        let eventType_=eventType
        window.event=eventType_
        bodaEnv.toolsFunc.defineProperty_bo(event,'isTrusted',{
            set:undefined,
            enumerable:true,
            configurable:false,
            get:function isTrusted (){return bodaEnv.toolsFunc.dispatch(this,window, "window", "isTrusted_get", arguments)}
        })
        let callback_=event_['callback']
        let self_=event_['self']
        
        for (let datanum=0;datanum<evnentData.length;datanum++){
                let data_=evnentData[datanum]
                // let tempThis=[self_,eventType_]
                // // debugger
                // for (let _this of tempThis){
                    bodaEnv.toolsFunc.setObjWeakMapProtoAttr.call(eventType_,'x',data_['x'])
                    bodaEnv.toolsFunc.setObjWeakMapProtoAttr.call(eventType_,'y',data_['y'])
                    bodaEnv.toolsFunc.setObjWeakMapProtoAttr.call(eventType_,'clientY',data_['clientY'])
                    bodaEnv.toolsFunc.setObjWeakMapProtoAttr.call(eventType_,'clientX',data_['clientX'])
                    bodaEnv.toolsFunc.setObjWeakMapProtoAttr.call(eventType_,'target',data_['target'])
                    bodaEnv.toolsFunc.setObjWeakMapProtoAttr.call(eventType_,'type',data_['type'])
                    bodaEnv.toolsFunc.setObjWeakMapProtoAttr.call(eventType_,'pageX',data_['pageX'])
                    bodaEnv.toolsFunc.setObjWeakMapProtoAttr.call(eventType_,'pageY',data_['pageY'])
                    bodaEnv.toolsFunc.setObjWeakMapProtoAttr.call(eventType_,'buttons',data_['buttons'])
                    bodaEnv.toolsFunc.setObjWeakMapProtoAttr.call(eventType_,'which',data_['which'])
                    bodaEnv.toolsFunc.setObjWeakMapProtoAttr.call(eventType_,'alpha',data_['alpha'])
                    bodaEnv.toolsFunc.setObjWeakMapProtoAttr.call(eventType_,'beta',data_['beta'])
                    bodaEnv.toolsFunc.setObjWeakMapProtoAttr.call(eventType_,'gamma',data_['gamma'])
                    bodaEnv.toolsFunc.setObjWeakMapProtoAttr.call(eventType_,'screenX',data_['screenX'])
                    bodaEnv.toolsFunc.setObjWeakMapProtoAttr.call(eventType_,'screenY',data_['screenY'])
                    bodaEnv.toolsFunc.setObjWeakMapProtoAttr.call(eventType_,'srcElement',data_['srcElement'])
                    bodaEnv.toolsFunc.setObjWeakMapProtoAttr.call(eventType_,'timeStamp',data_['timeStamp'])
                // }
                if (datanum ==(evnentData.length -1 ) ){
                    // debugger
                    bodaEnv.memory.listenerEnd=true

                }
                callback_.call(self_,eventType_)
        }
        window.event=null
        // bodaEnv.memory.asyncEvent['listener'][eventName].splice(bodaEnv.memory.asyncEvent['listener'][eventName].indexOf(event_),1)
        bodaEnv.toolsFunc.execSetTimeOutDelay10()
        // bodaEnv.memory.runningListern=false
        // if (bodaEnv.memory.asyncEvent['listener2'] && bodaEnv.memory.asyncEvent['listener2'].length){
        //     let templistener2=bodaEnv.memory.asyncEvent['listener2']
        //     bodaEnv.memory.asyncEvent['listener2'] =[]
        //     bodaEnv.memory.doLoopListener(templistener2)  //存在bug先不修复
        // } 
    }
    bodaEnv.toolsFunc.execSetTimeOutDelay10=function(){
        //运行设置时间为10以下的定时器
        if (bodaEnv.memory.SetTimeOutDelay10 && bodaEnv.memory.SetTimeOutDelay10.length){
            // debugger
            for (const srcSetTimeout of bodaEnv.memory.SetTimeOutDelay10) {
                // debugger
                bodaEnv.toolsFunc.console_copy(`正在执行delay小于10的定时器-->`,srcSetTimeout['callback'])
                if (typeof srcSetTimeout.callback =='function') {
                    srcSetTimeout.callback.apply(srcSetTimeout['self'],srcSetTimeout.args)
                } 
                else {
                    bodaEnv.toolsFunc.console_copy(`${srcSetTimeout['self']} -> execSetTimeOutDelay10.callback 类型为 ->${typeof callback } 不执行`,)
                }

                }
             bodaEnv.toolsFunc.console_copy(`delay小于10的定时器执行完成-->`)
            
        }
        bodaEnv.memory.SetTimeOutDelay10=[]

    }
 
    bodaEnv.toolsFunc.setProto = function setpro(dom,self) {
        //设置原型链
        let tagpro = dom.toUpperCase()
        // debugger
        switch (tagpro) {
            case 'TEXTAREA':
                return new bodaEnv.memory.globlProtoObj["HTMLTextAreaElement"]('bobo')
            case 'NAV':
                return new bodaEnv.memory.globlProtoObj["HTMLElement"]('bobo')
            case 'TABLE':
                return new bodaEnv.memory.globlProtoObj["HTMLTableElement"]('bobo')
            case 'PUNISH-COMPONENT':
                return new bodaEnv.memory.globlProtoObj["HTMLUnknownElement"]('bobo')
            case "MODERNIZR":
                return new bodaEnv.memory.globlProtoObj["HTMLUnknownElement"]('bobo')
            case "APM_DO_NOT_TOUCH":
                return new bodaEnv.memory.globlProtoObj["HTMLUnknownElement"]('bobo')
            case "FAKE":
                return new bodaEnv.memory.globlProtoObj["HTMLUnknownElement"]('bobo')
            case "SVG":
                return new bodaEnv.memory.globlProtoObj["HTMLUnknownElement"]('bobo')
            case "TD":
                return new bodaEnv.memory.globlProtoObj["HTMLTableCellElement"]('bobo')
            case 'TEXT':
                return new bodaEnv.memory.globlProtoObj["Text"]('bobo')
            case "B":
                return new bodaEnv.memory.globlProtoObj["HTMLElement"]('bobo')
            case "AUDIO":
                return new bodaEnv.memory.globlProtoObj["HTMLAudioElement"]('bobo')
            case "#COMMENT":
                return new bodaEnv.memory.globlProtoObj["Comment"]('bobo')
            case "#TEXT":
                return new bodaEnv.memory.globlProtoObj["Text"]("bobo")
            case "DIV":
                // debugger
                return new bodaEnv.memory.globlProtoObj["HTMLDivElement"]('bobo')
            case "SCRIPT":
                return new bodaEnv.memory.globlProtoObj["HTMLScriptElement"]('bobo')
            case "TITLE":
                return new bodaEnv.memory.globlProtoObj["HTMLTitleElement"]('bobo')
            case "HEAD":
                return new bodaEnv.memory.globlProtoObj["HTMLHeadElement"]('bobo')
            case 'META':
                return new bodaEnv.memory.globlProtoObj["HTMLMetaElement"]('bobo')
            case 'LINK':
                return new bodaEnv.memory.globlProtoObj["HTMLLinkElement"]('bobo')
            case "A":
                return new bodaEnv.memory.globlProtoObj["HTMLAnchorElement"]('bobo')
            case "SPAN":
                return new bodaEnv.memory.globlProtoObj["HTMLSpanElement"]('bobo')
            case "P":
                return new bodaEnv.memory.globlProtoObj["HTMLParagraphElement"]('bobo')
            case "LI":
                return new bodaEnv.memory.globlProtoObj["HTMLLIElement"]('bobo')
            case "UL":
                return new bodaEnv.memory.globlProtoObj["HTMLUListElement"]('bobo')
            case 'IFRAME':

            
                return new bodaEnv.memory.globlProtoObj["HTMLIFrameElement"]('bobo')
            case 'IMG':
                return new bodaEnv.memory.globlProtoObj["HTMLImageElement"]('bobo')
            case "H1":
                return new bodaEnv.memory.globlProtoObj["HTMLHeadingElement"]('bobo')
            case "H4":
                return new bodaEnv.memory.globlProtoObj["HTMLHeadingElement"]('bobo')
            case "H2":
                return new bodaEnv.memory.globlProtoObj["HTMLHeadingElement"]('bobo')
            case "NOSCRIPT":
                return new bodaEnv.memory.globlProtoObj["HTMLElement"]('bobo')
            case 'INPUT':
                return new bodaEnv.memory.globlProtoObj["HTMLInputElement"]('bobo')
            case 'FORM':
                return new bodaEnv.memory.globlProtoObj["HTMLFormElement"]('bobo')
            case 'STYLE':
                return new bodaEnv.memory.globlProtoObj["HTMLStyleElement"]('bobo')
            case 'VIDEO':
                return new bodaEnv.memory.globlProtoObj["HTMLVideoElement"]('bobo')
            case 'BODY':
                return new bodaEnv.memory.globlProtoObj["HTMLBodyElement"]('bobo')
            case 'HTML':
                return new bodaEnv.memory.globlProtoObj["HTMLHtmlElement"]('bobo')
            case "CANVAS":
                return new bodaEnv.memory.globlProtoObj["HTMLCanvasElement"]('bobo')
            case "SECTION":
                return new bodaEnv.memory.globlProtoObj["HTMLElement"]('bobo')
            case "I":
                return new bodaEnv.memory.globlProtoObj["HTMLElement"]('bobo')
            case "FONT":
                return new bodaEnv.memory.globlProtoObj["HTMLFontElement"]('bobo')
            case "EM":
                return new bodaEnv.memory.globlProtoObj["HTMLElement"]('bobo')
            case "H6":
                return new bodaEnv.memory.globlProtoObj["HTMLHeadingElement"]('bobo')
            case "OPTION":
                return new bodaEnv.memory.globlProtoObj["HTMLOptionElement"]('bobo')
            case "SELECT":
                return new bodaEnv.memory.globlProtoObj["HTMLSelectElement"]('bobo')
            case "BR":
                return new bodaEnv.memory.globlProtoObj["HTMLBRElement"]('bobo')
            case "CLOB":
                return new bodaEnv.memory.globlProtoObj["HTMLUnknownElement"]('bobo')
            case "MARQUEE":
                return new bodaEnv.memory.globlProtoObj["HTMLMarqueeElement"]('bobo')
            case "STRONG":
                return new bodaEnv.memory.globlProtoObj["HTMLElement"]('bobo')
            case "BUTTON":
                return new bodaEnv.memory.globlProtoObj["HTMLButtonElement"]('bobo')
            case 'LEGEND':
                return new bodaEnv.memory.globlProtoObj["HTMLLegendElement"]('bobo')
            case 'OPTGROUP':
                return new bodaEnv.memory.globlProtoObj["HTMLOptGroupElement"]('bobo')
            case "FIELDSET":
                return new bodaEnv.memory.globlProtoObj["HTMLFieldSetElement"]('bobo')
            case 'SUP':
                return new bodaEnv.memory.globlProtoObj["HTMLElement"]('bobo')
            case "H3":
                return new bodaEnv.memory.globlProtoObj["HTMLHeadingElement"]('bobo')
            case "ADDRESS":
                return new bodaEnv.memory.globlProtoObj["HTMLElement"]('bobo')
            case "LABEL":
                return new bodaEnv.memory.globlProtoObj["HTMLLabelElement"]('bobo')
            default:
                debugger
                bodaEnv.toolsFunc.console_copy(`setProto属性${tagpro}未实现`)
                break;
        }
    }
    bodaEnv.toolsFunc.filterProxyProp = function filterProxyProp(prop) {
        for (let i = 0; i < bodaEnv.memory.filterProxyProp.length; i++) {
            if (bodaEnv.memory.filterProxyProp[i] === prop) {
                return true;
            }
        }
        return false
    }
    bodaEnv.toolsFunc.proxyHTMLCollection=function(obj,objName){
            //这个方法的proxy为必要,不能关闭
            let handler = {
                get(target, prop, receiver) {
                    // let 
                    let result;
                    let targetNode=bodaEnv.toolsFunc.getObjWeakMapProtoAttr.call(target)
                    let targetWeakMapAttr=targetNode['HTMLCollection']
                    if (typeof targetWeakMapAttr=='function'){
                        targetWeakMapAttr=targetWeakMapAttr().cache
                    }
                    // debugger
                    for (let ind=0; ind <targetWeakMapAttr.length;ind++){
                        // debugger
                        if (!target[ind]){
                            bodaEnv.toolsFunc.defineProperty_bo(target,ind,{
                                writable:false,
                                configurable:true,
                                enumerable:true,
                                value:bodaEnv.memory.WeakMap.get(targetWeakMapAttr[ind])
                            })
                        }
                        if (targetWeakMapAttr[ind].id && !(target[targetWeakMapAttr[ind].id])){
                            bodaEnv.toolsFunc.defineProperty_bo(target,targetWeakMapAttr[ind].id,{
                                writable:false,
                                configurable:true,
                                enumerable:false,
                                value:bodaEnv.memory.WeakMap.get(targetWeakMapAttr[ind])
                            })
           
                        }
                    }

                    if (prop =='length'){
                        result=targetWeakMapAttr?targetWeakMapAttr.length:'result 存在问题!!!!!!'
                        bodaEnv.toolsFunc.console_copy('      [' + objName + ']', '   获取属性:   ', prop, '   value:   ', result,);
                        return result
                    }
                    if ( (typeof prop != 'symbol') && (Number(prop)>=0)){
                        // debugger
                        result=bodaEnv.memory.WeakMap.get(targetWeakMapAttr[prop])
                        bodaEnv.toolsFunc.console_copy('      [' + objName + ']', '   获取属性:   ', prop, '   value:   ', result,);
                        return result
                    }
                    // if ((typeof prop =='string') && (!bodaEnv.toolsFunc.filterProxyProp(prop))){
                    //     for(let _ele of targetWeakMapAttr){
                    //         if (prop == _ele.id){
                    //             result=bodaEnv.memory.WeakMap.get(_ele)
                    //             bodaEnv.toolsFunc.console_copy('      [' + objName + ']', '   获取属性:   ', prop, '   value:   ', result,);
                    //             return result
                    //         }
    
                    //     }
                    // }
                    
                    result = Reflect.get(target, prop, receiver)
                                        
                    if (bodaEnv.toolsFunc.filterProxyProp(prop)) {
                        return result;
                    }
                    bodaEnv.toolsFunc.console_copy('      [' + objName + ']', '   获取属性:   ', prop, '   value:   ', result,);
                    return result;
                },
                set(target, propKey, value, receiver) {
                        bodaEnv.toolsFunc.console_copy('      [' + objName + ']', "   设置属性:   ", propKey, "   value:   ", value);
                        let res = Reflect.set(target, propKey, value, receiver);
                        return res
                },
                // has(target, prop) {
                //     bodaEnv.toolsFunc.console_copy('['+objName+']',`->  has -> 正在判断对象是否具有属性${prop}`);
                //     return Reflect.has(target, prop);
                //   },
                deleteProperty(target, prop) {
                    // debugger
                    if (Number(prop)>=0){
                        bodaEnv.toolsFunc.console_copy('      [' + objName + ']', `-> deleteProperty -> 正在删除属性${prop} 结果为-> [false]`);
                        return false
                    }
                    let result=null
                    // let isbo=''
                    // if (prop.startsWith('bo')){
                    //     isbo=prop.slice(2)
                    // }
                    // if (isbo){
                    //      result=Reflect.deleteProperty(target, isbo);
    
                    // }else{
                         result=Reflect.deleteProperty(target, prop);
                         bodaEnv.toolsFunc.console_copy('     [' + objName + ']', `-> deleteProperty -> 正在删除属性${prop} 结果为 ->`,[result]);
    
                    // }
            
    
                    return result
                },
                ownKeys(target) {
                    bodaEnv.toolsFunc.console_copy('[' + objName + ']', ' ->ownKeys 或者getOwnPropertyDescriptors -> 正在获取对象的所有属性 可能存在检测,需要处理一下!!!!->', target);
                    return Reflect.ownKeys(target);
                },
                
                  getOwnPropertyDescriptor(target, prop) {
                    bodaEnv.toolsFunc.console_copy('['+objName+']',`正在获取属性${prop}的描述符`);
                    return Reflect.getOwnPropertyDescriptor(target, prop);
                  },
                  defineProperty(target, prop, descriptor) {
                    // debugger
                    if (Number(prop)>=0){
                        return bodaEnv.toolsFunc.throwError('TypeError',`Failed to set an indexed property on 'HTMLCollection': Index property setter is not supported.`)
                    }
                    let isbo=''
                    if (prop.startsWith('bo')){
                        isbo=prop.slice(2)
                    }
                    if (isbo){
                        result=Reflect.defineProperty(target, isbo,descriptor);
    
                   }else{
                        result=Reflect.defineProperty(target, prop,descriptor);
                        bodaEnv.toolsFunc.console_copy('      ['+objName+']',`-> defineProperty -> 正在定义属性${prop} -> res->`,result);
    
                   }
                    return result
                  },
                // preventExtensions(target) {
                //     bodaEnv.toolsFunc.console_copy('[' + objName + ']', '-> preventExtensions -> 正在禁止对象扩展');
                //     return Reflect.preventExtensions(target);
                // },
                //   getPrototypeOf(target) {
                //     // debugger
                //     bodaEnv.toolsFunc.console_copy('['+objName+']','正在获取对象的原型');
                //     return Reflect.getPrototypeOf(target);
                //   },
                // setPrototypeOf(target, proto) {
                //     bodaEnv.toolsFunc.console_copy('[' + objName + ']', '正在设置对象的原型');
                //     return Reflect.setPrototypeOf(target, proto);
                // },
                // apply(target, thisArg, argArray) {
                //     // debugger
                //     bodaEnv.toolsFunc.console_copy('      [' + objName + ']', '正在调用函数apply ->',`this 为 ->`,bodaEnv.toolsFunc.stringify_bo(thisArg),` -> arg 为 ->`,bodaEnv.toolsFunc.stringify_bo(argArray));
                //     return Reflect.apply(target, thisArg, argArray);
                // },
                // construct(target, argArray, newTarget) {
                //     bodaEnv.toolsFunc.console_copy('      [' + objName + ']', '正在创建对象实例construct -> argArray ->',bodaEnv.toolsFunc.stringify_bo(argArray),` -> newTarget ->`,newTarget);
                //     let resConstruct=Reflect.construct(target, argArray, newTarget);
                //     resConstruct=bodaEnv.toolsFunc.proxyHelper(resConstruct,'proxyHelper::'+resConstruct)
                //     return resConstruct
                //     // return {}
                // }
            };
            // debugger
            let proxyObj = new Proxy(obj, handler);

            return proxyObj;
        
    }
    bodaEnv.toolsFunc.proxyPerformance=function (obj, objName) {
        //这个方法的proxy为必要,不能关闭
        let handler = {
            get(target, prop, receiver) {
                // let 
                // if (prop=='getContext'){debugger}
                let result = Reflect.get(target, prop, receiver)
                // if(prop =='top:1px')debugger
                if (bodaEnv.toolsFunc.filterProxyProp(prop)) {
                    return result;
                }
                if (prop =='type'){
                    let _type =bodaEnv.toolsFunc.getObjWeakMapProtoAttr.call(receiver)['type']
                    
                    switch (_type){
                        case 'navigation':
                            result='navigate'
                            break
                        default:
                            bodaEnv.toolsFunc.console_copy('      [' + objName + ']', '   获取属性:   ', prop, '   value:   未实现!!!!',);
                    }
                }
                if (prop =='activationStart'){
                    result=0
                }
                // debugger

                bodaEnv.toolsFunc.console_copy('      [' + objName + ']', '   获取属性:   ', prop, '   value:   ', result,);
                return result;
            },
            set(target, propKey, value, receiver) {
                
                bodaEnv.toolsFunc.console_copy('      [' + objName + ']', "   设置属性:   ", propKey, "   value:   ", value);
                let res = Reflect.set(target, propKey, value, receiver);
                return res
            },
            // has(target, prop) {
            //     bodaEnv.toolsFunc.console_copy('['+objName+']',`->  has -> 正在判断对象是否具有属性${prop}`);
            //     return Reflect.has(target, prop);
            //   },
            // deleteProperty(target, prop) {
            //     // debugger
            //     if (Number(prop)>=0){
            //         bodaEnv.toolsFunc.console_copy('      [' + objName + ']', `-> deleteProperty -> 正在删除属性${prop} 结果为-> [false]`);
            //         return false
            //     }
            //     let result=null
            //     let isbo=''
            //     if (prop.startsWith('bo')){
            //         isbo=prop.slice(2)
            //     }
            //     if (isbo){
            //          result=Reflect.deleteProperty(target, isbo);

            //     }else{
            //          result=Reflect.deleteProperty(target, prop);
            //          bodaEnv.toolsFunc.console_copy('     [' + objName + ']', `-> deleteProperty -> 正在删除属性${prop} 结果为 ->`,[result]);

            //     }
        

            //     return result
            // },
            // ownKeys(target) {
            //     // if (target._boContentWindow){
            //     //     let resKeys=Reflect.ownKeys(target)
            //     //     // debugger    
            //     //     bodaEnv.toolsFunc.console_copy('['+objName+']',' ->ownKeys -> contentWindow_keys 正在获取对象的所有属性 ->',target,`-> res ->`,resKeys );
            //     //     return resKeys
            //     // }
            //     bodaEnv.toolsFunc.console_copy('[' + objName + ']', ' ->ownKeys -> 正在获取对象的所有属性 ->', target);
            //     return Reflect.ownKeys(target);
            // },
            //   getOwnPropertyDescriptor(target, prop) {
            //     // debugger
            //     bodaEnv.toolsFunc.console_copy('['+objName+']',`正在获取属性${prop}的描述符`);
            //     return Reflect.getOwnPropertyDescriptor(target, prop);
            // //   },
            //   defineProperty(target, prop, descriptor) {
            //     // debugger
            //     if (Number(prop)>=0){
            //         return bodaEnv.toolsFunc.throwError('TypeError',`Failed to set an indexed property on 'HTMLCollection': Index property setter is not supported.`)
            //     }
            //     let isbo=''
            //     if (prop.startsWith('bo')){
            //         isbo=prop.slice(2)
            //     }
            //     if (isbo){
            //         result=Reflect.defineProperty(target, isbo,descriptor);

            //    }else{
            //         result=Reflect.defineProperty(target, prop,descriptor);
            //         bodaEnv.toolsFunc.console_copy('      ['+objName+']',`-> defineProperty -> 正在定义属性${prop} -> res->`,result);

            //    }
            //     return result
            //   },
            // preventExtensions(target) {
            //     bodaEnv.toolsFunc.console_copy('[' + objName + ']', '-> preventExtensions -> 正在禁止对象扩展');
            //     return Reflect.preventExtensions(target);
            // },
            //   getPrototypeOf(target) {
            //     debugger
            //     bodaEnv.toolsFunc.console_copy('['+objName+']','正在获取对象的原型');
            //     return Reflect.getPrototypeOf(target);
            //   },
            // setPrototypeOf(target, proto) {
            //     bodaEnv.toolsFunc.console_copy('[' + objName + ']', '正在设置对象的原型');
            //     return Reflect.setPrototypeOf(target, proto);
            // },
            apply(target, thisArg, argArray) {
                // debugger
                bodaEnv.toolsFunc.console_copy('      [' + objName + ']', '正在调用函数apply ->',`this 为 ->`,bodaEnv.toolsFunc.stringify_bo(thisArg),` -> arg 为 ->`,bodaEnv.toolsFunc.stringify_bo(argArray));
                return Reflect.apply(target, thisArg, argArray);
            },
            construct(target, argArray, newTarget) {
                bodaEnv.toolsFunc.console_copy('      [' + objName + ']', '正在创建对象实例construct -> argArray ->',bodaEnv.toolsFunc.stringify_bo(argArray),` -> newTarget ->`,newTarget);
                // return new Promise222(argArray)
                // let result=new target(...argArray)
                // debugger
                // result.buffer=tempBuf
                // debugger
                let resConstruct=Reflect.construct(target, argArray, newTarget);
                resConstruct=bodaEnv.toolsFunc.proxyHelper(resConstruct,'proxyHelper::'+resConstruct)
                return resConstruct
                // return {}
            }
        };
        // debugger
        let proxyObj = new Proxy(obj, handler);
        // Object.defineProperty(obj, bodaEnv.memory.symbolProxy, {
        //     configurable:false,
        //     enumerable:false,
        //     writable:false,
        //     value:proxyObj
        // },'bobo');
        return proxyObj;
    }
    bodaEnv.toolsFunc.proxyHelper=function (obj, objName) {
        //这个方法的proxy为必要,不能关闭
        let handler = {
            get(target, prop, receiver) {
                // let 
                // if (prop=='getContext'){debugger}
                let result = Reflect.get(target, prop, receiver)
                // if(prop =='top:1px')debugger
                if (bodaEnv.toolsFunc.filterProxyProp(prop)) {
                    return result;
                }
                bodaEnv.toolsFunc.console_copy('      [' + objName + ']', '   获取属性:   ', prop, '   value:   ', result,);
                return result;
            },
            set(target, propKey, value, receiver) {
                // debugger
                // if(value =='top:1px')debugger

                // if (target instanceof CSSStyleDeclaration){
                    // let val=`${propKey}: ${value};`
                    // let newVal=''
                    // let thisNode=bodaEnv.memory.WeakMap.get(receiver)
                    // if (!receiver.hasOwnProperty(propKey,'boboflag')){
                    //     bodaEnv.toolsFunc.console_copy(`bodaEnv.toolsFunc.proxyHelper proxy2中代理的CSSStyleDeclaration添加的属性非自身属性!!!`)
                    // }else{
                    //     let _isliveStyle=thisNode.getAttribute('style')
                    //     if (_isliveStyle){
                    //         // debugger
                    //         let _styleobjProxy2={}
                    //         let _SpisliveStyle_list=_isliveStyle.split(';')
                    //         for (let _v of _SpisliveStyle_list){
                    //             if (!_v.length) continue
                    //             let _proxy2Vlist=_v.split(':')
                    //             _styleobjProxy2[_proxy2Vlist[0].trim()]=_proxy2Vlist[1].trim()
                    //         }
                    //         _styleobjProxy2[propKey]=value
                    //         if (_styleobjProxy2['font-family'] && _styleobjProxy2['fontFamily']){
                    //             _styleobjProxy2['font-family']=_styleobjProxy2['fontFamily']
                    //         }
                    //         for (let key in _styleobjProxy2){
                    //             newVal=newVal+`${key}: ${_styleobjProxy2[key]};`
                    //         }
                    //     }else{
                    //         newVal=val
                    //     }                        
                    //     thisNode.setAttribute('style',newVal)
                    // }
                    // debugger
                    // let newStyle=isliveStyle+val
                    // boda$(thisNode).attr('style',newStyle)
                // }
                bodaEnv.toolsFunc.console_copy('      [' + objName + ']', "   设置属性:   ", propKey, "   value:   ", value);
                let res = Reflect.set(target, propKey, value, receiver);
                return res
            },
            // has(target, prop) {
            //     bodaEnv.toolsFunc.console_copy('['+objName+']',`->  has -> 正在判断对象是否具有属性${prop}`);
            //     return Reflect.has(target, prop);
            //   },
            // deleteProperty(target, prop) {
            //     // debugger
            //     if (Number(prop)>=0){
            //         bodaEnv.toolsFunc.console_copy('      [' + objName + ']', `-> deleteProperty -> 正在删除属性${prop} 结果为-> [false]`);
            //         return false
            //     }
            //     let result=null
            //     let isbo=''
            //     if (prop.startsWith('bo')){
            //         isbo=prop.slice(2)
            //     }
            //     if (isbo){
            //          result=Reflect.deleteProperty(target, isbo);

            //     }else{
            //          result=Reflect.deleteProperty(target, prop);
            //          bodaEnv.toolsFunc.console_copy('     [' + objName + ']', `-> deleteProperty -> 正在删除属性${prop} 结果为 ->`,[result]);

            //     }
        

            //     return result
            // },
            // ownKeys(target) {
            //     // if (target._boContentWindow){
            //     //     let resKeys=Reflect.ownKeys(target)
            //     //     // debugger    
            //     //     bodaEnv.toolsFunc.console_copy('['+objName+']',' ->ownKeys -> contentWindow_keys 正在获取对象的所有属性 ->',target,`-> res ->`,resKeys );
            //     //     return resKeys
            //     // }
            //     bodaEnv.toolsFunc.console_copy('[' + objName + ']', ' ->ownKeys -> 正在获取对象的所有属性 ->', target);
            //     return Reflect.ownKeys(target);
            // },
            //   getOwnPropertyDescriptor(target, prop) {
            //     // debugger
            //     bodaEnv.toolsFunc.console_copy('['+objName+']',`正在获取属性${prop}的描述符`);
            //     return Reflect.getOwnPropertyDescriptor(target, prop);
            // //   },
            //   defineProperty(target, prop, descriptor) {
            //     // debugger
            //     if (Number(prop)>=0){
            //         return bodaEnv.toolsFunc.throwError('TypeError',`Failed to set an indexed property on 'HTMLCollection': Index property setter is not supported.`)
            //     }
            //     let isbo=''
            //     if (prop.startsWith('bo')){
            //         isbo=prop.slice(2)
            //     }
            //     if (isbo){
            //         result=Reflect.defineProperty(target, isbo,descriptor);

            //    }else{
            //         result=Reflect.defineProperty(target, prop,descriptor);
            //         bodaEnv.toolsFunc.console_copy('      ['+objName+']',`-> defineProperty -> 正在定义属性${prop} -> res->`,result);

            //    }
            //     return result
            //   },
            // preventExtensions(target) {
            //     bodaEnv.toolsFunc.console_copy('[' + objName + ']', '-> preventExtensions -> 正在禁止对象扩展');
            //     return Reflect.preventExtensions(target);
            // },
            //   getPrototypeOf(target) {
            //     debugger
            //     bodaEnv.toolsFunc.console_copy('['+objName+']','正在获取对象的原型');
            //     return Reflect.getPrototypeOf(target);
            //   },
            // setPrototypeOf(target, proto) {
            //     bodaEnv.toolsFunc.console_copy('[' + objName + ']', '正在设置对象的原型');
            //     return Reflect.setPrototypeOf(target, proto);
            // },
            apply(target, thisArg, argArray) {
                // debugger
                bodaEnv.toolsFunc.console_copy('      [' + objName + ']', '正在调用函数apply ->',`this 为 ->`,bodaEnv.toolsFunc.stringify_bo(thisArg),` -> arg 为 ->`,bodaEnv.toolsFunc.stringify_bo(argArray));
                return Reflect.apply(target, thisArg, argArray);
            },
            construct(target, argArray, newTarget) {
                bodaEnv.toolsFunc.console_copy('      [' + objName + ']', '正在创建对象实例construct -> argArray ->',bodaEnv.toolsFunc.stringify_bo(argArray),` -> newTarget ->`,newTarget);
                // return new Promise222(argArray)
                // let result=new target(...argArray)
                // debugger
                // result.buffer=tempBuf
                // debugger
                let resConstruct=Reflect.construct(target, argArray, newTarget);
                resConstruct=bodaEnv.toolsFunc.proxyHelper(resConstruct,'proxyHelper::'+resConstruct)
                return resConstruct
                // return {}
            }
        };
        // debugger
        let proxyObj = new Proxy(obj, handler);
        // Object.defineProperty(obj, bodaEnv.memory.symbolProxy, {
        //     configurable:false,
        //     enumerable:false,
        //     writable:false,
        //     value:proxyObj
        // },'bobo');
        return proxyObj;
    }
    bodaEnv.toolsFunc.proxyPlugin=function (obj, objName) {
        //这个方法的proxy为必要,不能关闭
        let handler = {
            get(target, prop, receiver) {
                // let 

                // if (prop=='getContext'){debugger}
                let result = Reflect.get(target, prop, receiver)
                if (bodaEnv.toolsFunc.filterProxyProp(prop)) {
                    return result;
                }
                // bodaEnv.toolsFunc.setObjWeakMapProtoAttr.call(result,prop,target)
                // debugger
                if (typeof result =='object'){
                    bodaEnv.memory.WeakMap.set(result,receiver)

                }
                // if (result instanceof Object) {
                //     // bodaEnv.bodaTools.symbolProperty(result)

                //     return bodaEnv.toolsFunc.proxyPlugin(result, `${objName}.${prop.toString()}`)
                // }
                bodaEnv.toolsFunc.console_copy('      [' + objName + ']', '   获取属性:   ', prop, '   value:   ', result,);
                return result;
            },
            set(target, propKey, value, receiver) {
                bodaEnv.toolsFunc.console_copy('      [' + objName + ']', "   设置属性:   ", propKey, "   value:   ", value);
                let res = Reflect.set(target, propKey, value, receiver);
                return res
            },
            apply(target, thisArg, argArray) {
                // debugger
                bodaEnv.toolsFunc.console_copy('      [' + objName + ']', '正在调用函数apply ->',`this 为 ->`,bodaEnv.toolsFunc.stringify_bo(thisArg),` -> arg 为 ->`,bodaEnv.toolsFunc.stringify_bo(argArray));
                return Reflect.apply(target, thisArg, argArray);
            },
            construct(target, argArray, newTarget) {
                bodaEnv.toolsFunc.console_copy('      [' + objName + ']', '正在创建对象实例construct -> argArray ->',bodaEnv.toolsFunc.stringify_bo(argArray),` -> newTarget ->`,newTarget);
                // return new Promise222(argArray)
                // let result=new target(...argArray)
                // debugger
                // result.buffer=tempBuf
                // debugger     
                return Reflect.construct(target, argArray, newTarget);
                // return {}
            }
        };
        // debugger
        let proxyObj = new Proxy(obj, handler);
        // Object.defineProperty(obj, bodaEnv.memory.symbolProxy, {
        //     configurable:false,
        //     enumerable:false,
        //     writable:false,
        //     value:proxyObj
        // },'bobo');
        return proxyObj;
    }
    bodaEnv.toolsFunc.proxy2 = function (obj, objName) {
        if (bodaEnv.config.proxy==false){return obj}
        let handler = {
            get(target, prop, receiver) {
                // let 

                let result = Reflect.get(target, prop, receiver)
                // if (prop=='prepareStackTrace'  ){
                //     return undefined
                // }
                if (bodaEnv.toolsFunc.filterProxyProp(prop)) {
                    return result;
                }
                bodaEnv.toolsFunc.console_copy('      [' + objName + ']', '   获取属性:   ', prop, '   value:   ', result,);

                return result;
            },
            set(target, propKey, value, receiver) {
                // debugger
                bodaEnv.toolsFunc.console_copy('      [' + objName + ']', "   设置属性:   ", propKey, "   value:   ", value);

                let res = Reflect.set(target, propKey, value, receiver);
                return res
            },
            // has(target, prop) {
            //     bodaEnv.toolsFunc.console_copy('['+objName+']',`->  has -> 正在判断对象是否具有属性${prop}`);
            //     return Reflect.has(target, prop);
            //   },
            deleteProperty(target, prop) {
                bodaEnv.toolsFunc.console_copy('      [' + objName + ']', `-> deleteProperty -> 正在删除属性${prop}`);
                return Reflect.deleteProperty(target, prop);
            },
            // ownKeys(target) {
            //     // if (target._boContentWindow){
            //     //     let resKeys=Reflect.ownKeys(target)
            //     //     // debugger    
            //     //     bodaEnv.toolsFunc.console_copy('['+objName+']',' ->ownKeys -> contentWindow_keys 正在获取对象的所有属性 ->',target,`-> res ->`,resKeys );
            //     //     return resKeys
            //     // }
            //     bodaEnv.toolsFunc.console_copy('[' + objName + ']', ' ->ownKeys -> 正在获取对象的所有属性 ->', target);
            //     return Reflect.ownKeys(target);
            // },
            //   getOwnPropertyDescriptor(target, prop) {
            //     bodaEnv.toolsFunc.console_copy('['+objName+']',`正在获取属性${prop}的描述符`);
            //     return Reflect.getOwnPropertyDescriptor(target, prop);
            //   },
            //   defineProperty(target, prop, descriptor) {
            //     bodaEnv.toolsFunc.console_copy('['+objName+']',`-> defineProperty -> 正在定义属性${prop}`);
            //     return Reflect.defineProperty(target, prop, descriptor);
            //   },
            // preventExtensions(target) {
            //     bodaEnv.toolsFunc.console_copy('[' + objName + ']', '-> preventExtensions -> 正在禁止对象扩展');
            //     return Reflect.preventExtensions(target);
            // },
            //   getPrototypeOf(target) {
            //     debugger
            //     bodaEnv.toolsFunc.console_copy('['+objName+']','正在获取对象的原型');
            //     return Reflect.getPrototypeOf(target);
            //   },
            // setPrototypeOf(target, proto) {
            //     bodaEnv.toolsFunc.console_copy('[' + objName + ']', '正在设置对象的原型');
            //     return Reflect.setPrototypeOf(target, proto);
            // },
            apply(target, thisArg, argArray) {
                bodaEnv.toolsFunc.console_copy('      [' + objName + ']', '正在调用函数');
                return Reflect.apply(target, thisArg, argArray);
            },
            construct(target, argArray, newTarget) {
                bodaEnv.toolsFunc.console_copy('      [' + objName + ']', '正在创建对象实例,',[argArray]);
                // return new Promise222(argArray)
                return Reflect.construct(target, argArray, newTarget);
                // return {}
            }
        };
        // debugger
        let proxyObj = new Proxy(obj, handler);
        // Object.defineProperty(obj, bodaEnv.memory.symbolProxy, {
        //     configurable:false,
        //     enumerable:false,
        //     writable:false,
        //     value:proxyObj
        // },'bobo');
        return proxyObj;
    }

    bodaEnv.toolsFunc.proxyWindow = function (obj, objName) {
       
        //实现iframe  不能关闭!!! 不然iframe检测会导致过不去
        //iframe 只实现一部分 太多了,懒得写
        let handler = {
            get(target, prop, receiver) {
                // let _this=
                // debugger
                let result=bodaEnv.toolsFunc.dispatch(receiver, window, "window", prop+`_get`, arguments)
                // let result = Reflect.get(target, prop, receiver)
                // if (prop == 'Object'){return result}

                // if (bodaEnv.toolsFunc.filterProxyProp(prop)){
                //     return result
                // }
                bodaEnv.toolsFunc.console_copy('      [' + objName + ']', '   获取属性:   ', prop, '   value:   ', result,);

                return result;
            },
            set(target, propKey, value, receiver) {
                bodaEnv.toolsFunc.console_copy('      [' + objName + ']', "   设置属性:   ", propKey, "   value:   ", value);

                let res = Reflect.set(target, propKey, value, receiver);
                // bodaEnv.bodaTools.symbolProperty(res)
                return res
            },
            deleteProperty(target, prop) {
                bodaEnv.toolsFunc.console_copy('      [' + objName + ']', `-> deleteProperty -> 正在删除属性${prop}`);
                return Reflect.deleteProperty(target,prop)
            },
        };
        // debugger
        let proxyObj = new Proxy(obj, handler);
        // Object.defineProperty(obj, bodaEnv.memory.symbolProxy, {
        //     configurable:false,
        //     enumerable:false,
        //     writable:false,
        //     value:proxyObj
        // },'bobo');
        return proxyObj;
    }
    bodaEnv.toolsFunc.proxyDocument = function (obj, objName) {
       
        //实现iframe 下的document代理 不能关闭!!! 不然iframe检测会导致过不去
        //iframe 只实现一部分 太多了,懒得写
        let handler = {
            get(target, prop, receiver) {
                // let _this=
                // debugger
                // let result=bodaEnv.toolsFunc.dispatch(receiver, document, "Document", prop, arguments)
                let result = Reflect.get(target, prop, receiver)
                // if (prop == 'Object'){return result}

                // if (bodaEnv.toolsFunc.filterProxyProp(prop)){
                //     return result
                // }
                bodaEnv.toolsFunc.console_copy('      [' + objName + ']', '   获取属性:   ', prop, '   value:   ', result,);

                return result;
            },
            set(target, propKey, value, receiver) {
                bodaEnv.toolsFunc.console_copy('      [' + objName + ']', "   设置属性:   ", propKey, "   value:   ", value);

                let res = Reflect.set(target, propKey, value, receiver);
                // bodaEnv.bodaTools.symbolProperty(res)
                return res
            },
            deleteProperty(target, prop) {
                bodaEnv.toolsFunc.console_copy('      [' + objName + ']', `-> deleteProperty -> 正在删除属性${prop}`);
                return Reflect.deleteProperty(target,prop)
            },
            apply(target, thisArg, argArray) {
                bodaEnv.toolsFunc.console_copy('      [' + objName + ']', '正在调用函数');
                return Reflect.apply(target, thisArg, argArray);
            },
        };
        // debugger
        let proxyObj = new Proxy(obj, handler);
        // Object.defineProperty(obj, bodaEnv.memory.symbolProxy, {
        //     configurable:false,
        //     enumerable:false,
        //     writable:false,
        //     value:proxyObj
        // },'bobo');
        return proxyObj;
    }

    //获取原型对象上自身属性值
    bodaEnv.toolsFunc.getObjWeakMapProtoAttr = function getObjWeakMapProtoAttr(key) {
        let attrData = bodaEnv.memory.ObjWeakMapProtoAttr.get(this);
        if (attrData) {
            if (!key){return attrData}
            return attrData[key];
        }
    }
    
    bodaEnv.toolsFunc.setObjWeakMapProtoAttr = function setObjWeakMapProtoAttr(key, value) {
        // 如果当前对象不在weakmap中，则添加它。
        if (!bodaEnv.memory.ObjWeakMapProtoAttr.has(this)) {
            bodaEnv.memory.ObjWeakMapProtoAttr.set(this, {});
            // bodaEnv.memory.allAttrObj.push(this)
        }
        
        let attrData = bodaEnv.memory.ObjWeakMapProtoAttr.get(this);
        attrData[key] = value;
    }


    // return bodaEnv.toolsFunc.dispatch(this,Document.prototype,"Document","implementation_get",arguments,)
    //env函数分发器
    bodaEnv.toolsFunc.dispatch = function dispatch(self, obj, objName, funcName, argList, defaultValue) {
        //obj Document.prototype
        //obj loction

        //bodaEnv.toolsFunc.dispatch(this,Document.prototype,"Document","write",arguments)}});
        let name = `${objName}_${funcName}`
        //实现r={} ,r.__proto__=Document.prototype ,r.location 报错
        // debugger
        //实现Document.prototype.activeElement()调用报错
        if (Object.getOwnPropertyDescriptor(obj, "constructor") !== undefined) {
            // if (Object.getOwnPropertyDescriptor(self, "constructor") !== undefined) {
            //     return bodaEnv.toolsFunc.throwError("TypeError", "Illegal invocation")
            // }
            if (!(self instanceof obj.constructor)){
                debugger
                bodaEnv.toolsFunc.console_copy('TypeError',`  bodaEnv.toolsFunc.dispatch 执行出错`);
                return bodaEnv.toolsFunc.throwError("TypeError", "Illegal invocation")
            }
        }
        try {

        // if (bodaEnv.config.issymbolProperty){
            // debugger
            // if(bodaEnv.toolsFunc.getObjWeakMapProtoAttr.call(self,'issymbolProperty') ==undefined){
            //     debugger
            //     bodaEnv.toolsFunc.console_copy(self,`  bodaEnv.toolsFunc.dispatch1 执行出错`,funcName);
            //     return bodaEnv.toolsFunc.throwError("TypeError", "Illegal invocation")

            // }
            // debugger
            // if (bodaEnv.memory.initDone){
            //     // debugger
            //     //实现r={} ;r.__proto__=document ,r.location 报错
            //     //未实现var fff={} ;;fff.__proto__=Document.prototype  ;fff.anchors
            //     if ((self.__proto__.constructor == self.__proto__.__proto__.constructor) 
            //     // || !bodaEnv.toolsFunc.getObjWeakMapProtoAttr.call(self,'issymbolProperty')
            //     ){
            //         // debugger
            //         bodaEnv.toolsFunc.console_copy(self,`  bodaEnv.toolsFunc.dispatch  非法调用  执行出错`,funcName);
            //         return bodaEnv.toolsFunc.throwError("TypeError", "Illegal invocation")
            //     }

            // }
   
        // }
        // debugger
        ////直接导出环境设置
        // if (bodaEnv.config.exportEnv){
            // if (!bodaEnv.config.exportEnvNameList){
            //     bodaEnv.config.exportEnvNameList=[]  //具体方法名称 document.createElement
            //     bodaEnv.config.exportEnvStr=''
            //     bodaEnv.config.exportEnvObjNameList=[]   //window  document等
            //  }
            // if (!bodaEnv.config.exportEnvObjNameList.includes(objName)){
            //     bodaEnv.config.exportEnvObjNameList.push(objName)
            //  }
            // if (!bodaEnv.config.exportEnvNameList.includes(name)){
               
            //     bodaEnv.config.exportEnvNameList.push(name)
            //     bodaEnv.config.exportEnvStr=bodaEnv.config.exportEnvStr+`bodaEnv.envFunc['${name}']=${bodaEnv.envFunc[name]+''}`+'\n\r'
            // }
            // bodaEnv.config.exportEnvList.push()
        // }
        //可以在这添加逻辑,直接导出所使用的环境!!!!!!!!!!!!!!

        // debugger
        return bodaEnv.envFunc[name].apply(self, argList)


        } catch (e) {
                // debugger
                let log__ = `'[${name}]正在执行,错误信息${e.message}'`
                bodaEnv.toolsFunc.console_copy(log__);
                // bodaEnv.toolsFunc.printcopy_log(log__)
            }
    }


    //定义对象属性 defineProperty
    bodaEnv.toolsFunc.defineProperty = function defineProperty(obj, prop, OldDescriptior) {
        // if (obj ==window){debugger}
        let newDescriptior = {};
        newDescriptior.configurable = bodaEnv.config.proxy || OldDescriptior.configurable;//如果开启代理必须是true
        newDescriptior.enumerable = OldDescriptior.enumerable;
        if (OldDescriptior.hasOwnProperty("writable", "boboflag")) {
            newDescriptior.writable = bodaEnv.config.proxy || OldDescriptior.writable;//如果开启代理必须是true
        }
        if (OldDescriptior.hasOwnProperty("value", "boboflag")) {
            let value = OldDescriptior.value;
            if (typeof value == "function") {
                bodaEnv.toolsFunc.safeFunc(value, prop)
            }
            newDescriptior.value = value;
        }
        if (OldDescriptior.hasOwnProperty("get", "boboflag")) {
            let get = OldDescriptior.get;
            if (typeof get == "function") {
                bodaEnv.toolsFunc.safeFunc(get, `get ${prop}`)
            }
            newDescriptior.get = get;
        }
        if (OldDescriptior.hasOwnProperty("set", "boboflag")) {
            let set = OldDescriptior.set;
            if (typeof set == "function") {
                bodaEnv.toolsFunc.safeFunc(set, `set ${prop}`)
            }
            newDescriptior.set = set;
        }
        // bodaEnv.memory.myData.set()
        // debugger
        Object.defineProperty(obj, prop, newDescriptior, 'bobo')
        // bodaEnv.toolsFunc.symbolProperty(obj.prop)

    };
    ;;

    !function(){
        // bodaEnv.memory.myToString222=Function.prototype.toString  //保存原来的toString
        const $toString = Function.prototype.toString;
        const $callTostring = Function.prototype.call.bind($toString);
        const memoryMap = new Map();
        // const memoryMap2 = new Map(); //存放原来的tostring
        const myToString = function toString(){
            
            return typeof this === 'function' && memoryMap.get(this) || $callTostring(this);
        }
        Object.defineProperty(Function.prototype, "toString", {enumerable: false, configurable: true, writable: true, value: myToString},'bobo');
        function set_native(obj, value){
            memoryMap.set(obj, value);

        }
        set_native(Function.prototype.toString, "function toString() { [native code] }");
        bodaEnv.toolsFunc.safefunction = function setNative(func, funcname,funcNameNull){
            // debugger
            Object.defineProperty(func,"name",{value: funcname || func.name || '', writable: false, enumerable: false, configurable: true},'bobo');
            // debugger
            //memoryInfo 需要这个实现 set get 方法名为空  funcNameNull
            if (!funcNameNull){
                set_native(func, `function ${funcname || func.name || ''}() { [native code] }`);
            }else{
                set_native(func, `function () { [native code] }`);

            }

        }
    }();
    // bodaEnv.toolsFunc.safefunction=function(){}


    bodaEnv.toolsFunc.getType=function(type){
        return Object.prototype.toString.call(type)
    }


    //对象重命名
    bodaEnv.toolsFunc.reNameObj = function reNameObj(obj, obname) {
        Object.defineProperty(obj.prototype, Symbol.toStringTag, {
            value: obname,
            configurable: true,
            writable: false,
            enumerable: false
        }, 'bobo')
    };
    //函数重命名 
    bodaEnv.toolsFunc.reNameFunc = function reNameFunc(func, name) {
        Object.defineProperty(func, "name", {
            value: name,
            configurable: true,
            writable: false,
            enumerable: false
        }, 'bobo')
    }
    //合并 保护方法
    bodaEnv.toolsFunc.safeFunc = function safeFunc(func, name) {
        bodaEnv.toolsFunc.safefunction(func, name)
        bodaEnv.toolsFunc.reNameFunc(func, name)
    }
    //合并 保护原型
    bodaEnv.toolsFunc.safeProto = function safeProto(obj, name) {
        bodaEnv.toolsFunc.safefunction(obj, name)
        bodaEnv.toolsFunc.reNameObj(obj, name)
        //防止 Window.prototype ={} 被修改
        Object.defineProperty(obj,'prototype',{
            value: obj.prototype,
            writable:false,
            enumerable:false,
            configurable:false
          })
          

    }


    //抛错
    bodaEnv.toolsFunc.throwError = function throwError(name, message) {
        let e = new Error();
        e.message = message;
        e.name = name;
        if (bodaEnv.memory.currentFile){
            
            e.stack = `${name}: ${message}at ${bodaEnv.memory.currentFile}:40:9`

        }else{
            e.stack = `${name}: ${message}\n    at <anonymous>:1:1`

        }
        bodaEnv.toolsFunc.console_copy('调用bodaEnv.toolsFunc.throwError主动报错::',e.stack)
        throw e
    }


    // base64编码解码
    bodaEnv.toolsFunc.base64 = {};
    bodaEnv.toolsFunc.base64.base64EncodeChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
    bodaEnv.toolsFunc.base64.base64DecodeChars = new Array(-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 62, -1, -1, -1, 63, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, -1, -1, -1, -1, -1, -1, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, -1, -1, -1, -1, -1, -1, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, -1, -1, -1, -1, -1);
    bodaEnv.toolsFunc.base64.base64encode = function base64encode(str) {
        var out, i, len;
        var c1, c2, c3;
        str=str.toString()
        len = str.length;
        i = 0;
        out = "";
        while (i < len) {
            c1 = str.charCodeAt(i++) & 0xff;
            if (i == len) {
                out += bodaEnv.toolsFunc.base64.base64EncodeChars.charAt(c1 >> 2);
                out += bodaEnv.toolsFunc.base64.base64EncodeChars.charAt((c1 & 0x3) << 4);
                out += "==";
                break;
            }
            c2 = str.charCodeAt(i++);
            if (i == len) {
                out += bodaEnv.toolsFunc.base64.base64EncodeChars.charAt(c1 >> 2);
                out += bodaEnv.toolsFunc.base64.base64EncodeChars.charAt(((c1 & 0x3) << 4) | ((c2 & 0xF0) >> 4));
                out += bodaEnv.toolsFunc.base64.base64EncodeChars.charAt((c2 & 0xF) << 2);
                out += "=";
                break;
            }
            c3 = str.charCodeAt(i++);
            out += bodaEnv.toolsFunc.base64.base64EncodeChars.charAt(c1 >> 2);
            out += bodaEnv.toolsFunc.base64.base64EncodeChars.charAt(((c1 & 0x3) << 4) | ((c2 & 0xF0) >> 4));
            out += bodaEnv.toolsFunc.base64.base64EncodeChars.charAt(((c2 & 0xF) << 2) | ((c3 & 0xC0) >> 6));
            out += bodaEnv.toolsFunc.base64.base64EncodeChars.charAt(c3 & 0x3F);
        };
        // debugger
        bodaEnv.toolsFunc.console_copy(`使用bs64编码:${str}`, 
        `\r\n编码后${out}`);
        return out;
    }
    bodaEnv.toolsFunc.base64.base64decode = function base64decode(str) {
        var c1, c2, c3, c4;
        var i, len, out;

        len = str.length;
        i = 0;
        out = "";
        while (i < len) {
            /* c1 */
            do {
                c1 = bodaEnv.toolsFunc.base64.base64DecodeChars[str.charCodeAt(i++) & 0xff];
            } while (i < len && c1 == -1);
            if (c1 == -1)
                break;

            /* c2 */
            do {
                c2 = bodaEnv.toolsFunc.base64.base64DecodeChars[str.charCodeAt(i++) & 0xff];
            } while (i < len && c2 == -1);
            if (c2 == -1)
                break;

            out += String.fromCharCode((c1 << 2) | ((c2 & 0x30) >> 4));

            /* c3 */
            do {
                c3 = str.charCodeAt(i++) & 0xff;
                if (c3 == 61)
                    return out;
                c3 = bodaEnv.toolsFunc.base64.base64DecodeChars[c3];
            } while (i < len && c3 == -1);
            if (c3 == -1)
                break;

            out += String.fromCharCode(((c2 & 0XF) << 4) | ((c3 & 0x3C) >> 2));

            /* c4 */
            do {
                c4 = str.charCodeAt(i++) & 0xff;
                if (c4 == 61)
                    return out;
                c4 = bodaEnv.toolsFunc.base64.base64DecodeChars[c4];
            } while (i < len && c4 == -1);
            if (c4 == -1)
                break;
            out += String.fromCharCode(((c3 & 0x03) << 6) | c4);
        }
        bodaEnv.toolsFunc.console_copy(`
        使用bs64解码前:${str}`, 
        `\r\n解码后${out}`);

        return out;
    }
}();


// Function.prototype.toString.prototype=bodaEnv.toolsFunc.proxy2(Function.prototype.toString.prototype,'Function.prototype.toString.prototype')