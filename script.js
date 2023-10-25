let dimension = 16;

const changeDimensions = () => {
    dimension = +prompt("Enter a number between 1 and 100", 16);
    if (isNaN(dimension) || dimension < 1 || dimension > 100) {
        dimension = 16;
    }
    remakeGrid();
}

const remakeGrid = () => {
    const board = document.querySelector("#board");
    while (board.firstChild) {
        board.removeChild(board.firstChild);
    }
    for (let i = 0; i < dimension; i++) {
        const row = document.createElement("span");
        row.classList.add("row");
        for (let j = 0; j < dimension; j++) {
            const cell = document.createElement("span");
            cell.classList.add("cell");
            cell.addEventListener("mouseenter", onMouseEnter);
            row.appendChild(cell);
        }
        board.appendChild(row);
    }
}

const onMouseEnter = (e) => {
    const cell = e.target;
    cell.classList.add("hovered");
}


{
    const button = document.querySelector("#change-dimensions");
    button.addEventListener("click", changeDimensions);
}
remakeGrid();