/* eslint-disable no-param-reassign */

// Listado de herramientas
const toolsList = [
  ['pen', 'bi bi-pencil-fill', true],
  ['eraser', 'bi bi-eraser-fill'],
  ['reset', 'bi bi-arrow-repeat'],
];

/*
  Con esta funcion obtenemos todas ls celdas y les quitamos el color de fondo
  he colocado un querySelectorAll para evitar pasar tantas variables
  por parámetro.
*/
const clearCanvas = () => {
  const pixelElement = document.querySelectorAll('td.cell');
  pixelElement.forEach((pixel) => {
    pixel.style.backgroundColor = '';
  });
};

/*
 Limpiamos la herramienta y el estado de dibujo
 para evitar que se quede dibujando o recuerde el color
 así al cambiar de herramienta no esta "actuando".
 */
const resetTool = (appOptions) => {
  appOptions.tool = false;
  appOptions.draw = false;

  // console.table(appOptions);
};

/*
  Con esta función seleccionamos la herramienta
  y la guardamos en las opciones de la aplicación.
*/
const selectTool = (tool, appOptions) => {
  // seleccionamos todas las herramientas y les quitamos la clase active
  const toolsElement = document.querySelectorAll('aside.tools .tool');
  toolsElement.forEach((toolElement) => {
    toolElement.classList.remove('active');
  });

  // Reseteamos las opciones de la aplicación.
  resetTool(appOptions);
  const toolName = tool.dataset.tool;
  tool.classList.add('active');
  appOptions.tool = toolName;

  /*
    con esto de aquí, pretendo hacer que no
    se quede activa la herramienta de reset
    y que se desactive sola, simulando una pulsación.
  */
  if (toolName === 'reset') {
    setTimeout(() => {
      tool.classList.remove('active');
      resetTool(appOptions);
    }, 100);
  }

  /* console.table(appOptions); */
};

/*
  Con esta función creamos las herramientas
  y las añadimos al DOM.
*/
const createTool = (option, appOptions) => {
  const [name, icon, active] = option;
  const tool = document.createElement('div');
  tool.classList.add('tool');
  tool.dataset.tool = name;
  tool.addEventListener('click', (event) => {
    if (event.currentTarget.dataset.tool === 'reset') {
      clearCanvas();
    }
    selectTool(event.currentTarget, appOptions);
  });
  tool.innerHTML = `<i class="${icon}"></i>`;
  if (active) {
    tool.classList.add('active');
  }
  return tool;
};

const createTools = (toolsElement, appOptions) => {
  toolsList.forEach((tool) => {
    const toolElement = createTool(tool, appOptions);
    toolsElement.appendChild(toolElement);
  });
};

export default createTools;
