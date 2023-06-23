var v_saf;!function(){var n=Function.toString,t=[],i=[],o=[].indexOf.bind(t),e=[].push.bind(t),r=[].push.bind(i);function u(n,t){return-1==o(n)&&(e(n),r(`function ${t||n.name||""}() { [native code] }`)),n}Object.defineProperty(Function.prototype,"toString",{enumerable:!1,configurable:!0,writable:!0,value:function(){return"function"==typeof this&&i[o(this)]||n.call(this)}}),u(Function.prototype.toString,"toString"),v_saf=u}();


function _inherits(t, e) {
  t.prototype = Object.create(e.prototype, {
    constructor: { value: t, writable: !0, configurable: !0 }
  }), e && Object.setPrototypeOf(t, e) }
Object.defineProperty(Object.prototype, Symbol.toStringTag, {
  get() { return Object.getPrototypeOf(this).constructor.name }
});
var v_new_toggle = true
Object.freeze(console)//only for javascript-obfuscator anti console debug.
var v_console_logger = console.log
var v_console_log = function(){if (!v_new_toggle){ v_console_logger.apply(this, arguments) }}
var v_random = (function() { var seed = 276951438; return function random() { return seed = (seed * 9301 + 49297) % 233280, (seed / 233280)} })()
var v_new = function(v){var temp=v_new_toggle; v_new_toggle = true; var r = new v; v_new_toggle = temp; return r}


Storage = v_saf(function Storage(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };})
EventTarget = v_saf(function EventTarget(){;})
Event = v_saf(function Event(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };})
Navigator = v_saf(function Navigator(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };this._plugins = typeof PluginArray=='undefined'?[]:v_new(PluginArray); this._mimeTypes = typeof MimeTypeArray=='undefined'?[]:v_new(MimeTypeArray)})
Plugin = v_saf(function Plugin(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };})
MimeType = v_saf(function MimeType(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };})
WebGLRenderingContext = v_saf(function WebGLRenderingContext(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };
  function WebGLBuffer(){}
  function WebGLProgram(){}
  function WebGLShader(){}
  this._toggle = {}
  this.createBuffer = function(){ v_console_log('  [*] WebGLRenderingContext -> createBuffer[func]'); return v_new(WebGLBuffer) }
  this.createProgram = function(){ v_console_log('  [*] WebGLRenderingContext -> createProgram[func]'); return v_new(WebGLProgram) }
  this.createShader = function(){ v_console_log('  [*] WebGLRenderingContext -> createShader[func]'); return v_new(WebGLShader) }
  this.getSupportedExtensions = function(){
    v_console_log('  [*] WebGLRenderingContext -> getSupportedExtensions[func]')
    return [
      "ANGLE_instanced_arrays", "EXT_blend_minmax", "EXT_color_buffer_half_float", "EXT_disjoint_timer_query", "EXT_float_blend", "EXT_frag_depth",
      "EXT_shader_texture_lod", "EXT_texture_compression_bptc", "EXT_texture_compression_rgtc", "EXT_texture_filter_anisotropic", "WEBKIT_EXT_texture_filter_anisotropic", "EXT_sRGB",
      "KHR_parallel_shader_compile", "OES_element_index_uint", "OES_fbo_render_mipmap", "OES_standard_derivatives", "OES_texture_float", "OES_texture_float_linear",
      "OES_texture_half_float", "OES_texture_half_float_linear", "OES_vertex_array_object", "WEBGL_color_buffer_float", "WEBGL_compressed_texture_s3tc",
      "WEBKIT_WEBGL_compressed_texture_s3tc", "WEBGL_compressed_texture_s3tc_srgb", "WEBGL_debug_renderer_info", "WEBGL_debug_shaders",
      "WEBGL_depth_texture","WEBKIT_WEBGL_depth_texture","WEBGL_draw_buffers","WEBGL_lose_context","WEBKIT_WEBGL_lose_context","WEBGL_multi_draw",
    ]
  }
  var self = this
  this.getExtension = function(key){
    v_console_log('  [*] WebGLRenderingContext -> getExtension[func]:', key)
    class WebGLDebugRendererInfo{
      get UNMASKED_VENDOR_WEBGL(){self._toggle[37445]=1;return 37445}
      get UNMASKED_RENDERER_WEBGL(){self._toggle[37446]=1;return 37446}
    }
    class EXTTextureFilterAnisotropic{}
    class WebGLLoseContext{
      loseContext(){}
      restoreContext(){}
    }
    if (key == 'WEBGL_debug_renderer_info'){ var r = new WebGLDebugRendererInfo }
    if (key == 'EXT_texture_filter_anisotropic'){ var r = new EXTTextureFilterAnisotropic }
    if (key == 'WEBGL_lose_context'){ var r = new WebGLLoseContext }
    else{ var r = new WebGLDebugRendererInfo }
    return r
  }
  this.getParameter = function(key){
    v_console_log('  [*] WebGLRenderingContext -> getParameter[func]:', key)
    if (this._toggle[key]){
      if (key == 37445){ return "Google Inc. (NVIDIA)" }
      if (key == 37446){ return "ANGLE (NVIDIA, NVIDIA GeForce GTX 1050 Ti Direct3D11 vs_5_0 ps_5_0, D3D11-27.21.14.5671)" }
    }else{
      if (key == 33902){ return new Float32Array([1,1]) }
      if (key == 33901){ return new Float32Array([1,1024]) }
      if (key == 35661){ return 32 }
      if (key == 34047){ return 16 }
      if (key == 34076){ return 16384 }
      if (key == 36349){ return 1024 }
      if (key == 34024){ return 16384 }
      if (key == 34930){ return 16 }
      if (key == 3379){ return 16384 }
      if (key == 36348){ return 30 }
      if (key == 34921){ return 16 }
      if (key == 35660){ return 16 }
      if (key == 36347){ return 4095 }
      if (key == 3386){ return new Int32Array([32767, 32767]) }
      if (key == 3410){ return 8 }
      if (key == 7937){ return "WebKit WebGL" }
      if (key == 35724){ return "WebGL GLSL ES 1.0 (OpenGL ES GLSL ES 1.0 Chromium)" }
      if (key == 3415){ return 0 }
      if (key == 7936){ return "WebKit" }
      if (key == 7938){ return "WebGL 1.0 (OpenGL ES 2.0 Chromium)" }
      if (key == 3411){ return 8 }
      if (key == 3412){ return 8 }
      if (key == 3413){ return 8 }
      if (key == 3414){ return 24 }
      return null
    }
  }
  this.getContextAttributes = function(){
    v_console_log('  [*] WebGLRenderingContext -> getContextAttributes[func]')
    return {
      alpha: true,
      antialias: true,
      depth: true,
      desynchronized: false,
      failIfMajorPerformanceCaveat: false,
      powerPreference: "default",
      premultipliedAlpha: true,
      preserveDrawingBuffer: false,
      stencil: false,
      xrCompatible: false,
    }
  }
  this.getShaderPrecisionFormat = function(a,b){
    v_console_log('  [*] WebGLRenderingContext -> getShaderPrecisionFormat[func]')
    function WebGLShaderPrecisionFormat(){}
    var r1 = v_new(WebGLShaderPrecisionFormat)
    r1.rangeMin = 127
    r1.rangeMax = 127
    r1.precision = 23
    var r2 = v_new(WebGLShaderPrecisionFormat)
    r2.rangeMin = 31
    r2.rangeMax = 30
    r2.precision = 0
    if (a == 35633 && b == 36338){ return r1 } if (a == 35633 && b == 36337){ return r1 } if (a == 35633 && b == 36336){ return r1 }
    if (a == 35633 && b == 36341){ return r2 } if (a == 35633 && b == 36340){ return r2 } if (a == 35633 && b == 36339){ return r2 }
    if (a == 35632 && b == 36338){ return r1 } if (a == 35632 && b == 36337){ return r1 } if (a == 35632 && b == 36336){ return r1 }
    if (a == 35632 && b == 36341){ return r2 } if (a == 35632 && b == 36340){ return r2 } if (a == 35632 && b == 36339){ return r2 }
    throw Error('getShaderPrecisionFormat')
  }
  v_saf(this.createBuffer, 'createBuffer')
  v_saf(this.createProgram, 'createProgram')
  v_saf(this.createShader, 'createShader')
  v_saf(this.getSupportedExtensions, 'getSupportedExtensions')
  v_saf(this.getExtension, 'getExtension')
  v_saf(this.getParameter, 'getParameter')
  v_saf(this.getContextAttributes, 'getContextAttributes')
  v_saf(this.getShaderPrecisionFormat, 'getShaderPrecisionFormat')})
CanvasRenderingContext2D = v_saf(function CanvasRenderingContext2D(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };})
Permissions = v_saf(function Permissions(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };})
DOMException = v_saf(function DOMException(){;})
PluginArray = v_saf(function PluginArray(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };
  this[0]=v_new(Plugin);this[0].description="Creative Cloud Desktop Plugin.v_3_0_0_0";this[0].filename="npAdobeAAMDetect32.dll";this[0].length=1;this[0].name="AdobeAAMDetect";
  this[1]=v_new(Plugin);this[1].description="npAliSSOLogin Plugin";this[1].filename="npalissologin.dll";this[1].length=1;this[1].name="AliSSOLogin plugin";
  this[2]=v_new(Plugin);this[2].description="Alipay Security Control";this[2].filename="npAliSecCtrl.dll";this[2].length=1;this[2].name="Alipay Security Control 3";
  this[3]=v_new(Plugin);this[3].description="npaliedit";this[3].filename="npaliedit.dll";this[3].length=1;this[3].name="Alipay security control";
  this[4]=v_new(Plugin);this[4].description="YunWebDetect";this[4].filename="npYunWebDetect.dll";this[4].length=1;this[4].name="BaiduYunGuanjia Application";
  this[5]=v_new(Plugin);this[5].description="Portable Document Format";this[5].filename="internal-pdf-viewer";this[5].length=1;this[5].name="Chromium PDF Plugin";
  this[6]=v_new(Plugin);this[6].description="";this[6].filename="mhjfbmdgcfjbbpaeojofohoefgiehjai";this[6].length=1;this[6].name="Chromium PDF Viewer";
  this[7]=v_new(Plugin);this[7].description="The plugin allows you to have a better experience with Microsoft SharePoint";this[7].filename="NPSPWRAP.DLL";this[7].length=2;this[7].name="Microsoft Office";
  this[8]=v_new(Plugin);this[8].description="np-mswmp";this[8].filename="np-mswmp.dll";this[8].length=10;this[8].name="Microsoft® Windows Media Player Firefox Plugin";
  this[9]=v_new(Plugin);this[9].description="";this[9].filename="internal-nacl-plugin";this[9].length=2;this[9].name="Native Client";
  this[10]=v_new(Plugin);this[10].description="QQMail plugin for WebKit #1.0.0.22";this[10].filename="npQQMailWebKit.dll";this[10].length=2;this[10].name="QQMail Plugin";
  this[11]=v_new(Plugin);this[11].description="QQÒôÀÖ²¥·Å¿Ø¼þ";this[11].filename="npQzoneMusic.dll";this[11].length=1;this[11].name="QQÒôÀÖ²¥·Å¿Ø¼þ";
  this[12]=v_new(Plugin);this[12].description="Tencent QQ CPHelper plugin for Chrome";this[12].filename="npactivex.dll";this[12].length=1;this[12].name="Tencent QQ";
  this[13]=v_new(Plugin);this[13].description="iTrusPTA&XEnroll hwPTA,IEnroll,UKeyInstalls for FireFox,version=1.0.0.2";this[13].filename="npcombrg.dll";this[13].length=6;this[13].name="iTrusChina iTrusPTA,XEnroll,iEnroll,hwPTA,UKeyInstalls Firefox Plugin";
  this[14]=v_new(Plugin);this[14].description="npQQPhotoDrawEx Module";this[14].filename="npQQPhotoDrawEx.dll";this[14].length=1;this[14].name="npQQPhotoDrawEx";})
Screen = v_saf(function Screen(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };})
RTCIceCandidate = v_saf(function RTCIceCandidate(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };})
Image = v_saf(function Image(){;return v_new(HTMLImageElement)})
CSSStyleDeclaration = v_saf(function CSSStyleDeclaration(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };})
HTMLCollection = v_saf(function HTMLCollection(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };})
MessageChannel = v_saf(function MessageChannel(){;})
PerformanceEntry = v_saf(function PerformanceEntry(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };})
URL = v_saf(function URL(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };})
URLSearchParams = v_saf(function URLSearchParams(){;})
PerformanceObserver = v_saf(function PerformanceObserver(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };})
MutationObserver = v_saf(function MutationObserver(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };})
PerformanceTiming = v_saf(function PerformanceTiming(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };})
NodeList = v_saf(function NodeList(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };})
StyleSheet = v_saf(function StyleSheet(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };})
DOMImplementation = v_saf(function DOMImplementation(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };})
History = v_saf(function History(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };})
MutationRecord = v_saf(function MutationRecord(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };})
DOMRectReadOnly = v_saf(function DOMRectReadOnly(){;})
ResizeObserver = v_saf(function ResizeObserver(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };})
MimeTypeArray = v_saf(function MimeTypeArray(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };
  this[0]=v_new(Plugin);this[0].description="npaliedit";this[0].enabledPlugin={"0":{}};this[0].suffixes="";this[0].type="application/aliedit";
  this[1]=v_new(Plugin);this[1].description="";this[1].enabledPlugin={"0":{},"1":{},"2":{},"3":{},"4":{},"5":{},"6":{},"7":{},"8":{},"9":{}};this[1].suffixes="*";this[1].type="application/asx";
  this[2]=v_new(Plugin);this[2].description="";this[2].enabledPlugin={"0":{}};this[2].suffixes="";this[2].type="application/bd-npyunwebdetect-plugin";
  this[3]=v_new(Plugin);this[3].description="CEnroll";this[3].enabledPlugin={"0":{},"1":{},"2":{},"3":{},"4":{},"5":{}};this[3].suffixes="";this[3].type="application/cenroll.cenroll.version.1";
  this[4]=v_new(Plugin);this[4].description="HwEpass2001";this[4].enabledPlugin={"0":{},"1":{},"2":{},"3":{},"4":{},"5":{}};this[4].suffixes="";this[4].type="application/hwepass2001.installepass2001";
  this[5]=v_new(Plugin);this[5].description="hwPTA";this[5].enabledPlugin={"0":{},"1":{},"2":{},"3":{},"4":{},"5":{}};this[5].suffixes="";this[5].type="application/hwpta.itrushwpta";
  this[6]=v_new(Plugin);this[6].description="hwWDkey";this[6].enabledPlugin={"0":{},"1":{},"2":{},"3":{},"4":{},"5":{}};this[6].suffixes="";this[6].type="application/hwwdkey.installwdkey";
  this[7]=v_new(Plugin);this[7].description="IEnroll";this[7].enabledPlugin={"0":{},"1":{},"2":{},"3":{},"4":{},"5":{}};this[7].suffixes="";this[7].type="application/itrusenroll.certenroll.version.1";
  this[8]=v_new(Plugin);this[8].description="AliSSOLogin";this[8].enabledPlugin={"0":{}};this[8].suffixes="AliSSOLogin";this[8].type="application/npalissologin";
  this[9]=v_new(Plugin);this[9].description="";this[9].enabledPlugin={"0":{}};this[9].suffixes="pdf";this[9].type="application/pdf";
  this[10]=v_new(Plugin);this[10].description="PTA";this[10].enabledPlugin={"0":{},"1":{},"2":{},"3":{},"4":{},"5":{}};this[10].suffixes="*";this[10].type="application/pta.itruspta.version.1";
  this[11]=v_new(Plugin);this[11].description="DLL";this[11].enabledPlugin={"0":{}};this[11].suffixes="dll";this[11].type="application/qscall-plugin";
  this[12]=v_new(Plugin);this[12].description="This plug-in is transfers of QzoneMusic when opening Qzone in a web page with Firefox.";this[12].enabledPlugin={"0":{}};this[12].suffixes="rts";this[12].type="application/tecent-qzonemusic-plugin";
  this[13]=v_new(Plugin);this[13].description="";this[13].enabledPlugin={"0":{}};this[13].suffixes="rts";this[13].type="application/tencent-qqphotodrawex2-plugin";
  this[14]=v_new(Plugin);this[14].description="AdobeAAMDetect";this[14].enabledPlugin={"0":{}};this[14].suffixes="";this[14].type="application/x-adobeaamdetect";
  this[15]=v_new(Plugin);this[15].description="npAliSecCtrl.dll";this[15].enabledPlugin={"0":{}};this[15].suffixes="*";this[15].type="application/x-alisecctrl-plugin";
  this[16]=v_new(Plugin);this[16].description="Portable Document Format";this[16].enabledPlugin={"0":{}};this[16].suffixes="pdf";this[16].type="application/x-google-chrome-pdf";
  this[17]=v_new(Plugin);this[17].description="";this[17].enabledPlugin={"0":{},"1":{},"2":{},"3":{},"4":{},"5":{},"6":{},"7":{},"8":{},"9":{}};this[17].suffixes="*";this[17].type="application/x-mplayer2";
  this[18]=v_new(Plugin);this[18].description="np-mswmp";this[18].enabledPlugin={"0":{},"1":{},"2":{},"3":{},"4":{},"5":{},"6":{},"7":{},"8":{},"9":{}};this[18].suffixes="*";this[18].type="application/x-ms-wmp";
  this[19]=v_new(Plugin);this[19].description="Native Client Executable";this[19].enabledPlugin={"0":{},"1":{}};this[19].suffixes="";this[19].type="application/x-nacl";
  this[20]=v_new(Plugin);this[20].description="Portable Native Client Executable";this[20].enabledPlugin={"0":{},"1":{}};this[20].suffixes="";this[20].type="application/x-pnacl";
  this[21]=v_new(Plugin);this[21].description="SharePoint Plug-in for Firefox";this[21].enabledPlugin={"0":{},"1":{}};this[21].suffixes="";this[21].type="application/x-sharepoint";
  this[22]=v_new(Plugin);this[22].description="";this[22].enabledPlugin={"0":{},"1":{}};this[22].suffixes="";this[22].type="application/x-sharepoint-uc";
  this[23]=v_new(Plugin);this[23].description="QQMailPlugin for webkit";this[23].enabledPlugin={"0":{},"1":{}};this[23].suffixes="";this[23].type="application/x-tencent-qmail";
  this[24]=v_new(Plugin);this[24].description="QQMailPlugin for webkit";this[24].enabledPlugin={"0":{},"1":{}};this[24].suffixes="";this[24].type="application/x-tencent-qmail-webkit";
  this[25]=v_new(Plugin);this[25].description="";this[25].enabledPlugin={"0":{},"1":{},"2":{},"3":{},"4":{},"5":{},"6":{},"7":{},"8":{},"9":{}};this[25].suffixes="wax,*";this[25].type="audio/x-ms-wax";
  this[26]=v_new(Plugin);this[26].description="";this[26].enabledPlugin={"0":{},"1":{},"2":{},"3":{},"4":{},"5":{},"6":{},"7":{},"8":{},"9":{}};this[26].suffixes="wma,*";this[26].type="audio/x-ms-wma";
  this[27]=v_new(Plugin);this[27].description="";this[27].enabledPlugin={"0":{},"1":{},"2":{},"3":{},"4":{},"5":{},"6":{},"7":{},"8":{},"9":{}};this[27].suffixes="asf,asx,*";this[27].type="video/x-ms-asf";
  this[28]=v_new(Plugin);this[28].description="";this[28].enabledPlugin={"0":{},"1":{},"2":{},"3":{},"4":{},"5":{},"6":{},"7":{},"8":{},"9":{}};this[28].suffixes="*";this[28].type="video/x-ms-asf-plugin";
  this[29]=v_new(Plugin);this[29].description="";this[29].enabledPlugin={"0":{},"1":{},"2":{},"3":{},"4":{},"5":{},"6":{},"7":{},"8":{},"9":{}};this[29].suffixes="wm,*";this[29].type="video/x-ms-wm";
  this[30]=v_new(Plugin);this[30].description="";this[30].enabledPlugin={"0":{},"1":{},"2":{},"3":{},"4":{},"5":{},"6":{},"7":{},"8":{},"9":{}};this[30].suffixes="wmv,*";this[30].type="video/x-ms-wmv";
  this[31]=v_new(Plugin);this[31].description="";this[31].enabledPlugin={"0":{},"1":{},"2":{},"3":{},"4":{},"5":{},"6":{},"7":{},"8":{},"9":{}};this[31].suffixes="wvx,*";this[31].type="video/x-ms-wvx";})
ResizeObserverEntry = v_saf(function ResizeObserverEntry(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };})
PerformanceObserverEntryList = v_saf(function PerformanceObserverEntryList(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };})
IntersectionObserverEntry = v_saf(function IntersectionObserverEntry(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };})
IntersectionObserver = v_saf(function IntersectionObserver(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };})
DOMTokenList = v_saf(function DOMTokenList(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };})
Headers = v_saf(function Headers(){;})
webkitURL = v_saf(function webkitURL(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };})
WebKitMutationObserver = v_saf(function WebKitMutationObserver(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };})
Path2D = v_saf(function Path2D(){;})
TextMetrics = v_saf(function TextMetrics(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };})
Crypto = v_saf(function Crypto(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };
  this.getRandomValues = function(){
    v_console_log('  [*] Crypto -> getRandomValues[func]')
    var e=arguments[0]; return e.map(function(x, i){return e[i]=v_random()*1073741824});}
  this.randomUUID = function(){
    v_console_log('  [*] Crypto -> randomUUID[func]')
    function get2(){return (v_random()*255^0).toString(16).padStart(2,'0')}
    function rpt(func,num){var r=[];for(var i=0;i<num;i++){r.push(func())};return r.join('')}
    return [rpt(get2,4),rpt(get2,2),rpt(get2,2),rpt(get2,2),rpt(get2,6)].join('-')}})
RTCSessionDescription = v_saf(function RTCSessionDescription(){;})
PerformanceServerTiming = v_saf(function PerformanceServerTiming(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };})
Selection = v_saf(function Selection(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };})
Node = v_saf(function Node(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(Node, EventTarget)
UIEvent = v_saf(function UIEvent(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(UIEvent, Event)
XMLHttpRequestEventTarget = v_saf(function XMLHttpRequestEventTarget(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(XMLHttpRequestEventTarget, EventTarget)
RTCPeerConnection = v_saf(function RTCPeerConnection(){;}); _inherits(RTCPeerConnection, EventTarget)
BatteryManager = v_saf(function BatteryManager(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(BatteryManager, EventTarget)
PermissionStatus = v_saf(function PermissionStatus(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(PermissionStatus, EventTarget)
RTCPeerConnectionIceEvent = v_saf(function RTCPeerConnectionIceEvent(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(RTCPeerConnectionIceEvent, Event)
ScreenOrientation = v_saf(function ScreenOrientation(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(ScreenOrientation, EventTarget)
MessagePort = v_saf(function MessagePort(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(MessagePort, EventTarget)
PerformanceMark = v_saf(function PerformanceMark(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(PerformanceMark, PerformanceEntry)
Performance = v_saf(function Performance(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(Performance, EventTarget)
NetworkInformation = v_saf(function NetworkInformation(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(NetworkInformation, EventTarget)
CSSStyleSheet = v_saf(function CSSStyleSheet(){;}); _inherits(CSSStyleSheet, StyleSheet)
DOMRect = v_saf(function DOMRect(){;}); _inherits(DOMRect, DOMRectReadOnly)
MediaQueryList = v_saf(function MediaQueryList(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(MediaQueryList, EventTarget)
PerformanceResourceTiming = v_saf(function PerformanceResourceTiming(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(PerformanceResourceTiming, PerformanceEntry)
MessageEvent = v_saf(function MessageEvent(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(MessageEvent, Event)
LargestContentfulPaint = v_saf(function LargestContentfulPaint(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(LargestContentfulPaint, PerformanceEntry)
webkitRTCPeerConnection = v_saf(function webkitRTCPeerConnection(){;}); _inherits(webkitRTCPeerConnection, EventTarget)
LayoutShift = v_saf(function LayoutShift(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(LayoutShift, PerformanceEntry)
Document = v_saf(function Document(){;}); _inherits(Document, Node)
MouseEvent = v_saf(function MouseEvent(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(MouseEvent, UIEvent)
XMLHttpRequest = v_saf(function XMLHttpRequest(){;}); _inherits(XMLHttpRequest, XMLHttpRequestEventTarget)
Element = v_saf(function Element(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(Element, Node)
PerformanceNavigationTiming = v_saf(function PerformanceNavigationTiming(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(PerformanceNavigationTiming, PerformanceResourceTiming)
HTMLElement = v_saf(function HTMLElement(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(HTMLElement, Element)
PointerEvent = v_saf(function PointerEvent(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(PointerEvent, MouseEvent)
HTMLCanvasElement = v_saf(function HTMLCanvasElement(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(HTMLCanvasElement, HTMLElement)
HTMLImageElement = v_saf(function HTMLImageElement(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(HTMLImageElement, HTMLElement)
HTMLScriptElement = v_saf(function HTMLScriptElement(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(HTMLScriptElement, HTMLElement)
HTMLLinkElement = v_saf(function HTMLLinkElement(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(HTMLLinkElement, HTMLElement)
HTMLAnchorElement = v_saf(function HTMLAnchorElement(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };v_hook_href(this, 'HTMLAnchorElement', location.href)}); _inherits(HTMLAnchorElement, HTMLElement)
HTMLStyleElement = v_saf(function HTMLStyleElement(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(HTMLStyleElement, HTMLElement)
HTMLIFrameElement = v_saf(function HTMLIFrameElement(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(HTMLIFrameElement, HTMLElement)
HTMLMediaElement = v_saf(function HTMLMediaElement(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(HTMLMediaElement, HTMLElement)
HTMLInputElement = v_saf(function HTMLInputElement(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(HTMLInputElement, HTMLElement)
HTMLTextAreaElement = v_saf(function HTMLTextAreaElement(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(HTMLTextAreaElement, HTMLElement)
Window = v_saf(function Window(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(Window, EventTarget)
HTMLDocument = v_saf(function HTMLDocument(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };Object.defineProperty(this, 'location', {get(){return location}})}); _inherits(HTMLDocument, Document)
HTMLHeadElement = v_saf(function HTMLHeadElement(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(HTMLHeadElement, HTMLElement)
HTMLBodyElement = v_saf(function HTMLBodyElement(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(HTMLBodyElement, HTMLElement)
Location = v_saf(function Location(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };})
PerformanceElementTiming = v_saf(function PerformanceElementTiming(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(PerformanceElementTiming, PerformanceEntry)
PerformanceEventTiming = v_saf(function PerformanceEventTiming(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(PerformanceEventTiming, PerformanceEntry)
PerformanceLongTaskTiming = v_saf(function PerformanceLongTaskTiming(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(PerformanceLongTaskTiming, PerformanceEntry)
PerformanceMeasure = v_saf(function PerformanceMeasure(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(PerformanceMeasure, PerformanceEntry)
PerformanceNavigation = v_saf(function PerformanceNavigation(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };})
PerformancePaintTiming = v_saf(function PerformancePaintTiming(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(PerformancePaintTiming, PerformanceEntry)
HTMLUnknownElement = v_saf(function HTMLUnknownElement(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(HTMLUnknownElement, HTMLElement)
Touch = v_saf(function Touch(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };})
TouchEvent = v_saf(function TouchEvent(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(TouchEvent, UIEvent)
HTMLDivElement = v_saf(function HTMLDivElement(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(HTMLDivElement, HTMLElement)
HTMLHtmlElement = v_saf(function HTMLHtmlElement(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(HTMLHtmlElement, HTMLElement)
HTMLTitleElement = v_saf(function HTMLTitleElement(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(HTMLTitleElement, HTMLElement)
Object.defineProperties(Storage.prototype, {
  [Symbol.toStringTag]: {value:"Storage",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(EventTarget.prototype, {
  removeEventListener: {value: v_saf(function removeEventListener(){v_console_log("  [*] EventTarget -> removeEventListener[func]", [].slice.call(arguments));})},
  dispatchEvent: {value: v_saf(function dispatchEvent(){v_console_log("  [*] EventTarget -> dispatchEvent[func]", [].slice.call(arguments));})},
  [Symbol.toStringTag]: {value:"EventTarget",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(Event.prototype, {
  type: {get(){ v_console_log("  [*] Event -> type[get]", "blur");return "blur" }},
  target: {get(){ v_console_log("  [*] Event -> target[get]", {});return {} }},
  eventPhase: {get(){ v_console_log("  [*] Event -> eventPhase[get]", 3);return 3 }},
  bubbles: {get(){ v_console_log("  [*] Event -> bubbles[get]", true);return true }},
  cancelable: {get(){ v_console_log("  [*] Event -> cancelable[get]", true);return true }},
  timeStamp: {get(){ v_console_log("  [*] Event -> timeStamp[get]", 22135.905000002822);return 22135.905000002822 }},
  defaultPrevented: {get(){ v_console_log("  [*] Event -> defaultPrevented[get]", false);return false }},
  NONE: {"value":0,"writable":false,"enumerable":true,"configurable":false},
  CAPTURING_PHASE: {"value":1,"writable":false,"enumerable":true,"configurable":false},
  AT_TARGET: {"value":2,"writable":false,"enumerable":true,"configurable":false},
  BUBBLING_PHASE: {"value":3,"writable":false,"enumerable":true,"configurable":false},
  [Symbol.toStringTag]: {value:"Event",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(Navigator.prototype, {
  userAgent: {get(){ v_console_log("  [*] Navigator -> userAgent[get]", "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.198 Safari/537.36");return "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.198 Safari/537.36" }},
  plugins: {get(){ v_console_log("  [*] Navigator -> plugins[get]", this._plugins || []);return this._plugins || [] }},
  platform: {get(){ v_console_log("  [*] Navigator -> platform[get]", "Win32");return "Win32" }},
  getBattery: {value: v_saf(function getBattery(){v_console_log("  [*] Navigator -> getBattery[func]", [].slice.call(arguments));})},
  appCodeName: {get(){ v_console_log("  [*] Navigator -> appCodeName[get]", "Mozilla");return "Mozilla" }},
  appName: {get(){ v_console_log("  [*] Navigator -> appName[get]", "Netscape");return "Netscape" }},
  appVersion: {get(){ v_console_log("  [*] Navigator -> appVersion[get]", "5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.198 Safari/537.36");return "5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.198 Safari/537.36" }},
  doNotTrack: {get(){ v_console_log("  [*] Navigator -> doNotTrack[get]", {});return {} }},
  product: {get(){ v_console_log("  [*] Navigator -> product[get]", "Gecko");return "Gecko" }},
  productSub: {get(){ v_console_log("  [*] Navigator -> productSub[get]", "20030107");return "20030107" }},
  vendor: {get(){ v_console_log("  [*] Navigator -> vendor[get]", "Google Inc.");return "Google Inc." }},
  vendorSub: {get(){ v_console_log("  [*] Navigator -> vendorSub[get]", "");return "" }},
  language: {get(){ v_console_log("  [*] Navigator -> language[get]", "zh-CN");return "zh-CN" }},
  cookieEnabled: {get(){ v_console_log("  [*] Navigator -> cookieEnabled[get]", true);return true }},
  hardwareConcurrency: {get(){ v_console_log("  [*] Navigator -> hardwareConcurrency[get]", 16);return 16 }},
  maxTouchPoints: {get(){ v_console_log("  [*] Navigator -> maxTouchPoints[get]", 0);return 0 }},
  languages: {get(){ v_console_log("  [*] Navigator -> languages[get]", {});return {} }},
  permissions: {get(){ v_console_log("  [*] Navigator -> permissions[get]", {});return {} }},
  javaEnabled: {value: v_saf(function javaEnabled(){v_console_log("  [*] Navigator -> javaEnabled[func]", [].slice.call(arguments));return true})},
  connection: {get(){ v_console_log("  [*] Navigator -> connection[get]", {});return {} }},
  mimeTypes: {get(){ v_console_log("  [*] Navigator -> mimeTypes[get]", this._mimeTypes || []);return this._mimeTypes || [] }},
  onLine: {get(){ v_console_log("  [*] Navigator -> onLine[get]", true);return true }},
  [Symbol.toStringTag]: {value:"Navigator",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(Plugin.prototype, {
  item: {value: v_saf(function item(){v_console_log("  [*] Plugin -> item[func]", [].slice.call(arguments));})},
  [Symbol.toStringTag]: {value:"Plugin",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(MimeType.prototype, {
  [Symbol.toStringTag]: {value:"MimeType",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(WebGLRenderingContext.prototype, {
  DEPTH_BUFFER_BIT: {"value":256,"writable":false,"enumerable":true,"configurable":false},
  STENCIL_BUFFER_BIT: {"value":1024,"writable":false,"enumerable":true,"configurable":false},
  COLOR_BUFFER_BIT: {"value":16384,"writable":false,"enumerable":true,"configurable":false},
  POINTS: {"value":0,"writable":false,"enumerable":true,"configurable":false},
  LINES: {"value":1,"writable":false,"enumerable":true,"configurable":false},
  LINE_LOOP: {"value":2,"writable":false,"enumerable":true,"configurable":false},
  LINE_STRIP: {"value":3,"writable":false,"enumerable":true,"configurable":false},
  TRIANGLES: {"value":4,"writable":false,"enumerable":true,"configurable":false},
  TRIANGLE_STRIP: {"value":5,"writable":false,"enumerable":true,"configurable":false},
  TRIANGLE_FAN: {"value":6,"writable":false,"enumerable":true,"configurable":false},
  ZERO: {"value":0,"writable":false,"enumerable":true,"configurable":false},
  ONE: {"value":1,"writable":false,"enumerable":true,"configurable":false},
  SRC_COLOR: {"value":768,"writable":false,"enumerable":true,"configurable":false},
  ONE_MINUS_SRC_COLOR: {"value":769,"writable":false,"enumerable":true,"configurable":false},
  SRC_ALPHA: {"value":770,"writable":false,"enumerable":true,"configurable":false},
  ONE_MINUS_SRC_ALPHA: {"value":771,"writable":false,"enumerable":true,"configurable":false},
  DST_ALPHA: {"value":772,"writable":false,"enumerable":true,"configurable":false},
  ONE_MINUS_DST_ALPHA: {"value":773,"writable":false,"enumerable":true,"configurable":false},
  DST_COLOR: {"value":774,"writable":false,"enumerable":true,"configurable":false},
  ONE_MINUS_DST_COLOR: {"value":775,"writable":false,"enumerable":true,"configurable":false},
  SRC_ALPHA_SATURATE: {"value":776,"writable":false,"enumerable":true,"configurable":false},
  FUNC_ADD: {"value":32774,"writable":false,"enumerable":true,"configurable":false},
  BLEND_EQUATION: {"value":32777,"writable":false,"enumerable":true,"configurable":false},
  BLEND_EQUATION_RGB: {"value":32777,"writable":false,"enumerable":true,"configurable":false},
  BLEND_EQUATION_ALPHA: {"value":34877,"writable":false,"enumerable":true,"configurable":false},
  FUNC_SUBTRACT: {"value":32778,"writable":false,"enumerable":true,"configurable":false},
  FUNC_REVERSE_SUBTRACT: {"value":32779,"writable":false,"enumerable":true,"configurable":false},
  BLEND_DST_RGB: {"value":32968,"writable":false,"enumerable":true,"configurable":false},
  BLEND_SRC_RGB: {"value":32969,"writable":false,"enumerable":true,"configurable":false},
  BLEND_DST_ALPHA: {"value":32970,"writable":false,"enumerable":true,"configurable":false},
  BLEND_SRC_ALPHA: {"value":32971,"writable":false,"enumerable":true,"configurable":false},
  CONSTANT_COLOR: {"value":32769,"writable":false,"enumerable":true,"configurable":false},
  ONE_MINUS_CONSTANT_COLOR: {"value":32770,"writable":false,"enumerable":true,"configurable":false},
  CONSTANT_ALPHA: {"value":32771,"writable":false,"enumerable":true,"configurable":false},
  ONE_MINUS_CONSTANT_ALPHA: {"value":32772,"writable":false,"enumerable":true,"configurable":false},
  BLEND_COLOR: {"value":32773,"writable":false,"enumerable":true,"configurable":false},
  ARRAY_BUFFER: {"value":34962,"writable":false,"enumerable":true,"configurable":false},
  ELEMENT_ARRAY_BUFFER: {"value":34963,"writable":false,"enumerable":true,"configurable":false},
  ARRAY_BUFFER_BINDING: {"value":34964,"writable":false,"enumerable":true,"configurable":false},
  ELEMENT_ARRAY_BUFFER_BINDING: {"value":34965,"writable":false,"enumerable":true,"configurable":false},
  STREAM_DRAW: {"value":35040,"writable":false,"enumerable":true,"configurable":false},
  STATIC_DRAW: {"value":35044,"writable":false,"enumerable":true,"configurable":false},
  DYNAMIC_DRAW: {"value":35048,"writable":false,"enumerable":true,"configurable":false},
  BUFFER_SIZE: {"value":34660,"writable":false,"enumerable":true,"configurable":false},
  BUFFER_USAGE: {"value":34661,"writable":false,"enumerable":true,"configurable":false},
  CURRENT_VERTEX_ATTRIB: {"value":34342,"writable":false,"enumerable":true,"configurable":false},
  FRONT: {"value":1028,"writable":false,"enumerable":true,"configurable":false},
  BACK: {"value":1029,"writable":false,"enumerable":true,"configurable":false},
  FRONT_AND_BACK: {"value":1032,"writable":false,"enumerable":true,"configurable":false},
  TEXTURE_2D: {"value":3553,"writable":false,"enumerable":true,"configurable":false},
  CULL_FACE: {"value":2884,"writable":false,"enumerable":true,"configurable":false},
  BLEND: {"value":3042,"writable":false,"enumerable":true,"configurable":false},
  DITHER: {"value":3024,"writable":false,"enumerable":true,"configurable":false},
  STENCIL_TEST: {"value":2960,"writable":false,"enumerable":true,"configurable":false},
  DEPTH_TEST: {"value":2929,"writable":false,"enumerable":true,"configurable":false},
  SCISSOR_TEST: {"value":3089,"writable":false,"enumerable":true,"configurable":false},
  POLYGON_OFFSET_FILL: {"value":32823,"writable":false,"enumerable":true,"configurable":false},
  SAMPLE_ALPHA_TO_COVERAGE: {"value":32926,"writable":false,"enumerable":true,"configurable":false},
  SAMPLE_COVERAGE: {"value":32928,"writable":false,"enumerable":true,"configurable":false},
  NO_ERROR: {"value":0,"writable":false,"enumerable":true,"configurable":false},
  INVALID_ENUM: {"value":1280,"writable":false,"enumerable":true,"configurable":false},
  INVALID_VALUE: {"value":1281,"writable":false,"enumerable":true,"configurable":false},
  INVALID_OPERATION: {"value":1282,"writable":false,"enumerable":true,"configurable":false},
  OUT_OF_MEMORY: {"value":1285,"writable":false,"enumerable":true,"configurable":false},
  CW: {"value":2304,"writable":false,"enumerable":true,"configurable":false},
  CCW: {"value":2305,"writable":false,"enumerable":true,"configurable":false},
  LINE_WIDTH: {"value":2849,"writable":false,"enumerable":true,"configurable":false},
  ALIASED_POINT_SIZE_RANGE: {"value":33901,"writable":false,"enumerable":true,"configurable":false},
  ALIASED_LINE_WIDTH_RANGE: {"value":33902,"writable":false,"enumerable":true,"configurable":false},
  CULL_FACE_MODE: {"value":2885,"writable":false,"enumerable":true,"configurable":false},
  FRONT_FACE: {"value":2886,"writable":false,"enumerable":true,"configurable":false},
  DEPTH_RANGE: {"value":2928,"writable":false,"enumerable":true,"configurable":false},
  DEPTH_WRITEMASK: {"value":2930,"writable":false,"enumerable":true,"configurable":false},
  DEPTH_CLEAR_VALUE: {"value":2931,"writable":false,"enumerable":true,"configurable":false},
  DEPTH_FUNC: {"value":2932,"writable":false,"enumerable":true,"configurable":false},
  STENCIL_CLEAR_VALUE: {"value":2961,"writable":false,"enumerable":true,"configurable":false},
  STENCIL_FUNC: {"value":2962,"writable":false,"enumerable":true,"configurable":false},
  STENCIL_FAIL: {"value":2964,"writable":false,"enumerable":true,"configurable":false},
  STENCIL_PASS_DEPTH_FAIL: {"value":2965,"writable":false,"enumerable":true,"configurable":false},
  STENCIL_PASS_DEPTH_PASS: {"value":2966,"writable":false,"enumerable":true,"configurable":false},
  STENCIL_REF: {"value":2967,"writable":false,"enumerable":true,"configurable":false},
  STENCIL_VALUE_MASK: {"value":2963,"writable":false,"enumerable":true,"configurable":false},
  STENCIL_WRITEMASK: {"value":2968,"writable":false,"enumerable":true,"configurable":false},
  STENCIL_BACK_FUNC: {"value":34816,"writable":false,"enumerable":true,"configurable":false},
  STENCIL_BACK_FAIL: {"value":34817,"writable":false,"enumerable":true,"configurable":false},
  STENCIL_BACK_PASS_DEPTH_FAIL: {"value":34818,"writable":false,"enumerable":true,"configurable":false},
  STENCIL_BACK_PASS_DEPTH_PASS: {"value":34819,"writable":false,"enumerable":true,"configurable":false},
  STENCIL_BACK_REF: {"value":36003,"writable":false,"enumerable":true,"configurable":false},
  STENCIL_BACK_VALUE_MASK: {"value":36004,"writable":false,"enumerable":true,"configurable":false},
  STENCIL_BACK_WRITEMASK: {"value":36005,"writable":false,"enumerable":true,"configurable":false},
  VIEWPORT: {"value":2978,"writable":false,"enumerable":true,"configurable":false},
  SCISSOR_BOX: {"value":3088,"writable":false,"enumerable":true,"configurable":false},
  COLOR_CLEAR_VALUE: {"value":3106,"writable":false,"enumerable":true,"configurable":false},
  COLOR_WRITEMASK: {"value":3107,"writable":false,"enumerable":true,"configurable":false},
  UNPACK_ALIGNMENT: {"value":3317,"writable":false,"enumerable":true,"configurable":false},
  PACK_ALIGNMENT: {"value":3333,"writable":false,"enumerable":true,"configurable":false},
  MAX_TEXTURE_SIZE: {"value":3379,"writable":false,"enumerable":true,"configurable":false},
  MAX_VIEWPORT_DIMS: {"value":3386,"writable":false,"enumerable":true,"configurable":false},
  SUBPIXEL_BITS: {"value":3408,"writable":false,"enumerable":true,"configurable":false},
  RED_BITS: {"value":3410,"writable":false,"enumerable":true,"configurable":false},
  GREEN_BITS: {"value":3411,"writable":false,"enumerable":true,"configurable":false},
  BLUE_BITS: {"value":3412,"writable":false,"enumerable":true,"configurable":false},
  ALPHA_BITS: {"value":3413,"writable":false,"enumerable":true,"configurable":false},
  DEPTH_BITS: {"value":3414,"writable":false,"enumerable":true,"configurable":false},
  STENCIL_BITS: {"value":3415,"writable":false,"enumerable":true,"configurable":false},
  POLYGON_OFFSET_UNITS: {"value":10752,"writable":false,"enumerable":true,"configurable":false},
  POLYGON_OFFSET_FACTOR: {"value":32824,"writable":false,"enumerable":true,"configurable":false},
  TEXTURE_BINDING_2D: {"value":32873,"writable":false,"enumerable":true,"configurable":false},
  SAMPLE_BUFFERS: {"value":32936,"writable":false,"enumerable":true,"configurable":false},
  SAMPLES: {"value":32937,"writable":false,"enumerable":true,"configurable":false},
  SAMPLE_COVERAGE_VALUE: {"value":32938,"writable":false,"enumerable":true,"configurable":false},
  SAMPLE_COVERAGE_INVERT: {"value":32939,"writable":false,"enumerable":true,"configurable":false},
  COMPRESSED_TEXTURE_FORMATS: {"value":34467,"writable":false,"enumerable":true,"configurable":false},
  DONT_CARE: {"value":4352,"writable":false,"enumerable":true,"configurable":false},
  FASTEST: {"value":4353,"writable":false,"enumerable":true,"configurable":false},
  NICEST: {"value":4354,"writable":false,"enumerable":true,"configurable":false},
  GENERATE_MIPMAP_HINT: {"value":33170,"writable":false,"enumerable":true,"configurable":false},
  BYTE: {"value":5120,"writable":false,"enumerable":true,"configurable":false},
  UNSIGNED_BYTE: {"value":5121,"writable":false,"enumerable":true,"configurable":false},
  SHORT: {"value":5122,"writable":false,"enumerable":true,"configurable":false},
  UNSIGNED_SHORT: {"value":5123,"writable":false,"enumerable":true,"configurable":false},
  INT: {"value":5124,"writable":false,"enumerable":true,"configurable":false},
  UNSIGNED_INT: {"value":5125,"writable":false,"enumerable":true,"configurable":false},
  FLOAT: {"value":5126,"writable":false,"enumerable":true,"configurable":false},
  DEPTH_COMPONENT: {"value":6402,"writable":false,"enumerable":true,"configurable":false},
  ALPHA: {"value":6406,"writable":false,"enumerable":true,"configurable":false},
  RGB: {"value":6407,"writable":false,"enumerable":true,"configurable":false},
  RGBA: {"value":6408,"writable":false,"enumerable":true,"configurable":false},
  LUMINANCE: {"value":6409,"writable":false,"enumerable":true,"configurable":false},
  LUMINANCE_ALPHA: {"value":6410,"writable":false,"enumerable":true,"configurable":false},
  UNSIGNED_SHORT_4_4_4_4: {"value":32819,"writable":false,"enumerable":true,"configurable":false},
  UNSIGNED_SHORT_5_5_5_1: {"value":32820,"writable":false,"enumerable":true,"configurable":false},
  UNSIGNED_SHORT_5_6_5: {"value":33635,"writable":false,"enumerable":true,"configurable":false},
  FRAGMENT_SHADER: {"value":35632,"writable":false,"enumerable":true,"configurable":false},
  VERTEX_SHADER: {"value":35633,"writable":false,"enumerable":true,"configurable":false},
  MAX_VERTEX_ATTRIBS: {"value":34921,"writable":false,"enumerable":true,"configurable":false},
  MAX_VERTEX_UNIFORM_VECTORS: {"value":36347,"writable":false,"enumerable":true,"configurable":false},
  MAX_VARYING_VECTORS: {"value":36348,"writable":false,"enumerable":true,"configurable":false},
  MAX_COMBINED_TEXTURE_IMAGE_UNITS: {"value":35661,"writable":false,"enumerable":true,"configurable":false},
  MAX_VERTEX_TEXTURE_IMAGE_UNITS: {"value":35660,"writable":false,"enumerable":true,"configurable":false},
  MAX_TEXTURE_IMAGE_UNITS: {"value":34930,"writable":false,"enumerable":true,"configurable":false},
  MAX_FRAGMENT_UNIFORM_VECTORS: {"value":36349,"writable":false,"enumerable":true,"configurable":false},
  SHADER_TYPE: {"value":35663,"writable":false,"enumerable":true,"configurable":false},
  DELETE_STATUS: {"value":35712,"writable":false,"enumerable":true,"configurable":false},
  LINK_STATUS: {"value":35714,"writable":false,"enumerable":true,"configurable":false},
  VALIDATE_STATUS: {"value":35715,"writable":false,"enumerable":true,"configurable":false},
  ATTACHED_SHADERS: {"value":35717,"writable":false,"enumerable":true,"configurable":false},
  ACTIVE_UNIFORMS: {"value":35718,"writable":false,"enumerable":true,"configurable":false},
  ACTIVE_ATTRIBUTES: {"value":35721,"writable":false,"enumerable":true,"configurable":false},
  SHADING_LANGUAGE_VERSION: {"value":35724,"writable":false,"enumerable":true,"configurable":false},
  CURRENT_PROGRAM: {"value":35725,"writable":false,"enumerable":true,"configurable":false},
  NEVER: {"value":512,"writable":false,"enumerable":true,"configurable":false},
  LESS: {"value":513,"writable":false,"enumerable":true,"configurable":false},
  EQUAL: {"value":514,"writable":false,"enumerable":true,"configurable":false},
  LEQUAL: {"value":515,"writable":false,"enumerable":true,"configurable":false},
  GREATER: {"value":516,"writable":false,"enumerable":true,"configurable":false},
  NOTEQUAL: {"value":517,"writable":false,"enumerable":true,"configurable":false},
  GEQUAL: {"value":518,"writable":false,"enumerable":true,"configurable":false},
  ALWAYS: {"value":519,"writable":false,"enumerable":true,"configurable":false},
  KEEP: {"value":7680,"writable":false,"enumerable":true,"configurable":false},
  REPLACE: {"value":7681,"writable":false,"enumerable":true,"configurable":false},
  INCR: {"value":7682,"writable":false,"enumerable":true,"configurable":false},
  DECR: {"value":7683,"writable":false,"enumerable":true,"configurable":false},
  INVERT: {"value":5386,"writable":false,"enumerable":true,"configurable":false},
  INCR_WRAP: {"value":34055,"writable":false,"enumerable":true,"configurable":false},
  DECR_WRAP: {"value":34056,"writable":false,"enumerable":true,"configurable":false},
  VENDOR: {"value":7936,"writable":false,"enumerable":true,"configurable":false},
  RENDERER: {"value":7937,"writable":false,"enumerable":true,"configurable":false},
  VERSION: {"value":7938,"writable":false,"enumerable":true,"configurable":false},
  NEAREST: {"value":9728,"writable":false,"enumerable":true,"configurable":false},
  LINEAR: {"value":9729,"writable":false,"enumerable":true,"configurable":false},
  NEAREST_MIPMAP_NEAREST: {"value":9984,"writable":false,"enumerable":true,"configurable":false},
  LINEAR_MIPMAP_NEAREST: {"value":9985,"writable":false,"enumerable":true,"configurable":false},
  NEAREST_MIPMAP_LINEAR: {"value":9986,"writable":false,"enumerable":true,"configurable":false},
  LINEAR_MIPMAP_LINEAR: {"value":9987,"writable":false,"enumerable":true,"configurable":false},
  TEXTURE_MAG_FILTER: {"value":10240,"writable":false,"enumerable":true,"configurable":false},
  TEXTURE_MIN_FILTER: {"value":10241,"writable":false,"enumerable":true,"configurable":false},
  TEXTURE_WRAP_S: {"value":10242,"writable":false,"enumerable":true,"configurable":false},
  TEXTURE_WRAP_T: {"value":10243,"writable":false,"enumerable":true,"configurable":false},
  TEXTURE: {"value":5890,"writable":false,"enumerable":true,"configurable":false},
  TEXTURE_CUBE_MAP: {"value":34067,"writable":false,"enumerable":true,"configurable":false},
  TEXTURE_BINDING_CUBE_MAP: {"value":34068,"writable":false,"enumerable":true,"configurable":false},
  TEXTURE_CUBE_MAP_POSITIVE_X: {"value":34069,"writable":false,"enumerable":true,"configurable":false},
  TEXTURE_CUBE_MAP_NEGATIVE_X: {"value":34070,"writable":false,"enumerable":true,"configurable":false},
  TEXTURE_CUBE_MAP_POSITIVE_Y: {"value":34071,"writable":false,"enumerable":true,"configurable":false},
  TEXTURE_CUBE_MAP_NEGATIVE_Y: {"value":34072,"writable":false,"enumerable":true,"configurable":false},
  TEXTURE_CUBE_MAP_POSITIVE_Z: {"value":34073,"writable":false,"enumerable":true,"configurable":false},
  TEXTURE_CUBE_MAP_NEGATIVE_Z: {"value":34074,"writable":false,"enumerable":true,"configurable":false},
  MAX_CUBE_MAP_TEXTURE_SIZE: {"value":34076,"writable":false,"enumerable":true,"configurable":false},
  TEXTURE0: {"value":33984,"writable":false,"enumerable":true,"configurable":false},
  TEXTURE1: {"value":33985,"writable":false,"enumerable":true,"configurable":false},
  TEXTURE2: {"value":33986,"writable":false,"enumerable":true,"configurable":false},
  TEXTURE3: {"value":33987,"writable":false,"enumerable":true,"configurable":false},
  TEXTURE4: {"value":33988,"writable":false,"enumerable":true,"configurable":false},
  TEXTURE5: {"value":33989,"writable":false,"enumerable":true,"configurable":false},
  TEXTURE6: {"value":33990,"writable":false,"enumerable":true,"configurable":false},
  TEXTURE7: {"value":33991,"writable":false,"enumerable":true,"configurable":false},
  TEXTURE8: {"value":33992,"writable":false,"enumerable":true,"configurable":false},
  TEXTURE9: {"value":33993,"writable":false,"enumerable":true,"configurable":false},
  TEXTURE10: {"value":33994,"writable":false,"enumerable":true,"configurable":false},
  TEXTURE11: {"value":33995,"writable":false,"enumerable":true,"configurable":false},
  TEXTURE12: {"value":33996,"writable":false,"enumerable":true,"configurable":false},
  TEXTURE13: {"value":33997,"writable":false,"enumerable":true,"configurable":false},
  TEXTURE14: {"value":33998,"writable":false,"enumerable":true,"configurable":false},
  TEXTURE15: {"value":33999,"writable":false,"enumerable":true,"configurable":false},
  TEXTURE16: {"value":34000,"writable":false,"enumerable":true,"configurable":false},
  TEXTURE17: {"value":34001,"writable":false,"enumerable":true,"configurable":false},
  TEXTURE18: {"value":34002,"writable":false,"enumerable":true,"configurable":false},
  TEXTURE19: {"value":34003,"writable":false,"enumerable":true,"configurable":false},
  TEXTURE20: {"value":34004,"writable":false,"enumerable":true,"configurable":false},
  TEXTURE21: {"value":34005,"writable":false,"enumerable":true,"configurable":false},
  TEXTURE22: {"value":34006,"writable":false,"enumerable":true,"configurable":false},
  TEXTURE23: {"value":34007,"writable":false,"enumerable":true,"configurable":false},
  TEXTURE24: {"value":34008,"writable":false,"enumerable":true,"configurable":false},
  TEXTURE25: {"value":34009,"writable":false,"enumerable":true,"configurable":false},
  TEXTURE26: {"value":34010,"writable":false,"enumerable":true,"configurable":false},
  TEXTURE27: {"value":34011,"writable":false,"enumerable":true,"configurable":false},
  TEXTURE28: {"value":34012,"writable":false,"enumerable":true,"configurable":false},
  TEXTURE29: {"value":34013,"writable":false,"enumerable":true,"configurable":false},
  TEXTURE30: {"value":34014,"writable":false,"enumerable":true,"configurable":false},
  TEXTURE31: {"value":34015,"writable":false,"enumerable":true,"configurable":false},
  ACTIVE_TEXTURE: {"value":34016,"writable":false,"enumerable":true,"configurable":false},
  REPEAT: {"value":10497,"writable":false,"enumerable":true,"configurable":false},
  CLAMP_TO_EDGE: {"value":33071,"writable":false,"enumerable":true,"configurable":false},
  MIRRORED_REPEAT: {"value":33648,"writable":false,"enumerable":true,"configurable":false},
  FLOAT_VEC2: {"value":35664,"writable":false,"enumerable":true,"configurable":false},
  FLOAT_VEC3: {"value":35665,"writable":false,"enumerable":true,"configurable":false},
  FLOAT_VEC4: {"value":35666,"writable":false,"enumerable":true,"configurable":false},
  INT_VEC2: {"value":35667,"writable":false,"enumerable":true,"configurable":false},
  INT_VEC3: {"value":35668,"writable":false,"enumerable":true,"configurable":false},
  INT_VEC4: {"value":35669,"writable":false,"enumerable":true,"configurable":false},
  BOOL: {"value":35670,"writable":false,"enumerable":true,"configurable":false},
  BOOL_VEC2: {"value":35671,"writable":false,"enumerable":true,"configurable":false},
  BOOL_VEC3: {"value":35672,"writable":false,"enumerable":true,"configurable":false},
  BOOL_VEC4: {"value":35673,"writable":false,"enumerable":true,"configurable":false},
  FLOAT_MAT2: {"value":35674,"writable":false,"enumerable":true,"configurable":false},
  FLOAT_MAT3: {"value":35675,"writable":false,"enumerable":true,"configurable":false},
  FLOAT_MAT4: {"value":35676,"writable":false,"enumerable":true,"configurable":false},
  SAMPLER_2D: {"value":35678,"writable":false,"enumerable":true,"configurable":false},
  SAMPLER_CUBE: {"value":35680,"writable":false,"enumerable":true,"configurable":false},
  VERTEX_ATTRIB_ARRAY_ENABLED: {"value":34338,"writable":false,"enumerable":true,"configurable":false},
  VERTEX_ATTRIB_ARRAY_SIZE: {"value":34339,"writable":false,"enumerable":true,"configurable":false},
  VERTEX_ATTRIB_ARRAY_STRIDE: {"value":34340,"writable":false,"enumerable":true,"configurable":false},
  VERTEX_ATTRIB_ARRAY_TYPE: {"value":34341,"writable":false,"enumerable":true,"configurable":false},
  VERTEX_ATTRIB_ARRAY_NORMALIZED: {"value":34922,"writable":false,"enumerable":true,"configurable":false},
  VERTEX_ATTRIB_ARRAY_POINTER: {"value":34373,"writable":false,"enumerable":true,"configurable":false},
  VERTEX_ATTRIB_ARRAY_BUFFER_BINDING: {"value":34975,"writable":false,"enumerable":true,"configurable":false},
  IMPLEMENTATION_COLOR_READ_TYPE: {"value":35738,"writable":false,"enumerable":true,"configurable":false},
  IMPLEMENTATION_COLOR_READ_FORMAT: {"value":35739,"writable":false,"enumerable":true,"configurable":false},
  COMPILE_STATUS: {"value":35713,"writable":false,"enumerable":true,"configurable":false},
  LOW_FLOAT: {"value":36336,"writable":false,"enumerable":true,"configurable":false},
  MEDIUM_FLOAT: {"value":36337,"writable":false,"enumerable":true,"configurable":false},
  HIGH_FLOAT: {"value":36338,"writable":false,"enumerable":true,"configurable":false},
  LOW_INT: {"value":36339,"writable":false,"enumerable":true,"configurable":false},
  MEDIUM_INT: {"value":36340,"writable":false,"enumerable":true,"configurable":false},
  HIGH_INT: {"value":36341,"writable":false,"enumerable":true,"configurable":false},
  FRAMEBUFFER: {"value":36160,"writable":false,"enumerable":true,"configurable":false},
  RENDERBUFFER: {"value":36161,"writable":false,"enumerable":true,"configurable":false},
  RGBA4: {"value":32854,"writable":false,"enumerable":true,"configurable":false},
  RGB5_A1: {"value":32855,"writable":false,"enumerable":true,"configurable":false},
  RGB565: {"value":36194,"writable":false,"enumerable":true,"configurable":false},
  DEPTH_COMPONENT16: {"value":33189,"writable":false,"enumerable":true,"configurable":false},
  STENCIL_INDEX8: {"value":36168,"writable":false,"enumerable":true,"configurable":false},
  DEPTH_STENCIL: {"value":34041,"writable":false,"enumerable":true,"configurable":false},
  RENDERBUFFER_WIDTH: {"value":36162,"writable":false,"enumerable":true,"configurable":false},
  RENDERBUFFER_HEIGHT: {"value":36163,"writable":false,"enumerable":true,"configurable":false},
  RENDERBUFFER_INTERNAL_FORMAT: {"value":36164,"writable":false,"enumerable":true,"configurable":false},
  RENDERBUFFER_RED_SIZE: {"value":36176,"writable":false,"enumerable":true,"configurable":false},
  RENDERBUFFER_GREEN_SIZE: {"value":36177,"writable":false,"enumerable":true,"configurable":false},
  RENDERBUFFER_BLUE_SIZE: {"value":36178,"writable":false,"enumerable":true,"configurable":false},
  RENDERBUFFER_ALPHA_SIZE: {"value":36179,"writable":false,"enumerable":true,"configurable":false},
  RENDERBUFFER_DEPTH_SIZE: {"value":36180,"writable":false,"enumerable":true,"configurable":false},
  RENDERBUFFER_STENCIL_SIZE: {"value":36181,"writable":false,"enumerable":true,"configurable":false},
  FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE: {"value":36048,"writable":false,"enumerable":true,"configurable":false},
  FRAMEBUFFER_ATTACHMENT_OBJECT_NAME: {"value":36049,"writable":false,"enumerable":true,"configurable":false},
  FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL: {"value":36050,"writable":false,"enumerable":true,"configurable":false},
  FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE: {"value":36051,"writable":false,"enumerable":true,"configurable":false},
  COLOR_ATTACHMENT0: {"value":36064,"writable":false,"enumerable":true,"configurable":false},
  DEPTH_ATTACHMENT: {"value":36096,"writable":false,"enumerable":true,"configurable":false},
  STENCIL_ATTACHMENT: {"value":36128,"writable":false,"enumerable":true,"configurable":false},
  DEPTH_STENCIL_ATTACHMENT: {"value":33306,"writable":false,"enumerable":true,"configurable":false},
  NONE: {"value":0,"writable":false,"enumerable":true,"configurable":false},
  FRAMEBUFFER_COMPLETE: {"value":36053,"writable":false,"enumerable":true,"configurable":false},
  FRAMEBUFFER_INCOMPLETE_ATTACHMENT: {"value":36054,"writable":false,"enumerable":true,"configurable":false},
  FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT: {"value":36055,"writable":false,"enumerable":true,"configurable":false},
  FRAMEBUFFER_INCOMPLETE_DIMENSIONS: {"value":36057,"writable":false,"enumerable":true,"configurable":false},
  FRAMEBUFFER_UNSUPPORTED: {"value":36061,"writable":false,"enumerable":true,"configurable":false},
  FRAMEBUFFER_BINDING: {"value":36006,"writable":false,"enumerable":true,"configurable":false},
  RENDERBUFFER_BINDING: {"value":36007,"writable":false,"enumerable":true,"configurable":false},
  MAX_RENDERBUFFER_SIZE: {"value":34024,"writable":false,"enumerable":true,"configurable":false},
  INVALID_FRAMEBUFFER_OPERATION: {"value":1286,"writable":false,"enumerable":true,"configurable":false},
  UNPACK_FLIP_Y_WEBGL: {"value":37440,"writable":false,"enumerable":true,"configurable":false},
  UNPACK_PREMULTIPLY_ALPHA_WEBGL: {"value":37441,"writable":false,"enumerable":true,"configurable":false},
  CONTEXT_LOST_WEBGL: {"value":37442,"writable":false,"enumerable":true,"configurable":false},
  UNPACK_COLORSPACE_CONVERSION_WEBGL: {"value":37443,"writable":false,"enumerable":true,"configurable":false},
  BROWSER_DEFAULT_WEBGL: {"value":37444,"writable":false,"enumerable":true,"configurable":false},
  [Symbol.toStringTag]: {value:"WebGLRenderingContext",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(CanvasRenderingContext2D.prototype, {
  font: {set(){ v_console_log("  [*] CanvasRenderingContext2D -> font[set]", [].slice.call(arguments)); }},
  fillText: {value: v_saf(function fillText(){v_console_log("  [*] CanvasRenderingContext2D -> fillText[func]", [].slice.call(arguments));})},
  shadowBlur: {set(){ v_console_log("  [*] CanvasRenderingContext2D -> shadowBlur[set]", [].slice.call(arguments)); }},
  arc: {value: v_saf(function arc(){v_console_log("  [*] CanvasRenderingContext2D -> arc[func]", [].slice.call(arguments));})},
  stroke: {value: v_saf(function stroke(){v_console_log("  [*] CanvasRenderingContext2D -> stroke[func]", [].slice.call(arguments));})},
  drawImage: {value: v_saf(function drawImage(){v_console_log("  [*] CanvasRenderingContext2D -> drawImage[func]", [].slice.call(arguments));})},
  getImageData: {value: v_saf(function getImageData(){v_console_log("  [*] CanvasRenderingContext2D -> getImageData[func]", [].slice.call(arguments));})},
  scale: {value: v_saf(function scale(){v_console_log("  [*] CanvasRenderingContext2D -> scale[func]", [].slice.call(arguments));})},
  save: {value: v_saf(function save(){v_console_log("  [*] CanvasRenderingContext2D -> save[func]", [].slice.call(arguments));})},
  setTransform: {value: v_saf(function setTransform(){v_console_log("  [*] CanvasRenderingContext2D -> setTransform[func]", [].slice.call(arguments));})},
  clearRect: {value: v_saf(function clearRect(){v_console_log("  [*] CanvasRenderingContext2D -> clearRect[func]", [].slice.call(arguments));})},
  restore: {value: v_saf(function restore(){v_console_log("  [*] CanvasRenderingContext2D -> restore[func]", [].slice.call(arguments));})},
  globalAlpha: {set(){ v_console_log("  [*] CanvasRenderingContext2D -> globalAlpha[set]", [].slice.call(arguments)); }},
  beginPath: {value: v_saf(function beginPath(){v_console_log("  [*] CanvasRenderingContext2D -> beginPath[func]", [].slice.call(arguments));})},
  lineWidth: {set(){ v_console_log("  [*] CanvasRenderingContext2D -> lineWidth[set]", [].slice.call(arguments)); }},
  strokeStyle: {set(){ v_console_log("  [*] CanvasRenderingContext2D -> strokeStyle[set]", [].slice.call(arguments)); }},
  closePath: {value: v_saf(function closePath(){v_console_log("  [*] CanvasRenderingContext2D -> closePath[func]", [].slice.call(arguments));})},
  fillStyle: {set(){ v_console_log("  [*] CanvasRenderingContext2D -> fillStyle[set]", [].slice.call(arguments)); }},
  textAlign: {set(){ v_console_log("  [*] CanvasRenderingContext2D -> textAlign[set]", [].slice.call(arguments)); }},
  textBaseline: {set(){ v_console_log("  [*] CanvasRenderingContext2D -> textBaseline[set]", [].slice.call(arguments)); }},
  measureText: {value: v_saf(function measureText(){v_console_log("  [*] CanvasRenderingContext2D -> measureText[func]", [].slice.call(arguments));})},
  fill: {value: v_saf(function fill(){v_console_log("  [*] CanvasRenderingContext2D -> fill[func]", [].slice.call(arguments));})},
  moveTo: {value: v_saf(function moveTo(){v_console_log("  [*] CanvasRenderingContext2D -> moveTo[func]", [].slice.call(arguments));})},
  isPointInPath: {value: v_saf(function isPointInPath(){v_console_log("  [*] CanvasRenderingContext2D -> isPointInPath[func]", [].slice.call(arguments));})},
  [Symbol.toStringTag]: {value:"CanvasRenderingContext2D",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(Permissions.prototype, {
  query: {value: v_saf(function query(){v_console_log("  [*] Permissions -> query[func]", [].slice.call(arguments));})},
  [Symbol.toStringTag]: {value:"Permissions",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(DOMException.prototype, {
  message: {get(){ v_console_log("  [*] DOMException -> message[get]", "1");return "1" }},
  code: {get(){ v_console_log("  [*] DOMException -> code[get]", 25);return 25 }},
  name: {get(){ v_console_log("  [*] DOMException -> name[get]", "2");return "2" }},
  INDEX_SIZE_ERR: {"value":1,"writable":false,"enumerable":true,"configurable":false},
  DOMSTRING_SIZE_ERR: {"value":2,"writable":false,"enumerable":true,"configurable":false},
  HIERARCHY_REQUEST_ERR: {"value":3,"writable":false,"enumerable":true,"configurable":false},
  WRONG_DOCUMENT_ERR: {"value":4,"writable":false,"enumerable":true,"configurable":false},
  INVALID_CHARACTER_ERR: {"value":5,"writable":false,"enumerable":true,"configurable":false},
  NO_DATA_ALLOWED_ERR: {"value":6,"writable":false,"enumerable":true,"configurable":false},
  NO_MODIFICATION_ALLOWED_ERR: {"value":7,"writable":false,"enumerable":true,"configurable":false},
  NOT_FOUND_ERR: {"value":8,"writable":false,"enumerable":true,"configurable":false},
  NOT_SUPPORTED_ERR: {"value":9,"writable":false,"enumerable":true,"configurable":false},
  INUSE_ATTRIBUTE_ERR: {"value":10,"writable":false,"enumerable":true,"configurable":false},
  INVALID_STATE_ERR: {"value":11,"writable":false,"enumerable":true,"configurable":false},
  SYNTAX_ERR: {"value":12,"writable":false,"enumerable":true,"configurable":false},
  INVALID_MODIFICATION_ERR: {"value":13,"writable":false,"enumerable":true,"configurable":false},
  NAMESPACE_ERR: {"value":14,"writable":false,"enumerable":true,"configurable":false},
  INVALID_ACCESS_ERR: {"value":15,"writable":false,"enumerable":true,"configurable":false},
  VALIDATION_ERR: {"value":16,"writable":false,"enumerable":true,"configurable":false},
  TYPE_MISMATCH_ERR: {"value":17,"writable":false,"enumerable":true,"configurable":false},
  SECURITY_ERR: {"value":18,"writable":false,"enumerable":true,"configurable":false},
  NETWORK_ERR: {"value":19,"writable":false,"enumerable":true,"configurable":false},
  ABORT_ERR: {"value":20,"writable":false,"enumerable":true,"configurable":false},
  URL_MISMATCH_ERR: {"value":21,"writable":false,"enumerable":true,"configurable":false},
  QUOTA_EXCEEDED_ERR: {"value":22,"writable":false,"enumerable":true,"configurable":false},
  TIMEOUT_ERR: {"value":23,"writable":false,"enumerable":true,"configurable":false},
  INVALID_NODE_TYPE_ERR: {"value":24,"writable":false,"enumerable":true,"configurable":false},
  DATA_CLONE_ERR: {"value":25,"writable":false,"enumerable":true,"configurable":false},
  [Symbol.toStringTag]: {value:"DOMException",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(PluginArray.prototype, {
  length: {get(){ v_console_log("  [*] PluginArray -> length[get]", 15);return 15 }},
  [Symbol.toStringTag]: {value:"PluginArray",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(Screen.prototype, {
  availWidth: {get(){ v_console_log("  [*] Screen -> availWidth[get]", 1707);return 1707 }},
  availHeight: {get(){ v_console_log("  [*] Screen -> availHeight[get]", 1019);return 1019 }},
  width: {get(){ v_console_log("  [*] Screen -> width[get]", 1707);return 1707 }},
  height: {get(){ v_console_log("  [*] Screen -> height[get]", 1067);return 1067 }},
  colorDepth: {get(){ v_console_log("  [*] Screen -> colorDepth[get]", 24);return 24 }},
  pixelDepth: {get(){ v_console_log("  [*] Screen -> pixelDepth[get]", 24);return 24 }},
  orientation: {get(){ v_console_log("  [*] Screen -> orientation[get]", {});return {} }},
  [Symbol.toStringTag]: {value:"Screen",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(RTCIceCandidate.prototype, {
  candidate: {get(){ v_console_log("  [*] RTCIceCandidate -> candidate[get]", "candidate:842163049 1 udp 1677729535 27.16.229.48 2050 typ srflx raddr 0.0.0.0 rport 0 generation 0 ufrag gKkq network-cost 999");return "candidate:842163049 1 udp 1677729535 27.16.229.48 2050 typ srflx raddr 0.0.0.0 rport 0 generation 0 ufrag gKkq network-cost 999" }},
  [Symbol.toStringTag]: {value:"RTCIceCandidate",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(Image.prototype, {
  src: {set(){ v_console_log("  [*] Image -> src[set]", [].slice.call(arguments)); }},
  [Symbol.toStringTag]: {value:"Image",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(CSSStyleDeclaration.prototype, {
  cssText: {set(){ v_console_log("  [*] CSSStyleDeclaration -> cssText[set]", [].slice.call(arguments)); }},
  getPropertyValue: {value: v_saf(function getPropertyValue(){v_console_log("  [*] CSSStyleDeclaration -> getPropertyValue[func]", [].slice.call(arguments));})},
  [Symbol.toStringTag]: {value:"CSSStyleDeclaration",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(HTMLCollection.prototype, {
  length: {get(){ v_console_log("  [*] HTMLCollection -> length[get]", 1);return 1 }},
  [Symbol.toStringTag]: {value:"HTMLCollection",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(MessageChannel.prototype, {
  port2: {get(){ v_console_log("  [*] MessageChannel -> port2[get]", {});return {} }},
  port1: {get(){ v_console_log("  [*] MessageChannel -> port1[get]", {});return {} }},
  [Symbol.toStringTag]: {value:"MessageChannel",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(PerformanceEntry.prototype, {
  startTime: {get(){ v_console_log("  [*] PerformanceEntry -> startTime[get]", 4263.795000006212);return 4263.795000006212 }},
  duration: {get(){ v_console_log("  [*] PerformanceEntry -> duration[get]", 438.865000003716);return 438.865000003716 }},
  entryType: {get(){ v_console_log("  [*] PerformanceEntry -> entryType[get]", "longtask");return "longtask" }},
  [Symbol.toStringTag]: {value:"PerformanceEntry",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(URL.prototype, {
  searchParams: {get(){ v_console_log("  [*] URL -> searchParams[get]", {});return {} }},
  pathname: {set(){ v_console_log("  [*] URL -> pathname[set]", [].slice.call(arguments));return {} }},
  href: {get(){ v_console_log("  [*] URL -> href[get]", "http://a/c%20d?a=1&c=3");return "http://a/c%20d?a=1&c=3" }},
  username: {get(){ v_console_log("  [*] URL -> username[get]", "a");return "a" }},
  host: {get(){ v_console_log("  [*] URL -> host[get]", "xn--e1aybc");return "xn--e1aybc" }},
  hash: {get(){ v_console_log("  [*] URL -> hash[get]", "#б");return "#б" }},
  [Symbol.toStringTag]: {value:"URL",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(URLSearchParams.prototype, {
  forEach: {value: v_saf(function forEach(){v_console_log("  [*] URLSearchParams -> forEach[func]", [].slice.call(arguments));})},
  get: {value: v_saf(function get(){v_console_log("  [*] URLSearchParams -> get[func]", [].slice.call(arguments));})},
  toString: {value: v_saf(function toString(){v_console_log("  [*] URLSearchParams -> toString[func]", [].slice.call(arguments));})},
  [Symbol.toStringTag]: {value:"URLSearchParams",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(PerformanceObserver.prototype, {
  observe: {value: v_saf(function observe(){v_console_log("  [*] PerformanceObserver -> observe[func]", [].slice.call(arguments));})},
  disconnect: {value: v_saf(function disconnect(){v_console_log("  [*] PerformanceObserver -> disconnect[func]", [].slice.call(arguments));})},
  [Symbol.toStringTag]: {value:"PerformanceObserver",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(MutationObserver.prototype, {
  observe: {value: v_saf(function observe(){v_console_log("  [*] MutationObserver -> observe[func]", [].slice.call(arguments));})},
  disconnect: {value: v_saf(function disconnect(){v_console_log("  [*] MutationObserver -> disconnect[func]", [].slice.call(arguments));})},
  [Symbol.toStringTag]: {value:"MutationObserver",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(PerformanceTiming.prototype, {
  navigationStart: {get(){ v_console_log("  [*] PerformanceTiming -> navigationStart[get]", 1687159923556);return 1687159923556 }},
  loadEventEnd: {get(){ v_console_log("  [*] PerformanceTiming -> loadEventEnd[get]", 1687159933593);return 1687159933593 }},
  toJSON: {value: v_saf(function toJSON(){v_console_log("  [*] PerformanceTiming -> toJSON[func]", [].slice.call(arguments));})},
  [Symbol.toStringTag]: {value:"PerformanceTiming",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(NodeList.prototype, {
  length: {get(){ v_console_log("  [*] NodeList -> length[get]", 1);return 1 }},
  [Symbol.toStringTag]: {value:"NodeList",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(StyleSheet.prototype, {
  [Symbol.toStringTag]: {value:"StyleSheet",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(DOMImplementation.prototype, {
  hasFeature: {value: v_saf(function hasFeature(){v_console_log("  [*] DOMImplementation -> hasFeature[func]", [].slice.call(arguments));})},
  [Symbol.toStringTag]: {value:"DOMImplementation",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(History.prototype, {
  state: {get(){ v_console_log("  [*] History -> state[get]", {});return {} }},
  length: {get(){ v_console_log("  [*] History -> length[get]", 2);return 2 }},
  [Symbol.toStringTag]: {value:"History",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(MutationRecord.prototype, {
  type: {get(){ v_console_log("  [*] MutationRecord -> type[get]", "childList");return "childList" }},
  addedNodes: {get(){ v_console_log("  [*] MutationRecord -> addedNodes[get]", {});return {} }},
  [Symbol.toStringTag]: {value:"MutationRecord",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(DOMRectReadOnly.prototype, {
  top: {get(){ v_console_log("  [*] DOMRectReadOnly -> top[get]", -458);return -458 }},
  left: {get(){ v_console_log("  [*] DOMRectReadOnly -> left[get]", 0);return 0 }},
  right: {get(){ v_console_log("  [*] DOMRectReadOnly -> right[get]", 1445.3333740234375);return 1445.3333740234375 }},
  bottom: {get(){ v_console_log("  [*] DOMRectReadOnly -> bottom[get]", 1238);return 1238 }},
  [Symbol.toStringTag]: {value:"DOMRectReadOnly",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(ResizeObserver.prototype, {
  observe: {value: v_saf(function observe(){v_console_log("  [*] ResizeObserver -> observe[func]", [].slice.call(arguments));})},
  disconnect: {value: v_saf(function disconnect(){v_console_log("  [*] ResizeObserver -> disconnect[func]", [].slice.call(arguments));})},
  [Symbol.toStringTag]: {value:"ResizeObserver",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(MimeTypeArray.prototype, {
  length: {get(){ v_console_log("  [*] MimeTypeArray -> length[get]", 32);return 32 }},
  [Symbol.toStringTag]: {value:"MimeTypeArray",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(ResizeObserverEntry.prototype, {
  target: {get(){ v_console_log("  [*] ResizeObserverEntry -> target[get]", {});return {} }},
  [Symbol.toStringTag]: {value:"ResizeObserverEntry",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(PerformanceObserverEntryList.prototype, {
  getEntries: {value: v_saf(function getEntries(){v_console_log("  [*] PerformanceObserverEntryList -> getEntries[func]", [].slice.call(arguments));})},
  [Symbol.toStringTag]: {value:"PerformanceObserverEntryList",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(IntersectionObserverEntry.prototype, {
  target: {get(){ v_console_log("  [*] IntersectionObserverEntry -> target[get]", {});return {} }},
  isIntersecting: {get(){ v_console_log("  [*] IntersectionObserverEntry -> isIntersecting[get]", true);return true }},
  boundingClientRect: {get(){ v_console_log("  [*] IntersectionObserverEntry -> boundingClientRect[get]", {});return {} }},
  intersectionRatio: {get(){ v_console_log("  [*] IntersectionObserverEntry -> intersectionRatio[get]", 0.7044125199317932);return 0.7044125199317932 }},
  intersectionRect: {get(){ v_console_log("  [*] IntersectionObserverEntry -> intersectionRect[get]", {});return {} }},
  rootBounds: {get(){ v_console_log("  [*] IntersectionObserverEntry -> rootBounds[get]", {});return {} }},
  time: {get(){ v_console_log("  [*] IntersectionObserverEntry -> time[get]", 2881.790000014007);return 2881.790000014007 }},
  [Symbol.toStringTag]: {value:"IntersectionObserverEntry",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(IntersectionObserver.prototype, {
  unobserve: {value: v_saf(function unobserve(){v_console_log("  [*] IntersectionObserver -> unobserve[func]", [].slice.call(arguments));})},
  observe: {value: v_saf(function observe(){v_console_log("  [*] IntersectionObserver -> observe[func]", [].slice.call(arguments));})},
  [Symbol.toStringTag]: {value:"IntersectionObserver",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(DOMTokenList.prototype, {
  contains: {value: v_saf(function contains(){v_console_log("  [*] DOMTokenList -> contains[func]", [].slice.call(arguments));})},
  [Symbol.toStringTag]: {value:"DOMTokenList",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(Headers.prototype, {
  forEach: {value: v_saf(function forEach(){v_console_log("  [*] Headers -> forEach[func]", [].slice.call(arguments));})},
  [Symbol.toStringTag]: {value:"Headers",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(webkitURL.prototype, {
  searchParams: {get(){ v_console_log("  [*] webkitURL -> searchParams[get]", {});return {} }},
  pathname: {set(){ v_console_log("  [*] webkitURL -> pathname[set]", [].slice.call(arguments));return {} }},
  href: {get(){ v_console_log("  [*] webkitURL -> href[get]", "http://a/c%20d?a=1&c=3");return "http://a/c%20d?a=1&c=3" }},
  username: {get(){ v_console_log("  [*] webkitURL -> username[get]", "a");return "a" }},
  host: {get(){ v_console_log("  [*] webkitURL -> host[get]", "xn--e1aybc");return "xn--e1aybc" }},
  hash: {get(){ v_console_log("  [*] webkitURL -> hash[get]", "#б");return "#б" }},
  [Symbol.toStringTag]: {value:"webkitURL",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(WebKitMutationObserver.prototype, {
  observe: {value: v_saf(function observe(){v_console_log("  [*] WebKitMutationObserver -> observe[func]", [].slice.call(arguments));})},
  disconnect: {value: v_saf(function disconnect(){v_console_log("  [*] WebKitMutationObserver -> disconnect[func]", [].slice.call(arguments));})},
  [Symbol.toStringTag]: {value:"WebKitMutationObserver",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(Path2D.prototype, {
  moveTo: {value: v_saf(function moveTo(){v_console_log("  [*] Path2D -> moveTo[func]", [].slice.call(arguments));})},
  arc: {value: v_saf(function arc(){v_console_log("  [*] Path2D -> arc[func]", [].slice.call(arguments));})},
  lineTo: {value: v_saf(function lineTo(){v_console_log("  [*] Path2D -> lineTo[func]", [].slice.call(arguments));})},
  closePath: {value: v_saf(function closePath(){v_console_log("  [*] Path2D -> closePath[func]", [].slice.call(arguments));})},
  addPath: {value: v_saf(function addPath(){v_console_log("  [*] Path2D -> addPath[func]", [].slice.call(arguments));})},
  [Symbol.toStringTag]: {value:"Path2D",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(TextMetrics.prototype, {
  width: {get(){ v_console_log("  [*] TextMetrics -> width[get]", 24);return 24 }},
  [Symbol.toStringTag]: {value:"TextMetrics",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(Crypto.prototype, {
  [Symbol.toStringTag]: {value:"Crypto",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(RTCSessionDescription.prototype, {
  sdp: {get(){ v_console_log("  [*] RTCSessionDescription -> sdp[get]", "v=0\r\no=- 1756416289538183779 2 IN IP4 127.0.0.1\r\ns=-\r\nt=0 0\r\na=group:BUNDLE 0\r\na=msid-semantic: WMS\r\nm=application 9 UDP/DTLS/SCTP webrtc-datachannel\r\nc=IN IP4 0.0.0.0\r\na=ice-ufrag:gKkq\r\na=ice-pwd:jQeKVum8pPr4PM6P1zqd8M8Q\r\na=ice-options:trickle\r\na=fingerprint:sha-256 E6:88:2A:3F:EE:7B:87:CE:A2:AD:91:07:7B:EC:B6:AB:74:17:61:89:71:1E:87:EF:E3:29:15:9F:71:C5:05:10\r\na=setup:actpass\r\na=mid:0\r\na=sctp-port:5000\r\na=max-message-size:262144\r\n");return "v=0\r\no=- 1756416289538183779 2 IN IP4 127.0.0.1\r\ns=-\r\nt=0 0\r\na=group:BUNDLE 0\r\na=msid-semantic: WMS\r\nm=application 9 UDP/DTLS/SCTP webrtc-datachannel\r\nc=IN IP4 0.0.0.0\r\na=ice-ufrag:gKkq\r\na=ice-pwd:jQeKVum8pPr4PM6P1zqd8M8Q\r\na=ice-options:trickle\r\na=fingerprint:sha-256 E6:88:2A:3F:EE:7B:87:CE:A2:AD:91:07:7B:EC:B6:AB:74:17:61:89:71:1E:87:EF:E3:29:15:9F:71:C5:05:10\r\na=setup:actpass\r\na=mid:0\r\na=sctp-port:5000\r\na=max-message-size:262144\r\n" }},
  type: {get(){ v_console_log("  [*] RTCSessionDescription -> type[get]", "offer");return "offer" }},
  [Symbol.toStringTag]: {value:"RTCSessionDescription",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(PerformanceServerTiming.prototype, {
  toJSON: {value: v_saf(function toJSON(){v_console_log("  [*] PerformanceServerTiming -> toJSON[func]", [].slice.call(arguments));})},
  [Symbol.toStringTag]: {value:"PerformanceServerTiming",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(Selection.prototype, {
  rangeCount: {get(){ v_console_log("  [*] Selection -> rangeCount[get]", 0);return 0 }},
  [Symbol.toStringTag]: {value:"Selection",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(Node.prototype, {
  appendChild: {value: v_saf(function appendChild(){v_console_log("  [*] Node -> appendChild[func]", [].slice.call(arguments));})},
  removeChild: {value: v_saf(function removeChild(){v_console_log("  [*] Node -> removeChild[func]", [].slice.call(arguments));})},
  parentNode: {get(){ v_console_log("  [*] Node -> parentNode[get]", {});return {} }},
  textContent: {get(){ v_console_log("  [*] Node -> textContent[get]", "3");return "3" },set(){ v_console_log("  [*] Node -> textContent[set]", [].slice.call(arguments));return "3" }},
  childNodes: {get(){ v_console_log("  [*] Node -> childNodes[get]", {});return {} }},
  nodeType: {get(){ v_console_log("  [*] Node -> nodeType[get]", 1);return 1 }},
  insertBefore: {value: v_saf(function insertBefore(){v_console_log("  [*] Node -> insertBefore[func]", [].slice.call(arguments));})},
  nodeName: {get(){ v_console_log("  [*] Node -> nodeName[get]", "MAIN");return "MAIN" }},
  ownerDocument: {get(){ v_console_log("  [*] Node -> ownerDocument[get]", {});return {} }},
  firstChild: {get(){ v_console_log("  [*] Node -> firstChild[get]", {});return {} }},
  nextSibling: {get(){ v_console_log("  [*] Node -> nextSibling[get]", {});return {} }},
  nodeValue: {get(){ v_console_log("  [*] Node -> nodeValue[get]", "热点指数变化");return "热点指数变化" }},
  lastChild: {get(){ v_console_log("  [*] Node -> lastChild[get]", {});return {} }},
  ELEMENT_NODE: {"value":1,"writable":false,"enumerable":true,"configurable":false},
  ATTRIBUTE_NODE: {"value":2,"writable":false,"enumerable":true,"configurable":false},
  TEXT_NODE: {"value":3,"writable":false,"enumerable":true,"configurable":false},
  CDATA_SECTION_NODE: {"value":4,"writable":false,"enumerable":true,"configurable":false},
  ENTITY_REFERENCE_NODE: {"value":5,"writable":false,"enumerable":true,"configurable":false},
  ENTITY_NODE: {"value":6,"writable":false,"enumerable":true,"configurable":false},
  PROCESSING_INSTRUCTION_NODE: {"value":7,"writable":false,"enumerable":true,"configurable":false},
  COMMENT_NODE: {"value":8,"writable":false,"enumerable":true,"configurable":false},
  DOCUMENT_NODE: {"value":9,"writable":false,"enumerable":true,"configurable":false},
  DOCUMENT_TYPE_NODE: {"value":10,"writable":false,"enumerable":true,"configurable":false},
  DOCUMENT_FRAGMENT_NODE: {"value":11,"writable":false,"enumerable":true,"configurable":false},
  NOTATION_NODE: {"value":12,"writable":false,"enumerable":true,"configurable":false},
  DOCUMENT_POSITION_DISCONNECTED: {"value":1,"writable":false,"enumerable":true,"configurable":false},
  DOCUMENT_POSITION_PRECEDING: {"value":2,"writable":false,"enumerable":true,"configurable":false},
  DOCUMENT_POSITION_FOLLOWING: {"value":4,"writable":false,"enumerable":true,"configurable":false},
  DOCUMENT_POSITION_CONTAINS: {"value":8,"writable":false,"enumerable":true,"configurable":false},
  DOCUMENT_POSITION_CONTAINED_BY: {"value":16,"writable":false,"enumerable":true,"configurable":false},
  DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC: {"value":32,"writable":false,"enumerable":true,"configurable":false},
  [Symbol.toStringTag]: {value:"Node",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(UIEvent.prototype, {
  view: {get(){ v_console_log("  [*] UIEvent -> view[get]", {});return {} }},
  detail: {get(){ v_console_log("  [*] UIEvent -> detail[get]", 0);return 0 }},
  [Symbol.toStringTag]: {value:"UIEvent",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(XMLHttpRequestEventTarget.prototype, {
  onabort: {get(){ v_console_log("  [*] XMLHttpRequestEventTarget -> onabort[get]", {});return {} },set(){ v_console_log("  [*] XMLHttpRequestEventTarget -> onabort[set]", [].slice.call(arguments));return {} }},
  onerror: {get(){ v_console_log("  [*] XMLHttpRequestEventTarget -> onerror[get]", {});return {} },set(){ v_console_log("  [*] XMLHttpRequestEventTarget -> onerror[set]", [].slice.call(arguments));return {} }},
  onload: {get(){ v_console_log("  [*] XMLHttpRequestEventTarget -> onload[get]", {});return {} },set(){ v_console_log("  [*] XMLHttpRequestEventTarget -> onload[set]", [].slice.call(arguments));return {} }},
  onloadend: {get(){ v_console_log("  [*] XMLHttpRequestEventTarget -> onloadend[get]", {});return {} },set(){ v_console_log("  [*] XMLHttpRequestEventTarget -> onloadend[set]", [].slice.call(arguments));return {} }},
  onloadstart: {get(){ v_console_log("  [*] XMLHttpRequestEventTarget -> onloadstart[get]", {});return {} },set(){ v_console_log("  [*] XMLHttpRequestEventTarget -> onloadstart[set]", [].slice.call(arguments));return {} }},
  onprogress: {get(){ v_console_log("  [*] XMLHttpRequestEventTarget -> onprogress[get]", {});return {} },set(){ v_console_log("  [*] XMLHttpRequestEventTarget -> onprogress[set]", [].slice.call(arguments));return {} }},
  ontimeout: {get(){ v_console_log("  [*] XMLHttpRequestEventTarget -> ontimeout[get]", {});return {} },set(){ v_console_log("  [*] XMLHttpRequestEventTarget -> ontimeout[set]", [].slice.call(arguments));return {} }},
  [Symbol.toStringTag]: {value:"XMLHttpRequestEventTarget",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(RTCPeerConnection.prototype, {
  onicegatheringstatechange: {set(){ v_console_log("  [*] RTCPeerConnection -> onicegatheringstatechange[set]", [].slice.call(arguments)); }},
  onicecandidate: {set(){ v_console_log("  [*] RTCPeerConnection -> onicecandidate[set]", [].slice.call(arguments)); }},
  createDataChannel: {value: v_saf(function createDataChannel(){v_console_log("  [*] RTCPeerConnection -> createDataChannel[func]", [].slice.call(arguments));})},
  createOffer: {value: v_saf(function createOffer(){v_console_log("  [*] RTCPeerConnection -> createOffer[func]", [].slice.call(arguments));})},
  setLocalDescription: {value: v_saf(function setLocalDescription(){v_console_log("  [*] RTCPeerConnection -> setLocalDescription[func]", [].slice.call(arguments));})},
  iceGatheringState: {get(){ v_console_log("  [*] RTCPeerConnection -> iceGatheringState[get]", "complete");return "complete" }},
  close: {value: v_saf(function close(){v_console_log("  [*] RTCPeerConnection -> close[func]", [].slice.call(arguments));})},
  [Symbol.toStringTag]: {value:"RTCPeerConnection",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(BatteryManager.prototype, {
  charging: {get(){ v_console_log("  [*] BatteryManager -> charging[get]", true);return true }},
  level: {get(){ v_console_log("  [*] BatteryManager -> level[get]", 1);return 1 }},
  chargingTime: {get(){ v_console_log("  [*] BatteryManager -> chargingTime[get]", 0);return 0 }},
  dischargingTime: {get(){ v_console_log("  [*] BatteryManager -> dischargingTime[get]", null);return null }},
  [Symbol.toStringTag]: {value:"BatteryManager",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(PermissionStatus.prototype, {
  state: {get(){ v_console_log("  [*] PermissionStatus -> state[get]", "prompt");return "prompt" }},
  [Symbol.toStringTag]: {value:"PermissionStatus",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(RTCPeerConnectionIceEvent.prototype, {
  candidate: {get(){ v_console_log("  [*] RTCPeerConnectionIceEvent -> candidate[get]", {});return {} }},
  [Symbol.toStringTag]: {value:"RTCPeerConnectionIceEvent",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(ScreenOrientation.prototype, {
  angle: {get(){ v_console_log("  [*] ScreenOrientation -> angle[get]", 0);return 0 }},
  [Symbol.toStringTag]: {value:"ScreenOrientation",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(MessagePort.prototype, {
  onmessage: {set(){ v_console_log("  [*] MessagePort -> onmessage[set]", [].slice.call(arguments)); }},
  postMessage: {value: v_saf(function postMessage(){v_console_log("  [*] MessagePort -> postMessage[func]", [].slice.call(arguments));})},
  [Symbol.toStringTag]: {value:"MessagePort",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(PerformanceMark.prototype, {
  detail: {get(){ v_console_log("  [*] PerformanceMark -> detail[get]", {});return {} }},
  [Symbol.toStringTag]: {value:"PerformanceMark",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(Performance.prototype, {
  now: {value: v_saf(function now(){v_console_log("  [*] Performance -> now[func]", [].slice.call(arguments));})},
  timing: {get(){ v_console_log("  [*] Performance -> timing[get]", v_new(PerformanceTiming));return v_new(PerformanceTiming) }},
  getEntriesByName: {value: v_saf(function getEntriesByName(){v_console_log("  [*] Performance -> getEntriesByName[func]", [].slice.call(arguments));})},
  getEntriesByType: {value: v_saf(function getEntriesByType(){v_console_log("  [*] Performance -> getEntriesByType[func]", [].slice.call(arguments));if (arguments[0]=='resource'){return v_new(PerformanceResourceTiming)}})},
  [Symbol.toStringTag]: {value:"Performance",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(NetworkInformation.prototype, {
  effectiveType: {get(){ v_console_log("  [*] NetworkInformation -> effectiveType[get]", "4g");return "4g" }},
  onchange: {set(){ v_console_log("  [*] NetworkInformation -> onchange[set]", [].slice.call(arguments));return "4g" }},
  [Symbol.toStringTag]: {value:"NetworkInformation",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(CSSStyleSheet.prototype, {
  insertRule: {value: v_saf(function insertRule(){v_console_log("  [*] CSSStyleSheet -> insertRule[func]", [].slice.call(arguments));})},
  [Symbol.toStringTag]: {value:"CSSStyleSheet",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(DOMRect.prototype, {
  width: {get(){ v_console_log("  [*] DOMRect -> width[get]", 1691);return 1691 }},
  height: {get(){ v_console_log("  [*] DOMRect -> height[get]", 1756);return 1756 }},
  [Symbol.toStringTag]: {value:"DOMRect",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(MediaQueryList.prototype, {
  matches: {get(){ v_console_log("  [*] MediaQueryList -> matches[get]", true);return true }},
  [Symbol.toStringTag]: {value:"MediaQueryList",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(PerformanceResourceTiming.prototype, {
  fetchStart: {get(){ v_console_log("  [*] PerformanceResourceTiming -> fetchStart[get]", 12753.775000019232);return 12753.775000019232 }},
  responseEnd: {get(){ v_console_log("  [*] PerformanceResourceTiming -> responseEnd[get]", 12841.090000001714);return 12841.090000001714 }},
  toJSON: {value: v_saf(function toJSON(){v_console_log("  [*] PerformanceResourceTiming -> toJSON[func]", [].slice.call(arguments));})},
  initiatorType: {get(){ v_console_log("  [*] PerformanceResourceTiming -> initiatorType[get]", "xmlhttprequest");return "xmlhttprequest" }},
  [Symbol.toStringTag]: {value:"PerformanceResourceTiming",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(MessageEvent.prototype, {
  data: {get(){ v_console_log("  [*] MessageEvent -> data[get]", "[tea-sdk]ready");return "[tea-sdk]ready" }},
  [Symbol.toStringTag]: {value:"MessageEvent",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(LargestContentfulPaint.prototype, {
  renderTime: {get(){ v_console_log("  [*] LargestContentfulPaint -> renderTime[get]", 1230.204);return 1230.204 }},
  [Symbol.toStringTag]: {value:"LargestContentfulPaint",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(webkitRTCPeerConnection.prototype, {
  onicegatheringstatechange: {set(){ v_console_log("  [*] webkitRTCPeerConnection -> onicegatheringstatechange[set]", [].slice.call(arguments)); }},
  onicecandidate: {set(){ v_console_log("  [*] webkitRTCPeerConnection -> onicecandidate[set]", [].slice.call(arguments)); }},
  createDataChannel: {value: v_saf(function createDataChannel(){v_console_log("  [*] webkitRTCPeerConnection -> createDataChannel[func]", [].slice.call(arguments));})},
  createOffer: {value: v_saf(function createOffer(){v_console_log("  [*] webkitRTCPeerConnection -> createOffer[func]", [].slice.call(arguments));})},
  setLocalDescription: {value: v_saf(function setLocalDescription(){v_console_log("  [*] webkitRTCPeerConnection -> setLocalDescription[func]", [].slice.call(arguments));})},
  iceGatheringState: {get(){ v_console_log("  [*] webkitRTCPeerConnection -> iceGatheringState[get]", "complete");return "complete" }},
  close: {value: v_saf(function close(){v_console_log("  [*] webkitRTCPeerConnection -> close[func]", [].slice.call(arguments));})},
  [Symbol.toStringTag]: {value:"webkitRTCPeerConnection",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(LayoutShift.prototype, {
  hadRecentInput: {get(){ v_console_log("  [*] LayoutShift -> hadRecentInput[get]", false);return false }},
  value: {get(){ v_console_log("  [*] LayoutShift -> value[get]", 0.12373144093185241);return 0.12373144093185241 }},
  [Symbol.toStringTag]: {value:"LayoutShift",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(Document.prototype, {
  referrer: {get(){ v_console_log("  [*] Document -> referrer[get]", "");return "" }},
  createElement: {value: v_saf(function createElement(){v_console_log("  [*] Document -> createElement[func]", [].slice.call(arguments));return _createElement(arguments[0])})},
  createEvent: {value: v_saf(function createEvent(){v_console_log("  [*] Document -> createEvent[func]", [].slice.call(arguments));})},
  hidden: {get(){ v_console_log("  [*] Document -> hidden[get]", false);return false }},
  visibilityState: {get(){ v_console_log("  [*] Document -> visibilityState[get]", "hidden");return "hidden" }},
  characterSet: {get(){ v_console_log("  [*] Document -> characterSet[get]", "UTF-8");return "UTF-8" }},
  compatMode: {get(){ v_console_log("  [*] Document -> compatMode[get]", "CSS1Compat");return "CSS1Compat" }},
  all: {get(){ v_console_log("  [*] Document -> all[get]", {});return {} }},
  images: {get(){ v_console_log("  [*] Document -> images[get]", {});return {} }},
  documentElement: {get(){ v_console_log("  [*] Document -> documentElement[get]", document);return document }},
  readyState: {get(){ v_console_log("  [*] Document -> readyState[get]", "complete");return "complete" }},
  title: {get(){ v_console_log("  [*] Document -> title[get]", "算数指数-巨量算数");return "算数指数-巨量算数" }},
  createTextNode: {value: v_saf(function createTextNode(){v_console_log("  [*] Document -> createTextNode[func]", [].slice.call(arguments));})},
  implementation: {get(){ v_console_log("  [*] Document -> implementation[get]", {});return {} }},
  domain: {get(){ v_console_log("  [*] Document -> domain[get]", "trendinsight.oceanengine.com");return "trendinsight.oceanengine.com" }},
  activeElement: {get(){ v_console_log("  [*] Document -> activeElement[get]", {});return {} }},
  createElementNS: {value: v_saf(function createElementNS(){v_console_log("  [*] Document -> createElementNS[func]", [].slice.call(arguments));})},
  defaultView: {get(){ v_console_log("  [*] Document -> defaultView[get]", {});return {} }},
  hasFocus: {value: v_saf(function hasFocus(){v_console_log("  [*] Document -> hasFocus[func]", [].slice.call(arguments));})},
  currentScript: {get(){ v_console_log("  [*] Document -> currentScript[get]", {});return {} }},
  onreadystatechange: {get(){ v_console_log("  [*] Document -> onreadystatechange[get]", {});return {} }},
  onmouseenter: {get(){ v_console_log("  [*] Document -> onmouseenter[get]", {});return {} }},
  onmouseleave: {get(){ v_console_log("  [*] Document -> onmouseleave[get]", {});return {} }},
  getSelection: {value: v_saf(function getSelection(){v_console_log("  [*] Document -> getSelection[func]", [].slice.call(arguments));})},
  execCommand: {value: v_saf(function execCommand(){v_console_log("  [*] Document -> execCommand[func]", [].slice.call(arguments));})},
  onreadystatechange: {"enumerable":true,"configurable":true},
  onmouseenter: {"enumerable":true,"configurable":true},
  onmouseleave: {"enumerable":true,"configurable":true},
  [Symbol.toStringTag]: {value:"Document",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(MouseEvent.prototype, {
  buttons: {get(){ v_console_log("  [*] MouseEvent -> buttons[get]", 0);return 0 }},
  toElement: {get(){ v_console_log("  [*] MouseEvent -> toElement[get]", {});return {} }},
  fromElement: {get(){ v_console_log("  [*] MouseEvent -> fromElement[get]", {});return {} }},
  [Symbol.toStringTag]: {value:"MouseEvent",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(XMLHttpRequest.prototype, {
  UNSENT: {"value":0,"writable":false,"enumerable":true,"configurable":false},
  OPENED: {"value":1,"writable":false,"enumerable":true,"configurable":false},
  HEADERS_RECEIVED: {"value":2,"writable":false,"enumerable":true,"configurable":false},
  LOADING: {"value":3,"writable":false,"enumerable":true,"configurable":false},
  DONE: {"value":4,"writable":false,"enumerable":true,"configurable":false},
  _ac_intercepted: {"value":true,"writable":true,"enumerable":true,"configurable":true},
  [Symbol.toStringTag]: {value:"XMLHttpRequest",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(Element.prototype, {
  innerHTML: {set(){ v_console_log("  [*] Element -> innerHTML[set]", [].slice.call(arguments)); }},
  setAttribute: {value: v_saf(function setAttribute(){v_console_log("  [*] Element -> setAttribute[func]", [].slice.call(arguments));})},
  clientWidth: {get(){ v_console_log("  [*] Element -> clientWidth[get]", 1691);return 1691 }},
  clientHeight: {get(){ v_console_log("  [*] Element -> clientHeight[get]", 1756);return 1756 }},
  scrollTop: {get(){ v_console_log("  [*] Element -> scrollTop[get]", 0);return 0 }},
  getAttribute: {value: v_saf(function getAttribute(){v_console_log("  [*] Element -> getAttribute[func]", [].slice.call(arguments));})},
  classList: {get(){ v_console_log("  [*] Element -> classList[get]", {});return {} }},
  hasAttribute: {value: v_saf(function hasAttribute(){v_console_log("  [*] Element -> hasAttribute[func]", [].slice.call(arguments));})},
  children: {get(){ v_console_log("  [*] Element -> children[get]", {});return {} }},
  namespaceURI: {get(){ v_console_log("  [*] Element -> namespaceURI[get]", "http://www.w3.org/1999/xhtml");return "http://www.w3.org/1999/xhtml" }},
  tagName: {get(){ v_console_log("  [*] Element -> tagName[get]", this.v_tagName);return this.v_tagName }},
  scrollLeft: {get(){ v_console_log("  [*] Element -> scrollLeft[get]", 0);return 0 },set(){ v_console_log("  [*] Element -> scrollLeft[set]", [].slice.call(arguments));return 0 }},
  removeAttribute: {value: v_saf(function removeAttribute(){v_console_log("  [*] Element -> removeAttribute[func]", [].slice.call(arguments));})},
  querySelectorAll: {value: v_saf(function querySelectorAll(){v_console_log("  [*] Element -> querySelectorAll[func]", [].slice.call(arguments));})},
  getBoundingClientRect: {value: v_saf(function getBoundingClientRect(){v_console_log("  [*] Element -> getBoundingClientRect[func]", [].slice.call(arguments));})},
  remove: {value: v_saf(function remove(){v_console_log("  [*] Element -> remove[func]", [].slice.call(arguments));})},
  scrollTo: {value: v_saf(function scrollTo(){v_console_log("  [*] Element -> scrollTo[func]", [].slice.call(arguments));})},
  scrollWidth: {get(){ v_console_log("  [*] Element -> scrollWidth[get]", 1707);return 1707 }},
  scrollHeight: {get(){ v_console_log("  [*] Element -> scrollHeight[get]", 947);return 947 }},
  scroll: {value: v_saf(function scroll(){v_console_log("  [*] Element -> scroll[func]", [].slice.call(arguments));})},
  [Symbol.toStringTag]: {value:"Element",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(PerformanceNavigationTiming.prototype, {
  toJSON: {value: v_saf(function toJSON(){v_console_log("  [*] PerformanceNavigationTiming -> toJSON[func]", [].slice.call(arguments));})},
  [Symbol.toStringTag]: {value:"PerformanceNavigationTiming",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(HTMLElement.prototype, {
  onload: {get(){ v_console_log("  [*] HTMLElement -> onload[get]", {});return {} },set(){ v_console_log("  [*] HTMLElement -> onload[set]", [].slice.call(arguments));return {} }},
  style: {get(){ v_console_log("  [*] HTMLElement -> style[get]", this.v_style);return this.v_style }},
  offsetWidth: {get(){ v_console_log("  [*] HTMLElement -> offsetWidth[get]", 99);return 99 }},
  offsetHeight: {get(){ v_console_log("  [*] HTMLElement -> offsetHeight[get]", 72);return 72 }},
  onerror: {get(){ v_console_log("  [*] HTMLElement -> onerror[get]", {});return {} },set(){ v_console_log("  [*] HTMLElement -> onerror[set]", [].slice.call(arguments));return {} }},
  onclick: {get(){ v_console_log("  [*] HTMLElement -> onclick[get]", {});return {} },set(){ v_console_log("  [*] HTMLElement -> onclick[set]", [].slice.call(arguments));return {} }},
  contentEditable: {get(){ v_console_log("  [*] HTMLElement -> contentEditable[get]", "inherit");return "inherit" }},
  dataset: {get(){ v_console_log("  [*] HTMLElement -> dataset[get]", {});return {} }},
  blur: {value: v_saf(function blur(){v_console_log("  [*] HTMLElement -> blur[func]", [].slice.call(arguments));})},
  onmouseenter: {get(){ v_console_log("  [*] HTMLElement -> onmouseenter[get]", {});return {} }},
  onmouseleave: {get(){ v_console_log("  [*] HTMLElement -> onmouseleave[get]", {});return {} }},
  onmouseenter: {"enumerable":true,"configurable":true},
  onmouseleave: {"enumerable":true,"configurable":true},
  [Symbol.toStringTag]: {value:"HTMLElement",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(PointerEvent.prototype, {
  pointerId: {get(){ v_console_log("  [*] PointerEvent -> pointerId[get]", 1);return 1 }},
  width: {get(){ v_console_log("  [*] PointerEvent -> width[get]", 1);return 1 }},
  height: {get(){ v_console_log("  [*] PointerEvent -> height[get]", 1);return 1 }},
  pressure: {get(){ v_console_log("  [*] PointerEvent -> pressure[get]", 0);return 0 }},
  tangentialPressure: {get(){ v_console_log("  [*] PointerEvent -> tangentialPressure[get]", 0);return 0 }},
  tiltX: {get(){ v_console_log("  [*] PointerEvent -> tiltX[get]", 0);return 0 }},
  tiltY: {get(){ v_console_log("  [*] PointerEvent -> tiltY[get]", 0);return 0 }},
  twist: {get(){ v_console_log("  [*] PointerEvent -> twist[get]", 0);return 0 }},
  pointerType: {get(){ v_console_log("  [*] PointerEvent -> pointerType[get]", "mouse");return "mouse" }},
  isPrimary: {get(){ v_console_log("  [*] PointerEvent -> isPrimary[get]", true);return true }},
  [Symbol.toStringTag]: {value:"PointerEvent",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(HTMLCanvasElement.prototype, {
  getContext: {value: v_saf(function getContext(){v_console_log("  [*] HTMLCanvasElement -> getContext[func]", [].slice.call(arguments));if (arguments[0]=='2d'){var r = v_new(CanvasRenderingContext2D); return r}; if (arguments[0]=='webgl' || arguments[0]=='experimental-webgl'){var r = v_new(WebGLRenderingContext); r._canvas = this; return r}; return null})},
  width: {get(){ v_console_log("  [*] HTMLCanvasElement -> width[get]", 2536);return 2536 },set(){ v_console_log("  [*] HTMLCanvasElement -> width[set]", [].slice.call(arguments));return 2536 }},
  height: {get(){ v_console_log("  [*] HTMLCanvasElement -> height[get]", 2634);return 2634 },set(){ v_console_log("  [*] HTMLCanvasElement -> height[set]", [].slice.call(arguments));return 2634 }},
  [Symbol.toStringTag]: {value:"HTMLCanvasElement",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(HTMLImageElement.prototype, {
  src: {set(){ v_console_log("  [*] HTMLImageElement -> src[set]", [].slice.call(arguments)); }},
  [Symbol.toStringTag]: {value:"HTMLImageElement",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(HTMLScriptElement.prototype, {
  text: {set(){ v_console_log("  [*] HTMLScriptElement -> text[set]", [].slice.call(arguments)); }},
  src: {get(){ v_console_log("  [*] HTMLScriptElement -> src[get]", "https://lf1-cdn-tos.bytegoofy.com/goofy/count/fe/count-fe/static/js/8909.e88530fc.js");return "https://lf1-cdn-tos.bytegoofy.com/goofy/count/fe/count-fe/static/js/8909.e88530fc.js" },set(){ v_console_log("  [*] HTMLScriptElement -> src[set]", [].slice.call(arguments));return "https://lf1-cdn-tos.bytegoofy.com/goofy/count/fe/count-fe/static/js/8909.e88530fc.js" }},
  charset: {set(){ v_console_log("  [*] HTMLScriptElement -> charset[set]", [].slice.call(arguments));return "https://lf1-cdn-tos.bytegoofy.com/goofy/count/fe/count-fe/static/js/8909.e88530fc.js" }},
  crossOrigin: {set(){ v_console_log("  [*] HTMLScriptElement -> crossOrigin[set]", [].slice.call(arguments));return "https://lf1-cdn-tos.bytegoofy.com/goofy/count/fe/count-fe/static/js/8909.e88530fc.js" }},
  async: {set(){ v_console_log("  [*] HTMLScriptElement -> async[set]", [].slice.call(arguments));return "https://lf1-cdn-tos.bytegoofy.com/goofy/count/fe/count-fe/static/js/8909.e88530fc.js" }},
  [Symbol.toStringTag]: {value:"HTMLScriptElement",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(HTMLLinkElement.prototype, {
  rel: {get(){ v_console_log("  [*] HTMLLinkElement -> rel[get]", "shortcut icon");return "shortcut icon" },set(){ v_console_log("  [*] HTMLLinkElement -> rel[set]", [].slice.call(arguments));return "shortcut icon" }},
  type: {set(){ v_console_log("  [*] HTMLLinkElement -> type[set]", [].slice.call(arguments));return "shortcut icon" }},
  href: {get(){ v_console_log("  [*] HTMLLinkElement -> href[get]", "https://lf1-cdn-tos.bytegoofy.com/goofy/count/fe/count-fe/static/css/8909.12609bef.css");return "https://lf1-cdn-tos.bytegoofy.com/goofy/count/fe/count-fe/static/css/8909.12609bef.css" },set(){ v_console_log("  [*] HTMLLinkElement -> href[set]", [].slice.call(arguments));return "https://lf1-cdn-tos.bytegoofy.com/goofy/count/fe/count-fe/static/css/8909.12609bef.css" }},
  crossOrigin: {set(){ v_console_log("  [*] HTMLLinkElement -> crossOrigin[set]", [].slice.call(arguments));return "https://lf1-cdn-tos.bytegoofy.com/goofy/count/fe/count-fe/static/css/8909.12609bef.css" }},
  [Symbol.toStringTag]: {value:"HTMLLinkElement",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(HTMLAnchorElement.prototype, {
  href: {get(){ v_console_log("  [*] HTMLAnchorElement -> href[get]", "https://lf3-short.ibytedapm.com/slardar/fe/sdk-web/plugins/blank-screen.0.9.1.js");return "https://lf3-short.ibytedapm.com/slardar/fe/sdk-web/plugins/blank-screen.0.9.1.js" },set(){ v_console_log("  [*] HTMLAnchorElement -> href[set]", [].slice.call(arguments));return "https://lf3-short.ibytedapm.com/slardar/fe/sdk-web/plugins/blank-screen.0.9.1.js" }},
  protocol: {get(){ v_console_log("  [*] HTMLAnchorElement -> protocol[get]", "https:");return "https:" }},
  host: {get(){ v_console_log("  [*] HTMLAnchorElement -> host[get]", "trendinsight.oceanengine.com");return "trendinsight.oceanengine.com" }},
  search: {get(){ v_console_log("  [*] HTMLAnchorElement -> search[get]", "");return "" }},
  hash: {get(){ v_console_log("  [*] HTMLAnchorElement -> hash[get]", "");return "" }},
  hostname: {get(){ v_console_log("  [*] HTMLAnchorElement -> hostname[get]", "lf3-short.ibytedapm.com");return "lf3-short.ibytedapm.com" }},
  port: {get(){ v_console_log("  [*] HTMLAnchorElement -> port[get]", "");return "" }},
  pathname: {get(){ v_console_log("  [*] HTMLAnchorElement -> pathname[get]", "/slardar/fe/sdk-web/plugins/blank-screen.0.9.1.js");return "/slardar/fe/sdk-web/plugins/blank-screen.0.9.1.js" }},
  [Symbol.toStringTag]: {value:"HTMLAnchorElement",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(HTMLStyleElement.prototype, {
  sheet: {get(){ v_console_log("  [*] HTMLStyleElement -> sheet[get]", {});return {} }},
  type: {set(){ v_console_log("  [*] HTMLStyleElement -> type[set]", [].slice.call(arguments));return {} }},
  [Symbol.toStringTag]: {value:"HTMLStyleElement",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(HTMLIFrameElement.prototype, {
  srcdoc: {set(){ v_console_log("  [*] HTMLIFrameElement -> srcdoc[set]", [].slice.call(arguments)); }},
  contentWindow: {get(){ v_console_log("  [*] HTMLIFrameElement -> contentWindow[get]", {});return {} }},
  [Symbol.toStringTag]: {value:"HTMLIFrameElement",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(HTMLMediaElement.prototype, {
  canPlayType: {value: v_saf(function canPlayType(){v_console_log("  [*] HTMLMediaElement -> canPlayType[func]", [].slice.call(arguments));})},
  NETWORK_EMPTY: {"value":0,"writable":false,"enumerable":true,"configurable":false},
  NETWORK_IDLE: {"value":1,"writable":false,"enumerable":true,"configurable":false},
  NETWORK_LOADING: {"value":2,"writable":false,"enumerable":true,"configurable":false},
  NETWORK_NO_SOURCE: {"value":3,"writable":false,"enumerable":true,"configurable":false},
  HAVE_NOTHING: {"value":0,"writable":false,"enumerable":true,"configurable":false},
  HAVE_METADATA: {"value":1,"writable":false,"enumerable":true,"configurable":false},
  HAVE_CURRENT_DATA: {"value":2,"writable":false,"enumerable":true,"configurable":false},
  HAVE_FUTURE_DATA: {"value":3,"writable":false,"enumerable":true,"configurable":false},
  HAVE_ENOUGH_DATA: {"value":4,"writable":false,"enumerable":true,"configurable":false},
  [Symbol.toStringTag]: {value:"HTMLMediaElement",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(HTMLInputElement.prototype, {
  type: {get(){ v_console_log("  [*] HTMLInputElement -> type[get]", "text");return "text" }},
  value: {get(){ v_console_log("  [*] HTMLInputElement -> value[get]", "");return "" }},
  defaultValue: {get(){ v_console_log("  [*] HTMLInputElement -> defaultValue[get]", "");return "" },set(){ v_console_log("  [*] HTMLInputElement -> defaultValue[set]", [].slice.call(arguments));return "" }},
  name: {get(){ v_console_log("  [*] HTMLInputElement -> name[get]", "");return "" }},
  defaultChecked: {set(){ v_console_log("  [*] HTMLInputElement -> defaultChecked[set]", [].slice.call(arguments));return "" }},
  [Symbol.toStringTag]: {value:"HTMLInputElement",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(HTMLTextAreaElement.prototype, {
  value: {set(){ v_console_log("  [*] HTMLTextAreaElement -> value[set]", [].slice.call(arguments)); }},
  select: {value: v_saf(function select(){v_console_log("  [*] HTMLTextAreaElement -> select[func]", [].slice.call(arguments));})},
  [Symbol.toStringTag]: {value:"HTMLTextAreaElement",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(Window.prototype, {
  TEMPORARY: {"value":0,"writable":false,"enumerable":true,"configurable":false},
  PERSISTENT: {"value":1,"writable":false,"enumerable":true,"configurable":false},
  [Symbol.toStringTag]: {value:"Window",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(HTMLDocument.prototype, {
  [Symbol.toStringTag]: {value:"HTMLDocument",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(HTMLHeadElement.prototype, {
  [Symbol.toStringTag]: {value:"HTMLHeadElement",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(HTMLBodyElement.prototype, {
  [Symbol.toStringTag]: {value:"HTMLBodyElement",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(Location.prototype, {
  [Symbol.toStringTag]: {value:"Location",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(PerformanceElementTiming.prototype, {
  [Symbol.toStringTag]: {value:"PerformanceElementTiming",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(PerformanceEventTiming.prototype, {
  [Symbol.toStringTag]: {value:"PerformanceEventTiming",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(PerformanceLongTaskTiming.prototype, {
  [Symbol.toStringTag]: {value:"PerformanceLongTaskTiming",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(PerformanceMeasure.prototype, {
  [Symbol.toStringTag]: {value:"PerformanceMeasure",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(PerformanceNavigation.prototype, {
  TYPE_NAVIGATE: {"value":0,"writable":false,"enumerable":true,"configurable":false},
  TYPE_RELOAD: {"value":1,"writable":false,"enumerable":true,"configurable":false},
  TYPE_BACK_FORWARD: {"value":2,"writable":false,"enumerable":true,"configurable":false},
  TYPE_RESERVED: {"value":255,"writable":false,"enumerable":true,"configurable":false},
  [Symbol.toStringTag]: {value:"PerformanceNavigation",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(PerformancePaintTiming.prototype, {
  [Symbol.toStringTag]: {value:"PerformancePaintTiming",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(HTMLUnknownElement.prototype, {
  [Symbol.toStringTag]: {value:"HTMLUnknownElement",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(Touch.prototype, {
  [Symbol.toStringTag]: {value:"Touch",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(TouchEvent.prototype, {
  [Symbol.toStringTag]: {value:"TouchEvent",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(HTMLDivElement.prototype, {
  [Symbol.toStringTag]: {value:"HTMLDivElement",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(HTMLHtmlElement.prototype, {
  [Symbol.toStringTag]: {value:"HTMLHtmlElement",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(HTMLTitleElement.prototype, {
  [Symbol.toStringTag]: {value:"HTMLTitleElement",writable:false,enumerable:false,configurable:true},
})




if (typeof __dirname != 'undefined'){ __dirname = undefined }
if (typeof __filename != 'undefined'){ __filename = undefined }
if (typeof require != 'undefined'){ require = undefined }
if (typeof exports != 'undefined'){ exports = undefined }
if (typeof module != 'undefined'){ module = undefined }
if (typeof Buffer != 'undefined'){ Buffer = undefined }
var __globalThis__ = typeof global != 'undefined' ? global : this
var window = new Proxy(v_new(Window), {
  get(a,b){ return a[b] || __globalThis__[b] },
  set(a,b,c){
    if (b == 'onclick' && typeof c == 'function') { window.addEventListener('click', c) }
    if (b == 'onmousedown' && typeof c == 'function') { window.addEventListener('mousedown', c) }
    if (b == 'onmouseup' && typeof c == 'function') { window.addEventListener('mouseup', c) }
    __globalThis__[b] = a[b] = c
  },
})
var v_hasOwnProperty = Object.prototype.hasOwnProperty
Object.prototype.hasOwnProperty = v_saf(function hasOwnProperty(){
  if (this == window){ return v_hasOwnProperty.apply(__globalThis__, arguments) }
  return v_hasOwnProperty.apply(this, arguments)
})
Object.defineProperties(__globalThis__, {[Symbol.toStringTag]:{value:'Window'}})
Object.defineProperties(__globalThis__, Object.getOwnPropertyDescriptors(window))
Object.setPrototypeOf(__globalThis__, Object.getPrototypeOf(window))
window.parent = window
window.top = window
window.frames = window
window.self = window
window.document = v_new(HTMLDocument)
window.location = v_new(Location)
window.history = v_new(History)
window.navigator = v_new(Navigator)
window.screen = v_new(Screen)
window.clientInformation = navigator
window.performance = v_new(Performance)
window.crypto = v_new(Crypto)
window.sessionStorage = v_new(Storage)
window.localStorage = v_new(Storage)
window.w0_0x501e9a = window
function _createElement(name){
  var htmlmap = {"HTMLElement":["abbr","address","article","aside","b","bdi","bdo","cite","code","dd","dfn","dt","em","figcaption","figure","footer","header","hgroup","i","kbd","main","mark","nav","noscript","rp","rt","ruby","s","samp","section","small","strong","sub","summary","sup","u","var","wbr"],"HTMLCanvasElement":["canvas"],"HTMLImageElement":["img"],"HTMLScriptElement":["script"],"HTMLLinkElement":["link"],"HTMLAnchorElement":["a"],"HTMLStyleElement":["style"],"HTMLIFrameElement":["iframe"],"HTMLMediaElement":[],"HTMLInputElement":["input"],"HTMLTextAreaElement":["textarea"],"HTMLHeadElement":["head"],"HTMLBodyElement":["body"],"HTMLUnknownElement":[]}
  var ret, htmlmapkeys = Object.keys(htmlmap)
  name = name.toLocaleLowerCase()
  for (var i = 0; i < htmlmapkeys.length; i++) {
    if (htmlmap[htmlmapkeys[i]].indexOf(name) != -1){
      ret = v_new(window[htmlmapkeys[i]])
      break
    }
  }
  if (!ret){ ret = v_new(HTMLUnknownElement) }
  if (typeof CSSStyleDeclaration != 'undefined') { ret.v_style = v_new(CSSStyleDeclaration) }
  ret.v_tagName = name.toUpperCase()
  return ret
}
function init_cookie(cookie){
  var cache = (cookie || "").trim();
  if (!cache){
    cache = ''
  }else if (cache.charAt(cache.length-1) != ';'){
    cache += '; '
  }else{
    cache += ' '
  }
  Object.defineProperty(Document.prototype, 'cookie', {
    get: function() {
      var r = cache.slice(0,cache.length-2);
      v_console_log('  [*] document -> cookie[get]', r)
      return r
    },
    set: function(c) {
      v_console_log('  [*] document -> cookie[set]', c)
      var ncookie = c.split(";")[0].split("=");
      if (!ncookie.slice(1).join('')){
        return c
      }
      var key = ncookie[0].trim()
      var val = ncookie.slice(1).join('').trim()
      var newc = key+'='+val
      var flag = false;
      var temp = cache.split("; ").map(function(a) {
        if (a.split("=")[0] === key) {
          flag = true;
          return newc;
        }
        return a;
      })
      cache = temp.join("; ");
      if (!flag) {
        cache += newc + "; ";
      }
      return cache;
    }
  });
}
function v_hook_href(obj, name, initurl){
  var r = Object.defineProperty(obj, 'href', {
    get: function(){
      if (!(this.protocol) && !(this.host)){
        r = ''
      }else{
        r = this.protocol + "//" + this.host + (this.port ? ":" + this.port : "") + this.pathname + this.search + this.hash;
      }
      v_console_log(`  [*] ${name||obj.constructor.name} -> href[get]:`, JSON.stringify(r))
      return r
    },
    set: function(href){
      href = href.trim()
      v_console_log(`  [*] ${name||obj.constructor.name} -> href[set]:`, JSON.stringify(href))
      if (href.startsWith("http://") || href.startsWith("https://")){/*ok*/}
      else if(href.startsWith("//")){ href = (this.protocol?this.protocol:'http:') + href}
      else{ href = this.protocol+"//"+this.host + (this.port?":"+this.port:"") + '/' + ((href[0]=='/')?href.slice(1):href) }
      var a = href.match(/([^:]+:)\/\/([^/:?#]+):?(\d+)?([^?#]*)?(\?[^#]*)?(#.*)?/);
      this.protocol = a[1] ? a[1] : "";
      this.host     = a[2] ? a[2] : "";
      this.port     = a[3] ? a[3] : "";
      this.pathname = a[4] ? a[4] : "";
      this.search   = a[5] ? a[5] : "";
      this.hash     = a[6] ? a[6] : "";
      this.hostname = this.host;
      this.origin   = this.protocol + "//" + this.host + (this.port ? ":" + this.port : "");
    }
  });
  if (initurl && initurl.trim()){ var temp=v_new_toggle; v_new_toggle = true; r.href = initurl; v_new_toggle = temp; }
  return r
}
function v_hook_storage(){
  Storage.prototype.clear      = v_saf(function(){          v_console_log(`  [*] Storage -> clear[func]:`); var self=this;Object.keys(self).forEach(function (key) { delete self[key]; }); }, 'clear')
  Storage.prototype.getItem    = v_saf(function(key){       v_console_log(`  [*] Storage -> getItem[func]:`, key); var r = (this.hasOwnProperty(key)?String(this[key]):null); return r}, 'getItem')
  Storage.prototype.setItem    = v_saf(function(key, val){  v_console_log(`  [*] Storage -> setItem[func]:`, key, val); this[key] = (val === undefined)?null:String(val) }, 'setItem')
  Storage.prototype.key        = v_saf(function(key){       v_console_log(`  [*] Storage -> key[func]:`, key); return Object.keys(this)[key||0];} , 'key')
  Storage.prototype.removeItem = v_saf(function(key){       v_console_log(`  [*] Storage -> removeItem[func]:`, key); delete this[key];}, 'removeItem')
  Object.defineProperty(Storage.prototype, 'length', {get: function(){
    if(this===Storage.prototype){ throw TypeError('Illegal invocation') }return Object.keys(this).length
  }})
  window.sessionStorage = new Proxy(sessionStorage,{ set:function(a,b,c){ v_console_log(`  [*] Storage -> [set]:`, b, c); return a[b]=String(c)}, get:function(a,b){ v_console_log(`  [*] Storage -> [get]:`, b, a[b]); return a[b]},})
  window.localStorage = new Proxy(localStorage,{ set:function(a,b,c){ v_console_log(`  [*] Storage -> [set]:`, b, c); return a[b]=String(c)}, get:function(a,b){ v_console_log(`  [*] Storage -> [get]:`, b, a[b]); return a[b]},})
}
function v_init_document(){
  Document.prototype.getElementById = v_saf(function getElementById(name){ var r = v_getele(name, 'getElementById'); v_console_log('  [*] Document -> getElementById', name, r); return r })
  Document.prototype.querySelector = v_saf(function querySelector(name){ var r = v_getele(name, 'querySelector'); v_console_log('  [*] Document -> querySelector', name, r); return r })
  Document.prototype.getElementsByClassName = v_saf(function getElementsByClassName(name){ var r = v_geteles(name, 'getElementsByClassName'); v_console_log('  [*] Document -> getElementsByClassName', name, r); return r })
  Document.prototype.getElementsByName = v_saf(function getElementsByName(name){ var r = v_geteles(name, 'getElementsByName'); v_console_log('  [*] Document -> getElementsByName', name, r); return r })
  Document.prototype.getElementsByTagName = v_saf(function getElementsByTagName(name){ var r = v_geteles(name, 'getElementsByTagName'); v_console_log('  [*] Document -> getElementsByTagName', name, r); return r })
  Document.prototype.getElementsByTagNameNS = v_saf(function getElementsByTagNameNS(name){ var r = v_geteles(name, 'getElementsByTagNameNS'); v_console_log('  [*] Document -> getElementsByTagNameNS', name, r); return r })
  Document.prototype.querySelectorAll = v_saf(function querySelectorAll(name){ var r = v_geteles(name, 'querySelectorAll'); v_console_log('  [*] Document -> querySelectorAll', name, r); return r })
  var v_head = v_new(HTMLHeadElement)
  var v_body = v_new(HTMLBodyElement)
  Object.defineProperties(Document.prototype, {
    head: {get(){ v_console_log("  [*] Document -> head[get]", v_head);return v_head }},
    body: {get(){ v_console_log("  [*] Document -> body[get]", v_body);return v_body }},
  })
}
function v_init_canvas(){
  HTMLCanvasElement.prototype.getContext = function(){if (arguments[0]=='2d'){var r = v_new(CanvasRenderingContext2D); return r}; if (arguments[0]=='webgl' || arguments[0]=='experimental-webgl'){var r = v_new(WebGLRenderingContext); r._canvas = this; return r}; return null}
  HTMLCanvasElement.prototype.toDataURL = function(){return "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAACWCAYAAABkW7XSAAAEYklEQVR4Xu3UAQkAAAwCwdm/9HI83BLIOdw5AgQIRAQWySkmAQIEzmB5AgIEMgIGK1OVoAQIGCw/QIBARsBgZaoSlAABg+UHCBDICBisTFWCEiBgsPwAAQIZAYOVqUpQAgQMlh8gQCAjYLAyVQlKgIDB8gMECGQEDFamKkEJEDBYfoAAgYyAwcpUJSgBAgbLDxAgkBEwWJmqBCVAwGD5AQIEMgIGK1OVoAQIGCw/QIBARsBgZaoSlAABg+UHCBDICBisTFWCEiBgsPwAAQIZAYOVqUpQAgQMlh8gQCAjYLAyVQlKgIDB8gMECGQEDFamKkEJEDBYfoAAgYyAwcpUJSgBAgbLDxAgkBEwWJmqBCVAwGD5AQIEMgIGK1OVoAQIGCw/QIBARsBgZaoSlAABg+UHCBDICBisTFWCEiBgsPwAAQIZAYOVqUpQAgQMlh8gQCAjYLAyVQlKgIDB8gMECGQEDFamKkEJEDBYfoAAgYyAwcpUJSgBAgbLDxAgkBEwWJmqBCVAwGD5AQIEMgIGK1OVoAQIGCw/QIBARsBgZaoSlAABg+UHCBDICBisTFWCEiBgsPwAAQIZAYOVqUpQAgQMlh8gQCAjYLAyVQlKgIDB8gMECGQEDFamKkEJEDBYfoAAgYyAwcpUJSgBAgbLDxAgkBEwWJmqBCVAwGD5AQIEMgIGK1OVoAQIGCw/QIBARsBgZaoSlAABg+UHCBDICBisTFWCEiBgsPwAAQIZAYOVqUpQAgQMlh8gQCAjYLAyVQlKgIDB8gMECGQEDFamKkEJEDBYfoAAgYyAwcpUJSgBAgbLDxAgkBEwWJmqBCVAwGD5AQIEMgIGK1OVoAQIGCw/QIBARsBgZaoSlAABg+UHCBDICBisTFWCEiBgsPwAAQIZAYOVqUpQAgQMlh8gQCAjYLAyVQlKgIDB8gMECGQEDFamKkEJEDBYfoAAgYyAwcpUJSgBAgbLDxAgkBEwWJmqBCVAwGD5AQIEMgIGK1OVoAQIGCw/QIBARsBgZaoSlAABg+UHCBDICBisTFWCEiBgsPwAAQIZAYOVqUpQAgQMlh8gQCAjYLAyVQlKgIDB8gMECGQEDFamKkEJEDBYfoAAgYyAwcpUJSgBAgbLDxAgkBEwWJmqBCVAwGD5AQIEMgIGK1OVoAQIGCw/QIBARsBgZaoSlAABg+UHCBDICBisTFWCEiBgsPwAAQIZAYOVqUpQAgQMlh8gQCAjYLAyVQlKgIDB8gMECGQEDFamKkEJEDBYfoAAgYyAwcpUJSgBAgbLDxAgkBEwWJmqBCVAwGD5AQIEMgIGK1OVoAQIGCw/QIBARsBgZaoSlAABg+UHCBDICBisTFWCEiBgsPwAAQIZAYOVqUpQAgQMlh8gQCAjYLAyVQlKgIDB8gMECGQEDFamKkEJEDBYfoAAgYyAwcpUJSgBAgbLDxAgkBEwWJmqBCVAwGD5AQIEMgIGK1OVoAQIGCw/QIBARsBgZaoSlACBB1YxAJfjJb2jAAAAAElFTkSuQmCC"}
}
var v_start_stamp = +new Date
var v_fake_stamp = +new Date
function v_init_event_target(){
  v_events = {}
  function add_event(_this, x){
    if (!v_events[x[0]]){
      v_events[x[0]] = []
    }
    v_events[x[0]].push([_this, x[1].bind(_this)])
  }
  function _mk_mouse_event(type, canBubble, cancelable, view, detail, screenX, screenY, clientX, clientY, ctrlKey, altKey, shiftKey, metaKey, button, relatedTarget){
    if (type == 'click'){
      var m = new v_saf(function PointerEvent(){})
      m.pointerType = "mouse"
    }else{
      var m = new v_saf(function MouseEvent(){})
    }
    m.isTrusted = true
    m.type = type
    m.canBubble = canBubble
    m.cancelable = cancelable
    m.view = view
    m.detail = detail
    m.screenX = screenX; m.movementX = screenX
    m.screenY = screenY; m.movementY = screenY
    m.clientX = clientX; m.layerX = clientX; m.offsetX = clientX; m.pageX = clientX; m.x = clientX;
    m.clientY = clientY; m.layerY = clientY; m.offsetY = clientY; m.pageY = clientY; m.y = clientY;
    m.ctrlKey = ctrlKey
    m.altKey = altKey
    m.shiftKey = shiftKey
    m.metaKey = metaKey
    m.button = button
    m.relatedTarget = relatedTarget
    return m
  }
  function make_mouse(type, x, y){
    return _mk_mouse_event(type, true, true, window, 0, 0, 0, x, y, false, false, false, false, 0, null)
  }
  function mouse_click(x, y){
    for (var i = 0; i < (v_events['click'] || []).length; i++) { v_events['click'][i][1](make_mouse('click', x, y)) }
    for (var i = 0; i < (v_events['mousedown'] || []).length; i++) { v_events['mousedown'][i][1](make_mouse('mousedown', x, y)) }
    for (var i = 0; i < (v_events['mouseup'] || []).length; i++) { v_events['mouseup'][i][1](make_mouse('mouseup', x, y)) }
  }
  var offr = Math.random()
  function make_touch(_this, type, x, y, timeStamp){
    var offx = Math.random()
    var offy = Math.random()
    var t = v_new(new v_saf(function Touch(){}))
    t = clientX = offx + x
    t = clientY = offy + y
    t = force = 1
    t = identifier = 0
    t = pageX = offx + x
    t = pageY = offy + y
    t = radiusX = 28 + offr
    t = radiusY = 28 + offr
    t = rotationAngle = 0
    t = screenX = 0
    t = screenY = 0
    var e = v_new(new v_saf(function TouchEvent(){}))
    e.isTrusted = true
    e.altKey = false
    e.bubbles = true
    e.cancelBubble = false
    e.cancelable = false
    e.changedTouches = e.targetTouches = e.touches = [t]
    e.composed = true
    e.ctrlKey = false
    e.currentTarget = null
    e.defaultPrevented = false
    e.detail = 0
    e.eventPhase = 0
    e.metaKey = false
    e.path = _this == window ? [window] : [_this, window]
    e.returnValue = true
    e.shiftKey = false
    e.sourceCapabilities = new v_saf(function InputDeviceCapabilities(){this.firesTouchEvents = true})
    e.srcElement = _this
    e.target = _this
    e.type = type
    e.timeStamp = timeStamp == undefined ? (new Date - v_start_stamp) : ((v_fake_stamp += Math.random()*20) - v_start_stamp)
    e.view = window
    e.which = 0
    return e
  }
  function make_trace(x1, y1, x2, y2){
    // 贝塞尔曲线
    function step_len(x1, y1, x2, y2){
      var ln = ((x2 - x1) ** 2 + (y2 - y1) ** 2) ** 0.5
      return (ln / 10) ^ 0
    }
    var slen = step_len(x1, y1, x2, y2)
    if (slen < 3){
      return []
    }
    function factorial(x){
      for(var y = 1; x > 1;  x--) {
        y *= x
      }
      return y;
    }
    var lp = Math.random()
    var rp = Math.random()
    var xx1 = (x1 + (x2 - x1) / 12 * (4-lp*4)) ^ 0
    var yy1 = (y1 + (y2 - y1) / 12 * (8+lp*4)) ^ 0
    var xx2 = (x1 + (x2 - x1) / 12 * (8+rp*4)) ^ 0
    var yy2 = (y1 + (y2 - y1) / 12 * (4-rp*4)) ^ 0
    var points = [[x1, y1], [xx1, yy1], [xx2, yy2], [x2, y2]]
    var N = points.length
    var n = N - 1
    var traces = []
    var step = slen
    for (var T = 0; T < step+1; T++) {
      var t = T*(1/step)
      var x = 0
      var y = 0
      for (var i = 0; i < N; i++) {
        var B = factorial(n)*t**i*(1-t)**(n-i)/(factorial(i)*factorial(n-i))
        x += points[i][0]*B
        y += points[i][1]*B
      }
      traces.push([x^0, y^0])
    }
    return traces
  }
  function touch(x1, y1, x2, y2){
    if (x2 == undefined && y2 == undefined){
      x2 = x1
      y2 = y1
    }
    var traces = make_trace(x1, y1, x2, y2)
    console.log('traces:', traces)
    for (var i = 0; i < (v_events['touchstart'] || []).length; i++) { v_events['touchstart'][i][1](make_touch(v_events['touchstart'][i][0], 'touchstart', x1, y1)) }
    for (var j = 0; j < traces.length; j++) {
      var x = traces[j][0]
      var y = traces[j][0]
      for (var i = 0; i < (v_events['touchmove'] || []).length; i++) { v_events['touchmove'][i][1](make_touch(v_events['touchmove'][i][0], 'touchmove', x, y)) }
    }
    for (var i = 0; i < (v_events['touchend'] || []).length; i++) { v_events['touchend'][i][1](make_touch(v_events['touchend'][i][0], 'touchend', x2, y2)) }
  }
  function mouse_move(x1, y1, x2, y2){
    if (x2 == undefined && y2 == undefined){
      x2 = x1
      y2 = y1
    }
    var traces = make_trace(x1, y1, x2, y2)
    console.log('traces:', traces)
    for (var j = 0; j < traces.length; j++) {
      var x = traces[j][0]
      var y = traces[j][0]
      for (var i = 0; i < (v_events['mousemove'] || []).length; i++) { v_events['mousemove'][i][1](make_touch(v_events['mousemove'][i][0], 'mousemove', x, y)) }
    }
  }
  window.make_mouse = make_mouse
  window.mouse_click = mouse_click
  window.mouse_move = mouse_move
  window.touch = touch
  EventTarget.prototype.addEventListener = function(){v_console_log('  [*] EventTarget -> addEventListener[func]', this===window?'[Window]':this===document?'[Document]':this, [].slice.call(arguments)); add_event(this, [].slice.call(arguments)); return null}
  EventTarget.prototype.dispatchEvent = function(){v_console_log('  [*] EventTarget -> dispatchEvent[func]', this===window?'[Window]':this===document?'[Document]':this, [].slice.call(arguments)); add_event(this, [].slice.call(arguments)); return null}
  EventTarget.prototype.removeEventListener = function(){v_console_log('  [*] EventTarget -> removeEventListener[func]', this===window?'[Window]':this===document?'[Document]':this, [].slice.call(arguments)); add_event(this, [].slice.call(arguments)); return null}
}
function v_init_Element_prototype(){
  Element.prototype.getAnimations          = Element.prototype.getAnimations          || v_saf(function getAnimations(){v_console_log("  [*] Element -> getAnimations[func]", [].slice.call(arguments));})
  Element.prototype.getAttribute           = Element.prototype.getAttribute           || v_saf(function getAttribute(){v_console_log("  [*] Element -> getAttribute[func]", [].slice.call(arguments));})
  Element.prototype.getAttributeNS         = Element.prototype.getAttributeNS         || v_saf(function getAttributeNS(){v_console_log("  [*] Element -> getAttributeNS[func]", [].slice.call(arguments));})
  Element.prototype.getAttributeNames      = Element.prototype.getAttributeNames      || v_saf(function getAttributeNames(){v_console_log("  [*] Element -> getAttributeNames[func]", [].slice.call(arguments));})
  Element.prototype.getAttributeNode       = Element.prototype.getAttributeNode       || v_saf(function getAttributeNode(){v_console_log("  [*] Element -> getAttributeNode[func]", [].slice.call(arguments));})
  Element.prototype.getAttributeNodeNS     = Element.prototype.getAttributeNodeNS     || v_saf(function getAttributeNodeNS(){v_console_log("  [*] Element -> getAttributeNodeNS[func]", [].slice.call(arguments));})
  Element.prototype.getBoundingClientRect  = Element.prototype.getBoundingClientRect  || v_saf(function getBoundingClientRect(){v_console_log("  [*] Element -> getBoundingClientRect[func]", [].slice.call(arguments));})
  Element.prototype.getClientRects         = Element.prototype.getClientRects         || v_saf(function getClientRects(){v_console_log("  [*] Element -> getClientRects[func]", [].slice.call(arguments));})
  Element.prototype.getElementsByClassName = Element.prototype.getElementsByClassName || v_saf(function getElementsByClassName(){v_console_log("  [*] Element -> getElementsByClassName[func]", [].slice.call(arguments));})
  Element.prototype.getElementsByTagName   = Element.prototype.getElementsByTagName   || v_saf(function getElementsByTagName(){v_console_log("  [*] Element -> getElementsByTagName[func]", [].slice.call(arguments));})
  Element.prototype.getElementsByTagNameNS = Element.prototype.getElementsByTagNameNS || v_saf(function getElementsByTagNameNS(){v_console_log("  [*] Element -> getElementsByTagNameNS[func]", [].slice.call(arguments));})
  Element.prototype.getInnerHTML           = Element.prototype.getInnerHTML           || v_saf(function getInnerHTML(){v_console_log("  [*] Element -> getInnerHTML[func]", [].slice.call(arguments));})
  Element.prototype.hasAttribute           = Element.prototype.hasAttribute           || v_saf(function hasAttribute(){v_console_log("  [*] Element -> hasAttribute[func]", [].slice.call(arguments));})
  Element.prototype.hasAttributeNS         = Element.prototype.hasAttributeNS         || v_saf(function hasAttributeNS(){v_console_log("  [*] Element -> hasAttributeNS[func]", [].slice.call(arguments));})
  Element.prototype.hasAttributes          = Element.prototype.hasAttributes          || v_saf(function hasAttributes(){v_console_log("  [*] Element -> hasAttributes[func]", [].slice.call(arguments));})
  Element.prototype.hasPointerCapture      = Element.prototype.hasPointerCapture      || v_saf(function hasPointerCapture(){v_console_log("  [*] Element -> hasPointerCapture[func]", [].slice.call(arguments));})
  Element.prototype.webkitMatchesSelector  = Element.prototype.webkitMatchesSelector  || v_saf(function webkitMatchesSelector(){v_console_log("  [*] Element -> webkitMatchesSelector[func]", [].slice.call(arguments));})
}
function v_init_DOMTokenList_prototype(){
  DOMTokenList.prototype.add = DOMTokenList.prototype.add || v_saf(function add(){v_console_log("  [*] DOMTokenList -> add[func]", [].slice.call(arguments));})
  DOMTokenList.prototype.contains = DOMTokenList.prototype.contains || v_saf(function contains(){v_console_log("  [*] DOMTokenList -> contains[func]", [].slice.call(arguments));})
  DOMTokenList.prototype.entries = DOMTokenList.prototype.entries || v_saf(function entries(){v_console_log("  [*] DOMTokenList -> entries[func]", [].slice.call(arguments));})
  DOMTokenList.prototype.forEach = DOMTokenList.prototype.forEach || v_saf(function forEach(){v_console_log("  [*] DOMTokenList -> forEach[func]", [].slice.call(arguments));})
  DOMTokenList.prototype.item = DOMTokenList.prototype.item || v_saf(function item(){v_console_log("  [*] DOMTokenList -> item[func]", [].slice.call(arguments));})
  DOMTokenList.prototype.keys = DOMTokenList.prototype.keys || v_saf(function keys(){v_console_log("  [*] DOMTokenList -> keys[func]", [].slice.call(arguments));})
  DOMTokenList.prototype.length = DOMTokenList.prototype.length || v_saf(function length(){v_console_log("  [*] DOMTokenList -> length[func]", [].slice.call(arguments));})
  DOMTokenList.prototype.remove = DOMTokenList.prototype.remove || v_saf(function remove(){v_console_log("  [*] DOMTokenList -> remove[func]", [].slice.call(arguments));})
  DOMTokenList.prototype.replace = DOMTokenList.prototype.replace || v_saf(function replace(){v_console_log("  [*] DOMTokenList -> replace[func]", [].slice.call(arguments));})
  DOMTokenList.prototype.supports = DOMTokenList.prototype.supports || v_saf(function supports(){v_console_log("  [*] DOMTokenList -> supports[func]", [].slice.call(arguments));})
  DOMTokenList.prototype.toggle = DOMTokenList.prototype.toggle || v_saf(function toggle(){v_console_log("  [*] DOMTokenList -> toggle[func]", [].slice.call(arguments));})
}
function v_init_CSSStyleDeclaration_prototype(){
  CSSStyleDeclaration.prototype["zoom"] = ''
  CSSStyleDeclaration.prototype["resize"] = ''
  CSSStyleDeclaration.prototype["text-rendering"] = ''
  CSSStyleDeclaration.prototype["text-align-last"] = ''
}
function v_init_PointerEvent_prototype(){
  PointerEvent.prototype.getCoalescedEvents = v_saf(function getCoalescedEvents(){v_console_log("  [*] PointerEvent -> getCoalescedEvents[func]", [].slice.call(arguments));})
  PointerEvent.prototype.getPredictedEvents = v_saf(function getPredictedEvents(){v_console_log("  [*] PointerEvent -> getPredictedEvents[func]", [].slice.call(arguments));})
}
function v_init_PerformanceTiming_prototype(){
  try{
    Object.defineProperties(PerformanceTiming.prototype, {
      connectEnd: {set: undefined, enumerable: true, configurable: true, get: v_saf(function connectEnd(){v_console_log("  [*] PerformanceTiming -> connectEnd[get]", [].slice.call(arguments));})},
      connectStart: {set: undefined, enumerable: true, configurable: true, get: v_saf(function connectStart(){v_console_log("  [*] PerformanceTiming -> connectStart[get]", [].slice.call(arguments));})},
      domComplete: {set: undefined, enumerable: true, configurable: true, get: v_saf(function domComplete(){v_console_log("  [*] PerformanceTiming -> domComplete[get]", [].slice.call(arguments));})},
      domContentLoadedEventEnd: {set: undefined, enumerable: true, configurable: true, get: v_saf(function domContentLoadedEventEnd(){v_console_log("  [*] PerformanceTiming -> domContentLoadedEventEnd[get]", [].slice.call(arguments));})},
      domContentLoadedEventStart: {set: undefined, enumerable: true, configurable: true, get: v_saf(function domContentLoadedEventStart(){v_console_log("  [*] PerformanceTiming -> domContentLoadedEventStart[get]", [].slice.call(arguments));})},
      domInteractive: {set: undefined, enumerable: true, configurable: true, get: v_saf(function domInteractive(){v_console_log("  [*] PerformanceTiming -> domInteractive[get]", [].slice.call(arguments));})},
      domLoading: {set: undefined, enumerable: true, configurable: true, get: v_saf(function domLoading(){v_console_log("  [*] PerformanceTiming -> domLoading[get]", [].slice.call(arguments));})},
      domainLookupEnd: {set: undefined, enumerable: true, configurable: true, get: v_saf(function domainLookupEnd(){v_console_log("  [*] PerformanceTiming -> domainLookupEnd[get]", [].slice.call(arguments));})},
      domainLookupStart: {set: undefined, enumerable: true, configurable: true, get: v_saf(function domainLookupStart(){v_console_log("  [*] PerformanceTiming -> domainLookupStart[get]", [].slice.call(arguments));})},
      fetchStart: {set: undefined, enumerable: true, configurable: true, get: v_saf(function fetchStart(){v_console_log("  [*] PerformanceTiming -> fetchStart[get]", [].slice.call(arguments));})},
      loadEventEnd: {set: undefined, enumerable: true, configurable: true, get: v_saf(function loadEventEnd(){v_console_log("  [*] PerformanceTiming -> loadEventEnd[get]", [].slice.call(arguments));})},
      loadEventStart: {set: undefined, enumerable: true, configurable: true, get: v_saf(function loadEventStart(){v_console_log("  [*] PerformanceTiming -> loadEventStart[get]", [].slice.call(arguments));})},
      navigationStart: {set: undefined, enumerable: true, configurable: true, get: v_saf(function navigationStart(){v_console_log("  [*] PerformanceTiming -> navigationStart[get]", [].slice.call(arguments));})},
      redirectEnd: {set: undefined, enumerable: true, configurable: true, get: v_saf(function redirectEnd(){v_console_log("  [*] PerformanceTiming -> redirectEnd[get]", [].slice.call(arguments));})},
      redirectStart: {set: undefined, enumerable: true, configurable: true, get: v_saf(function redirectStart(){v_console_log("  [*] PerformanceTiming -> redirectStart[get]", [].slice.call(arguments));})},
      requestStart: {set: undefined, enumerable: true, configurable: true, get: v_saf(function requestStart(){v_console_log("  [*] PerformanceTiming -> requestStart[get]", [].slice.call(arguments));})},
      responseEnd: {set: undefined, enumerable: true, configurable: true, get: v_saf(function responseEnd(){v_console_log("  [*] PerformanceTiming -> responseEnd[get]", [].slice.call(arguments));})},
      responseStart: {set: undefined, enumerable: true, configurable: true, get: v_saf(function responseStart(){v_console_log("  [*] PerformanceTiming -> responseStart[get]", [].slice.call(arguments));})},
      secureConnectionStart: {set: undefined, enumerable: true, configurable: true, get: v_saf(function secureConnectionStart(){v_console_log("  [*] PerformanceTiming -> secureConnectionStart[get]", [].slice.call(arguments));})},
      unloadEventEnd: {set: undefined, enumerable: true, configurable: true, get: v_saf(function unloadEventEnd(){v_console_log("  [*] PerformanceTiming -> unloadEventEnd[get]", [].slice.call(arguments));})},
      unloadEventStart: {set: undefined, enumerable: true, configurable: true, get: v_saf(function unloadEventStart(){v_console_log("  [*] PerformanceTiming -> unloadEventStart[get]", [].slice.call(arguments));})},
    })
  }catch(e){}
}
function mk_atob_btoa(r){var a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",t=new Array(-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,62,-1,-1,-1,63,52,53,54,55,56,57,58,59,60,61,-1,-1,-1,-1,-1,-1,-1,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-1,-1,-1,-1,-1,-1,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-1,-1,-1,-1,-1);return{atob:function(r){var a,e,o,h,c,i,n;for(i=r.length,c=0,n="";c<i;){do{a=t[255&r.charCodeAt(c++)]}while(c<i&&-1==a);if(-1==a)break;do{e=t[255&r.charCodeAt(c++)]}while(c<i&&-1==e);if(-1==e)break;n+=String.fromCharCode(a<<2|(48&e)>>4);do{if(61==(o=255&r.charCodeAt(c++)))return n;o=t[o]}while(c<i&&-1==o);if(-1==o)break;n+=String.fromCharCode((15&e)<<4|(60&o)>>2);do{if(61==(h=255&r.charCodeAt(c++)))return n;h=t[h]}while(c<i&&-1==h);if(-1==h)break;n+=String.fromCharCode((3&o)<<6|h)}return n},btoa:function(r){var t,e,o,h,c,i;for(o=r.length,e=0,t="";e<o;){if(h=255&r.charCodeAt(e++),e==o){t+=a.charAt(h>>2),t+=a.charAt((3&h)<<4),t+="==";break}if(c=r.charCodeAt(e++),e==o){t+=a.charAt(h>>2),t+=a.charAt((3&h)<<4|(240&c)>>4),t+=a.charAt((15&c)<<2),t+="=";break}i=r.charCodeAt(e++),t+=a.charAt(h>>2),t+=a.charAt((3&h)<<4|(240&c)>>4),t+=a.charAt((15&c)<<2|(192&i)>>6),t+=a.charAt(63&i)}return t}}}
var atob_btoa = mk_atob_btoa()
window.btoa = window.btoa || v_saf(atob_btoa.btoa, 'btoa')
window.atob = window.atob || v_saf(atob_btoa.atob, 'atob')

init_cookie("Hm_lvt_c36ebf0e0753eda09586ef4fb80ea125=1687159925; Hm_lpvt_c36ebf0e0753eda09586ef4fb80ea125=1687159925; _csrf_token=_YrkXosEQCyjzCKKXlu26Xo0; passport_csrf_token=0119cf49b8807f011c40f5499776c2d2; passport_csrf_token_default=0119cf49b8807f011c40f5499776c2d2; msToken=RN7GCQ6KapHaeJTmJkYFDWtxbdNyDSomyy-G_GJD4OPENZ1K2XtpnKNGe2qKeO04kLqUldRMD5SxTJe34D5D_n-n1KfHCya12tc9JJ_bXJs=; msToken=xG1EAWrLzVb_-ngP0vfs4Ll-qLBS0ou0eTco7X9_oRX65EdtSYg4KgRNZwDupAeu5YDSaPQ67Bz-rTHGsxGr8qQzIMEHQJ5ZffwxWZ8Dmw_uDdNH8RtiDWMTmqUMyzk=; ttcid=ae0e350452f24ad8aa15626e19cb9f8f32; tt_scid=5bPOLaZAMiGLNIBK5GQRDYJR4.Q8hlZtYvJqT089jekcfF02UJlGpMZg40R0Qp5R0f5f")
v_hook_href(window.location, 'location', "https://trendinsight.oceanengine.com/arithmetic-index")
v_hook_storage()
v_init_document()
v_init_canvas()
v_init_event_target()
v_init_Element_prototype()
v_init_DOMTokenList_prototype()
v_init_CSSStyleDeclaration_prototype()
v_init_PointerEvent_prototype()
v_init_PerformanceTiming_prototype()
window.innerWidth = 1707
window.innerHeight = 947
window.outerHeight = 1019
window.outerWidth = 1707
window.isSecureContext = true
window.origin = location.origin
function v_getele(name, func){
  if(name == "root" && func == "getElementById"){ return v_new(HTMLDivElement) }
  if(name == "__LOADABLE_REQUIRED_CHUNKS__" && func == "getElementById"){ return v_new(HTMLScriptElement) }
  if(name == "__LOADABLE_REQUIRED_CHUNKS___ext" && func == "getElementById"){ return v_new(HTMLScriptElement) }
  if(name == "scroll-container" && func == "getElementById"){ return v_new(HTMLDivElement) }
  if(name == "head" && func == "querySelector"){ return v_new(HTMLHeadElement) }
  if(name == "#root" && func == "querySelector"){ return v_new(HTMLDivElement) }
  return null
}
function v_geteles(name, func){
  if(name == "body" && func == "getElementsByTagName"){ return [v_new(HTMLBodyElement)] }
  if(name == "style[data-styled][data-styled-version=\"5.3.11\"]" && func == "querySelectorAll"){ return [v_new(HTMLStyleElement)] }
  if(name == "script" && func == "getElementsByTagName"){ return [v_new(HTMLScriptElement),v_new(HTMLScriptElement),v_new(HTMLScriptElement),v_new(HTMLScriptElement),v_new(HTMLScriptElement),v_new(HTMLScriptElement),v_new(HTMLScriptElement),v_new(HTMLScriptElement),v_new(HTMLScriptElement),v_new(HTMLScriptElement),v_new(HTMLScriptElement),v_new(HTMLScriptElement),v_new(HTMLScriptElement),v_new(HTMLScriptElement),v_new(HTMLScriptElement),v_new(HTMLScriptElement),v_new(HTMLScriptElement),v_new(HTMLScriptElement),v_new(HTMLScriptElement),v_new(HTMLScriptElement),v_new(HTMLScriptElement),v_new(HTMLScriptElement),v_new(HTMLScriptElement),v_new(HTMLScriptElement),v_new(HTMLScriptElement),v_new(HTMLScriptElement),v_new(HTMLScriptElement),v_new(HTMLScriptElement)] }
  if(name == "link" && func == "getElementsByTagName"){ return [v_new(HTMLLinkElement),v_new(HTMLLinkElement),v_new(HTMLLinkElement),v_new(HTMLLinkElement),v_new(HTMLLinkElement),v_new(HTMLLinkElement),v_new(HTMLLinkElement),v_new(HTMLLinkElement),v_new(HTMLLinkElement),v_new(HTMLLinkElement),v_new(HTMLLinkElement),v_new(HTMLLinkElement),v_new(HTMLLinkElement),v_new(HTMLLinkElement),v_new(HTMLLinkElement),v_new(HTMLLinkElement),v_new(HTMLLinkElement),v_new(HTMLLinkElement),v_new(HTMLLinkElement),v_new(HTMLLinkElement)] }
  if(name == "style" && func == "getElementsByTagName"){ return [v_new(HTMLStyleElement),v_new(HTMLStyleElement),v_new(HTMLStyleElement),v_new(HTMLStyleElement),v_new(HTMLStyleElement),v_new(HTMLStyleElement),v_new(HTMLStyleElement),v_new(HTMLStyleElement),v_new(HTMLStyleElement),v_new(HTMLStyleElement),v_new(HTMLStyleElement),v_new(HTMLStyleElement),v_new(HTMLStyleElement),v_new(HTMLStyleElement),v_new(HTMLStyleElement),v_new(HTMLStyleElement),v_new(HTMLStyleElement),v_new(HTMLStyleElement),v_new(HTMLStyleElement),v_new(HTMLStyleElement),v_new(HTMLStyleElement),v_new(HTMLStyleElement),v_new(HTMLStyleElement)] }
  if(name == "html" && func == "getElementsByTagName"){ return [v_new(HTMLHtmlElement)] }
  if(name == "title" && func == "getElementsByTagName"){ return [v_new(HTMLTitleElement)] }
  if(name == "head" && func == "getElementsByTagName"){ return [v_new(HTMLHeadElement)] }
  return null
}
var v_Date = Date;
var v_base_time = +new Date;
(function(){
  function ftime(){
    return new v_Date() - v_base_time + v_to_time
  }
  Date = function(_Date) {
    var bind = Function.bind;
    var unbind = bind.bind(bind);
    function instantiate(constructor, args) {
      return new (unbind(constructor, null).apply(null, args));
    }
    var names = Object.getOwnPropertyNames(_Date);
    for (var i = 0; i < names.length; i++) {
      if (names[i]in Date)
        continue;
      var desc = Object.getOwnPropertyDescriptor(_Date, names[i]);
      Object.defineProperty(Date, names[i], desc);
    }
    function Date() {
      var date = instantiate(_Date, [ftime()]);
      return date;
    }
    Date.prototype = _Date.prototype
    return v_saf(Date);
  }(Date);
  Date.now = v_saf(function now(){ return ftime() })
})();
var v_to_time = +new v_Date
// var v_to_time = +new v_Date('Sat Sep 03 2022 11:11:58 GMT+0800') // 自定义起始时间
v_new_toggle = undefined;