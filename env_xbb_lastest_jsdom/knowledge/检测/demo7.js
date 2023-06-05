function test_createEvent() {
    var MouseEvent__ = document.createEvent("MouseEvent");

    if (MouseEvent__ && MouseEvent__.__proto__ + '' == '[object MouseEvent]') {
    } else {
        console.log(`document.createEvent("MouseEvent");  可以被检测`);
    }

    if (Object.getOwnPropertySymbols(navigator.getBattery()).length > 0) {
        console.log(`Object.getOwnPropertySymbols(navigator.getBattery())  可以被检测`);
    }
}

test_createEvent()
