// ServiceWorkerContainer对象

bodaEnv.memory.globlProtoObj["ServiceWorkerContainer"] = function ServiceWorkerContainer() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('ServiceWorkerContainer 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["ServiceWorkerContainer"], "ServiceWorkerContainer");
bodaEnv.memory.globlProtoObj["ServiceWorkerContainer"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["EventTarget"].prototype;
bodaEnv.memory.globlProtoObj["ServiceWorkerContainer"].__proto__ = bodaEnv.memory.globlProtoObj["EventTarget"];
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["ServiceWorkerContainer"].prototype, "controller", {
  configurable: true,
  enumerable: true,
  get: {
    controller() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["ServiceWorkerContainer"].prototype, "ServiceWorkerContainer", "controller_get", arguments);
    }
  }.controller,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["ServiceWorkerContainer"].prototype, "ready", {
  configurable: true,
  enumerable: true,
  get: {
    ready() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["ServiceWorkerContainer"].prototype, "ServiceWorkerContainer", "ready_get", arguments);
    }
  }.ready,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["ServiceWorkerContainer"].prototype, "oncontrollerchange", {
  configurable: true,
  enumerable: true,
  get: {
    oncontrollerchange() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["ServiceWorkerContainer"].prototype, "ServiceWorkerContainer", "oncontrollerchange_get", arguments);
    }
  }.oncontrollerchange,
  set: {
    oncontrollerchange() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["ServiceWorkerContainer"].prototype, "ServiceWorkerContainer", "oncontrollerchange_set", arguments);
    }
  }.oncontrollerchange
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["ServiceWorkerContainer"].prototype, "onmessage", {
  configurable: true,
  enumerable: true,
  get: {
    onmessage() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["ServiceWorkerContainer"].prototype, "ServiceWorkerContainer", "onmessage_get", arguments);
    }
  }.onmessage,
  set: {
    onmessage() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["ServiceWorkerContainer"].prototype, "ServiceWorkerContainer", "onmessage_set", arguments);
    }
  }.onmessage
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["ServiceWorkerContainer"].prototype, "onmessageerror", {
  configurable: true,
  enumerable: true,
  get: {
    onmessageerror() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["ServiceWorkerContainer"].prototype, "ServiceWorkerContainer", "onmessageerror_get", arguments);
    }
  }.onmessageerror,
  set: {
    onmessageerror() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["ServiceWorkerContainer"].prototype, "ServiceWorkerContainer", "onmessageerror_set", arguments);
    }
  }.onmessageerror
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["ServiceWorkerContainer"].prototype, "getRegistration", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    getRegistration() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["ServiceWorkerContainer"].prototype, "ServiceWorkerContainer", "getRegistration", arguments);
    }
  }.getRegistration
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["ServiceWorkerContainer"].prototype, "getRegistrations", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    getRegistrations() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["ServiceWorkerContainer"].prototype, "ServiceWorkerContainer", "getRegistrations", arguments);
    }
  }.getRegistrations
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["ServiceWorkerContainer"].prototype, "register", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    register() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["ServiceWorkerContainer"].prototype, "ServiceWorkerContainer", "register", arguments);
    }
  }.register
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["ServiceWorkerContainer"].prototype, "startMessages", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    startMessages() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["ServiceWorkerContainer"].prototype, "ServiceWorkerContainer", "startMessages", arguments);
    }
  }.startMessages
});