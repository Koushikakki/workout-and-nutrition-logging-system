import { addWorkoutEntry, renderWorkoutLog } from './workout.js';
import { addFoodEntry, renderFoodLog } from './food.js';


function handleAddWorkout() {
  const typeEl = document.getElementById('workout-type');
  const durationEl = document.getElementById('workout-duration');
  const caloriesEl = document.getElementById('workout-calories');

  const type = typeEl.value;
  const duration = parseInt(durationEl.value);
  const calories = parseInt(caloriesEl.value);

  if (type && duration && calories) {
    addWorkoutEntry({ type, duration, calories });
    renderWorkoutLog();

    // Clear inputs
    typeEl.value = '';
    durationEl.value = '';
    caloriesEl.value = '';
  }
}

function handleAddFood() {
  const itemEl = document.getElementById('food-item');
  const caloriesEl = document.getElementById('food-calories');

  const item = itemEl.value;
  const calories = parseInt(caloriesEl.value);

  if (item && calories) {
    addFoodEntry({ item, calories });
    renderFoodLog();

    // Clear inputs
    itemEl.value = '';
    caloriesEl.value = '';
  }
}


document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('button[onclick="addWorkout()"]').onclick = handleAddWorkout;
  document.querySelector('button[onclick="addFood()"]').onclick = handleAddFood;

  renderWorkoutLog();
  renderFoodLog();
});
