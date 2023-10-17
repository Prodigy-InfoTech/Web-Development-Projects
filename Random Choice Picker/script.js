const tagsElement = document.querySelector('.tags');
const textarea = document.querySelector('#textarea');

textarea.focus();

textarea.addEventListener('keyup', (e) => {
  createTags(e.target.value);
  if (e.key === 'Enter') {
    setTimeout(() => {
      e.target.value = ''
    }, 10)
    randomSelect()
  }
});

function createTags(input) {
  const tagsArray = input.split(',')
    .filter(tag => tag.trim() !== '')
    .map(tag => tag.trim());
  tagsElement.innerHTML = '';
  tagsArray.forEach(tag => {
    const tagElement = document.createElement('span');
    tagElement.classList.add('tag');
    tagElement.innerText = tag;
    tagsElement.appendChild(tagElement);
  });
}


function randomSelect() {
  const times = 20;

  const intervalId = setInterval(() => {

    const randomTag = pickRandomTag()

    highlightTag(randomTag)

    setTimeout(() => {
      unHighlightTag(randomTag)
    }, 100)

  }, 100);

  setTimeout(() => {
    clearInterval(intervalId)

    setTimeout(() => {

      const randomTag = pickRandomTag()

      highlightTag(randomTag)

    }, 100);

  }, times * 100);
}

function pickRandomTag() {
  const tags = document.querySelectorAll('.tag');
  return tags[Math.floor(Math.random() * tags.length)]
}

function highlightTag(tag) {
  tag.classList.add('highlight');
}
function unHighlightTag(tag) {
  tag.classList.remove('highlight');
}