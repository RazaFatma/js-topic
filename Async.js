// Synchronous -> runs serially(one by one). -------------------------------------------------------------------
console.log("Hello"); //step 1
console.log("Hi"); // step 2
console.log("Hola"); // step 3

// Asynchronous -> skips whatever takes time. does not runs serially. -------------------------------------------------------------------
console.log("Hello"); // step 1
function hi() {
    console.log("Hi");
}
setTimeout(hi, 0000); // step 3
console.log("Hola"); // step 2

// callback function ->  
// what is it: A callback function is a function that is passed as an argument to another function and is executed after the original function completes its operation.  
// why is it used: to perform asynchronous operations. 
// -------------------------------------------------------------------
function add(a,b, callback) {
    console.log(a+b);
    callback();
}

function print() {
    console.log("The answer is...");
}

add(10, 45, print)

// Arrow Function -> Arrow functions allow us to write shorter function syntax ---------------------------------------------
const greeting = () => {
    console.log("Hello, How are you");
}
greeting()

// Anonymous Function -> Function with no name. -------------------------------------------------------------------------
const addition = function (a,b,c) {
    console.log(a+b+c);
}
addition(3,7,4)

// setTimeout -> takes specified time to run the function. -----------------------------------------------------------
setTimeout(() => {
    console.log("Good job");
}, 0000);

// Promise
// Pending, fullfiled, rejected
// A promise is a good way to handle asynchronous operations. It is used to find out if the asynchronous operation is successfully completed or not.
// ----------------------------------------------------------------------------------------------------

let promise = new Promise((resolve, reject) => {
   if(10 % 2 == 0) {
        resolve("it is a multiple")
   }
   else {
        reject("it is not a multiple")
   }
});

console.log(promise); 


// Try, Catch, finally(optional)

try {
    love(a,b);
}

catch(err) {
    console.log(err.message); 
}

finally {
    console.log("This is finally. and it is optional");
}

// Promise chaining
let SonamPromise = new Promise((resolve, reject) => {
    var wada = prompt("Did you get 90% or not");
    if(wada == "yes") {
        resolve(" I got bike, yasssss!")
    }
    else {
        reject("My father said nooooooo!")
    }
});
SonamPromise
    .then(function first() {
        console.log("Prepare for under grad");
    })

    .then(function second() {
        console.log("Show off ma bike!");
    })
    
    .catch(function not() {
        console.log("I did not get the bike. i am a falier");
    })
    .finally(function doesNotmatter() {
        console.log("I love my father.");
    })

// async / await

async function henlo() {
    console.log("Henlo");
    return Promise.resolve(10)
}
henlo().then(
    function x() {
        console.log("yay")
    }
);

// The use of await pauses the async function until the promise returns a result (resolve or reject) value. For example,
// a promise
let promise2 = new Promise(function (resolve, reject) {
    setTimeout(function () {
    resolve('Promise resolved')}, 4000); 
});

// async function
async function asyncFunc() {

    // wait until the promise resolves 
    let result = await promise2; 

    console.log(result);
    console.log('hello');
}

// calling the async function
asyncFunc();

// Set Interval
setInterval(() => {
    console.log("hello");
}, 4000);
