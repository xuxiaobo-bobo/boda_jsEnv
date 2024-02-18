// BatteryManager对象

bodaEnv.memory.globlProtoObj["BatteryManager"] = function BatteryManager() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('BatteryManager 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["BatteryManager"], "BatteryManager");
bodaEnv.memory.globlProtoObj["BatteryManager"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["EventTarget"].prototype;
bodaEnv.memory.globlProtoObj["BatteryManager"].__proto__ = bodaEnv.memory.globlProtoObj["EventTarget"];
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["BatteryManager"].prototype, "charging", {
  configurable: true,
  enumerable: true,
  get: {
    charging() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["BatteryManager"].prototype, "BatteryManager", "charging_get", arguments);
    }
  }.charging,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["BatteryManager"].prototype, "chargingTime", {
  configurable: true,
  enumerable: true,
  get: {
    chargingTime() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["BatteryManager"].prototype, "BatteryManager", "chargingTime_get", arguments);
    }
  }.chargingTime,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["BatteryManager"].prototype, "dischargingTime", {
  configurable: true,
  enumerable: true,
  get: {
    dischargingTime() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["BatteryManager"].prototype, "BatteryManager", "dischargingTime_get", arguments);
    }
  }.dischargingTime,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["BatteryManager"].prototype, "level", {
  configurable: true,
  enumerable: true,
  get: {
    level() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["BatteryManager"].prototype, "BatteryManager", "level_get", arguments);
    }
  }.level,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["BatteryManager"].prototype, "onchargingchange", {
  configurable: true,
  enumerable: true,
  get: {
    onchargingchange() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["BatteryManager"].prototype, "BatteryManager", "onchargingchange_get", arguments);
    }
  }.onchargingchange,
  set: {
    onchargingchange() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["BatteryManager"].prototype, "BatteryManager", "onchargingchange_set", arguments);
    }
  }.onchargingchange
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["BatteryManager"].prototype, "onchargingtimechange", {
  configurable: true,
  enumerable: true,
  get: {
    onchargingtimechange() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["BatteryManager"].prototype, "BatteryManager", "onchargingtimechange_get", arguments);
    }
  }.onchargingtimechange,
  set: {
    onchargingtimechange() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["BatteryManager"].prototype, "BatteryManager", "onchargingtimechange_set", arguments);
    }
  }.onchargingtimechange
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["BatteryManager"].prototype, "ondischargingtimechange", {
  configurable: true,
  enumerable: true,
  get: {
    ondischargingtimechange() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["BatteryManager"].prototype, "BatteryManager", "ondischargingtimechange_get", arguments);
    }
  }.ondischargingtimechange,
  set: {
    ondischargingtimechange() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["BatteryManager"].prototype, "BatteryManager", "ondischargingtimechange_set", arguments);
    }
  }.ondischargingtimechange
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["BatteryManager"].prototype, "onlevelchange", {
  configurable: true,
  enumerable: true,
  get: {
    onlevelchange() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["BatteryManager"].prototype, "BatteryManager", "onlevelchange_get", arguments);
    }
  }.onlevelchange,
  set: {
    onlevelchange() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["BatteryManager"].prototype, "BatteryManager", "onlevelchange_set", arguments);
    }
  }.onlevelchange
});