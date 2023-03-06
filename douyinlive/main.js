//babel库及文件模块导入
const fs = require('fs');

//babel库相关，解析，转换，构建，生产
const parser = require("@babel/parser");
const traverse = require("@babel/traverse").default;
const types = require("@babel/types");
const generator = require("@babel/generator").default;
//读取文件
let encode_file = "./test.js", decode_file = "./decode_result.proto";
if (process.argv.length > 2) {
    encode_file = process.argv[2];
}
if (process.argv.length > 3) {
    decode_file = process.argv[3];
}
//some function code
//判断类型
function get_id_type(id_type) {
    switch (id_type) {
        case "readString":
            id_type = "string";
            break;
        case "readDouble":
            id_type = "double";
            break;
        case "readInt32":
            id_type = "int32";
            break;
        case "readInt64":
            id_type = "int64";
            break;
        case "readFloat":
            id_type = "float";
            break;
        case "readBool":
            id_type = "bool";
            break;
        case "readPackedInt32":
            id_type = "int32";
            break;
        case "readBytes":
            id_type = "bytes";
            break;
        case "readEnum":
            id_type = "readEnum";
            break;
        case "readPackedEnum":
            id_type = "readPackedEnum";
            break;
        case "readUint64String":
            id_type = "uint64";
            break;
        case "readInt64String":
            id_type = "int64";
            break;
        case "readUint32":
            id_type = "uint32";
            break;
        case "readUint64":
            id_type = "uint64";
            break;
        case "readPackedInt64String":
            id_type ='int64';
            break;
    }
    return id_type
}

//首字母大写,处理
function titleCase(str) {
    newStr = str.slice(0, 1).toUpperCase() + str.slice(1).toLowerCase();
    return newStr;
}

//读取文件
let jscode = fs.readFileSync(encode_file, {encoding: "utf-8"});
//转换为ast树
let ast = parser.parse(jscode);
// console.log(ast)
text = 'syntax = "proto3";\n'
//处理message插件
const visitor =
    {
        //TODO  write your code here！
        AssignmentExpression(path, scope) {
            // 外面大模型是没问题了，主要是里面细节
            if (path.node.left.property) {
                if (path.node.left.type == 'MemberExpression' &&
                    path.node.left.property.type == 'Identifier' &&
                    path.node.left.property.name == 'deserializeBinaryFromReader') {
                    //处理message名字
                    object_name = path.node.left.object.property.name
                    left_node = path.node.left
                    codename_list = generator(left_node).code.split('.');
                    codename_list.shift()
                    codename_list.pop()
                    object_name = codename_list.join('_');
                    // console.log(object_name);
                    text = text + 'message ' + object_name + '{\n'
                    //处理右边FunctionExpression语句
                    if (path.node.right.type == 'FunctionExpression') {
                        path.traverse({
                                //处理switch
                                SwitchStatement(path2) {
                                    //case语句
                                    cases_list = path2.node.cases
                                    // console.log(generator(path2.node).code);
                                    // try {
                                    for (i = 0; i < path2.node.cases.length - 1; i++) {
                                        location = cases_list[i].test.value
                                        if (cases_list[i].consequent.length) {
                                            if (cases_list[i].consequent[0].type == 'VariableDeclaration') {
                                                //遇到new对象处理
                                                if (cases_list[i].consequent[0].declarations[0].init.type == 'NewExpression') {
                                                    //获得type
                                                    node_code = cases_list[i].consequent[0].declarations[0].init
                                                    // console.log(generator(node_code).code)
                                                    node_code_list = generator(node_code).code.split('.')
                                                    node_code_list.shift()
                                                    id_type = node_code_list.join('_').replace('()', '')
                                                    // console.log(id_type);
                                                    //获得name，这部分有点问题，大家可以自行修改
                                                    try {
                                                        id_name = cases_list[i].consequent[1].expression.expressions[1].callee.property.name
                                                    } catch (e) {
                                                        id_name = cases_list[i].consequent[2].expression.callee.property.name

                                                    }
                                                    // console.log(id_name);
                                                    if (id_name.startsWith("set")) {
                                                        id_st = "";
                                                    } else if (id_name.startsWith("add")) {
                                                        id_st = "repeated";
                                                    } else {
                                                        // map类型，因为案例中用不到，所以这里省略
                                                        continue
                                                    }
                                                    id_name = id_name.substring(3, id_name.length).toLowerCase();
                                                    // console.log(id_name)
                                                    text = text + id_st + ' ' + id_type + ' ' + id_name + '=' + location + ';' + '\n'


                                                }
                                                //其他情况处理
                                                else {
                                                    if (cases_list[i].consequent[0].declarations[0].init.callee)
                                                        id_type = cases_list[i].consequent[0].declarations[0].init.callee.property.name
                                                    if (cases_list[i].consequent[0].declarations[0].init.consequent || cases_list[i].consequent[0].declarations[0].init.alternate)
                                                        id_type = cases_list[i].consequent[0].declarations[0].init.consequent.callee.property.name
                                                    id_type = get_id_type(id_type)
                                                    // console.log(id_type);
                                                    if (cases_list[i].consequent[1].type == 'ForStatement')
                                                        id_name = cases_list[i].consequent[1].body.body[0].expression.callee.property.name
                                                    else if (cases_list[i].consequent[1].type == 'ExpressionStatement') {
                                                        if (cases_list[i].consequent[1].expression.expressions)
                                                            id_name = cases_list[i].consequent[1].expression.expressions[cases_list[i].consequent[1].expression.expressions.length - 1].callee.property.name
                                                        else
                                                            id_name = cases_list[i].consequent[1].expression.callee.property.name
                                                    }

                                                    if (id_name.startsWith("set")) {
                                                        id_st = "";
                                                    } else if (id_name.startsWith("add")) {
                                                        id_st = "repeated";
                                                    } else {
                                                        // map类型，因为案例中用不到，所以这里省略
                                                        continue
                                                    }
                                                    id_name = id_name.substring(3, id_name.length);
                                                    // console.log(id_name)
                                                    if (id_type == 'readEnum') {
                                                        text = text + 'enum ' + titleCase(id_name) + ' {\n' + id_name + '_0=0;\n}\n' + id_st + ' ' + titleCase(id_name) + ' ' + id_name.toLowerCase() + '=' + location + ';' + '\n'
                                                    } else if (id_type == 'readPackedEnum') {
                                                        id_st = 'repeated'
                                                        text = text + 'enum ' + titleCase(id_name) + ' {\n' + id_name + '_0=0;\n}\n' + id_st + ' ' + titleCase(id_name) + ' ' + id_name.toLowerCase() + '=' + location + ';' + '\n'
                                                    } else
                                                        text = text + id_st + ' ' + id_type + ' ' + id_name.toLowerCase() + '=' + location + ';' + '\n'

                                                }
                                            }
                                            if (cases_list[i].consequent[0].type == 'ExpressionStatement') {
                                                //一般处理
                                                if (cases_list[i].consequent[0].expression.right.type == 'CallExpression') {
                                                    id_type = cases_list[i].consequent[0].expression.right.callee.property.name
                                                    // console.log(id_type)
                                                    id_type = get_id_type(id_type)
                                                    // console.log(id_type);
                                                    if (cases_list[i].consequent[1].type == 'ForStatement')
                                                        id_name = cases_list[i].consequent[1].body.body[0].expression.callee.property.name
                                                    else if (cases_list[i].consequent[1].type == 'ExpressionStatement') {
                                                        if (cases_list[i].consequent[1].expression.expressions)
                                                            id_name = cases_list[i].consequent[1].expression.expressions[cases_list[i].consequent[1].expression.expressions.length - 1].callee.property.name
                                                        else
                                                            id_name = cases_list[i].consequent[1].expression.callee.property.name
                                                    }
                                                    // console.log(id_name);
                                                    if (id_name.startsWith("set")) {
                                                        id_st = "";
                                                    } else if (id_name.startsWith("add")) {
                                                        id_st = "repeated";
                                                    } else {
                                                        // map类型，因为案例中用不到，所以这里省略
                                                        continue
                                                    }
                                                    id_name = id_name.substring(3, id_name.length).toLowerCase();
                                                    // console.log(id_name)
                                                    if (id_type == 'readEnum') {
                                                        text = text + 'enum ' + titleCase(id_name) + ' {\n' + id_name + '_0=0;\n}\n' + id_st + ' ' + titleCase(id_name) + ' ' + id_name.toLowerCase() + '=' + location + ';' + '\n'
                                                    } else if (id_type == 'readPackedEnum') {
                                                        id_st = 'repeated'
                                                        text = text + 'enum ' + titleCase(id_name) + ' {\n' + id_name + '_0=0;\n}\n' + id_st + ' ' + titleCase(id_name) + ' ' + id_name.toLowerCase() + '=' + location + ';' + '\n'
                                                    } else
                                                        text = text + id_st + ' ' + id_type + ' ' + id_name.toLowerCase() + '=' + location + ';' + '\n'

                                                }
                                                //遇到new对象处理
                                                if (cases_list[i].consequent[0].expression.right.type == 'NewExpression') {
                                                    //转化成字符串对象处理
                                                    node_code = cases_list[i].consequent[0].expression.right.callee
                                                    node_code_list = generator(node_code).code.split('.')
                                                    node_code_list.shift()
                                                    id_type = node_code_list.join('_')
                                                    // console.log(id_type);

                                                    //获得name
                                                    id_name = cases_list[i].consequent[1].expression.expressions[1].callee.property.name
                                                    // console.log(id_name);
                                                    if (id_name.startsWith("set")) {
                                                        id_st = "";
                                                    } else if (id_name.startsWith("add")) {
                                                        id_st = "repeated";
                                                    } else {
                                                        // map类型，因为案例中用不到，所以这里省略
                                                        continue
                                                    }
                                                    id_name = id_name.substring(3, id_name.length).toLowerCase();
                                                    // console.log(id_name)
                                                    if (id_type == 'readEnum') {
                                                        text = text + 'enum ' + titleCase(id_name) + ' {\n' + id_name + '_0=0;\n}\n' + id_st + ' ' + titleCase(id_name) + ' ' + id_name.toLowerCase() + '=' + location + ';' + '\n'
                                                    } else if (id_type == 'readPackedEnum') {
                                                        id_st = 'repeated'
                                                        text = text + 'enum ' + titleCase(id_name) + ' {\n' + id_name + '_0=0;\n}\n' + id_st + ' ' + titleCase(id_name) + ' ' + id_name.toLowerCase() + '=' + location + ';' + '\n'
                                                    } else
                                                        text = text + id_st + ' ' + id_type + ' ' + id_name.toLowerCase() + '=' + location + ';' + '\n'


                                                }


                                            }

                                        }


                                    }

                                },
                                ////某音有的结构，遇到其他网站可以注释
                                IfStatement(path3) {
                                    location = path3.node.test.left.value
                                    if (path3.node.consequent.type === 'BlockStatement') {
                                        if (path3.node.consequent.body[0].type === 'VariableDeclaration') {
                                            // console.log(generator(path3.node).code)
                                            //遇到new对象处理
                                            if (path3.node.consequent.body[0].declarations[0].init.type == 'NewExpression') {
                                                //获得type
                                                node_code = path3.node.consequent.body[0].declarations[0].init
                                                // console.log(generator(node_code).code)
                                                node_code_list = generator(node_code).code.split('.')
                                                node_code_list.shift()
                                                id_type = node_code_list.join('_').replace('()', '')
                                                // console.log(id_type);
                                                //获得name，这部分有点问题，大家可以自行修改
                                                try {
                                                    id_name = path3.node.consequent.body[0].expression.callee.property.name

                                                } catch (e) {
                                                    id_name = path3.node.consequent.body[1].expression.expressions[1].callee.property.name
                                                }

                                                // console.log(id_name);
                                                if (id_name.startsWith("set")) {
                                                    id_st = "";
                                                } else if (id_name.startsWith("add")) {
                                                    id_st = "repeated";
                                                } else {
                                                    // map类型，因为案例中用不到，所以这里省略
                                                }
                                                id_name = id_name.substring(3, id_name.length).toLowerCase();
                                                // console.log(id_name)
                                                if (id_type == 'readEnum') {
                                                    text = text + 'enum ' + titleCase(id_name) + ' {\n' + id_name + '_0=0;\n}\n' + id_st + ' ' + titleCase(id_name) + ' ' + id_name.toLowerCase() + '=' + location + ';' + '\n'
                                                } else if (id_type == 'readPackedEnum') {
                                                    id_st = 'repeated'
                                                    text = text + 'enum ' + titleCase(id_name) + ' {\n' + id_name + '_0=0;\n}\n' + id_st + ' ' + titleCase(id_name) + ' ' + id_name.toLowerCase() + '=' + location + ';' + '\n'
                                                } else
                                                    text = text + id_st + ' ' + id_type + ' ' + id_name.toLowerCase() + '=' + location + ';' + '\n'


                                            } else {
                                                id_type = path3.node.consequent.body[0].declarations[0].init.callee.property.name
                                                id_type = get_id_type(id_type)
                                                id_name = path3.node.consequent.body[1].expression.callee.property.name
                                                if (id_name.startsWith("set")) {
                                                    id_st = "";
                                                } else if (id_name.startsWith("add")) {
                                                    id_st = "repeated";
                                                } else {
                                                    // map类型，因为案例中用不到，所以这里省略
                                                }
                                                id_name = id_name.substring(3, id_name.length).toLowerCase();
                                                // console.log(id_name)
                                                if (id_type == 'readEnum') {
                                                    text = text + 'enum ' + titleCase(id_name) + ' {\n' + id_name + '_0=0;\n}\n' + id_st + ' ' + titleCase(id_name) + ' ' + id_name.toLowerCase() + '=' + location + ';' + '\n'
                                                } else if (id_type == 'readPackedEnum') {
                                                    id_st = 'repeated'
                                                    text = text + 'enum ' + titleCase(id_name) + ' {\n' + id_name + '_0=0;\n}\n' + id_st + ' ' + titleCase(id_name) + ' ' + id_name.toLowerCase() + '=' + location + ';' + '\n'
                                                } else
                                                    text = text + id_st + ' ' + id_type + ' ' + id_name.toLowerCase() + '=' + location + ';' + '\n'
                                            }
                                        }
                                    }
                                    if (path3.node.consequent.type === 'ForStatement') {
                                        id_type = path3.node.consequent.init.declarations[0].init.consequent.callee.property.name
                                        id_type = get_id_type(id_type)
                                        id_name = path3.node.consequent.body.expression.callee.property.name
                                        // console.log(id_name);
                                        if (id_name.startsWith("set")) {
                                            id_st = "";
                                        } else if (id_name.startsWith("add")) {
                                            id_st = "repeated";
                                        } else {
                                            // map类型，因为案例中用不到，所以这里省略
                                        }
                                        id_name = id_name.substring(3, id_name.length).toLowerCase();
                                        // console.log(id_name)
                                        if (id_type == 'readEnum') {
                                            text = text + 'enum ' + titleCase(id_name) + ' {\n' + id_name + '_0=0;\n}\n' + id_st + ' ' + titleCase(id_name) + ' ' + id_name.toLowerCase() + '=' + location + ';' + '\n'
                                        } else if (id_type == 'readPackedEnum') {
                                            id_st = 'repeated'
                                            text = text + 'enum ' + titleCase(id_name) + ' {\n' + id_name + '_0=0;\n}\n' + id_st + ' ' + titleCase(id_name) + ' ' + id_name.toLowerCase() + '=' + location + ';' + '\n'
                                        } else
                                            text = text + id_st + ' ' + id_type + ' ' + id_name.toLowerCase() + '=' + location + ';' + '\n'

                                    }


                                }
                            }
                        )

                    }
                    text = text + '}\n'
                }

            }


        }
    }


//处理enum对象插件
const visitor2 = {
    AssignmentExpression(path) {
        if (path.node.right.type === 'ObjectExpression' && path.node.left.type === 'MemberExpression' && path.node.right.properties.length) {
            left_node = path.node.left
            left_code = generator(left_node).code.split('.')
            word = left_code.shift()
            if (word === 'proto') {
                enum_name = left_code.join('_')
                // console.log(enum_name)
                right_object_list = path.node.right.properties
                right_str = ''
                for (i = 0; i < right_object_list.length; i++) {
                    // console.log(right_object_list[i].key.name)
                    objet_name = right_object_list[i].key.name
                    objet_value = right_object_list[i].value.value
                    right_str = right_str + enum_name + '_' + objet_name + '=' + objet_value + ';\n'
                }
                text = text + 'enum ' + enum_name + '{\n' + right_str + '}' + '\n'
                // console.log(right_code)

            }


        }
        // console.log(generator(path.node).code)
    }
}


//调用插件，处理源代码

// traverse(ast, visitor2)
// console.log('enum部分完成！！！')
// fs.writeFile('douyin_test_enum完成.proto', text, (err) => {});

traverse(ast, visitor);
console.log('message部分完成！！！')
// // fs.writeFile('douyin_test_message完成.proto', text, (err) => {});
//
//
// // console.log(text);
//
fs.writeFile(decode_file, text, (err) => {
});


