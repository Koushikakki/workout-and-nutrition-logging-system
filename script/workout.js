import { getCurrentDate } from './utils.js';

const STORAGE_KEY = 'workouts';
let workouts = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];

export function addWorkoutEntry({ type, duration, calories }) {
  const entry = {
    type,
    duration,
    calories,
    date: getCurrentDate()
  };
  workouts.push(entry);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(workouts));
}

export function renderWorkoutLog() {
  const log = document.getElementById('workout-log');
  log.innerHTML = '';
  workouts.forEach(w => {
    const li = document.createElement('li');
    li.textContent = `${w.date}: Ran for ${w.duration} min – ${w.calories} kcal burned`;
    log.appendChild(li);
  });
}
