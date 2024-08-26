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
    let tempSize = prompt("Enter the grid size :");
    if (typeof tempSize !== "number") {
        alert("You have to enter a number");
        askGridSize();
    } else if (tempSize < 0 || tempSize > 100) {
        alert("You have to enter a number between 0 and 100");
        askGridSize();
    } else {
        gridSize = Number(tempSize);
    }
    createGrid();
}

document.addEventListener("DOMContentLoaded", () => {
    createGrid();
});

setSizeButton.addEventListener("click", askGridSize);

