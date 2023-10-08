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
            editButton.classList.add('edit-workout-button');
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
            editButton.classList.add('edit-workout-button');
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
});
