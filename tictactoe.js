function initializeGame() {
  var board = ["-","-","-","-","-","-","-","-","-"]
  var boardArea = document.createElement("div");
  boardArea.id = "boardArea";
  document.body.appendChild(boardArea);
  board.forEach(function(contents, i) {
    var spaceContainer = document.createElement("div");
    spaceContainer.id = "spaceContainer" + i;
    spaceContainer.className = "spaceContainer";
    boardArea.appendChild(spaceContainer);
    var space = document.createElement("div");
    space.id = "space" + i;
    space.className = "space";
    space.textContent = contents;
    spaceContainer.appendChild(space);
  });
}

function printBoard() {
  console.log(board[0] + board[1] + board[2]);
  console.log(board[3] + board[4] + board[5]);
  console.log(board[6] + board[7] + board[8]);
};

function move(player, space) {
  if (board[space] == "-") {
    board[space] = player;
  }
  else {
    console.log("That space is already occupied");
  }
  printBoard();
  if (checkWinner()) {
    console.log(checkWinner() + " wins! Game over.");
  }
}

function checkWinner() {
  var winningCombos = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // horizontal winning combos
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // vertical winning combos
    [0, 4, 8], [2, 4, 6] // diagonal winning combos
  ]
  var winner = false
  winningCombos.forEach(function(winningCombo) {
    var firstSpacePlayer = board[winningCombo[0]];
    var secondSpacePlayer = board[winningCombo[1]];
    var thirdSpacePlayer = board[winningCombo[2]];
    if (firstSpacePlayer == secondSpacePlayer) {
      if (secondSpacePlayer == thirdSpacePlayer) {
        if (firstSpacePlayer != "-") {
          winner = firstSpacePlayer;
        }
      }
    }
  });
  return winner;
}

initializeGame();
