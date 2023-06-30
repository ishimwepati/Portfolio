
contactForm.addEventListener('submit', () => {
    const storeData = {
      storeName: name.value,
      storeEmail: email.value,
      storeMessage: message.value,
    };
  localStorage.setItem('storeData', JSON.stringify(storeData)); 
  });
  
  window.onload = function dataLoad() {
    const data = JSON.parse(localStorage.getItem('storeData'));
    if (data) {
      name.value = data.storeName;
      email.value = data.storeEmail;
      message.value = data.storeMessage;
    }
  };  


window.onload = function dataLoad() {
    const data = JSON.parse(localStorage.getItem('storeData'));
    if (data) {
      name.value = data.storeName;
      
    }
  };
