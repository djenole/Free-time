import React from 'react';
import './GameOfOldLady.css';
import { useState, useEffect } from 'react';



function GameOfOldLady() {
  
  const emptyBoard = Array(9).fill("");
  const [board, setBoard] = useState(emptyBoard);
  const [currentPlayer, setCurrentPlayer] = useState("O");
  const [winner, setWinner] = useState(null);
  
  
  const checkWinner = () => {
    const possibleWaysToWin = [
      [board[0], board[1], board[2]],
      [board[3], board[4], board[5]],
      [board[6], board[7], board[8]],
      [board[0], board[3], board[6]],
      [board[1], board[4], board[7]],
      [board[2], board[5], board[8]],
      [board[0], board[4], board[8]],
      [board[2], board[4], board[6]]
    ];
    possibleWaysToWin.forEach(cells => {
      if(cells.every(cell => cell === "O")) setWinner("O")
      if(cells.every(cell => cell === "X")) setWinner("X")
    });
    
    checkDraw();
  };


  
  //O jogo resultava como empate. Eu apenas esqueci de mencionar
  //no argumento que pra dar empate, também precisa não ter um vencedor
  // xD
  const checkDraw = () => {
    if(board.every(item => winner === null && item !== "" )) {
      setWinner("empate")
    }
  }
  
  useEffect(checkWinner, [board]);
  
  
  const handleCellClick = (index) => {
    if(winner) {
      alert("Fim da partida!");
      return null;
    };

    if(board[index] !== "") {
      alert("esse espaço já está ocupado");
      return null;
    };
    
    setBoard(board.map((item, itemIndex) => itemIndex === index ? currentPlayer : item));
    setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
  };

  const resetGame = () => {
    setCurrentPlayer("O");
    setBoard(emptyBoard);
    setWinner(null);
  }
  
  
  return (
    <main>
      <h1 className="title">jogo da velha</h1>

      <div className={`board ${winner ? "game-over" : ""}`}>
        {board.map((item, index) => (
          <div
          key={index}
          className={`cell ${item}`}
          onClick={() => handleCellClick(index)}
          >
            {item} 
          </div>

        ))}
      </div>
      {winner &&
        <footer>
          {winner === "empate" ?
            <h2 className="winner-message">
              <span className={winner}> Empate</span>
            </h2>
          :
            <h2 className="winner-message">
              <span className={winner}> {winner} </span>
              Venceu!
            </h2>
          }        
          <button onClick={resetGame}> Recomeçar Jogo </button>
        </footer>
      }
    </main>
  );
}

export default GameOfOldLady;
