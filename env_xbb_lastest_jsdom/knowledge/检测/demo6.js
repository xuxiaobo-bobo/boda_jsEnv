

function test_node() {
    // delete globalThis[Symbol.toStringTag];
    try {
        if (global) {
            console.log(`global 被检测`);
        }
    } catch {
        try {
            if (GLOBAL) {
                console.log(`GLOBAL 被检测`);
            }
        } catch {
            try {
                if (Buffer) {
                    console.log(`Buffer 被检测`);
                }
            } catch {
                try {
                    if (process) {
                        console.log(`process 被检测`);
                    }
                } catch {
                    try {
                        if (root) {
                            console.log(`root 被检测`);
                        }
                    } catch {
                        try {
                            if (WindowProperties) {
                                console.log(`WindowProperties 被检测`);
                            }
                        } catch {
                            try {
                                if (global) {
                                    console.log(`global 被检测`);
                                }
                            } catch {
                                try {
                                    if (global) {
                                        console.log(`global 被检测`);
                                    }
                                } catch {
                                    try {
                                        if (global) {
                                            console.log(`global 被检测`);
                                        }
                                    } catch {
                                        try {
                                            if (VMError) {
                                                console.log(`VMError 被检测`);
                                            }
                                        } catch {
                                            try {} catch {
                                                try {} catch {}
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }

    if (Object.getOwnPropertyDescriptor(window, 'Function').value + '' == 'function Function() { [native code] }') {
    } else {
        console.log(`Object.getOwnPropertyDescriptor(window,'Function').value +''  可以被检测`);
    }
}
test_node()