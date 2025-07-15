import { getCurrentDate } from './utils.js';

const STORAGE_KEY = 'foods';
let foods = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];

export function addFoodEntry({ item, calories }) {
  const entry = {
    item,
    calories,
    date: getCurrentDate()
  };
  foods.push(entry);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(foods));
}

export function renderFoodLog() {
  const log = document.getElementById('food-log');
  log.innerHTML = '';
  foods.forEach(f => {
    const li = document.createElement('li');
    li.textContent = `${f.date}: Ate ${f.item} – ${f.calories} kcal consumed`;
    log.appendChild(li);
  });
}
