// function hello (name: string): string {
//   return `Hello, ${name}!`
// }
// function logMessage(message: string): void {
//   console.log(`hello message:${message}`);
// }
// logMessage('Hello, World!');
// logMessage('Hello, Nassim!');
//  console.log(hello('Nassim'));    
function personInfo(name, age) {
    return age ? `${name} is ${age} years old.` : `${name}'s age is unknown.`;
}
console.log(personInfo('Nassim', 30)); // Nassim is 30 years old.
console.log(personInfo('Alice')); // Alice's age is unknown.
console.log(personInfo('Bob', undefined)); // Bob's age is unknown.
console.log(personInfo('Charlie', 25)); // Charlie is 25 years old.
export {};
//# sourceMappingURL=index.js.map