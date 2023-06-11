//babel库及文件模块导入
const fs = require('fs');
const path = require("path");

//babel库相关，解析，转换，构建，生产
const parser = require("@babel/parser");
const traverse = require("@babel/traverse").default;
const types = require("@babel/types");
const generator = require("@babel/generator").default;
//读取文件
// process.argv.length>2?encodeFile =process.argv[2]:encodeFile='./encode.js'
process.argv.length > 3 ? encodeFile = process.argv[3] : decodeFile = './decodeResult.js'
//添加
/*
* console.log_copy('AbortController 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
*
* */


function readDir(dirPath) {
  const files = fs.readdirSync(dirPath);

  for (const file of files) {
    const filePath = path.join(dirPath, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      readDir(filePath);
    } else {
      const content = fs.readFileSync(filePath, "utf8");
      const fileName = path.basename(filePath);
      const newFilePath = path.join(dirPath, fileName);
      console.log('newpath',newFilePath)
        if (newFilePath =='D:\\My_Dir\\env_xbb_lastest_bo\\env\\Cache.js'){
            debugger
        }
      let ast = parser.parse(content);
    const constantFold =
    {
         "ObjectExpression"(path)
      {
          console.log('正在处理',path.toString())
          stringLitname=''
          let proplist=path.node.properties
          let stringLitname1=path.container[1]?path.container[1].value:'' //aborted
          // print('stringLitname',stringLitname)
          if (stringLitname1=='delete'){
              stringLitname='bodelete'
          }else if (stringLitname1=='in'){
              stringLitname='boin'
          }
          else if (stringLitname1=='default'){
              stringLitname='bodefault'
          }
          else if (stringLitname1=='continue'){
              stringLitname='bocontinue'
          }
          else {
              stringLitname=stringLitname1
          }
          // console.log(proplist)
        if(proplist.length==4){
            console.log(1111)
                if (types.isFunctionExpression(proplist[2].value)){
                // console.log(proplist[2])
                proplist[2].value.id.name=stringLitname
                gettype_=proplist[2].key.name//type get
                if (gettype_=='value'){
                    newname=stringLitname1
                    proplist[2].value.body['body'][0].argument['arguments'][3].value=newname
                }else{
                    newname=stringLitname1+'_'+gettype_
                    proplist[2].value.body['body'][0].argument['arguments'][3].value=newname
                }


                // console.log(newname)
            }
            // path.no
            if (types.isFunctionExpression(proplist[3].value)){
                            console.log(22222)

                if (types.isFunctionExpression(proplist[3].value)) {
                    // console.log(proplist[3])
                    proplist[3].value.id.name = stringLitname
                    gettype_ = proplist[3].key.name//type get
                    if (gettype_=='value'){
                    newname=stringLitname1
                    proplist[3].value.body['body'][0].argument['arguments'][3].value=newname
                }else{
                    newname=stringLitname1+'_'+gettype_
                proplist[3].value.body['body'][0].argument['arguments'][3].value=newname
                }
                    // newname = stringLitname + '_' + gettype_
                    // proplist[3].value.body['body'][0].argument['arguments'][3].value = newname

                    // console.log(newname)
                }
            }

            // console.log(stringLit);
        }
      },
    }

    traverse(ast, constantFold);

        try{
            console.log('处理完成！！！')
        let {code} = generator(ast, opts = {jsesc: {"minimal": true}})
      fs.writeFileSync(newFilePath, code);
            console.log(33333333)
        }catch (e){
            debugger
        }


    }
  }
}

readDir("D:\\My_Dir\\env_xbb_lastest_bo\\env");