const form = document.getElementById('form');
const emailInput = form.querySelector('#email');
const errorMessage = form.querySelector('#error-message');

form.addEventListener('submit', (event) => {
  if (emailInput.value !== emailInput.value.toLowerCase()) {
    errorMessage.style.display = 'block';
    event.preventDefault();
  }
});