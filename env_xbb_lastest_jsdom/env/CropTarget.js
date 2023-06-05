// CropTarget对象

bodavm.memory.globalobj['CropTarget'] = function CropTarget() {
  console.log_copy('CropTarget 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof CropTarget)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['CropTarget'], "CropTarget");
bodavm.toolsFunc.defineProperty('CropTarget', "fromElement", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function fromElement() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['CropTarget'].undefined, "CropTarget", "fromElement", arguments);
  }
});