// function hello (name: string): string {
//   return `Hello, ${name}!`
// }
// function logMessage(message: string): void {
//   console.log(`hello message:${message}`);
// }
// function personInfo(name: string, age?: number): string {
//     return age ? `${name} is ${age} years old.` : `${name}'s age is unknown.`;
// }
function greet(name, greeting = "Hello") {
    return `${greeting}, ${name}!`;
}
console.log(greet("Alice")); // Output: Hello, Alice!
console.log(greet("Bob", "Hi")); // Output: Hi, Bob!    
console.log(greet("Charlie", undefined)); // Output: Hello, Charlie!
export {};
//# sourceMappingURL=index.js.map