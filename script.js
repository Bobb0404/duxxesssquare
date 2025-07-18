document.addEventListener("DOMContentLoaded", () => {
  const gridContainer = document.getElementById("grid");
  const sizeSelector = document.getElementById("sizeSelector");

  // Permanent grid logic — DO NOT ALTER. Only themes/colors may change.
  const createGrid = (size) => {
    gridContainer.innerHTML = "";
    gridContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    for (let row = 1; row <= size; row++) {
      for (let col = 1; col <= size; col++) {
        const cell = document.createElement("input");
        cell.maxLength = 1;
        cell.classList.add("grid-cell");

        const isRowOdd = row % 2 !== 0;
        const isColOdd = col % 2 !== 0;
        const isShaded = !isRowOdd && !isColOdd;

        if (isShaded) {
          cell.classList.add("shaded");
          cell.disabled = true;
        } else {
          cell.classList.add("editable");
        }

        gridContainer.appendChild(cell);
      }
    }
  };

  // Initial grid
  createGrid(7);

  // Handle grid size switching
  sizeSelector.addEventListener("change", () => {
    const newSize = parseInt(sizeSelector.value);
    createGrid(newSize);
  });
});
