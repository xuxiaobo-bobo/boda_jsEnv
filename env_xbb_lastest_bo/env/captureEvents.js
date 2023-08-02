// captureEvents对象
captureEvents = (a) => {
  console.log_copy(`captureEvents arg->`, a);
};
bodavm.toolsFunc.safefunction(captureEvents, "captureEvents");
bodavm.toolsFunc.defineProperty(captureEvents, "length", {
  configurable: true,
  enumerable: false,
  writable: false,
  value: 0
});
bodavm.toolsFunc.defineProperty(captureEvents, "name", {
  configurable: true,
  enumerable: false,
  writable: false,
  value: 'captureEvents'
});