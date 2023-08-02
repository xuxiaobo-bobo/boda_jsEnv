// BatteryManager对象

BatteryManager = function BatteryManager() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof BatteryManager)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('BatteryManager 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(BatteryManager, "BatteryManager");
BatteryManager.prototype.__proto__ = EventTarget.prototype;
BatteryManager.__proto__ = EventTarget;
bodavm.toolsFunc.defineProperty(BatteryManager.prototype, "charging", {
  configurable: true,
  enumerable: true,
  get: function charging() {
    return bodavm.toolsFunc.dispatch(this, BatteryManager.prototype, "BatteryManager", "charging_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(BatteryManager.prototype, "chargingTime", {
  configurable: true,
  enumerable: true,
  get: function chargingTime() {
    return bodavm.toolsFunc.dispatch(this, BatteryManager.prototype, "BatteryManager", "chargingTime_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(BatteryManager.prototype, "dischargingTime", {
  configurable: true,
  enumerable: true,
  get: function dischargingTime() {
    return bodavm.toolsFunc.dispatch(this, BatteryManager.prototype, "BatteryManager", "dischargingTime_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(BatteryManager.prototype, "level", {
  configurable: true,
  enumerable: true,
  get: function level() {
    return bodavm.toolsFunc.dispatch(this, BatteryManager.prototype, "BatteryManager", "level_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(BatteryManager.prototype, "onchargingchange", {
  configurable: true,
  enumerable: true,
  get: function onchargingchange() {
    return bodavm.toolsFunc.dispatch(this, BatteryManager.prototype, "BatteryManager", "onchargingchange_get", arguments);
  },
  set: function onchargingchange() {
    return bodavm.toolsFunc.dispatch(this, BatteryManager.prototype, "BatteryManager", "onchargingchange_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(BatteryManager.prototype, "onchargingtimechange", {
  configurable: true,
  enumerable: true,
  get: function onchargingtimechange() {
    return bodavm.toolsFunc.dispatch(this, BatteryManager.prototype, "BatteryManager", "onchargingtimechange_get", arguments);
  },
  set: function onchargingtimechange() {
    return bodavm.toolsFunc.dispatch(this, BatteryManager.prototype, "BatteryManager", "onchargingtimechange_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(BatteryManager.prototype, "ondischargingtimechange", {
  configurable: true,
  enumerable: true,
  get: function ondischargingtimechange() {
    return bodavm.toolsFunc.dispatch(this, BatteryManager.prototype, "BatteryManager", "ondischargingtimechange_get", arguments);
  },
  set: function ondischargingtimechange() {
    return bodavm.toolsFunc.dispatch(this, BatteryManager.prototype, "BatteryManager", "ondischargingtimechange_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(BatteryManager.prototype, "onlevelchange", {
  configurable: true,
  enumerable: true,
  get: function onlevelchange() {
    return bodavm.toolsFunc.dispatch(this, BatteryManager.prototype, "BatteryManager", "onlevelchange_get", arguments);
  },
  set: function onlevelchange() {
    return bodavm.toolsFunc.dispatch(this, BatteryManager.prototype, "BatteryManager", "onlevelchange_set", arguments);
  }
});