function test_getOwnPropertyDescriptor() {
    if (Object.getOwnPropertyDescriptor(window, 'document').set) {
        console.log(`Object.getOwnPropertyDescriptor(window,'document') 可以被检测`);
    } else {
        endsign += 'h'
        let get_name = Object.getOwnPropertyDescriptor(window, 'document').get + ''
        if (get_name == 'function get document() { [native code] }') {
            endsign += 'I'
        } else {
            console.log(`Object.getOwnPropertyDescriptor(window,'document').get 可以被检测`);

        }
    }
    try {
        Object.getOwnPropertyDescriptor(window, 'document').get()
        console.log(`Object.getOwnPropertyDescriptor(window,'document').get() 可以被检测`);

    } catch {
        endsign += 'J'

    }
}
test_getOwnPropertyDescriptor()
