// Navigation对象

bodaEnv.memory.globlProtoObj["Navigation"] = function Navigation() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('Navigation 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["Navigation"], "Navigation");
bodaEnv.memory.globlProtoObj["Navigation"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["EventTarget"].prototype;
bodaEnv.memory.globlProtoObj["Navigation"].__proto__ = bodaEnv.memory.globlProtoObj["EventTarget"];
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Navigation"].prototype, "currentEntry", {
  configurable: true,
  enumerable: true,
  get: {
    currentEntry() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Navigation"].prototype, "Navigation", "currentEntry_get", arguments);
    }
  }.currentEntry,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Navigation"].prototype, "transition", {
  configurable: true,
  enumerable: true,
  get: {
    transition() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Navigation"].prototype, "Navigation", "transition_get", arguments);
    }
  }.transition,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Navigation"].prototype, "canGoBack", {
  configurable: true,
  enumerable: true,
  get: {
    canGoBack() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Navigation"].prototype, "Navigation", "canGoBack_get", arguments);
    }
  }.canGoBack,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Navigation"].prototype, "canGoForward", {
  configurable: true,
  enumerable: true,
  get: {
    canGoForward() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Navigation"].prototype, "Navigation", "canGoForward_get", arguments);
    }
  }.canGoForward,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Navigation"].prototype, "onnavigate", {
  configurable: true,
  enumerable: true,
  get: {
    onnavigate() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Navigation"].prototype, "Navigation", "onnavigate_get", arguments);
    }
  }.onnavigate,
  set: {
    onnavigate() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Navigation"].prototype, "Navigation", "onnavigate_set", arguments);
    }
  }.onnavigate
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Navigation"].prototype, "onnavigatesuccess", {
  configurable: true,
  enumerable: true,
  get: {
    onnavigatesuccess() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Navigation"].prototype, "Navigation", "onnavigatesuccess_get", arguments);
    }
  }.onnavigatesuccess,
  set: {
    onnavigatesuccess() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Navigation"].prototype, "Navigation", "onnavigatesuccess_set", arguments);
    }
  }.onnavigatesuccess
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Navigation"].prototype, "onnavigateerror", {
  configurable: true,
  enumerable: true,
  get: {
    onnavigateerror() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Navigation"].prototype, "Navigation", "onnavigateerror_get", arguments);
    }
  }.onnavigateerror,
  set: {
    onnavigateerror() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Navigation"].prototype, "Navigation", "onnavigateerror_set", arguments);
    }
  }.onnavigateerror
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Navigation"].prototype, "oncurrententrychange", {
  configurable: true,
  enumerable: true,
  get: {
    oncurrententrychange() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Navigation"].prototype, "Navigation", "oncurrententrychange_get", arguments);
    }
  }.oncurrententrychange,
  set: {
    oncurrententrychange() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Navigation"].prototype, "Navigation", "oncurrententrychange_set", arguments);
    }
  }.oncurrententrychange
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Navigation"].prototype, "back", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    back() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Navigation"].prototype, "Navigation", "back", arguments);
    }
  }.back
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Navigation"].prototype, "entries", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    entries() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Navigation"].prototype, "Navigation", "entries", arguments);
    }
  }.entries
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Navigation"].prototype, "forward", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    forward() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Navigation"].prototype, "Navigation", "forward", arguments);
    }
  }.forward
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Navigation"].prototype, "navigate", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    navigate() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Navigation"].prototype, "Navigation", "navigate", arguments);
    }
  }.navigate
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Navigation"].prototype, "reload", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    reload() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Navigation"].prototype, "Navigation", "reload", arguments);
    }
  }.reload
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Navigation"].prototype, "traverseTo", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    traverseTo() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Navigation"].prototype, "Navigation", "traverseTo", arguments);
    }
  }.traverseTo
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Navigation"].prototype, "updateCurrentEntry", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    updateCurrentEntry() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Navigation"].prototype, "Navigation", "updateCurrentEntry", arguments);
    }
  }.updateCurrentEntry
});

// navigation对象

bodaEnv.memory.globlProtoObj["navigation"] = new bodaEnv.memory.globlProtoObj["Navigation"]('bobo');