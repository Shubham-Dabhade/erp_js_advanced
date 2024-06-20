// 1- constructor functions


    function Car(make,model,year,color){
        this.make = make;
        this.model = model;
        this.year = year;
        this.color = color;
        this.drive = function(){console.log(`You drive the ${this.make} ${this.model}`)}
    }

    const car1 = new Car('Ford','mustang',2024,'red')

    console.log(car1.make)
    console.log(car1.model)
    console.log(car1.year)
    console.log(car1.color)



// 2----- class
class Product{
    constructor(name,price){
        this.name = name;
        this.price = price;
    }


    displayProduct(){
        console.log(`Product ${this.name}`);
        console.log(`Price: ${this.price}`);
    }
}

console.log(Product.prototype.constructor) // we can see that class is a function which is a constructor method and the methods defined in it are added through prototype


const product1 = new Product('Laptop',20000);
product1.displayProduct()





// 3------ inheritance

class Animal{
    alive = true;

    eat(){
        console.log(`This ${this.name} is eating`)
    }

    sleep(){
        console.log(`This ${this.name} is sleeping`)
    }
}

// we can inherit using extends
class Rabbit extends Animal{
    name = 'rabbit';
}

//or we can inherit using __proto__

class Figetsh{
    name = 'nemo'
}


Object.setPrototypeOf(Fish.prototype, Animal.prototype);

const rabbit = new Rabbit()
const fish = new Fish()

rabbit.eat()
fish.eat()


// getter and setters

class User{
    constructor(name){
        this.name = name;
    }

    get name(){
        return this._name;
    }

    set name(value){
        if (value<4){
            alert("this name is too short")
            return
        }
        this._name = value
    }
}


let user = new User("John");
alert(user.name); // John

user = new User(""); // Name is too short.


// protect ,read only and private methods and properties 

class coffeeMachine{

    _waterAmount = 0;n //protected variable

    constructor(power){
        this._power = power;
    }

    get power(){
        return console.log(`the device power is ${this._power} W`) //read only variable
    }


    get waterAmount(){
        return this._waterAmount;
    }

    set waterAmount(value){
        if(value<0){
            alert("water amount cannot be negative")
            return
        }else{
            this._waterAmount = value;
        }
    }

    #loss = 20 //private variable

    totalBeans = 200

    makeCoffee(){
        if(this._waterAmount<250){
            alert("not enough water")
            return
        }
        this._waterAmount -= 250;
        this.totalBeans -= this.#loss;
        return "coffee is ready"
    }
}


let machine = new coffeeMachine(100)
console.log(machine.power)
machine.waterAmount = 500
console.log(machine.makeCoffee())
console.log(machine.waterAmount)