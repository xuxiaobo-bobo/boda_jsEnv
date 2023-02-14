const fs = require("fs");
const path = require("path");
let env_path = path.resolve(__dirname, '../env/');
let mylist = ''
let mylist2 = ''
let name_ = []
function getFile(name) {
    try {
        return fs.readFileSync(`${env_path}/${name}.js`) + "\r\n";

    } catch (e) {
        console.log(`${env_path}/${name}.js不存在`)
        return "";
    }
}

function getHtmlElement() {
    try {
        let code = "";
        let filelist = fs.readdirSync(`${env_path}/htmlElements`)
        for (let i = 0; i < filelist.length; i++) {
            code += fs.readFileSync(`${env_path}/htmlElements/${filelist[i]}`) + "\r\n"

        }
        return code
    } catch (e) {
        console.log(`${env_path}/${name}.js不存在`)
        return "";
    }
}

function getCode() {

    let code = "//env相关代码" + "\r\n"
    code += getFile("EventTarget")
    code += getFile("WindowProperties")
    code += getFile("Window")
    code += getFile("Node")
    code += getFile("Element")
    code += getFile("HTMLElement")
    code += getFile("HTMLCollection")
    code += getHtmlElement()
    code += getFile("NetworkInformation")
    code += getFile("CustomElementRegistry")
    code += getFile("Event");
    code += getFile("UIEvent");
    code += getFile("MouseEvent");
    code += getFile("Document")
    code += getFile("HTMLDocument")
    code += getFile("Location")
    code += getFile("Storage")
    code += getFile("CharacterData")
    code += getFile("Text")
    code += getFile('Database')
    code += getFile('CloseEvent')
    code += getFile('Notification')
    code += getFile("IDBDatabase")
    code += getFile("IDBRequest")
    code += getFile("IDBOpenDBRequest")
    code += getFile("IDBFactory")
    code += getFile("History")
    code += getFile("Screen")
    code += getFile("CSSStyleDeclaration")
    code += getFile("CanvasRenderingContext2D")
    code += getFile("WebGLRenderingContext")
    code += getFile("MediaQueryList")
    code += getFile("CSSRuleList")
    code += getFile('Attr')
    code += getFile('Navigation')
    code += getFile("MediaStream")
    code += getFile("TrustedTypePolicyFactory")
    code += getFile('Scheduler')
    code += getFile("CookieStore")

    code += getFile("CacheStorage")
    code +=getFile('Promise')
    code += getFile('OffscreenCanvasRenderingContext2D')
    code += getFile('DeprecatedStorageInfo')
    code += getFile('SpeechSynthesis')
    code += getFile("VisualViewport")
    code += getFile('BeforeInstallPromptEvent')
    code += getFile("BarProp")
    code += getFile("BaseAudioContext")
    code += getFile("BluetoothUUID")
    code += getFile('StyleMedia')
    code += getFile('Audio')
    code += getFile("Crypto")

    code += getFile("CDATASection")

    code += getFile("Comment")
    code += getFile("DocumentFragment")
    code += getFile("DocumentType")
    code += getFile("DOMParser")

    code += getFile("External")
    code+=getFile('PointerEvent')
    code += getFile('WebSocket')
    code += getFile('SourceBuffer')
    code += getFile("DOMStringList")
    code += getFile("Headers")
    code += getFile("IDBObjectStore")
    code += getFile("IDBTransaction")
    code += getFile("IDBVersionChangeEvent")
    code += getFile('TextTrackList')
    code += getFile('SpeechSynthesisUtterance')
    code += getFile("MediaEncryptedEvent")
    code += getFile("MutationObserver")
    code += getFile("NamedNodeMap")
    code += getFile("NodeList")
    code += getFile("OfflineAudioContext")
    code += getFile("Path2D")
    code += getFile("Performance")
    code += getFile('ScreenOrientation')
    code += getFile("PerformanceEntry")
    code += getFile("PerformancePaintTiming")
    code += getFile("Permissions")
    code += getFile("PermissionStatus")
    code += getFile("Request")
    code += getFile("SVGElement")
    code+=getFile('DeviceOrientationEvent')
    code +=getFile('PresentationConnectionCloseEvent')
    code += getFile("SVGGraphicsElement")
    code += getFile('SVGGElement')
    code += getFile('SVGPatternElement')
    code += getFile("SVGGeometryElement")
    code += getFile("SVGPathElement")
    code += getFile("SVGSVGElement")
    code += getFile("SVGSymbolElement")
    code += getFile("SVGUseElement")

    code += getFile('WebGLShader')
    code += getFile("WebGLShaderPrecisionFormat")

    code += getFile("RTCPeerConnection")

    code += getFile("WebGLBuffer")

    code += getFile("WebGLProgram")
    code += getFile("CSS")
    code += getFile("Navigator")
    code += getFile("BatteryManager")
    code += getFile("Plugin")
    code += getFile("PluginArray")
    code += getFile("MimeType")
    code += getFile("MimeTypeArray")
    code += getFile("XMLHttpRequestEventTarget")
    code += getFile("XMLHttpRequest")

    // code += getFile("globalThis") //全局环境放在最后

    return code
}
module.exports = {
    getCode, getFile
}