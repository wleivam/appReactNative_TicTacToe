const players = ['X', 'O'];
// column indexes of a one-dimensional array
const firstColumn = [0, 3, 6];
const secondColumn = [1, 4, 7];
const thirdColumn = [2, 5, 8];
// ways to win
const keyPositions = [
    // rows
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    // columns
    firstColumn,
    secondColumn,
    thirdColumn,
    // diagonals
    [0, 4, 8],
    [2, 4, 6],
];

const constants = {
    playing: 'Next Player: ',
    draw: 'Draw!',
    winner: 'Winner: ',
    resetButton: 'Reset',
};

const finishedStates = ['winner', 'draw'];

export {
    players,
    firstColumn,
    secondColumn,
    thirdColumn,
    keyPositions,
    constants,
    finishedStates,
};
