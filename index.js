var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Down"] = 1] = "Down";
    Direction[Direction["Left"] = 2] = "Left";
    Direction[Direction["Right"] = 3] = "Right"; //3
})(Direction || (Direction = {}));
let moveDirection = Direction.Up;
console.log(moveDirection);
console.log(typeof (moveDirection));
var Status;
(function (Status) {
    Status[Status["Active"] = 1] = "Active";
    Status[Status["Inactive"] = -1] = "Inactive";
    Status[Status["Pending"] = 0] = "Pending";
})(Status || (Status = {}));
let userStatus = Status.Inactive;
console.log(userStatus);
var color;
(function (color) {
    color["Red"] = "Red";
    color["Green"] = "Green";
    color["Blue"] = "Blue";
})(color || (color = {}));
let myColor = color.Red;
console.log(myColor);
export {};
//# sourceMappingURL=index.js.map