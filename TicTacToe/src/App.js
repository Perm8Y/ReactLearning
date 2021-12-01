import React, { useState } from "react";
import "./App.css"

function App() {
  //assign winning condition
  const winStates = [
    [0,1,2], [3,4,5], [6,7,8],
    [0,3,6], [1,4,7], [2,5,8],
    [0,4,8], [2,4,6]
  ]

  const calWinner = (gameState) => {
    let winner

    //loop check for winState
    for (let i=0; i<winStates.length; i=i+1) {
      const wS = winStates[i]
      if (gameState[wS[0]] === gameState[wS[1]] &&
          gameState[wS[1]] === gameState[wS[2]] &&
          Boolean(gameState[wS[0]])) {
            winner = gameState[wS[0]]
          }
    }

    return winner
}

  //start the game with empty cell => 9 empty string
  const [gameState, setGameState] = useState(["","","","","","","","",""])

  //assign X/O
  const [player, setPlayer] = useState("X")

  const winner = calWinner(gameState)

  //tie when no winner and game state are full (true member = 9)
  const tie = !winner && gameState.filter(state => Boolean(state)).length === 9

    //use X/O player state to fulfill the cell
    const onCellClick = (index) => {
      //block action for fulfilled cell and someone win
      if (gameState[index] !== "" || Boolean(winner)) {
        return
      }
  
      //assign X/O in the cell
      const newGameState = [...gameState]   //copy array
      newGameState[index] = player          //player contain X/O that use to assign
      setGameState(newGameState)
  
      //change the turn after fulfill cell
      if (player === "X") {
        setPlayer("O")
      } else {
        setPlayer("X")
      }
    }

  return <div className="App" 
              style={{backgroundColor: "rgba(45, 45, 45)", height: "100vh", padding: "1%"}}>
                <h1 className="whiteText"> Tic Tac Toe </h1>  

                
                {winner === "O" || winner === "X" ?
                <h3 className="winner" > {winner} is the winner!</h3>:
                tie ? <h3 className="whiteText"> Tie!</h3>:
                <h3 className="whiteText" > {player} turn </h3>}

                <div className="table">
                  {gameState.map((cell, index) => {
                    return <div className="cell" onClick={() => {onCellClick(index)}}>
                      {cell} 
                      </div>
                  })}
                </div>

                <button className="reButton" 
                        onClick={() => {setGameState(["","","","","","","","",""]); 
                                        setPlayer("X")}}> Restart </button>             
          </div>
}

export default App;
