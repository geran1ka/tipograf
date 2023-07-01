import {getTipedText} from "./getTipedText.js";
export const control = (form, textarea, button) => {

  form.addEventListener('input', () => {
    if (textarea.value.length > 0) {
      button.removeAttribute('disabled');
    } else {
      button.setAttribute('disabled', 'disabled')
    }
  })

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    textarea.value = getTipedText(textarea.value);
  });


}