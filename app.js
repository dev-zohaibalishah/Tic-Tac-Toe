const box = document.querySelectorAll('.box');
const reset = document.getElementById('reset-game');
const msg = document.querySelector('.msg');
const newGame = document.getElementById('new-game');
const msgText = document.querySelector('.msg p');


let turnO = true;

const winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

box.forEach((box) => {
    box.addEventListener('click', () => {
        if (box.textContent === '') {
            box.textContent = turnO ? 'O' : 'X';
            checkWinner();
            turnO = !turnO;
        }
    })
})

const checkWinner = () => {
    for (let i = 0; i < winPatterns.length; i++) {
        const [a, b, c] = winPatterns[i];
        if (box[a].textContent === box[b].textContent && box[a].textContent === box[c].textContent && box[a].textContent !== '') {
            msgText.textContent = `Player ${box[a].textContent} wins!`;
            msg.style.display = 'block';
            return true;
        }
    }
    if ([...box].every(box => box.textContent !== '')) {
        msgText.textContent = 'Draw';
        msg.style.display = 'block';
        return true;
    }
    return false;
}

reset.addEventListener('click', () => {
    box.forEach((box) => {
        box.textContent = '';
    })
})

newGame.addEventListener('click', () => {
    msg.style.display = 'none';
    box.forEach((box) => {
        box.textContent = '';
    })
    turnO = true;
})


