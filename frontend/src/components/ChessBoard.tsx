import React from 'react';

type PieceType = 'p' | 'r' | 'n' | 'b' | 'q' | 'k' | 'P' | 'R' | 'N' | 'B' | 'Q' | 'K' | null;
type BoardType = PieceType[][];

const ChessBoard = () => {
  const initialBoard: BoardType = [
    ['r', 'n', 'b', 'q', 'k', 'b', 'n', 'r'],
    ['p', 'p', 'p', 'p', 'p', 'p', 'p', 'p'],
    Array(8).fill(null),
    Array(8).fill(null),
    Array(8).fill(null),
    Array(8).fill(null),
    ['P', 'P', 'P', 'P', 'P', 'P', 'P', 'P'],
    ['R', 'N', 'B', 'Q', 'K', 'B', 'N', 'R']
  ];

  const files = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
  const ranks = ['8', '7', '6', '5', '4', '3', '2', '1'];

  const getPieceSVG = (piece: PieceType) => {
    if (!piece) return null;

    const color = piece === piece.toUpperCase() ? '#FFFFFF' : '#4A4A4A';

    const piecePaths = {
      'p': 'M 22,9 C 19.79,9 18,10.79 18,13 18,13.89 18.29,14.71 18.78,15.38 16.83,16.5 15.5,18.59 15.5,21 15.5,23.03 16.44,24.84 17.91,26.03 14.91,27.09 13,31.58 13,34.5 L 31,34.5 C 31,31.58 29.09,27.09 26.09,26.03 27.56,24.84 28.5,23.03 28.5,21 28.5,18.59 27.17,16.5 25.22,15.38 25.71,14.71 26,13.89 26,13 26,10.79 24.21,9 22,9 z',
      'r': 'M 14,34 L 30,34 L 30,32 L 14,32 L 14,34 z M 14,29 L 30,29 L 30,31 L 14,31 L 14,29 z M 14,16 L 30,16 L 30,28 L 14,28 L 14,16 z M 11,14 L 33,14 L 33,16 L 11,16 L 11,14 z M 12,11 L 32,11 L 32,14 L 12,14 L 12,11 z',
      'n': 'M 14,34 L 30,34 L 30,32 L 14,32 L 14,34 z M 14,29 L 30,29 L 30,31 L 14,31 L 14,29 z M 14,14 C 14,14 13,15 13,16 13,17 13,18 14,19 15,20 16,21 17,22 18,23 19,24 19,25 19,26 18,27 17,28 16,29 15,30 15,31 L 29,31 C 29,30 28,29 27,28 26,27 25,26 25,25 25,24 26,23 27,22 28,21 29,20 30,19 31,18 31,17 31,16 31,15 30,14 30,14 L 14,14 z',
      'b': 'M 14,34 L 30,34 L 30,32 L 14,32 L 14,34 z M 14,29 L 30,29 L 30,31 L 14,31 L 14,29 z M 18,11 L 26,11 L 26,14 L 18,14 L 18,11 z M 16,14 L 28,14 L 28,16 L 16,16 L 16,14 z M 15,16 L 29,16 L 29,29 L 15,29 L 15,16 z',
      'q': 'M 14,34 L 30,34 L 30,32 L 14,32 L 14,34 z M 14,29 L 30,29 L 30,31 L 14,31 L 14,29 z M 13,14 L 31,14 C 31,14 32,15 32,16 32,17 31,18 30,19 29,20 28,21 27,22 26,23 25,24 25,25 25,26 26,27 27,28 L 17,28 C 18,27 19,26 19,25 19,24 18,23 17,22 16,21 15,20 14,19 13,18 12,17 12,16 12,15 13,14 13,14 z M 17,11 L 27,11 L 27,14 L 17,14 L 17,11 z',
      'k': 'M 14,34 L 30,34 L 30,32 L 14,32 L 14,34 z M 14,29 L 30,29 L 30,31 L 14,31 L 14,29 z M 15,16 L 29,16 L 29,29 L 15,29 L 15,16 z M 14,14 L 30,14 L 30,16 L 14,16 L 14,14 z M 17,11 L 27,11 L 27,14 L 17,14 L 17,11 z M 22,8 L 22,11 M 19,9.5 L 25,9.5'
    };

    const piecePath = piecePaths[piece.toLowerCase()];
    if (!piecePath) return null;

    return (
      <svg viewBox="0 0 44 44" width="36" height="36">
        <g
          style={{
            fill: color,
            stroke: '#000000',
            strokeWidth: 1.5,
            strokeLinecap: 'round',
            strokeLinejoin: 'round'
          }}
        >
          <path d={piecePath} />
        </g>
      </svg>
    );
  };

  return (
    <div className="inline-block p-4 bg-neutral-800 rounded-lg">
      <div className="grid grid-cols-8 gap-0">
        {initialBoard.map((row, rankIndex) => (
          row.map((piece, fileIndex) => (
            <div
              key={`${rankIndex}-${fileIndex}`}
              className={`w-16 h-16 flex justify-center items-center relative
                ${(rankIndex + fileIndex) % 2 === 0 ? 'bg-[#eeeed2]' : 'bg-[#769656]'}`}
            >
    
              {piece && (
                <div className="w-9 h-9 flex justify-center items-center">
                  {getPieceSVG(piece)}
                </div>
              )}

         
              {fileIndex === 0 && (
                <span className="absolute -left-6 text-neutral-200 text-sm">
                  {ranks[rankIndex]}
                </span>
              )}

           
              {rankIndex === 7 && (
                <span className="absolute -bottom-6 text-neutral-200 text-sm">
                  {files[fileIndex]}
                </span>
              )}
            </div>
          ))
        ))}
      </div>
    </div>
  );
};

export default ChessBoard;
