const sizeButtons = document.querySelectorAll('.size');
const penButtons = document.querySelectorAll('.pen');

let currentpen = 'classic';

function generateGrid(size = 32 * 44, cssClass = 'medium-grid-default') {
    const gameContainer = document.getElementById('grid-container');

    gameContainer.innerHTML = '';

    gameContainer.classList.remove('small-grid', 'medium-grid-default', 'big-grid');
    gameContainer.classList.add(cssClass);

    for (let i = 0; i < size; i += 1) {
        const div = document.createElement('div');
        gameContainer.appendChild(div);
    }
}

function erase() {
    const gridItems = document.querySelectorAll('#grid-container > div');

    gridItems.forEach((item) => {
        const gridItem = item;
        gridItem.style.backgroundColor = '#D8D8D8';
        gridItem.style.opacity = '1';
        gridItem.count = 0;
    });
}

function startPainting(pen) {
    const gridItems = document.querySelectorAll('#grid-container > div');

    gridItems.forEach((item) => {
        const gridItem = item;
        gridItem.count = 0;
        gridItem.addEventListener('mouseenter', (e) => {
            if (pen === 'classic') {
                // grey
                e.target.style.backgroundColor = '#707070';
                e.target.style.opacity = 1;
            } else if (pen === 'magic') {
                // colorful pen
                const magicPallete = ['#EF476F', '#FFD166', '#06D6A0', '#118AB2', '#073B4C'];
                const randomColor = Math.floor(Math.random() * magicPallete.length);
                e.target.style.opacity = 1;
                e.target.style.backgroundColor = magicPallete[randomColor];
            } else if (pen === 'eraser') {
                // change background to white
                e.target.style.backgroundColor = '#D8D8D8';
                e.target.style.opacity = 1;
            }

        });
    });
}

function selectButton(button) {
    if (button.classList.contains('pen')) {
        penButtons.forEach((selection) => {
            selection.classList.remove('active-button');
        });
    } else {
        sizeButtons.forEach((selection) => {
            selection.classList.remove('active-button');
        });
    }
    button.classList.add('active-button');
}

function changeSize() {
    const small = 16 * 22;
    const medium = 32 * 44;
    const big = 64 * 88;

    sizeButtons[1].classList.add('active-button');

    sizeButtons.forEach((selection) => {
        selection.addEventListener('click', () => {
            if (selection.classList.contains('small')) {
                erase();
                generateGrid(small, 'small-grid');
                startPainting(currentpen);
                selectButton(selection);
            } else if (selection.classList.contains('medium')) {
                erase();
                generateGrid(medium, 'medium-grid-default');
                startPainting(currentpen);
                selectButton(selection);
            } else {
                erase();
                generateGrid(big, 'big-grid');
                startPainting(currentpen);
                selectButton(selection);
            }
        });
    });
}

function changepen() {
    penButtons[0].classList.add('active-button');

    penButtons.forEach((selection) => {
        selection.addEventListener('click', () => {
            if (selection.classList.contains('classic')) {
                startPainting('classic');
                selectButton(selection);
                currentpen = 'classic';
            } else if (selection.classList.contains('magic')) {
                startPainting('magic');
                selectButton(selection);
                currentpen = 'magic';
            } else {
                startPainting('eraser');
                selectButton(selection);
                currentpen = 'eraser';
            }
        });
    });
}

function eraseListener() {
    const eraseButton = document.querySelector('.erase');

    eraseButton.addEventListener('click', erase);
}

function startGame() {
    generateGrid();
    startPainting('classic');
    changeSize();
    changepen();
    eraseListener();
}

startGame();