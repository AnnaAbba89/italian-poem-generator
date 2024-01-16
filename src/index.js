function displayPoem(response) {
  console.log("Poem generated");
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "afc34890d5f2e69t9063c4e498283o2b";
  let prompt = `User's instructions are: Generate an Italian poem about ${instructionsInput.value}`;
  let context =
    " You are a romantic poem expert and love to write short poems. Your mission is to generate a 4-line poem in basic HTML. Always separate each line with a <br/>. Make sure to follow the user's instructions. Do not include a title to the poem. Always sign the poem with 'SheCodes AI' inside a <strong> element at the bottom of the poem and NOT at the beginning";
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let poemElement = document.querySelector("#poem");
  poemElement.classList.remove("hidden");
  poemElement.innerHTML = `<div class="generating">⏳ Generating an Italian poem about ${instructionsInput.value}...</div>`;

  console.log("Generating poem");
  console.log(`Prompt: ${prompt}`);
  console.log(`Context: ${context}`);

  axios.get(apiURL).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
