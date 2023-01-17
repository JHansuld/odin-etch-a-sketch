let sketchPad = document.getElementById("sketch-pad");
let leftSlider = document.getElementById("left-slider");
let rightSlider = document.getElementById("right-slider");
let reset = document.getElementById("reset");
let gridSquares = [];
let dot = document.createElement("div");
dot.classList.add("dot");

// Create a grid of divs
for (let i = 0; i < 20; i++) {
    for (let j = 0; j < 330; j++) {
        let gridSquare = document.createElement("div");
        gridSquare.classList.add("grid-square");
        sketchPad.appendChild(gridSquare);
        gridSquares.push(gridSquare);
    }
}

// Add event listeners for the sliders
leftSlider.addEventListener("mousedown", function(e) {
    window.addEventListener("mousemove", moveDotUp);
});

window.addEventListener("mouseup", function() {
    window.removeEventListener("mousemove", moveDotUp);
});

rightSlider.addEventListener("mousedown", function(e) {
    window.addEventListener("mousemove", moveDotRight);
});

window.addEventListener("mouseup", function() {
    window.removeEventListener("mousemove", moveDotRight);
});

// Move the dot up and down
function moveDotUp(e) {
    dot.style.top = e.clientY - leftSlider.offsetTop + "px";
    let gridSquare = gridSquares[Math.floor(dot.offsetTop / 20) * 330 + Math.floor(dot.offsetLeft / 30)];
    gridSquare.style.backgroundColor = "gray";
}

// Move the dot left and right
function moveDotRight(e) {
    dot.style.left = e.clientX - rightSlider.offsetLeft + "px";
    let gridSquare = gridSquares[Math.floor(dot.offsetTop / 20) * 330 + Math.floor(dot.offsetLeft / 30)];
    gridSquare.style.backgroundColor = "gray";
}

sketchPad.appendChild(dot);

// Add event listener for the reset button
reset.addEventListener("click", function() {
    for (let i = 0; i < gridSquares.length; i++) {
        gridSquares[i].style.backgroundColor = "white";
    }
});
