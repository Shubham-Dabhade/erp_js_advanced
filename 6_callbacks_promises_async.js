// callbacks
//lets say we want to add a script tag to html(async operation) and would want to run a code after it is loaded


function loadScript(scriptPath,call){
    let script = document.createElement('script');
    script.src = scriptPath;
  
    script.onload = () => call(script);
    document.head.append(script);
}

loadScript("/demo.js",function(){
    newFunction();
})

//simplified version

function task1(callback){
    setTimeout(()=>{
        console.log('task1 is completed')
        callback();
    },1000)
}

function task2(){
    setTimeout(()=>{
        console.log('task2 is completed')
    },1000)
}

task1(task2)


// Promises
function walkDog(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const dogWalked = false;

            if(dogWalked){
                resolve('the dog is walked')
            }else{
                reject(new Error("you didn't walk the dog"))
            }
        },1000)
    })
}

function eatFood(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const eatF = true

            if (eatF) resolve('you have eaten the food')
            else reject(new Error("you didn't eat the food"))

        },3000)
    })
}

walkDog().then((value)=>{console.log(value); return eatFood})
         .then((value)=>console.log(value))
         .catch((error)=>console.log(error))



// the execution: catch -> then
new Promise((resolve, reject) => {

    throw new Error("Whoops!");
  
  }).catch(function(error) {
  
    alert("The error is handled, continue normally");
  

new Promise(function() {
    noSuchFunction(); // Error here (no such function)
  })
    .then(() => {
      // successful promise handlers, one or more
    }); 
  }).then(() => alert("Next successful handler runs"));

new Promise(function(resolve, reject) {
    setTimeout(() => {
    //   throw new Error("Whoops!");
    }, 1000);
  }).catch(alert);



// promise all
let names = ['iliakan', 'remy', 'jeresig'];

let requests = names.map(name => fetch(`https://api.github.com/users/${name}`));

Promise.all(requests)
  .then(responses => {
    // all responses are resolved successfully
    for(let response of responses) {
      alert(`${response.url}: ${response.status}`); // shows 200 for every url
    }

    return responses;
  })
  // map array of responses into an array of response.json() to read their content
  .then(responses => Promise.all(responses.map(r => r.json())))
  // all JSON answers are parsed: "users" is the array of them
  .then(users => users.forEach(user => alert(user.name)));





// promise.allSettled
let urls = [
    'https://api.github.com/users/iliakan',
    'https://api.github.com/users/remy',
    'https://no-such-url'
  ];


  //promise all either gets all requests successfully or rejects if any of them fails
Promise.all(urls.map((url)=>fetch(url)))
        .then(alert)
        .catch(err=>console.log(err))



  Promise.allSettled(urls.map(url => fetch(url)))
  .then(results => { // (*)
    results.forEach((result, num) => {
      if (result.status == "fulfilled") {
        alert(`${urls[num]}: ${result.value.status}`);
      }
      if (result.status == "rejected") {
        alert(`${urls[num]}: ${result.reason}`);
      }
    });
  });