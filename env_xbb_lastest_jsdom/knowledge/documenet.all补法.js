/*

1.最新版npm
windows 管理员运行  npm install --global windows-build-tools,
如果卡在Successfully install Python2.7,就在c:\用户名\AppDate\Local\TEMP下新建
一个文件,名称dd_client_.log 内容  Closing installer. Return code: 3010.

3.npm install --global node-gyp
4.当前目录下放入bingding.gyp

5.初始化项目 
    1.npm init
    2.npm i node-addon-api
    3.安装vscode c++拓展
    4.执行node-gyp configure  查看Dnode_root_dir,确认头文件  '-Dnode_root_dir=C:\\Users\\xxx\\AppData\\Local\\node-gyp\\Cache\\14.18.2',
    5.c_cpp_properties.json(vscode ctrl+shift+p  ) includePath 中加入 C:\Users\xxx\AppData\Local\node-gyp\Cache\14.18.2\include\node

6.编译
    1.根目录放入bingding.gyp
    2.cmd执行node-gyp rebuild  编译

    3.报错   
        File "C:\Users\xxx\AppData\Roaming\npm\node_modules\node-gyp\gyp\pylib\gyp\input.py", line 983, in ExpandVariables
        replacement = result.stdout.decode("utf-8").rstrip()
        AttributeError: 'str' object has no attribute 'decode' while trying to load binding.gyp
    解决办法,进入C:\Users\xxx\AppData\Roaming\npm\node_modules\node-gyp\gyp\pylib\gyp\input.py", line 983 
    修改该行代码为replacement = result.stdout.rstrip()

7.安装npm install bindings

*/






