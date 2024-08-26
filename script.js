const grid = document.querySelector(".grid");
const setSizeButton = document.querySelector(".set-size-btn");
const clearGridButton = document.querySelector(".clear-btn");
const rainbowModeCheckbox = document.querySelector(".rainbow-mode-chb");

let gridSize = 16;
let rainbowMode = rainbowModeCheckbox.checked;

function randomColorCSSProperty() {
    let r = Math.floor(Math.random() * 1000 % 255);
    let g = Math.floor(Math.random() * 1000 % 255);
    let b = Math.floor(Math.random() * 1000 % 255);

    return 'rgb(' + [r, g, b].join(',') + ')';
}

function colorSquare(e) {
    if (rainbowMode) {
        e.target.style.backgroundColor = randomColorCSSProperty();
    } else {
        e.target.style.backgroundColor = "black";
    }
}

function deleteGrid() {
    let lines = grid.querySelectorAll(".line-container");
    for (let line of lines) {
        grid.removeChild(line);
    }
}

function createGrid() {
    deleteGrid();

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

    if (!tempSize) return;

    if (isNaN(Number(tempSize))) {
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

function toggleRainbowMode() {
    rainbowMode = !rainbowMode;
}

document.addEventListener("DOMContentLoaded", () => {
    createGrid();
});
setSizeButton.addEventListener("click", askGridSize);
clearGridButton.addEventListener("click", createGrid); // Create grid function delete the actual (coloured) grid AND
// recreate a new one
rainbowModeCheckbox.addEventListener("change", toggleRainbowMode);


