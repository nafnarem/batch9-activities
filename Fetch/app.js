const fetch = require("node-fetch");
const apiUrl = "https://api.chucknorris.io/jokes/random";
async function getJoke() {
    const response = await fetch(apiUrl);
    const data = await response.json();
    console.log(data.value);
}
getJoke();
