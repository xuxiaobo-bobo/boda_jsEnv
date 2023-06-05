// PannerNode对象

bodavm.memory.globalobj['PannerNode'] = function PannerNode() {
  console.log_copy('PannerNode 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof PannerNode)) {
    return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'PannerNode': 1 argument required, but only 0 present.");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['PannerNode'], "PannerNode");
bodavm.memory.globalobj['PannerNode'].prototype.__proto__ = bodavm.memory.globalobj['AudioNode'].prototype;
bodavm.memory.globalobj['PannerNode'].__proto__ = bodavm.memory.globalobj['AudioNode'];
bodavm.toolsFunc.defineProperty('PannerNode', "panningModel", {
  configurable: true,
  enumerable: true,
  get: function panningModel() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['PannerNode'].prototype, "PannerNode", "panningModel_get", arguments);
  },
  set: function panningModel() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['PannerNode'].prototype, "PannerNode", "panningModel_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('PannerNode', "positionX", {
  configurable: true,
  enumerable: true,
  get: function positionX() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['PannerNode'].prototype, "PannerNode", "positionX_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('PannerNode', "positionY", {
  configurable: true,
  enumerable: true,
  get: function positionY() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['PannerNode'].prototype, "PannerNode", "positionY_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('PannerNode', "positionZ", {
  configurable: true,
  enumerable: true,
  get: function positionZ() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['PannerNode'].prototype, "PannerNode", "positionZ_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('PannerNode', "orientationX", {
  configurable: true,
  enumerable: true,
  get: function orientationX() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['PannerNode'].prototype, "PannerNode", "orientationX_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('PannerNode', "orientationY", {
  configurable: true,
  enumerable: true,
  get: function orientationY() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['PannerNode'].prototype, "PannerNode", "orientationY_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('PannerNode', "orientationZ", {
  configurable: true,
  enumerable: true,
  get: function orientationZ() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['PannerNode'].prototype, "PannerNode", "orientationZ_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('PannerNode', "distanceModel", {
  configurable: true,
  enumerable: true,
  get: function distanceModel() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['PannerNode'].prototype, "PannerNode", "distanceModel_get", arguments);
  },
  set: function distanceModel() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['PannerNode'].prototype, "PannerNode", "distanceModel_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('PannerNode', "refDistance", {
  configurable: true,
  enumerable: true,
  get: function refDistance() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['PannerNode'].prototype, "PannerNode", "refDistance_get", arguments);
  },
  set: function refDistance() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['PannerNode'].prototype, "PannerNode", "refDistance_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('PannerNode', "maxDistance", {
  configurable: true,
  enumerable: true,
  get: function maxDistance() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['PannerNode'].prototype, "PannerNode", "maxDistance_get", arguments);
  },
  set: function maxDistance() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['PannerNode'].prototype, "PannerNode", "maxDistance_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('PannerNode', "rolloffFactor", {
  configurable: true,
  enumerable: true,
  get: function rolloffFactor() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['PannerNode'].prototype, "PannerNode", "rolloffFactor_get", arguments);
  },
  set: function rolloffFactor() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['PannerNode'].prototype, "PannerNode", "rolloffFactor_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('PannerNode', "coneInnerAngle", {
  configurable: true,
  enumerable: true,
  get: function coneInnerAngle() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['PannerNode'].prototype, "PannerNode", "coneInnerAngle_get", arguments);
  },
  set: function coneInnerAngle() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['PannerNode'].prototype, "PannerNode", "coneInnerAngle_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('PannerNode', "coneOuterAngle", {
  configurable: true,
  enumerable: true,
  get: function coneOuterAngle() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['PannerNode'].prototype, "PannerNode", "coneOuterAngle_get", arguments);
  },
  set: function coneOuterAngle() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['PannerNode'].prototype, "PannerNode", "coneOuterAngle_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('PannerNode', "coneOuterGain", {
  configurable: true,
  enumerable: true,
  get: function coneOuterGain() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['PannerNode'].prototype, "PannerNode", "coneOuterGain_get", arguments);
  },
  set: function coneOuterGain() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['PannerNode'].prototype, "PannerNode", "coneOuterGain_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('PannerNode', "setOrientation", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function setOrientation() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['PannerNode'].prototype, "PannerNode", "setOrientation", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('PannerNode', "setPosition", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function setPosition() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['PannerNode'].prototype, "PannerNode", "setPosition", arguments);
  }
}, 'prototype');