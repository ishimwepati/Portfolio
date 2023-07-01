
const NameInfo = document.getElementById('name');
const emailInfo = document.getElementById('email');
const messageInfo = document.getElementById('message');

function savedFormData() {
  const formData = {
    fullname: NameInfo.value,
    email: emailInfo.value,
    message: messageInfo.value,
  };
  localStorage.setItem('formData', JSON.stringify(formData));
}

NameInfo.addEventListener('input', savedFormData);
emailInfo.addEventListener('input', savedFormData);
messageInfo.addEventListener('input', savedFormData);

window.addEventListener('load', () => {
  const savedData = localStorage.getItem('formData');
  if (savedData) {
    const formData = JSON.parse(savedData);
    NameInfo.value = formData.fullname;
    emailInfo.value = formData.email;
    messageInfo.value = formData.message;
  }
});