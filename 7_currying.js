// currying takes a function that receieves more than one parameter and breaks it into a series of unary(one parameter) functions

const buildSandwich = (ingredient1)=>{
    return (ingredient2)=>{
        return (ingredient3)=>{
            return `${ingredient1} ${ingredient2} ${ingredient3}`
        }
    }
}

//refactoring it
const buildSand = ingred1 => ingred2 =>ingred3 => `${ingred1} ${ingred2} ${ingred3}`

const mySammy = buildSand('lettuce')('potato')('tomato')

// question 1
// Question:

// Write a function multiply that takes two arguments a and b and returns their product. Then, convert this function into a curried function curriedMultiply that allows you to call it with one argument at a time.

const multiply = (a,b)=>{
    return a*b
}

function curriedMultiply(fn){
    return (a)=>{
        return (b)=>{
            return fn(a,b)
        }
    }
}

const multiplyCaller = curriedMultiply(multiply)
console.log(multiplyCaller(2)(3));

// Advanced Currying Question
// Question:

// You need to write a function curry that can take any function fn and return a curried version of that function. The curried function should be able to handle multiple arguments and should be capable of partial application.

function sum(a,b,c){ //accepts 3 parameters
    return a+b+c
}

function curry(fn){
    return function curried(...args){
        if (args.length>=fn.length){
            return fn.apply(this,args)
        }
        else{
            return function(...nextArgs){
                return curried.apply(this,args.concat(nextArgs))
            }
        }
    }
}


const curriedSum = curry(sum);


console.log(curriedSum(1)(2)(3)); // Should print 6
console.log(curriedSum(1, 2)(3)); // Should print 6
console.log(curriedSum(1)(2, 3)); // Should print 6
console.log(curriedSum(1, 2, 3)); // Should print 6