/* eslint-disable import/extensions */

import createCanvas from './canvas';

window.onload = () => {
  const appOptions = {
    resolution: {
      x: 10,
      y: 10,
    },
  };

  const mainElement = document.querySelector('main');
  mainElement.appendChild(createCanvas(appOptions));
};
