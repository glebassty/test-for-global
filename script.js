function renderTree() {
  const input = document.getElementById("input").value.trim();
  const treeContainer = document.getElementById("tree");

  treeContainer.innerHTML = "";

  renderTreeHelper(input, treeContainer, 0);
}

function renderTreeHelper(input, container, level) {
  const lines = input.split("\n");

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    const node = document.createElement("div");
    node.textContent = line.padStart(line.length + level * 4, "-");
    container.appendChild(node);

    if (line.includes("(")) {
      const startIndex = lines.indexOf(line);
      let nestedInput = "";
      let count = 0;

      for (let j = startIndex; j < lines.length; j++) {
        const nestedLine = lines[j].trim();
        nestedInput += nestedLine;

        count +=
          nestedLine.split("(").length - 1 - (nestedLine.split(")").length - 1);

        if (count === 0) break;

        nestedInput += "\n";
      }

      renderTreeHelper(nestedInput, container, level + 1);
    }
  }
}
