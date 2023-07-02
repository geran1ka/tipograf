import {getTipedText} from "./getTipedText.js";
export const control = (form, textarea, button) => {

  textarea.addEventListener('input', ({target}) => {
    target.value = target.value.replace(/[^\w\d@"-_.!~*']+/gi, '')

  })

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    textarea.value = getTipedText(textarea.value);
  });


}