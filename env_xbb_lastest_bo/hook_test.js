// hook
document.getElementsByTagName_bo=document.getElementsByTagName
document.getElementsByTagName=function (tagname){

    if (tagname =='meta'){debugger}

    return document.getElementsByTagName_bo.apply(this,arguments)
    
}


localStorage.setItem__=localStorage.setItem
localStorage.setItem=function (arg){

debugger
return localStorage.setItem__.apply(this,arguments)
}

