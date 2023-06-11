const fs=require('fs')
const parse5 = require("parse5")
let bohtml_=fs.readFileSync(`D:\\My_Dir\\env_xbb_lastest_bo\\run\\run.html`).toString('utf-8')
// const fs = require('fs');
// const parse5 = require('parse5');
CSS=function (){}
Object.defineProperty(CSS,Symbol.toStringTag,{
  value: "CSS",
configurable: true,
writable: false,
enumerable: false
})
debugger
// 读取HTML文件
const html = bohtml_

// 创建事件处理程序对象
// const handler = {
//   onElement(element) {
//     // 如果当前元素是script元素，则运行脚本
//     if (element.tagName === 'script') {
//       runScript(element.childNodes[0].value);
//     }
//   }
// };

// // 运行脚本
// function runScript(code) {
//   // 使用eval或者Function执行脚本
//   eval(code);
// }

// 解析HTML并运行脚本
debugger
// 
const ast = parse5.parse(html);
debugger

// var bodaDom=parse5.defaultTreeAdapter.mylist
// function Document(){

// }
// document=new Document()
// for (let dom of bodaDom) {
//   // debugger
//   // bodavm.memory.domParser = i
//   srciptCode=''
//   if (dom['attrs']) {
//     for (const attr of dom['attrs']) {
//         if (attr['name']=='src'){
//           mypath=attr['value']
//           console.log('处理script脚本代码中,获取到src标签中路径->',mypath)
//           srciptCode=fs.readFileSync(mypath).toString()
//         }
//     }
//   }else{
//     srciptCode=dom.childNodes[0].value
//   }
//   debugger
//   eval.call(document, srciptCode)
// }

// bodavm={
//   memory:{},
//   toolsFunc:{}}
//   debugger
// document.body=function (){
//   // debugger
//   bodavm.memory.domParser.body = null;
//   bodavm.toolsFunc.traverse(bodavm.memory.domParser, node => {
//       if (node.nodeName === 'body') {
//         debugger
//         bodavm.memory.domParser.body = node;
//         // return node
//       }
//   });
//   return bodavm.memory.domParser.body
// }
// bodavm.memory.domParser=null;

// for (let i of mydom){
//   // debugger
//   bodavm.memory.domParser=i
//   eval.call(document,i.childNodes[0].value)
// }
// bodavm.memory.domParser=ast
// debugger
// console.log(document.body())

// function traverse(node, callback) {
//     if (!node.childNodes) {
//         return;
//     }
//     callback(node);
//     for (let i = 0; i < node.childNodes.length; i++) {
//         bodavm.toolsFunc.traverse(node.childNodes[i], callback);
//     }
// }

// bodavm.memory.domParser.getAttribute = function (attributeName) {
//     let result = null;
//     bodavm.toolsFunc.traverse(bodavm.memory.domParser, node => {
//         if (node.attrs && node.attrs.some(attr => attr.name === attributeName)) {
//             result = node.attrs.find(attr => attr.name === attributeName).value;
//         }
//     });
//     return result;
// }

// bodavm.memory.domParser.setAttribute = function (attributeName, attributeValue) {
//     bodavm.toolsFunc.traverse(bodavm.memory.domParser, node => {
//         if (node.attrs) {
//             const attr = node.attrs.find(attr => attr.name === attributeName);
//             if (attr) {
//                 attr.value = attributeValue;
//             } else {
//                 node.attrs.push({ name: attributeName, value: attributeValue });
//             }
//         }
//     });
// }

// bodavm.memory.domParser.removeAttribute = function (attributeName) {
//     bodavm.toolsFunc.traverse(bodavm.memory.domParser, node => {
//         if (node.attrs) {
//             const index = node.attrs.findIndex(attr => attr.name === attributeName);
//             if (index !== -1) {
//                 node.attrs.splice(index, 1);
//             }
//         }
//     });
// }

// bodavm.memory.domParser.getElementById = function (id) {
//     let result = null;
//     bodavm.toolsFunc.traverse(bodavm.memory.domParser, node => {
//         if ( node.attrs && node.attrs.some(attr => attr.name === 'id' && attr.value === id)) {
//             result = node;
//         }
//     });
//     return result;
// }

// bodavm.memory.domParser.getElementsByTagName = function (tagName) {
//     const result = [];
//     bodavm.toolsFunc.traverse(bodavm.memory.domParser, node => {
//         if (node.nodeName === tagName) {
//             result.push(node);
//         }
//     });
//     return result;
// }

// bodavm.memory.domParser.getElementsByClassName = function getElementsByClassName(className) {
//     const result = [];
//     bodavm.toolsFunc.traverse(bodavm.memory.domParser, node => {
//         if (node.attrs && node.attrs.some(attr => attr.name === 'class' && attr.value.split(' ').includes(className))) {
//             result.push(node);
//         }
//     });
//     return result;
// }

// bodavm.memory.domParser.createElement = function (tagName) {
//     return { nodeName: tagName, childNodes: [], attrs: [] };
// }

// bodavm.memory.domParser.createTextNode = function (text) {
//     return { nodeName: '#text', value: text };
// }

// bodavm.memory.domParser.appendChild = function (node) {
//     bodavm.memory.domParser.childNodes.push(node);
// }

// bodavm.memory.domParser.removeChild = function (node) {
//     const index = bodavm.memory.domParser.childNodes.indexOf(node);
//     if (index !== -1) {
//         bodavm.memory.domParser.childNodes.splice(index, 1);
//     }
// }

// bodavm.memory.domParser.replaceChild = function (newNode, oldNode) {
//     const index = bodavm.memory.domParser.childNodes.indexOf(oldNode);
//     if (index !== -1) {
//         bodavm.memory.domParser.childNodes.splice(index, 1, newNode);
//     }
// }

// bodavm.memory.domParser.insertBefore = function (newNode, referenceNode) {
//     const index = bodavm.memory.domParser.childNodes.indexOf(referenceNode);
//     if (index !== -1) {
//         bodavm.memory.domParser.childNodes.splice(index, 0, newNode);
//     }
// }

// bodavm.memory.domParser.getComputedStyle = function (element) {
//     const style = {};
//     const cssText = element.getAttribute('style') || '';
//     cssText.split(';').forEach(rule => {
//         const [property, value] = rule.split(':');
//         if (property && value) {
//             style[property.trim()] = value.trim();
//         }
//     });
//     return {
//         getPropertyValue: prop => style[prop] || ''
//     };
// }
// bodavm.memory.domParser.querySelector = function (selector) { const selectors = selector.split(' '); let currentNodes = [bodavm.memory.domParser]; for (let i = 0; i < selectors.length; i++) { const currentSelector = selectors[i]; let nextNodes = []; currentNodes.forEach(node => { if (node.nodeName !== '#text' && node.nodeName !== '#comment') { if (currentSelector.startsWith('#')) { const id = currentSelector.slice(1); const foundNode = bodavm.memory.domParser.getElementById(id); if (foundNode && foundNode === node) { nextNodes.push(node); } } else if (currentSelector.startsWith('.')) { const className = currentSelector.slice(1); if (node.attrs && node.attrs.some(attr => attr.name === 'class' && attr.value.split(' ').includes(className))) { nextNodes.push(node); } } else { if (node.nodeName === currentSelector) { nextNodes.push(node); } } } }); currentNodes = nextNodes; } return currentNodes[0] || null; }

// bodavm.memory.domParser.querySelectorAll = function (selector) { const selectors = selector.split(' '); let currentNodes = [bodavm.memory.domParser]; for (let i = 0; i < selectors.length; i++) { const currentSelector = selectors[i]; let nextNodes = []; currentNodes.forEach(node => { if (node.nodeName !== '#text' && node.nodeName !== '#comment') { if (currentSelector.startsWith('#')) { const id = currentSelector.slice(1); const foundNode = bodavm.memory.domParser.getElementById(id); if (foundNode && foundNode === node) { nextNodes.push(node); } } else if (currentSelector.startsWith('.')) { const className = currentSelector.slice(1); if (node.attrs && node.attrs.some(attr => attr.name === 'class' && attr.value.split(' ').includes(className))) { nextNodes.push(node); } } else { if (node.nodeName === currentSelector) { nextNodes.push(node); } } } }); currentNodes = nextNodes; } return Array.from(new Set(currentNodes)) || []; }

// bodavm.memory.domParser.createElementNS = function (namespaceURI, qualifiedName) { return { nodeName: qualifiedName, childNodes: [], attrs: [], namespaceURI }; }

// bodavm.memory.domParser.getElementByIdNS = function (namespaceURI, id) { let result = null; bodavm.toolsFunc.traverse(bodavm.memory.domParser, node => { if (node.nodeName === 'div' && node.attrs && node.attrs.some(attr => attr.name === 'id' && attr.value === id && node.namespaceURI === namespaceURI)) { result = node; } }); return result; }

// bodavm.memory.domParser.getElementsByClassNameNS = function (namespaceURI, className) { const result = []; bodavm.toolsFunc.traverse(bodavm.memory.domParser, node => { if (node.attrs && node.attrs.some(attr => attr.name === 'class' && attr.value.split(' ').includes(className) && node.namespaceURI === namespaceURI)) { result.push(node); } }); return Array.from(new Set(result)); }

// bodavm.memory.domParser.getElementsByTagNameNS = function (namespaceURI, tagName) { const result = []; bodavm.toolsFunc.traverse(bodavm.memory.domParser, node => { if (node.nodeName === tagName && node.namespaceURI === namespaceURI) { result.push(node); } }); return Array.from(new Set(result)); }

// bodavm.memory.domParser.importNode = function (node, deep) { if (deep) { const clonedNode = JSON.parse(JSON.stringify(node)); bodavm.toolsFunc.traverse(clonedNode, node => { node.parentNode = null; }); return clonedNode; } else { return { nodeName: node.nodeName, value: node.value, attrs: node.attrs, childNodes: [] }; } }

// bodavm.memory.domParser.createAttribute = function (name) { return { name, value: '' }; }

// bodavm.memory.domParser.createCDATASection = function (data) { return { nodeName: '#cdata-section', value: data, childNodes: [] }; }

// bodavm.memory.domParser.createComment = function (data) { return { nodeName: '#comment', value: data }; }

// bodavm.memory.domParser.createDocumentFragment = function () { return { nodeName: '#document-fragment', childNodes: [] }; }

// bodavm.memory.domParser.createProcessingInstruction = function (target, data) { return { nodeName: '#processing-instruction', target, value: data }; }

// bodavm.memory.domParser.createEntityReference = function (name) { return { nodeName: '#entity-reference', value: name }; }

// bodavm.memory.domParser.createEvent = function (eventInterface) { return { type: eventInterface }; }

// bodavm.memory.domParser.createRange = function () { return { startContainer: null, endContainer: null, commonAncestorContainer: null }; }

// bodavm.memory.domParser.createTreeWalker = function (root, whatToShow, filter) {
//     const acceptNode = filter || (() => NodeFilter.FILTER_ACCEPT);
//     const treeWalker = {
//         currentNode: root,
//         nextNode() {
//             let node = this.currentNode;
//             while (node) {
//                 const filterResult = acceptNode(node);
//                 if (filterResult === NodeFilter.FILTER_ACCEPT) {
//                     this.currentNode = node;
//                     return node;
//                 } else if (filterResult === NodeFilter.FILTER_SKIP) {
//                     if (node.firstChild) {
//                         node = node.firstChild;
//                     } else {
//                         node = node.nextSibling;
//                     }
//                 } else if (filterResult === NodeFilter.FILTER_REJECT) {
//                     node = this._nextSiblingOrAncestorSibling(node);
//                 }
//             }
//             return null;
//         },
//         _nextSiblingOrAncestorSibling(node) {
//             while (node && node !== root) {
//                 if (node.nextSibling) {
//                     return node.nextSibling;
//                 } else {
//                     node = node.parentNode;
//                 }
//             }
//             return null;
//         }
//     };
//     return treeWalker;
// }




// bodavm.memory.domParser.scripts = function () {
//     const result = [];
//     bodavm.toolsFunc.traverse(bodavm.memory.domParser, node => {
//         if (node.nodeName === 'script' && node.childNodes.length > 0 && node.childNodes[0].nodeName === '#text') {
//             result.push(node.childNodes[0].value);
//         } else if (node.nodeName === 'script' && node.attrs && node.attrs.some(attr => attr.name === 'src')) {
//             result.push(node);
//         }
//     });
//     return result;
// }
// // const vm = require('vm');





// const parse5 = require('parse5');

// 定义一个扩展Element对象的方法
Element.prototype.querySelectorAll = function(selector) {
  // 将HTML字符串解析为AST对象
  const ast = parse5.parseFragment(this.outerHTML);

  // 递归遍历AST对象，查找符合选择器的元素
  function findElements(node, selector, result) {
    if (node.nodeName === 'style' || node.nodeName === 'script') {
      // 如果是style或script标签，则不需要查找其中的子元素
      return;
    }

    if (node.attrs) {
      const attrs = {};
      node.attrs.forEach(attr => {
        attrs[attr.name] = attr.value;
      });

      if (matchesSelector(node, selector)) {
        result.push(node);
      }
    }

    if (node.childNodes) {
      node.childNodes.forEach(childNode => {
        findElements(childNode, selector, result);
      });
    }
  }

  // 判断当前节点是否匹配选择器
  function matchesSelector(node, selector) {
    const selectors = selector.split(',');
    for (let i = 0; i < selectors.length; i++) {
      const sel = selectors[i].trim();
      if (sel === '*') {
        return true;
      }

      const parts = sel.split(/(?=[.#])/);
      const tag = parts[0];
      const id = parts.find(part => part.startsWith('#'));
      const classes = parts.filter(part => part.startsWith('.')).map(part => part.slice(1));

      if (tag && node.nodeName !== tag.toUpperCase()) {
        continue;
      }

      if (id && node.attrs && node.attrs.find(attr => attr.name === 'id' && attr.value === id.slice(1)) === undefined) {
        continue;
      }

      if (classes.length > 0 && node.attrs) {
        const classAttr = node.attrs.find(attr => attr.name === 'class');
        if (!classAttr) {
          continue;
        }

        const nodeClasses = classAttr.value.trim().split(/\s+/);
        if (!classes.every(cls => nodeClasses.includes(cls))) {
          continue;
        }
      }

      return true;
    }

    return false;
  }

  // 调用findElements方法查找符合选择器的元素
  const result = [];
  findElements(ast, selector, result);

  // 将结果包装成一个类似数组的对象返回
  return {
    length: result.length,
    item: index => result[index],
    forEach: callback => result.forEach(callback),
    map: callback => result.map(callback),
    filter: callback => result.filter(callback),
    reduce: (callback, initialValue) => result.reduce(callback, initialValue),
    some: callback => result.some(callback),
    every: callback => result.every(callback),
  };
};
const container = parse5.parse(html).childNodes[0];
const items = container.querySelectorAll('li');