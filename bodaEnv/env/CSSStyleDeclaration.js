// CSSStyleDeclaration对象

bodaEnv.memory.globlProtoObj["CSSStyleDeclaration"] = function CSSStyleDeclaration() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('CSSStyleDeclaration 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["CSSStyleDeclaration"], "CSSStyleDeclaration");
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["CSSStyleDeclaration"].prototype, "cssText", {
  configurable: true,
  enumerable: true,
  get: {
    cssText() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["CSSStyleDeclaration"].prototype, "CSSStyleDeclaration", "cssText_get", arguments);
    }
  }.cssText,
  set: {
    cssText() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["CSSStyleDeclaration"].prototype, "CSSStyleDeclaration", "cssText_set", arguments);
    }
  }.cssText
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["CSSStyleDeclaration"].prototype, "length", {
  configurable: true,
  enumerable: true,
  get: {
    length() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["CSSStyleDeclaration"].prototype, "CSSStyleDeclaration", "length_get", arguments);
    }
  }.length,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["CSSStyleDeclaration"].prototype, "parentRule", {
  configurable: true,
  enumerable: true,
  get: {
    parentRule() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["CSSStyleDeclaration"].prototype, "CSSStyleDeclaration", "parentRule_get", arguments);
    }
  }.parentRule,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["CSSStyleDeclaration"].prototype, "cssFloat", {
  configurable: true,
  enumerable: true,
  get: {
    cssFloat() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["CSSStyleDeclaration"].prototype, "CSSStyleDeclaration", "cssFloat_get", arguments);
    }
  }.cssFloat,
  set: {
    cssFloat() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["CSSStyleDeclaration"].prototype, "CSSStyleDeclaration", "cssFloat_set", arguments);
    }
  }.cssFloat
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["CSSStyleDeclaration"].prototype, "getPropertyPriority", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    getPropertyPriority() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["CSSStyleDeclaration"].prototype, "CSSStyleDeclaration", "getPropertyPriority", arguments);
    }
  }.getPropertyPriority
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["CSSStyleDeclaration"].prototype, "getPropertyValue", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    getPropertyValue() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["CSSStyleDeclaration"].prototype, "CSSStyleDeclaration", "getPropertyValue", arguments);
    }
  }.getPropertyValue
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["CSSStyleDeclaration"].prototype, "item", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    item() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["CSSStyleDeclaration"].prototype, "CSSStyleDeclaration", "item", arguments);
    }
  }.item
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["CSSStyleDeclaration"].prototype, "removeProperty", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    removeProperty() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["CSSStyleDeclaration"].prototype, "CSSStyleDeclaration", "removeProperty", arguments);
    }
  }.removeProperty
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["CSSStyleDeclaration"].prototype, "setProperty", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    setProperty() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["CSSStyleDeclaration"].prototype, "CSSStyleDeclaration", "setProperty", arguments);
    }
  }.setProperty
});


// CSSStyleDeclaration3  用来处理不处于节点内的标签
// CSSStyleDeclaration2  用来实现处于dom节点内的标签
bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'] = new bodaEnv.memory.globlProtoObj["CSSStyleDeclaration"]('bobo');
bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'] = new bodaEnv.memory.globlProtoObj["CSSStyleDeclaration"]('bobo');

bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], 0, {"value":"accent-color","writable":false,"enumerable":true,"configurable":true});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], 1, {"value":"align-content","writable":false,"enumerable":true,"configurable":true});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], 2, {"value":"align-items","writable":false,"enumerable":true,"configurable":true});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], 3, {"value":"align-self","writable":false,"enumerable":true,"configurable":true});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], 4, {"value":"alignment-baseline","writable":false,"enumerable":true,"configurable":true});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], 5, {"value":"animation-composition","writable":false,"enumerable":true,"configurable":true});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], 6, {"value":"animation-delay","writable":false,"enumerable":true,"configurable":true});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], 7, {"value":"animation-direction","writable":false,"enumerable":true,"configurable":true});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], 8, {"value":"animation-duration","writable":false,"enumerable":true,"configurable":true});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], 9, {"value":"animation-fill-mode","writable":false,"enumerable":true,"configurable":true});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], 10, {"value":"animation-iteration-count","writable":false,"enumerable":true,"configurable":true});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], 11, {"value":"animation-name","writable":false,"enumerable":true,"configurable":true});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], 12, {"value":"animation-play-state","writable":false,"enumerable":true,"configurable":true});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], 13, {"value":"animation-range-end","writable":false,"enumerable":true,"configurable":true});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], 14, {"value":"animation-range-start","writable":false,"enumerable":true,"configurable":true});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], 15, {"value":"animation-timeline","writable":false,"enumerable":true,"configurable":true});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], 16, {"value":"animation-timing-function","writable":false,"enumerable":true,"configurable":true});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], 17, {"value":"app-region","writable":false,"enumerable":true,"configurable":true});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], 18, {"value":"appearance","writable":false,"enumerable":true,"configurable":true});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], 19, {"value":"backdrop-filter","writable":false,"enumerable":true,"configurable":true});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], 20, {"value":"backface-visibility","writable":false,"enumerable":true,"configurable":true});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], 21, {"value":"background-attachment","writable":false,"enumerable":true,"configurable":true});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], 22, {"value":"background-blend-mode","writable":false,"enumerable":true,"configurable":true});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], 23, {"value":"background-clip","writable":false,"enumerable":true,"configurable":true});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], 24, {"value":"background-color","writable":false,"enumerable":true,"configurable":true});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], 25, {"value":"background-image","writable":false,"enumerable":true,"configurable":true});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], 26, {"value":"background-origin","writable":false,"enumerable":true,"configurable":true});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], 27, {"value":"background-position","writable":false,"enumerable":true,"configurable":true});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], 28, {"value":"background-repeat","writable":false,"enumerable":true,"configurable":true});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], 29, {"value":"background-size","writable":false,"enumerable":true,"configurable":true});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], 30, {"value":"baseline-shift","writable":false,"enumerable":true,"configurable":true});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], 31, {"value":"baseline-source","writable":false,"enumerable":true,"configurable":true});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], 32, {"value":"block-size","writable":false,"enumerable":true,"configurable":true});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], 33, {"value":"border-block-end-color","writable":false,"enumerable":true,"configurable":true});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], 34, {"value":"border-block-end-style","writable":false,"enumerable":true,"configurable":true});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], 35, {"value":"border-block-end-width","writable":false,"enumerable":true,"configurable":true});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], 36, {"value":"border-block-start-color","writable":false,"enumerable":true,"configurable":true});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], 37, {"value":"border-block-start-style","writable":false,"enumerable":true,"configurable":true});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], 38, {"value":"border-block-start-width","writable":false,"enumerable":true,"configurable":true});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], 39, {"value":"border-bottom-color","writable":false,"enumerable":true,"configurable":true});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], 40, {"value":"border-bottom-left-radius","writable":false,"enumerable":true,"configurable":true});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], 41, {"value":"border-bottom-right-radius","writable":false,"enumerable":true,"configurable":true});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], 42, {"value":"border-bottom-style","writable":false,"enumerable":true,"configurable":true});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], 43, {"value":"border-bottom-width","writable":false,"enumerable":true,"configurable":true});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], 44, {"value":"border-collapse","writable":false,"enumerable":true,"configurable":true});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], 45, {"value":"border-end-end-radius","writable":false,"enumerable":true,"configurable":true});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], 46, {"value":"border-end-start-radius","writable":false,"enumerable":true,"configurable":true});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], 47, {"value":"border-image-outset","writable":false,"enumerable":true,"configurable":true});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], 48, {"value":"border-image-repeat","writable":false,"enumerable":true,"configurable":true});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], 49, {"value":"border-image-slice","writable":false,"enumerable":true,"configurable":true});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], 50, {"value":"border-image-source","writable":false,"enumerable":true,"configurable":true});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], 51, {"value":"border-image-width","writable":false,"enumerable":true,"configurable":true});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], 52, {"value":"border-inline-end-color","writable":false,"enumerable":true,"configurable":true});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], 53, {"value":"border-inline-end-style","writable":false,"enumerable":true,"configurable":true});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], 54, {"value":"border-inline-end-width","writable":false,"enumerable":true,"configurable":true});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], 55, {"value":"border-inline-start-color","writable":false,"enumerable":true,"configurable":true});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], 56, {"value":"border-inline-start-style","writable":false,"enumerable":true,"configurable":true});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], 57, {"value":"border-inline-start-width","writable":false,"enumerable":true,"configurable":true});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], 58, {"value":"border-left-color","writable":false,"enumerable":true,"configurable":true});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], 59, {"value":"border-left-style","writable":false,"enumerable":true,"configurable":true});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], 60, {"value":"border-left-width","writable":false,"enumerable":true,"configurable":true});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], 61, {"value":"border-right-color","writable":false,"enumerable":true,"configurable":true});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], 62, {"value":"border-right-style","writable":false,"enumerable":true,"configurable":true});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], 63, {"value":"border-right-width","writable":false,"enumerable":true,"configurable":true});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], 64, {"value":"border-start-end-radius","writable":false,"enumerable":true,"configurable":true});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], 65, {"value":"border-start-start-radius","writable":false,"enumerable":true,"configurable":true});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], 66, {"value":"border-top-color","writable":false,"enumerable":true,"configurable":true});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], 67, {"value":"border-top-left-radius","writable":false,"enumerable":true,"configurable":true});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], 68, {"value":"border-top-right-radius","writable":false,"enumerable":true,"configurable":true});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], 69, {"value":"border-top-style","writable":false,"enumerable":true,"configurable":true});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], 70, {"value":"border-top-width","writable":false,"enumerable":true,"configurable":true});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], 71, {"value":"bottom","writable":false,"enumerable":true,"configurable":true});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], 72, {"value":"box-shadow","writable":false,"enumerable":true,"configurable":true});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], 73, {"value":"box-sizing","writable":false,"enumerable":true,"configurable":true});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], 74, {"value":"break-after","writable":false,"enumerable":true,"configurable":true});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], 75, {"value":"break-before","writable":false,"enumerable":true,"configurable":true});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], 76, {"value":"break-inside","writable":false,"enumerable":true,"configurable":true});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], 77, {"value":"buffered-rendering","writable":false,"enumerable":true,"configurable":true});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], 78, {"value":"caption-side","writable":false,"enumerable":true,"configurable":true});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], 79, {"value":"caret-color","writable":false,"enumerable":true,"configurable":true});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], 80, {"value":"clear","writable":false,"enumerable":true,"configurable":true});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], 81, {"value":"clip","writable":false,"enumerable":true,"configurable":true});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], 82, {"value":"clip-path","writable":false,"enumerable":true,"configurable":true});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], 83, {"value":"clip-rule","writable":false,"enumerable":true,"configurable":true});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], 84, {"value":"color","writable":false,"enumerable":true,"configurable":true});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], 85, {"value":"color-interpolation","writable":false,"enumerable":true,"configurable":true});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], 86, {"value":"color-interpolation-filters","writable":false,"enumerable":true,"configurable":true});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], 87, {"value":"color-rendering","writable":false,"enumerable":true,"configurable":true});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], 88, {"value":"column-count","writable":false,"enumerable":true,"configurable":true});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], 89, {"value":"column-gap","writable":false,"enumerable":true,"configurable":true});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], 90, {"value":"column-rule-color","writable":false,"enumerable":true,"configurable":true});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], 91, {"value":"column-rule-style","writable":false,"enumerable":true,"configurable":true});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], 92, {"value":"column-rule-width","writable":false,"enumerable":true,"configurable":true});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], 93, {"value":"column-span","writable":false,"enumerable":true,"configurable":true});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], 94, {"value":"column-width","writable":false,"enumerable":true,"configurable":true});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], 95, {"value":"contain-intrinsic-block-size","writable":false,"enumerable":true,"configurable":true});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], 96, {"value":"contain-intrinsic-height","writable":false,"enumerable":true,"configurable":true});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], 97, {"value":"contain-intrinsic-inline-size","writable":false,"enumerable":true,"configurable":true});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], 98, {"value":"contain-intrinsic-size","writable":false,"enumerable":true,"configurable":true});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], 99, {"value":"contain-intrinsic-width","writable":false,"enumerable":true,"configurable":true});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], 100, {"value":"container-name","writable":false,"enumerable":true,"configurable":true});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], 101, {"value":"container-type","writable":false,"enumerable":true,"configurable":true});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], 102, {"value":"content","writable":false,"enumerable":true,"configurable":true});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], 103, {"value":"cursor","writable":false,"enumerable":true,"configurable":true});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], 104, {"value":"cx","writable":false,"enumerable":true,"configurable":true});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], 105, {"value":"cy","writable":false,"enumerable":true,"configurable":true});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], 106, {"value":"d","writable":false,"enumerable":true,"configurable":true});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], 107, {"value":"direction","writable":false,"enumerable":true,"configurable":true});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], 108, {"value":"display","writable":false,"enumerable":true,"configurable":true});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], 109, {"value":"dominant-baseline","writable":false,"enumerable":true,"configurable":true});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], 110, {"value":"empty-cells","writable":false,"enumerable":true,"configurable":true});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], 111, {"value":"fill","writable":false,"enumerable":true,"configurable":true});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], 112, {"value":"fill-opacity","writable":false,"enumerable":true,"configurable":true});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], 113, {"value":"fill-rule","writable":false,"enumerable":true,"configurable":true});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], 114, {"value":"filter","writable":false,"enumerable":true,"configurable":true});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], 115, {"value":"flex-basis","writable":false,"enumerable":true,"configurable":true});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], 116, {"value":"flex-direction","writable":false,"enumerable":true,"configurable":true});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], 117, {"value":"flex-grow","writable":false,"enumerable":true,"configurable":true});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], 118, {"value":"flex-shrink","writable":false,"enumerable":true,"configurable":true});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], 119, {"value":"flex-wrap","writable":false,"enumerable":true,"configurable":true});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], 120, {"value":"float","writable":false,"enumerable":true,"configurable":true});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], 121, {"value":"flood-color","writable":false,"enumerable":true,"configurable":true});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], 122, {"value":"flood-opacity","writable":false,"enumerable":true,"configurable":true});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], 123, {"value":"font-family","writable":false,"enumerable":true,"configurable":true});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], 124, {"value":"font-kerning","writable":false,"enumerable":true,"configurable":true});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], 125, {"value":"font-optical-sizing","writable":false,"enumerable":true,"configurable":true});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], 126, {"value":"font-palette","writable":false,"enumerable":true,"configurable":true});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], 127, {"value":"font-size","writable":false,"enumerable":true,"configurable":true});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], 128, {"value":"font-stretch","writable":false,"enumerable":true,"configurable":true});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], 129, {"value":"font-style","writable":false,"enumerable":true,"configurable":true});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], 130, {"value":"font-synthesis-small-caps","writable":false,"enumerable":true,"configurable":true});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], 131, {"value":"font-synthesis-style","writable":false,"enumerable":true,"configurable":true});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], 132, {"value":"font-synthesis-weight","writable":false,"enumerable":true,"configurable":true});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], 133, {"value":"font-variant","writable":false,"enumerable":true,"configurable":true});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], 134, {"value":"font-variant-alternates","writable":false,"enumerable":true,"configurable":true});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], 135, {"value":"font-variant-caps","writable":false,"enumerable":true,"configurable":true});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], 136, {"value":"font-variant-east-asian","writable":false,"enumerable":true,"configurable":true});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], 137, {"value":"font-variant-ligatures","writable":false,"enumerable":true,"configurable":true});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], 138, {"value":"font-variant-numeric","writable":false,"enumerable":true,"configurable":true});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], 139, {"value":"font-variant-position","writable":false,"enumerable":true,"configurable":true});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], 140, {"value":"font-weight","writable":false,"enumerable":true,"configurable":true});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], 141, {"value":"grid-auto-columns","writable":false,"enumerable":true,"configurable":true});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], 142, {"value":"grid-auto-flow","writable":false,"enumerable":true,"configurable":true});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], 143, {"value":"grid-auto-rows","writable":false,"enumerable":true,"configurable":true});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], 144, {"value":"grid-column-end","writable":false,"enumerable":true,"configurable":true});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], 145, {"value":"grid-column-start","writable":false,"enumerable":true,"configurable":true});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], 146, {"value":"grid-row-end","writable":false,"enumerable":true,"configurable":true});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], 147, {"value":"grid-row-start","writable":false,"enumerable":true,"configurable":true});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], 148, {"value":"grid-template-areas","writable":false,"enumerable":true,"configurable":true});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], 149, {"value":"grid-template-columns","writable":false,"enumerable":true,"configurable":true});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], 150, {"value":"grid-template-rows","writable":false,"enumerable":true,"configurable":true});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], 151, {"value":"height","writable":false,"enumerable":true,"configurable":true});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], 152, {"value":"hyphenate-character","writable":false,"enumerable":true,"configurable":true});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], 153, {"value":"hyphenate-limit-chars","writable":false,"enumerable":true,"configurable":true});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], 154, {"value":"hyphens","writable":false,"enumerable":true,"configurable":true});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], 155, {"value":"image-orientation","writable":false,"enumerable":true,"configurable":true});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], 156, {"value":"image-rendering","writable":false,"enumerable":true,"configurable":true});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], 157, {"value":"initial-letter","writable":false,"enumerable":true,"configurable":true});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], 158, {"value":"inline-size","writable":false,"enumerable":true,"configurable":true});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], 159, {"value":"inset-block-end","writable":false,"enumerable":true,"configurable":true});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], 160, {"value":"inset-block-start","writable":false,"enumerable":true,"configurable":true});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], 161, {"value":"inset-inline-end","writable":false,"enumerable":true,"configurable":true});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], 162, {"value":"inset-inline-start","writable":false,"enumerable":true,"configurable":true});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], 163, {"value":"isolation","writable":false,"enumerable":true,"configurable":true});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], 164, {"value":"justify-content","writable":false,"enumerable":true,"configurable":true});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], 165, {"value":"justify-items","writable":false,"enumerable":true,"configurable":true});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], 166, {"value":"justify-self","writable":false,"enumerable":true,"configurable":true});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], 167, {"value":"left","writable":false,"enumerable":true,"configurable":true});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], 168, {"value":"letter-spacing","writable":false,"enumerable":true,"configurable":true});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], 169, {"value":"lighting-color","writable":false,"enumerable":true,"configurable":true});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], 170, {"value":"line-break","writable":false,"enumerable":true,"configurable":true});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], 171, {"value":"line-height","writable":false,"enumerable":true,"configurable":true});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], 172, {"value":"list-style-image","writable":false,"enumerable":true,"configurable":true});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], 173, {"value":"list-style-position","writable":false,"enumerable":true,"configurable":true});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], 174, {"value":"list-style-type","writable":false,"enumerable":true,"configurable":true});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], 175, {"value":"margin-block-end","writable":false,"enumerable":true,"configurable":true});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], 176, {"value":"margin-block-start","writable":false,"enumerable":true,"configurable":true});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], 177, {"value":"margin-bottom","writable":false,"enumerable":true,"configurable":true});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], 178, {"value":"margin-inline-end","writable":false,"enumerable":true,"configurable":true});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], 179, {"value":"margin-inline-start","writable":false,"enumerable":true,"configurable":true});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], 180, {"value":"margin-left","writable":false,"enumerable":true,"configurable":true});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], 181, {"value":"margin-right","writable":false,"enumerable":true,"configurable":true});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], 182, {"value":"margin-top","writable":false,"enumerable":true,"configurable":true});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], 183, {"value":"marker-end","writable":false,"enumerable":true,"configurable":true});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], 184, {"value":"marker-mid","writable":false,"enumerable":true,"configurable":true});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], 185, {"value":"marker-start","writable":false,"enumerable":true,"configurable":true});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], 186, {"value":"mask-clip","writable":false,"enumerable":true,"configurable":true});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], 187, {"value":"mask-composite","writable":false,"enumerable":true,"configurable":true});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], 188, {"value":"mask-image","writable":false,"enumerable":true,"configurable":true});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], 189, {"value":"mask-mode","writable":false,"enumerable":true,"configurable":true});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], 190, {"value":"mask-origin","writable":false,"enumerable":true,"configurable":true});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], 191, {"value":"mask-position","writable":false,"enumerable":true,"configurable":true});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], 192, {"value":"mask-repeat","writable":false,"enumerable":true,"configurable":true});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], 193, {"value":"mask-size","writable":false,"enumerable":true,"configurable":true});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], 194, {"value":"mask-type","writable":false,"enumerable":true,"configurable":true});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], 195, {"value":"math-depth","writable":false,"enumerable":true,"configurable":true});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], 196, {"value":"math-shift","writable":false,"enumerable":true,"configurable":true});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], 197, {"value":"math-style","writable":false,"enumerable":true,"configurable":true});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], 198, {"value":"max-block-size","writable":false,"enumerable":true,"configurable":true});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], 199, {"value":"max-height","writable":false,"enumerable":true,"configurable":true});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], 200, {"value":"max-inline-size","writable":false,"enumerable":true,"configurable":true});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], 201, {"value":"max-width","writable":false,"enumerable":true,"configurable":true});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], 202, {"value":"min-block-size","writable":false,"enumerable":true,"configurable":true});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], 203, {"value":"min-height","writable":false,"enumerable":true,"configurable":true});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], 204, {"value":"min-inline-size","writable":false,"enumerable":true,"configurable":true});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], 205, {"value":"min-width","writable":false,"enumerable":true,"configurable":true});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], 206, {"value":"mix-blend-mode","writable":false,"enumerable":true,"configurable":true});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], 207, {"value":"object-fit","writable":false,"enumerable":true,"configurable":true});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], 208, {"value":"object-position","writable":false,"enumerable":true,"configurable":true});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], 209, {"value":"object-view-box","writable":false,"enumerable":true,"configurable":true});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], 210, {"value":"offset-anchor","writable":false,"enumerable":true,"configurable":true});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], 211, {"value":"offset-distance","writable":false,"enumerable":true,"configurable":true});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], 212, {"value":"offset-path","writable":false,"enumerable":true,"configurable":true});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], 213, {"value":"offset-position","writable":false,"enumerable":true,"configurable":true});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], 214, {"value":"offset-rotate","writable":false,"enumerable":true,"configurable":true});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], 215, {"value":"opacity","writable":false,"enumerable":true,"configurable":true});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], 216, {"value":"order","writable":false,"enumerable":true,"configurable":true});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], 217, {"value":"orphans","writable":false,"enumerable":true,"configurable":true});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], 218, {"value":"outline-color","writable":false,"enumerable":true,"configurable":true});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], 219, {"value":"outline-offset","writable":false,"enumerable":true,"configurable":true});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], 220, {"value":"outline-style","writable":false,"enumerable":true,"configurable":true});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], 221, {"value":"outline-width","writable":false,"enumerable":true,"configurable":true});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], 222, {"value":"overflow-anchor","writable":false,"enumerable":true,"configurable":true});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], 223, {"value":"overflow-clip-margin","writable":false,"enumerable":true,"configurable":true});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], 224, {"value":"overflow-wrap","writable":false,"enumerable":true,"configurable":true});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], 225, {"value":"overflow-x","writable":false,"enumerable":true,"configurable":true});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], 226, {"value":"overflow-y","writable":false,"enumerable":true,"configurable":true});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], 227, {"value":"overlay","writable":false,"enumerable":true,"configurable":true});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], 228, {"value":"overscroll-behavior-block","writable":false,"enumerable":true,"configurable":true});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], 229, {"value":"overscroll-behavior-inline","writable":false,"enumerable":true,"configurable":true});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], 230, {"value":"padding-block-end","writable":false,"enumerable":true,"configurable":true});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], 231, {"value":"padding-block-start","writable":false,"enumerable":true,"configurable":true});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], 232, {"value":"padding-bottom","writable":false,"enumerable":true,"configurable":true});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], 233, {"value":"padding-inline-end","writable":false,"enumerable":true,"configurable":true});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], 234, {"value":"padding-inline-start","writable":false,"enumerable":true,"configurable":true});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], 235, {"value":"padding-left","writable":false,"enumerable":true,"configurable":true});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], 236, {"value":"padding-right","writable":false,"enumerable":true,"configurable":true});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], 237, {"value":"padding-top","writable":false,"enumerable":true,"configurable":true});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], 238, {"value":"paint-order","writable":false,"enumerable":true,"configurable":true});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], 239, {"value":"perspective","writable":false,"enumerable":true,"configurable":true});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], 240, {"value":"perspective-origin","writable":false,"enumerable":true,"configurable":true});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], 241, {"value":"pointer-events","writable":false,"enumerable":true,"configurable":true});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], 242, {"value":"position","writable":false,"enumerable":true,"configurable":true});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], 243, {"value":"r","writable":false,"enumerable":true,"configurable":true});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], 244, {"value":"resize","writable":false,"enumerable":true,"configurable":true});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], 245, {"value":"right","writable":false,"enumerable":true,"configurable":true});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], 246, {"value":"rotate","writable":false,"enumerable":true,"configurable":true});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], 247, {"value":"row-gap","writable":false,"enumerable":true,"configurable":true});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], 248, {"value":"ruby-position","writable":false,"enumerable":true,"configurable":true});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], 249, {"value":"rx","writable":false,"enumerable":true,"configurable":true});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], 250, {"value":"ry","writable":false,"enumerable":true,"configurable":true});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], 251, {"value":"scale","writable":false,"enumerable":true,"configurable":true});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], 252, {"value":"scroll-behavior","writable":false,"enumerable":true,"configurable":true});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], 253, {"value":"scroll-margin-block-end","writable":false,"enumerable":true,"configurable":true});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], 254, {"value":"scroll-margin-block-start","writable":false,"enumerable":true,"configurable":true});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], 255, {"value":"scroll-margin-inline-end","writable":false,"enumerable":true,"configurable":true});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], 256, {"value":"scroll-margin-inline-start","writable":false,"enumerable":true,"configurable":true});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], 257, {"value":"scroll-padding-block-end","writable":false,"enumerable":true,"configurable":true});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], 258, {"value":"scroll-padding-block-start","writable":false,"enumerable":true,"configurable":true});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], 259, {"value":"scroll-padding-inline-end","writable":false,"enumerable":true,"configurable":true});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], 260, {"value":"scroll-padding-inline-start","writable":false,"enumerable":true,"configurable":true});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], 261, {"value":"scroll-timeline-axis","writable":false,"enumerable":true,"configurable":true});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], 262, {"value":"scroll-timeline-name","writable":false,"enumerable":true,"configurable":true});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], 263, {"value":"scrollbar-gutter","writable":false,"enumerable":true,"configurable":true});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], 264, {"value":"shape-image-threshold","writable":false,"enumerable":true,"configurable":true});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], 265, {"value":"shape-margin","writable":false,"enumerable":true,"configurable":true});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], 266, {"value":"shape-outside","writable":false,"enumerable":true,"configurable":true});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], 267, {"value":"shape-rendering","writable":false,"enumerable":true,"configurable":true});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], 268, {"value":"speak","writable":false,"enumerable":true,"configurable":true});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], 269, {"value":"stop-color","writable":false,"enumerable":true,"configurable":true});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], 270, {"value":"stop-opacity","writable":false,"enumerable":true,"configurable":true});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], 271, {"value":"stroke","writable":false,"enumerable":true,"configurable":true});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], 272, {"value":"stroke-dasharray","writable":false,"enumerable":true,"configurable":true});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], 273, {"value":"stroke-dashoffset","writable":false,"enumerable":true,"configurable":true});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], 274, {"value":"stroke-linecap","writable":false,"enumerable":true,"configurable":true});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], 275, {"value":"stroke-linejoin","writable":false,"enumerable":true,"configurable":true});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], 276, {"value":"stroke-miterlimit","writable":false,"enumerable":true,"configurable":true});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], 277, {"value":"stroke-opacity","writable":false,"enumerable":true,"configurable":true});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], 278, {"value":"stroke-width","writable":false,"enumerable":true,"configurable":true});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], 279, {"value":"tab-size","writable":false,"enumerable":true,"configurable":true});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], 280, {"value":"table-layout","writable":false,"enumerable":true,"configurable":true});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], 281, {"value":"text-align","writable":false,"enumerable":true,"configurable":true});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], 282, {"value":"text-align-last","writable":false,"enumerable":true,"configurable":true});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], 283, {"value":"text-anchor","writable":false,"enumerable":true,"configurable":true});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], 284, {"value":"text-decoration","writable":false,"enumerable":true,"configurable":true});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], 285, {"value":"text-decoration-color","writable":false,"enumerable":true,"configurable":true});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], 286, {"value":"text-decoration-line","writable":false,"enumerable":true,"configurable":true});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], 287, {"value":"text-decoration-skip-ink","writable":false,"enumerable":true,"configurable":true});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], 288, {"value":"text-decoration-style","writable":false,"enumerable":true,"configurable":true});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], 289, {"value":"text-emphasis-color","writable":false,"enumerable":true,"configurable":true});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], 290, {"value":"text-emphasis-position","writable":false,"enumerable":true,"configurable":true});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], 291, {"value":"text-emphasis-style","writable":false,"enumerable":true,"configurable":true});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], 292, {"value":"text-indent","writable":false,"enumerable":true,"configurable":true});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], 293, {"value":"text-overflow","writable":false,"enumerable":true,"configurable":true});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], 294, {"value":"text-rendering","writable":false,"enumerable":true,"configurable":true});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], 295, {"value":"text-shadow","writable":false,"enumerable":true,"configurable":true});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], 296, {"value":"text-size-adjust","writable":false,"enumerable":true,"configurable":true});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], 297, {"value":"text-transform","writable":false,"enumerable":true,"configurable":true});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], 298, {"value":"text-underline-position","writable":false,"enumerable":true,"configurable":true});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], 299, {"value":"text-wrap","writable":false,"enumerable":true,"configurable":true});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], 300, {"value":"timeline-scope","writable":false,"enumerable":true,"configurable":true});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], 301, {"value":"top","writable":false,"enumerable":true,"configurable":true});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], 302, {"value":"touch-action","writable":false,"enumerable":true,"configurable":true});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], 303, {"value":"transform","writable":false,"enumerable":true,"configurable":true});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], 304, {"value":"transform-origin","writable":false,"enumerable":true,"configurable":true});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], 305, {"value":"transform-style","writable":false,"enumerable":true,"configurable":true});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], 306, {"value":"transition-behavior","writable":false,"enumerable":true,"configurable":true});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], 307, {"value":"transition-delay","writable":false,"enumerable":true,"configurable":true});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], 308, {"value":"transition-duration","writable":false,"enumerable":true,"configurable":true});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], 309, {"value":"transition-property","writable":false,"enumerable":true,"configurable":true});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], 310, {"value":"transition-timing-function","writable":false,"enumerable":true,"configurable":true});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], 311, {"value":"translate","writable":false,"enumerable":true,"configurable":true});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], 312, {"value":"unicode-bidi","writable":false,"enumerable":true,"configurable":true});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], 313, {"value":"user-select","writable":false,"enumerable":true,"configurable":true});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], 314, {"value":"vector-effect","writable":false,"enumerable":true,"configurable":true});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], 315, {"value":"vertical-align","writable":false,"enumerable":true,"configurable":true});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], 316, {"value":"view-timeline-axis","writable":false,"enumerable":true,"configurable":true});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], 317, {"value":"view-timeline-inset","writable":false,"enumerable":true,"configurable":true});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], 318, {"value":"view-timeline-name","writable":false,"enumerable":true,"configurable":true});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], 319, {"value":"view-transition-name","writable":false,"enumerable":true,"configurable":true});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], 320, {"value":"visibility","writable":false,"enumerable":true,"configurable":true});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], 321, {"value":"white-space-collapse","writable":false,"enumerable":true,"configurable":true});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], 322, {"value":"widows","writable":false,"enumerable":true,"configurable":true});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], 323, {"value":"width","writable":false,"enumerable":true,"configurable":true});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], 324, {"value":"will-change","writable":false,"enumerable":true,"configurable":true});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], 325, {"value":"word-break","writable":false,"enumerable":true,"configurable":true});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], 326, {"value":"word-spacing","writable":false,"enumerable":true,"configurable":true});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], 327, {"value":"writing-mode","writable":false,"enumerable":true,"configurable":true});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], 328, {"value":"x","writable":false,"enumerable":true,"configurable":true});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], 329, {"value":"y","writable":false,"enumerable":true,"configurable":true});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], 330, {"value":"z-index","writable":false,"enumerable":true,"configurable":true});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], 331, {"value":"zoom","writable":false,"enumerable":true,"configurable":true});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], 332, {"value":"-webkit-border-horizontal-spacing","writable":false,"enumerable":true,"configurable":true});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], 333, {"value":"-webkit-border-image","writable":false,"enumerable":true,"configurable":true});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], 334, {"value":"-webkit-border-vertical-spacing","writable":false,"enumerable":true,"configurable":true});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], 335, {"value":"-webkit-box-align","writable":false,"enumerable":true,"configurable":true});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], 336, {"value":"-webkit-box-decoration-break","writable":false,"enumerable":true,"configurable":true});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], 337, {"value":"-webkit-box-direction","writable":false,"enumerable":true,"configurable":true});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], 338, {"value":"-webkit-box-flex","writable":false,"enumerable":true,"configurable":true});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], 339, {"value":"-webkit-box-ordinal-group","writable":false,"enumerable":true,"configurable":true});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], 340, {"value":"-webkit-box-orient","writable":false,"enumerable":true,"configurable":true});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], 341, {"value":"-webkit-box-pack","writable":false,"enumerable":true,"configurable":true});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], 342, {"value":"-webkit-box-reflect","writable":false,"enumerable":true,"configurable":true});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], 343, {"value":"-webkit-font-smoothing","writable":false,"enumerable":true,"configurable":true});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], 344, {"value":"-webkit-line-break","writable":false,"enumerable":true,"configurable":true});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], 345, {"value":"-webkit-line-clamp","writable":false,"enumerable":true,"configurable":true});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], 346, {"value":"-webkit-locale","writable":false,"enumerable":true,"configurable":true});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], 347, {"value":"-webkit-mask-box-image","writable":false,"enumerable":true,"configurable":true});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], 348, {"value":"-webkit-mask-box-image-outset","writable":false,"enumerable":true,"configurable":true});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], 349, {"value":"-webkit-mask-box-image-repeat","writable":false,"enumerable":true,"configurable":true});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], 350, {"value":"-webkit-mask-box-image-slice","writable":false,"enumerable":true,"configurable":true});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], 351, {"value":"-webkit-mask-box-image-source","writable":false,"enumerable":true,"configurable":true});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], 352, {"value":"-webkit-mask-box-image-width","writable":false,"enumerable":true,"configurable":true});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], 353, {"value":"-webkit-print-color-adjust","writable":false,"enumerable":true,"configurable":true});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], 354, {"value":"-webkit-rtl-ordering","writable":false,"enumerable":true,"configurable":true});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], 355, {"value":"-webkit-tap-highlight-color","writable":false,"enumerable":true,"configurable":true});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], 356, {"value":"-webkit-text-combine","writable":false,"enumerable":true,"configurable":true});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], 357, {"value":"-webkit-text-decorations-in-effect","writable":false,"enumerable":true,"configurable":true});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], 358, {"value":"-webkit-text-fill-color","writable":false,"enumerable":true,"configurable":true});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], 359, {"value":"-webkit-text-orientation","writable":false,"enumerable":true,"configurable":true});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], 360, {"value":"-webkit-text-security","writable":false,"enumerable":true,"configurable":true});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], 361, {"value":"-webkit-text-stroke-color","writable":false,"enumerable":true,"configurable":true});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], 362, {"value":"-webkit-text-stroke-width","writable":false,"enumerable":true,"configurable":true});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], 363, {"value":"-webkit-user-drag","writable":false,"enumerable":true,"configurable":true});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], 364, {"value":"-webkit-user-modify","writable":false,"enumerable":true,"configurable":true});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], 365, {"value":"-webkit-writing-mode","writable":false,"enumerable":true,"configurable":true});


bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "accentColor", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "additiveSymbols", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "alignContent", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "alignItems", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "alignSelf", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "alignmentBaseline", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "all", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "animation", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "animationComposition", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "animationDelay", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "animationDirection", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "animationDuration", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "animationFillMode", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "animationIterationCount", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "animationName", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "animationPlayState", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "animationRange", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "animationRangeEnd", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "animationRangeStart", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "animationTimeline", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "animationTimingFunction", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "appRegion", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "appearance", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "ascentOverride", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "aspectRatio", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "backdropFilter", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "backfaceVisibility", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "background", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "backgroundAttachment", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "backgroundBlendMode", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "backgroundClip", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "backgroundColor", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "backgroundImage", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "backgroundOrigin", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "backgroundPosition", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "backgroundPositionX", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "backgroundPositionY", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "backgroundRepeat", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "backgroundRepeatX", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "backgroundRepeatY", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "backgroundSize", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "basePalette", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "baselineShift", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "baselineSource", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "blockSize", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "border", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "borderBlock", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "borderBlockColor", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "borderBlockEnd", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "borderBlockEndColor", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "borderBlockEndStyle", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "borderBlockEndWidth", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "borderBlockStart", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "borderBlockStartColor", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "borderBlockStartStyle", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "borderBlockStartWidth", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "borderBlockStyle", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "borderBlockWidth", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "borderBottom", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "borderBottomColor", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "borderBottomLeftRadius", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "borderBottomRightRadius", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "borderBottomStyle", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "borderBottomWidth", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "borderCollapse", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "borderColor", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "borderEndEndRadius", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "borderEndStartRadius", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "borderImage", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "borderImageOutset", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "borderImageRepeat", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "borderImageSlice", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "borderImageSource", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "borderImageWidth", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "borderInline", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "borderInlineColor", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "borderInlineEnd", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "borderInlineEndColor", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "borderInlineEndStyle", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "borderInlineEndWidth", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "borderInlineStart", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "borderInlineStartColor", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "borderInlineStartStyle", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "borderInlineStartWidth", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "borderInlineStyle", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "borderInlineWidth", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "borderLeft", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "borderLeftColor", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "borderLeftStyle", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "borderLeftWidth", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "borderRadius", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "borderRight", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "borderRightColor", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "borderRightStyle", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "borderRightWidth", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "borderSpacing", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "borderStartEndRadius", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "borderStartStartRadius", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "borderStyle", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "borderTop", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "borderTopColor", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "borderTopLeftRadius", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "borderTopRightRadius", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "borderTopStyle", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "borderTopWidth", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "borderWidth", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "bottom", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "boxShadow", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "boxSizing", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "breakAfter", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "breakBefore", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "breakInside", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "bufferedRendering", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "captionSide", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "caretColor", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "clear", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "clip", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "clipPath", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "clipRule", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "color", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "colorInterpolation", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "colorInterpolationFilters", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "colorRendering", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "colorScheme", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "columnCount", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "columnFill", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "columnGap", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "columnRule", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "columnRuleColor", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "columnRuleStyle", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "columnRuleWidth", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "columnSpan", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "columnWidth", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "columns", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "contain", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "containIntrinsicBlockSize", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "containIntrinsicHeight", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "containIntrinsicInlineSize", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "containIntrinsicSize", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "containIntrinsicWidth", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "container", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "containerName", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "containerType", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "content", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "contentVisibility", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "counterIncrement", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "counterReset", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "counterSet", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "cursor", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "cx", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "cy", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "d", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "descentOverride", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "direction", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "display", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "dominantBaseline", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "emptyCells", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "fallback", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "fill", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "fillOpacity", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "fillRule", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "filter", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "flex", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "flexBasis", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "flexDirection", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "flexFlow", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "flexGrow", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "flexShrink", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "flexWrap", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "float", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "floodColor", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "floodOpacity", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "font", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "fontDisplay", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "fontFamily", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "fontFeatureSettings", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "fontKerning", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "fontOpticalSizing", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "fontPalette", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "fontSize", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "fontStretch", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "fontStyle", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "fontSynthesis", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "fontSynthesisSmallCaps", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "fontSynthesisStyle", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "fontSynthesisWeight", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "fontVariant", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "fontVariantAlternates", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "fontVariantCaps", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "fontVariantEastAsian", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "fontVariantLigatures", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "fontVariantNumeric", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "fontVariationSettings", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "fontWeight", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "forcedColorAdjust", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "gap", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "grid", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "gridArea", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "gridAutoColumns", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "gridAutoFlow", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "gridAutoRows", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "gridColumn", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "gridColumnEnd", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "gridColumnGap", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "gridColumnStart", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "gridGap", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "gridRow", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "gridRowEnd", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "gridRowGap", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "gridRowStart", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "gridTemplate", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "gridTemplateAreas", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "gridTemplateColumns", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "gridTemplateRows", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "height", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "hyphenateCharacter", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "hyphenateLimitChars", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "hyphens", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "imageOrientation", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "imageRendering", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "inherits", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "initialLetter", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "initialValue", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "inlineSize", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "inset", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "insetBlock", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "insetBlockEnd", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "insetBlockStart", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "insetInline", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "insetInlineEnd", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "insetInlineStart", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "isolation", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "justifyContent", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "justifyItems", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "justifySelf", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "left", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "letterSpacing", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "lightingColor", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "lineBreak", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "lineGapOverride", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "lineHeight", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "listStyle", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "listStyleImage", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "listStylePosition", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "listStyleType", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "margin", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "marginBlock", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "marginBlockEnd", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "marginBlockStart", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "marginBottom", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "marginInline", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "marginInlineEnd", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "marginInlineStart", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "marginLeft", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "marginRight", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "marginTop", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "marker", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "markerEnd", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "markerMid", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "markerStart", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "mask", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "maskType", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "mathDepth", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "mathShift", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "mathStyle", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "maxBlockSize", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "maxHeight", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "maxInlineSize", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "maxWidth", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "minBlockSize", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "minHeight", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "minInlineSize", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "minWidth", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "mixBlendMode", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "negative", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "objectFit", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "objectPosition", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "objectViewBox", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "offset", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "offsetDistance", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "offsetPath", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "offsetRotate", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "opacity", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "order", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "orphans", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "outline", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "outlineColor", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "outlineOffset", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "outlineStyle", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "outlineWidth", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "overflow", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "overflowAnchor", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "overflowClipMargin", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "overflowWrap", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "overflowX", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "overflowY", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "overrideColors", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "overscrollBehavior", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "overscrollBehaviorBlock", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "overscrollBehaviorInline", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "overscrollBehaviorX", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "overscrollBehaviorY", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "pad", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "padding", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "paddingBlock", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "paddingBlockEnd", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "paddingBlockStart", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "paddingBottom", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "paddingInline", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "paddingInlineEnd", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "paddingInlineStart", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "paddingLeft", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "paddingRight", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "paddingTop", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "page", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "pageBreakAfter", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "pageBreakBefore", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "pageBreakInside", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "pageOrientation", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "paintOrder", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "perspective", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "perspectiveOrigin", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "placeContent", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "placeItems", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "placeSelf", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "pointerEvents", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "position", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "prefix", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "quotes", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "r", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "range", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "resize", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "right", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "rotate", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "rowGap", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "rubyPosition", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "rx", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "ry", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "scale", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "scrollBehavior", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "scrollMargin", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "scrollMarginBlock", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "scrollMarginBlockEnd", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "scrollMarginBlockStart", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "scrollMarginBottom", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "scrollMarginInline", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "scrollMarginInlineEnd", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "scrollMarginInlineStart", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "scrollMarginLeft", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "scrollMarginRight", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "scrollMarginTop", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "scrollPadding", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "scrollPaddingBlock", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "scrollPaddingBlockEnd", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "scrollPaddingBlockStart", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "scrollPaddingBottom", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "scrollPaddingInline", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "scrollPaddingInlineEnd", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "scrollPaddingInlineStart", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "scrollPaddingLeft", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "scrollPaddingRight", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "scrollPaddingTop", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "scrollSnapAlign", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "scrollSnapStop", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "scrollSnapType", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "scrollTimeline", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "scrollTimelineAxis", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "scrollTimelineName", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "scrollbarGutter", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "shapeImageThreshold", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "shapeMargin", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "shapeOutside", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "shapeRendering", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "size", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "sizeAdjust", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "speak", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "speakAs", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "src", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "stopColor", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "stopOpacity", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "stroke", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "strokeDasharray", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "strokeDashoffset", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "strokeLinecap", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "strokeLinejoin", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "strokeMiterlimit", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "strokeOpacity", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "strokeWidth", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "suffix", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "symbols", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "syntax", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "system", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "tabSize", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "tableLayout", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "textAlign", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "textAlignLast", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "textAnchor", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "textCombineUpright", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "textDecoration", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "textDecorationColor", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "textDecorationLine", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "textDecorationSkipInk", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "textDecorationStyle", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "textDecorationThickness", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "textEmphasis", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "textEmphasisColor", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "textEmphasisPosition", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "textEmphasisStyle", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "textIndent", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "textOrientation", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "textOverflow", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "textRendering", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "textShadow", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "textSizeAdjust", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "textTransform", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "textUnderlineOffset", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "textUnderlinePosition", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "textWrap", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "top", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "touchAction", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "transform", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "transformBox", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "transformOrigin", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "transformStyle", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "transition", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "transitionDelay", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "transitionDuration", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "transitionProperty", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "transitionTimingFunction", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "translate", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "unicodeBidi", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "unicodeRange", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "userSelect", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "vectorEffect", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "verticalAlign", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "viewTimeline", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "viewTimelineAxis", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "viewTimelineInset", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "viewTimelineName", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "viewTransitionName", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "visibility", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "webkitAlignContent", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "webkitAlignItems", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "webkitAlignSelf", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "webkitAnimation", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "webkitAnimationDelay", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "webkitAnimationDirection", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "webkitAnimationDuration", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "webkitAnimationFillMode", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "webkitAnimationIterationCount", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "webkitAnimationName", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "webkitAnimationPlayState", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "webkitAnimationTimingFunction", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "webkitAppRegion", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "webkitAppearance", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "webkitBackfaceVisibility", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "webkitBackgroundClip", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "webkitBackgroundOrigin", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "webkitBackgroundSize", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "webkitBorderAfter", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "webkitBorderAfterColor", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "webkitBorderAfterStyle", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "webkitBorderAfterWidth", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "webkitBorderBefore", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "webkitBorderBeforeColor", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "webkitBorderBeforeStyle", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "webkitBorderBeforeWidth", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "webkitBorderBottomLeftRadius", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "webkitBorderBottomRightRadius", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "webkitBorderEnd", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "webkitBorderEndColor", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "webkitBorderEndStyle", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "webkitBorderEndWidth", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "webkitBorderHorizontalSpacing", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "webkitBorderImage", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "webkitBorderRadius", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "webkitBorderStart", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "webkitBorderStartColor", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "webkitBorderStartStyle", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "webkitBorderStartWidth", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "webkitBorderTopLeftRadius", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "webkitBorderTopRightRadius", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "webkitBorderVerticalSpacing", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "webkitBoxAlign", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "webkitBoxDecorationBreak", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "webkitBoxDirection", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "webkitBoxFlex", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "webkitBoxOrdinalGroup", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "webkitBoxOrient", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "webkitBoxPack", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "webkitBoxReflect", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "webkitBoxShadow", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "webkitBoxSizing", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "webkitClipPath", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "webkitColumnBreakAfter", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "webkitColumnBreakBefore", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "webkitColumnBreakInside", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "webkitColumnCount", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "webkitColumnGap", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "webkitColumnRule", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "webkitColumnRuleColor", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "webkitColumnRuleStyle", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "webkitColumnRuleWidth", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "webkitColumnSpan", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "webkitColumnWidth", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "webkitColumns", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "webkitFilter", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "webkitFlex", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "webkitFlexBasis", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "webkitFlexDirection", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "webkitFlexFlow", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "webkitFlexGrow", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "webkitFlexShrink", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "webkitFlexWrap", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "webkitFontFeatureSettings", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "webkitFontSmoothing", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "webkitHighlight", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "webkitHyphenateCharacter", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "webkitJustifyContent", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "webkitLineBreak", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "webkitLineClamp", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "webkitLocale", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "webkitLogicalHeight", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "webkitLogicalWidth", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "webkitMarginAfter", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "webkitMarginBefore", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "webkitMarginEnd", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "webkitMarginStart", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "webkitMask", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "webkitMaskBoxImage", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "webkitMaskBoxImageOutset", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "webkitMaskBoxImageRepeat", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "webkitMaskBoxImageSlice", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "webkitMaskBoxImageSource", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "webkitMaskBoxImageWidth", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "webkitMaskClip", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "webkitMaskComposite", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "webkitMaskImage", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "webkitMaskOrigin", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "webkitMaskPosition", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "webkitMaskPositionX", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "webkitMaskPositionY", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "webkitMaskRepeat", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "webkitMaskRepeatX", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "webkitMaskRepeatY", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "webkitMaskSize", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "webkitMaxLogicalHeight", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "webkitMaxLogicalWidth", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "webkitMinLogicalHeight", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "webkitMinLogicalWidth", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "webkitOpacity", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "webkitOrder", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "webkitPaddingAfter", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "webkitPaddingBefore", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "webkitPaddingEnd", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "webkitPaddingStart", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "webkitPerspective", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "webkitPerspectiveOrigin", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "webkitPerspectiveOriginX", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "webkitPerspectiveOriginY", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "webkitPrintColorAdjust", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "webkitRtlOrdering", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "webkitRubyPosition", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "webkitShapeImageThreshold", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "webkitShapeMargin", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "webkitShapeOutside", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "webkitTapHighlightColor", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "webkitTextCombine", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "webkitTextDecorationsInEffect", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "webkitTextEmphasis", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "webkitTextEmphasisColor", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "webkitTextEmphasisPosition", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "webkitTextEmphasisStyle", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "webkitTextFillColor", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "webkitTextOrientation", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "webkitTextSecurity", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "webkitTextSizeAdjust", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "webkitTextStroke", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "webkitTextStrokeColor", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "webkitTextStrokeWidth", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "webkitTransform", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "webkitTransformOrigin", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "webkitTransformOriginX", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "webkitTransformOriginY", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "webkitTransformOriginZ", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "webkitTransformStyle", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "webkitTransition", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "webkitTransitionDelay", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "webkitTransitionDuration", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "webkitTransitionProperty", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "webkitTransitionTimingFunction", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "webkitUserDrag", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "webkitUserModify", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "webkitUserSelect", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "webkitWritingMode", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "whiteSpace", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "whiteSpaceCollapse", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "widows", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "width", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "willChange", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "wordBreak", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "wordSpacing", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "wordWrap", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "writingMode", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "x", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "y", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "zIndex", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "zoom", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'], "overscroll-behavior", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});





bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "accentColor", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "additiveSymbols", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "alignContent", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "alignItems", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "alignSelf", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "alignmentBaseline", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "all", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "animation", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "animationComposition", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "animationDelay", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "animationDirection", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "animationDuration", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "animationFillMode", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "animationIterationCount", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "animationName", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "animationPlayState", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "animationRange", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "animationRangeEnd", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "animationRangeStart", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "animationTimeline", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "animationTimingFunction", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "appRegion", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "appearance", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "ascentOverride", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "aspectRatio", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "backdropFilter", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "backfaceVisibility", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "background", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "backgroundAttachment", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "backgroundBlendMode", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "backgroundClip", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "backgroundColor", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "backgroundImage", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "backgroundOrigin", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "backgroundPosition", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "backgroundPositionX", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "backgroundPositionY", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "backgroundRepeat", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "backgroundRepeatX", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "backgroundRepeatY", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "backgroundSize", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "basePalette", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "baselineShift", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "baselineSource", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "blockSize", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "border", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "borderBlock", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "borderBlockColor", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "borderBlockEnd", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "borderBlockEndColor", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "borderBlockEndStyle", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "borderBlockEndWidth", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "borderBlockStart", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "borderBlockStartColor", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "borderBlockStartStyle", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "borderBlockStartWidth", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "borderBlockStyle", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "borderBlockWidth", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "borderBottom", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "borderBottomColor", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "borderBottomLeftRadius", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "borderBottomRightRadius", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "borderBottomStyle", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "borderBottomWidth", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "borderCollapse", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "borderColor", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "borderEndEndRadius", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "borderEndStartRadius", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "borderImage", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "borderImageOutset", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "borderImageRepeat", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "borderImageSlice", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "borderImageSource", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "borderImageWidth", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "borderInline", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "borderInlineColor", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "borderInlineEnd", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "borderInlineEndColor", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "borderInlineEndStyle", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "borderInlineEndWidth", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "borderInlineStart", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "borderInlineStartColor", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "borderInlineStartStyle", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "borderInlineStartWidth", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "borderInlineStyle", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "borderInlineWidth", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "borderLeft", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "borderLeftColor", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "borderLeftStyle", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "borderLeftWidth", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "borderRadius", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "borderRight", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "borderRightColor", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "borderRightStyle", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "borderRightWidth", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "borderSpacing", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "borderStartEndRadius", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "borderStartStartRadius", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "borderStyle", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "borderTop", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "borderTopColor", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "borderTopLeftRadius", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "borderTopRightRadius", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "borderTopStyle", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "borderTopWidth", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "borderWidth", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "bottom", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "boxShadow", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "boxSizing", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "breakAfter", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "breakBefore", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "breakInside", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "bufferedRendering", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "captionSide", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "caretColor", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "clear", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "clip", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "clipPath", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "clipRule", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "color", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "colorInterpolation", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "colorInterpolationFilters", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "colorRendering", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "colorScheme", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "columnCount", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "columnFill", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "columnGap", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "columnRule", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "columnRuleColor", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "columnRuleStyle", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "columnRuleWidth", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "columnSpan", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "columnWidth", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "columns", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "contain", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "containIntrinsicBlockSize", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "containIntrinsicHeight", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "containIntrinsicInlineSize", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "containIntrinsicSize", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "containIntrinsicWidth", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "container", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "containerName", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "containerType", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "content", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "contentVisibility", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "counterIncrement", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "counterReset", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "counterSet", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "cursor", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "cx", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "cy", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "d", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "descentOverride", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "direction", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "display", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "dominantBaseline", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "emptyCells", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "fallback", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "fill", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "fillOpacity", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "fillRule", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "filter", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "flex", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "flexBasis", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "flexDirection", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "flexFlow", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "flexGrow", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "flexShrink", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "flexWrap", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "float", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "floodColor", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "floodOpacity", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "font", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "fontDisplay", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "fontFamily", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "fontFeatureSettings", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "fontKerning", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "fontOpticalSizing", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "fontPalette", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "fontSize", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "fontStretch", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "fontStyle", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "fontSynthesis", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "fontSynthesisSmallCaps", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "fontSynthesisStyle", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "fontSynthesisWeight", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "fontVariant", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "fontVariantAlternates", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "fontVariantCaps", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "fontVariantEastAsian", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "fontVariantLigatures", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "fontVariantNumeric", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "fontVariationSettings", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "fontWeight", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "forcedColorAdjust", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "gap", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "grid", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "gridArea", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "gridAutoColumns", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "gridAutoFlow", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "gridAutoRows", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "gridColumn", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "gridColumnEnd", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "gridColumnGap", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "gridColumnStart", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "gridGap", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "gridRow", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "gridRowEnd", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "gridRowGap", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "gridRowStart", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "gridTemplate", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "gridTemplateAreas", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "gridTemplateColumns", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "gridTemplateRows", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "height", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "hyphenateCharacter", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "hyphenateLimitChars", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "hyphens", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "imageOrientation", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "imageRendering", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "inherits", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "initialLetter", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "initialValue", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "inlineSize", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "inset", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "insetBlock", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "insetBlockEnd", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "insetBlockStart", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "insetInline", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "insetInlineEnd", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "insetInlineStart", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "isolation", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "justifyContent", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "justifyItems", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "justifySelf", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "left", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "letterSpacing", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "lightingColor", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "lineBreak", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "lineGapOverride", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "lineHeight", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "listStyle", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "listStyleImage", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "listStylePosition", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "listStyleType", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "margin", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "marginBlock", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "marginBlockEnd", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "marginBlockStart", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "marginBottom", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "marginInline", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "marginInlineEnd", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "marginInlineStart", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "marginLeft", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "marginRight", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "marginTop", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "marker", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "markerEnd", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "markerMid", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "markerStart", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "mask", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "maskType", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "mathDepth", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "mathShift", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "mathStyle", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "maxBlockSize", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "maxHeight", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "maxInlineSize", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "maxWidth", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "minBlockSize", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "minHeight", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "minInlineSize", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "minWidth", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "mixBlendMode", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "negative", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "objectFit", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "objectPosition", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "objectViewBox", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "offset", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "offsetDistance", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "offsetPath", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "offsetRotate", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "opacity", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "order", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "orphans", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "outline", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "outlineColor", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "outlineOffset", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "outlineStyle", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "outlineWidth", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "overflow", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "overflowAnchor", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "overflowClipMargin", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "overflowWrap", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "overflowX", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "overflowY", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "overrideColors", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "overscrollBehavior", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "overscrollBehaviorBlock", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "overscrollBehaviorInline", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "overscrollBehaviorX", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "overscrollBehaviorY", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "pad", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "padding", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "paddingBlock", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "paddingBlockEnd", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "paddingBlockStart", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "paddingBottom", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "paddingInline", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "paddingInlineEnd", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "paddingInlineStart", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "paddingLeft", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "paddingRight", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "paddingTop", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "page", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "pageBreakAfter", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "pageBreakBefore", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "pageBreakInside", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "pageOrientation", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "paintOrder", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "perspective", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "perspectiveOrigin", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "placeContent", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "placeItems", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "placeSelf", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "pointerEvents", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "position", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "prefix", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "quotes", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "r", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "range", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "resize", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "right", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "rotate", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "rowGap", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "rubyPosition", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "rx", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "ry", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "scale", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "scrollBehavior", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "scrollMargin", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "scrollMarginBlock", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "scrollMarginBlockEnd", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "scrollMarginBlockStart", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "scrollMarginBottom", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "scrollMarginInline", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "scrollMarginInlineEnd", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "scrollMarginInlineStart", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "scrollMarginLeft", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "scrollMarginRight", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "scrollMarginTop", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "scrollPadding", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "scrollPaddingBlock", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "scrollPaddingBlockEnd", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "scrollPaddingBlockStart", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "scrollPaddingBottom", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "scrollPaddingInline", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "scrollPaddingInlineEnd", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "scrollPaddingInlineStart", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "scrollPaddingLeft", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "scrollPaddingRight", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "scrollPaddingTop", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "scrollSnapAlign", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "scrollSnapStop", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "scrollSnapType", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "scrollTimeline", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "scrollTimelineAxis", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "scrollTimelineName", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "scrollbarGutter", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "shapeImageThreshold", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "shapeMargin", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "shapeOutside", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "shapeRendering", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "size", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "sizeAdjust", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "speak", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "speakAs", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "src", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "stopColor", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "stopOpacity", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "stroke", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "strokeDasharray", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "strokeDashoffset", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "strokeLinecap", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "strokeLinejoin", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "strokeMiterlimit", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "strokeOpacity", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "strokeWidth", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "suffix", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "symbols", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "syntax", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "system", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "tabSize", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "tableLayout", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "textAlign", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "textAlignLast", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "textAnchor", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "textCombineUpright", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "textDecoration", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "textDecorationColor", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "textDecorationLine", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "textDecorationSkipInk", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "textDecorationStyle", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "textDecorationThickness", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "textEmphasis", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "textEmphasisColor", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "textEmphasisPosition", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "textEmphasisStyle", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "textIndent", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "textOrientation", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "textOverflow", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "textRendering", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "textShadow", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "textSizeAdjust", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "textTransform", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "textUnderlineOffset", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "textUnderlinePosition", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "textWrap", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "top", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "touchAction", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "transform", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "transformBox", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "transformOrigin", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "transformStyle", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "transition", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "transitionDelay", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "transitionDuration", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "transitionProperty", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "transitionTimingFunction", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "translate", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "unicodeBidi", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "unicodeRange", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "userSelect", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "vectorEffect", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "verticalAlign", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "viewTimeline", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "viewTimelineAxis", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "viewTimelineInset", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "viewTimelineName", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "viewTransitionName", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "visibility", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "webkitAlignContent", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "webkitAlignItems", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "webkitAlignSelf", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "webkitAnimation", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "webkitAnimationDelay", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "webkitAnimationDirection", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "webkitAnimationDuration", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "webkitAnimationFillMode", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "webkitAnimationIterationCount", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "webkitAnimationName", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "webkitAnimationPlayState", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "webkitAnimationTimingFunction", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "webkitAppRegion", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "webkitAppearance", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "webkitBackfaceVisibility", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "webkitBackgroundClip", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "webkitBackgroundOrigin", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "webkitBackgroundSize", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "webkitBorderAfter", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "webkitBorderAfterColor", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "webkitBorderAfterStyle", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "webkitBorderAfterWidth", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "webkitBorderBefore", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "webkitBorderBeforeColor", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "webkitBorderBeforeStyle", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "webkitBorderBeforeWidth", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "webkitBorderBottomLeftRadius", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "webkitBorderBottomRightRadius", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "webkitBorderEnd", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "webkitBorderEndColor", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "webkitBorderEndStyle", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "webkitBorderEndWidth", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "webkitBorderHorizontalSpacing", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "webkitBorderImage", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "webkitBorderRadius", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "webkitBorderStart", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "webkitBorderStartColor", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "webkitBorderStartStyle", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "webkitBorderStartWidth", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "webkitBorderTopLeftRadius", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "webkitBorderTopRightRadius", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "webkitBorderVerticalSpacing", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "webkitBoxAlign", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "webkitBoxDecorationBreak", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "webkitBoxDirection", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "webkitBoxFlex", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "webkitBoxOrdinalGroup", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "webkitBoxOrient", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "webkitBoxPack", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "webkitBoxReflect", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "webkitBoxShadow", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "webkitBoxSizing", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "webkitClipPath", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "webkitColumnBreakAfter", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "webkitColumnBreakBefore", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "webkitColumnBreakInside", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "webkitColumnCount", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "webkitColumnGap", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "webkitColumnRule", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "webkitColumnRuleColor", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "webkitColumnRuleStyle", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "webkitColumnRuleWidth", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "webkitColumnSpan", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "webkitColumnWidth", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "webkitColumns", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "webkitFilter", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "webkitFlex", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "webkitFlexBasis", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "webkitFlexDirection", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "webkitFlexFlow", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "webkitFlexGrow", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "webkitFlexShrink", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "webkitFlexWrap", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "webkitFontFeatureSettings", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "webkitFontSmoothing", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "webkitHighlight", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "webkitHyphenateCharacter", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "webkitJustifyContent", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "webkitLineBreak", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "webkitLineClamp", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "webkitLocale", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "webkitLogicalHeight", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "webkitLogicalWidth", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "webkitMarginAfter", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "webkitMarginBefore", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "webkitMarginEnd", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "webkitMarginStart", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "webkitMask", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "webkitMaskBoxImage", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "webkitMaskBoxImageOutset", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "webkitMaskBoxImageRepeat", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "webkitMaskBoxImageSlice", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "webkitMaskBoxImageSource", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "webkitMaskBoxImageWidth", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "webkitMaskClip", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "webkitMaskComposite", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "webkitMaskImage", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "webkitMaskOrigin", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "webkitMaskPosition", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "webkitMaskPositionX", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "webkitMaskPositionY", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "webkitMaskRepeat", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "webkitMaskRepeatX", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "webkitMaskRepeatY", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "webkitMaskSize", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "webkitMaxLogicalHeight", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "webkitMaxLogicalWidth", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "webkitMinLogicalHeight", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "webkitMinLogicalWidth", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "webkitOpacity", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "webkitOrder", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "webkitPaddingAfter", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "webkitPaddingBefore", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "webkitPaddingEnd", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "webkitPaddingStart", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "webkitPerspective", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "webkitPerspectiveOrigin", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "webkitPerspectiveOriginX", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "webkitPerspectiveOriginY", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "webkitPrintColorAdjust", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "webkitRtlOrdering", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "webkitRubyPosition", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "webkitShapeImageThreshold", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "webkitShapeMargin", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "webkitShapeOutside", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "webkitTapHighlightColor", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "webkitTextCombine", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "webkitTextDecorationsInEffect", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "webkitTextEmphasis", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "webkitTextEmphasisColor", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "webkitTextEmphasisPosition", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "webkitTextEmphasisStyle", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "webkitTextFillColor", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "webkitTextOrientation", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "webkitTextSecurity", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "webkitTextSizeAdjust", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "webkitTextStroke", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "webkitTextStrokeColor", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "webkitTextStrokeWidth", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "webkitTransform", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "webkitTransformOrigin", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "webkitTransformOriginX", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "webkitTransformOriginY", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "webkitTransformOriginZ", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "webkitTransformStyle", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "webkitTransition", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "webkitTransitionDelay", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "webkitTransitionDuration", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "webkitTransitionProperty", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "webkitTransitionTimingFunction", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "webkitUserDrag", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "webkitUserModify", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "webkitUserSelect", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "webkitWritingMode", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "whiteSpace", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "whiteSpaceCollapse", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "widows", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "width", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "willChange", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "wordBreak", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "wordSpacing", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "wordWrap", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "writingMode", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "x", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "y", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "zIndex", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "zoom", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'], "overscroll-behavior", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ""
});
