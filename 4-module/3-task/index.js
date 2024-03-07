function highlight(table) {
  let rows = table.querySelectorAll("tbody tr");

  rows.forEach((row) => {
    let cells = row.cells;
    let statusCell = cells[3];

    if (statusCell.dataset.available === "true") {
      row.classList.add("available");
    } else if (statusCell.dataset.available === "false") {
      row.classList.add("unavailable");
    } else {
      row.setAttribute("hidden", true);
    }

    let genderCell = cells[2];
    if (genderCell.textContent === "m") {
      row.classList.add("male");
    } else if (genderCell.textContent === "f") {
      row.classList.add("female");
    }

    let ageCell = cells[1];
    if (parseInt(ageCell.textContent) < 18) {
      row.style.textDecoration = "line-through";
    }
  });
}
