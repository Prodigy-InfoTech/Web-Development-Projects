document.addEventListener('DOMContentLoaded', function() {
    const workoutForm = document.getElementById('workout-log-form');
    const goalForm = document.getElementById('fitness-goals-form');
    const workoutsList = document.getElementById('workouts');
    const goalsList = document.getElementById('fitness-goals');
    let selectedWorkout = null;
    let selectedGoal = null;

    // Load workout and goal data from local storage
    let workoutData = loadWorkoutData() || [];
    let goalData = loadGoalData() || [];

    // Function to update the workout list
    function updateWorkoutList() {
        workoutsList.innerHTML = '';
        workoutData.forEach((entry, index) => {
            const workoutEntry = createWorkoutEntry(entry, index);
            workoutsList.appendChild(workoutEntry);
        });
    }

    // Function to update the goal list
    function updateGoalsList() {
        goalsList.innerHTML = '';
        goalData.forEach((entry, index) => {
            const goalEntry = createGoalEntry(entry, index);
            goalsList.appendChild(goalEntry);
        });
    }

    // Function to create a workout entry
    function createWorkoutEntry(entry, index) {
        const workoutEntry = document.createElement('li');
        workoutEntry.innerHTML = `<span>${entry.exercise} - ${entry.duration} minutes</span>`;

        const editButton = createEditButton(index, 'workout');
        const deleteButton = createDeleteButton(index, 'workout');

        workoutEntry.appendChild(editButton);
        workoutEntry.appendChild(deleteButton);

        return workoutEntry;
    }

    // Function to create a goal entry
    function createGoalEntry(entry, index) {
        const goalEntry = document.createElement('li');
        goalEntry.innerHTML = `<span>${entry.goal} - ${entry.target} minutes per day</span>`;

        const editButton = createEditButton(index, 'goal');
        const deleteButton = createDeleteButton(index, 'goal');

        goalEntry.appendChild(editButton);
        goalEntry.appendChild(deleteButton);

        return goalEntry;
    }

    // Function to create an "Edit" button
    function createEditButton(index, type) {
        const editButton = document.createElement('button');
        editButton.classList.add(`edit-${type}-button`);
        editButton.textContent = 'Edit';
        editButton.addEventListener('click', () => editEntry(index, type));
        return editButton;
    }

    // Function to create a "Delete" button
    function createDeleteButton(index, type) {
        const deleteButton = document.createElement('button');
        deleteButton.classList.add(`delete-${type}-button`);
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', () => deleteEntry(index, type));
        return deleteButton;
    }

    // Function to edit an entry
    function editEntry(index, type) {
        const entry = (type === 'workout') ? workoutData[index] : goalData[index];
        const inputExercise = document.getElementById('exercise');
        const inputDuration = document.getElementById('duration');
        const inputGoal = document.getElementById('goal');
        const inputTarget = document.getElementById('target');

        if (type === 'workout') {
            inputExercise.value = entry.exercise;
            inputDuration.value = entry.duration;
            selectedWorkout = index;
        } else if (type === 'goal') {
            inputGoal.value = entry.goal;
            inputTarget.value = entry.target;
            selectedGoal = index;
        }
    }

    // Function to delete an entry
    function deleteEntry(index, type) {
        if (type === 'workout') {
            workoutData.splice(index, 1);
            saveWorkoutData();
            updateWorkoutList();
        } else if (type === 'goal') {
            goalData.splice(index, 1);
            saveGoalData();
            updateGoalsList();
        }
    }

    // Function to clear input fields
    function clearInputFields(type) {
        if (type === 'workout') {
            document.getElementById('exercise').value = '';
            document.getElementById('duration').value = '';
        } else if (type === 'goal') {
            document.getElementById('goal').value = '';
            document.getElementById('target').value = '';
        }
    }

    // Event listener for workout form
    workoutForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const exercise = document.getElementById('exercise').value;
        const duration = document.getElementById('duration').value;

        if (selectedWorkout !== null) {
            // Edit the selected workout
            workoutData[selectedWorkout] = { exercise, duration };
            selectedWorkout = null;
        } else {
            // Create a new workout entry
            workoutData.push({ exercise, duration });
        }

        saveWorkoutData();
        updateWorkoutList();
        clearInputFields('workout');
    });

    // Event listener for goal form
    goalForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const goal = document.getElementById('goal').value;
        const target = document.getElementById('target').value;

        if (selectedGoal !== null) {
            // Edit the selected goal
            goalData[selectedGoal] = { goal, target };
            selectedGoal = null;
        } else {
            // Create a new goal entry
            goalData.push({ goal, target });
        }

        saveGoalData();
        updateGoalsList();
        clearInputFields('goal');
    });

    // Load and update the workout and goal lists
    updateWorkoutList();
    updateGoalsList();

    // Local storage functions for workout and goal data
    function saveWorkoutData() {
        localStorage.setItem('workoutData', JSON.stringify(workoutData));
    }

    function saveGoalData() {
        localStorage.setItem('goalData', JSON.stringify(goalData));
    }

    function loadWorkoutData() {
        return JSON.parse(localStorage.getItem('workoutData'));
    }

    function loadGoalData() {
        return JSON.parse(localStorage.getItem('goalData'));
    }
});
