import throttle from 'lodash.throttle';
const STORAGE_KEY = 'feedback-form-state';
const formData = {};

const form = document.querySelector('.feedback-form');
const inputEmail = document.querySelector('[type="email"]');
const inputMessage = document.querySelector('[name="message"]');
const submitBtn = document.querySelector('[type="submit"]');

fillForm();

form.addEventListener('input', throttle(onFormData, 500));

function onFormData(evt) {
  evt.preventDefault();
  formData.email = form.elements.email.value;
  formData.message = form.elements.message.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function fillForm() {
  const savedData = localStorage.getItem(STORAGE_KEY);
  const parsedData = JSON.parse(savedData);
  if (inputEmail.value) {
    inputEmail.value = parsedData.email;
  } else if (inputMessage.value) {
    inputMessage.value = parsedData.message;
  }
  return '';
}
submitBtn.addEventListener('reset', onFormSubmit);
// localStorage.clear();
function onFormSubmit(evt) {
  localStorage.removeItem(STORAGE_KEY);
}
