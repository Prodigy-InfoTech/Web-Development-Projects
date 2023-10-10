// Generate a random number between 1 and 100
const secretNumber = Math.floor(Math.random() * 100) + 1;

let attempts = 0;

const guessInput = document.getElementById("guess");
const checkButton = document.getElementById("check");
const message = document.getElementById("message");
const attemptsDisplay = document.getElementById("attempts");

checkButton.addEventListener("click", function() {
    const userGuess = parseInt(guessInput.value);
    attempts++;

    if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
        message.textContent = "Please enter a valid number between 1 and 100.";
    } else if (userGuess === secretNumber) {
        message.textContent = `Congratulations! You guessed the number in ${attempts} attempts.`;
        guessInput.disabled = true;
        checkButton.disabled = true;
    } else if (userGuess < secretNumber) {
        message.textContent = "Too low. Try again.";
    } else {
        message.textContent = "Too high. Try again.";
    }

    attemptsDisplay.textContent = attempts;
    guessInput.value = "";
});
