// indexedDB对象

bodavm.memory.globalobj['indexedDB'] = {
  _boisinit: bodavm.config.isinit
};
bodavm.memory.globalobj['indexedDB'].__proto__ = bodavm.memory.globalobj['IDBFactory'].prototype;