// openDatabase对象
openDatabase = () => {
  console.log_copy(`openDatabase 使用 arg->`, arguments);
};
bodavm.toolsFunc.safefunction(openDatabase, "openDatabase");
bodavm.toolsFunc.defineProperty(openDatabase, "length", {
  configurable: true,
  enumerable: false,
  writable: false,
  value: 4
});
bodavm.toolsFunc.defineProperty(openDatabase, "name", {
  configurable: true,
  enumerable: false,
  writable: false,
  value: 'openDatabase'
});