// Navigation对象

Navigation = function Navigation() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof Navigation)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('Navigation 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(Navigation, "Navigation");
Navigation.prototype.__proto__ = EventTarget.prototype;
Navigation.__proto__ = EventTarget;
bodavm.toolsFunc.defineProperty(Navigation.prototype, "currentEntry", {
  configurable: true,
  enumerable: true,
  get: function currentEntry() {
    return bodavm.toolsFunc.dispatch(this, Navigation.prototype, "Navigation", "currentEntry_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(Navigation.prototype, "transition", {
  configurable: true,
  enumerable: true,
  get: function transition() {
    return bodavm.toolsFunc.dispatch(this, Navigation.prototype, "Navigation", "transition_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(Navigation.prototype, "canGoBack", {
  configurable: true,
  enumerable: true,
  get: function canGoBack() {
    return bodavm.toolsFunc.dispatch(this, Navigation.prototype, "Navigation", "canGoBack_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(Navigation.prototype, "canGoForward", {
  configurable: true,
  enumerable: true,
  get: function canGoForward() {
    return bodavm.toolsFunc.dispatch(this, Navigation.prototype, "Navigation", "canGoForward_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(Navigation.prototype, "onnavigate", {
  configurable: true,
  enumerable: true,
  get: function onnavigate() {
    return bodavm.toolsFunc.dispatch(this, Navigation.prototype, "Navigation", "onnavigate_get", arguments);
  },
  set: function onnavigate() {
    return bodavm.toolsFunc.dispatch(this, Navigation.prototype, "Navigation", "onnavigate_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Navigation.prototype, "onnavigatesuccess", {
  configurable: true,
  enumerable: true,
  get: function onnavigatesuccess() {
    return bodavm.toolsFunc.dispatch(this, Navigation.prototype, "Navigation", "onnavigatesuccess_get", arguments);
  },
  set: function onnavigatesuccess() {
    return bodavm.toolsFunc.dispatch(this, Navigation.prototype, "Navigation", "onnavigatesuccess_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Navigation.prototype, "onnavigateerror", {
  configurable: true,
  enumerable: true,
  get: function onnavigateerror() {
    return bodavm.toolsFunc.dispatch(this, Navigation.prototype, "Navigation", "onnavigateerror_get", arguments);
  },
  set: function onnavigateerror() {
    return bodavm.toolsFunc.dispatch(this, Navigation.prototype, "Navigation", "onnavigateerror_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Navigation.prototype, "oncurrententrychange", {
  configurable: true,
  enumerable: true,
  get: function oncurrententrychange() {
    return bodavm.toolsFunc.dispatch(this, Navigation.prototype, "Navigation", "oncurrententrychange_get", arguments);
  },
  set: function oncurrententrychange() {
    return bodavm.toolsFunc.dispatch(this, Navigation.prototype, "Navigation", "oncurrententrychange_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Navigation.prototype, "back", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function back() {
    return bodavm.toolsFunc.dispatch(this, Navigation.prototype, "Navigation", "back", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Navigation.prototype, "entries", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function entries() {
    return bodavm.toolsFunc.dispatch(this, Navigation.prototype, "Navigation", "entries", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Navigation.prototype, "forward", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function forward() {
    return bodavm.toolsFunc.dispatch(this, Navigation.prototype, "Navigation", "forward", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Navigation.prototype, "navigate", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function navigate() {
    return bodavm.toolsFunc.dispatch(this, Navigation.prototype, "Navigation", "navigate", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Navigation.prototype, "reload", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function reload() {
    return bodavm.toolsFunc.dispatch(this, Navigation.prototype, "Navigation", "reload", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Navigation.prototype, "traverseTo", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function traverseTo() {
    return bodavm.toolsFunc.dispatch(this, Navigation.prototype, "Navigation", "traverseTo", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Navigation.prototype, "updateCurrentEntry", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function updateCurrentEntry() {
    return bodavm.toolsFunc.dispatch(this, Navigation.prototype, "Navigation", "updateCurrentEntry", arguments);
  }
});