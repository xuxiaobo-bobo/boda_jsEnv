// XRSession对象

XRSession = function XRSession() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof XRSession)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('XRSession 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(XRSession, "XRSession");
XRSession.prototype.__proto__ = EventTarget.prototype;
XRSession.__proto__ = EventTarget;
bodavm.toolsFunc.defineProperty(XRSession.prototype, "environmentBlendMode", {
  configurable: true,
  enumerable: true,
  get: function environmentBlendMode() {
    return bodavm.toolsFunc.dispatch(this, XRSession.prototype, "XRSession", "environmentBlendMode_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(XRSession.prototype, "interactionMode", {
  configurable: true,
  enumerable: true,
  get: function interactionMode() {
    return bodavm.toolsFunc.dispatch(this, XRSession.prototype, "XRSession", "interactionMode_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(XRSession.prototype, "visibilityState", {
  configurable: true,
  enumerable: true,
  get: function visibilityState() {
    return bodavm.toolsFunc.dispatch(this, XRSession.prototype, "XRSession", "visibilityState_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(XRSession.prototype, "renderState", {
  configurable: true,
  enumerable: true,
  get: function renderState() {
    return bodavm.toolsFunc.dispatch(this, XRSession.prototype, "XRSession", "renderState_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(XRSession.prototype, "inputSources", {
  configurable: true,
  enumerable: true,
  get: function inputSources() {
    return bodavm.toolsFunc.dispatch(this, XRSession.prototype, "XRSession", "inputSources_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(XRSession.prototype, "domOverlayState", {
  configurable: true,
  enumerable: true,
  get: function domOverlayState() {
    return bodavm.toolsFunc.dispatch(this, XRSession.prototype, "XRSession", "domOverlayState_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(XRSession.prototype, "preferredReflectionFormat", {
  configurable: true,
  enumerable: true,
  get: function preferredReflectionFormat() {
    return bodavm.toolsFunc.dispatch(this, XRSession.prototype, "XRSession", "preferredReflectionFormat_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(XRSession.prototype, "enabledFeatures", {
  configurable: true,
  enumerable: true,
  get: function enabledFeatures() {
    return bodavm.toolsFunc.dispatch(this, XRSession.prototype, "XRSession", "enabledFeatures_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(XRSession.prototype, "onend", {
  configurable: true,
  enumerable: true,
  get: function onend() {
    return bodavm.toolsFunc.dispatch(this, XRSession.prototype, "XRSession", "onend_get", arguments);
  },
  set: function onend() {
    return bodavm.toolsFunc.dispatch(this, XRSession.prototype, "XRSession", "onend_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(XRSession.prototype, "onselect", {
  configurable: true,
  enumerable: true,
  get: function onselect() {
    return bodavm.toolsFunc.dispatch(this, XRSession.prototype, "XRSession", "onselect_get", arguments);
  },
  set: function onselect() {
    return bodavm.toolsFunc.dispatch(this, XRSession.prototype, "XRSession", "onselect_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(XRSession.prototype, "oninputsourceschange", {
  configurable: true,
  enumerable: true,
  get: function oninputsourceschange() {
    return bodavm.toolsFunc.dispatch(this, XRSession.prototype, "XRSession", "oninputsourceschange_get", arguments);
  },
  set: function oninputsourceschange() {
    return bodavm.toolsFunc.dispatch(this, XRSession.prototype, "XRSession", "oninputsourceschange_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(XRSession.prototype, "onselectstart", {
  configurable: true,
  enumerable: true,
  get: function onselectstart() {
    return bodavm.toolsFunc.dispatch(this, XRSession.prototype, "XRSession", "onselectstart_get", arguments);
  },
  set: function onselectstart() {
    return bodavm.toolsFunc.dispatch(this, XRSession.prototype, "XRSession", "onselectstart_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(XRSession.prototype, "onselectend", {
  configurable: true,
  enumerable: true,
  get: function onselectend() {
    return bodavm.toolsFunc.dispatch(this, XRSession.prototype, "XRSession", "onselectend_get", arguments);
  },
  set: function onselectend() {
    return bodavm.toolsFunc.dispatch(this, XRSession.prototype, "XRSession", "onselectend_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(XRSession.prototype, "onvisibilitychange", {
  configurable: true,
  enumerable: true,
  get: function onvisibilitychange() {
    return bodavm.toolsFunc.dispatch(this, XRSession.prototype, "XRSession", "onvisibilitychange_get", arguments);
  },
  set: function onvisibilitychange() {
    return bodavm.toolsFunc.dispatch(this, XRSession.prototype, "XRSession", "onvisibilitychange_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(XRSession.prototype, "onsqueeze", {
  configurable: true,
  enumerable: true,
  get: function onsqueeze() {
    return bodavm.toolsFunc.dispatch(this, XRSession.prototype, "XRSession", "onsqueeze_get", arguments);
  },
  set: function onsqueeze() {
    return bodavm.toolsFunc.dispatch(this, XRSession.prototype, "XRSession", "onsqueeze_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(XRSession.prototype, "onsqueezestart", {
  configurable: true,
  enumerable: true,
  get: function onsqueezestart() {
    return bodavm.toolsFunc.dispatch(this, XRSession.prototype, "XRSession", "onsqueezestart_get", arguments);
  },
  set: function onsqueezestart() {
    return bodavm.toolsFunc.dispatch(this, XRSession.prototype, "XRSession", "onsqueezestart_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(XRSession.prototype, "onsqueezeend", {
  configurable: true,
  enumerable: true,
  get: function onsqueezeend() {
    return bodavm.toolsFunc.dispatch(this, XRSession.prototype, "XRSession", "onsqueezeend_get", arguments);
  },
  set: function onsqueezeend() {
    return bodavm.toolsFunc.dispatch(this, XRSession.prototype, "XRSession", "onsqueezeend_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(XRSession.prototype, "depthUsage", {
  configurable: true,
  enumerable: true,
  get: function depthUsage() {
    return bodavm.toolsFunc.dispatch(this, XRSession.prototype, "XRSession", "depthUsage_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(XRSession.prototype, "depthDataFormat", {
  configurable: true,
  enumerable: true,
  get: function depthDataFormat() {
    return bodavm.toolsFunc.dispatch(this, XRSession.prototype, "XRSession", "depthDataFormat_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(XRSession.prototype, "cancelAnimationFrame", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function cancelAnimationFrame() {
    return bodavm.toolsFunc.dispatch(this, XRSession.prototype, "XRSession", "cancelAnimationFrame", arguments);
  }
});
bodavm.toolsFunc.defineProperty(XRSession.prototype, "end", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function end() {
    return bodavm.toolsFunc.dispatch(this, XRSession.prototype, "XRSession", "end", arguments);
  }
});
bodavm.toolsFunc.defineProperty(XRSession.prototype, "requestAnimationFrame", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function requestAnimationFrame() {
    return bodavm.toolsFunc.dispatch(this, XRSession.prototype, "XRSession", "requestAnimationFrame", arguments);
  }
});
bodavm.toolsFunc.defineProperty(XRSession.prototype, "requestHitTestSource", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function requestHitTestSource() {
    return bodavm.toolsFunc.dispatch(this, XRSession.prototype, "XRSession", "requestHitTestSource", arguments);
  }
});
bodavm.toolsFunc.defineProperty(XRSession.prototype, "requestHitTestSourceForTransientInput", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function requestHitTestSourceForTransientInput() {
    return bodavm.toolsFunc.dispatch(this, XRSession.prototype, "XRSession", "requestHitTestSourceForTransientInput", arguments);
  }
});
bodavm.toolsFunc.defineProperty(XRSession.prototype, "requestLightProbe", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function requestLightProbe() {
    return bodavm.toolsFunc.dispatch(this, XRSession.prototype, "XRSession", "requestLightProbe", arguments);
  }
});
bodavm.toolsFunc.defineProperty(XRSession.prototype, "requestReferenceSpace", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function requestReferenceSpace() {
    return bodavm.toolsFunc.dispatch(this, XRSession.prototype, "XRSession", "requestReferenceSpace", arguments);
  }
});
bodavm.toolsFunc.defineProperty(XRSession.prototype, "updateRenderState", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function updateRenderState() {
    return bodavm.toolsFunc.dispatch(this, XRSession.prototype, "XRSession", "updateRenderState", arguments);
  }
});