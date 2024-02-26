let currentPlayer = 'X'; 
let gameBoard = ['', '', '', '', '', '', '', '', '']; 
let gameActive = true;

const cells = document.querySelectorAll('.cell');

function handlePlayerTurn(clickedCellIndex) {
    if(gameBoard[clickedCellIndex] !== '' || !gameActive){
     return;   
    }
    gameBoard[clickedCellIndex] = currentPlayer;
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
}

cells.forEach(cell => {
    cell.addEventListener('click', cellClicked, false);
})


function cellClicked(clickedCellEvent) {
    const clickedCell = clickedCellEvent.target;
    const clickedCellIndex = parseInt(clickedCell.id.replace('cell-', '')) -1;

    if (gameBoard[clickedCellIndex] !== '' || !gameActive) {
        return;
    }
    handlePlayerTurn(clickedCellIndex);
    updateUI;
}

function updateUI() {
    for (leti = 0; i<cells.length; i++) {
        cells[i].innerText = gameBoard[i];
    }
}
















































































































