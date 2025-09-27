class Person2 {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    introduce() {
        console.log(`Hi my name is ${this.name} and I am ${this.age} years old`);
    }
}
const Person = new Person2('Ali', 25);
Person.introduce();
class Car {
    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }
    getInfo() {
        console.log(`${this.brand} - ${this.model}-${this.year}`);
    }
}
const cars = new Car('mostang', 'japan', 1995);
cars.getInfo();
export {};
//# sourceMappingURL=index.js.map