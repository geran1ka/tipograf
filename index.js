import { control } from "./script/control.js";
import { createSection } from "./script/createSection.js";

const init = () => {
  const page = document.querySelector('.page');
  const {section, form, textarea, button} = createSection();
  console.log('section: ', section);
  page.append(section);

  control(form, textarea, button);

}

init();