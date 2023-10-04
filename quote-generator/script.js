const quoteElement = document.getElementById('quote');
const jokebutton = document.getElementById('button');

jokebutton.addEventListener('click', generateQuote);

generateQuote();

async function generateQuote() {
  const getRandom = Math.floor(Math.random() * 16);
  const config = {
    apiUrl: 'https://type.fit/api/quotes',
    repoUrl: 'https://github.com/ssokurenko/quotes-react-app'
  }
  fetch(config.apiUrl)
    .then(function (response) {
      return response.json()
    })
    .then((data) => {
      quoteElement.innerText = data[getRandom].text;
    })
}