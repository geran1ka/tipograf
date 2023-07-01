import {getTipedText} from "./getTipedText.js";
export const control = (form, textarea, button) => {

  form.addEventListener('input', () => {
    if (textarea.value.length > 0) {
      button.removeAttribute('disabled');
      button.style['pointer-events'] = 'fill'
    } else {
      button.setAttribute('disabled', 'disabled');
      button.style['pointer-events'] = 'none'
    }
  })

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    textarea.value = getTipedText(textarea.value);
  });


}