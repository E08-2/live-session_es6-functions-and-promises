// * Part 1

// Create a reference to the HTML "modal" element
const modal = document.querySelector("#myModal");

// Create a function to display the modal after 10 seconds
const displayModal = () => {
    // Create a new promise
    // The promise will take 10 seconds to resolve ("finish, get a result")
    // Once the promise resolves, it will give some kind of result - in this case, a string
    let promise = new Promise(resolve => {
        setTimeout(() => {
            resolve("You have been on the site for 10 seconds. Cool!");
        }, 10000)
    });

    // Return the promise from the function
    // Because JS receives a promise when it calls the function (below)...
    // ... It knows that it needs to wait until the promise resolves, rather than immediately trying to use some data
    return promise;
}

// Call the displayModal() function
displayModal()
// Only when the promise resolves...
// ... use the result from the promise to do something else
.then(data => {
    console.log("Promise resolve() value:", data)
    modal.style.display = "block";

    // *If you like, you could also update your DOM using the resolve value of the promise!
    //modal.textContent = data;
});


// =======================================================================================================================

// * Part 2

const removeModal = event => {
    if (event.target.className == "close" || event.target.className == "modal") {
        modal.style.display = "none";
    }

    // switch(event.target.className) {
    //     case "close":
    //     case "modal":
    //         modal.style.display = "none";
    //         break;
    // }
}

modal.addEventListener("click", removeModal);