/* eslint-disable no-param-reassign */
const cursorActive = (cursor, appOptions) => {
  cursor.style.opacity = appOptions.draw ? 1 : 0.5;
};

const addCursorColor = (cursor, appOptions) => {
  cursor.style.backgroundColor = appOptions.color;

  if (appOptions.tool === 'eraser') {
    cursor.style.border = '1px solid black';
    cursor.style.backgroundColor = '';
  }

  if (!appOptions.tool) {
    cursor.style.backgroundColor = '';
    cursor.style.border = 'none';
  }

  if (appOptions.tool === 'pen') {
    cursor.style.border = 'none';
  }
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

  const element = cursor.parentElement;
  const cursorColor = cursor.querySelector('.cursor-color');
  element.addEventListener('click', () => {
    cursorActive(cursor, appOptions);
    addCursorColor(cursorColor, appOptions);
  });
};

const generateCursor = (element) => {
  const cursor = document.createElement('div');
  cursor.classList.add('cursor');

  const cursorColor = document.createElement('div');
  cursorColor.classList.add('cursor-color');
  cursor.appendChild(cursorColor);

  element.appendChild(cursor);

  return cursor;
};

export { generateCursor, updateCursor };
