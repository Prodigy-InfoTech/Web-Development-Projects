const quoteElement = document.getElementById('quote');
const quoteButton = document.getElementById('button');

quoteButton.addEventListener('click', generateQuote);


generateQuote();

async function generateQuote() {
  const getRandom = Math.floor(Math.random() * 16);
  const config = {
    apiUrl: 'https://type.fit/api/quotes'
  }
  fetch(config.apiUrl)
    .then(function (response) {
      return response.json()
    })
    .then((data) => {
      quoteElement.innerText = `"${data[getRandom].text}"`;
    })
}

const addQuoteButton = document.getElementById('add-quote');
addQuoteButton.addEventListener('click', () => {
  addQuote();
});

function addQuote() {
  const userInput = document.createElement('input');
  userInput.classList.add('user-input');
  userInput.placeholder = "Type your custom quote here";
  document.querySelector('.submit-container').appendChild(userInput);
  userInput.focus();
  addQuoteButton.innerText = 'Submit';
  addQuoteButton.classList.add('submit');
  const submitButton = document.querySelector('.submit');
  submitButton.addEventListener('click', () => {
    const isEmpty = userInput.value.trim();
    if (isEmpty == '') {
      userInput.value = '';
      // userInput.focus();
      userInput.remove();
    }
    else {
      quoteElement.innerText = `"${userInput.value}"`;
      userInput.remove();
    }
  })
  userInput.addEventListener('keydown', (x) => {
    if (x.key == 'Enter') {
      if (userInput.value.trim() == '') {
        userInput.innerText = '';
        userInput.remove();
      }
      else {
        quoteElement.innerText = `"${userInput.value}"`;
        userInput.value = '';
        userInput.remove();
      }
    }
  })
}