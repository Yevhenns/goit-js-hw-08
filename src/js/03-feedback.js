import throttle from 'lodash.throttle';
const STORAGE_KEY = 'feedback-form-state';
const formData = {};

// const refs = {
const form = document.querySelector('.feedback-form');
const inputEmail = document.querySelector('[type="email"]');
const inputMessage = document.querySelector('[name="message"]');
const submitBtn = document.querySelector('[type="submit"]');
// };

fillForm();

form.addEventListener('input', throttle(onFormData, 500));
// inputForm.addEventListener('submit', onFormSubmit);

function onFormData(evt) {
  evt.preventDefault();
  formData.email = form.elements.email.value;
  formData.message = form.elements.message.value;
  const dataJSON = JSON.stringify(formData);
  // localStorage.setItem(STORAGE_KEY, form.elements.email.value);
  // localStorage.setItem(STORAGE_KEY, form.elements.message.value);
  console.log(dataJSON);
}

function fillForm() {
  inputEmail.textContent = localStorage.getItem(STORAGE_KEY) || '';
  inputMessage.textContent = localStorage.getItem(STORAGE_KEY) || '';
}

// function onFormSubmit(event) {
//   console.log(JSON.parse(localStorage.getItem(STORAGE_KEY)));
//   event.preventDefault();
//   event.currentTarget.reset();
//   // localStorage.removeItem(STORAGE_KEY);
//   // formData = {};
// }

// function fillForm() {
//   const data = localStorage.getItem(STORAGE_KEY);
//   if (data) {
//     refs.inputFormEmail.value = formData.email || '';
//     refs.inputFormMessage.value = formData.message || '';
//   }
// }
