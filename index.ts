enum Direction{
    Up, //0
    Down,//1
    Left,//2
    Right//3
}

let moveDirection : Direction=Direction.Up
console.log(moveDirection)
console.log(typeof(moveDirection))


enum Status{
    Active= 1,
    Inactive= -1,
    Pending=0
}

let userStatus=Status.Inactive

console.log(userStatus)


enum color{
    Red="Red",
    Green="Green",
    Blue="Blue"
}   

let myColor:color=color.Red
console.log(myColor)
