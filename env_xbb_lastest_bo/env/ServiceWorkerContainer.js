// ServiceWorkerContainer对象

ServiceWorkerContainer = function ServiceWorkerContainer() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof ServiceWorkerContainer)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('ServiceWorkerContainer 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(ServiceWorkerContainer, "ServiceWorkerContainer");
ServiceWorkerContainer.prototype.__proto__ = EventTarget.prototype;
ServiceWorkerContainer.__proto__ = EventTarget;
bodavm.toolsFunc.defineProperty(ServiceWorkerContainer.prototype, "controller", {
  configurable: true,
  enumerable: true,
  get: function controller() {
    return bodavm.toolsFunc.dispatch(this, ServiceWorkerContainer.prototype, "ServiceWorkerContainer", "controller_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(ServiceWorkerContainer.prototype, "ready", {
  configurable: true,
  enumerable: true,
  get: function ready() {
    return bodavm.toolsFunc.dispatch(this, ServiceWorkerContainer.prototype, "ServiceWorkerContainer", "ready_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(ServiceWorkerContainer.prototype, "oncontrollerchange", {
  configurable: true,
  enumerable: true,
  get: function oncontrollerchange() {
    return bodavm.toolsFunc.dispatch(this, ServiceWorkerContainer.prototype, "ServiceWorkerContainer", "oncontrollerchange_get", arguments);
  },
  set: function oncontrollerchange() {
    return bodavm.toolsFunc.dispatch(this, ServiceWorkerContainer.prototype, "ServiceWorkerContainer", "oncontrollerchange_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(ServiceWorkerContainer.prototype, "onmessage", {
  configurable: true,
  enumerable: true,
  get: function onmessage() {
    return bodavm.toolsFunc.dispatch(this, ServiceWorkerContainer.prototype, "ServiceWorkerContainer", "onmessage_get", arguments);
  },
  set: function onmessage() {
    return bodavm.toolsFunc.dispatch(this, ServiceWorkerContainer.prototype, "ServiceWorkerContainer", "onmessage_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(ServiceWorkerContainer.prototype, "onmessageerror", {
  configurable: true,
  enumerable: true,
  get: function onmessageerror() {
    return bodavm.toolsFunc.dispatch(this, ServiceWorkerContainer.prototype, "ServiceWorkerContainer", "onmessageerror_get", arguments);
  },
  set: function onmessageerror() {
    return bodavm.toolsFunc.dispatch(this, ServiceWorkerContainer.prototype, "ServiceWorkerContainer", "onmessageerror_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(ServiceWorkerContainer.prototype, "getRegistration", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getRegistration() {
    return bodavm.toolsFunc.dispatch(this, ServiceWorkerContainer.prototype, "ServiceWorkerContainer", "getRegistration", arguments);
  }
});
bodavm.toolsFunc.defineProperty(ServiceWorkerContainer.prototype, "getRegistrations", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getRegistrations() {
    return bodavm.toolsFunc.dispatch(this, ServiceWorkerContainer.prototype, "ServiceWorkerContainer", "getRegistrations", arguments);
  }
});
bodavm.toolsFunc.defineProperty(ServiceWorkerContainer.prototype, "register", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function register() {
    return bodavm.toolsFunc.dispatch(this, ServiceWorkerContainer.prototype, "ServiceWorkerContainer", "register", arguments);
  }
});
bodavm.toolsFunc.defineProperty(ServiceWorkerContainer.prototype, "startMessages", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function startMessages() {
    return bodavm.toolsFunc.dispatch(this, ServiceWorkerContainer.prototype, "ServiceWorkerContainer", "startMessages", arguments);
  }
});