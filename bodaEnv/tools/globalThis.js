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
delete SharedArrayBuffer;
// debugger
window = globalThis;
globalThis.__proto__ = bodaEnv.memory.globlProtoObj['Window'].prototype;

// window对象

// window对象
// window对象
bodaEnv.toolsFunc.defineProperty(window, "atob", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    atob(str) {
      return bodaEnv.toolsFunc.base64.base64decode(str);
    }
  }.atob
});
bodaEnv.toolsFunc.defineProperty(window, "btoa", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    btoa(str) {
      return bodaEnv.toolsFunc.base64.base64encode(str);
    }
  }.btoa
});
// bodaEnv.toolsFunc.defineProperty(window, "event", {configurable:true, enumerable:false, get:function event (){return bodaEnv.toolsFunc.dispatch(this,window, "window", "event_get", arguments)}, set:function event (){return bodaEnv.toolsFunc.dispatch(this,window, "window", "event_set", arguments)}});

bodaEnv.toolsFunc.defineProperty(window, "setInterval", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    setInterval() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "setInterval", arguments);
    }
  }.setInterval
});
bodaEnv.toolsFunc.defineProperty(window, "setTimeout", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    setTimeout() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "setTimeout", arguments);
    }
  }.setTimeout
});
bodaEnv.toolsFunc.defineProperty(window, "clearInterval", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    clearInterval() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "clearInterval", arguments);
    }
  }.clearInterval
});
bodaEnv.toolsFunc.defineProperty(window, "clearTimeout", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    clearTimeout() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "clearTimeout", arguments);
    }
  }.clearTimeout
});

// debugger
bodaEnv.toolsFunc.defineProperty(window, "Option", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['Option']
});
bodaEnv.toolsFunc.defineProperty(window, "Image", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['Image']
});
bodaEnv.toolsFunc.defineProperty(window, "Audio", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['Audio']
});
bodaEnv.toolsFunc.defineProperty(window, "webkitURL", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: {
    webkitURL() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "webkitURL", arguments);
    }
  }.webkitURL
});
bodaEnv.toolsFunc.defineProperty(window, "webkitRTCPeerConnection", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: {
    webkitRTCPeerConnection() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "webkitRTCPeerConnection", arguments);
    }
  }.webkitRTCPeerConnection
});
bodaEnv.toolsFunc.defineProperty(window, "webkitMediaStream", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: {
    webkitMediaStream() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "webkitMediaStream", arguments);
    }
  }.webkitMediaStream
});
bodaEnv.toolsFunc.defineProperty(window, "WebKitMutationObserver", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['WebKitMutationObserver']
});
bodaEnv.toolsFunc.defineProperty(window, "WebKitCSSMatrix", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['WebKitCSSMatrix']
});
bodaEnv.toolsFunc.defineProperty(window, "XSLTProcessor", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['XSLTProcessor']
});
bodaEnv.toolsFunc.defineProperty(window, "XPathResult", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['XPathResult']
});
bodaEnv.toolsFunc.defineProperty(window, "XPathExpresboda", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['XPathExpresboda']
});
bodaEnv.toolsFunc.defineProperty(window, "XPathEvaluator", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['XPathEvaluator']
});
bodaEnv.toolsFunc.defineProperty(window, "XMLSerializer", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['XMLSerializer']
});
bodaEnv.toolsFunc.defineProperty(window, "XMLHttpRequestUpload", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['XMLHttpRequestUpload']
});
bodaEnv.toolsFunc.defineProperty(window, "XMLHttpRequestEventTarget", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['XMLHttpRequestEventTarget']
});
bodaEnv.toolsFunc.defineProperty(window, "XMLHttpRequest", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['XMLHttpRequest']
});
bodaEnv.toolsFunc.defineProperty(window, "XMLDocument", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['XMLDocument']
});
bodaEnv.toolsFunc.defineProperty(window, "WritableStreamDefaultWriter", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['WritableStreamDefaultWriter']
});
bodaEnv.toolsFunc.defineProperty(window, "WritableStreamDefaultController", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['WritableStreamDefaultController']
});
bodaEnv.toolsFunc.defineProperty(window, "WritableStream", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['WritableStream']
});
bodaEnv.toolsFunc.defineProperty(window, "Worker", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['Worker']
});
bodaEnv.toolsFunc.defineProperty(window, "Window", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['Window']
});
bodaEnv.toolsFunc.defineProperty(window, "WheelEvent", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['WheelEvent']
});
bodaEnv.toolsFunc.defineProperty(window, "WebSocket", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['WebSocket']
});
bodaEnv.toolsFunc.defineProperty(window, "WebGLVertexArrayObject", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['WebGLVertexArrayObject']
});
bodaEnv.toolsFunc.defineProperty(window, "WebGLUniformLocation", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['WebGLUniformLocation']
});
bodaEnv.toolsFunc.defineProperty(window, "WebGLTransformFeedback", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['WebGLTransformFeedback']
});
bodaEnv.toolsFunc.defineProperty(window, "WebGLTexture", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['WebGLTexture']
});
bodaEnv.toolsFunc.defineProperty(window, "WebGLSync", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['WebGLSync']
});
bodaEnv.toolsFunc.defineProperty(window, "WebGLShaderPrecisionFormat", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['WebGLShaderPrecisionFormat']
});
bodaEnv.toolsFunc.defineProperty(window, "WebGLShader", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['WebGLShader']
});
bodaEnv.toolsFunc.defineProperty(window, "WebGLSampler", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['WebGLSampler']
});
bodaEnv.toolsFunc.defineProperty(window, "WebGLRenderingContext", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['WebGLRenderingContext']
});
bodaEnv.toolsFunc.defineProperty(window, "WebGLRenderbuffer", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['WebGLRenderbuffer']
});
bodaEnv.toolsFunc.defineProperty(window, "WebGLQuery", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['WebGLQuery']
});
bodaEnv.toolsFunc.defineProperty(window, "WebGLProgram", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['WebGLProgram']
});
bodaEnv.toolsFunc.defineProperty(window, "WebGLFramebuffer", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['WebGLFramebuffer']
});
bodaEnv.toolsFunc.defineProperty(window, "WebGLContextEvent", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['WebGLContextEvent']
});
bodaEnv.toolsFunc.defineProperty(window, "WebGLBuffer", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['WebGLBuffer']
});
bodaEnv.toolsFunc.defineProperty(window, "WebGLActiveInfo", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['WebGLActiveInfo']
});
bodaEnv.toolsFunc.defineProperty(window, "WebGL2RenderingContext", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['WebGL2RenderingContext']
});
bodaEnv.toolsFunc.defineProperty(window, "WaveShaperNode", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['WaveShaperNode']
});
bodaEnv.toolsFunc.defineProperty(window, "VisualViewport", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['VisualViewport']
});
bodaEnv.toolsFunc.defineProperty(window, "VirtualKeyboardGeometryChangeEvent", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['VirtualKeyboardGeometryChangeEvent']
});
bodaEnv.toolsFunc.defineProperty(window, "ValidityState", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['ValidityState']
});
bodaEnv.toolsFunc.defineProperty(window, "VTTCue", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['VTTCue']
});
bodaEnv.toolsFunc.defineProperty(window, "UserActivation", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['UserActivation']
});
bodaEnv.toolsFunc.defineProperty(window, "URLSearchParams", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['URLSearchParams']
});
bodaEnv.toolsFunc.defineProperty(window, "URLPattern", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['URLPattern']
});
bodaEnv.toolsFunc.defineProperty(window, "URL", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['URL']
});
bodaEnv.toolsFunc.defineProperty(window, "UIEvent", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['UIEvent']
});
bodaEnv.toolsFunc.defineProperty(window, "TrustedTypePolicyFactory", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['TrustedTypePolicyFactory']
});
bodaEnv.toolsFunc.defineProperty(window, "TrustedTypePolicy", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['TrustedTypePolicy']
});
bodaEnv.toolsFunc.defineProperty(window, "TrustedScriptURL", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['TrustedScriptURL']
});
bodaEnv.toolsFunc.defineProperty(window, "TrustedScript", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['TrustedScript']
});
bodaEnv.toolsFunc.defineProperty(window, "TrustedHTML", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['TrustedHTML']
});
bodaEnv.toolsFunc.defineProperty(window, "TreeWalker", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['TreeWalker']
});
bodaEnv.toolsFunc.defineProperty(window, "TransitionEvent", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['TransitionEvent']
});
bodaEnv.toolsFunc.defineProperty(window, "TransformStreamDefaultController", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['TransformStreamDefaultController']
});
bodaEnv.toolsFunc.defineProperty(window, "TransformStream", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['TransformStream']
});
bodaEnv.toolsFunc.defineProperty(window, "TrackEvent", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['TrackEvent']
});
bodaEnv.toolsFunc.defineProperty(window, "TouchList", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['TouchList']
});
bodaEnv.toolsFunc.defineProperty(window, "TouchEvent", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['TouchEvent']
});
bodaEnv.toolsFunc.defineProperty(window, "Touch", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['Touch']
});
bodaEnv.toolsFunc.defineProperty(window, "TimeRanges", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['TimeRanges']
});
bodaEnv.toolsFunc.defineProperty(window, "TextTrackList", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['TextTrackList']
});
bodaEnv.toolsFunc.defineProperty(window, "TextTrackCueList", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['TextTrackCueList']
});
bodaEnv.toolsFunc.defineProperty(window, "TextTrackCue", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['TextTrackCue']
});
bodaEnv.toolsFunc.defineProperty(window, "TextTrack", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['TextTrack']
});
bodaEnv.toolsFunc.defineProperty(window, "TextMetrics", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['TextMetrics']
});
bodaEnv.toolsFunc.defineProperty(window, "TextEvent", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['TextEvent']
});
bodaEnv.toolsFunc.defineProperty(window, "TextEncoderStream", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['TextEncoderStream']
});
bodaEnv.toolsFunc.defineProperty(window, "TextEncoder", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['TextEncoder']
});
bodaEnv.toolsFunc.defineProperty(window, "TextDecoderStream", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['TextDecoderStream']
});
bodaEnv.toolsFunc.defineProperty(window, "TextDecoder", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['TextDecoder']
});
bodaEnv.toolsFunc.defineProperty(window, "Text", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['Text']
});
bodaEnv.toolsFunc.defineProperty(window, "TaskSignal", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['TaskSignal']
});
bodaEnv.toolsFunc.defineProperty(window, "TaskPriorityChangeEvent", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['TaskPriorityChangeEvent']
});
bodaEnv.toolsFunc.defineProperty(window, "TaskController", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['TaskController']
});
bodaEnv.toolsFunc.defineProperty(window, "TaskAttributionTiming", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['TaskAttributionTiming']
});
bodaEnv.toolsFunc.defineProperty(window, "SyncManager", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['SyncManager']
});
bodaEnv.toolsFunc.defineProperty(window, "SubmitEvent", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['SubmitEvent']
});
bodaEnv.toolsFunc.defineProperty(window, "StyleSheetList", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['StyleSheetList']
});
bodaEnv.toolsFunc.defineProperty(window, "StyleSheet", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['StyleSheet']
});
bodaEnv.toolsFunc.defineProperty(window, "StylePropertyMapReadOnly", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['StylePropertyMapReadOnly']
});
bodaEnv.toolsFunc.defineProperty(window, "StylePropertyMap", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['StylePropertyMap']
});
bodaEnv.toolsFunc.defineProperty(window, "StorageEvent", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['StorageEvent']
});
bodaEnv.toolsFunc.defineProperty(window, "Storage", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['Storage']
});
bodaEnv.toolsFunc.defineProperty(window, "StereoPannerNode", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['StereoPannerNode']
});
bodaEnv.toolsFunc.defineProperty(window, "StaticRange", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['StaticRange']
});
bodaEnv.toolsFunc.defineProperty(window, "SourceBufferList", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['SourceBufferList']
});
bodaEnv.toolsFunc.defineProperty(window, "SourceBuffer", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['SourceBuffer']
});
bodaEnv.toolsFunc.defineProperty(window, "ShadowRoot", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['ShadowRoot']
});
bodaEnv.toolsFunc.defineProperty(window, "Selection", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['Selection']
});
bodaEnv.toolsFunc.defineProperty(window, "SecurityPolicyViolationEvent", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['SecurityPolicyViolationEvent']
});
bodaEnv.toolsFunc.defineProperty(window, "ScriptProcessorNode", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['ScriptProcessorNode']
});
bodaEnv.toolsFunc.defineProperty(window, "ScreenOrientation", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['ScreenOrientation']
});
bodaEnv.toolsFunc.defineProperty(window, "Screen", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['Screen']
});
bodaEnv.toolsFunc.defineProperty(window, "Scheduling", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['Scheduling']
});
bodaEnv.toolsFunc.defineProperty(window, "Scheduler", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['Scheduler']
});
bodaEnv.toolsFunc.defineProperty(window, "SVGViewElement", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['SVGViewElement']
});
bodaEnv.toolsFunc.defineProperty(window, "SVGUseElement", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['SVGUseElement']
});
bodaEnv.toolsFunc.defineProperty(window, "SVGUnitTypes", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['SVGUnitTypes']
});
bodaEnv.toolsFunc.defineProperty(window, "SVGTransformList", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['SVGTransformList']
});
bodaEnv.toolsFunc.defineProperty(window, "SVGTransform", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['SVGTransform']
});
bodaEnv.toolsFunc.defineProperty(window, "SVGTitleElement", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['SVGTitleElement']
});
bodaEnv.toolsFunc.defineProperty(window, "SVGTextPositioningElement", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['SVGTextPositioningElement']
});
bodaEnv.toolsFunc.defineProperty(window, "SVGTextPathElement", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['SVGTextPathElement']
});
bodaEnv.toolsFunc.defineProperty(window, "SVGTextElement", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['SVGTextElement']
});
bodaEnv.toolsFunc.defineProperty(window, "SVGTextContentElement", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['SVGTextContentElement']
});
bodaEnv.toolsFunc.defineProperty(window, "SVGTSpanElement", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['SVGTSpanElement']
});
bodaEnv.toolsFunc.defineProperty(window, "SVGSymbolElement", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['SVGSymbolElement']
});
bodaEnv.toolsFunc.defineProperty(window, "SVGSwitchElement", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['SVGSwitchElement']
});
bodaEnv.toolsFunc.defineProperty(window, "SVGStyleElement", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['SVGStyleElement']
});
bodaEnv.toolsFunc.defineProperty(window, "SVGStringList", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['SVGStringList']
});
bodaEnv.toolsFunc.defineProperty(window, "SVGStopElement", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['SVGStopElement']
});
bodaEnv.toolsFunc.defineProperty(window, "SVGSetElement", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['SVGSetElement']
});
bodaEnv.toolsFunc.defineProperty(window, "SVGScriptElement", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['SVGScriptElement']
});
bodaEnv.toolsFunc.defineProperty(window, "SVGSVGElement", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['SVGSVGElement']
});
bodaEnv.toolsFunc.defineProperty(window, "SVGRectElement", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['SVGRectElement']
});
bodaEnv.toolsFunc.defineProperty(window, "SVGRect", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['SVGRect']
});
bodaEnv.toolsFunc.defineProperty(window, "SVGRadialGradientElement", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['SVGRadialGradientElement']
});
bodaEnv.toolsFunc.defineProperty(window, "SVGPreserveAspectRatio", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['SVGPreserveAspectRatio']
});
bodaEnv.toolsFunc.defineProperty(window, "SVGPolylineElement", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['SVGPolylineElement']
});
bodaEnv.toolsFunc.defineProperty(window, "SVGPolygonElement", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['SVGPolygonElement']
});
bodaEnv.toolsFunc.defineProperty(window, "SVGPointList", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['SVGPointList']
});
bodaEnv.toolsFunc.defineProperty(window, "SVGPoint", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['SVGPoint']
});
bodaEnv.toolsFunc.defineProperty(window, "SVGPatternElement", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['SVGPatternElement']
});
bodaEnv.toolsFunc.defineProperty(window, "SVGPathElement", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['SVGPathElement']
});
bodaEnv.toolsFunc.defineProperty(window, "SVGNumberList", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['SVGNumberList']
});
bodaEnv.toolsFunc.defineProperty(window, "SVGNumber", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['SVGNumber']
});
bodaEnv.toolsFunc.defineProperty(window, "SVGMetadataElement", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['SVGMetadataElement']
});
bodaEnv.toolsFunc.defineProperty(window, "SVGMatrix", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['SVGMatrix']
});
bodaEnv.toolsFunc.defineProperty(window, "SVGMaskElement", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['SVGMaskElement']
});
bodaEnv.toolsFunc.defineProperty(window, "SVGMarkerElement", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['SVGMarkerElement']
});
bodaEnv.toolsFunc.defineProperty(window, "SVGMPathElement", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['SVGMPathElement']
});
bodaEnv.toolsFunc.defineProperty(window, "SVGLinearGradientElement", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['SVGLinearGradientElement']
});
bodaEnv.toolsFunc.defineProperty(window, "SVGLineElement", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['SVGLineElement']
});
bodaEnv.toolsFunc.defineProperty(window, "SVGLengthList", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['SVGLengthList']
});
bodaEnv.toolsFunc.defineProperty(window, "SVGLength", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['SVGLength']
});
bodaEnv.toolsFunc.defineProperty(window, "SVGImageElement", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['SVGImageElement']
});
bodaEnv.toolsFunc.defineProperty(window, "SVGGraphicsElement", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['SVGGraphicsElement']
});
bodaEnv.toolsFunc.defineProperty(window, "SVGGradientElement", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['SVGGradientElement']
});
bodaEnv.toolsFunc.defineProperty(window, "SVGGeometryElement", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['SVGGeometryElement']
});
bodaEnv.toolsFunc.defineProperty(window, "SVGGElement", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['SVGGElement']
});
bodaEnv.toolsFunc.defineProperty(window, "SVGForeignObjectElement", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['SVGForeignObjectElement']
});
bodaEnv.toolsFunc.defineProperty(window, "SVGFilterElement", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['SVGFilterElement']
});
bodaEnv.toolsFunc.defineProperty(window, "SVGFETurbulenceElement", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['SVGFETurbulenceElement']
});
bodaEnv.toolsFunc.defineProperty(window, "SVGFETileElement", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['SVGFETileElement']
});
bodaEnv.toolsFunc.defineProperty(window, "SVGFESpotLightElement", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['SVGFESpotLightElement']
});
bodaEnv.toolsFunc.defineProperty(window, "SVGFESpecularLightingElement", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['SVGFESpecularLightingElement']
});
bodaEnv.toolsFunc.defineProperty(window, "SVGFEPointLightElement", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['SVGFEPointLightElement']
});
bodaEnv.toolsFunc.defineProperty(window, "SVGFEOffsetElement", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['SVGFEOffsetElement']
});
bodaEnv.toolsFunc.defineProperty(window, "SVGFEMorphologyElement", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['SVGFEMorphologyElement']
});
bodaEnv.toolsFunc.defineProperty(window, "SVGFEMergeNodeElement", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['SVGFEMergeNodeElement']
});
bodaEnv.toolsFunc.defineProperty(window, "SVGFEMergeElement", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['SVGFEMergeElement']
});
bodaEnv.toolsFunc.defineProperty(window, "SVGFEImageElement", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['SVGFEImageElement']
});
bodaEnv.toolsFunc.defineProperty(window, "SVGFEGaussianBlurElement", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['SVGFEGaussianBlurElement']
});
bodaEnv.toolsFunc.defineProperty(window, "SVGFEFuncRElement", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['SVGFEFuncRElement']
});
bodaEnv.toolsFunc.defineProperty(window, "SVGFEFuncGElement", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['SVGFEFuncGElement']
});
bodaEnv.toolsFunc.defineProperty(window, "SVGFEFuncBElement", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['SVGFEFuncBElement']
});
bodaEnv.toolsFunc.defineProperty(window, "SVGFEFuncAElement", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['SVGFEFuncAElement']
});
bodaEnv.toolsFunc.defineProperty(window, "SVGFEFloodElement", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['SVGFEFloodElement']
});
bodaEnv.toolsFunc.defineProperty(window, "SVGFEDropShadowElement", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['SVGFEDropShadowElement']
});
bodaEnv.toolsFunc.defineProperty(window, "SVGFEDistantLightElement", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['SVGFEDistantLightElement']
});
bodaEnv.toolsFunc.defineProperty(window, "SVGFEDisplacementMapElement", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['SVGFEDisplacementMapElement']
});
bodaEnv.toolsFunc.defineProperty(window, "SVGFEDiffuseLightingElement", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['SVGFEDiffuseLightingElement']
});
bodaEnv.toolsFunc.defineProperty(window, "SVGFEConvolveMatrixElement", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['SVGFEConvolveMatrixElement']
});
bodaEnv.toolsFunc.defineProperty(window, "SVGFECompositeElement", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['SVGFECompositeElement']
});
bodaEnv.toolsFunc.defineProperty(window, "SVGFEComponentTransferElement", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['SVGFEComponentTransferElement']
});
bodaEnv.toolsFunc.defineProperty(window, "SVGFEColorMatrixElement", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['SVGFEColorMatrixElement']
});
bodaEnv.toolsFunc.defineProperty(window, "SVGFEBlendElement", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['SVGFEBlendElement']
});
bodaEnv.toolsFunc.defineProperty(window, "SVGEllipseElement", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['SVGEllipseElement']
});
bodaEnv.toolsFunc.defineProperty(window, "SVGElement", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['SVGElement']
});
bodaEnv.toolsFunc.defineProperty(window, "SVGDescElement", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['SVGDescElement']
});
bodaEnv.toolsFunc.defineProperty(window, "SVGDefsElement", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['SVGDefsElement']
});
bodaEnv.toolsFunc.defineProperty(window, "SVGComponentTransferFunctionElement", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['SVGComponentTransferFunctionElement']
});
bodaEnv.toolsFunc.defineProperty(window, "SVGClipPathElement", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['SVGClipPathElement']
});
bodaEnv.toolsFunc.defineProperty(window, "SVGCircleElement", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['SVGCircleElement']
});
bodaEnv.toolsFunc.defineProperty(window, "SVGAnimationElement", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['SVGAnimationElement']
});
bodaEnv.toolsFunc.defineProperty(window, "SVGAnimatedTransformList", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['SVGAnimatedTransformList']
});
bodaEnv.toolsFunc.defineProperty(window, "SVGAnimatedString", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['SVGAnimatedString']
});
bodaEnv.toolsFunc.defineProperty(window, "SVGAnimatedRect", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['SVGAnimatedRect']
});
bodaEnv.toolsFunc.defineProperty(window, "SVGAnimatedPreserveAspectRatio", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['SVGAnimatedPreserveAspectRatio']
});
bodaEnv.toolsFunc.defineProperty(window, "SVGAnimatedNumberList", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['SVGAnimatedNumberList']
});
bodaEnv.toolsFunc.defineProperty(window, "SVGAnimatedNumber", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['SVGAnimatedNumber']
});
bodaEnv.toolsFunc.defineProperty(window, "SVGAnimatedLengthList", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['SVGAnimatedLengthList']
});
bodaEnv.toolsFunc.defineProperty(window, "SVGAnimatedLength", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['SVGAnimatedLength']
});
bodaEnv.toolsFunc.defineProperty(window, "SVGAnimatedInteger", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['SVGAnimatedInteger']
});
bodaEnv.toolsFunc.defineProperty(window, "SVGAnimatedEnumeration", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['SVGAnimatedEnumeration']
});
bodaEnv.toolsFunc.defineProperty(window, "SVGAnimatedBoolean", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['SVGAnimatedBoolean']
});
bodaEnv.toolsFunc.defineProperty(window, "SVGAnimatedAngle", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['SVGAnimatedAngle']
});
bodaEnv.toolsFunc.defineProperty(window, "SVGAnimateTransformElement", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['SVGAnimateTransformElement']
});
bodaEnv.toolsFunc.defineProperty(window, "SVGAnimateMotionElement", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['SVGAnimateMotionElement']
});
bodaEnv.toolsFunc.defineProperty(window, "SVGAnimateElement", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['SVGAnimateElement']
});
bodaEnv.toolsFunc.defineProperty(window, "SVGAngle", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['SVGAngle']
});
bodaEnv.toolsFunc.defineProperty(window, "SVGAElement", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['SVGAElement']
});
bodaEnv.toolsFunc.defineProperty(window, "Response", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['Response']
});
bodaEnv.toolsFunc.defineProperty(window, "ResizeObserverSize", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['ResizeObserverSize']
});
bodaEnv.toolsFunc.defineProperty(window, "ResizeObserverEntry", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['ResizeObserverEntry']
});
bodaEnv.toolsFunc.defineProperty(window, "ResizeObserver", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['ResizeObserver']
});
bodaEnv.toolsFunc.defineProperty(window, "Request", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['Request']
});
bodaEnv.toolsFunc.defineProperty(window, "ReportingObserver", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['ReportingObserver']
});
bodaEnv.toolsFunc.defineProperty(window, "ReadableStreamDefaultReader", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['ReadableStreamDefaultReader']
});
bodaEnv.toolsFunc.defineProperty(window, "ReadableStreamDefaultController", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['ReadableStreamDefaultController']
});
bodaEnv.toolsFunc.defineProperty(window, "ReadableStreamBYOBRequest", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['ReadableStreamBYOBRequest']
});
bodaEnv.toolsFunc.defineProperty(window, "ReadableStreamBYOBReader", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['ReadableStreamBYOBReader']
});
bodaEnv.toolsFunc.defineProperty(window, "ReadableStream", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['ReadableStream']
});
bodaEnv.toolsFunc.defineProperty(window, "ReadableByteStreamController", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['ReadableByteStreamController']
});
bodaEnv.toolsFunc.defineProperty(window, "Range", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['Range']
});
bodaEnv.toolsFunc.defineProperty(window, "RadioNodeList", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['RadioNodeList']
});
bodaEnv.toolsFunc.defineProperty(window, "RTCTrackEvent", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['RTCTrackEvent']
});
bodaEnv.toolsFunc.defineProperty(window, "RTCStatsReport", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['RTCStatsReport']
});
bodaEnv.toolsFunc.defineProperty(window, "RTCSessionDescription", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['RTCSessionDescription']
});
bodaEnv.toolsFunc.defineProperty(window, "RTCSctpTransport", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['RTCSctpTransport']
});
bodaEnv.toolsFunc.defineProperty(window, "RTCRtpTransceiver", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['RTCRtpTransceiver']
});
bodaEnv.toolsFunc.defineProperty(window, "RTCRtpSender", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['RTCRtpSender']
});
bodaEnv.toolsFunc.defineProperty(window, "RTCRtpReceiver", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['RTCRtpReceiver']
});
bodaEnv.toolsFunc.defineProperty(window, "RTCPeerConnectionIceEvent", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['RTCPeerConnectionIceEvent']
});
bodaEnv.toolsFunc.defineProperty(window, "RTCPeerConnectionIceErrorEvent", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['RTCPeerConnectionIceErrorEvent']
});
bodaEnv.toolsFunc.defineProperty(window, "RTCPeerConnection", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['RTCPeerConnection']
});
bodaEnv.toolsFunc.defineProperty(window, "RTCIceTransport", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['RTCIceTransport']
});
bodaEnv.toolsFunc.defineProperty(window, "RTCIceCandidate", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['RTCIceCandidate']
});
bodaEnv.toolsFunc.defineProperty(window, "RTCErrorEvent", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['RTCErrorEvent']
});
bodaEnv.toolsFunc.defineProperty(window, "RTCError", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['RTCError']
});
bodaEnv.toolsFunc.defineProperty(window, "RTCEncodedVideoFrame", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['RTCEncodedVideoFrame']
});
bodaEnv.toolsFunc.defineProperty(window, "RTCEncodedAudioFrame", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['RTCEncodedAudioFrame']
});
bodaEnv.toolsFunc.defineProperty(window, "RTCDtlsTransport", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['RTCDtlsTransport']
});
bodaEnv.toolsFunc.defineProperty(window, "RTCDataChannelEvent", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['RTCDataChannelEvent']
});
bodaEnv.toolsFunc.defineProperty(window, "RTCDataChannel", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['RTCDataChannel']
});
bodaEnv.toolsFunc.defineProperty(window, "RTCDTMFToneChangeEvent", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['RTCDTMFToneChangeEvent']
});
bodaEnv.toolsFunc.defineProperty(window, "RTCDTMFSender", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['RTCDTMFSender']
});
bodaEnv.toolsFunc.defineProperty(window, "RTCCertificate", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['RTCCertificate']
});
bodaEnv.toolsFunc.defineProperty(window, "PromiseRejectionEvent", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['PromiseRejectionEvent']
});
bodaEnv.toolsFunc.defineProperty(window, "ProgressEvent", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['ProgressEvent']
});
bodaEnv.toolsFunc.defineProperty(window, "Profiler", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['Profiler']
});
bodaEnv.toolsFunc.defineProperty(window, "ProcessingInstruction", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['ProcessingInstruction']
});
bodaEnv.toolsFunc.defineProperty(window, "PopStateEvent", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['PopStateEvent']
});
bodaEnv.toolsFunc.defineProperty(window, "PointerEvent", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['PointerEvent']
});
bodaEnv.toolsFunc.defineProperty(window, "PluginArray", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['PluginArray']
});
bodaEnv.toolsFunc.defineProperty(window, "Plugin", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['Plugin']
});
bodaEnv.toolsFunc.defineProperty(window, "PictureInPictureWindow", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['PictureInPictureWindow']
});
bodaEnv.toolsFunc.defineProperty(window, "PictureInPictureEvent", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['PictureInPictureEvent']
});
bodaEnv.toolsFunc.defineProperty(window, "PeriodicWave", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['PeriodicWave']
});
bodaEnv.toolsFunc.defineProperty(window, "PerformanceTiming", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['PerformanceTiming']
});
bodaEnv.toolsFunc.defineProperty(window, "PerformanceServerTiming", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['PerformanceServerTiming']
});
bodaEnv.toolsFunc.defineProperty(window, "PerformanceResourceTiming", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['PerformanceResourceTiming']
});
bodaEnv.toolsFunc.defineProperty(window, "PerformancePaintTiming", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['PerformancePaintTiming']
});
bodaEnv.toolsFunc.defineProperty(window, "PerformanceObserverEntryList", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['PerformanceObserverEntryList']
});
bodaEnv.toolsFunc.defineProperty(window, "PerformanceObserver", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['PerformanceObserver']
});
bodaEnv.toolsFunc.defineProperty(window, "PerformanceNavigationTiming", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['PerformanceNavigationTiming']
});
bodaEnv.toolsFunc.defineProperty(window, "PerformanceNavigation", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['PerformanceNavigation']
});
bodaEnv.toolsFunc.defineProperty(window, "PerformanceMeasure", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['PerformanceMeasure']
});
bodaEnv.toolsFunc.defineProperty(window, "PerformanceMark", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['PerformanceMark']
});
bodaEnv.toolsFunc.defineProperty(window, "PerformanceLongTaskTiming", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['PerformanceLongTaskTiming']
});
bodaEnv.toolsFunc.defineProperty(window, "PerformanceEventTiming", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['PerformanceEventTiming']
});
bodaEnv.toolsFunc.defineProperty(window, "PerformanceEntry", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['PerformanceEntry']
});
bodaEnv.toolsFunc.defineProperty(window, "PerformanceElementTiming", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['PerformanceElementTiming']
});
bodaEnv.toolsFunc.defineProperty(window, "Performance", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['Performance']
});
bodaEnv.toolsFunc.defineProperty(window, "Path2D", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['Path2D']
});
bodaEnv.toolsFunc.defineProperty(window, "PannerNode", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['PannerNode']
});
bodaEnv.toolsFunc.defineProperty(window, "PageTransitionEvent", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['PageTransitionEvent']
});
bodaEnv.toolsFunc.defineProperty(window, "OverconstrainedError", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['OverconstrainedError']
});
bodaEnv.toolsFunc.defineProperty(window, "OscillatorNode", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['OscillatorNode']
});
bodaEnv.toolsFunc.defineProperty(window, "OffscreenCanvasRenderingContext2D", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['OffscreenCanvasRenderingContext2D']
});
bodaEnv.toolsFunc.defineProperty(window, "OffscreenCanvas", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['OffscreenCanvas']
});
bodaEnv.toolsFunc.defineProperty(window, "OfflineAudioContext", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['OfflineAudioContext']
});
bodaEnv.toolsFunc.defineProperty(window, "OfflineAudioCompletionEvent", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['OfflineAudioCompletionEvent']
});
bodaEnv.toolsFunc.defineProperty(window, "NodeList", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['NodeList']
});
bodaEnv.toolsFunc.defineProperty(window, "NodeIterator", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['NodeIterator']
});
bodaEnv.toolsFunc.defineProperty(window, "NodeFilter", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['NodeFilter']
});
bodaEnv.toolsFunc.defineProperty(window, "Node", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['Node']
});
bodaEnv.toolsFunc.defineProperty(window, "NetworkInformation", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['NetworkInformation']
});
bodaEnv.toolsFunc.defineProperty(window, "Navigator", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['Navigator']
});
bodaEnv.toolsFunc.defineProperty(window, "NavigationTransition", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['NavigationTransition']
});
bodaEnv.toolsFunc.defineProperty(window, "NavigationHistoryEntry", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['NavigationHistoryEntry']
});
bodaEnv.toolsFunc.defineProperty(window, "NavigationDestination", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['NavigationDestination']
});
bodaEnv.toolsFunc.defineProperty(window, "NavigationCurrentEntryChangeEvent", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['NavigationCurrentEntryChangeEvent']
});
bodaEnv.toolsFunc.defineProperty(window, "Navigation", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['Navigation']
});
bodaEnv.toolsFunc.defineProperty(window, "NavigateEvent", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['NavigateEvent']
});
bodaEnv.toolsFunc.defineProperty(window, "NamedNodeMap", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['NamedNodeMap']
});
bodaEnv.toolsFunc.defineProperty(window, "MutationRecord", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['MutationRecord']
});
bodaEnv.toolsFunc.defineProperty(window, "MutationObserver", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['MutationObserver']
});
bodaEnv.toolsFunc.defineProperty(window, "MouseEvent", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['MouseEvent']
});
bodaEnv.toolsFunc.defineProperty(window, "MimeTypeArray", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['MimeTypeArray']
});
bodaEnv.toolsFunc.defineProperty(window, "MimeType", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['MimeType']
});
bodaEnv.toolsFunc.defineProperty(window, "MessagePort", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['MessagePort']
});
bodaEnv.toolsFunc.defineProperty(window, "MessageEvent", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['MessageEvent']
});
bodaEnv.toolsFunc.defineProperty(window, "MessageChannel", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['MessageChannel']
});
bodaEnv.toolsFunc.defineProperty(window, "MediaStreamTrackProcessor", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['MediaStreamTrackProcessor']
});
bodaEnv.toolsFunc.defineProperty(window, "MediaStreamTrackGenerator", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['MediaStreamTrackGenerator']
});
bodaEnv.toolsFunc.defineProperty(window, "MediaStreamTrackEvent", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['MediaStreamTrackEvent']
});
bodaEnv.toolsFunc.defineProperty(window, "MediaStreamTrack", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['MediaStreamTrack']
});
bodaEnv.toolsFunc.defineProperty(window, "MediaStreamEvent", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['MediaStreamEvent']
});
bodaEnv.toolsFunc.defineProperty(window, "MediaStreamAudioSourceNode", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['MediaStreamAudioSourceNode']
});
bodaEnv.toolsFunc.defineProperty(window, "MediaStreamAudioDestinationNode", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['MediaStreamAudioDestinationNode']
});
bodaEnv.toolsFunc.defineProperty(window, "MediaStream", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['MediaStream']
});
bodaEnv.toolsFunc.defineProperty(window, "MediaSourceHandle", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['MediaSourceHandle']
});
bodaEnv.toolsFunc.defineProperty(window, "MediaSource", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['MediaSource']
});
bodaEnv.toolsFunc.defineProperty(window, "MediaRecorder", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['MediaRecorder']
});
bodaEnv.toolsFunc.defineProperty(window, "MediaQueryListEvent", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['MediaQueryListEvent']
});
bodaEnv.toolsFunc.defineProperty(window, "MediaQueryList", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['MediaQueryList']
});
bodaEnv.toolsFunc.defineProperty(window, "MediaList", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['MediaList']
});
bodaEnv.toolsFunc.defineProperty(window, "MediaError", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['MediaError']
});
bodaEnv.toolsFunc.defineProperty(window, "MediaEncryptedEvent", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['MediaEncryptedEvent']
});
bodaEnv.toolsFunc.defineProperty(window, "MediaElementAudioSourceNode", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['MediaElementAudioSourceNode']
});
bodaEnv.toolsFunc.defineProperty(window, "MediaCapabilities", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['MediaCapabilities']
});
bodaEnv.toolsFunc.defineProperty(window, "Location", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['Location']
});
bodaEnv.toolsFunc.defineProperty(window, "LayoutShiftAttribution", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['LayoutShiftAttribution']
});
bodaEnv.toolsFunc.defineProperty(window, "LayoutShift", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['LayoutShift']
});
bodaEnv.toolsFunc.defineProperty(window, "LargestContentfulPaint", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['LargestContentfulPaint']
});
bodaEnv.toolsFunc.defineProperty(window, "KeyframeEffect", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['KeyframeEffect']
});
bodaEnv.toolsFunc.defineProperty(window, "KeyboardEvent", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['KeyboardEvent']
});
bodaEnv.toolsFunc.defineProperty(window, "IntersectionObserverEntry", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['IntersectionObserverEntry']
});
bodaEnv.toolsFunc.defineProperty(window, "IntersectionObserver", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['IntersectionObserver']
});
bodaEnv.toolsFunc.defineProperty(window, "InputEvent", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['InputEvent']
});
bodaEnv.toolsFunc.defineProperty(window, "InputDeviceInfo", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['InputDeviceInfo']
});
bodaEnv.toolsFunc.defineProperty(window, "InputDeviceCapabilities", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['InputDeviceCapabilities']
});
bodaEnv.toolsFunc.defineProperty(window, "ImageData", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['ImageData']
});
bodaEnv.toolsFunc.defineProperty(window, "ImageCapture", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['ImageCapture']
});
bodaEnv.toolsFunc.defineProperty(window, "ImageBitmapRenderingContext", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['ImageBitmapRenderingContext']
});
bodaEnv.toolsFunc.defineProperty(window, "ImageBitmap", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['ImageBitmap']
});
bodaEnv.toolsFunc.defineProperty(window, "IdleDeadline", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['IdleDeadline']
});
bodaEnv.toolsFunc.defineProperty(window, "IIRFilterNode", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['IIRFilterNode']
});
bodaEnv.toolsFunc.defineProperty(window, "IDBVersionChangeEvent", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['IDBVersionChangeEvent']
});
bodaEnv.toolsFunc.defineProperty(window, "IDBTransaction", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['IDBTransaction']
});
bodaEnv.toolsFunc.defineProperty(window, "IDBRequest", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['IDBRequest']
});
bodaEnv.toolsFunc.defineProperty(window, "IDBOpenDBRequest", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['IDBOpenDBRequest']
});
bodaEnv.toolsFunc.defineProperty(window, "IDBObjectStore", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['IDBObjectStore']
});
bodaEnv.toolsFunc.defineProperty(window, "IDBKeyRange", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['IDBKeyRange']
});
bodaEnv.toolsFunc.defineProperty(window, "IDBIndex", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['IDBIndex']
});
bodaEnv.toolsFunc.defineProperty(window, "IDBFactory", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['IDBFactory']
});
bodaEnv.toolsFunc.defineProperty(window, "IDBDatabase", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['IDBDatabase']
});
bodaEnv.toolsFunc.defineProperty(window, "IDBCursorWithValue", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['IDBCursorWithValue']
});
bodaEnv.toolsFunc.defineProperty(window, "IDBCursor", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['IDBCursor']
});
bodaEnv.toolsFunc.defineProperty(window, "History", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['History']
});
bodaEnv.toolsFunc.defineProperty(window, "Headers", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['Headers']
});
bodaEnv.toolsFunc.defineProperty(window, "HashChangeEvent", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['HashChangeEvent']
});
bodaEnv.toolsFunc.defineProperty(window, "HTMLVideoElement", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['HTMLVideoElement']
});
bodaEnv.toolsFunc.defineProperty(window, "HTMLUnknownElement", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['HTMLUnknownElement']
});
bodaEnv.toolsFunc.defineProperty(window, "HTMLUListElement", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['HTMLUListElement']
});
bodaEnv.toolsFunc.defineProperty(window, "HTMLTrackElement", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['HTMLTrackElement']
});
bodaEnv.toolsFunc.defineProperty(window, "HTMLTitleElement", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['HTMLTitleElement']
});
bodaEnv.toolsFunc.defineProperty(window, "HTMLTimeElement", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['HTMLTimeElement']
});
bodaEnv.toolsFunc.defineProperty(window, "HTMLTextAreaElement", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['HTMLTextAreaElement']
});
bodaEnv.toolsFunc.defineProperty(window, "HTMLTemplateElement", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['HTMLTemplateElement']
});
bodaEnv.toolsFunc.defineProperty(window, "HTMLTableSectionElement", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['HTMLTableSectionElement']
});
bodaEnv.toolsFunc.defineProperty(window, "HTMLTableRowElement", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['HTMLTableRowElement']
});
bodaEnv.toolsFunc.defineProperty(window, "HTMLTableElement", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['HTMLTableElement']
});
bodaEnv.toolsFunc.defineProperty(window, "HTMLTableColElement", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['HTMLTableColElement']
});
bodaEnv.toolsFunc.defineProperty(window, "HTMLTableCellElement", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['HTMLTableCellElement']
});
bodaEnv.toolsFunc.defineProperty(window, "HTMLTableCaptionElement", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['HTMLTableCaptionElement']
});
bodaEnv.toolsFunc.defineProperty(window, "HTMLStyleElement", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['HTMLStyleElement']
});
bodaEnv.toolsFunc.defineProperty(window, "HTMLSpanElement", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['HTMLSpanElement']
});
bodaEnv.toolsFunc.defineProperty(window, "HTMLSourceElement", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['HTMLSourceElement']
});
bodaEnv.toolsFunc.defineProperty(window, "HTMLSlotElement", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['HTMLSlotElement']
});
bodaEnv.toolsFunc.defineProperty(window, "HTMLSelectElement", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['HTMLSelectElement']
});
bodaEnv.toolsFunc.defineProperty(window, "HTMLScriptElement", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['HTMLScriptElement']
});
bodaEnv.toolsFunc.defineProperty(window, "HTMLQuoteElement", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['HTMLQuoteElement']
});
bodaEnv.toolsFunc.defineProperty(window, "HTMLProgressElement", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['HTMLProgressElement']
});
bodaEnv.toolsFunc.defineProperty(window, "HTMLPreElement", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['HTMLPreElement']
});
bodaEnv.toolsFunc.defineProperty(window, "HTMLPictureElement", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['HTMLPictureElement']
});
bodaEnv.toolsFunc.defineProperty(window, "HTMLParamElement", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['HTMLParamElement']
});
bodaEnv.toolsFunc.defineProperty(window, "HTMLParagraphElement", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['HTMLParagraphElement']
});
bodaEnv.toolsFunc.defineProperty(window, "HTMLOutputElement", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['HTMLOutputElement']
});
bodaEnv.toolsFunc.defineProperty(window, "HTMLOptionsCollection", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['HTMLOptionsCollection']
});
bodaEnv.toolsFunc.defineProperty(window, "HTMLOptionElement", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['HTMLOptionElement']
});
bodaEnv.toolsFunc.defineProperty(window, "HTMLOptGroupElement", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['HTMLOptGroupElement']
});
bodaEnv.toolsFunc.defineProperty(window, "HTMLObjectElement", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['HTMLObjectElement']
});
bodaEnv.toolsFunc.defineProperty(window, "HTMLOListElement", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['HTMLOListElement']
});
bodaEnv.toolsFunc.defineProperty(window, "HTMLModElement", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['HTMLModElement']
});
bodaEnv.toolsFunc.defineProperty(window, "HTMLMeterElement", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['HTMLMeterElement']
});
bodaEnv.toolsFunc.defineProperty(window, "HTMLMetaElement", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['HTMLMetaElement']
});
bodaEnv.toolsFunc.defineProperty(window, "HTMLMenuElement", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['HTMLMenuElement']
});
bodaEnv.toolsFunc.defineProperty(window, "HTMLMediaElement", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['HTMLMediaElement']
});
bodaEnv.toolsFunc.defineProperty(window, "HTMLMarqueeElement", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['HTMLMarqueeElement']
});
bodaEnv.toolsFunc.defineProperty(window, "HTMLMapElement", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['HTMLMapElement']
});
bodaEnv.toolsFunc.defineProperty(window, "HTMLLinkElement", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['HTMLLinkElement']
});
bodaEnv.toolsFunc.defineProperty(window, "HTMLLegendElement", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['HTMLLegendElement']
});
bodaEnv.toolsFunc.defineProperty(window, "HTMLLabelElement", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['HTMLLabelElement']
});
bodaEnv.toolsFunc.defineProperty(window, "HTMLLIElement", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['HTMLLIElement']
});
bodaEnv.toolsFunc.defineProperty(window, "HTMLInputElement", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['HTMLInputElement']
});
bodaEnv.toolsFunc.defineProperty(window, "HTMLImageElement", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['HTMLImageElement']
});
bodaEnv.toolsFunc.defineProperty(window, "HTMLIFrameElement", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['HTMLIFrameElement']
});
bodaEnv.toolsFunc.defineProperty(window, "HTMLHtmlElement", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['HTMLHtmlElement']
});
bodaEnv.toolsFunc.defineProperty(window, "HTMLHeadingElement", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['HTMLHeadingElement']
});
bodaEnv.toolsFunc.defineProperty(window, "HTMLHeadElement", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['HTMLHeadElement']
});
bodaEnv.toolsFunc.defineProperty(window, "HTMLHRElement", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['HTMLHRElement']
});
bodaEnv.toolsFunc.defineProperty(window, "HTMLFrameSetElement", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['HTMLFrameSetElement']
});
bodaEnv.toolsFunc.defineProperty(window, "HTMLFrameElement", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['HTMLFrameElement']
});
bodaEnv.toolsFunc.defineProperty(window, "HTMLFormElement", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['HTMLFormElement']
});
bodaEnv.toolsFunc.defineProperty(window, "HTMLFormControlsCollection", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['HTMLFormControlsCollection']
});
bodaEnv.toolsFunc.defineProperty(window, "HTMLFontElement", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['HTMLFontElement']
});
bodaEnv.toolsFunc.defineProperty(window, "HTMLFieldSetElement", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['HTMLFieldSetElement']
});
bodaEnv.toolsFunc.defineProperty(window, "HTMLEmbedElement", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['HTMLEmbedElement']
});
bodaEnv.toolsFunc.defineProperty(window, "HTMLElement", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['HTMLElement']
});
bodaEnv.toolsFunc.defineProperty(window, "HTMLDocument", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['HTMLDocument']
});
bodaEnv.toolsFunc.defineProperty(window, "HTMLDivElement", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['HTMLDivElement']
});
bodaEnv.toolsFunc.defineProperty(window, "HTMLDirectoryElement", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['HTMLDirectoryElement']
});
bodaEnv.toolsFunc.defineProperty(window, "HTMLDialogElement", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['HTMLDialogElement']
});
bodaEnv.toolsFunc.defineProperty(window, "HTMLDetailsElement", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['HTMLDetailsElement']
});
bodaEnv.toolsFunc.defineProperty(window, "HTMLDataListElement", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['HTMLDataListElement']
});
bodaEnv.toolsFunc.defineProperty(window, "HTMLDataElement", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['HTMLDataElement']
});
bodaEnv.toolsFunc.defineProperty(window, "HTMLDListElement", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['HTMLDListElement']
});
bodaEnv.toolsFunc.defineProperty(window, "HTMLCollection", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['HTMLCollection']
});
bodaEnv.toolsFunc.defineProperty(window, "HTMLCanvasElement", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['HTMLCanvasElement']
});
bodaEnv.toolsFunc.defineProperty(window, "HTMLButtonElement", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['HTMLButtonElement']
});
bodaEnv.toolsFunc.defineProperty(window, "HTMLBodyElement", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['HTMLBodyElement']
});
bodaEnv.toolsFunc.defineProperty(window, "HTMLBaseElement", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['HTMLBaseElement']
});
bodaEnv.toolsFunc.defineProperty(window, "HTMLBRElement", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['HTMLBRElement']
});
bodaEnv.toolsFunc.defineProperty(window, "HTMLAudioElement", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['HTMLAudioElement']
});
bodaEnv.toolsFunc.defineProperty(window, "HTMLAreaElement", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['HTMLAreaElement']
});
bodaEnv.toolsFunc.defineProperty(window, "HTMLAnchorElement", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['HTMLAnchorElement']
});
bodaEnv.toolsFunc.defineProperty(window, "HTMLAllCollection", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['HTMLAllCollection']
});
bodaEnv.toolsFunc.defineProperty(window, "GeolocationPositionError", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['GeolocationPositionError']
});
bodaEnv.toolsFunc.defineProperty(window, "GeolocationPosition", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['GeolocationPosition']
});
bodaEnv.toolsFunc.defineProperty(window, "GeolocationCoordinates", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['GeolocationCoordinates']
});
bodaEnv.toolsFunc.defineProperty(window, "Geolocation", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['Geolocation']
});
bodaEnv.toolsFunc.defineProperty(window, "GamepadHapticActuator", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['GamepadHapticActuator']
});
bodaEnv.toolsFunc.defineProperty(window, "GamepadEvent", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['GamepadEvent']
});
bodaEnv.toolsFunc.defineProperty(window, "GamepadButton", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['GamepadButton']
});
bodaEnv.toolsFunc.defineProperty(window, "Gamepad", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['Gamepad']
});
bodaEnv.toolsFunc.defineProperty(window, "GainNode", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['GainNode']
});
bodaEnv.toolsFunc.defineProperty(window, "FormDataEvent", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['FormDataEvent']
});
bodaEnv.toolsFunc.defineProperty(window, "FormData", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['FormData']
});
bodaEnv.toolsFunc.defineProperty(window, "FontFaceSetLoadEvent", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['FontFaceSetLoadEvent']
});
bodaEnv.toolsFunc.defineProperty(window, "FontFace", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['FontFace']
});
bodaEnv.toolsFunc.defineProperty(window, "FocusEvent", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['FocusEvent']
});
bodaEnv.toolsFunc.defineProperty(window, "FileReader", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['FileReader']
});
bodaEnv.toolsFunc.defineProperty(window, "FileList", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['FileList']
});
bodaEnv.toolsFunc.defineProperty(window, "File", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['File']
});
bodaEnv.toolsFunc.defineProperty(window, "FeaturePolicy", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['FeaturePolicy']
});
bodaEnv.toolsFunc.defineProperty(window, "External", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['External']
});
bodaEnv.toolsFunc.defineProperty(window, "EventTarget", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['EventTarget']
});
bodaEnv.toolsFunc.defineProperty(window, "EventSource", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['EventSource']
});
bodaEnv.toolsFunc.defineProperty(window, "EventCounts", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['EventCounts']
});
bodaEnv.toolsFunc.defineProperty(window, "Event", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['Event']
});
bodaEnv.toolsFunc.defineProperty(window, "ErrorEvent", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['ErrorEvent']
});
bodaEnv.toolsFunc.defineProperty(window, "ElementInternals", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['ElementInternals']
});
bodaEnv.toolsFunc.defineProperty(window, "Element", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['Element']
});
bodaEnv.toolsFunc.defineProperty(window, "DynamicsCompressorNode", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['DynamicsCompressorNode']
});
bodaEnv.toolsFunc.defineProperty(window, "DragEvent", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['DragEvent']
});
bodaEnv.toolsFunc.defineProperty(window, "DocumentType", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['DocumentType']
});
bodaEnv.toolsFunc.defineProperty(window, "DocumentFragment", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['DocumentFragment']
});
bodaEnv.toolsFunc.defineProperty(window, "Document", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['Document']
});
bodaEnv.toolsFunc.defineProperty(window, "DelayNode", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['DelayNode']
});
bodaEnv.toolsFunc.defineProperty(window, "DecompressionStream", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['DecompressionStream']
});
bodaEnv.toolsFunc.defineProperty(window, "DataTransferItemList", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['DataTransferItemList']
});
bodaEnv.toolsFunc.defineProperty(window, "DataTransferItem", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['DataTransferItem']
});
bodaEnv.toolsFunc.defineProperty(window, "DataTransfer", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['DataTransfer']
});
bodaEnv.toolsFunc.defineProperty(window, "DOMTokenList", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['DOMTokenList']
});
bodaEnv.toolsFunc.defineProperty(window, "DOMStringMap", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['DOMStringMap']
});
bodaEnv.toolsFunc.defineProperty(window, "DOMStringList", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['DOMStringList']
});
bodaEnv.toolsFunc.defineProperty(window, "DOMRectReadOnly", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['DOMRectReadOnly']
});
bodaEnv.toolsFunc.defineProperty(window, "DOMRectList", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['DOMRectList']
});
bodaEnv.toolsFunc.defineProperty(window, "DOMRect", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['DOMRect']
});
bodaEnv.toolsFunc.defineProperty(window, "DOMQuad", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['DOMQuad']
});
bodaEnv.toolsFunc.defineProperty(window, "DOMPointReadOnly", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['DOMPointReadOnly']
});
bodaEnv.toolsFunc.defineProperty(window, "DOMPoint", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['DOMPoint']
});
bodaEnv.toolsFunc.defineProperty(window, "DOMParser", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['DOMParser']
});
bodaEnv.toolsFunc.defineProperty(window, "DOMMatrixReadOnly", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['DOMMatrixReadOnly']
});
bodaEnv.toolsFunc.defineProperty(window, "DOMMatrix", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['DOMMatrix']
});
bodaEnv.toolsFunc.defineProperty(window, "DOMImplementation", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['DOMImplementation']
});
bodaEnv.toolsFunc.defineProperty(window, "DOMException", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['DOMException']
});
bodaEnv.toolsFunc.defineProperty(window, "DOMError", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['DOMError']
});
bodaEnv.toolsFunc.defineProperty(window, "CustomStateSet", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['CustomStateSet']
});
bodaEnv.toolsFunc.defineProperty(window, "CustomEvent", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['CustomEvent']
});
bodaEnv.toolsFunc.defineProperty(window, "CustomElementRegistry", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['CustomElementRegistry']
});
bodaEnv.toolsFunc.defineProperty(window, "Crypto", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['Crypto']
});
bodaEnv.toolsFunc.defineProperty(window, "CountQueuingStrategy", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['CountQueuingStrategy']
});
bodaEnv.toolsFunc.defineProperty(window, "ConvolverNode", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['ConvolverNode']
});
bodaEnv.toolsFunc.defineProperty(window, "ConstantSourceNode", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['ConstantSourceNode']
});
bodaEnv.toolsFunc.defineProperty(window, "CompressionStream", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['CompressionStream']
});
bodaEnv.toolsFunc.defineProperty(window, "CompositionEvent", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['CompositionEvent']
});
bodaEnv.toolsFunc.defineProperty(window, "Comment", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['Comment']
});
bodaEnv.toolsFunc.defineProperty(window, "CloseEvent", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['CloseEvent']
});
bodaEnv.toolsFunc.defineProperty(window, "ClipboardEvent", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['ClipboardEvent']
});
bodaEnv.toolsFunc.defineProperty(window, "CharacterData", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['CharacterData']
});
bodaEnv.toolsFunc.defineProperty(window, "ChannelSplitterNode", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['ChannelSplitterNode']
});
bodaEnv.toolsFunc.defineProperty(window, "ChannelMergerNode", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['ChannelMergerNode']
});
bodaEnv.toolsFunc.defineProperty(window, "CanvasRenderingContext2D", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['CanvasRenderingContext2D']
});
bodaEnv.toolsFunc.defineProperty(window, "CanvasPattern", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['CanvasPattern']
});
bodaEnv.toolsFunc.defineProperty(window, "CanvasGradient", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['CanvasGradient']
});
bodaEnv.toolsFunc.defineProperty(window, "CanvasCaptureMediaStreamTrack", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['CanvasCaptureMediaStreamTrack']
});
bodaEnv.toolsFunc.defineProperty(window, "CSSVariableReferenceValue", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['CSSVariableReferenceValue']
});
bodaEnv.toolsFunc.defineProperty(window, "CSSUnparsedValue", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['CSSUnparsedValue']
});
bodaEnv.toolsFunc.defineProperty(window, "CSSUnitValue", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['CSSUnitValue']
});
bodaEnv.toolsFunc.defineProperty(window, "CSSTranslate", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['CSSTranslate']
});
bodaEnv.toolsFunc.defineProperty(window, "CSSTransformValue", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['CSSTransformValue']
});
bodaEnv.toolsFunc.defineProperty(window, "CSSTransformComponent", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['CSSTransformComponent']
});
bodaEnv.toolsFunc.defineProperty(window, "CSSSupportsRule", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['CSSSupportsRule']
});
bodaEnv.toolsFunc.defineProperty(window, "CSSStyleValue", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['CSSStyleValue']
});
bodaEnv.toolsFunc.defineProperty(window, "CSSStyleSheet", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['CSSStyleSheet']
});
bodaEnv.toolsFunc.defineProperty(window, "CSSStyleRule", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['CSSStyleRule']
});
bodaEnv.toolsFunc.defineProperty(window, "CSSStyleDeclaration", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['CSSStyleDeclaration']
});
bodaEnv.toolsFunc.defineProperty(window, "CSSSkewY", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['CSSSkewY']
});
bodaEnv.toolsFunc.defineProperty(window, "CSSSkewX", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['CSSSkewX']
});
bodaEnv.toolsFunc.defineProperty(window, "CSSSkew", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['CSSSkew']
});
bodaEnv.toolsFunc.defineProperty(window, "CSSScale", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['CSSScale']
});
bodaEnv.toolsFunc.defineProperty(window, "CSSRuleList", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['CSSRuleList']
});
bodaEnv.toolsFunc.defineProperty(window, "CSSRule", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['CSSRule']
});
bodaEnv.toolsFunc.defineProperty(window, "CSSRotate", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['CSSRotate']
});
bodaEnv.toolsFunc.defineProperty(window, "CSSPropertyRule", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['CSSPropertyRule']
});
bodaEnv.toolsFunc.defineProperty(window, "CSSPositionValue", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['CSSPositionValue']
});
bodaEnv.toolsFunc.defineProperty(window, "CSSPerspective", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['CSSPerspective']
});
bodaEnv.toolsFunc.defineProperty(window, "CSSPageRule", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['CSSPageRule']
});
bodaEnv.toolsFunc.defineProperty(window, "CSSNumericValue", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['CSSNumericValue']
});
bodaEnv.toolsFunc.defineProperty(window, "CSSNumericArray", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['CSSNumericArray']
});
bodaEnv.toolsFunc.defineProperty(window, "CSSNamespaceRule", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['CSSNamespaceRule']
});
bodaEnv.toolsFunc.defineProperty(window, "CSSMediaRule", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['CSSMediaRule']
});
bodaEnv.toolsFunc.defineProperty(window, "CSSMatrixComponent", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['CSSMatrixComponent']
});
bodaEnv.toolsFunc.defineProperty(window, "CSSMathValue", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['CSSMathValue']
});
bodaEnv.toolsFunc.defineProperty(window, "CSSMathSum", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['CSSMathSum']
});
bodaEnv.toolsFunc.defineProperty(window, "CSSMathProduct", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['CSSMathProduct']
});
bodaEnv.toolsFunc.defineProperty(window, "CSSMathNegate", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['CSSMathNegate']
});
bodaEnv.toolsFunc.defineProperty(window, "CSSMathMin", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['CSSMathMin']
});
bodaEnv.toolsFunc.defineProperty(window, "CSSMathMax", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['CSSMathMax']
});
bodaEnv.toolsFunc.defineProperty(window, "CSSMathInvert", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['CSSMathInvert']
});
bodaEnv.toolsFunc.defineProperty(window, "CSSMathClamp", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['CSSMathClamp']
});
bodaEnv.toolsFunc.defineProperty(window, "CSSLayerStatementRule", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['CSSLayerStatementRule']
});
bodaEnv.toolsFunc.defineProperty(window, "CSSLayerBlockRule", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['CSSLayerBlockRule']
});
bodaEnv.toolsFunc.defineProperty(window, "CSSKeywordValue", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['CSSKeywordValue']
});
bodaEnv.toolsFunc.defineProperty(window, "CSSKeyframesRule", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['CSSKeyframesRule']
});
bodaEnv.toolsFunc.defineProperty(window, "CSSKeyframeRule", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['CSSKeyframeRule']
});
bodaEnv.toolsFunc.defineProperty(window, "CSSImportRule", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['CSSImportRule']
});
bodaEnv.toolsFunc.defineProperty(window, "CSSImageValue", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['CSSImageValue']
});
bodaEnv.toolsFunc.defineProperty(window, "CSSGroupingRule", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['CSSGroupingRule']
});
bodaEnv.toolsFunc.defineProperty(window, "CSSFontPaletteValuesRule", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['CSSFontPaletteValuesRule']
});
bodaEnv.toolsFunc.defineProperty(window, "CSSFontFaceRule", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['CSSFontFaceRule']
});
bodaEnv.toolsFunc.defineProperty(window, "CSSCounterStyleRule", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['CSSCounterStyleRule']
});
bodaEnv.toolsFunc.defineProperty(window, "CSSContainerRule", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['CSSContainerRule']
});
bodaEnv.toolsFunc.defineProperty(window, "CSSConditionRule", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['CSSConditionRule']
});
bodaEnv.toolsFunc.defineProperty(window, "CSS", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['CSS']
});
bodaEnv.toolsFunc.defineProperty(window, "CDATASection", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['CDATASection']
});
bodaEnv.toolsFunc.defineProperty(window, "ByteLengthQueuingStrategy", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['ByteLengthQueuingStrategy']
});
bodaEnv.toolsFunc.defineProperty(window, "BroadcastChannel", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['BroadcastChannel']
});
bodaEnv.toolsFunc.defineProperty(window, "BlobEvent", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['BlobEvent']
});
bodaEnv.toolsFunc.defineProperty(window, "Blob", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['Blob']
});
bodaEnv.toolsFunc.defineProperty(window, "BiquadFilterNode", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['BiquadFilterNode']
});
bodaEnv.toolsFunc.defineProperty(window, "BeforeUnloadEvent", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['BeforeUnloadEvent']
});
bodaEnv.toolsFunc.defineProperty(window, "BeforeInstallPromptEvent", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['BeforeInstallPromptEvent']
});
bodaEnv.toolsFunc.defineProperty(window, "BaseAudioContext", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['BaseAudioContext']
});
bodaEnv.toolsFunc.defineProperty(window, "BarProp", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['BarProp']
});
bodaEnv.toolsFunc.defineProperty(window, "AudioWorkletNode", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['AudioWorkletNode']
});
bodaEnv.toolsFunc.defineProperty(window, "AudioSinkInfo", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['AudioSinkInfo']
});
bodaEnv.toolsFunc.defineProperty(window, "AudioScheduledSourceNode", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['AudioScheduledSourceNode']
});
bodaEnv.toolsFunc.defineProperty(window, "AudioProcessingEvent", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['AudioProcessingEvent']
});
bodaEnv.toolsFunc.defineProperty(window, "AudioParamMap", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['AudioParamMap']
});
bodaEnv.toolsFunc.defineProperty(window, "AudioParam", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['AudioParam']
});
bodaEnv.toolsFunc.defineProperty(window, "AudioNode", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['AudioNode']
});
bodaEnv.toolsFunc.defineProperty(window, "AudioListener", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['AudioListener']
});
bodaEnv.toolsFunc.defineProperty(window, "AudioDestinationNode", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['AudioDestinationNode']
});
bodaEnv.toolsFunc.defineProperty(window, "AudioContext", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['AudioContext']
});
bodaEnv.toolsFunc.defineProperty(window, "AudioBufferSourceNode", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['AudioBufferSourceNode']
});
bodaEnv.toolsFunc.defineProperty(window, "AudioBuffer", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['AudioBuffer']
});
bodaEnv.toolsFunc.defineProperty(window, "Attr", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['Attr']
});
bodaEnv.toolsFunc.defineProperty(window, "AnimationEvent", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['AnimationEvent']
});
bodaEnv.toolsFunc.defineProperty(window, "AnimationEffect", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['AnimationEffect']
});
bodaEnv.toolsFunc.defineProperty(window, "Animation", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['Animation']
});
bodaEnv.toolsFunc.defineProperty(window, "AnalyserNode", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['AnalyserNode']
});
bodaEnv.toolsFunc.defineProperty(window, "AbstractRange", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['AbstractRange']
});
bodaEnv.toolsFunc.defineProperty(window, "AbortSignal", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['AbortSignal']
});
bodaEnv.toolsFunc.defineProperty(window, "AbortController", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['AbortController']
});
bodaEnv.toolsFunc.defineProperty(window, "self", {
  configurable: true,
  enumerable: true,
  get: {
    self() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "self_get", arguments);
    }
  }.self,
  set: {
    self() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "self_set", arguments);
    }
  }.self
});
bodaEnv.toolsFunc.defineProperty(window, "document", {
  configurable: false,
  enumerable: true,
  get: {
    document() {
      //debugger
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "document_get", arguments);
    }
  }.document,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(window, "name", {
  configurable: true,
  enumerable: true,
  get: {
    name() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "name_get", arguments, '');
    }
  }.name,
  set: {
    name() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "name_set", arguments);
    }
  }.name
});
bodaEnv.toolsFunc.defineProperty(window, "location", {
  configurable: false,
  enumerable: true,
  get: {
    location() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "location_get", arguments);
    }
  }.location,
  set: {
    location() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "location_set", arguments);
    }
  }.location
});
bodaEnv.toolsFunc.defineProperty(window, "customElements", {
  configurable: true,
  enumerable: true,
  get: {
    customElements() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "customElements_get", arguments);
    }
  }.customElements,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(window, "history", {
  configurable: true,
  enumerable: true,
  get: {
    history() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "history_get", arguments);
    }
  }.history,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(window, "navigation", {
  configurable: true,
  enumerable: true,
  get: {
    navigation() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "navigation_get", arguments);
    }
  }.navigation,
  set: {
    navigation() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "navigation_set", arguments);
    }
  }.navigation
});
bodaEnv.toolsFunc.defineProperty(window, "locationbar", {
  configurable: true,
  enumerable: true,
  get: {
    locationbar() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "locationbar_get", arguments);
    }
  }.locationbar,
  set: {
    locationbar() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "locationbar_set", arguments);
    }
  }.locationbar
});
bodaEnv.toolsFunc.defineProperty(window, "menubar", {
  configurable: true,
  enumerable: true,
  get: {
    menubar() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "menubar_get", arguments);
    }
  }.menubar,
  set: {
    menubar() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "menubar_set", arguments);
    }
  }.menubar
});
bodaEnv.toolsFunc.defineProperty(window, "personalbar", {
  configurable: true,
  enumerable: true,
  get: {
    personalbar() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "personalbar_get", arguments);
    }
  }.personalbar,
  set: {
    personalbar() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "personalbar_set", arguments);
    }
  }.personalbar
});
bodaEnv.toolsFunc.defineProperty(window, "scrollbars", {
  configurable: true,
  enumerable: true,
  get: {
    scrollbars() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "scrollbars_get", arguments);
    }
  }.scrollbars,
  set: {
    scrollbars() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "scrollbars_set", arguments);
    }
  }.scrollbars
});
bodaEnv.toolsFunc.defineProperty(window, "statusbar", {
  configurable: true,
  enumerable: true,
  get: {
    statusbar() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "statusbar_get", arguments);
    }
  }.statusbar,
  set: {
    statusbar() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "statusbar_set", arguments);
    }
  }.statusbar
});
bodaEnv.toolsFunc.defineProperty(window, "toolbar", {
  configurable: true,
  enumerable: true,
  get: {
    toolbar() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "toolbar_get", arguments);
    }
  }.toolbar,
  set: {
    toolbar() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "toolbar_set", arguments);
    }
  }.toolbar
});
bodaEnv.toolsFunc.defineProperty(window, "status", {
  configurable: true,
  enumerable: true,
  get: {
    status() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "status_get", arguments, '');
    }
  }.status,
  set: {
    status() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "status_set", arguments);
    }
  }.status
});
bodaEnv.toolsFunc.defineProperty(window, "closed", {
  configurable: true,
  enumerable: true,
  get: {
    closed() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "closed_get", arguments, false);
    }
  }.closed,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(window, "frames", {
  configurable: true,
  enumerable: true,
  get: {
    frames() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "frames_get", arguments);
    }
  }.frames,
  set: {
    frames() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "frames_set", arguments);
    }
  }.frames
});
bodaEnv.toolsFunc.defineProperty(window, "length", {
  configurable: true,
  enumerable: true,
  get: {
    length() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "length_get", arguments, 0);
    }
  }.length,
  set: {
    length() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "length_set", arguments);
    }
  }.length
});
bodaEnv.toolsFunc.defineProperty(window, "top", {
  configurable: false,
  enumerable: true,
  get: {
    top() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "top_get", arguments);
    }
  }.top,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(window, "opener", {
  configurable: true,
  enumerable: true,
  get: {
    opener() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "opener_get", arguments, null);
    }
  }.opener,
  set: {
    opener() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "opener_set", arguments);
    }
  }.opener
});
bodaEnv.toolsFunc.defineProperty(window, "parent", {
  configurable: true,
  enumerable: true,
  get: {
    parent() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "parent_get", arguments);
    }
  }.parent,
  set: {
    parent() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "parent_set", arguments);
    }
  }.parent
});
bodaEnv.toolsFunc.defineProperty(window, "frameElement", {
  configurable: true,
  enumerable: true,
  get: {
    frameElement() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "frameElement_get", arguments, null);
    }
  }.frameElement,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(window, "navigator", {
  configurable: true,
  enumerable: true,
  get: {
    navigator() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "navigator_get", arguments);
    }
  }.navigator,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(window, "origin", {
  configurable: true,
  enumerable: true,
  get: {
    origin() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "origin_get", arguments, 'null');
    }
  }.origin,
  set: {
    origin() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "origin_set", arguments);
    }
  }.origin
});
bodaEnv.toolsFunc.defineProperty(window, "external", {
  configurable: true,
  enumerable: true,
  get: {
    external() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "external_get", arguments);
    }
  }.external,
  set: {
    external() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "external_set", arguments);
    }
  }.external
});
bodaEnv.toolsFunc.defineProperty(window, "screen", {
  configurable: true,
  enumerable: true,
  get: {
    screen() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "screen_get", arguments);
    }
  }.screen,
  set: {
    screen() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "screen_set", arguments);
    }
  }.screen
});
bodaEnv.toolsFunc.defineProperty(window, "innerWidth", {
  configurable: true,
  enumerable: true,
  get: {
    innerWidth() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "innerWidth_get", arguments, 1440);
    }
  }.innerWidth,
  set: {
    innerWidth() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "innerWidth_set", arguments);
    }
  }.innerWidth
});
bodaEnv.toolsFunc.defineProperty(window, "innerHeight", {
  configurable: true,
  enumerable: true,
  get: {
    innerHeight() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "innerHeight_get", arguments, 196);
    }
  }.innerHeight,
  set: {
    innerHeight() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "innerHeight_set", arguments);
    }
  }.innerHeight
});
bodaEnv.toolsFunc.defineProperty(window, "scrollX", {
  configurable: true,
  enumerable: true,
  get: {
    scrollX() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "scrollX_get", arguments, 0);
    }
  }.scrollX,
  set: {
    scrollX() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "scrollX_set", arguments);
    }
  }.scrollX
});
bodaEnv.toolsFunc.defineProperty(window, "pageXOffset", {
  configurable: true,
  enumerable: true,
  get: {
    pageXOffset() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "pageXOffset_get", arguments, 0);
    }
  }.pageXOffset,
  set: {
    pageXOffset() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "pageXOffset_set", arguments);
    }
  }.pageXOffset
});
bodaEnv.toolsFunc.defineProperty(window, "scrollY", {
  configurable: true,
  enumerable: true,
  get: {
    scrollY() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "scrollY_get", arguments, 0);
    }
  }.scrollY,
  set: {
    scrollY() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "scrollY_set", arguments);
    }
  }.scrollY
});
bodaEnv.toolsFunc.defineProperty(window, "pageYOffset", {
  configurable: true,
  enumerable: true,
  get: {
    pageYOffset() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "pageYOffset_get", arguments, 0);
    }
  }.pageYOffset,
  set: {
    pageYOffset() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "pageYOffset_set", arguments);
    }
  }.pageYOffset
});
bodaEnv.toolsFunc.defineProperty(window, "visualViewport", {
  configurable: true,
  enumerable: true,
  get: {
    visualViewport() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "visualViewport_get", arguments);
    }
  }.visualViewport,
  set: {
    visualViewport() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "visualViewport_set", arguments);
    }
  }.visualViewport
});
bodaEnv.toolsFunc.defineProperty(window, "screenX", {
  configurable: true,
  enumerable: true,
  get: {
    screenX() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "screenX_get", arguments, 0);
    }
  }.screenX,
  set: {
    screenX() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "screenX_set", arguments);
    }
  }.screenX
});
bodaEnv.toolsFunc.defineProperty(window, "screenY", {
  configurable: true,
  enumerable: true,
  get: {
    screenY() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "screenY_get", arguments, 0);
    }
  }.screenY,
  set: {
    screenY() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "screenY_set", arguments);
    }
  }.screenY
});
bodaEnv.toolsFunc.defineProperty(window, "outerWidth", {
  configurable: true,
  enumerable: true,
  get: {
    outerWidth() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "outerWidth_get", arguments, 1440);
    }
  }.outerWidth,
  set: {
    outerWidth() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "outerWidth_set", arguments);
    }
  }.outerWidth
});
bodaEnv.toolsFunc.defineProperty(window, "outerHeight", {
  configurable: true,
  enumerable: true,
  get: {
    outerHeight() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "outerHeight_get", arguments, 912);
    }
  }.outerHeight,
  set: {
    outerHeight() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "outerHeight_set", arguments);
    }
  }.outerHeight
});
bodaEnv.toolsFunc.defineProperty(window, "devicePixelRatio", {
  configurable: true,
  enumerable: true,
  get: {
    devicePixelRatio() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "devicePixelRatio_get", arguments, 1.5);
    }
  }.devicePixelRatio,
  set: {
    devicePixelRatio() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "devicePixelRatio_set", arguments);
    }
  }.devicePixelRatio
});
bodaEnv.toolsFunc.defineProperty(window, "clientInformation", {
  configurable: true,
  enumerable: true,
  get: {
    clientInformation() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "clientInformation_get", arguments);
    }
  }.clientInformation,
  set: {
    clientInformation() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "clientInformation_set", arguments);
    }
  }.clientInformation
});
bodaEnv.toolsFunc.defineProperty(window, "offscreenBuffering", {
  configurable: true,
  enumerable: false,
  get: {
    offscreenBuffering() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "offscreenBuffering_get", arguments, true);
    }
  }.offscreenBuffering,
  set: {
    offscreenBuffering() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "offscreenBuffering_set", arguments);
    }
  }.offscreenBuffering
});
bodaEnv.toolsFunc.defineProperty(window, "screenLeft", {
  configurable: true,
  enumerable: true,
  get: {
    screenLeft() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "screenLeft_get", arguments, 0);
    }
  }.screenLeft,
  set: {
    screenLeft() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "screenLeft_set", arguments);
    }
  }.screenLeft
});
bodaEnv.toolsFunc.defineProperty(window, "screenTop", {
  configurable: true,
  enumerable: true,
  get: {
    screenTop() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "screenTop_get", arguments, 0);
    }
  }.screenTop,
  set: {
    screenTop() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "screenTop_set", arguments);
    }
  }.screenTop
});
bodaEnv.toolsFunc.defineProperty(window, "styleMedia", {
  configurable: true,
  enumerable: true,
  get: {
    styleMedia() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "styleMedia_get", arguments);
    }
  }.styleMedia,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(window, "onsearch", {
  configurable: true,
  enumerable: true,
  get: {
    onsearch() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "onsearch_get", arguments, null);
    }
  }.onsearch,
  set: {
    onsearch() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "onsearch_set", arguments);
    }
  }.onsearch
});
bodaEnv.toolsFunc.defineProperty(window, "isSecureContext", {
  configurable: true,
  enumerable: true,
  get: {
    isSecureContext() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "isSecureContext_get", arguments, true);
    }
  }.isSecureContext,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(window, "trustedTypes", {
  configurable: true,
  enumerable: true,
  get: {
    trustedTypes() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "trustedTypes_get", arguments);
    }
  }.trustedTypes,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(window, "performance", {
  configurable: true,
  enumerable: true,
  get: {
    performance() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "performance_get", arguments);
    }
  }.performance,
  set: {
    performance() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "performance_set", arguments);
    }
  }.performance
});
bodaEnv.toolsFunc.defineProperty(window, "onappinstalled", {
  configurable: true,
  enumerable: true,
  get: {
    onappinstalled() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "onappinstalled_get", arguments, null);
    }
  }.onappinstalled,
  set: {
    onappinstalled() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "onappinstalled_set", arguments);
    }
  }.onappinstalled
});
bodaEnv.toolsFunc.defineProperty(window, "onbeforeinstallprompt", {
  configurable: true,
  enumerable: true,
  get: {
    onbeforeinstallprompt() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "onbeforeinstallprompt_get", arguments, null);
    }
  }.onbeforeinstallprompt,
  set: {
    onbeforeinstallprompt() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "onbeforeinstallprompt_set", arguments);
    }
  }.onbeforeinstallprompt
});
bodaEnv.toolsFunc.defineProperty(window, "crypto", {
  configurable: true,
  enumerable: true,
  get: {
    crypto() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "crypto_get", arguments);
    }
  }.crypto,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(window, "indexedDB", {
  configurable: true,
  enumerable: true,
  get: {
    indexedDB() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "indexedDB_get", arguments);
    }
  }.indexedDB,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(window, "sessionStorage", {
  configurable: true,
  enumerable: true,
  get: {
    sessionStorage() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "sessionStorage_get", arguments);
    }
  }.sessionStorage,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(window, "localStorage", {
  configurable: true,
  enumerable: true,
  get: {
    localStorage() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "localStorage_get", arguments);
    }
  }.localStorage,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(window, "onbeforexrselect", {
  configurable: true,
  enumerable: true,
  get: {
    onbeforexrselect() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "onbeforexrselect_get", arguments, null);
    }
  }.onbeforexrselect,
  set: {
    onbeforexrselect() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "onbeforexrselect_set", arguments);
    }
  }.onbeforexrselect
});
bodaEnv.toolsFunc.defineProperty(window, "onabort", {
  configurable: true,
  enumerable: true,
  get: {
    onabort() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "onabort_get", arguments, null);
    }
  }.onabort,
  set: {
    onabort() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "onabort_set", arguments);
    }
  }.onabort
});
bodaEnv.toolsFunc.defineProperty(window, "onbeforeinput", {
  configurable: true,
  enumerable: true,
  get: {
    onbeforeinput() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "onbeforeinput_get", arguments, null);
    }
  }.onbeforeinput,
  set: {
    onbeforeinput() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "onbeforeinput_set", arguments);
    }
  }.onbeforeinput
});
bodaEnv.toolsFunc.defineProperty(window, "onblur", {
  configurable: true,
  enumerable: true,
  get: {
    onblur() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "onblur_get", arguments, null);
    }
  }.onblur,
  set: {
    onblur() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "onblur_set", arguments);
    }
  }.onblur
});
bodaEnv.toolsFunc.defineProperty(window, "oncancel", {
  configurable: true,
  enumerable: true,
  get: {
    oncancel() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "oncancel_get", arguments, null);
    }
  }.oncancel,
  set: {
    oncancel() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "oncancel_set", arguments);
    }
  }.oncancel
});
bodaEnv.toolsFunc.defineProperty(window, "oncanplay", {
  configurable: true,
  enumerable: true,
  get: {
    oncanplay() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "oncanplay_get", arguments, null);
    }
  }.oncanplay,
  set: {
    oncanplay() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "oncanplay_set", arguments);
    }
  }.oncanplay
});
bodaEnv.toolsFunc.defineProperty(window, "oncanplaythrough", {
  configurable: true,
  enumerable: true,
  get: {
    oncanplaythrough() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "oncanplaythrough_get", arguments, null);
    }
  }.oncanplaythrough,
  set: {
    oncanplaythrough() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "oncanplaythrough_set", arguments);
    }
  }.oncanplaythrough
});
bodaEnv.toolsFunc.defineProperty(window, "onchange", {
  configurable: true,
  enumerable: true,
  get: {
    onchange() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "onchange_get", arguments, null);
    }
  }.onchange,
  set: {
    onchange() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "onchange_set", arguments);
    }
  }.onchange
});
bodaEnv.toolsFunc.defineProperty(window, "onclick", {
  configurable: true,
  enumerable: true,
  get: {
    onclick() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "onclick_get", arguments, null);
    }
  }.onclick,
  set: {
    onclick() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "onclick_set", arguments);
    }
  }.onclick
});
bodaEnv.toolsFunc.defineProperty(window, "onclose", {
  configurable: true,
  enumerable: true,
  get: {
    onclose() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "onclose_get", arguments, null);
    }
  }.onclose,
  set: {
    onclose() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "onclose_set", arguments);
    }
  }.onclose
});
bodaEnv.toolsFunc.defineProperty(window, "oncontextlost", {
  configurable: true,
  enumerable: true,
  get: {
    oncontextlost() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "oncontextlost_get", arguments, null);
    }
  }.oncontextlost,
  set: {
    oncontextlost() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "oncontextlost_set", arguments);
    }
  }.oncontextlost
});
bodaEnv.toolsFunc.defineProperty(window, "oncontextmenu", {
  configurable: true,
  enumerable: true,
  get: {
    oncontextmenu() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "oncontextmenu_get", arguments, null);
    }
  }.oncontextmenu,
  set: {
    oncontextmenu() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "oncontextmenu_set", arguments);
    }
  }.oncontextmenu
});
bodaEnv.toolsFunc.defineProperty(window, "oncontextrestored", {
  configurable: true,
  enumerable: true,
  get: {
    oncontextrestored() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "oncontextrestored_get", arguments, null);
    }
  }.oncontextrestored,
  set: {
    oncontextrestored() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "oncontextrestored_set", arguments);
    }
  }.oncontextrestored
});
bodaEnv.toolsFunc.defineProperty(window, "oncuechange", {
  configurable: true,
  enumerable: true,
  get: {
    oncuechange() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "oncuechange_get", arguments, null);
    }
  }.oncuechange,
  set: {
    oncuechange() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "oncuechange_set", arguments);
    }
  }.oncuechange
});
bodaEnv.toolsFunc.defineProperty(window, "ondblclick", {
  configurable: true,
  enumerable: true,
  get: {
    ondblclick() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "ondblclick_get", arguments, null);
    }
  }.ondblclick,
  set: {
    ondblclick() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "ondblclick_set", arguments);
    }
  }.ondblclick
});
bodaEnv.toolsFunc.defineProperty(window, "ondrag", {
  configurable: true,
  enumerable: true,
  get: {
    ondrag() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "ondrag_get", arguments, null);
    }
  }.ondrag,
  set: {
    ondrag() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "ondrag_set", arguments);
    }
  }.ondrag
});
bodaEnv.toolsFunc.defineProperty(window, "ondragend", {
  configurable: true,
  enumerable: true,
  get: {
    ondragend() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "ondragend_get", arguments, null);
    }
  }.ondragend,
  set: {
    ondragend() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "ondragend_set", arguments);
    }
  }.ondragend
});
bodaEnv.toolsFunc.defineProperty(window, "ondragenter", {
  configurable: true,
  enumerable: true,
  get: {
    ondragenter() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "ondragenter_get", arguments, null);
    }
  }.ondragenter,
  set: {
    ondragenter() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "ondragenter_set", arguments);
    }
  }.ondragenter
});
bodaEnv.toolsFunc.defineProperty(window, "ondragleave", {
  configurable: true,
  enumerable: true,
  get: {
    ondragleave() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "ondragleave_get", arguments, null);
    }
  }.ondragleave,
  set: {
    ondragleave() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "ondragleave_set", arguments);
    }
  }.ondragleave
});
bodaEnv.toolsFunc.defineProperty(window, "ondragover", {
  configurable: true,
  enumerable: true,
  get: {
    ondragover() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "ondragover_get", arguments, null);
    }
  }.ondragover,
  set: {
    ondragover() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "ondragover_set", arguments);
    }
  }.ondragover
});
bodaEnv.toolsFunc.defineProperty(window, "ondragstart", {
  configurable: true,
  enumerable: true,
  get: {
    ondragstart() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "ondragstart_get", arguments, null);
    }
  }.ondragstart,
  set: {
    ondragstart() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "ondragstart_set", arguments);
    }
  }.ondragstart
});
bodaEnv.toolsFunc.defineProperty(window, "ondrop", {
  configurable: true,
  enumerable: true,
  get: {
    ondrop() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "ondrop_get", arguments, null);
    }
  }.ondrop,
  set: {
    ondrop() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "ondrop_set", arguments);
    }
  }.ondrop
});
bodaEnv.toolsFunc.defineProperty(window, "ondurationchange", {
  configurable: true,
  enumerable: true,
  get: {
    ondurationchange() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "ondurationchange_get", arguments, null);
    }
  }.ondurationchange,
  set: {
    ondurationchange() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "ondurationchange_set", arguments);
    }
  }.ondurationchange
});
bodaEnv.toolsFunc.defineProperty(window, "onemptied", {
  configurable: true,
  enumerable: true,
  get: {
    onemptied() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "onemptied_get", arguments, null);
    }
  }.onemptied,
  set: {
    onemptied() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "onemptied_set", arguments);
    }
  }.onemptied
});
bodaEnv.toolsFunc.defineProperty(window, "onended", {
  configurable: true,
  enumerable: true,
  get: {
    onended() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "onended_get", arguments, null);
    }
  }.onended,
  set: {
    onended() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "onended_set", arguments);
    }
  }.onended
});
bodaEnv.toolsFunc.defineProperty(window, "onerror", {
  configurable: true,
  enumerable: true,
  get: {
    onerror() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "onerror_get", arguments, null);
    }
  }.onerror,
  set: {
    onerror() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "onerror_set", arguments);
    }
  }.onerror
});
bodaEnv.toolsFunc.defineProperty(window, "onfocus", {
  configurable: true,
  enumerable: true,
  get: {
    onfocus() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "onfocus_get", arguments, null);
    }
  }.onfocus,
  set: {
    onfocus() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "onfocus_set", arguments);
    }
  }.onfocus
});
bodaEnv.toolsFunc.defineProperty(window, "onformdata", {
  configurable: true,
  enumerable: true,
  get: {
    onformdata() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "onformdata_get", arguments, null);
    }
  }.onformdata,
  set: {
    onformdata() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "onformdata_set", arguments);
    }
  }.onformdata
});
bodaEnv.toolsFunc.defineProperty(window, "oninput", {
  configurable: true,
  enumerable: true,
  get: {
    oninput() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "oninput_get", arguments, null);
    }
  }.oninput,
  set: {
    oninput() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "oninput_set", arguments);
    }
  }.oninput
});
bodaEnv.toolsFunc.defineProperty(window, "oninvalid", {
  configurable: true,
  enumerable: true,
  get: {
    oninvalid() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "oninvalid_get", arguments, null);
    }
  }.oninvalid,
  set: {
    oninvalid() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "oninvalid_set", arguments);
    }
  }.oninvalid
});
bodaEnv.toolsFunc.defineProperty(window, "onkeydown", {
  configurable: true,
  enumerable: true,
  get: {
    onkeydown() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "onkeydown_get", arguments, null);
    }
  }.onkeydown,
  set: {
    onkeydown() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "onkeydown_set", arguments);
    }
  }.onkeydown
});
bodaEnv.toolsFunc.defineProperty(window, "onkeypress", {
  configurable: true,
  enumerable: true,
  get: {
    onkeypress() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "onkeypress_get", arguments, null);
    }
  }.onkeypress,
  set: {
    onkeypress() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "onkeypress_set", arguments);
    }
  }.onkeypress
});
bodaEnv.toolsFunc.defineProperty(window, "onkeyup", {
  configurable: true,
  enumerable: true,
  get: {
    onkeyup() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "onkeyup_get", arguments, null);
    }
  }.onkeyup,
  set: {
    onkeyup() {
      // debugger
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "onkeyup_set", arguments);
    }
  }.onkeyup
});
// debugger
bodaEnv.toolsFunc.defineProperty(window, "onload", {
  configurable: true,
  enumerable: true,
  get: {
    onload() {
      // debugger
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "onload_get", arguments, null);
    }
  }.onload,
  set: {
    onload() {
      // debugger
      // let res=
      // let res= arguments[0]

      // debugger
      // window.bobo=f
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "onload_set", arguments);
    }
  }.onload
});
bodaEnv.toolsFunc.defineProperty(window, "onloadeddata", {
  configurable: true,
  enumerable: true,
  get: {
    onloadeddata() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "onloadeddata_get", arguments, null);
    }
  }.onloadeddata,
  set: {
    onloadeddata() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "onloadeddata_set", arguments);
    }
  }.onloadeddata
});
bodaEnv.toolsFunc.defineProperty(window, "onloadedmetadata", {
  configurable: true,
  enumerable: true,
  get: {
    onloadedmetadata() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "onloadedmetadata_get", arguments, null);
    }
  }.onloadedmetadata,
  set: {
    onloadedmetadata() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "onloadedmetadata_set", arguments);
    }
  }.onloadedmetadata
});
bodaEnv.toolsFunc.defineProperty(window, "onloadstart", {
  configurable: true,
  enumerable: true,
  get: {
    onloadstart() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "onloadstart_get", arguments, null);
    }
  }.onloadstart,
  set: {
    onloadstart() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "onloadstart_set", arguments);
    }
  }.onloadstart
});
bodaEnv.toolsFunc.defineProperty(window, "onmousedown", {
  configurable: true,
  enumerable: true,
  get: {
    onmousedown() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "onmousedown_get", arguments, null);
    }
  }.onmousedown,
  set: {
    onmousedown() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "onmousedown_set", arguments);
    }
  }.onmousedown
});
bodaEnv.toolsFunc.defineProperty(window, "onmouseenter", {
  configurable: true,
  enumerable: true,
  get: {
    onmouseenter() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "onmouseenter_get", arguments, null);
    }
  }.onmouseenter,
  set: {
    onmouseenter() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "onmouseenter_set", arguments);
    }
  }.onmouseenter
});
bodaEnv.toolsFunc.defineProperty(window, "onmouseleave", {
  configurable: true,
  enumerable: true,
  get: {
    onmouseleave() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "onmouseleave_get", arguments, null);
    }
  }.onmouseleave,
  set: {
    onmouseleave() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "onmouseleave_set", arguments);
    }
  }.onmouseleave
});
bodaEnv.toolsFunc.defineProperty(window, "onmousemove", {
  configurable: true,
  enumerable: true,
  get: {
    onmousemove() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "onmousemove_get", arguments, null);
    }
  }.onmousemove,
  set: {
    onmousemove() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "onmousemove_set", arguments);
    }
  }.onmousemove
});
bodaEnv.toolsFunc.defineProperty(window, "onmouseout", {
  configurable: true,
  enumerable: true,
  get: {
    onmouseout() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "onmouseout_get", arguments, null);
    }
  }.onmouseout,
  set: {
    onmouseout() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "onmouseout_set", arguments);
    }
  }.onmouseout
});
bodaEnv.toolsFunc.defineProperty(window, "onmouseover", {
  configurable: true,
  enumerable: true,
  get: {
    onmouseover() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "onmouseover_get", arguments, null);
    }
  }.onmouseover,
  set: {
    onmouseover() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "onmouseover_set", arguments);
    }
  }.onmouseover
});
bodaEnv.toolsFunc.defineProperty(window, "onmouseup", {
  configurable: true,
  enumerable: true,
  get: {
    onmouseup() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "onmouseup_get", arguments, null);
    }
  }.onmouseup,
  set: {
    onmouseup() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "onmouseup_set", arguments);
    }
  }.onmouseup
});
bodaEnv.toolsFunc.defineProperty(window, "onmousewheel", {
  configurable: true,
  enumerable: true,
  get: {
    onmousewheel() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "onmousewheel_get", arguments, null);
    }
  }.onmousewheel,
  set: {
    onmousewheel() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "onmousewheel_set", arguments);
    }
  }.onmousewheel
});
bodaEnv.toolsFunc.defineProperty(window, "onpause", {
  configurable: true,
  enumerable: true,
  get: {
    onpause() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "onpause_get", arguments, null);
    }
  }.onpause,
  set: {
    onpause() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "onpause_set", arguments);
    }
  }.onpause
});
bodaEnv.toolsFunc.defineProperty(window, "onplay", {
  configurable: true,
  enumerable: true,
  get: {
    onplay() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "onplay_get", arguments, null);
    }
  }.onplay,
  set: {
    onplay() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "onplay_set", arguments);
    }
  }.onplay
});
bodaEnv.toolsFunc.defineProperty(window, "onplaying", {
  configurable: true,
  enumerable: true,
  get: {
    onplaying() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "onplaying_get", arguments, null);
    }
  }.onplaying,
  set: {
    onplaying() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "onplaying_set", arguments);
    }
  }.onplaying
});
bodaEnv.toolsFunc.defineProperty(window, "onprogress", {
  configurable: true,
  enumerable: true,
  get: {
    onprogress() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "onprogress_get", arguments, null);
    }
  }.onprogress,
  set: {
    onprogress() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "onprogress_set", arguments);
    }
  }.onprogress
});
bodaEnv.toolsFunc.defineProperty(window, "onratechange", {
  configurable: true,
  enumerable: true,
  get: {
    onratechange() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "onratechange_get", arguments, null);
    }
  }.onratechange,
  set: {
    onratechange() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "onratechange_set", arguments);
    }
  }.onratechange
});
bodaEnv.toolsFunc.defineProperty(window, "onreset", {
  configurable: true,
  enumerable: true,
  get: {
    onreset() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "onreset_get", arguments, null);
    }
  }.onreset,
  set: {
    onreset() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "onreset_set", arguments);
    }
  }.onreset
});
bodaEnv.toolsFunc.defineProperty(window, "onresize", {
  configurable: true,
  enumerable: true,
  get: {
    onresize() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "onresize_get", arguments, null);
    }
  }.onresize,
  set: {
    onresize() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "onresize_set", arguments);
    }
  }.onresize
});
bodaEnv.toolsFunc.defineProperty(window, "onscroll", {
  configurable: true,
  enumerable: true,
  get: {
    onscroll() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "onscroll_get", arguments, null);
    }
  }.onscroll,
  set: {
    onscroll() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "onscroll_set", arguments);
    }
  }.onscroll
});
bodaEnv.toolsFunc.defineProperty(window, "onsecuritypolicyviolation", {
  configurable: true,
  enumerable: true,
  get: {
    onsecuritypolicyviolation() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "onsecuritypolicyviolation_get", arguments, null);
    }
  }.onsecuritypolicyviolation,
  set: {
    onsecuritypolicyviolation() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "onsecuritypolicyviolation_set", arguments);
    }
  }.onsecuritypolicyviolation
});
bodaEnv.toolsFunc.defineProperty(window, "onseeked", {
  configurable: true,
  enumerable: true,
  get: {
    onseeked() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "onseeked_get", arguments, null);
    }
  }.onseeked,
  set: {
    onseeked() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "onseeked_set", arguments);
    }
  }.onseeked
});
bodaEnv.toolsFunc.defineProperty(window, "onseeking", {
  configurable: true,
  enumerable: true,
  get: {
    onseeking() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "onseeking_get", arguments, null);
    }
  }.onseeking,
  set: {
    onseeking() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "onseeking_set", arguments);
    }
  }.onseeking
});
bodaEnv.toolsFunc.defineProperty(window, "onselect", {
  configurable: true,
  enumerable: true,
  get: {
    onselect() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "onselect_get", arguments, null);
    }
  }.onselect,
  set: {
    onselect() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "onselect_set", arguments);
    }
  }.onselect
});
bodaEnv.toolsFunc.defineProperty(window, "onslotchange", {
  configurable: true,
  enumerable: true,
  get: {
    onslotchange() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "onslotchange_get", arguments, null);
    }
  }.onslotchange,
  set: {
    onslotchange() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "onslotchange_set", arguments);
    }
  }.onslotchange
});
bodaEnv.toolsFunc.defineProperty(window, "onstalled", {
  configurable: true,
  enumerable: true,
  get: {
    onstalled() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "onstalled_get", arguments, null);
    }
  }.onstalled,
  set: {
    onstalled() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "onstalled_set", arguments);
    }
  }.onstalled
});
bodaEnv.toolsFunc.defineProperty(window, "onsubmit", {
  configurable: true,
  enumerable: true,
  get: {
    onsubmit() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "onsubmit_get", arguments, null);
    }
  }.onsubmit,
  set: {
    onsubmit() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "onsubmit_set", arguments);
    }
  }.onsubmit
});
bodaEnv.toolsFunc.defineProperty(window, "onsuspend", {
  configurable: true,
  enumerable: true,
  get: {
    onsuspend() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "onsuspend_get", arguments, null);
    }
  }.onsuspend,
  set: {
    onsuspend() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "onsuspend_set", arguments);
    }
  }.onsuspend
});
bodaEnv.toolsFunc.defineProperty(window, "ontimeupdate", {
  configurable: true,
  enumerable: true,
  get: {
    ontimeupdate() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "ontimeupdate_get", arguments, null);
    }
  }.ontimeupdate,
  set: {
    ontimeupdate() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "ontimeupdate_set", arguments);
    }
  }.ontimeupdate
});
bodaEnv.toolsFunc.defineProperty(window, "ontoggle", {
  configurable: true,
  enumerable: true,
  get: {
    ontoggle() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "ontoggle_get", arguments, null);
    }
  }.ontoggle,
  set: {
    ontoggle() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "ontoggle_set", arguments);
    }
  }.ontoggle
});
bodaEnv.toolsFunc.defineProperty(window, "onvolumechange", {
  configurable: true,
  enumerable: true,
  get: {
    onvolumechange() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "onvolumechange_get", arguments, null);
    }
  }.onvolumechange,
  set: {
    onvolumechange() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "onvolumechange_set", arguments);
    }
  }.onvolumechange
});
bodaEnv.toolsFunc.defineProperty(window, "onwaiting", {
  configurable: true,
  enumerable: true,
  get: {
    onwaiting() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "onwaiting_get", arguments, null);
    }
  }.onwaiting,
  set: {
    onwaiting() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "onwaiting_set", arguments);
    }
  }.onwaiting
});
bodaEnv.toolsFunc.defineProperty(window, "onwebkitanimationend", {
  configurable: true,
  enumerable: true,
  get: {
    onwebkitanimationend() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "onwebkitanimationend_get", arguments, null);
    }
  }.onwebkitanimationend,
  set: {
    onwebkitanimationend() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "onwebkitanimationend_set", arguments);
    }
  }.onwebkitanimationend
});
bodaEnv.toolsFunc.defineProperty(window, "onwebkitanimationiteration", {
  configurable: true,
  enumerable: true,
  get: {
    onwebkitanimationiteration() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "onwebkitanimationiteration_get", arguments, null);
    }
  }.onwebkitanimationiteration,
  set: {
    onwebkitanimationiteration() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "onwebkitanimationiteration_set", arguments);
    }
  }.onwebkitanimationiteration
});
bodaEnv.toolsFunc.defineProperty(window, "onwebkitanimationstart", {
  configurable: true,
  enumerable: true,
  get: {
    onwebkitanimationstart() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "onwebkitanimationstart_get", arguments, null);
    }
  }.onwebkitanimationstart,
  set: {
    onwebkitanimationstart() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "onwebkitanimationstart_set", arguments);
    }
  }.onwebkitanimationstart
});
bodaEnv.toolsFunc.defineProperty(window, "onwebkittransitionend", {
  configurable: true,
  enumerable: true,
  get: {
    onwebkittransitionend() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "onwebkittransitionend_get", arguments, null);
    }
  }.onwebkittransitionend,
  set: {
    onwebkittransitionend() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "onwebkittransitionend_set", arguments);
    }
  }.onwebkittransitionend
});
bodaEnv.toolsFunc.defineProperty(window, "onwheel", {
  configurable: true,
  enumerable: true,
  get: {
    onwheel() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "onwheel_get", arguments, null);
    }
  }.onwheel,
  set: {
    onwheel() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "onwheel_set", arguments);
    }
  }.onwheel
});
bodaEnv.toolsFunc.defineProperty(window, "onauxclick", {
  configurable: true,
  enumerable: true,
  get: {
    onauxclick() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "onauxclick_get", arguments, null);
    }
  }.onauxclick,
  set: {
    onauxclick() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "onauxclick_set", arguments);
    }
  }.onauxclick
});
bodaEnv.toolsFunc.defineProperty(window, "ongotpointercapture", {
  configurable: true,
  enumerable: true,
  get: {
    ongotpointercapture() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "ongotpointercapture_get", arguments, null);
    }
  }.ongotpointercapture,
  set: {
    ongotpointercapture() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "ongotpointercapture_set", arguments);
    }
  }.ongotpointercapture
});
bodaEnv.toolsFunc.defineProperty(window, "onlostpointercapture", {
  configurable: true,
  enumerable: true,
  get: {
    onlostpointercapture() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "onlostpointercapture_get", arguments, null);
    }
  }.onlostpointercapture,
  set: {
    onlostpointercapture() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "onlostpointercapture_set", arguments);
    }
  }.onlostpointercapture
});
bodaEnv.toolsFunc.defineProperty(window, "onpointerdown", {
  configurable: true,
  enumerable: true,
  get: {
    onpointerdown() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "onpointerdown_get", arguments, null);
    }
  }.onpointerdown,
  set: {
    onpointerdown() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "onpointerdown_set", arguments);
    }
  }.onpointerdown
});
bodaEnv.toolsFunc.defineProperty(window, "onpointermove", {
  configurable: true,
  enumerable: true,
  get: {
    onpointermove() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "onpointermove_get", arguments, null);
    }
  }.onpointermove,
  set: {
    onpointermove() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "onpointermove_set", arguments);
    }
  }.onpointermove
});
bodaEnv.toolsFunc.defineProperty(window, "onpointerrawupdate", {
  configurable: true,
  enumerable: true,
  get: {
    onpointerrawupdate() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "onpointerrawupdate_get", arguments, null);
    }
  }.onpointerrawupdate,
  set: {
    onpointerrawupdate() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "onpointerrawupdate_set", arguments);
    }
  }.onpointerrawupdate
});
bodaEnv.toolsFunc.defineProperty(window, "onpointerup", {
  configurable: true,
  enumerable: true,
  get: {
    onpointerup() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "onpointerup_get", arguments, null);
    }
  }.onpointerup,
  set: {
    onpointerup() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "onpointerup_set", arguments);
    }
  }.onpointerup
});
bodaEnv.toolsFunc.defineProperty(window, "onpointercancel", {
  configurable: true,
  enumerable: true,
  get: {
    onpointercancel() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "onpointercancel_get", arguments, null);
    }
  }.onpointercancel,
  set: {
    onpointercancel() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "onpointercancel_set", arguments);
    }
  }.onpointercancel
});
bodaEnv.toolsFunc.defineProperty(window, "onpointerover", {
  configurable: true,
  enumerable: true,
  get: {
    onpointerover() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "onpointerover_get", arguments, null);
    }
  }.onpointerover,
  set: {
    onpointerover() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "onpointerover_set", arguments);
    }
  }.onpointerover
});
bodaEnv.toolsFunc.defineProperty(window, "onpointerout", {
  configurable: true,
  enumerable: true,
  get: {
    onpointerout() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "onpointerout_get", arguments, null);
    }
  }.onpointerout,
  set: {
    onpointerout() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "onpointerout_set", arguments);
    }
  }.onpointerout
});
bodaEnv.toolsFunc.defineProperty(window, "onpointerenter", {
  configurable: true,
  enumerable: true,
  get: {
    onpointerenter() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "onpointerenter_get", arguments, null);
    }
  }.onpointerenter,
  set: {
    onpointerenter() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "onpointerenter_set", arguments);
    }
  }.onpointerenter
});
bodaEnv.toolsFunc.defineProperty(window, "onpointerleave", {
  configurable: true,
  enumerable: true,
  get: {
    onpointerleave() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "onpointerleave_get", arguments, null);
    }
  }.onpointerleave,
  set: {
    onpointerleave() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "onpointerleave_set", arguments);
    }
  }.onpointerleave
});
bodaEnv.toolsFunc.defineProperty(window, "onselectstart", {
  configurable: true,
  enumerable: true,
  get: {
    onselectstart() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "onselectstart_get", arguments, null);
    }
  }.onselectstart,
  set: {
    onselectstart() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "onselectstart_set", arguments);
    }
  }.onselectstart
});
bodaEnv.toolsFunc.defineProperty(window, "onselectionchange", {
  configurable: true,
  enumerable: true,
  get: {
    onselectionchange() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "onselectionchange_get", arguments, null);
    }
  }.onselectionchange,
  set: {
    onselectionchange() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "onselectionchange_set", arguments);
    }
  }.onselectionchange
});
bodaEnv.toolsFunc.defineProperty(window, "onanimationend", {
  configurable: true,
  enumerable: true,
  get: {
    onanimationend() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "onanimationend_get", arguments, null);
    }
  }.onanimationend,
  set: {
    onanimationend() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "onanimationend_set", arguments);
    }
  }.onanimationend
});
bodaEnv.toolsFunc.defineProperty(window, "onanimationiteration", {
  configurable: true,
  enumerable: true,
  get: {
    onanimationiteration() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "onanimationiteration_get", arguments, null);
    }
  }.onanimationiteration,
  set: {
    onanimationiteration() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "onanimationiteration_set", arguments);
    }
  }.onanimationiteration
});
bodaEnv.toolsFunc.defineProperty(window, "onanimationstart", {
  configurable: true,
  enumerable: true,
  get: {
    onanimationstart() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "onanimationstart_get", arguments, null);
    }
  }.onanimationstart,
  set: {
    onanimationstart() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "onanimationstart_set", arguments);
    }
  }.onanimationstart
});
bodaEnv.toolsFunc.defineProperty(window, "ontransitionrun", {
  configurable: true,
  enumerable: true,
  get: {
    ontransitionrun() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "ontransitionrun_get", arguments, null);
    }
  }.ontransitionrun,
  set: {
    ontransitionrun() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "ontransitionrun_set", arguments);
    }
  }.ontransitionrun
});
bodaEnv.toolsFunc.defineProperty(window, "ontransitionstart", {
  configurable: true,
  enumerable: true,
  get: {
    ontransitionstart() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "ontransitionstart_get", arguments, null);
    }
  }.ontransitionstart,
  set: {
    ontransitionstart() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "ontransitionstart_set", arguments);
    }
  }.ontransitionstart
});
bodaEnv.toolsFunc.defineProperty(window, "ontransitionend", {
  configurable: true,
  enumerable: true,
  get: {
    ontransitionend() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "ontransitionend_get", arguments, null);
    }
  }.ontransitionend,
  set: {
    ontransitionend() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "ontransitionend_set", arguments);
    }
  }.ontransitionend
});
bodaEnv.toolsFunc.defineProperty(window, "ontransitioncancel", {
  configurable: true,
  enumerable: true,
  get: {
    ontransitioncancel() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "ontransitioncancel_get", arguments, null);
    }
  }.ontransitioncancel,
  set: {
    ontransitioncancel() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "ontransitioncancel_set", arguments);
    }
  }.ontransitioncancel
});
bodaEnv.toolsFunc.defineProperty(window, "onafterprint", {
  configurable: true,
  enumerable: true,
  get: {
    onafterprint() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "onafterprint_get", arguments, null);
    }
  }.onafterprint,
  set: {
    onafterprint() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "onafterprint_set", arguments);
    }
  }.onafterprint
});
bodaEnv.toolsFunc.defineProperty(window, "onbeforeprint", {
  configurable: true,
  enumerable: true,
  get: {
    onbeforeprint() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "onbeforeprint_get", arguments, null);
    }
  }.onbeforeprint,
  set: {
    onbeforeprint() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "onbeforeprint_set", arguments);
    }
  }.onbeforeprint
});
bodaEnv.toolsFunc.defineProperty(window, "onbeforeunload", {
  configurable: true,
  enumerable: true,
  get: {
    onbeforeunload() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "onbeforeunload_get", arguments, null);
    }
  }.onbeforeunload,
  set: {
    onbeforeunload() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "onbeforeunload_set", arguments);
    }
  }.onbeforeunload
});
bodaEnv.toolsFunc.defineProperty(window, "onhashchange", {
  configurable: true,
  enumerable: true,
  get: {
    onhashchange() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "onhashchange_get", arguments, null);
    }
  }.onhashchange,
  set: {
    onhashchange() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "onhashchange_set", arguments);
    }
  }.onhashchange
});
bodaEnv.toolsFunc.defineProperty(window, "onlanguagechange", {
  configurable: true,
  enumerable: true,
  get: {
    onlanguagechange() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "onlanguagechange_get", arguments, null);
    }
  }.onlanguagechange,
  set: {
    onlanguagechange() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "onlanguagechange_set", arguments);
    }
  }.onlanguagechange
});
bodaEnv.toolsFunc.defineProperty(window, "onmessage", {
  configurable: true,
  enumerable: true,
  get: {
    onmessage() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "onmessage_get", arguments, null);
    }
  }.onmessage,
  set: {
    onmessage() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "onmessage_set", arguments);
    }
  }.onmessage
});
bodaEnv.toolsFunc.defineProperty(window, "onmessageerror", {
  configurable: true,
  enumerable: true,
  get: {
    onmessageerror() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "onmessageerror_get", arguments, null);
    }
  }.onmessageerror,
  set: {
    onmessageerror() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "onmessageerror_set", arguments);
    }
  }.onmessageerror
});
bodaEnv.toolsFunc.defineProperty(window, "onoffline", {
  configurable: true,
  enumerable: true,
  get: {
    onoffline() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "onoffline_get", arguments, null);
    }
  }.onoffline,
  set: {
    onoffline() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "onoffline_set", arguments);
    }
  }.onoffline
});
bodaEnv.toolsFunc.defineProperty(window, "ononline", {
  configurable: true,
  enumerable: true,
  get: {
    ononline() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "ononline_get", arguments, null);
    }
  }.ononline,
  set: {
    ononline() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "ononline_set", arguments);
    }
  }.ononline
});
bodaEnv.toolsFunc.defineProperty(window, "onpagehide", {
  configurable: true,
  enumerable: true,
  get: {
    onpagehide() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "onpagehide_get", arguments, null);
    }
  }.onpagehide,
  set: {
    onpagehide() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "onpagehide_set", arguments);
    }
  }.onpagehide
});
bodaEnv.toolsFunc.defineProperty(window, "onpageshow", {
  configurable: true,
  enumerable: true,
  get: {
    onpageshow() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "onpageshow_get", arguments, null);
    }
  }.onpageshow,
  set: {
    onpageshow() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "onpageshow_set", arguments);
    }
  }.onpageshow
});
bodaEnv.toolsFunc.defineProperty(window, "onpopstate", {
  configurable: true,
  enumerable: true,
  get: {
    onpopstate() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "onpopstate_get", arguments, null);
    }
  }.onpopstate,
  set: {
    onpopstate() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "onpopstate_set", arguments);
    }
  }.onpopstate
});
bodaEnv.toolsFunc.defineProperty(window, "onrejectionhandled", {
  configurable: true,
  enumerable: true,
  get: {
    onrejectionhandled() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "onrejectionhandled_get", arguments, null);
    }
  }.onrejectionhandled,
  set: {
    onrejectionhandled() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "onrejectionhandled_set", arguments);
    }
  }.onrejectionhandled
});
bodaEnv.toolsFunc.defineProperty(window, "onstorage", {
  configurable: true,
  enumerable: true,
  get: {
    onstorage() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "onstorage_get", arguments, null);
    }
  }.onstorage,
  set: {
    onstorage() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "onstorage_set", arguments);
    }
  }.onstorage
});
bodaEnv.toolsFunc.defineProperty(window, "onunhandledrejection", {
  configurable: true,
  enumerable: true,
  get: {
    onunhandledrejection() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "onunhandledrejection_get", arguments, null);
    }
  }.onunhandledrejection,
  set: {
    onunhandledrejection() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "onunhandledrejection_set", arguments);
    }
  }.onunhandledrejection
});
bodaEnv.toolsFunc.defineProperty(window, "onunload", {
  configurable: true,
  enumerable: true,
  get: {
    onunload() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "onunload_get", arguments, null);
    }
  }.onunload,
  set: {
    onunload() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "onunload_set", arguments);
    }
  }.onunload
});
bodaEnv.toolsFunc.defineProperty(window, "crossOriginIsolated", {
  configurable: true,
  enumerable: true,
  get: {
    crossOriginIsolated() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "crossOriginIsolated_get", arguments, false);
    }
  }.crossOriginIsolated,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(window, "scheduler", {
  configurable: true,
  enumerable: true,
  get: {
    scheduler() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "scheduler_get", arguments);
    }
  }.scheduler,
  set: {
    scheduler() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "scheduler_set", arguments);
    }
  }.scheduler
});
bodaEnv.toolsFunc.defineProperty(window, "blur", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    blur() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "blur", arguments);
    }
  }.blur
});
bodaEnv.toolsFunc.defineProperty(window, "cancelAnimationFrame", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    cancelAnimationFrame() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "cancelAnimationFrame", arguments);
    }
  }.cancelAnimationFrame
});
bodaEnv.toolsFunc.defineProperty(window, "cancelIdleCallback", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    cancelIdleCallback() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "cancelIdleCallback", arguments);
    }
  }.cancelIdleCallback
});
bodaEnv.toolsFunc.defineProperty(window, "captureEvents", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    captureEvents() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "captureEvents", arguments);
    }
  }.captureEvents
});
bodaEnv.toolsFunc.defineProperty(window, "close", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    close() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "close", arguments);
    }
  }.close
});
bodaEnv.toolsFunc.defineProperty(window, "confirm", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    confirm() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "confirm", arguments);
    }
  }.confirm
});
bodaEnv.toolsFunc.defineProperty(window, "createImageBitmap", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    createImageBitmap() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "createImageBitmap", arguments);
    }
  }.createImageBitmap
});
bodaEnv.toolsFunc.defineProperty(window, "fetch", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    fetch() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "fetch", arguments);
    }
  }.fetch
});
bodaEnv.toolsFunc.defineProperty(window, "find", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    find() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "find", arguments);
    }
  }.find
});
bodaEnv.toolsFunc.defineProperty(window, "focus", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    focus() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "focus", arguments);
    }
  }.focus
});
bodaEnv.toolsFunc.defineProperty(window, "getComputedStyle", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    getComputedStyle() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "getComputedStyle", arguments);
    }
  }.getComputedStyle
});
bodaEnv.toolsFunc.defineProperty(window, "getSelection", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    getSelection() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "getSelection", arguments);
    }
  }.getSelection
});
bodaEnv.toolsFunc.defineProperty(window, "matchMedia", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    matchMedia() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "matchMedia", arguments);
    }
  }.matchMedia
});
bodaEnv.toolsFunc.defineProperty(window, "moveBy", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    moveBy() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "moveBy", arguments);
    }
  }.moveBy
});
bodaEnv.toolsFunc.defineProperty(window, "moveTo", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    moveTo() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "moveTo", arguments);
    }
  }.moveTo
});
bodaEnv.toolsFunc.defineProperty(window, "open", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    open() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "open", arguments);
    }
  }.open
});
bodaEnv.toolsFunc.defineProperty(window, "postMessage", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    postMessage() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "postMessage", arguments);
    }
  }.postMessage
});
bodaEnv.toolsFunc.defineProperty(window, "print", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    print() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "print", arguments);
    }
  }.print
});
bodaEnv.toolsFunc.defineProperty(window, "prompt", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    prompt() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "prompt", arguments);
    }
  }.prompt
});
bodaEnv.toolsFunc.defineProperty(window, "queueMicrotask", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    queueMicrotask() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "queueMicrotask", arguments);
    }
  }.queueMicrotask
});
bodaEnv.toolsFunc.defineProperty(window, "releaseEvents", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    releaseEvents() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "releaseEvents", arguments);
    }
  }.releaseEvents
});
bodaEnv.toolsFunc.defineProperty(window, "reportError", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    reportError() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "reportError", arguments);
    }
  }.reportError
});
bodaEnv.toolsFunc.defineProperty(window, "requestAnimationFrame", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    requestAnimationFrame() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "requestAnimationFrame", arguments);
    }
  }.requestAnimationFrame
});
bodaEnv.toolsFunc.defineProperty(window, "requestIdleCallback", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    requestIdleCallback() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "requestIdleCallback", arguments);
    }
  }.requestIdleCallback
});
bodaEnv.toolsFunc.defineProperty(window, "resizeBy", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    resizeBy() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "resizeBy", arguments);
    }
  }.resizeBy
});
bodaEnv.toolsFunc.defineProperty(window, "resizeTo", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    resizeTo() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "resizeTo", arguments);
    }
  }.resizeTo
});
bodaEnv.toolsFunc.defineProperty(window, "scroll", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    scroll() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "scroll", arguments);
    }
  }.scroll
});
bodaEnv.toolsFunc.defineProperty(window, "scrollBy", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    scrollBy() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "scrollBy", arguments);
    }
  }.scrollBy
});
bodaEnv.toolsFunc.defineProperty(window, "scrollTo", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    scrollTo() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "scrollTo", arguments);
    }
  }.scrollTo
});
bodaEnv.toolsFunc.defineProperty(window, "stop", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    stop() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "stop", arguments);
    }
  }.stop
});
bodaEnv.toolsFunc.defineProperty(window, "structuredClone", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    structuredClone() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "structuredClone", arguments);
    }
  }.structuredClone
});
bodaEnv.toolsFunc.defineProperty(window, "webkitCancelAnimationFrame", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    webkitCancelAnimationFrame() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "webkitCancelAnimationFrame", arguments);
    }
  }.webkitCancelAnimationFrame
});
bodaEnv.toolsFunc.defineProperty(window, "webkitRequestAnimationFrame", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    webkitRequestAnimationFrame() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "webkitRequestAnimationFrame", arguments);
    }
  }.webkitRequestAnimationFrame
});
// debugger
bodaEnv.toolsFunc.defineProperty(window, "chrome", {
  configurable: false,
  enumerable: true,
  writable: true,
  value: {
    app: {
      InstallState: {
        DISABLED: 'disabled',
        INSTALLED: 'installed',
        NOT_INSTALLED: 'not_installed'
      },
      RunningState: {
        CANNOT_RUN: 'cannot_run',
        READY_TO_RUN: 'ready_to_run',
        RUNNING: 'running'
      },
      getDetails: function getDetails() {
        debugger;
        bodaEnv.toolsFunc.console_copy('window_chrome_app 获取getDetails 检测');
      },
      getIsInstalled: function getIsInstalled() {
        debugger;
        bodaEnv.toolsFunc.console_copy('window_chrome_app 获取getIsInstalled 检测');
      },
      installState: function installState() {
        debugger;
        bodaEnv.toolsFunc.console_copy('window_chrome_app 获取installState 检测');
      },
      isInstalled: false,
      runningState: function runningState() {
        debugger;
        bodaEnv.toolsFunc.console_copy('window_chrome_app 获取runningState 检测');
      }
    },
    csi: function () {
      debugger;
      bodaEnv.toolsFunc.console_copy('window_chrome 获取csi 检测');
    },
    loadTimes: function () {
      debugger;
      bodaEnv.toolsFunc.console_copy('window_chrome 获取loadTimes 检测');
    }
  }
});
bodaEnv.toolsFunc.safefunction(window.chrome.csi, '', true);
bodaEnv.toolsFunc.safefunction(window.chrome.loadTimes, '', true);
bodaEnv.toolsFunc.safefunction(window.chrome.app.getDetails, 'getDetails');
bodaEnv.toolsFunc.safefunction(window.chrome.app.getIsInstalled, 'getIsInstalled');
bodaEnv.toolsFunc.safefunction(window.chrome.app.installState, 'installState');
bodaEnv.toolsFunc.safefunction(window.chrome.app.runningState, 'runningState');
// debugger
// chrome = bodaEnv.toolsFunc.proxyHelper(chrome, 'chrome');
// debugger

bodaEnv.toolsFunc.defineProperty(window, "WebAssembly", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['WebAssembly']
});
bodaEnv.toolsFunc.defineProperty(window, "caches", {
  configurable: true,
  enumerable: true,
  get: {
    caches() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "caches_get", arguments);
    }
  }.caches,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(window, "cookieStore", {
  configurable: true,
  enumerable: true,
  get: {
    cookieStore() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "cookieStore_get", arguments);
    }
  }.cookieStore,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(window, "ondevicemotion", {
  configurable: true,
  enumerable: true,
  get: {
    ondevicemotion() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "ondevicemotion_get", arguments, null);
    }
  }.ondevicemotion,
  set: {
    ondevicemotion() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "ondevicemotion_set", arguments);
    }
  }.ondevicemotion
});
bodaEnv.toolsFunc.defineProperty(window, "ondeviceorientation", {
  configurable: true,
  enumerable: true,
  get: {
    ondeviceorientation() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "ondeviceorientation_get", arguments, null);
    }
  }.ondeviceorientation,
  set: {
    ondeviceorientation() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "ondeviceorientation_set", arguments);
    }
  }.ondeviceorientation
});
bodaEnv.toolsFunc.defineProperty(window, "ondeviceorientationabsolute", {
  configurable: true,
  enumerable: true,
  get: {
    ondeviceorientationabsolute() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "ondeviceorientationabsolute_get", arguments, null);
    }
  }.ondeviceorientationabsolute,
  set: {
    ondeviceorientationabsolute() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "ondeviceorientationabsolute_set", arguments);
    }
  }.ondeviceorientationabsolute
});
bodaEnv.toolsFunc.defineProperty(window, "documentPictureInPicture", {
  configurable: true,
  enumerable: true,
  get: {
    documentPictureInPicture() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "documentPictureInPicture_get", arguments);
    }
  }.documentPictureInPicture,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(window, "launchQueue", {
  configurable: true,
  enumerable: true,
  get: {
    launchQueue() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "launchQueue_get", arguments);
    }
  }.launchQueue,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(window, "onbeforematch", {
  configurable: true,
  enumerable: true,
  get: {
    onbeforematch() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "onbeforematch_get", arguments, null);
    }
  }.onbeforematch,
  set: {
    onbeforematch() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "onbeforematch_set", arguments);
    }
  }.onbeforematch
});
bodaEnv.toolsFunc.defineProperty(window, "onbeforetoggle", {
  configurable: true,
  enumerable: true,
  get: {
    onbeforetoggle() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "onbeforetoggle_get", arguments, null);
    }
  }.onbeforetoggle,
  set: {
    onbeforetoggle() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "onbeforetoggle_set", arguments);
    }
  }.onbeforetoggle
});
bodaEnv.toolsFunc.defineProperty(window, "AbsoluteOrientationSensor", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['AbsoluteOrientationSensor']
});
bodaEnv.toolsFunc.defineProperty(window, "Accelerometer", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['Accelerometer']
});
bodaEnv.toolsFunc.defineProperty(window, "AudioWorklet", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['AudioWorklet']
});
bodaEnv.toolsFunc.defineProperty(window, "BatteryManager", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['BatteryManager']
});
bodaEnv.toolsFunc.defineProperty(window, "Cache", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['Cache']
});
bodaEnv.toolsFunc.defineProperty(window, "CacheStorage", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['CacheStorage']
});
bodaEnv.toolsFunc.defineProperty(window, "Clipboard", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['Clipboard']
});
bodaEnv.toolsFunc.defineProperty(window, "ClipboardItem", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['ClipboardItem']
});
bodaEnv.toolsFunc.defineProperty(window, "CookieChangeEvent", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['CookieChangeEvent']
});
bodaEnv.toolsFunc.defineProperty(window, "CookieStore", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['CookieStore']
});
bodaEnv.toolsFunc.defineProperty(window, "CookieStoreManager", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['CookieStoreManager']
});
bodaEnv.toolsFunc.defineProperty(window, "Credential", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['Credential']
});
bodaEnv.toolsFunc.defineProperty(window, "CredentialsContainer", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['CredentialsContainer']
});
bodaEnv.toolsFunc.defineProperty(window, "CryptoKey", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['CryptoKey']
});
bodaEnv.toolsFunc.defineProperty(window, "DeviceMotionEvent", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['DeviceMotionEvent']
});
bodaEnv.toolsFunc.defineProperty(window, "DeviceMotionEventAcceleration", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['DeviceMotionEventAcceleration']
});
bodaEnv.toolsFunc.defineProperty(window, "DeviceMotionEventRotationRate", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['DeviceMotionEventRotationRate']
});
bodaEnv.toolsFunc.defineProperty(window, "DeviceOrientationEvent", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['DeviceOrientationEvent']
});
bodaEnv.toolsFunc.defineProperty(window, "FederatedCredential", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['FederatedCredential']
});
bodaEnv.toolsFunc.defineProperty(window, "GravitySensor", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['GravitySensor']
});
bodaEnv.toolsFunc.defineProperty(window, "Gyroscope", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['Gyroscope']
});
bodaEnv.toolsFunc.defineProperty(window, "Keyboard", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['Keyboard']
});
bodaEnv.toolsFunc.defineProperty(window, "KeyboardLayoutMap", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['KeyboardLayoutMap']
});
bodaEnv.toolsFunc.defineProperty(window, "LinearAccelerationSensor", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['LinearAccelerationSensor']
});
bodaEnv.toolsFunc.defineProperty(window, "Lock", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['Lock']
});
bodaEnv.toolsFunc.defineProperty(window, "LockManager", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['LockManager']
});
bodaEnv.toolsFunc.defineProperty(window, "MIDIAccess", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['MIDIAccess']
});
bodaEnv.toolsFunc.defineProperty(window, "MIDIConnectionEvent", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['MIDIConnectionEvent']
});
bodaEnv.toolsFunc.defineProperty(window, "MIDIInput", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['MIDIInput']
});
bodaEnv.toolsFunc.defineProperty(window, "MIDIInputMap", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['MIDIInputMap']
});
bodaEnv.toolsFunc.defineProperty(window, "MIDIMessageEvent", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['MIDIMessageEvent']
});
bodaEnv.toolsFunc.defineProperty(window, "MIDIOutput", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['MIDIOutput']
});
bodaEnv.toolsFunc.defineProperty(window, "MIDIOutputMap", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['MIDIOutputMap']
});
bodaEnv.toolsFunc.defineProperty(window, "MIDIPort", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['MIDIPort']
});
bodaEnv.toolsFunc.defineProperty(window, "MediaDeviceInfo", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['MediaDeviceInfo']
});
bodaEnv.toolsFunc.defineProperty(window, "MediaDevices", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['MediaDevices']
});
bodaEnv.toolsFunc.defineProperty(window, "MediaKeyMessageEvent", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['MediaKeyMessageEvent']
});
bodaEnv.toolsFunc.defineProperty(window, "MediaKeySesboda", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['MediaKeySesboda']
});
bodaEnv.toolsFunc.defineProperty(window, "MediaKeyStatusMap", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['MediaKeyStatusMap']
});
bodaEnv.toolsFunc.defineProperty(window, "MediaKeySystemAccess", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['MediaKeySystemAccess']
});
bodaEnv.toolsFunc.defineProperty(window, "MediaKeys", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['MediaKeys']
});
bodaEnv.toolsFunc.defineProperty(window, "NavigationPreloadManager", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['NavigationPreloadManager']
});
bodaEnv.toolsFunc.defineProperty(window, "NavigatorManagedData", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['NavigatorManagedData']
});
bodaEnv.toolsFunc.defineProperty(window, "OrientationSensor", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['OrientationSensor']
});
bodaEnv.toolsFunc.defineProperty(window, "PasswordCredential", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['PasswordCredential']
});
bodaEnv.toolsFunc.defineProperty(window, "RelativeOrientationSensor", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['RelativeOrientationSensor']
});
bodaEnv.toolsFunc.defineProperty(window, "Sanitizer", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['Sanitizer']
});
bodaEnv.toolsFunc.defineProperty(window, "ScreenDetailed", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['ScreenDetailed']
});
bodaEnv.toolsFunc.defineProperty(window, "ScreenDetails", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['ScreenDetails']
});
bodaEnv.toolsFunc.defineProperty(window, "Sensor", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['Sensor']
});
bodaEnv.toolsFunc.defineProperty(window, "SensorErrorEvent", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['SensorErrorEvent']
});
bodaEnv.toolsFunc.defineProperty(window, "ServiceWorker", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['ServiceWorker']
});
bodaEnv.toolsFunc.defineProperty(window, "ServiceWorkerContainer", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['ServiceWorkerContainer']
});
bodaEnv.toolsFunc.defineProperty(window, "ServiceWorkerRegistration", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['ServiceWorkerRegistration']
});
bodaEnv.toolsFunc.defineProperty(window, "StorageManager", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['StorageManager']
});
bodaEnv.toolsFunc.defineProperty(window, "SubtleCrypto", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['SubtleCrypto']
});
bodaEnv.toolsFunc.defineProperty(window, "VirtualKeyboard", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['VirtualKeyboard']
});
bodaEnv.toolsFunc.defineProperty(window, "WebTransport", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['WebTransport']
});
bodaEnv.toolsFunc.defineProperty(window, "WebTransportBidirectionalStream", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['WebTransportBidirectionalStream']
});
bodaEnv.toolsFunc.defineProperty(window, "WebTransportDatagramDuplexStream", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['WebTransportDatagramDuplexStream']
});
bodaEnv.toolsFunc.defineProperty(window, "WebTransportError", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['WebTransportError']
});
bodaEnv.toolsFunc.defineProperty(window, "Worklet", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['Worklet']
});
bodaEnv.toolsFunc.defineProperty(window, "XRDOMOverlayState", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['XRDOMOverlayState']
});
bodaEnv.toolsFunc.defineProperty(window, "XRLayer", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['XRLayer']
});
bodaEnv.toolsFunc.defineProperty(window, "XRWebGLBinding", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['XRWebGLBinding']
});
bodaEnv.toolsFunc.defineProperty(window, "AudioData", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['AudioData']
});
bodaEnv.toolsFunc.defineProperty(window, "EncodedAudioChunk", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['EncodedAudioChunk']
});
bodaEnv.toolsFunc.defineProperty(window, "EncodedVideoChunk", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['EncodedVideoChunk']
});
bodaEnv.toolsFunc.defineProperty(window, "ImageTrack", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['ImageTrack']
});
bodaEnv.toolsFunc.defineProperty(window, "ImageTrackList", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['ImageTrackList']
});
bodaEnv.toolsFunc.defineProperty(window, "VideoColorSpace", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['VideoColorSpace']
});
bodaEnv.toolsFunc.defineProperty(window, "VideoFrame", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['VideoFrame']
});
bodaEnv.toolsFunc.defineProperty(window, "AudioDecoder", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['AudioDecoder']
});
bodaEnv.toolsFunc.defineProperty(window, "AudioEncoder", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['AudioEncoder']
});
bodaEnv.toolsFunc.defineProperty(window, "ImageDecoder", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['ImageDecoder']
});
bodaEnv.toolsFunc.defineProperty(window, "VideoDecoder", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['VideoDecoder']
});
bodaEnv.toolsFunc.defineProperty(window, "VideoEncoder", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['VideoEncoder']
});
bodaEnv.toolsFunc.defineProperty(window, "AuthenticatorAssertionResponse", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['AuthenticatorAssertionResponse']
});
bodaEnv.toolsFunc.defineProperty(window, "AuthenticatorAttestationResponse", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['AuthenticatorAttestationResponse']
});
bodaEnv.toolsFunc.defineProperty(window, "AuthenticatorResponse", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['AuthenticatorResponse']
});
bodaEnv.toolsFunc.defineProperty(window, "PublicKeyCredential", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['PublicKeyCredential']
});
bodaEnv.toolsFunc.defineProperty(window, "Bluetooth", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['Bluetooth']
});
bodaEnv.toolsFunc.defineProperty(window, "BluetoothCharacteristicProperties", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['BluetoothCharacteristicProperties']
});
bodaEnv.toolsFunc.defineProperty(window, "BluetoothDevice", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['BluetoothDevice']
});
bodaEnv.toolsFunc.defineProperty(window, "BluetoothRemoteGATTCharacteristic", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['BluetoothRemoteGATTCharacteristic']
});
bodaEnv.toolsFunc.defineProperty(window, "BluetoothRemoteGATTDescriptor", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['BluetoothRemoteGATTDescriptor']
});
bodaEnv.toolsFunc.defineProperty(window, "BluetoothRemoteGATTServer", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['BluetoothRemoteGATTServer']
});
bodaEnv.toolsFunc.defineProperty(window, "BluetoothRemoteGATTService", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['BluetoothRemoteGATTService']
});
bodaEnv.toolsFunc.defineProperty(window, "CaptureController", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['CaptureController']
});
bodaEnv.toolsFunc.defineProperty(window, "DocumentPictureInPicture", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['DocumentPictureInPicture']
});
bodaEnv.toolsFunc.defineProperty(window, "EyeDropper", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['EyeDropper']
});
bodaEnv.toolsFunc.defineProperty(window, "FileSystemDirectoryHandle", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['FileSystemDirectoryHandle']
});
bodaEnv.toolsFunc.defineProperty(window, "FileSystemFileHandle", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['FileSystemFileHandle']
});
bodaEnv.toolsFunc.defineProperty(window, "FileSystemHandle", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['FileSystemHandle']
});
bodaEnv.toolsFunc.defineProperty(window, "FileSystemWritableFileStream", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['FileSystemWritableFileStream']
});
bodaEnv.toolsFunc.defineProperty(window, "FontData", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['FontData']
});
bodaEnv.toolsFunc.defineProperty(window, "FragmentDirective", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['FragmentDirective']
});
bodaEnv.toolsFunc.defineProperty(window, "GPU", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['GPU']
});
bodaEnv.toolsFunc.defineProperty(window, "GPUAdapter", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['GPUAdapter']
});
bodaEnv.toolsFunc.defineProperty(window, "GPUAdapterInfo", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['GPUAdapterInfo']
});
bodaEnv.toolsFunc.defineProperty(window, "GPUBindGroup", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['GPUBindGroup']
});
bodaEnv.toolsFunc.defineProperty(window, "GPUBindGroupLayout", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['GPUBindGroupLayout']
});
bodaEnv.toolsFunc.defineProperty(window, "GPUBuffer", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['GPUBuffer']
});
bodaEnv.toolsFunc.defineProperty(window, "GPUBufferUsage", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['GPUBufferUsage']
});
bodaEnv.toolsFunc.defineProperty(window, "GPUCanvasContext", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['GPUCanvasContext']
});
bodaEnv.toolsFunc.defineProperty(window, "GPUColorWrite", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['GPUColorWrite']
});
bodaEnv.toolsFunc.defineProperty(window, "GPUCommandBuffer", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['GPUCommandBuffer']
});
bodaEnv.toolsFunc.defineProperty(window, "GPUCommandEncoder", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['GPUCommandEncoder']
});
bodaEnv.toolsFunc.defineProperty(window, "GPUCompilationInfo", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['GPUCompilationInfo']
});
bodaEnv.toolsFunc.defineProperty(window, "GPUCompilationMessage", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['GPUCompilationMessage']
});
bodaEnv.toolsFunc.defineProperty(window, "GPUComputePassEncoder", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['GPUComputePassEncoder']
});
bodaEnv.toolsFunc.defineProperty(window, "GPUComputePipeline", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['GPUComputePipeline']
});
bodaEnv.toolsFunc.defineProperty(window, "GPUDevice", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['GPUDevice']
});
bodaEnv.toolsFunc.defineProperty(window, "GPUDeviceLostInfo", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['GPUDeviceLostInfo']
});
bodaEnv.toolsFunc.defineProperty(window, "GPUError", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['GPUError']
});
bodaEnv.toolsFunc.defineProperty(window, "GPUExternalTexture", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['GPUExternalTexture']
});
bodaEnv.toolsFunc.defineProperty(window, "GPUInternalError", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['GPUInternalError']
});
bodaEnv.toolsFunc.defineProperty(window, "GPUMapMode", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['GPUMapMode']
});
bodaEnv.toolsFunc.defineProperty(window, "GPUOutOfMemoryError", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['GPUOutOfMemoryError']
});
bodaEnv.toolsFunc.defineProperty(window, "GPUPipelineError", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['GPUPipelineError']
});
bodaEnv.toolsFunc.defineProperty(window, "GPUPipelineLayout", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['GPUPipelineLayout']
});
bodaEnv.toolsFunc.defineProperty(window, "GPUQuerySet", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['GPUQuerySet']
});
bodaEnv.toolsFunc.defineProperty(window, "GPUQueue", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['GPUQueue']
});
bodaEnv.toolsFunc.defineProperty(window, "GPURenderBundle", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['GPURenderBundle']
});
bodaEnv.toolsFunc.defineProperty(window, "GPURenderBundleEncoder", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['GPURenderBundleEncoder']
});
bodaEnv.toolsFunc.defineProperty(window, "GPURenderPassEncoder", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['GPURenderPassEncoder']
});
bodaEnv.toolsFunc.defineProperty(window, "GPURenderPipeline", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['GPURenderPipeline']
});
bodaEnv.toolsFunc.defineProperty(window, "GPUSampler", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['GPUSampler']
});
bodaEnv.toolsFunc.defineProperty(window, "GPUShaderModule", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['GPUShaderModule']
});
bodaEnv.toolsFunc.defineProperty(window, "GPUShaderStage", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['GPUShaderStage']
});
bodaEnv.toolsFunc.defineProperty(window, "GPUSupportedFeatures", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['GPUSupportedFeatures']
});
bodaEnv.toolsFunc.defineProperty(window, "GPUSupportedLimits", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['GPUSupportedLimits']
});
bodaEnv.toolsFunc.defineProperty(window, "GPUTexture", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['GPUTexture']
});
bodaEnv.toolsFunc.defineProperty(window, "GPUTextureUsage", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['GPUTextureUsage']
});
bodaEnv.toolsFunc.defineProperty(window, "GPUTextureView", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['GPUTextureView']
});
bodaEnv.toolsFunc.defineProperty(window, "GPUUncapturedErrorEvent", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['GPUUncapturedErrorEvent']
});
bodaEnv.toolsFunc.defineProperty(window, "GPUValidationError", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['GPUValidationError']
});
bodaEnv.toolsFunc.defineProperty(window, "WGSLLanguageFeatures", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['WGSLLanguageFeatures']
});
bodaEnv.toolsFunc.defineProperty(window, "HID", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['HID']
});
bodaEnv.toolsFunc.defineProperty(window, "HIDConnectionEvent", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['HIDConnectionEvent']
});
bodaEnv.toolsFunc.defineProperty(window, "HIDDevice", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['HIDDevice']
});
bodaEnv.toolsFunc.defineProperty(window, "HIDInputReportEvent", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['HIDInputReportEvent']
});
bodaEnv.toolsFunc.defineProperty(window, "IdentityCredential", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['IdentityCredential']
});
bodaEnv.toolsFunc.defineProperty(window, "IdentityProvider", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['IdentityProvider']
});
bodaEnv.toolsFunc.defineProperty(window, "IdleDetector", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['IdleDetector']
});
bodaEnv.toolsFunc.defineProperty(window, "LaunchParams", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['LaunchParams']
});
bodaEnv.toolsFunc.defineProperty(window, "LaunchQueue", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['LaunchQueue']
});
bodaEnv.toolsFunc.defineProperty(window, "OTPCredential", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['OTPCredential']
});
bodaEnv.toolsFunc.defineProperty(window, "PaymentAddress", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['PaymentAddress']
});
bodaEnv.toolsFunc.defineProperty(window, "PaymentRequest", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['PaymentRequest']
});
bodaEnv.toolsFunc.defineProperty(window, "PaymentResponse", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['PaymentResponse']
});
bodaEnv.toolsFunc.defineProperty(window, "PaymentMethodChangeEvent", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['PaymentMethodChangeEvent']
});
bodaEnv.toolsFunc.defineProperty(window, "Presentation", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['Presentation']
});
bodaEnv.toolsFunc.defineProperty(window, "PresentationAvailability", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['PresentationAvailability']
});
bodaEnv.toolsFunc.defineProperty(window, "PresentationConnection", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['PresentationConnection']
});
bodaEnv.toolsFunc.defineProperty(window, "PresentationConnectionAvailableEvent", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['PresentationConnectionAvailableEvent']
});
bodaEnv.toolsFunc.defineProperty(window, "PresentationConnectionCloseEvent", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['PresentationConnectionCloseEvent']
});
bodaEnv.toolsFunc.defineProperty(window, "PresentationConnectionList", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['PresentationConnectionList']
});
bodaEnv.toolsFunc.defineProperty(window, "PresentationReceiver", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['PresentationReceiver']
});
bodaEnv.toolsFunc.defineProperty(window, "PresentationRequest", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['PresentationRequest']
});
bodaEnv.toolsFunc.defineProperty(window, "Serial", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['Serial']
});
bodaEnv.toolsFunc.defineProperty(window, "SerialPort", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['SerialPort']
});
bodaEnv.toolsFunc.defineProperty(window, "ToggleEvent", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['ToggleEvent']
});
bodaEnv.toolsFunc.defineProperty(window, "USB", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['USB']
});
bodaEnv.toolsFunc.defineProperty(window, "USBAlternateInterface", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['USBAlternateInterface']
});
bodaEnv.toolsFunc.defineProperty(window, "USBConfiguration", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['USBConfiguration']
});
bodaEnv.toolsFunc.defineProperty(window, "USBConnectionEvent", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['USBConnectionEvent']
});
bodaEnv.toolsFunc.defineProperty(window, "USBDevice", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['USBDevice']
});
bodaEnv.toolsFunc.defineProperty(window, "USBEndpoint", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['USBEndpoint']
});
bodaEnv.toolsFunc.defineProperty(window, "USBInTransferResult", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['USBInTransferResult']
});
bodaEnv.toolsFunc.defineProperty(window, "USBInterface", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['USBInterface']
});
bodaEnv.toolsFunc.defineProperty(window, "USBIsochronousInTransferPacket", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['USBIsochronousInTransferPacket']
});
bodaEnv.toolsFunc.defineProperty(window, "USBIsochronousInTransferResult", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['USBIsochronousInTransferResult']
});
bodaEnv.toolsFunc.defineProperty(window, "USBIsochronousOutTransferPacket", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['USBIsochronousOutTransferPacket']
});
bodaEnv.toolsFunc.defineProperty(window, "USBIsochronousOutTransferResult", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['USBIsochronousOutTransferResult']
});
bodaEnv.toolsFunc.defineProperty(window, "USBOutTransferResult", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['USBOutTransferResult']
});
bodaEnv.toolsFunc.defineProperty(window, "WakeLock", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['WakeLock']
});
bodaEnv.toolsFunc.defineProperty(window, "WakeLockSentinel", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['WakeLockSentinel']
});
bodaEnv.toolsFunc.defineProperty(window, "WindowControlsOverlay", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['WindowControlsOverlay']
});
bodaEnv.toolsFunc.defineProperty(window, "WindowControlsOverlayGeometryChangeEvent", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['WindowControlsOverlayGeometryChangeEvent']
});
bodaEnv.toolsFunc.defineProperty(window, "XRAnchor", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['XRAnchor']
});
bodaEnv.toolsFunc.defineProperty(window, "XRAnchorSet", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['XRAnchorSet']
});
bodaEnv.toolsFunc.defineProperty(window, "XRBoundedReferenceSpace", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['XRBoundedReferenceSpace']
});
bodaEnv.toolsFunc.defineProperty(window, "XRCPUDepthInformation", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['XRCPUDepthInformation']
});
bodaEnv.toolsFunc.defineProperty(window, "XRCamera", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['XRCamera']
});
bodaEnv.toolsFunc.defineProperty(window, "XRDepthInformation", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['XRDepthInformation']
});
bodaEnv.toolsFunc.defineProperty(window, "XRFrame", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['XRFrame']
});
bodaEnv.toolsFunc.defineProperty(window, "XRHitTestResult", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['XRHitTestResult']
});
bodaEnv.toolsFunc.defineProperty(window, "XRHitTestSource", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['XRHitTestSource']
});
bodaEnv.toolsFunc.defineProperty(window, "XRInputSource", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['XRInputSource']
});
bodaEnv.toolsFunc.defineProperty(window, "XRInputSourceArray", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['XRInputSourceArray']
});
bodaEnv.toolsFunc.defineProperty(window, "XRInputSourceEvent", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['XRInputSourceEvent']
});
bodaEnv.toolsFunc.defineProperty(window, "XRInputSourcesChangeEvent", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['XRInputSourcesChangeEvent']
});
bodaEnv.toolsFunc.defineProperty(window, "XRLightEstimate", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['XRLightEstimate']
});
bodaEnv.toolsFunc.defineProperty(window, "XRLightProbe", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['XRLightProbe']
});
bodaEnv.toolsFunc.defineProperty(window, "XRPose", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['XRPose']
});
bodaEnv.toolsFunc.defineProperty(window, "XRRay", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['XRRay']
});
bodaEnv.toolsFunc.defineProperty(window, "XRReferenceSpace", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['XRReferenceSpace']
});
bodaEnv.toolsFunc.defineProperty(window, "XRReferenceSpaceEvent", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['XRReferenceSpaceEvent']
});
bodaEnv.toolsFunc.defineProperty(window, "XRRenderState", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['XRRenderState']
});
bodaEnv.toolsFunc.defineProperty(window, "XRRigidTransform", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['XRRigidTransform']
});
bodaEnv.toolsFunc.defineProperty(window, "XRSesboda", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['XRSesboda']
});
bodaEnv.toolsFunc.defineProperty(window, "XRSesbodaEvent", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['XRSesbodaEvent']
});
bodaEnv.toolsFunc.defineProperty(window, "XRSpace", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['XRSpace']
});
bodaEnv.toolsFunc.defineProperty(window, "XRSystem", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['XRSystem']
});
bodaEnv.toolsFunc.defineProperty(window, "XRTransientInputHitTestResult", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['XRTransientInputHitTestResult']
});
bodaEnv.toolsFunc.defineProperty(window, "XRTransientInputHitTestSource", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['XRTransientInputHitTestSource']
});
bodaEnv.toolsFunc.defineProperty(window, "XRView", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['XRView']
});
bodaEnv.toolsFunc.defineProperty(window, "XRViewerPose", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['XRViewerPose']
});
bodaEnv.toolsFunc.defineProperty(window, "XRViewport", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['XRViewport']
});
bodaEnv.toolsFunc.defineProperty(window, "XRWebGLDepthInformation", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['XRWebGLDepthInformation']
});
bodaEnv.toolsFunc.defineProperty(window, "XRWebGLLayer", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['XRWebGLLayer']
});
bodaEnv.toolsFunc.defineProperty(window, "getScreenDetails", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    getScreenDetails() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "getScreenDetails", arguments);
    }
  }.getScreenDetails
});
bodaEnv.toolsFunc.defineProperty(window, "queryLocalFonts", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    queryLocalFonts() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "queryLocalFonts", arguments);
    }
  }.queryLocalFonts
});
bodaEnv.toolsFunc.defineProperty(window, "showDirectoryPicker", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    showDirectoryPicker() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "showDirectoryPicker", arguments);
    }
  }.showDirectoryPicker
});
bodaEnv.toolsFunc.defineProperty(window, "showOpenFilePicker", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    showOpenFilePicker() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "showOpenFilePicker", arguments);
    }
  }.showOpenFilePicker
});
bodaEnv.toolsFunc.defineProperty(window, "showSaveFilePicker", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    showSaveFilePicker() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "showSaveFilePicker", arguments);
    }
  }.showSaveFilePicker
});
bodaEnv.toolsFunc.defineProperty(window, "originAgentCluster", {
  configurable: true,
  enumerable: true,
  get: {
    originAgentCluster() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "originAgentCluster_get", arguments, false);
    }
  }.originAgentCluster,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(window, "credentialless", {
  configurable: true,
  enumerable: true,
  get: {
    credentialless() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "credentialless_get", arguments, false);
    }
  }.credentialless,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(window, "speechSynthesis", {
  configurable: true,
  enumerable: true,
  get: {
    speechSynthesis() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "speechSynthesis_get", arguments);
    }
  }.speechSynthesis,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(window, "oncontentvisibilityautostatechange", {
  configurable: true,
  enumerable: true,
  get: {
    oncontentvisibilityautostatechange() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "oncontentvisibilityautostatechange_get", arguments, null);
    }
  }.oncontentvisibilityautostatechange,
  set: {
    oncontentvisibilityautostatechange() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "oncontentvisibilityautostatechange_set", arguments);
    }
  }.oncontentvisibilityautostatechange
});
bodaEnv.toolsFunc.defineProperty(window, "onscrollend", {
  configurable: true,
  enumerable: true,
  get: {
    onscrollend() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "onscrollend_get", arguments, null);
    }
  }.onscrollend,
  set: {
    onscrollend() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "onscrollend_set", arguments);
    }
  }.onscrollend
});
bodaEnv.toolsFunc.defineProperty(window, "AnimationPlaybackEvent", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['AnimationPlaybackEvent']
});
bodaEnv.toolsFunc.defineProperty(window, "AnimationTimeline", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['AnimationTimeline']
});
bodaEnv.toolsFunc.defineProperty(window, "CSSAnimation", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['CSSAnimation']
});
bodaEnv.toolsFunc.defineProperty(window, "CSSTransition", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['CSSTransition']
});
bodaEnv.toolsFunc.defineProperty(window, "DocumentTimeline", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['DocumentTimeline']
});
bodaEnv.toolsFunc.defineProperty(window, "BackgroundFetchManager", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['BackgroundFetchManager']
});
bodaEnv.toolsFunc.defineProperty(window, "BackgroundFetchRecord", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['BackgroundFetchRecord']
});
bodaEnv.toolsFunc.defineProperty(window, "BackgroundFetchRegistration", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['BackgroundFetchRegistration']
});
bodaEnv.toolsFunc.defineProperty(window, "BluetoothUUID", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['BluetoothUUID']
});
bodaEnv.toolsFunc.defineProperty(window, "BrowserCaptureMediaStreamTrack", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['BrowserCaptureMediaStreamTrack']
});
bodaEnv.toolsFunc.defineProperty(window, "CropTarget", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['CropTarget']
});
bodaEnv.toolsFunc.defineProperty(window, "ContentVisibilityAutoStateChangeEvent", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['ContentVisibilityAutoStateChangeEvent']
});
bodaEnv.toolsFunc.defineProperty(window, "DelegatedInkTrailPresenter", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['DelegatedInkTrailPresenter']
});
bodaEnv.toolsFunc.defineProperty(window, "Ink", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['Ink']
});
bodaEnv.toolsFunc.defineProperty(window, "DocumentPictureInPictureEvent", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['DocumentPictureInPictureEvent']
});
bodaEnv.toolsFunc.defineProperty(window, "Highlight", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['Highlight']
});
bodaEnv.toolsFunc.defineProperty(window, "HighlightRegistry", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['HighlightRegistry']
});
bodaEnv.toolsFunc.defineProperty(window, "MathMLElement", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['MathMLElement']
});
bodaEnv.toolsFunc.defineProperty(window, "MediaMetadata", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['MediaMetadata']
});
bodaEnv.toolsFunc.defineProperty(window, "MediaSession", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['MediaSession']
});
bodaEnv.toolsFunc.defineProperty(window, "MutationEvent", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['MutationEvent']
});
bodaEnv.toolsFunc.defineProperty(window, "NavigatorUAData", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['NavigatorUAData']
});
bodaEnv.toolsFunc.defineProperty(window, "Notification", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['Notification']
});
bodaEnv.toolsFunc.defineProperty(window, "PaymentManager", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['PaymentManager']
});
bodaEnv.toolsFunc.defineProperty(window, "PaymentRequestUpdateEvent", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['PaymentRequestUpdateEvent']
});
bodaEnv.toolsFunc.defineProperty(window, "PeriodicSyncManager", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['PeriodicSyncManager']
});
bodaEnv.toolsFunc.defineProperty(window, "PermissionStatus", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['PermissionStatus']
});
bodaEnv.toolsFunc.defineProperty(window, "Permissions", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['Permissions']
});
bodaEnv.toolsFunc.defineProperty(window, "PushManager", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['PushManager']
});
bodaEnv.toolsFunc.defineProperty(window, "PushSubscription", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['PushSubscription']
});
bodaEnv.toolsFunc.defineProperty(window, "PushSubscriptionOptions", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['PushSubscriptionOptions']
});
bodaEnv.toolsFunc.defineProperty(window, "RemotePlayback", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['RemotePlayback']
});
bodaEnv.toolsFunc.defineProperty(window, "ScrollTimeline", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['ScrollTimeline']
});
bodaEnv.toolsFunc.defineProperty(window, "ViewTimeline", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['ViewTimeline']
});
bodaEnv.toolsFunc.defineProperty(window, "SharedWorker", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['SharedWorker']
});
bodaEnv.toolsFunc.defineProperty(window, "SpeechSynthesisErrorEvent", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['SpeechSynthesisErrorEvent']
});
bodaEnv.toolsFunc.defineProperty(window, "SpeechSynthesisEvent", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['SpeechSynthesisEvent']
});
bodaEnv.toolsFunc.defineProperty(window, "SpeechSynthesisUtterance", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['SpeechSynthesisUtterance']
});
bodaEnv.toolsFunc.defineProperty(window, "VideoPlaybackQuality", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['VideoPlaybackQuality']
});
bodaEnv.toolsFunc.defineProperty(window, "ViewTransition", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['ViewTransition']
});
bodaEnv.toolsFunc.defineProperty(window, "VisibilityStateEntry", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: bodaEnv.memory.globlProtoObj['VisibilityStateEntry']
});
bodaEnv.toolsFunc.defineProperty(window, "webkitSpeechGrammar", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: {
    webkitSpeechGrammar() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "webkitSpeechGrammar", arguments);
    }
  }.webkitSpeechGrammar
});
bodaEnv.toolsFunc.defineProperty(window, "webkitSpeechGrammarList", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: {
    webkitSpeechGrammarList() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "webkitSpeechGrammarList", arguments);
    }
  }.webkitSpeechGrammarList
});
bodaEnv.toolsFunc.defineProperty(window, "webkitSpeechRecognition", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: {
    webkitSpeechRecognition() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "webkitSpeechRecognition", arguments);
    }
  }.webkitSpeechRecognition
});
bodaEnv.toolsFunc.defineProperty(window, "webkitSpeechRecognitionError", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: {
    webkitSpeechRecognitionError() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "webkitSpeechRecognitionError", arguments);
    }
  }.webkitSpeechRecognitionError
});
bodaEnv.toolsFunc.defineProperty(window, "webkitSpeechRecognitionEvent", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: {
    webkitSpeechRecognitionEvent() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "webkitSpeechRecognitionEvent", arguments);
    }
  }.webkitSpeechRecognitionEvent
});
bodaEnv.toolsFunc.defineProperty(window, "openDatabase", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    openDatabase() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "openDatabase", arguments);
    }
  }.openDatabase
});
bodaEnv.toolsFunc.defineProperty(window, "webkitRequestFileSystem", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    webkitRequestFileSystem() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "webkitRequestFileSystem", arguments);
    }
  }.webkitRequestFileSystem
});
bodaEnv.toolsFunc.defineProperty(window, "webkitResolveLocalFileSystemURL", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    webkitResolveLocalFileSystemURL() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "webkitResolveLocalFileSystemURL", arguments);
    }
  }.webkitResolveLocalFileSystemURL
});
bodaEnv.toolsFunc.defineProperty(window, "vilame_setter", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: bodaEnv.memory.window['vilame_setter']
});
vilame_setter = bodaEnv.toolsFunc.proxyHelper(vilame_setter, 'vilame_setter');
bodaEnv.toolsFunc.defineProperty(window, "dir", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: {
    dir() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "dir", arguments);
    }
  }.dir
});
bodaEnv.toolsFunc.defineProperty(window, "dirxml", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: {
    dirxml() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "dirxml", arguments);
    }
  }.dirxml
});
bodaEnv.toolsFunc.defineProperty(window, "profile", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: {
    profile() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "profile", arguments);
    }
  }.profile
});
bodaEnv.toolsFunc.defineProperty(window, "profileEnd", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: {
    profileEnd() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "profileEnd", arguments);
    }
  }.profileEnd
});
bodaEnv.toolsFunc.defineProperty(window, "clear", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: {
    clear() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "clear", arguments);
    }
  }.clear
});
bodaEnv.toolsFunc.defineProperty(window, "table", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: {
    table() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "table", arguments);
    }
  }.table
});
bodaEnv.toolsFunc.defineProperty(window, "keys", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: {
    keys() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "keys", arguments);
    }
  }.keys
});
bodaEnv.toolsFunc.defineProperty(window, "values", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: {
    values() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "values", arguments);
    }
  }.values
});
bodaEnv.toolsFunc.defineProperty(window, "debug", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: {
    debug() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "debug", arguments);
    }
  }.debug
});
bodaEnv.toolsFunc.defineProperty(window, "undebug", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: {
    undebug() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "undebug", arguments);
    }
  }.undebug
});
bodaEnv.toolsFunc.defineProperty(window, "monitor", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: {
    monitor() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "monitor", arguments);
    }
  }.monitor
});
bodaEnv.toolsFunc.defineProperty(window, "unmonitor", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: {
    unmonitor() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "unmonitor", arguments);
    }
  }.unmonitor
});
bodaEnv.toolsFunc.defineProperty(window, "inspect", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: {
    inspect() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "inspect", arguments);
    }
  }.inspect
});
bodaEnv.toolsFunc.defineProperty(window, "copy", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: {
    copy() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "copy", arguments);
    }
  }.copy
});
bodaEnv.toolsFunc.defineProperty(window, "queryObjects", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: {
    queryObjects() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "queryObjects", arguments);
    }
  }.queryObjects
});
bodaEnv.toolsFunc.defineProperty(window, "$_", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: {
    $_() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "$_", arguments);
    }
  }.$_
});
bodaEnv.toolsFunc.defineProperty(window, "$0", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: {
    $0() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "$0", arguments);
    }
  }.$0
});
bodaEnv.toolsFunc.defineProperty(window, "$1", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: {
    $1() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "$1", arguments);
    }
  }.$1
});
bodaEnv.toolsFunc.defineProperty(window, "$2", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: {
    $2() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "$2", arguments);
    }
  }.$2
});
bodaEnv.toolsFunc.defineProperty(window, "$3", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: {
    $3() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "$3", arguments);
    }
  }.$3
});
bodaEnv.toolsFunc.defineProperty(window, "$4", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: {
    $4() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "$4", arguments);
    }
  }.$4
});
bodaEnv.toolsFunc.defineProperty(window, "getEventListeners", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: {
    getEventListeners() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "getEventListeners", arguments);
    }
  }.getEventListeners
});
bodaEnv.toolsFunc.defineProperty(window, "getAccessibleName", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: {
    getAccessibleName() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "getAccessibleName", arguments);
    }
  }.getAccessibleName
});
bodaEnv.toolsFunc.defineProperty(window, "getAccessibleRole", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: {
    getAccessibleRole() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "getAccessibleRole", arguments);
    }
  }.getAccessibleRole
});
bodaEnv.toolsFunc.defineProperty(window, "monitorEvents", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: {
    monitorEvents() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "monitorEvents", arguments);
    }
  }.monitorEvents
});
bodaEnv.toolsFunc.defineProperty(window, "unmonitorEvents", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: {
    unmonitorEvents() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "unmonitorEvents", arguments);
    }
  }.unmonitorEvents
});
bodaEnv.toolsFunc.defineProperty(window, "$", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: {
    $() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "$", arguments);
    }
  }.$
});
bodaEnv.toolsFunc.defineProperty(window, "$$", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: {
    $$() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "$$", arguments);
    }
  }.$$
});
bodaEnv.toolsFunc.defineProperty(window, "$x", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: {
    $x() {
      return bodaEnv.toolsFunc.dispatch(this, window, "window", "$x", arguments);
    }
  }.$x
});
window.alert = {
  alert(a) {
    bodaEnv.toolsFunc.console_copy('bodaEnv.memory.globlProtoObj["alert"] -->', a);
  }
}.alert;
bodaEnv.toolsFunc.safefunction(alert, 'alert');

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
bodaEnv.toolsFunc.safefunction(String.prototype.toString, 'toString');
bodaEnv.toolsFunc.safefunction(Array.prototype.toString, 'toString');

// bodaEnv.toolsFunc.defineProperty_bo(window, 'require', {
//   value: undefined
// });
bodaEnv.toolsFunc.defineProperty_bo(console, Symbol.toStringTag, {
  value: 'console',
  configurable: true,
  writable: false,
  enumerable: false
});

// Error.prepareStackTrace=function(){
//   debugger
//   return 
// }

// Error.bodaEnvChangeErrorStack=Error.prepareStackTrace
// debugger
// delete Error.prepareStackTrace

// Error.captureStackTrace=function (){
//   debugger
//   // return '1111'
// }
// debugger


bodaEnv.toolsFunc.defineProperty_bo(Function.prototype.toString, 'prototype', {
  value: undefined
});
bodaEnv.toolsFunc.defineProperty_bo(Function.prototype.toString, 'name', {
  value: 'toString'
});
window.addEventListener.prototype = undefined;
bodaEnv.toolsFunc.defineProperty_bo(addEventListener, 'length', {
  value: 2,
  writable: false,
  enumerable: false,
  configurable: true
});
// delete window.addEventListener.
// debugger

// debugger;
// debugger

// window.VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL && bodaEnv.toolsFunc.defineProperty_bo(window, 'VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL', {
//   enumerable: false,
//   configurable: false,
//   writable: false,
//   value:undefined
// }, 'bobo');
// window.VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL=undefined
// debugger

// bodaEnv.memory.jsonCookie2 = bodaEnv.memory.jsonCookie;

// Error=function(){
//   debugger
// }
// bodaEnv.memory.islastDeal=false
// bodaEnv.memory.bodaStack=function(_stack,errtype){

//     bodaEnv.toolsFunc.console_copy('bodaEnv.memory.bodaStack未设置 请设置你要修改的返回堆栈 检测类型 -> ',errtype)
//     debugger
//     return _stack
// }
// debugger

//堆栈拦截
bodaError.prepareStackTrace = function () {
  // debugger;
  let _arg0 = arguments[0];
  let _arg1 = arguments[1];
  debugger
  bodaEnv.toolsFunc.console_copy(`Error stack 检测 !!!!! _arg0->`, _arg0 + '');
  bodaEnv.toolsFunc.console_copy(`Error stack 检测 !!!!! _arg1->`, _arg1 + '');
  // let _res = `Error
  // at HTMLDocument.i (https://g.alicdn.com/AWSC/fireyejs/1.227.0/fireyejs.js:753:29)`;
  
  let _res=`Error
  at P (https://www.zhipin.com/web/common/security-js/87b7f462.js:1:237643)
  at _ (https://www.zhipin.com/web/common/security-js/87b7f462.js:1:156718)
  at P (https://www.zhipin.com/web/common/security-js/87b7f462.js:1:187048)
  at i (https://www.zhipin.com/web/common/security-js/87b7f462.js:1:86500)
  at P (https://www.zhipin.com/web/common/security-js/87b7f462.js:1:188867)
  at p (https://www.zhipin.com/web/common/security-js/87b7f462.js:1:315359)
  at P (https://www.zhipin.com/web/common/security-js/87b7f462.js:1:242987)
  at Object.j [as z] (https://www.zhipin.com/web/common/security-js/87b7f462.js:1:2882)
  at r (https://static.zhipin.com/fe-zhipin-geek/web/chat/v5167/static/js/app.6e84b227.js:41181:33)
  at https://static.zhipin.com/fe-zhipin-geek/web/chat/v5167/static/js/app.6e84b227.js:41226:21`

  bodaEnv.toolsFunc.console_copy(`Error stack 检测 !!!!! 修改返回堆栈为->`, _res);
  return _res;
};


bodaEnv.toolsFunc.defineProperty_bo(this, 'window', {
  get: {window () {
    return this;
  }}.window,
  configurable: false,
  enumerable: true,
  set: undefined
});
// debugger
bodaEnv.toolsFunc.safeFunc(bodaEnv.toolsFunc.getOwnPropertyDescriptor_bo(this,'window').get,'get window')