// PannerNode对象

bodaEnv.memory.globlProtoObj["PannerNode"] = function PannerNode() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('PannerNode 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["PannerNode"], "PannerNode");
bodaEnv.memory.globlProtoObj["PannerNode"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["AudioNode"].prototype;
bodaEnv.memory.globlProtoObj["PannerNode"].__proto__ = bodaEnv.memory.globlProtoObj["AudioNode"];
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["PannerNode"].prototype, "panningModel", {
  configurable: true,
  enumerable: true,
  get: {
    panningModel() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["PannerNode"].prototype, "PannerNode", "panningModel_get", arguments);
    }
  }.panningModel,
  set: {
    panningModel() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["PannerNode"].prototype, "PannerNode", "panningModel_set", arguments);
    }
  }.panningModel
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["PannerNode"].prototype, "positionX", {
  configurable: true,
  enumerable: true,
  get: {
    positionX() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["PannerNode"].prototype, "PannerNode", "positionX_get", arguments);
    }
  }.positionX,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["PannerNode"].prototype, "positionY", {
  configurable: true,
  enumerable: true,
  get: {
    positionY() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["PannerNode"].prototype, "PannerNode", "positionY_get", arguments);
    }
  }.positionY,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["PannerNode"].prototype, "positionZ", {
  configurable: true,
  enumerable: true,
  get: {
    positionZ() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["PannerNode"].prototype, "PannerNode", "positionZ_get", arguments);
    }
  }.positionZ,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["PannerNode"].prototype, "orientationX", {
  configurable: true,
  enumerable: true,
  get: {
    orientationX() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["PannerNode"].prototype, "PannerNode", "orientationX_get", arguments);
    }
  }.orientationX,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["PannerNode"].prototype, "orientationY", {
  configurable: true,
  enumerable: true,
  get: {
    orientationY() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["PannerNode"].prototype, "PannerNode", "orientationY_get", arguments);
    }
  }.orientationY,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["PannerNode"].prototype, "orientationZ", {
  configurable: true,
  enumerable: true,
  get: {
    orientationZ() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["PannerNode"].prototype, "PannerNode", "orientationZ_get", arguments);
    }
  }.orientationZ,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["PannerNode"].prototype, "distanceModel", {
  configurable: true,
  enumerable: true,
  get: {
    distanceModel() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["PannerNode"].prototype, "PannerNode", "distanceModel_get", arguments);
    }
  }.distanceModel,
  set: {
    distanceModel() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["PannerNode"].prototype, "PannerNode", "distanceModel_set", arguments);
    }
  }.distanceModel
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["PannerNode"].prototype, "refDistance", {
  configurable: true,
  enumerable: true,
  get: {
    refDistance() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["PannerNode"].prototype, "PannerNode", "refDistance_get", arguments);
    }
  }.refDistance,
  set: {
    refDistance() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["PannerNode"].prototype, "PannerNode", "refDistance_set", arguments);
    }
  }.refDistance
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["PannerNode"].prototype, "maxDistance", {
  configurable: true,
  enumerable: true,
  get: {
    maxDistance() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["PannerNode"].prototype, "PannerNode", "maxDistance_get", arguments);
    }
  }.maxDistance,
  set: {
    maxDistance() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["PannerNode"].prototype, "PannerNode", "maxDistance_set", arguments);
    }
  }.maxDistance
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["PannerNode"].prototype, "rolloffFactor", {
  configurable: true,
  enumerable: true,
  get: {
    rolloffFactor() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["PannerNode"].prototype, "PannerNode", "rolloffFactor_get", arguments);
    }
  }.rolloffFactor,
  set: {
    rolloffFactor() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["PannerNode"].prototype, "PannerNode", "rolloffFactor_set", arguments);
    }
  }.rolloffFactor
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["PannerNode"].prototype, "coneInnerAngle", {
  configurable: true,
  enumerable: true,
  get: {
    coneInnerAngle() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["PannerNode"].prototype, "PannerNode", "coneInnerAngle_get", arguments);
    }
  }.coneInnerAngle,
  set: {
    coneInnerAngle() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["PannerNode"].prototype, "PannerNode", "coneInnerAngle_set", arguments);
    }
  }.coneInnerAngle
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["PannerNode"].prototype, "coneOuterAngle", {
  configurable: true,
  enumerable: true,
  get: {
    coneOuterAngle() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["PannerNode"].prototype, "PannerNode", "coneOuterAngle_get", arguments);
    }
  }.coneOuterAngle,
  set: {
    coneOuterAngle() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["PannerNode"].prototype, "PannerNode", "coneOuterAngle_set", arguments);
    }
  }.coneOuterAngle
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["PannerNode"].prototype, "coneOuterGain", {
  configurable: true,
  enumerable: true,
  get: {
    coneOuterGain() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["PannerNode"].prototype, "PannerNode", "coneOuterGain_get", arguments);
    }
  }.coneOuterGain,
  set: {
    coneOuterGain() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["PannerNode"].prototype, "PannerNode", "coneOuterGain_set", arguments);
    }
  }.coneOuterGain
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["PannerNode"].prototype, "setOrientation", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    setOrientation() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["PannerNode"].prototype, "PannerNode", "setOrientation", arguments);
    }
  }.setOrientation
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["PannerNode"].prototype, "setPosition", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    setPosition() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["PannerNode"].prototype, "PannerNode", "setPosition", arguments);
    }
  }.setPosition
});