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
      let ast = parser.parse(content);
      const constantFold =
    {
            FunctionExpression(path) {
                if (path.node.id){
                    myname=path.node.id.name
                    console.log('name',myname)
                    newbody = {
                            "type": "File",
                            "start": 0,
                            "end": 137,
                            "loc": {
                                "start": {
                                    "line": 1,
                                    "column": 0,
                                    "index": 0
                                },
                                "end": {
                                    "line": 1,
                                    "column": 137,
                                    "index": 137
                                }
                            },
                            "errors": [],
                            "program": {
                                "type": "Program",
                                "start": 0,
                                "end": 137,
                                "loc": {
                                    "start": {
                                        "line": 1,
                                        "column": 0,
                                        "index": 0
                                    },
                                    "end": {
                                        "line": 1,
                                        "column": 137,
                                        "index": 137
                                    }
                                },
                                "sourceType": "module",
                                "interpreter": null,
                                "body": [
                                    {
                                        "type": "ExpressionStatement",
                                        "start": 0,
                                        "end": 137,
                                        "loc": {
                                            "start": {
                                                "line": 1,
                                                "column": 0,
                                                "index": 0
                                            },
                                            "end": {
                                                "line": 1,
                                                "column": 137,
                                                "index": 137
                                            }
                                        },
                                        "expression": {
                                            "type": "CallExpression",
                                            "start": 0,
                                            "end": 137,
                                            "loc": {
                                                "start": {
                                                    "line": 1,
                                                    "column": 0,
                                                    "index": 0
                                                },
                                                "end": {
                                                    "line": 1,
                                                    "column": 137,
                                                    "index": 137
                                                }
                                            },
                                            "callee": {
                                                "type": "MemberExpression",
                                                "start": 0,
                                                "end": 16,
                                                "loc": {
                                                    "start": {
                                                        "line": 1,
                                                        "column": 0,
                                                        "index": 0
                                                    },
                                                    "end": {
                                                        "line": 1,
                                                        "column": 16,
                                                        "index": 16
                                                    }
                                                },
                                                "object": {
                                                    "type": "Identifier",
                                                    "start": 0,
                                                    "end": 7,
                                                    "loc": {
                                                        "start": {
                                                            "line": 1,
                                                            "column": 0,
                                                            "index": 0
                                                        },
                                                        "end": {
                                                            "line": 1,
                                                            "column": 7,
                                                            "index": 7
                                                        },
                                                        "identifierName": "console"
                                                    },
                                                    "name": "console"
                                                },
                                                "computed": false,
                                                "property": {
                                                    "type": "Identifier",
                                                    "start": 8,
                                                    "end": 16,
                                                    "loc": {
                                                        "start": {
                                                            "line": 1,
                                                            "column": 8,
                                                            "index": 8
                                                        },
                                                        "end": {
                                                            "line": 1,
                                                            "column": 16,
                                                            "index": 16
                                                        },
                                                        "identifierName": "log_copy"
                                                    },
                                                    "name": "log_copy"
                                                }
                                            },
                                            "arguments": [
                                                {
                                                    "type": "StringLiteral",
                                                    "start": 17,
                                                    "end": 46,
                                                    "loc": {
                                                        "start": {
                                                            "line": 1,
                                                            "column": 17,
                                                            "index": 17
                                                        },
                                                        "end": {
                                                            "line": 1,
                                                            "column": 46,
                                                            "index": 46
                                                        }
                                                    },
                                                    "extra": {
                                                        "rawValue": `${myname} 实例化对象参数为 ->`,
                                                        "raw": `'${myname} 实例化对象参数为 ->'`
                                                    },
                                                    "value": `${myname} 实例化对象参数为 ->`
                                                },
                                                {
                                                    "type": "CallExpression",
                                                    "start": 47,
                                                    "end": 136,
                                                    "loc": {
                                                        "start": {
                                                            "line": 1,
                                                            "column": 47,
                                                            "index": 47
                                                        },
                                                        "end": {
                                                            "line": 1,
                                                            "column": 136,
                                                            "index": 136
                                                        }
                                                    },
                                                    "callee": {
                                                        "type": "MemberExpression",
                                                        "start": 47,
                                                        "end": 64,
                                                        "loc": {
                                                            "start": {
                                                                "line": 1,
                                                                "column": 47,
                                                                "index": 47
                                                            },
                                                            "end": {
                                                                "line": 1,
                                                                "column": 64,
                                                                "index": 64
                                                            }
                                                        },
                                                        "object": {
                                                            "type": "Identifier",
                                                            "start": 47,
                                                            "end": 51,
                                                            "loc": {
                                                                "start": {
                                                                    "line": 1,
                                                                    "column": 47,
                                                                    "index": 47
                                                                },
                                                                "end": {
                                                                    "line": 1,
                                                                    "column": 51,
                                                                    "index": 51
                                                                },
                                                                "identifierName": "JSON"
                                                            },
                                                            "name": "JSON"
                                                        },
                                                        "computed": false,
                                                        "property": {
                                                            "type": "Identifier",
                                                            "start": 52,
                                                            "end": 64,
                                                            "loc": {
                                                                "start": {
                                                                    "line": 1,
                                                                    "column": 52,
                                                                    "index": 52
                                                                },
                                                                "end": {
                                                                    "line": 1,
                                                                    "column": 64,
                                                                    "index": 64
                                                                },
                                                                "identifierName": "stringify_bo"
                                                            },
                                                            "name": "stringify_bo"
                                                        }
                                                    },
                                                    "arguments": [
                                                        {
                                                            "type": "Identifier",
                                                            "start": 65,
                                                            "end": 74,
                                                            "loc": {
                                                                "start": {
                                                                    "line": 1,
                                                                    "column": 65,
                                                                    "index": 65
                                                                },
                                                                "end": {
                                                                    "line": 1,
                                                                    "column": 74,
                                                                    "index": 74
                                                                },
                                                                "identifierName": "arguments"
                                                            },
                                                            "name": "arguments"
                                                        },
                                                        {
                                                            "type": "FunctionExpression",
                                                            "start": 75,
                                                            "end": 135,
                                                            "loc": {
                                                                "start": {
                                                                    "line": 1,
                                                                    "column": 75,
                                                                    "index": 75
                                                                },
                                                                "end": {
                                                                    "line": 1,
                                                                    "column": 135,
                                                                    "index": 135
                                                                }
                                                            },
                                                            "id": null,
                                                            "generator": false,
                                                            "async": false,
                                                            "params": [
                                                                {
                                                                    "type": "Identifier",
                                                                    "start": 84,
                                                                    "end": 85,
                                                                    "loc": {
                                                                        "start": {
                                                                            "line": 1,
                                                                            "column": 84,
                                                                            "index": 84
                                                                        },
                                                                        "end": {
                                                                            "line": 1,
                                                                            "column": 85,
                                                                            "index": 85
                                                                        },
                                                                        "identifierName": "k"
                                                                    },
                                                                    "name": "k"
                                                                },
                                                                {
                                                                    "type": "Identifier",
                                                                    "start": 86,
                                                                    "end": 87,
                                                                    "loc": {
                                                                        "start": {
                                                                            "line": 1,
                                                                            "column": 86,
                                                                            "index": 86
                                                                        },
                                                                        "end": {
                                                                            "line": 1,
                                                                            "column": 87,
                                                                            "index": 87
                                                                        },
                                                                        "identifierName": "v"
                                                                    },
                                                                    "name": "v"
                                                                }
                                                            ],
                                                            "body": {
                                                                "type": "BlockStatement",
                                                                "start": 88,
                                                                "end": 135,
                                                                "loc": {
                                                                    "start": {
                                                                        "line": 1,
                                                                        "column": 88,
                                                                        "index": 88
                                                                    },
                                                                    "end": {
                                                                        "line": 1,
                                                                        "column": 135,
                                                                        "index": 135
                                                                    }
                                                                },
                                                                "body": [
                                                                    {
                                                                        "type": "IfStatement",
                                                                        "start": 89,
                                                                        "end": 134,
                                                                        "loc": {
                                                                            "start": {
                                                                                "line": 1,
                                                                                "column": 89,
                                                                                "index": 89
                                                                            },
                                                                            "end": {
                                                                                "line": 1,
                                                                                "column": 134,
                                                                                "index": 134
                                                                            }
                                                                        },
                                                                        "test": {
                                                                            "type": "BinaryExpression",
                                                                            "start": 93,
                                                                            "end": 102,
                                                                            "loc": {
                                                                                "start": {
                                                                                    "line": 1,
                                                                                    "column": 93,
                                                                                    "index": 93
                                                                                },
                                                                                "end": {
                                                                                    "line": 1,
                                                                                    "column": 102,
                                                                                    "index": 102
                                                                                }
                                                                            },
                                                                            "left": {
                                                                                "type": "Identifier",
                                                                                "start": 93,
                                                                                "end": 94,
                                                                                "loc": {
                                                                                    "start": {
                                                                                        "line": 1,
                                                                                        "column": 93,
                                                                                        "index": 93
                                                                                    },
                                                                                    "end": {
                                                                                        "line": 1,
                                                                                        "column": 94,
                                                                                        "index": 94
                                                                                    },
                                                                                    "identifierName": "v"
                                                                                },
                                                                                "name": "v"
                                                                            },
                                                                            "operator": "==",
                                                                            "right": {
                                                                                "type": "Identifier",
                                                                                "start": 96,
                                                                                "end": 102,
                                                                                "loc": {
                                                                                    "start": {
                                                                                        "line": 1,
                                                                                        "column": 96,
                                                                                        "index": 96
                                                                                    },
                                                                                    "end": {
                                                                                        "line": 1,
                                                                                        "column": 102,
                                                                                        "index": 102
                                                                                    },
                                                                                    "identifierName": "window"
                                                                                },
                                                                                "name": "window"
                                                                            }
                                                                        },
                                                                        "consequent": {
                                                                            "type": "BlockStatement",
                                                                            "start": 103,
                                                                            "end": 120,
                                                                            "loc": {
                                                                                "start": {
                                                                                    "line": 1,
                                                                                    "column": 103,
                                                                                    "index": 103
                                                                                },
                                                                                "end": {
                                                                                    "line": 1,
                                                                                    "column": 120,
                                                                                    "index": 120
                                                                                }
                                                                            },
                                                                            "body": [
                                                                                {
                                                                                    "type": "ReturnStatement",
                                                                                    "start": 104,
                                                                                    "end": 119,
                                                                                    "loc": {
                                                                                        "start": {
                                                                                            "line": 1,
                                                                                            "column": 104,
                                                                                            "index": 104
                                                                                        },
                                                                                        "end": {
                                                                                            "line": 1,
                                                                                            "column": 119,
                                                                                            "index": 119
                                                                                        }
                                                                                    },
                                                                                    "argument": {
                                                                                        "type": "StringLiteral",
                                                                                        "start": 111,
                                                                                        "end": 119,
                                                                                        "loc": {
                                                                                            "start": {
                                                                                                "line": 1,
                                                                                                "column": 111,
                                                                                                "index": 111
                                                                                            },
                                                                                            "end": {
                                                                                                "line": 1,
                                                                                                "column": 119,
                                                                                                "index": 119
                                                                                            }
                                                                                        },
                                                                                        "extra": {
                                                                                            "rawValue": "window",
                                                                                            "raw": "'window'"
                                                                                        },
                                                                                        "value": "window"
                                                                                    }
                                                                                }
                                                                            ],
                                                                            "directives": []
                                                                        },
                                                                        "alternate": {
                                                                            "type": "BlockStatement",
                                                                            "start": 124,
                                                                            "end": 134,
                                                                            "loc": {
                                                                                "start": {
                                                                                    "line": 1,
                                                                                    "column": 124,
                                                                                    "index": 124
                                                                                },
                                                                                "end": {
                                                                                    "line": 1,
                                                                                    "column": 134,
                                                                                    "index": 134
                                                                                }
                                                                            },
                                                                            "body": [
                                                                                {
                                                                                    "type": "ReturnStatement",
                                                                                    "start": 125,
                                                                                    "end": 133,
                                                                                    "loc": {
                                                                                        "start": {
                                                                                            "line": 1,
                                                                                            "column": 125,
                                                                                            "index": 125
                                                                                        },
                                                                                        "end": {
                                                                                            "line": 1,
                                                                                            "column": 133,
                                                                                            "index": 133
                                                                                        }
                                                                                    },
                                                                                    "argument": {
                                                                                        "type": "Identifier",
                                                                                        "start": 132,
                                                                                        "end": 133,
                                                                                        "loc": {
                                                                                            "start": {
                                                                                                "line": 1,
                                                                                                "column": 132,
                                                                                                "index": 132
                                                                                            },
                                                                                            "end": {
                                                                                                "line": 1,
                                                                                                "column": 133,
                                                                                                "index": 133
                                                                                            },
                                                                                            "identifierName": "v"
                                                                                        },
                                                                                        "name": "v"
                                                                                    }
                                                                                }
                                                                            ],
                                                                            "directives": []
                                                                        }
                                                                    }
                                                                ],
                                                                "directives": []
                                                            }
                                                        }
                                                    ]
                                                }
                                            ]
                                        }
                                    }
                                ],
                                "directives": []
                            },
                            "comments": []
                        }
                    debugger
                    // console.log('myname',myname)
                    path.node.body.body.unshift(newbody);
                    path.stop()
                }

            },
        }

    traverse(ast, constantFold);


        console.log('处理完成！！！')
        let {code} = generator(ast, opts = {jsesc: {"minimal": true}})
      fs.writeFileSync(newFilePath, code);

    }
  }
}

readDir("D:\\My_Dir\\env_xbb_lastest_jsdom\\env");