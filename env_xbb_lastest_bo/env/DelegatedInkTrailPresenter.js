// DelegatedInkTrailPresenter对象

DelegatedInkTrailPresenter = function DelegatedInkTrailPresenter() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof DelegatedInkTrailPresenter)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('DelegatedInkTrailPresenter 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(DelegatedInkTrailPresenter, "DelegatedInkTrailPresenter");
bodavm.toolsFunc.defineProperty(DelegatedInkTrailPresenter.prototype, "presentationArea", {
  configurable: true,
  enumerable: true,
  get: function presentationArea() {
    return bodavm.toolsFunc.dispatch(this, DelegatedInkTrailPresenter.prototype, "DelegatedInkTrailPresenter", "presentationArea_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(DelegatedInkTrailPresenter.prototype, "expectedImprovement", {
  configurable: true,
  enumerable: true,
  get: function expectedImprovement() {
    return bodavm.toolsFunc.dispatch(this, DelegatedInkTrailPresenter.prototype, "DelegatedInkTrailPresenter", "expectedImprovement_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(DelegatedInkTrailPresenter.prototype, "updateInkTrailStartPoint", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function updateInkTrailStartPoint() {
    return bodavm.toolsFunc.dispatch(this, DelegatedInkTrailPresenter.prototype, "DelegatedInkTrailPresenter", "updateInkTrailStartPoint", arguments);
  }
});