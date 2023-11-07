const createTool = () => {
  const tool = document.createElement('div');
  tool.classList.add('tool');
  return tool;
};

const createTools = (toolsElement) => {
  for (let tools = 0; tools < 42; tools += 1) {
    const toolElement = createTool();
    toolsElement.appendChild(toolElement);
  }
};

export default createTools;
