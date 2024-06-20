// 1-Number -----------------
    // You are writing a program that processes various numerical inputs and outputs in different formats. The program needs to:

    // Convert a decimal number to its binary and hexadecimal representations.
    // Round a given number to two decimal places.
    // Handle imprecise calculations and display the results with a limited number of significant digits.
    // Test if a given value is a finite number and not NaN.
    // Parse integer and floating-point numbers from strings.
    // Use a few Math functions to perform basic calculations


    // let decimalNumber = 123.456;
    // let stringNumber = "123.456xyz";
    // let impreciseNumber = 0.1 + 0.2;

    // 1- converting decimalNumber to decimaland hexadecimal representation
    let binaryNumber = decimalNumber.toString(2);
    let hexadecimalNumber = decimalNumber.toString(16); 

    // 2. Round the number to two decimal places
    let roundedNumber = decimalNumber.toFixed(2); // Two decimal places

    // 3. Handle imprecise calculations and limit significant digits
    let preciseNumber = impreciseNumber.toFixed(2); // Two significant digits

    // 4. Test if the value is finite and not NaN
    let isFiniteNumber = isFinite(decimalNumber);  // Checks if the number is finite
    let isValidNumber = !isNaN(Number(stringNumber));  // Checks if the string can be converted to a valid number

    // 5. Parse integer and floating-point numbers from strings
    let parsedInt = parseInt(stringNumber); // Parses integer part
    let parsedFloat = parseFloat(stringNumber); // Parses floating-point number

    // 6. Use Math functions
    let randomNum = Math.random(); // Generates a random number between 0 and 1
    let sqrtNum = Math.sqrt(decimalNumber); // Calculates the square root

    console.log(`Binary: ${binaryNumber}`);
    console.log(`Hexadecimal: ${hexadecimalNumber}`);
    console.log(`Rounded: ${roundedNumber}`);
    console.log(`Precise: ${preciseNumber}`);
    console.log(`Is finite: ${isFiniteNumber}`);
    console.log(`Is valid: ${isValidNumber}`);
    console.log(`Parsed int: ${parsedInt}`);
    console.log(`Parsed float: ${parsedFloat}`);
    console.log(`Random number: ${randomNum}`);
    console.log(`Square root: ${sqrtNum}`);



// 2 Strings
//truncate the text
    function truncateString(str,maxlength){
            return (str.length > maxlength)?str.slice(0,maxlength-1)+"...":str;
    }

    console.log(truncateString("What I'd like to tell on this topic is:",20));

    let guestList = `Guests:
 * John
 * Pete
 * Mary
`;

// alert(guestList);


// 3------------- iterables  
let range = {
    from: 1,
    to: 5
  };



for (let val in range){
    console.log(val) //this just returns the keys of the objects
}

// to make it iterable like array we through it using Symbol.iterator
range[Symbol.iterator] = function(){
    return{
        current:this.from,
        last:this.to,


        next(){
            if(this.current <= this.last){
                return {done:false,value:this.current++}
            }
            else{
                return {done:true}
            }
        }
    }
    
}



for (let num of range){
    console.log(num)   // now it iterates through the iterable object range 
}

    //string is iterable as well as array like
    str = 'hello'

    for (let i of str){
        console.log(i)
    }

    // we can explicitly iterate through it
    let iterablestr = str[Symbol.iterator]

    while(true){
        let result = iterablestr.next();
        if(result.done) break;
        console.log(result.value);
    }



// 4-------------- map and set
// map
// we can set a map in following ways
let map = new Map([
    ['1',  'str1'],
    [1,    'num1'],
    [true, 'bool1']
  ]);

  map.set('2',2)

  map.forEach((value,key)=>{
    // alert(`${key}: ${value}`);
  })

  let obj = {
    name: "John",
    age: 30
  };
  
  // Object.entries(obj) that returns an array of key/value pairs
  let newMap = new Map(Object.entries(obj));

  for (let key of newMap.keys()){
    console.log(key)
  }


// set similar to sets in python sets stores unique values
let set = new Set(["oranges", "apples", "bananas"]);

// for (let value of set) alert(value);

// the same with forEach:
set.forEach((value, valueAgain, set) => {
//   alert(value);
});


// 5-------Object.keys, values, entries
// unlike arrays objects do not have built in functions such as map, filter to use that convert it to array then back to objects
let prices={
    banana:3,
    apple:4,
}

let doublePrices = Object.fromEntries( Object.entries(prices).map((entity)=>[entity[0],entity[1]*2]) )

// console.log(doublePrices)

// eg 2 sum the salaries
let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
  };

  function sumSalaries(obj){
    let sum = 0;
    Object.entries(obj).forEach((entity)=> sum += entity[1]);
    return sum;
  }
  
  alert( sumSalaries(salaries) ); 