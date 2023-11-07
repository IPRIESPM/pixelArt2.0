const removeSelected = (selected) => {
  const colorsCells = document.querySelectorAll('.color-pallete div');
  colorsCells.forEach((element) => {
    if (element.classList.contains('active')) {
      element.classList.remove('active');
    }
  });
  selected.childNodes[0].classList.add('active');
};

const selectColor = (selected, appOptions) => {
  removeSelected(selected);
  const { color } = selected.dataset;
  appOptions.color = color;
};

const generateColorElement = (color) => {
  const colorElement = document.createElement('div');
  if (color === null) {
    colorElement.style.backgroundColor = '#fff';
    colorElement.dataset.color = 'empty';
    colorElement.innerHTML = '<i class="bi bi-plus-circle-dotted"></i>';
    return colorElement;
  }
  colorElement.style.backgroundColor = color;
  colorElement.dataset.color = color;

  const selectedElement = document.createElement('div');
  selectedElement.classList.add('selected');

  colorElement.appendChild(selectedElement);
  return colorElement;
};

const createColorPallete = (element, appOptions) => {
  const colors = [
    '#104b83',
    '#b7482d',
    '#0092d0',
    '#d07141',
    '#2adeec',
    '#e1cba2',
    '#f5f5f5',
    '#da9f6d',
    '#b8c4d4',
    '#b16c4d',
    '#8595ae',
    '#6d3c37',
    '#566584',
    '#3d252f',
    '#384162',
    '#9c2430',
    '#242841',
    '#da3940',
    '#171324',
    '#ee7121',
    '#f50141',
    '#f4a733',
    '#643667',
    '#f3de5e',
    '#ae4d82',
    '#60bf4b',
    '#deb08f',
    '#24593f',
    '#b88064',
    '#17393b',
    null, null, null, null, null, null, null, null, null, null, null, null,
  ];

  colors.forEach((color) => {
    const colorElement = generateColorElement(color);
    element.appendChild(colorElement);
  });

  element.addEventListener('click', (event) => {
    if (event.target.tagName === 'DIV') {
      selectColor(event.target, appOptions);
    }
  });
};

export default createColorPallete;
