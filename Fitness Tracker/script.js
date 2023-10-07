document.addEventListener('DOMContentLoaded', function() {
    const workoutForm = document.getElementById('workout-log-form');
    const goalForm = document.getElementById('fitness-goals-form');
    const workoutsList = document.getElementById('workouts');
    const goalsList = document.getElementById('fitness-goals');

    workoutForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const exercise = document.getElementById('exercise').value;
        const duration = document.getElementById('duration').value;

        // Create a new workout entry and add it to the list
        const workoutEntry = document.createElement('li');
        workoutEntry.textContent = `${exercise} - ${duration} minutes`;
        workoutsList.appendChild(workoutEntry);

        // Clear the input fields
        document.getElementById('exercise').value = '';
        document.getElementById('duration').value = '';
    });

    goalForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const goal = document.getElementById('goal').value;
        const target = document.getElementById('target').value;

        // Create a new goal entry and add it to the list
        const goalEntry = document.createElement('li');
        goalEntry.textContent = `${goal} - ${target} minutes per day`;
        goalsList.appendChild(goalEntry);

        // Clear the input fields
        document.getElementById('goal').value = '';
        document.getElementById('target').value = '';
    });
});
