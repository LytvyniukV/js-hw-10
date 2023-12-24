import { showMessageReject } from './show-message';
import { showMessageResolve } from './show-message';
import { refs } from './refs';

export const createDelay = e => {
  e.preventDefault();
  const delay = refs.input.value;

  refs.radioBtn.forEach(element => {
    if (element.checked) {
      if (element.value === 'fulfilled') {
        Promise.resolve('resolve').then(
          setTimeout(() => {
            showMessageResolve(delay);
          }, delay)
        );
      }
      if (element.value === 'rejected') {
        Promise.reject('reject').catch(
          setTimeout(() => {
            showMessageReject(delay);
          }, delay)
        );
      }
    }
  });

  refs.form.reset();
};
