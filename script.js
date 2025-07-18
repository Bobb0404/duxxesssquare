document.addEventListener("DOMContentLoaded", () => {
  const gridContainer = document.getElementById("grid");
  const size = 7;

  for (let row = 0; row < size; row++) {
    for (let col = 0; col < size; col++) {
      const cell = document.createElement("input");
      cell.maxLength = 1;

      const isEvenRow = (row + 1) % 2 === 0;
      const isEvenCol = (col + 1) % 2 === 0;

      if (isEvenRow && isEvenCol) {
        cell.className = "cell shaded";
        cell.disabled = true;
      } else {
        cell.className = "cell editable";
      }

      gridContainer.appendChild(cell);
    }
  }
});
