// script标签中的src 路径   <script src='https://text.js'> 
    如果带有http开头 会自动转为env_xbb_lastest_bo/run/new/1.js  js文件需要访问对应链接获取


//script标签中的src 路径   <script src='/static/js/pc.js'>  
    在框架内路径就为 env_xbb_lastest_bo/run/static/js/pc.js


asyncLoad.js     异步load事件(Htmlonload   window.onload   load 事件)
asyncOther.js    定时器  其他listener事件
beforeDomRun.js  在html加载前运行的js文件
lastDeal.js      最后运行的js文件
userInit.js      plugin相关配置文件
run.js           html文件运行完成后,运行的js文件
