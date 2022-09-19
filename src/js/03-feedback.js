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
  formData.email = form.elements.email;
  formData.message = form.elements.message;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

console.log(formData);

function fillForm(evt) {
  evt.preventDefault();
  const savedData = localStorage.getItem(STORAGE_KEY);
  const parsedData = JSON.parse(savedData);

  console.log(parsedData);

  if (inputEmail.value) {
    inputEmail.value = parsedData.email;
  } else if (inputMessage.value) {
    inputMessage.value = parsedData.message;
  }
  console.log(parsedData);
}

// form.addEventListener('submit', onFormSubmit);

// function onFormSubmit(evt) {
//   evt.preventDefault();

//   evt.currentTarget.reset();
//   localStorage.clear();

// }
