document.addEventListener('DOMContentLoaded', function() {
    const workoutForm = document.getElementById('workout-log-form');
    const goalForm = document.getElementById('fitness-goals-form');
    const workoutsList = document.getElementById('workouts');
    const goalsList = document.getElementById('fitness-goals');
    let selectedWorkout = null;
    let selectedGoal = null;

    workoutForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const exercise = document.getElementById('exercise').value;
        const duration = document.getElementById('duration').value;

        if (selectedWorkout) {
            // Edit the selected workout
            selectedWorkout.querySelector('span').textContent = `${exercise} - ${duration} minutes`;
            selectedWorkout = null;
        } else {
            // Create a new workout entry, add an Edit button, and add it to the list
            const workoutEntry = document.createElement('li');
            workoutEntry.innerHTML = `<span>${exercise} - ${duration} minutes</span>`;
            const editButton = document.createElement('button');
            editButton.textContent = 'Edit';
            editButton.addEventListener('click', () => editWorkout(workoutEntry));
            workoutEntry.appendChild(editButton);
            workoutsList.appendChild(workoutEntry);
        }

        // Clear the input fields
        document.getElementById('exercise').value = '';
        document.getElementById('duration').value = '';
    });

    goalForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const goal = document.getElementById('goal').value;
        const target = document.getElementById('target').value;

        if (selectedGoal) {
            // Edit the selected goal
            selectedGoal.querySelector('span').textContent = `${goal} - ${target} minutes per day`;
            selectedGoal = null;
        } else {
            // Create a new goal entry, add an Edit button, and add it to the list
            const goalEntry = document.createElement('li');
            goalEntry.innerHTML = `<span>${goal} - ${target} minutes per day</span>`;
            const editButton = document.createElement('button');
            editButton.textContent = 'Edit';
            editButton.addEventListener('click', () => editGoal(goalEntry));
            goalEntry.appendChild(editButton);
            goalsList.appendChild(goalEntry);
        }

        // Clear the input fields
        document.getElementById('goal').value = '';
        document.getElementById('target').value = '';
    });

    function editWorkout(workoutEntry) {
        selectedWorkout = workoutEntry;
        const workoutData = workoutEntry.querySelector('span').textContent.split(' - ');
        document.getElementById('exercise').value = workoutData[0];
        document.getElementById('duration').value = parseInt(workoutData[1]);
    }

    function editGoal(goalEntry) {
        selectedGoal = goalEntry;
        const goalData = goalEntry.querySelector('span').textContent.split(' - ');
        document.getElementById('goal').value = goalData[0];
        document.getElementById('target').value = parseInt(goalData[1]);
    }

    // Add the code for progress tracking using Chart.js below:

    const progressChart = document.getElementById('progress-chart');
    const ctx = document.getElementById('myChart').getContext('2d');
    let workoutData = [];
    let workoutDates = [];

    // Load workout data from local storage or a backend API
    loadWorkoutData();

    workoutForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const exercise = document.getElementById('exercise').value;
        const duration = parseInt(document.getElementById('duration').value);

        if (selectedWorkout) {
            // Edit the selected workout
            const index = workoutData.indexOf(selectedWorkout);
            workoutData[index] = { exercise, duration, date: new Date() };
            selectedWorkout = null;
        } else {
            // Log a new workout entry
            const workoutEntry = { exercise, duration, date: new Date() };
            workoutData.push(workoutEntry);
        }

        // Clear the input fields
        document.getElementById('exercise').value = '';
        document.getElementById('duration').value = '';

        // Update the progress chart
        updateProgressChart();
        saveWorkoutData();
    });

    function updateProgressChart() {
        const labels = workoutData.map(entry => formatDate(entry.date));
        const durations = workoutData.map(entry => entry.duration);

        if (workoutData.length === 0) {
            progressChart.style.display = 'none';
        } else {
            progressChart.style.display = 'block';
        }

        const data = {
            labels: labels,
            datasets: [{
                label: 'Workout Duration (minutes)',
                data: durations,
                borderColor: 'rgb(75, 192, 192)',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                tension: 0.4,
                fill: true,
            }]
        };

        // Create or update the chart
        if (window.myChart) {
            window.myChart.data = data;
            window.myChart.update();
        } else {
            window.myChart = new Chart(ctx, {
                type: 'line',
                data: data,
                options: {
                    scales: {
                        x: {
                            title: {
                                display: true,
                                text: 'Date'
                            }
                        },
                        y: {
                            title: {
                                display: true,
                                text: 'Duration (minutes)'
                            }
                        }
                    }
                }
            });
        }
    }

    function formatDate(date) {
        return date.toLocaleDateString();
    }

    function loadWorkoutData() {
        const storedWorkoutData = localStorage.getItem('workoutData');
        if (storedWorkoutData) {
            workoutData = JSON.parse(storedWorkoutData);
        }
    }

    function saveWorkoutData() {
        localStorage.setItem('workoutData', JSON.stringify(workoutData));
    }

    // Initial update of the progress chart
    updateProgressChart();
});
