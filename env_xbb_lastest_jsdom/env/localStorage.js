// localStorage对象

bodavm.memory.globalobj['localStorage'] = {
    _boisinit:bodavm.config.isinit
    }

bodavm.memory.globalobj['localStorage'].__proto__=bodavm.memory.globalobj['Storage'].prototype;

