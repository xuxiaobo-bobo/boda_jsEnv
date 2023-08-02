// CDATASection对象

CDATASection = function CDATASection() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof CDATASection)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('CDATASection 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(CDATASection, "CDATASection");
CDATASection.prototype.__proto__ = Text.prototype;
CDATASection.__proto__ = Text;