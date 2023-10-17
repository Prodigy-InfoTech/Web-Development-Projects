const paragraphs = [
    "One dollar and eighty-seven cents. That was all. And sixty cents of it was in pennies. Pennies saved one and two at a time by bulldozing the grocer and the vegetable man and the butcher until one’s cheeks burned with the silent imputation of parsimony that such close dealing implied. One dollar and eighty-seven cents. And the next day would be Christmas...",
    "There was a leak in the boat. Nobody had yet noticed it, and nobody would for the next couple of hours. This was a problem since the boat was heading out to sea and while the leak was quite small at the moment, it would be much larger when it was ultimately discovered. John had planned it exactly this way.",
    "The paper was blank. It shouldn't have been. There should have been writing on the paper, at least a paragraph if not more. The fact that the writing wasn't there was frustrating. Actually, it was even more than frustrating. It was downright distressing.", "The coin hovered in the air, spinning over and over again. It reached its peak and began to descend. Both boys were pleading with it to land a certain way but the coin had already made up its mind on what it was going to do.",
    "I'll talk to you tomorrow in more detail at our meeting, but I think I've found a solution to our problem. It's not exactly legal, but it won't land us in jail for the rest of our lives either. Are you willing to take the chance? Monroe asked his partner over the phone.",
    "There was a time when he would have embraced the change that was coming. In his youth, he sought adventure and the unknown, but that had been years ago. He wished he could go back and learn to find the excitement that came with change but it was useless. That curiosity had long left him to where he had come to loathe anything that put him out of his comfort zone."
];

const typingText = document.querySelector(".typing-text p"),
    inpField = document.querySelector(".wrapper .input-field"),
    tryAgainBtn = document.querySelector(".content button"),
    timeTag = document.querySelector(".timeLeft span b"),
    errorTag = document.querySelector(".errors span"),
    wpmTag = document.querySelector(".wpm span"),
    cpmTag = document.querySelector(".cpm span");

let timer,
    maxTime = 60,
    timeLeft = maxTime,
    charIndex = errors = isTyping = 0;

function loadParagraph() {
    const ranIndex = Math.floor(Math.random() * paragraphs.length);
    typingText.innerHTML = "";
    paragraphs[ranIndex].split("").forEach(char => {
        let span = `<span>${char}</span>`
        typingText.innerHTML += span;
    });
    typingText.querySelectorAll("span")[0].classList.add("active");
    document.addEventListener("keydown", () => inpField.focus());
    typingText.addEventListener("click", () => inpField.focus());
}

function initTyping() {
    let characters = typingText.querySelectorAll("span");
    let typedChar = inpField.value.split("")[charIndex];
    if (charIndex < characters.length - 1 && timeLeft > 0) {
        if (!isTyping) {
            timer = setInterval(initTimer, 1000);
            isTyping = true;
        }
        if (typedChar == null) {
            if (charIndex > 0) {
                charIndex--;
                if (characters[charIndex].classList.contains("incorrect")) {
                    errors--;
                }
                characters[charIndex].classList.remove("correct", "incorrect");
            }
        } else {
            if (characters[charIndex].innerText == typedChar) {
                characters[charIndex].classList.add("correct");
            } else {
                errors++;
                characters[charIndex].classList.add("incorrect");
            }
            charIndex++;
        }
        characters.forEach(span => span.classList.remove("active"));
        characters[charIndex].classList.add("active");

        let wpm = Math.round(((charIndex - errors) / 5) / (maxTime - timeLeft) * 60);
        wpm = wpm < 0 || !wpm || wpm === Infinity ? 0 : wpm;

        wpmTag.innerText = wpm;
        errorTag.innerText = errors;
        cpmTag.innerText = charIndex - errors;
    } else {
        clearInterval(timer);
        inpField.value = "";
    }
}

function initTimer() {
    if (timeLeft > 0) {
        timeLeft--;
        timeTag.innerText = timeLeft;
        let wpm = Math.round(((charIndex - errors) / 5) / (maxTime - timeLeft) * 60);
        wpmTag.innerText = wpm;
    } else {
        clearInterval(timer);
    }
}

function resetTest() {
    loadParagraph();
    clearInterval(timer);
    timeLeft = maxTime;
    charIndex = errors = isTyping = 0;
    inpField.value = "";
    timeTag.innerText = timeLeft;
    wpmTag.innerText = 0;
    errorTag.innerText = 3;
    cpmTag.innerText = 0;
}

loadParagraph();
inpField.addEventListener("input", initTyping);
tryAgainBtn.addEventListener("click", resetTest);