function test_window_len() {
    if (window.length) {
        if (window[0] === window) {
            console.log(`test_window_len 可以被检测`);

        } else {
            console.log(`test_window_len 检测通过`);

        }
    } else {
        console.log(`test_window_len 可以被检测`);
    }
}

test_window_len()