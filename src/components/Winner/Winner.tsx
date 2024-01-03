import { FC } from 'react';

function checkWinner(squares: {id: number, value:string}[]) {
  // Convert the flat array of squares to a 2D array for easier checking
  const board = [
    [squares[0].value, squares[1].value, squares[2].value],
    [squares[3].value, squares[4].value, squares[5].value],
    [squares[6].value, squares[7].value, squares[8].value]
  ];

  // Check rows
  for (let i = 0; i < 3; i++) {
    if (board[i][0] !== "" && board[i][0] === board[i][1] && board[i][1] === board[i][2]) {
      return board[i][0];
    }
  }

  // Check columns
  for (let i = 0; i < 3; i++) {
    if (board[0][i] !== "" && board[0][i] === board[1][i] && board[1][i] === board[2][i]) {
      return board[0][i];
    }
  }

  // Check diagonals
  if (board[0][0] !== "" && board[0][0] === board[1][1] && board[1][1] === board[2][2]) {
    return board[0][0];
  }

  if (board[0][2] !== "" && board[0][2] === board[1][1] && board[1][1] === board[2][0]) {
    return board[0][2];
  }

  // No winner
  return null;
}

interface WinnerProps {
  squares: {id: number, value:string}[]
}

const Winner: FC<WinnerProps> = ({squares}) => (
  <div>
    {checkWinner(squares) && <h2 className='text-lg mt-8'>{checkWinner(squares)} heeft gewonnen!!!</h2>}
  </div>
);

export default Winner;
