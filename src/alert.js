const alertMessage = () => {
  const date = new Date();
  const hour = date.getHours();
  const message = 'Realizado por: @altaskur';
  if (hour >= 6 && hour < 12) {
    return '¡Buenos días!';
  } if (hour >= 12 && hour < 20) {
    return '¡Buenas tardes!';
  }
  return `¡Buenas noches! ${message}`;
};

const createAlert = (message = false) => {
  const alert = document.createElement('div');
  alert.classList.add('alert');
  if (!message) message = alertMessage();
  alert.textContent = message;
  setTimeout(() => {
    alert.remove();
  }, 2000);
  const bodyElement = document.querySelector('body');
  if (bodyElement.querySelector('div.alert')) {
    bodyElement.querySelector('div.alert').remove();
  }
  bodyElement.appendChild(alert);
};

export default createAlert;
