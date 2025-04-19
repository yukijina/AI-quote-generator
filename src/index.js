function displayQuote(response) {
  new Typewriter('.result-container', {
    strings: response.data.answer,
    autoStart: true,
    delay: 60,
    cursor: '',
  });
}

function generateQuote(event) {
  event.preventDefault();

  let userInput = document.querySelector('#user-input').value;
  let apiKey = '2f5896dd4cc0cdo340203tba4fba205f';
  let myContext =
    'You are a lot of knowledge about quotes. Also you are familier with HTML.';
  let myPrompt = `Generate a quote using ${userInput}. Generate a well-organized quote with HTML element such as <h2>, <p>, <br /> and so on. Omit your answe and html tag. Add one emoji image in the header. At the end of poem, add <strong class="shecode">By SheCodes AI</strong>`;
  let url = `https://api.shecodes.io/ai/v1/generate?prompt=${myPrompt}&context=${myContext}&key=${apiKey}`;
  axios.get(url).then(displayQuote);

  let resultContainer = document.querySelector('.result-container');
  resultContainer.innerHTML = '<p class="blink">Generating a quote...</p>';
  resultContainer.classList.remove('hidden');
}

let formElement = document.querySelector('#input-form');
formElement.addEventListener('submit', generateQuote);
