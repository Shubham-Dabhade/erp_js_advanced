// UNDERSTANDING ITERABLES AND ARRAY-LIKE OBJECTS
// ITERABLES = are objects that are able to use for...of loop
let range = {
    from: 1,
    to: 5
  };

range[Symbol.iterator] = function(){
    return {
        current: this.from,
        last : this.to,

        next(){
            if(this.current <=this.last){
                return {done:false, value :this.current++}
            }else{
                return {done:true}
            }
        }
    }
}

for (let num of range){
    console.log(num)
}


//or convert it to an array using Array.from(iterable, custom map function)
let newArray = Array.from(range,(item)=>item*2)
console.log(newArray)



// ARRAY-LIKES (Strings and followinng object is array like)
let arrayLike = {
    0:"Hello",
    1:'World',
    length:2
}

let newArrayLike = Array.from(arrayLike)
newArrayLike.push('New')
console.log(newArrayLike)



// MAPS AND SETS

let map1 = new Map()
map1.set('1','str1')
map1.set(1, 'num1')
map1.set(true, 'bool1')

map1.forEach((value,index)=>console.log(value,index))


let set = new Set(["oranges", "apples", "bananas"]);

for (let value of set) console.log(value);

// the same with forEach:
set.forEach((value, valueAgain, set) => {
  console.log(value)
});


// 1 Methods of Primitives

// Convert a number to a string and then back to a number. Use methods of primitives to check if the initial and final numbers are equal.
let num1 = 2
// two possible methods
console.log(String(num1))
console.log((num1.toString()))
let string1 = num1.toString()

//two possible methods
console.log(Number(string1))
console.log(+string1)

// 2  Numbers

// Write a function that takes a string representing a number and returns its square root. Handle cases where the input is not a valid number.
let numberIn = +prompt('Enter a number','64')
isNaN(numberIn)?alert('Enter a appropriate Number'):alert( `square root of ${numberIn} is ${numberIn**(1/2)}`)


// Strings

// Given a string, return a new string with the first and last characters swapped

let testS = 'Hello'
let fir = testS[0]
console.log(testS.at(-1))
// [fir,las] = [las,fir];
// console.log(fir+testS.slice(1,-1)+las)


// Use map(), filter(), and reduce() to create a new array containing the squares of all even numbers from the original array.
let arr = [1, 2, 3, 4, 5, 6];
let result = arr.filter((num)=>num%2==0)
console.log(result)

