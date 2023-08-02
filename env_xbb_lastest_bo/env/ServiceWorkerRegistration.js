// ServiceWorkerRegistration对象

ServiceWorkerRegistration = function ServiceWorkerRegistration() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof ServiceWorkerRegistration)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('ServiceWorkerRegistration 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(ServiceWorkerRegistration, "ServiceWorkerRegistration");
ServiceWorkerRegistration.prototype.__proto__ = EventTarget.prototype;
ServiceWorkerRegistration.__proto__ = EventTarget;
bodavm.toolsFunc.defineProperty(ServiceWorkerRegistration.prototype, "installing", {
  configurable: true,
  enumerable: true,
  get: function installing() {
    return bodavm.toolsFunc.dispatch(this, ServiceWorkerRegistration.prototype, "ServiceWorkerRegistration", "installing_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(ServiceWorkerRegistration.prototype, "waiting", {
  configurable: true,
  enumerable: true,
  get: function waiting() {
    return bodavm.toolsFunc.dispatch(this, ServiceWorkerRegistration.prototype, "ServiceWorkerRegistration", "waiting_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(ServiceWorkerRegistration.prototype, "active", {
  configurable: true,
  enumerable: true,
  get: function active() {
    return bodavm.toolsFunc.dispatch(this, ServiceWorkerRegistration.prototype, "ServiceWorkerRegistration", "active_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(ServiceWorkerRegistration.prototype, "navigationPreload", {
  configurable: true,
  enumerable: true,
  get: function navigationPreload() {
    return bodavm.toolsFunc.dispatch(this, ServiceWorkerRegistration.prototype, "ServiceWorkerRegistration", "navigationPreload_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(ServiceWorkerRegistration.prototype, "scope", {
  configurable: true,
  enumerable: true,
  get: function scope() {
    return bodavm.toolsFunc.dispatch(this, ServiceWorkerRegistration.prototype, "ServiceWorkerRegistration", "scope_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(ServiceWorkerRegistration.prototype, "updateViaCache", {
  configurable: true,
  enumerable: true,
  get: function updateViaCache() {
    return bodavm.toolsFunc.dispatch(this, ServiceWorkerRegistration.prototype, "ServiceWorkerRegistration", "updateViaCache_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(ServiceWorkerRegistration.prototype, "onupdatefound", {
  configurable: true,
  enumerable: true,
  get: function onupdatefound() {
    return bodavm.toolsFunc.dispatch(this, ServiceWorkerRegistration.prototype, "ServiceWorkerRegistration", "onupdatefound_get", arguments);
  },
  set: function onupdatefound() {
    return bodavm.toolsFunc.dispatch(this, ServiceWorkerRegistration.prototype, "ServiceWorkerRegistration", "onupdatefound_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(ServiceWorkerRegistration.prototype, "unregister", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function unregister() {
    return bodavm.toolsFunc.dispatch(this, ServiceWorkerRegistration.prototype, "ServiceWorkerRegistration", "unregister", arguments);
  }
});
bodavm.toolsFunc.defineProperty(ServiceWorkerRegistration.prototype, "update", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function update() {
    return bodavm.toolsFunc.dispatch(this, ServiceWorkerRegistration.prototype, "ServiceWorkerRegistration", "update", arguments);
  }
});
bodavm.toolsFunc.defineProperty(ServiceWorkerRegistration.prototype, "paymentManager", {
  configurable: true,
  enumerable: true,
  get: function paymentManager() {
    return bodavm.toolsFunc.dispatch(this, ServiceWorkerRegistration.prototype, "ServiceWorkerRegistration", "paymentManager_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(ServiceWorkerRegistration.prototype, "backgroundFetch", {
  configurable: true,
  enumerable: true,
  get: function backgroundFetch() {
    return bodavm.toolsFunc.dispatch(this, ServiceWorkerRegistration.prototype, "ServiceWorkerRegistration", "backgroundFetch_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(ServiceWorkerRegistration.prototype, "periodicSync", {
  configurable: true,
  enumerable: true,
  get: function periodicSync() {
    return bodavm.toolsFunc.dispatch(this, ServiceWorkerRegistration.prototype, "ServiceWorkerRegistration", "periodicSync_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(ServiceWorkerRegistration.prototype, "sync", {
  configurable: true,
  enumerable: true,
  get: function sync() {
    return bodavm.toolsFunc.dispatch(this, ServiceWorkerRegistration.prototype, "ServiceWorkerRegistration", "sync_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(ServiceWorkerRegistration.prototype, "cookies", {
  configurable: true,
  enumerable: true,
  get: function cookies() {
    return bodavm.toolsFunc.dispatch(this, ServiceWorkerRegistration.prototype, "ServiceWorkerRegistration", "cookies_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(ServiceWorkerRegistration.prototype, "pushManager", {
  configurable: true,
  enumerable: true,
  get: function pushManager() {
    return bodavm.toolsFunc.dispatch(this, ServiceWorkerRegistration.prototype, "ServiceWorkerRegistration", "pushManager_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(ServiceWorkerRegistration.prototype, "getNotifications", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getNotifications() {
    return bodavm.toolsFunc.dispatch(this, ServiceWorkerRegistration.prototype, "ServiceWorkerRegistration", "getNotifications", arguments);
  }
});
bodavm.toolsFunc.defineProperty(ServiceWorkerRegistration.prototype, "showNotification", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function showNotification() {
    return bodavm.toolsFunc.dispatch(this, ServiceWorkerRegistration.prototype, "ServiceWorkerRegistration", "showNotification", arguments);
  }
});