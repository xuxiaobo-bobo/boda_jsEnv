// captureEvents对象
captureEvents = () => {
  console.log_copy(`captureEvents arg->`, arguments);
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