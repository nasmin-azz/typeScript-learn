function logMessage(message) {
    console.log(message);
}
console.log(logMessage);
// never
function feroError(message) {
    throw new Error(message);
}
function loop(message) {
    while (true) {
        console.log(message);
    }
}
export {};
//# sourceMappingURL=index.js.map