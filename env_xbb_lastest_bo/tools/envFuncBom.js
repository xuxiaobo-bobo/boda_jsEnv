// BOM（浏览器对象模型）：

// window：表示浏览器窗口。
// location：获取或设置当前页面的URL。
// history：浏览器的历史记录。
// back：后退到上一个页面。
// forward：前进到下一个页面。
// go：前进或后退指定的步数。
// navigator：浏览器的信息。
// userAgent：浏览器的User Agent字符串。
// screen：表示用户的屏幕。
// width：屏幕的宽度。
// height：屏幕的高度。
;;
(function () {
    bodavm.envFunc.MediaDeviceInfo_deviceId_get=function (){
        // debugger
        console.log_copy(`MediaDeviceInfo_deviceId_get  ->res -> `,'默认返回""')
        return ''

    }
    bodavm.envFunc.location_ancestorOrigins_get=function (){
        debugger
        let res=new DOMStringList('bobo')
        console.log_copy(`location_ancestorOrigins_get  ->res -> `,res)

        return res
    }
    bodavm.envFunc.location_toString=function (){
        let string=location.href
        console.log_copy(`location_toString  ->res -> `,string)
        return string
    }
    bodavm.envFunc.Navigator_xr_get=function (){
        let islive=bodavm.toolsFunc.getProtoAttr.call(this,'xr')
        if (islive){
            console.log_copy(`Navigator_xr_get 已存在返回`,islive)
            return islive
        }
        let xr = new XRSystem('bobo')
        bodavm.toolsFunc.setProtoAttr.call(this,'xr',xr)
        console.log_copy(`Navigator_xr_get -> xr -> ${xr}`)
        return xr
    }
    bodavm.envFunc.Navigator_serial_get=function (){
        let islive=bodavm.toolsFunc.getProtoAttr.call(this,'serial')
        if (islive){
            console.log_copy(`Navigator_serial_get 已存在返回`,islive)
            return islive
        }
        let serial = new Serial('bobo')
        bodavm.toolsFunc.setProtoAttr.call(this,'serial',serial)
        console.log_copy(`Navigator_serial_get -> serial -> ${serial}`)
        return serial
    }

    bodavm.envFunc.Navigator_presentation_get=function (){
        let islive=bodavm.toolsFunc.getProtoAttr.call(this,'presentation')
        if (islive){
            console.log_copy(`Navigator_presentation_get 已存在返回`,islive)
            return islive
        }
        let presentation = new Presentation('bobo')
        bodavm.toolsFunc.setProtoAttr.call(this,'presentation',presentation)
        console.log_copy(`Navigator_presentation_get -> presentation -> ${presentation}`)
        return presentation
    }

    bodavm.envFunc.Navigator_permissions_get=function (){
        let islive=bodavm.toolsFunc.getProtoAttr.call(this,'permissions')
        if (islive){
            console.log_copy(`Navigator_permissions_get 已存在返回`,islive)
            return islive
        }
        let permissions = new Permissions('bobo')
        bodavm.toolsFunc.setProtoAttr.call(this,'permissions',permissions)
        console.log_copy(`Navigator_permissions_get -> permissions -> ${permissions}`)
        return permissions
    }
    bodavm.envFunc.Navigator_mediaSession_get=function (){
        let islive=bodavm.toolsFunc.getProtoAttr.call(this,'mediaSession')
        if (islive){
            console.log_copy(`Navigator_mediaSession_get 已存在返回`,islive)
            return islive
        }
        let mediaSession = new MediaSession('bobo')
        bodavm.toolsFunc.setProtoAttr.call(this,'mediaSession',mediaSession)
        console.log_copy(`Navigator_mediaSession_get -> mediaSession -> ${mediaSession}`)
        return mediaSession
    }

    bodavm.envFunc.Navigator_keyboard_get=function (){
        let islive=bodavm.toolsFunc.getProtoAttr.call(this,'keyboard')
        if (islive){
            console.log_copy(`Navigator_keyboard_get 已存在返回`,islive)
            return islive
        }
        let keyboard = new Keyboard('bobo')
        bodavm.toolsFunc.setProtoAttr.call(this,'keyboard',keyboard)
        console.log_copy(`Navigator_keyboard_get -> keyboard -> ${keyboard}`)
        return keyboard
    }

    bodavm.envFunc.Navigator_hid_get=function (){
        let ishid=bodavm.toolsFunc.getProtoAttr.call(this,'hid')
        if (ishid){
            console.log_copy(`Navigator_hid_get 已存在返回`,ishid)
            return ishid
        }
        let hid = new HID('bobo')
        bodavm.toolsFunc.setProtoAttr.call(this,'hid',hid)
        console.log_copy(`Navigator_hid_get -> hid -> ${hid}`)
        return hid
    }
    bodavm.envFunc.Navigator_credentials_get=function (){
        let iscredentials=bodavm.toolsFunc.getProtoAttr.call(this,'credentials')
        if (iscredentials){
            console.log_copy(`Navigator_credentials_get 已存在返回`,iscredentials)
            return iscredentials
        }
        let credentials = new CredentialsContainer('bobo')
        bodavm.toolsFunc.setProtoAttr.call(this,'credentials',credentials)
        console.log_copy(`Navigator_credentials_get -> credentials -> ${credentials}`)
        return credentials
    }
    bodavm.envFunc.Navigator_clipboard_get=function (){
        let isclipboard=bodavm.toolsFunc.getProtoAttr.call(this,'clipboard')
        if (isclipboard){
            console.log_copy(`Navigator_clipboard_get 已存在返回`,isclipboard)
            return isclipboard
        }
        let clipboard = new Clipboard('bobo')
        bodavm.toolsFunc.setProtoAttr.call(this,'clipboard',clipboard)
        console.log_copy(`Navigator_clipboard_get -> clipboard -> ${clipboard}`)
        return clipboard
    }
    bodavm.envFunc.MessagePort_onmessage_set = function () {
        let arg = arguments[0]
        let event = {
            'self': this,
            'callback': arg
        }
        bodavm.memory.asyncEvent['MessageChannel']['onmessage'].push(event)
        console.log_copy(`MessagePort_onmessage_set arg ->`, arg)
        return arg
    }
    bodavm.envFunc.Navigator_mediaDevices_get = function () {
        let ismediaDevices=bodavm.toolsFunc.getProtoAttr.call(this,'mediaDevices')
        if (ismediaDevices){
            console.log_copy(`Navigator_mediaDevices_get 已存在返回`,ismediaDevices)
            return ismediaDevices
        }
        let medias = new MediaDevices('bobo')
        bodavm.toolsFunc.setProtoAttr.call(this,'mediaDevices',medias)
        console.log_copy(`Navigator_mediaDevices_get -> medias -> ${medias}`)
        return medias

    }
    bodavm.envFunc.MediaDevices_enumerateDevices=function (){
        if (bodavm.memory.cache['MediaDevices_enumerateDevices']["res"] ) {
            console.log_copy(`MediaDevices_enumerateDevices cache已存在直接返回`)
            return bodavm.memory.cache['MediaDevices_enumerateDevices']["res"] 
        }

        let enulist=[new InputDeviceInfo('bobo'),new InputDeviceInfo('bobo'),new MediaDeviceInfo('bobo')]
        let promise=new Promise((resolve, reject) => {
            resolve(enulist);
        });
        console.log_copy(`MediaDevices_enumerateDevices  `, '获取当前可用媒体设备信息 ->', enulist, ` ->返回值为异步promise ->`, promise);
        bodavm.memory.cache['MediaDevices_enumerateDevices']["res"] = promise;
        // bodavm.memory.cache['MediaDevices_enumerateDevices']["this"] = this;
        return promise;
    }

    bodavm.envFunc.Navigator_wakeLock_get = function () {
        if (bodavm.memory.cache['Navigator_wakeLock_get']) {
            console.log_copy(`Navigator_wakeLock_get cache已存在直接返回`)
            return bodavm.memory.cache['Navigator_wakeLock_get']
        }

        let lock = new WakeLock('bobo')
        // bodavm.toolsFunc.setProtoAttr.call(lock,'issymbolProperty',true)
        bodavm.memory.cache['Navigator_wakeLock_get'] = lock
        console.log_copy(`Navigator_wakeLock_get -> res ->`, lock)
        return lock
    }
    bodavm.envFunc.location_origin_get = function () {
        let origin = bodavm.memory.location['origin']
        console.log_copy(`location_origin_get res->`, origin)

        return origin
    }
    bodavm.envFunc.WebSocket_onmessage_set = function () {
        let arg = arguments[0]
        bodavm.memory.asyncEvent['websocket']['onmessage'].push(arg)
        console.log_copy(this, ` -> WebSocket_onmessage_set -> arg ->`, arg)
        return arg

    }
    bodavm.envFunc.window_onerror_set = function () {
        let arg = arguments[0]
        bodavm.memory.asyncEvent['window']['onerror'].push(arg)
        console.log_copy(this, ` -> window_onerror_set -> arg ->`, arg)
        return arg

    }
    bodavm.envFunc.History_length_get=function (){
        console.log_copy(`History_length_get res->默认返回2`)
        return 2
    }
    bodavm.envFunc.History_replaceState = function () {
        let arg0 = arguments[0]
        let arg1 = arguments[1]
        let arg2 = arguments[2]

        console.log_copy(this, ` -> History_replaceState   需要触发popstate事件,暂时不实现-> arg0,arg1,arg2 ->`, arg0, ' -> ', arg1, ' -> ', arg2)
        let _href = bodavm.memory.location['_href']
        let _search = bodavm.memory.location['_search']
        let sufIndex = arg2.indexOf('?')
        if (sufIndex != -1) {
            let temp = arg2.slice(sufIndex)
            bodavm.memory.location['search'] = _search + temp
            bodavm.memory.location['href'] = _href + temp

        } else {
            bodavm.memory.location['search'] = ''
            bodavm.memory.location['href'] = _href + arg2

        }
    }

    bodavm.envFunc.NetworkInformation_effectiveType_get = function () {
        console.log_copy(this, ` -> NetworkInformation_effectiveType_get res-> 默认返回`, '4g')
        return '4g'

    }

    bodavm.envFunc.PerformanceEntry_name_get = function () {
        // let per=
        // debugger
        let thisNode = bodavm.toolsFunc.getProtoAttr.call(this, 'getEntriesByType')
        let _name = thisNode["name"]
        console.log_copy(`PerformanceEntry_name_get res->`, _name)
        return _name
    }
    bodavm.envFunc.Navigator_vendor_get = function () {
        let res = bodavm.memory.navigator['vendor']
        console.log_copy(`Navigator_vendor_get res->`, res);

        return res
    }
    bodavm.envFunc.Navigator_cookieEnabled_get = function () {
        let res = bodavm.memory.navigator['cookieEnabled']
        console.log_copy(`Navigator_cookieEnabled_get res->`, res);

        return true
    }
    bodavm.envFunc.Navigator_javaEnabled = function () {
        let res = bodavm.memory.navigator['javaEnabled']
        console.log_copy(`Navigator_javaEnabled res->`, res);

        return res
    }
    bodavm.envFunc.window_onload_get = function () {
        let res = bodavm.toolsFunc.getProtoAttr.call(this, 'onload')
        console.log_copy(`window_onload_get res->`, res);

        return res
    }

    bodavm.envFunc.window_onload_set = function () {
        let arg = arguments[0]
        bodavm.toolsFunc.setProtoAttr.call(this, 'onload', arg)
        console.log_copy(`window_onload_set arg->`, arg)
        return arg
    }

    bodavm.envFunc.Crypto_getRandomValues = function () {
        let arg = arguments[0]
        if (arg instanceof Uint8Array) {
            // debugger
            for (let index = 0; index < arg.length; index++) {
                arg[index] = 1

            }
            // res.__proto__=TypedArray.prototype
            // debugger
            console.log_copy(`Crypto_getRandomValues arg->`, arg, `长度->${arg.length} ->默认全部为1`)
            // debugger
            return arg
        } else {
            console.log_copy(`Crypto_getRandomValues arg->`, arg, `类型未实现!!!!!!!!!!!!`)

        }
    }

    bodavm.envFunc.Screen_onchange_set = function Screen_onchange_set() {
        let onchange = arguments[0]
        bodavm.memory.screen["onchange"] = onchange
        console.log_copy(`Screen_onchange_set `, `${onchange}  `)
        if (bodavm.config.isdebug) { debugger }
        return onchange
    }
    bodavm.envFunc.Screen_onchange_get = function Screen_onchange_get() {
        let onchange = bodavm.memory.screen["onchange"]
        console.log_copy(`Screen_onchange_get `, `${onchange}  `)
        if (bodavm.config.isdebug) { debugger }
        return onchange
    }

    bodavm.envFunc.Screen_width_get = function Screen_width_get() {
        let width = 1440
        console.log_copy(`Screen_width_get `, `${width}  `)
        if (bodavm.config.isdebug) { debugger }
        return width
    }
    bodavm.envFunc.Screen_height_get = function Screen_height_get() {
        let height = 960
        console.log_copy(`Screen_height_get `, `${height}  `)
        if (bodavm.config.isdebug) { debugger }
        return height
    }
    bodavm.envFunc.Screen_pixelDepth_get = function Screen_pixelDepth_get() {
        let pixelDepth = bodavm.memory.screen["pixelDepth"]
        console.log_copy(`Screen_pixelDepth_get `, `${pixelDepth}  `)
        if (bodavm.config.isdebug) { debugger }
        return pixelDepth
    }
    bodavm.envFunc.Screen_colorDepth_get = function Screen_colorDepth_get() {
        let colorDepth = 24
        console.log_copy(`Screen_colorDepth_get `, `${colorDepth}  `)
        if (bodavm.config.isdebug) { debugger }
        return colorDepth
    }
    bodavm.envFunc.Screen_availWidth_get = function Screen_availWidth_get() {
        let availWidth = 1440
        console.log_copy(`Screen_availWidth_get `, `${availWidth}  `)
        if (bodavm.config.isdebug) { debugger }
        return availWidth
    }
    bodavm.envFunc.Screen_availLeft_get = function Screen_availLeft_get() {
        let availLeft = bodavm.memory.screen["availLeft"]
        console.log_copy(`Screen_availLeft_get `, `${availLeft}  `)
        if (bodavm.config.isdebug) { debugger }
        return availLeft
    }
    bodavm.envFunc.Screen_availTop_get = function Screen_availTop_get() {
        let availTop = bodavm.memory.screen["availTop"]
        console.log_copy(`Screen_availTop_get `, `${availTop}  `)
        if (bodavm.config.isdebug) { debugger }
        return availTop
    }
    bodavm.envFunc.Screen_orientation_get = function Screen_orientation_get() {
        let orientation = bodavm.memory.screen["orientation"]
        console.log_copy(`Screen_orientation_get `, `${orientation}  `)
        if (bodavm.config.isdebug) { debugger }
        Object.setPrototypeOf(orientation, ScreenOrientation.prototype)
        return orientation
    }
    bodavm.envFunc.Screen_isExtended_get = function Screen_isExtended_get() {
        let isExtended = bodavm.memory.screen["isExtended"]
        console.log_copy(`Screen_isExtended_get `, `${isExtended}  `)
        if (bodavm.config.isdebug) { debugger }
        return isExtended
    }
    bodavm.envFunc.Screen_availHeight_get = function Screen_availHeight_get() {
        let availHeight = 912
        console.log_copy(`Screen_availHeight_get `, `${availHeight}  `)
        if (bodavm.config.isdebug) { debugger }
        return availHeight
    }

    bodavm.envFunc.Navigator_language_get = function () {
        let res = bodavm.memory.navigator['language']
        console.log_copy(`Navigator_language_get  res->`, res);
        return res
    }
    bodavm.envFunc.Navigator_locks_get = function () {
        if (bodavm.memory.cache['Navigator_locks_get']) {
            console.log_copy(`Navigator_locks_get cache已存在直接返回`)
            return bodavm.memory.cache['Navigator_locks_get']

        }
        let locks_ = new LockManager('bobo')
        console.log_copy(`Navigator_locks_get  res->`, locks_);
        bodavm.memory.cache['Navigator_locks_get'] = locks_
        return locks_
    }




    bodavm.envFunc.window_matchMedia = function window_matchMedia() {
        // debugger
        let arg = arguments[0]
        let res = new MediaQueryList('bobo')
        console.log_copy(`window_matchMedia `, `arg ->${arg}`, `-> res ->${res}`);
        bodavm.toolsFunc.setProtoAttr.call(res, 'matchMedia', arg)
        return res
    }



    bodavm.envFunc.Navigator_productSub_get = function () {
        if (bodavm.config.isdebug) { debugger; }
        let productSub = bodavm.memory.navigator["productSub"]
        console.log_copy(`Navigator_productSub_get `, `${productSub}  `);
        return productSub
    }
    bodavm.envFunc.Navigator_appName_get = function Navigator_appName_get() {
        let appName = bodavm.memory.navigator["appName"]
        console.log_copy(`Navigator_appName_get `, `${appName}  `);
        if (bodavm.config.isdebug) { debugger };;

        return appName
    }
    bodavm.envFunc.Navigator_hardwareConcurrency_get = function Navigator_hardwareConcurrency_get() {
        console.log_copy(`Navigator_hardwareConcurrency_get `, `${8}  `);
        return 8
    }



    bodavm.envFunc.window_external_get = function () {
        let res__ = bodavm.memory.cache["window_external_get"]
        if (res__) {
            console.log_copy(`window_external_get cache已存在,直接返回`, res__)
            return res__
        }
        let res_ = new External('bobo')
        console.log_copy(`window_external_get res->`, res_)
        bodavm.memory.cache["window_external_get"] = res_
        return res_
    }

    bodavm.envFunc.window_cookieStore_get = function () {
        let res__ = bodavm.memory.cache["window_cookieStore_get"]
        if (res__) {
            console.log_copy(`window_cookieStore_get cache已存在,直接返回`, res__)
            return res__
        }
        let res_ = new CookieStore('bobo')
        console.log_copy(`window_cookieStore_get res->`, res_)
        bodavm.memory.cache["window_cookieStore_get"] = res_
        return res_
    }
    bodavm.envFunc.window_speechSynthesis_get = function () {
        let res__ = bodavm.memory.cache["window_speechSynthesis_get"]
        if (res__) {
            console.log_copy(`window_speechSynthesis_get cache已存在,直接返回`, res__)
            return res__
        }
        let res_ = new bodavm.memory.notDefined['SpeechSynthesis']('bobo')
        console.log_copy(`window_speechSynthesis_get res->`, res_)
        bodavm.memory.cache["window_speechSynthesis_get"] = res_
        return res_
    }

    bodavm.envFunc.window_styleMedia_get = function () {
        let res__ = bodavm.memory.cache["window_styleMedia_get"]
        if (res__) {
            console.log_copy(`window_styleMedia_get cache已存在,直接返回`, res__)
            return res__
        }
        let res_ = new bodavm.memory.notDefined['StyleMedia']('bobo')
        console.log_copy(`window_styleMedia_get res->`, res_)
        bodavm.memory.cache["window_styleMedia_get"] = res_
        return res_
    }
    bodavm.envFunc.window_launchQueue_get = function () {
        let res__ = bodavm.memory.cache["window_launchQueue_get"]
        if (res__) {
            console.log_copy(`window_launchQueue_get cache已存在,直接返回`, res__)
            return res__
        }
        let res_ = new LaunchQueue('bobo')
        console.log_copy(`window_launchQueue_get res->`, res_)
        bodavm.memory.cache["window_launchQueue_get"] = res_
        return res_
    }

    bodavm.envFunc.window_performance_get = function () {
        let res__ = bodavm.memory.cache["window_performance_get"]
        if (res__) {
            console.log_copy(`window_performance_get cache已存在,直接返回`, res__)
            return res__
        }
        let res_ = new Performance('bobo')
        console.log_copy(`window_performance_get res->`, res_)
        bodavm.memory.cache["window_performance_get"] = res_
        return res_
    }
    bodavm.envFunc.window_screen_get = function () {
        let res__ = bodavm.memory.cache["window_screen_get"]
        if (res__) {
            // console.log_copy(`window_screen_get cache已存在,直接返回`, res__)
            return res__
        }
        let res_ = new Screen('bobo')
        console.log_copy(`window_screen_get res->`, res_)
        bodavm.memory.cache["window_screen_get"] = res_
        return res_
    }

    bodavm.envFunc.window_scheduler_get = function () {
        let res__ = bodavm.memory.cache["window_scheduler_get"]
        if (res__) {
            console.log_copy(`window_scheduler_get cache已存在,直接返回`, res__)
            return res__
        }
        let res_ = new Scheduler('bobo')
        console.log_copy(`window_scheduler_get res->`, res_)
        bodavm.memory.cache["window_scheduler_get"] = res_
        return res_
    }
    bodavm.envFunc.window_clientInformation_get = function () {
        console.log_copy(`window_clientInformation_get res->`, navigator)
        return navigator
    }

    bodavm.envFunc.window_history_get = function () {
        let res__ = bodavm.memory.cache["window_history_get"]
        if (res__) {
            console.log_copy(`window_history_get cache已存在,直接返回`, res__)
            return res__
        }
        let res_ = new History('bobo')
        console.log_copy(`window_history_get res->`, res_)
        bodavm.memory.cache["window_history_get"] = res_
        return res_
    }


    bodavm.envFunc.window_caches_get = function () {
        if (bodavm.memory.cache["window_caches_get"]) {
            console.log_copy(`caches_ cache已存在,直接返回`, bodavm.memory.cache['window_caches_get'])

            return bodavm.memory.cache["window_caches_get"]
        }
        let res_ = new CacheStorage('bobo')
        console.log_copy(`window_caches_get res->`, res_)
        bodavm.memory.cache["window_caches_get"] = res_
        return res_
    }

    bodavm.envFunc.window_offscreenBuffering_get = function () {
        console.log_copy(`window_offscreenBuffering_get res->true`,)

        return true
    }
    bodavm.envFunc.window_customElements_get = function () {
        if (bodavm.memory.cache['window_customElements_get']) {
            console.log_copy(`window_customElements_get cache已存在直接返回->`,)

            return bodavm.memory.cache['window_customElements_get']

        }
        let res_ = new CustomElementRegistry('bobo')
        console.log_copy(`window_customElements_get res->`, res_)
        bodavm.memory.cache['window_customElements_get'] = res_

        return res_
    }


    bodavm.envFunc.window_locationbar_get = function () {
        let res__ = bodavm.memory.cache["window_locationbar_get"]
        if (res__) {
            console.log_copy(`window_locationbar_get cache已存在,直接返回`, res__)
            return res__
        }
        let res_ = new BarProp('bobo')
        console.log_copy(`window_locationbar_get res->`, res_)
        bodavm.memory.cache["window_locationbar_get"] = res_
        return res_
    }

    bodavm.envFunc.window_menubar_get = function () {
        let res__ = bodavm.memory.cache["window_menubar_get"]
        if (res__) {
            console.log_copy(`window_menubar_get cache已存在,直接返回`, res__)
            return res__
        }
        let res_ = new BarProp('bobo')
        console.log_copy(`window_menubar_get res->`, res_)
        bodavm.memory.cache["window_menubar_get"] = res_
        return res_
    }


    bodavm.envFunc.window_toolbar_get = function () {
        let res__ = bodavm.memory.cache["window_toolbar_get"]
        if (res__) {
            console.log_copy(`window_toolbar_get cache已存在,直接返回`, res__)
            return res__
        }
        let res_ = new BarProp('bobo')
        console.log_copy(`window_toolbar_get res->`, res_)
        bodavm.memory.cache["window_toolbar_get"] = res_
        return res_
    }

    bodavm.envFunc.window_trustedTypes_get = function () {
        let res__ = bodavm.memory.cache["window_trustedTypes_get"]
        if (res__) {
            console.log_copy(`window_trustedTypes_get cache已存在,直接返回`, res__)
            return res__
        }
        let res_ = new TrustedTypePolicyFactory('bobo')
        console.log_copy(`window_trustedTypes_get res->`, res_)
        bodavm.memory.cache["window_trustedTypes_get"] = res_
        return res_
    }
    bodavm.envFunc.window_crypto_get = function () {
        let res__ = bodavm.memory.cache["window_crypto_get"]
        if (res__) {
            console.log_copy(`window_crypto_get cache已存在,直接返回`, res__)
            return res__
        }
        let res_ = new Crypto('bobo')
        console.log_copy(`window_crypto_get res->`, res_)
        bodavm.memory.cache["window_crypto_get"] = res_
        return res_
    }
    bodavm.envFunc.window_visualViewport_get = function () {
        let res__ = bodavm.memory.cache["window_visualViewport_get"]
        if (res__) {
            console.log_copy(`window_visualViewport_get cache已存在,直接返回`, res__)
            return res__
        }
        let res_ = new VisualViewport('bobo')
        console.log_copy(`window_visualViewport_get res->`, res_)
        bodavm.memory.cache["window_visualViewport_get"] = res_
        return res_
    }
    bodavm.envFunc.window_navigation_get = function () {
        let res__ = bodavm.memory.cache["window_navigation_get"]
        if (res__) {
            console.log_copy(`window_navigation_get cache已存在,直接返回`, res__)
            return res__
        }
        let res_ = new Navigation('bobo')
        console.log_copy(`window_navigation_get res->`, res_)
        bodavm.memory.cache["window_navigation_get"] = res_
        return res_
    }


    bodavm.envFunc.window_navigator_get = function () {
        if (bodavm.memory.cache["window_navigator_get"]) {
            return bodavm.memory.cache["window_navigator_get"]
        }
        let navigator_ = new Navigator('bobo')
        console.log_copy(`window_navigator_get res->`, navigator_)
        bodavm.memory.cache["window_navigator_get"] = navigator_

        return navigator_
    }
    bodavm.envFunc.window_indexedDB_get = function () {
        if (bodavm.memory.cache["window_indexedDB_get"]) {
            console.log_copy(`indexedDB_ cache已存在,直接返回`, bodavm.memory.cache['window_indexedDB_get'])

            return bodavm.memory.cache["window_indexedDB_get"]
        }
        let indexedDB_ = new IDBFactory('bobo')
        console.log_copy(`window_indexedDB_get res->`, indexedDB_)
        bodavm.memory.cache["window_indexedDB_get"] = indexedDB_
        return indexedDB_
    }
    bodavm.envFunc.window_sessionStorage_get = function () {
        if (bodavm.memory.cache["window_sessionStorage_get"]) {
            console.log_copy(`sessionStorage cache已存在,直接返回`, bodavm.memory.cache['window_sessionStorage_get'])

            return bodavm.memory.cache["window_sessionStorage_get"]
        }
        let sessionStorage_ = new Storage('bobo')
        console.log_copy(`window_sessionStorage_get res->`, sessionStorage_)
        bodavm.memory.cache["window_sessionStorage_get"] = sessionStorage_
        return sessionStorage_

    }
    bodavm.envFunc.window_localStorage_get = function () {
        if (bodavm.memory.cache["window_localStorage_get"]) {
            console.log_copy(`localStorage cache已存在,直接返回`, bodavm.memory.cache['window_localStorage_get'])

            return bodavm.memory.cache["window_localStorage_get"]
        }
        let localStorage_ = new Storage('bobo')
        console.log_copy(`window_localStorage_get res->`, localStorage_)
        bodavm.memory.cache["window_localStorage_get"] = localStorage_
        return localStorage_

    }
    bodavm.envFunc.window_document_get = function () {

        if (bodavm.memory.cache["window_document_get"]) {
            // debugger
            // console.log_copy(`document cache已存在,直接返回`, bodavm.memory.cache['window_document_get'])

            return bodavm.memory.cache["window_document_get"]
        }
        let document_ = new HTMLDocument('bobo')
        console.log_copy(`window_document_get res->`, document_)
        bodavm.memory.cache["window_document_get"] = document_
        return document_
    }
    bodavm.envFunc.Performance_now = function () {
        console.log_copy(`Performance_now -> res`, 4809.79999999702)
        return 4809.79999999702
    }

    bodavm.envFunc.Navigator_connection_get = function () {
        if (bodavm.memory.cache['Navigator_connection_get']) {
            console.log_copy(`Navigator_connection_get cache已存在,直接返回`, bodavm.memory.cache['Navigator_connection_get'])
            return bodavm.memory.cache['Navigator_connection_get']
        }
        let networkInformation = new NetworkInformation('bobo')
        bodavm.memory.cache['Navigator_connection_get'] = networkInformation
        console.log_copy(`Navigator_connection_get res->`, networkInformation)
        return networkInformation
    }
    bodavm.envFunc.window_onbeforeunload_set = function () {
        ///
        let arg = arguments[0]
        bodavm.memory.window['onbeforeunload'] = arg
        console.log_copy(`window_onbeforeunload_set 未完善`)
        return arg
    }

    bodavm.envFunc.window_length_get = function () {
        if (bodavm.config.isdebug) {
            debugger;
        }
        let _length = boda$('iframe').get().length
            ;
        console.log_copy(`window_length_get   res->`, _length);
        return _length;
    };


    bodavm.envFunc.Navigator_platform_get = function () {
        if (bodavm.config.isdebug) {
            debugger;
        }
        ;
        let platform = bodavm.memory.navigator['platform'];
        console.log_copy(`Navigator_platform_get res->`, platform);
        return platform;
    };

    bodavm.envFunc.location_hash_get = function () {
        if (bodavm.config.isdebug) {
            debugger;
        }
        ;
        let _host = bodavm.memory.location['hash'];
        console.log_copy(`location_hash_get `, `res ->${_host}`);
        return _host;
    };
    bodavm.envFunc.location_host_get = function () {
        if (bodavm.config.isdebug) {
            debugger;
        }
        ;
        let _host = bodavm.memory.location['host'];
        console.log_copy(`location_host_get `, `res ->${_host}`);
        return _host;
    };


    bodavm.envFunc.location_pathname_get = function () {
        if (bodavm.config.isdebug) {
            debugger;
        }
        ;
        let pathname = bodavm.memory.location['pathname'];
        console.log_copy(`location_pathname_get `, `arg ->${pathname}`);
        return pathname;
    };



    bodavm.envFunc.location_hostname_get = function () {
        if (bodavm.config.isdebug) {
            debugger;
        }
        ;
        let hostname_ = bodavm.memory.location['hostname'];
        console.log_copy(`location_hostname_get `, `arg ->${hostname_}`);
        return hostname_;
    };

    bodavm.envFunc.location_port_get = function () {
        if (bodavm.config.isdebug) {
            debugger;
        }
        ;
        let _port = bodavm.memory.location['port'];
        console.log_copy(`location_port_get `, `res ->${_port}`);
        return _port;
    };



    bodavm.envFunc.window_onbeforeunload_get = function () {
        if (bodavm.config.isdebug) {
            debugger;
        }
        ;
        let res = bodavm.memory.window['onbeforeunload'];
        console.log_copy(`window_onbeforeunload_get `, `res ->${res}  ,未完善,用于在窗口即将关闭或刷新时执行的函数`);
        return res;
    };
    bodavm.envFunc.window_onmessage_get = function () {
        if (bodavm.config.isdebug) {
            debugger;
        }
        ;
        let res = bodavm.memory.window['onmessage'];
        console.log_copy(`window_onmessage_get `, `res ->${res}  ,未完善,需要配合iframe补全`);
        return res;
    };
    bodavm.envFunc.window_devicePixelRatio_get = function () {
        if (bodavm.config.isdebug) {
            debugger;
        }
        ;
        // let x=bodavm.memory.scroll[1]
        console.log_copy(`window_devicePixelRatio_get `, `res ->${1.5}`);
        return 1.5;
    };
    bodavm.envFunc.window_pageYOffset_get = function () {
        if (bodavm.config.isdebug) {
            debugger;
        }
        ;
        let x = bodavm.memory.scroll[1];
        console.log_copy(`window_pageYOffset_get `, `res ->${x}`);
        return x;
    };
    bodavm.envFunc.window_pageXOffset_get = function () {
        if (bodavm.config.isdebug) {
            debugger;
        }
        ;
        let x = bodavm.memory.scroll[0];
        console.log_copy(`window_pageXOffset_get `, `res ->${x}`);
        return x;
    };
    bodavm.envFunc.window_scrollY_get = function () {
        if (bodavm.config.isdebug) {
            debugger;
        }
        ;
        let x = bodavm.memory.scroll[1];
        console.log_copy(`window_scrollY_get `, `res ->${x}`);
        return x;
    };
    bodavm.envFunc.window_scrollX_get = function () {
        if (bodavm.config.isdebug) {
            debugger;
        }
        ;
        let x = bodavm.memory.scroll[0];
        console.log_copy(`window_origin_get `, `res ->${x}`);
        return x;
    };
    bodavm.envFunc.window_origin_get = function () {
        if (bodavm.config.isdebug) {
            debugger;
        }
        ;
        let res = bodavm.memory.window['origin'];
        console.log_copy(`window_origin_get `, `res ->${res}`);
        return res;
    };
    bodavm.envFunc.window_status_get = function () {
        if (bodavm.config.isdebug) {
            debugger;
        }
        ;
        console.log_copy(`window_status_get `, `res ->${""}`);
        return "";
    };
    bodavm.envFunc.window_closed_get = function () {
        if (bodavm.config.isdebug) {
            debugger;
        }
        ;
        console.log_copy(`window_closed_get `, `res ->${false}`);
        return false;
    };
    bodavm.envFunc.window_screenY_get = function () {
        if (bodavm.config.isdebug) {
            debugger;
        }
        ;
        console.log_copy(`window_screenY_get `, `screenY ->${0}`);
        return 0;
    };
    bodavm.envFunc.window_screenX_get = function () {
        if (bodavm.config.isdebug) {
            debugger;
        }
        ;
        console.log_copy(`window_screenX_get `, `screenX ->${0}`);
        return 0;
    };
    bodavm.envFunc.window_screenTop_get = function () {
        if (bodavm.config.isdebug) {
            debugger;
        }
        ;
        console.log_copy(`window_screenTop_get `, `screenTop ->${0}`);
        return 0;
    };
    bodavm.envFunc.window_screenLeft_get = function () {
        if (bodavm.config.isdebug) {
            debugger;
        }
        ;
        console.log_copy(`window_screenLeft_get `, `screenLeft ->${0}`);
        return 0;
    };
    bodavm.envFunc.window_innerHeight_get = function () {
        if (bodavm.config.isdebug) {
            debugger;
        }
        ;
        let innerHeight = 803;
        console.log_copy(`window_innerHeight_get `, `innerHeight ->${innerHeight}`);
        return innerHeight;
    };
    bodavm.envFunc.window_innerWidth_get = function () {
        if (bodavm.config.isdebug) {
            debugger;
        }
        ;
        let innerWidth = 1440;
        console.log_copy(`window_innerWidth_get `, `innerWidth ->${innerWidth}`);
        return innerWidth;
    };
    bodavm.envFunc.window_outerWidth_get = function window_outerWidth_get() {
        if (bodavm.config.isdebug) {
            debugger;
        }
        ;
        let outerWidth = 1440;
        console.log_copy(`window_outerWidth_get `, `outerWidth ->${outerWidth}`);
        return outerWidth;
    };
    bodavm.envFunc.window_outerHeight_get = function window_outerHeight_get() {
        if (bodavm.config.isdebug) {
            debugger;
        }
        ;
        let outerHeight = 912;
        console.log_copy(`window_outerHeight_get `, `outerHeight ->${outerHeight}`);
        return outerHeight;
    };


    bodavm.envFunc.Navigator_webdriver_get = function () {
        if (bodavm.config.isdebug) {
            debugger;
        }
        ;
        console.log_copy("Navigator_webdriver_get ->", false);
        return false;
    };



    bodavm.envFunc.Navigator_getBattery = function () {
        if (bodavm.config.isdebug) {
            debugger;
        }
        ;
        if (bodavm.memory.cache["Navigator_getBattery"]['this'] == this) {
            let cacheValue = bodavm.memory.cache["Navigator_getBattery"]['res'];
            console.log_copy(`Navigator_getBattery 已存在,直接从cache中取值`, 'res- >', cacheValue);
            return cacheValue;
        }
        let batteryManager = new BatteryManager('bobo');
        // batteryManager._boisinit=true
        // debugger

        // bodavm.toolsFunc.symbolProperty(batteryManager)
        let promise = new Promise((resolve, reject) => {
            resolve(batteryManager);
        });
        console.log_copy(`Navigator_getBattery  `, '添加异步电池信息 ->', batteryManager, ` ->返回值为异步promise ->`, promise);
        bodavm.memory.cache['Navigator_getBattery']["res"] = promise;
        bodavm.memory.cache['Navigator_getBattery']["this"] = this;
        return promise;
    };
    bodavm.envFunc.location_protocol_get = function () {
        if (bodavm.config.isdebug) {
            debugger;
        }
        ;
        let protocol = bodavm.memory.location['protocol'];
        console.log_copy(`location_protocol_get res->`, protocol);
        return protocol;
    };
    bodavm.envFunc.Navigator_appVersion_get = function () {
        if (bodavm.config.isdebug) {
            debugger;
        }
        ;
        let appVersion = bodavm.memory.navigator['appVersion'];
        console.log_copy(`Navigator_appVersion_get res->`, appVersion);
        return appVersion;
    };
    bodavm.envFunc.Navigator_languages_get = function () {
        if (bodavm.config.isdebug) {
            debugger;
        }
        ;
        let langues = bodavm.memory.navigator['languages'];
        console.log_copy(`Navigator_languages_get res->`, langues);
        return langues;
    };
    bodavm.envFunc.Navigator_webkitPersistentStorage_get = function () {
        if (bodavm.config.isdebug) {
            debugger;
        }
        ;
        // debugger
        if (bodavm.memory.cache["Navigator_webkitPersistentStorage_get"]['this'] == this) {
            let cacheValue = bodavm.memory.cache["Navigator_webkitPersistentStorage_get"]['res'];
            console.log_copy(`Navigator_webkitPersistentStorage_get 已存在,直接从cache中取值`, 'res- >', cacheValue);
            return cacheValue;
        }
        let _webkit = new bodavm.memory.notDefined["DeprecatedStorageQuota"]("bobo");
        // delete _webkit.__proto__.constructor
        bodavm.memory.cache['Navigator_webkitPersistentStorage_get']["res"] = _webkit;
        bodavm.memory.cache['Navigator_webkitPersistentStorage_get']["this"] = this;
        console.log_copy(`Navigator_webkitPersistentStorage_get res->`, _webkit);
        return _webkit;
    };
    bodavm.envFunc.Navigator_userAgent_get = function () {
        if (bodavm.config.isdebug) {
            debugger;
        }
        ;
        let ua = bodavm.memory.navigator["userAgent"];
        console.log_copy(`Navigator_userAgent_get res->`, ua);
        return ua;
    };
    bodavm.envFunc.location_href_get = function () {
        if (bodavm.config.isdebug) {
            debugger;
        }
        ;
        //   debugger;
        let _href = bodavm.memory.location['href'];
        console.log_copy(`location_href_get res->`, _href);
        return _href;
    };
    bodavm.envFunc.window_name_set = function () {
        if (bodavm.config.isdebug) {
            debugger;
        }
        ;
        let arg = arguments[0];
        bodavm.memory.window['name'] = arg;
        console.log_copy(`window_name_set res->`, arg);
        return arg;
    };
    bodavm.envFunc.window_name_get = function () {
        if (bodavm.config.isdebug) {
            debugger;
        }
        ;
        let name_ = bodavm.memory.window['name'];
        console.log_copy(`window_name_get res->`, name_);
        return name_;
    };
    bodavm.envFunc.location_search_get = function () {
        let search_ = bodavm.memory.location['search']
        console.log_copy(`location_search_get res ->`, search_)
        return search_

    }
    bodavm.envFunc.location_replace = function () {
        let r = arguments[0]
        debugger
        // res = bodaobj.location.replace(r)
        console.log_copy(`location_replace `, `replace->${r}`,);
        console.log_copy(`--------------------页面跳转停止执行--------------------`,);
        console.log_copy(`--------------------页面跳转停止执行--------------------`,);
        console.log_copy(`--------------------直接执行lastDeal--------------------`,);
        console.log_copy(document.cookie)
        // throw ('End', `--------------------直接执行lastDeal--------------------`)

    }

    bodavm.envFunc.Navigator_plugins_get = function () {
        let pluginArray_ = bodavm.memory.globalInit.pluginArrayCopy
        // pluginArray_=bodavm.toolsFunc.proxy2(pluginArray_,'pluginArray:proxy2')
        console.log_copy(`Navigator_plugins_get res ->`, pluginArray_)
        return pluginArray_

    }
    bodavm.envFunc.location_valueOf = function () {
        let locationValue = bodavm.memory.cache['location'];
        console.log_copy(`location_valueOf res ->`, locationValue);
        return locationValue;
    }
    bodavm.envFunc.window_alert = function () {
        let alert_ = bodavm.memory.globalInit['alert']
        console.log_copy(`window_alert -> res- > bodavm.memory.globalInit['alert'] -> alert`,)
        return alert_
    }

    bodavm.envFunc.MessageChannel_port2_get = function () {
        if (bodavm.config.isdebug) {
            debugger;
        }
        ;
        if (bodavm.memory.cache['MessageChannel_port2_get']['res'] && bodavm.memory.cache['MessageChannel_port2_get']['this'] == this) {
            let cachePort2 = bodavm.memory.cache['MessageChannel_port2_get']['res'];
            console.log_copy(`MessageChannel_port2_get 已存在,直接从cache中取值`, 'res- >', cachePort2);
            return cachePort2;
        }
        // let cachePort2=
        let mesPort = new MessagePort('bobo');
        bodavm.memory.cache['MessageChannel_port2_get']['res'] = mesPort;
        bodavm.memory.cache['MessageChannel_port2_get']['this'] = this;
        console.log_copy(`MessageChannel_port2_get -> `, ` -> res ->`, mesPort);
        return mesPort;
    };
    bodavm.envFunc.MessageChannel_port1_get = function () {
        if (bodavm.config.isdebug) {
            debugger;
        }
        ;
        if (bodavm.memory.cache['MessageChannel_port1_get']['res'] && bodavm.memory.cache['MessageChannel_port1_get']['this'] == this) {
            let cachePort2 = bodavm.memory.cache['MessageChannel_port1_get']['res'];
            console.log_copy(`MessageChannel_port1_get 已存在,直接从cache中取值`, 'res- >', cachePort2);
            return cachePort2;
        }
        // let cachePort2=
        let mesPort = new MessagePort('bobo');
        bodavm.memory.cache['MessageChannel_port1_get']['res'] = mesPort;
        bodavm.memory.cache['MessageChannel_port1_get']['this'] = this;
        console.log_copy(`MessageChannel_port1_get -> `, ` -> res ->`, mesPort);
        return mesPort;
    };


    bodavm.envFunc.StorageManager_estimate = function () {
        if (bodavm.config.isdebug) {
            debugger;
        }
        ;
        // debugger

        let res = {
            quota: bodavm.memory.estimate['quota'],
            usage: bodavm.memory.estimate['usage'],
            usageDetails: {
                indexedDB: bodavm.memory.estimate['indexedDB']
            }
        };
        let promise = new Promise((resolve, reject) => {
            resolve(res);
        });
        console.log_copy(`StorageManager_estimate `, `-> res ->${promise}`);
        return promise;
    };
    bodavm.envFunc.Performance_getEntriesByType = function () {
        if (bodavm.config.isdebug) {
            debugger;
        }
        ;
        let type = arguments[0];
        let typeList = []
        if (type == 'resource') {
            let reslist = bodavm.memory.Performance['getEntriesByType'];
            // numm=0
            for (let res of reslist) {
                let res_ = new PerformanceResourceTiming('bobo');
                bodavm.toolsFunc.setProtoAttr.call(res_, 'getEntriesByType', res)
                typeList.push(res_)
                // numm+=1
            }
            //  debugger
            console.log_copy(`Performance_getEntriesByType- >`, `arg->${type}`, `-> res ->${typeList}`);
            return typeList;
        }
    };

    bodavm.envFunc.Performance_timeOrigin_get = function () {
        if (bodavm.config.isdebug) {
            debugger;
        }
        ;
        let date = bodavm.memory.Performance['timeOrigin'];
        console.log_copy(`Performance_timeOrigin_get-> `, `-> res ->${date}`);
        return date;
    };
    bodavm.envFunc.BarProp_visible_get = function BarProp_visible_get() {
        if (bodavm.config.isdebug) {
            debugger;
        }
        ;
        // debugger
        let boolres = true;
        console.log_copy(`BarProp_visible_get `, `boolres ->${boolres}`, `未完善`);
        return boolres;
    };
    bodavm.envFunc.XMLHttpRequest_setRequestHeader = function () {
        let header = arguments[0]
        let value = arguments[1]
        bodavm.toolsFunc.setProtoAttr.call(this, 'setRequestHeader', arguments)
        // debugger
        console.log_copy(`XMLHttpRequest_setRequestHeader `, `header -> ${header} ->value->${value}`);

    }

    bodavm.envFunc.XMLHttpRequest_responseText_get = function () {
        let responseText = bodavm.toolsFunc.getProtoAttr.call(this, 'responseText') ? bodavm.toolsFunc.getProtoAttr.call(this, 'responseText') : null
        console.log_copy(`XMLHttpRequest_responseText_get `, `responseText -> ${responseText}`);

        return responseText
    }
    bodavm.envFunc.XMLHttpRequest_responseXML_get = function () {
        let responseXML = bodavm.toolsFunc.getProtoAttr.call(this, 'responseXML') ? bodavm.toolsFunc.getProtoAttr.call(this, 'responseXML') : null
        console.log_copy(`XMLHttpRequest_responseXML_get `, `responseXML -> ${responseXML}`);

        return responseXML
    }
    bodavm.envFunc.XMLHttpRequest_responseType_get = function () {
        let responseType = bodavm.toolsFunc.getProtoAttr.call(this, 'responseType') ? bodavm.toolsFunc.getProtoAttr.call(this, 'responseType') : null
        console.log_copy(`XMLHttpRequest_responseType_get `, `responseType -> ${responseType}`);

        return responseType
    }
    bodavm.envFunc.XMLHttpRequest_response_get = function () {
        let response = bodavm.toolsFunc.getProtoAttr.call(this, 'response') ? bodavm.toolsFunc.getProtoAttr.call(this, 'response') : null
        console.log_copy(`XMLHttpRequest_response_get `, `response -> ${response}`);

        return response
    }
    bodavm.envFunc.XMLHttpRequest_statusText_get = function () {
        let statusText = bodavm.toolsFunc.getProtoAttr.call(this, 'statusText') ? bodavm.toolsFunc.getProtoAttr.call(this, 'statusText') : null
        console.log_copy(`XMLHttpRequest_statusText_get `, `statusText -> ${statusText}`);

        return statusText
    }
    bodavm.envFunc.XMLHttpRequest_status_get = function () {
        let status = bodavm.toolsFunc.getProtoAttr.call(this, 'status') ? bodavm.toolsFunc.getProtoAttr.call(this, 'status') : null
        console.log_copy(`XMLHttpRequest_status_get `, `status -> ${status}`);

        return status
    }
    bodavm.envFunc.XMLHttpRequest_responseURL_get = function () {
        let responseURL = bodavm.toolsFunc.getProtoAttr.call(this, 'responseURL') ? bodavm.toolsFunc.getProtoAttr.call(this, 'responseURL') : null
        console.log_copy(`XMLHttpRequest_responseURL_get `, `responseURL -> ${responseURL}`);

        return responseURL
    }
    bodavm.envFunc.XMLHttpRequest_withCredentials_get = function () {
        let withCredentials = bodavm.toolsFunc.getProtoAttr.call(this, 'withCredentials') ? bodavm.toolsFunc.getProtoAttr.call(this, 'withCredentials') : null
        console.log_copy(`XMLHttpRequest_withCredentials_get `, `withCredentials -> ${withCredentials}`);

        return withCredentials
    }

    bodavm.envFunc.XMLHttpRequestEventTarget_onloadend_set = function () {
        let onloadend = arguments[0]

        bodavm.toolsFunc.setProtoAttr.call(this, 'onloadend', onloadend)
        console.log_copy(`XMLHttpRequestEventTarget_onloadend_set `, `onload -> ${onloadend}`);

        return onloadend
    }
    bodavm.envFunc.XMLHttpRequestEventTarget_onload_set = function () {
        let onload = arguments[0]

        bodavm.toolsFunc.setProtoAttr.call(this, 'onload', onload)
        console.log_copy(`XMLHttpRequestEventTarget_onload_set `, `onload -> ${onload}`);

        return onload
    }
    bodavm.envFunc.XMLHttpRequest_onreadystatechange_set = function () {
        let onreadystatechange = arguments[0]
        // debugger
        bodavm.toolsFunc.setProtoAttr.call(this, 'onreadystatechange', onreadystatechange)
        console.log_copy(`XMLHttpRequest_onreadystatechange_set `, `onreadystatechange -> ${onreadystatechange}`);

        return onreadystatechange
    }

    bodavm.envFunc.XMLHttpRequest_timeout_get = function () {
        let timeout = bodavm.toolsFunc.getProtoAttr.call(this, 'timeout') ? bodavm.toolsFunc.getProtoAttr.call(this, 'timeout') : null
        console.log_copy(`XMLHttpRequest_timeout_get `, `timeout -> ${timeout}`);

        return timeout
    }
    bodavm.envFunc.XMLHttpRequest_readyState_get = function () {
        // debugger
        // if (){}
        let isopen = bodavm.toolsFunc.getProtoAttr.call(this, 'open') ? 1 : 0
        let issend = bodavm.toolsFunc.getProtoAttr.call(this, 'send') ? 2 : isopen
        // let iscompleted=bodavm.toolsFunc.getProtoAttr.call(this,'onload')?4:issend  //默认不需要3,直接4
        let readyState = bodavm.toolsFunc.getProtoAttr.call(this, 'readyState') ? bodavm.toolsFunc.getProtoAttr.call(this, 'readyState') : issend
        console.log_copy(`XMLHttpRequest_readyState_get `, `readyState -> ${readyState}`);

        return readyState
    }
    bodavm.envFunc.XMLHttpRequest_onreadystatechange_get = function () {
        let onreadystatechange = bodavm.toolsFunc.getProtoAttr.call(this, 'onreadystatechange') ? bodavm.toolsFunc.getProtoAttr.call(this, 'onreadystatechange') : null
        console.log_copy(`XMLHttpRequest_onreadystatechange_get `, `onreadystatechange -> ${onreadystatechange}`);

        return onreadystatechange
    }
    bodavm.envFunc.XMLHttpRequest_upload_get = function XMLHttpRequest_upload_get() {
        if (bodavm.config.isdebug) {
            debugger;
        }
        ;
        let upload = bodavm.toolsFunc.getProtoAttr.call(this, 'upload') ? bodavm.toolsFunc.getProtoAttr.call(this, 'upload') : null;
        console.log_copy(`XMLHttpRequestEventTarget_upload_get `, `upload -> ${upload}`);
        return upload;
    };
    bodavm.envFunc.XMLHttpRequestEventTarget_ontimeout_get = function XMLHttpRequestEventTarget_ontimeout_get() {
        if (bodavm.config.isdebug) {
            debugger;
        }
        ;
        let ontimeout = bodavm.toolsFunc.getProtoAttr.call(this, 'ontimeout') ? bodavm.toolsFunc.getProtoAttr.call(this, 'ontimeout') : null;
        console.log_copy(`XMLHttpRequestEventTarget_ontimeout_get `, `ontimeout -> ${ontimeout}`);
        return ontimeout;
    };
    bodavm.envFunc.XMLHttpRequestEventTarget_onprogress_get = function XMLHttpRequestEventTarget_onprogress_get() {
        if (bodavm.config.isdebug) {
            debugger;
        }
        ;
        let onprogress = bodavm.toolsFunc.getProtoAttr.call(this, 'onprogress') ? bodavm.toolsFunc.getProtoAttr.call(this, 'onprogress') : null;
        console.log_copy(`XMLHttpRequestEventTarget_onprogress_get `, `onprogress -> ${onprogress}`);
        return onprogress;
    };
    bodavm.envFunc.XMLHttpRequestEventTarget_onloadend_get = function XMLHttpRequestEventTarget_onloadend_get() {
        if (bodavm.config.isdebug) {
            debugger;
        }
        ;
        let onloadend = bodavm.toolsFunc.getProtoAttr.call(this, 'onloadend') ? bodavm.toolsFunc.getProtoAttr.call(this, 'onloadend') : null;
        console.log_copy(`XMLHttpRequestEventTarget_onloadend_get `, `onloadend -> ${onloadend}`);
        return onloadend;
    };
    bodavm.envFunc.XMLHttpRequestEventTarget_onloadstart_get = function XMLHttpRequestEventTarget_onloadstart_get() {
        if (bodavm.config.isdebug) {
            debugger;
        }
        ;
        // debugger
        let onloadstart = bodavm.toolsFunc.getProtoAttr.call(this, 'onloadstart') ? bodavm.toolsFunc.getProtoAttr.call(this, 'onloadstart') : null;
        console.log_copy(`XMLHttpRequestEventTarget_onloadstart_get `, `onloadstart -> ${onloadstart}`);
        return onloadstart;
    };
    bodavm.envFunc.XMLHttpRequestEventTarget_onerror_get = function XMLHttpRequestEventTarget_onerror_get() {
        if (bodavm.config.isdebug) {
            debugger;
        }
        ;
        let onerror = bodavm.toolsFunc.getProtoAttr.call(this, 'onerror') ? bodavm.toolsFunc.getProtoAttr.call(this, 'onerror') : null;
        console.log_copy(`XMLHttpRequestEventTarget_onerror_get `, `onerror -> ${onerror}`);
        return onerror;
    };
    bodavm.envFunc.XMLHttpRequestEventTarget_onload_get = function XMLHttpRequestEventTarget_onload_get() {
        if (bodavm.config.isdebug) {
            debugger;
        }
        ;
        let onload = bodavm.toolsFunc.getProtoAttr.call(this, 'onload') ? bodavm.toolsFunc.getProtoAttr.call(this, 'onload') : null;
        console.log_copy(`XMLHttpRequestEventTarget_onload_get `, `onerror -> ${onload}`);
        return onload;
    };
    bodavm.envFunc.XMLHttpRequestEventTarget_onabort_get = function XMLHttpRequestEventTarget_onabort_get() {
        if (bodavm.config.isdebug) {
            debugger;
        }
        ;
        // debugger
        let onabort = bodavm.toolsFunc.getProtoAttr.call(this, 'onabort') ? bodavm.toolsFunc.getProtoAttr.call(this, 'onabort') : null;
        console.log_copy(`XMLHttpRequestEventTarget_onabort_get `, `onabort -> ${onabort}`);
        return onabort;
    };

    bodavm.envFunc.XMLHttpRequestEventTarget_onerror_set = function () {
        let arg = arguments[0];
        // this._boarg.withCredentials = arg
        bodavm.toolsFunc.setProtoAttr.call(this, 'onerror', arg);
        console.log_copy(`XMLHttpRequestEventTarget_onerror_set `, `arg -> ${arg}`);
        return arg;
    }
    bodavm.envFunc.XMLHttpRequestEventTarget_ontimeout_set = function () {
        let arg = arguments[0];
        // this._boarg.withCredentials = arg
        bodavm.toolsFunc.setProtoAttr.call(this, 'ontimeout', arg);
        console.log_copy(`XMLHttpRequestEventTarget_ontimeout_set `, `arg -> ${arg}`);
        return arg;
    }
    bodavm.envFunc.XMLHttpRequest_withCredentials_set = function XMLHttpRequest_withCredentials_set() {
        if (bodavm.config.isdebug) {
            debugger;
        }
        ;
        // debugger
        let arg = arguments[0];
        // this._boarg.withCredentials = arg
        bodavm.toolsFunc.setProtoAttr.call(this, 'withCredentials', arg);
        console.log_copy(`XMLHttpRequest_withCredentials_set `, `arg -> ${arg}`);
        return arg;
    };
    bodavm.envFunc.Permissions_query = function Permissions_query() {
        if (bodavm.config.isdebug) {
            debugger;
        }
        ;
        // debugger
        let query = arguments[0];
        if (query['name'] == 'geolocation') {
            let res = new PermissionStatus('bobo');
            // res.__proto__ = bodavm.memory.globalobj['PermissionStatus'].prototype
            let promise = new Promise((resolve, reject) => {
                resolve(res);
            });
            console.log_copy(`Permissions_query `, `-> res ->${promise}`);
            return promise;
        } else {
            console.log_copy(`Permissions_query `, `${query} 未实现`);
        }
    };
    bodavm.envFunc.Navigator_deviceMemory_get = function Navigator_deviceMemory_get() {
        if (bodavm.config.isdebug) {
            debugger;
        }
        ;
        let deviceMemory = bodavm.memory.navigator['deviceMemory'];
        console.log_copy(`Navigator_deviceMemory_get `, `deviceMemory ->${deviceMemory}`);
        return deviceMemory;
    };
    bodavm.envFunc.Navigator_maxTouchPoints_get = function Navigator_maxTouchPoints_get() {
        if (bodavm.config.isdebug) {
            debugger;
        }
        ;
        let maxTouchPoints = bodavm.memory.navigator['maxTouchPoints'];
        console.log_copy(`Navigator_maxTouchPoints_get `, `maxTouchPoints ->${maxTouchPoints}`);
        return maxTouchPoints;
    };
    bodavm.envFunc.Navigator_vendorSub_get = function Navigator_vendorSub_get() {
        if (bodavm.config.isdebug) {
            debugger;
        }
        ;
        let vendorSub = bodavm.memory.navigator['vendorSub'];
        console.log_copy(`Navigator_vendorSub_get `, `vendorSub ->${vendorSub}`);
        return vendorSub;
    };
    bodavm.envFunc.Navigator_product_get = function Navigator_product_get() {
        if (bodavm.config.isdebug) {
            debugger;
        }
        ;
        let product = bodavm.memory.navigator['product'];
        console.log_copy(`Navigator_product_get `, `product ->${product}`);
        return product;
    };
    bodavm.envFunc.Navigator_doNotTrack_get = function Navigator_doNotTrack_get() {
        if (bodavm.config.isdebug) {
            debugger;
        }
        ;
        let doNotTrack = null;
        console.log_copy(`Navigator_doNotTrack_get `, `doNotTrack ->${doNotTrack}`);
        return doNotTrack;
    };
    bodavm.envFunc.RTCPeerConnection_createDataChannel = function RTCPeerConnection_createDataChannel() {
        if (bodavm.config.isdebug) {
            debugger;
        }
        ;
        let label = arguments[0];
        let options = arguments[1];
        if (label == 'label') {
            let DataChannel = new RTCDataChannel('bobo');
            // DataChannel.__proto__ = bodavm.memory.globalobj['RTCDataChannel'].prototype
            console.log_copy(`RTCPeerConnection_createDataChannel `, `label->${label} `, `options->${options} `, `DataChannel->${DataChannel}  `);
            return DataChannel;
        }
    };
    bodavm.envFunc.RTCPeerConnection_onicegatheringstatechange_set = function RTCPeerConnection_onicegatheringstatechange_set() {
        if (bodavm.config.isdebug) {
            debugger;
        }
        ;
        let change = arguments[0];
        // this._onicegatheringstatechange = change
        bodavm.toolsFunc.setProtoAttr.call(this, 'onicegatheringstatechange', change);
        console.log_copy(`RTCPeerConnection_onicegatheringstatechange_set `, `onicegatheringstatechange ->${_onicegatheringstatechange}`);
        return change;
    };



    bodavm.envFunc.window_setTimeout = function window_setTimeout() {
        if (bodavm.config.isdebug) {
            debugger;
        }
        ;
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
        // func = func.toString().replace(/debugger/, "").replace(/function ()/, "function xxx");
        console.log_copy(`window_setTimeout `, `func->${func} `, `delay->${delay} `, `argList->${argList}  `);
        bodavm.memory.globalInit.timeoutID += 1;
        let event = {
            "callback": func,
            "delay": delay,
            "args": argList,
            "type": typeof func == 'function' ? 1 : 0,
            //1代表函数,0代表code
            "timeoutID": bodavm.memory.globalInit.timeoutID,
            'settime_name': 'setTimeout'
        };
        // debugger
        if (issrc && delay <= 10) {
            //第一个src标签的settimeout为0时会在文件加载完成后立马执行
            if (!bodavm.memory.SrcSetTimeOut) {
                bodavm.memory.SrcSetTimeOut = []
            }
            bodavm.memory.SrcSetTimeOut.push(event)
            // issrc=0
            console.log_copy(`window_setTimeout `, `当前为src标签,并且delay为0,当前script执行完成后,立马调用  `);
            return bodavm.memory.globalInit.timeoutID

        }
        if (bodavm.memory.listenerFlag=='pending' && delay<=10){
            console.log_copy(`当前处于事件调用内,delay 小于 10 直接进行调用 -->`)
            event['callback'].apply(window,event.args)
			 return bodavm.memory.globalInit.timeoutID

        }
        // if (delay == 0) {
        //     // debugger
        //     console.log_copy(`window_setTimeout `, `delay->为0 立马开始执行`);

        //     func.call(this, argList)
        // }
        // debugger
        // else {
        if (bodavm.memory.asyncEvent.setTimeout === undefined) {
            bodavm.memory.asyncEvent.setTimeout = [];
        }
        // bodavm.toolsFunc.symbolProperty(event)
        bodavm.memory.asyncEvent.setTimeout.push(event);
        // }

        return bodavm.memory.globalInit.timeoutID;
    };
    bodavm.envFunc.window_clearTimeout = function window_clearTimeout() {
        if (bodavm.config.isdebug) {
            debugger;
        }
        ;
        let id = arguments[0];
        console.log_copy(`window_clearTimeout `, `${id}  `);
        bodavm.memory.asyncEvent.setTimeout.forEach(function (item, index, arr) {
            // if(bodavm.config.isdebug){debugger};

            if (item["timeoutID"] == id) {
                arr.splice(index, 1);
            }
        });
        //     }
    };

    bodavm.envFunc.window_clearInterval = function window_clearInterval() {
        if (bodavm.config.isdebug) {
            debugger;
        }
        ;
        let id = arguments[0];
        console.log_copy(`window_clearInterval `, `${id}  `);
        bodavm.memory.asyncEvent.setTimeout.forEach(function (item, index, arr) {
            // if(bodavm.config.isdebug){debugger};
            if (item["timeoutID"] == id) {
                arr.splice(index, 1);
            }
        });
        //     }
    };

    bodavm.envFunc.window_setInterval = function window_setInterval() {
        if (bodavm.config.isdebug) {
            debugger;
        }
        ;
        let func = arguments[0];
        let delay = arguments[1] || 0;
        let length = arguments.length;
        // bodavm.toolsFunc.symbolProperty(func)
        let argList = [];
        for (let i = 2; i < length; i++) {
            argList.push(arguments[i]);
        }
        // func = func.toString().replace(/debugger/, "").replace(/function ()/, "function xxx");
        console.log_copy(`window_setInterval `, `func->${func.toString().length > 50 ? func.toString().substr(0, 50) + '...' : func} `, `delay->${delay} `, `argList->${argList}  `);
        bodavm.memory.globalInit.timeoutID += 1;
        let event = {
            "callback": func,
            "delay": delay,
            "args": argList,
            "type": typeof func == 'function' ? 1 : 0,
            //1代表函数,0代表code
            "timeoutID": bodavm.memory.globalInit.timeoutID,
            'settime_name': 'setInterval'
        };

        if (bodavm.memory.asyncEvent.setTimeout === undefined) {
            bodavm.memory.asyncEvent.setTimeout = [];
        }

        // bodavm.toolsFunc.symbolProperty(event)
        bodavm.memory.asyncEvent.setTimeout.push(event);
        return bodavm.memory.globalInit.timeoutID;
    };




    bodavm.envFunc.Storage_setItem = function Storage_setItem() {
        if (bodavm.config.isdebug) {
            debugger;
        }
        ;
        // debugger
        let keyName = arguments[0];
        let keyValue = arguments[1];
        this[keyName] = keyValue;
        console.log_copy(`Storage_setItem `, `keyName->${keyName} `, `keyValue->${keyValue}  `);
    };
    bodavm.envFunc.Storage_getItem = function Storage_getItem() {
        if (bodavm.config.isdebug) {
            debugger;
        }
        ;
        if (bodavm.config.isdebug) {
            debugger;
        }
        let key = arguments[0];
        let item = this[key] ? this[key] : null;
        if (!item) {
            _item = bodavm.memory.localStorage[key];
            if (_item) {
                console.log_copy(`Storage_getItem `, `key->${key} 存在于bodavm.memory.localStorage中直接取值`, `item->${_item}  `);

                // item=_item
                return _item;
            }
        }
        console.log_copy(`Storage_getItem `, `key->${key} `, `item->${item}  `);
        return item;
    };
    bodavm.envFunc.Storage_removeItem = function Storage_removeItem() {
        if (bodavm.config.isdebug) {
            debugger;
        }
        let key = arguments[0];
        console.log_copy(`Storage_removeItem `, `key->${key}  `);
        delete this[key];
    };
    bodavm.envFunc.Storage_key = function Storage_key() {
        if (bodavm.config.isdebug) {
            debugger;
        }
        // if(bodavm.config.isdebug){debugger};;
        let index = arguments[0];
        let i = 0;
        console.log_copy(`Storage_key `, `index${index}  `);
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
    };
    bodavm.envFunc.Storage_clear = function Storage_clear() {
        if (bodavm.config.isdebug) {
            debugger;
        }
        ;
        // debugger
        // this = {}
        // this.__proto__=Storage.prototype
        console.log_copy(`Storage_clear `, `未实现!!!`);
    };
    bodavm.envFunc.Storage_length_get = function Storage_length_get() {
        if (bodavm.config.isdebug) {
            debugger;
        }
        ;
        i = 0
        // debugger
        for (var key in Object.getOwnPropertyDescriptors(this)) {
            // if (key == 'hasOwnProperty_bo') {
            //     continue;
            // }
            i++;
        }
        console.log_copy(`Storage_length_get `, `length->${i}   `);
        return i;
    };

    bodavm.envFunc.XMLHttpRequest_open = function XMLHttpRequest_open() {
        if (bodavm.config.isdebug) {
            debugger;
        }
        ;
        let method = arguments[0];
        let url = arguments[1];
        let type = arguments[2]
        console.log_copy(`XMLHttpRequest_open `, `[${method}] `, `[${url}]  [${type}]`);
        if (bodavm.config.isdebug) {
            debugger;
        }
        // this.mymethod=method
        bodavm.toolsFunc.setProtoAttr.call(this, 'open', arguments);

        // this.myurl=url
        // this._boarg.method = method
        // this._boarg.url = url
    };

    bodavm.envFunc.XMLHttpRequest_send = function XMLHttpRequest_send() {
        if (bodavm.config.isdebug) {
            debugger;
        }
        ;
        // debugger
        let body = arguments[0];
        console.log_copy(`XMLHttpRequest_send `, `body->${body}  `, `!!!!!!!!!未完善!!!!!!!!!!!!`);
        // this._boarg.send(body)
        bodavm.toolsFunc.setProtoAttr.call(this, 'send', arguments);

        console.log_copy(`使用send发送数据,立马调用onreadystatechange或onload 事件`)
        // debugger
        let onreadystatechange = bodavm.toolsFunc.getProtoAttr.call(this, 'onreadystatechange') ? bodavm.toolsFunc.getProtoAttr.call(this, 'onreadystatechange') : null
        if (onreadystatechange) {
            bodavm.toolsFunc.setProtoAttr.call(this, 'readyState', 4)
            bodavm.toolsFunc.setProtoAttr.call(this, 'status', 200)
            bodavm.toolsFunc.setProtoAttr.call(this, 'responseText', '这是测试数据')
            bodavm.toolsFunc.setProtoAttr.call(this, 'response', new Uint8Array(32))
            bodavm.toolsFunc.setProtoAttr.call(this, 'responseURL', '这是测试url,需要根据实际网站修改')
            // bodavm.toolsFunc.setProtoAttr.call(this,'responseType','json')
            // bodavm.toolsFunc.setProtoAttr.call(this,'responseType','document')
            onreadystatechange(boreadystatechange)
        }
        let onload = bodavm.toolsFunc.getProtoAttr.call(this, 'onload') ? bodavm.toolsFunc.getProtoAttr.call(this, 'onload') : null
        if (onload) {
            bodavm.toolsFunc.setProtoAttr.call(this, 'readyState', 4)
            bodavm.toolsFunc.setProtoAttr.call(this, 'status', 200)
            bodavm.toolsFunc.setProtoAttr.call(this, 'responseText', '这是测试数据')
            bodavm.toolsFunc.setProtoAttr.call(this, 'response', new Uint8Array(32))
            bodavm.toolsFunc.setProtoAttr.call(this, 'responseURL', '这是测试url,需要根据实际网站修改')
            // bodavm.toolsFunc.setProtoAttr.call(this,'responseType','json')
            // bodavm.toolsFunc.setProtoAttr.call(this,'responseType','document')
            onload(boxhronload)
        }
    };




    bodavm.envFunc.window_top_get = function () {
        if (bodavm.config.isdebug) {
            debugger;
        }
        ;
        console.log_copy(`window_top_get res->window`);
        return window;
    };
    bodavm.envFunc.window_parent_get = function () {
        if (bodavm.config.isdebug) {
            debugger;
        }
        ;
        console.log_copy(`window_parent_get res->window`);
        return window;
    };
    bodavm.envFunc.window_self_get = function () {
        if (bodavm.config.isdebug) {
            debugger;
        }
        // let boflgnum=this._boflagNum
        // if (boflgnum >=0){
        //     return window[boflagNum]
        // }
        console.log_copy(`window_self_get res->window`);
        return window;
    };
    bodavm.envFunc.window_frames_get = function () {
        if (bodavm.config.isdebug) {
            debugger;
        }
        ;
        console.log_copy(`window_frames_get res->window`);
        return window;
    };
    bodavm.envFunc.window_location_get = function () {
        if (bodavm.config.isdebug) {
            debugger;
        }
        ;
        let locationValue = bodavm.memory.cache['location'];
        console.log_copy(`window_location_get res ->`, locationValue);
        // bodavm.toolsFunc.setProtoAttr.call(locationValue,'issymbolProperty',true)
        return locationValue;
    };

    bodavm.envFunc.Navigator_mimeTypes_get = function Navigator_mimeTypes_get() {
        //   if (bodavm.config.isdebug) {
        //     debugger;
        //   }
        ;
        let res = bodavm.memory.globalInit.mimeTypeArray;
        console.log_copy(`Navigator_mimeTypes_get - >res ->`, res)

        return res
    };




    bodavm.envFunc.MimeTypeArray_namedItem = function MimeTypeArray_namedItem() {
        //   if (bodavm.config.isdebug) {
        //     debugger;
        //   }
        ;
        let name = arguments[0];
        console.log_copy(`MimeTypeArray_namedItem - >name ->`, name)

        return this[name];
    };
    bodavm.envFunc.MimeTypeArray_item = function MimeTypeArray_item() {
        //   if (bodavm.config.isdebug) {
        //     debugger;
        //   }
        ;
        let index = arguments[0];
        console.log_copy(`MimeTypeArray_item - >arg ->`, index)

        return this[index];
    };
    bodavm.envFunc.Plugin_namedItem = function Plugin_namedItem() {
        //   if (bodavm.config.isdebug) {
        //     debugger;
        //   }
        ;
        let name = arguments[0];
        console.log_copy(`Plugin_namedItem - >name ->`, name)

        return this[name];
    };
    bodavm.envFunc.Plugin_item = function Plugin_item() {
        //   if (bodavm.config.isdebug) {
        //     debugger;
        //   }
        ;

        let index = arguments[0];
        console.log_copy(`Plugin_item - >arg ->`, index)

        return this[index];
    };
    bodavm.envFunc.PluginArray_namedItem = function PluginArray_namedItem() {
        //   if (bodavm.config.isdebug) {
        //     debugger;
        //   }
        ;
        let name = arguments[0];
        console.log_copy(`PluginArray_namedItem - >arg ->`, name)

        return this[name];
    };
    bodavm.envFunc.PluginArray_item = function PluginArray_item() {
        //   if (bodavm.config.isdebug) {
        //     debugger;
        //   }
        ;
        let index = arguments[0];
        itemindex = index % 42949672960
        console.log_copy(`PluginArray_item -> `, `arg -> `, index);
        return this[itemindex];
    };

    bodavm.envFunc.MimeType_suffixes_get = function MimeType_suffixes_get() {
        //   if (bodavm.config.isdebug) {
        //     debugger;
        //   }
        ;
        let res = bodavm.toolsFunc.getProtoAttr.call(this, "suffixes");
        console.log_copy(`MimeType_suffixes_get - >res ->`, res)

        return res
    };
    bodavm.envFunc.MimeType_enabledPlugin_get = function MimeType_enabledPlugin_get() {
        //   if (bodavm.config.isdebug) {
        //     debugger;
        //   }
        ;
        let res = bodavm.toolsFunc.getProtoAttr.call(this, "enabledPlugin");
        console.log_copy(`MimeType_enabledPlugin_get - >res ->`, res)

        return res
    };
    bodavm.envFunc.MimeType_description_get = function MimeType_description_get() {
        //   if (bodavm.config.isdebug) {
        //     debugger;
        //   }
        ;
        let res = bodavm.toolsFunc.getProtoAttr.call(this, "description");

        console.log_copy(`MimeType_description_get - >res ->`, res)

        return res
    };
    bodavm.envFunc.Plugin_length_get = function Plugin_length_get() {
        //   if (bodavm.config.isdebug) {
        //     debugger;
        //   }
        ;
        let res = bodavm.toolsFunc.getProtoAttr.call(this, "length");
        // if (!res){
        //     res=5
        // }
        console.log_copy(`Plugin_length_get - >res ->`, res)

        return res
    };
    bodavm.envFunc.Plugin_filename_get = function Plugin_filename_get() {
        //   if (bodavm.config.isdebug) {
        //     debugger;
        //   }
        ;
        let res = bodavm.toolsFunc.getProtoAttr.call(this, "filename");
        console.log_copy(`Plugin_filename_get - >res ->`, res)

        return res
    };
    bodavm.envFunc.Plugin_description_get = function Plugin_description_get() {
        //   if (bodavm.config.isdebug) {
        //     debugger;
        //   }
        ;
        let res = bodavm.toolsFunc.getProtoAttr.call(this, "description");
        console.log_copy(`Plugin_description_get - >res ->`, res)

        return res
    };
    bodavm.envFunc.Plugin_name_get = function Plugin_name_get() {
        //   if (bodavm.config.isdebug) {
        //     debugger;
        //   }
        ;
        let res = bodavm.toolsFunc.getProtoAttr.call(this, "name");
        console.log_copy(`Plugin_name_get - >res ->`, res)

        return res
    };
    bodavm.envFunc.PluginArray_length_get = function PluginArray_length_get() {
        //   if (bodavm.config.isdebug) {
        //     debugger;
        //   }
        ;
        let res = bodavm.toolsFunc.getProtoAttr.call(this, "length");
        //         if (!res){
        //     res=0
        // }
        console.log_copy(`PluginArray_length_get - >res ->`, res)
        // debugger
        return res
    };
    bodavm.envFunc.MimeType_type_get = function MimeType_type_get() {
        //   if (bodavm.config.isdebug) {
        //     debugger;
        //   }
        ;
        let res = bodavm.toolsFunc.getProtoAttr.call(this, "type");
        console.log_copy(`MimeType_type_get - >res ->`, res)

        return res
    };
    bodavm.envFunc.MimeTypeArray_length_get = function MimeTypeArray_length_get() {
        //   if (bodavm.config.isdebug) {
        //     debugger;
        //   }
        ;
        let res = bodavm.toolsFunc.getProtoAttr.call(this, "length");
        console.log_copy(`MimeTypeArray_length_get - >res ->`, res)

        return res
    };

    bodavm.envFunc.window_onsearch_get = function () { let res = bodavm.memory.window["onsearch"] ? bodavm.memory.window["onsearch"] : null; console.log_copy(`window_onsearch_get res->`, res); return res }
    bodavm.envFunc.window_isSecureContext_get = function () {
        let res = bodavm.memory.window["isSecureContext"] ? bodavm.memory.window["isSecureContext"] : null;
        console.log_copy(`window_isSecureContext_get res->`, res); return res
    }
    bodavm.envFunc.window_onappinstalled_get = function () { let res = bodavm.memory.window["onappinstalled"] ? bodavm.memory.window["onappinstalled"] : null; console.log_copy(`window_onappinstalled_get res->`, res); return res }
    bodavm.envFunc.window_onbeforeinstallprompt_get = function () { let res = bodavm.memory.window["onbeforeinstallprompt"] ? bodavm.memory.window["onbeforeinstallprompt"] : null; console.log_copy(`window_onbeforeinstallprompt_get res->`, res); return res }
    bodavm.envFunc.window_onbeforexrselect_get = function () { let res = bodavm.memory.window["onbeforexrselect"] ? bodavm.memory.window["onbeforexrselect"] : null; console.log_copy(`window_onbeforexrselect_get res->`, res); return res }
    bodavm.envFunc.window_onabort_get = function () { let res = bodavm.memory.window["onabort"] ? bodavm.memory.window["onabort"] : null; console.log_copy(`window_onabort_get res->`, res); return res }
    bodavm.envFunc.window_onbeforeinput_get = function () { let res = bodavm.memory.window["onbeforeinput"] ? bodavm.memory.window["onbeforeinput"] : null; console.log_copy(`window_onbeforeinput_get res->`, res); return res }
    bodavm.envFunc.window_onblur_get = function () { let res = bodavm.memory.window["onblur"] ? bodavm.memory.window["onblur"] : null; console.log_copy(`window_onblur_get res->`, res); return res }
    bodavm.envFunc.window_oncancel_get = function () { let res = bodavm.memory.window["oncancel"] ? bodavm.memory.window["oncancel"] : null; console.log_copy(`window_oncancel_get res->`, res); return res }
    bodavm.envFunc.window_oncanplay_get = function () { let res = bodavm.memory.window["oncanplay"] ? bodavm.memory.window["oncanplay"] : null; console.log_copy(`window_oncanplay_get res->`, res); return res }
    bodavm.envFunc.window_oncanplaythrough_get = function () { let res = bodavm.memory.window["oncanplaythrough"] ? bodavm.memory.window["oncanplaythrough"] : null; console.log_copy(`window_oncanplaythrough_get res->`, res); return res }
    bodavm.envFunc.window_onchange_get = function () { let res = bodavm.memory.window["onchange"] ? bodavm.memory.window["onchange"] : null; console.log_copy(`window_onchange_get res->`, res); return res }
    bodavm.envFunc.window_onclick_get = function () { let res = bodavm.memory.window["onclick"] ? bodavm.memory.window["onclick"] : null; console.log_copy(`window_onclick_get res->`, res); return res }
    bodavm.envFunc.window_onclose_get = function () { let res = bodavm.memory.window["onclose"] ? bodavm.memory.window["onclose"] : null; console.log_copy(`window_onclose_get res->`, res); return res }
    bodavm.envFunc.window_oncontextlost_get = function () { let res = bodavm.memory.window["oncontextlost"] ? bodavm.memory.window["oncontextlost"] : null; console.log_copy(`window_oncontextlost_get res->`, res); return res }
    bodavm.envFunc.window_oncontextmenu_get = function () { let res = bodavm.memory.window["oncontextmenu"] ? bodavm.memory.window["oncontextmenu"] : null; console.log_copy(`window_oncontextmenu_get res->`, res); return res }
    bodavm.envFunc.window_oncontextrestored_get = function () { let res = bodavm.memory.window["oncontextrestored"] ? bodavm.memory.window["oncontextrestored"] : null; console.log_copy(`window_oncontextrestored_get res->`, res); return res }
    bodavm.envFunc.window_oncuechange_get = function () { let res = bodavm.memory.window["oncuechange"] ? bodavm.memory.window["oncuechange"] : null; console.log_copy(`window_oncuechange_get res->`, res); return res }
    bodavm.envFunc.window_ondblclick_get = function () { let res = bodavm.memory.window["ondblclick"] ? bodavm.memory.window["ondblclick"] : null; console.log_copy(`window_ondblclick_get res->`, res); return res }
    bodavm.envFunc.window_ondrag_get = function () { let res = bodavm.memory.window["ondrag"] ? bodavm.memory.window["ondrag"] : null; console.log_copy(`window_ondrag_get res->`, res); return res }
    bodavm.envFunc.window_ondragend_get = function () { let res = bodavm.memory.window["ondragend"] ? bodavm.memory.window["ondragend"] : null; console.log_copy(`window_ondragend_get res->`, res); return res }
    bodavm.envFunc.window_ondragenter_get = function () { let res = bodavm.memory.window["ondragenter"] ? bodavm.memory.window["ondragenter"] : null; console.log_copy(`window_ondragenter_get res->`, res); return res }
    bodavm.envFunc.window_ondragleave_get = function () { let res = bodavm.memory.window["ondragleave"] ? bodavm.memory.window["ondragleave"] : null; console.log_copy(`window_ondragleave_get res->`, res); return res }
    bodavm.envFunc.window_ondragover_get = function () { let res = bodavm.memory.window["ondragover"] ? bodavm.memory.window["ondragover"] : null; console.log_copy(`window_ondragover_get res->`, res); return res }
    bodavm.envFunc.window_ondragstart_get = function () { let res = bodavm.memory.window["ondragstart"] ? bodavm.memory.window["ondragstart"] : null; console.log_copy(`window_ondragstart_get res->`, res); return res }
    bodavm.envFunc.window_ondrop_get = function () { let res = bodavm.memory.window["ondrop"] ? bodavm.memory.window["ondrop"] : null; console.log_copy(`window_ondrop_get res->`, res); return res }
    bodavm.envFunc.window_ondurationchange_get = function () { let res = bodavm.memory.window["ondurationchange"] ? bodavm.memory.window["ondurationchange"] : null; console.log_copy(`window_ondurationchange_get res->`, res); return res }
    bodavm.envFunc.window_onemptied_get = function () { let res = bodavm.memory.window["onemptied"] ? bodavm.memory.window["onemptied"] : null; console.log_copy(`window_onemptied_get res->`, res); return res }
    bodavm.envFunc.window_onended_get = function () { let res = bodavm.memory.window["onended"] ? bodavm.memory.window["onended"] : null; console.log_copy(`window_onended_get res->`, res); return res }
    bodavm.envFunc.window_onerror_get = function () { let res = bodavm.memory.window["onerror"] ? bodavm.memory.window["onerror"] : null; console.log_copy(`window_onerror_get res->`, res); return res }
    bodavm.envFunc.window_onfocus_get = function () { let res = bodavm.memory.window["onfocus"] ? bodavm.memory.window["onfocus"] : null; console.log_copy(`window_onfocus_get res->`, res); return res }
    bodavm.envFunc.window_onformdata_get = function () { let res = bodavm.memory.window["onformdata"] ? bodavm.memory.window["onformdata"] : null; console.log_copy(`window_onformdata_get res->`, res); return res }
    bodavm.envFunc.window_oninput_get = function () { let res = bodavm.memory.window["oninput"] ? bodavm.memory.window["oninput"] : null; console.log_copy(`window_oninput_get res->`, res); return res }
    bodavm.envFunc.window_oninvalid_get = function () { let res = bodavm.memory.window["oninvalid"] ? bodavm.memory.window["oninvalid"] : null; console.log_copy(`window_oninvalid_get res->`, res); return res }
    bodavm.envFunc.window_onkeydown_get = function () { let res = bodavm.memory.window["onkeydown"] ? bodavm.memory.window["onkeydown"] : null; console.log_copy(`window_onkeydown_get res->`, res); return res }
    bodavm.envFunc.window_onkeypress_get = function () { let res = bodavm.memory.window["onkeypress"] ? bodavm.memory.window["onkeypress"] : null; console.log_copy(`window_onkeypress_get res->`, res); return res }
    bodavm.envFunc.window_onkeyup_get = function () { let res = bodavm.memory.window["onkeyup"] ? bodavm.memory.window["onkeyup"] : null; console.log_copy(`window_onkeyup_get res->`, res); return res }
    bodavm.envFunc.window_onloadeddata_get = function () { let res = bodavm.memory.window["onloadeddata"] ? bodavm.memory.window["onloadeddata"] : null; console.log_copy(`window_onloadeddata_get res->`, res); return res }
    bodavm.envFunc.window_onloadedmetadata_get = function () { let res = bodavm.memory.window["onloadedmetadata"] ? bodavm.memory.window["onloadedmetadata"] : null; console.log_copy(`window_onloadedmetadata_get res->`, res); return res }
    bodavm.envFunc.window_onloadstart_get = function () { let res = bodavm.memory.window["onloadstart"] ? bodavm.memory.window["onloadstart"] : null; console.log_copy(`window_onloadstart_get res->`, res); return res }
    bodavm.envFunc.window_onmousedown_get = function () { let res = bodavm.memory.window["onmousedown"] ? bodavm.memory.window["onmousedown"] : null; console.log_copy(`window_onmousedown_get res->`, res); return res }
    bodavm.envFunc.window_onmouseenter_get = function () { let res = bodavm.memory.window["onmouseenter"] ? bodavm.memory.window["onmouseenter"] : null; console.log_copy(`window_onmouseenter_get res->`, res); return res }
    bodavm.envFunc.window_onmouseleave_get = function () { let res = bodavm.memory.window["onmouseleave"] ? bodavm.memory.window["onmouseleave"] : null; console.log_copy(`window_onmouseleave_get res->`, res); return res }
    bodavm.envFunc.window_onmousemove_get = function () { let res = bodavm.memory.window["onmousemove"] ? bodavm.memory.window["onmousemove"] : null; console.log_copy(`window_onmousemove_get res->`, res); return res }
    bodavm.envFunc.window_onmouseout_get = function () { let res = bodavm.memory.window["onmouseout"] ? bodavm.memory.window["onmouseout"] : null; console.log_copy(`window_onmouseout_get res->`, res); return res }
    bodavm.envFunc.window_onmouseover_get = function () { let res = bodavm.memory.window["onmouseover"] ? bodavm.memory.window["onmouseover"] : null; console.log_copy(`window_onmouseover_get res->`, res); return res }
    bodavm.envFunc.window_onmouseup_get = function () { let res = bodavm.memory.window["onmouseup"] ? bodavm.memory.window["onmouseup"] : null; console.log_copy(`window_onmouseup_get res->`, res); return res }
    bodavm.envFunc.window_onmousewheel_get = function () { let res = bodavm.memory.window["onmousewheel"] ? bodavm.memory.window["onmousewheel"] : null; console.log_copy(`window_onmousewheel_get res->`, res); return res }
    bodavm.envFunc.window_onpause_get = function () { let res = bodavm.memory.window["onpause"] ? bodavm.memory.window["onpause"] : null; console.log_copy(`window_onpause_get res->`, res); return res }
    bodavm.envFunc.window_onplay_get = function () { let res = bodavm.memory.window["onplay"] ? bodavm.memory.window["onplay"] : null; console.log_copy(`window_onplay_get res->`, res); return res }
    bodavm.envFunc.window_onplaying_get = function () { let res = bodavm.memory.window["onplaying"] ? bodavm.memory.window["onplaying"] : null; console.log_copy(`window_onplaying_get res->`, res); return res }
    bodavm.envFunc.window_onprogress_get = function () { let res = bodavm.memory.window["onprogress"] ? bodavm.memory.window["onprogress"] : null; console.log_copy(`window_onprogress_get res->`, res); return res }
    bodavm.envFunc.window_onratechange_get = function () { let res = bodavm.memory.window["onratechange"] ? bodavm.memory.window["onratechange"] : null; console.log_copy(`window_onratechange_get res->`, res); return res }
    bodavm.envFunc.window_onreset_get = function () { let res = bodavm.memory.window["onreset"] ? bodavm.memory.window["onreset"] : null; console.log_copy(`window_onreset_get res->`, res); return res }
    bodavm.envFunc.window_onresize_get = function () { let res = bodavm.memory.window["onresize"] ? bodavm.memory.window["onresize"] : null; console.log_copy(`window_onresize_get res->`, res); return res }
    bodavm.envFunc.window_onscroll_get = function () { let res = bodavm.memory.window["onscroll"] ? bodavm.memory.window["onscroll"] : null; console.log_copy(`window_onscroll_get res->`, res); return res }
    bodavm.envFunc.window_onsecuritypolicyviolation_get = function () { let res = bodavm.memory.window["onsecuritypolicyviolation"] ? bodavm.memory.window["onsecuritypolicyviolation"] : null; console.log_copy(`window_onsecuritypolicyviolation_get res->`, res); return res }
    bodavm.envFunc.window_onseeked_get = function () { let res = bodavm.memory.window["onseeked"] ? bodavm.memory.window["onseeked"] : null; console.log_copy(`window_onseeked_get res->`, res); return res }
    bodavm.envFunc.window_onseeking_get = function () { let res = bodavm.memory.window["onseeking"] ? bodavm.memory.window["onseeking"] : null; console.log_copy(`window_onseeking_get res->`, res); return res }
    bodavm.envFunc.window_onselect_get = function () { let res = bodavm.memory.window["onselect"] ? bodavm.memory.window["onselect"] : null; console.log_copy(`window_onselect_get res->`, res); return res }
    bodavm.envFunc.window_onslotchange_get = function () { let res = bodavm.memory.window["onslotchange"] ? bodavm.memory.window["onslotchange"] : null; console.log_copy(`window_onslotchange_get res->`, res); return res }
    bodavm.envFunc.window_onstalled_get = function () { let res = bodavm.memory.window["onstalled"] ? bodavm.memory.window["onstalled"] : null; console.log_copy(`window_onstalled_get res->`, res); return res }
    bodavm.envFunc.window_onsubmit_get = function () { let res = bodavm.memory.window["onsubmit"] ? bodavm.memory.window["onsubmit"] : null; console.log_copy(`window_onsubmit_get res->`, res); return res }
    bodavm.envFunc.window_onsuspend_get = function () { let res = bodavm.memory.window["onsuspend"] ? bodavm.memory.window["onsuspend"] : null; console.log_copy(`window_onsuspend_get res->`, res); return res }
    bodavm.envFunc.window_ontimeupdate_get = function () { let res = bodavm.memory.window["ontimeupdate"] ? bodavm.memory.window["ontimeupdate"] : null; console.log_copy(`window_ontimeupdate_get res->`, res); return res }
    bodavm.envFunc.window_ontoggle_get = function () { let res = bodavm.memory.window["ontoggle"] ? bodavm.memory.window["ontoggle"] : null; console.log_copy(`window_ontoggle_get res->`, res); return res }
    bodavm.envFunc.window_onvolumechange_get = function () { let res = bodavm.memory.window["onvolumechange"] ? bodavm.memory.window["onvolumechange"] : null; console.log_copy(`window_onvolumechange_get res->`, res); return res }
    bodavm.envFunc.window_onwaiting_get = function () { let res = bodavm.memory.window["onwaiting"] ? bodavm.memory.window["onwaiting"] : null; console.log_copy(`window_onwaiting_get res->`, res); return res }
    bodavm.envFunc.window_onwebkitanimationend_get = function () { let res = bodavm.memory.window["onwebkitanimationend"] ? bodavm.memory.window["onwebkitanimationend"] : null; console.log_copy(`window_onwebkitanimationend_get res->`, res); return res }
    bodavm.envFunc.window_onwebkitanimationiteration_get = function () { let res = bodavm.memory.window["onwebkitanimationiteration"] ? bodavm.memory.window["onwebkitanimationiteration"] : null; console.log_copy(`window_onwebkitanimationiteration_get res->`, res); return res }
    bodavm.envFunc.window_onwebkitanimationstart_get = function () { let res = bodavm.memory.window["onwebkitanimationstart"] ? bodavm.memory.window["onwebkitanimationstart"] : null; console.log_copy(`window_onwebkitanimationstart_get res->`, res); return res }
    bodavm.envFunc.window_onwebkittransitionend_get = function () { let res = bodavm.memory.window["onwebkittransitionend"] ? bodavm.memory.window["onwebkittransitionend"] : null; console.log_copy(`window_onwebkittransitionend_get res->`, res); return res }
    bodavm.envFunc.window_onwheel_get = function () { let res = bodavm.memory.window["onwheel"] ? bodavm.memory.window["onwheel"] : null; console.log_copy(`window_onwheel_get res->`, res); return res }
    bodavm.envFunc.window_onauxclick_get = function () { let res = bodavm.memory.window["onauxclick"] ? bodavm.memory.window["onauxclick"] : null; console.log_copy(`window_onauxclick_get res->`, res); return res }
    bodavm.envFunc.window_ongotpointercapture_get = function () { let res = bodavm.memory.window["ongotpointercapture"] ? bodavm.memory.window["ongotpointercapture"] : null; console.log_copy(`window_ongotpointercapture_get res->`, res); return res }
    bodavm.envFunc.window_onlostpointercapture_get = function () { let res = bodavm.memory.window["onlostpointercapture"] ? bodavm.memory.window["onlostpointercapture"] : null; console.log_copy(`window_onlostpointercapture_get res->`, res); return res }
    bodavm.envFunc.window_onpointerdown_get = function () { let res = bodavm.memory.window["onpointerdown"] ? bodavm.memory.window["onpointerdown"] : null; console.log_copy(`window_onpointerdown_get res->`, res); return res }
    bodavm.envFunc.window_onpointermove_get = function () { let res = bodavm.memory.window["onpointermove"] ? bodavm.memory.window["onpointermove"] : null; console.log_copy(`window_onpointermove_get res->`, res); return res }
    bodavm.envFunc.window_onpointerrawupdate_get = function () { let res = bodavm.memory.window["onpointerrawupdate"] ? bodavm.memory.window["onpointerrawupdate"] : null; console.log_copy(`window_onpointerrawupdate_get res->`, res); return res }
    bodavm.envFunc.window_onpointerup_get = function () { let res = bodavm.memory.window["onpointerup"] ? bodavm.memory.window["onpointerup"] : null; console.log_copy(`window_onpointerup_get res->`, res); return res }
    bodavm.envFunc.window_onpointercancel_get = function () { let res = bodavm.memory.window["onpointercancel"] ? bodavm.memory.window["onpointercancel"] : null; console.log_copy(`window_onpointercancel_get res->`, res); return res }
    bodavm.envFunc.window_onpointerover_get = function () { let res = bodavm.memory.window["onpointerover"] ? bodavm.memory.window["onpointerover"] : null; console.log_copy(`window_onpointerover_get res->`, res); return res }
    bodavm.envFunc.window_onpointerout_get = function () { let res = bodavm.memory.window["onpointerout"] ? bodavm.memory.window["onpointerout"] : null; console.log_copy(`window_onpointerout_get res->`, res); return res }
    bodavm.envFunc.window_onpointerenter_get = function () { let res = bodavm.memory.window["onpointerenter"] ? bodavm.memory.window["onpointerenter"] : null; console.log_copy(`window_onpointerenter_get res->`, res); return res }
    bodavm.envFunc.window_onpointerleave_get = function () { let res = bodavm.memory.window["onpointerleave"] ? bodavm.memory.window["onpointerleave"] : null; console.log_copy(`window_onpointerleave_get res->`, res); return res }
    bodavm.envFunc.window_onselectstart_get = function () { let res = bodavm.memory.window["onselectstart"] ? bodavm.memory.window["onselectstart"] : null; console.log_copy(`window_onselectstart_get res->`, res); return res }
    bodavm.envFunc.window_onselectionchange_get = function () { let res = bodavm.memory.window["onselectionchange"] ? bodavm.memory.window["onselectionchange"] : null; console.log_copy(`window_onselectionchange_get res->`, res); return res }
    bodavm.envFunc.window_onanimationend_get = function () { let res = bodavm.memory.window["onanimationend"] ? bodavm.memory.window["onanimationend"] : null; console.log_copy(`window_onanimationend_get res->`, res); return res }
    bodavm.envFunc.window_onanimationiteration_get = function () { let res = bodavm.memory.window["onanimationiteration"] ? bodavm.memory.window["onanimationiteration"] : null; console.log_copy(`window_onanimationiteration_get res->`, res); return res }
    bodavm.envFunc.window_onanimationstart_get = function () { let res = bodavm.memory.window["onanimationstart"] ? bodavm.memory.window["onanimationstart"] : null; console.log_copy(`window_onanimationstart_get res->`, res); return res }
    bodavm.envFunc.window_ontransitionrun_get = function () { let res = bodavm.memory.window["ontransitionrun"] ? bodavm.memory.window["ontransitionrun"] : null; console.log_copy(`window_ontransitionrun_get res->`, res); return res }
    bodavm.envFunc.window_ontransitionstart_get = function () { let res = bodavm.memory.window["ontransitionstart"] ? bodavm.memory.window["ontransitionstart"] : null; console.log_copy(`window_ontransitionstart_get res->`, res); return res }
    bodavm.envFunc.window_ontransitionend_get = function () { let res = bodavm.memory.window["ontransitionend"] ? bodavm.memory.window["ontransitionend"] : null; console.log_copy(`window_ontransitionend_get res->`, res); return res }
    bodavm.envFunc.window_ontransitioncancel_get = function () { let res = bodavm.memory.window["ontransitioncancel"] ? bodavm.memory.window["ontransitioncancel"] : null; console.log_copy(`window_ontransitioncancel_get res->`, res); return res }
    bodavm.envFunc.window_onafterprint_get = function () { let res = bodavm.memory.window["onafterprint"] ? bodavm.memory.window["onafterprint"] : null; console.log_copy(`window_onafterprint_get res->`, res); return res }
    bodavm.envFunc.window_onbeforeprint_get = function () { let res = bodavm.memory.window["onbeforeprint"] ? bodavm.memory.window["onbeforeprint"] : null; console.log_copy(`window_onbeforeprint_get res->`, res); return res }
    bodavm.envFunc.window_onhashchange_get = function () { let res = bodavm.memory.window["onhashchange"] ? bodavm.memory.window["onhashchange"] : null; console.log_copy(`window_onhashchange_get res->`, res); return res }
    bodavm.envFunc.window_onlanguagechange_get = function () { let res = bodavm.memory.window["onlanguagechange"] ? bodavm.memory.window["onlanguagechange"] : null; console.log_copy(`window_onlanguagechange_get res->`, res); return res }
    bodavm.envFunc.window_onmessageerror_get = function () { let res = bodavm.memory.window["onmessageerror"] ? bodavm.memory.window["onmessageerror"] : null; console.log_copy(`window_onmessageerror_get res->`, res); return res }
    bodavm.envFunc.window_onoffline_get = function () { let res = bodavm.memory.window["onoffline"] ? bodavm.memory.window["onoffline"] : null; console.log_copy(`window_onoffline_get res->`, res); return res }
    bodavm.envFunc.window_ononline_get = function () { let res = bodavm.memory.window["ononline"] ? bodavm.memory.window["ononline"] : null; console.log_copy(`window_ononline_get res->`, res); return res }
    bodavm.envFunc.window_onpagehide_get = function () { let res = bodavm.memory.window["onpagehide"] ? bodavm.memory.window["onpagehide"] : null; console.log_copy(`window_onpagehide_get res->`, res); return res }
    bodavm.envFunc.window_onpageshow_get = function () { let res = bodavm.memory.window["onpageshow"] ? bodavm.memory.window["onpageshow"] : null; console.log_copy(`window_onpageshow_get res->`, res); return res }
    bodavm.envFunc.window_onpopstate_get = function () { let res = bodavm.memory.window["onpopstate"] ? bodavm.memory.window["onpopstate"] : null; console.log_copy(`window_onpopstate_get res->`, res); return res }
    bodavm.envFunc.window_onrejectionhandled_get = function () { let res = bodavm.memory.window["onrejectionhandled"] ? bodavm.memory.window["onrejectionhandled"] : null; console.log_copy(`window_onrejectionhandled_get res->`, res); return res }
    bodavm.envFunc.window_onstorage_get = function () { let res = bodavm.memory.window["onstorage"] ? bodavm.memory.window["onstorage"] : null; console.log_copy(`window_onstorage_get res->`, res); return res }
    bodavm.envFunc.window_onunhandledrejection_get = function () { let res = bodavm.memory.window["onunhandledrejection"] ? bodavm.memory.window["onunhandledrejection"] : null; console.log_copy(`window_onunhandledrejection_get res->`, res); return res }
    bodavm.envFunc.window_onunload_get = function () { let res = bodavm.memory.window["onunload"] ? bodavm.memory.window["onunload"] : null; console.log_copy(`window_onunload_get res->`, res); return res }
    bodavm.envFunc.window_onbeforematch_get = function () { let res = bodavm.memory.window["onbeforematch"] ? bodavm.memory.window["onbeforematch"] : null; console.log_copy(`window_onbeforematch_get res->`, res); return res }
    bodavm.envFunc.window_onbeforetoggle_get = function () { let res = bodavm.memory.window["onbeforetoggle"] ? bodavm.memory.window["onbeforetoggle"] : null; console.log_copy(`window_onbeforetoggle_get res->`, res); return res }
    bodavm.envFunc.window_ondevicemotion_get = function () { let res = bodavm.memory.window["ondevicemotion"] ? bodavm.memory.window["ondevicemotion"] : null; console.log_copy(`window_ondevicemotion_get res->`, res); return res }
    bodavm.envFunc.window_ondeviceorientation_get = function () { let res = bodavm.memory.window["ondeviceorientation"] ? bodavm.memory.window["ondeviceorientation"] : null; console.log_copy(`window_ondeviceorientation_get res->`, res); return res }
    bodavm.envFunc.window_ondeviceorientationabsolute_get = function () { let res = bodavm.memory.window["ondeviceorientationabsolute"] ? bodavm.memory.window["ondeviceorientationabsolute"] : null; console.log_copy(`window_ondeviceorientationabsolute_get res->`, res); return res }
    bodavm.envFunc.window_oncontentvisibilityautostatechange_get = function () { let res = bodavm.memory.window["oncontentvisibilityautostatechange"] ? bodavm.memory.window["oncontentvisibilityautostatechange"] : null; console.log_copy(`window_oncontentvisibilityautostatechange_get res->`, res); return res }
    bodavm.envFunc.window_onscrollend_get = function () { let res = bodavm.memory.window["onscrollend"] ? bodavm.memory.window["onscrollend"] : null; console.log_copy(`window_onscrollend_get res->`, res); return res }
    bodavm.envFunc.WebGLRenderingContext_getShaderPrecisionFormat = function WebGLRenderingContext_getShaderPrecisionFormat() {
        let shaderType = arguments[0]
        let precisionType = arguments[1]
        console.log_copy(`WebGLRenderingContext_getShaderPrecisionFormat `, `shaderType:${shaderType} precisionType:${precisionType}  `);
        if (shaderType == 35633 && precisionType == 36338) {
            let shade = new WebGLShaderPrecisionFormat('bobo')
            // shade._boisinit=true
            // Object.setPrototypeOf(shade, bodavm.memory.globalobj['WebGLShaderPrecisionFormat'].prototype)
            // bodavm.toolsFunc.symbolProperty(shade)
            return shade
        }
    }


})()


