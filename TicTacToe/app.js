
  const tiles = Array.from(document.querySelectorAll('.tile'));
  const playerDisplay = document.querySelector('.display-player');
  const resetButton = document.querySelector('#reset');
  const announcer = document.querySelector('.announcer');
  const historyBtn = document.querySelector('#prev');
  const historyBtn2 = document.querySelector('#next');
  let board = ['', '', '', '', '', '', '', '', ''];
  let boardClone = [];
  let currentPlayer = 'X';
  let isGameActive = true;
  let counter = -1;
  const PLAYERX_WON = 'PLAYERX_WON';
  const PLAYERO_WON = 'PLAYERO_WON';
  const TIE = 'TIE';
  const winningConditions = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
  ];


  function handleResultValidation() {
      let roundWon = false;
      for (let i = 0; i <= 7; i++) {
          const winCondition = winningConditions[i];
          const a = board[winCondition[0]];
          const b = board[winCondition[1]];
          const c = board[winCondition[2]];
          if (a === '' || b === '' || c === '') {
              continue;
          }
          if (a === b && b === c) {
              roundWon = true;
              break;
          }
      }

  if (roundWon) {
          announce(currentPlayer === 'X' ? PLAYERX_WON : PLAYERO_WON);
          isGameActive = false;
          tiles.forEach( (tile, index) => {
            tile.removeEventListener('click', () => userAction(tile, index));
          // 
      
        });
          return;
      }

  if (!board.includes(''))
      announce(TIE);
  }

  const announce = (type) => {
      switch(type){
          case PLAYERO_WON:
              announcer.innerHTML = 'O Wins!';
              break;
          case PLAYERX_WON:
              announcer.innerHTML = 'X Wins!';
              break;
          case TIE:
              announcer.innerText = 'Tie';
      }
      announcer.classList.remove('hide');
      historyBtn.classList.remove('hide');
      historyBtn2.classList.remove('hide');
  };

  const isValidAction = (tile) => {
      // if (tile.innerText === 'X' || tile.innerText === 'O'){
      if (tile.classList.contains('playerX') || tile.classList.contains('playerO')){
          return false;
      }

      return true;
  };

  const updateBoard =  (index) => {
      board[index] = currentPlayer;
  }

  const changePlayer = () => {
      playerDisplay.classList.remove(`player${currentPlayer}`);
      currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
      playerDisplay.innerText = currentPlayer;
      // playerDisplay.classList.add(`player${currentPlayer}`);
  }

  const userAction = (tile, index) => {
      if(isValidAction(tile) && isGameActive) {
          // tile.innerText = currentPlayer;
          tile.classList.add(`player${currentPlayer}`);
          updateBoard(index);
          handleResultValidation();
          changePlayer();
          boardHistory();
          

      }
  }

  const boardHistory = () => {
    boardClone.push(board.slice());
    counter += 1;
}
  
  const resetBoard = () => {
      board = ['', '', '', '', '', '', '', '', ''];
      boardClone = [];
      isGameActive = true;
      announcer.classList.add('hide');
      counter = -1;

  tiles.forEach( (tile, index) => {
    tile.addEventListener('click', () => userAction(tile, index));

  });
      

      if (currentPlayer === 'O') {
          changePlayer();
      }

      tiles.forEach(tile => {
          tile.innerText = '';
          tile.classList.remove('playerX');
          tile.classList.remove('playerO');
      });
  }

  tiles.forEach( (tile, index) => {
    tile.addEventListener('click', () => userAction(tile, index));

  });

  resetButton.addEventListener('click', resetBoard);

  const prevHistoryClone = () =>{
      if (counter>0){
      counter -=1;
      changePlayer();
      tiles.forEach((tile, index) => {
          if (boardClone[counter][index] === 'O'){
            tile.classList.add('playerO');
          }
          else if(boardClone[counter][index]=== 'X'){
            tile.classList.add('playerX');
          }
          else if(boardClone[counter][index] === ''){
            tile.classList.remove('playerX');
            tile.classList.remove('playerO');   
          }
        
      })  
  }}

  const nextHistoryClone = () =>{
    if(counter<boardClone.length-1){
    counter +=1;
    changePlayer();
    tiles.forEach((tile, index) => {
        if (boardClone[counter][index] === 'O'){
          tile.classList.add('playerO');
        }
        else if(boardClone[counter][index]=== 'X'){
          tile.classList.add('playerX');
        }
        else if(boardClone[counter][index] === ''){
          tile.classList.remove('playerX');
          tile.classList.remove('playerO');   
        }
      
    })  
}}
  historyBtn.addEventListener('click', prevHistoryClone);
  historyBtn2.addEventListener('click', nextHistoryClone);
