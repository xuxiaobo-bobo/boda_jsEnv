var $=function (){

}

$.get=function(url,data,success,dataType){
    console.log_copy(`$.get -->`,'arg -> ',JSON.stringify(arguments))

}
$.post=function(url, data, success, dataType){
    console.log_copy(`$.post -->`,'arg -> ',JSON.stringify(arguments))

}
$.ajax=function (obj){
    console.log_copy(`$.ajax -->`,'arg -> ',JSON.stringify(obj))
}


var axios=function(){}
axios.get=function(){
    console.log_copy(`axios.get -->`,'arg -> ',JSON.stringify(arguments))
}
axios.post=function(){
    console.log_copy(`axios.post -->`,'arg -> ',JSON.stringify(arguments))

}