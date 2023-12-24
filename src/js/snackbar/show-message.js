import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

export const showMessageReject = (delay) => {
    iziToast.show({
      message: `❌ Rejected promise in ${delay}ms`,
      backgroundColor: 'rgb(240, 115, 115)',
      messageColor: 'white',
      maxWidth: 300,
      position: 'topCenter',
      timeout: 3000,
      progressBar: false,
      transitionIn: 'bounceInRight',
      transitionOut: 'fadeOutLeft',
      messageSize: 14,
    });
  };

  export const showMessageResolve = (delay) => {
    iziToast.show({
      message: `✅ Fulfilled promise in ${delay}ms`,
      backgroundColor: 'green',
      messageColor: 'white',
      maxWidth: 300,
      position: 'topCenter',
      timeout: 2000,
      progressBar: false,
      transitionIn: 'bounceInRight',
      transitionOut: 'fadeOutLeft',
      messageSize: 14,
    });
  };