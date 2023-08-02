// Notification对象

Notification = function Notification() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof Notification)) {
    return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'Notification': 1 argument required, but only 0 present.");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('Notification 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(Notification, "Notification");
Notification.prototype.__proto__ = EventTarget.prototype;
Notification.__proto__ = EventTarget;
bodavm.toolsFunc.defineProperty(Notification, "permission", {
  configurable: true,
  enumerable: true,
  get: function permission() {
    return bodavm.toolsFunc.dispatch(this, Notification, "Notification", "permission_get", arguments, 'default');
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(Notification, "maxActions", {
  configurable: true,
  enumerable: true,
  get: function maxActions() {
    return bodavm.toolsFunc.dispatch(this, Notification, "Notification", "maxActions_get", arguments, 2);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(Notification, "requestPermission", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function requestPermission() {
    return bodavm.toolsFunc.dispatch(this, Notification, "Notification", "requestPermission", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Notification.prototype, "onclick", {
  configurable: true,
  enumerable: true,
  get: function onclick() {
    return bodavm.toolsFunc.dispatch(this, Notification.prototype, "Notification", "onclick_get", arguments);
  },
  set: function onclick() {
    return bodavm.toolsFunc.dispatch(this, Notification.prototype, "Notification", "onclick_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Notification.prototype, "onshow", {
  configurable: true,
  enumerable: true,
  get: function onshow() {
    return bodavm.toolsFunc.dispatch(this, Notification.prototype, "Notification", "onshow_get", arguments);
  },
  set: function onshow() {
    return bodavm.toolsFunc.dispatch(this, Notification.prototype, "Notification", "onshow_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Notification.prototype, "onerror", {
  configurable: true,
  enumerable: true,
  get: function onerror() {
    return bodavm.toolsFunc.dispatch(this, Notification.prototype, "Notification", "onerror_get", arguments);
  },
  set: function onerror() {
    return bodavm.toolsFunc.dispatch(this, Notification.prototype, "Notification", "onerror_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Notification.prototype, "onclose", {
  configurable: true,
  enumerable: true,
  get: function onclose() {
    return bodavm.toolsFunc.dispatch(this, Notification.prototype, "Notification", "onclose_get", arguments);
  },
  set: function onclose() {
    return bodavm.toolsFunc.dispatch(this, Notification.prototype, "Notification", "onclose_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Notification.prototype, "title", {
  configurable: true,
  enumerable: true,
  get: function title() {
    return bodavm.toolsFunc.dispatch(this, Notification.prototype, "Notification", "title_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(Notification.prototype, "dir", {
  configurable: true,
  enumerable: true,
  get: function dir() {
    return bodavm.toolsFunc.dispatch(this, Notification.prototype, "Notification", "dir_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(Notification.prototype, "lang", {
  configurable: true,
  enumerable: true,
  get: function lang() {
    return bodavm.toolsFunc.dispatch(this, Notification.prototype, "Notification", "lang_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(Notification.prototype, "body", {
  configurable: true,
  enumerable: true,
  get: function body() {
    return bodavm.toolsFunc.dispatch(this, Notification.prototype, "Notification", "body_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(Notification.prototype, "tag", {
  configurable: true,
  enumerable: true,
  get: function tag() {
    return bodavm.toolsFunc.dispatch(this, Notification.prototype, "Notification", "tag_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(Notification.prototype, "icon", {
  configurable: true,
  enumerable: true,
  get: function icon() {
    return bodavm.toolsFunc.dispatch(this, Notification.prototype, "Notification", "icon_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(Notification.prototype, "badge", {
  configurable: true,
  enumerable: true,
  get: function badge() {
    return bodavm.toolsFunc.dispatch(this, Notification.prototype, "Notification", "badge_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(Notification.prototype, "vibrate", {
  configurable: true,
  enumerable: true,
  get: function vibrate() {
    return bodavm.toolsFunc.dispatch(this, Notification.prototype, "Notification", "vibrate_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(Notification.prototype, "timestamp", {
  configurable: true,
  enumerable: true,
  get: function timestamp() {
    return bodavm.toolsFunc.dispatch(this, Notification.prototype, "Notification", "timestamp_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(Notification.prototype, "renotify", {
  configurable: true,
  enumerable: true,
  get: function renotify() {
    return bodavm.toolsFunc.dispatch(this, Notification.prototype, "Notification", "renotify_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(Notification.prototype, "silent", {
  configurable: true,
  enumerable: true,
  get: function silent() {
    return bodavm.toolsFunc.dispatch(this, Notification.prototype, "Notification", "silent_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(Notification.prototype, "requireInteraction", {
  configurable: true,
  enumerable: true,
  get: function requireInteraction() {
    return bodavm.toolsFunc.dispatch(this, Notification.prototype, "Notification", "requireInteraction_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(Notification.prototype, "data", {
  configurable: true,
  enumerable: true,
  get: function data() {
    return bodavm.toolsFunc.dispatch(this, Notification.prototype, "Notification", "data_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(Notification.prototype, "actions", {
  configurable: true,
  enumerable: true,
  get: function actions() {
    return bodavm.toolsFunc.dispatch(this, Notification.prototype, "Notification", "actions_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(Notification.prototype, "close", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function close() {
    return bodavm.toolsFunc.dispatch(this, Notification.prototype, "Notification", "close", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Notification.prototype, "image", {
  configurable: true,
  enumerable: true,
  get: function image() {
    return bodavm.toolsFunc.dispatch(this, Notification.prototype, "Notification", "image_get", arguments);
  },
  set: undefined
});