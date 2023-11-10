/* eslint-disable no-param-reassign */
import createTable from './table';

/*
  Con esta función generamos el modal
  y lo añadimos al body.
*/
const generateModal = (bodyElement, appOptions) => {
  // Creamos los elementos del modal
  const modalElement = document.createElement('div');
  modalElement.classList.add('modal');
  // Añadimos el evento para cerrar el modal
  // Esto tengo que pasarlo al main.
  modalElement.addEventListener('click', (event) => {
    if (event.target.classList.contains('bi-x-lg')) {
      modalElement.remove();
    }

    if (event.target.classList.contains('modal')) {
      modalElement.remove();
    }
  });

  // Creamos el contenido del modal
  const modalContent = document.createElement('div');
  modalContent.classList.add('modal-content');

  /*
    A partir de aquí creamos el contenido del modal
    con estructura:
    header.modal-header > span > i
    div.modal-body > (label > input) * 2 + fieldset > button
  */

  const modalTitle = document.createElement('header');
  modalTitle.classList.add('modal-header');
  modalTitle.innerText = 'Menu de opciones';

  const closeElement = document.createElement('span');
  closeElement.innerHTML = '<i class="bi bi-x-lg"></i>';

  const modalBody = document.createElement('div');
  modalBody.classList.add('modal-body');

  const labelXElement = document.createElement('label');
  labelXElement.setAttribute('for', 'x');
  labelXElement.innerText = 'ancho (px)';

  const modalInputX = document.createElement('input');
  modalInputX.setAttribute('type', 'text');
  modalInputX.setAttribute('placeholder', 'X');
  modalInputX.setAttribute('id', 'x');
  modalInputX.value = appOptions.resolution.x;

  const labelYElement = document.createElement('label');
  labelYElement.setAttribute('for', 'y');
  labelYElement.innerText = 'alto (px)';

  const modalInputY = document.createElement('input');
  modalInputY.setAttribute('type', 'text');
  modalInputY.setAttribute('placeholder', 'Y');
  modalInputY.value = appOptions.resolution.y;

  const fieldsetElement = document.createElement('fieldset');
  const modalButton = document.createElement('button');
  modalButton.innerText = 'Cambiar resolución';
  modalButton.addEventListener('click', () => {
    appOptions.resolution.x = modalInputX.value;
    appOptions.resolution.y = modalInputY.value;
    /* console.table(appOptions); */
    createTable(appOptions);
    bodyElement.appendChild(createTable(appOptions));
  });

  // Ahora añadimos los elementos al modal
  const bar = document.createElement('div');
  fieldsetElement.append(modalButton, bar);
  modalBody.append(labelXElement, modalInputX, labelYElement, modalInputY, fieldsetElement);
  modalTitle.appendChild(closeElement);
  modalContent.append(modalTitle, modalBody);
  modalElement.appendChild(modalContent);
  bodyElement.appendChild(modalElement);
};

/*
  Con esta función generamos las opciones
  y las añadimos al body.
*/
const generateOptions = (bodyElement, appOptions) => {
  const optionsContainer = document.createElement('div');
  optionsContainer.classList.add('options-container');
  optionsContainer.addEventListener('click', () => {
    generateModal(bodyElement, appOptions);
  });

  for (let index = 0; index < 3; index += 1) {
    const element = document.createElement('div');
    element.classList.add('line');
    optionsContainer.appendChild(element);
  }

  bodyElement.appendChild(optionsContainer);
};

export default generateOptions;
