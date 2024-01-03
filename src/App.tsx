import { useState } from "react";
import "./App.css";
import Square from "./components/Square/Square";
import Winner from "./components/Winner/Winner";



function App() {
  const initSquares = [
    {
      id: 0,
      value: "",
    },
    {
      id: 1,
      value: "",
    },
    {
      id: 2,
      value: "",
    },
    {
      id: 3,
      value: "",
    },
    {
      id: 4,
      value: "",
    },
    {
      id: 5,
      value: "",
    },
    {
      id: 6,
      value: "",
    },
    {
      id: 7,
      value: "",
    },
    {
      id: 8,
      value: "",
    },
  ];

  const [player, setPlayer] = useState(false);
  const [squares, setSquares] = useState(initSquares);



  const handleSquare = (id: number) => {
    const temp = squares.map((sq) => {
      if (sq.id === id) {
        sq.value = player ? 'o':'x';
      }
      return sq;
    });
    setSquares(temp);
    setPlayer(!player);
  };

  return (
    <>
      <div className="grid grid-cols-3 gap-1">
        {squares.map((square) => (
          <Square
            id={square.id}
            key={square.id}
            value={square.value}
            handleSquare={handleSquare}
          />
        ))}
      </div>
      <Winner squares={squares} />
    </>
  );
}

export default App;
