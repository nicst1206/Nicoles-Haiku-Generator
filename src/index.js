function displayHaiku(response) {
  new Typewriter("#haiku", {
    strings: response.data.answer,
    autoStart: true,
    cursor: "",
    delay: 10,
  });
}

function generateHaiku(event) {
  event.preventDefault();
  let userInput = document.querySelector("#instructions");
  let apiKey = "obbt00a19b0447e3fbfabf89040f3c88";
  let question = `User instructions: Generate a haiku about ${userInput.value}`;
  let context =
    "You are an expert on haikus. Your mission is to create a haiku using the user instructions. Please return your answer in basic HTML. Sign your haiku with 'SheCodes AI' inside a <strong> element at the end of the haiku";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${question}&context=${context}&key=${apiKey}`;
  axios.get(apiUrl).then(displayHaiku);
}

let poemFormElement = document.querySelector("#haiku-generator-form");
poemFormElement.addEventListener("submit", generateHaiku);
