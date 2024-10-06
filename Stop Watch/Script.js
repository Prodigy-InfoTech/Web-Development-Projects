let [seconds, minutes, hours] = [0,0,0];
let displayTime = document.getElementById('displayTime');
let timer = null;

function stopwatch(){
    seconds++;
    if(seconds / 60 === 1){
        seconds = 0;
        minutes++;
        if(minutes / 60 === 1){
            minutes = 0;
            hours++;
        }
    }
    displayTime.innerHTML = (hours ? (hours > 9 ? hours : "0" + hours) : "00") + ":" + (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") + ":" + (seconds > 9 ? seconds : "0" + seconds);
}
function watchStart(){
    if(timer!== null){
        clearInterval(timer);
    }
    timer = setInterval(stopwatch, 1000);
}
function watchStop(){
    clearInterval(timer);
    timer = null;
}
function watchReset(){
    clearInterval(timer);
    timer = null;
    [seconds, minutes, hours] = [0,0,0];
    displayTime.innerHTML = "00:00:00";
}