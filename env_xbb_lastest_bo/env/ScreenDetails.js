// ScreenDetails对象

ScreenDetails = function ScreenDetails() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof ScreenDetails)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('ScreenDetails 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(ScreenDetails, "ScreenDetails");
ScreenDetails.prototype.__proto__ = EventTarget.prototype;
ScreenDetails.__proto__ = EventTarget;
bodavm.toolsFunc.defineProperty(ScreenDetails.prototype, "screens", {
  configurable: true,
  enumerable: true,
  get: function screens() {
    return bodavm.toolsFunc.dispatch(this, ScreenDetails.prototype, "ScreenDetails", "screens_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(ScreenDetails.prototype, "currentScreen", {
  configurable: true,
  enumerable: true,
  get: function currentScreen() {
    return bodavm.toolsFunc.dispatch(this, ScreenDetails.prototype, "ScreenDetails", "currentScreen_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(ScreenDetails.prototype, "onscreenschange", {
  configurable: true,
  enumerable: true,
  get: function onscreenschange() {
    return bodavm.toolsFunc.dispatch(this, ScreenDetails.prototype, "ScreenDetails", "onscreenschange_get", arguments);
  },
  set: function onscreenschange() {
    return bodavm.toolsFunc.dispatch(this, ScreenDetails.prototype, "ScreenDetails", "onscreenschange_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(ScreenDetails.prototype, "oncurrentscreenchange", {
  configurable: true,
  enumerable: true,
  get: function oncurrentscreenchange() {
    return bodavm.toolsFunc.dispatch(this, ScreenDetails.prototype, "ScreenDetails", "oncurrentscreenchange_get", arguments);
  },
  set: function oncurrentscreenchange() {
    return bodavm.toolsFunc.dispatch(this, ScreenDetails.prototype, "ScreenDetails", "oncurrentscreenchange_set", arguments);
  }
});