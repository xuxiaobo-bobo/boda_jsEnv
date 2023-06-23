function myProxy(obj, name) {
    return new Proxy(obj, {
        get(target, propKey, receiver) { //拦截对象属性的读取，比如proxy.foo和proxy['foo']。
            let temp = Reflect.get(target, propKey, receiver);
            console.log(`${name} -> get ${propKey.toString()} return -> ${temp}`);
            if (typeof temp == 'object') {
                temp = myProxy(temp, name + " => " + propKey)
            }
            return temp;
        },
        set(target, propKey, value, receiver) { //拦截对象属性的设置，比如proxy.foo = v或proxy['foo'] = v，返回一个布尔值。
            const temp = Reflect.set(target, propKey, value, receiver);
            console.log(`${name} -> set ${propKey} value -> ${value}`);
            return temp;
        },
        has(target, propKey) { //拦截propKey in proxy的操作，返回一个布尔值。
            const temp = Reflect.has(target, propKey);
            console.log(`${name} -> has ${propKey.toString()}`);
            return temp;
        },
        deleteProperty(target, propKey) { //拦截delete proxy[propKey]的操作，返回一个布尔值。
            const temp = Reflect.deleteProperty(target, propKey);
            console.log(`${name} -> deleteProperty ${propKey}`);
            return temp;
        },
        ownKeys(target) { //拦截Object.getOwnPropertyNames(proxy)、Object.getOwnPropertySymbols(proxy)、Object.keys(proxy)、for...in循环，返回一个数组。该方法返回目标对象所有自身的属性的属性名，而Object.keys()的返回结果仅包括目标对象自身的可遍历属性。
            const temp = Reflect.ownKeys(target);
            console.log(`${name} -> ownKeys ${temp}`);
            return temp;
        },
        getOwnPropertyDescriptor(target, propKey) { //拦截Object.getOwnPropertyDescriptor(proxy, propKey)，返回属性的描述对象。
            const temp = Reflect.getOwnPropertyDescriptor(target, propKey);
            return temp;
        },
        defineProperty(target, propKey, propDesc) { //拦截Object.defineProperty(proxy, propKey, propDesc）、Object.defineProperties(proxy, propDescs)，返回一个布尔值。
            const temp = Reflect.defineProperty(target, propKey, propDesc);
            return temp;
        },
        preventExtensions(target) { //拦截Object.preventExtensions(proxy)，返回一个布尔值。
            const temp = Reflect.preventExtensions(target);
            return temp;
        },
        getPrototypeOf(target) { //拦截Object.getPrototypeOf(proxy)，返回一个对象。
            const temp = Reflect.getPrototypeOf(target);
            return temp;
        },
        isExtensible(target) { //拦截Object.isExtensible(proxy)，返回一个布尔值。
            const temp = Reflect.isExtensible(target);
            return temp;
        },
        setPrototypeOf(target, proto) { //拦截Object.setPrototypeOf(proxy, proto)，返回一个布尔值。如果目标对象是函数，那么还有两种额外操作可以拦截。
            const temp = Reflect.setPrototypeOf(target, proto);
            return temp;
        },
        apply(target, object, args) { //拦截 Proxy 实例作为函数调用的操作，比如proxy(...args)、proxy.call(object, ...args)、proxy.apply(...)。
            const temp = Reflect.apply(target, object, args);
            return temp;
        },
        construct(target, args) { //拦截 Proxy 实例作为构造函数调用的操作，比如new proxy(...args)。
            const temp = Reflect.construct(target, args);
            return temp;
        }
    })
}

const fs = require('fs');
const path = require('path');
const originalLog = console.log;

console.log = function (message) {
  // 将日志输出到控制台
  originalLog.apply(console, arguments);

  // 将日志追加写入文件
  const logFilePath = path.join(__dirname, 'logs.txt');
  fs.appendFileSync(logFilePath, message + '\n');
};

window = global;

window = myProxy(window,'window');
document = {};
location = {};
top = {
    location:""
};
    window.setInterval = function (v1, v2) {
        return ''
    };
    window.setTimeout = function (v1, v2) {
        return ''
    };


$_ts=window['$_ts'];if(!$_ts)$_ts={};$_ts.nsd=58431;$_ts.cd="qxaerrAlWsaqhA3zraL3Hqqzr10ccfGzqqlQHqqzrP0ocfGzrAlEHqqzmn0qcfGZqc0DmnZYxuEErkqZqc0mhAEtDc0qqAGZqc01hAQtDc0ccGAkHqqUha9zlc0mosExrr7Zqc0DhAQtDcGqhAVzqGL3Hqqzqc0rcfGyrOEtrrgzrGLlquaqhAAzlAL3hAqtrqVzrGlmhAVtrr3TrsE2iAqCWAEmWsAyEP5pLUUT4daUr3lLwnjEQWCWvbhnHMEO4VFv.7O_XKgsqqAuraQqic0cp22ZxVRZYoVTwTT.MDzAMTmpwYlacUp0QvW2HYzUwCSNhb2nMmVXMvrXFnzXsDy7tKSnFCaYMoYNM2L.Evl_A9zVskw91kwpQYfPVsJJVmECw032ibx7wK2XtC2TYKg7F6w.FnSUwCSNhb2nMmVXMvrXFTL7DTmEQV2Xs9JNi92Kw92fRAzpAUwDsv3PqT2XQDy.tCyWMbaNMox.MrY7wK2XtC2TYKg7F6w.FT0YEmpt8CrdJpwBFmw2AbmWYUYKUofpQ6lMimz.wCz.hmw6MD9XFUx7Y1yXQDy.tCyWMbaNMox.MDAXE2J1KkxUsszhYCmswlxGFVp6VoTcKVGGi2y7Qbz7mKSTFKg.FUYYMPS.wCz.hmw6MD9XFUx7YYZ7xTY6Wmwzi0NwK6RjR9eLsoTlw9JiU9VPHT2NQbSYhbyaMb7.M9SXMc27Qbz7mKSTFKg.FUYYM20NEDeXwVrBAumaKl2986pvJv3NACwXM0lvimSNwYYXhDz6FC77Y6w7F1yNQbSYhbyaMb7.M9SXMmGXxKNxsCzst6R8UCTH8kfPwvYqMGTq1bAGHYSXsDy7tKSnFCaYMoYNMPzNwYYXhDz6FC77Y6w7FYZ.xUYBWuwNslTiJYeLYK97YuenFvJXYbW2HYzUwCSNhb2nMmVXMvrXFnzXsDy7tKSnFCaYMoYNM2L.E9STJvrjKlGSqY3SM2rTAKxWVUmYso32ibx7wK2XtC2TYKg7F6w.FnSUwCSNhb2nMmVXMvrXFTNemKSTFKyFkAl61Ve.AkYPM9aysYpLw6r01l34ADN1wvmC1bG5wTTXsbyzwb0yFoprcumRQDlZQUJnYYYnMkpHQTehi0J1F2xzskYgpbJEYuzkFm9uRuE0JafNRlqyVbxckTwmWCNWpvmfhDxvRkgnWA77Fv3yQDYWVbJ21vfdICSfhDxvRkgnWA77Fv3y3VxRFbp_RkmuMDNjhDxvRkgnWA77Fv3yHCfTFsRyYUzYVUpVhDNCispaQ0zFA2wsF6wEVu26A9pxwmmn8lfTAYWZKlmgpDQ0p2J3w0LaHOzrMKmrsuWTpYrb8pwG3bW4WO3nmCfuH2pkA0y5JUQTwuykJrwG3bW4WO3nmCfuHPS2RK3qJul6hDT0qk9cqsVcrO3qtbN0QUx0HsAHJOE6WOZaJGWCJk3cqKYPUu7TJqElJO3hqGL0WOZ0Ja9SWuQ_raW0cOQnrphxlawLMPK.M.lp9rY8HBkZrSQe8_SzVs6tgAqqqqqqqqqqqrvxe4sHvVB6C5YbuBs1ebP.n26qIXexo1ZnlNYP2s2C7aEtWsEdJk3qJsWuWAQDWs9EWsW_Wk3Ckk3TWqE7s2RuwCeq3Um1pmSGp0yY1YRKk6rKHkE6W0lW8v2rQUJOQUyEpvq_J127MaEqrAWuralxqGlnqdaa8fYO3K3XRbNnmKJuFcybQK9Y3DmXhbYbwrYGMUVXRKyXmKl7RbJ2tCJtQ1SbQUl.3TRBhDRnwnz9Ko373Ky.tCpK31SfMUW.RmRf8c2vICE7UDT0tKp.RPSIMbWNRDfNhmezwc29FD20mKY9RnyGMb3YRULNRKeLhmmXQc2jw6Q7VUROtKz9FcSAMD9NFC2fhmr7Qn2.wDG7V6l7MCJTtCNxR1SBQbxGhmJSMC7XMKRCKcy7MDq.FCe8hbT9QPzjFY0XMUVCtCNaKcyzWKW.FvqthbTTR1zjF0ZXMKNbtCNBsnyzMDZ.FvrxhbTCFnzjQmS2hDNGM1zBKvL7FbYGtCeY3cSjMbE.M0T9hoY4t6wyKPyaRol.wCwVhvrTMnz6QlLXQoYCt6w9UnyawURdt6rUR1STFCA.QmY.hoYS3nzSVDA7woRdt6x3hvxLhvYbMpYaMUJGt6Y2UPyn3ol.wUpIhvx9Qcz0MSYS3b9XwDmgmUm6Rcy0QD3YQURPhvp5QSYC3UQXQCR_mURN3nyuMbRIhvpjQoYPM90XwoTCt6J0UnyCwb3.QUJthvRCw1zS8m0XwCN931z6YbpbJnyaFv3YwKT9hvrbwfYTQo3XICYzmUNaFcydF6WY8bSC8PzdQTVX8DfXt607ACzatKJ6McSxMb2CwPzXQmGcqqVDKcJL1aElKPRXRAqeU1p9KqQkUSTO1qVqWOWqik7qrkWorOl";if($_ts.lcd)$_ts.lcd();
    require('D:/spider/boda_jsEnv/env_xbb_lastest_jsdom/knowledge/rs6/UeB6UE6hKAqX.bbf9512.js');
    p = new XMLHttpRequest;
    p.open('GET', getAttribute_href, true)
    console.log(document.cookie);
    console.log(window_KOnB2enu_url)
    