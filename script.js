const grid = document.querySelector(".grid");
const setSizeButton = document.querySelector("button.set-size")

let gridSize = 16;

function colorSquare(e) {
    e.target.style.background = "black";
}

function clearGrid() {
    let lines = grid.querySelectorAll(".line-container");
    for (let line of lines) {
        grid.removeChild(line);
    }
}

function createGrid() {
    clearGrid();

    for (let i = 0; i < gridSize; i++) {
        let lineContainer = document.createElement("div");
        lineContainer.classList.add("line-container");

        for (let j = 0; j < gridSize; j++) {
            let square = document.createElement("div");
            square.classList.add("square");
            square.addEventListener("mouseover", colorSquare)
            lineContainer.appendChild(square);
        }

        grid.appendChild(lineContainer);
    }
}

function askGridSize() {
    gridSize = prompt("Enter the grid size :");
    createGrid();
}

document.addEventListener("DOMContentLoaded", () => {
    createGrid();
});

setSizeButton.addEventListener("click", askGridSize);

