import createAlert from './alert';

/* eslint-disable no-param-reassign */
const drawCell = (appOptions, cell) => {
  if (appOptions.draw && appOptions.tool === 'pen') {
    cell.style.backgroundColor = appOptions.color;
  }

  if (appOptions.draw && appOptions.tool === 'eraser') {
    cell.style.backgroundColor = '';
  }

  if (appOptions.draw && !appOptions.tool) {
    createAlert('Selecciona primero una herramienta, Melón');
    appOptions.draw = false;
  }

  if (appOptions.draw && !appOptions.color) {
    createAlert('Selecciona un color de tu izquierda, Melón');
    appOptions.draw = false;
  }
};

const tableEvent = (appOptions, event) => {
  if (event.target.tagName === 'TD') {
    drawCell(appOptions, event.target);
  }
};

const generateCell = () => {
  const td = document.createElement('td');
  td.classList.add('cell');
  return td;
};

const generateRow = () => {
  const tr = document.createElement('tr');
  tr.classList.add('row');
  return tr;
};

const createTable = (appOptions) => {
  const bodyElement = document.querySelector('body');
  if (bodyElement.querySelector('table')) {
    bodyElement.querySelector('table').remove();
  }
  const tableElement = document.createElement('table');
  tableElement.classList.add('table');
  tableElement.addEventListener('click', () => {
    appOptions.draw = !appOptions.draw;
  });

  tableElement.addEventListener('mousemove', (event) => {
    tableEvent(appOptions, event);
  });

  for (let rows = 0; rows < appOptions.resolution.y; rows += 1) {
    const trElement = generateRow();
    for (let cells = 0; cells < appOptions.resolution.x; cells += 1) {
      const tdElement = generateCell();
      trElement.appendChild(tdElement);
    }
    tableElement.appendChild(trElement);
  }
  return tableElement;
};

export default createTable;
