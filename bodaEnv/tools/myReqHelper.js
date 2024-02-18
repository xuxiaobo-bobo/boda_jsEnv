// var $=function (){
//     bodaEnv.toolsFunc.console_copy(`使用 $$$$$$$$ ----> arg ->`,JSON.stringify(arguments))
//
// }
//
// $.get=function(url,data,success,dataType){
//     bodaEnv.toolsFunc.console_copy(`$$$$$$$$.get -->`,'arg -> ',JSON.stringify(arguments))
//
// }
// $.post=function(url, data, success, dataType){
//     bodaEnv.toolsFunc.console_copy(`$$$$$$$.post -->`,'arg -> ',JSON.stringify(arguments))
//
// }
// $.ajax=function (obj){
//     bodaEnv.toolsFunc.console_copy(`$$$$$$$$.ajax -->`,'arg -> ',JSON.stringify(obj))
// }
//
//
globalThis.axios=function(){
    bodaEnv.toolsFunc.console_copy(`使用 axiosaxiosaxiosaxiosaxios ----> arg ->`,JSON.stringify(arguments))

}
axios.get=function(){
    bodaEnv.toolsFunc.console_copy(`axiosaxiosaxiosaxiosaxios.get -->`,'arg -> ',JSON.stringify(arguments))
}
axios.post=function(){
    bodaEnv.toolsFunc.console_copy(`axiosaxiosaxiosaxios.post -->`,'arg -> ',JSON.stringify(arguments))

}
bodaEnv.memory.allwindowProp=bodaEnv.toolsFunc.getOwnPropertyNames_bo(window)


// debugger
