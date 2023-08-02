// Permissions对象

Permissions = function Permissions() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof Permissions)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('Permissions 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(Permissions, "Permissions");
bodavm.toolsFunc.defineProperty(Permissions.prototype, "query", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function query() {
    return bodavm.toolsFunc.dispatch(this, Permissions.prototype, "Permissions", "query", arguments);
  }
});