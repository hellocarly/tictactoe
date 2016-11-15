var board = [0,0,0,0,0,0,0,0,0];
var player1=true;
var gameOver=false;
var  winPossibilities = [[1,1,1,0,0,0,0,0,]]



alert("Player 1's turn.");

function playerChoice(player) {
  var input = prompt("Choose your square player " + player, "0-8, or quit");
  console.log(input);
  if (input === "quit") {
    gameOver = true;
  }
  
  if (player === 1) {
    player1= false;
  }
  else {
    player1= true;
  }
  board[input] = player;
}

function determineWin(playerNum) {
  if (board[0]===playerNum && board[1] === playerNum && board[2]=== playerNum){
    alert("You Won! "+playerNum);
    gameOver=true
  }
    if (board[3]===playerNum && board[4] === playerNum && board[5]=== playerNum){
    alert("You Won! "+playerNum);
    gameOver=true
  }
    if (board[6]===playerNum && board[7] === playerNum && board[8]=== playerNum){
    alert("You Won! "+playerNum);
    gameOver=true
  }
    if (board[0]===playerNum && board[3] === playerNum && board[6]=== playerNum){
    alert("You Won! "+playerNum);
    gameOver=true
  }
    if (board[1]===playerNum && board[4] === playerNum && board[7]=== playerNum){
    alert("You Won! "+playerNum);
    gameOver=true
  }
    if (board[2]===playerNum && board[5] === playerNum && board[8]=== playerNum){
    alert("You Won! "+playerNum);
    gameOver=true
  }
    if (board[0]===playerNum && board[4] === playerNum && board[8]=== playerNum){
    alert("You Won! "+playerNum);
    gameOver=true
  }
    if (board[2]===playerNum && board[4] === playerNum && board[6]=== playerNum){
    alert("You Won! "+playerNum);
    gameOver=true
  }
}

function gamePlay() {
  var playerNum=0;
  while (gameOver === false) {
    if (gameOver === true) {
      alert ("Game Over from gamePlay function");
      break;
    }
    else if (player1 === true) {
      playerNum = 1;
    }
    else {
      playerNum = 2;
    }
   playerChoice (playerNum);
   determineWin(playerNum);
    }
  }


gamePlay();