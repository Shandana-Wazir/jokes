let jokeElement = document.getElementById("joke");

async function getJoke() {
  try {
    const response = await axios.get("https://official-joke-api.appspot.com/jokes/random");
    const data = response.data;
    const jokeText = `${data.setup} — ${data.punchline}`;
    jokeElement.innerHTML = jokeText;
    console.log(jokeText);
  } catch (error) {
    console.error("Error fetching joke:", error);
    jokeElement.innerHTML = "Oops! Couldn't fetch a joke.";
  }
}
