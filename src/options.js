const generateOptions = (bodyElement) => {
  const optionsContainer = document.createElement('div');
  optionsContainer.classList.add('options-container');

  for (let index = 0; index < 3; index += 1) {
    const element = document.createElement('div');
    element.classList.add('line');
    optionsContainer.appendChild(element);
  }

  bodyElement.appendChild(optionsContainer);
};

export default generateOptions;
