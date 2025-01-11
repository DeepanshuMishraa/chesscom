import { useEffect, useState } from "react";
import ChessBoard from "../components/ChessBoard";
import { useSocket } from "../hooks/useSocket";
import { Chess } from "chess.js"

export const INIT_GAME = "init_game"
export const MOVE = "move"
export const GAME_OVER = "game_over"


export default function Game() {

  const socket = useSocket();
  const [chess, setChess] = useState(new Chess())
  const [board, setBoard] = useState(chess.board())

  useEffect(() => {
    if (!socket) {
      return;
    }

    socket.onmessage = (event) => {
      const message = JSON.parse(event.data);
      console.log(message);

      switch (message.type) {
        case INIT_GAME:
          setChess(new Chess())
          setBoard(chess.board())
          console.log("Game started");
          break;
        case MOVE:
          const move = message.payload;
          chess.move(move);
          setBoard(chess.board());
          console.log("Move made");
          break;
        case GAME_OVER:
          console.log("Game over");
          break;
      }
    }

  }, [socket])

  if (!socket) return <div>Connecting ....</div>
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header section */}
      <div className="flex justify-between items-center p-4 bg-gray-800">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-gray-700 rounded-full"></div>
          <span className="text-lg">Opponent</span>
        </div>
        <div className="text-4xl font-mono">10:00</div>
        <div className="flex gap-6">
          <button className="hover:bg-gray-700 p-2 rounded">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
          </button>
          <button className="hover:bg-gray-700 p-2 rounded">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          <button className="hover:bg-gray-700 p-2 rounded">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
          </button>
        </div>
      </div>

      {/* Main content */}
      <div className="flex">
        {/* Chess board */}
        <div className="flex-1">
          <ChessBoard board={board} />
        </div>

        {/* Right sidebar */}
        <div className="w-80 p-4 space-y-4">
          <div className="space-y-4">
            <button className="w-full text-left p-4 bg-gray-800 rounded flex items-center gap-2">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              10 min
              <svg className="w-4 h-4 ml-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            <button onClick={() => {
              socket.send(JSON.stringify({
                type: INIT_GAME,
              }))
            }} className="w-full py-4 bg-[#8bc34a] text-white rounded text-xl font-bold hover:bg-[#7cb342]">
              Play
            </button>

            <button className="w-full text-left p-4 bg-gray-800 rounded flex items-center gap-2">
              Custom
              <svg className="w-4 h-4 ml-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            <button className="w-full text-left p-4 bg-gray-800 rounded flex items-center gap-2">
              <span className="text-xl">🤝</span>
              Play a Friend
            </button>

            <button className="w-full text-left p-4 bg-gray-800 rounded flex items-center gap-2">
              <span className="text-xl">🏆</span>
              Tournaments
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

