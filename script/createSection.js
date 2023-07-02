import { createElement } from "./functionCreateElem.js"

export const createSection = () => {
  const section = createElement('section', {
    className: 'section',
  });

  const container = createElement('div', {
    className: 'container',
  });

  const title = createElement('h1', {
    className: 'title',
    textContent: 'Типограф',
  });

  const form = createElement('form', {
    className: 'form',
    id: 'form',
  });

  const textarea = createElement('input', {
    className: 'form__textarea',
    id: 'tipograff',
    name: 'tipograff',
    type: 'email',
  });

  const button = createElement('button', {
    className: 'form__button',
    textContent: 'Отправить',
    disabled: 'disabled',
  });

  form.append(textarea, button);
  container.append(title, form);
  section.append(container);

  return {
    section,
    form,
    textarea,
    button,
  }
}

/*
<section class="section">
    <div class="container">
      <h1 class="title">Типограф</h1>
      <form class="form" id="form">
        <textarea class="form__textarea" id="tipograff" name="tipograff" cols="30" rows="10"></textarea>
        <button class="form__button">Отправить</button>
      </form></div>
  </section>*/