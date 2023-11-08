import createTable from './table';

const generateModal = (bodyElement, appOptions) => {
  const modalElement = document.createElement('div');
  modalElement.classList.add('modal');

  const modalContent = document.createElement('div');
  modalContent.classList.add('modal-content');

  const modalInputX = document.createElement('input');
  modalInputX.setAttribute('type', 'text');
  modalInputX.setAttribute('placeholder', 'X');
  modalInputX.value = appOptions.resolution.x;

  const modalInputY = document.createElement('input');
  modalInputY.setAttribute('type', 'text');
  modalInputY.setAttribute('placeholder', 'Y');
  modalInputY.value = appOptions.resolution.y;

  const modalButton = document.createElement('button');
  modalButton.innerText = 'Cambiar resolución';
  modalButton.addEventListener('click', () => {
    appOptions.resolution.x = modalInputX.value;
    appOptions.resolution.y = modalInputY.value;
    createTable(appOptions);
  });

  modalContent.append(modalInputX, modalInputY, modalButton);
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
