import createAlert from './alert';
/* eslint-disable no-param-reassign */

/* ✨ Comenzamos con el infierno echo código ✨ */

/*
  Esta función se encarga de dibujar o borrar una celda
  dependiendo de la herramienta que estemos usando.
*/

const drawCell = (appOptions, cell) => {
  // Pintamos la celda si estamos dibujando y la herramienta es el lápiz.
  if (appOptions.draw && appOptions.tool === 'pen') {
    cell.style.backgroundColor = appOptions.color;
  }

  // Borramos la celda si estamos dibujando y la herramienta es el borrador.
  if (appOptions.draw && appOptions.tool === 'eraser') {
    cell.style.backgroundColor = '';
  }

  // Si estamos dibujando y no tenemos herramienta seleccionada, insultamos al usuario.
  if (appOptions.draw && !appOptions.tool) {
    createAlert('Selecciona primero una herramienta, Melón');
    appOptions.draw = false;
  }

  // Si estamos dibujando y no tenemos color seleccionado, insultamos al usuario.
  // a no ser que la herramienta sea el borrador. ahí no vamos a insultar al usuario.
  if (appOptions.draw && !appOptions.color && appOptions.tool !== 'eraser') {
    createAlert('Selecciona un color de tu izquierda, Melón');
    appOptions.draw = false;
  }
};

/*
  Esta función sólo es un wrapper para la función drawCell
  que se encarga de comprobar si el evento se ha producido.
*/
const tableEvent = (appOptions, event) => {
  if (event.target.tagName === 'TD') {
    drawCell(appOptions, event.target);
  }
};

/*
  Estas dos funciones se encargan de generar la tabla
  y las celdas, para simplificar el código.
*/

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

/*
  Esta función se encarga de generar la tabla
  y de añadirle los eventos de click y mousemove,
  que luego gestionaremos en función del target.
*/

const createTable = (appOptions) => {
  const bodyElement = document.querySelector('body');

  /*
    Lo primero que hacemos es borrar la tabla si ya existe.
    evitamos que se creen tablas encima de tablas.
    queda muy chulo, pero no es lo que queremos.
  */
  if (bodyElement.querySelector('table')) {
    bodyElement.querySelector('table').remove();
  }

  /*
    Creamos la tabla y le añadimos los eventos.
    el evento click sirve para activar o desactivar el dibujado.
    el evento mousemove sirve para dibujar o borrar las celdas.
    ahora estoy pensando en sacar el evento click y ponerlo en
    el body para reutilizarlo en la paleta de colores y en las herramientas.
  */
  const tableElement = document.createElement('table');
  tableElement.classList.add('table');
  tableElement.addEventListener('click', () => {
    appOptions.draw = !appOptions.draw;
  });

  tableElement.addEventListener('mousemove', (event) => {
    tableEvent(appOptions, event);
  });

  /*
    Ahora vamos a generar las filas y las celdas
    y las vamos a añadir a la tabla.
  */
  for (let rows = 0; rows < appOptions.resolution.y; rows += 1) {
    const trElement = generateRow();
    for (let cells = 0; cells < appOptions.resolution.x; cells += 1) {
      const tdElement = generateCell();
      trElement.appendChild(tdElement);
    }
    tableElement.appendChild(trElement);
  }
  // Devolvemos la tabla para poder añadirla al DOM desde
  return tableElement;
};

export default createTable;
