// XRSesboda对象

bodaEnv.memory.globlProtoObj["XRSesboda"] = function XRSesboda() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('XRSesboda 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["XRSesboda"], "XRSesboda");
bodaEnv.memory.globlProtoObj["XRSesboda"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["EventTarget"].prototype;
bodaEnv.memory.globlProtoObj["XRSesboda"].__proto__ = bodaEnv.memory.globlProtoObj["EventTarget"];
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["XRSesboda"].prototype, "environmentBlendMode", {
  configurable: true,
  enumerable: true,
  get: {
    environmentBlendMode() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["XRSesboda"].prototype, "XRSesboda", "environmentBlendMode_get", arguments);
    }
  }.environmentBlendMode,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["XRSesboda"].prototype, "interactionMode", {
  configurable: true,
  enumerable: true,
  get: {
    interactionMode() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["XRSesboda"].prototype, "XRSesboda", "interactionMode_get", arguments);
    }
  }.interactionMode,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["XRSesboda"].prototype, "visibilityState", {
  configurable: true,
  enumerable: true,
  get: {
    visibilityState() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["XRSesboda"].prototype, "XRSesboda", "visibilityState_get", arguments);
    }
  }.visibilityState,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["XRSesboda"].prototype, "renderState", {
  configurable: true,
  enumerable: true,
  get: {
    renderState() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["XRSesboda"].prototype, "XRSesboda", "renderState_get", arguments);
    }
  }.renderState,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["XRSesboda"].prototype, "inputSources", {
  configurable: true,
  enumerable: true,
  get: {
    inputSources() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["XRSesboda"].prototype, "XRSesboda", "inputSources_get", arguments);
    }
  }.inputSources,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["XRSesboda"].prototype, "domOverlayState", {
  configurable: true,
  enumerable: true,
  get: {
    domOverlayState() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["XRSesboda"].prototype, "XRSesboda", "domOverlayState_get", arguments);
    }
  }.domOverlayState,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["XRSesboda"].prototype, "preferredReflectionFormat", {
  configurable: true,
  enumerable: true,
  get: {
    preferredReflectionFormat() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["XRSesboda"].prototype, "XRSesboda", "preferredReflectionFormat_get", arguments);
    }
  }.preferredReflectionFormat,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["XRSesboda"].prototype, "onend", {
  configurable: true,
  enumerable: true,
  get: {
    onend() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["XRSesboda"].prototype, "XRSesboda", "onend_get", arguments);
    }
  }.onend,
  set: {
    onend() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["XRSesboda"].prototype, "XRSesboda", "onend_set", arguments);
    }
  }.onend
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["XRSesboda"].prototype, "onselect", {
  configurable: true,
  enumerable: true,
  get: {
    onselect() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["XRSesboda"].prototype, "XRSesboda", "onselect_get", arguments);
    }
  }.onselect,
  set: {
    onselect() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["XRSesboda"].prototype, "XRSesboda", "onselect_set", arguments);
    }
  }.onselect
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["XRSesboda"].prototype, "oninputsourceschange", {
  configurable: true,
  enumerable: true,
  get: {
    oninputsourceschange() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["XRSesboda"].prototype, "XRSesboda", "oninputsourceschange_get", arguments);
    }
  }.oninputsourceschange,
  set: {
    oninputsourceschange() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["XRSesboda"].prototype, "XRSesboda", "oninputsourceschange_set", arguments);
    }
  }.oninputsourceschange
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["XRSesboda"].prototype, "onselectstart", {
  configurable: true,
  enumerable: true,
  get: {
    onselectstart() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["XRSesboda"].prototype, "XRSesboda", "onselectstart_get", arguments);
    }
  }.onselectstart,
  set: {
    onselectstart() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["XRSesboda"].prototype, "XRSesboda", "onselectstart_set", arguments);
    }
  }.onselectstart
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["XRSesboda"].prototype, "onselectend", {
  configurable: true,
  enumerable: true,
  get: {
    onselectend() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["XRSesboda"].prototype, "XRSesboda", "onselectend_get", arguments);
    }
  }.onselectend,
  set: {
    onselectend() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["XRSesboda"].prototype, "XRSesboda", "onselectend_set", arguments);
    }
  }.onselectend
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["XRSesboda"].prototype, "onvisibilitychange", {
  configurable: true,
  enumerable: true,
  get: {
    onvisibilitychange() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["XRSesboda"].prototype, "XRSesboda", "onvisibilitychange_get", arguments);
    }
  }.onvisibilitychange,
  set: {
    onvisibilitychange() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["XRSesboda"].prototype, "XRSesboda", "onvisibilitychange_set", arguments);
    }
  }.onvisibilitychange
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["XRSesboda"].prototype, "onsqueeze", {
  configurable: true,
  enumerable: true,
  get: {
    onsqueeze() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["XRSesboda"].prototype, "XRSesboda", "onsqueeze_get", arguments);
    }
  }.onsqueeze,
  set: {
    onsqueeze() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["XRSesboda"].prototype, "XRSesboda", "onsqueeze_set", arguments);
    }
  }.onsqueeze
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["XRSesboda"].prototype, "onsqueezestart", {
  configurable: true,
  enumerable: true,
  get: {
    onsqueezestart() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["XRSesboda"].prototype, "XRSesboda", "onsqueezestart_get", arguments);
    }
  }.onsqueezestart,
  set: {
    onsqueezestart() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["XRSesboda"].prototype, "XRSesboda", "onsqueezestart_set", arguments);
    }
  }.onsqueezestart
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["XRSesboda"].prototype, "onsqueezeend", {
  configurable: true,
  enumerable: true,
  get: {
    onsqueezeend() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["XRSesboda"].prototype, "XRSesboda", "onsqueezeend_get", arguments);
    }
  }.onsqueezeend,
  set: {
    onsqueezeend() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["XRSesboda"].prototype, "XRSesboda", "onsqueezeend_set", arguments);
    }
  }.onsqueezeend
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["XRSesboda"].prototype, "depthUsage", {
  configurable: true,
  enumerable: true,
  get: {
    depthUsage() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["XRSesboda"].prototype, "XRSesboda", "depthUsage_get", arguments);
    }
  }.depthUsage,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["XRSesboda"].prototype, "depthDataFormat", {
  configurable: true,
  enumerable: true,
  get: {
    depthDataFormat() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["XRSesboda"].prototype, "XRSesboda", "depthDataFormat_get", arguments);
    }
  }.depthDataFormat,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["XRSesboda"].prototype, "cancelAnimationFrame", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    cancelAnimationFrame() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["XRSesboda"].prototype, "XRSesboda", "cancelAnimationFrame", arguments);
    }
  }.cancelAnimationFrame
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["XRSesboda"].prototype, "end", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    end() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["XRSesboda"].prototype, "XRSesboda", "end", arguments);
    }
  }.end
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["XRSesboda"].prototype, "requestAnimationFrame", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    requestAnimationFrame() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["XRSesboda"].prototype, "XRSesboda", "requestAnimationFrame", arguments);
    }
  }.requestAnimationFrame
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["XRSesboda"].prototype, "requestHitTestSource", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    requestHitTestSource() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["XRSesboda"].prototype, "XRSesboda", "requestHitTestSource", arguments);
    }
  }.requestHitTestSource
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["XRSesboda"].prototype, "requestHitTestSourceForTransientInput", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    requestHitTestSourceForTransientInput() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["XRSesboda"].prototype, "XRSesboda", "requestHitTestSourceForTransientInput", arguments);
    }
  }.requestHitTestSourceForTransientInput
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["XRSesboda"].prototype, "requestLightProbe", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    requestLightProbe() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["XRSesboda"].prototype, "XRSesboda", "requestLightProbe", arguments);
    }
  }.requestLightProbe
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["XRSesboda"].prototype, "requestReferenceSpace", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    requestReferenceSpace() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["XRSesboda"].prototype, "XRSesboda", "requestReferenceSpace", arguments);
    }
  }.requestReferenceSpace
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["XRSesboda"].prototype, "updateRenderState", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    updateRenderState() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["XRSesboda"].prototype, "XRSesboda", "updateRenderState", arguments);
    }
  }.updateRenderState
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["XRSesboda"].prototype, "enabledFeatures", {
  configurable: true,
  enumerable: true,
  get: {
    enabledFeatures() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["XRSesboda"].prototype, "XRSesboda", "enabledFeatures_get", arguments);
    }
  }.enabledFeatures,
  set: undefined
});