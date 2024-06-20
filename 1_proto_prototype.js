//--------------------------- prototype level 1
// basic ==> prototype is something that an object lets its instances inherit and __proto__ is something that an instance inherits fromm its parents


let user = {
    name: "John",
    surname: "Smith",
  
    set fullName(value) {
      [this.name, this.surname] = value.split(" ");
    },
  
    get fullName() {
      return `${this.name} ${this.surname}`;
    }
  };
  
  let admin = {
    __proto__: user,
    isAdmin: true
  };
  
  alert(admin.fullName); // John Smith (*)
  
  // setter triggers!
  admin.fullName = "Alice Cooper"; // (**)
  
  alert(admin.fullName); // Alice Cooper, state of admin modified
  alert(user.fullName); // John Smith, state of user protected



// level1 sums or example level 1
    let car = {
        enginee:null
      };
      let merc = {
        __proto__: car,
        enginee: true
      };
    
      alert(merc.enginee) //true
    
      delete merc.enginee // will delete the instance merc's enginee not the parent car's enginee
    
      alert( merc.enginee ); // null will show the car enginee
    
      delete car.enginee; //deletes the parent elements enginee so now the enginee is undefined
    
      alert( merc.enginee ); // undefined (3)



//--------------------------- level 2
let animal={
    eat:true
}

// creating a construtor function
function Rabbit(name){
    this.name = name
}

Rabbit.prototype = animal //now all the instances of Rabbit can also inherit the entities of animal 

let rabbit = new Rabbit("White Rabbit");
//alert(rabbit.eat) //true -->accessing the parent(Rabbit)(not found) -->look for in animal(fount)

// examples
//add method to existing defined function


Function.prototype.defer = function(ms){
    setTimeout(this,ms)
}

function f(){
    alert('running')
}

f.defer(1000);



function User(name){
    this.name = name
}

User.prototype.sayHi = function(){
    alert(`Hello ${this.name}`)
}

console.log(User.prototype)
for (let fu in User.prototype){
    console.log(fu)
}

class Student{
    constructor(name){
        this.name = name
    }

    sayHi(){
        alert(`Hello ${this.name}`)
    }
}

console.log(Student.prototype)
for (let fn in Student.prototype){
    console.log(fn)
}

function doSomething(){};
console.log(doSomething.__proto__ == Function.prototype); // should give true
