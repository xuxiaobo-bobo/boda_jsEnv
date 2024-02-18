;;(function(){
    bodaEnv.envFunc.UIEvent_sourceCapabilities_get=function(){
        bodaEnv.toolsFunc.console_copy(`UIEvent_sourceCapabilities_get arg->默认返回false`)
        return false
    }
    bodaEnv.envFunc.ScriptProcessorNode_onaudioprocess_set=function(){
        let _arg=arguments[0]
        // debugger
        let _event={
            'self':this,
            'callback':_arg,
            'type':'onaudioprocess'
        }
        bodaEnv.toolsFunc.console_copy(`ScriptProcessorNode_onaudioprocess_set arg->`,_arg,'加入 SetTimeOutDelay10 数组')
        bodaEnv.memory.SetTimeOutDelay10.push(_event)
        return _arg
    }

    bodaEnv.envFunc.Document_onselectionchange_get=function(){
       let _res= bodaEnv.memory.asyncEvent['listener']['onselectionchange'].length?bodaEnv.memory.asyncEvent['listener']['onselectionchange'][0]:null
       bodaEnv.toolsFunc.console_copy(this,`-> Document_onselectionchange_get ->`,_res)

        return _res
    }
    bodaEnv.envFunc.HTMLElement_onresize_get=function(){
        if (bodaEnv.memory.asyncEvent['listener']['onresize'].length){
            let onresizeList=bodaEnv.memory.asyncEvent['listener']['onresize']
            for (let i=0;i<onresizeList.length;i++){
                if (onresizeList[i]['self']==this){
                    bodaEnv.toolsFunc.console_copy(this, `-> HTMLElement_onresize_get ->`,onresizeList[i],)
                    return onresizeList[i]['callback']
                }
            }
        }
        bodaEnv.toolsFunc.console_copy(this,`-> HTMLElement_onresize_get ->null`)
        return null

    }
    bodaEnv.envFunc.HTMLElement_onmouseenter_get=function(){
        if (bodaEnv.memory.asyncEvent['listener']['onmouseenter'].length){
            let onmouseenterList=bodaEnv.memory.asyncEvent['listener']['onmouseenter']
            for (let i=0;i<onmouseenterList.length;i++){
                if (onmouseenterList[i]['self']==this){
                    bodaEnv.toolsFunc.console_copy(this, `-> HTMLElement_onmouseenter_get ->`,onmouseenterList[i],)
                    return onmouseenterList[i]['callback']
                }
            }
        }
        bodaEnv.toolsFunc.console_copy(this,`-> HTMLElement_onmouseenter_get ->null`)
        return null

    }
    bodaEnv.envFunc.Document_onmousemove_get=function(){
        let _res= bodaEnv.memory.asyncEvent['listener']['onmousemove'].length?bodaEnv.memory.asyncEvent['listener']['onmousemove'][0]:null

        bodaEnv.toolsFunc.console_copy(this,`-> Document_onmousemove_get ->`,_res)
        return _res

    }
    bodaEnv.envFunc.HTMLElement_onmousedown_set=function (){
        // debugger
        let _func=arguments[0]
        let _event={
            'self':this,
            'callback':_func,
            'type':'onmousedown'
        }

        bodaEnv.memory.asyncEvent['listener']['onmousedown'].push(_event)
        bodaEnv.toolsFunc.console_copy(this, `-> HTMLElement_onmousedown_set ->`,_event ,'加入 SetTimeOutDelay10 数组')
        // bodaEnv.memory.SetTimeOutDelay10.push(_event)

        return _func
    }
    bodaEnv.envFunc.HTMLElement_onload_set=function (){
        // debugger
        let _onload_func=arguments[0]
        let _event={
            'self':this,
            'callback':_onload_func,
            'type':'onload'
        }
        bodaEnv.memory.asyncEvent['listener']['onload'].push(_event)
        bodaEnv.toolsFunc.console_copy(this, `-> HTMLElement_onload_set 当前func 属于事件 可能需要进行调用 ->`,_onload_func,'加入 SetTimeOutDelay10 数组')
        // bodaEnv.memory.SetTimeOutDelay10.push(_event)
        return _onload_func
    }
    bodaEnv.envFunc.HTMLElement_onselectstart_set=function (){
        let _func=arguments[0]
        let _event={
            'self':this,
            'callback':_func,
            'type':'onselectstart'
        }
        bodaEnv.memory.asyncEvent['listener']['onselectstart'].push(_event)
        bodaEnv.toolsFunc.console_copy(this, `-> HTMLElement_onselectstart_set 当前func 属于事件 可能需要进行调用 ->`,_func,'加入 SetTimeOutDelay10 数组')
        // bodaEnv.memory.SetTimeOutDelay10.push(_event)

        return _func
    }
    bodaEnv.envFunc.HTMLElement_onclick_set=function (){
        let _func=arguments[0]
        let _event={
            'self':this,
            'callback':_func,
            'type':'onclick'
        }
        bodaEnv.memory.asyncEvent['listener']['onclick'].push(_event)

        bodaEnv.toolsFunc.console_copy(this, `-> HTMLElement_onclick_set 当前func 属于事件 可能需要进行调用 ->`,_func,'加入 SetTimeOutDelay10 数组')
        // bodaEnv.memory.SetTimeOutDelay10.push(_event)
        return _func
    }
    bodaEnv.envFunc.HTMLElement_onerror_set=function (){
        // debugger
        let _onerror_func=arguments[0]
        let _event={
            'self':this,
            'callback':_onerror_func,
            'type':'onerror'
        }
        bodaEnv.memory.asyncEvent['listener']['onerror'].push(_event)
        bodaEnv.toolsFunc.console_copy(this, `-> HTMLElement_onerror_set 当前func 属于事件 可能需要进行调用 ->`,_onerror_func)

        return _onerror_func
    }




    bodaEnv.envFunc.MouseEvent_button_get=function(){
        let _res=bodaEnv.toolsFunc.getObjWeakMapProtoAttr.call(this,'button')
        bodaEnv.toolsFunc.console_copy(this ,`-> MouseEvent_button_get ->`, _res);
        return _res
    }
    bodaEnv.envFunc.MouseEvent_screenX_get=function(){
        let _res=bodaEnv.toolsFunc.getObjWeakMapProtoAttr.call(this,'screenX')
        bodaEnv.toolsFunc.console_copy(this ,`-> MouseEvent_screenX_get ->`, _res);
        return _res
    }
    bodaEnv.envFunc.MouseEvent_screenY_get=function(){
        let _res=bodaEnv.toolsFunc.getObjWeakMapProtoAttr.call(this,'screenY')
        bodaEnv.toolsFunc.console_copy(this ,`-> MouseEvent_screenY_get ->`, _res);
        return _res
    }
    bodaEnv.envFunc.DeviceOrientationEvent_gamma_get=function(){
        let _res=bodaEnv.toolsFunc.getObjWeakMapProtoAttr.call(this,'gamma')
        bodaEnv.toolsFunc.console_copy(this ,`-> DeviceOrientationEvent_gamma_get ->`, _res);
        return _res
    }
    
    bodaEnv.envFunc.DeviceOrientationEvent_beta_get=function(){
        let _res=bodaEnv.toolsFunc.getObjWeakMapProtoAttr.call(this,'beta')
        bodaEnv.toolsFunc.console_copy(this ,`-> DeviceOrientationEvent_beta_get ->`, _res);
        return _res
    }
    bodaEnv.envFunc.DeviceOrientationEvent_alpha_get=function(){
        let _res=bodaEnv.toolsFunc.getObjWeakMapProtoAttr.call(this,'alpha')
        bodaEnv.toolsFunc.console_copy(this ,`-> DeviceOrientationEvent_alpha_get ->`, _res);
        return _res
    }
    bodaEnv.envFunc.UIEvent_which_get=function(){
        let _res=bodaEnv.toolsFunc.getObjWeakMapProtoAttr.call(this,'which')
        bodaEnv.toolsFunc.console_copy(this ,`-> UIEvent_which_get ->`, _res);
        return _res
    }
    bodaEnv.envFunc.Event_timeStamp_get=function(){
        
        let _res=bodaEnv.toolsFunc.getObjWeakMapProtoAttr.call(this,'timeStamp')
        bodaEnv.toolsFunc.console_copy(this ,`-> Event_timeStamp_get ->`, _res);
        return _res
    }
    bodaEnv.envFunc.MouseEvent_buttons_get=function(){
        let _res=bodaEnv.toolsFunc.getObjWeakMapProtoAttr.call(this,'buttons')
        bodaEnv.toolsFunc.console_copy(this ,`-> MouseEvent_buttons_get ->`, _res);
        return _res
    }

    bodaEnv.envFunc.MouseEvent_pageY_get=function(){
        let _res=bodaEnv.toolsFunc.getObjWeakMapProtoAttr.call(this,'pageY')
        bodaEnv.toolsFunc.console_copy(this ,`-> MouseEvent_pageY_get ->`, _res);
        return _res
    }
    bodaEnv.envFunc.MouseEvent_pageX_get=function(){
        // debugger
        let _res=bodaEnv.toolsFunc.getObjWeakMapProtoAttr.call(this,'pageX')
        bodaEnv.toolsFunc.console_copy(this ,`-> MouseEvent_pageX_get ->`, _res);
        return _res
    }

    bodaEnv.envFunc.Event_srcElement_get=function(){
        let _res=bodaEnv.toolsFunc.getObjWeakMapProtoAttr.call(this,'srcElement')
        bodaEnv.toolsFunc.console_copy(this ,`-> Event_srcElement_get ->`, _res);
        return _res
    }

    bodaEnv.envFunc.Event_target_get=function(){
        let _res=bodaEnv.toolsFunc.getObjWeakMapProtoAttr.call(this,'target')
        bodaEnv.toolsFunc.console_copy(this ,`-> Event_target_get ->`, _res);
        return _res
    }

    bodaEnv.envFunc.Event_type_get=function(){
        // debugger
        let _res=bodaEnv.toolsFunc.getObjWeakMapProtoAttr.call(this,'type')
        bodaEnv.toolsFunc.console_copy(this ,`-> Event_type_get ->`, _res);
        return _res
    }
    
    bodaEnv.envFunc.event_isTrusted_get=function(){
        bodaEnv.toolsFunc.console_copy(this ,`-> event_isTrusted_get ->`, true);

        return true
    }
    bodaEnv.envFunc.MouseEvent_x_get=function(){
        let _res=bodaEnv.toolsFunc.getObjWeakMapProtoAttr.call(this,'x')
        bodaEnv.toolsFunc.console_copy(this ,`-> MouseEvent_x_get ->`, _res);

        return _res
    }
    bodaEnv.envFunc.MouseEvent_y_get=function(){
        let _res=bodaEnv.toolsFunc.getObjWeakMapProtoAttr.call(this,'y')
        bodaEnv.toolsFunc.console_copy(this ,`-> MouseEvent_y_get ->`, _res);

        return _res
    }
    bodaEnv.envFunc.MouseEvent_clientX_get=function(){
        let _res=bodaEnv.toolsFunc.getObjWeakMapProtoAttr.call(this,'clientX')
        bodaEnv.toolsFunc.console_copy(this ,`-> MouseEvent_clientX_get ->`, _res);

        return _res
    }
    bodaEnv.envFunc.MouseEvent_clientY_get=function(){
        let _res=bodaEnv.toolsFunc.getObjWeakMapProtoAttr.call(this,'clientY')
        bodaEnv.toolsFunc.console_copy(this ,`-> MouseEvent_clientY_get ->`, _res);

        return _res
    }

})()
;;
