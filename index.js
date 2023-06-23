var board = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
];

var currentPlayer = 'X';
var moves = 0;
var gameOver = false;

function makeMove(row, col) {
    if (gameOver || board[row][col] !== '') {
        return;
    }

    board[row][col] = currentPlayer;
    document.getElementsByTagName('td')[row * 3 + col].innerText = currentPlayer;
    moves++;

    if (checkWin(row, col)) {
        document.querySelector('.message').innerText = 'Player ' + currentPlayer + ' wins!';
        gameOver = true;
        return;
    }

    if (moves === 9) {
        document.querySelector('.message').innerText = "It's a draw!";
        gameOver = true;
        return;
    }

    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
}

function checkWin(row, col) {
    // Check row
    if (
        board[row][0] === currentPlayer &&
        board[row][1] === currentPlayer &&
        board[row][2] === currentPlayer
    ) {
        return true;
    }

    // Check column
    if (
        board[0][col] === currentPlayer &&
        board[1][col] === currentPlayer &&
        board[2][col] === currentPlayer
    ) {
        return true;
    }

    // Check diagonal
    if (
        (row === col &&
            board[0][0] === currentPlayer &&
            board[1][1] === currentPlayer &&
            board[2][2] === currentPlayer) ||
        (row + col === 2 &&
            board[0][2] === currentPlayer &&
            board[1][1] === currentPlayer &&
            board[2][0] === currentPlayer)
    ) {
        return true;
    }

    return false;
}
