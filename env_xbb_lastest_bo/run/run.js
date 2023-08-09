
function test_document_all(){
  debugger
  if (!(document.all[0])){
      console.log(`document.all[0]可以被检测`)

  }
  if (!document.all==undefined){
          console.log(`document.all==undefined可以被检测`)

}
if (!document.all()==document.all){
      console.log(`!document.all()==document.all 可以被检测`)

}	
if (!document.all()==undefined){
            console.log(`!document.all()==undefined可以被检测`)

}

  if (!(document.all.toString() =='[object HTMLAllCollection]')){
      console.log(`document.all.toString()可以被检测`)
  }
  if (!(document.all == undefined)){
      console.log(`document.all == undefined可以被检测`)

  }
  if (!(typeof(document.all)=='undefined')){
      console.log(`typeof(document.all)可以被检测`)

  }
  if ( !('all' in document ==true)){
      console.log(`'all' in document可以被检测`)

  }
  debugger
  if (!(document.all(1))){
      console.log(`'document.all(1)可以被检测`)

  }
  if (!(document.all()==null)){
      console.log(`'document.all()可以被检测`)

  }

  if (!(document.all ==document.all)){
      console.log(`document.all可以被检测`)

  }
  if (!(Object.apply.call(document.all,null,[1]))){
      console.log(`Object.apply.call(document.all,null,[1]) 可以被检测`)
  }
}
test_document_all()