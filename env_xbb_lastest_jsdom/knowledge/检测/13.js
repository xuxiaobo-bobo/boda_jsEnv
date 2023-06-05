
function test_eq(){
    if (!(navigator.plugins[0]==navigator.plugins[0])){
        console.log(`navigator.plugins[0]==navigator.plugins[0] 可以被检测`)
    }

    if (!(document.documentElement==document.documentElement)){
        console.log(`document.documentElement==document.documentElement 可以被检测`)
    }
    if (!(document.scripts==document.scripts)){
        console.log(`document.scripts==document.scripts 可以被检测`)
    }
    if (!(document.images==document.images)){
        console.log(`document.images==document.images 可以被检测`)
    }
    if (!(document.getElementsByTagName('div')==document.getElementsByTagName('div'))){
        console.log(`document.getElementsByTagName('div')==document.getElementsByTagName('div') 可以被检测`)
    }
    if (!(document.documentElement.getElementsByTagName('div')==document.documentElement.getElementsByTagName('div'))){
        console.log(`document.documentElement.getElementsByTagName('div')==document.documentElement.getElementsByTagName('div') 可以被检测`)
    }

    if(window.matchMedia(1)==window.matchMedia(1)){
        console.log(`window.matchMedia(1)==window.matchMedia(1)可以被检测`)
    }
    
    
    if(!(navigator.credentials==navigator.credentials)){
        console.log(`navigator.credentials==navigator.credentials可以被检测`)
    }
    
    if (!(navigator.storage==navigator.storage)){
            console.log(`navigator.storage==navigator.storage可以被检测`)
    
    }
    
    if(!(navigator.permissions==navigator.permissions)){
        console.log(`navigator.permissions==navigator.permissions可以被检测`)
    
    }
    
    if(!(navigator.locks==navigator.locks)){
        console.log(`navigator.locks==navigator.locks可以被检测`)
    
    }
    
    if(!(document.documentElement.style==document.documentElement.style)){
            console.log(`document.documentElement.style==document.documentElement.style可以被检测`)
    
    }
    if ((document.getElementsByTagName('div')[0].style==document.documentElement.style)){
                console.log(`document.getElementsByTagName('div')[0].style==document.documentElement.style可以被检测`)
    
    }
}

test_eq()
