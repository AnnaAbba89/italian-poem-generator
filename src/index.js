function generatePoem(event) {
  event.preventDefault();
  alert("generating poem");
  new Typewriter("#poem", {
    strings: ["Nel mezzo del cammin di nostra vita"],
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
