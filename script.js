let dimension = 16;

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
            row.appendChild(cell);
        }
        board.appendChild(row);
    }
}

remakeGrid();