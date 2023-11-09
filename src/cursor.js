/* eslint-disable no-param-reassign */
const activateEraser = (cursor, appOptions) => {
  cursor.style.opacity = appOptions.tool === 'eraser' ? 1 : 0.5;
};

const cursorActive = (cursor, appOptions) => {
  cursor.style.opacity = appOptions.draw ? 1 : 0.5;
};

const addColor = (cursor, appOptions) => {
  cursor.style.backgroundColor = appOptions.color;
};

const moveCursor = (cursor) => {
  const element = cursor.parentElement;
  element.addEventListener('mousemove', (event) => {
    const x = event.clientX;
    const y = event.clientY;
    cursor.style.left = `${x + 10}px`;
    cursor.style.top = `${y + 20}px`;
  });
};

const updateCursor = (cursor, appOptions) => {
  moveCursor(cursor, appOptions);
  addColor(cursor, appOptions);
  cursorActive(cursor, appOptions);

  const element = cursor.parentElement;
  const cursorColor = cursor.querySelector('.cursor-color');
  const cursorEraser = cursor.querySelector('.cursor-eraser');
  element.addEventListener('click', () => {
    cursorActive(cursor, appOptions);
    addColor(cursorColor, appOptions);
  });
};

const generateCursor = (element) => {
  const cursor = document.createElement('div');
  cursor.classList.add('cursor');

  const cursorColor = document.createElement('div');
  cursorColor.classList.add('cursor-color');
  cursor.appendChild(cursorColor);

  const cursorEraser = document.createElement('div');
  cursorEraser.classList.add('cursor-eraser');
  cursor.appendChild(cursorEraser);

  element.appendChild(cursor);

  return cursor;
};

export { generateCursor, updateCursor };
