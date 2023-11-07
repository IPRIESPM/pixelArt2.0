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

const createCanvas = (appOptions) => {
  const tableElement = document.createElement('table');
  tableElement.classList.add('table');

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

export default createCanvas;
