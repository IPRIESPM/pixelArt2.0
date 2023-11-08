/* eslint-disable no-param-reassign */
const toolsList = [
  ['pen', 'bi bi-pencil-fill', true],
  ['eraser', 'bi bi-eraser-fill'],
  ['reset', 'bi bi-arrow-repeat'],
];

const clearCanvas = () => {
  const pixelElement = document.querySelectorAll('td.cell');
  pixelElement.forEach((pixel) => {
    pixel.style.backgroundColor = '';
  });
};

const resetTool = (appOptions) => {
  appOptions.tool = false;
  appOptions.draw = false;

  console.table(appOptions);
};

const selectTool = (tool, appOptions) => {
  const toolsElement = document.querySelectorAll('aside.tools .tool');
  toolsElement.forEach((toolElement) => {
    toolElement.classList.remove('active');
  });

  resetTool(appOptions);
  const toolName = tool.dataset.tool;
  tool.classList.add('active');
  appOptions.tool = toolName;

  if (toolName === 'reset') {
    setTimeout(() => {
      tool.classList.remove('active');
      resetTool(appOptions);
    }, 100);
  }

  console.table(appOptions);
};

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
