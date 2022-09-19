import throttle from 'lodash.throttle';
const STORAGE_KEY = 'feedback-form-state';
const formData = {};

const refs = {
  form: document.querySelector('.feedback-form'),
  inputEmail: document.querySelector('[type="email"]'),
  inputMessage: document.querySelector('[name="message"]'),
  submitBtn: document.querySelector('[type="submit"]'),
};

fillForm();

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(onFormData, 500));

function onFormData(evt) {
  evt.preventDefault();
  formData.email = form.elements.email;
  formData.message = form.elements.message;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

console.log(formData);

// function fillForm(evt) {
//   evt.preventDefault();
//   const savedData = localStorage.getItem(STORAGE_KEY);
//   const parsedData = JSON.parse(savedData);

//   console.log(parsedData);

//   if (inputEmail.value) {
//     inputEmail.value = parsedData.email;
//   } else if (inputMessage.value) {
//     inputMessage.value = parsedData.message;
//   }
//   console.log(parsedData);
// }

// function onFormSubmit(evt) {
//   evt.preventDefault();

//   evt.currentTarget.reset();
//   localStorage.clear();

// }
