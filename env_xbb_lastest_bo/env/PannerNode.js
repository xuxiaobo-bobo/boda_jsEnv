// PannerNode对象

PannerNode = function PannerNode() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof PannerNode)) {
    return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'PannerNode': 1 argument required, but only 0 present.");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('PannerNode 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(PannerNode, "PannerNode");
PannerNode.prototype.__proto__ = AudioNode.prototype;
PannerNode.__proto__ = AudioNode;
bodavm.toolsFunc.defineProperty(PannerNode.prototype, "panningModel", {
  configurable: true,
  enumerable: true,
  get: function panningModel() {
    return bodavm.toolsFunc.dispatch(this, PannerNode.prototype, "PannerNode", "panningModel_get", arguments);
  },
  set: function panningModel() {
    return bodavm.toolsFunc.dispatch(this, PannerNode.prototype, "PannerNode", "panningModel_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(PannerNode.prototype, "positionX", {
  configurable: true,
  enumerable: true,
  get: function positionX() {
    return bodavm.toolsFunc.dispatch(this, PannerNode.prototype, "PannerNode", "positionX_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(PannerNode.prototype, "positionY", {
  configurable: true,
  enumerable: true,
  get: function positionY() {
    return bodavm.toolsFunc.dispatch(this, PannerNode.prototype, "PannerNode", "positionY_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(PannerNode.prototype, "positionZ", {
  configurable: true,
  enumerable: true,
  get: function positionZ() {
    return bodavm.toolsFunc.dispatch(this, PannerNode.prototype, "PannerNode", "positionZ_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(PannerNode.prototype, "orientationX", {
  configurable: true,
  enumerable: true,
  get: function orientationX() {
    return bodavm.toolsFunc.dispatch(this, PannerNode.prototype, "PannerNode", "orientationX_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(PannerNode.prototype, "orientationY", {
  configurable: true,
  enumerable: true,
  get: function orientationY() {
    return bodavm.toolsFunc.dispatch(this, PannerNode.prototype, "PannerNode", "orientationY_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(PannerNode.prototype, "orientationZ", {
  configurable: true,
  enumerable: true,
  get: function orientationZ() {
    return bodavm.toolsFunc.dispatch(this, PannerNode.prototype, "PannerNode", "orientationZ_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(PannerNode.prototype, "distanceModel", {
  configurable: true,
  enumerable: true,
  get: function distanceModel() {
    return bodavm.toolsFunc.dispatch(this, PannerNode.prototype, "PannerNode", "distanceModel_get", arguments);
  },
  set: function distanceModel() {
    return bodavm.toolsFunc.dispatch(this, PannerNode.prototype, "PannerNode", "distanceModel_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(PannerNode.prototype, "refDistance", {
  configurable: true,
  enumerable: true,
  get: function refDistance() {
    return bodavm.toolsFunc.dispatch(this, PannerNode.prototype, "PannerNode", "refDistance_get", arguments);
  },
  set: function refDistance() {
    return bodavm.toolsFunc.dispatch(this, PannerNode.prototype, "PannerNode", "refDistance_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(PannerNode.prototype, "maxDistance", {
  configurable: true,
  enumerable: true,
  get: function maxDistance() {
    return bodavm.toolsFunc.dispatch(this, PannerNode.prototype, "PannerNode", "maxDistance_get", arguments);
  },
  set: function maxDistance() {
    return bodavm.toolsFunc.dispatch(this, PannerNode.prototype, "PannerNode", "maxDistance_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(PannerNode.prototype, "rolloffFactor", {
  configurable: true,
  enumerable: true,
  get: function rolloffFactor() {
    return bodavm.toolsFunc.dispatch(this, PannerNode.prototype, "PannerNode", "rolloffFactor_get", arguments);
  },
  set: function rolloffFactor() {
    return bodavm.toolsFunc.dispatch(this, PannerNode.prototype, "PannerNode", "rolloffFactor_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(PannerNode.prototype, "coneInnerAngle", {
  configurable: true,
  enumerable: true,
  get: function coneInnerAngle() {
    return bodavm.toolsFunc.dispatch(this, PannerNode.prototype, "PannerNode", "coneInnerAngle_get", arguments);
  },
  set: function coneInnerAngle() {
    return bodavm.toolsFunc.dispatch(this, PannerNode.prototype, "PannerNode", "coneInnerAngle_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(PannerNode.prototype, "coneOuterAngle", {
  configurable: true,
  enumerable: true,
  get: function coneOuterAngle() {
    return bodavm.toolsFunc.dispatch(this, PannerNode.prototype, "PannerNode", "coneOuterAngle_get", arguments);
  },
  set: function coneOuterAngle() {
    return bodavm.toolsFunc.dispatch(this, PannerNode.prototype, "PannerNode", "coneOuterAngle_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(PannerNode.prototype, "coneOuterGain", {
  configurable: true,
  enumerable: true,
  get: function coneOuterGain() {
    return bodavm.toolsFunc.dispatch(this, PannerNode.prototype, "PannerNode", "coneOuterGain_get", arguments);
  },
  set: function coneOuterGain() {
    return bodavm.toolsFunc.dispatch(this, PannerNode.prototype, "PannerNode", "coneOuterGain_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(PannerNode.prototype, "setOrientation", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function setOrientation() {
    return bodavm.toolsFunc.dispatch(this, PannerNode.prototype, "PannerNode", "setOrientation", arguments);
  }
});
bodavm.toolsFunc.defineProperty(PannerNode.prototype, "setPosition", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function setPosition() {
    return bodavm.toolsFunc.dispatch(this, PannerNode.prototype, "PannerNode", "setPosition", arguments);
  }
});