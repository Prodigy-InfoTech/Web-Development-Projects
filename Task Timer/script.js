const display = document.getElementById('display');
const taskInput = document.getElementById('task');
const minutesInput = document.getElementById('minutes');
const startButton = document.getElementById('start');
const resetButton = document.getElementById('reset');

let timer;
let isRunning = false;

// Function to check if the task name and time inputs are empty
function areInputsEmpty() {
    return taskInput.value.trim() === '' || minutesInput.value.trim() === '';
}

// Function to update the "Start" button state
function updateStartButtonState() {
    startButton.disabled = areInputsEmpty();
}

// Initial button state
updateStartButtonState();

// Add event listeners for input changes
taskInput.addEventListener('input', function() {
    updateStartButtonState();
    const taskName = taskInput.value || 'Task Timer';
    document.title = taskName;
    document.querySelector('h1').textContent = taskName;
});

minutesInput.addEventListener('input', updateStartButtonState);

startButton.addEventListener('click', function() {
    if (!isRunning) {
        if (areInputsEmpty()) {
            alert('Task name and time must not be empty.');
            return;
        }

        const minutes = parseInt(minutesInput.value);
        if (!isNaN(minutes)) {
            startTimer(minutes * 60);
        }
    } else {
        stopTimer();
    }
});

resetButton.addEventListener('click', function() {
    resetTimer();
});

function startTimer(duration) {
    isRunning = true;
    startButton.textContent = 'Pause';
    taskInput.style.display = 'none'; // Hide the task input
    minutesInput.style.display = 'none'; // Hide the time input

    let startTime = Date.now();
    let endTime = startTime + duration * 1000;

    timer = setInterval(function() {
        let currentTime = Date.now();
        let remainingTime = (endTime - currentTime) / 1000;
        if (remainingTime <= 0) {
            stopTimer();
            display.textContent = '00:00';
        } else {
            display.textContent = formatTime(remainingTime);
        }
    }, 1000);
}

function stopTimer() {
    isRunning = false;
    startButton.textContent = 'Resume';
    taskInput.style.display = 'block'; // Show the task input
    minutesInput.style.display = 'block'; // Show the time input
    minutesInput.disabled = false;
    clearInterval(timer);
}

function resetTimer() {
    isRunning = false;
    startButton.textContent = 'Start';
    taskInput.style.display = 'block'; // Show the task input
    minutesInput.style.display = 'block'; // Show the time input
    minutesInput.disabled = false;
    clearInterval(timer);
    taskInput.value = '';
    minutesInput.value = '';
    display.textContent = '00:00';
}

function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}
