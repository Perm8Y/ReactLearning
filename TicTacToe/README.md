# My first mini-project that using React

(![alt text](https://github.com/Perm8Y/ReactProject/blob/main/TicTacToe/Screen.jpg)

My script is in src/App.js <br />
My style sheet is in src/App.css

## Coding

In this Tic Tac Toe project, I created:

### Assign table for Tic Tac Toe

- create function component that has 9 empty member of array as a state
- use flex to build up 3x3 table

### Function to draw "X and "O"

- use onClick to put "X and "O" in state of table
- use if/else to change turn
- prevent the cell from re-draw/draw after tie/draw after win by if/else

### Function to find the winner

- assign winning conditions
- use for loop to check the condition
- return the winner

### Tie function

- use .filter to check table's array and the game doesn't have a winner

### Restart button

- use onClick to set state of table to empty
