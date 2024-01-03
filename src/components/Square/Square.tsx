import { FC } from "react";

interface SquareProps {
  id: number;
  handleSquare: any;
  value: string;
}

const Square: FC<SquareProps> = ({ value, id, handleSquare }) => {

  return (
    <button
      className="square h-12 w-12"
      onClick={() => (handleSquare(id))}
      disabled={value !== ""}
    >
      {value}
    </button> 
  );
};

export default Square;
