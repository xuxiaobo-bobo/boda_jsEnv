
// debugger
// // 删除浏览器中不存在的对象
delete global;
delete GLOBAL;
delete VMError;
delete Buffer;
delete process;
delete root;
delete __filename;
delete __dirname;
delete WindowProperties;
delete globalThis[Symbol.toStringTag];
delete SharedArrayBuffer
// debugger
window=globalThis
globalThis.__proto__=Window.prototype
// window = new Window('bobo')

// window = Object.setPrototypeOf(globalThis, bodavm.toolsFunc.proxy(window, "window"));
// debugger

// window.location=new Location('bobo')
// document=new HTMLDocument('bobo')
// debugger
bodavm.toolsFunc.defineProperty(window, "atob", {
    configurable: true, enumerable: true, writable: true,
    value: function atob(str) {
        return bodavm.toolsFunc.base64.base64decode(str);
    }
});
bodavm.toolsFunc.defineProperty(window, "btoa", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function btoa(str) {
        return bodavm.toolsFunc.base64.base64encode(str);
    }
});


bodavm.toolsFunc.defineProperty(window, "name", {configurable:true, enumerable:true, get:function name (){return bodavm.toolsFunc.dispatch(this, window, "window", "name_get", arguments)}, set:function name (){return bodavm.toolsFunc.dispatch(this, window, "window", "name_set", arguments)}});
bodavm.toolsFunc.defineProperty(window, "top", { configurable: false, enumerable: true, get: function top() { return bodavm.toolsFunc.dispatch(this, window, "window", "top_get", arguments,) }, set: undefined });
bodavm.toolsFunc.defineProperty(window, "frames", { configurable: true, enumerable: true, get: function frames() { return bodavm.toolsFunc.dispatch(this, window, "window", "frames_get", arguments,) }, set: function frames() { return bodavm.toolsFunc.dispatch(this, window, "window", "frames_set", arguments) }, });
bodavm.toolsFunc.defineProperty(window, "prompt", {configurable:true, enumerable:true, writable:true, value:function prompt (){return bodavm.toolsFunc.dispatch(this, window, "window", "prompt", arguments)}});
bodavm.toolsFunc.defineProperty(window, "print", {configurable:true, enumerable:true, writable:true, value:function print (){return bodavm.toolsFunc.dispatch(this, window, "window", "print", arguments)}});

bodavm.toolsFunc.defineProperty(window, "location", { configurable: false, enumerable: true, get: function location() { return bodavm.toolsFunc.dispatch(this, window, "window", "location_get", arguments,) }, set: function location() { return bodavm.toolsFunc.dispatch(this, window, "window", "location_set", arguments) }, });
bodavm.toolsFunc.defineProperty(window, "self", { configurable: true, enumerable: true, get: function self() { return bodavm.toolsFunc.dispatch(this, window, "window", "self_get", arguments,) }, set: function self() { return bodavm.toolsFunc.dispatch(this, window, "window", "self_set", arguments) }, });
bodavm.toolsFunc.defineProperty(window, "setInterval", { configurable: true, enumerable: true, writable: true, value: function setInterval() { return bodavm.toolsFunc.dispatch(this, window, "window", "setInterval", arguments) } });
bodavm.toolsFunc.defineProperty(window, "setTimeout", { configurable: true, enumerable: true, writable: true, value: function setTimeout() { return bodavm.toolsFunc.dispatch(this, window, "window", "setTimeout", arguments) } });
bodavm.toolsFunc.defineProperty(window, "clearTimeout", { configurable: true, enumerable: true, writable: true, value: function clearTimeout() { return bodavm.toolsFunc.dispatch(this, window, "window", "clearTimeout", arguments) } });
bodavm.toolsFunc.defineProperty(window, "clearInterval", { configurable: true, enumerable: true, writable: true, value: function clearInterval() { return bodavm.toolsFunc.dispatch(this, window, "window", "clearInterval", arguments) } });
bodavm.toolsFunc.defineProperty(window, "frames", { configurable: true, enumerable: true, get: function frames() { return bodavm.toolsFunc.dispatch(this, window, "window", "frames_get", arguments) }, set: function frames() { return bodavm.toolsFunc.dispatch(this, window, "window", "frames_set", arguments) } });
bodavm.toolsFunc.defineProperty(window, "closed", { configurable: true, enumerable: true, get: function closed() { return bodavm.toolsFunc.dispatch(this, window, "window", "closed_get", arguments, false) }, set: undefined });
bodavm.toolsFunc.defineProperty(window, "status", { configurable: true, enumerable: true, get: function status() { return bodavm.toolsFunc.dispatch(this, window, "window", "status_get", arguments, '') }, set: function status() { return bodavm.toolsFunc.dispatch(this, window, "window", "status_set", arguments) } });
bodavm.toolsFunc.defineProperty(window, "parent", { configurable: true, enumerable: true, get: function parent() { return bodavm.toolsFunc.dispatch(this, window, "window", "parent_get", arguments) }, set: function parent() { return bodavm.toolsFunc.dispatch(this, window, "window", "parent_set", arguments) } });
bodavm.toolsFunc.defineProperty(window, "origin", { configurable: true, enumerable: true, get: function origin() { return bodavm.toolsFunc.dispatch(this, window, "window", "origin_get", arguments, 'https://developer.mozilla.org') }, set: function origin() { return bodavm.toolsFunc.dispatch(this, window, "window", "origin_set", arguments) } });
bodavm.toolsFunc.defineProperty(window, "scrollX", { configurable: true, enumerable: true, get: function scrollX() { return bodavm.toolsFunc.dispatch(this, window, "window", "scrollX_get", arguments, 0) }, set: function scrollX() { return bodavm.toolsFunc.dispatch(this, window, "window", "scrollX_set", arguments) } });
bodavm.toolsFunc.defineProperty(window, "pageXOffset", { configurable: true, enumerable: true, get: function pageXOffset() { return bodavm.toolsFunc.dispatch(this, window, "window", "pageXOffset_get", arguments, 0) }, set: function pageXOffset() { return bodavm.toolsFunc.dispatch(this, window, "window", "pageXOffset_set", arguments) } });
bodavm.toolsFunc.defineProperty(window, "scrollY", { configurable: true, enumerable: true, get: function scrollY() { return bodavm.toolsFunc.dispatch(this, window, "window", "scrollY_get", arguments, 300) }, set: function scrollY() { return bodavm.toolsFunc.dispatch(this, window, "window", "scrollY_set", arguments) } });
bodavm.toolsFunc.defineProperty(window, "pageYOffset", { configurable: true, enumerable: true, get: function pageYOffset() { return bodavm.toolsFunc.dispatch(this, window, "window", "pageYOffset_get", arguments, 300) }, set: function pageYOffset() { return bodavm.toolsFunc.dispatch(this, window, "window", "pageYOffset_set", arguments) } });
bodavm.toolsFunc.defineProperty(window, "screenX", { configurable: true, enumerable: true, get: function screenX() { return bodavm.toolsFunc.dispatch(this, window, "window", "screenX_get", arguments, 0) }, set: function screenX() { return bodavm.toolsFunc.dispatch(this, window, "window", "screenX_set", arguments) } });
bodavm.toolsFunc.defineProperty(window, "screenY", { configurable: true, enumerable: true, get: function screenY() { return bodavm.toolsFunc.dispatch(this, window, "window", "screenY_get", arguments, 0) }, set: function screenY() { return bodavm.toolsFunc.dispatch(this, window, "window", "screenY_set", arguments) } });
bodavm.toolsFunc.defineProperty(window, "outerWidth", { configurable: true, enumerable: true, get: function outerWidth() { return bodavm.toolsFunc.dispatch(this, window, "window", "outerWidth_get", arguments, 1440) }, set: function outerWidth() { return bodavm.toolsFunc.dispatch(this, window, "window", "outerWidth_set", arguments) } });
bodavm.toolsFunc.defineProperty(window, "outerHeight", { configurable: true, enumerable: true, get: function outerHeight() { return bodavm.toolsFunc.dispatch(this, window, "window", "outerHeight_get", arguments, 920) }, set: function outerHeight() { return bodavm.toolsFunc.dispatch(this, window, "window", "outerHeight_set", arguments) } });
bodavm.toolsFunc.defineProperty(window, "screenLeft", { configurable: true, enumerable: true, get: function screenLeft() { return bodavm.toolsFunc.dispatch(this, window, "window", "screenLeft_get", arguments, 0) }, set: function screenLeft() { return bodavm.toolsFunc.dispatch(this, window, "window", "screenLeft_set", arguments) } });
bodavm.toolsFunc.defineProperty(window, "screenTop", { configurable: true, enumerable: true, get: function screenTop() { return bodavm.toolsFunc.dispatch(this, window, "window", "screenTop_get", arguments, 0) }, set: function screenTop() { return bodavm.toolsFunc.dispatch(this, window, "window", "screenTop_set", arguments) } });
// bodavm.toolsFunc.defineProperty(window, "defaultStatus", { configurable: true, enumerable: true, get: function defaultStatus() { return bodavm.toolsFunc.dispatch(this, window, "window", "defaultStatus_get", arguments, '') }, set: function defaultStatus() { return bodavm.toolsFunc.dispatch(this, window, "window", "defaultStatus_set", arguments) } });
// bodavm.toolsFunc.defineProperty(window, "defaultstatus", { configurable: true, enumerable: true, get: function defaultstatus() { return bodavm.toolsFunc.dispatch(this, window, "window", "defaultstatus_get", arguments, '') }, set: function defaultstatus() { return bodavm.toolsFunc.dispatch(this, window, "window", "defaultstatus_set", arguments) } });
bodavm.toolsFunc.defineProperty(window, "innerWidth", { configurable: true, enumerable: true, get: function innerWidth() { return bodavm.toolsFunc.dispatch(this, window, "window", "innerWidth_get", arguments) }, set: function innerWidth() { return bodavm.toolsFunc.dispatch(this, window, "window", "innerWidth_set", arguments) } });
bodavm.toolsFunc.defineProperty(window, "innerHeight", { configurable: true, enumerable: true, get: function innerHeight() { return bodavm.toolsFunc.dispatch(this, window, "window", "innerHeight_get", arguments) }, set: function innerHeight() { return bodavm.toolsFunc.dispatch(this, window, "window", "innerHeight_set", arguments) } });
bodavm.toolsFunc.defineProperty(window, "matchMedia", { configurable: true, enumerable: true, writable: true, value: function matchMedia() { return bodavm.toolsFunc.dispatch(this, window, "window", "matchMedia", arguments) } });
bodavm.toolsFunc.defineProperty(window, "chrome", {
    writable: true, enumerable: true, configurable: false, value:
    {
        app: {
            InstallState: { DISABLED: 'disabled', INSTALLED: 'installed', NOT_INSTALLED: 'not_installed' },
            RunningState: { CANNOT_RUN: 'cannot_run', READY_TO_RUN: 'ready_to_run', RUNNING: 'running' },
            getDetails: function getDetails() { debugger },
            getIsInstalled: function getIsInstalled() { debugger },
            installState: function installState() { debugger },
            isInstalled: false,
            runningState: function runningState() { debugger }
        },
        csi: function () { debugger },
        loadTimes: function () { debugger },
    }

});
//bodavm.toolsFunc.defineProperty(window, "webkitRequestFileSystem", { writable: true, enumerable: true, configurable: true, value: function webkitRequestFileSystem() { return bodavm.toolsFunc.dispatch(this, window, "window", "webkitRequestFileSystem", arguments) } });
bodavm.toolsFunc.defineProperty(window, "fetch", { writable: true, enumerable: true, configurable: true, value: function fetch() { return bodavm.toolsFunc.dispatch(this, window, "window", "fetch", arguments) } });
bodavm.toolsFunc.defineProperty(window, "devicePixelRatio", { configurable: true, enumerable: true, get: function devicePixelRatio() { return bodavm.toolsFunc.dispatch(this, window, "window", "devicePixelRatio_get", arguments) }, set: function devicePixelRatio() { return bodavm.toolsFunc.dispatch(this, window, "window", "devicePixelRatio_set", arguments) } });
// bodavm.toolsFunc.defineProperty(window, "getComputedStyle", { configurable: true, enumerable: true, writable: true, value: function getComputedStyle() { return bodavm.toolsFunc.dispatch(this, window, "window", "getComputedStyle", arguments) } });
bodavm.toolsFunc.defineProperty(window, "length", {configurable:true, enumerable:true, get:function length (){return bodavm.toolsFunc.dispatch(this, window, "window", "length_get", arguments)}, set:function length (){return bodavm.toolsFunc.dispatch(this, window, "window", "length_set", arguments)}});
//bodavm.toolsFunc.defineProperty(window, "openDatabase", {configurable:true, enumerable:true, writable:true, value:function openDatabase (){return bodavm.toolsFunc.dispatch(this, window, "window", "openDatabase", arguments)}});
bodavm.toolsFunc.defineProperty(window, "find", {configurable:true, enumerable:true, writable:true, value:function find (){return bodavm.toolsFunc.dispatch(this, window, "window", "find", arguments)}});
bodavm.toolsFunc.defineProperty(window, "createImageBitmap", {configurable:true, enumerable:true, writable:true, value:function createImageBitmap (){return bodavm.toolsFunc.dispatch(this, window, "window", "createImageBitmap", arguments)}});
bodavm.toolsFunc.defineProperty(window, "confirm", {configurable:true, enumerable:true, writable:true, value:function confirm (){return bodavm.toolsFunc.dispatch(this, window, "window", "confirm", arguments)}});
bodavm.toolsFunc.defineProperty(window, "close", {configurable:true, enumerable:true, writable:true, value:function close (){return bodavm.toolsFunc.dispatch(this, window, "window", "close", arguments)}});
bodavm.toolsFunc.defineProperty(window, "blur", {configurable:true, enumerable:true, writable:true, value:function blur (){return bodavm.toolsFunc.dispatch(this, window, "window", "blur", arguments)}});
bodavm.toolsFunc.defineProperty(window, "open", {configurable:true, enumerable:true, writable:true, value:function open (){return bodavm.toolsFunc.dispatch(this, window, "window", "open", arguments)}});

bodavm.toolsFunc.defineProperty(window, "$_", {configurable:true, enumerable:false, writable:true, value:undefined});
bodavm.toolsFunc.defineProperty(window, "$0", {configurable:true, enumerable:false, writable:true, value:{}});
bodavm.toolsFunc.defineProperty(window, "$1", {configurable:true, enumerable:false, writable:true, value:undefined});
bodavm.toolsFunc.defineProperty(window, "$2", {configurable:true, enumerable:false, writable:true, value:undefined});
bodavm.toolsFunc.defineProperty(window, "$3", {configurable:true, enumerable:false, writable:true, value:undefined});
bodavm.toolsFunc.defineProperty(window, "$4", {configurable:true, enumerable:false, writable:true, value:undefined});

bodavm.toolsFunc.defineProperty(window, "offscreenBuffering", {configurable:true, enumerable:false, get:function offscreenBuffering (){return bodavm.toolsFunc.dispatch(this, window, "window", "offscreenBuffering_get", arguments, true)}, set:function offscreenBuffering (){return bodavm.toolsFunc.dispatch(this, window, "window", "offscreenBuffering_set", arguments)}});
bodavm.toolsFunc.defineProperty(window, "onsearch", {configurable:true, enumerable:true, get:function onsearch (){return bodavm.toolsFunc.dispatch(this, window, "window", "onsearch_get", arguments, null)}, set:function onsearch (){return bodavm.toolsFunc.dispatch(this, window, "window", "onsearch_set", arguments)}});
bodavm.toolsFunc.defineProperty(window, "isSecureContext", {configurable:true, enumerable:true, get:function isSecureContext (){return bodavm.toolsFunc.dispatch(this, window, "window", "isSecureContext_get", arguments, true)}, set:undefined});

bodavm.toolsFunc.defineProperty(window, "onappinstalled", {configurable:true, enumerable:true, get:function onappinstalled (){return bodavm.toolsFunc.dispatch(this, window, "window", "onappinstalled_get", arguments, null)}, set:function onappinstalled (){return bodavm.toolsFunc.dispatch(this, window, "window", "onappinstalled_set", arguments)}});
bodavm.toolsFunc.defineProperty(window, "onbeforeinstallprompt", {configurable:true, enumerable:true, get:function onbeforeinstallprompt (){return bodavm.toolsFunc.dispatch(this, window, "window", "onbeforeinstallprompt_get", arguments, null)}, set:function onbeforeinstallprompt (){return bodavm.toolsFunc.dispatch(this, window, "window", "onbeforeinstallprompt_set", arguments)}});
bodavm.toolsFunc.defineProperty(window, "onbeforexrselect", {configurable:true, enumerable:true, get:function onbeforexrselect (){return bodavm.toolsFunc.dispatch(this, window, "window", "onbeforexrselect_get", arguments, null)}, set:function onbeforexrselect (){return bodavm.toolsFunc.dispatch(this, window, "window", "onbeforexrselect_set", arguments)}});
bodavm.toolsFunc.defineProperty(window, "onabort", {configurable:true, enumerable:true, get:function onabort (){return bodavm.toolsFunc.dispatch(this, window, "window", "onabort_get", arguments, null)}, set:function onabort (){return bodavm.toolsFunc.dispatch(this, window, "window", "onabort_set", arguments)}});
bodavm.toolsFunc.defineProperty(window, "onbeforeinput", {configurable:true, enumerable:true, get:function onbeforeinput (){return bodavm.toolsFunc.dispatch(this, window, "window", "onbeforeinput_get", arguments, null)}, set:function onbeforeinput (){return bodavm.toolsFunc.dispatch(this, window, "window", "onbeforeinput_set", arguments)}});
bodavm.toolsFunc.defineProperty(window, "onblur", {configurable:true, enumerable:true, get:function onblur (){return bodavm.toolsFunc.dispatch(this, window, "window", "onblur_get", arguments, null)}, set:function onblur (){return bodavm.toolsFunc.dispatch(this, window, "window", "onblur_set", arguments)}});
bodavm.toolsFunc.defineProperty(window, "oncancel", {configurable:true, enumerable:true, get:function oncancel (){return bodavm.toolsFunc.dispatch(this, window, "window", "oncancel_get", arguments, null)}, set:function oncancel (){return bodavm.toolsFunc.dispatch(this, window, "window", "oncancel_set", arguments)}});
bodavm.toolsFunc.defineProperty(window, "oncanplay", {configurable:true, enumerable:true, get:function oncanplay (){return bodavm.toolsFunc.dispatch(this, window, "window", "oncanplay_get", arguments, null)}, set:function oncanplay (){return bodavm.toolsFunc.dispatch(this, window, "window", "oncanplay_set", arguments)}});
bodavm.toolsFunc.defineProperty(window, "oncanplaythrough", {configurable:true, enumerable:true, get:function oncanplaythrough (){return bodavm.toolsFunc.dispatch(this, window, "window", "oncanplaythrough_get", arguments, null)}, set:function oncanplaythrough (){return bodavm.toolsFunc.dispatch(this, window, "window", "oncanplaythrough_set", arguments)}});
bodavm.toolsFunc.defineProperty(window, "onchange", {configurable:true, enumerable:true, get:function onchange (){return bodavm.toolsFunc.dispatch(this, window, "window", "onchange_get", arguments, null)}, set:function onchange (){return bodavm.toolsFunc.dispatch(this, window, "window", "onchange_set", arguments)}});
bodavm.toolsFunc.defineProperty(window, "onclick", {configurable:true, enumerable:true, get:function onclick (){return bodavm.toolsFunc.dispatch(this, window, "window", "onclick_get", arguments, null)}, set:function onclick (){return bodavm.toolsFunc.dispatch(this, window, "window", "onclick_set", arguments)}});
bodavm.toolsFunc.defineProperty(window, "onclose", {configurable:true, enumerable:true, get:function onclose (){return bodavm.toolsFunc.dispatch(this, window, "window", "onclose_get", arguments, null)}, set:function onclose (){return bodavm.toolsFunc.dispatch(this, window, "window", "onclose_set", arguments)}});
bodavm.toolsFunc.defineProperty(window, "oncontextlost", {configurable:true, enumerable:true, get:function oncontextlost (){return bodavm.toolsFunc.dispatch(this, window, "window", "oncontextlost_get", arguments, null)}, set:function oncontextlost (){return bodavm.toolsFunc.dispatch(this, window, "window", "oncontextlost_set", arguments)}});
bodavm.toolsFunc.defineProperty(window, "oncontextmenu", {configurable:true, enumerable:true, get:function oncontextmenu (){return bodavm.toolsFunc.dispatch(this, window, "window", "oncontextmenu_get", arguments, null)}, set:function oncontextmenu (){return bodavm.toolsFunc.dispatch(this, window, "window", "oncontextmenu_set", arguments)}});
bodavm.toolsFunc.defineProperty(window, "oncontextrestored", {configurable:true, enumerable:true, get:function oncontextrestored (){return bodavm.toolsFunc.dispatch(this, window, "window", "oncontextrestored_get", arguments, null)}, set:function oncontextrestored (){return bodavm.toolsFunc.dispatch(this, window, "window", "oncontextrestored_set", arguments)}});
bodavm.toolsFunc.defineProperty(window, "oncuechange", {configurable:true, enumerable:true, get:function oncuechange (){return bodavm.toolsFunc.dispatch(this, window, "window", "oncuechange_get", arguments, null)}, set:function oncuechange (){return bodavm.toolsFunc.dispatch(this, window, "window", "oncuechange_set", arguments)}});
bodavm.toolsFunc.defineProperty(window, "ondblclick", {configurable:true, enumerable:true, get:function ondblclick (){return bodavm.toolsFunc.dispatch(this, window, "window", "ondblclick_get", arguments, null)}, set:function ondblclick (){return bodavm.toolsFunc.dispatch(this, window, "window", "ondblclick_set", arguments)}});
bodavm.toolsFunc.defineProperty(window, "ondrag", {configurable:true, enumerable:true, get:function ondrag (){return bodavm.toolsFunc.dispatch(this, window, "window", "ondrag_get", arguments, null)}, set:function ondrag (){return bodavm.toolsFunc.dispatch(this, window, "window", "ondrag_set", arguments)}});
bodavm.toolsFunc.defineProperty(window, "ondragend", {configurable:true, enumerable:true, get:function ondragend (){return bodavm.toolsFunc.dispatch(this, window, "window", "ondragend_get", arguments, null)}, set:function ondragend (){return bodavm.toolsFunc.dispatch(this, window, "window", "ondragend_set", arguments)}});
bodavm.toolsFunc.defineProperty(window, "ondragenter", {configurable:true, enumerable:true, get:function ondragenter (){return bodavm.toolsFunc.dispatch(this, window, "window", "ondragenter_get", arguments, null)}, set:function ondragenter (){return bodavm.toolsFunc.dispatch(this, window, "window", "ondragenter_set", arguments)}});
bodavm.toolsFunc.defineProperty(window, "ondragleave", {configurable:true, enumerable:true, get:function ondragleave (){return bodavm.toolsFunc.dispatch(this, window, "window", "ondragleave_get", arguments, null)}, set:function ondragleave (){return bodavm.toolsFunc.dispatch(this, window, "window", "ondragleave_set", arguments)}});
bodavm.toolsFunc.defineProperty(window, "ondragover", {configurable:true, enumerable:true, get:function ondragover (){return bodavm.toolsFunc.dispatch(this, window, "window", "ondragover_get", arguments, null)}, set:function ondragover (){return bodavm.toolsFunc.dispatch(this, window, "window", "ondragover_set", arguments)}});
bodavm.toolsFunc.defineProperty(window, "ondragstart", {configurable:true, enumerable:true, get:function ondragstart (){return bodavm.toolsFunc.dispatch(this, window, "window", "ondragstart_get", arguments, null)}, set:function ondragstart (){return bodavm.toolsFunc.dispatch(this, window, "window", "ondragstart_set", arguments)}});
bodavm.toolsFunc.defineProperty(window, "ondrop", {configurable:true, enumerable:true, get:function ondrop (){return bodavm.toolsFunc.dispatch(this, window, "window", "ondrop_get", arguments, null)}, set:function ondrop (){return bodavm.toolsFunc.dispatch(this, window, "window", "ondrop_set", arguments)}});
bodavm.toolsFunc.defineProperty(window, "ondurationchange", {configurable:true, enumerable:true, get:function ondurationchange (){return bodavm.toolsFunc.dispatch(this, window, "window", "ondurationchange_get", arguments, null)}, set:function ondurationchange (){return bodavm.toolsFunc.dispatch(this, window, "window", "ondurationchange_set", arguments)}});
bodavm.toolsFunc.defineProperty(window, "onemptied", {configurable:true, enumerable:true, get:function onemptied (){return bodavm.toolsFunc.dispatch(this, window, "window", "onemptied_get", arguments, null)}, set:function onemptied (){return bodavm.toolsFunc.dispatch(this, window, "window", "onemptied_set", arguments)}});
bodavm.toolsFunc.defineProperty(window, "onended", {configurable:true, enumerable:true, get:function onended (){return bodavm.toolsFunc.dispatch(this, window, "window", "onended_get", arguments, null)}, set:function onended (){return bodavm.toolsFunc.dispatch(this, window, "window", "onended_set", arguments)}});
bodavm.toolsFunc.defineProperty(window, "onerror", {configurable:true, enumerable:true, get:function onerror (){return bodavm.toolsFunc.dispatch(this, window, "window", "onerror_get", arguments, null)}, set:function onerror (){return bodavm.toolsFunc.dispatch(this, window, "window", "onerror_set", arguments)}});
bodavm.toolsFunc.defineProperty(window, "onfocus", {configurable:true, enumerable:true, get:function onfocus (){return bodavm.toolsFunc.dispatch(this, window, "window", "onfocus_get", arguments, null)}, set:function onfocus (){return bodavm.toolsFunc.dispatch(this, window, "window", "onfocus_set", arguments)}});
bodavm.toolsFunc.defineProperty(window, "onformdata", {configurable:true, enumerable:true, get:function onformdata (){return bodavm.toolsFunc.dispatch(this, window, "window", "onformdata_get", arguments, null)}, set:function onformdata (){return bodavm.toolsFunc.dispatch(this, window, "window", "onformdata_set", arguments)}});
bodavm.toolsFunc.defineProperty(window, "oninput", {configurable:true, enumerable:true, get:function oninput (){return bodavm.toolsFunc.dispatch(this, window, "window", "oninput_get", arguments, null)}, set:function oninput (){return bodavm.toolsFunc.dispatch(this, window, "window", "oninput_set", arguments)}});
bodavm.toolsFunc.defineProperty(window, "oninvalid", {configurable:true, enumerable:true, get:function oninvalid (){return bodavm.toolsFunc.dispatch(this, window, "window", "oninvalid_get", arguments, null)}, set:function oninvalid (){return bodavm.toolsFunc.dispatch(this, window, "window", "oninvalid_set", arguments)}});
bodavm.toolsFunc.defineProperty(window, "onkeydown", {configurable:true, enumerable:true, get:function onkeydown (){return bodavm.toolsFunc.dispatch(this, window, "window", "onkeydown_get", arguments, null)}, set:function onkeydown (){return bodavm.toolsFunc.dispatch(this, window, "window", "onkeydown_set", arguments)}});
bodavm.toolsFunc.defineProperty(window, "onkeypress", {configurable:true, enumerable:true, get:function onkeypress (){return bodavm.toolsFunc.dispatch(this, window, "window", "onkeypress_get", arguments, null)}, set:function onkeypress (){return bodavm.toolsFunc.dispatch(this, window, "window", "onkeypress_set", arguments)}});
bodavm.toolsFunc.defineProperty(window, "onkeyup", {configurable:true, enumerable:true, get:function onkeyup (){return bodavm.toolsFunc.dispatch(this, window, "window", "onkeyup_get", arguments, null)}, set:function onkeyup (){return bodavm.toolsFunc.dispatch(this, window, "window", "onkeyup_set", arguments)}});
bodavm.toolsFunc.defineProperty(window, "onload", {configurable:true, enumerable:true, get:function onload (){return bodavm.toolsFunc.dispatch(this, window, "window", "onload_get", arguments, null)}, set:function onload (){return bodavm.toolsFunc.dispatch(this, window, "window", "onload_set", arguments)}});
bodavm.toolsFunc.defineProperty(window, "onloadeddata", {configurable:true, enumerable:true, get:function onloadeddata (){return bodavm.toolsFunc.dispatch(this, window, "window", "onloadeddata_get", arguments, null)}, set:function onloadeddata (){return bodavm.toolsFunc.dispatch(this, window, "window", "onloadeddata_set", arguments)}});
bodavm.toolsFunc.defineProperty(window, "onloadedmetadata", {configurable:true, enumerable:true, get:function onloadedmetadata (){return bodavm.toolsFunc.dispatch(this, window, "window", "onloadedmetadata_get", arguments, null)}, set:function onloadedmetadata (){return bodavm.toolsFunc.dispatch(this, window, "window", "onloadedmetadata_set", arguments)}});
bodavm.toolsFunc.defineProperty(window, "onloadstart", {configurable:true, enumerable:true, get:function onloadstart (){return bodavm.toolsFunc.dispatch(this, window, "window", "onloadstart_get", arguments, null)}, set:function onloadstart (){return bodavm.toolsFunc.dispatch(this, window, "window", "onloadstart_set", arguments)}});
bodavm.toolsFunc.defineProperty(window, "onmousedown", {configurable:true, enumerable:true, get:function onmousedown (){return bodavm.toolsFunc.dispatch(this, window, "window", "onmousedown_get", arguments, null)}, set:function onmousedown (){return bodavm.toolsFunc.dispatch(this, window, "window", "onmousedown_set", arguments)}});
bodavm.toolsFunc.defineProperty(window, "onmouseenter", {configurable:true, enumerable:true, get:function onmouseenter (){return bodavm.toolsFunc.dispatch(this, window, "window", "onmouseenter_get", arguments, null)}, set:function onmouseenter (){return bodavm.toolsFunc.dispatch(this, window, "window", "onmouseenter_set", arguments)}});
bodavm.toolsFunc.defineProperty(window, "onmouseleave", {configurable:true, enumerable:true, get:function onmouseleave (){return bodavm.toolsFunc.dispatch(this, window, "window", "onmouseleave_get", arguments, null)}, set:function onmouseleave (){return bodavm.toolsFunc.dispatch(this, window, "window", "onmouseleave_set", arguments)}});
bodavm.toolsFunc.defineProperty(window, "onmousemove", {configurable:true, enumerable:true, get:function onmousemove (){return bodavm.toolsFunc.dispatch(this, window, "window", "onmousemove_get", arguments, null)}, set:function onmousemove (){return bodavm.toolsFunc.dispatch(this, window, "window", "onmousemove_set", arguments)}});
bodavm.toolsFunc.defineProperty(window, "onmouseout", {configurable:true, enumerable:true, get:function onmouseout (){return bodavm.toolsFunc.dispatch(this, window, "window", "onmouseout_get", arguments, null)}, set:function onmouseout (){return bodavm.toolsFunc.dispatch(this, window, "window", "onmouseout_set", arguments)}});
bodavm.toolsFunc.defineProperty(window, "onmouseover", {configurable:true, enumerable:true, get:function onmouseover (){return bodavm.toolsFunc.dispatch(this, window, "window", "onmouseover_get", arguments, null)}, set:function onmouseover (){return bodavm.toolsFunc.dispatch(this, window, "window", "onmouseover_set", arguments)}});
bodavm.toolsFunc.defineProperty(window, "onmouseup", {configurable:true, enumerable:true, get:function onmouseup (){return bodavm.toolsFunc.dispatch(this, window, "window", "onmouseup_get", arguments, null)}, set:function onmouseup (){return bodavm.toolsFunc.dispatch(this, window, "window", "onmouseup_set", arguments)}});
bodavm.toolsFunc.defineProperty(window, "onmousewheel", {configurable:true, enumerable:true, get:function onmousewheel (){return bodavm.toolsFunc.dispatch(this, window, "window", "onmousewheel_get", arguments, null)}, set:function onmousewheel (){return bodavm.toolsFunc.dispatch(this, window, "window", "onmousewheel_set", arguments)}});
bodavm.toolsFunc.defineProperty(window, "onpause", {configurable:true, enumerable:true, get:function onpause (){return bodavm.toolsFunc.dispatch(this, window, "window", "onpause_get", arguments, null)}, set:function onpause (){return bodavm.toolsFunc.dispatch(this, window, "window", "onpause_set", arguments)}});
bodavm.toolsFunc.defineProperty(window, "onplay", {configurable:true, enumerable:true, get:function onplay (){return bodavm.toolsFunc.dispatch(this, window, "window", "onplay_get", arguments, null)}, set:function onplay (){return bodavm.toolsFunc.dispatch(this, window, "window", "onplay_set", arguments)}});
bodavm.toolsFunc.defineProperty(window, "onplaying", {configurable:true, enumerable:true, get:function onplaying (){return bodavm.toolsFunc.dispatch(this, window, "window", "onplaying_get", arguments, null)}, set:function onplaying (){return bodavm.toolsFunc.dispatch(this, window, "window", "onplaying_set", arguments)}});
bodavm.toolsFunc.defineProperty(window, "onprogress", {configurable:true, enumerable:true, get:function onprogress (){return bodavm.toolsFunc.dispatch(this, window, "window", "onprogress_get", arguments, null)}, set:function onprogress (){return bodavm.toolsFunc.dispatch(this, window, "window", "onprogress_set", arguments)}});
bodavm.toolsFunc.defineProperty(window, "onratechange", {configurable:true, enumerable:true, get:function onratechange (){return bodavm.toolsFunc.dispatch(this, window, "window", "onratechange_get", arguments, null)}, set:function onratechange (){return bodavm.toolsFunc.dispatch(this, window, "window", "onratechange_set", arguments)}});
bodavm.toolsFunc.defineProperty(window, "onreset", {configurable:true, enumerable:true, get:function onreset (){return bodavm.toolsFunc.dispatch(this, window, "window", "onreset_get", arguments, null)}, set:function onreset (){return bodavm.toolsFunc.dispatch(this, window, "window", "onreset_set", arguments)}});
bodavm.toolsFunc.defineProperty(window, "onresize", {configurable:true, enumerable:true, get:function onresize (){return bodavm.toolsFunc.dispatch(this, window, "window", "onresize_get", arguments, null)}, set:function onresize (){return bodavm.toolsFunc.dispatch(this, window, "window", "onresize_set", arguments)}});
bodavm.toolsFunc.defineProperty(window, "onscroll", {configurable:true, enumerable:true, get:function onscroll (){return bodavm.toolsFunc.dispatch(this, window, "window", "onscroll_get", arguments, null)}, set:function onscroll (){return bodavm.toolsFunc.dispatch(this, window, "window", "onscroll_set", arguments)}});
bodavm.toolsFunc.defineProperty(window, "onsecuritypolicyviolation", {configurable:true, enumerable:true, get:function onsecuritypolicyviolation (){return bodavm.toolsFunc.dispatch(this, window, "window", "onsecuritypolicyviolation_get", arguments, null)}, set:function onsecuritypolicyviolation (){return bodavm.toolsFunc.dispatch(this, window, "window", "onsecuritypolicyviolation_set", arguments)}});
bodavm.toolsFunc.defineProperty(window, "onseeked", {configurable:true, enumerable:true, get:function onseeked (){return bodavm.toolsFunc.dispatch(this, window, "window", "onseeked_get", arguments, null)}, set:function onseeked (){return bodavm.toolsFunc.dispatch(this, window, "window", "onseeked_set", arguments)}});
bodavm.toolsFunc.defineProperty(window, "onseeking", {configurable:true, enumerable:true, get:function onseeking (){return bodavm.toolsFunc.dispatch(this, window, "window", "onseeking_get", arguments, null)}, set:function onseeking (){return bodavm.toolsFunc.dispatch(this, window, "window", "onseeking_set", arguments)}});
bodavm.toolsFunc.defineProperty(window, "onselect", {configurable:true, enumerable:true, get:function onselect (){return bodavm.toolsFunc.dispatch(this, window, "window", "onselect_get", arguments, null)}, set:function onselect (){return bodavm.toolsFunc.dispatch(this, window, "window", "onselect_set", arguments)}});
bodavm.toolsFunc.defineProperty(window, "onslotchange", {configurable:true, enumerable:true, get:function onslotchange (){return bodavm.toolsFunc.dispatch(this, window, "window", "onslotchange_get", arguments, null)}, set:function onslotchange (){return bodavm.toolsFunc.dispatch(this, window, "window", "onslotchange_set", arguments)}});
bodavm.toolsFunc.defineProperty(window, "onstalled", {configurable:true, enumerable:true, get:function onstalled (){return bodavm.toolsFunc.dispatch(this, window, "window", "onstalled_get", arguments, null)}, set:function onstalled (){return bodavm.toolsFunc.dispatch(this, window, "window", "onstalled_set", arguments)}});
bodavm.toolsFunc.defineProperty(window, "onsubmit", {configurable:true, enumerable:true, get:function onsubmit (){return bodavm.toolsFunc.dispatch(this, window, "window", "onsubmit_get", arguments, null)}, set:function onsubmit (){return bodavm.toolsFunc.dispatch(this, window, "window", "onsubmit_set", arguments)}});
bodavm.toolsFunc.defineProperty(window, "onsuspend", {configurable:true, enumerable:true, get:function onsuspend (){return bodavm.toolsFunc.dispatch(this, window, "window", "onsuspend_get", arguments, null)}, set:function onsuspend (){return bodavm.toolsFunc.dispatch(this, window, "window", "onsuspend_set", arguments)}});
bodavm.toolsFunc.defineProperty(window, "ontimeupdate", {configurable:true, enumerable:true, get:function ontimeupdate (){return bodavm.toolsFunc.dispatch(this, window, "window", "ontimeupdate_get", arguments, null)}, set:function ontimeupdate (){return bodavm.toolsFunc.dispatch(this, window, "window", "ontimeupdate_set", arguments)}});
bodavm.toolsFunc.defineProperty(window, "ontoggle", {configurable:true, enumerable:true, get:function ontoggle (){return bodavm.toolsFunc.dispatch(this, window, "window", "ontoggle_get", arguments, null)}, set:function ontoggle (){return bodavm.toolsFunc.dispatch(this, window, "window", "ontoggle_set", arguments)}});
bodavm.toolsFunc.defineProperty(window, "onvolumechange", {configurable:true, enumerable:true, get:function onvolumechange (){return bodavm.toolsFunc.dispatch(this, window, "window", "onvolumechange_get", arguments, null)}, set:function onvolumechange (){return bodavm.toolsFunc.dispatch(this, window, "window", "onvolumechange_set", arguments)}});
bodavm.toolsFunc.defineProperty(window, "onwaiting", {configurable:true, enumerable:true, get:function onwaiting (){return bodavm.toolsFunc.dispatch(this, window, "window", "onwaiting_get", arguments, null)}, set:function onwaiting (){return bodavm.toolsFunc.dispatch(this, window, "window", "onwaiting_set", arguments)}});
bodavm.toolsFunc.defineProperty(window, "onwebkitanimationend", {configurable:true, enumerable:true, get:function onwebkitanimationend (){return bodavm.toolsFunc.dispatch(this, window, "window", "onwebkitanimationend_get", arguments, null)}, set:function onwebkitanimationend (){return bodavm.toolsFunc.dispatch(this, window, "window", "onwebkitanimationend_set", arguments)}});
bodavm.toolsFunc.defineProperty(window, "onwebkitanimationiteration", {configurable:true, enumerable:true, get:function onwebkitanimationiteration (){return bodavm.toolsFunc.dispatch(this, window, "window", "onwebkitanimationiteration_get", arguments, null)}, set:function onwebkitanimationiteration (){return bodavm.toolsFunc.dispatch(this, window, "window", "onwebkitanimationiteration_set", arguments)}});
bodavm.toolsFunc.defineProperty(window, "onwebkitanimationstart", {configurable:true, enumerable:true, get:function onwebkitanimationstart (){return bodavm.toolsFunc.dispatch(this, window, "window", "onwebkitanimationstart_get", arguments, null)}, set:function onwebkitanimationstart (){return bodavm.toolsFunc.dispatch(this, window, "window", "onwebkitanimationstart_set", arguments)}});
bodavm.toolsFunc.defineProperty(window, "onwebkittransitionend", {configurable:true, enumerable:true, get:function onwebkittransitionend (){return bodavm.toolsFunc.dispatch(this, window, "window", "onwebkittransitionend_get", arguments, null)}, set:function onwebkittransitionend (){return bodavm.toolsFunc.dispatch(this, window, "window", "onwebkittransitionend_set", arguments)}});
bodavm.toolsFunc.defineProperty(window, "onwheel", {configurable:true, enumerable:true, get:function onwheel (){return bodavm.toolsFunc.dispatch(this, window, "window", "onwheel_get", arguments, null)}, set:function onwheel (){return bodavm.toolsFunc.dispatch(this, window, "window", "onwheel_set", arguments)}});
bodavm.toolsFunc.defineProperty(window, "onauxclick", {configurable:true, enumerable:true, get:function onauxclick (){return bodavm.toolsFunc.dispatch(this, window, "window", "onauxclick_get", arguments, null)}, set:function onauxclick (){return bodavm.toolsFunc.dispatch(this, window, "window", "onauxclick_set", arguments)}});
bodavm.toolsFunc.defineProperty(window, "ongotpointercapture", {configurable:true, enumerable:true, get:function ongotpointercapture (){return bodavm.toolsFunc.dispatch(this, window, "window", "ongotpointercapture_get", arguments, null)}, set:function ongotpointercapture (){return bodavm.toolsFunc.dispatch(this, window, "window", "ongotpointercapture_set", arguments)}});
bodavm.toolsFunc.defineProperty(window, "onlostpointercapture", {configurable:true, enumerable:true, get:function onlostpointercapture (){return bodavm.toolsFunc.dispatch(this, window, "window", "onlostpointercapture_get", arguments, null)}, set:function onlostpointercapture (){return bodavm.toolsFunc.dispatch(this, window, "window", "onlostpointercapture_set", arguments)}});
bodavm.toolsFunc.defineProperty(window, "onpointerdown", {configurable:true, enumerable:true, get:function onpointerdown (){return bodavm.toolsFunc.dispatch(this, window, "window", "onpointerdown_get", arguments, null)}, set:function onpointerdown (){return bodavm.toolsFunc.dispatch(this, window, "window", "onpointerdown_set", arguments)}});
bodavm.toolsFunc.defineProperty(window, "onpointermove", {configurable:true, enumerable:true, get:function onpointermove (){return bodavm.toolsFunc.dispatch(this, window, "window", "onpointermove_get", arguments, null)}, set:function onpointermove (){return bodavm.toolsFunc.dispatch(this, window, "window", "onpointermove_set", arguments)}});
bodavm.toolsFunc.defineProperty(window, "onpointerrawupdate", {configurable:true, enumerable:true, get:function onpointerrawupdate (){return bodavm.toolsFunc.dispatch(this, window, "window", "onpointerrawupdate_get", arguments, null)}, set:function onpointerrawupdate (){return bodavm.toolsFunc.dispatch(this, window, "window", "onpointerrawupdate_set", arguments)}});
bodavm.toolsFunc.defineProperty(window, "onpointerup", {configurable:true, enumerable:true, get:function onpointerup (){return bodavm.toolsFunc.dispatch(this, window, "window", "onpointerup_get", arguments, null)}, set:function onpointerup (){return bodavm.toolsFunc.dispatch(this, window, "window", "onpointerup_set", arguments)}});
bodavm.toolsFunc.defineProperty(window, "onpointercancel", {configurable:true, enumerable:true, get:function onpointercancel (){return bodavm.toolsFunc.dispatch(this, window, "window", "onpointercancel_get", arguments, null)}, set:function onpointercancel (){return bodavm.toolsFunc.dispatch(this, window, "window", "onpointercancel_set", arguments)}});
bodavm.toolsFunc.defineProperty(window, "onpointerover", {configurable:true, enumerable:true, get:function onpointerover (){return bodavm.toolsFunc.dispatch(this, window, "window", "onpointerover_get", arguments, null)}, set:function onpointerover (){return bodavm.toolsFunc.dispatch(this, window, "window", "onpointerover_set", arguments)}});
bodavm.toolsFunc.defineProperty(window, "onpointerout", {configurable:true, enumerable:true, get:function onpointerout (){return bodavm.toolsFunc.dispatch(this, window, "window", "onpointerout_get", arguments, null)}, set:function onpointerout (){return bodavm.toolsFunc.dispatch(this, window, "window", "onpointerout_set", arguments)}});
bodavm.toolsFunc.defineProperty(window, "onpointerenter", {configurable:true, enumerable:true, get:function onpointerenter (){return bodavm.toolsFunc.dispatch(this, window, "window", "onpointerenter_get", arguments, null)}, set:function onpointerenter (){return bodavm.toolsFunc.dispatch(this, window, "window", "onpointerenter_set", arguments)}});
bodavm.toolsFunc.defineProperty(window, "onpointerleave", {configurable:true, enumerable:true, get:function onpointerleave (){return bodavm.toolsFunc.dispatch(this, window, "window", "onpointerleave_get", arguments, null)}, set:function onpointerleave (){return bodavm.toolsFunc.dispatch(this, window, "window", "onpointerleave_set", arguments)}});
bodavm.toolsFunc.defineProperty(window, "onselectstart", {configurable:true, enumerable:true, get:function onselectstart (){return bodavm.toolsFunc.dispatch(this, window, "window", "onselectstart_get", arguments, null)}, set:function onselectstart (){return bodavm.toolsFunc.dispatch(this, window, "window", "onselectstart_set", arguments)}});
bodavm.toolsFunc.defineProperty(window, "onselectionchange", {configurable:true, enumerable:true, get:function onselectionchange (){return bodavm.toolsFunc.dispatch(this, window, "window", "onselectionchange_get", arguments, null)}, set:function onselectionchange (){return bodavm.toolsFunc.dispatch(this, window, "window", "onselectionchange_set", arguments)}});
bodavm.toolsFunc.defineProperty(window, "onanimationend", {configurable:true, enumerable:true, get:function onanimationend (){return bodavm.toolsFunc.dispatch(this, window, "window", "onanimationend_get", arguments, null)}, set:function onanimationend (){return bodavm.toolsFunc.dispatch(this, window, "window", "onanimationend_set", arguments)}});
bodavm.toolsFunc.defineProperty(window, "onanimationiteration", {configurable:true, enumerable:true, get:function onanimationiteration (){return bodavm.toolsFunc.dispatch(this, window, "window", "onanimationiteration_get", arguments, null)}, set:function onanimationiteration (){return bodavm.toolsFunc.dispatch(this, window, "window", "onanimationiteration_set", arguments)}});
bodavm.toolsFunc.defineProperty(window, "onanimationstart", {configurable:true, enumerable:true, get:function onanimationstart (){return bodavm.toolsFunc.dispatch(this, window, "window", "onanimationstart_get", arguments, null)}, set:function onanimationstart (){return bodavm.toolsFunc.dispatch(this, window, "window", "onanimationstart_set", arguments)}});
bodavm.toolsFunc.defineProperty(window, "ontransitionrun", {configurable:true, enumerable:true, get:function ontransitionrun (){return bodavm.toolsFunc.dispatch(this, window, "window", "ontransitionrun_get", arguments, null)}, set:function ontransitionrun (){return bodavm.toolsFunc.dispatch(this, window, "window", "ontransitionrun_set", arguments)}});
bodavm.toolsFunc.defineProperty(window, "ontransitionstart", {configurable:true, enumerable:true, get:function ontransitionstart (){return bodavm.toolsFunc.dispatch(this, window, "window", "ontransitionstart_get", arguments, null)}, set:function ontransitionstart (){return bodavm.toolsFunc.dispatch(this, window, "window", "ontransitionstart_set", arguments)}});
bodavm.toolsFunc.defineProperty(window, "ontransitionend", {configurable:true, enumerable:true, get:function ontransitionend (){return bodavm.toolsFunc.dispatch(this, window, "window", "ontransitionend_get", arguments, null)}, set:function ontransitionend (){return bodavm.toolsFunc.dispatch(this, window, "window", "ontransitionend_set", arguments)}});
bodavm.toolsFunc.defineProperty(window, "ontransitioncancel", {configurable:true, enumerable:true, get:function ontransitioncancel (){return bodavm.toolsFunc.dispatch(this, window, "window", "ontransitioncancel_get", arguments, null)}, set:function ontransitioncancel (){return bodavm.toolsFunc.dispatch(this, window, "window", "ontransitioncancel_set", arguments)}});
bodavm.toolsFunc.defineProperty(window, "onafterprint", {configurable:true, enumerable:true, get:function onafterprint (){return bodavm.toolsFunc.dispatch(this, window, "window", "onafterprint_get", arguments, null)}, set:function onafterprint (){return bodavm.toolsFunc.dispatch(this, window, "window", "onafterprint_set", arguments)}});
bodavm.toolsFunc.defineProperty(window, "onbeforeprint", {configurable:true, enumerable:true, get:function onbeforeprint (){return bodavm.toolsFunc.dispatch(this, window, "window", "onbeforeprint_get", arguments, null)}, set:function onbeforeprint (){return bodavm.toolsFunc.dispatch(this, window, "window", "onbeforeprint_set", arguments)}});
bodavm.toolsFunc.defineProperty(window, "onbeforeunload", {configurable:true, enumerable:true, get:function onbeforeunload (){return bodavm.toolsFunc.dispatch(this, window, "window", "onbeforeunload_get", arguments, null)}, set:function onbeforeunload (){return bodavm.toolsFunc.dispatch(this, window, "window", "onbeforeunload_set", arguments)}});
bodavm.toolsFunc.defineProperty(window, "onhashchange", {configurable:true, enumerable:true, get:function onhashchange (){return bodavm.toolsFunc.dispatch(this, window, "window", "onhashchange_get", arguments, null)}, set:function onhashchange (){return bodavm.toolsFunc.dispatch(this, window, "window", "onhashchange_set", arguments)}});
bodavm.toolsFunc.defineProperty(window, "onlanguagechange", {configurable:true, enumerable:true, get:function onlanguagechange (){return bodavm.toolsFunc.dispatch(this, window, "window", "onlanguagechange_get", arguments, null)}, set:function onlanguagechange (){return bodavm.toolsFunc.dispatch(this, window, "window", "onlanguagechange_set", arguments)}});
bodavm.toolsFunc.defineProperty(window, "onmessage", {configurable:true, enumerable:true, get:function onmessage (){return bodavm.toolsFunc.dispatch(this, window, "window", "onmessage_get", arguments, null)}, set:function onmessage (){return bodavm.toolsFunc.dispatch(this, window, "window", "onmessage_set", arguments)}});
bodavm.toolsFunc.defineProperty(window, "onmessageerror", {configurable:true, enumerable:true, get:function onmessageerror (){return bodavm.toolsFunc.dispatch(this, window, "window", "onmessageerror_get", arguments, null)}, set:function onmessageerror (){return bodavm.toolsFunc.dispatch(this, window, "window", "onmessageerror_set", arguments)}});
bodavm.toolsFunc.defineProperty(window, "onoffline", {configurable:true, enumerable:true, get:function onoffline (){return bodavm.toolsFunc.dispatch(this, window, "window", "onoffline_get", arguments, null)}, set:function onoffline (){return bodavm.toolsFunc.dispatch(this, window, "window", "onoffline_set", arguments)}});
bodavm.toolsFunc.defineProperty(window, "ononline", {configurable:true, enumerable:true, get:function ononline (){return bodavm.toolsFunc.dispatch(this, window, "window", "ononline_get", arguments, null)}, set:function ononline (){return bodavm.toolsFunc.dispatch(this, window, "window", "ononline_set", arguments)}});
bodavm.toolsFunc.defineProperty(window, "onpagehide", {configurable:true, enumerable:true, get:function onpagehide (){return bodavm.toolsFunc.dispatch(this, window, "window", "onpagehide_get", arguments, null)}, set:function onpagehide (){return bodavm.toolsFunc.dispatch(this, window, "window", "onpagehide_set", arguments)}});
bodavm.toolsFunc.defineProperty(window, "onpageshow", {configurable:true, enumerable:true, get:function onpageshow (){return bodavm.toolsFunc.dispatch(this, window, "window", "onpageshow_get", arguments, null)}, set:function onpageshow (){return bodavm.toolsFunc.dispatch(this, window, "window", "onpageshow_set", arguments)}});
bodavm.toolsFunc.defineProperty(window, "onpopstate", {configurable:true, enumerable:true, get:function onpopstate (){return bodavm.toolsFunc.dispatch(this, window, "window", "onpopstate_get", arguments, null)}, set:function onpopstate (){return bodavm.toolsFunc.dispatch(this, window, "window", "onpopstate_set", arguments)}});
bodavm.toolsFunc.defineProperty(window, "onrejectionhandled", {configurable:true, enumerable:true, get:function onrejectionhandled (){return bodavm.toolsFunc.dispatch(this, window, "window", "onrejectionhandled_get", arguments, null)}, set:function onrejectionhandled (){return bodavm.toolsFunc.dispatch(this, window, "window", "onrejectionhandled_set", arguments)}});
bodavm.toolsFunc.defineProperty(window, "onstorage", {configurable:true, enumerable:true, get:function onstorage (){return bodavm.toolsFunc.dispatch(this, window, "window", "onstorage_get", arguments, null)}, set:function onstorage (){return bodavm.toolsFunc.dispatch(this, window, "window", "onstorage_set", arguments)}});
bodavm.toolsFunc.defineProperty(window, "onunhandledrejection", {configurable:true, enumerable:true, get:function onunhandledrejection (){return bodavm.toolsFunc.dispatch(this, window, "window", "onunhandledrejection_get", arguments, null)}, set:function onunhandledrejection (){return bodavm.toolsFunc.dispatch(this, window, "window", "onunhandledrejection_set", arguments)}});
bodavm.toolsFunc.defineProperty(window, "onunload", {configurable:true, enumerable:true, get:function onunload (){return bodavm.toolsFunc.dispatch(this, window, "window", "onunload_get", arguments, null)}, set:function onunload (){return bodavm.toolsFunc.dispatch(this, window, "window", "onunload_set", arguments)}});
bodavm.toolsFunc.defineProperty(window, "onbeforematch", {configurable:true, enumerable:true, get:function onbeforematch (){return bodavm.toolsFunc.dispatch(this, window, "window", "onbeforematch_get", arguments, null)}, set:function onbeforematch (){return bodavm.toolsFunc.dispatch(this, window, "window", "onbeforematch_set", arguments)}});
bodavm.toolsFunc.defineProperty(window, "onbeforetoggle", {configurable:true, enumerable:true, get:function onbeforetoggle (){return bodavm.toolsFunc.dispatch(this, window, "window", "onbeforetoggle_get", arguments, null)}, set:function onbeforetoggle (){return bodavm.toolsFunc.dispatch(this, window, "window", "onbeforetoggle_set", arguments)}});
bodavm.toolsFunc.defineProperty(window, "ondevicemotion", {configurable:true, enumerable:true, get:function ondevicemotion (){return bodavm.toolsFunc.dispatch(this, window, "window", "ondevicemotion_get", arguments, null)}, set:function ondevicemotion (){return bodavm.toolsFunc.dispatch(this, window, "window", "ondevicemotion_set", arguments)}});
bodavm.toolsFunc.defineProperty(window, "ondeviceorientation", {configurable:true, enumerable:true, get:function ondeviceorientation (){return bodavm.toolsFunc.dispatch(this, window, "window", "ondeviceorientation_get", arguments, null)}, set:function ondeviceorientation (){return bodavm.toolsFunc.dispatch(this, window, "window", "ondeviceorientation_set", arguments)}});
bodavm.toolsFunc.defineProperty(window, "ondeviceorientationabsolute", {configurable:true, enumerable:true, get:function ondeviceorientationabsolute (){return bodavm.toolsFunc.dispatch(this, window, "window", "ondeviceorientationabsolute_get", arguments, null)}, set:function ondeviceorientationabsolute (){return bodavm.toolsFunc.dispatch(this, window, "window", "ondeviceorientationabsolute_set", arguments)}});
bodavm.toolsFunc.defineProperty(window, "oncontentvisibilityautostatechange", {configurable:true, enumerable:true, get:function oncontentvisibilityautostatechange (){return bodavm.toolsFunc.dispatch(this, window, "window", "oncontentvisibilityautostatechange_get", arguments, null)}, set:function oncontentvisibilityautostatechange (){return bodavm.toolsFunc.dispatch(this, window, "window", "oncontentvisibilityautostatechange_set", arguments)}});
bodavm.toolsFunc.defineProperty(window, "onscrollend", {configurable:true, enumerable:true, get:function onscrollend (){return bodavm.toolsFunc.dispatch(this, window, "window", "onscrollend_get", arguments, null)}, set:function onscrollend (){return bodavm.toolsFunc.dispatch(this, window, "window", "onscrollend_set", arguments)}});



bodavm.toolsFunc.defineProperty(window, "launchQueue", {configurable:true, enumerable:true, get:function launchQueue (){return bodavm.toolsFunc.dispatch(this, window, "window", "launchQueue_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(window, "styleMedia", {configurable:true, enumerable:true, get:function styleMedia (){return bodavm.toolsFunc.dispatch(this, window, "window", "styleMedia_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(window, "speechSynthesis", {configurable:true, enumerable:true, get:function speechSynthesis (){return bodavm.toolsFunc.dispatch(this, window, "window", "speechSynthesis_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(window, "cookieStore", {configurable:true, enumerable:true, get:function cookieStore (){return bodavm.toolsFunc.dispatch(this, window, "window", "cookieStore_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(window, "navigator", {configurable:true, enumerable:true, get:function navigator (){return bodavm.toolsFunc.dispatch(this, window, "window", "navigator_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(window, "external", {configurable:true, enumerable:true, get:function external (){return bodavm.toolsFunc.dispatch(this, window, "window", "external_get", arguments)}, set:function external (){return bodavm.toolsFunc.dispatch(this, window, "window", "external_set", arguments)}});
bodavm.toolsFunc.defineProperty(window, "crypto", {configurable:true, enumerable:true, get:function crypto (){return bodavm.toolsFunc.dispatch(this, window, "window", "crypto_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(window, "visualViewport", {configurable:true, enumerable:true, get:function visualViewport (){return bodavm.toolsFunc.dispatch(this, window, "window", "visualViewport_get", arguments)}, set:function visualViewport (){return bodavm.toolsFunc.dispatch(this, window, "window", "visualViewport_set", arguments)}});
bodavm.toolsFunc.defineProperty(window, "navigation", {configurable:true, enumerable:true, get:function navigation (){return bodavm.toolsFunc.dispatch(this, window, "window", "navigation_get", arguments)}, set:function navigation (){return bodavm.toolsFunc.dispatch(this, window, "window", "navigation_set", arguments)}});
bodavm.toolsFunc.defineProperty(window, "history", {configurable:true, enumerable:true, get:function history (){return bodavm.toolsFunc.dispatch(this, window, "window", "history_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(window, "clientInformation", {configurable:true, enumerable:true, get:function clientInformation (){return bodavm.toolsFunc.dispatch(this, window, "window", "clientInformation_get", arguments)}, set:function clientInformation (){return bodavm.toolsFunc.dispatch(this, window, "window", "clientInformation_set", arguments)}});
bodavm.toolsFunc.defineProperty(window, "scheduler", {configurable:true, enumerable:true, get:function scheduler (){return bodavm.toolsFunc.dispatch(this, window, "window", "scheduler_get", arguments)}, set:function scheduler (){return bodavm.toolsFunc.dispatch(this, window, "window", "scheduler_set", arguments)}});
bodavm.toolsFunc.defineProperty(window, "screen", {configurable:true, enumerable:true, get:function screen (){return bodavm.toolsFunc.dispatch(this, window, "window", "screen_get", arguments)}, set:function screen (){return bodavm.toolsFunc.dispatch(this, window, "window", "screen_set", arguments)}});
bodavm.toolsFunc.defineProperty(window, "performance", {configurable:true, enumerable:true, get:function performance (){return bodavm.toolsFunc.dispatch(this, window, "window", "performance_get", arguments)}, set:function performance (){return bodavm.toolsFunc.dispatch(this, window, "window", "performance_set", arguments)}});
bodavm.toolsFunc.defineProperty(window, "document", {configurable:false, enumerable:true, get:function document (){return bodavm.toolsFunc.dispatch(this, window, "window", "document_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(window, "localStorage", {configurable:true, enumerable:true, get:function localStorage (){return bodavm.toolsFunc.dispatch(this, window, "window", "localStorage_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(window, "sessionStorage", {configurable:true, enumerable:true, get:function sessionStorage (){return bodavm.toolsFunc.dispatch(this, window, "window", "sessionStorage_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(window, "customElements", {configurable:true, enumerable:true, get:function customElements (){return bodavm.toolsFunc.dispatch(this, window, "window", "customElements_get", arguments, null)}, set:undefined});
bodavm.toolsFunc.defineProperty(window, "menubar", {configurable:true, enumerable:true, get:function menubar (){return bodavm.toolsFunc.dispatch(this, window, "window", "menubar_get", arguments)}, set:function menubar (){return bodavm.toolsFunc.dispatch(this, window, "window", "menubar_set", arguments)}});
bodavm.toolsFunc.defineProperty(window, "toolbar", {configurable:true, enumerable:true, get:function toolbar (){return bodavm.toolsFunc.dispatch(this, window, "window", "toolbar_get", arguments)}, set:function toolbar (){return bodavm.toolsFunc.dispatch(this, window, "window", "toolbar_set", arguments)}});
bodavm.toolsFunc.defineProperty(window, "locationbar", {configurable:true, enumerable:true, get:function locationbar (){return bodavm.toolsFunc.dispatch(this, window, "window", "locationbar_get", arguments)}, set:function locationbar (){return bodavm.toolsFunc.dispatch(this, window, "window", "locationbar_set", arguments)}});
bodavm.toolsFunc.defineProperty(window, "indexedDB", {configurable:true, enumerable:true, get:function indexedDB (){return bodavm.toolsFunc.dispatch(this, window, "window", "indexedDB_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(window, "trustedTypes", {configurable:true, enumerable:true, get:function trustedTypes (){return bodavm.toolsFunc.dispatch(this, window, "window", "trustedTypes_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(window, "caches", {configurable:true, enumerable:true, get:function caches (){return bodavm.toolsFunc.dispatch(this, window, "window", "caches_get", arguments)}, set:undefined});
// bodavm.toolsFunc.defineProperty(window, "alert", {configurable:true, enumerable:true, writable:true, value:function alert (){return bodavm.toolsFunc.dispatch(this, window, "window", "alert", arguments)}});

alert=(a) => {
    console.log_copy(`使用 alert arg->`, a);
  };

bodavm.toolsFunc.safefunction(alert,'alert')
Object.defineProperty(alert,'length',{
    value: 0, writable: false, enumerable: false, configurable: true
})
// debugger

Element.prototype[Symbol.unscopables] = {
    after: true,
    append: true,
    before: true,
    prepend: true,
    remove: true,
    replaceChildren: true,
    replaceWith: true,
    slot: true
  };
Element.prototype[Symbol.unscopables].__proto__ = null;

bodavm.toolsFunc.safefunction(String.prototype.toString,'toString')
bodavm.toolsFunc.safefunction(Array.prototype.toString,'toString')

Object.defineProperty(window,'require',{
    value:undefined
  })

Object.defineProperty(console,Symbol.toStringTag,{
  value: 'console',
  configurable: true,
  writable: false,
  enumerable: false
})
// console[]

// let bodaError=bodavm.toolsFunc.proxy2(bodavm.toolsFunc.proxy2(Error,'Error'),'Error')
// debugger
// let ErrorFlag=0
// delete Error
// Error.prepareStackTrace =function(error, stack,boflag) {
//     // 在这里修改调用堆栈
//     console.log_copy(` 调用堆栈检测 error ->`,error)
//     console.log_copy(` 调用堆栈检测 stack ->`,stack)
//     console.log_copy(` 调用堆栈检测 stack默认返回空 ->`,[])
//     // debugger
//     // Object.defineProperty_bo(Error,'prepareStackTrace',{
//     //     value:function (){
//     //         if (ErrorFlag==1){
//     //             return undefined
//     //         }
//     //     }
        
//     // })
//     // window.Error.prepareStackTrace=undefined
//     return [];
// };
// Error=function (){}
// Error.prototype.stack=[]
Error.prepareStackTrace=undefined
// Object.defineProperty(Error,'prepareStackTrace',{
//     value:function (){
//         return undefined
//     },
//     configurable:true
    
// })

// let plugins=bodavm.memory.globalInit.pluginArray
// debugger
bodavm.memory.globalInit.pluginArrayCopy=bodavm.toolsFunc.proxyPlugin(bodavm.memory.globalInit.pluginArray,'plugin')

// debugger
// var boeval = eval
// eval = function (x) {
//     debugger
//     console.log(`执行eval,参数为${x}`)
//     return boeval.call(this, x)
// }
// bodavm.toolsFunc.safefunction(eval,'eval')

eval=new Proxy(eval,{
    apply(target, thisArg, argumentsList) {
        // debuggerde
        // debugger
        if(argumentsList[0]=='!new function(){eval("this.a=1")}().a'){
            console.log('eval执行  参数  -->',argumentsList[0],` 结果为 -->`,false);
            return false
        }
        if (argumentsList[0]=='__g'){debugger}
        let arg=argumentsList[0]
        if (arg && arg.length>100){
            arg=arg.substr(0,100)+'...太长只显示前100位'
        }
        // debugger

        console.log('eval执行  参数  -->',arg,` 结果为 -->`);
        // debugger
        // argumentsList[0]=argumentsList[0].replace('try{','try{debugger;')
        let res=Reflect.apply(target, thisArg, argumentsList);
        
        console.log('eval执行 完毕  -->',` 结果为 -->`,res);

        return res
    },
  })  
  //eval 可能被检测

bodavm.toolsFunc.safefunction(eval,'eval')
// window=bodavm.toolsFunc.proxy(window,"window")
if (!bodavm.config.proxy){
Object.defineProperty(this, 'window', {
        get: function () {
            // if (bodavm.config.proxy ){
            //     window=bodavm.toolsFunc.proxy(window,'window')
            //     return window
            // }else{
                return this
            // }
        },
        // writable: false,
        configurable: false,
        enumerable:true
    },);
    bodavm.toolsFunc.safeFunc(Object.getOwnPropertyDescriptor(this,'window').get,'get window')

}

// document对象;
// document = new HTMLDocument('bobo');
// document.location=window.location
bodavm.toolsFunc.defineProperty(document, "location", {configurable:false, enumerable:true, get:function location (){return bodavm.toolsFunc.dispatch(this, document, "document", "location_get", arguments)}, set:function location (){return bodavm.toolsFunc.dispatch(this, document, "document", "location_set", arguments)}});

Object.defineProperty(Function.prototype.toString,'prototype',{
    value:undefined
})

Object.defineProperty(Function.prototype.toString,'name',{
    value:'toString'
})

window.addEventListener.prototype=undefined
Object.defineProperty(addEventListener,'length',{
    value:2,
    writable: false, 
    enumerable: false,
    configurable: true
})
// delete window.addEventListener.
// debugger

// debugger;


