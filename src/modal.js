import runGame from './game';

const createModal = () => {
  const modal = document.createElement('div');
  modal.classList.add('modal', 'hidden');
  modal.addEventListener('click', (event) => {
    if (event.target.classList.contains('modal')) {
      modal.classList.add('hidden');
    }
  });

  const modalContent = document.createElement('div');
  modalContent.classList.add('modal-content');

  const modalTitle = document.createElement('h2');
  modalTitle.classList.add('modal-title');
  modalTitle.innerText = '🎉¡Ganaste!🎉';

  const modalButton = document.createElement('button');
  modalButton.classList.add('modal-button');
  modalButton.innerText = 'Volver a jugar';
  modalButton.addEventListener('click', () => {
    modal.classList.add('hidden');
    runGame();
  });

  modalContent.append(modalTitle, modalButton);
  modal.appendChild(modalContent);

  return modal;
};

export default createModal;
