const grid = document.querySelector(".grid");

let gridSize = 16;

document.addEventListener("DOMContentLoaded", () => {
    for (let i = 0; i < gridSize; i++) {
        let lineContainer = document.createElement("div");
        lineContainer.classList.add("line-container");

        for (let j = 0; j < gridSize; j++) {
            let square = document.createElement("div");
            square.classList.add("square");
            lineContainer.appendChild(square);
        }

        grid.appendChild(lineContainer);
    }
})