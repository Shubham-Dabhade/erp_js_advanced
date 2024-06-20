//1 ---- Creating and Manipulating Objects

// Create an object representing a book with properties title, author, and year. Add a method to the object that prints out the book details.
let book = {
    title : "TimeZone",
    author : "Nolan",
    year : 2019,
    getSummary : function(){
        return `${this.title} was written by ${this.author} in ${this.year}`
    }
}

console.log(book.getSummary());

//2---- Object References and Copying

// Write a function to create a deep copy of an object.
// javascript
// for shallow copy we can use Object.assign()
let user = {
    name:'Shubham',
    age:23,
    location:{
        city:'Mumbai',
        state:'Maharashtra'
    }
}

let shallowClone = Object.assign({},user) // creates a shallow clone means the sub object is not copied as whole but its reference is copied

let deepClone = structuredClone(user) //creates a deepclone i.e the sub object is copied as whole and not its reference

console.log(shallowClone.location === user.location);  //true
console.log(deepClone.location === user.location); //false


// 3----- Using "this" in Methods

// Create an object representing a car with properties make, model, and year. Add a method that uses this to return the car's description.
let car = {
    make:'merc',
    model:'amd',
    year:2019,
    getSummary(){
        return `${this.make} ${this.model} ${this.year}`
    }
}

console.log(car.getSummary())



// 4------- Constructor Functions and "new"

// Write a constructor function for creating Person objects with properties name and age. Use the new operator to create a new person.
function Person(name,age){
    this.name = name;
    this.age = age;
}

const shubham = new Person('Shubham',12);
console.log(shubham.name);

// calling constructor function withouth the new operator
function Person1(name,age){
    this.name = name;
    this.age = age

    if (!new.target) new Person1(this.name,this.age);
    
    return this  // else new is present send the {} formed
}

const shubham1 = Person1('Shubham',12);
console.log(shubham1.name)


// 5 -----Object to Primitive Conversion

// Create an object and override the toString and valueOf methods to customize its conversion to a primitive value.

let person = {
    name:'Shubham',
    age:23,
    toString(){
        return this.name;
    },
    valueOf(){
        return this.age;
    }
}

console.log(+person)  // returns 23 as the hint is Number (uniary operator +)

//without using toString and valueOf
let person1 = {
    name:'Shubham',
    age:23,

    [Symbol.toPrimitive](hint){
        return hint == 'string'?this.name:this.age
    }
}

console.log(person1 )  