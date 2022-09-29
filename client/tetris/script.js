document.addEventListener('DOMContentLoaded', () => {
  const grid = document.querySelector('.grid');
  const squares = Array.from(document.querySelectorAll('.grid div'));
  const ScoreDisplay = document.querySelector('#score');
  const StartBtn = document.querySelector('#start-button');
  const width = 10;

  const lTetromino = [
    [1, width + 1, width * 2 + 1, 2],
    [width, width + 1, width + 2, width * 2 + 2],
    [1, width + 1, width * 2 + 1, width * 2],
    [width, width * 2, width * 2 + 1, width * 2 + 2]
  ];

  const zTetromino = [
    [0, width, width + 1, width * 2 + 1],
    [width + 1, width + 2, width * 2, width * 2 + 1],
    [0, width, width + 1, width * 2 + 1],
    [width + 1, width + 2, width * 2, width * 2 + 1]
  ];

  const tTetromino = [
    [1, width, width + 1, width + 2],
    [1, width + 1, width + 2, width * 2 + 1],
    [width, width + 1, width + 1, width * 2 + 1],
    [1, width, width + 1, width * 2 + 1]
  ];

  const oTetromino = [
    [0, 1, width, width + 1],
    [0, 1, width, width + 1],
    [0, 1, width, width + 1],
    [0, 1, width, width + 1]
  ];

  const iTetromino = [
    [1, width + 1, width * 2 + 1, width * 3 + 1],
    [width, width + 1, width + 2, width + 3],
    [1, width + 1, width * 2 + 1, width * 3 + 1],
    [width, width + 1, width + 2, width + 3]
  ];

  const theTetrominos = [lTetromino, zTetromino, tTetromino, oTetromino, iTetromino];

  let currentPosition = 4;
  const currentRotation = 0;

  console.log(theTetrominos[0][0]);

  // randomly select a Tetromino and its first rotation
  const random = Math.floor(Math.random() * theTetrominos.length);
  const current = theTetrominos[random][currentRotation];

  // draw the Tetromino
  function draw() {
    current.forEach((index) => {
      squares[currentPosition + index].classList.add('tetromino');
    });
  }

  // undraw the Tetromino
  function undraw() {
    current.forEach((index) => {
      squares[currentPosition + index].classList.remove('tetromino');
    });
  }

  timerId = setInterval(moveDown, 1000);
  // make the tetromino move down every second
  function moveDown() {
    undraw();
    currentPosition += width;
    draw();
  }
});