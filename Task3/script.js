document.getElementById("getJoke").addEventListener("click", getJoke);

function getJoke() {
    fetch("https://official-joke-api.appspot.com/random_joke")
        .then(response => response.json())
        .then(data => {
            document.getElementById("joke").textContent = `${data.setup} - ${data.punchline}`;
        })
        .catch(error => {
            document.getElementById("joke").textContent = "Oops! Could not fetch a joke.";
            console.error("Error fetching data:", error);
        });
}
