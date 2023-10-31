
const input = document.querySelector('#validation-input');

input.addEventListener('blur', () => {
  const inputValue = input.value;
  const requiredLength = Number(input.getAttribute('data-length'));

  if (inputValue.length === requiredLength) {
    input.classList.remove('invalid');
    input.classList.add('valid');
  } else {
    input.classList.remove('valid');
    input.classList.add('invalid');
  }
});