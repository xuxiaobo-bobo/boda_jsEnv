

// 删除浏览器中不存在的对象
delete global;
delete GLOBAL;
delete VMError;
delete Buffer;
delete process;
delete root;
delete WindowProperties;
delete globalThis[Symbol.toStringTag];
window = globalThis;
globalThis.__proto__=Window.prototype




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
bodavm.toolsFunc.defineProperty(window, "location", { configurable: false })
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
bodavm.toolsFunc.defineProperty(window, "defaultStatus", { configurable: true, enumerable: true, get: function defaultStatus() { return bodavm.toolsFunc.dispatch(this, window, "window", "defaultStatus_get", arguments, '') }, set: function defaultStatus() { return bodavm.toolsFunc.dispatch(this, window, "window", "defaultStatus_set", arguments) } });
bodavm.toolsFunc.defineProperty(window, "defaultstatus", { configurable: true, enumerable: true, get: function defaultstatus() { return bodavm.toolsFunc.dispatch(this, window, "window", "defaultstatus_get", arguments, '') }, set: function defaultstatus() { return bodavm.toolsFunc.dispatch(this, window, "window", "defaultstatus_set", arguments) } });
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
bodavm.toolsFunc.defineProperty(window, "webkitRequestFileSystem", { writable: true, enumerable: true, configurable: true, value: function webkitRequestFileSystem() { return bodavm.toolsFunc.dispatch(this, window, "window", "webkitRequestFileSystem", arguments) } });
bodavm.toolsFunc.defineProperty(window, "fetch", { writable: true, enumerable: true, configurable: true, value: function fetch() { return bodavm.toolsFunc.dispatch(this, window, "window", "fetch", arguments) } });
bodavm.toolsFunc.defineProperty(window, "devicePixelRatio", { configurable: true, enumerable: true, get: function devicePixelRatio() { return bodavm.toolsFunc.dispatch(this, window, "window", "devicePixelRatio_get", arguments) }, set: function devicePixelRatio() { return bodavm.toolsFunc.dispatch(this, window, "window", "devicePixelRatio_set", arguments) } });
bodavm.toolsFunc.defineProperty(window, "getComputedStyle", { configurable: true, enumerable: true, writable: true, value: function getComputedStyle() { return bodavm.toolsFunc.dispatch(this, window, "window", "getComputedStyle", arguments) } });
bodavm.toolsFunc.defineProperty(window, "length", {configurable:true, enumerable:true, get:function length (){return bodavm.toolsFunc.dispatch(this, window, "window", "length_get", arguments)}, set:function length (){return bodavm.toolsFunc.dispatch(this, window, "window", "length_set", arguments)}});
bodavm.toolsFunc.defineProperty(window, "openDatabase", {configurable:true, enumerable:true, writable:true, value:function openDatabase (){return bodavm.toolsFunc.dispatch(this, window, "window", "openDatabase", arguments)}});

bodavm.toolsFunc.defineProperty(window, "onmessage", {configurable:true, enumerable:true, get:function onmessage (){return bodavm.toolsFunc.dispatch(this, window, "window", "onmessage_get", arguments)}, set:function onmessage (){return bodavm.toolsFunc.dispatch(this, window, "window", "onmessage_set", arguments)}});
bodavm.toolsFunc.defineProperty(window, "onbeforeunload", {configurable:true, enumerable:true, get:function onbeforeunload (){return bodavm.toolsFunc.dispatch(this, window, "window", "onbeforeunload_get", arguments, null)}, set:function onbeforeunload (){return bodavm.toolsFunc.dispatch(this, window, "window", "onbeforeunload_set", arguments)}});
// bodavm.toolsFunc.defineProperty(window, "clientInformation", {configurable:true, enumerable:true, get:function clientInformation (){return bodavm.toolsFunc.dispatch(this, window, "window", "clientInformation_get", arguments)}, set:function clientInformation (){return bodavm.toolsFunc.dispatch(this, window, "window", "clientInformation_set", arguments)}});

bodavm.toolsFunc.defineProperty(window, "$_", {configurable:true, enumerable:false, writable:true, value:undefined});
bodavm.toolsFunc.defineProperty(window, "$0", {configurable:true, enumerable:false, writable:true, value:{}});
bodavm.toolsFunc.defineProperty(window, "$1", {configurable:true, enumerable:false, writable:true, value:undefined});
bodavm.toolsFunc.defineProperty(window, "$2", {configurable:true, enumerable:false, writable:true, value:undefined});
bodavm.toolsFunc.defineProperty(window, "$3", {configurable:true, enumerable:false, writable:true, value:undefined});
bodavm.toolsFunc.defineProperty(window, "$4", {configurable:true, enumerable:false, writable:true, value:undefined});















var boeval = eval
eval = function (x) {
    console.log(`执行eval,参数为${x}`)
    return boeval.call(this, x)
}
eval.toString = function () { return 'function eval() { [native code] }' }


window.Element.prototype[Symbol.unscopables] = {
    after: true,
    append: true,
    before: true,
    prepend: true,
    remove: true,
    replaceChildren: true,
    replaceWith: true,
    slot: true,
};
window.Element.prototype[Symbol.unscopables].__proto__ = null;


// Object.defineProperty(this, 'window', {
//     get: function window() {
//         // if (bodavm.config.proxy ){
//             // window=bodavm.toolsFunc.proxy(window,'window')
//             // return window
//         // }else{
//             return this
//         // }
//     },
//     // writable: false,
//     configurable: false,
//     enumerable:true
// });
// debugger