import { refs } from './refs';
import { convertMs } from './convert-time';
import { currentDate } from './start-timer';
import { calendar } from './calendar';

export const render = () => {
  const pickedDate = calendar.selectedDates[0];
  const different = pickedDate - currentDate;

  const { days, hours, minutes, seconds } = convertMs(different);
  if (different < 1) return;
  
  refs.days.textContent = days;
  refs.hours.textContent = hours;
  refs.minutes.textContent = minutes;
  refs.seconds.textContent = seconds;
};
