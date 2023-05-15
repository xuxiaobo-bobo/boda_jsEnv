// caches对象
bodavm.memory.globalobj['caches'] = {
    _boisinit:bodavm.config.isinit
    }
bodavm.memory.globalobj['caches'].__proto__=bodavm.memory.globalobj['CacheStorage'].prototype;
