// Create a 16X16 grid of divs
let gridSize = 16;
let container = document.getElementById("container");
for (let i = 0; i < gridSize; i++) {
    for (let j = 0; j < gridSize; j++) {
        let gridSquare = document.createElement("div");
        gridSquare.classList.add("grid-square");
        container.appendChild(gridSquare);
    }
}

// Add a button event listener to prompt for new grid size
let resizeButton = document.getElementById("resize-button");
resizeButton.addEventListener("click", function () {
    let newGridSize = prompt("Enter the number of squares per side for the new grid (max 100)");
    // Validate input
    if (newGridSize > 100) newGridSize = 100;
    if (newGridSize < 1) newGridSize = 1;
    // clear existing grid
    container.innerHTML = "";
    // create new grid
    for (let i = 0; i < newGridSize; i++) {
        for (let j = 0; j < newGridSize; j++) {
            let gridSquare = document.createElement("div");
            gridSquare.classList.add("grid-square");
            container.appendChild(gridSquare);
        }
    }
});

let gridSquares = document.querySelectorAll(".grid-square");

for (let i = 0; i < gridSquares.length; i++) {
    gridSquares[i].addEventListener("mouseover", function () {
        this.style.backgroundColor = "black";
    });

    gridSquares[i].addEventListener("mouseout", function () {
        this.style.backgroundColor = "red";
    });
}