import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import { showMessage } from './show-message';
import { refs } from './refs';

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] <= new Date()) {
      showMessage();
      refs.btnStartTimer.disabled = true;
    } else {
      refs.btnStartTimer.disabled = false;
    }
  },
};

export const calendar = flatpickr(refs.fieldToChooseDate, options);
