/* eslint-disable import/extensions */

import createTable from './table.js';
import createColorPallete from './colorPallete.js';
import createTools from './tools.js';

window.onload = () => {
  const appOptions = {
    resolution: {
      x: 50,
      y: 30,
    },
    color: null,
    draw: false,
  };

  const mainElement = document.querySelector('main');
  mainElement.appendChild(createTable(appOptions));
  const colorAside = document.querySelector('aside.color-pallete');
  createColorPallete(colorAside, appOptions);

  const toolsAside = document.querySelector('aside.tools');
  createTools(toolsAside);
};
