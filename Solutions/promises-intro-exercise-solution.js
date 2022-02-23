// * Remember: a Promise is a way of waiting for a value which we don't know yet.
// E.g. "I will send you the money tomorrow at 17:00" - you have to wait until 17:00 tomorrow before you can spend the money
// E.g. "The server will respond with the data in 5 seconds" - you have to wait 5 secs before you can use the data

// Create function which returns a promise
const askForBeer = age => {
    console.log( "I will have to go and ask the manager if you can drink here. I PROMISE I will have your answer in 5 seconds...");

    // Create the promise
    const promise = new Promise(resolve => {
        // After 5 seconds, the below code will execute
        setTimeout(() => {
            // If the function received an argument which was >= 18...
            if (age >= 18) {
                // ... the Promise RESOLVES with boolean true
                resolve(true);
            // Else
            } else {
                // The Promise RESOLVES with boolean false
                resolve(false);
            }
        }, 5000)
    })

    // Return the promise
    return promise;
}

// Call the function - the Promise is returned, and waits 5 seconds before resolving with either true or false
// (true if the argument was >=18, false if not)
askForBeer(19)
// THEN, when the Promise resolves (AND NOT BEFORE!)
// Take the value which the Promise resolved with (true or false)
.then(resolveValue => {
    // If the value is true, print one message
    if (resolveValue === true) {
        console.log("You can drink here.");
    // Else, print the other message
    } else {
        console.log("You are too young. Go away!");
    }
})