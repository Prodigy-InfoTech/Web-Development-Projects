

    
// Love-related feedback messages
const loveFeedbackMessages = [
    "Your love is in the air!",
    "You two are a perfect match!",
    "True love is in your future!",
    "Your hearts beat as one!",
    "Cupid has struck with his arrow!",
];

// Love facts
const loveFacts = [
    "Did you know that love can lower stress levels and improve your overall well-being?",
    "Love is not just a feeling; it can also be measured in brain activity and chemistry.",
    "Falling in love is similar to the effects of cocaine on the brain.",
    "Love can make time seem to fly by – that's why they say 'time flies when you're having fun.'",
    "The heart symbol was not initially associated with love; it was linked to the ancient Roman plant silphium, believed to be an effective form of birth control.",
];

// Function to display love feedback and facts
function showLoveFeedback() {
    const lovePercentage = document.getElementById("lovePercentage");
    const loveFeedback = document.getElementById("loveFeedback");
    const loveFactsElement = document.getElementById("loveFacts");

    // Display love feedback
    loveFeedback.innerHTML = loveFeedbackMessages[Math.floor(Math.random() * loveFeedbackMessages.length)];

    // Display love facts
    loveFactsElement.innerHTML = "<h3>Love Facts</h3>";
    loveFacts.forEach((fact) => {
        loveFactsElement.innerHTML += `<p>${fact}</p>`;
    });
}

// Function to calculate love
function calculateLove() {
  var random = Math.random();
    random = (random * 100) + 1;
    random = Math.floor(random);
    var p = document.createElement("p");
    var text = document.createTextNode(random + "%");
    p.appendChild(text);
    document.getElementById("lovePercentage").appendChild(p);
}

  
    showLoveFeedback();
}
