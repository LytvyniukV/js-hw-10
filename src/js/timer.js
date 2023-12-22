import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const fieldToChooseDateEl = document.querySelector('#datetime-picker'),
  btnStartTimerEl = document.querySelector('button[data-start]'),
  daysEl = document.querySelector('span[data-days]'),
  hoursEl = document.querySelector('span[data-hours]'),
  minutesEl = document.querySelector('span[data-minutes]'),
  secondsEl = document.querySelector('span[data-seconds]');

const showMessage = () => {
  iziToast.show({
    message: 'Please choose a date in the future',
    backgroundColor: 'red',
    messageColor: 'white',
    maxWidth: 300,
    position: 'topRight',
    timeout: 3000,
    progressBar: false,
    transitionIn: 'bounceInRight',
    transitionOut: 'fadeOutLeft',
    messageSize: 14,
  });
};

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] <= new Date()) {
      showMessage();
      btnStartTimerEl.disabled = true;
    } else {
      btnStartTimerEl.disabled = false;
    }
  },
};

const calendar = flatpickr(fieldToChooseDateEl, options);

function convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
  
    // Remaining days
    const days = Math.floor(ms / day).toString().padStart(2,'0');
    // Remaining hours
    const hours = Math.floor((ms % day) / hour).toString().padStart(2,'0');
    // Remaining minutes
    const minutes = Math.floor(((ms % day) % hour) / minute).toString().padStart(2,'0');
    // Remaining seconds
    const seconds = Math.floor((((ms % day) % hour) % minute) / second).toString().padStart(2,'0');
  
    return { days, hours, minutes, seconds };
  }
  
  const render = () =>{
    
  }

