/*
  Esto de aquí no es necesario,
  pero la app original lo tiene y así lo
  aprovecho para lanzar mensajes de insultos.

  Simplemente es un mensaje de bienvenida
  dependiendo de la hora del día. 👀
*/
const alertMessage = () => {
  const date = new Date();
  const hour = date.getHours();
  if (hour >= 6 && hour < 12) {
    return '¡Buenos días!';
  } if (hour >= 12 && hour < 20) {
    return '¡Buenas tardes!';
  }
  return '¡Buenas noches!';
};

/*
  y aquí empiezan los problemas,
  createAlert se llama desde la celada de drawCell
  en caso de que no tengamos color o herramienta seleccionada,
  pero también se llama desde el main.js
  para lanzar un mensaje de bienvenida.

  Por lo tanto, he optado por hacer el querySelector de body
  dentro de la función, para evitar pasar bodyElement cómo parámetro
  aunque ahora que lo pienso, puedo llamar a la función parentElement
  desde el event.target y así evitar el querySelector. 🤔 si me da tiempo
  lo cambio.
*/

const createAlert = (message = false) => {
  // Creamos el elemento alert y le añadimos la clase alert.
  const alert = document.createElement('div');
  alert.classList.add('alert');
  /*
    Si no hay mensaje, le añadimos el mensaje de bienvenida.
    lo dejamos asi por defecto.
  */
  if (!message) message = alertMessage();
  alert.textContent = message;
  // Le añadimos un timeout para que se borre solo.
  setTimeout(() => {
    alert.remove();
  }, 2000);

  /*
    Si ya hay un alert, lo borramos y añadimos el nuevo.
    Esto es para que no se acumulen los mensajes.
    Aunque primero debería detener el timeout del alert anterior.
    sino tarda 2 segundos en borrarse y queda raruno.
    otro "must to have" lo siento.
  */

  const bodyElement = document.querySelector('body');
  if (bodyElement.querySelector('div.alert')) {
    bodyElement.querySelector('div.alert').remove();
  }
  bodyElement.appendChild(alert);
};

export default createAlert;
