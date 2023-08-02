// IdleDetector对象

IdleDetector = function IdleDetector() {
  let arg = arguments[0];
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('IdleDetector 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(IdleDetector, "IdleDetector");
IdleDetector.prototype.__proto__ = EventTarget.prototype;
IdleDetector.__proto__ = EventTarget;
bodavm.toolsFunc.defineProperty(IdleDetector, "requestPermission", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function requestPermission() {
    return bodavm.toolsFunc.dispatch(this, IdleDetector, "IdleDetector", "requestPermission", arguments);
  }
});
bodavm.toolsFunc.defineProperty(IdleDetector.prototype, "userState", {
  configurable: true,
  enumerable: true,
  get: function userState() {
    return bodavm.toolsFunc.dispatch(this, IdleDetector.prototype, "IdleDetector", "userState_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(IdleDetector.prototype, "screenState", {
  configurable: true,
  enumerable: true,
  get: function screenState() {
    return bodavm.toolsFunc.dispatch(this, IdleDetector.prototype, "IdleDetector", "screenState_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(IdleDetector.prototype, "onchange", {
  configurable: true,
  enumerable: true,
  get: function onchange() {
    return bodavm.toolsFunc.dispatch(this, IdleDetector.prototype, "IdleDetector", "onchange_get", arguments);
  },
  set: function onchange() {
    return bodavm.toolsFunc.dispatch(this, IdleDetector.prototype, "IdleDetector", "onchange_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(IdleDetector.prototype, "start", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function start() {
    return bodavm.toolsFunc.dispatch(this, IdleDetector.prototype, "IdleDetector", "start", arguments);
  }
});