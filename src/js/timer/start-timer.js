import { refs } from './refs';
import { render } from './render';
import { calendar } from './calendar';
export let currentDate = Date.now();
let idTimerInterval = null;

export const start = () => {
  const pickedDate = calendar.selectedDates[0];
  refs.btnStartTimer.disabled = true;
  if (idTimerInterval) return;
  idTimerInterval = setInterval(() => {
    currentDate += 1000;
    render();
  }, 1000);
  if (pickedDate === currentDate) {
    clearInterval(idTimerInterval);
  }
};