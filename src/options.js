/* eslint-disable no-param-reassign */
import createTable from './table';

const generateModal = (bodyElement, appOptions) => {
  const modalElement = document.createElement('div');
  modalElement.classList.add('modal');
  modalElement.addEventListener('click', (event) => {
    if (event.target.classList.contains('bi-x-lg')) {
      modalElement.remove();
    }

    if (event.target.classList.contains('modal')) {
      modalElement.remove();
    }
  });

  const modalContent = document.createElement('div');
  modalContent.classList.add('modal-content');

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
    console.table(appOptions);
    createTable(appOptions);
    bodyElement.appendChild(createTable(appOptions));
  });
  const bar = document.createElement('div');
  fieldsetElement.append(modalButton, bar);
  modalBody.append(labelXElement, modalInputX, labelYElement, modalInputY, fieldsetElement);
  modalTitle.appendChild(closeElement);
  modalContent.append(modalTitle, modalBody);
  modalElement.appendChild(modalContent);
  bodyElement.appendChild(modalElement);
};

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
