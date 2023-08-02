// NavigatorUAData对象

NavigatorUAData = function NavigatorUAData() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof NavigatorUAData)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('NavigatorUAData 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(NavigatorUAData, "NavigatorUAData");
bodavm.toolsFunc.defineProperty(NavigatorUAData.prototype, "brands", {
  configurable: true,
  enumerable: true,
  get: function brands() {
    return bodavm.toolsFunc.dispatch(this, NavigatorUAData.prototype, "NavigatorUAData", "brands_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(NavigatorUAData.prototype, "mobile", {
  configurable: true,
  enumerable: true,
  get: function mobile() {
    return bodavm.toolsFunc.dispatch(this, NavigatorUAData.prototype, "NavigatorUAData", "mobile_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(NavigatorUAData.prototype, "platform", {
  configurable: true,
  enumerable: true,
  get: function platform() {
    return bodavm.toolsFunc.dispatch(this, NavigatorUAData.prototype, "NavigatorUAData", "platform_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(NavigatorUAData.prototype, "getHighEntropyValues", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getHighEntropyValues() {
    return bodavm.toolsFunc.dispatch(this, NavigatorUAData.prototype, "NavigatorUAData", "getHighEntropyValues", arguments);
  }
});
bodavm.toolsFunc.defineProperty(NavigatorUAData.prototype, "toJSON", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function toJSON() {
    return bodavm.toolsFunc.dispatch(this, NavigatorUAData.prototype, "NavigatorUAData", "toJSON", arguments);
  }
});