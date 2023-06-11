// alert对象
alert = function () {};
bodavm.toolsFunc.safeProto(alert, 'alert');
// bodavm.toolsFunc.defineProperty(alert, "length", {configurable:true, enumerable:false, writable:false, value:0});
bodavm.toolsFunc.defineProperty(alert, "name", {
  configurable: true,
  enumerable: false,
  writable: false,
  value: "alert"
});