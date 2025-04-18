function displayRecipe(response) {
  let recipeContainer = document.querySelector('.recipe-container');
  recipeContainer.innerHTML = response.data.answer;
}

function generateRecipe(event) {
  event.preventDefault();

  let userInput = document.querySelector('#user-input').value;
  console.log(userInput);
  let apiKey = '2f5896dd4cc0cdo340203tba4fba205f';
  let myContext =
    'You are a lot of knowledge about quotes. Also you are familier with HTML.';
  let myPrompt = `Generate a quote using ${userInput}. Generate a well-organized quote with HTML element such as <h2>, <p>, <br /> <strong>. Omit your answe and html tag. Add one emoji image in the header. At the end of poem, add <strong class="shecode">By SheCodes AI</strong>`;
  let url = `https://api.shecodes.io/ai/v1/generate?prompt=${myPrompt}&context=${myContext}&key=${apiKey}`;
  axios.get(url).then(displayRecipe);

  let recipeContainer = document.querySelector('.recipe-container');
  recipeContainer.innerHTML = 'Generating a quote...';
}

let formElement = document.querySelector('#input-form');
formElement.addEventListener('submit', generateRecipe);
