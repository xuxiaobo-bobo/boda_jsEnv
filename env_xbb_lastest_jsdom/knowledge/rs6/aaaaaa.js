window = global;

createElementDiv = {}
createElementDiv = new Proxy(createElementDiv, {
    get(target, key) {
        console.log('createElementDiv 获取了' + key + '属性');
        return target[key]
    }
}); 


document = {
    createElement:function (v1) {
        console.log("调用了createElement"+v1);
        if (v1 == 'div') {
            return createElementDiv
        }
    }
};
top = window;

location = {

};



$_ts=window['$_ts'];if(!$_ts)$_ts={};$_ts.nsd=58431;$_ts.cd="qxaerrAlWsaqhA3zraL3Hqqzr10ccfGzqqlQHqqzrP0ocfGzrAlEHqqzmn0qcfGZqc0DmnZYxuEErkqZqc0mhAEtDc0qqAGZqc01hAQtDc0ccGAkHqqUha9zlc0mosExrr7Zqc0DhAQtDcGqhAVzqGL3Hqqzqc0rcfGyrOEtrrgzrGLlquaqhAAzlAL3hAqtrqVzrGlmhAVtrr3TrsE2iAqCWAEmWsAyEP5pLUUT4daUr3lLwnjEQWCWvbhnHMEO4VFv.7O_XKgsqqAuraQqic0cp22ZxVRZYoVTwTT.MDzAMTmpwYlacUp0QvW2HYzUwCSNhb2nMmVXMvrXFnzXsDy7tKSnFCaYMoYNM2L.Evl_A9zVskw91kwpQYfPVsJJVmECw032ibx7wK2XtC2TYKg7F6w.FnSUwCSNhb2nMmVXMvrXFTL7DTmEQV2Xs9JNi92Kw92fRAzpAUwDsv3PqT2XQDy.tCyWMbaNMox.MrY7wK2XtC2TYKg7F6w.FT0YEmpt8CrdJpwBFmw2AbmWYUYKUofpQ6lMimz.wCz.hmw6MD9XFUx7Y1yXQDy.tCyWMbaNMox.MDAXE2J1KkxUsszhYCmswlxGFVp6VoTcKVGGi2y7Qbz7mKSTFKg.FUYYMPS.wCz.hmw6MD9XFUx7YYZ7xTY6Wmwzi0NwK6RjR9eLsoTlw9JiU9VPHT2NQbSYhbyaMb7.M9SXMc27Qbz7mKSTFKg.FUYYM20NEDeXwVrBAumaKl2986pvJv3NACwXM0lvimSNwYYXhDz6FC77Y6w7F1yNQbSYhbyaMb7.M9SXMmGXxKNxsCzst6R8UCTH8kfPwvYqMGTq1bAGHYSXsDy7tKSnFCaYMoYNMPzNwYYXhDz6FC77Y6w7FYZ.xUYBWuwNslTiJYeLYK97YuenFvJXYbW2HYzUwCSNhb2nMmVXMvrXFnzXsDy7tKSnFCaYMoYNM2L.E9STJvrjKlGSqY3SM2rTAKxWVUmYso32ibx7wK2XtC2TYKg7F6w.FnSUwCSNhb2nMmVXMvrXFTNemKSTFKyFkAl61Ve.AkYPM9aysYpLw6r01l34ADN1wvmC1bG5wTTXsbyzwb0yFoprcumRQDlZQUJnYYYnMkpHQTehi0J1F2xzskYgpbJEYuzkFm9uRuE0JafNRlqyVbxckTwmWCNWpvmfhDxvRkgnWA77Fv3yQDYWVbJ21vfdICSfhDxvRkgnWA77Fv3y3VxRFbp_RkmuMDNjhDxvRkgnWA77Fv3yHCfTFsRyYUzYVUpVhDNCispaQ0zFA2wsF6wEVu26A9pxwmmn8lfTAYWZKlmgpDQ0p2J3w0LaHOzrMKmrsuWTpYrb8pwG3bW4WO3nmCfuH2pkA0y5JUQTwuykJrwG3bW4WO3nmCfuHPS2RK3qJul6hDT0qk9cqsVcrO3qtbN0QUx0HsAHJOE6WOZaJGWCJk3cqKYPUu7TJqElJO3hqGL0WOZ0Ja9SWuQ_raW0cOQnrphxlawLMPK.M.lp9rY8HBkZrSQe8_SzVs6tgAqqqqqqqqqqqrvxe4sHvVB6C5YbuBs1ebP.n26qIXexo1ZnlNYP2s2C7aEtWsEdJk3qJsWuWAQDWs9EWsW_Wk3Ckk3TWqE7s2RuwCeq3Um1pmSGp0yY1YRKk6rKHkE6W0lW8v2rQUJOQUyEpvq_J127MaEqrAWuralxqGlnqdaa8fYO3K3XRbNnmKJuFcybQK9Y3DmXhbYbwrYGMUVXRKyXmKl7RbJ2tCJtQ1SbQUl.3TRBhDRnwnz9Ko373Ky.tCpK31SfMUW.RmRf8c2vICE7UDT0tKp.RPSIMbWNRDfNhmezwc29FD20mKY9RnyGMb3YRULNRKeLhmmXQc2jw6Q7VUROtKz9FcSAMD9NFC2fhmr7Qn2.wDG7V6l7MCJTtCNxR1SBQbxGhmJSMC7XMKRCKcy7MDq.FCe8hbT9QPzjFY0XMUVCtCNaKcyzWKW.FvqthbTTR1zjF0ZXMKNbtCNBsnyzMDZ.FvrxhbTCFnzjQmS2hDNGM1zBKvL7FbYGtCeY3cSjMbE.M0T9hoY4t6wyKPyaRol.wCwVhvrTMnz6QlLXQoYCt6w9UnyawURdt6rUR1STFCA.QmY.hoYS3nzSVDA7woRdt6x3hvxLhvYbMpYaMUJGt6Y2UPyn3ol.wUpIhvx9Qcz0MSYS3b9XwDmgmUm6Rcy0QD3YQURPhvp5QSYC3UQXQCR_mURN3nyuMbRIhvpjQoYPM90XwoTCt6J0UnyCwb3.QUJthvRCw1zS8m0XwCN931z6YbpbJnyaFv3YwKT9hvrbwfYTQo3XICYzmUNaFcydF6WY8bSC8PzdQTVX8DfXt607ACzatKJ6McSxMb2CwPzXQmGcqqVDKcJL1aElKPRXRAqeU1p9KqQkUSTO1qVqWOWqik7qrkWorOl";if($_ts.lcd)$_ts.lcd();
    require('D:/spider/boda_jsEnv/env_xbb_lastest_jsdom/knowledge/rs6/UeB6UE6hKAqX.bbf9512.js');
    p = new XMLHttpRequest;
    p.open('GET', getAttribute_href, true)
    console.log(document.cookie);
    console.log(window_KOnB2enu_url)
