// openDatabase对象
openDatabase = {
  openDatabase(a) {
    console.log_copy(`openDatabase 使用-- >`, a);
  }
}.openDatabase;
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