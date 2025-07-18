document.addEventListener("DOMContentLoaded", () => {
  const grid = document.getElementById("grid");
  const gridSize = 7;

  for (let row = 1; row <= gridSize; row++) {
    for (let col = 1; col <= gridSize; col++) {
      const cell = document.createElement("div");
      cell.classList.add("cell");

      const isEditable = row % 2 === 1 || col % 2 === 1;
      const isShaded = row % 2 === 0 && col % 2 === 0;

      if (isShaded) {
        cell.classList.add("shaded");
      } else {
        cell.setAttribute("contenteditable", "true");
        cell.classList.add("editable");
      }

      grid.appendChild(cell);
    }
  }
});
