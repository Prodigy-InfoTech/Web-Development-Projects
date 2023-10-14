const smallCups = document.querySelectorAll('.small-cup');
const smallCupsLength = smallCups.length;
const litres = document.querySelector('#litres');
const percentage = document.querySelector('.percentage');
const remained = document.querySelector('.remained');

updateBigCup();

smallCups.forEach((cup, index) => {

  cup.addEventListener('click', () => {
    highlightcups(index)
  })

  function highlightcups(index) {
    if (smallCups[index].classList.contains('full') && !smallCups[index].nextElementSibling.classList.contains('full')) {
      index--;
    }

    smallCups.forEach((cup, index2) => {
      if (index2 <= index) {
        cup.classList.add('full')
      }
      else {
        cup.classList.remove('full')
      }
    })
    updateBigCup();
  }
})

function updateBigCup() {
  const fullCups = document.querySelectorAll('.small-cup.full').length;
  if (fullCups === 0) {
    percentage.style.visibility = 'hidden';
    percentage.style.height = 0;
  }
  else {
    percentage.style.visibility = 'visible';
    percentage.style.height = `${fullCups / (smallCupsLength - 1) * 330}px`;
    percentage.innerText = `${fullCups / (smallCupsLength - 1) * 100}%`;
  }

  if (fullCups === smallCupsLength - 1) {
    remained.style.visibility = 'hidden';
    remained.style.height = 0;
  }
  else {
    remained.style.visibility = 'visible';
    litres.innerText = `${2 - (250 * fullCups / 1000)}`;
  }
}