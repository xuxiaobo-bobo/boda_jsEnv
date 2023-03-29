// delete location
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
globalThis.__proto__ = bodavm.memory.globalobj['Window'].prototype;
// document=bodavm.memory.globalobj['document']
bodavm.memory.globalobj['window'] = window;
bodavm.toolsFunc.windowdefineProperty(window, "atob", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function atob(str) {
    return bodavm.toolsFunc.base64.base64decode(str);
  }
});
bodavm.toolsFunc.windowdefineProperty(window, "btoa", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function btoa(str) {
    return bodavm.toolsFunc.base64.base64encode(str);
  }
});
// window对象
// debugger
// window对象
// bodavm.memory.globalobj['window'] = {}
// bodavm.memory.globalobj['window'].__proto__=bodavm.memory.globalobj['Window'].prototype;
console.log(`===============================================================================================================`);
console.log(`===============================================================================================================`);
console.log(`===============================================================================================================`);
console.log(`===============================================================================================================`);
console.log(`=====================================环    境    赋    值    初    始    化=====================================`);
console.log(`===============================================================================================================`);
console.log(`===============================================================================================================`);
console.log(`===============================================================================================================`);
console.log(`===============================================================================================================`);
// debugger
bodavm.toolsFunc.windowdefineProperty(window, "document", {
  configurable: false,
  enumerable: true,
  get: function document() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "document_get", arguments);
  },
  set: undefined
});

// bodavm.toolsFunc.windowdefineProperty(window, "Option", {configurable:true, enumerable:false, writable:true, value:function Option (){return bodavm.toolsFunc.windowdispatch(this, window, "window", "Option", arguments)}});
bodavm.toolsFunc.windowdefineProperty(window, "Document", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function Document() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "Document", arguments);
  }()
});
// debugger
bodavm.toolsFunc.windowdefineProperty(window, "location", {
  configurable: false,
  enumerable: true,
  get: function location() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "location_get", arguments);
  },
  set: function location() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "location_set", arguments);
  }
});
bodavm.toolsFunc.windowdefineProperty(window, "Location", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function Location() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "Location", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "toolbar", {
  configurable: true,
  enumerable: true,
  get: function toolbar() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "toolbar_get", arguments);
  },
  set: function toolbar() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "toolbar_set", arguments);
  }
});
bodavm.toolsFunc.windowdefineProperty(window, "menubar", {
  configurable: true,
  enumerable: true,
  get: function menubar() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "menubar_get", arguments);
  },
  set: function menubar() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "menubar_set", arguments);
  }
});
bodavm.toolsFunc.windowdefineProperty(window, "locationbar", {
  configurable: true,
  enumerable: true,
  get: function locationbar() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "locationbar_get", arguments);
  },
  set: function locationbar() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "locationbar_set", arguments);
  }
});
bodavm.toolsFunc.windowdefineProperty(window, "BarProp", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function BarProp() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "BarProp", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "customElements", {
  configurable: true,
  enumerable: true,
  get: function customElements() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "customElements_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.windowdefineProperty(window, "CustomElementRegistry", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function CustomElementRegistry() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "CustomElementRegistry", arguments);
  }()
});

// bodavm.toolsFunc.windowdefineProperty(window, "window", {configurable:false, enumerable:true, get:function window (){return bodavm.toolsFunc.dispatch(this, window, "window", "window_get", arguments)}, set:undefined});
bodavm.toolsFunc.windowdefineProperty(window, "Window", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function Window() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "Window", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "screen", {
  configurable: true,
  enumerable: true,
  get: function screen() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "screen_get", arguments);
  },
  set: function screen() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "screen_set", arguments);
  }
});
bodavm.toolsFunc.windowdefineProperty(window, "Screen", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function Screen() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "Screen", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "navigator", {
  configurable: true,
  enumerable: true,
  get: function navigator() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "navigator_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.windowdefineProperty(window, "Navigator", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function Navigator() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "Navigator", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "performance", {
  configurable: true,
  enumerable: true,
  get: function performance() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "performance_get", arguments);
  },
  set: function performance() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "performance_set", arguments);
  }
});
bodavm.toolsFunc.windowdefineProperty(window, "Performance", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function Performance() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "Performance", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "sessionStorage", {
  configurable: true,
  enumerable: true,
  get: function sessionStorage() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "sessionStorage_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.windowdefineProperty(window, "localStorage", {
  configurable: true,
  enumerable: true,
  get: function localStorage() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "localStorage_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.windowdefineProperty(window, "Storage", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function Storage() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "Storage", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "navigation", {
  configurable: true,
  enumerable: true,
  get: function navigation() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "navigation_get", arguments);
  },
  set: function navigation() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "navigation_set", arguments);
  }
});
bodavm.toolsFunc.windowdefineProperty(window, "Navigation", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function Navigation() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "Navigation", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "visualViewport", {
  configurable: true,
  enumerable: true,
  get: function visualViewport() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "visualViewport_get", arguments);
  },
  set: function visualViewport() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "visualViewport_set", arguments);
  }
});
bodavm.toolsFunc.windowdefineProperty(window, "VisualViewport", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function VisualViewport() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "VisualViewport", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "history", {
  configurable: true,
  enumerable: true,
  get: function history() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "history_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.windowdefineProperty(window, "History", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function History() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "History", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "indexedDB", {
  configurable: true,
  enumerable: true,
  get: function indexedDB() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "indexedDB_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.windowdefineProperty(window, "IDBFactory", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function IDBFactory() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "IDBFactory", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "trustedTypes", {
  configurable: true,
  enumerable: true,
  get: function trustedTypes() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "trustedTypes_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.windowdefineProperty(window, "TrustedTypePolicyFactory", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function TrustedTypePolicyFactory() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "TrustedTypePolicyFactory", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "cookieStore", {
  configurable: true,
  enumerable: true,
  get: function cookieStore() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "cookieStore_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.windowdefineProperty(window, "CookieStore", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function CookieStore() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "CookieStore", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "external", {
  configurable: true,
  enumerable: true,
  get: function external() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "external_get", arguments);
  },
  set: function external() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "external_set", arguments);
  }
});
bodavm.toolsFunc.windowdefineProperty(window, "External", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function External() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "External", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "caches", {
  configurable: true,
  enumerable: true,
  get: function caches() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "caches_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.windowdefineProperty(window, "CacheStorage", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function CacheStorage() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "CacheStorage", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "XMLHttpRequest", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function XMLHttpRequest() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "XMLHttpRequest", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "webkitStorageInfo", {
  configurable: true,
  enumerable: true,
  get: function webkitStorageInfo() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "webkitStorageInfo_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.windowdefineProperty(window, "speechSynthesis", {
  configurable: true,
  enumerable: true,
  get: function speechSynthesis() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "speechSynthesis_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.windowdefineProperty(window, "IDBDatabase", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function IDBDatabase() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "IDBDatabase", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "Image", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function Image() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "Image", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "Audio", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function Audio() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "Audio", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "webkitURL", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function webkitURL() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "webkitURL", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "webkitRTCPeerConnection", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function webkitRTCPeerConnection() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "webkitRTCPeerConnection", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "webkitMediaStream", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function webkitMediaStream() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "webkitMediaStream", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "WebKitMutationObserver", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function WebKitMutationObserver() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "WebKitMutationObserver", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "WebKitCSSMatrix", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function WebKitCSSMatrix() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "WebKitCSSMatrix", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "XPathResult", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function XPathResult() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "XPathResult", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "XPathExpression", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function XPathExpression() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "XPathExpression", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "XPathEvaluator", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function XPathEvaluator() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "XPathEvaluator", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "XMLSerializer", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function XMLSerializer() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "XMLSerializer", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "XMLHttpRequestUpload", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function XMLHttpRequestUpload() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "XMLHttpRequestUpload", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "XMLHttpRequestEventTarget", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function XMLHttpRequestEventTarget() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "XMLHttpRequestEventTarget", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "XMLDocument", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function XMLDocument() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "XMLDocument", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "WritableStreamDefaultWriter", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function WritableStreamDefaultWriter() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "WritableStreamDefaultWriter", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "WritableStreamDefaultController", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function WritableStreamDefaultController() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "WritableStreamDefaultController", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "WritableStream", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function WritableStream() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "WritableStream", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "Worker", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function Worker() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "Worker", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "WheelEvent", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function WheelEvent() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "WheelEvent", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "WebSocket", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function WebSocket() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "WebSocket", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "WebGLVertexArrayObject", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function WebGLVertexArrayObject() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "WebGLVertexArrayObject", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "WebGLUniformLocation", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function WebGLUniformLocation() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "WebGLUniformLocation", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "WebGLTransformFeedback", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function WebGLTransformFeedback() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "WebGLTransformFeedback", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "WebGLTexture", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function WebGLTexture() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "WebGLTexture", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "WebGLSync", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function WebGLSync() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "WebGLSync", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "WebGLShaderPrecisionFormat", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function WebGLShaderPrecisionFormat() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "WebGLShaderPrecisionFormat", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "WebGLShader", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function WebGLShader() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "WebGLShader", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "WebGLSampler", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function WebGLSampler() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "WebGLSampler", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "WebGLRenderingContext", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function WebGLRenderingContext() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "WebGLRenderingContext", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "WebGLRenderbuffer", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function WebGLRenderbuffer() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "WebGLRenderbuffer", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "WebGLQuery", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function WebGLQuery() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "WebGLQuery", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "WebGLProgram", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function WebGLProgram() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "WebGLProgram", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "WebGLFramebuffer", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function WebGLFramebuffer() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "WebGLFramebuffer", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "WebGLContextEvent", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function WebGLContextEvent() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "WebGLContextEvent", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "WebGLBuffer", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function WebGLBuffer() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "WebGLBuffer", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "WebGLActiveInfo", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function WebGLActiveInfo() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "WebGLActiveInfo", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "WebGL2RenderingContext", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function WebGL2RenderingContext() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "WebGL2RenderingContext", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "WaveShaperNode", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function WaveShaperNode() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "WaveShaperNode", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "ValidityState", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function ValidityState() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "ValidityState", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "VTTCue", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function VTTCue() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "VTTCue", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "UserActivation", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function UserActivation() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "UserActivation", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "URLSearchParams", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function URLSearchParams() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "URLSearchParams", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "URL", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function URL() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "URL", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "UIEvent", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function UIEvent() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "UIEvent", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "TreeWalker", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function TreeWalker() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "TreeWalker", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "TransitionEvent", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function TransitionEvent() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "TransitionEvent", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "TransformStream", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function TransformStream() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "TransformStream", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "TrackEvent", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function TrackEvent() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "TrackEvent", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "TouchList", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function TouchList() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "TouchList", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "TouchEvent", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function TouchEvent() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "TouchEvent", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "Touch", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function Touch() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "Touch", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "TimeRanges", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function TimeRanges() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "TimeRanges", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "TextTrackList", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function TextTrackList() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "TextTrackList", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "TextTrackCueList", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function TextTrackCueList() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "TextTrackCueList", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "TextTrackCue", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function TextTrackCue() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "TextTrackCue", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "TextTrack", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function TextTrack() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "TextTrack", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "TextMetrics", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function TextMetrics() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "TextMetrics", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "TextEvent", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function TextEvent() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "TextEvent", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "TextEncoderStream", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function TextEncoderStream() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "TextEncoderStream", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "TextEncoder", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function TextEncoder() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "TextEncoder", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "TextDecoderStream", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function TextDecoderStream() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "TextDecoderStream", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "TextDecoder", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function TextDecoder() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "TextDecoder", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "Text", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function Text() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "Text", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "TaskAttributionTiming", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function TaskAttributionTiming() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "TaskAttributionTiming", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "SyncManager", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function SyncManager() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "SyncManager", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "SubmitEvent", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function SubmitEvent() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "SubmitEvent", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "StyleSheetList", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function StyleSheetList() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "StyleSheetList", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "StyleSheet", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function StyleSheet() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "StyleSheet", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "StylePropertyMapReadOnly", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function StylePropertyMapReadOnly() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "StylePropertyMapReadOnly", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "StylePropertyMap", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function StylePropertyMap() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "StylePropertyMap", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "StorageEvent", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function StorageEvent() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "StorageEvent", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "StereoPannerNode", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function StereoPannerNode() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "StereoPannerNode", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "StaticRange", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function StaticRange() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "StaticRange", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "ShadowRoot", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function ShadowRoot() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "ShadowRoot", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "Selection", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function Selection() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "Selection", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "SecurityPolicyViolationEvent", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function SecurityPolicyViolationEvent() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "SecurityPolicyViolationEvent", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "ScriptProcessorNode", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function ScriptProcessorNode() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "ScriptProcessorNode", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "ScreenOrientation", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function ScreenOrientation() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "ScreenOrientation", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "SVGViewElement", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function SVGViewElement() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "SVGViewElement", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "SVGUseElement", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function SVGUseElement() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "SVGUseElement", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "SVGUnitTypes", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function SVGUnitTypes() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "SVGUnitTypes", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "SVGTransformList", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function SVGTransformList() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "SVGTransformList", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "SVGTransform", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function SVGTransform() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "SVGTransform", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "SVGTitleElement", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function SVGTitleElement() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "SVGTitleElement", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "SVGTextPositioningElement", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function SVGTextPositioningElement() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "SVGTextPositioningElement", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "SVGTextPathElement", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function SVGTextPathElement() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "SVGTextPathElement", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "SVGTextElement", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function SVGTextElement() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "SVGTextElement", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "SVGTextContentElement", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function SVGTextContentElement() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "SVGTextContentElement", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "SVGTSpanElement", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function SVGTSpanElement() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "SVGTSpanElement", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "SVGSymbolElement", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function SVGSymbolElement() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "SVGSymbolElement", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "SVGSwitchElement", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function SVGSwitchElement() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "SVGSwitchElement", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "SVGStyleElement", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function SVGStyleElement() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "SVGStyleElement", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "SVGStringList", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function SVGStringList() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "SVGStringList", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "SVGStopElement", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function SVGStopElement() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "SVGStopElement", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "SVGSetElement", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function SVGSetElement() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "SVGSetElement", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "SVGScriptElement", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function SVGScriptElement() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "SVGScriptElement", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "SVGSVGElement", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function SVGSVGElement() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "SVGSVGElement", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "SVGRectElement", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function SVGRectElement() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "SVGRectElement", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "SVGRect", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function SVGRect() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "SVGRect", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "SVGRadialGradientElement", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function SVGRadialGradientElement() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "SVGRadialGradientElement", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "SVGPreserveAspectRatio", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function SVGPreserveAspectRatio() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "SVGPreserveAspectRatio", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "SVGPolylineElement", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function SVGPolylineElement() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "SVGPolylineElement", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "SVGPolygonElement", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function SVGPolygonElement() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "SVGPolygonElement", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "SVGPointList", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function SVGPointList() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "SVGPointList", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "SVGPoint", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function SVGPoint() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "SVGPoint", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "SVGPatternElement", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function SVGPatternElement() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "SVGPatternElement", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "SVGPathElement", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function SVGPathElement() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "SVGPathElement", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "SVGNumberList", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function SVGNumberList() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "SVGNumberList", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "SVGNumber", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function SVGNumber() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "SVGNumber", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "SVGMetadataElement", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function SVGMetadataElement() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "SVGMetadataElement", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "SVGMatrix", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function SVGMatrix() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "SVGMatrix", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "SVGMaskElement", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function SVGMaskElement() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "SVGMaskElement", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "SVGMarkerElement", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function SVGMarkerElement() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "SVGMarkerElement", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "SVGMPathElement", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function SVGMPathElement() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "SVGMPathElement", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "SVGLinearGradientElement", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function SVGLinearGradientElement() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "SVGLinearGradientElement", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "SVGLineElement", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function SVGLineElement() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "SVGLineElement", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "SVGLengthList", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function SVGLengthList() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "SVGLengthList", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "SVGLength", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function SVGLength() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "SVGLength", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "SVGImageElement", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function SVGImageElement() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "SVGImageElement", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "SVGGraphicsElement", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function SVGGraphicsElement() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "SVGGraphicsElement", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "SVGGradientElement", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function SVGGradientElement() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "SVGGradientElement", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "SVGGeometryElement", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function SVGGeometryElement() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "SVGGeometryElement", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "SVGGElement", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function SVGGElement() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "SVGGElement", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "SVGForeignObjectElement", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function SVGForeignObjectElement() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "SVGForeignObjectElement", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "SVGFilterElement", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function SVGFilterElement() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "SVGFilterElement", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "SVGFETurbulenceElement", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function SVGFETurbulenceElement() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "SVGFETurbulenceElement", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "SVGFETileElement", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function SVGFETileElement() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "SVGFETileElement", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "SVGFESpotLightElement", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function SVGFESpotLightElement() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "SVGFESpotLightElement", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "SVGFESpecularLightingElement", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function SVGFESpecularLightingElement() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "SVGFESpecularLightingElement", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "SVGFEPointLightElement", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function SVGFEPointLightElement() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "SVGFEPointLightElement", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "SVGFEOffsetElement", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function SVGFEOffsetElement() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "SVGFEOffsetElement", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "SVGFEMorphologyElement", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function SVGFEMorphologyElement() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "SVGFEMorphologyElement", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "SVGFEMergeNodeElement", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function SVGFEMergeNodeElement() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "SVGFEMergeNodeElement", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "SVGFEMergeElement", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function SVGFEMergeElement() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "SVGFEMergeElement", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "SVGFEImageElement", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function SVGFEImageElement() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "SVGFEImageElement", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "SVGFEGaussianBlurElement", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function SVGFEGaussianBlurElement() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "SVGFEGaussianBlurElement", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "SVGFEFuncRElement", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function SVGFEFuncRElement() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "SVGFEFuncRElement", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "SVGFEFuncGElement", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function SVGFEFuncGElement() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "SVGFEFuncGElement", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "SVGFEFuncBElement", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function SVGFEFuncBElement() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "SVGFEFuncBElement", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "SVGFEFuncAElement", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function SVGFEFuncAElement() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "SVGFEFuncAElement", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "SVGFEFloodElement", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function SVGFEFloodElement() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "SVGFEFloodElement", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "SVGFEDropShadowElement", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function SVGFEDropShadowElement() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "SVGFEDropShadowElement", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "SVGFEDistantLightElement", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function SVGFEDistantLightElement() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "SVGFEDistantLightElement", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "SVGFEDisplacementMapElement", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function SVGFEDisplacementMapElement() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "SVGFEDisplacementMapElement", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "SVGFEDiffuseLightingElement", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function SVGFEDiffuseLightingElement() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "SVGFEDiffuseLightingElement", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "SVGFEConvolveMatrixElement", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function SVGFEConvolveMatrixElement() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "SVGFEConvolveMatrixElement", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "SVGFECompositeElement", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function SVGFECompositeElement() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "SVGFECompositeElement", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "SVGFEComponentTransferElement", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function SVGFEComponentTransferElement() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "SVGFEComponentTransferElement", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "SVGFEColorMatrixElement", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function SVGFEColorMatrixElement() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "SVGFEColorMatrixElement", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "SVGFEBlendElement", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function SVGFEBlendElement() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "SVGFEBlendElement", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "SVGEllipseElement", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function SVGEllipseElement() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "SVGEllipseElement", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "SVGElement", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function SVGElement() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "SVGElement", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "SVGDescElement", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function SVGDescElement() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "SVGDescElement", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "SVGDefsElement", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function SVGDefsElement() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "SVGDefsElement", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "SVGComponentTransferFunctionElement", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function SVGComponentTransferFunctionElement() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "SVGComponentTransferFunctionElement", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "SVGClipPathElement", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function SVGClipPathElement() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "SVGClipPathElement", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "SVGCircleElement", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function SVGCircleElement() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "SVGCircleElement", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "SVGAnimationElement", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function SVGAnimationElement() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "SVGAnimationElement", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "SVGAnimatedTransformList", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function SVGAnimatedTransformList() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "SVGAnimatedTransformList", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "SVGAnimatedString", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function SVGAnimatedString() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "SVGAnimatedString", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "SVGAnimatedRect", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function SVGAnimatedRect() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "SVGAnimatedRect", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "SVGAnimatedPreserveAspectRatio", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function SVGAnimatedPreserveAspectRatio() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "SVGAnimatedPreserveAspectRatio", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "SVGAnimatedNumberList", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function SVGAnimatedNumberList() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "SVGAnimatedNumberList", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "SVGAnimatedNumber", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function SVGAnimatedNumber() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "SVGAnimatedNumber", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "SVGAnimatedLengthList", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function SVGAnimatedLengthList() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "SVGAnimatedLengthList", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "SVGAnimatedLength", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function SVGAnimatedLength() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "SVGAnimatedLength", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "SVGAnimatedInteger", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function SVGAnimatedInteger() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "SVGAnimatedInteger", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "SVGAnimatedEnumeration", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function SVGAnimatedEnumeration() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "SVGAnimatedEnumeration", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "SVGAnimatedBoolean", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function SVGAnimatedBoolean() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "SVGAnimatedBoolean", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "SVGAnimatedAngle", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function SVGAnimatedAngle() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "SVGAnimatedAngle", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "SVGAnimateTransformElement", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function SVGAnimateTransformElement() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "SVGAnimateTransformElement", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "SVGAnimateMotionElement", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function SVGAnimateMotionElement() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "SVGAnimateMotionElement", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "SVGAnimateElement", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function SVGAnimateElement() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "SVGAnimateElement", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "SVGAngle", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function SVGAngle() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "SVGAngle", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "SVGAElement", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function SVGAElement() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "SVGAElement", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "Response", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function Response() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "Response", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "ResizeObserverSize", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function ResizeObserverSize() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "ResizeObserverSize", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "ResizeObserverEntry", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function ResizeObserverEntry() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "ResizeObserverEntry", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "ResizeObserver", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function ResizeObserver() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "ResizeObserver", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "Request", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function Request() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "Request", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "ReportingObserver", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function ReportingObserver() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "ReportingObserver", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "ReadableStreamDefaultReader", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function ReadableStreamDefaultReader() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "ReadableStreamDefaultReader", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "ReadableStreamDefaultController", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function ReadableStreamDefaultController() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "ReadableStreamDefaultController", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "ReadableStreamBYOBRequest", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function ReadableStreamBYOBRequest() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "ReadableStreamBYOBRequest", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "ReadableStreamBYOBReader", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function ReadableStreamBYOBReader() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "ReadableStreamBYOBReader", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "ReadableStream", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function ReadableStream() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "ReadableStream", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "ReadableByteStreamController", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function ReadableByteStreamController() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "ReadableByteStreamController", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "Range", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function Range() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "Range", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "RadioNodeList", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function RadioNodeList() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "RadioNodeList", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "RTCTrackEvent", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function RTCTrackEvent() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "RTCTrackEvent", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "RTCStatsReport", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function RTCStatsReport() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "RTCStatsReport", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "RTCSessionDescription", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function RTCSessionDescription() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "RTCSessionDescription", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "RTCSctpTransport", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function RTCSctpTransport() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "RTCSctpTransport", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "RTCRtpTransceiver", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function RTCRtpTransceiver() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "RTCRtpTransceiver", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "RTCRtpSender", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function RTCRtpSender() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "RTCRtpSender", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "RTCRtpReceiver", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function RTCRtpReceiver() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "RTCRtpReceiver", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "RTCPeerConnectionIceEvent", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function RTCPeerConnectionIceEvent() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "RTCPeerConnectionIceEvent", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "RTCPeerConnectionIceErrorEvent", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function RTCPeerConnectionIceErrorEvent() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "RTCPeerConnectionIceErrorEvent", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "RTCPeerConnection", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function RTCPeerConnection() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "RTCPeerConnection", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "RTCIceCandidate", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function RTCIceCandidate() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "RTCIceCandidate", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "RTCErrorEvent", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function RTCErrorEvent() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "RTCErrorEvent", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "RTCError", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function RTCError() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "RTCError", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "RTCEncodedVideoFrame", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function RTCEncodedVideoFrame() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "RTCEncodedVideoFrame", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "RTCEncodedAudioFrame", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function RTCEncodedAudioFrame() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "RTCEncodedAudioFrame", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "RTCDtlsTransport", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function RTCDtlsTransport() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "RTCDtlsTransport", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "RTCDataChannelEvent", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function RTCDataChannelEvent() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "RTCDataChannelEvent", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "RTCDataChannel", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function RTCDataChannel() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "RTCDataChannel", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "RTCDTMFToneChangeEvent", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function RTCDTMFToneChangeEvent() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "RTCDTMFToneChangeEvent", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "RTCDTMFSender", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function RTCDTMFSender() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "RTCDTMFSender", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "RTCCertificate", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function RTCCertificate() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "RTCCertificate", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "PromiseRejectionEvent", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function PromiseRejectionEvent() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "PromiseRejectionEvent", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "ProgressEvent", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function ProgressEvent() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "ProgressEvent", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "ProcessingInstruction", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function ProcessingInstruction() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "ProcessingInstruction", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "PopStateEvent", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function PopStateEvent() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "PopStateEvent", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "PointerEvent", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function PointerEvent() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "PointerEvent", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "PluginArray", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function PluginArray() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "PluginArray", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "Plugin", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function Plugin() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "Plugin", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "PeriodicWave", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function PeriodicWave() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "PeriodicWave", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "PerformanceTiming", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function PerformanceTiming() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "PerformanceTiming", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "PerformanceServerTiming", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function PerformanceServerTiming() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "PerformanceServerTiming", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "PerformanceResourceTiming", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function PerformanceResourceTiming() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "PerformanceResourceTiming", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "PerformancePaintTiming", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function PerformancePaintTiming() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "PerformancePaintTiming", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "PerformanceObserverEntryList", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function PerformanceObserverEntryList() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "PerformanceObserverEntryList", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "PerformanceObserver", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function PerformanceObserver() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "PerformanceObserver", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "PerformanceNavigationTiming", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function PerformanceNavigationTiming() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "PerformanceNavigationTiming", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "PerformanceNavigation", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function PerformanceNavigation() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "PerformanceNavigation", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "PerformanceMeasure", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function PerformanceMeasure() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "PerformanceMeasure", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "PerformanceMark", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function PerformanceMark() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "PerformanceMark", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "PerformanceLongTaskTiming", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function PerformanceLongTaskTiming() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "PerformanceLongTaskTiming", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "PerformanceEventTiming", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function PerformanceEventTiming() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "PerformanceEventTiming", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "PerformanceEntry", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function PerformanceEntry() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "PerformanceEntry", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "PerformanceElementTiming", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function PerformanceElementTiming() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "PerformanceElementTiming", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "Path2D", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function Path2D() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "Path2D", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "PannerNode", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function PannerNode() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "PannerNode", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "PageTransitionEvent", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function PageTransitionEvent() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "PageTransitionEvent", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "OverconstrainedError", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function OverconstrainedError() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "OverconstrainedError", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "OscillatorNode", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function OscillatorNode() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "OscillatorNode", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "OffscreenCanvasRenderingContext2D", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function OffscreenCanvasRenderingContext2D() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "OffscreenCanvasRenderingContext2D", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "OffscreenCanvas", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function OffscreenCanvas() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "OffscreenCanvas", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "OfflineAudioContext", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function OfflineAudioContext() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "OfflineAudioContext", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "OfflineAudioCompletionEvent", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function OfflineAudioCompletionEvent() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "OfflineAudioCompletionEvent", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "NodeList", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function NodeList() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "NodeList", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "NodeIterator", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function NodeIterator() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "NodeIterator", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "NodeFilter", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function NodeFilter() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "NodeFilter", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "Node", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function Node() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "Node", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "NetworkInformation", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function NetworkInformation() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "NetworkInformation", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "NamedNodeMap", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function NamedNodeMap() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "NamedNodeMap", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "MutationRecord", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function MutationRecord() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "MutationRecord", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "MutationObserver", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function MutationObserver() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "MutationObserver", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "MutationEvent", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function MutationEvent() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "MutationEvent", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "MouseEvent", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function MouseEvent() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "MouseEvent", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "MimeTypeArray", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function MimeTypeArray() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "MimeTypeArray", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "MimeType", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function MimeType() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "MimeType", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "MessagePort", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function MessagePort() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "MessagePort", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "MessageEvent", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function MessageEvent() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "MessageEvent", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "MessageChannel", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function MessageChannel() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "MessageChannel", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "MediaStreamTrackEvent", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function MediaStreamTrackEvent() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "MediaStreamTrackEvent", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "MediaStreamEvent", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function MediaStreamEvent() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "MediaStreamEvent", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "MediaStreamAudioSourceNode", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function MediaStreamAudioSourceNode() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "MediaStreamAudioSourceNode", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "MediaStreamAudioDestinationNode", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function MediaStreamAudioDestinationNode() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "MediaStreamAudioDestinationNode", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "MediaStream", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function MediaStream() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "MediaStream", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "MediaRecorder", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function MediaRecorder() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "MediaRecorder", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "MediaQueryListEvent", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function MediaQueryListEvent() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "MediaQueryListEvent", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "MediaQueryList", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function MediaQueryList() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "MediaQueryList", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "MediaList", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function MediaList() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "MediaList", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "MediaError", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function MediaError() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "MediaError", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "MediaEncryptedEvent", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function MediaEncryptedEvent() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "MediaEncryptedEvent", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "MediaElementAudioSourceNode", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function MediaElementAudioSourceNode() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "MediaElementAudioSourceNode", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "MediaCapabilities", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function MediaCapabilities() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "MediaCapabilities", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "LayoutShiftAttribution", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function LayoutShiftAttribution() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "LayoutShiftAttribution", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "LayoutShift", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function LayoutShift() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "LayoutShift", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "LargestContentfulPaint", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function LargestContentfulPaint() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "LargestContentfulPaint", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "KeyframeEffect", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function KeyframeEffect() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "KeyframeEffect", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "KeyboardEvent", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function KeyboardEvent() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "KeyboardEvent", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "IntersectionObserverEntry", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function IntersectionObserverEntry() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "IntersectionObserverEntry", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "IntersectionObserver", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function IntersectionObserver() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "IntersectionObserver", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "InputEvent", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function InputEvent() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "InputEvent", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "InputDeviceInfo", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function InputDeviceInfo() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "InputDeviceInfo", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "InputDeviceCapabilities", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function InputDeviceCapabilities() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "InputDeviceCapabilities", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "ImageData", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function ImageData() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "ImageData", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "ImageCapture", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function ImageCapture() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "ImageCapture", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "ImageBitmapRenderingContext", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function ImageBitmapRenderingContext() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "ImageBitmapRenderingContext", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "ImageBitmap", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function ImageBitmap() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "ImageBitmap", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "IdleDeadline", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function IdleDeadline() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "IdleDeadline", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "IIRFilterNode", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function IIRFilterNode() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "IIRFilterNode", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "IDBVersionChangeEvent", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function IDBVersionChangeEvent() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "IDBVersionChangeEvent", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "IDBTransaction", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function IDBTransaction() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "IDBTransaction", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "IDBRequest", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function IDBRequest() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "IDBRequest", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "IDBOpenDBRequest", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function IDBOpenDBRequest() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "IDBOpenDBRequest", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "IDBObjectStore", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function IDBObjectStore() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "IDBObjectStore", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "IDBKeyRange", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function IDBKeyRange() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "IDBKeyRange", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "IDBIndex", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function IDBIndex() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "IDBIndex", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "IDBCursorWithValue", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function IDBCursorWithValue() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "IDBCursorWithValue", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "IDBCursor", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function IDBCursor() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "IDBCursor", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "Headers", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function Headers() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "Headers", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "HashChangeEvent", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function HashChangeEvent() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "HashChangeEvent", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "HTMLVideoElement", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function HTMLVideoElement() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "HTMLVideoElement", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "HTMLUnknownElement", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function HTMLUnknownElement() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "HTMLUnknownElement", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "HTMLUListElement", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function HTMLUListElement() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "HTMLUListElement", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "HTMLTrackElement", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function HTMLTrackElement() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "HTMLTrackElement", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "HTMLTitleElement", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function HTMLTitleElement() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "HTMLTitleElement", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "HTMLTimeElement", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function HTMLTimeElement() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "HTMLTimeElement", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "HTMLTextAreaElement", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function HTMLTextAreaElement() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "HTMLTextAreaElement", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "HTMLTemplateElement", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function HTMLTemplateElement() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "HTMLTemplateElement", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "HTMLTableSectionElement", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function HTMLTableSectionElement() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "HTMLTableSectionElement", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "HTMLTableRowElement", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function HTMLTableRowElement() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "HTMLTableRowElement", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "HTMLTableElement", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function HTMLTableElement() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "HTMLTableElement", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "HTMLTableColElement", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function HTMLTableColElement() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "HTMLTableColElement", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "HTMLTableCellElement", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function HTMLTableCellElement() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "HTMLTableCellElement", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "HTMLTableCaptionElement", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function HTMLTableCaptionElement() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "HTMLTableCaptionElement", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "HTMLStyleElement", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function HTMLStyleElement() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "HTMLStyleElement", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "HTMLSpanElement", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function HTMLSpanElement() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "HTMLSpanElement", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "HTMLSourceElement", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function HTMLSourceElement() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "HTMLSourceElement", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "HTMLSlotElement", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function HTMLSlotElement() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "HTMLSlotElement", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "HTMLSelectElement", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function HTMLSelectElement() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "HTMLSelectElement", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "HTMLScriptElement", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function HTMLScriptElement() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "HTMLScriptElement", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "HTMLQuoteElement", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function HTMLQuoteElement() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "HTMLQuoteElement", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "HTMLProgressElement", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function HTMLProgressElement() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "HTMLProgressElement", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "HTMLPreElement", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function HTMLPreElement() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "HTMLPreElement", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "HTMLPictureElement", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function HTMLPictureElement() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "HTMLPictureElement", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "HTMLParamElement", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function HTMLParamElement() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "HTMLParamElement", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "HTMLParagraphElement", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function HTMLParagraphElement() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "HTMLParagraphElement", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "HTMLOutputElement", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function HTMLOutputElement() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "HTMLOutputElement", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "HTMLOptionsCollection", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function HTMLOptionsCollection() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "HTMLOptionsCollection", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "HTMLOptionElement", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function HTMLOptionElement() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "HTMLOptionElement", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "HTMLOptGroupElement", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function HTMLOptGroupElement() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "HTMLOptGroupElement", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "HTMLObjectElement", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function HTMLObjectElement() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "HTMLObjectElement", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "HTMLOListElement", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function HTMLOListElement() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "HTMLOListElement", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "HTMLModElement", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function HTMLModElement() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "HTMLModElement", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "HTMLMeterElement", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function HTMLMeterElement() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "HTMLMeterElement", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "HTMLMetaElement", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function HTMLMetaElement() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "HTMLMetaElement", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "HTMLMenuElement", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function HTMLMenuElement() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "HTMLMenuElement", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "HTMLMediaElement", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function HTMLMediaElement() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "HTMLMediaElement", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "HTMLMarqueeElement", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function HTMLMarqueeElement() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "HTMLMarqueeElement", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "HTMLMapElement", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function HTMLMapElement() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "HTMLMapElement", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "HTMLLinkElement", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function HTMLLinkElement() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "HTMLLinkElement", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "HTMLLegendElement", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function HTMLLegendElement() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "HTMLLegendElement", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "HTMLLabelElement", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function HTMLLabelElement() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "HTMLLabelElement", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "HTMLLIElement", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function HTMLLIElement() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "HTMLLIElement", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "HTMLInputElement", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function HTMLInputElement() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "HTMLInputElement", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "HTMLImageElement", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function HTMLImageElement() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "HTMLImageElement", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "HTMLIFrameElement", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function HTMLIFrameElement() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "HTMLIFrameElement", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "HTMLHtmlElement", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function HTMLHtmlElement() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "HTMLHtmlElement", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "HTMLHeadingElement", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function HTMLHeadingElement() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "HTMLHeadingElement", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "HTMLHeadElement", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function HTMLHeadElement() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "HTMLHeadElement", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "HTMLHRElement", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function HTMLHRElement() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "HTMLHRElement", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "HTMLFrameSetElement", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function HTMLFrameSetElement() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "HTMLFrameSetElement", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "HTMLFrameElement", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function HTMLFrameElement() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "HTMLFrameElement", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "HTMLFormElement", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function HTMLFormElement() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "HTMLFormElement", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "HTMLFormControlsCollection", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function HTMLFormControlsCollection() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "HTMLFormControlsCollection", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "HTMLFontElement", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function HTMLFontElement() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "HTMLFontElement", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "HTMLFieldSetElement", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function HTMLFieldSetElement() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "HTMLFieldSetElement", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "HTMLEmbedElement", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function HTMLEmbedElement() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "HTMLEmbedElement", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "HTMLElement", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function HTMLElement() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "HTMLElement", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "HTMLDocument", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function HTMLDocument() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "HTMLDocument", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "HTMLDivElement", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function HTMLDivElement() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "HTMLDivElement", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "HTMLDirectoryElement", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function HTMLDirectoryElement() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "HTMLDirectoryElement", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "HTMLDialogElement", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function HTMLDialogElement() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "HTMLDialogElement", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "HTMLDetailsElement", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function HTMLDetailsElement() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "HTMLDetailsElement", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "HTMLDataListElement", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function HTMLDataListElement() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "HTMLDataListElement", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "HTMLDataElement", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function HTMLDataElement() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "HTMLDataElement", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "HTMLDListElement", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function HTMLDListElement() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "HTMLDListElement", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "HTMLCollection", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function HTMLCollection() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "HTMLCollection", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "HTMLCanvasElement", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function HTMLCanvasElement() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "HTMLCanvasElement", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "HTMLButtonElement", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function HTMLButtonElement() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "HTMLButtonElement", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "HTMLBodyElement", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function HTMLBodyElement() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "HTMLBodyElement", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "HTMLBaseElement", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function HTMLBaseElement() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "HTMLBaseElement", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "HTMLBRElement", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function HTMLBRElement() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "HTMLBRElement", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "HTMLAudioElement", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function HTMLAudioElement() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "HTMLAudioElement", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "HTMLAreaElement", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function HTMLAreaElement() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "HTMLAreaElement", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "HTMLAnchorElement", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function HTMLAnchorElement() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "HTMLAnchorElement", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "HTMLAllCollection", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function HTMLAllCollection() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "HTMLAllCollection", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "GeolocationPositionError", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function GeolocationPositionError() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "GeolocationPositionError", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "GeolocationPosition", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function GeolocationPosition() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "GeolocationPosition", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "GeolocationCoordinates", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function GeolocationCoordinates() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "GeolocationCoordinates", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "Geolocation", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function Geolocation() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "Geolocation", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "GamepadHapticActuator", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function GamepadHapticActuator() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "GamepadHapticActuator", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "GamepadEvent", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function GamepadEvent() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "GamepadEvent", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "GamepadButton", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function GamepadButton() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "GamepadButton", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "Gamepad", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function Gamepad() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "Gamepad", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "GainNode", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function GainNode() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "GainNode", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "FormDataEvent", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function FormDataEvent() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "FormDataEvent", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "FormData", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function FormData() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "FormData", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "FontFaceSetLoadEvent", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function FontFaceSetLoadEvent() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "FontFaceSetLoadEvent", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "FontFace", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function FontFace() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "FontFace", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "FocusEvent", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function FocusEvent() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "FocusEvent", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "FileReader", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function FileReader() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "FileReader", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "FileList", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function FileList() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "FileList", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "File", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function File() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "File", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "FeaturePolicy", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function FeaturePolicy() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "FeaturePolicy", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "EventTarget", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function EventTarget() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "EventTarget", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "EventSource", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function EventSource() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "EventSource", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "EventCounts", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function EventCounts() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "EventCounts", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "Event", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function Event() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "Event", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "ErrorEvent", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function ErrorEvent() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "ErrorEvent", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "ElementInternals", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function ElementInternals() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "ElementInternals", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "Element", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function Element() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "Element", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "DynamicsCompressorNode", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function DynamicsCompressorNode() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "DynamicsCompressorNode", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "DragEvent", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function DragEvent() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "DragEvent", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "DocumentType", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function DocumentType() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "DocumentType", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "DocumentFragment", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function DocumentFragment() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "DocumentFragment", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "DelayNode", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function DelayNode() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "DelayNode", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "DecompressionStream", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function DecompressionStream() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "DecompressionStream", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "DataTransferItemList", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function DataTransferItemList() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "DataTransferItemList", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "DataTransferItem", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function DataTransferItem() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "DataTransferItem", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "DataTransfer", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function DataTransfer() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "DataTransfer", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "DOMTokenList", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function DOMTokenList() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "DOMTokenList", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "DOMStringMap", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function DOMStringMap() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "DOMStringMap", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "DOMStringList", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function DOMStringList() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "DOMStringList", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "DOMRectReadOnly", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function DOMRectReadOnly() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "DOMRectReadOnly", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "DOMRectList", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function DOMRectList() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "DOMRectList", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "DOMRect", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function DOMRect() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "DOMRect", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "DOMQuad", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function DOMQuad() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "DOMQuad", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "DOMPointReadOnly", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function DOMPointReadOnly() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "DOMPointReadOnly", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "DOMPoint", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function DOMPoint() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "DOMPoint", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "DOMParser", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function DOMParser() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "DOMParser", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "DOMMatrixReadOnly", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function DOMMatrixReadOnly() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "DOMMatrixReadOnly", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "DOMMatrix", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function DOMMatrix() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "DOMMatrix", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "DOMImplementation", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function DOMImplementation() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "DOMImplementation", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "DOMException", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function DOMException() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "DOMException", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "DOMError", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function DOMError() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "DOMError", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "CustomEvent", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function CustomEvent() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "CustomEvent", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "Crypto", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function Crypto() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "Crypto", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "CountQueuingStrategy", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function CountQueuingStrategy() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "CountQueuingStrategy", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "ConvolverNode", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function ConvolverNode() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "ConvolverNode", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "ConstantSourceNode", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function ConstantSourceNode() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "ConstantSourceNode", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "CompressionStream", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function CompressionStream() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "CompressionStream", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "CompositionEvent", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function CompositionEvent() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "CompositionEvent", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "Comment", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function Comment() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "Comment", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "CloseEvent", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function CloseEvent() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "CloseEvent", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "ClipboardEvent", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function ClipboardEvent() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "ClipboardEvent", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "CharacterData", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function CharacterData() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "CharacterData", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "ChannelSplitterNode", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function ChannelSplitterNode() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "ChannelSplitterNode", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "ChannelMergerNode", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function ChannelMergerNode() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "ChannelMergerNode", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "CanvasRenderingContext2D", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function CanvasRenderingContext2D() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "CanvasRenderingContext2D", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "CanvasPattern", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function CanvasPattern() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "CanvasPattern", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "CanvasGradient", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function CanvasGradient() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "CanvasGradient", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "CanvasFilter", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function CanvasFilter() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "CanvasFilter", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "CanvasCaptureMediaStreamTrack", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function CanvasCaptureMediaStreamTrack() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "CanvasCaptureMediaStreamTrack", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "CSSVariableReferenceValue", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function CSSVariableReferenceValue() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "CSSVariableReferenceValue", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "CSSUnparsedValue", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function CSSUnparsedValue() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "CSSUnparsedValue", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "CSSUnitValue", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function CSSUnitValue() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "CSSUnitValue", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "CSSTranslate", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function CSSTranslate() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "CSSTranslate", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "CSSTransformValue", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function CSSTransformValue() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "CSSTransformValue", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "CSSTransformComponent", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function CSSTransformComponent() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "CSSTransformComponent", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "CSSSupportsRule", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function CSSSupportsRule() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "CSSSupportsRule", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "CSSStyleValue", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function CSSStyleValue() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "CSSStyleValue", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "CSSStyleSheet", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function CSSStyleSheet() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "CSSStyleSheet", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "CSSStyleRule", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function CSSStyleRule() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "CSSStyleRule", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "CSSStyleDeclaration", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function CSSStyleDeclaration() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "CSSStyleDeclaration", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "CSSSkewY", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function CSSSkewY() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "CSSSkewY", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "CSSSkewX", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function CSSSkewX() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "CSSSkewX", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "CSSSkew", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function CSSSkew() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "CSSSkew", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "CSSScale", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function CSSScale() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "CSSScale", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "CSSRuleList", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function CSSRuleList() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "CSSRuleList", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "CSSRule", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function CSSRule() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "CSSRule", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "CSSRotate", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function CSSRotate() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "CSSRotate", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "CSSPropertyRule", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function CSSPropertyRule() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "CSSPropertyRule", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "CSSPositionValue", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function CSSPositionValue() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "CSSPositionValue", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "CSSPerspective", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function CSSPerspective() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "CSSPerspective", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "CSSPageRule", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function CSSPageRule() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "CSSPageRule", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "CSSNumericValue", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function CSSNumericValue() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "CSSNumericValue", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "CSSNumericArray", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function CSSNumericArray() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "CSSNumericArray", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "CSSNamespaceRule", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function CSSNamespaceRule() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "CSSNamespaceRule", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "CSSMediaRule", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function CSSMediaRule() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "CSSMediaRule", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "CSSMatrixComponent", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function CSSMatrixComponent() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "CSSMatrixComponent", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "CSSMathValue", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function CSSMathValue() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "CSSMathValue", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "CSSMathSum", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function CSSMathSum() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "CSSMathSum", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "CSSMathProduct", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function CSSMathProduct() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "CSSMathProduct", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "CSSMathNegate", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function CSSMathNegate() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "CSSMathNegate", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "CSSMathMin", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function CSSMathMin() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "CSSMathMin", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "CSSMathMax", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function CSSMathMax() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "CSSMathMax", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "CSSMathInvert", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function CSSMathInvert() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "CSSMathInvert", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "CSSMathClamp", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function CSSMathClamp() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "CSSMathClamp", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "CSSLayerStatementRule", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function CSSLayerStatementRule() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "CSSLayerStatementRule", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "CSSLayerBlockRule", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function CSSLayerBlockRule() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "CSSLayerBlockRule", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "CSSKeywordValue", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function CSSKeywordValue() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "CSSKeywordValue", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "CSSKeyframesRule", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function CSSKeyframesRule() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "CSSKeyframesRule", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "CSSKeyframeRule", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function CSSKeyframeRule() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "CSSKeyframeRule", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "CSSImportRule", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function CSSImportRule() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "CSSImportRule", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "CSSImageValue", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function CSSImageValue() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "CSSImageValue", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "CSSGroupingRule", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function CSSGroupingRule() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "CSSGroupingRule", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "CSSFontFaceRule", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function CSSFontFaceRule() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "CSSFontFaceRule", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "CSSCounterStyleRule", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function CSSCounterStyleRule() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "CSSCounterStyleRule", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "CSSConditionRule", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function CSSConditionRule() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "CSSConditionRule", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "CSS", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: {}
});
bodavm.toolsFunc.windowdefineProperty(window, "CDATASection", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function CDATASection() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "CDATASection", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "ByteLengthQueuingStrategy", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function ByteLengthQueuingStrategy() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "ByteLengthQueuingStrategy", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "BroadcastChannel", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function BroadcastChannel() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "BroadcastChannel", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "BlobEvent", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function BlobEvent() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "BlobEvent", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "Blob", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function Blob() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "Blob", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "BiquadFilterNode", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function BiquadFilterNode() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "BiquadFilterNode", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "BeforeUnloadEvent", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function BeforeUnloadEvent() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "BeforeUnloadEvent", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "BeforeInstallPromptEvent", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function BeforeInstallPromptEvent() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "BeforeInstallPromptEvent", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "BatteryManager", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function BatteryManager() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "BatteryManager", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "BaseAudioContext", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function BaseAudioContext() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "BaseAudioContext", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "AudioWorkletNode", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function AudioWorkletNode() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "AudioWorkletNode", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "AudioScheduledSourceNode", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function AudioScheduledSourceNode() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "AudioScheduledSourceNode", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "AudioProcessingEvent", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function AudioProcessingEvent() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "AudioProcessingEvent", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "AudioParamMap", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function AudioParamMap() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "AudioParamMap", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "AudioParam", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function AudioParam() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "AudioParam", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "AudioNode", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function AudioNode() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "AudioNode", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "AudioListener", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function AudioListener() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "AudioListener", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "AudioDestinationNode", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function AudioDestinationNode() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "AudioDestinationNode", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "AudioContext", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function AudioContext() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "AudioContext", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "AudioBufferSourceNode", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function AudioBufferSourceNode() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "AudioBufferSourceNode", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "AudioBuffer", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function AudioBuffer() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "AudioBuffer", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "Attr", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function Attr() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "Attr", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "AnimationEvent", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function AnimationEvent() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "AnimationEvent", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "AnimationEffect", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function AnimationEffect() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "AnimationEffect", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "Animation", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function Animation() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "Animation", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "AnalyserNode", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function AnalyserNode() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "AnalyserNode", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "AbstractRange", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function AbstractRange() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "AbstractRange", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "AbortSignal", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function AbortSignal() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "AbortSignal", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "AbortController", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function AbortController() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "AbortController", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "self", {
  configurable: true,
  enumerable: true,
  get: function self() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "self_get", arguments);
  },
  set: function self() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "self_set", arguments);
  }
});
bodavm.toolsFunc.windowdefineProperty(window, "name", {
  configurable: true,
  enumerable: true,
  get: function name() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "name_get", arguments, '');
  },
  set: function name() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "name_set", arguments);
  }
});
bodavm.toolsFunc.windowdefineProperty(window, "personalbar", {
  configurable: true,
  enumerable: true,
  get: function personalbar() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "personalbar_get", arguments);
  },
  set: function personalbar() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "personalbar_set", arguments);
  }
});
bodavm.toolsFunc.windowdefineProperty(window, "scrollbars", {
  configurable: true,
  enumerable: true,
  get: function scrollbars() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "scrollbars_get", arguments);
  },
  set: function scrollbars() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "scrollbars_set", arguments);
  }
});
bodavm.toolsFunc.windowdefineProperty(window, "statusbar", {
  configurable: true,
  enumerable: true,
  get: function statusbar() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "statusbar_get", arguments);
  },
  set: function statusbar() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "statusbar_set", arguments);
  }
});
bodavm.toolsFunc.windowdefineProperty(window, "status", {
  configurable: true,
  enumerable: true,
  get: function status() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "status_get", arguments, '');
  },
  set: function status() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "status_set", arguments);
  }
});
bodavm.toolsFunc.windowdefineProperty(window, "closed", {
  configurable: true,
  enumerable: true,
  get: function closed() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "closed_get", arguments, false);
  },
  set: undefined
});
bodavm.toolsFunc.windowdefineProperty(window, "frames", {
  configurable: true,
  enumerable: true,
  get: function frames() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "frames_get", arguments);
  },
  set: function frames() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "frames_set", arguments);
  }
});
bodavm.toolsFunc.windowdefineProperty(window, "length", {
  configurable: true,
  enumerable: true,
  get: function length() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "length_get", arguments, 0);
  },
  set: function length() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "length_set", arguments);
  }
});
bodavm.toolsFunc.windowdefineProperty(window, "top", {
  configurable: false,
  enumerable: true,
  get: function top() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "top_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.windowdefineProperty(window, "opener", {
  configurable: true,
  enumerable: true,
  get: function opener() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "opener_get", arguments, null);
  },
  set: function opener() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "opener_set", arguments);
  }
});
bodavm.toolsFunc.windowdefineProperty(window, "parent", {
  configurable: true,
  enumerable: true,
  get: function parent() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "parent_get", arguments);
  },
  set: function parent() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "parent_set", arguments);
  }
});
bodavm.toolsFunc.windowdefineProperty(window, "frameElement", {
  configurable: true,
  enumerable: true,
  get: function frameElement() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "frameElement_get", arguments, null);
  },
  set: undefined
});
bodavm.toolsFunc.windowdefineProperty(window, "origin", {
  configurable: true,
  enumerable: true,
  get: function origin() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "origin_get", arguments, 'http://127.0.0.1:5000');
  },
  set: function origin() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "origin_set", arguments);
  }
});
bodavm.toolsFunc.windowdefineProperty(window, "innerWidth", {
  configurable: true,
  enumerable: true,
  get: function innerWidth() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "innerWidth_get", arguments, 1440);
  },
  set: function innerWidth() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "innerWidth_set", arguments);
  }
});
bodavm.toolsFunc.windowdefineProperty(window, "innerHeight", {
  configurable: true,
  enumerable: true,
  get: function innerHeight() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "innerHeight_get", arguments, 150);
  },
  set: function innerHeight() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "innerHeight_set", arguments);
  }
});
bodavm.toolsFunc.windowdefineProperty(window, "scrollX", {
  configurable: true,
  enumerable: true,
  get: function scrollX() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "scrollX_get", arguments, 0);
  },
  set: function scrollX() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "scrollX_set", arguments);
  }
});
bodavm.toolsFunc.windowdefineProperty(window, "pageXOffset", {
  configurable: true,
  enumerable: true,
  get: function pageXOffset() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "pageXOffset_get", arguments, 0);
  },
  set: function pageXOffset() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "pageXOffset_set", arguments);
  }
});
bodavm.toolsFunc.windowdefineProperty(window, "scrollY", {
  configurable: true,
  enumerable: true,
  get: function scrollY() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "scrollY_get", arguments, 0);
  },
  set: function scrollY() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "scrollY_set", arguments);
  }
});
bodavm.toolsFunc.windowdefineProperty(window, "pageYOffset", {
  configurable: true,
  enumerable: true,
  get: function pageYOffset() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "pageYOffset_get", arguments, 0);
  },
  set: function pageYOffset() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "pageYOffset_set", arguments);
  }
});
bodavm.toolsFunc.windowdefineProperty(window, "screenX", {
  configurable: true,
  enumerable: true,
  get: function screenX() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "screenX_get", arguments, 0);
  },
  set: function screenX() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "screenX_set", arguments);
  }
});
bodavm.toolsFunc.windowdefineProperty(window, "screenY", {
  configurable: true,
  enumerable: true,
  get: function screenY() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "screenY_get", arguments, 0);
  },
  set: function screenY() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "screenY_set", arguments);
  }
});
bodavm.toolsFunc.windowdefineProperty(window, "outerWidth", {
  configurable: true,
  enumerable: true,
  get: function outerWidth() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "outerWidth_get", arguments, 1440);
  },
  set: function outerWidth() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "outerWidth_set", arguments);
  }
});
bodavm.toolsFunc.windowdefineProperty(window, "outerHeight", {
  configurable: true,
  enumerable: true,
  get: function outerHeight() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "outerHeight_get", arguments, 920);
  },
  set: function outerHeight() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "outerHeight_set", arguments);
  }
});
bodavm.toolsFunc.windowdefineProperty(window, "devicePixelRatio", {
  configurable: true,
  enumerable: true,
  get: function devicePixelRatio() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "devicePixelRatio_get", arguments, 1.5);
  },
  set: function devicePixelRatio() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "devicePixelRatio_set", arguments);
  }
});
bodavm.toolsFunc.windowdefineProperty(window, "event", {
  configurable: true,
  enumerable: false,
  get: function event() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "event_get", arguments);
  },
  set: function event() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "event_set", arguments);
  }
});
bodavm.toolsFunc.windowdefineProperty(window, "clientInformation", {
  configurable: true,
  enumerable: true,
  get: function clientInformation() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "clientInformation_get", arguments);
  },
  set: function clientInformation() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "clientInformation_set", arguments);
  }
});
bodavm.toolsFunc.windowdefineProperty(window, "offscreenBuffering", {
  configurable: true,
  enumerable: false,
  get: function offscreenBuffering() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "offscreenBuffering_get", arguments, true);
  },
  set: function offscreenBuffering() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "offscreenBuffering_set", arguments);
  }
});
bodavm.toolsFunc.windowdefineProperty(window, "screenLeft", {
  configurable: true,
  enumerable: true,
  get: function screenLeft() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "screenLeft_get", arguments, 0);
  },
  set: function screenLeft() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "screenLeft_set", arguments);
  }
});
bodavm.toolsFunc.windowdefineProperty(window, "screenTop", {
  configurable: true,
  enumerable: true,
  get: function screenTop() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "screenTop_get", arguments, 0);
  },
  set: function screenTop() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "screenTop_set", arguments);
  }
});
bodavm.toolsFunc.windowdefineProperty(window, "defaultStatus", {
  configurable: true,
  enumerable: true,
  get: function defaultStatus() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "defaultStatus_get", arguments, '');
  },
  set: function defaultStatus() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "defaultStatus_set", arguments);
  }
});
bodavm.toolsFunc.windowdefineProperty(window, "defaultstatus", {
  configurable: true,
  enumerable: true,
  get: function defaultstatus() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "defaultstatus_get", arguments, '');
  },
  set: function defaultstatus() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "defaultstatus_set", arguments);
  }
});
bodavm.toolsFunc.windowdefineProperty(window, "styleMedia", {
  configurable: true,
  enumerable: true,
  get: function styleMedia() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "styleMedia_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.windowdefineProperty(window, "onsearch", {
  configurable: true,
  enumerable: true,
  get: function onsearch() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "onsearch_get", arguments, null);
  },
  set: function onsearch() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "onsearch_set", arguments);
  }
});
bodavm.toolsFunc.windowdefineProperty(window, "isSecureContext", {
  configurable: true,
  enumerable: true,
  get: function isSecureContext() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "isSecureContext_get", arguments, true);
  },
  set: undefined
});
bodavm.toolsFunc.windowdefineProperty(window, "onappinstalled", {
  configurable: true,
  enumerable: true,
  get: function onappinstalled() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "onappinstalled_get", arguments, null);
  },
  set: function onappinstalled() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "onappinstalled_set", arguments);
  }
});
bodavm.toolsFunc.windowdefineProperty(window, "onbeforeinstallprompt", {
  configurable: true,
  enumerable: true,
  get: function onbeforeinstallprompt() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "onbeforeinstallprompt_get", arguments, null);
  },
  set: function onbeforeinstallprompt() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "onbeforeinstallprompt_set", arguments);
  }
});
bodavm.toolsFunc.windowdefineProperty(window, "crypto", {
  configurable: true,
  enumerable: true,
  get: function crypto() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "crypto_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.windowdefineProperty(window, "onbeforexrselect", {
  configurable: true,
  enumerable: true,
  get: function onbeforexrselect() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "onbeforexrselect_get", arguments, null);
  },
  set: function onbeforexrselect() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "onbeforexrselect_set", arguments);
  }
});
bodavm.toolsFunc.windowdefineProperty(window, "onabort", {
  configurable: true,
  enumerable: true,
  get: function onabort() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "onabort_get", arguments, null);
  },
  set: function onabort() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "onabort_set", arguments);
  }
});
bodavm.toolsFunc.windowdefineProperty(window, "onblur", {
  configurable: true,
  enumerable: true,
  get: function onblur() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "onblur_get", arguments, null);
  },
  set: function onblur() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "onblur_set", arguments);
  }
});
bodavm.toolsFunc.windowdefineProperty(window, "oncancel", {
  configurable: true,
  enumerable: true,
  get: function oncancel() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "oncancel_get", arguments, null);
  },
  set: function oncancel() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "oncancel_set", arguments);
  }
});
bodavm.toolsFunc.windowdefineProperty(window, "oncanplay", {
  configurable: true,
  enumerable: true,
  get: function oncanplay() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "oncanplay_get", arguments, null);
  },
  set: function oncanplay() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "oncanplay_set", arguments);
  }
});
bodavm.toolsFunc.windowdefineProperty(window, "oncanplaythrough", {
  configurable: true,
  enumerable: true,
  get: function oncanplaythrough() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "oncanplaythrough_get", arguments, null);
  },
  set: function oncanplaythrough() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "oncanplaythrough_set", arguments);
  }
});
bodavm.toolsFunc.windowdefineProperty(window, "onchange", {
  configurable: true,
  enumerable: true,
  get: function onchange() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "onchange_get", arguments, null);
  },
  set: function onchange() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "onchange_set", arguments);
  }
});
bodavm.toolsFunc.windowdefineProperty(window, "onclick", {
  configurable: true,
  enumerable: true,
  get: function onclick() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "onclick_get", arguments, null);
  },
  set: function onclick() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "onclick_set", arguments);
  }
});
bodavm.toolsFunc.windowdefineProperty(window, "onclose", {
  configurable: true,
  enumerable: true,
  get: function onclose() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "onclose_get", arguments, null);
  },
  set: function onclose() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "onclose_set", arguments);
  }
});
bodavm.toolsFunc.windowdefineProperty(window, "oncontextlost", {
  configurable: true,
  enumerable: true,
  get: function oncontextlost() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "oncontextlost_get", arguments, null);
  },
  set: function oncontextlost() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "oncontextlost_set", arguments);
  }
});
bodavm.toolsFunc.windowdefineProperty(window, "oncontextmenu", {
  configurable: true,
  enumerable: true,
  get: function oncontextmenu() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "oncontextmenu_get", arguments, null);
  },
  set: function oncontextmenu() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "oncontextmenu_set", arguments);
  }
});
bodavm.toolsFunc.windowdefineProperty(window, "oncontextrestored", {
  configurable: true,
  enumerable: true,
  get: function oncontextrestored() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "oncontextrestored_get", arguments, null);
  },
  set: function oncontextrestored() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "oncontextrestored_set", arguments);
  }
});
bodavm.toolsFunc.windowdefineProperty(window, "oncuechange", {
  configurable: true,
  enumerable: true,
  get: function oncuechange() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "oncuechange_get", arguments, null);
  },
  set: function oncuechange() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "oncuechange_set", arguments);
  }
});
bodavm.toolsFunc.windowdefineProperty(window, "ondblclick", {
  configurable: true,
  enumerable: true,
  get: function ondblclick() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "ondblclick_get", arguments, null);
  },
  set: function ondblclick() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "ondblclick_set", arguments);
  }
});
bodavm.toolsFunc.windowdefineProperty(window, "ondrag", {
  configurable: true,
  enumerable: true,
  get: function ondrag() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "ondrag_get", arguments, null);
  },
  set: function ondrag() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "ondrag_set", arguments);
  }
});
bodavm.toolsFunc.windowdefineProperty(window, "ondragend", {
  configurable: true,
  enumerable: true,
  get: function ondragend() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "ondragend_get", arguments, null);
  },
  set: function ondragend() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "ondragend_set", arguments);
  }
});
bodavm.toolsFunc.windowdefineProperty(window, "ondragenter", {
  configurable: true,
  enumerable: true,
  get: function ondragenter() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "ondragenter_get", arguments, null);
  },
  set: function ondragenter() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "ondragenter_set", arguments);
  }
});
bodavm.toolsFunc.windowdefineProperty(window, "ondragleave", {
  configurable: true,
  enumerable: true,
  get: function ondragleave() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "ondragleave_get", arguments, null);
  },
  set: function ondragleave() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "ondragleave_set", arguments);
  }
});
bodavm.toolsFunc.windowdefineProperty(window, "ondragover", {
  configurable: true,
  enumerable: true,
  get: function ondragover() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "ondragover_get", arguments, null);
  },
  set: function ondragover() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "ondragover_set", arguments);
  }
});
bodavm.toolsFunc.windowdefineProperty(window, "ondragstart", {
  configurable: true,
  enumerable: true,
  get: function ondragstart() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "ondragstart_get", arguments, null);
  },
  set: function ondragstart() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "ondragstart_set", arguments);
  }
});
bodavm.toolsFunc.windowdefineProperty(window, "ondrop", {
  configurable: true,
  enumerable: true,
  get: function ondrop() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "ondrop_get", arguments, null);
  },
  set: function ondrop() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "ondrop_set", arguments);
  }
});
bodavm.toolsFunc.windowdefineProperty(window, "ondurationchange", {
  configurable: true,
  enumerable: true,
  get: function ondurationchange() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "ondurationchange_get", arguments, null);
  },
  set: function ondurationchange() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "ondurationchange_set", arguments);
  }
});
bodavm.toolsFunc.windowdefineProperty(window, "onemptied", {
  configurable: true,
  enumerable: true,
  get: function onemptied() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "onemptied_get", arguments, null);
  },
  set: function onemptied() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "onemptied_set", arguments);
  }
});
bodavm.toolsFunc.windowdefineProperty(window, "onended", {
  configurable: true,
  enumerable: true,
  get: function onended() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "onended_get", arguments, null);
  },
  set: function onended() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "onended_set", arguments);
  }
});
bodavm.toolsFunc.windowdefineProperty(window, "onerror", {
  configurable: true,
  enumerable: true,
  get: function onerror() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "onerror_get", arguments, null);
  },
  set: function onerror() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "onerror_set", arguments);
  }
});
bodavm.toolsFunc.windowdefineProperty(window, "onfocus", {
  configurable: true,
  enumerable: true,
  get: function onfocus() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "onfocus_get", arguments, null);
  },
  set: function onfocus() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "onfocus_set", arguments);
  }
});
bodavm.toolsFunc.windowdefineProperty(window, "onformdata", {
  configurable: true,
  enumerable: true,
  get: function onformdata() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "onformdata_get", arguments, null);
  },
  set: function onformdata() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "onformdata_set", arguments);
  }
});
bodavm.toolsFunc.windowdefineProperty(window, "oninput", {
  configurable: true,
  enumerable: true,
  get: function oninput() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "oninput_get", arguments, null);
  },
  set: function oninput() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "oninput_set", arguments);
  }
});
bodavm.toolsFunc.windowdefineProperty(window, "oninvalid", {
  configurable: true,
  enumerable: true,
  get: function oninvalid() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "oninvalid_get", arguments, null);
  },
  set: function oninvalid() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "oninvalid_set", arguments);
  }
});
bodavm.toolsFunc.windowdefineProperty(window, "onkeydown", {
  configurable: true,
  enumerable: true,
  get: function onkeydown() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "onkeydown_get", arguments, null);
  },
  set: function onkeydown() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "onkeydown_set", arguments);
  }
});
bodavm.toolsFunc.windowdefineProperty(window, "onkeypress", {
  configurable: true,
  enumerable: true,
  get: function onkeypress() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "onkeypress_get", arguments, null);
  },
  set: function onkeypress() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "onkeypress_set", arguments);
  }
});
bodavm.toolsFunc.windowdefineProperty(window, "onkeyup", {
  configurable: true,
  enumerable: true,
  get: function onkeyup() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "onkeyup_get", arguments, null);
  },
  set: function onkeyup() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "onkeyup_set", arguments);
  }
});
bodavm.toolsFunc.windowdefineProperty(window, "onload", {
  configurable: true,
  enumerable: true,
  get: function onload() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "onload_get", arguments, null);
  },
  set: function onload() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "onload_set", arguments);
  }
});
bodavm.toolsFunc.windowdefineProperty(window, "onloadeddata", {
  configurable: true,
  enumerable: true,
  get: function onloadeddata() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "onloadeddata_get", arguments, null);
  },
  set: function onloadeddata() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "onloadeddata_set", arguments);
  }
});
bodavm.toolsFunc.windowdefineProperty(window, "onloadedmetadata", {
  configurable: true,
  enumerable: true,
  get: function onloadedmetadata() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "onloadedmetadata_get", arguments, null);
  },
  set: function onloadedmetadata() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "onloadedmetadata_set", arguments);
  }
});
bodavm.toolsFunc.windowdefineProperty(window, "onloadstart", {
  configurable: true,
  enumerable: true,
  get: function onloadstart() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "onloadstart_get", arguments, null);
  },
  set: function onloadstart() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "onloadstart_set", arguments);
  }
});
bodavm.toolsFunc.windowdefineProperty(window, "onmousedown", {
  configurable: true,
  enumerable: true,
  get: function onmousedown() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "onmousedown_get", arguments, null);
  },
  set: function onmousedown() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "onmousedown_set", arguments);
  }
});
bodavm.toolsFunc.windowdefineProperty(window, "onmouseenter", {
  configurable: true,
  enumerable: true,
  get: function onmouseenter() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "onmouseenter_get", arguments, null);
  },
  set: function onmouseenter() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "onmouseenter_set", arguments);
  }
});
bodavm.toolsFunc.windowdefineProperty(window, "onmouseleave", {
  configurable: true,
  enumerable: true,
  get: function onmouseleave() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "onmouseleave_get", arguments, null);
  },
  set: function onmouseleave() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "onmouseleave_set", arguments);
  }
});
bodavm.toolsFunc.windowdefineProperty(window, "onmousemove", {
  configurable: true,
  enumerable: true,
  get: function onmousemove() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "onmousemove_get", arguments, null);
  },
  set: function onmousemove() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "onmousemove_set", arguments);
  }
});
bodavm.toolsFunc.windowdefineProperty(window, "onmouseout", {
  configurable: true,
  enumerable: true,
  get: function onmouseout() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "onmouseout_get", arguments, null);
  },
  set: function onmouseout() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "onmouseout_set", arguments);
  }
});
bodavm.toolsFunc.windowdefineProperty(window, "onmouseover", {
  configurable: true,
  enumerable: true,
  get: function onmouseover() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "onmouseover_get", arguments, null);
  },
  set: function onmouseover() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "onmouseover_set", arguments);
  }
});
bodavm.toolsFunc.windowdefineProperty(window, "onmouseup", {
  configurable: true,
  enumerable: true,
  get: function onmouseup() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "onmouseup_get", arguments, null);
  },
  set: function onmouseup() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "onmouseup_set", arguments);
  }
});
bodavm.toolsFunc.windowdefineProperty(window, "onmousewheel", {
  configurable: true,
  enumerable: true,
  get: function onmousewheel() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "onmousewheel_get", arguments, null);
  },
  set: function onmousewheel() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "onmousewheel_set", arguments);
  }
});
bodavm.toolsFunc.windowdefineProperty(window, "onpause", {
  configurable: true,
  enumerable: true,
  get: function onpause() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "onpause_get", arguments, null);
  },
  set: function onpause() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "onpause_set", arguments);
  }
});
bodavm.toolsFunc.windowdefineProperty(window, "onplay", {
  configurable: true,
  enumerable: true,
  get: function onplay() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "onplay_get", arguments, null);
  },
  set: function onplay() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "onplay_set", arguments);
  }
});
bodavm.toolsFunc.windowdefineProperty(window, "onplaying", {
  configurable: true,
  enumerable: true,
  get: function onplaying() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "onplaying_get", arguments, null);
  },
  set: function onplaying() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "onplaying_set", arguments);
  }
});
bodavm.toolsFunc.windowdefineProperty(window, "onprogress", {
  configurable: true,
  enumerable: true,
  get: function onprogress() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "onprogress_get", arguments, null);
  },
  set: function onprogress() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "onprogress_set", arguments);
  }
});
bodavm.toolsFunc.windowdefineProperty(window, "onratechange", {
  configurable: true,
  enumerable: true,
  get: function onratechange() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "onratechange_get", arguments, null);
  },
  set: function onratechange() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "onratechange_set", arguments);
  }
});
bodavm.toolsFunc.windowdefineProperty(window, "onreset", {
  configurable: true,
  enumerable: true,
  get: function onreset() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "onreset_get", arguments, null);
  },
  set: function onreset() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "onreset_set", arguments);
  }
});
bodavm.toolsFunc.windowdefineProperty(window, "onresize", {
  configurable: true,
  enumerable: true,
  get: function onresize() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "onresize_get", arguments, null);
  },
  set: function onresize() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "onresize_set", arguments);
  }
});
bodavm.toolsFunc.windowdefineProperty(window, "onscroll", {
  configurable: true,
  enumerable: true,
  get: function onscroll() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "onscroll_get", arguments, null);
  },
  set: function onscroll() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "onscroll_set", arguments);
  }
});
bodavm.toolsFunc.windowdefineProperty(window, "onsecuritypolicyviolation", {
  configurable: true,
  enumerable: true,
  get: function onsecuritypolicyviolation() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "onsecuritypolicyviolation_get", arguments, null);
  },
  set: function onsecuritypolicyviolation() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "onsecuritypolicyviolation_set", arguments);
  }
});
bodavm.toolsFunc.windowdefineProperty(window, "onseeked", {
  configurable: true,
  enumerable: true,
  get: function onseeked() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "onseeked_get", arguments, null);
  },
  set: function onseeked() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "onseeked_set", arguments);
  }
});
bodavm.toolsFunc.windowdefineProperty(window, "onseeking", {
  configurable: true,
  enumerable: true,
  get: function onseeking() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "onseeking_get", arguments, null);
  },
  set: function onseeking() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "onseeking_set", arguments);
  }
});
bodavm.toolsFunc.windowdefineProperty(window, "onselect", {
  configurable: true,
  enumerable: true,
  get: function onselect() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "onselect_get", arguments, null);
  },
  set: function onselect() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "onselect_set", arguments);
  }
});
bodavm.toolsFunc.windowdefineProperty(window, "onslotchange", {
  configurable: true,
  enumerable: true,
  get: function onslotchange() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "onslotchange_get", arguments, null);
  },
  set: function onslotchange() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "onslotchange_set", arguments);
  }
});
bodavm.toolsFunc.windowdefineProperty(window, "onstalled", {
  configurable: true,
  enumerable: true,
  get: function onstalled() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "onstalled_get", arguments, null);
  },
  set: function onstalled() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "onstalled_set", arguments);
  }
});
bodavm.toolsFunc.windowdefineProperty(window, "onsubmit", {
  configurable: true,
  enumerable: true,
  get: function onsubmit() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "onsubmit_get", arguments, null);
  },
  set: function onsubmit() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "onsubmit_set", arguments);
  }
});
bodavm.toolsFunc.windowdefineProperty(window, "onsuspend", {
  configurable: true,
  enumerable: true,
  get: function onsuspend() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "onsuspend_get", arguments, null);
  },
  set: function onsuspend() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "onsuspend_set", arguments);
  }
});
bodavm.toolsFunc.windowdefineProperty(window, "ontimeupdate", {
  configurable: true,
  enumerable: true,
  get: function ontimeupdate() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "ontimeupdate_get", arguments, null);
  },
  set: function ontimeupdate() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "ontimeupdate_set", arguments);
  }
});
bodavm.toolsFunc.windowdefineProperty(window, "ontoggle", {
  configurable: true,
  enumerable: true,
  get: function ontoggle() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "ontoggle_get", arguments, null);
  },
  set: function ontoggle() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "ontoggle_set", arguments);
  }
});
bodavm.toolsFunc.windowdefineProperty(window, "onvolumechange", {
  configurable: true,
  enumerable: true,
  get: function onvolumechange() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "onvolumechange_get", arguments, null);
  },
  set: function onvolumechange() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "onvolumechange_set", arguments);
  }
});
bodavm.toolsFunc.windowdefineProperty(window, "onwaiting", {
  configurable: true,
  enumerable: true,
  get: function onwaiting() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "onwaiting_get", arguments, null);
  },
  set: function onwaiting() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "onwaiting_set", arguments);
  }
});
bodavm.toolsFunc.windowdefineProperty(window, "onwebkitanimationend", {
  configurable: true,
  enumerable: true,
  get: function onwebkitanimationend() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "onwebkitanimationend_get", arguments, null);
  },
  set: function onwebkitanimationend() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "onwebkitanimationend_set", arguments);
  }
});
bodavm.toolsFunc.windowdefineProperty(window, "onwebkitanimationiteration", {
  configurable: true,
  enumerable: true,
  get: function onwebkitanimationiteration() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "onwebkitanimationiteration_get", arguments, null);
  },
  set: function onwebkitanimationiteration() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "onwebkitanimationiteration_set", arguments);
  }
});
bodavm.toolsFunc.windowdefineProperty(window, "onwebkitanimationstart", {
  configurable: true,
  enumerable: true,
  get: function onwebkitanimationstart() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "onwebkitanimationstart_get", arguments, null);
  },
  set: function onwebkitanimationstart() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "onwebkitanimationstart_set", arguments);
  }
});
bodavm.toolsFunc.windowdefineProperty(window, "onwebkittransitionend", {
  configurable: true,
  enumerable: true,
  get: function onwebkittransitionend() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "onwebkittransitionend_get", arguments, null);
  },
  set: function onwebkittransitionend() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "onwebkittransitionend_set", arguments);
  }
});
bodavm.toolsFunc.windowdefineProperty(window, "onwheel", {
  configurable: true,
  enumerable: true,
  get: function onwheel() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "onwheel_get", arguments, null);
  },
  set: function onwheel() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "onwheel_set", arguments);
  }
});
bodavm.toolsFunc.windowdefineProperty(window, "onauxclick", {
  configurable: true,
  enumerable: true,
  get: function onauxclick() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "onauxclick_get", arguments, null);
  },
  set: function onauxclick() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "onauxclick_set", arguments);
  }
});
bodavm.toolsFunc.windowdefineProperty(window, "ongotpointercapture", {
  configurable: true,
  enumerable: true,
  get: function ongotpointercapture() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "ongotpointercapture_get", arguments, null);
  },
  set: function ongotpointercapture() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "ongotpointercapture_set", arguments);
  }
});
bodavm.toolsFunc.windowdefineProperty(window, "onlostpointercapture", {
  configurable: true,
  enumerable: true,
  get: function onlostpointercapture() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "onlostpointercapture_get", arguments, null);
  },
  set: function onlostpointercapture() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "onlostpointercapture_set", arguments);
  }
});
bodavm.toolsFunc.windowdefineProperty(window, "onpointerdown", {
  configurable: true,
  enumerable: true,
  get: function onpointerdown() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "onpointerdown_get", arguments, null);
  },
  set: function onpointerdown() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "onpointerdown_set", arguments);
  }
});
bodavm.toolsFunc.windowdefineProperty(window, "onpointermove", {
  configurable: true,
  enumerable: true,
  get: function onpointermove() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "onpointermove_get", arguments, null);
  },
  set: function onpointermove() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "onpointermove_set", arguments);
  }
});
bodavm.toolsFunc.windowdefineProperty(window, "onpointerup", {
  configurable: true,
  enumerable: true,
  get: function onpointerup() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "onpointerup_get", arguments, null);
  },
  set: function onpointerup() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "onpointerup_set", arguments);
  }
});
bodavm.toolsFunc.windowdefineProperty(window, "onpointercancel", {
  configurable: true,
  enumerable: true,
  get: function onpointercancel() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "onpointercancel_get", arguments, null);
  },
  set: function onpointercancel() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "onpointercancel_set", arguments);
  }
});
bodavm.toolsFunc.windowdefineProperty(window, "onpointerover", {
  configurable: true,
  enumerable: true,
  get: function onpointerover() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "onpointerover_get", arguments, null);
  },
  set: function onpointerover() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "onpointerover_set", arguments);
  }
});
bodavm.toolsFunc.windowdefineProperty(window, "onpointerout", {
  configurable: true,
  enumerable: true,
  get: function onpointerout() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "onpointerout_get", arguments, null);
  },
  set: function onpointerout() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "onpointerout_set", arguments);
  }
});
bodavm.toolsFunc.windowdefineProperty(window, "onpointerenter", {
  configurable: true,
  enumerable: true,
  get: function onpointerenter() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "onpointerenter_get", arguments, null);
  },
  set: function onpointerenter() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "onpointerenter_set", arguments);
  }
});
bodavm.toolsFunc.windowdefineProperty(window, "onpointerleave", {
  configurable: true,
  enumerable: true,
  get: function onpointerleave() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "onpointerleave_get", arguments, null);
  },
  set: function onpointerleave() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "onpointerleave_set", arguments);
  }
});
bodavm.toolsFunc.windowdefineProperty(window, "onselectstart", {
  configurable: true,
  enumerable: true,
  get: function onselectstart() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "onselectstart_get", arguments, null);
  },
  set: function onselectstart() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "onselectstart_set", arguments);
  }
});
bodavm.toolsFunc.windowdefineProperty(window, "onselectionchange", {
  configurable: true,
  enumerable: true,
  get: function onselectionchange() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "onselectionchange_get", arguments, null);
  },
  set: function onselectionchange() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "onselectionchange_set", arguments);
  }
});
bodavm.toolsFunc.windowdefineProperty(window, "onanimationend", {
  configurable: true,
  enumerable: true,
  get: function onanimationend() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "onanimationend_get", arguments, null);
  },
  set: function onanimationend() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "onanimationend_set", arguments);
  }
});
bodavm.toolsFunc.windowdefineProperty(window, "onanimationiteration", {
  configurable: true,
  enumerable: true,
  get: function onanimationiteration() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "onanimationiteration_get", arguments, null);
  },
  set: function onanimationiteration() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "onanimationiteration_set", arguments);
  }
});
bodavm.toolsFunc.windowdefineProperty(window, "onanimationstart", {
  configurable: true,
  enumerable: true,
  get: function onanimationstart() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "onanimationstart_get", arguments, null);
  },
  set: function onanimationstart() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "onanimationstart_set", arguments);
  }
});
bodavm.toolsFunc.windowdefineProperty(window, "ontransitionrun", {
  configurable: true,
  enumerable: true,
  get: function ontransitionrun() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "ontransitionrun_get", arguments, null);
  },
  set: function ontransitionrun() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "ontransitionrun_set", arguments);
  }
});
bodavm.toolsFunc.windowdefineProperty(window, "ontransitionstart", {
  configurable: true,
  enumerable: true,
  get: function ontransitionstart() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "ontransitionstart_get", arguments, null);
  },
  set: function ontransitionstart() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "ontransitionstart_set", arguments);
  }
});
bodavm.toolsFunc.windowdefineProperty(window, "ontransitionend", {
  configurable: true,
  enumerable: true,
  get: function ontransitionend() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "ontransitionend_get", arguments, null);
  },
  set: function ontransitionend() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "ontransitionend_set", arguments);
  }
});
bodavm.toolsFunc.windowdefineProperty(window, "ontransitioncancel", {
  configurable: true,
  enumerable: true,
  get: function ontransitioncancel() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "ontransitioncancel_get", arguments, null);
  },
  set: function ontransitioncancel() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "ontransitioncancel_set", arguments);
  }
});
bodavm.toolsFunc.windowdefineProperty(window, "onafterprint", {
  configurable: true,
  enumerable: true,
  get: function onafterprint() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "onafterprint_get", arguments, null);
  },
  set: function onafterprint() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "onafterprint_set", arguments);
  }
});
bodavm.toolsFunc.windowdefineProperty(window, "onbeforeprint", {
  configurable: true,
  enumerable: true,
  get: function onbeforeprint() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "onbeforeprint_get", arguments, null);
  },
  set: function onbeforeprint() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "onbeforeprint_set", arguments);
  }
});
bodavm.toolsFunc.windowdefineProperty(window, "onbeforeunload", {
  configurable: true,
  enumerable: true,
  get: function onbeforeunload() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "onbeforeunload_get", arguments, null);
  },
  set: function onbeforeunload() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "onbeforeunload_set", arguments);
  }
});
bodavm.toolsFunc.windowdefineProperty(window, "onhashchange", {
  configurable: true,
  enumerable: true,
  get: function onhashchange() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "onhashchange_get", arguments, null);
  },
  set: function onhashchange() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "onhashchange_set", arguments);
  }
});
bodavm.toolsFunc.windowdefineProperty(window, "onlanguagechange", {
  configurable: true,
  enumerable: true,
  get: function onlanguagechange() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "onlanguagechange_get", arguments, null);
  },
  set: function onlanguagechange() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "onlanguagechange_set", arguments);
  }
});
bodavm.toolsFunc.windowdefineProperty(window, "onmessage", {
  configurable: true,
  enumerable: true,
  get: function onmessage() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "onmessage_get", arguments, null);
  },
  set: function onmessage() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "onmessage_set", arguments);
  }
});
bodavm.toolsFunc.windowdefineProperty(window, "onmessageerror", {
  configurable: true,
  enumerable: true,
  get: function onmessageerror() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "onmessageerror_get", arguments, null);
  },
  set: function onmessageerror() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "onmessageerror_set", arguments);
  }
});
bodavm.toolsFunc.windowdefineProperty(window, "onoffline", {
  configurable: true,
  enumerable: true,
  get: function onoffline() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "onoffline_get", arguments, null);
  },
  set: function onoffline() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "onoffline_set", arguments);
  }
});
bodavm.toolsFunc.windowdefineProperty(window, "ononline", {
  configurable: true,
  enumerable: true,
  get: function ononline() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "ononline_get", arguments, null);
  },
  set: function ononline() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "ononline_set", arguments);
  }
});
bodavm.toolsFunc.windowdefineProperty(window, "onpagehide", {
  configurable: true,
  enumerable: true,
  get: function onpagehide() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "onpagehide_get", arguments, null);
  },
  set: function onpagehide() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "onpagehide_set", arguments);
  }
});
bodavm.toolsFunc.windowdefineProperty(window, "onpageshow", {
  configurable: true,
  enumerable: true,
  get: function onpageshow() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "onpageshow_get", arguments, null);
  },
  set: function onpageshow() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "onpageshow_set", arguments);
  }
});
bodavm.toolsFunc.windowdefineProperty(window, "onpopstate", {
  configurable: true,
  enumerable: true,
  get: function onpopstate() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "onpopstate_get", arguments, null);
  },
  set: function onpopstate() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "onpopstate_set", arguments);
  }
});
bodavm.toolsFunc.windowdefineProperty(window, "onrejectionhandled", {
  configurable: true,
  enumerable: true,
  get: function onrejectionhandled() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "onrejectionhandled_get", arguments, null);
  },
  set: function onrejectionhandled() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "onrejectionhandled_set", arguments);
  }
});
bodavm.toolsFunc.windowdefineProperty(window, "onstorage", {
  configurable: true,
  enumerable: true,
  get: function onstorage() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "onstorage_get", arguments, null);
  },
  set: function onstorage() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "onstorage_set", arguments);
  }
});
bodavm.toolsFunc.windowdefineProperty(window, "onunhandledrejection", {
  configurable: true,
  enumerable: true,
  get: function onunhandledrejection() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "onunhandledrejection_get", arguments, null);
  },
  set: function onunhandledrejection() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "onunhandledrejection_set", arguments);
  }
});
bodavm.toolsFunc.windowdefineProperty(window, "onunload", {
  configurable: true,
  enumerable: true,
  get: function onunload() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "onunload_get", arguments, null);
  },
  set: function onunload() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "onunload_set", arguments);
  }
});
// bodavm.toolsFunc.windowdefineProperty(window, "alert", {configurable:true, enumerable:true, writable:true, value:function alert (){return bodavm.toolsFunc.dispatch(this, window, "window", "alert", arguments)}});
// bodavm.toolsFunc.windowdefineProperty(window, "atob", {configurable:true, enumerable:true, writable:true, value:function atob (){return bodavm.toolsFunc.dispatch(this, window, "window", "atob", arguments)}});
// bodavm.toolsFunc.windowdefineProperty(window, "blur", {configurable:true, enumerable:true, writable:true, value:function blur (){return bodavm.toolsFunc.dispatch(this, window, "window", "blur", arguments)}});
// bodavm.toolsFunc.windowdefineProperty(window, "btoa", {configurable:true, enumerable:true, writable:true, value:function btoa (){return bodavm.toolsFunc.dispatch(this, window, "window", "btoa", arguments)}});
bodavm.toolsFunc.windowdefineProperty(window, "cancelAnimationFrame", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function cancelAnimationFrame() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "cancelAnimationFrame", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "cancelIdleCallback", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function cancelIdleCallback() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "cancelIdleCallback", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "captureEvents", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function captureEvents() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "captureEvents", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "clearInterval", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function clearInterval() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "clearInterval", arguments);
  }
});
bodavm.toolsFunc.windowdefineProperty(window, "clearTimeout", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function clearTimeout() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "clearTimeout", arguments);
  }
});
bodavm.toolsFunc.windowdefineProperty(window, "close", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function close() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "close", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "confirm", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function confirm() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "confirm", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "createImageBitmap", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function createImageBitmap() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "createImageBitmap", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "fetch", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function fetch() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "fetch", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "find", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function find() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "find", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "focus", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function focus() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "focus", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "getComputedStyle", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getComputedStyle() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "getComputedStyle", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "getSelection", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getSelection() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "getSelection", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "matchMedia", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function matchMedia() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "matchMedia", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "moveBy", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function moveBy() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "moveBy", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "moveTo", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function moveTo() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "moveTo", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "open", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function open() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "open", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "postMessage", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function postMessage() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "postMessage", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "print", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function print() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "print", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "prompt", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function prompt() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "prompt", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "queueMicrotask", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function queueMicrotask() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "queueMicrotask", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "releaseEvents", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function releaseEvents() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "releaseEvents", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "reportError", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function reportError() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "reportError", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "requestAnimationFrame", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function requestAnimationFrame() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "requestAnimationFrame", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "requestIdleCallback", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function requestIdleCallback() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "requestIdleCallback", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "resizeBy", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function resizeBy() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "resizeBy", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "resizeTo", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function resizeTo() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "resizeTo", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "scroll", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function scroll() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "scroll", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "scrollBy", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function scrollBy() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "scrollBy", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "scrollTo", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function scrollTo() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "scrollTo", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "setInterval", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function setInterval() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "setInterval", arguments);
  }
});
bodavm.toolsFunc.windowdefineProperty(window, "setTimeout", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function setTimeout() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "setTimeout", arguments);
  }
});
bodavm.toolsFunc.windowdefineProperty(window, "stop", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function stop() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "stop", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "structuredClone", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function structuredClone() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "structuredClone", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "webkitCancelAnimationFrame", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function webkitCancelAnimationFrame() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "webkitCancelAnimationFrame", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "webkitRequestAnimationFrame", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function webkitRequestAnimationFrame() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "webkitRequestAnimationFrame", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "ondevicemotion", {
  configurable: true,
  enumerable: true,
  get: function ondevicemotion() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "ondevicemotion_get", arguments, null);
  },
  set: function ondevicemotion() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "ondevicemotion_set", arguments);
  }
});
bodavm.toolsFunc.windowdefineProperty(window, "ondeviceorientation", {
  configurable: true,
  enumerable: true,
  get: function ondeviceorientation() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "ondeviceorientation_get", arguments, null);
  },
  set: function ondeviceorientation() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "ondeviceorientation_set", arguments);
  }
});
bodavm.toolsFunc.windowdefineProperty(window, "ondeviceorientationabsolute", {
  configurable: true,
  enumerable: true,
  get: function ondeviceorientationabsolute() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "ondeviceorientationabsolute_get", arguments, null);
  },
  set: function ondeviceorientationabsolute() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "ondeviceorientationabsolute_set", arguments);
  }
});
bodavm.toolsFunc.windowdefineProperty(window, "onbeforematch", {
  configurable: true,
  enumerable: true,
  get: function onbeforematch() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "onbeforematch_get", arguments, null);
  },
  set: function onbeforematch() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "onbeforematch_set", arguments);
  }
});
bodavm.toolsFunc.windowdefineProperty(window, "AbsoluteOrientationSensor", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function AbsoluteOrientationSensor() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "AbsoluteOrientationSensor", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "Accelerometer", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function Accelerometer() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "Accelerometer", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "AudioWorklet", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function AudioWorklet() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "AudioWorklet", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "Cache", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function Cache() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "Cache", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "Clipboard", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function Clipboard() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "Clipboard", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "ClipboardItem", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function ClipboardItem() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "ClipboardItem", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "CookieChangeEvent", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function CookieChangeEvent() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "CookieChangeEvent", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "CookieStoreManager", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function CookieStoreManager() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "CookieStoreManager", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "Credential", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function Credential() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "Credential", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "CredentialsContainer", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function CredentialsContainer() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "CredentialsContainer", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "CryptoKey", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function CryptoKey() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "CryptoKey", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "DeviceMotionEvent", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function DeviceMotionEvent() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "DeviceMotionEvent", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "DeviceMotionEventAcceleration", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function DeviceMotionEventAcceleration() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "DeviceMotionEventAcceleration", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "DeviceMotionEventRotationRate", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function DeviceMotionEventRotationRate() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "DeviceMotionEventRotationRate", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "DeviceOrientationEvent", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function DeviceOrientationEvent() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "DeviceOrientationEvent", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "FederatedCredential", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function FederatedCredential() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "FederatedCredential", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "Gyroscope", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function Gyroscope() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "Gyroscope", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "Keyboard", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function Keyboard() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "Keyboard", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "KeyboardLayoutMap", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function KeyboardLayoutMap() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "KeyboardLayoutMap", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "LinearAccelerationSensor", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function LinearAccelerationSensor() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "LinearAccelerationSensor", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "Lock", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function Lock() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "Lock", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "LockManager", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function LockManager() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "LockManager", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "MIDIAccess", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function MIDIAccess() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "MIDIAccess", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "MIDIConnectionEvent", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function MIDIConnectionEvent() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "MIDIConnectionEvent", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "MIDIInput", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function MIDIInput() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "MIDIInput", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "MIDIInputMap", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function MIDIInputMap() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "MIDIInputMap", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "MIDIMessageEvent", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function MIDIMessageEvent() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "MIDIMessageEvent", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "MIDIOutput", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function MIDIOutput() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "MIDIOutput", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "MIDIOutputMap", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function MIDIOutputMap() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "MIDIOutputMap", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "MIDIPort", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function MIDIPort() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "MIDIPort", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "MediaDeviceInfo", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function MediaDeviceInfo() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "MediaDeviceInfo", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "MediaDevices", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function MediaDevices() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "MediaDevices", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "MediaKeyMessageEvent", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function MediaKeyMessageEvent() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "MediaKeyMessageEvent", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "MediaKeySession", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function MediaKeySession() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "MediaKeySession", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "MediaKeyStatusMap", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function MediaKeyStatusMap() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "MediaKeyStatusMap", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "MediaKeySystemAccess", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function MediaKeySystemAccess() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "MediaKeySystemAccess", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "MediaKeys", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function MediaKeys() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "MediaKeys", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "NavigationPreloadManager", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function NavigationPreloadManager() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "NavigationPreloadManager", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "NavigatorManagedData", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function NavigatorManagedData() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "NavigatorManagedData", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "OrientationSensor", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function OrientationSensor() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "OrientationSensor", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "PasswordCredential", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function PasswordCredential() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "PasswordCredential", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "RTCIceTransport", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function RTCIceTransport() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "RTCIceTransport", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "RelativeOrientationSensor", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function RelativeOrientationSensor() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "RelativeOrientationSensor", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "Sensor", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function Sensor() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "Sensor", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "SensorErrorEvent", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function SensorErrorEvent() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "SensorErrorEvent", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "ServiceWorker", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function ServiceWorker() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "ServiceWorker", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "ServiceWorkerContainer", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function ServiceWorkerContainer() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "ServiceWorkerContainer", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "ServiceWorkerRegistration", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function ServiceWorkerRegistration() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "ServiceWorkerRegistration", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "StorageManager", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function StorageManager() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "StorageManager", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "SubtleCrypto", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function SubtleCrypto() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "SubtleCrypto", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "Worklet", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function Worklet() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "Worklet", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "XRDOMOverlayState", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function XRDOMOverlayState() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "XRDOMOverlayState", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "XRLayer", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function XRLayer() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "XRLayer", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "XRWebGLBinding", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function XRWebGLBinding() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "XRWebGLBinding", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "AudioData", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function AudioData() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "AudioData", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "EncodedAudioChunk", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function EncodedAudioChunk() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "EncodedAudioChunk", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "EncodedVideoChunk", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function EncodedVideoChunk() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "EncodedVideoChunk", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "ImageTrack", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function ImageTrack() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "ImageTrack", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "ImageTrackList", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function ImageTrackList() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "ImageTrackList", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "VideoColorSpace", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function VideoColorSpace() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "VideoColorSpace", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "VideoFrame", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function VideoFrame() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "VideoFrame", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "AudioDecoder", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function AudioDecoder() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "AudioDecoder", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "AudioEncoder", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function AudioEncoder() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "AudioEncoder", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "ImageDecoder", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function ImageDecoder() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "ImageDecoder", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "VideoDecoder", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function VideoDecoder() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "VideoDecoder", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "VideoEncoder", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function VideoEncoder() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "VideoEncoder", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "AuthenticatorAssertionResponse", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function AuthenticatorAssertionResponse() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "AuthenticatorAssertionResponse", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "AuthenticatorAttestationResponse", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function AuthenticatorAttestationResponse() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "AuthenticatorAttestationResponse", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "AuthenticatorResponse", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function AuthenticatorResponse() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "AuthenticatorResponse", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "PublicKeyCredential", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function PublicKeyCredential() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "PublicKeyCredential", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "Bluetooth", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function Bluetooth() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "Bluetooth", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "BluetoothCharacteristicProperties", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function BluetoothCharacteristicProperties() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "BluetoothCharacteristicProperties", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "BluetoothDevice", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function BluetoothDevice() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "BluetoothDevice", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "BluetoothRemoteGATTCharacteristic", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function BluetoothRemoteGATTCharacteristic() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "BluetoothRemoteGATTCharacteristic", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "BluetoothRemoteGATTDescriptor", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function BluetoothRemoteGATTDescriptor() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "BluetoothRemoteGATTDescriptor", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "BluetoothRemoteGATTServer", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function BluetoothRemoteGATTServer() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "BluetoothRemoteGATTServer", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "BluetoothRemoteGATTService", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function BluetoothRemoteGATTService() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "BluetoothRemoteGATTService", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "EyeDropper", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function EyeDropper() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "EyeDropper", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "FileSystemDirectoryHandle", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function FileSystemDirectoryHandle() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "FileSystemDirectoryHandle", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "FileSystemFileHandle", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function FileSystemFileHandle() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "FileSystemFileHandle", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "FileSystemHandle", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function FileSystemHandle() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "FileSystemHandle", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "FileSystemWritableFileStream", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function FileSystemWritableFileStream() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "FileSystemWritableFileStream", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "FragmentDirective", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function FragmentDirective() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "FragmentDirective", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "GravitySensor", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function GravitySensor() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "GravitySensor", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "HID", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function HID() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "HID", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "HIDConnectionEvent", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function HIDConnectionEvent() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "HIDConnectionEvent", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "HIDDevice", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function HIDDevice() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "HIDDevice", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "HIDInputReportEvent", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function HIDInputReportEvent() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "HIDInputReportEvent", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "IdleDetector", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function IdleDetector() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "IdleDetector", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "MediaStreamTrackGenerator", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function MediaStreamTrackGenerator() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "MediaStreamTrackGenerator", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "MediaStreamTrackProcessor", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function MediaStreamTrackProcessor() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "MediaStreamTrackProcessor", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "OTPCredential", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function OTPCredential() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "OTPCredential", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "PaymentAddress", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function PaymentAddress() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "PaymentAddress", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "PaymentRequest", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function PaymentRequest() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "PaymentRequest", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "PaymentResponse", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function PaymentResponse() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "PaymentResponse", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "PaymentMethodChangeEvent", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function PaymentMethodChangeEvent() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "PaymentMethodChangeEvent", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "Presentation", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function Presentation() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "Presentation", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "PresentationAvailability", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function PresentationAvailability() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "PresentationAvailability", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "PresentationConnection", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function PresentationConnection() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "PresentationConnection", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "PresentationConnectionAvailableEvent", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function PresentationConnectionAvailableEvent() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "PresentationConnectionAvailableEvent", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "PresentationConnectionCloseEvent", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function PresentationConnectionCloseEvent() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "PresentationConnectionCloseEvent", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "PresentationConnectionList", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function PresentationConnectionList() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "PresentationConnectionList", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "PresentationReceiver", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function PresentationReceiver() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "PresentationReceiver", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "PresentationRequest", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function PresentationRequest() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "PresentationRequest", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "Profiler", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function Profiler() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "Profiler", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "Scheduling", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function Scheduling() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "Scheduling", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "ScreenDetailed", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function ScreenDetailed() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "ScreenDetailed", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "ScreenDetails", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function ScreenDetails() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "ScreenDetails", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "Serial", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function Serial() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "Serial", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "SerialPort", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function SerialPort() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "SerialPort", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "USB", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function USB() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "USB", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "USBAlternateInterface", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function USBAlternateInterface() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "USBAlternateInterface", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "USBConfiguration", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function USBConfiguration() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "USBConfiguration", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "USBConnectionEvent", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function USBConnectionEvent() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "USBConnectionEvent", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "USBDevice", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function USBDevice() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "USBDevice", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "USBEndpoint", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function USBEndpoint() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "USBEndpoint", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "USBInTransferResult", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function USBInTransferResult() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "USBInTransferResult", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "USBInterface", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function USBInterface() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "USBInterface", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "USBIsochronousInTransferPacket", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function USBIsochronousInTransferPacket() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "USBIsochronousInTransferPacket", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "USBIsochronousInTransferResult", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function USBIsochronousInTransferResult() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "USBIsochronousInTransferResult", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "USBIsochronousOutTransferPacket", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function USBIsochronousOutTransferPacket() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "USBIsochronousOutTransferPacket", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "USBIsochronousOutTransferResult", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function USBIsochronousOutTransferResult() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "USBIsochronousOutTransferResult", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "USBOutTransferResult", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function USBOutTransferResult() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "USBOutTransferResult", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "VirtualKeyboard", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function VirtualKeyboard() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "VirtualKeyboard", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "WakeLock", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function WakeLock() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "WakeLock", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "WakeLockSentinel", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function WakeLockSentinel() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "WakeLockSentinel", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "WebTransport", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function WebTransport() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "WebTransport", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "WebTransportBidirectionalStream", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function WebTransportBidirectionalStream() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "WebTransportBidirectionalStream", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "WebTransportDatagramDuplexStream", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function WebTransportDatagramDuplexStream() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "WebTransportDatagramDuplexStream", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "WebTransportError", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function WebTransportError() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "WebTransportError", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "XRAnchor", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function XRAnchor() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "XRAnchor", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "XRAnchorSet", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function XRAnchorSet() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "XRAnchorSet", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "XRBoundedReferenceSpace", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function XRBoundedReferenceSpace() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "XRBoundedReferenceSpace", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "XRFrame", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function XRFrame() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "XRFrame", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "XRInputSource", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function XRInputSource() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "XRInputSource", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "XRInputSourceArray", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function XRInputSourceArray() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "XRInputSourceArray", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "XRInputSourceEvent", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function XRInputSourceEvent() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "XRInputSourceEvent", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "XRInputSourcesChangeEvent", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function XRInputSourcesChangeEvent() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "XRInputSourcesChangeEvent", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "XRPose", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function XRPose() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "XRPose", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "XRReferenceSpace", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function XRReferenceSpace() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "XRReferenceSpace", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "XRReferenceSpaceEvent", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function XRReferenceSpaceEvent() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "XRReferenceSpaceEvent", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "XRRenderState", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function XRRenderState() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "XRRenderState", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "XRRigidTransform", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function XRRigidTransform() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "XRRigidTransform", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "XRSession", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function XRSession() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "XRSession", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "XRSessionEvent", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function XRSessionEvent() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "XRSessionEvent", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "XRSpace", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function XRSpace() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "XRSpace", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "XRSystem", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function XRSystem() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "XRSystem", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "XRView", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function XRView() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "XRView", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "XRViewerPose", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function XRViewerPose() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "XRViewerPose", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "XRViewport", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function XRViewport() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "XRViewport", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "XRWebGLLayer", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function XRWebGLLayer() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "XRWebGLLayer", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "XRCPUDepthInformation", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function XRCPUDepthInformation() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "XRCPUDepthInformation", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "XRDepthInformation", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function XRDepthInformation() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "XRDepthInformation", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "XRWebGLDepthInformation", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function XRWebGLDepthInformation() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "XRWebGLDepthInformation", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "XRHitTestResult", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function XRHitTestResult() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "XRHitTestResult", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "XRHitTestSource", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function XRHitTestSource() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "XRHitTestSource", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "XRRay", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function XRRay() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "XRRay", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "XRTransientInputHitTestResult", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function XRTransientInputHitTestResult() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "XRTransientInputHitTestResult", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "XRTransientInputHitTestSource", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function XRTransientInputHitTestSource() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "XRTransientInputHitTestSource", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "XRLightEstimate", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function XRLightEstimate() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "XRLightEstimate", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "XRLightProbe", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function XRLightProbe() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "XRLightProbe", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "getScreenDetails", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getScreenDetails() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "getScreenDetails", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "showDirectoryPicker", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function showDirectoryPicker() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "showDirectoryPicker", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "showOpenFilePicker", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function showOpenFilePicker() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "showOpenFilePicker", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "showSaveFilePicker", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function showSaveFilePicker() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "showSaveFilePicker", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "originAgentCluster", {
  configurable: true,
  enumerable: true,
  get: function originAgentCluster() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "originAgentCluster_get", arguments, false);
  },
  set: undefined
});
bodavm.toolsFunc.windowdefineProperty(window, "onpointerrawupdate", {
  configurable: true,
  enumerable: true,
  get: function onpointerrawupdate() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "onpointerrawupdate_get", arguments, null);
  },
  set: function onpointerrawupdate() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "onpointerrawupdate_set", arguments);
  }
});
bodavm.toolsFunc.windowdefineProperty(window, "crossOriginIsolated", {
  configurable: true,
  enumerable: true,
  get: function crossOriginIsolated() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "crossOriginIsolated_get", arguments, false);
  },
  set: undefined
});
bodavm.toolsFunc.windowdefineProperty(window, "scheduler", {
  configurable: true,
  enumerable: true,
  get: function scheduler() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "scheduler_get", arguments);
  },
  set: function scheduler() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "scheduler_set", arguments);
  }
});
bodavm.toolsFunc.windowdefineProperty(window, "AnimationPlaybackEvent", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function AnimationPlaybackEvent() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "AnimationPlaybackEvent", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "AnimationTimeline", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function AnimationTimeline() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "AnimationTimeline", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "CSSAnimation", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function CSSAnimation() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "CSSAnimation", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "CSSTransition", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function CSSTransition() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "CSSTransition", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "DocumentTimeline", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function DocumentTimeline() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "DocumentTimeline", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "BackgroundFetchManager", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function BackgroundFetchManager() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "BackgroundFetchManager", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "BackgroundFetchRecord", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function BackgroundFetchRecord() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "BackgroundFetchRecord", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "BackgroundFetchRegistration", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function BackgroundFetchRegistration() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "BackgroundFetchRegistration", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "BluetoothUUID", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function BluetoothUUID() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "BluetoothUUID", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "CSSFontPaletteValuesRule", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function CSSFontPaletteValuesRule() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "CSSFontPaletteValuesRule", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "CaptureHandleChangeEvent", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function CaptureHandleChangeEvent() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "CaptureHandleChangeEvent", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "CustomStateSet", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function CustomStateSet() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "CustomStateSet", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "DelegatedInkTrailPresenter", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function DelegatedInkTrailPresenter() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "DelegatedInkTrailPresenter", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "Ink", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function Ink() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "Ink", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "MediaMetadata", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function MediaMetadata() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "MediaMetadata", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "MediaSession", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function MediaSession() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "MediaSession", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "MediaSource", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function MediaSource() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "MediaSource", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "SourceBuffer", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function SourceBuffer() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "SourceBuffer", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "SourceBufferList", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function SourceBufferList() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "SourceBufferList", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "MediaStreamTrack", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function MediaStreamTrack() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "MediaStreamTrack", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "NavigateEvent", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function NavigateEvent() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "NavigateEvent", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "NavigationCurrentEntryChangeEvent", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function NavigationCurrentEntryChangeEvent() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "NavigationCurrentEntryChangeEvent", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "NavigationDestination", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function NavigationDestination() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "NavigationDestination", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "NavigationHistoryEntry", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function NavigationHistoryEntry() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "NavigationHistoryEntry", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "NavigationTransition", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function NavigationTransition() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "NavigationTransition", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "NavigatorUAData", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function NavigatorUAData() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "NavigatorUAData", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "Notification", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function Notification() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "Notification", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "PaymentInstruments", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function PaymentInstruments() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "PaymentInstruments", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "PaymentManager", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function PaymentManager() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "PaymentManager", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "PaymentRequestUpdateEvent", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function PaymentRequestUpdateEvent() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "PaymentRequestUpdateEvent", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "PeriodicSyncManager", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function PeriodicSyncManager() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "PeriodicSyncManager", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "PermissionStatus", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function PermissionStatus() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "PermissionStatus", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "Permissions", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function Permissions() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "Permissions", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "PictureInPictureEvent", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function PictureInPictureEvent() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "PictureInPictureEvent", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "PictureInPictureWindow", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function PictureInPictureWindow() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "PictureInPictureWindow", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "PushManager", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function PushManager() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "PushManager", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "PushSubscription", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function PushSubscription() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "PushSubscription", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "PushSubscriptionOptions", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function PushSubscriptionOptions() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "PushSubscriptionOptions", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "RemotePlayback", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function RemotePlayback() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "RemotePlayback", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "Scheduler", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function Scheduler() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "Scheduler", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "TaskController", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function TaskController() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "TaskController", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "TaskPriorityChangeEvent", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function TaskPriorityChangeEvent() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "TaskPriorityChangeEvent", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "TaskSignal", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function TaskSignal() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "TaskSignal", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "SharedWorker", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function SharedWorker() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "SharedWorker", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "SpeechSynthesisErrorEvent", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function SpeechSynthesisErrorEvent() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "SpeechSynthesisErrorEvent", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "SpeechSynthesisEvent", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function SpeechSynthesisEvent() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "SpeechSynthesisEvent", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "SpeechSynthesisUtterance", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function SpeechSynthesisUtterance() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "SpeechSynthesisUtterance", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "TrustedHTML", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function TrustedHTML() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "TrustedHTML", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "TrustedScript", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function TrustedScript() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "TrustedScript", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "TrustedScriptURL", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function TrustedScriptURL() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "TrustedScriptURL", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "TrustedTypePolicy", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function TrustedTypePolicy() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "TrustedTypePolicy", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "URLPattern", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function URLPattern() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "URLPattern", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "VideoPlaybackQuality", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function VideoPlaybackQuality() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "VideoPlaybackQuality", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "VirtualKeyboardGeometryChangeEvent", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function VirtualKeyboardGeometryChangeEvent() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "VirtualKeyboardGeometryChangeEvent", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "XSLTProcessor", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function XSLTProcessor() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "XSLTProcessor", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "webkitSpeechGrammar", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function webkitSpeechGrammar() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "webkitSpeechGrammar", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "webkitSpeechGrammarList", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function webkitSpeechGrammarList() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "webkitSpeechGrammarList", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "webkitSpeechRecognition", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function webkitSpeechRecognition() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "webkitSpeechRecognition", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "webkitSpeechRecognitionError", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function webkitSpeechRecognitionError() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "webkitSpeechRecognitionError", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "webkitSpeechRecognitionEvent", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function webkitSpeechRecognitionEvent() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "webkitSpeechRecognitionEvent", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "openDatabase", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function openDatabase() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "openDatabase", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "webkitRequestFileSystem", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function webkitRequestFileSystem() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "webkitRequestFileSystem", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "webkitResolveLocalFileSystemURL", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function webkitResolveLocalFileSystemURL() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "webkitResolveLocalFileSystemURL", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "vilame_setter", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {}
});
bodavm.toolsFunc.windowdefineProperty(window, "code2", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: undefined
});
bodavm.toolsFunc.windowdefineProperty(window, "code1", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: undefined
});
bodavm.toolsFunc.windowdefineProperty(window, "dir", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function dir() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "dir", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "dirxml", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function dirxml() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "dirxml", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "profile", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function profile() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "profile", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "profileEnd", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function profileEnd() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "profileEnd", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "clear", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function clear() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "clear", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "table", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function table() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "table", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "keys", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function keys() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "keys", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "values", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function values() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "values", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "debug", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function debug() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "debug", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "undebug", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function undebug() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "undebug", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "monitor", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function monitor() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "monitor", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "unmonitor", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function unmonitor() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "unmonitor", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "inspect", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function inspect() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "inspect", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "copy", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function copy() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "copy", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "queryObjects", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function queryObjects() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "queryObjects", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "$_", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: {}
});
bodavm.toolsFunc.windowdefineProperty(window, "$0", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: {}
});
bodavm.toolsFunc.windowdefineProperty(window, "$1", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: undefined
});
bodavm.toolsFunc.windowdefineProperty(window, "$2", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: undefined
});
bodavm.toolsFunc.windowdefineProperty(window, "$3", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: undefined
});
bodavm.toolsFunc.windowdefineProperty(window, "$4", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: undefined
});
bodavm.toolsFunc.windowdefineProperty(window, "getEventListeners", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function getEventListeners() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "getEventListeners", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "getAccessibleName", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function getAccessibleName() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "getAccessibleName", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "getAccessibleRole", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function getAccessibleRole() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "getAccessibleRole", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "monitorEvents", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function monitorEvents() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "monitorEvents", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "unmonitorEvents", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function unmonitorEvents() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "unmonitorEvents", arguments);
  }()
});
// bodavm.toolsFunc.windowdefineProperty(window, "$", {configurable:true, enumerable:false, writable:true, value:function $ (){return bodavm.toolsFunc.dispatch(this, window, "window", "$", arguments)}});
bodavm.toolsFunc.windowdefineProperty(window, "$$", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function $$() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "$$", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "$x", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function $x() {
    return bodavm.toolsFunc.dispatch(this, window, "window", "$x", arguments);
  }()
});
bodavm.toolsFunc.windowdefineProperty(window, "chrome", {
  writable: true,
  enumerable: true,
  configurable: false,
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
      },
      getIsInstalled: function getIsInstalled() {
        debugger;
      },
      installState: function installState() {
        debugger;
      },
      isInstalled: false,
      runningState: function runningState() {
        debugger;
      }
    },
    csi: function () {
      debugger;
    },
    loadTimes: function () {
      debugger;
    }
  }
});
debugger;
if (window.length > 0) {
  window[0] = bodaobj.window;
}
var boeval = eval;
eval = function (x) {
  debugger;
  console.log(`执行eval,参数为${x.length > 30 ? x.substr(0, 50) : x}`);
  return boeval.call(this, x);
};
bodavm.toolsFunc.safefunction(eval);
window.bodavm.memory.globalobj['Element'].prototype[Symbol.unscopables] = {
  after: true,
  append: true,
  before: true,
  prepend: true,
  remove: true,
  replaceChildren: true,
  replaceWith: true,
  slot: true
};
window.bodavm.memory.globalobj['Element'].prototype[Symbol.unscopables].__proto__ = null;
// debugger
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