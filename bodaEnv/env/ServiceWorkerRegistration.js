// ServiceWorkerRegistration对象

bodaEnv.memory.globlProtoObj["ServiceWorkerRegistration"] = function ServiceWorkerRegistration() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('ServiceWorkerRegistration 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["ServiceWorkerRegistration"], "ServiceWorkerRegistration");
bodaEnv.memory.globlProtoObj["ServiceWorkerRegistration"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["EventTarget"].prototype;
bodaEnv.memory.globlProtoObj["ServiceWorkerRegistration"].__proto__ = bodaEnv.memory.globlProtoObj["EventTarget"];
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["ServiceWorkerRegistration"].prototype, "installing", {
  configurable: true,
  enumerable: true,
  get: {
    installing() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["ServiceWorkerRegistration"].prototype, "ServiceWorkerRegistration", "installing_get", arguments);
    }
  }.installing,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["ServiceWorkerRegistration"].prototype, "waiting", {
  configurable: true,
  enumerable: true,
  get: {
    waiting() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["ServiceWorkerRegistration"].prototype, "ServiceWorkerRegistration", "waiting_get", arguments);
    }
  }.waiting,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["ServiceWorkerRegistration"].prototype, "active", {
  configurable: true,
  enumerable: true,
  get: {
    active() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["ServiceWorkerRegistration"].prototype, "ServiceWorkerRegistration", "active_get", arguments);
    }
  }.active,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["ServiceWorkerRegistration"].prototype, "navigationPreload", {
  configurable: true,
  enumerable: true,
  get: {
    navigationPreload() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["ServiceWorkerRegistration"].prototype, "ServiceWorkerRegistration", "navigationPreload_get", arguments);
    }
  }.navigationPreload,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["ServiceWorkerRegistration"].prototype, "scope", {
  configurable: true,
  enumerable: true,
  get: {
    scope() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["ServiceWorkerRegistration"].prototype, "ServiceWorkerRegistration", "scope_get", arguments);
    }
  }.scope,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["ServiceWorkerRegistration"].prototype, "updateViaCache", {
  configurable: true,
  enumerable: true,
  get: {
    updateViaCache() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["ServiceWorkerRegistration"].prototype, "ServiceWorkerRegistration", "updateViaCache_get", arguments);
    }
  }.updateViaCache,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["ServiceWorkerRegistration"].prototype, "onupdatefound", {
  configurable: true,
  enumerable: true,
  get: {
    onupdatefound() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["ServiceWorkerRegistration"].prototype, "ServiceWorkerRegistration", "onupdatefound_get", arguments);
    }
  }.onupdatefound,
  set: {
    onupdatefound() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["ServiceWorkerRegistration"].prototype, "ServiceWorkerRegistration", "onupdatefound_set", arguments);
    }
  }.onupdatefound
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["ServiceWorkerRegistration"].prototype, "unregister", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    unregister() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["ServiceWorkerRegistration"].prototype, "ServiceWorkerRegistration", "unregister", arguments);
    }
  }.unregister
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["ServiceWorkerRegistration"].prototype, "update", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    update() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["ServiceWorkerRegistration"].prototype, "ServiceWorkerRegistration", "update", arguments);
    }
  }.update
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["ServiceWorkerRegistration"].prototype, "paymentManager", {
  configurable: true,
  enumerable: true,
  get: {
    paymentManager() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["ServiceWorkerRegistration"].prototype, "ServiceWorkerRegistration", "paymentManager_get", arguments);
    }
  }.paymentManager,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["ServiceWorkerRegistration"].prototype, "backgroundFetch", {
  configurable: true,
  enumerable: true,
  get: {
    backgroundFetch() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["ServiceWorkerRegistration"].prototype, "ServiceWorkerRegistration", "backgroundFetch_get", arguments);
    }
  }.backgroundFetch,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["ServiceWorkerRegistration"].prototype, "periodicSync", {
  configurable: true,
  enumerable: true,
  get: {
    periodicSync() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["ServiceWorkerRegistration"].prototype, "ServiceWorkerRegistration", "periodicSync_get", arguments);
    }
  }.periodicSync,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["ServiceWorkerRegistration"].prototype, "sync", {
  configurable: true,
  enumerable: true,
  get: {
    sync() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["ServiceWorkerRegistration"].prototype, "ServiceWorkerRegistration", "sync_get", arguments);
    }
  }.sync,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["ServiceWorkerRegistration"].prototype, "cookies", {
  configurable: true,
  enumerable: true,
  get: {
    cookies() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["ServiceWorkerRegistration"].prototype, "ServiceWorkerRegistration", "cookies_get", arguments);
    }
  }.cookies,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["ServiceWorkerRegistration"].prototype, "pushManager", {
  configurable: true,
  enumerable: true,
  get: {
    pushManager() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["ServiceWorkerRegistration"].prototype, "ServiceWorkerRegistration", "pushManager_get", arguments);
    }
  }.pushManager,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["ServiceWorkerRegistration"].prototype, "getNotifications", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    getNotifications() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["ServiceWorkerRegistration"].prototype, "ServiceWorkerRegistration", "getNotifications", arguments);
    }
  }.getNotifications
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["ServiceWorkerRegistration"].prototype, "showNotification", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    showNotification() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["ServiceWorkerRegistration"].prototype, "ServiceWorkerRegistration", "showNotification", arguments);
    }
  }.showNotification
});