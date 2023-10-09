"use strict";

let number = Math.floor(Math.random() * 20 + 1);
let score = document.querySelector(".score").textContent;
let highscore = 0;

function hint(cond) {
	if (score > 1) {
		document.querySelector(".message").textContent = "Too " + cond + "...";
		score -= 1;
	} else {
		document.querySelector(".message").textContent = "You Lost";
	}
}
//document.addEventListener("onload", gamestart());
document.querySelector(".check").addEventListener("click", () => {
	var guess = parseInt(document.querySelector(".guess").value);

	if (guess === number) {
		//player wins
		document.querySelector(".message").textContent = "Correct Guess!";
		document.querySelector("body").style.backgroundColor = "#60b347";
		document.querySelector(".number").style.width = "30rem";
		document.querySelector(".number").textContent = number;
		if (score > highscore) {
			highscore = score;
			document.querySelector(".highscore").textcontent = highscore;
		}
	} else if (guess > number) {
		//Too High
		hint("High");
	} else {
		//Too Low
		hint("Low");
	}
	document.querySelector(".score").textContent = score;
});

// Reset

document.querySelector(".again").addEventListener("click", () => {
	document.querySelector(".score").textContent = 20;
	document.querySelector(".guess").value = "";
	document.querySelector("body").style.backgroundColor = " #222";
	document.querySelector(".message").textContent = "Start Guessing";
	document.querySelector(".number").style.width = "15rem";
	document.querySelector(".number").textContent = "?";
	number = Math.floor(Math.random() * 20 + 1);
});
