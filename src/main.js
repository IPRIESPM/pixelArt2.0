/* eslint-disable import/extensions */

import createTable from './table.js';
import createColorPallete from './colorPallete.js';
import createTools from './tools.js';
import generateOptions from './options.js';
import createAlert from './alert.js';

window.onload = () => {
  const appOptions = {
    resolution: {
      x: 50,
      y: 30,
    },
    color: null,
    draw: false,
    tool: 'pen',
  };

  const mainElement = document.querySelector('main');
  mainElement.appendChild(createTable(appOptions));
  createAlert(false);
  const colorAside = document.querySelector('aside.color-pallete');
  createColorPallete(colorAside, appOptions);

  const toolsAside = document.querySelector('aside.tools');
  createTools(toolsAside, appOptions);

  generateOptions(mainElement, appOptions);
};
