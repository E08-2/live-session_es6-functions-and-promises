// * PROMISES INTRODUCTION

// Remember the asychronous functions we looked at yesterday?
// We pretended (using setTimeout) that we were waiting for a reply from a server...
// ... And then executed a callback function AFTER the reply was received.

// ! Imagine if we wanted to run several asynchronous operations, one after the other...

const callSeveralAsyncOperations = () => {
    setTimeout(() => {
        console.log("Async operation 1 has finished!");
        setTimeout(() => {
            console.log("Async operation 2 has finished!");
            setTimeout(() => {
                console.log("Async operation 3 has finished!");
                setTimeout(() => {
                    console.log("Async operation 4 has finished!");
                    setTimeout(() => {
                        console.log("Async operation 5 has finished!");
                    }, 2000)
                }, 2000)
            }, 2000)
        }, 2000)
    }, 2000)
}

// callSeveralAsyncOperations();

// This is an example of CALLBACK HELL!

// ? How do we avoid callback hell?

// 1. Make them into smaller functions
// 2. asyc/await - we will look at this shortly!
// * 3. Promises

// ==========================================================================

// ? So what is a promise?

// Promises allow us to use just one level of nesting in our code, so we avoid a "callback hell" structure
// They allow us to PROMISE that something will happen, and THEN do something else...
// "DO SOMETHING ASYNCHRONOUS... *THEN* DO SOMETHING ELSE ASYCHRONOUS... *THEN* DO SOMETHING ELSE"

// * Example of callback hell structure:

// Do something 1
//    Do something 2
//        Do something 3...

// * Example of promise structure

// Do something 1
// .THEN do something 2
// .THEN do something 3...

// ========================================================================

// * So promises are a great way of handling asynchronous code without worrying about "falling into callback hell"!

// ! Example 1: Handling async code without callbacks or promises - this won't work!

// A function which will get some data after 3 seconds and return it
const getData = () => {
    let data;

    setTimeout(() => {
        data = "DATA!";
        return data;
    }, 3000)
}

// We do not wait 3 seconds to get the data, so when we call "useData", we cannot find a value for "myData"
// * Instead, we want to WAIT 3 seconds, then initialize the "myData" variable, THEN call the second function to log it
//let myData = getData();
//console.log(`Here is my data: ${myData}`);

// =============================================================

// * Example 2: Using a Promise to solve the above problem...

// Unlike the above code, a Promise says:
//  "I PROMISE that if you wait for me to finish, I will give you something you can use!"

// * Alternative "getData" function which uses a PROMISE

const getDataWithPromise = () => {
    
    console.log("The function has started and returned a promise. We are now waiting 3 seconds for the promise to resolve with a value")

    // This promise will resolve after 3 seconds
    // Create variable 
    const promise = new Promise(resolve => {
        setTimeout(() => {
            let question = false;

            // * Note that we can also resolve with different values using logic!
            // if (question === true) {
            //     resolve("The value was true")
            // } else {
            //     resolve("The value was false");
            // }

            resolve(question);
        }, 3000)
    })

    return promise;
}

// This function returns a promise
getDataWithPromise()
.then(resolveValue => {
    console.log("Resolve value", resolveValue)
});

// ====================================================================

// * Extra Concept 1:

// ? "I Promise a Result!"

// A. "Producing code" is code that can take some time

// B. "Consuming code" is code that must wait for the result

// "A Promise is a JavaScript object that *links* producing code and consuming code" (W3 Schools)

// ==================

// * Extra Concept 2:

// We do not have to return a promise from a function. We can also simply use it by itself!

const promise = new Promise(resolve => {
    setTimeout(() => {
        resolve("The promise resolved after 3 seconds!");
    }, 3000);
})

promise
.then(resolveValue => console.log(resolveValue));