let car = {
  make: "tata",
  model: "camary",
  year: 2020,
  start: function () {
    return `${this.make} car started in the year ${this.year}`;
  },
};
// console.log(car.start());
// constructor function
function Person(name, age) {
  this.name = name;
  this.age = age;
}

let john = new Person("john", 18);
// console.log(john);
// console.log(john.age);

// prototype

function Animal(species) {
  this.species = species;
  //   let speak = function(){
  //     return `${this.species} makes a sound`
}

Animal.prototype.speak = function (species) {
  return `${this.species} makes a sound`;
};

let lion = new Animal("lion");
// let sound =
// console.log(lion.speak());

Array.prototype.yuvraj = function () {
  return `${this}`;
};

let num = [1, 2, 3];
// console.log(num.yuvraj());
let num1 = [1, 2, 3, 4, 5];
// console.log(num1.yuvraj());

class Vehicle {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }
  display() {
    return `${this.make} made a ${this.model}`;
  }
}
let toyota = new Vehicle("toyota", "camary");
// console.log(toyota.make);
// console.log(toyota.model);
// console.log(toyota.display());
class wheels extends Vehicle {
  display() {
    return `${this.make} is a car`;
  }
}
let tata = new wheels("tata", "curv");
// console.log(tata.display());

class BankAccount {
  #balance = 0;

  deposit(amount) {
    this.#balance += amount;
    return this.#balance;
  }
}
let acc1 = new BankAccount();
// console.log(acc1.deposit(100));

class bird {
  fly() {
    return `flying...`;
  }
}

class kiwi extends bird {
  fly() {
    return `cant fly`;
  }
}
let kiwi1 = new kiwi();
// console.log(kiwi1.fly());

// static method
class calculator {
  static add(a, b) {
    return a + b;
  }
}

// console.log(calculator.add(2,4));
function Animal() {}
Animal.prototype.speak = function () {
  return `Animal speaking`;
};

function Dog() {}
Dog.prototype.bark = function () {
  return `Woof!`;
};
Dog.prototype.Animal;
console.log(Dog.speak());

