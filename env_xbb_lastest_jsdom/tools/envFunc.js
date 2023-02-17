// 浏览器接口具体的实现
!function () {
    // bodavm.envFunc.window_eval=function (){
    //     let arg=arguments[0]
    //     console.log(`window_eval `,`arg->${arg}`);
    //     return bodaobj.window.eval(arg)
    // }
    bodavm.envFunc.window_webkitStorageInfo_get=function (){
        let webkitStorageInfo_=bodavm.memory.globalobj['webkitStorageInfo']
        console.log(`window_webkitStorageInfo_get `,`webkitStorageInfo->`,webkitStorageInfo_);
        return webkitStorageInfo_
    }
    bodavm.envFunc.window_navigation_get=function (){
        let navigation_=bodavm.memory.globalobj['navigation']
        console.log(`window_navigation_get `,`navigation->`,navigation_);
        return navigation_
    }
    bodavm.envFunc.window_performance_get=function (){
        let perf=bodavm.memory.globalobj['performance']
        console.log(`window_performance_get `,`performance->`,perf);
        debugger
        return perf
    }
    bodavm.envFunc.window_navigator_get=function (){
        let navigator_=bodavm.memory.globalobj.navigator
        console.log(`window_navigator_get `,`navigator->`,navigator_);

        return navigator_
    }
    bodavm.envFunc.window_customElements_get=function (){
        let customElements_=bodavm.memory.globalobj.customElements
        console.log(`window_customElements_get `,`customElements->`,customElements_);

        return customElements_
    }
    bodavm.envFunc.window_screen_get=function (){
        let screen_=bodavm.memory.globalobj.screen
        console.log(`window_screen_get `,`screen->`,screen_);

        return screen_
    }

    
    bodavm.envFunc.window_history_get=function (){
        let history_=bodavm.memory.globalobj.history
        console.log(`window_history_get `,`history->`,history_);

        return history_
    }
    bodavm.envFunc.window_localStorage_get=function window_localStorage_get(){
        let localStorage_=bodavm.memory.globalobj.localStorage
        console.log(`window_localStorage_get `,`localStorage->`,localStorage_);

        return localStorage_
    }
    bodavm.envFunc.window_indexedDB_get=function window_indexedDB_get(){
        let indexedDB_=bodavm.memory.globalobj.indexedDB
        console.log(`window_indexedDB_get `,`indexedDB->`,indexedDB_);

        return indexedDB_
    }
    bodavm.envFunc.window_sessionStorage_get=function window_sessionStorage_get(){
        let sessionStorage_=bodavm.memory.globalobj.sessionStorage
        console.log(`window_sessionStorage_get `,`sessionStorage->`,sessionStorage_);

        return sessionStorage_
    }
    bodavm.envFunc.window_crypto_get=function window_crypto_get(){
        let crypto_=bodavm.memory.globalobj.crypto
        console.log(`window_crypto_get `,`crypto->`,crypto_);
        return crypto_
    }
    bodavm.envFunc.window_document_get=function window_document_get(){
        // debugger
        let document_=bodavm.memory.globalobj.document
        console.log(`window_document_get `,`document->`,document_);
        return document_
    }
    bodavm.envFunc.window_location_get=function window_location_get(){
        debugger
        let location_=bodavm.memory.globalobj.location
        console.log(`window_location_get `,`location_->`,location_);
        return location_
    }
    bodavm.envFunc.window_clientInformation_get=function window_clientInformation_get(){
        // debugger
        let res=navigator
        console.log(`window_clientInformation_get `,`res- >${res}`);
        return res
    }
    bodavm.envFunc.HTMLAllCollection_length_get = function () {
        let length_ = bodavm.memory.all.length
        console.log(`HTMLAllCollection_length_get `, `length_ ->${length_}`);
        return length_
    }
    bodavm.envFunc.Document_all_get = function Document_all_get() {
        bodavm.memory.all = []
        let a = boallundefined
        tags = document.getElementsByTagName("*")
        a.__proto__ = bodavm.memory.globalobj['HTMLAllCollection'].prototype
        if (bodavm.memory.rs6 && bodavm.memory.rs6_body == 0) {
            let num = 0
            for (let i=0;i<tags.length; i++) {
                if (tags[i] instanceof bodavm.memory.globalobj['HTMLBodyElement']) {
                } else {
                    bodavm.memory.all[num] = tags[i]
                    num++
                }
            }
        } else {
            for (let i2 = 0; i2 < tags.length; i2++) {
                bodavm.memory.all[i2] = tags[i2];
            }

        }


        a.__proto__[Symbol.iterator] = Array.prototype[Symbol.iterator];
        console.log("Document_all_get  ", `all ->${a}`)
        return a
    }

    bodavm.envFunc.HTMLAnchorElement_hash_get = function HTMLAnchorElement_hash_get() {
        let hash = this._boarg.hash
        console.log(`HTMLAnchorElement_hash_get `, `hash ->${hash}`);
        return hash
    }


    bodavm.envFunc.HTMLAnchorElement_search_get = function HTMLAnchorElement_search_get() {
        let search = this._boarg.search
        console.log(`HTMLAnchorElement_search_get `, `search ->${search}`);
        return search
    }
    bodavm.envFunc.HTMLAnchorElement_href_get = function HTMLAnchorElement_href_get() {
        let href = this._boarg.href
        console.log(`HTMLAnchorElement_href_get `, `href ->${href}`);
        return href
    }


    bodavm.envFunc.HTMLAnchorElement_port_get = function HTMLAnchorElement_port_get() {
        let port = this._boarg.port
        console.log(`HTMLAnchorElement_port_get `, `port ->${port}`);
        return port
    }
    bodavm.envFunc.HTMLAnchorElement_pathname_get = function HTMLAnchorElement_pathname_get() {
        let pathname = this._boarg.pathname
        console.log(`HTMLAnchorElement_pathname_get `, `pathname ->${pathname}`);
        return pathname
    }

    bodavm.envFunc.HTMLAnchorElement_hostname_get = function HTMLAnchorElement_hostname_get() {
        let hostname = this._boarg.hostname
        console.log(`HTMLAnchorElement_hostname_get `, `hostname ->${hostname}`);
        return hostname
    }
    bodavm.envFunc.HTMLAnchorElement_protocol_get = function HTMLAnchorElement_protocol_get() {
        let protocol = this._boarg.protocol
        console.log(`HTMLAnchorElement_protocol_get `, `protocol ->${protocol}`);
        return protocol
    }
    bodavm.envFunc.HTMLAnchorElement_href_set = function HTMLAnchorElement_href_set() {
        let href = arguments[0]
        this._boarg.href = href
        console.log(`HTMLAnchorElement_href_set `, `href ->${href}`);
        return href
    }
    bodavm.envFunc.HTMLInputElement_type_set = function HTMLInputElement_type_set() {
        let type = arguments[0]
        this._boarg.type = type
        console.log(`HTMLInputElement_type_set `, `type->${type}`);
        return type
    }

    bodavm.envFunc.HTMLFormElement_action_get = function HTMLFormElement_action_get() {
        let action = ''
        // debugger
        for (let i = 0; i < bodavm.memory.formlist.length; i++) {
            if (bodavm.memory.formlist[i] == this._boarg) {
                for (let j = 0; j < bodavm.memory.formlist[i]['child'].length; j++) {
                    if (bodavm.memory.formlist[i]['child'][j]._boarg.name != 'action') {
                        action = this._boarg.action
                    } else {
                        // debugger
                        action = bodavm.memory.formlist[i]['child'][j]
                        break
                    }
                }

            }
        }
        // debugger

        console.log(`HTMLFormElement_action_get `, `action ->${action}`, `r6检测点`);
        return action
    }
    bodavm.envFunc.HTMLInputElement_name_set = function HTMLInputElement_name_set() {
        let name = arguments[0]
        this._boarg.name = name
        console.log(`HTMLInputElement_name_set `, `name ->${name}`);
        return name
    }
    bodavm.envFunc.HTMLFormElement_action_set = function HTMLFormElement_action_set() {
        // debugger
        let action = arguments[0]
        this._boarg.action = action
        for (let i; i < bodavm.memory.formlist.length; i++) {
            if (bodavm.memory.formlist[i] == this._boarg) {
                bodavm.memory.formlist[i]['action'] = action

            }
        }
        // debugger
        console.log(`HTMLFormElement_action_set `, `action ->${action}`);
        return action
    }
    bodavm.envFunc.Document_createExpression = function Document_createExpression() {
        // debugger
        let res = {}

        res.__proto__ =bodavm.memory.globalobj['XPathExpression'].prototype
        res._boarg = bodaobj.document.createExpression(arguments[0], arguments[1])
        console.log(`Document_createExpression `, `res ->${res}`);
        return res
    }

    bodavm.envFunc.BarProp_visible_get = function BarProp_visible_get() {
        // debugger
        let boolres = true
        console.log(`BarProp_visible_get `, `boolres ->${boolres}`);
        return boolres
    }
    bodavm.envFunc.HTMLMediaElement_canPlayType = function HTMLMediaElement_canPlayType() {
        let canplaytype = arguments[0]
        let res = ''
        switch (canplaytype) {
            case 'audio/ogg; codecs="vorbis"':
                res = 'probably'
                break
            case 'audio/wav; codecs="1"':
                res = 'probably'
                break
            case "audio/mpeg;":
                res = 'probably'
                break
            case "audio/x-m4a;audio/aac;":
                res = 'maybe'
                break
            case 'video/ogg; codecs="theora"':
                res = 'probably'
                break
            case 'video/mp4; codecs="avc1.42E01E"':
                res = 'probably'
                break
            case 'video/webm; codecs="vp8, vorbis"':
                res = 'probably'
                break
            case 'video/mp4; codecs="mp4v.20.8, mp4a.40.2"':
                res = ''
                break
            case 'video/mp4; codecs="mp4v.20.240, mp4a.40.2"':
                res = ''
                break
            case 'video/x-matroska; codecs="theora, vorbis"':
                res = ''
                break

            default:
                console.log(`HTMLMediaElement_canPlayType `, `canplaytype->${canplaytype}未实现 `);
        }

        console.log(`HTMLMediaElement_canPlayType `, `canplaytype ->${canplaytype}`, `res ->${res}`);
        return res

    }


    bodavm.envFunc.window_matchMedia = function window_matchMedia() {
        // debugger
        let arg = arguments[0]
        let res = {}
        res._media = arg
        res.__proto__ = bodavm.memory.globalobj['MediaQueryList'].prototype
        console.log(`window_matchMedia `, `arg ->${arg}`, `res ->${res}`);

        return res
    }
    bodavm.envFunc.XMLHttpRequestEventTarget_onabort_set = function XMLHttpRequestEventTarget_onabort_set() {
        // debugger
        // this._boarg=
        if (arguments.length > 1) { return bodavm.toolsFunc.throwError('TypeError', 'XMLHttpRequestEventTarget_onabort_set') }
        let arg = arguments[0]
        this._boarg.onabort = arg
        console.log(`XMLHttpRequestEventTarget_onabort_set`, `arg->${arg}`);
        return arg
    }

    bodavm.envFunc.XMLHttpRequestEventTarget_onerror_set = function XMLHttpRequestEventTarget_onerror_set() {
        // debugger
        // this._boarg=
        if (arguments.length > 1) { return bodavm.toolsFunc.throwError('TypeError', 'XMLHttpRequestEventTarget_onerror_set') }
        let arg = arguments[0]
        this._boarg.onerror = arg
        console.log(`XMLHttpRequestEventTarget_onerror_set`, `arg->${arg}`);
        return arg
    }
    bodavm.envFunc.XMLHttpRequestEventTarget_onload_set = function XMLHttpRequestEventTarget_onload_set() {
        if (arguments.length > 1) { return bodavm.toolsFunc.throwError('TypeError', 'XMLHttpRequestEventTarget_onload_set') }
        let arg = arguments[0]
        this._boarg.onload = arg
        console.log(`XMLHttpRequestEventTarget_onload_set`, `arg->${arg}`);
        return arg
    }
    bodavm.envFunc.XMLHttpRequestEventTarget_onloadend_set = function XMLHttpRequestEventTarget_onloadend_set() {
        if (arguments.length > 1) { return bodavm.toolsFunc.throwError('TypeError', 'XMLHttpRequestEventTarget_onloadend_set') }
        let arg = arguments[0]
        this._boarg.onloadend = arg
        console.log(`XMLHttpRequestEventTarget_onloadend_set`, `arg->${arg}`);
        return arg
    }
    bodavm.envFunc.XMLHttpRequestEventTarget_onloadstart_set = function XMLHttpRequestEventTarget_onloadstart_set() {
        if (arguments.length > 1) { return bodavm.toolsFunc.throwError('TypeError', 'XMLHttpRequestEventTarget_onloadstart_set') }
        let arg = arguments[0]
        this._boarg.onloadstart = arg
        console.log(`XMLHttpRequestEventTarget_onloadstart_set`, `arg->${arg}`);
        return arg
    }

    bodavm.envFunc.XMLHttpRequestEventTarget_onprogress_set = function XMLHttpRequestEventTarget_onprogress_set() {
        if (arguments.length > 1) { return bodavm.toolsFunc.throwError('TypeError', 'XMLHttpRequestEventTarget_onprogress_set') }
        let arg = arguments[0]
        this._boarg.onprogress = arg
        console.log(`XMLHttpRequestEventTarget_onprogress_set`, `arg->${arg}`);
        return arg
    }

    bodavm.envFunc.XMLHttpRequestEventTarget_ontimeout_set = function XMLHttpRequestEventTarget_ontimeout_set() {
        if (arguments.length > 1) { return bodavm.toolsFunc.throwError('TypeError', 'XMLHttpRequestEventTarget_ontimeout_set') }
        let arg = arguments[0]
        this._boarg.ontimeout = arg
        console.log(`XMLHttpRequestEventTarget_ontimeout_set`, `arg->${arg}`);
        return arg
    }



    bodavm.envFunc.XMLHttpRequest_upload_get = function XMLHttpRequest_upload_get() {
        let upload = this._boarg.upload
        console.log(`XMLHttpRequestEventTarget_upload_get `, `upload -> ${upload}`);
        return upload
    }
    bodavm.envFunc.XMLHttpRequestEventTarget_ontimeout_get = function XMLHttpRequestEventTarget_ontimeout_get() {
        let ontimeout = this._boarg.ontimeout
        console.log(`XMLHttpRequestEventTarget_ontimeout_get `, `ontimeout -> ${ontimeout}`);
        return ontimeout
    }
    bodavm.envFunc.XMLHttpRequestEventTarget_onprogress_get = function XMLHttpRequestEventTarget_onprogress_get() {
        let onprogress = this._boarg.onprogress
        console.log(`XMLHttpRequestEventTarget_onprogress_get `, `onprogress -> ${onprogress}`);
        return onprogress
    }
    bodavm.envFunc.XMLHttpRequestEventTarget_onloadend_get = function XMLHttpRequestEventTarget_onloadend_get() {
        let onloadend = this._boarg.onloadend
        console.log(`XMLHttpRequestEventTarget_onloadend_get `, `onloadend -> ${onloadend}`);
        return onloadend
    }
    bodavm.envFunc.XMLHttpRequestEventTarget_onloadstart_get = function XMLHttpRequestEventTarget_onloadstart_get() {
        // debugger
        let onloadstart = this._boarg.onloadstart
        console.log(`XMLHttpRequestEventTarget_onloadstart_get `, `onloadstart -> ${onloadstart}`);
        return onloadstart
    }
    bodavm.envFunc.XMLHttpRequestEventTarget_onerror_get = function XMLHttpRequestEventTarget_onerror_get() {
        let onerror = this._boarg.onerror
        console.log(`XMLHttpRequestEventTarget_onerror_get `, `onerror -> ${onerror}`);
        return onerror
    }
    bodavm.envFunc.XMLHttpRequestEventTarget_onload_get = function XMLHttpRequestEventTarget_onload_get() {
        let onload = this._boarg.onload
        console.log(`XMLHttpRequestEventTarget_onload_get `, `onerror -> ${onload}`);
        return onload
    }
    bodavm.envFunc.XMLHttpRequestEventTarget_onabort_get = function XMLHttpRequestEventTarget_onabort_get() {
        // debugger
        let onabort = this._boarg.onabort
        console.log(`XMLHttpRequestEventTarget_onabort_get `, `onabort -> ${onabort}`);
        return onabort
    }
    bodavm.envFunc.XMLHttpRequest_withCredentials_set = function XMLHttpRequest_withCredentials_set() {
        debugger
        let arg = arguments[0]
        this._boarg.withCredentials = arg
        console.log(`XMLHttpRequest_withCredentials_set `, `arg -> ${arg}`);
        return arg
    }
    bodavm.envFunc.CanvasRenderingContext2D_shadowBlur_set = function CanvasRenderingContext2D_shadowBlur_set() {
        // debugger
        if (bodavm.config.isdebug) { debugger };
        let shadowBlur = arguments[0]
        this._bocanvas.shadowBlur = shadowBlur
        console.log(`CanvasRenderingContext2D_shadowBlur_set `, `shadowBlur ->${shadowBlur}`);
        return shadowBlur
    }
    bodavm.envFunc.CanvasRenderingContext2D_arc = function CanvasRenderingContext2D_arc() {
        // debugger
        let arg = arguments[0]
        let arg1 = arguments[1]
        let arg2 = arguments[2]
        let arg3 = arguments[3]
        let arg4 = arguments[4]
        this._bocanvas.arc(arg, arg1, arg2, arg3, arg4)
        //无返回值
        console.log(`CanvasRenderingContext2D_arc `, `arg->${arg} arg1->${arg1} arg2->${arg2} arg2->${arg2} arg3->${arg3} arg4->${arg4}`);

    }
    bodavm.envFunc.CanvasRenderingContext2D_stroke = function CanvasRenderingContext2D_stroke() {
        // debugger
        //无返回值
        this._bocanvas.stroke()
        console.log(`CanvasRenderingContext2D_stroke `);
    }
    bodavm.envFunc.HTMLScriptElement_text_set = function HTMLScriptElement_text_set() {
        if (bodavm.config.isdebug) { debugger };
        let arg = arguments[0]
        this._boarg.text = arg
        console.log(`HTMLScriptElement_text_set `, `arg -> ${arg}`);
        return arg
    }

    bodavm.envFunc.Permissions_query = function Permissions_query() {
        // debugger
        let query = arguments[0]
        if (query['name'] == 'geolocation') {
            let res = {}
            res.__proto__ = bodavm.memory.globalobj['PermissionStatus'].prototype
            let promise = new Promise((resolve, reject) => {
                resolve(res)
            })
            console.log(`Permissions_query `, `res ->${promise}`);

            return promise
        } else {
            console.log(`Permissions_query `, `${query} 未实现`);
        }


    }
    bodavm.envFunc.Document_images_get = function () {
        let imgs = bodaobj.document.images
        if (bodavm.config.isdebug) { debugger };

        let res = {}
        res.__proto__ = bodavm.memory.globalobj['HTMLCollection'].prototype
        res._boarg = imgs
        console.log(`Document_images_get `, `res -> ${res}`);
        return res
    }
    bodavm.envFunc.Navigator_deviceMemory_get = function Navigator_deviceMemory_get() {
        let deviceMemory = bodavm.memory.navigator['deviceMemory']
        if (bodavm.config.isdebug) { debugger };

        console.log(`Navigator_deviceMemory_get `, `deviceMemory ->${deviceMemory}`);
        return deviceMemory
    }

    bodavm.envFunc.Navigator_credentials_get = function Navigator_credentials_get() {
        let credentials = {}
        if (bodavm.config.isdebug) { debugger };

        credentials.__proto__ = bodavm.memory.globalobj['CredentialsContainer'].prototype
        console.log(`Navigator_credentials_get `, `credentials ->${credentials}`);
        return credentials
    }
    bodavm.envFunc.Navigator_storage_get = function Navigator_storage_get() {
        let storage = {}
        if (bodavm.config.isdebug) { debugger };
        storage.__proto__ = bodavm.memory.globalobj['StorageManager'].prototype
        console.log(`Navigator_storage_get `, `storage ->${storage}`);
        return storage
    }
    bodavm.envFunc.Navigator_maxTouchPoints_get = function Navigator_maxTouchPoints_get() {
        let maxTouchPoints = bodavm.memory.navigator['maxTouchPoints']
        if (bodavm.config.isdebug) { debugger };

        console.log(`Navigator_maxTouchPoints_get `, `maxTouchPoints ->${maxTouchPoints}`);
        return maxTouchPoints
    }
    bodavm.envFunc.Navigator_bluetooth_get = function Navigator_bluetooth_get() {
        let bluetooth = {}
        bluetooth.__proto__ = bodavm.memory.globalobj['Bluetooth'].prototype
        if (bodavm.config.isdebug) { debugger };

        console.log(`Navigator_bluetooth_get `, `bluetooth ->${bluetooth}`);
        return bluetooth
    }
    bodavm.envFunc.Navigator_vendorSub_get = function Navigator_vendorSub_get() {
        let vendorSub = bodavm.memory.navigator['vendorSub']
        if (bodavm.config.isdebug) { debugger };

        console.log(`Navigator_vendorSub_get `, `vendorSub ->${vendorSub}`);
        return vendorSub
    }
    bodavm.envFunc.Navigator_product_get = function Navigator_product_get() {
        let product = bodavm.memory.navigator['product']
        if (bodavm.config.isdebug) { debugger };

        console.log(`Navigator_product_get `, `product ->${product}`);
        return product
    }
    bodavm.envFunc.Navigator_doNotTrack_get = function Navigator_doNotTrack_get() {
        let doNotTrack = null
        if (bodavm.config.isdebug) { debugger };

        console.log(`Navigator_doNotTrack_get `, `doNotTrack ->${doNotTrack}`);
        return doNotTrack
    }
    bodavm.envFunc.RTCPeerConnection_createDataChannel = function RTCPeerConnection_createDataChannel() {
        let label = arguments[0]
        let options = arguments[1]
        if (bodavm.config.isdebug) { debugger };
        if (label == 'label') {
            let DataChannel = {}
            DataChannel.__proto__ = bodavm.memory.globalobj['RTCDataChannel'].prototype
            console.log(`RTCPeerConnection_createDataChannel `, `label->${label} `, `options->${options} `, `DataChannel->${DataChannel}  `);
            return DataChannel
        }


    }
    bodavm.envFunc.RTCPeerConnection_onicegatheringstatechange_set = function RTCPeerConnection_onicegatheringstatechange_set() {
        if (bodavm.config.isdebug) { debugger };

        let change = arguments[0]
        this._onicegatheringstatechange = change
        console.log(`RTCPeerConnection_onicegatheringstatechange_set `, `onicegatheringstatechange ->${_onicegatheringstatechange}`);
        return change
    }
    bodavm.envFunc.window_Image = function window_Image() {
        let domimg = bodaobj.window.Image.apply(this, arguments)
        let img = {}
        if (bodavm.config.isdebug) { debugger };

        img.__proto__ = bodavm.memory.globalobj['HTMLImageElement'].prototype
        img._boarg = domimg
        console.log(`window_Image `, ` img->${img}`);
        return img
    }


    bodavm.envFunc.WebGLRenderingContext_getContextAttributes = function WebGLRenderingContext_getContextAttributes() {
        if (bodavm.config.isdebug) { debugger };

        let context = {
            "alpha": true,
            "antialias": true,
            "depth": true,
            "desynchronized": false,
            "failIfMajorPerformanceCaveat": false,
            "powerPreference": "default",
            "premultipliedAlpha": true,
            "preserveDrawingBuffer": false,
            "stencil": false,
            "xrCompatible": false
        }
        console.log(`WebGLRenderingContext_getContextAttributes `, `context->${JSON.stringify(context)}`);
        return context
    }

    bodavm.envFunc.document_write = function document_write() {
        let html = arguments[0]
        bodaobj.document.write(html)
        console.log(`document_write `, `html ->${html}`);
    }
    bodavm.envFunc.window_frames_get = function window_frames_get() {
        let iframe = bodaobj.window
        console.log(`window_frames_get `, ` 返回的为jsdom中的window`);
        iframe = bodavm.toolsFunc.proxy(iframe, 'iframewinodow')
        return iframe
    }
    bodavm.envFunc.window_closed_get = function window_closed_get() {
        let closed = bodaobj.window.closed;
        console.log(`window_closed_get `, ` 返回的为jsdom中的window.closed->${closed}`);
        return closed

    }
    bodavm.envFunc.window_status_get = function window_status_get() {
        let status = bodaobj.window.status;
        console.log(`window_closed_get `, ` 返回的为jsdom中的window.status->${status}`);
        return status
    }
    bodavm.envFunc.window_origin_get = function window_origin_get() {
        let origin = bodaobj.window.origin;
        console.log(`window_origin_get `, ` 返回的为jsdom中的window.origin->${origin}`);
        return origin
    }
    bodavm.envFunc.window_onmessage_get = function window_onmessage_get() {
        let onmessage = bodaobj.window.onmessage;
        console.log(`window_onmessage_get `, ` 返回的为jsdom中的window.onmessage ->${onmessage}`);
        return onmessage
    }


    bodavm.envFunc.window_webkitRequestFileSystem = function window_webkitRequestFileSystem() {
        let webkitRequestFileSystem = bodaobj.window.webkitRequestFileSystem;
        console.log(`window.webkitRequestFileSystem `, ` 返回的为jsdom中的window.webkitRequestFileSystem ->${webkitRequestFileSystem}`);
        return webkitRequestFileSystem
    }
    bodavm.envFunc.window_onbeforeunload_get = function window_onbeforeunload_get() {
        let onbeforeunload = bodaobj.window.onbeforeunload;
        console.log(`window_onbeforeunload_get `, ` 返回的为jsdom中的window.onbeforeunload ->${onbeforeunload}`);
        return onbeforeunload
    }
    bodavm.envFunc.window_length_get = function window_length_get() {
        let _length = bodaobj.window.length;
        console.log(`window_length_get `, ` 返回的为jsdom中的window.length ->${_length}`);
        return _length
    }
    bodavm.envFunc.window_onbeforeunload_set = function window_onbeforeunload_set() {
        let arg = arguments[0]
        bodavm.memory.window['onbeforeunload'] = arg
        console.log(`window_onbeforeunload_set `, ` window.onbeforeunload ->${arg}`);
    }
    bodavm.envFunc.window_openDatabase = function window_openDatabase() {
        let arg = arguments[0]
        let arg1 = arguments[1]
        let arg2 = arguments[2]
        let arg3 = arguments[2]
        // let openDatabase
        console.log(`window_openDatabase `, `->${arg}->${arg1}->${arg2}->${arg3} database`);
        return database
    }
    bodavm.envFunc.window_defaultStatus_get = function window_defaultStatus_get() {
        let defaultStatus = bodavm.memory.window['defaultStatus']
        console.log(`window_defaultStatus_get `, `defaultStatus ->${defaultStatus}`);
        return defaultStatus
    }
    bodavm.envFunc.window_defaultstatus_get = function window_defaultstatus_get() {
        let defaultstatus = bodavm.memory.window['defaultstatus']
        console.log(`window_defaultstatus_get `, `defaultstatus ->${defaultstatus}`);
        return defaultstatus
    }
    bodavm.envFunc.window_innerWidth_get = function window_innerWidth_get() {
        let innerWidth = bodaobj.window['innerWidth']
        console.log(`window_innerWidth_get `, `innerWidth ->${innerWidth}`);
        return innerWidth
    }
    bodavm.envFunc.window_devicePixelRatio_get = function window_devicePixelRatio_get() {
        let devicePixelRatio = bodavm.memory.window['devicePixelRatio']
        console.log(`window_innerWidth_get `, `devicePixelRatio ->${devicePixelRatio}`);
        return devicePixelRatio
    }
    bodavm.envFunc.window_innerHeight_get = function window_innerHeight_get() {
        let innerHeight = bodaobj.window['innerHeight']
        console.log(`window_innerHeight_get `, `innerHeight ->${innerHeight}`);
        return innerHeight
    }
    bodavm.envFunc.window_outerHeight_get = function window_outerHeight_get() {
        let outerHeight = bodaobj.window['outerHeight']
        console.log(`window_outerHeight_get `, `outerHeight ->${outerHeight}`);
        return outerHeight
    }
    bodavm.envFunc.window_screenLeft_get = function window_screenLeft_get() {
        let screenLeft = bodaobj.window['screenLeft']
        console.log(`window_screenLeft_get `, `screenLeft ->${screenLeft}`);
        return screenLeft
    }
    bodavm.envFunc.window_screenTop_get = function window_screenTop_get() {
        let screenTop = bodaobj.window['screenTop']
        console.log(`window_screenTop_get `, `screenTop ->${screenTop}`);
        return screenTop
    }

    bodavm.envFunc.window_outerWidth_get = function window_outerWidth_get() {
        let outerWidth = bodaobj.window['outerWidth']
        console.log(`window_outerWidth_get `, `outerWidth ->${outerWidth}`);
        return outerWidth
    }

    bodavm.envFunc.window_screenY_get = function window_screenY_get() {
        let screenY = bodaobj.window['screenY']
        console.log(`window_screenY_get `, `screenY ->${screenY}`);
        return screenY
    }
    bodavm.envFunc.window_screenX_get = function window_screenX_get() {
        let screenX = bodaobj.window['screenX']
        console.log(`window_screenX_get `, `screenX ->${screenX}`);
        return screenX
    }

    bodavm.envFunc.window_pageYOffset_get = function window_pageYOffset_get() {
        let pageYOffset = bodaobj.window.pageYOffset
        console.log(`window_pageYOffset_get `, `pageYOffset ->${pageYOffset}`);
        return pageYOffset
    }
    bodavm.envFunc.window_pageXOffset_get = function window_pageXOffset_get() {
        let pageXOffset = bodaobj.window.pageXOffset
        console.log(`window_pageXOffset_get `, `scrollX ->${pageXOffset}`);
        return pageXOffset
    }
    bodavm.envFunc.window_scrollX_get = function window_scrollX_get() {
        let scrollX = bodaobj.window.scrollX
        console.log(`window_scrollX_get `, `scrollX ->${scrollX}`);
        return scrollX
    }
    bodavm.envFunc.window_scrollY_get = function window_scrollY_get() {
        let scrollY = bodaobj.window.scrollY
        console.log(`window_scrollY_get `, `scrollY ->${scrollY}`);
        return scrollY
    }
    bodavm.envFunc.window_self_get = function () {
        console.log(`window_self_get `, `window  `);

        if (bodavm.config.isdebug) { debugger };;

        return window
    }
    bodavm.envFunc.window_parent_get = function window_parent_get() {
        console.log(`window_parent_get `, `window`);
        return window
    }
    bodavm.envFunc.window_top_get = function window_top_get() {
        console.log(`window_top_get `, `window`);
        return window
    }
    bodavm.envFunc.window_name_get = function window_name_get() {
        let name = bodavm.memory.window['name']
        console.log(`window_name_get `, `name ->${name}`);
        return name
    }
    bodavm.envFunc.window_name_set = function window_name_set() {
        let name = arguments[0]
        bodavm.memory.window['name'] = name
        console.log(`window_name_set `, `name ->${name}`);
        return name
    }
    bodavm.envFunc.window_setTimeout = function window_setTimeout() {
        let func = arguments[0];
        let delay = arguments[1] || 0;
        let length = arguments.length;
        let argList = [];
        for (let i = 2; i < length; i++) {
            argList.push(arguments[i]);
        }
        console.log(`window_setTimeout `, `func->${func} `, `delay->${delay} `, `argList->${argList}  `);
        bodavm.memory.globalInit.timeoutID += 1
        let event = {
            "callback": func,
            "delay": delay,
            "args": argList,
            "type": typeof func == 'function'? 1 : 0,  //1代表函数,0代表code
            "timeoutID": bodavm.memory.globalInit.timeoutID
        }
        if (bodavm.memory.asyncEvent.setTimeout === undefined) {
            bodavm.memory.asyncEvent.setTimeout = [];
        }
        // bodavm.toolsFunc.symbolProperty(event)
        bodavm.memory.asyncEvent.setTimeout.push(event);

        return bodavm.memory.globalInit.timeoutID
    }
    bodavm.envFunc.window_clearTimeout = function window_clearTimeout() {
        let id = arguments[0]
        console.log(`window_clearTimeout `, `${id}  `)
        bodavm.memory.asyncEvent.setTimeout.forEach(function (item, index, arr) {
            // if(bodavm.config.isdebug){debugger};

            if (item["timeoutID"] == id) {
                arr.splice(index, 1);
            }
        });
        //     }

    }
    bodavm.envFunc.window_clearInterval = function window_clearInterval() {
        let id = arguments[0]
        console.log(`window_clearInterval `, `${id}  `)
        bodavm.memory.asyncEvent.setTimeout.forEach(function (item, index, arr) {
            // if(bodavm.config.isdebug){debugger};
            if (item["timeoutID"] == id) {
                arr.splice(index, 1);
            }
        });
        //     }

    }
    bodavm.envFunc.window_setInterval = function window_setInterval() {

        let func = arguments[0];
        let delay = arguments[1] || 0;
        let length = arguments.length;
        // bodavm.toolsFunc.symbolProperty(func)
        let argList = [];
        for (let i = 2; i < length; i++) {
            argList.push(arguments[i]);
        }
        console.log(`window_setInterval `, `func->${func} `, `delay->${delay} `, `argList->${argList}  `);

        bodavm.memory.globalInit.timeoutID += 1
        let event = {
            "callback": func,
            "delay": delay,
            "args": argList,
            "type": typeof func == 'function'? 1 : 0,  //1代表函数,0代表code
            "timeoutID": bodavm.memory.globalInit.timeoutID
        }
        if (bodavm.memory.asyncEvent.setTimeout === undefined) {
            bodavm.memory.asyncEvent.setTimeout = [];
        }
        // bodavm.toolsFunc.symbolProperty(event)
        bodavm.memory.asyncEvent.setTimeout.push(event);

        return bodavm.memory.globalInit.timeoutID
    }


    //Storage
    bodavm.envFunc.Storage_setItem = function Storage_getItem() {

        if (bodavm.config.isdebug) { debugger }
        let keyName = arguments[0];
        let keyValue = arguments[1];
        this[keyName] = keyValue

        console.log(`Storage_setItem `, `keyName->${keyName} `, `keyValue->${keyValue}  `)
    }
    bodavm.envFunc.Storage_getItem = function Storage_getItem() {

        if (bodavm.config.isdebug) { debugger }
        let key = arguments[0]
        let item = this[key]

        console.log(`Storage_getItem `, `key->${key} `, `item->${item}  `)
        return item

    }
    bodavm.envFunc.Storage_removeItem = function Storage_removeItem() {
        if (bodavm.config.isdebug) { debugger }
        let key = arguments[0]
        console.log(`Storage_removeItem `, `key->${key}  `);

        delete this[key]

    }
    bodavm.envFunc.Storage_key = function Storage_key() {
        if (bodavm.config.isdebug) { debugger }
        // if(bodavm.config.isdebug){debugger};;
        let index = arguments[0];
        let i = 0;
        console.log(`Storage_key `, `index${index}  `)
        for (const key in this) {
            if (i === index) {
                return this[key]
            }
            i++
        }
        return null
    }

    bodavm.envFunc.Storage_clear = function Storage_clear() {
        if (bodavm.config.isdebug) { debugger }
        debugger
        // this = {}
        // this.__proto__=Storage.prototype
        console.log(`Storage_clear `, `{}  `);
    }

    bodavm.envFunc.Storage_length_get = function Storage_length_get() {
        let i = 0;
        if (bodavm.config.isdebug) { debugger }
        debugger
        for (const key in Object.getOwnPropertyDescriptors(this)) {
            i++
        }
        console.log(`Storage_length_get `, `length->${i}   `);

        return i;
    }

    //Document
    bodavm.envFunc.Document_onbeforecut_get = function Document_onbeforecut_get() { console.log("Document_onbeforecut_get  ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Document_onbeforematch_get = function Document_onbeforematch_get() { console.log("Document_onbeforematch_get  ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Document_onbeforexrselect_get = function Document_onbeforexrselect_get() { console.log("Document_onbeforexrselect_get  ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Document_onblur_get = function Document_onblur_get() { console.log("Document_onblur_get  ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Document_oncancel_get = function Document_oncancel_get() { console.log("Document_oncancel_get  ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Document_oncanplay_get = function Document_oncanplay_get() { console.log("Document_oncanplay_get  ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Document_xmlVersion_get = function Document_xmlVersion_get() { console.log("Document_xmlVersion_get  ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Document_xmlStandalone_get = function Document_xmlStandalone_get() { console.log("Document_xmlStandalone_get  ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Document_xmlEncoding_get = function Document_xmlEncoding_get() { console.log("Document_xmlEncoding_get  ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Document_webkitVisibilityState_get = function Document_webkitVisibilityState_get() { console.log("Document_webkitVisibilityState_get  ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Document_webkitIsFullScreen_get = function Document_webkitIsFullScreen_get() { console.log("Document_webkitIsFullScreen_get  ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Document_webkitHidden_get = function Document_webkitHidden_get() { console.log("Document_webkitHidden_get  ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Document_webkitFullscreenEnabled_get = function Document_webkitFullscreenEnabled_get() { console.log("Document_webkitFullscreenEnabled_get  ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Document_webkitFullscreenElement_get = function Document_webkitFullscreenElement_get() { console.log("Document_webkitFullscreenElement_get  ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Document_webkitCurrentFullScreenElement_get = function Document_webkitCurrentFullScreenElement_get() { console.log("Document_webkitCurrentFullScreenElement_get  ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Document_wasDiscarded_get = function Document_wasDiscarded_get() { console.log("Document_wasDiscarded_get  ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Document_vlinkColor_get = function Document_vlinkColor_get() { console.log("Document_vlinkColor_get  ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Document_visibilityState_get = function Document_visibilityState_get() {
        console.log("Document_visibilityState_get  ", 'visible',)
        return 'visible'
    }
    bodavm.envFunc.Document_timeline_get = function Document_timeline_get() { console.log("Document_timeline_get  ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Document_styleSheets_get = function Document_styleSheets_get() { console.log("Document_styleSheets_get  ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Document_rootElement_get = function Document_rootElement_get() { console.log("Document_rootElement_get  ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Document_pointerLockElement_get = function Document_pointerLockElement_get() { console.log("Document_pointerLockElement_get  ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Document_plugins_get = function Document_plugins_get() { console.log("Document_plugins_get  ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Document_pictureInPictureEnabled_get = function Document_pictureInPictureEnabled_get() { console.log("Document_pictureInPictureEnabled_get  ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Document_pictureInPictureElement_get = function Document_pictureInPictureElement_get() { console.log("Document_pictureInPictureElement_get  ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Document_onwheel_get = function Document_onwheel_get() { console.log("Document_onwheel_get  ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Document_onwebkittransitionend_get = function Document_onwebkittransitionend_get() { console.log("Document_onwebkittransitionend_get  ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Document_onwebkitfullscreenerror_get = function Document_onwebkitfullscreenerror_get() { console.log("Document_onwebkitfullscreenerror_get  ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Document_onwebkitfullscreenchange_get = function Document_onwebkitfullscreenchange_get() { console.log("Document_onwebkitfullscreenchange_get  ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Document_onwebkitanimationstart_get = function Document_onwebkitanimationstart_get() { console.log("Document_onwebkitanimationstart_get  ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Document_onwebkitanimationiteration_get = function Document_onwebkitanimationiteration_get() { console.log("Document_onwebkitanimationiteration_get  ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Document_onwebkitanimationend_get = function Document_onwebkitanimationend_get() { console.log("Document_onwebkitanimationend_get  ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Document_onwaiting_get = function Document_onwaiting_get() { console.log("Document_onwaiting_get  ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Document_onvolumechange_get = function Document_onvolumechange_get() { console.log("Document_onvolumechange_get  ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Document_onvisibilitychange_get = function Document_onvisibilitychange_get() { console.log("Document_onvisibilitychange_get  ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Document_ontransitionstart_get = function Document_ontransitionstart_get() { console.log("Document_ontransitionstart_get  ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Document_ontransitionrun_get = function Document_ontransitionrun_get() { console.log("Document_ontransitionrun_get  ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Document_ontransitionend_get = function Document_ontransitionend_get() { console.log("Document_ontransitionend_get  ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Document_ontransitioncancel_get = function Document_ontransitioncancel_get() { console.log("Document_ontransitioncancel_get  ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Document_ontoggle_get = function Document_ontoggle_get() { console.log("Document_ontoggle_get  ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Document_ontimeupdate_get = function Document_ontimeupdate_get() { console.log("Document_ontimeupdate_get  ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Document_onsuspend_get = function Document_onsuspend_get() { console.log("Document_onsuspend_get  ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Document_onsubmit_get = function Document_onsubmit_get() { console.log("Document_onsubmit_get  ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Document_onstalled_get = function Document_onstalled_get() { console.log("Document_onstalled_get  ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Document_onslotchange_get = function Document_onslotchange_get() { console.log("Document_onslotchange_get  ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Document_onselectstart_get = function Document_onselectstart_get() { console.log("Document_onselectstart_get  ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Document_onselect_get = function Document_onselect_get() { console.log("Document_onselect_get  ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Document_onseeking_get = function Document_onseeking_get() { console.log("Document_onseeking_get  ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Document_onseeked_get = function Document_onseeked_get() { console.log("Document_onseeked_get  ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Document_onsecuritypolicyviolation_get = function Document_onsecuritypolicyviolation_get() { console.log("Document_onsecuritypolicyviolation_get  ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Document_onsearch_get = function Document_onsearch_get() { console.log("Document_onsearch_get  ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Document_onscroll_get = function Document_onscroll_get() { console.log("Document_onscroll_get  ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Document_onresume_get = function Document_onresume_get() { console.log("Document_onresume_get  ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Document_onresize_get = function Document_onresize_get() { console.log("Document_onresize_get  ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Document_onreset_get = function Document_onreset_get() { console.log("Document_onreset_get  ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Document_onreadystatechange_get = function Document_onreadystatechange_get() { console.log("Document_onreadystatechange_get  ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Document_activeElement_get = function Document_activeElement_get() { console.log("Document_activeElement_get  ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Document_adoptedStyleSheets_get = function Document_adoptedStyleSheets_get() { console.log("Document_adoptedStyleSheets_get  ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Document_alinkColor_get = function Document_alinkColor_get() { console.log("Document_alinkColor_get  ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }

    bodavm.envFunc.Document_anchors_get = function Document_anchors_get() { console.log("Document_anchors_get  ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Document_applets_get = function Document_applets_get() { console.log("Document_applets_get  ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Document_bgColor_get = function Document_bgColor_get() { console.log("Document_bgColor_get  ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Document_childElementCount_get = function Document_childElementCount_get() { console.log("Document_childElementCount_get  ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Document_children_get = function Document_children_get() { console.log("Document_children_get  ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Document_currentScript_get = function Document_currentScript_get() { console.log("Document_currentScript_get  ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Document_defaultView_get = function Document_defaultView_get() { console.log("Document_defaultView_get  ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Document_doctype_get = function Document_doctype_get() { console.log("Document_doctype_get  ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Document_embeds_get = function Document_embeds_get() { console.log("Document_embeds_get  ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Document_featurePolicy_get = function Document_featurePolicy_get() { console.log("Document_featurePolicy_get  ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Document_fgColor_get = function Document_fgColor_get() { console.log("Document_fgColor_get  ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Document_firstElementChild_get = function Document_firstElementChild_get() { console.log("Document_firstElementChild_get  ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Document_fonts_get = function Document_fonts_get() { console.log("Document_fonts_get  ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Document_fragmentDirective_get = function Document_fragmentDirective_get() { console.log("Document_fragmentDirective_get  ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Document_fullscreen_get = function Document_fullscreen_get() { console.log("Document_fullscreen_get  ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Document_fullscreenElement_get = function Document_fullscreenElement_get() { console.log("Document_fullscreenElement_get  ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Document_fullscreenEnabled_get = function Document_fullscreenEnabled_get() { console.log("Document_fullscreenEnabled_get  ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Document_lastElementChild_get = function Document_lastElementChild_get() { console.log("Document_lastElementChild_get  ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Document_linkColor_get = function Document_linkColor_get() { console.log("Document_linkColor_get  ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Document_links_get = function Document_links_get() { console.log("Document_links_get  ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Document_onabort_get = function Document_onabort_get() { console.log("Document_onabort_get  ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Document_onanimationend_get = function Document_onanimationend_get() { console.log("Document_onanimationend_get  ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Document_onanimationiteration_get = function Document_onanimationiteration_get() { console.log("Document_onanimationiteration_get  ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Document_onanimationstart_get = function Document_onanimationstart_get() { console.log("Document_onanimationstart_get  ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Document_onauxclick_get = function Document_onauxclick_get() { console.log("Document_onauxclick_get  ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Document_onbeforecopy_get = function Document_onbeforecopy_get() { console.log("Document_onbeforecopy_get  ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Document_onbeforepaste_get = function Document_onbeforepaste_get() { console.log("Document_onbeforepaste_get  ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Document_oncanplaythrough_get = function Document_oncanplaythrough_get() { console.log("Document_oncanplaythrough_get  ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Document_onchange_get = function Document_onchange_get() { console.log("Document_onchange_get  ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Document_onclick_get = function Document_onclick_get() { console.log("Document_onclick_get  ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Document_onclose_get = function Document_onclose_get() { console.log("Document_onclose_get  ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Document_oncontextlost_get = function Document_oncontextlost_get() { console.log("Document_oncontextlost_get  ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Document_oncontextmenu_get = function Document_oncontextmenu_get() { console.log("Document_oncontextmenu_get  ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Document_oncontextrestored_get = function Document_oncontextrestored_get() { console.log("Document_oncontextrestored_get  ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Document_oncopy_get = function Document_oncopy_get() { console.log("Document_oncopy_get  ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Document_oncuechange_get = function Document_oncuechange_get() { console.log("Document_oncuechange_get  ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Document_oncut_get = function Document_oncut_get() { console.log("Document_oncut_get  ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Document_ondblclick_get = function Document_ondblclick_get() { console.log("Document_ondblclick_get  ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Document_ondrag_get = function Document_ondrag_get() { console.log("Document_ondrag_get  ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Document_ondragend_get = function Document_ondragend_get() { console.log("Document_ondragend_get  ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Document_ondragenter_get = function Document_ondragenter_get() { console.log("Document_ondragenter_get  ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Document_ondragleave_get = function Document_ondragleave_get() { console.log("Document_ondragleave_get  ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Document_ondragover_get = function Document_ondragover_get() { console.log("Document_ondragover_get  ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Document_ondragstart_get = function Document_ondragstart_get() { console.log("Document_ondragstart_get  ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Document_ondrop_get = function Document_ondrop_get() { console.log("Document_ondrop_get  ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Document_ondurationchange_get = function Document_ondurationchange_get() { console.log("Document_ondurationchange_get  ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Document_onended_get = function Document_onended_get() { console.log("Document_onended_get  ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Document_onemptied_get = function Document_onemptied_get() { console.log("Document_onemptied_get  ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Document_onerror_get = function Document_onerror_get() { console.log("Document_onerror_get  ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Document_onfocus_get = function Document_onfocus_get() { console.log("Document_onfocus_get  ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Document_onformdata_get = function Document_onformdata_get() { console.log("Document_onformdata_get  ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Document_onfreeze_get = function Document_onfreeze_get() { console.log("Document_onfreeze_get  ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Document_onfullscreenchange_get = function Document_onfullscreenchange_get() { console.log("Document_onfullscreenchange_get  ", undefined, "!!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Document_onfullscreenerror_get = function Document_onfullscreenerror_get() { console.log("Document_onfullscreenerror_get  ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Document_ongotpointercapture_get = function Document_ongotpointercapture_get() { console.log("Document_ongotpointercapture_get  ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Document_oninput_get = function Document_oninput_get() { console.log("Document_oninput_get  ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Document_oninvalid_get = function Document_oninvalid_get() { console.log("Document_oninvalid_get  ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Document_onkeydown_get = function Document_onkeydown_get() { console.log("Document_onkeydown_get  ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Document_onkeyup_get = function Document_onkeyup_get() { console.log("Document_onkeyup_get  ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Document_onload_get = function Document_onload_get() { console.log("Document_onload_get  ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Document_onloadeddata_get = function Document_onloadeddata_get() { console.log("Document_onloadeddata_get  ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Document_onloadedmetadata_get = function Document_onloadedmetadata_get() { console.log("Document_onloadedmetadata_get  ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Document_onlostpointercapture_get = function Document_onlostpointercapture_get() { console.log("Document_onlostpointercapture_get  ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Document_onloadstart_get = function Document_onloadstart_get() { console.log("Document_onloadstart_get  ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Document_onmousedown_get = function Document_onmousedown_get() { console.log("Document_onmousedown_get  ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Document_onmouseenter_get = function Document_onmouseenter_get() { console.log("Document_onmouseenter_get  ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Document_onmouseleave_get = function Document_onmouseleave_get() { console.log("Document_onmouseleave_get  ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Document_onmouseout_get = function Document_onmouseout_get() { console.log("Document_onmouseout_get  ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Document_onmouseover_get = function Document_onmouseover_get() { console.log("Document_onmouseover_get  ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Document_onmouseup_get = function Document_onmouseup_get() { console.log("Document_onmouseup_get  ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Document_onmousewheel_get = function Document_onmousewheel_get() { console.log("Document_onmousewheel_get  ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Document_onpaste_get = function Document_onpaste_get() { console.log("Document_onpaste_get  ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Document_onpause_get = function Document_onpause_get() { console.log("Document_onpause_get  ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Document_onplay_get = function Document_onplay_get() { console.log("Document_onplay_get  ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Document_onplaying_get = function Document_onplaying_get() { console.log("Document_onplaying_get  ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Document_onpointercancel_get = function Document_onpointercancel_get() { console.log("Document_onpointercancel_get  ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Document_onpointerdown_get = function Document_onpointerdown_get() { console.log("Document_onpointerdown_get  ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Document_onpointerenter_get = function Document_onpointerenter_get() { console.log("Document_onpointerenter_get  ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Document_onpointerleave_get = function Document_onpointerleave_get() { console.log("Document_onpointerleave_get  ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Document_onpointerlockerror_get = function Document_onpointerlockerror_get() { console.log("Document_onpointerlockerror_get  ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Document_onpointerlockchange_get = function Document_onpointerlockchange_get() { console.log("Document_onpointerlockchange_get  ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Document_onpointermove_get = function Document_onpointermove_get() { console.log("Document_onpointermove_get  ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Document_onpointerout_get = function Document_onpointerout_get() { console.log("Document_onpointerout_get  ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Document_onpointerover_get = function Document_onpointerover_get() { console.log("Document_onpointerover_get  ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Document_onpointerrawupdate_get = function Document_onpointerrawupdate_get() { console.log("Document_onpointerrawupdate_get  ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Document_onpointerup_get = function Document_onpointerup_get() { console.log("Document_onpointerup_get  ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Document_onprogress_get = function Document_onprogress_get() { console.log("Document_onprogress_get  ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Document_onratechange_get = function Document_onratechange_get() { console.log("Document_onratechange_get  ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Document_querySelector = function Document_querySelector() { console.log("Document_querySelector", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }

    bodavm.envFunc.Document_createEvent = function Document_createEvent() {
        // debugger
        let arg = arguments[0].toUpperCase()
        let event = {}
        switch (arg) {
            case 'MOUSEEVENT':

                event.__proto__ = bodavm.memory.globalobj['MouseEvent'].prototype
                console.log(`Document_createEvent `, event);
                bodavm.toolsFunc.symbolProperty(event)
                return event
            case 'EVENT':
                event.__proto__ = bodavm.memory.globalobj['Event'].prototype
                console.log(`Document_createEvent `, event);
                bodavm.toolsFunc.symbolProperty(event)
                return event

            case "TOUCHEVENT":
                console.log(`Document_createEvent  `, event, `   该事件只有在触摸平面（触摸屏、触摸板等）才会触发`);
                bodavm.toolsFunc.throwError('DOMException', `Failed to execute 'createEvent'on 'Document': The provided event type ('TouchEvent') is invalid.`)
            default:
                console.log(`Document_createEvent  `, `${arg}  未实现`);

        }


    }
    bodavm.envFunc.Document_scripts_get = function Document_scripts_get() {
        let res = {}
        let scripts = bodaobj.document.scripts
        res.__proto__ = bodavm.memory.globalobj['HTMLCollection'].prototype
        res._boarg = scripts
        console.log(`Document_scripts_get `, `res ->${res}`);
        return res
    }
    bodavm.envFunc.Document_body_set = function Document_body_set() {


        return bodavm.toolsFunc.throwError('TypeError', `Document_body_set失败  `)
    }
    bodavm.envFunc.Document_forms_get = function Document_forms_get() {
        if (bodavm.config.isdebug) { debugger };;
        let forms = this[0]._tagelements["FORM"]
        console.log(`Document_forms_get `, `${forms}  `);

        return forms

    }


    bodavm.envFunc.Document_URL_get = function Document_URL_get() {
        let URL = bodaobj.document["URL"]
        console.log(`Document_URL_get `, `${URL}  `);
        if (bodavm.config.isdebug) { debugger };;
        return URL
    }



    bodavm.envFunc.Document_lastModified_get = function Document_lastModified_get() {
        let date = new Date();
        let month = date.getMonth() + 1
        month = month > 11 ? month : '0'+ month
        let day = date.getDate()
        let year = date.getFullYear()
        let hours = date.getHours()
        let minutes = date.getMinutes()
        let seconds = date.getSeconds()
        let time = `${month}/${day}/${year} ${hours}->${minutes}->${seconds}`
        console.log(`Document_lastModified_get `, `${time}  `);
        return time;
    }
    bodavm.envFunc.Document_contentType_get = function Document_contentType_get() {
        let contenttype = bodaobj.document['contentType']
        console.log(`Document_contentType_get `, `${contenttype}  `);
        if (bodavm.config.isdebug) { debugger };;

        return contenttype
    }
    bodavm.envFunc.Document_inputEncoding_get = function Document_inputEncoding_get() {
        let inputEncoding = bodaobj.document['inputEncoding']
        console.log(`Document_inputEncoding_get `, `${inputEncoding}  `);
        if (bodavm.config.isdebug) { debugger };;

        return inputEncoding
    }
    bodavm.envFunc.Document_referrer_get = function Document_referrer_get() {
        if (bodavm.config.isdebug) { debugger }

        let referrer = bodaobj.document["referrer"]
        console.log(`Document_referrer_get `, `${referrer}  `);
        return referrer
    }

    bodavm.envFunc.Document_createElement = function Document_createElement() {
        let tagName = arguments[0].toLowerCase();
        let options = arguments[1];
        var dom = {}
        if (bodavm.config.isdebug) { debugger };
        switch (tagName) {
            case "div":
               
                dom._boarg = bodaobj.document.createElement('div')
                dom = Object.setPrototypeOf(dom,bodavm.memory.globalobj['HTMLDivElement'].prototype)
                break;
            case "meta":
                dom._boarg = bodaobj.document.createElement('meta')
                dom = Object.setPrototypeOf(dom,bodavm.memory.globalobj['HTMLMetaElement'].prototype)
                break;
            case "canvas":
                dom._boarg = bodaobj.document.createElement('canvas')
                dom._bocanvas = bocreateCanvas(300, 150)
                dom = Object.setPrototypeOf(dom,bodavm.memory.globalobj['HTMLCanvasElement'].prototype)
                break;
            case "a":
                dom._boarg = bodaobj.document.createElement('a')

                dom = Object.setPrototypeOf(dom,bodavm.memory.globalobj['HTMLAnchorElement'].prototype)
                break;
            case "script":
                dom._boarg = bodaobj.document.createElement('script')

                dom = Object.setPrototypeOf(dom,bodavm.memory.globalobj['HTMLScriptElement'].prototype)
                break;
            case "style":
                dom._boarg = bodaobj.document.createElement('style')

                dom = Object.setPrototypeOf(dom,bodavm.memory.globalobj['HTMLStyleElement'].prototype)
                break;
            case "head":
                dom._boarg = bodaobj.document.createElement('head')

                dom = Object.setPrototypeOf(dom,bodavm.memory.globalobj['HTMLHeadElement'].prototype)
                break;
            case "body":
                dom._boarg = bodaobj.document.createElement('body')

                dom = Object.setPrototypeOf(dom,bodavm.memory.globalobj['HTMLBodyElement'].prototype)
                break;
            case "form":
                dom._boarg = bodaobj.document.createElement('form')

                dom = Object.setPrototypeOf(dom,bodavm.memory.globalobj['HTMLFormElement'].prototype)
                bodavm.memory.formlist.push(dom._boarg)
                break;
            case "p":
                dom._boarg = bodaobj.document.createElement('p')

                dom = Object.setPrototypeOf(dom,bodavm.memory.globalobj['HTMLParagraphElement'].prototype)
                break;
            case "iframe":
                dom._boarg = bodaobj.document.createElement('iframe')

                dom = Object.setPrototypeOf(dom,bodavm.memory.globalobj['HTMLIFrameElement'].prototype)
                break;
            case "span":
                dom._boarg = bodaobj.document.createElement('span')

                dom = Object.setPrototypeOf(dom,bodavm.memory.globalobj['HTMLSpanElement'].prototype)
                break;
            case "img":
                dom._boarg = bodaobj.document.createElement('img')

                dom = Object.setPrototypeOf(dom,bodavm.memory.globalobj['HTMLImageElement'].prototype)
                break;
            case "li":
                dom._boarg = bodaobj.document.createElement('li')

                dom = Object.setPrototypeOf(dom,bodavm.memory.globalobj['HTMLLIElement'].prototype)
                break;
            case 'h1':
                dom._boarg = bodaobj.document.createElement('h1')

                dom = Object.setPrototypeOf(dom,bodavm.memory.globalobj['HTMLHeadingElement'].prototype)
                break;
            case 'audio':
                dom._boarg = bodaobj.document.createElement('audio')
                dom = Object.setPrototypeOf(dom,bodavm.memory.globalobj['HTMLAudioElement'].prototype)
                break
            case 'video':
                dom._boarg = bodaobj.document.createElement('video')
                dom = Object.setPrototypeOf(dom,bodavm.memory.globalobj['HTMLVideoElement'].prototype)
                break
            case 'input':
                dom._boarg = bodaobj.document.createElement('input')
                dom = Object.setPrototypeOf(dom,bodavm.memory.globalobj['HTMLInputElement'].prototype)
                break
            default:
                console.log(`Document_createElement `, `${tagName}属性未实现  `);
                break;
        }
        console.log(`Document_createElement `, `tagName->${tagName} `, dom)
        return dom;

    }
    bodavm.envFunc.Document_body_get = function Document_body_get() {

        if (bodavm.config.isdebug) { debugger };;
        if (bodavm.memory.rs6 && bodavm.memory.rs6_body == 0) {
            bodavm.memory.rs6_body = 1
            console.log(`Document_body_get `, `当前网站为r6使用该功能,否则请关闭`, `body->${null}  `);
            return null
        }
        let res = bodavm.toolsFunc.setProto('body')
        res._boarg = bodaobj.document.body
        console.log(`Document_body_get `, `body->${res}  `);
        return res

    }
    bodavm.envFunc.Document_domain_get = function Document_domain_get() {
        let domain = bodaobj.document["domain"]
        if (bodavm.config.isdebug) { debugger }
        console.log(`Document_domain_get `, `${domain}  `)
        return domain
    }

    bodavm.envFunc.Document_domain_set = function Document_domain_set() {
        let domain = arguments[0]
        bodaobj.document["domain"] = domain
        console.log(`Document_domain_set `, `${domain}  `)
        if (bodavm.config.isdebug) { debugger }
        return domain
    }
    bodavm.envFunc.Document_getElementById = function Document_getElementById() {
        // debugger
        if (bodavm.config.isdebug) { debugger };

        let id = arguments[0]
        let res = bodaobj.document.getElementById(id)
        if (res) {
            let value = bodavm.toolsFunc.setProto(res.nodeName)
            value._boarg = res  //防止this丢失
            console.log(`Document_getElementById `, `id->${id}`, ` res->${value}`);
            return value
        } else {
            console.log(`Document_getElementById `, `id->${id}`, ` res->${null}`);
            return null

        }

    }

    //'[{"type":"node","tag":"meta",attrs:{"id":id}},{"type":"node","tag":"canvas"},{"type":"node","tag":"a"},{"type":"node","tag":"script"},{"type":"node","tag":"style"}]'
    bodavm.envFunc.Document_getElementsByTagName = function Document_getElementsByTagName() {
        var tagName = arguments[0].toLowerCase()
        let res = {}
        if (bodavm.config.isdebug) { debugger };
        let taglist = bodaobj.document.getElementsByTagName(tagName)
        debugger
        num = 0
        for (let i = 0; i < taglist.length; i++) {
            num++
            res[i] = bodavm.toolsFunc.setProto(taglist[i].nodeName);
            res[i]._boarg = taglist[i]
            if (num == 2 && tagName == 'script'&& bodavm.config.isrs) {
                // debugger
                break

            }
        }
        res.__proto__ =bodavm.memory.globalobj['HTMLCollection'].prototype
        res._boarg = taglist
        console.log(`Document_getElementsByTagName `, `tagName->${tagName} `, ` taglist->${taglist}`);


        return res

    }

    bodavm.envFunc.Document_cookie_get = function Document_cookie_get() {
        // debugger
        let jsonCookie = bodavm.memory.globalInit.jsonCookie;
        let tempCookie = "";
        for (const key in jsonCookie) {
            if (key === "") {
                tempCookie += `${jsonCookie[key]}; `;
            } else {
                tempCookie += `${key}=${jsonCookie[key]}; `;
            }
        }
        // cookie=bodaobj.document.cookie
        console.log(`Document_cookie_get `, `cookie -> ${tempCookie}`);
        return tempCookie;
    }
    bodavm.envFunc.Document_cookie_set = function Document_cookie_set() {
        let cookieValue = arguments[0];
        let index = cookieValue.indexOf(";");
        if (index !== -1) {
            cookieValue = cookieValue.substring(0, index);
        }
        if (cookieValue.indexOf("=") === -1) {
            bodavm.memory.globalInit.jsonCookie[""] = cookieValue.trim();
        } else {
            let item = cookieValue.split("=");
            let k = item[0].trim();
            let v = item[1].trim();
            bodavm.memory.globalInit.jsonCookie[k] = v;
        }
        // bodaobj.document.cookie=cookieValue
        console.log(`Document_cookie_set `, `cookie -> ${cookieValue}`);
        return cookieValue
    }
    bodavm.envFunc.document_location_get = function document_location_get() {
        if (bodavm.config.isdebug) { debugger }
        console.log(`document_location_get== `, `Location  `);
        return bodaobj.document.location;
    }

    bodavm.envFunc.Document_characterSet_get = function Document_characterSet_get() {
        let characterSet = bodaobj.document['characterSet']
        console.log(`Document_characterSet_get `, `${characterSet}  `);
        if (bodavm.config.isdebug) { debugger };;

        return characterSet
    }
    bodavm.envFunc.Document_charset_get = function Document_charset_get() {
        let charset = bodaobj.document['charset']
        console.log(`Document_characterSet_get `, `${charset}  `);
        if (bodavm.config.isdebug) { debugger };;

        return charset
    }

    bodavm.envFunc.Document_title_set = function Document_title_set() {
        let title = arguments[0]
        bodaobj.document["title"] = title

        console.log(`Document_title_set `, `${title}  `)
        if (bodavm.config.isdebug) { debugger };;

        return title
    }
    bodavm.envFunc.Document_title_get = function Document_title_get() {
        let title = bodaobj.document["title"]
        console.log(`Document_title_get `, `${title}  `)
        return title
    }
    bodavm.envFunc.Document_dir_set = function Document_dir_set() {
        let dir = arguments[0]
        bodaobj.document["dir"] = dir
        console.log(`Document_dir_set `, `${dir}  `)
        if (bodavm.config.isdebug) { debugger };;

        return dir
    }
    bodavm.envFunc.Document_dir_get = function Document_dir_get() {
        let dir = bodaobj.document["dir"]
        console.log(`Document_dir_get `, `${dir}  `)
        if (bodavm.config.isdebug) { debugger };;

        return dir
    }

    bodavm.envFunc.Document_designMode_set = function Document_designMode_set() {
        let designMode = arguments[0]
        bodaobj.document["designMode"] = designMode
        console.log(`Document_designMode_set `, `${designMode}  `)
        if (bodavm.config.isdebug) { debugger }
        return designMode
    }
    bodavm.envFunc.Document_designMode_get = function Document_designMode_get() {
        let designMode = bodaobj.document["designMode"]
        console.log(`Document_designMode_get `, `${designMode}  `)
        if (bodavm.config.isdebug) { debugger }
        return designMode
    }
    bodavm.envFunc.Document_documentElement_get = function Document_documentElement_get() {
        if (bodavm.config.isdebug) { debugger }
        // debugger
        let html = bodaobj.document.documentElement
        let res = bodavm.toolsFunc.setProto(html.nodeName)
        res._boarg = html
        console.log(`Document_documentElement_get `, `html->${res}  `);
        return res

    }



    bodavm.envFunc.Document_hidden_get = function Document_hidden_get() {
        let hidden = bodaobj.document['hidden']
        console.log(`Document_hidden_get `, `${hidden}  `);
        if (bodavm.config.isdebug) { debugger };;

        return hidden
    }

    bodavm.envFunc.Document_documentURI_get = function Document_documentURI_get() {
        if (bodavm.config.isdebug) { debugger }
        let documentURI = bodaobj.document["documentURI"]
        console.log(`Document_documentURI_get `, `${documentURI}  `);
        return documentURI
    }
    bodavm.envFunc.Document_compatMode_get = function Document_compatMode_get() {
        if (bodavm.config.isdebug) { debugger }
        let compatMode = bodaobj.document["compatMode"]
        console.log(`Document_compatMode_get `, `${compatMode}  `);
        return compatMode
    }

    bodavm.envFunc.Document_onmousemove_get = function Document_onmousemove_get() {
        if (bodavm.config.isdebug) { debugger }
        let onmousemove = bodaobj.document['onmousemove']
        console.log(`Document_onmousemove_get `, `onmousemove->${onmousemove}  `);
        return onmousemove
    }

    bodavm.envFunc.Document_onselectionchange_get = function Document_onselectionchange_get() {
        if (bodavm.config.isdebug) { debugger }
        let onselectionchange = bodaobj.document['onselectionchange']
        console.log(`Document_onselectionchange_get `, `onselectionchange->${onselectionchange}  `);
        return onselectionchange
    }

    bodavm.envFunc.Document_scrollingElement_get = function Document_scrollingElement_get() {
        if (bodavm.config.isdebug) { debugger }
        let res = {}
        let html = bodaobj.document.documentElement

        res = bodavm.toolsFunc.setProto('html')
        res._boarg = html
        // return onselectionchange
        console.log(`Document_scrollingElement_get==> `, `html->${res}`);
        return res
    }


    //HTMLDivElement
    bodavm.envFunc.HTMLDivElement_align_get = function HTMLDivElement_align_get() {
        let align = bodavm.memory.htmldivelement['align']
        console.log(`HTMLDivElement_align_get `, `${align}  `)
        if (bodavm.config.isdebug) { debugger };;

        return align
    }
    bodavm.envFunc.HTMLDivElement_align_set = function HTMLDivElement_align_set() {
        let value = arguments[0]
        bodavm.memory.htmldivelement['align'] = value
        console.log(`HTMLDivElement_align_set==> `, `${value}  `)
        if (bodavm.config.isdebug) { debugger };;

        return value
    }

    //HTMLMetaElement  
    bodavm.envFunc.HTMLMetaElement_content_get = function HTMLMetaElement_content_get() {
        if (bodavm.config.isdebug) { debugger }
        // debugger
        let content = this._boarg.content
        // let value = self.attr["content"]
        console.log(`HTMLMetaElement_content_get `, `content->${content.length > 50 ? content.substr(0, 30) + '...': content}  `);
        return content

    }
    bodavm.envFunc.HTMLMetaElement_content_set = function HTMLMetaElement_content_set() {
        var value = arguments[0]
        console.log(`HTMLMetaElement_content_set `, `${value}  `)
        if (bodavm.config.isdebug) { debugger }
        this['_elements'][0].attr["content"] = value
        return value


    }
    bodavm.envFunc.HTMLMetaElement_name_set = function HTMLMetaElement_name_set() {
        var value = arguments[0]
        console.log(`HTMLMetaElement_name_set `, `${value}  `, `!!!!!!!!!未完善!!!!!!!!!!!!`)
        this['_elements'][0].attr["name"] = value
        if (bodavm.config.isdebug) { debugger }

        return value
    }

    bodavm.envFunc.HTMLMetaElement_name_get = function HTMLMetaElement_name_get() {
        let value = this['_elements'][0].attr["name"]
        if (bodavm.config.isdebug) { debugger }

        console.log(`HTMLMetaElement_name_get `, `${value}  `, `!!!!!!!!!未完善!!!!!!!!!!!!`);
        return value
    }


    //Node
    // Node_replaceChild
    bodavm.envFunc.Node_replaceChild = function Node_replaceChild() {
        debugger
        console.log(`Node_replaceChild`, `!!!!!!!!!未完善!!!!!!!!!!!!`);
    }
    bodavm.envFunc.Node_textContent_get = function Node_textContent_get() {
        // debugger
        let content = undefined
        if (this instanceof HTMLFormElement) {
            for (let i = 0; i < bodavm.memory.formlist.length; i++) {
                if (bodavm.memory.formlist[i] == this._boarg) {
                    for (let j = 0; j < bodavm.memory.formlist[i]['child'].length; j++) {
                        if (bodavm.memory.formlist[i]['child'][j]._boarg.name == 'textContent') {
                            content = bodavm.memory.formlist[i]['child'][j]
                            break
                        }
                    }
                }
            }
        }
        console.log("Node_textContent_get", `content ->${content}`, `r6检测点`)
        return content

    }
    bodavm.envFunc.Node_previousSibling_get = function Node_previousSibling_get() { console.log("Node_previousSibling_get", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Node_ownerDocument_get = function Node_ownerDocument_get() { console.log("Node_ownerDocument_get", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Node_baseURI_get = function Node_baseURI_get() { console.log("Node_baseURI_get", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Node_childNodes_get = function Node_childNodes_get() { console.log("Nodes_get", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Node_isConnected_get = function Node_isConnected_get() { console.log("Node_isConnected_get", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Node_nextSibling_get = function Node_nextSibling_get() {
        debugger
        let res={}
        _next =this._boarg.nextSibling
        if (_next ==null) {
            console.log(`Node_nextSibling_get `,`res -> null`);
            return null
        }else{
            res=bodavm.toolsFunc.setProto(_next.nodeName)
            res._boarg=_next
        }
       
        console.log(`Node_nextSibling_get ` ,`res->${res}`);
        return res    
    }
    bodavm.envFunc.Node_nodeType_get = function Node_nodeType_get() {
        if (bodavm.config.isdebug) { debugger }
        debugger
        let nodetype=this._boarg.nodeType
        console.log(`Node_nodeType_get `,`nodetype ->${nodetype}`);
        return nodetype
    }
    bodavm.envFunc.Node_nodeValue_get = function Node_nodeValue_get() { console.log("Node_nodeValue_get", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }

    bodavm.envFunc.Node_nodeName_get = function Node_nodeName_get() {
        if (bodavm.config.isdebug) { debugger }
        console.log(`Node_nodeName_get !!!!!!!!!未完善!!!!!!!!!!!!`);
        return nodeName_
    }
    bodavm.envFunc.Node_firstChild_get = function Node_firstChild_get() {
        debugger
        let res={}
        let frist_ = this._boarg.firstChild
        if (frist_){
            res=bodavm.toolsFunc.setProto(frist_.nodeName)
            res._boarg=frist_
        }else{
            res=null
        }
        console.log(`Node_firstChild_get `, `res->${res}`);

        return res

    }
    bodavm.envFunc.Node_insertBefore = function Node_insertBefore() {
        let newNode = arguments[0]
        let referenceNode = arguments[1]
        console.log(`Node_insertBefore `, `!!!!!!!!!未完善!!!!!!!!!!!! `);


    }
    bodavm.envFunc.Node_lastChild_get = function Node_lastChild_get() {
        if (bodavm.config.isdebug) { debugger }

        console.log(`Node_lastChild_get `, `lastChild->${lastChild} !!!!!!!!!未完善!!!!!!!!!!!! `);
    }

    bodavm.envFunc.Node_cloneNode = function Node_cloneNode() {
        let mode = arguments[0]
        console.log(`Node_cloneNode `, `!!!!!!!!!未完善!!!!!!!!!!!! `);

        return cloneNode
    }
    bodavm.envFunc.Node_parentNode_get = function Node_parentNode_get() {
        //获取父节点
        // debugger
        if (bodavm.config.isdebug) { debugger }
        let parent = this._boarg.parentNode
        let res = bodavm.toolsFunc.setProto(parent.nodeName)
        res._boarg = parent
        // if (Object.prototype.toString.call(parent) == '[object Object]') {
        //     console.log(`Node_parentNode_get `, `parent->${null}  `);
        //     return null
        // }
        // parent.__proto__ = bodavm.toolsFunc.setProto(parent._nodeName)
        console.log(`Node_parentNode_get `, `parent->${res}  `);
        return res;
    }
    bodavm.envFunc.Node_removeChild = function Node_removeChild() {
        //删除子节点
        // debugger
        if (bodavm.config.isdebug) { debugger };;

        let child = arguments[0]
        this._boarg.removeChild(child._boarg)
        console.log(`Node_removeChild `, `child->${child}`);

        // debugger

        return child


    }
    bodavm.envFunc.Node_parentElement_get = function Node_parentElement_get() {

        if (bodavm.config.isdebug) { debugger };;
        let parent = {}
        // debugger
        let temp = this._boarg.parentElement
        parent = bodavm.toolsFunc.setProto(temp.nodeName)
        parent._boarg = temp
        console.log(`Node_parentElement_get `, `parent${temp} `);


        return parent;
    }
    bodavm.envFunc.Node_appendChild = function Node_appendChild() {
        // ;debugger
        if (bodavm.config.isdebug) { debugger };;

        let child = arguments[0]
        if (this instanceof HTMLFormElement) {
            for (let i = 0; i < bodavm.memory.formlist.length; i++) {
                if (this._boarg == bodavm.memory.formlist[i]) {
                    if (bodavm.memory.formlist[i]['child'] == undefined) {
                        bodavm.memory.formlist[i]['child'] = []
                    }
                    bodavm.memory.formlist[i]['child'].push(child)
                }

            }
        }

        this._boarg.appendChild(child._boarg)
        // bobo$(this._boarg).append(child._boarg)
        console.log(`Node_appendChild `, `child->${child}`);
        return child
    }

    //Element
    bodavm.envFunc.Element_ariaAtomic_get = function Element_ariaAtomic_get() { console.log("Element_ariaAtomic_get", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Element_ariaAutoComplete_get = function Element_ariaAutoComplete_get() { console.log("Element_ariaAutoComplete_get", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Element_ariaBusy_get = function Element_ariaBusy_get() { console.log("Element_ariaBusy_get", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Element_ariaChecked_get = function Element_ariaChecked_get() { console.log("Element_ariaChecked_get", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Element_ariaColCount_get = function Element_ariaColCount_get() { console.log("Element_ariaColCount_get", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Element_ariaDescription_get = function Element_ariaDescription_get() { console.log("Element_ariaDescription_get", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Element_ariaCurrent_get = function Element_ariaCurrent_get() { console.log("Element_ariaCurrent_get", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Element_ariaColSpan_get = function Element_ariaColSpan_get() { console.log("Element_ariaColSpan_get", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Element_ariaColIndex_get = function Element_ariaColIndex_get() { console.log("Element_ariaColIndex_get", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Element_ariaDisabled_get = function Element_ariaDisabled_get() { console.log("Element_ariaDisabled_get", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Element_ariaExpanded_get = function Element_ariaExpanded_get() { console.log("Element_ariaExpanded_get", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Element_ariaHasPopup_get = function Element_ariaHasPopup_get() { console.log("Element_ariaHasPopup_get", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Element_ariaHidden_get = function Element_ariaHidden_get() { console.log("Element_ariaHidden_get", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Element_ariaInvalid_get = function Element_ariaInvalid_get() { console.log("Element_ariaInvalid_get", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Element_ariaKeyShortcuts_get = function Element_ariaKeyShortcuts_get() { console.log("Element_ariaKeyShortcuts_get", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Element_ariaLevel_get = function Element_ariaLevel_get() { console.log("Element_ariaLevel_get", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Element_ariaLabel_get = function Element_ariaLabel_get() { console.log("Element_ariaLabel_get", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Element_ariaLive_get = function Element_ariaLive_get() { console.log("Element_ariaLive_get", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Element_ariaModal_get = function Element_ariaModal_get() { console.log("Element_ariaModal_get", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Element_ariaMultiLine_get = function Element_ariaMultiLine_get() { console.log("Element_ariaMultiLine_get", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Element_ariaMultiSelectable_get = function Element_ariaMultiSelectable_get() { console.log("Element_ariaMultiSelectable_get", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Element_ariaOrientation_get = function Element_ariaOrientation_get() { console.log("Element_ariaOrientation_get", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Element_ariaPlaceholder_get = function Element_ariaPlaceholder_get() { console.log("Element_ariaPlaceholder_get", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Element_ariaPosInSet_get = function Element_ariaPosInSet_get() { console.log("Element_ariaPosInSet_get", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Element_ariaPressed_get = function Element_ariaPressed_get() { console.log("Element_ariaPressed_get", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Element_ariaReadOnly_get = function Element_ariaReadOnly_get() { console.log("Element_ariaReadOnly_get", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Element_ariaRequired_get = function Element_ariaRequired_get() { console.log("Element_ariaRequired_get", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Element_ariaRelevant_get = function Element_ariaRelevant_get() { console.log("Element_ariaRelevant_get", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Element_ariaRoleDescription_get = function Element_ariaRoleDescription_get() { console.log("Element_ariaRoleDescription_get", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Element_ariaRowCount_get = function Element_ariaRowCount_get() { console.log("Element_ariaRowCount_get", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Element_ariaRowIndex_get = function Element_ariaRowIndex_get() { console.log("Element_ariaRowIndex_get", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Element_ariaRowSpan_get = function Element_ariaRowSpan_get() { console.log("Element_ariaRowSpan_get", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Element_ariaSelected_get = function Element_ariaSelected_get() { console.log("Element_ariaSelected_get", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Element_ariaSort_get = function Element_ariaSort_get() { console.log("Element_ariaSort_get", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Element_ariaSetSize_get = function Element_ariaSetSize_get() { console.log("Element_ariaSetSize_get", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Element_ariaValueMax_get = function Element_ariaValueMax_get() { console.log("Element_ariaValueMax_get", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Element_ariaValueMin_get = function Element_ariaValueMin_get() { console.log("Element_ariaValueMin_get", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Element_ariaValueNow_get = function Element_ariaValueNow_get() { console.log("Element_ariaValueNow_get", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Element_ariaValueText_get = function Element_ariaValueText_get() { console.log("Element_ariaValueText_get", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Element_assignedSlot_get = function Element_assignedSlot_get() { console.log("Element_assignedSlot_get", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Element_attributeStyleMap_get = function Element_attributeStyleMap_get() { console.log("Element_attributeStyleMap_get", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Element_childElementCount_get = function Element_childElementCount_get() { console.log("ElementCount_get", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Element_classList_get = function Element_classList_get() { console.log("Element_classList_get", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Element_className_get = function Element_className_get() { console.log("Element_className_get", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Element_elementTiming_get = function Element_elementTiming_get() { console.log("Element_elementTiming_get", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Element_firstElementChild_get = function Element_firstElementChild_get() { console.log("ElementChild_get", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Element_lastElementChild_get = function Element_lastElementChild_get() { console.log("ElementChild_get", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Element_localName_get = function Element_localName_get() { console.log("Element_localName_get", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Element_namespaceURI_get = function Element_namespaceURI_get() { console.log("Element_namespaceURI_get", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Element_nextElementSibling_get = function Element_nextElementSibling_get() { console.log("ElementSibling_get", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Element_onbeforecopy_get = function Element_onbeforecopy_get() { console.log("Element_onbeforecopy_get", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Element_onbeforecut_get = function Element_onbeforecut_get() { console.log("Element_onbeforecut_get", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Element_onbeforepaste_get = function Element_onbeforepaste_get() { console.log("Element_onbeforepaste_get", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Element_onfullscreenchange_get = function Element_onfullscreenchange_get() { console.log("Element_onfullscreenchange_get", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Element_onfullscreenerror_get = function Element_onfullscreenerror_get() { console.log("Element_onfullscreenerror_get", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Element_onsearch_get = function Element_onsearch_get() { console.log("Element_onsearch_get", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Element_onwebkitfullscreenchange_get = function Element_onwebkitfullscreenchange_get() { console.log("Element_onwebkitfullscreenchange_get", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Element_onwebkitfullscreenerror_get = function Element_onwebkitfullscreenerror_get() { console.log("Element_onwebkitfullscreenerror_get", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Element_part_get = function Element_part_get() { console.log("Element_part_get", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Element_prefix_get = function Element_prefix_get() { console.log("Element_prefix_get", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Element_previousElementSibling_get = function Element_previousElementSibling_get() { console.log("ElementSibling_get", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Element_scrollHeight_get = function Element_scrollHeight_get() { console.log("Element_scrollHeight_get", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Element_shadowRoot_get = function Element_shadowRoot_get() { console.log("Element_shadowRoot_get", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Element_scrollWidth_get = function Element_scrollWidth_get() { console.log("Element_scrollWidth_get", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Element_slot_get = function Element_slot_get() { console.log("Element_slot_get", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Element_tagName_get = function Element_tagName_get() {
        let tagname = this._boarg.tagName
        if (bodavm.memory.isdebug) { debugger }
        console.log("Element_tagName_get   ", `tagname->${tagname}`)
        return tagname
    }

    bodavm.envFunc.Element_getElementsByClassName = function Element_getElementsByClassName() {

        console.log(`Element_getElementsByClassName `, `!!!!!!!!!未完善!!!!!!!!!!!!  `);

        class_list.__proto__ = bodavm.memory.globalobj['HTMLCollection'].prototype
        return class_list

    }
    bodavm.envFunc.Element_append = function Element_append() {
        let child = arguments[0]
        console.log(`Element_append `, `child->${child}`);
        bobo$(this._boarg).append(child._boarg)
        // debugger

    }
    bodavm.envFunc.Element_id_get = function () {
        if (bodavm.config.isdebug) { debugger }
        let content = undefined
        if (this instanceof HTMLFormElement) {
            for (let i = 0; i < bodavm.memory.formlist.length; i++) {
                if (bodavm.memory.formlist[i] == this._boarg) {
                    for (let j = 0; j < bodavm.memory.formlist[i]['child'].length; j++) {
                        if (bodavm.memory.formlist[i]['child'][j]._boarg.name == 'id') {
                            content = bodavm.memory.formlist[i]['child'][j]
                        }
                    }
                }
            }
        }
        console.log("Element_id_get", `content ->${content}`, `r6检测点`)
        return content

    }
    bodavm.envFunc.Element_id_set = function Element_id_set() {
        // let value=arguments[0]

        if (bodavm.config.isdebug) { debugger }
        // debugger
        // bodavm.toolsFunc.setProtoAttr.call(this,'id',id)
        this._boarg['id'] = arguments[0]
        console.log(`Element_id_set `, ` id->${arguments[0]}`);
        return arguments[0]
    }
    bodavm.envFunc.Element_className_set = function () {
        // let className = arguments[0]
        debugger
        if (bodavm.config.isdebug) { debugger }
        console.log(`Element_className_set`, `!!!!!!!!!未完善!!!!!!!!!!!!`);
        bodavm.toolsFunc.setProtoAttr.call(this, 'className', className)
        return className

    }
    bodavm.envFunc.Element_attributes_get = function () {
        debugger
        console.log(`Element_attributes_get `, `!!!!!!!!!未完善!!!!!!!!!!!! `);

    }
    bodavm.envFunc.Element_scrollLeft_get = function Element_scrollLeft_get() {
        console.log(`Element_scrollLeft_get `, `${0}  `);
        if (bodavm.config.isdebug) { debugger };;

        return 0
    }
    bodavm.envFunc.Element_clientLeft_get = function Element_clientLeft_get() {
        console.log(`Element_clientLeft_get `, `${0}  `);
        if (bodavm.config.isdebug) { debugger };;

        return 0
    }

    bodavm.envFunc.Element_clientTop_get = function Element_clientTop_get() {
        console.log(`Element_clientTop_get `, `${0}  `);
        if (bodavm.config.isdebug) { debugger };;

        return 0
    }
    bodavm.envFunc.Element_scrollTop_get = function Element_scrollTop_get() {

        console.log(`Element_scrollTop_get `, `${0}  `);
        if (bodavm.config.isdebug) { debugger };;

        return 0
    }


    bodavm.envFunc.Element_remove = function Element_remove() {
        if (bodavm.config.isdebug) { debugger };;
        debugger
        let tagname = this._tagName
        let self = this

        if (class_) {
            //取到bodavm.memory.tag[0]._className[class_]列表

            for (let i = 0; i < bodavm.memory.tag[0]._className[class_].length; i++) {
                if (bodavm.memory.tag[0]._className[class_][i] == this) {
                    bodavm.memory.tag[0]._className[class_].splice(i, 1)
                }

            }
        }
        for (let i = 0; i < bodavm.memory.tag[0]._tagelements[tagname].length; i++) {
            if (bodavm.memory.tag[0]._tagelements[tagname][i] == this) {
                bodavm.memory.tag[0]._tagelements[tagname].splice(i, 1)
            }

        }



    }
    bodavm.envFunc.Element_clientHeight_get = function Element_clientHeight_get() {
        let clientHeight = 0
        console.log(`Element_clientHeight_get `, `${clientHeight}  `);
        if (bodavm.config.isdebug) { debugger };;

        return clientHeight
    }
    bodavm.envFunc.Element_removeAttribute = function Element_removeAttribute() {
        let attr = arguments[0]
        //无返回值
        if (bodavm.config.isdebug) { debugger };;
        this._boarg.removeAttribute(attr)
        console.log(`Element_removeAttribute `, `${attr}  `, `=============================!!!!!!!!!未完善!!!!!!!!!!!!`);
        //IE 返回 boolean 类型值，其他返回 undefined
    }
    bodavm.envFunc.Element_setAttribute = function Element_setAttribute() {
        // debugger
        if (bodavm.config.isdebug) { debugger };;
        //无返回值
        let name = arguments[0]
        let value = arguments[1]
        this._boarg.setAttribute(name, value)

        console.log(`Element_setAttribute `, `name->${name} `, `value->${value}  `);
        ;

    }
    bodavm.envFunc.Element_clientWidth_get = function Element_clientWidth_get() {
        if (bodavm.config.isdebug) { debugger }
        console.log(`Element_clientWidth_get  `, `${0}  `);

        return 0
    }
    bodavm.envFunc.Element_outerHTML_get = function Element_outerHTML_get() {

        // let outerHtml = this._elements[0].outerHTML
        let outhtml = bobo$(this._boarg).html()
        console.log(`Element_outerHTML_get==> `, `outhtml->${outhtml}`,);
        if (bodavm.config.isdebug) { debugger };;
        //腾讯qq邮箱hk

        return outhtml
    }

    bodavm.envFunc.Element_children_get = function Element_children_get() {
        if (bodavm.config.isdebug) { debugger };;

        let res = {}
        if (bodavm.config.isdebug) { debugger };
        let taglist = this._boarg.children
        for (let i = 0; i < taglist.length; i++) {
            res[i] = bodavm.toolsFunc.setProto(taglist[i].nodeName);
            res[i]._boarg = taglist[i]
        }
        res.__proto__ = bodavm.memory.globalobj['HTMLCollection'].prototype
        res._boarg = taglist
        console.log(`Element_children_get `, ` taglist->${taglist}`);
        return res

    }
    bodavm.envFunc.Element_getBoundingClientRect = function Element_getBoundingClientRect() {
        // debugger
        if (bodavm.config.isdebug) { debugger };;

        console.log(`Element_getBoundingClientRect`, '!!!!!!!!!未完善!!!!!!!!!!!!');
    }
    bodavm.envFunc.Element_innerHTML_get = function Element_innerHTML_get() {
        let res = this._boarg.innerHTML
        if (bodavm.config.isdebug) { debugger };;

        console.log(`Element_innerHTML_get `, `res->${res}`);
        return res

    }
    bodavm.envFunc.Element_innerHTML_set = function Element_innerHTML_set() {
        // debugger
        if (bodavm.config.isdebug) { debugger };;
        let html = arguments[0] + '';
        this._boarg.innerHTML = html
        console.log(`Element_innerHTML_set `, `html->${html}`);
        return html
    }
    bodavm.envFunc.Element_getAttribute = function () {
        let attr = arguments[0]
        // debugger
        if (bodavm.config.isdebug) { debugger; }
        let value = this._boarg.getAttribute(attr)
        console.log(`Element_getAttribute `, `attr->${attr} `, `value->${value}  `)

        return value

    }
    //// '[{"type":"node","tag":"meta","id":"","className":""},{"type":"node","tag":"meta","id":"","className":""},{"type":"node","tag":"head","id":"","className":""},{"type":"node","tag":"body","id":"","className":""}]'
    //ok
    bodavm.envFunc.Element_getElementsByTagName = function Element_getElementsByTagName() {
        if (bodavm.config.isdebug) { debugger; }
        // debugger
        let tagName = arguments[0].toLowerCase();

        let res = {}
        if (bodavm.config.isdebug) { debugger };
        let taglist = this._boarg.getElementsByTagName(tagName)

        for (let i = 0; i < taglist.length; i++) {
            res[i] = bodavm.toolsFunc.setProto(taglist[i].nodeName);
            res[i]._boarg = taglist[i]
        }
        // debugger
        res.__proto__ = bodavm.memory.globalobj['HTMLCollection'].prototype
        res._boarg = taglist
        console.log(`Element_getElementsByTagName `, `tagName->${tagName} `, ` taglist->${taglist}`);


        return res
    }

    //Navigator
    bodavm.envFunc.Navigator_clipboard_get = function Navigator_clipboard_get() { console.log("Navigator_clipboard_get", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Navigator_geolocation_get = function Navigator_geolocation_get() { console.log("Navigator_geolocation_get", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Navigator_hid_get = function Navigator_hid_get() { console.log("Navigator_hid_get", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Navigator_ink_get = function Navigator_ink_get() { console.log("Navigator_ink_get", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Navigator_keyboard_get = function Navigator_keyboard_get() { console.log("Navigator_keyboard_get", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Navigator_locks_get = function Navigator_locks_get() {
        let locks = {}
        locks.__proto__ = bodavm.memory.globalobj['LockManager'].prototype
        console.log("Navigator_locks_get ", `locks ->${locks}`)
        return locks
    }
    bodavm.envFunc.Navigator_managed_get = function Navigator_managed_get() { console.log("Navigator_managed_get", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Navigator_mediaCapabilities_get = function Navigator_mediaCapabilities_get() { console.log("Navigator_mediaCapabilities_get", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Navigator_mediaDevices_get = function Navigator_mediaDevices_get() { console.log("Navigator_mediaDevices_get", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Navigator_mediaSession_get = function Navigator_mediaSession_get() { console.log("Navigator_mediaSession_get", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Navigator_onLine_get = function Navigator_onLine_get() { console.log("Navigator_onLine_get", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Navigator_pdfViewerEnabled_get = function Navigator_pdfViewerEnabled_get() { console.log("Navigator_pdfViewerEnabled_get", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Navigator_permissions_get = function Navigator_permissions_get() {
        // debugger
        let permissions = {}
        permissions.__proto__ =bodavm.memory.globalobj[ 'Permissions'].prototype

        console.log("Navigator_permissions_get", `permissions->${permissions}`)
        return permissions
    }
    bodavm.envFunc.Navigator_presentation_get = function Navigator_presentation_get() { console.log("Navigator_presentation_get", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Navigator_scheduling_get = function Navigator_scheduling_get() { console.log("Navigator_scheduling_get", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Navigator_serial_get = function Navigator_serial_get() { console.log("Navigator_serial_get", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Navigator_serviceWorker_get = function Navigator_serviceWorker_get() { console.log("Navigator_serviceWorker_get", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Navigator_usb_get = function Navigator_usb_get() { console.log("Navigator_usb_get", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Navigator_userActivation_get = function Navigator_userActivation_get() { console.log("Navigator_userActivation_get", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Navigator_virtualKeyboard_get = function Navigator_virtualKeyboard_get() { console.log("Navigator_virtualKeyboard_get", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Navigator_wakeLock_get = function Navigator_wakeLock_get() { console.log("Navigator_wakeLock_get", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Navigator_webkitTemporaryStorage_get = function Navigator_webkitTemporaryStorage_get() { console.log("Navigator_webkitTemporaryStorage_get", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }


    bodavm.envFunc.Navigator_javaEnabled = function () {
        let javaEnabled = bodavm.memory.navigator['javaEnabled']
        console.log(`Navigator_javaEnabled `, `${javaEnabled}  `);
        return javaEnabled
    }
    bodavm.envFunc.Navigator_productSub_get = function () {
        if (bodavm.config.isdebug) { debugger; }
        let productSub = bodavm.memory.navigator["productSub"]
        console.log(`Navigator_productSub_get `, `${productSub}  `);
        return productSub
    }
    bodavm.envFunc.Navigator_userAgentData_get = function () {
        if (bodavm.config.isdebug) { debugger; }

        let userAgentData = bodavm.memory.navigator["userAgentData"]
        console.log(`Navigator_userAgentData_get `, `${userAgentData}  `);
        return userAgentData
    }

    bodavm.envFunc.Navigator_xr_get = function Navigator_xr_get() {
        if (bodavm.config.isdebug) { debugger; }
        let xr = bodavm.memory.navigator["xr"]
        console.log(`Navigator_xr_get `, `${xr}  `);
        return xr
    }

    bodavm.envFunc.Navigator_appCodeName_get = function Navigator_appCodeName_get() {
        let appCodeName = bodavm.memory.navigator["appCodeName"]
        console.log(`Navigator_appCodeName_get `, `${appCodeName}  `);
        if (bodavm.config.isdebug) { debugger };;

        return appCodeName
    }
    bodavm.envFunc.Navigator_appName_get = function Navigator_appName_get() {
        let appName = bodavm.memory.navigator["appName"]
        console.log(`Navigator_appName_get `, `${appName}  `);
        if (bodavm.config.isdebug) { debugger };;

        return appName
    }
    bodavm.envFunc.Navigator_vendor_get = function Navigator_vendor_get() {
        let vendor = bodavm.memory.navigator["vendor"]
        console.log(`Navigator_vendor_get `, `${vendor}  `);
        if (bodavm.config.isdebug) { debugger };;

        return vendor
    }
    bodavm.envFunc.Navigator_platform_get = function Navigator_platform_get() {
        let platform = bodavm.memory.navigator['platform']
        console.log(`Navigator_platform_get `, `${platform}  `);
        if (bodavm.config.isdebug) { debugger };;

        return platform;
    }


    bodavm.envFunc.Navigator_hardwareConcurrency_get = function Navigator_hardwareConcurrency_get() {
        console.log(`Navigator_hardwareConcurrency_get `, `${8}  `);
        return 8
    }
    bodavm.envFunc.Navigator_plugins_get = function Navigator_plugin_get() {
        let plugin = bodavm.memory.globalInit.pluginArray;
        console.log(`Navigator_plugins_get `, `plugin->${plugin}  `)
        return plugin
    }
    bodavm.envFunc.Navigator_mimeTypes_get = function Navigator_mimeTypes_get() {

        let mimeTypeArray = bodavm.memory.globalInit["mimeTypeArray"]
        console.log(`Navigator_mimeTypes_get `, `${mimeTypeArray}  `)
        return mimeTypeArray
    }
    bodavm.envFunc.Navigator_userAgent_get = function Navigator_userAgent_get() {
        let ua = bodavm.memory.navigator["userAgent"]
        console.log(`Navigator_userAgent_get `, `${ua}  `)
        // debugger
        return ua
    }
    bodavm.envFunc.Navigator_webkitPersistentStorage_get = function Navigator_webkitPersistentStorage_get() {
        let webkitPersistentStorage = bodavm.memory.navigator['webkitPersistentStorage']
        // DocumentFragment对象
        // debugger
        bodavm.memory.globalobj['DeprecatedStorageQuota'] = function DeprecatedStorageQuota() { }
        bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['DeprecatedStorageQuota'], "DeprecatedStorageQuota");

        bodavm.toolsFunc.defineProperty('DeprecatedStorageQuota', "queryUsageAndQuota", { configurable: true, enumerable: true, get: function DeprecatedStorageQuota() { return bodavm.toolsFunc.dispatch(this, DeprecatedStorageQuota.prototype, "DeprecatedStorageQuota", "queryUsageAndQuota_get  ", arguments) }, set: function DeprecatedStorageQuota() { return bodavm.toolsFunc.dispatch(this, DeprecatedStorageQuota.prototype, "DeprecatedStorageQuota", "queryUsageAndQuota_set", arguments) } },'prototype');
        bodavm.toolsFunc.defineProperty('DeprecatedStorageQuota', "requestQuota", { configurable: true, enumerable: true, get: function DeprecatedStorageQuota() { return bodavm.toolsFunc.dispatch(this, DeprecatedStorageQuota.prototype, "DeprecatedStorageQuota", "requestQuota_get  ", arguments) }, set: function requestQuota() { return bodavm.toolsFunc.dispatch(this, DeprecatedStorageQuota.prototype, "DeprecatedStorageQuota", "requestQuota_set", arguments) } },'prototype');

        Object.setPrototypeOf(webkitPersistentStorage, bodavm.memory.globalobj['DeprecatedStorageQuota'].prototype)
        delete DeprecatedStorageQuota
        console.log(`Navigator_webkitPersistentStorage_get `, `${webkitPersistentStorage}  `)
        if (bodavm.config.isdebug) { debugger };;

        return webkitPersistentStorage
    }
    bodavm.envFunc.Navigator_languages_get = function Navigator_languages_get() {
        let languages = bodavm.memory.navigator["languages"]
        console.log(`Navigator_languages_get `, `${languages}  `)
        return languages
    }
    bodavm.envFunc.Navigator_language_get = function Navigator_languages_get() {
        let language = bodavm.memory.navigator["language"]
        console.log(`Navigator_language_get `, `${language}  `)
        return language
    }

    bodavm.envFunc.Navigator_appVersion_get = function Navigator_appVersion_get() {
        let appVersion = bodavm.memory.navigator["appVersion"]
        console.log(`Navigator_appVersion_get `, `${appVersion}  `)
        return appVersion
    }
    bodavm.envFunc.Navigator_getBattery = function Navigator_getBattery() {
        let batteryManager = {};
        console.log(`Navigator_getBattery  `, 'settimeout 添加异步电池信息');
        batteryManager.__proto__ = bodavm.memory.globalobj['BatteryManager'].prototype
        // debugger
        // bodavm.toolsFunc.symbolProperty(batteryManager)
        let promise = new Promise((resolve, reject) => {
            resolve(batteryManager)
        })

        return promise
    }
    bodavm.envFunc.Navigator_webdriver_get = function Navigator_webdriver_get() {
        if (bodavm.config.isdebug) { debugger };;
        console.log(`Navigator_webdriver_get== `, `false  `);
        return false
    }
    bodavm.envFunc.Navigator_connection_get = function Navigator_connection_get() {
        if (bodavm.config.isdebug) { debugger };
        let connection = bodavm.memory.navigator['connection']
        console.log(`Navigator_connection_get `, `${connection}  `)
        Object.setPrototypeOf(connection, bodavm.memory.globalobj['NetworkInformation'].prototype)
        return connection
    }
    bodavm.envFunc.Navigator_cookieEnabled_get = function Navigator_cookieEnabled_get() {
        let cookieEnabled = bodavm.memory.navigator['cookieEnabled']
        console.log(`Navigator_cookieEnabled_get= `, `${cookieEnabled}  `)

        return cookieEnabled
    }


    bodavm.envFunc.MimeTypeArray_namedItem = function MimeTypeArray_namedItem() {
        let name = arguments[0];

        return this[name];
    }
    bodavm.envFunc.MimeTypeArray_item = function MimeTypeArray_item() {
        let index = arguments[0];

        return this[index];
    }
    bodavm.envFunc.Plugin_namedItem = function Plugin_namedItem() {
        let name = arguments[0];

        return this[name];
    }
    bodavm.envFunc.Plugin_item = function Plugin_item() {
        let index = arguments[0];

        return this[index];
    }
    bodavm.envFunc.PluginArray_namedItem = function PluginArray_namedItem() {
        let name = arguments[0];

        return this[name];
    }
    bodavm.envFunc.PluginArray_item = function PluginArray_item() {
        let index = arguments[0];

        return this[index];
    }
    bodavm.envFunc.Navigator_mimeTypes_get = function Navigator_mimeTypes_get() {
        return bodavm.memory.globalInit.mimeTypeArray;
    }
    bodavm.envFunc.MimeType_suffixes_get = function MimeType_suffixes_get() {
        return bodavm.toolsFunc.getProtoAttr.call(this, "suffixes");
    }
    bodavm.envFunc.MimeType_enabledPlugin_get = function MimeType_enabledPlugin_get() {
        return bodavm.toolsFunc.getProtoAttr.call(this, "enabledPlugin");
    }
    bodavm.envFunc.MimeType_description_get = function MimeType_description_get() {
        return bodavm.toolsFunc.getProtoAttr.call(this, "description");
    }
    bodavm.envFunc.Plugin_length_get = function Plugin_length_get() {
        return bodavm.toolsFunc.getProtoAttr.call(this, "length");
    }
    bodavm.envFunc.Plugin_filename_get = function Plugin_filename_get() {
        return bodavm.toolsFunc.getProtoAttr.call(this, "filename");
    }
    bodavm.envFunc.Plugin_description_get = function Plugin_description_get() {
        return bodavm.toolsFunc.getProtoAttr.call(this, "description");
    }
    bodavm.envFunc.Plugin_name_get = function Plugin_name_get() {
        return bodavm.toolsFunc.getProtoAttr.call(this, "name");
    }
    bodavm.envFunc.PluginArray_length_get = function PluginArray_length_get() {
        return bodavm.toolsFunc.getProtoAttr.call(this, "length");
    }
    bodavm.envFunc.MimeType_type_get = function MimeType_type_get() {
        return bodavm.toolsFunc.getProtoAttr.call(this, "type");
    }
    bodavm.envFunc.MimeTypeArray_length_get = function MimeTypeArray_length_get() {
        return bodavm.toolsFunc.getProtoAttr.call(this, "length");
    }

    //HTMLElement
    bodavm.envFunc.HTMLElement_accessKey_get = function HTMLElement_accessKey_get() { console.log("HTMLElement_accessKey_get", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.HTMLElement_autocapitalize_get = function HTMLElement_autocapitalize_get() { console.log("HTMLElement_autocapitalize_get", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.HTMLElement_autofocus_get = function HTMLElement_autofocus_get() { console.log("HTMLElement_autofocus_get", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.HTMLElement_contentEditable_get = function HTMLElement_contentEditable_get() { console.log("HTMLElement_contentEditable_get", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.HTMLElement_dataset_get = function HTMLElement_dataset_get() { console.log("HTMLElement_dataset_get", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.HTMLElement_dir_get = function HTMLElement_dir_get() { console.log("HTMLElement_dir_get", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.HTMLElement_draggable_get = function HTMLElement_draggable_get() { console.log("HTMLElement_draggable_get", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.HTMLElement_enterKeyHint_get = function HTMLElement_enterKeyHint_get() { console.log("HTMLElement_enterKeyHint_get", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.HTMLElement_hidden_get = function HTMLElement_hidden_get() { console.log("HTMLElement_hidden_get", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.HTMLElement_inputMode_get = function HTMLElement_inputMode_get() { console.log("HTMLElement_inputMode_get", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.HTMLElement_inert_get = function HTMLElement_inert_get() { console.log("HTMLElement_inert_get", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.HTMLElement_isContentEditable_get = function HTMLElement_isContentEditable_get() { console.log("HTMLElement_isContentEditable_get", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.HTMLElement_lang_get = function HTMLElement_lang_get() { console.log("HTMLElement_lang_get", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.HTMLElement_nonce_get = function HTMLElement_nonce_get() { console.log("HTMLElement_nonce_get", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.HTMLElement_offsetTop_get = function HTMLElement_offsetTop_get() { console.log("HTMLElement_offsetTop_get", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.HTMLElement_offsetParent_get = function HTMLElement_offsetParent_get() { console.log("HTMLElement_offsetParent_get", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.HTMLElement_offsetLeft_get = function HTMLElement_offsetLeft_get() { console.log("HTMLElement_offsetLeft_get", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.HTMLElement_onabort_get = function HTMLElement_onabort_get() { console.log("HTMLElement_onabort_get", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.HTMLElement_onanimationend_get = function HTMLElement_onanimationend_get() { console.log("HTMLElement_onanimationend_get", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.HTMLElement_onanimationiteration_get = function HTMLElement_onanimationiteration_get() { console.log("HTMLElement_onanimationiteration_get", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.HTMLElement_onanimationstart_get = function HTMLElement_onanimationstart_get() { console.log("HTMLElement_onanimationstart_get", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.HTMLElement_onauxclick_get = function HTMLElement_onauxclick_get() { console.log("HTMLElement_onauxclick_get", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.HTMLElement_onbeforematch_get = function HTMLElement_onbeforematch_get() { console.log("HTMLElement_onbeforematch_get", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.HTMLElement_onbeforexrselect_get = function HTMLElement_onbeforexrselect_get() { console.log("HTMLElement_onbeforexrselect_get", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.HTMLElement_onblur_get = function HTMLElement_onblur_get() { console.log("HTMLElement_onblur_get", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.HTMLElement_oncancel_get = function HTMLElement_oncancel_get() { console.log("HTMLElement_oncancel_get", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.HTMLElement_oncanplay_get = function HTMLElement_oncanplay_get() { console.log("HTMLElement_oncanplay_get", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.HTMLElement_oncanplaythrough_get = function HTMLElement_oncanplaythrough_get() { console.log("HTMLElement_oncanplaythrough_get", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.HTMLElement_onchange_get = function HTMLElement_onchange_get() { console.log("HTMLElement_onchange_get", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.HTMLElement_onclick_get = function HTMLElement_onclick_get() { console.log("HTMLElement_onclick_get", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.HTMLElement_onclose_get = function HTMLElement_onclose_get() { console.log("HTMLElement_onclose_get", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.HTMLElement_oncontextlost_get = function HTMLElement_oncontextlost_get() { console.log("HTMLElement_oncontextlost_get", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.HTMLElement_oncontextmenu_get = function HTMLElement_oncontextmenu_get() { console.log("HTMLElement_oncontextmenu_get", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.HTMLElement_oncontextrestored_get = function HTMLElement_oncontextrestored_get() { console.log("HTMLElement_oncontextrestored_get", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.HTMLElement_oncopy_get = function HTMLElement_oncopy_get() { console.log("HTMLElement_oncopy_get", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.HTMLElement_oncuechange_get = function HTMLElement_oncuechange_get() { console.log("HTMLElement_oncuechange_get", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.HTMLElement_ondblclick_get = function HTMLElement_ondblclick_get() { console.log("HTMLElement_ondblclick_get", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.HTMLElement_oncut_get = function HTMLElement_oncut_get() { console.log("HTMLElement_oncut_get", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.HTMLElement_ondrag_get = function HTMLElement_ondrag_get() { console.log("HTMLElement_ondrag_get", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.HTMLElement_ondragleave_get = function HTMLElement_ondragleave_get() { console.log("HTMLElement_ondragleave_get", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.HTMLElement_ondragstart_get = function HTMLElement_ondragstart_get() { console.log("HTMLElement_ondragstart_get", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.HTMLElement_ondragenter_get = function HTMLElement_ondragenter_get() { console.log("HTMLElement_ondragenter_get", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.HTMLElement_ondragend_get = function HTMLElement_ondragend_get() { console.log("HTMLElement_ondragend_get", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.HTMLElement_ondragover_get = function HTMLElement_ondragover_get() { console.log("HTMLElement_ondragover_get", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.HTMLElement_ondrop_get = function HTMLElement_ondrop_get() { console.log("HTMLElement_ondrop_get", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.HTMLElement_ondurationchange_get = function HTMLElement_ondurationchange_get() { console.log("HTMLElement_ondurationchange_get", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.HTMLElement_onemptied_get = function HTMLElement_onemptied_get() { console.log("HTMLElement_onemptied_get", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.HTMLElement_onended_get = function HTMLElement_onended_get() { console.log("HTMLElement_onended_get", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.HTMLElement_onerror_get = function HTMLElement_onerror_get() { console.log("HTMLElement_onerror_get", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.HTMLElement_onfocus_get = function HTMLElement_onfocus_get() { console.log("HTMLElement_onfocus_get", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.HTMLElement_onformdata_get = function HTMLElement_onformdata_get() { console.log("HTMLElement_onformdata_get", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.HTMLElement_ongotpointercapture_get = function HTMLElement_ongotpointercapture_get() { console.log("HTMLElement_ongotpointercapture_get", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.HTMLElement_oninput_get = function HTMLElement_oninput_get() { console.log("HTMLElement_oninput_get", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.HTMLElement_onkeydown_get = function HTMLElement_onkeydown_get() { console.log("HTMLElement_onkeydown_get", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.HTMLElement_onkeypress_get = function HTMLElement_onkeypress_get() { console.log("HTMLElement_onkeypress_get", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.HTMLElement_onkeyup_get = function HTMLElement_onkeyup_get() { console.log("HTMLElement_onkeyup_get", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.HTMLElement_oninvalid_get = function HTMLElement_oninvalid_get() { console.log("HTMLElement_oninvalid_get", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.HTMLElement_onload_get = function HTMLElement_onload_get() { console.log("HTMLElement_onload_get", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.HTMLElement_onloadedmetadata_get = function HTMLElement_onloadedmetadata_get() { console.log("HTMLElement_onloadedmetadata_get", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.HTMLElement_onlostpointercapture_get = function HTMLElement_onlostpointercapture_get() { console.log("HTMLElement_onlostpointercapture_get", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.HTMLElement_onloadeddata_get = function HTMLElement_onloadeddata_get() { console.log("HTMLElement_onloadeddata_get", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.HTMLElement_onloadstart_get = function HTMLElement_onloadstart_get() { console.log("HTMLElement_onloadstart_get", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.HTMLElement_onmousedown_get = function HTMLElement_onmousedown_get() { console.log("HTMLElement_onmousedown_get", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.HTMLElement_onmouseleave_get = function HTMLElement_onmouseleave_get() { console.log("HTMLElement_onmouseleave_get", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.HTMLElement_onmousemove_get = function HTMLElement_onmousemove_get() { console.log("HTMLElement_onmousemove_get", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.HTMLElement_onmouseout_get = function HTMLElement_onmouseout_get() { console.log("HTMLElement_onmouseout_get", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.HTMLElement_onmouseup_get = function HTMLElement_onmouseup_get() { console.log("HTMLElement_onmouseup_get", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.HTMLElement_onmouseover_get = function HTMLElement_onmouseover_get() { console.log("HTMLElement_onmouseover_get", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.HTMLElement_onmousewheel_get = function HTMLElement_onmousewheel_get() { console.log("HTMLElement_onmousewheel_get", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.HTMLElement_onpaste_get = function HTMLElement_onpaste_get() { console.log("HTMLElement_onpaste_get", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.HTMLElement_onpause_get = function HTMLElement_onpause_get() { console.log("HTMLElement_onpause_get", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.HTMLElement_onplay_get = function HTMLElement_onplay_get() { console.log("HTMLElement_onplay_get", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.HTMLElement_onplaying_get = function HTMLElement_onplaying_get() { console.log("HTMLElement_onplaying_get", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.HTMLElement_onpointercancel_get = function HTMLElement_onpointercancel_get() { console.log("HTMLElement_onpointercancel_get", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.HTMLElement_onpointerdown_get = function HTMLElement_onpointerdown_get() { console.log("HTMLElement_onpointerdown_get", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.HTMLElement_onpointerleave_get = function HTMLElement_onpointerleave_get() { console.log("HTMLElement_onpointerleave_get", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.HTMLElement_onpointermove_get = function HTMLElement_onpointermove_get() { console.log("HTMLElement_onpointermove_get", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.HTMLElement_onpointerover_get = function HTMLElement_onpointerover_get() { console.log("HTMLElement_onpointerover_get", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.HTMLElement_onpointerout_get = function HTMLElement_onpointerout_get() { console.log("HTMLElement_onpointerout_get", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.HTMLElement_onpointerenter_get = function HTMLElement_onpointerenter_get() { console.log("HTMLElement_onpointerenter_get", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.HTMLElement_onpointerrawupdate_get = function HTMLElement_onpointerrawupdate_get() { console.log("HTMLElement_onpointerrawupdate_get", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.HTMLElement_onpointerup_get = function HTMLElement_onpointerup_get() { console.log("HTMLElement_onpointerup_get", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.HTMLElement_onprogress_get = function HTMLElement_onprogress_get() { console.log("HTMLElement_onprogress_get", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.HTMLElement_onratechange_get = function HTMLElement_onratechange_get() { console.log("HTMLElement_onratechange_get", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.HTMLElement_onreset_get = function HTMLElement_onreset_get() { console.log("HTMLElement_onreset_get", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.HTMLElement_onscroll_get = function HTMLElement_onscroll_get() { console.log("HTMLElement_onscroll_get", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.HTMLElement_onsecuritypolicyviolation_get = function HTMLElement_onsecuritypolicyviolation_get() { console.log("HTMLElement_onsecuritypolicyviolation_get", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.HTMLElement_onseeked_get = function HTMLElement_onseeked_get() { console.log("HTMLElement_onseeked_get", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.HTMLElement_onseeking_get = function HTMLElement_onseeking_get() { console.log("HTMLElement_onseeking_get", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.HTMLElement_onselect_get = function HTMLElement_onselect_get() { console.log("HTMLElement_onselect_get", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.HTMLElement_onselectionchange_get = function HTMLElement_onselectionchange_get() { console.log("HTMLElement_onselectionchange_get", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.HTMLElement_onselectstart_get = function HTMLElement_onselectstart_get() { console.log("HTMLElement_onselectstart_get", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.HTMLElement_onslotchange_get = function HTMLElement_onslotchange_get() { console.log("HTMLElement_onslotchange_get", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.HTMLElement_onstalled_get = function HTMLElement_onstalled_get() { console.log("HTMLElement_onstalled_get", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.HTMLElement_onsuspend_get = function HTMLElement_onsuspend_get() { console.log("HTMLElement_onsuspend_get", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.HTMLElement_ontimeupdate_get = function HTMLElement_ontimeupdate_get() { console.log("HTMLElement_ontimeupdate_get", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.HTMLElement_onsubmit_get = function HTMLElement_onsubmit_get() { console.log("HTMLElement_onsubmit_get", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.HTMLElement_ontoggle_get = function HTMLElement_ontoggle_get() { console.log("HTMLElement_ontoggle_get", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.HTMLElement_ontransitioncancel_get = function HTMLElement_ontransitioncancel_get() { console.log("HTMLElement_ontransitioncancel_get", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.HTMLElement_ontransitionrun_get = function HTMLElement_ontransitionrun_get() { console.log("HTMLElement_ontransitionrun_get", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.HTMLElement_ontransitionstart_get = function HTMLElement_ontransitionstart_get() { console.log("HTMLElement_ontransitionstart_get", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.HTMLElement_ontransitionend_get = function HTMLElement_ontransitionend_get() { console.log("HTMLElement_ontransitionend_get", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.HTMLElement_onvolumechange_get = function HTMLElement_onvolumechange_get() { console.log("HTMLElement_onvolumechange_get", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.HTMLElement_onwaiting_get = function HTMLElement_onwaiting_get() { console.log("HTMLElement_onwaiting_get", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.HTMLElement_onwebkitanimationend_get = function HTMLElement_onwebkitanimationend_get() { console.log("HTMLElement_onwebkitanimationend_get", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.HTMLElement_onwebkitanimationiteration_get = function HTMLElement_onwebkitanimationiteration_get() { console.log("HTMLElement_onwebkitanimationiteration_get", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.HTMLElement_onwebkitanimationstart_get = function HTMLElement_onwebkitanimationstart_get() { console.log("HTMLElement_onwebkitanimationstart_get", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.HTMLElement_onwebkittransitionend_get = function HTMLElement_onwebkittransitionend_get() { console.log("HTMLElement_onwebkittransitionend_get", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.HTMLElement_onwheel_get = function HTMLElement_onwheel_get() { console.log("HTMLElement_onwheel_get", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.HTMLElement_outerText_get = function HTMLElement_outerText_get() { console.log("HTMLElement_outerText_get", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.HTMLElement_spellcheck_get = function HTMLElement_spellcheck_get() { console.log("HTMLElement_spellcheck_get", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.HTMLElement_tabIndex_get = function HTMLElement_tabIndex_get() { console.log("HTMLElement_tabIndex_get", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.HTMLElement_title_get = function HTMLElement_title_get() { console.log("HTMLElement_title_get", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.HTMLElement_translate_get = function HTMLElement_translate_get() { console.log("HTMLElement_translate_get", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.HTMLElement_virtualKeyboardPolicy_get = function HTMLElement_virtualKeyboardPolicy_get() { console.log("HTMLElement_virtualKeyboardPolicy_get", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }


    bodavm.envFunc.HTMLElement_innerText_set = function HTMLElement_innerText_set() {
        let value = arguments[0]

        console.log(`HTMLElement_innerText_set `, ` value->${value}`);
        bobo$(this._boarg).text(value)
        return value
    }
    bodavm.envFunc.HTMLElement_innerText_get = function HTMLElement_innerText_get() {
        // let value=arguments[0]
        // debugger
        let inntext = undefined
        if (this instanceof HTMLFormElement) {
            for (let i = 0; i < bodavm.memory.formlist.length; i++) {
                if (bodavm.memory.formlist[i] == this._boarg) {
                    for (let j = 0; j < bodavm.memory.formlist[i]['child'].length; j++) {
                        if (bodavm.memory.formlist[i]['child'][j]._boarg.id == 'innerText') {
                            inntext = bodavm.memory.formlist[i]['child'][j]
                            break
                        }
                    }
                }
            }
        }
        console.log(`HTMLElement_innerText_get `, ` value->${inntext}`);

        return inntext
    }
    bodavm.envFunc.HTMLElement_offsetHeight_get = function HTMLElement_offsetHeight_get() {

        if (bodavm.config.isdebug) { debugger }
        let fontFamily = this._boarg.style.fontFamily
        // debugger
        // bodavm.bbbbb.push(fontFamily)

        if (bodavm.memory.globalInit.fontList.indexOf(fontFamily) !== -1) {// 能够识别的字体
            let offsetHeight = bodavm.memory.fontsize[fontFamily][1]
            console.log(`HTMLElement_offsetHeight_get `, ` fontFamily->${fontFamily}->offsetHeight->${offsetHeight} 可识别的字体  `);
            return offsetHeight;
        } else { // 无法识别的字体
            console.log(`HTMLElement_offsetHeight_get `, `fontFamily->${fontFamily}    151 无法识别的字体  `);
            return 151;
        }

    }
    bodavm.envFunc.HTMLElement_offsetWidth_get = function HTMLElement_offsetWidth_get() {
        ;
        if (bodavm.config.isdebug) { debugger }
        // debugger     
        let fontFamily = this._boarg.style.fontFamily
        // bodavm.bbbbb.push(fontFamily)
        if (bodavm.memory.globalInit.fontList.indexOf(fontFamily) !== -1) {// 能够识别的字体
            let offsetWidth = bodavm.memory.fontsize[fontFamily][0]
            console.log(`HTMLElement_offsetWidth_get `, ` fontFamily->${fontFamily}->offsetWidth->${offsetWidth} 可识别的字体  `);
            return offsetWidth;
        } else { // 无法识别的字体
            console.log(`HTMLElement_offsetWidth_get  `, `fontFamily->${fontFamily}   1327 无法识别的字体  `);
            return 1327;
        }

    }
    bodavm.envFunc.CSSStyleDeclaration_fontFamily_get = function CSSStyleDeclaration_fontFamily_get() {
        if (bodavm.config.isdebug) { debugger }
        let font = this._boarg.fontFamily
        console.log(`CSSStyleDeclaration_fontFamily_get `, `font ->${font} `);

        return font
    }
    bodavm.envFunc.CSSStyleDeclaration_fontFamily_set = function CSSStyleDeclaration_fontFamily_set() {
        if (bodavm.config.isdebug) { debugger }
        let arg = arguments[0]
        console.log(`CSSStyleDeclaration_fontFamily_set `, `${arg}  `);
        this._boarg.fontFamily = arg
        return arg
    }
    bodavm.envFunc.HTMLElement_style_get = function HTMLElement_style_get() {
        if (bodavm.config.isdebug) { debugger }

        let style = {}
        // debugger
        let oo = this._boarg.style

        style._boarg = oo
        // bodavm.toolsFunc.symbolProperty(style)
        style.__proto__ = bodavm.memory.globalobj['CSSStyleDeclaration'].prototype
        console.log(`HTMLElement_style_get `, `style->${style}`);

        bodavm.toolsFunc.windowdefineProperty(style, "0", { configurable: true, enumerable: true, writable: false, value: "font-family" });
        bodavm.toolsFunc.windowdefineProperty(style, "1", { configurable: true, enumerable: true, writable: false, value: "font-size" });
        bodavm.toolsFunc.windowdefineProperty(style, "accentColor", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "additiveSymbols", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "alignContent", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "alignItems", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "alignSelf", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "alignmentBaseline", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "all", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "animation", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "animationDelay", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "animationDirection", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "animationDuration", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "animationFillMode", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "animationIterationCount", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "animationName", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "animationPlayState", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "animationTimingFunction", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "appRegion", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "appearance", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "ascentOverride", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "aspectRatio", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "backdropFilter", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "backfaceVisibility", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "background", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "backgroundAttachment", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "backgroundBlendMode", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "backgroundClip", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "backgroundColor", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "backgroundImage", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "backgroundOrigin", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "backgroundPosition", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "backgroundPositionX", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "backgroundPositionY", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "backgroundRepeat", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "backgroundRepeatX", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "backgroundRepeatY", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "backgroundSize", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "basePalette", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "baselineShift", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "blockSize", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "border", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "borderBlock", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "borderBlockColor", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "borderBlockEnd", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "borderBlockEndColor", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "borderBlockEndStyle", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "borderBlockEndWidth", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "borderBlockStart", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "borderBlockStartColor", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "borderBlockStartStyle", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "borderBlockStartWidth", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "borderBlockStyle", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "borderBlockWidth", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "borderBottom", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "borderBottomColor", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "borderBottomLeftRadius", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "borderBottomRightRadius", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "borderBottomStyle", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "borderBottomWidth", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "borderCollapse", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "borderColor", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "borderEndEndRadius", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "borderEndStartRadius", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "borderImage", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "borderImageOutset", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "borderImageRepeat", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "borderImageSlice", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "borderImageSource", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "borderImageWidth", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "borderInline", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "borderInlineColor", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "borderInlineEnd", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "borderInlineEndColor", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "borderInlineEndStyle", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "borderInlineEndWidth", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "borderInlineStart", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "borderInlineStartColor", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "borderInlineStartStyle", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "borderInlineStartWidth", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "borderInlineStyle", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "borderInlineWidth", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "borderLeft", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "borderLeftColor", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "borderLeftStyle", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "borderLeftWidth", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "borderRadius", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "borderRight", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "borderRightColor", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "borderRightStyle", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "borderRightWidth", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "borderSpacing", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "borderStartEndRadius", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "borderStartStartRadius", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "borderStyle", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "borderTop", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "borderTopColor", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "borderTopLeftRadius", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "borderTopRightRadius", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "borderTopStyle", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "borderTopWidth", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "borderWidth", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "bottom", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "boxShadow", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "boxSizing", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "breakAfter", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "breakBefore", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "breakInside", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "bufferedRendering", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "captionSide", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "caretColor", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "clear", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "clip", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "clipPath", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "clipRule", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "color", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "colorInterpolation", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "colorInterpolationFilters", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "colorRendering", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "colorScheme", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "columnCount", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "columnFill", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "columnGap", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "columnRule", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "columnRuleColor", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "columnRuleStyle", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "columnRuleWidth", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "columnSpan", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "columnWidth", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "columns", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "contain", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "containIntrinsicBlockSize", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "containIntrinsicHeight", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "containIntrinsicInlineSize", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "containIntrinsicSize", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "containIntrinsicWidth", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "content", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "contentVisibility", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "counterIncrement", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "counterReset", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "counterSet", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "cursor", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "cx", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "cy", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "d", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "descentOverride", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "direction", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "display", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "dominantBaseline", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "emptyCells", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "fallback", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "fill", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "fillOpacity", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "fillRule", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "filter", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "flex", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "flexBasis", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "flexDirection", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "flexFlow", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "flexGrow", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "flexShrink", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "flexWrap", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "float", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "floodColor", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "floodOpacity", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "font", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "fontDisplay", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "fontFamily", { configurable: true, enumerable: true, get: function () { return bodavm.toolsFunc.dispatch(this,bodavm.memory.globalobj['CSSStyleDeclaration'].prototype, "CSSStyleDeclaration", "fontFamily_get  ", arguments) }, set: function () { return bodavm.toolsFunc.dispatch(this,bodavm.memory.globalobj[ 'CSSStyleDeclaration'].prototype, "CSSStyleDeclaration", "fontFamily_set", arguments) } });
        bodavm.toolsFunc.windowdefineProperty(style, "fontFeatureSettings", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "fontKerning", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "fontOpticalSizing", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "fontPalette", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "fontSize", { configurable: true, enumerable: true, writable: true, value: "160px" });
        bodavm.toolsFunc.windowdefineProperty(style, "fontStretch", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "fontStyle", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "fontSynthesis", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "fontSynthesisSmallCaps", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "fontSynthesisStyle", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "fontSynthesisWeight", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "fontVariant", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "fontVariantCaps", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "fontVariantEastAsian", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "fontVariantLigatures", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "fontVariantNumeric", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "fontVariationSettings", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "fontWeight", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "forcedColorAdjust", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "gap", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "grid", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "gridArea", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "gridAutoColumns", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "gridAutoFlow", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "gridAutoRows", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "gridColumn", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "gridColumnEnd", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "gridColumnGap", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "gridColumnStart", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "gridGap", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "gridRow", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "gridRowEnd", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "gridRowGap", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "gridRowStart", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "gridTemplate", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "gridTemplateAreas", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "gridTemplateColumns", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "gridTemplateRows", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "height", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "hyphens", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "imageOrientation", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "imageRendering", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "inherits", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "initialValue", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "inlineSize", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "inset", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "insetBlock", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "insetBlockEnd", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "insetBlockStart", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "insetInline", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "insetInlineEnd", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "insetInlineStart", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "isolation", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "justifyContent", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "justifyItems", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "justifySelf", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "left", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "letterSpacing", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "lightingColor", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "lineBreak", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "lineGapOverride", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "lineHeight", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "listStyle", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "listStyleImage", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "listStylePosition", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "listStyleType", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "margin", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "marginBlock", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "marginBlockEnd", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "marginBlockStart", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "marginBottom", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "marginInline", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "marginInlineEnd", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "marginInlineStart", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "marginLeft", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "marginRight", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "marginTop", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "marker", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "markerEnd", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "markerMid", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "markerStart", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "mask", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "maskType", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "maxBlockSize", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "maxHeight", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "maxInlineSize", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "maxWidth", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "maxZoom", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "minBlockSize", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "minHeight", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "minInlineSize", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "minWidth", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "minZoom", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "mixBlendMode", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "negative", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "objectFit", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "objectPosition", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "offset", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "offsetDistance", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "offsetPath", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "offsetRotate", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "opacity", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "order", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "orientation", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "orphans", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "outline", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "outlineColor", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "outlineOffset", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "outlineStyle", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "outlineWidth", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "overflow", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "overflowAnchor", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "overflowClipMargin", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "overflowWrap", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "overflowX", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "overflowY", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "overrideColors", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "overscrollBehavior", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "overscrollBehaviorBlock", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "overscrollBehaviorInline", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "overscrollBehaviorX", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "overscrollBehaviorY", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "pad", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "padding", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "paddingBlock", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "paddingBlockEnd", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "paddingBlockStart", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "paddingBottom", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "paddingInline", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "paddingInlineEnd", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "paddingInlineStart", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "paddingLeft", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "paddingRight", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "paddingTop", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "page", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "pageBreakAfter", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "pageBreakBefore", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "pageBreakInside", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "pageOrientation", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "paintOrder", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "perspective", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "perspectiveOrigin", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "placeContent", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "placeItems", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "placeSelf", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "pointerEvents", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "position", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "prefix", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "quotes", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "r", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "range", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "resize", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "right", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "rowGap", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "rubyPosition", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "rx", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "ry", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "scrollBehavior", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "scrollMargin", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "scrollMarginBlock", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "scrollMarginBlockEnd", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "scrollMarginBlockStart", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "scrollMarginBottom", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "scrollMarginInline", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "scrollMarginInlineEnd", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "scrollMarginInlineStart", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "scrollMarginLeft", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "scrollMarginRight", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "scrollMarginTop", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "scrollPadding", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "scrollPaddingBlock", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "scrollPaddingBlockEnd", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "scrollPaddingBlockStart", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "scrollPaddingBottom", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "scrollPaddingInline", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "scrollPaddingInlineEnd", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "scrollPaddingInlineStart", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "scrollPaddingLeft", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "scrollPaddingRight", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "scrollPaddingTop", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "scrollSnapAlign", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "scrollSnapStop", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "scrollSnapType", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "scrollbarGutter", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "shapeImageThreshold", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "shapeMargin", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "shapeOutside", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "shapeRendering", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "size", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "sizeAdjust", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "speak", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "speakAs", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "src", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "stopColor", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "stopOpacity", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "stroke", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "strokeDasharray", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "strokeDashoffset", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "strokeLinecap", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "strokeLinejoin", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "strokeMiterlimit", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "strokeOpacity", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "strokeWidth", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "suffix", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "symbols", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "syntax", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "system", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "tabSize", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "tableLayout", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "textAlign", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "textAlignLast", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "textAnchor", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "textCombineUpright", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "textDecoration", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "textDecorationColor", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "textDecorationLine", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "textDecorationSkipInk", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "textDecorationStyle", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "textDecorationThickness", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "textEmphasis", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "textEmphasisColor", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "textEmphasisPosition", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "textEmphasisStyle", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "textIndent", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "textOrientation", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "textOverflow", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "textRendering", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "textShadow", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "textSizeAdjust", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "textTransform", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "textUnderlineOffset", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "textUnderlinePosition", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "top", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "touchAction", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "transform", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "transformBox", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "transformOrigin", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "transformStyle", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "transition", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "transitionDelay", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "transitionDuration", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "transitionProperty", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "transitionTimingFunction", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "unicodeBidi", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "unicodeRange", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "userSelect", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "userZoom", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "vectorEffect", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "verticalAlign", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "visibility", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "webkitAlignContent", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "webkitAlignItems", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "webkitAlignSelf", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "webkitAnimation", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "webkitAnimationDelay", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "webkitAnimationDirection", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "webkitAnimationDuration", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "webkitAnimationFillMode", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "webkitAnimationIterationCount", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "webkitAnimationName", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "webkitAnimationPlayState", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "webkitAnimationTimingFunction", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "webkitAppRegion", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "webkitAppearance", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "webkitBackfaceVisibility", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "webkitBackgroundClip", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "webkitBackgroundOrigin", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "webkitBackgroundSize", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "webkitBorderAfter", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "webkitBorderAfterColor", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "webkitBorderAfterStyle", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "webkitBorderAfterWidth", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "webkitBorderBefore", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "webkitBorderBeforeColor", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "webkitBorderBeforeStyle", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "webkitBorderBeforeWidth", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "webkitBorderBottomLeftRadius", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "webkitBorderBottomRightRadius", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "webkitBorderEnd", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "webkitBorderEndColor", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "webkitBorderEndStyle", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "webkitBorderEndWidth", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "webkitBorderHorizontalSpacing", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "webkitBorderImage", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "webkitBorderRadius", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "webkitBorderStart", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "webkitBorderStartColor", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "webkitBorderStartStyle", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "webkitBorderStartWidth", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "webkitBorderTopLeftRadius", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "webkitBorderTopRightRadius", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "webkitBorderVerticalSpacing", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "webkitBoxAlign", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "webkitBoxDecorationBreak", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "webkitBoxDirection", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "webkitBoxFlex", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "webkitBoxOrdinalGroup", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "webkitBoxOrient", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "webkitBoxPack", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "webkitBoxReflect", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "webkitBoxShadow", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "webkitBoxSizing", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "webkitClipPath", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "webkitColumnBreakAfter", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "webkitColumnBreakBefore", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "webkitColumnBreakInside", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "webkitColumnCount", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "webkitColumnGap", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "webkitColumnRule", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "webkitColumnRuleColor", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "webkitColumnRuleStyle", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "webkitColumnRuleWidth", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "webkitColumnSpan", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "webkitColumnWidth", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "webkitColumns", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "webkitFilter", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "webkitFlex", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "webkitFlexBasis", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "webkitFlexDirection", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "webkitFlexFlow", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "webkitFlexGrow", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "webkitFlexShrink", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "webkitFlexWrap", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "webkitFontFeatureSettings", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "webkitFontSmoothing", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "webkitHighlight", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "webkitHyphenateCharacter", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "webkitJustifyContent", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "webkitLineBreak", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "webkitLineClamp", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "webkitLocale", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "webkitLogicalHeight", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "webkitLogicalWidth", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "webkitMarginAfter", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "webkitMarginBefore", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "webkitMarginEnd", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "webkitMarginStart", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "webkitMask", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "webkitMaskBoxImage", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "webkitMaskBoxImageOutset", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "webkitMaskBoxImageRepeat", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "webkitMaskBoxImageSlice", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "webkitMaskBoxImageSource", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "webkitMaskBoxImageWidth", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "webkitMaskClip", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "webkitMaskComposite", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "webkitMaskImage", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "webkitMaskOrigin", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "webkitMaskPosition", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "webkitMaskPositionX", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "webkitMaskPositionY", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "webkitMaskRepeat", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "webkitMaskRepeatX", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "webkitMaskRepeatY", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "webkitMaskSize", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "webkitMaxLogicalHeight", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "webkitMaxLogicalWidth", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "webkitMinLogicalHeight", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "webkitMinLogicalWidth", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "webkitOpacity", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "webkitOrder", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "webkitPaddingAfter", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "webkitPaddingBefore", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "webkitPaddingEnd", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "webkitPaddingStart", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "webkitPerspective", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "webkitPerspectiveOrigin", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "webkitPerspectiveOriginX", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "webkitPerspectiveOriginY", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "webkitPrintColorAdjust", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "webkitRtlOrdering", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "webkitRubyPosition", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "webkitShapeImageThreshold", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "webkitShapeMargin", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "webkitShapeOutside", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "webkitTapHighlightColor", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "webkitTextCombine", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "webkitTextDecorationsInEffect", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "webkitTextEmphasis", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "webkitTextEmphasisColor", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "webkitTextEmphasisPosition", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "webkitTextEmphasisStyle", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "webkitTextFillColor", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "webkitTextOrientation", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "webkitTextSecurity", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "webkitTextSizeAdjust", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "webkitTextStroke", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "webkitTextStrokeColor", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "webkitTextStrokeWidth", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "webkitTransform", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "webkitTransformOrigin", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "webkitTransformOriginX", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "webkitTransformOriginY", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "webkitTransformOriginZ", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "webkitTransformStyle", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "webkitTransition", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "webkitTransitionDelay", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "webkitTransitionDuration", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "webkitTransitionProperty", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "webkitTransitionTimingFunction", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "webkitUserDrag", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "webkitUserModify", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "webkitUserSelect", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "webkitWritingMode", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "whiteSpace", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "widows", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "width", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "willChange", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "wordBreak", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "wordSpacing", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "wordWrap", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "writingMode", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "x", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "y", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "zIndex", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.windowdefineProperty(style, "zoom", { configurable: true, enumerable: true, writable: true, value: "" });
        return style
    }

    bodavm.envFunc.HTMLElement_style_set = function HTMLElement_style_set() {
        ;
        // this._elements?this._elements[0]["attributes"]["style"]:this.attributes["style"]
        let arg0 = arguments[0]
        // let style = {}
        debugger
        if (bodavm.config.isdebug) { debugger }
        this._attrs['style'] = arg0
        console.log(`HTMLElement_style_set  `, `${style}  `);
        return arg0
    }
    bodavm.envFunc.HTMLElement_onmouseenter_get = function HTMLElement_onmouseenter_get() {
        //鼠标移动事件
        if (bodavm.config.isdebug) { debugger }
        console.log(`HTMLElement_onmouseenter_get `,);
    }

    bodavm.envFunc.HTMLElement_onresize_get = function HTMLElement_onresize_get() {
        if (bodavm.config.isdebug) { debugger }
        console.log(`HTMLElement_onresize_get `, null);
        return null
    }
    bodavm.envFunc.HTMLElement_onload_set = function HTMLElement_onload_set() {
        if (bodavm.config.isdebug) { debugger }

        let func = arguments[0]
        console.log(`HTMLElement_onload_set `,);
        bodavm.memory.asyncEvent['HTMLElement']['onload'].push(func)

    }
    bodavm.envFunc.HTMLElement_onerror_set = function HTMLElement_onerror_set() {
        if (bodavm.config.isdebug) { debugger }
        console.log(`HTMLElement_onerror_set !!!!!!!!!未完善!!!!!!!!!!!!`,);


    }
    //HTMLCollection
    bodavm.envFunc.HTMLCollection_item = function HTMLCollection_item() {
        if (bodavm.config.isdebug) { debugger }
        console.log(`HTMLCollection_item !!!!!!!!!未完善!!!!!!!!!!!!`,);

    }
    bodavm.envFunc.HTMLCollection_length_get = function HTMLCollection_length_get() {
        if (bodavm.config.isdebug) { debugger }
        // debugger
        if (bodavm.config.isrs && this[0] instanceof bodavm.memory.globalobj['HTMLScriptElement']) {
            console.log(`HTMLCollection_length_get `, `length:${2},  rs检测点`);
            return 2
        }
        let length_ = this._boarg.length
        console.log(`HTMLCollection_length_get `, `length:${length_}`);
        return length_
    }


    //XMLHttpRequest
    bodavm.envFunc.XMLHttpRequest_onreadystatechange_set = function () {
        let readyState = arguments[0];
        if (bodavm.config.isdebug) { debugger };
        this._boarg.myonreadystatechange = readyState
        console.log(`XMLHttpRequest_onreadystatechange_set `, `readyState->${readyState}  `);
        return readyState
    }
    bodavm.envFunc.XMLHttpRequest_onreadystatechange_get = function () {
        let readyState = this._boarg.myonreadystatechange;
        if (bodavm.config.isdebug) { debugger };

        console.log(`XMLHttpRequest_onreadystatechange_set `, `readyState->${readyState}  `);
        return readyState
    }
    bodavm.envFunc.XMLHttpRequest_send = function XMLHttpRequest_send() {
        debugger
        let body = arguments[0]; if (bodavm.config.isdebug) { debugger };
        console.log(`XMLHttpRequest_send `, `body->${body}  `, `!!!!!!!!!未完善!!!!!!!!!!!!`);
        // this._boarg.send(body)

    }
    bodavm.envFunc.XMLHttpRequest_open = function XMLHttpRequest_open() {
        let method = arguments[0]
        let url = arguments[1];
        console.log(`XMLHttpRequest_open `, `[${method}] `, `[${url}]  `)
        if (bodavm.config.isdebug) { debugger }
        // this.mymethod=method
        // this.myurl=url
        this._boarg.method = method
        this._boarg.url = url
    }

    //EventTarget
    bodavm.envFunc.EventTarget_addEventListener = function EventTarget_addEventListener() {
        let type = arguments[0];
        let callback = arguments[1];
        let options = arguments[2];
        if (bodavm.config.isdebug) { debugger }
        if (bodavm.memory.asyncEvent.listener === undefined) {
            bodavm.memory.asyncEvent.listener = {};
        }
        if (bodavm.memory.asyncEvent.listener[type] === undefined) {
            bodavm.memory.asyncEvent.listener[type] = [];
        }
        let event = {
            "type": type,
            "self": this,
            "options": options,
            "callback": callback,
            'isTrusted': true,
            'target': this
        }
        console.log(`EventTarget_addEventListener `, `type->${type} `, `callback->${callback} `, `options->${options ? options : []}  `)

        bodavm.memory.asyncEvent.listener[type].push(event);


    }
    bodavm.envFunc.EventTarget_dispatchEvent = function EventTarget_dispatchEvent() {
        if (bodavm.config.isdebug) { debugger }
        let event = arguments[0]
        let botag=arguments[1]   //用来判断该事件是不是由我代码主动触发
        if (botag ==undefined) {
            console.log(`EventTarget_dispatchEvent 被网站代码主动触发`,`事件为${event.type}`)
        }
        let type = event.type
        switch (event.type) {
            case 'click':
                Object.setPrototypeOf(event,bodavm.memory.globalobj['PointerEvent'].prototype)
                break
            case 'load':
                Object.setPrototypeOf(event, bodavm.memory.globalobj['Event'].prototype)
                break
            case 'onload':
                // Object.setPrototypeOf(event)
                break
            default:
                //无需实现的事件unload  popstate
                console.log(`EventTarget_dispatchEvent `, `${event.type} 未实现`)

        }
        // console.log(`EventTarget_dispatchEvent  `, `event->${event}`,` type->${type}`);
        event.callback.call(event.self, event)

    }
    bodavm.envFunc.EventTarget_removeEventListener = function EventTarget_removeEventListener() {
        if (bodavm.config.isdebug) { debugger }
        let type = arguments[0]
        let callback = arguments[1]
        for (let i = 0; i < bodavm.memory.asyncEvent.listener[type].length; i++) {
            if (bodavm.memory.asyncEvent.listener[type][i].callback == callback) {
                console.log(`EventTarget_removeEventListener  `, `type->${type}`, `callback->${callback}`);
                bodavm.memory.asyncEvent.listener[type][i].splice(i, 1)
                break
            }

        }
    }

    //HTMLCanvasElement

    bodavm.envFunc.HTMLCanvasElement_getContext = function HTMLCanvasElement_getContext() {
        let type = arguments[0];
        let context = {};
        if (bodavm.config.isdebug) { debugger }
        switch (type) {
            case "2d":
                // context = context.getContext('2d')
                context._bocanvas = this._bocanvas.getContext('2d')
                console.log(`HTMLCanvasElement_getContext `, `type->${type} `, `res -> ${context}`)
                context.__proto__ = bodavm.memory.globalobj['CanvasRenderingContext2D'].prototype;
                break
            case "webgl":
                // context = context.getContext('2d')
                console.log(`HTMLCanvasElement_getContext `, `type->${type} `, `res -> ${context}`)
                context.__proto__ = bodavm.memory.globalobj['WebGLRenderingContext'].prototype;
                break
            case 'experimental-webgl':
                console.log(`HTMLCanvasElement_getContext `, `type->${type} `, `context->${context} !!!!!!!!!未完善!!!!!!!!!!!! `)
                context.__proto__ = bodavm.memory.globalobj['WebGLRenderingContext'].prototype;
                // bodavm.toolsFunc.setProtoAttr.call(context, "canvas", this);
                // bodavm.toolsFunc.setProtoAttr.call(this, "type", type);
                break
            default:
                console.log(`HTMLCanvasElement_getContext `, `${type}属性未实现  `)
                break
        }
        return context
    }

    bodavm.envFunc.HTMLCanvasElement_width_set = function HTMLCanvasElement_width_set() {
        let width = arguments[0]
        this._bocanvas.width = width
        console.log(`HTMLCanvasElement_width_set `, `width->${width}`);
        return width
    }
    bodavm.envFunc.HTMLCanvasElement_height_set = function HTMLCanvasElement_height_set() {
        let height = arguments[0]
        this._bocanvas.height = height
        console.log(`HTMLCanvasElement_width_set `, `height->${height}`);
        return height
    }
    bodavm.envFunc.HTMLCanvasElement_toDataURL = function HTMLCanvasElement_toDataURL() {
        if (this._bocanvas) {
            let res = this._bocanvas.toDataURL()
            console.log(`HTMLCanvasElement_toDataURL `, `res->${res}`);
            return res
        } else {
            debugger
            res = bodavm.memory.userInit.canvas_webgl
            console.log(`HTMLCanvasElement_toDataURL `, `res->${res}`);
            return res
        }

    }
    //CanvasRenderingContext2D
    bodavm.envFunc.CanvasRenderingContext2D_textBaseline_set = function CanvasRenderingContext2D_textBaseline_set() {
        let textBaseline = arguments[0]
        this._bocanvas.textBaseline = textBaseline
        console.log(`CanvasRenderingContext2D_textBaseline_set `, `textBaseline->${textBaseline}`);
        return textBaseline
    }

    bodavm.envFunc.CanvasRenderingContext2D_font_set = function CanvasRenderingContext2D_font_set() {
        let font = arguments[0]
        this._bocanvas.font = font
        console.log(`CanvasRenderingContext2D_font_set `, `font->${font}`);
        return font
    }
    bodavm.envFunc.CanvasRenderingContext2D_fillStyle_set = function CanvasRenderingContext2D_fillStyle_set() {
        let fillStyle = arguments[0]
        this._bocanvas.fillStyle = fillStyle
        console.log(`CanvasRenderingContext2D_fillStyle_set `, `fillStyle->${fillStyle}`);
        return fillStyle
    }
    bodavm.envFunc.CanvasRenderingContext2D_fillRect = function CanvasRenderingContext2D_fillRect() {
        let arg0 = arguments[0]
        let arg1 = arguments[1]
        let arg2 = arguments[2]
        let arg3 = arguments[3]
        this._bocanvas.fillRect(arg0, arg1, arg2, arg3)
        console.log(`CanvasRenderingContext2D_fillRect `, `fillRect->${arg0},${arg1},${arg2},${arg3}`);
    }

    bodavm.envFunc.CanvasRenderingContext2D_fillText = function CanvasRenderingContext2D_fillText() {
        let arg0 = arguments[0]
        let arg1 = arguments[1]
        let arg2 = arguments[2]
        this._bocanvas.fillText(arg0, arg1, arg2)
        console.log(`CanvasRenderingContext2D_fillText`, `fillText->${arg0},${arg1},${arg2}`);

    }



    //location
    bodavm.envFunc.location_hash_get = function location_hash_get() {
        if (bodavm.config.isdebug) { debugger }
        let hash = bodaobj.location.hash
        console.log(`location_hash_get `, `hash_get->${hash}  `);

        return hash
    }
    bodavm.envFunc.location_hash_set = function location_hash_set() {
        if (bodavm.config.isdebug) { debugger }
        let arg = arguments[0]
        bodaobj.location.hash = arg
        console.log(`location_hash_set `, `hash_set->${arg}  `);

        return arg
    }

    bodavm.envFunc.location_ancestorOrigins_get = function location_ancestorOrigins_get() {
        let ancestorOrigins = {}
        ancestorOrigins.__proto__ = bodavm.memory.globalobj['DOMStringList'].prototype
        console.log(`location_ancestorOrigins_get `, `${ancestorOrigins}  `)
        if (bodavm.config.isdebug) { debugger }
        return ancestorOrigins
    }

    bodavm.envFunc.location_toString = function location_toString() {
        let href = bodaobj.location.toString()
        console.log(`location_toString `, `${href}   `)
        if (bodavm.config.isdebug) { debugger }
        return href
    }
    bodavm.envFunc.location_href_get = function location_href_get() {
        let href = bodaobj.location.href
        console.log(`location_href_get `, ` ${href}   `)
        if (bodavm.config.isdebug) { debugger }
        return href
    }
    bodavm.envFunc.location_href_set = function location_href_set() {
        let href = arguments[0]
        bodaobj.location.href = href
        console.log(`location_href_set `, `${href}   `)
        if (bodavm.config.isdebug) { debugger }
        return href
    }
    bodavm.envFunc.location_port_set = function location_port_set() {
        let port = arguments[0]
        bodaobj.location.port = port
        console.log(`location_port_set `, `${port}   `); if (bodavm.config.isdebug) { debugger };

        return port
    }
    bodavm.envFunc.location_port_get = function location_port_get() {
        let port = bodaobj.location.port
        console.log(`location_port_get `, `${port}   `)
        if (bodavm.config.isdebug) { debugger }
        return port
    }

    bodavm.envFunc.location_protocol_set = function location_protocol_set() {
        let protocol = arguments[0]
        bodaobj.location["protocol"] = protocol
        console.log(`location_protocol_set `, `${protocol}   `); if (bodavm.config.isdebug) { debugger };


        return protocol
    }
    bodavm.envFunc.location_protocol_get = function location_protocol_get() {
        let protocol = bodaobj.location["protocol"]
        console.log(`location_protocol_get `, `${protocol}   `); if (bodavm.config.isdebug) { debugger };

        return protocol
    }

    bodavm.envFunc.location_host_set = function location_host_set() {
        let host = arguments[0]
        bodaobj.location.host = host
        console.log(`location_host_set `, `${host}   `); if (bodavm.config.isdebug) { debugger };

        return host
    }
    bodavm.envFunc.location_host_get = function location_host_get() {
        let host = bodaobj.location.host
        console.log(`location_host_get `, `${host}   `); if (bodavm.config.isdebug) { debugger };

        return host
    }

    bodavm.envFunc.location_hostname_set = function location_hostname_set() {
        let hostname = arguments[0]
        bodaobj.location.hostname = hostname
        console.log(`location_hostname_set `, `${hostname}   `); if (bodavm.config.isdebug) { debugger };

        return hostname
    }
    bodavm.envFunc.location_hostname_get = function location_hostname_get() {
        let hostname = bodaobj.location.hostname
        console.log(`location_hostname_get `, `${hostname}   `); if (bodavm.config.isdebug) { debugger };

        return hostname
    }

    bodavm.envFunc.location_pathname_set = function location_pathname_set() {
        let pathname = arguments[0]
        bodaobj.location.pathname = pathname
        console.log(`location_pathname_set `, `${pathname}   `); if (bodavm.config.isdebug) { debugger };

        return pathname
    }
    bodavm.envFunc.location_pathname_get = function location_pathname_get() {
        let pathname = bodaobj.location.pathname
        console.log(`location_pathname_get `, `${pathname}  `); if (bodavm.config.isdebug) { debugger };
        // debugger
        return pathname
    }
    bodavm.envFunc.location_replace = function () {
        debugger
        if (bodavm.config.isdebug) { debugger }
        let r = arguments[0]
        // res = bodaobj.location.replace(r)
        console.log(`location_replace `, `replace->${r}`,);
        console.log(`--------------------页面跳转停止执行--------------------`,);
        console.log(`--------------------页面跳转停止执行--------------------`,);
        console.log(`--------------------直接执行lastDeal--------------------`,);
        throw('End',`--------------------直接执行lastDeal--------------------`)
        
    }
    bodavm.envFunc.location_search_set = function location_search_set() {
        let search = arguments[0]
        bodavm.memory.location["search"] = search
        console.log(`location_search_set `, `${search}  `); if (bodavm.config.isdebug) { debugger };

        return search
    }
    bodavm.envFunc.location_search_get = function location_search_get() {
        let search = bodavm.memory.location["search"]
        console.log(`location_search_get `, `${search}  `); if (bodavm.config.isdebug) { debugger };

        return search
    }


    bodavm.envFunc.location_origin_get = function location_origin_get() {
        let origin = bodaobj.location["origin"]
        console.log(`location_origin_get `, `${origin}  `); if (bodavm.config.isdebug) { debugger };

        return origin
    }

    //history
    bodavm.envFunc.History_length_get = function History_length_get() { debugger }
    bodavm.envFunc.History_state_get = function History_state_get() { debugger }
    bodavm.envFunc.History_scrollRestoration_set = function History_scrollRestoration_set() {
        let scrollRestoration = arguments[0]
        bodavm.memory.history["scrollRestoration"] = scrollRestoration
        console.log(`History_scrollRestoration_set `, `${scrollRestoration}  `)
        if (bodavm.config.isdebug) { debugger }
        return scrollRestoration
    }
    bodavm.envFunc.History_scrollRestoration_get = function History_scrollRestoration_get() {
        let scrollRestoration = bodavm.memory.history["scrollRestoration"]
        console.log(`History_scrollRestoration_get `, ` ${scrollRestoration}   `)
        if (bodavm.config.isdebug) { debugger }
        return scrollRestoration
    }


    //screen
    bodavm.envFunc.Screen_onchange_set = function Screen_onchange_set() {
        let onchange = arguments[0]
        bodavm.memory.screen["onchange"] = onchange
        console.log(`Screen_onchange_set `, `${onchange}  `)
        if (bodavm.config.isdebug) { debugger }
        return onchange
    }
    bodavm.envFunc.Screen_onchange_get = function Screen_onchange_get() {
        let onchange = bodavm.memory.screen["onchange"]
        console.log(`Screen_onchange_get `, `${onchange}  `)
        if (bodavm.config.isdebug) { debugger }
        return onchange
    }

    bodavm.envFunc.Screen_width_get = function Screen_width_get() {
        let width = bodavm.memory.screen["width"]
        console.log(`Screen_width_get `, `${width}  `)
        if (bodavm.config.isdebug) { debugger }
        return width
    }
    bodavm.envFunc.Screen_height_get = function Screen_height_get() {
        let height = bodavm.memory.screen["height"]
        console.log(`Screen_height_get `, `${height}  `)
        if (bodavm.config.isdebug) { debugger }
        return height
    }
    bodavm.envFunc.Screen_pixelDepth_get = function Screen_pixelDepth_get() {
        let pixelDepth = bodavm.memory.screen["pixelDepth"]
        console.log(`Screen_pixelDepth_get `, `${pixelDepth}  `)
        if (bodavm.config.isdebug) { debugger }
        return pixelDepth
    }
    bodavm.envFunc.Screen_colorDepth_get = function Screen_colorDepth_get() {
        let colorDepth = bodavm.memory.screen["colorDepth"]
        console.log(`Screen_colorDepth_get `, `${colorDepth}  `)
        if (bodavm.config.isdebug) { debugger }
        return colorDepth
    }
    bodavm.envFunc.Screen_availWidth_get = function Screen_availWidth_get() {
        let availWidth = bodavm.memory.screen["availWidth"]
        console.log(`Screen_availWidth_get `, `${availWidth}  `)
        if (bodavm.config.isdebug) { debugger }
        return availWidth
    }
    bodavm.envFunc.Screen_availLeft_get = function Screen_availLeft_get() {
        let availLeft = bodavm.memory.screen["availLeft"]
        console.log(`Screen_availLeft_get `, `${availLeft}  `)
        if (bodavm.config.isdebug) { debugger }
        return availLeft
    }
    bodavm.envFunc.Screen_availTop_get = function Screen_availTop_get() {
        let availTop = bodavm.memory.screen["availTop"]
        console.log(`Screen_availTop_get `, `${availTop}  `)
        if (bodavm.config.isdebug) { debugger }
        return availTop
    }
    bodavm.envFunc.Screen_orientation_get = function Screen_orientation_get() {
        let orientation = bodavm.memory.screen["orientation"]
        console.log(`Screen_orientation_get `, `${orientation}  `)
        if (bodavm.config.isdebug) { debugger }
        Object.setPrototypeOf(orientation, bodavm.memory.globalobj['ScreenOrientation'].prototype)
        return orientation
    }
    bodavm.envFunc.Screen_isExtended_get = function Screen_isExtended_get() {
        let isExtended = bodavm.memory.screen["isExtended"]
        console.log(`Screen_isExtended_get `, `${isExtended}  `)
        if (bodavm.config.isdebug) { debugger }
        return isExtended
    }
    bodavm.envFunc.Screen_availHeight_get = function Screen_availHeight_get() {
        let availHeight = bodavm.memory.screen["availHeight"]
        console.log(`Screen_availHeight_get `, `${availHeight}  `)
        if (bodavm.config.isdebug) { debugger }
        return availHeight
    }



    // IDBFactory
    bodavm.envFunc.IDBFactory_open = function IDBFactory_open() {

        // debugger
        let name = arguments[0]
        let version = arguments[1]

        console.log(`IDBFactory_open `, `name->${name} `, `version->${version}  `)
        let DB = {}
        DB = Object.setPrototypeOf(DB, bodavm.memory.globalobj['IDBOpenDBRequest'].prototype)
        if (bodavm.config.isdebug) { debugger }

        return DB
    }
    bodavm.envFunc.IDBRequest_onerror_set = function IDBRequest_onerror_set() {
        let onerror = arguments[0]
        bodavm.memory.IDBRequest['onerror'] = onerror
        console.log(`IDBRequest_onerror_set `, `${onerror} `, `!!!!!!!!!未完善!!!!!!!!!!!!  `)
        if (bodavm.config.isdebug) { debugger }
        return onerror

    }
    bodavm.envFunc.IDBRequest_onerror_get = function IDBRequest_onerror_get() {
        let onerror = bodavm.memory.IDBRequest['onerror'] ? bodavm.memory.IDBRequest['onerror'] : undefined
        console.log(`IDBRequest_onerror_get `, `${onerror} `, `!!!!!!!!!未完善!!!!!!!!!!!!  `)
        if (bodavm.config.isdebug) { debugger }
        return onerror

    }

    bodavm.envFunc.IDBOpenDBRequest_onupgradeneeded_set = function IDBOpenDBRequest_onupgradeneeded_set() {
        let onupgradeneeded = arguments[0]
        bodavm.memory.IDBOpenDBRequest['onupgradeneeded'] = onupgradeneeded
        console.log(`IDBOpenDBRequest_onupgradeneeded_set `, `${onupgradeneeded} `, `!!!!!!!!!未完善!!!!!!!!!!!!  `)
        if (bodavm.config.isdebug) { debugger }
        return onupgradeneeded

    }

    bodavm.envFunc.IDBRequest_onsuccess_set = function IDBRequest_onsuccess_set() {
        let onsuccess = arguments[0]
        bodavm.memory.IDBRequest['onsuccess'] = onsuccess

        console.log(`IDBRequest_onsuccess_set `, `${onsuccess} `, `!!!!!!!!!未完善!!!!!!!!!!!!  `)
        if (bodavm.config.isdebug) { debugger }
        return onsuccess

    }
    bodavm.envFunc.IDBRequest_onsuccess_get = function IDBRequest_onsuccess_get() {

        let onsuccess = bodavm.memory.IDBRequest['onsuccess'] ? bodavm.memory.IDBRequest['onsuccess'] : undefined

        console.log(`IDBRequest_onsuccess_get `, `${onsuccess} `, `!!!!!!!!!未完善!!!!!!!!!!!!  `)
        if (bodavm.config.isdebug) { debugger }
        return onsuccess

    }
    //Event
    bodavm.envFunc.Event_target_get = function Event_target_get() {
        debugger
        if (bodavm.config.isdebug) { debugger }

        let target = this.
            console.log(`Event_target_get `, `target->${target}  `);
        return target
    }
    bodavm.envFunc.Event_srcElement_get = function Event_srcElement_get() {
        debugger
        if (bodavm.config.isdebug) { debugger }
    }
    bodavm.envFunc.Event_timeStamp_get = function Event_timeStamp_get() {
        if (bodavm.config.isdebug) { debugger }
        let timstamp = bodavm.toolsFunc.getProtoAttr.call(this, "timeStamp");
        console.log(`Event_timeStamp_get `, `:timstamp->${timstamp}  `);
        return timstamp
    }

    //MouseEvent
    bodavm.envFunc.MouseEvent_pageY_get = function MouseEvent_pageY_get() {
        if (bodavm.config.isdebug) { debugger }

        let pageY = Math.ceil(Math.random() * 1000)
        console.log(`MouseEvent_pageY_get `, `pageY->${pageY}  `);
        return pageY
    }
    bodavm.envFunc.MouseEvent_clientY_get = function MouseEvent_clientY_get() {
        if (bodavm.config.isdebug) { debugger }
        let clientY = bodavm.toolsFunc.getProtoAttr.call(this, "clientY")
        console.log(`MouseEvent_clientY_get `, `clientY->${clientY}  `);
        return clientY
    }
    bodavm.envFunc.MouseEvent_clientX_get = function MouseEvent_clientX_get() {
        if (bodavm.config.isdebug) { debugger }
        let clientX_ = bodavm.toolsFunc.getProtoAttr.call(this, "clientX")
        console.log(`MouseEvent_clientX_get `, `clientX_->${clientX_}  `);
        return clientX_
    }
    bodavm.envFunc.MouseEvent_screenX_get = function MouseEvent_screenX_get() {
        if (bodavm.config.isdebug) { debugger }
        console.log(`MouseEvent_screenX_get !!!!!!!!!未完善!!!!!!!!!!!! `);

    }
    bodavm.envFunc.MouseEvent_screenY_get = function MouseEvent_screenY_get() {
        if (bodavm.config.isdebug) { debugger }
        console.log(`MouseEvent_screenY_get !!!!!!!!!未完善!!!!!!!!!!!!`, `  `);


    }
    bodavm.envFunc.MouseEvent_button_get = function MouseEvent_button_get() {
        if (bodavm.config.isdebug) { debugger }
        console.log(`MouseEvent_button_get !!!!!!!!!未完善!!!!!!!!!!!!`, `  `);


    }
    bodavm.envFunc.MouseEvent_offsetX_get = function MouseEvent_button_get() {
        if (bodavm.config.isdebug) { debugger }
        console.log(`MouseEvent_offsetX_get `,);


    }
    bodavm.envFunc.MouseEvent_offsetY_get = function MouseEvent_button_get() {
        if (bodavm.config.isdebug) { debugger }
        console.log(`MouseEvent_offsetY_get !!!!!!!!!未完善!!!!!!!!!!!!`);

    }

    bodavm.envFunc.MouseEvent_x_get = function MouseEvent_button_get() {
        if (bodavm.config.isdebug) { debugger }
        console.log(`MouseEvent_x_get !!!!!!!!!未完善!!!!!!!!!!!!`,);

    }
    bodavm.envFunc.MouseEvent_y_get = function MouseEvent_button_get() {
        if (bodavm.config.isdebug) { debugger }
        console.log(`MouseEvent_y_get !!!!!!!!!未完善!!!!!!!!!!!!`,);
    }
    bodavm.envFunc.Event_type_get = function Event_type_get() {
        if (bodavm.config.isdebug) { debugger }
        let type = arguments[0]
        console.log(`Event_type_get !!!!!!!!!未完善!!!!!!!!!!!!`, `type->${type}`);
        // debugger
        return type

    }
    bodavm.envFunc.MouseEvent_pageX_get = function MouseEvent_pageX_get() {
        if (bodavm.config.isdebug) { debugger }
        let pageX = Math.ceil(Math.random() * 1000)
        console.log(`MouseEvent_pageX_get `, `pageX->${pageX}  `);
        return pageX

    }

    //BatteryManager
    bodavm.envFunc.BatteryManager_level_get = function BatteryManager_level_get() {
        console.log(`BatteryManager_level_get `, `1  `);; if (bodavm.config.isdebug) { debugger };

        return 1;
    }
    bodavm.envFunc.BatteryManager_chargingTime_get = function BatteryManager_chargingTime_get() {
        console.log(`BatteryManager_chargingTime_get `, `0  `);; if (bodavm.config.isdebug) { debugger };

        return 0;
    }
    bodavm.envFunc.BatteryManager_charging_get = function BatteryManager_charging_get() {
        // debugger
        console.log(`BatteryManager_chargingTime_get `, `true  `);
        ; if (bodavm.config.isdebug) { debugger };

        return true;
    }

    bodavm.envFunc.WebGLRenderingContext_drawingBufferHeight_get = function () {
        let drawingBufferHeight = 150; if (bodavm.config.isdebug) { debugger };

        console.log(`WebGLRenderingContext_drawingBufferHeight_get  `, `默认值drawingBufferHeight:${drawingBufferHeight}  `);
        return drawingBufferHeight
    }
    bodavm.envFunc.WebGLRenderingContext_drawingBufferWidth_get = function () {
        let drawingBufferWidth = 300; if (bodavm.config.isdebug) { debugger };

        console.log(`WebGLRenderingContext_drawingBufferWidth_get  `, `默认值drawingBufferWidth:${drawingBufferWidth}  `);
        return drawingBufferWidth
    }
    bodavm.envFunc.WebGLRenderingContext_enableVertexAttribArray = function WebGLRenderingContext_enableVertexAttribArray() {
        let index = arguments[0]; if (bodavm.config.isdebug) { debugger };
        if (bodavm.config.isdebug) { debugger };

        console.log(`WebGLRenderingContext_enableVertexAttribArray !!!!!!!!!未完善!!!!!!!!!!!!`, `index:${index}  `);

    }
    bodavm.envFunc.WebGLRenderingContext_getUniformLocation = function WebGLRenderingContext_getUniformLocation() {
        let program = arguments[0]
        let name = arguments[1];
        if (bodavm.config.isdebug) { debugger }; console.log(`WebGLRenderingContext_getUniformLocation `, `program:${program} name:${name}`, `!!!!!!!!!未完善!!!!!!!!!!!!`);
        return null
    }
    bodavm.envFunc.WebGLRenderingContext_getAttribLocation = function WebGLRenderingContext_getAttribLocation() {
        let program = arguments[0]
        let name = arguments[1]
        console.log(`WebGLRenderingContext_getAttribLocation `, `program:${program} name:${name}  `, `!!!!!!!!!未完善!!!!!!!!!!!!`);

        if (bodavm.config.isdebug) { debugger };
        return null
    }
    bodavm.envFunc.WebGLRenderingContext_getShaderPrecisionFormat = function WebGLRenderingContext_getShaderPrecisionFormat() {
        let shaderType = arguments[0]
        let precisionType = arguments[1]
        console.log(`WebGLRenderingContext_getShaderPrecisionFormat `, `shaderType:${shaderType} precisionType:${precisionType}  `);
        if (shaderType == 35633 && precisionType == 36338) {
            let shade = {}
            Object.setPrototypeOf(shade, bodavm.memory.globalobj['WebGLShaderPrecisionFormat'].prototype)
            // bodavm.toolsFunc.symbolProperty(shade)
            return shade
        }
    }
    bodavm.envFunc.WebGLRenderingContext_uniform2f = function WebGLRenderingContext_uniform2f() {
        let location = arguments[0]
        let v0 = arguments[1]
        let v1 = arguments[2]
        if (bodavm.config.isdebug) { debugger };

        console.log(`WebGLRenderingContext_uniform2f !!!!!!!!!未完善!!!!!!!!!!!!`, `location:${location} v0:${v0}  v1:${v1}  `);
    }
    bodavm.envFunc.WebGLRenderingContext_vertexAttribPointer = function WebGLRenderingContext_vertexAttribPointer() {
        let index = arguments[0]
        let size = arguments[1]
        let type = arguments[2]
        let normalized = arguments[3]
        let stride = arguments[4]
        let offset = arguments[5]
        if (bodavm.config.isdebug) { debugger };

        console.log(`WebGLRenderingContext_vertexAttribPointer !!!!!!!!!未完善!!!!!!!!!!!!`, `index:${index}  size:${size} type:${type}  normalized:${normalized}  stride:${stride}  offset${offset}   `);
    }

    bodavm.envFunc.WebGLRenderingContext_drawArrays = function WebGLRenderingContext_drawArrays() {
        let mode = arguments[0]
        let first = arguments[1]
        let count = arguments[2]
        if (bodavm.config.isdebug) { debugger };

        console.log(`WebGLRenderingContext_drawArrays !!!!!!!!!未完善!!!!!!!!!!!!`, `mode:${mode}  first:${first}  count:${count}   `);

    }

    bodavm.envFunc.WebGLRenderingContext_useProgram = function WebGLRenderingContext_useProgram() {
        let program = arguments[0]
        console.log(`WebGLRenderingContext_useProgram !!!!!!!!!未完善!!!!!!!!!!!!`, `program:${program}  `);
        if (bodavm.config.isdebug) { debugger };

    }
    bodavm.envFunc.WebGLRenderingContext_linkProgram = function WebGLRenderingContext_linkProgram() {
        let program = arguments[0]
        console.log(`WebGLRenderingContext_linkProgram !!!!!!!!!未完善!!!!!!!!!!!!`, `program:${program}  `);
        if (bodavm.config.isdebug) { debugger };


    }
    bodavm.envFunc.WebGLRenderingContext_attachShader = function WebGLRenderingContext_attachShader() {
        let program = arguments[0]
        let shader = arguments[1]
        if (bodavm.config.isdebug) { debugger };

        console.log(`WebGLRenderingContext_attachShader !!!!!!!!!未完善!!!!!!!!!!!!`, `program:${program}  shader:${shader}   `);
    }
    bodavm.envFunc.WebGLRenderingContext_createShader = function WebGLRenderingContext_createShader() {
        let type = arguments[0]
        console.log(`WebGLRenderingContext_createShader `, `${type}  `);
        if (bodavm.config.isdebug) { debugger };

        if (type == 35633) {
            let shader = {}
            Object.setPrototypeOf(shader, bodavm.memory.globalobj['WebGLShader'].prototype)
            return shader
        }
        else if (type == 35632) {
            let shader = {}
            Object.setPrototypeOf(shader, bodavm.memory.globalobj['WebGLShader'].prototype)
            return shader
        }
    }

    bodavm.envFunc.WebGLRenderingContext_shaderSource = function WebGLRenderingContext_shaderSource() {
        let shader = arguments[0]
        let source = arguments[1]
        if (bodavm.config.isdebug) { debugger };

        console.log(`WebGLRenderingContext_shaderSource !!!!!!!!!未完善!!!!!!!!!!!!`, `shader:${shader}  source:${source}  `);
    }

    bodavm.envFunc.WebGLRenderingContext_compileShader = function WebGLRenderingContext_shaderSource() {
        let compileShader = arguments[0]
        if (bodavm.config.isdebug) { debugger };

        console.log(`WebGLRenderingContext_compileShader !!!!!!!!!未完善!!!!!!!!!!!!`, `${compileShader}  `);
    }
    bodavm.envFunc.WebGLRenderingContext_canvas_get = function WebGLRenderingContext_canvas_get() {
        let canvas = {}
        if (bodavm.config.isdebug) { debugger };

        console.log(`WebGLRenderingContext_canvas_get `, `${canvas}  `);
        canvas.__proto__ = bodavm.memory.globalobj['HTMLCanvasElement'].prototype
        // bodavm.toolsFunc.symbolProperty(canvas)
        return canvas

    }
    bodavm.envFunc.WebGLRenderingContext_createProgram = function WebGLRenderingContext_createProgram() {
        let program = {};
        if (bodavm.config.isdebug) { debugger };

        program = Object.setPrototypeOf(program, bodavm.memory.globalobj['WebGLProgram'].prototype);
        console.log(`WebGLRenderingContext_createProgram `, `${program}  `);
        return program;
    }

    bodavm.envFunc.WebGLRenderingContext_createBuffer = function WebGLRenderingContext_createBuffer() {
        if (bodavm.config.isdebug) { debugger }
        let buffer = {};
        buffer = Object.setPrototypeOf(buffer, bodavm.memory.globalobj['WebGLBuffer'].prototype);
        console.log(`WebGLRenderingContext_createBuffer `, `${buffer}  `);

        return buffer;

    }
    bodavm.envFunc.WebGLRenderingContext_bindBuffer = function WebGLRenderingContext_bindBuffer() {
        if (bodavm.config.isdebug) { debugger }
        let r1 = arguments[0]
        let r2 = arguments[1]
        console.log(`WebGLRenderingContext_bindBuffer !!!!!!!!!未完善!!!!!!!!!!!!`, `r1:${r1}  r2:${r2}  `);

    }
    bodavm.envFunc.WebGLRenderingContext_bufferData = function WebGLRenderingContext_bufferData() {
        if (bodavm.config.isdebug) { debugger }
        let r1 = arguments[0]
        let r2 = arguments[1]
        let r3 = arguments[2]
        let r4 = arguments[3]
        let r5 = arguments[4]
        console.log(`WebGLRenderingContext_bufferData !!!!!!!!!未完善!!!!!!!!!!!!`, `r1:${r1},r2:${r2},r3:${r3},r4:${r4},r5:${r5}  `);

    }
    bodavm.envFunc.WebGLRenderingContext_getExtension = function WebGLRenderingContext_getExtension() {
        if (bodavm.config.isdebug) { debugger }
        let getExtension = arguments[0]
        console.log(`WebGLRenderingContext_getExtension `, `${getExtension}  `);
        let info = {}
        switch (getExtension) {
            case "WEBGL_debug_renderer_info":

                WebGLDebugRendererInfo = function WebGLDebugRendererInfo() { }
                bodavm.toolsFunc.safeProto(WebGLDebugRendererInfo, "WebGLDebugRendererInfo");
                info = Object.setPrototypeOf(info, WebGLDebugRendererInfo.prototype)
                bodavm.toolsFunc.windowdefineProperty(WebGLDebugRendererInfo.prototype, "UNMASKED_VENDOR_WEBGL", { configurable: false, enumerable: true, writable: false, value: 37445 });
                bodavm.toolsFunc.windowdefineProperty(WebGLDebugRendererInfo.prototype, "UNMASKED_RENDERER_WEBGL", { configurable: false, enumerable: true, writable: false, value: 37446 });
                delete WebGLDebugRendererInfo;
                break;
            case "ANGLE_instanced_arrays":

                ANGLEInstancedArrays = function ANGLEInstancedArrays() { }
                bodavm.toolsFunc.safeProto(ANGLEInstancedArrays, "ANGLEInstancedArrays");
                info = Object.setPrototypeOf(info, ANGLEInstancedArrays.prototype)
                bodavm.toolsFunc.windowdefineProperty(ANGLEInstancedArrays.prototype, "VERTEX_ATTRIB_ARRAY_DIVISOR_ANGLE", { configurable: false, enumerable: true, writable: false, value: 35070 });
                bodavm.toolsFunc.windowdefineProperty(ANGLEInstancedArrays.prototype, "drawArraysInstancedANGLE", { configurable: true, enumerable: true, writable: true, value: function drawArraysInstancedANGLE() { return bodavm.toolsFunc.dispatch(this, ANGLEInstancedArrays.prototype, "ANGLEInstancedArrays", "drawArraysInstancedANGLE", arguments) } });
                bodavm.toolsFunc.windowdefineProperty(ANGLEInstancedArrays.prototype, "drawElementsInstancedANGLE", { configurable: true, enumerable: true, writable: true, value: function drawElementsInstancedANGLE() { return bodavm.toolsFunc.dispatch(this, ANGLEInstancedArrays.prototype, "ANGLEInstancedArrays", "drawElementsInstancedANGLE", arguments) } });
                bodavm.toolsFunc.windowdefineProperty(ANGLEInstancedArrays.prototype, "vertexAttribDivisorANGLE", { configurable: true, enumerable: true, writable: true, value: function vertexAttribDivisorANGLE() { return bodavm.toolsFunc.dispatch(this, ANGLEInstancedArrays.prototype, "ANGLEInstancedArrays", "vertexAttribDivisorANGLE", arguments) } });
                delete ANGLEInstancedArrays;
                break;
            case "EXT_blend_minmax":
                EXTBlendMinMax = function EXTBlendMinMax() { }
                bodavm.toolsFunc.safeProto(EXTBlendMinMax, "EXTBlendMinMax");
                info = Object.setPrototypeOf(info, EXTBlendMinMax.prototype)
                bodavm.toolsFunc.windowdefineProperty(EXTBlendMinMax.prototype, "MIN_EXT", { configurable: false, enumerable: true, writable: false, value: 32775 });
                bodavm.toolsFunc.windowdefineProperty(EXTBlendMinMax.prototype, "MAX_EXT", { configurable: false, enumerable: true, writable: false, value: 32776 });
                delete EXTBlendMinMax
                break;
            case "EXT_color_buffer_half_float":
                EXTColorBufferHalfFloat = function EXTColorBufferHalfFloat() { }
                bodavm.toolsFunc.safeProto(EXTColorBufferHalfFloat, "EXTColorBufferHalfFloat");
                info = Object.setPrototypeOf(info, EXTColorBufferHalfFloat.prototype)
                bodavm.toolsFunc.windowdefineProperty(EXTColorBufferHalfFloat.prototype, "RGBA16F_EXT", { configurable: false, enumerable: true, writable: false, value: 34842 });
                bodavm.toolsFunc.windowdefineProperty(EXTColorBufferHalfFloat.prototype, "RGB16F_EXT", { configurable: false, enumerable: true, writable: false, value: 34843 });
                bodavm.toolsFunc.windowdefineProperty(EXTColorBufferHalfFloat.prototype, "FRAMEBUFFER_ATTACHMENT_COMPONENT_TYPE_EXT", { configurable: false, enumerable: true, writable: false, value: 33297 });
                bodavm.toolsFunc.windowdefineProperty(EXTColorBufferHalfFloat.prototype, "UNSIGNED_NORMALIZED_EXT", { configurable: false, enumerable: true, writable: false, value: 35863 });
                delete EXTColorBufferHalfFloat
                break;
            case "EXT_disjoint_timer_query":
                EXTDisjointTimerQuery = function EXTDisjointTimerQuery() { }
                bodavm.toolsFunc.safeProto(EXTDisjointTimerQuery, "EXTDisjointTimerQuery");
                info = Object.setPrototypeOf(info, EXTDisjointTimerQuery.prototype)
                bodavm.toolsFunc.windowdefineProperty(EXTDisjointTimerQuery.prototype, "QUERY_COUNTER_BITS_EXT", { configurable: false, enumerable: true, writable: false, value: 34916 });
                bodavm.toolsFunc.windowdefineProperty(EXTDisjointTimerQuery.prototype, "CURRENT_QUERY_EXT", { configurable: false, enumerable: true, writable: false, value: 34917 });
                bodavm.toolsFunc.windowdefineProperty(EXTDisjointTimerQuery.prototype, "QUERY_RESULT_EXT", { configurable: false, enumerable: true, writable: false, value: 34918 });
                bodavm.toolsFunc.windowdefineProperty(EXTDisjointTimerQuery.prototype, "QUERY_RESULT_AVAILABLE_EXT", { configurable: false, enumerable: true, writable: false, value: 34919 });
                bodavm.toolsFunc.windowdefineProperty(EXTDisjointTimerQuery.prototype, "TIME_ELAPSED_EXT", { configurable: false, enumerable: true, writable: false, value: 35007 });
                bodavm.toolsFunc.windowdefineProperty(EXTDisjointTimerQuery.prototype, "TIMESTAMP_EXT", { configurable: false, enumerable: true, writable: false, value: 36392 });
                bodavm.toolsFunc.windowdefineProperty(EXTDisjointTimerQuery.prototype, "GPU_DISJOINT_EXT", { configurable: false, enumerable: true, writable: false, value: 36795 });
                bodavm.toolsFunc.windowdefineProperty(EXTDisjointTimerQuery.prototype, "beginQueryEXT", { configurable: true, enumerable: true, writable: true, value: function beginQueryEXT() { return bodavm.toolsFunc.dispatch(this, EXTDisjointTimerQuery.prototype, "EXTDisjointTimerQuery", "beginQueryEXT", arguments) } });
                bodavm.toolsFunc.windowdefineProperty(EXTDisjointTimerQuery.prototype, "createQueryEXT", { configurable: true, enumerable: true, writable: true, value: function createQueryEXT() { return bodavm.toolsFunc.dispatch(this, EXTDisjointTimerQuery.prototype, "EXTDisjointTimerQuery", "createQueryEXT", arguments) } });
                bodavm.toolsFunc.windowdefineProperty(EXTDisjointTimerQuery.prototype, "deleteQueryEXT", { configurable: true, enumerable: true, writable: true, value: function deleteQueryEXT() { return bodavm.toolsFunc.dispatch(this, EXTDisjointTimerQuery.prototype, "EXTDisjointTimerQuery", "deleteQueryEXT", arguments) } });
                bodavm.toolsFunc.windowdefineProperty(EXTDisjointTimerQuery.prototype, "endQueryEXT", { configurable: true, enumerable: true, writable: true, value: function endQueryEXT() { return bodavm.toolsFunc.dispatch(this, EXTDisjointTimerQuery.prototype, "EXTDisjointTimerQuery", "endQueryEXT", arguments) } });
                bodavm.toolsFunc.windowdefineProperty(EXTDisjointTimerQuery.prototype, "getQueryEXT", { configurable: true, enumerable: true, writable: true, value: function getQueryEXT() { return bodavm.toolsFunc.dispatch(this, EXTDisjointTimerQuery.prototype, "EXTDisjointTimerQuery", "getQueryEXT", arguments) } });
                bodavm.toolsFunc.windowdefineProperty(EXTDisjointTimerQuery.prototype, "getQueryObjectEXT", { configurable: true, enumerable: true, writable: true, value: function getQueryObjectEXT() { return bodavm.toolsFunc.dispatch(this, EXTDisjointTimerQuery.prototype, "EXTDisjointTimerQuery", "getQueryObjectEXT", arguments) } });
                bodavm.toolsFunc.windowdefineProperty(EXTDisjointTimerQuery.prototype, "isQueryEXT", { configurable: true, enumerable: true, writable: true, value: function isQueryEXT() { return bodavm.toolsFunc.dispatch(this, EXTDisjointTimerQuery.prototype, "EXTDisjointTimerQuery", "isQueryEXT", arguments) } });
                bodavm.toolsFunc.windowdefineProperty(EXTDisjointTimerQuery.prototype, "queryCounterEXT", { configurable: true, enumerable: true, writable: true, value: function queryCounterEXT() { return bodavm.toolsFunc.dispatch(this, EXTDisjointTimerQuery.prototype, "EXTDisjointTimerQuery", "queryCounterEXT", arguments) } });
                delete EXTDisjointTimerQuery

                break;
            case "EXT_float_blend":
                EXTFloatBlend = function EXTFloatBlend() { }
                bodavm.toolsFunc.safeProto(EXTFloatBlend, "EXTFloatBlend");
                info = Object.setPrototypeOf(info, EXTFloatBlend.prototype)
                delete EXTFloatBlend
                break;
            case "EXT_shader_texture_lod":
                EXTShaderTextureLOD = function EXTShaderTextureLOD() { }
                bodavm.toolsFunc.safeProto(EXTShaderTextureLOD, "EXTShaderTextureLOD");
                info = Object.setPrototypeOf(info, EXTShaderTextureLOD.prototype)
                delete EXTShaderTextureLOD
                break;
            case "EXT_frag_depth":
                EXTFragDepth = function EXTFragDepth() { }

                bodavm.toolsFunc.safeProto(EXTFragDepth, "EXTFragDepth");
                info = Object.setPrototypeOf(info, EXTFragDepth.prototype)
                delete EXTFragDepth
                break;
            case "EXT_texture_compression_bptc":
                EXTTextureCompressionBPTC = function EXTTextureCompressionBPTC() { }
                bodavm.toolsFunc.safeProto(EXTTextureCompressionBPTC, "EXTTextureCompressionBPTC");
                info = Object.setPrototypeOf(info, EXTTextureCompressionBPTC.prototype)
                bodavm.toolsFunc.windowdefineProperty(EXTTextureCompressionBPTC.prototype, "COMPRESSED_RGBA_BPTC_UNORM_EXT", { configurable: false, enumerable: true, writable: false, value: 36492 });
                bodavm.toolsFunc.windowdefineProperty(EXTTextureCompressionBPTC.prototype, "COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT", { configurable: false, enumerable: true, writable: false, value: 36493 });
                bodavm.toolsFunc.windowdefineProperty(EXTTextureCompressionBPTC.prototype, "COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT", { configurable: false, enumerable: true, writable: false, value: 36494 });
                bodavm.toolsFunc.windowdefineProperty(EXTTextureCompressionBPTC.prototype, "COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT", { configurable: false, enumerable: true, writable: false, value: 36495 });

                delete EXTTextureCompressionBPTC
                break;
            case "EXT_texture_compression_rgtc":
                EXTTextureCompressionRGTC = function EXTTextureCompressionRGTC() { }
                bodavm.toolsFunc.safeProto(EXTTextureCompressionRGTC, "EXTTextureCompressionRGTC");
                info = Object.setPrototypeOf(info, EXTTextureCompressionRGTC.prototype)
                bodavm.toolsFunc.windowdefineProperty(EXTTextureCompressionRGTC.prototype, "COMPRESSED_RED_RGTC1_EXT", { configurable: false, enumerable: true, writable: false, value: 36283 });
                bodavm.toolsFunc.windowdefineProperty(EXTTextureCompressionRGTC.prototype, "COMPRESSED_SIGNED_RED_RGTC1_EXT", { configurable: false, enumerable: true, writable: false, value: 36284 });
                bodavm.toolsFunc.windowdefineProperty(EXTTextureCompressionRGTC.prototype, "COMPRESSED_RED_GREEN_RGTC2_EXT", { configurable: false, enumerable: true, writable: false, value: 36285 });
                bodavm.toolsFunc.windowdefineProperty(EXTTextureCompressionRGTC.prototype, "COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT", { configurable: false, enumerable: true, writable: false, value: 36286 });
                delete EXTTextureCompressionRGTC;

                break;
            case "EXT_texture_filter_anisotropic":
                EXTTextureFilterAnisotropic = function EXTTextureFilterAnisotropic() { }
                bodavm.toolsFunc.safeProto(EXTTextureFilterAnisotropic, "EXTTextureFilterAnisotropic");
                info = Object.setPrototypeOf(info, EXTTextureFilterAnisotropic.prototype)
                bodavm.toolsFunc.windowdefineProperty(EXTTextureFilterAnisotropic.prototype, "TEXTURE_MAX_ANISOTROPY_EXT", { configurable: false, enumerable: true, writable: false, value: 34046 });
                bodavm.toolsFunc.windowdefineProperty(EXTTextureFilterAnisotropic.prototype, "MAX_TEXTURE_MAX_ANISOTROPY_EXT", { configurable: false, enumerable: true, writable: false, value: 34047 });
                delete EXTTextureFilterAnisotropic;
                break;
            case "WEBKIT_EXT_texture_filter_anisotropic":
                EXTTextureFilterAnisotropic = function EXTTextureFilterAnisotropic() { }
                bodavm.toolsFunc.safeProto(EXTTextureFilterAnisotropic, "EXTTextureFilterAnisotropic");
                info = Object.setPrototypeOf(info, EXTTextureFilterAnisotropic.prototype)
                bodavm.toolsFunc.windowdefineProperty(EXTTextureFilterAnisotropic.prototype, "TEXTURE_MAX_ANISOTROPY_EXT", { configurable: false, enumerable: true, writable: false, value: 34046 });
                bodavm.toolsFunc.windowdefineProperty(EXTTextureFilterAnisotropic.prototype, "MAX_TEXTURE_MAX_ANISOTROPY_EXT", { configurable: false, enumerable: true, writable: false, value: 34047 });
                delete EXTTextureFilterAnisotropic;
                break;
            case "EXT_sRGB":
                EXTsRGB = function EXTsRGB() { }
                bodavm.toolsFunc.safeProto(EXTsRGB, "EXTsRGB");
                info = Object.setPrototypeOf(info, EXTsRGB.prototype)
                bodavm.toolsFunc.windowdefineProperty(EXTsRGB.prototype, "SRGB_EXT", { configurable: false, enumerable: true, writable: false, value: 35904 });
                bodavm.toolsFunc.windowdefineProperty(EXTsRGB.prototype, "SRGB_ALPHA_EXT", { configurable: false, enumerable: true, writable: false, value: 35906 });
                bodavm.toolsFunc.windowdefineProperty(EXTsRGB.prototype, "SRGB8_ALPHA8_EXT", { configurable: false, enumerable: true, writable: false, value: 35907 });
                bodavm.toolsFunc.windowdefineProperty(EXTsRGB.prototype, "FRAMEBUFFER_ATTACHMENT_COLOR_ENCODING_EXT", { configurable: false, enumerable: true, writable: false, value: 33296 });
                delete EXTsRGB;
                break;
            case "KHR_parallel_shader_compile":
                KHRParallelShaderCompile = function KHRParallelShaderCompile() { }
                bodavm.toolsFunc.safeProto(KHRParallelShaderCompile, "KHRParallelShaderCompile");
                info = Object.setPrototypeOf(info, KHRParallelShaderCompile.prototype)
                bodavm.toolsFunc.windowdefineProperty(KHRParallelShaderCompile.prototype, "COMPLETION_STATUS_KHR", { configurable: false, enumerable: true, writable: false, value: 37297 });
                delete KHRParallelShaderCompile;
                break;
            case "OES_element_index_uint":
                OESElementIndexUint = function OESElementIndexUint() { }
                bodavm.toolsFunc.safeProto(OESElementIndexUint, "OESElementIndexUint");
                info = Object.setPrototypeOf(info, OESElementIndexUint.prototype)
                delete OESElementIndexUint;
                break;
            case "OES_fbo_render_mipmap":
                OESFboRenderMipmap = function OESFboRenderMipmap() { }
                bodavm.toolsFunc.safeProto(OESFboRenderMipmap, "OESFboRenderMipmap");
                info = Object.setPrototypeOf(info, OESFboRenderMipmap.prototype)
                delete OESFboRenderMipmap;
                break;
            case "OES_standard_derivatives":
                OESStandardDerivatives = function OESStandardDerivatives() { }
                bodavm.toolsFunc.safeProto(OESStandardDerivatives, "OESStandardDerivatives");
                info = Object.setPrototypeOf(info, OESStandardDerivatives.prototype)
                bodavm.toolsFunc.windowdefineProperty(OESStandardDerivatives.prototype, "FRAGMENT_SHADER_DERIVATIVE_HINT_OES", { configurable: false, enumerable: true, writable: false, value: 35723 });
                delete OESStandardDerivatives;
                break;
            case "OES_texture_float":
                OESTextureFloat = function OESTextureFloat() { }
                bodavm.toolsFunc.safeProto(OESTextureFloat, "OESTextureFloat");
                info = Object.setPrototypeOf(info, OESTextureFloat.prototype)
                delete OESTextureFloat;
                break;
            case "OES_texture_float_linear":
                OESTextureFloatLinear = function OESTextureFloatLinear() { }
                bodavm.toolsFunc.safeProto(OESTextureFloatLinear, "OESTextureFloatLinear");
                info = Object.setPrototypeOf(info, OESTextureFloatLinear.prototype)
                delete OESTextureFloatLinear;
                break;
            case "OES_texture_half_float":
                OESTextureHalfFloat = function OESTextureHalfFloat() { }
                bodavm.toolsFunc.safeProto(OESTextureHalfFloat, "OESTextureHalfFloat");
                info = Object.setPrototypeOf(info, OESTextureHalfFloat.prototype)
                bodavm.toolsFunc.windowdefineProperty(OESTextureHalfFloat.prototype, "HALF_FLOAT_OES", { configurable: false, enumerable: true, writable: false, value: 36193 });
                delete OESTextureHalfFloat;
                break;
            case "OES_texture_half_float_linear":
                OESTextureHalfFloatLinear = function OESTextureHalfFloatLinear() { }
                bodavm.toolsFunc.safeProto(OESTextureHalfFloatLinear, "OESTextureHalfFloatLinear");
                info = Object.setPrototypeOf(info, OESTextureHalfFloatLinear.prototype)
                delete OESTextureHalfFloatLinear;
                break;
            case "OES_vertex_array_object":
                OESVertexArrayObject = function OESVertexArrayObject() { }
                bodavm.toolsFunc.safeProto(OESVertexArrayObject, "OESVertexArrayObject");
                info = Object.setPrototypeOf(info, OESVertexArrayObject.prototype)
                bodavm.toolsFunc.windowdefineProperty(OESVertexArrayObject.prototype, "VERTEX_ARRAY_BINDING_OES", { configurable: false, enumerable: true, writable: false, value: 34229 });
                bodavm.toolsFunc.windowdefineProperty(OESVertexArrayObject.prototype, "bindVertexArrayOES", { configurable: true, enumerable: true, writable: true, value: function bindVertexArrayOES() { return bodavm.toolsFunc.dispatch(this, OESVertexArrayObject.prototype, "OESVertexArrayObject", "bindVertexArrayOES", arguments) } });
                bodavm.toolsFunc.windowdefineProperty(OESVertexArrayObject.prototype, "createVertexArrayOES", { configurable: true, enumerable: true, writable: true, value: function createVertexArrayOES() { return bodavm.toolsFunc.dispatch(this, OESVertexArrayObject.prototype, "OESVertexArrayObject", "createVertexArrayOES", arguments) } });
                bodavm.toolsFunc.windowdefineProperty(OESVertexArrayObject.prototype, "deleteVertexArrayOES", { configurable: true, enumerable: true, writable: true, value: function deleteVertexArrayOES() { return bodavm.toolsFunc.dispatch(this, OESVertexArrayObject.prototype, "OESVertexArrayObject", "deleteVertexArrayOES", arguments) } });
                bodavm.toolsFunc.windowdefineProperty(OESVertexArrayObject.prototype, "isVertexArrayOES", { configurable: true, enumerable: true, writable: true, value: function isVertexArrayOES() { return bodavm.toolsFunc.dispatch(this, OESVertexArrayObject.prototype, "OESVertexArrayObject", "isVertexArrayOES", arguments) } });
                delete OESVertexArrayObject;
                break;
            case "WEBGL_color_buffer_float":
                WebGLColorBufferFloat = function WebGLColorBufferFloat() { }
                bodavm.toolsFunc.safeProto(WebGLColorBufferFloat, "WebGLColorBufferFloat");
                info = Object.setPrototypeOf(info, WebGLColorBufferFloat.prototype)
                bodavm.toolsFunc.windowdefineProperty(WebGLColorBufferFloat.prototype, "RGBA32F_EXT", { configurable: false, enumerable: true, writable: false, value: 34836 });
                bodavm.toolsFunc.windowdefineProperty(WebGLColorBufferFloat.prototype, "FRAMEBUFFER_ATTACHMENT_COMPONENT_TYPE_EXT", { configurable: false, enumerable: true, writable: false, value: 33297 });
                bodavm.toolsFunc.windowdefineProperty(WebGLColorBufferFloat.prototype, "UNSIGNED_NORMALIZED_EXT", { configurable: false, enumerable: true, writable: false, value: 35863 });
                delete WebGLColorBufferFloat;
                break;
            case "WEBGL_compressed_texture_s3tc":
                WebGLCompressedTextureS3TC = function WebGLCompressedTextureS3TC() { }
                bodavm.toolsFunc.safeProto(WebGLCompressedTextureS3TC, "WebGLCompressedTextureS3TC");
                info = Object.setPrototypeOf(info, WebGLCompressedTextureS3TC.prototype)
                bodavm.toolsFunc.windowdefineProperty(WebGLCompressedTextureS3TC.prototype, "COMPRESSED_RGB_S3TC_DXT1_EXT", { configurable: false, enumerable: true, writable: false, value: 33776 });
                bodavm.toolsFunc.windowdefineProperty(WebGLCompressedTextureS3TC.prototype, "COMPRESSED_RGBA_S3TC_DXT1_EXT", { configurable: false, enumerable: true, writable: false, value: 33777 });
                bodavm.toolsFunc.windowdefineProperty(WebGLCompressedTextureS3TC.prototype, "COMPRESSED_RGBA_S3TC_DXT3_EXT", { configurable: false, enumerable: true, writable: false, value: 33778 });
                bodavm.toolsFunc.windowdefineProperty(WebGLCompressedTextureS3TC.prototype, "COMPRESSED_RGBA_S3TC_DXT5_EXT", { configurable: false, enumerable: true, writable: false, value: 33779 });
                delete WebGLCompressedTextureS3TC;
                break;
            case "WEBKIT_WEBGL_compressed_texture_s3tc":
                WebGLCompressedTextureS3TC = function WebGLCompressedTextureS3TC() { }
                bodavm.toolsFunc.safeProto(WebGLCompressedTextureS3TC, "WebGLCompressedTextureS3TC");
                info = Object.setPrototypeOf(info, WebGLCompressedTextureS3TC.prototype)
                bodavm.toolsFunc.windowdefineProperty(WebGLCompressedTextureS3TC.prototype, "COMPRESSED_RGB_S3TC_DXT1_EXT", { configurable: false, enumerable: true, writable: false, value: 33776 });
                bodavm.toolsFunc.windowdefineProperty(WebGLCompressedTextureS3TC.prototype, "COMPRESSED_RGBA_S3TC_DXT1_EXT", { configurable: false, enumerable: true, writable: false, value: 33777 });
                bodavm.toolsFunc.windowdefineProperty(WebGLCompressedTextureS3TC.prototype, "COMPRESSED_RGBA_S3TC_DXT3_EXT", { configurable: false, enumerable: true, writable: false, value: 33778 });
                bodavm.toolsFunc.windowdefineProperty(WebGLCompressedTextureS3TC.prototype, "COMPRESSED_RGBA_S3TC_DXT5_EXT", { configurable: false, enumerable: true, writable: false, value: 33779 });
                delete WebGLCompressedTextureS3TC;
                break;
            case "WEBGL_compressed_texture_s3tc_srgb":
                WebGLCompressedTextureS3TCsRGB = function WebGLCompressedTextureS3TCsRGB() { }
                bodavm.toolsFunc.safeProto(WebGLCompressedTextureS3TCsRGB, "WebGLCompressedTextureS3TCsRGB");
                info = Object.setPrototypeOf(info, WebGLCompressedTextureS3TCsRGB.prototype)
                bodavm.toolsFunc.windowdefineProperty(WebGLCompressedTextureS3TCsRGB.prototype, "COMPRESSED_SRGB_S3TC_DXT1_EXT", { configurable: false, enumerable: true, writable: false, value: 35916 });
                bodavm.toolsFunc.windowdefineProperty(WebGLCompressedTextureS3TCsRGB.prototype, "COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT", { configurable: false, enumerable: true, writable: false, value: 35917 });
                bodavm.toolsFunc.windowdefineProperty(WebGLCompressedTextureS3TCsRGB.prototype, "COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT", { configurable: false, enumerable: true, writable: false, value: 35918 });
                bodavm.toolsFunc.windowdefineProperty(WebGLCompressedTextureS3TCsRGB.prototype, "COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT", { configurable: false, enumerable: true, writable: false, value: 35919 });
                delete WebGLCompressedTextureS3TCsRGB;
                break;
            case "WEBGL_debug_shaders":
                WebGLDebugShaders = function WebGLDebugShaders() { }
                bodavm.toolsFunc.safeProto(WebGLDebugShaders, "WebGLDebugShaders");
                info = Object.setPrototypeOf(info, WebGLDebugShaders.prototype)
                bodavm.toolsFunc.windowdefineProperty(WebGLDebugShaders.prototype, "getTranslatedShaderSource", { configurable: true, enumerable: true, writable: true, value: function getTranslatedShaderSource() { return bodavm.toolsFunc.dispatch(this, WebGLDebugShaders.prototype, "WebGLDebugShaders", "getTranslatedShaderSource", arguments) } });
                delete WebGLDebugShaders;
                break;
            case "WEBGL_depth_texture":
                WebGLDepthTexture = function WebGLDepthTexture() { }
                bodavm.toolsFunc.safeProto(WebGLDepthTexture, "WebGLDepthTexture");
                info = Object.setPrototypeOf(info, WebGLDepthTexture.prototype)
                bodavm.toolsFunc.windowdefineProperty(WebGLDepthTexture.prototype, "UNSIGNED_INT_24_8_WEBGL", { configurable: false, enumerable: true, writable: false, value: 34042 });
                delete WebGLDepthTexture;
                break;
            case "WEBKIT_WEBGL_depth_texture":
                WebGLDepthTexture = function WebGLDepthTexture() { }
                bodavm.toolsFunc.safeProto(WebGLDepthTexture, "WebGLDepthTexture");
                info = Object.setPrototypeOf(info, WebGLDepthTexture.prototype)
                bodavm.toolsFunc.windowdefineProperty(WebGLDepthTexture.prototype, "UNSIGNED_INT_24_8_WEBGL", { configurable: false, enumerable: true, writable: false, value: 34042 });
                delete WebGLDepthTexture;
                break;
            case "WEBGL_draw_buffers":
                WebGLDrawBuffers = function WebGLDrawBuffers() { }
                bodavm.toolsFunc.safeProto(WebGLDrawBuffers, "WebGLDrawBuffers");
                info = Object.setPrototypeOf(info, WebGLDrawBuffers.prototype)
                bodavm.toolsFunc.windowdefineProperty(WebGLDrawBuffers.prototype, "COLOR_ATTACHMENT0_WEBGL", { configurable: false, enumerable: true, writable: false, value: 36064 });
                bodavm.toolsFunc.windowdefineProperty(WebGLDrawBuffers.prototype, "COLOR_ATTACHMENT1_WEBGL", { configurable: false, enumerable: true, writable: false, value: 36065 });
                bodavm.toolsFunc.windowdefineProperty(WebGLDrawBuffers.prototype, "COLOR_ATTACHMENT2_WEBGL", { configurable: false, enumerable: true, writable: false, value: 36066 });
                bodavm.toolsFunc.windowdefineProperty(WebGLDrawBuffers.prototype, "COLOR_ATTACHMENT3_WEBGL", { configurable: false, enumerable: true, writable: false, value: 36067 });
                bodavm.toolsFunc.windowdefineProperty(WebGLDrawBuffers.prototype, "COLOR_ATTACHMENT4_WEBGL", { configurable: false, enumerable: true, writable: false, value: 36068 });
                bodavm.toolsFunc.windowdefineProperty(WebGLDrawBuffers.prototype, "COLOR_ATTACHMENT5_WEBGL", { configurable: false, enumerable: true, writable: false, value: 36069 });
                bodavm.toolsFunc.windowdefineProperty(WebGLDrawBuffers.prototype, "COLOR_ATTACHMENT6_WEBGL", { configurable: false, enumerable: true, writable: false, value: 36070 });
                bodavm.toolsFunc.windowdefineProperty(WebGLDrawBuffers.prototype, "COLOR_ATTACHMENT7_WEBGL", { configurable: false, enumerable: true, writable: false, value: 36071 });
                bodavm.toolsFunc.windowdefineProperty(WebGLDrawBuffers.prototype, "COLOR_ATTACHMENT8_WEBGL", { configurable: false, enumerable: true, writable: false, value: 36072 });
                bodavm.toolsFunc.windowdefineProperty(WebGLDrawBuffers.prototype, "COLOR_ATTACHMENT9_WEBGL", { configurable: false, enumerable: true, writable: false, value: 36073 });
                bodavm.toolsFunc.windowdefineProperty(WebGLDrawBuffers.prototype, "COLOR_ATTACHMENT10_WEBGL", { configurable: false, enumerable: true, writable: false, value: 36074 });
                bodavm.toolsFunc.windowdefineProperty(WebGLDrawBuffers.prototype, "COLOR_ATTACHMENT11_WEBGL", { configurable: false, enumerable: true, writable: false, value: 36075 });
                bodavm.toolsFunc.windowdefineProperty(WebGLDrawBuffers.prototype, "COLOR_ATTACHMENT12_WEBGL", { configurable: false, enumerable: true, writable: false, value: 36076 });
                bodavm.toolsFunc.windowdefineProperty(WebGLDrawBuffers.prototype, "COLOR_ATTACHMENT13_WEBGL", { configurable: false, enumerable: true, writable: false, value: 36077 });
                bodavm.toolsFunc.windowdefineProperty(WebGLDrawBuffers.prototype, "COLOR_ATTACHMENT14_WEBGL", { configurable: false, enumerable: true, writable: false, value: 36078 });
                bodavm.toolsFunc.windowdefineProperty(WebGLDrawBuffers.prototype, "COLOR_ATTACHMENT15_WEBGL", { configurable: false, enumerable: true, writable: false, value: 36079 });
                bodavm.toolsFunc.windowdefineProperty(WebGLDrawBuffers.prototype, "DRAW_BUFFER0_WEBGL", { configurable: false, enumerable: true, writable: false, value: 34853 });
                bodavm.toolsFunc.windowdefineProperty(WebGLDrawBuffers.prototype, "DRAW_BUFFER1_WEBGL", { configurable: false, enumerable: true, writable: false, value: 34854 });
                bodavm.toolsFunc.windowdefineProperty(WebGLDrawBuffers.prototype, "DRAW_BUFFER2_WEBGL", { configurable: false, enumerable: true, writable: false, value: 34855 });
                bodavm.toolsFunc.windowdefineProperty(WebGLDrawBuffers.prototype, "DRAW_BUFFER3_WEBGL", { configurable: false, enumerable: true, writable: false, value: 34856 });
                bodavm.toolsFunc.windowdefineProperty(WebGLDrawBuffers.prototype, "DRAW_BUFFER4_WEBGL", { configurable: false, enumerable: true, writable: false, value: 34857 });
                bodavm.toolsFunc.windowdefineProperty(WebGLDrawBuffers.prototype, "DRAW_BUFFER5_WEBGL", { configurable: false, enumerable: true, writable: false, value: 34858 });
                bodavm.toolsFunc.windowdefineProperty(WebGLDrawBuffers.prototype, "DRAW_BUFFER6_WEBGL", { configurable: false, enumerable: true, writable: false, value: 34859 });
                bodavm.toolsFunc.windowdefineProperty(WebGLDrawBuffers.prototype, "DRAW_BUFFER7_WEBGL", { configurable: false, enumerable: true, writable: false, value: 34860 });
                bodavm.toolsFunc.windowdefineProperty(WebGLDrawBuffers.prototype, "DRAW_BUFFER8_WEBGL", { configurable: false, enumerable: true, writable: false, value: 34861 });
                bodavm.toolsFunc.windowdefineProperty(WebGLDrawBuffers.prototype, "DRAW_BUFFER9_WEBGL", { configurable: false, enumerable: true, writable: false, value: 34862 });
                bodavm.toolsFunc.windowdefineProperty(WebGLDrawBuffers.prototype, "DRAW_BUFFER10_WEBGL", { configurable: false, enumerable: true, writable: false, value: 34863 });
                bodavm.toolsFunc.windowdefineProperty(WebGLDrawBuffers.prototype, "DRAW_BUFFER11_WEBGL", { configurable: false, enumerable: true, writable: false, value: 34864 });
                bodavm.toolsFunc.windowdefineProperty(WebGLDrawBuffers.prototype, "DRAW_BUFFER12_WEBGL", { configurable: false, enumerable: true, writable: false, value: 34865 });
                bodavm.toolsFunc.windowdefineProperty(WebGLDrawBuffers.prototype, "DRAW_BUFFER13_WEBGL", { configurable: false, enumerable: true, writable: false, value: 34866 });
                bodavm.toolsFunc.windowdefineProperty(WebGLDrawBuffers.prototype, "DRAW_BUFFER14_WEBGL", { configurable: false, enumerable: true, writable: false, value: 34867 });
                bodavm.toolsFunc.windowdefineProperty(WebGLDrawBuffers.prototype, "DRAW_BUFFER15_WEBGL", { configurable: false, enumerable: true, writable: false, value: 34868 });
                bodavm.toolsFunc.windowdefineProperty(WebGLDrawBuffers.prototype, "MAX_COLOR_ATTACHMENTS_WEBGL", { configurable: false, enumerable: true, writable: false, value: 36063 });
                bodavm.toolsFunc.windowdefineProperty(WebGLDrawBuffers.prototype, "MAX_DRAW_BUFFERS_WEBGL", { configurable: false, enumerable: true, writable: false, value: 34852 });
                bodavm.toolsFunc.windowdefineProperty(WebGLDrawBuffers.prototype, "drawBuffersWEBGL", { configurable: true, enumerable: true, writable: true, value: function drawBuffersWEBGL() { return bodavm.toolsFunc.dispatch(this, WebGLDrawBuffers.prototype, "WebGLDrawBuffers", "drawBuffersWEBGL", arguments) } });
                delete WebGLDrawBuffers;
                break;
            case "WEBGL_lose_context":
                WebGLLoseContext = function WebGLLoseContext() { }
                bodavm.toolsFunc.safeProto(WebGLLoseContext, "WebGLLoseContext");
                info = Object.setPrototypeOf(info, WebGLLoseContext.prototype)
                bodavm.toolsFunc.windowdefineProperty(WebGLLoseContext.prototype, "loseContext", { configurable: true, enumerable: true, writable: true, value: function loseContext() { return bodavm.toolsFunc.dispatch(this, WebGLLoseContext.prototype, "WebGLLoseContext", "loseContext", arguments) } });
                bodavm.toolsFunc.windowdefineProperty(WebGLLoseContext.prototype, "restoreContext", { configurable: true, enumerable: true, writable: true, value: function restoreContext() { return bodavm.toolsFunc.dispatch(this, WebGLLoseContext.prototype, "WebGLLoseContext", "restoreContext", arguments) } });
                delete WebGLLoseContext;
                break;
            case "WEBKIT_WEBGL_lose_context":
                WebGLLoseContext = function WebGLLoseContext() { }
                bodavm.toolsFunc.safeProto(WebGLLoseContext, "WebGLLoseContext");
                info = Object.setPrototypeOf(info, WebGLLoseContext.prototype)
                bodavm.toolsFunc.windowdefineProperty(WebGLLoseContext.prototype, "loseContext", { configurable: true, enumerable: true, writable: true, value: function loseContext() { return bodavm.toolsFunc.dispatch(this, WebGLLoseContext.prototype, "WebGLLoseContext", "loseContext", arguments) } });
                bodavm.toolsFunc.windowdefineProperty(WebGLLoseContext.prototype, "restoreContext", { configurable: true, enumerable: true, writable: true, value: function restoreContext() { return bodavm.toolsFunc.dispatch(this, WebGLLoseContext.prototype, "WebGLLoseContext", "restoreContext", arguments) } });
                delete WebGLLoseContext; break;
            case "WEBGL_multi_draw":
                WebGLMultiDraw = function WebGLMultiDraw() { }
                bodavm.toolsFunc.safeProto(WebGLMultiDraw, "WebGLMultiDraw");
                info = Object.setPrototypeOf(info, WebGLMultiDraw.prototype)
                bodavm.toolsFunc.windowdefineProperty(WebGLMultiDraw.prototype, "multiDrawArraysInstancedWEBGL", { configurable: true, enumerable: true, writable: true, value: function multiDrawArraysInstancedWEBGL() { return bodavm.toolsFunc.dispatch(this, WebGLMultiDraw.prototype, "WebGLMultiDraw", "multiDrawArraysInstancedWEBGL", arguments) } });
                bodavm.toolsFunc.windowdefineProperty(WebGLMultiDraw.prototype, "multiDrawArraysWEBGL", { configurable: true, enumerable: true, writable: true, value: function multiDrawArraysWEBGL() { return bodavm.toolsFunc.dispatch(this, WebGLMultiDraw.prototype, "WebGLMultiDraw", "multiDrawArraysWEBGL", arguments) } });
                bodavm.toolsFunc.windowdefineProperty(WebGLMultiDraw.prototype, "multiDrawElementsInstancedWEBGL", { configurable: true, enumerable: true, writable: true, value: function multiDrawElementsInstancedWEBGL() { return bodavm.toolsFunc.dispatch(this, WebGLMultiDraw.prototype, "WebGLMultiDraw", "multiDrawElementsInstancedWEBGL", arguments) } });
                bodavm.toolsFunc.windowdefineProperty(WebGLMultiDraw.prototype, "multiDrawElementsWEBGL", { configurable: true, enumerable: true, writable: true, value: function multiDrawElementsWEBGL() { return bodavm.toolsFunc.dispatch(this, WebGLMultiDraw.prototype, "WebGLMultiDraw", "multiDrawElementsWEBGL", arguments) } });
                delete WebGLMultiDraw;
                break;
            default:
                console.log(`WebGLRenderingContext_getExtension `, `${getExtension}属性未实现  `);
                break;
        }

        return info
    }
    bodavm.envFunc.WebGLRenderingContext_getSupportedExtensions = function WebGLRenderingContext_getSupportedExtensions() {
        if (bodavm.config.isdebug) { debugger }
        let SupportedExtensions = [
            "ANGLE_instanced_arrays",
            "EXT_blend_minmax",
            "EXT_color_buffer_half_float",
            "EXT_disjoint_timer_query",
            "EXT_float_blend",
            "EXT_frag_depth",
            "EXT_shader_texture_lod",
            "EXT_texture_compression_bptc",
            "EXT_texture_compression_rgtc",
            "EXT_texture_filter_anisotropic",
            "WEBKIT_EXT_texture_filter_anisotropic",
            "EXT_sRGB",
            "KHR_parallel_shader_compile",
            "OES_element_index_uint",
            "OES_fbo_render_mipmap",
            "OES_standard_derivatives",
            "OES_texture_float",
            "OES_texture_float_linear",
            "OES_texture_half_float",
            "OES_texture_half_float_linear",
            "OES_vertex_array_object",
            "WEBGL_color_buffer_float",
            "WEBGL_compressed_texture_s3tc",
            "WEBKIT_WEBGL_compressed_texture_s3tc",
            "WEBGL_compressed_texture_s3tc_srgb",
            "WEBGL_debug_renderer_info",
            "WEBGL_debug_shaders",
            "WEBGL_depth_texture",
            "WEBKIT_WEBGL_depth_texture",
            "WEBGL_draw_buffers",
            "WEBGL_lose_context",
            "WEBKIT_WEBGL_lose_context",
            "WEBGL_multi_draw"
        ]
        console.log(`WebGLRenderingContext_getSupportedExtensions=== `, `${SupportedExtensions}  `);
        return SupportedExtensions
    }

    bodavm.envFunc.WebGLRenderingContext_getParameter = function WebGLRenderingContext_getParameter() {
        let pname = Number(arguments[0])
        if (bodavm.config.isdebug) { debugger }
        ;
        let resDict = {
            37446: `ANGLE (Intel, Intel(R) UHD Graphics 620 Direct3D11 vs_5_0 ps_5_0, D3D11)`,
            37445: 'Google Inc. (Intel)',
            3412: 8,
            3414: 24,
            3411: 8,
            34047: null,
            35661: 32,
            34076: 16384,
            36349: 1024,
            34024: 16384,
            34930: 16,
            3379: 16384,
            36348: 30,
            34921: 16,
            35660: 16,
            36347: 4096,
            35724: 'WebGL GLSL ES 1.0 (OpenGL ES GLSL ES 1.0 Chromium)',
            3415: 0,
            7938: 'WebGL 1.0 (OpenGL ES 2.0 Chromium)'
        }
        res = resDict[pname]
        if (res === undefined) return console.log(`WebGLRenderingContext_getParameter `, `${pname} 未实现`);
        console.log(`WebGLRenderingContext_getParameter `, `${pname}  `, `res ->${res}`)
        return res
    }
    //HTMLStyleElement
    bodavm.envFunc.HTMLStyleElement_sheet_get = function HTMLStyleElement_sheet_get() {
        if (bodavm.config.isdebug) { debugger }
        console.log(`HTMLStyleElement_sheet_get `, `${null}  `);
        return null
    }

    //HTMLIFrameElement
    bodavm.envFunc.HTMLIFrameElement_contentWindow_get = function HTMLIFrameElement_contentWindow_get() {
        console.log(`HTMLIFrameElement_contentWindow_get `, `这种补法存在问题,待完善`);
        // debugger;
        if (bodavm.config.isdebug) { debugger }

        contentwindow = {

        }
        contentwindow.top = contentwindow
        contentwindow.parent = contentwindow
        contentwindow.window = contentwindow
        contentwindow.self = contentwindow

        contentwindow.__proto__ =bodavm.memory.globalobj['Window'].prototype
        // contentwindow['top']='123'
        contentwindow = bodavm.toolsFunc.proxy(contentwindow, 'contentwindow')
        //这种补法存在问题,待完善
        return contentwindow
    }

    //HTMLAnchorElement


    //CSS
    bodavm.envFunc.CSS_supports = function CSS_supports() {
        let name = arguments[0]
        let value = arguments[1]
        if (bodavm.config.isdebug) { debugger };

        if (name == "overscroll-behavior" && value == "auto") {
            console.log(`CSS_supports `, `name->${name} `, `value->${value} `, "true");
            return true
        }
        if (name == "-webkit-overscroll-behavior" && value == "auto") {
            console.log(`CSS_supports `, `name->${name} `, `value->${value} `, "`false");
            return false
        }
        if (name == "-o-overscroll-behavior" && value == "auto") {
            console.log(`CSS_supports `, `name->${name} `, `value->${value} `, "false");
            return false
        }
        if (name == "-moz-overscroll-behavior" && value == "auto") {
            console.log(`CSS_supports `, `name->${name} `, `value->${value} `, "false");
            return false
        }
        if (name == "-ms-overscroll-behavior" && value == "auto") {
            console.log(`CSS_supports `, `name->${name} `, `value->${value} `, "false");
            return false
        }

    }
    //CSSStyleDeclaration_getPropertyValue
    bodavm.envFunc.CSSStyleDeclaration_getPropertyValue = function CSSStyleDeclaration_getPropertyValue() {
        let getPropertyValue = arguments[0]

        console.log(`CSSStyleDeclaration_getPropertyValue `, getPropertyValue, `!!!!!!!!!未完善!!!!!!!!!!!!   `);

    }
    //RTCPeerConnection_onicecandidate_set
    bodavm.envFunc.RTCPeerConnection_onicecandidate_set = function RTCPeerConnection_onicecandidate_set() {
        let onicecandidate = arguments[0]
        if (bodavm.config.isdebug) { debugger };
        this._onicecandidate = onicecandidate
        console.log(`RTCPeerConnection_onicecandidate_set    `, `onicecandidate->${onicecandidate}`);

        return onicecandidate
    }

    bodavm.envFunc.RTCPeerConnection_createOffer = function RTCPeerConnection_createOffer() {
        let successCallback = arguments[0]
        let failureCallback = arguments[1]
        let options = arguments[3]
        if (bodavm.config.isdebug) { debugger };
        bodavm.toolsFunc.symbolProperty(successCallback)
        bodavm.toolsFunc.symbolProperty(failureCallback)
        console.log(`RTCPeerConnection_createOffer `, `successCallback->${successCallback} `, `failureCallback->${failureCallback} `, `options->${options},!!!!!!!!!未完善!!!!!!!!!!!!  `);
        return new Promise((successCallback, failureCallback) => {

        }).then(successCallback => {
            successCallback()
        },
            failureCallback => {
                failureCallback()
            }
        )
    }



    bodavm.envFunc.MutationObserver_observe = function () {
        if (bodavm.config.isdebug) { debugger };
        let target = arguments[0]
        let options = arguments[1]
        // debugger
        let res = this._boarg.observe(target._boarg, options)
        console.log(`MutationObserver_observe `, `target->${target} `, `options->${options} `);
    }
    //HTMLImageElement

    bodavm.envFunc.HTMLImageElement_src_set = function HTMLImageElement_src_set() {
        if (bodavm.config.isdebug) { debugger };
        // debugger
        let img = arguments[0]
        this._boarg.src = img
        // this._elements['0'].attr['img'] = img
        console.log(`HTMLImageElement_src_set `, `img->${img}  `);
        return img
    }

    bodavm.envFunc.HTMLImageElement_height_get = function HTMLImageElement_height_get() {
        let height = 0
        if (bodavm.config.isdebug) { debugger };

        console.log(`HTMLImageElement_height_get `, `height->${height}  `);
        return height
    }
    bodavm.envFunc.HTMLImageElement_width_get = function HTMLImageElement_height_get() {
        let width = 0
        if (bodavm.config.isdebug) { debugger };

        console.log(`HTMLImageElement_width_get `, `width->${width}  `);
        return width
    }
    //MediaQueryList
    bodavm.envFunc.MediaQueryList_matches_get = function MediaQueryList_matches_get() {
        if (bodavm.config.isdebug) { debugger };
        // debugger
        let media_ = this._media
        let resbool = ''
        switch (media_) {
            case "(any-pointer: fine )":
                resbool = true
                console.log(`MediaQueryList_matches_get `, `media_ ->${media_}`, `resbool->${resbool}`);
                break
            case "(any-pointer: coarse )":
                resbool = false
                console.log(`MediaQueryList_matches_get `, `media_ ->${media_}`, `resbool->${resbool}`);
                break
            case "(any-pointer: none )":
                resbool = false
                console.log(`MediaQueryList_matches_get `, `media_ ->${media_}`, `resbool->${resbool}`);
                break
            case "(any-pointer )":
                resbool = true
                console.log(`MediaQueryList_matches_get `, `media_ ->${media_}`, `resbool->${resbool}`);
                break
            case "(any-hover: hover )":
                resbool = true
                console.log(`MediaQueryList_matches_get `, `media_ ->${media_}`, `resbool->${resbool}`);
                break
            case "(any-hover: on-demand )":
                resbool = false
                console.log(`MediaQueryList_matches_get `, `media_ ->${media_}`, `resbool->${resbool}`);
                break

            case "(any-hover: none )":
                resbool = false
                console.log(`MediaQueryList_matches_get `, `media_ ->${media_}`, `resbool->${resbool}`);
                break
            case "(any-hover )":
                resbool = true
                console.log(`MediaQueryList_matches_get `, `media_ ->${media_}`, `resbool->${resbool}`);
                break
            case "(color-gamut: srgb )":
                resbool = true
                console.log(`MediaQueryList_matches_get `, `media_ ->${media_}`, `resbool->${resbool}`);
                break
            case "(color-gamut: p3 )":
                resbool = false
                console.log(`MediaQueryList_matches_get `, `media_ ->${media_}`, `resbool->${resbool}`);
                break
            case "(color-gamut: rec2020 )":
                resbool = false
                console.log(`MediaQueryList_matches_get `, `media_ ->${media_}`, `resbool->${resbool}`);
                break
            case "(color-gamut )":
                resbool = true
                console.log(`MediaQueryList_matches_get `, `media_ ->${media_}`, `resbool->${resbool}`);
                break

            default:
                console.log(`MediaQueryList_matches_get `, `media_ ->${media_} 未实现`);
        }
        return resbool
    }


    //WebGLShaderPrecisionFormat
    bodavm.envFunc.WebGLShaderPrecisionFormat_rangeMin_get = function WebGLShaderPrecisionFormat_rangeMin_get() {
        console.log(`WebGLShaderPrecisionFormat_rangeMin_get `, 127);
        if (bodavm.config.isdebug) { debugger };

        return 127
    }

    bodavm.envFunc.WebGLShaderPrecisionFormat_rangeMax_get = function WebGLShaderPrecisionFormat_rangeMax_get() {
        console.log(`WebGLShaderPrecisionFormat_rangeMax_get `, 127);
        if (bodavm.config.isdebug) { debugger };

        return 127
    }
    bodavm.envFunc.WebGLShaderPrecisionFormat_precision_get = function WebGLShaderPrecisionFormat_precision_get() {
        console.log(`WebGLShaderPrecisionFormat_precision_get `, 23);
        if (bodavm.config.isdebug) { debugger };

        return 23
    }

    //BaseAudioContext
    bodavm.envFunc.BaseAudioContext_createOscillator = function BaseAudioContext_createOscillator() {
        console.log(`BaseAudioContext_createOscillator`, undefined);
        return undefined
    }



    //HTMLInputElement
    bodavm.envFunc.HTMLInputElement_type_get = function HTMLInputElement_type_get() {
        // debugger
        let tpye = this._boarg.attribs['type']
        console.log(`HTMLInputElement_type_get `, `type->${tpye}`);
        return tpye
    }
    bodavm.envFunc.HTMLInputElement_name_get = function HTMLInputElement_name_get() {
        // debugger
        let name_ = this._boarg.attribs['name']
        if (bodavm.config.isdebug) { debugger };
        console.log(`HTMLInputElement_name_get `, ` name->${name_}`);
        return name_
    }
    bodavm.envFunc.HTMLInputElement_value_get = function HTMLInputElement_value_get() {
        // debugger

        let value_ = this._boarg.attribs['value']
        if (bodavm.config.isdebug) { debugger };
        console.log(`HTMLInputElement_value_get `, ` value_->${value_}`);
        return value_
    }
}();
// 