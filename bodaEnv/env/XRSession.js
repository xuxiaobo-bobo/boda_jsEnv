// XRSession对象

bodaEnv.memory.globlProtoObj["XRSession"] = function XRSession() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('XRSession 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["XRSession"], "XRSession");
bodaEnv.memory.globlProtoObj["XRSession"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["EventTarget"].prototype;
bodaEnv.memory.globlProtoObj["XRSession"].__proto__ = bodaEnv.memory.globlProtoObj["EventTarget"];
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["XRSession"].prototype, "environmentBlendMode", {
  configurable: true,
  enumerable: true,
  get: {
    environmentBlendMode() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["XRSession"].prototype, "XRSession", "environmentBlendMode_get", arguments);
    }
  }.environmentBlendMode,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["XRSession"].prototype, "interactionMode", {
  configurable: true,
  enumerable: true,
  get: {
    interactionMode() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["XRSession"].prototype, "XRSession", "interactionMode_get", arguments);
    }
  }.interactionMode,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["XRSession"].prototype, "visibilityState", {
  configurable: true,
  enumerable: true,
  get: {
    visibilityState() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["XRSession"].prototype, "XRSession", "visibilityState_get", arguments);
    }
  }.visibilityState,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["XRSession"].prototype, "renderState", {
  configurable: true,
  enumerable: true,
  get: {
    renderState() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["XRSession"].prototype, "XRSession", "renderState_get", arguments);
    }
  }.renderState,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["XRSession"].prototype, "inputSources", {
  configurable: true,
  enumerable: true,
  get: {
    inputSources() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["XRSession"].prototype, "XRSession", "inputSources_get", arguments);
    }
  }.inputSources,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["XRSession"].prototype, "domOverlayState", {
  configurable: true,
  enumerable: true,
  get: {
    domOverlayState() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["XRSession"].prototype, "XRSession", "domOverlayState_get", arguments);
    }
  }.domOverlayState,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["XRSession"].prototype, "preferredReflectionFormat", {
  configurable: true,
  enumerable: true,
  get: {
    preferredReflectionFormat() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["XRSession"].prototype, "XRSession", "preferredReflectionFormat_get", arguments);
    }
  }.preferredReflectionFormat,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["XRSession"].prototype, "onend", {
  configurable: true,
  enumerable: true,
  get: {
    onend() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["XRSession"].prototype, "XRSession", "onend_get", arguments);
    }
  }.onend,
  set: {
    onend() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["XRSession"].prototype, "XRSession", "onend_set", arguments);
    }
  }.onend
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["XRSession"].prototype, "onselect", {
  configurable: true,
  enumerable: true,
  get: {
    onselect() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["XRSession"].prototype, "XRSession", "onselect_get", arguments);
    }
  }.onselect,
  set: {
    onselect() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["XRSession"].prototype, "XRSession", "onselect_set", arguments);
    }
  }.onselect
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["XRSession"].prototype, "oninputsourceschange", {
  configurable: true,
  enumerable: true,
  get: {
    oninputsourceschange() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["XRSession"].prototype, "XRSession", "oninputsourceschange_get", arguments);
    }
  }.oninputsourceschange,
  set: {
    oninputsourceschange() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["XRSession"].prototype, "XRSession", "oninputsourceschange_set", arguments);
    }
  }.oninputsourceschange
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["XRSession"].prototype, "onselectstart", {
  configurable: true,
  enumerable: true,
  get: {
    onselectstart() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["XRSession"].prototype, "XRSession", "onselectstart_get", arguments);
    }
  }.onselectstart,
  set: {
    onselectstart() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["XRSession"].prototype, "XRSession", "onselectstart_set", arguments);
    }
  }.onselectstart
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["XRSession"].prototype, "onselectend", {
  configurable: true,
  enumerable: true,
  get: {
    onselectend() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["XRSession"].prototype, "XRSession", "onselectend_get", arguments);
    }
  }.onselectend,
  set: {
    onselectend() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["XRSession"].prototype, "XRSession", "onselectend_set", arguments);
    }
  }.onselectend
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["XRSession"].prototype, "onvisibilitychange", {
  configurable: true,
  enumerable: true,
  get: {
    onvisibilitychange() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["XRSession"].prototype, "XRSession", "onvisibilitychange_get", arguments);
    }
  }.onvisibilitychange,
  set: {
    onvisibilitychange() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["XRSession"].prototype, "XRSession", "onvisibilitychange_set", arguments);
    }
  }.onvisibilitychange
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["XRSession"].prototype, "onsqueeze", {
  configurable: true,
  enumerable: true,
  get: {
    onsqueeze() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["XRSession"].prototype, "XRSession", "onsqueeze_get", arguments);
    }
  }.onsqueeze,
  set: {
    onsqueeze() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["XRSession"].prototype, "XRSession", "onsqueeze_set", arguments);
    }
  }.onsqueeze
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["XRSession"].prototype, "onsqueezestart", {
  configurable: true,
  enumerable: true,
  get: {
    onsqueezestart() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["XRSession"].prototype, "XRSession", "onsqueezestart_get", arguments);
    }
  }.onsqueezestart,
  set: {
    onsqueezestart() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["XRSession"].prototype, "XRSession", "onsqueezestart_set", arguments);
    }
  }.onsqueezestart
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["XRSession"].prototype, "onsqueezeend", {
  configurable: true,
  enumerable: true,
  get: {
    onsqueezeend() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["XRSession"].prototype, "XRSession", "onsqueezeend_get", arguments);
    }
  }.onsqueezeend,
  set: {
    onsqueezeend() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["XRSession"].prototype, "XRSession", "onsqueezeend_set", arguments);
    }
  }.onsqueezeend
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["XRSession"].prototype, "depthUsage", {
  configurable: true,
  enumerable: true,
  get: {
    depthUsage() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["XRSession"].prototype, "XRSession", "depthUsage_get", arguments);
    }
  }.depthUsage,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["XRSession"].prototype, "depthDataFormat", {
  configurable: true,
  enumerable: true,
  get: {
    depthDataFormat() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["XRSession"].prototype, "XRSession", "depthDataFormat_get", arguments);
    }
  }.depthDataFormat,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["XRSession"].prototype, "cancelAnimationFrame", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    cancelAnimationFrame() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["XRSession"].prototype, "XRSession", "cancelAnimationFrame", arguments);
    }
  }.cancelAnimationFrame
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["XRSession"].prototype, "end", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    end() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["XRSession"].prototype, "XRSession", "end", arguments);
    }
  }.end
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["XRSession"].prototype, "requestAnimationFrame", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    requestAnimationFrame() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["XRSession"].prototype, "XRSession", "requestAnimationFrame", arguments);
    }
  }.requestAnimationFrame
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["XRSession"].prototype, "requestHitTestSource", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    requestHitTestSource() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["XRSession"].prototype, "XRSession", "requestHitTestSource", arguments);
    }
  }.requestHitTestSource
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["XRSession"].prototype, "requestHitTestSourceForTransientInput", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    requestHitTestSourceForTransientInput() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["XRSession"].prototype, "XRSession", "requestHitTestSourceForTransientInput", arguments);
    }
  }.requestHitTestSourceForTransientInput
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["XRSession"].prototype, "requestLightProbe", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    requestLightProbe() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["XRSession"].prototype, "XRSession", "requestLightProbe", arguments);
    }
  }.requestLightProbe
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["XRSession"].prototype, "requestReferenceSpace", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    requestReferenceSpace() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["XRSession"].prototype, "XRSession", "requestReferenceSpace", arguments);
    }
  }.requestReferenceSpace
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["XRSession"].prototype, "updateRenderState", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    updateRenderState() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["XRSession"].prototype, "XRSession", "updateRenderState", arguments);
    }
  }.updateRenderState
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["XRSession"].prototype, "enabledFeatures", {
  configurable: true,
  enumerable: true,
  get: {
    enabledFeatures() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["XRSession"].prototype, "XRSession", "enabledFeatures_get", arguments);
    }
  }.enabledFeatures,
  set: undefined
});