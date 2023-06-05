console.log(top==window)
console.log(top==parent)

console.log(top.self==window)
console.log(top.self.window==window.top.self)
console.log(self.window.top==top.window.self);
console.log(self.window.top.self.top==top.window.self);
console.log(self.window.top.self.top==top.window.self.window);