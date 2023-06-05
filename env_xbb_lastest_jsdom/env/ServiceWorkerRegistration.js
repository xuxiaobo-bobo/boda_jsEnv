// ServiceWorkerRegistration对象

bodavm.memory.globalobj['ServiceWorkerRegistration'] = function ServiceWorkerRegistration() {
  console.log_copy('ServiceWorkerRegistration 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof ServiceWorkerRegistration)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['ServiceWorkerRegistration'], "ServiceWorkerRegistration");
bodavm.memory.globalobj['ServiceWorkerRegistration'].prototype.__proto__ = bodavm.memory.globalobj['EventTarget'].prototype;
bodavm.memory.globalobj['ServiceWorkerRegistration'].__proto__ = bodavm.memory.globalobj['EventTarget'];
bodavm.toolsFunc.defineProperty('ServiceWorkerRegistration', "installing", {
  configurable: true,
  enumerable: true,
  get: function installing() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['ServiceWorkerRegistration'].prototype, "ServiceWorkerRegistration", "installing_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('ServiceWorkerRegistration', "waiting", {
  configurable: true,
  enumerable: true,
  get: function waiting() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['ServiceWorkerRegistration'].prototype, "ServiceWorkerRegistration", "waiting_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('ServiceWorkerRegistration', "active", {
  configurable: true,
  enumerable: true,
  get: function active() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['ServiceWorkerRegistration'].prototype, "ServiceWorkerRegistration", "active_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('ServiceWorkerRegistration', "navigationPreload", {
  configurable: true,
  enumerable: true,
  get: function navigationPreload() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['ServiceWorkerRegistration'].prototype, "ServiceWorkerRegistration", "navigationPreload_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('ServiceWorkerRegistration', "scope", {
  configurable: true,
  enumerable: true,
  get: function scope() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['ServiceWorkerRegistration'].prototype, "ServiceWorkerRegistration", "scope_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('ServiceWorkerRegistration', "updateViaCache", {
  configurable: true,
  enumerable: true,
  get: function updateViaCache() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['ServiceWorkerRegistration'].prototype, "ServiceWorkerRegistration", "updateViaCache_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('ServiceWorkerRegistration', "onupdatefound", {
  configurable: true,
  enumerable: true,
  get: function onupdatefound() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['ServiceWorkerRegistration'].prototype, "ServiceWorkerRegistration", "onupdatefound_get", arguments);
  },
  set: function onupdatefound() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['ServiceWorkerRegistration'].prototype, "ServiceWorkerRegistration", "onupdatefound_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('ServiceWorkerRegistration', "unregister", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function unregister() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['ServiceWorkerRegistration'].prototype, "ServiceWorkerRegistration", "unregister", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('ServiceWorkerRegistration', "update", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function update() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['ServiceWorkerRegistration'].prototype, "ServiceWorkerRegistration", "update", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('ServiceWorkerRegistration', "paymentManager", {
  configurable: true,
  enumerable: true,
  get: function paymentManager() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['ServiceWorkerRegistration'].prototype, "ServiceWorkerRegistration", "paymentManager_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('ServiceWorkerRegistration', "backgroundFetch", {
  configurable: true,
  enumerable: true,
  get: function backgroundFetch() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['ServiceWorkerRegistration'].prototype, "ServiceWorkerRegistration", "backgroundFetch_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('ServiceWorkerRegistration', "periodicSync", {
  configurable: true,
  enumerable: true,
  get: function periodicSync() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['ServiceWorkerRegistration'].prototype, "ServiceWorkerRegistration", "periodicSync_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('ServiceWorkerRegistration', "sync", {
  configurable: true,
  enumerable: true,
  get: function sync() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['ServiceWorkerRegistration'].prototype, "ServiceWorkerRegistration", "sync_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('ServiceWorkerRegistration', "cookies", {
  configurable: true,
  enumerable: true,
  get: function cookies() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['ServiceWorkerRegistration'].prototype, "ServiceWorkerRegistration", "cookies_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('ServiceWorkerRegistration', "pushManager", {
  configurable: true,
  enumerable: true,
  get: function pushManager() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['ServiceWorkerRegistration'].prototype, "ServiceWorkerRegistration", "pushManager_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('ServiceWorkerRegistration', "getNotifications", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getNotifications() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['ServiceWorkerRegistration'].prototype, "ServiceWorkerRegistration", "getNotifications", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('ServiceWorkerRegistration', "showNotification", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function showNotification() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['ServiceWorkerRegistration'].prototype, "ServiceWorkerRegistration", "showNotification", arguments);
  }
}, 'prototype');