
function test_getElementsByTagName() {
    let divHTMLCollection = document.getElementsByTagName('div')
    debugger
    if (!(divHTMLCollection[0].parentNode.parentNode.parentNode==divHTMLCollection[0].parentNode.parentNode.parentNode)){
        console.log('divHTMLCollection[0].parentNode.parentNode.parentNode 可以被检测');
    }
    let bobocollect = divHTMLCollection.length
    if (divHTMLCollection.__proto__ + '') {
        if (divHTMLCollection[0].parentNode.parentNode.parentNode.nodeName == '#document') {
            if (divHTMLCollection[0].parentNode.parentNode.parentNode.parentNode == null) {
                endsign += 'B'
            } else {
                console.log(`divHTMLCollection[0].parentNode.parentNode.parentNode.parentNode  可以被检测`);

            }
        } else {
            console.log(`divHTMLCollection[0].parentNode.parentNode.parentNode.nodeName=='#document'  可以被检测`);
        }
        if (divHTMLCollection[0].parentElement.parentElement.parentElement == null
        ) {
            endsign += 'C'
        } else {
            console.log(`divHTMLCollection[0].parentElement.parentElement.parentElement  可以被检测`);

        }

        divHTMLCollection[0].parentNode.removeChild(divHTMLCollection[0])
        divHTMLCollection[0].parentNode.removeChild(divHTMLCollection[0])
        if (bobocollect > divHTMLCollection.length) {
            endsign += 'D'
        } else {
            console.log(`divHTMLCollection[0].parentNode.removeChild 可以被检测`);

        }
        if (divHTMLCollection[0].innerHTML.indexOf('bobo2') > 0) {
            endsign += 'D'
        } else {
            console.log(`divHTMLCollection[0].innerHTML 可以被检测`);
        }
    } else {
        console.log(`document.getElementsByTagName 原型可以被检测`);
    }
}

test_getElementsByTagName()
