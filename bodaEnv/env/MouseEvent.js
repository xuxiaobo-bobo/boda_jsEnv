// MouseEvent对象

bodaEnv.memory.globlProtoObj["MouseEvent"] = function MouseEvent() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    // debugger
    if (arg){
      
      bodaEnv.toolsFunc.setObjWeakMapProtoAttr.call(this,'type',arg)
      bodaEnv.toolsFunc.setObjWeakMapProtoAttr.call(this,'isTrusted',false)
      bodaEnv.toolsFunc.defineProperty_bo(this,'isTrusted',{
        set:undefined,
        enumerable:true,
        configurable:false,
        get:function isTrusted (){return bodaEnv.toolsFunc.dispatch(this,window, "window", "isTrusted_get", arguments)}
    })
      
    }
    bodaEnv.toolsFunc.console_copy('MouseEvent 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
  return bodaEnv.toolsFunc.proxyHelper(this,'MouseEvent')
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["MouseEvent"], "MouseEvent");
bodaEnv.memory.globlProtoObj["MouseEvent"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["UIEvent"].prototype;
bodaEnv.memory.globlProtoObj["MouseEvent"].__proto__ = bodaEnv.memory.globlProtoObj["UIEvent"];
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["MouseEvent"].prototype, "screenX", {
  configurable: true,
  enumerable: true,
  get: {
    screenX() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["MouseEvent"].prototype, "MouseEvent", "screenX_get", arguments);
    }
  }.screenX,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["MouseEvent"].prototype, "screenY", {
  configurable: true,
  enumerable: true,
  get: {
    screenY() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["MouseEvent"].prototype, "MouseEvent", "screenY_get", arguments);
    }
  }.screenY,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["MouseEvent"].prototype, "clientX", {
  configurable: true,
  enumerable: true,
  get: {
    clientX() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["MouseEvent"].prototype, "MouseEvent", "clientX_get", arguments);
    }
  }.clientX,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["MouseEvent"].prototype, "clientY", {
  configurable: true,
  enumerable: true,
  get: {
    clientY() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["MouseEvent"].prototype, "MouseEvent", "clientY_get", arguments);
    }
  }.clientY,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["MouseEvent"].prototype, "ctrlKey", {
  configurable: true,
  enumerable: true,
  get: {
    ctrlKey() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["MouseEvent"].prototype, "MouseEvent", "ctrlKey_get", arguments);
    }
  }.ctrlKey,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["MouseEvent"].prototype, "shiftKey", {
  configurable: true,
  enumerable: true,
  get: {
    shiftKey() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["MouseEvent"].prototype, "MouseEvent", "shiftKey_get", arguments);
    }
  }.shiftKey,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["MouseEvent"].prototype, "altKey", {
  configurable: true,
  enumerable: true,
  get: {
    altKey() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["MouseEvent"].prototype, "MouseEvent", "altKey_get", arguments);
    }
  }.altKey,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["MouseEvent"].prototype, "metaKey", {
  configurable: true,
  enumerable: true,
  get: {
    metaKey() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["MouseEvent"].prototype, "MouseEvent", "metaKey_get", arguments);
    }
  }.metaKey,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["MouseEvent"].prototype, "button", {
  configurable: true,
  enumerable: true,
  get: {
    button() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["MouseEvent"].prototype, "MouseEvent", "button_get", arguments);
    }
  }.button,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["MouseEvent"].prototype, "buttons", {
  configurable: true,
  enumerable: true,
  get: {
    buttons() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["MouseEvent"].prototype, "MouseEvent", "buttons_get", arguments);
    }
  }.buttons,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["MouseEvent"].prototype, "relatedTarget", {
  configurable: true,
  enumerable: true,
  get: {
    relatedTarget() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["MouseEvent"].prototype, "MouseEvent", "relatedTarget_get", arguments);
    }
  }.relatedTarget,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["MouseEvent"].prototype, "pageX", {
  configurable: true,
  enumerable: true,
  get: {
    pageX() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["MouseEvent"].prototype, "MouseEvent", "pageX_get", arguments);
    }
  }.pageX,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["MouseEvent"].prototype, "pageY", {
  configurable: true,
  enumerable: true,
  get: {
    pageY() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["MouseEvent"].prototype, "MouseEvent", "pageY_get", arguments);
    }
  }.pageY,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["MouseEvent"].prototype, "x", {
  configurable: true,
  enumerable: true,
  get: {
    x() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["MouseEvent"].prototype, "MouseEvent", "x_get", arguments);
    }
  }.x,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["MouseEvent"].prototype, "y", {
  configurable: true,
  enumerable: true,
  get: {
    y() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["MouseEvent"].prototype, "MouseEvent", "y_get", arguments);
    }
  }.y,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["MouseEvent"].prototype, "offsetX", {
  configurable: true,
  enumerable: true,
  get: {
    offsetX() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["MouseEvent"].prototype, "MouseEvent", "offsetX_get", arguments);
    }
  }.offsetX,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["MouseEvent"].prototype, "offsetY", {
  configurable: true,
  enumerable: true,
  get: {
    offsetY() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["MouseEvent"].prototype, "MouseEvent", "offsetY_get", arguments);
    }
  }.offsetY,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["MouseEvent"].prototype, "movementX", {
  configurable: true,
  enumerable: true,
  get: {
    movementX() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["MouseEvent"].prototype, "MouseEvent", "movementX_get", arguments);
    }
  }.movementX,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["MouseEvent"].prototype, "movementY", {
  configurable: true,
  enumerable: true,
  get: {
    movementY() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["MouseEvent"].prototype, "MouseEvent", "movementY_get", arguments);
    }
  }.movementY,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["MouseEvent"].prototype, "fromElement", {
  configurable: true,
  enumerable: true,
  get: {
    fromElement() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["MouseEvent"].prototype, "MouseEvent", "fromElement_get", arguments);
    }
  }.fromElement,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["MouseEvent"].prototype, "toElement", {
  configurable: true,
  enumerable: true,
  get: {
    toElement() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["MouseEvent"].prototype, "MouseEvent", "toElement_get", arguments);
    }
  }.toElement,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["MouseEvent"].prototype, "layerX", {
  configurable: true,
  enumerable: true,
  get: {
    layerX() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["MouseEvent"].prototype, "MouseEvent", "layerX_get", arguments);
    }
  }.layerX,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["MouseEvent"].prototype, "layerY", {
  configurable: true,
  enumerable: true,
  get: {
    layerY() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["MouseEvent"].prototype, "MouseEvent", "layerY_get", arguments);
    }
  }.layerY,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["MouseEvent"].prototype, "getModifierState", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    getModifierState() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["MouseEvent"].prototype, "MouseEvent", "getModifierState", arguments);
    }
  }.getModifierState
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["MouseEvent"].prototype, "initMouseEvent", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    initMouseEvent() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["MouseEvent"].prototype, "MouseEvent", "initMouseEvent", arguments);
    }
  }.initMouseEvent
});