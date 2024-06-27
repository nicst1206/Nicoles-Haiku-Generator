function generateHaiku(event) {
  event.preventDefault();
  new Typewriter("#haiku", {
    strings: "The haiku will go here",
    autoStart: true,
    cursor: "",
    delay: 10,
  });
}

let poemFormElement = document.querySelector("#haiku-generator-form");
poemFormElement.addEventListener("submit", generateHaiku);
