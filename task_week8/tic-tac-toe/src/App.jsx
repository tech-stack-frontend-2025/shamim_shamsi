import { useState } from 'react';
import strange from './assets/strange.png';
import strange2 from './assets/strange2.png';
import { useRef } from 'react';
import Confetti from './components/confetti';

function Square({ value, onSquareClick, isWinning }) {
  // const playSound = () => {
  //   const audio = new Audio('/click.mp3');
  //   audio.play();
  // };

  const handleClick = () => {
    // playSound();
    onSquareClick();
  };

  const renderContent = () => {
    if (value === 'X') {
      return <img src={strange} alt="strange" className="symbol-image" />;
    } else if (value === 'O') {
      return <img src={strange2} alt="strange2" className="symbol-image" />;
    }
    return null;
  };

  return (
    <button className={`square ${isWinning ? 'winning-square' : ''}`} onClick={handleClick}>
      {renderContent()}
    </button>
  );
}

function Board({ xIsNext, squares, onPlay }) {
  const confettiRef = useRef(null);
  const winnerShown = useRef(false);

  const playSound = () => {
    const audio = new Audio('/click.mp3');
    audio.play();
  };

  const playWinnerSound = () => {
    const audio = new Audio('/winner.mp3');
    audio.play();
  };

  function handleClick(i) {
    const winnerInfo = calculateWinner(squares);
    if (winnerInfo || squares[i]) {
      return;
    }
    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = 'X';
    } else {
      nextSquares[i] = 'O';
    }
    onPlay(nextSquares);
  }

  const winnerInfo = calculateWinner(squares);
  const winner = winnerInfo ? winnerInfo.winner : null;
  const winningLine = winnerInfo ? winnerInfo.line : [];
  
  // شرط Confetti اینجا - جدا از status
  if (winner && !winnerShown.current) {
    winnerShown.current = true;
    playWinnerSound();
    confettiRef.current?.fire({});
  }

  let status;
  if (winner) {
    status = 'Winner: ' + (winner === 'X' ? '👽 Alien' : '🧑‍🚀 Astronaut');
  } else {
    playSound();
    status = 'turn: ' + (xIsNext ? '👽 Alien' : '🧑‍🚀 Astronaut');
  }

  const renderRow = (rowIndex) => {
    const squaresInRow = [];
    for (let i = 0; i < 3; i++) {
      const squareIndex = rowIndex * 3 + i;
      squaresInRow.push(
        <Square 
          key={squareIndex}
          value={squares[squareIndex]} 
          onSquareClick={() => handleClick(squareIndex)}
          isWinning={winningLine.includes(squareIndex)}
        />
      );
    }
    return squaresInRow;
  };

  return (
    <>
      <div className="status">{status}</div>
      <div className="board-container">
        <div className="board-row">
          {renderRow(0)}
        </div>
        <div className="board-row">
          {renderRow(1)}
        </div>
        <div className="board-row">
          {renderRow(2)}
        </div>
        <Confetti 
          ref={confettiRef}
          manualstart={true}
          className="absolute top-0 left-0 w-full h-full pointer-events-none z-10"
        />
        {winner && <div className={`winning-line line-${winnerInfo.lineType}`}></div>}
      </div>
    </>
  );
}

export default function Game() {
  const [xIsNext, setXIsNext] = useState(true);
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const currentSquares = history[currentMove];

  function handlePlay(nextSquares) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
    setXIsNext(!xIsNext);
  }

  function jumpTo(nextMove) {
    setCurrentMove(nextMove);
    setXIsNext(nextMove % 2 === 0);
  }

  const moves = history.map((squares, move) => {
    let description;
    if (move > 0) {
      description = 'Go to move #' + move;
    } else {
      description = 'Go to game start';
    }
    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{description}</button>
      </li>
    );
  });

  return (
    <div className="game">
      <div className="game-board">
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>
      <div className="game-info">
        <ol>{moves}</ol>
      </div>
    </div>
  );
}

function calculateWinner(squares) {
  const lines = [
    { line: [0, 1, 2], type: 'row-1' },
    { line: [3, 4, 5], type: 'row-2' },
    { line: [6, 7, 8], type: 'row-3' },
    { line: [0, 3, 6], type: 'col-1' },
    { line: [1, 4, 7], type: 'col-2' },
    { line: [2, 5, 8], type: 'col-3' }, 
    { line: [0, 4, 8], type: 'diag-1' },
    { line: [2, 4, 6], type: 'diag-2' },
  ];
  
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i].line;
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return {
        winner: squares[a],
        line: lines[i].line,
        lineType: lines[i].type
      };
    }
  }
  return null;
}