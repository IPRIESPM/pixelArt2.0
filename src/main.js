/* eslint-disable import/extensions */

import createTable from './table.js';
import createColorPallete from './colorPallete.js';
import createTools from './tools.js';
import generateOptions from './options.js';
import createAlert from './alert.js';
import { generateCursor, updateCursor } from './cursor.js';

window.onload = () => {
  /* Comenzamos con la configuración de la aplicación
   metemos todas las opciones en un objeto, para poder
   pasarlas por referencia a las funciones que las necesiten.
   De momento guardamos la resolución del "canvas", el color
   ,si estamos dibujando o no, y la herramienta que estamos usando
   */

  const appOptions = {
    resolution: {
      x: 50,
      y: 30,
    },
    color: null,
    draw: false,
    tool: 'pen',
  };

  /*
    Ahora vamos a crear los elementos que necesitamos
    e intentar pasarlos a las funciones que los necesiten y
    digo intentar porque no siempre es posible, o es más complicado
    que hacerlo de otra manera.
   */

  const bodyElement = document.querySelector('body');
  const mainElement = document.querySelector('main');
  const colorAside = document.querySelector('aside.color-pallete');

  // Ahora creamos el tablero y lo metemos en el main.
  const boardElement = createTable(appOptions);
  mainElement.appendChild(boardElement);

  /*
    Creamos el alert y añadimos la paleta de colores
    al aside.
  */
  createAlert(false);
  createColorPallete(colorAside, appOptions);

  /*
    Creamos las herramientas y las opciones
    y las añadimos al aside, correspondiente.
  */
  const toolsAside = document.querySelector('aside.tools');
  createTools(toolsAside, appOptions);

  generateOptions(mainElement, appOptions);

  const cursor = generateCursor(bodyElement);
  updateCursor(cursor, appOptions);
};
