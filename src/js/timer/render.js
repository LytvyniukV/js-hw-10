import { refs } from './refs';
import { convertMs } from './convert-time';
import { currentDate } from './start-timer';
import { calendar } from './calendar';

export const render = () => {
  const pickedDate = calendar.selectedDates[0];
  const different = pickedDate - currentDate;

  const { days, hours, minutes, seconds } = convertMs(different);
  if (different < 1) {
    refs.days.textContent = '00';
    refs.hours.textContent = '00';
    refs.minutes.textContent = '00';
    refs.seconds.textContent = '00';
    return;
  }
  refs.days.textContent = days;
  refs.hours.textContent = hours;
  refs.minutes.textContent = minutes;
  refs.seconds.textContent = seconds;
};
