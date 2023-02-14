// 代理器失效 1.没有使用代理对象  2.代理器脱钩 目标代码通过 this 绕过代理器  
// 解决办法
window = this;
window = new Proxy(window, this)
// globalThis=new Proxy(globalThis,'globalThis')
// window.mythis=function(){
/// 网站扣下的代码
// }
// mythis()

//2自执行
for (let name in global) {
    switch (name) {
        case "window":
            continue;
        case "global":
            continue;
    }
    window[name] = global[name];
    delete global[name];
}

window = myProxy(window, "window");
Object.setPrototypeOf(global, window);
!function () { }()



//全局hook
bobomyHookfilter={
    'location':true,
    'Function':true,
    'Object':true,
    'window':true,
    'Window':true,
    'document':true,
    'bobomyHook':true,
    "hookObjs":true,
    'objlist':true,
    'JSON':true,
    'bobomyHookfilter':true,
    'Math':true,
    'Intl':true,
    'Reflect':true,
    'console':true,
    'CSS':true,
    'Atomics':true,
    'top':true,


}
hookObjs = {
    
}
objlist=[
    {
        'name':"window",
        'obj':window
    },
    {
        'name':"document",
        'obj':document
    },
    {
        'name':"screen",
        'obj':screen
    },
    {
        'name':"history",
        'obj':history
    },
    {
        'name':"localStorage",
        'obj':localStorage
    },
    {
        'name':'navigation',
        'obj':navigation
    },
    {
        'name':'webkitStorageInfo',
        'obj':webkitStorageInfo
    },
    {
        'name':'speechSynthesis',
        'obj':speechSynthesis
        
    },
    {
        'name':'sessionStorage',
        'obj':sessionStorage
        
    },
    {
        'name':'customElements',
        'obj':customElements
    },
    {
        'name':'clientInformation',
        'obj':clientInformation
    },
    {
        'name':'menubar',
        'obj':menubar
    },
    {
        'name':'toolbar',
        'obj':toolbar
    },
    {
        'name':'visualViewport',
        'obj':visualViewport
    },

    {
        'name':'styleMedia',
        'obj':styleMedia
    },

    {
        'name':'scheduler',
        'obj':scheduler
    },

    {
        'name':'indexedDB',
        'obj':indexedDB
    },


    {
        'name':'trustedTypes',
        'obj':trustedTypes
    },

    {
        'name':'cookieStore',
        'obj':cookieStore
    },
    {
        'name':'external',
        'obj':external
        
    }


]
for (let i = 0; i < objlist.length; i++) {
    let name = objlist[i]['name'];
    let obj= objlist[i]['obj']
    hookObjs[name] = {}
    bobomyHook(obj,name)
}
function bobomyHook(obj,name) {

    let boboobjname = Object.getOwnPropertyNames(obj)
    for (let i =0; i<boboobjname.length;i++) {
        //i  name
        if (bobomyHookfilter[boboobjname[i]]){continue}
        let bobodesc = Object.getOwnPropertyDescriptor(obj, boboobjname[i])
        // console.log(bobodesc)
        let boboconfigurable_ = bobodesc['configurable']
        let boboenumerable_ = bobodesc['enumerable']
        let bobovalue_ = bobodesc['value']
        let bobowritable_ = bobodesc['writable']
        let boboget_ = bobodesc['get']
        let boboset_ = bobodesc['set']
        // console.log(bobodesc)
        // get set 与value  writable不能共存  configurable enumerable这两个是肯定有的
        try{
            if (boboget_ || boboset_) {
                hookObjs[name][boboobjname[i] + '_get'] = boboget_
                hookObjs[name][boboobjname[i] + '_set'] = boboset_
                const myvalue=boboobjname[i]
                Object.defineProperty(obj,myvalue,{
                    configurable:boboconfigurable_,
                    enumerable:boboenumerable_,
                    get:boboget_?function (){
                        let args=arguments
                        let result=hookObjs[name][myvalue + '_get'].apply(this,arguments)
                        console.log(`${name} get-> ${myvalue} arg->${JSON.stringify(args)} ->  result -> ${result}`)
                        return result
                    }:undefined,
                    set:boboset_?function(){
                        let args=arguments
                        let result=hookObjs[name][myvalue + '_set'].apply(this,arguments)
                        console.log(`${name} set-> ${myvalue} -> arg->${JSON.stringify(args)}  value -> ${result}`)
                        return result
                    }:undefined
                })
    
            } else {
                hookObjs[name][boboobjname[i] + '_value']=bobovalue_
                if (typeof bobovalue_ =='object'){
                    const myvalue=boboobjname[i]
                    console.log(`${name} value-> ${myvalue} result ->${bobovalue_}`);
                    Object.defineProperty(obj,boboobjname[i],{
                        configurable:boboconfigurable_,
                        enumerable:boboenumerable_,
                        writable:bobowritable_,
                        value:bobovalue_
                    })
    
                }else if (typeof bobovalue_ =='function'){
                    const myvalue=boboobjname[i]
                    Object.defineProperty(obj,boboobjname[i],{
                        configurable:boboconfigurable_,
                        enumerable:boboenumerable_,
                        writable:bobowritable_,
                        value:function (){
                            let args=arguments
                            let result=hookObjs[name][myvalue + '_value'].apply(this,arguments)
                            console.log(`${name} value apply -> ${myvalue} arg->${JSON.stringify(args)} result ->${result}`);
                            return result
                        }
                    })
                }
            }         
        }catch{}
        
    }
   
    if (obj.__proto__ !=null){
        bobomyHook(obj.__proto__,name)
    }

    
}

// window.atob('123')