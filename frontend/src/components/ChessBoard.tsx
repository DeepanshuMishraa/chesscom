
const ChessBoard = () => {
  return (
    <div className="aspect-square max-w-2xl mx-auto p-4">
      <div className="grid grid-cols-8 gap-0 border border-gray-700">
        {[...Array(64)].map((_, i) => {
          const row = Math.floor(i / 8);
          const col = i % 8;
          const isLight = (row + col) % 2 === 0;
          return (
            <div
              key={i}
              className={`aspect-square ${isLight ? 'bg-[#f0d9b5]' : 'bg-[#b58863]'
                }`}
            />
          );
        })}
      </div>
    </div>
  )
}

export default ChessBoard
