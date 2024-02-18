// Notification对象

bodaEnv.memory.globlProtoObj["Notification"] = function Notification() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('Notification 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["Notification"], "Notification");
bodaEnv.memory.globlProtoObj["Notification"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["EventTarget"].prototype;
bodaEnv.memory.globlProtoObj["Notification"].__proto__ = bodaEnv.memory.globlProtoObj["EventTarget"];
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Notification"], "permission", {
  configurable: true,
  enumerable: true,
  get: {
    permission() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["NavigatorUAData"], "Notification", "permission_get", arguments, 'default');
    }
  }.permission,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Notification"], "maxActions", {
  configurable: true,
  enumerable: true,
  get: {
    maxActions() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["NavigatorUAData"], "Notification", "maxActions_get", arguments, 2);
    }
  }.maxActions,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Notification"], "requestPermission", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    requestPermission() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["NavigatorUAData"], "Notification", "requestPermission", arguments);
    }
  }.requestPermission
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Notification"].prototype, "onclick", {
  configurable: true,
  enumerable: true,
  get: {
    onclick() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Notification"].prototype, "Notification", "onclick_get", arguments);
    }
  }.onclick,
  set: {
    onclick() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Notification"].prototype, "Notification", "onclick_set", arguments);
    }
  }.onclick
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Notification"].prototype, "onshow", {
  configurable: true,
  enumerable: true,
  get: {
    onshow() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Notification"].prototype, "Notification", "onshow_get", arguments);
    }
  }.onshow,
  set: {
    onshow() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Notification"].prototype, "Notification", "onshow_set", arguments);
    }
  }.onshow
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Notification"].prototype, "onerror", {
  configurable: true,
  enumerable: true,
  get: {
    onerror() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Notification"].prototype, "Notification", "onerror_get", arguments);
    }
  }.onerror,
  set: {
    onerror() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Notification"].prototype, "Notification", "onerror_set", arguments);
    }
  }.onerror
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Notification"].prototype, "onclose", {
  configurable: true,
  enumerable: true,
  get: {
    onclose() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Notification"].prototype, "Notification", "onclose_get", arguments);
    }
  }.onclose,
  set: {
    onclose() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Notification"].prototype, "Notification", "onclose_set", arguments);
    }
  }.onclose
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Notification"].prototype, "title", {
  configurable: true,
  enumerable: true,
  get: {
    title() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Notification"].prototype, "Notification", "title_get", arguments);
    }
  }.title,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Notification"].prototype, "dir", {
  configurable: true,
  enumerable: true,
  get: {
    dir() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Notification"].prototype, "Notification", "dir_get", arguments);
    }
  }.dir,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Notification"].prototype, "lang", {
  configurable: true,
  enumerable: true,
  get: {
    lang() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Notification"].prototype, "Notification", "lang_get", arguments);
    }
  }.lang,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Notification"].prototype, "body", {
  configurable: true,
  enumerable: true,
  get: {
    body() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Notification"].prototype, "Notification", "body_get", arguments);
    }
  }.body,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Notification"].prototype, "tag", {
  configurable: true,
  enumerable: true,
  get: {
    tag() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Notification"].prototype, "Notification", "tag_get", arguments);
    }
  }.tag,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Notification"].prototype, "icon", {
  configurable: true,
  enumerable: true,
  get: {
    icon() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Notification"].prototype, "Notification", "icon_get", arguments);
    }
  }.icon,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Notification"].prototype, "badge", {
  configurable: true,
  enumerable: true,
  get: {
    badge() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Notification"].prototype, "Notification", "badge_get", arguments);
    }
  }.badge,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Notification"].prototype, "vibrate", {
  configurable: true,
  enumerable: true,
  get: {
    vibrate() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Notification"].prototype, "Notification", "vibrate_get", arguments);
    }
  }.vibrate,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Notification"].prototype, "timestamp", {
  configurable: true,
  enumerable: true,
  get: {
    timestamp() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Notification"].prototype, "Notification", "timestamp_get", arguments);
    }
  }.timestamp,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Notification"].prototype, "renotify", {
  configurable: true,
  enumerable: true,
  get: {
    renotify() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Notification"].prototype, "Notification", "renotify_get", arguments);
    }
  }.renotify,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Notification"].prototype, "silent", {
  configurable: true,
  enumerable: true,
  get: {
    silent() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Notification"].prototype, "Notification", "silent_get", arguments);
    }
  }.silent,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Notification"].prototype, "requireInteraction", {
  configurable: true,
  enumerable: true,
  get: {
    requireInteraction() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Notification"].prototype, "Notification", "requireInteraction_get", arguments);
    }
  }.requireInteraction,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Notification"].prototype, "data", {
  configurable: true,
  enumerable: true,
  get: {
    data() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Notification"].prototype, "Notification", "data_get", arguments);
    }
  }.data,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Notification"].prototype, "actions", {
  configurable: true,
  enumerable: true,
  get: {
    actions() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Notification"].prototype, "Notification", "actions_get", arguments);
    }
  }.actions,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Notification"].prototype, "close", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    close() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Notification"].prototype, "Notification", "close", arguments);
    }
  }.close
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Notification"].prototype, "image", {
  configurable: true,
  enumerable: true,
  get: {
    image() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Notification"].prototype, "Notification", "image_get", arguments);
    }
  }.image,
  set: undefined
});