// 1--------------------Recursion
        // find the factorial of given number
        const n = prompt('Enter the number')

        function factorial(n){
            if(n==1){
                return 1;
            }else{
                return n*factorial(n-1)
            }
        }

        alert(factorial(n))

        // EG                   //run recursive traversal on this and get the salary
        let company = {
            sales: [{
              name: 'John',
              salary: 1000
            }, {
              name: 'Alice',
              salary: 1600
            }],
          
            development: {
              sites: [{
                name: 'Peter',
                salary: 2000
              }, {
                name: 'Alex',
                salary: 1800
              }],
          
              internals: [{
                name: 'Jack',
                salary: 1300
              }]
            }
          };


// 2-----------------------Rest parameters and spread syntax
//EG Create a function mergeAndSumArrays that takes any number of arrays as arguments using rest parameters, merges them into a single array, and then returns the sum of all the numbers in the merged array.


function mergeAndSumArrays(...arg){
    let sum = 0
    for (let a of arg){
        b = a.reduce((accum,curr)=>{
            return accum + curr
        })
        sum+=b
    }
    return sum;
}

// alert(mergeAndSumArrays([1,2,3],[1,2]))

// 3 ----------------------------------Variable scope, closure
// EG Write a function createCounter that returns a new counter function. Each time the counter function is called, it should increment a private counter variable by 1 and return the current count. 

function createCounter(){
    let count =0;
    return function(){
        count++;
        return count;
    }
}

let counter = createCounter()
let counter2 = createCounter()

alert(counter())
alert(counter())


alert(counter2())
alert(counter2())



// 4----------------------------------Function object, NFE
//EG Write a function named makeCounter that creates and returns a counter function with a hidden property to keep track of the count. The returned counter function should have the following capabilities:

// When called, it increments and returns the current count.
// The counter function should have a method set(value) that allows setting the counter to a specific value.
// The counter function should have a method decrease() that decreases the counter value by 1.

// expected output 
// counter(); // Output: 1
// counter(); // Output: 2
// counter.set(10);
// counter(); // Output: 11
// counter.decrease();
// counter(); // Output: 11

    function makeCounter(){
        let count = 0;

        let counter = function counter(){
            return ++count
        }

        counter.set = function(value){
            count=value
        }

        counter.decrease = function(){
            return --count
        }

        return counter;
    }

    let counter1 = makeCounter()
    console.log(counter1())
    console.log(counter1())
    counter1.set(10)
    console.log(counter1())
    counter1.decrease()
    console.log(counter1())



// 5 --------------------------Scheduling: setTimeout and setInterval
//Write a function startTimer that takes two arguments: duration (in seconds) and interval (in milliseconds). The function should print the remaining time every interval milliseconds, and when the time is up, it should print "Time's up!".

   function setTimer(duration,interval){
    let remainingTime = duration;

    const intervalId = setInterval(()=>{
        if(remainingTime>0){
            alert( `Remaining Time is ${remainingTime} seconds`)
            remainingTime--
        }
    },interval);

    setTimeout(()=>{
        clearInterval(intervalId)
        alert('Time is up')
    },duration*interval);
   }


   setTimer(10,1000)

