import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

export const showMessage = () => {
    iziToast.error({
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