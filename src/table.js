/* eslint-disable no-param-reassign */
const tableEvent = (appOptions, event) => {
  if (appOptions.draw) {
    if (event.target.tagName === 'TD') {
      event.target.style.backgroundColor = appOptions.color;
    }
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
  const tableElement = document.createElement('table');
  tableElement.classList.add('table');
  tableElement.addEventListener('click', () => {
    if (appOptions.color !== null) {
      appOptions.draw = !appOptions.draw;
    }
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
