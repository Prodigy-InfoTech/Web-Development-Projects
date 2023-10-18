const holes = document.querySelectorAll('.hole');
const scoreBoard = document.querySelector('.score');
const moles = document.querySelectorAll('.mole');
const countdownElement = document.getElementById('countdown');
let lastHole;
let timeUp = false;
let score = 0;
let countdown = 10;


function updateCountdown() {
    countdownElement.textContent = countdown;
}

// Create a function to start the countdown
function startCountdown() {
    updateCountdown();
    const countdownInterval = setInterval(() => {
        countdown--;
        updateCountdown();
        if (countdown <= 0) {
            clearInterval(countdownInterval);
            timeUp = true;
            countdownElement.textContent = 'Time\'s up!';
        }
    }, 1000);
}

//create a function to make a random time for mole to pop from the hole
function randomTime(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

function randomHole(holes){
    const index  = Math.floor(Math.random() * holes.length);
    const hole = holes[index];

    //prevent same hole from getting the same number
    if (hole === lastHole){
        return randomHole(holes);
    }
    lastHole = hole;
    return hole;
}

function peep() {
    const time = randomTime(1000, 2000); //get a random time to determine how long mole should peep
    const hole = randomHole(holes); //get the random hole from the randomHole function
    hole.classList.add('up'); //add the CSS class so selected mole can "pop up"
    setTimeout(() => {
        hole.classList.remove('up'); //make the selected mole "pop down" after a random time
        if(!timeUp) {
            peep();
        }
    }, time);
}

function startGame() {
    scoreBoard.textContent = 0;
    timeUp = false;
    score = 0;
    countdown = 10; // Reset the countdown to 10 seconds
    updateCountdown(); // Update the countdown display
    startCountdown(); // Start the countdown
    peep();
}

function wack(e){
    if(!e.isTrusted) return;
    if (timeUp) return; // Prevent whacking moles after time's up
    score++;
    this.parentNode.classList.remove('up');
    scoreBoard.textContent = score;
}

moles.forEach(mole => mole.addEventListener('click', wack))
