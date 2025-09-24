function logMessage(message:string):void{
    console.log(message)
}
console.log(logMessage)

// never
function feroError(message:string):never{
    throw new Error(message)
}
function loop(message:string):never{
    while(true){
        console.log(message)
    }
}