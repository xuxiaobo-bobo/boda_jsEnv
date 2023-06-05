// XRSession对象

bodavm.memory.globalobj['XRSession'] = function XRSession() {
  console.log_copy('XRSession 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof XRSession)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['XRSession'], "XRSession");
bodavm.memory.globalobj['XRSession'].prototype.__proto__ = bodavm.memory.globalobj['EventTarget'].prototype;
bodavm.memory.globalobj['XRSession'].__proto__ = bodavm.memory.globalobj['EventTarget'];
bodavm.toolsFunc.defineProperty('XRSession', "environmentBlendMode", {
  configurable: true,
  enumerable: true,
  get: function environmentBlendMode() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['XRSession'].prototype, "XRSession", "environmentBlendMode_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('XRSession', "interactionMode", {
  configurable: true,
  enumerable: true,
  get: function interactionMode() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['XRSession'].prototype, "XRSession", "interactionMode_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('XRSession', "visibilityState", {
  configurable: true,
  enumerable: true,
  get: function visibilityState() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['XRSession'].prototype, "XRSession", "visibilityState_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('XRSession', "renderState", {
  configurable: true,
  enumerable: true,
  get: function renderState() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['XRSession'].prototype, "XRSession", "renderState_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('XRSession', "inputSources", {
  configurable: true,
  enumerable: true,
  get: function inputSources() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['XRSession'].prototype, "XRSession", "inputSources_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('XRSession', "domOverlayState", {
  configurable: true,
  enumerable: true,
  get: function domOverlayState() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['XRSession'].prototype, "XRSession", "domOverlayState_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('XRSession', "preferredReflectionFormat", {
  configurable: true,
  enumerable: true,
  get: function preferredReflectionFormat() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['XRSession'].prototype, "XRSession", "preferredReflectionFormat_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('XRSession', "enabledFeatures", {
  configurable: true,
  enumerable: true,
  get: function enabledFeatures() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['XRSession'].prototype, "XRSession", "enabledFeatures_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('XRSession', "onend", {
  configurable: true,
  enumerable: true,
  get: function onend() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['XRSession'].prototype, "XRSession", "onend_get", arguments);
  },
  set: function onend() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['XRSession'].prototype, "XRSession", "onend_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('XRSession', "onselect", {
  configurable: true,
  enumerable: true,
  get: function onselect() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['XRSession'].prototype, "XRSession", "onselect_get", arguments);
  },
  set: function onselect() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['XRSession'].prototype, "XRSession", "onselect_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('XRSession', "oninputsourceschange", {
  configurable: true,
  enumerable: true,
  get: function oninputsourceschange() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['XRSession'].prototype, "XRSession", "oninputsourceschange_get", arguments);
  },
  set: function oninputsourceschange() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['XRSession'].prototype, "XRSession", "oninputsourceschange_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('XRSession', "onselectstart", {
  configurable: true,
  enumerable: true,
  get: function onselectstart() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['XRSession'].prototype, "XRSession", "onselectstart_get", arguments);
  },
  set: function onselectstart() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['XRSession'].prototype, "XRSession", "onselectstart_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('XRSession', "onselectend", {
  configurable: true,
  enumerable: true,
  get: function onselectend() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['XRSession'].prototype, "XRSession", "onselectend_get", arguments);
  },
  set: function onselectend() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['XRSession'].prototype, "XRSession", "onselectend_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('XRSession', "onvisibilitychange", {
  configurable: true,
  enumerable: true,
  get: function onvisibilitychange() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['XRSession'].prototype, "XRSession", "onvisibilitychange_get", arguments);
  },
  set: function onvisibilitychange() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['XRSession'].prototype, "XRSession", "onvisibilitychange_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('XRSession', "onsqueeze", {
  configurable: true,
  enumerable: true,
  get: function onsqueeze() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['XRSession'].prototype, "XRSession", "onsqueeze_get", arguments);
  },
  set: function onsqueeze() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['XRSession'].prototype, "XRSession", "onsqueeze_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('XRSession', "onsqueezestart", {
  configurable: true,
  enumerable: true,
  get: function onsqueezestart() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['XRSession'].prototype, "XRSession", "onsqueezestart_get", arguments);
  },
  set: function onsqueezestart() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['XRSession'].prototype, "XRSession", "onsqueezestart_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('XRSession', "onsqueezeend", {
  configurable: true,
  enumerable: true,
  get: function onsqueezeend() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['XRSession'].prototype, "XRSession", "onsqueezeend_get", arguments);
  },
  set: function onsqueezeend() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['XRSession'].prototype, "XRSession", "onsqueezeend_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('XRSession', "depthUsage", {
  configurable: true,
  enumerable: true,
  get: function depthUsage() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['XRSession'].prototype, "XRSession", "depthUsage_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('XRSession', "depthDataFormat", {
  configurable: true,
  enumerable: true,
  get: function depthDataFormat() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['XRSession'].prototype, "XRSession", "depthDataFormat_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('XRSession', "cancelAnimationFrame", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function cancelAnimationFrame() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['XRSession'].prototype, "XRSession", "cancelAnimationFrame", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('XRSession', "end", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function end() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['XRSession'].prototype, "XRSession", "end", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('XRSession', "requestAnimationFrame", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function requestAnimationFrame() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['XRSession'].prototype, "XRSession", "requestAnimationFrame", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('XRSession', "requestHitTestSource", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function requestHitTestSource() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['XRSession'].prototype, "XRSession", "requestHitTestSource", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('XRSession', "requestHitTestSourceForTransientInput", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function requestHitTestSourceForTransientInput() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['XRSession'].prototype, "XRSession", "requestHitTestSourceForTransientInput", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('XRSession', "requestLightProbe", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function requestLightProbe() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['XRSession'].prototype, "XRSession", "requestLightProbe", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('XRSession', "requestReferenceSpace", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function requestReferenceSpace() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['XRSession'].prototype, "XRSession", "requestReferenceSpace", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('XRSession', "updateRenderState", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function updateRenderState() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['XRSession'].prototype, "XRSession", "updateRenderState", arguments);
  }
}, 'prototype');