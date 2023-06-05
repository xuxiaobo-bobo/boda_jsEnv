// DelegatedInkTrailPresenter对象

bodavm.memory.globalobj['DelegatedInkTrailPresenter'] = function DelegatedInkTrailPresenter() {
  console.log_copy('DelegatedInkTrailPresenter 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof DelegatedInkTrailPresenter)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['DelegatedInkTrailPresenter'], "DelegatedInkTrailPresenter");
bodavm.toolsFunc.defineProperty('DelegatedInkTrailPresenter', "presentationArea", {
  configurable: true,
  enumerable: true,
  get: function presentationArea() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['DelegatedInkTrailPresenter'].prototype, "DelegatedInkTrailPresenter", "presentationArea_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('DelegatedInkTrailPresenter', "expectedImprovement", {
  configurable: true,
  enumerable: true,
  get: function expectedImprovement() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['DelegatedInkTrailPresenter'].prototype, "DelegatedInkTrailPresenter", "expectedImprovement_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('DelegatedInkTrailPresenter', "updateInkTrailStartPoint", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function updateInkTrailStartPoint() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['DelegatedInkTrailPresenter'].prototype, "DelegatedInkTrailPresenter", "updateInkTrailStartPoint", arguments);
  }
}, 'prototype');