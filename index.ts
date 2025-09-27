class Person2{
  name:string
  age:number

  constructor (name:string,age:number){
    this.name=name
    this.age=age
  }
introduce():void{
  console.log(`Hi my name is ${this.name} and I am ${this.age} years old`)
}
}

const Person =new Person2('Ali',25)
Person.introduce()

class Car{
  brand:string
  model:string
  year:number

  constructor(brand:string,model:string,year:number){
    this.brand=brand
    this.model=model
    this.year=year
  }
  getInfo(){
    console.log(`${this.brand} - ${this.model}-${this.year}`)
  }

}

const cars=new Car('mostang','japan',1995)
cars.getInfo()