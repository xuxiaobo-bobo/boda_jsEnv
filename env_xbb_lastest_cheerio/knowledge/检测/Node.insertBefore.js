<div id="parentElement">
   <span id="childElement">foo bar</span>
</div>

{/* <script> */}
// 创建要插入的节点
var newNode = document.createElement("span");

// 获得父节点的引用
var parentDiv = document.getElementById("childElement").parentNode;

//实验一：referenceNode 存在 --> 正确返回
var sp2 = document.getElementById("childElement");
parentDiv.insertBefore(newNode, sp2);
//实验一结束

//实验二：referenceNode 为 undefined
var sp2 = undefined; // Not exist a node of id "childElement"
parentDiv.insertBefore(newNode, sp2); //隐式转换到节点类型
//实验二结束

//实验三：referenceNode 为字符类型的 "undefined"
var sp2 = "undefined"; //不存在 id 为"childElement"的 referenceNode
parentDiv.insertBefore(newNode, sp2); // Generate "Type Error: Invalid Argument"
//实验三结束
{/* </script> */}
