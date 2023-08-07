// Animation对象

Animation = function Animation() {
  let arg = arguments[0];
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('Animation 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(Animation, "Animation");
Animation.prototype.__proto__ = EventTarget.prototype;
Animation.__proto__ = EventTarget;
bodavm.toolsFunc.defineProperty(Animation.prototype, "effect", {
  configurable: true,
  enumerable: true,
  get: function effect() {
    return bodavm.toolsFunc.dispatch(this, Animation.prototype, "Animation", "effect_get", arguments);
  },
  set: function effect() {
    return bodavm.toolsFunc.dispatch(this, Animation.prototype, "Animation", "effect_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Animation.prototype, "startTime", {
  configurable: true,
  enumerable: true,
  get: function startTime() {
    return bodavm.toolsFunc.dispatch(this, Animation.prototype, "Animation", "startTime_get", arguments);
  },
  set: function startTime() {
    return bodavm.toolsFunc.dispatch(this, Animation.prototype, "Animation", "startTime_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Animation.prototype, "currentTime", {
  configurable: true,
  enumerable: true,
  get: function currentTime() {
    return bodavm.toolsFunc.dispatch(this, Animation.prototype, "Animation", "currentTime_get", arguments);
  },
  set: function currentTime() {
    return bodavm.toolsFunc.dispatch(this, Animation.prototype, "Animation", "currentTime_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Animation.prototype, "playbackRate", {
  configurable: true,
  enumerable: true,
  get: function playbackRate() {
    return bodavm.toolsFunc.dispatch(this, Animation.prototype, "Animation", "playbackRate_get", arguments);
  },
  set: function playbackRate() {
    return bodavm.toolsFunc.dispatch(this, Animation.prototype, "Animation", "playbackRate_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Animation.prototype, "playState", {
  configurable: true,
  enumerable: true,
  get: function playState() {
    return bodavm.toolsFunc.dispatch(this, Animation.prototype, "Animation", "playState_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(Animation.prototype, "pending", {
  configurable: true,
  enumerable: true,
  get: function pending() {
    return bodavm.toolsFunc.dispatch(this, Animation.prototype, "Animation", "pending_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(Animation.prototype, "id", {
  configurable: true,
  enumerable: true,
  get: function id() {
    return bodavm.toolsFunc.dispatch(this, Animation.prototype, "Animation", "id_get", arguments);
  },
  set: function id() {
    return bodavm.toolsFunc.dispatch(this, Animation.prototype, "Animation", "id_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Animation.prototype, "onfinish", {
  configurable: true,
  enumerable: true,
  get: function onfinish() {
    return bodavm.toolsFunc.dispatch(this, Animation.prototype, "Animation", "onfinish_get", arguments);
  },
  set: function onfinish() {
    return bodavm.toolsFunc.dispatch(this, Animation.prototype, "Animation", "onfinish_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Animation.prototype, "oncancel", {
  configurable: true,
  enumerable: true,
  get: function oncancel() {
    return bodavm.toolsFunc.dispatch(this, Animation.prototype, "Animation", "oncancel_get", arguments);
  },
  set: function oncancel() {
    return bodavm.toolsFunc.dispatch(this, Animation.prototype, "Animation", "oncancel_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Animation.prototype, "cancel", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function cancel() {
    return bodavm.toolsFunc.dispatch(this, Animation.prototype, "Animation", "cancel", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Animation.prototype, "finish", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function finish() {
    return bodavm.toolsFunc.dispatch(this, Animation.prototype, "Animation", "finish", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Animation.prototype, "pause", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function pause() {
    return bodavm.toolsFunc.dispatch(this, Animation.prototype, "Animation", "pause", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Animation.prototype, "play", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function play() {
    return bodavm.toolsFunc.dispatch(this, Animation.prototype, "Animation", "play", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Animation.prototype, "reverse", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function reverse() {
    return bodavm.toolsFunc.dispatch(this, Animation.prototype, "Animation", "reverse", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Animation.prototype, "updatePlaybackRate", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function updatePlaybackRate() {
    return bodavm.toolsFunc.dispatch(this, Animation.prototype, "Animation", "updatePlaybackRate", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Animation.prototype, "timeline", {
  configurable: true,
  enumerable: true,
  get: function timeline() {
    return bodavm.toolsFunc.dispatch(this, Animation.prototype, "Animation", "timeline_get", arguments);
  },
  set: function timeline() {
    return bodavm.toolsFunc.dispatch(this, Animation.prototype, "Animation", "timeline_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Animation.prototype, "replaceState", {
  configurable: true,
  enumerable: true,
  get: function replaceState() {
    return bodavm.toolsFunc.dispatch(this, Animation.prototype, "Animation", "replaceState_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(Animation.prototype, "onremove", {
  configurable: true,
  enumerable: true,
  get: function onremove() {
    return bodavm.toolsFunc.dispatch(this, Animation.prototype, "Animation", "onremove_get", arguments);
  },
  set: function onremove() {
    return bodavm.toolsFunc.dispatch(this, Animation.prototype, "Animation", "onremove_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Animation.prototype, "finished", {
  configurable: true,
  enumerable: true,
  get: function finished() {
    return bodavm.toolsFunc.dispatch(this, Animation.prototype, "Animation", "finished_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(Animation.prototype, "ready", {
  configurable: true,
  enumerable: true,
  get: function ready() {
    return bodavm.toolsFunc.dispatch(this, Animation.prototype, "Animation", "ready_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(Animation.prototype, "commitStyles", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function commitStyles() {
    return bodavm.toolsFunc.dispatch(this, Animation.prototype, "Animation", "commitStyles", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Animation.prototype, "persist", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function persist() {
    return bodavm.toolsFunc.dispatch(this, Animation.prototype, "Animation", "persist", arguments);
  }
});