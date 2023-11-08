const toolsList = [
  ['pen', 'bi bi-pencil-fill', true],
  ['eraser', 'bi bi-eraser-fill'],
];

const selectTool = (tool, appOptions) => {
  const toolsElement = document.querySelectorAll('aside.tools .tool');
  toolsElement.forEach((toolElement) => {
    toolElement.classList.remove('active');
  });
  const toolName = tool.dataset.tool;
  tool.classList.add('active');
  appOptions.tool = toolName;
};

const createTool = (option, appOptions) => {
  const [name, icon, active] = option;
  const tool = document.createElement('div');
  tool.classList.add('tool');
  tool.dataset.tool = name;
  tool.addEventListener('click', (event) => {
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
