var number = Math.floor(Math.random() * 8 + 2);
var start = 0;
function generateBubbles() {
  let bubbles = "";
  document.querySelector("#playareabubble").style.opacity = 1;
  for (let i = 0; i < 1; i++) {
    bubbles += `<div id="bubble">${number}</div>`;
  }
  document.querySelector("#playareabubble").innerHTML = bubbles;
}

var posi = 0;
var score = 0;
function insideBubble() {
  if (number > 1) {
    number = number - 1;
    document.querySelector("#bubble").innerHTML = number;
  } else {
    document.querySelector("#playareabubble").style.opacity = 0;
    generateBubbles();
    score = Number(document.querySelector("#box1").innerHTML) + 10;
    document.querySelector("#box1").innerHTML = score;
    number = Math.floor(Math.random() * 8 + 2);
    document.querySelector("#bubble").innerHTML = number;
    document.querySelector("#playareabubble");
  }
  document.querySelector("#finalScore").innerHTML = score;
}

function startgame() {
  var start = document.querySelector("#startpage");
  start.style.display = "none";
  generateBubbles();

  var ypos = 0;
  var xpos = [100, 180, 35, 250, 134];
  setInterval(() => {
    document.querySelector("#playareabubble").style.top = `${ypos}%`;
    document.querySelector("#playareabubble").style.left = `${
      xpos[Math.floor(Math.random() * 5)]
    }px`;
    ypos = ypos + 5;
    if (ypos > 92) {
      document.querySelector("#box3").innerHTML =
        document.querySelector("#box3").innerHTML - 1;

      var lives = document.querySelector("#box3").innerHTML;
      if (lives == 0) {
        document.getElementById("playground").style.display = "none";
      }
      ypos = 0;
    }
  }, 600);
}
