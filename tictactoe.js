var board;
var turn = "X";

function drawBoard() {
  board = ["","","","","","","","",""];
  var boardArea = document.createElement("div");
  boardArea.id = "boardArea";
  document.body.appendChild(boardArea);
  board.forEach(function(contents, i) {
    var spaceContainer = document.createElement("div");
    spaceContainer.id = "spaceContainer" + i;
    spaceContainer.className = "spaceContainer";
    boardArea.appendChild(spaceContainer);
    spaceContainer.addEventListener("click", function(event) {
      if (move(turn, i)) {
        if (turn == "X") { turn = "O"; }
        else if (turn == "O") { turn = "X"; }
      }
    });
    var space = document.createElement("div");
    space.id = "space" + i;
    space.className = "space";
    space.textContent = contents;
    spaceContainer.appendChild(space);
  });
}

function updateBoard() {
  board.forEach(function(space, i) {
    var browserSpace = document.getElementById("space" + i); 
    browserSpace.textContent = board[i];
  });
}

function resetBoard() {
  board = ["","","","","","","","",""];
  updateBoard();
}

function move(player, space) {
  if (board[space] == "") {
    board[space] = player;
    updateBoard();
    if (checkWinner()) {
      alert(checkWinner() + " wins! Game over.");
      resetBoard();
    }
    return true;
  }
  else {
    alert("That space is already occupied");
    return false;
  }
}

function checkWinner() {
  var winningCombos = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // horizontal winning combos
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // vertical winning combos
    [0, 4, 8], [2, 4, 6] // diagonal winning combos
  ];
  var winner = false;
  winningCombos.forEach(function(winningCombo) {
    var firstSpacePlayer = board[winningCombo[0]];
    var secondSpacePlayer = board[winningCombo[1]];
    var thirdSpacePlayer = board[winningCombo[2]];
    if (firstSpacePlayer == secondSpacePlayer) {
      if (secondSpacePlayer == thirdSpacePlayer) {
        if (firstSpacePlayer != "") {
          winner = firstSpacePlayer;
        }
      }
    }
  });
  return winner;
}

drawBoard();
