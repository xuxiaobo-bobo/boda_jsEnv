
function test_settime() {
    //setimetime检测
    var testTimeList = []
    var testTimeList2 = []
    var testTimeList3 = []
    setTimeout(function() {
        testTimeList.push(1)
    }, 100)

    //电池检测
    try {
        if (navigator.getBattery().__proto__ + '' == '[object Promise]') {
            if (navigator.getBattery().then().__proto__ + '' == '[object Promise]') {
                navigator.getBattery().then(function(res) {
                    endsign += 0
                    if (testTimeList.length > 0) {
                        endsign += 0
                        console.log(`setTimeout 可以被检测`);
                    }
                    if (res.level) {} else {
                        console.log(`navigator.getBattery() level可以被检测`);
                    }
                })
            } else {
                console.log('navigator.getBattery() then可以被检测');

            }

        } else {
            console.log('navigator.getBattery() 可以被检测');
        }
    } catch {
        log(`navigator.getBattery 未实现`, )
    }

    setTimeout(function() {
        if (testTimeList.length) {
            endsign += '5_'

            if (testTimeList2.length) {
                console.log(`setTimeout0 可以被检测`);

            }
        } else {
            console.log(`setTimeout1 可以被检测`);

        }
    }, 100)

    setTimeout(function() {
        testTimeList2.push(1)
        if (testTimeList.length) {
            endsign += '6_'

            testTimeList2.push(1)
        } else {
            console.log(`setTimeout2 可以被检测`);

        }
    }, 200)

    setTimeout(function() {
        if (testTimeList2.length) {
            endsign += '7_'

        } else {
            console.log(`setTimeout3 可以被检测`);

        }
    }, 200)

    setTimeout(function() {
        endsign += '9_'
        testTimeList3.push(1)
    }, 200)
    setInterval(function() {
        endsign += '9__'
        testTimeList3.push(1)
    }, 700)
    clearTimeout(5)
    clearTimeout(6)
    setTimeout(function() {
        endsign += 'A'
        if (testTimeList3.length > 0) {
            console.log(`clearTimeout 可以被检测`);
        }
        console.log(btoa(endsign))
    }, 200)

}
test_settime()
