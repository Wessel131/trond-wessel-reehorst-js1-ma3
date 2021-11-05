// Task 1
console.log("Task 1");
const getRemainder = (a, b) => a % b;

console.log(getRemainder(5, 8));

// Task 2
console.log("Task 2");

const url = "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=6f126368ed1440048387bf06fc0bfd75";

const resultsContainer = document.querySelector(".theGames");

async function getGames() {
    //  fetch
    const response = await fetch(url);

    const results = await response.json();

    const listIt = results.results;

    resultsContainer.innerHTML = "";

    console.log(listIt);

    for (let i = 0; i === 7; i++) {

        console.log(listIt.results);

        /* resultsContainer.innerHTML += `<div class = "theGames">${listIt}</div>` */
    }
}

/* 0: Object { slug: "a-hat-in-time-nyakuza-metro", name: "A Hat in Time - Nyakuza Metro", playtime: 0, … }; */
getGames();