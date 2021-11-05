// Task 1
console.log("Task 1");
const getRemainder = (a, b) => a % b;

console.log("Remainder: ", getRemainder(10, 8));

// Task 2
console.log("Task 2");

const url = "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=6f126368ed1440048387bf06fc0bfd75";

const resultsContainer = document.querySelector(".theGames");

async function getGames() {
    //  fetch
    const response = await fetch(url);

    const results = await response.json();

    //  Getting the array from the results.
    const listIt = results.results;

    // Just setting the inner HTML to empty so that the loading animation clears.
    resultsContainer.innerHTML = "";

    //  Posting the listIt properties to visualize the path in the for loop.
    /*     console.log(listIt); */

    for (let i = 0; i < listIt.length; i++) {

        //  Console.log() the names of the objects displayed in the array.
        /*  console.log("Game: " + listIt[i].name + " " + "Rating: " + listIt[i].rating + " " + "Tags: " + listIt[i].tags.length); */

        //  Want to add my information to the inner HTML of the <div>. Though I don't get why the ` doesn't create new lines for each value in the HTML when loaded.
        resultsContainer.innerHTML +=
            `<div class = "theGames">Game: ${listIt[i].name}
            Rating: ${listIt[i].rating}
            Tags: ${listIt[i].tags.length}</div>`;

        //  Displaying only the first 8 results, then break. i = 7 because the counter i starts at 0.
        if (i === 7) {
            break;
        };
    };
};

//  Calling the function
getGames();