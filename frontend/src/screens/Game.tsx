import ChessBoard from "../components/ChessBoard";

export default function Game() {
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
          <ChessBoard />
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

            <button className="w-full py-4 bg-[#8bc34a] text-white rounded text-xl font-bold hover:bg-[#7cb342]">
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

      {/* Footer */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-gray-800">
        <div className="flex justify-center gap-8 text-gray-400">
          <div className="flex items-center gap-2">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
            <span className="font-mono">200,884</span>
            <span className="text-sm">PLAYING</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-mono">18,061,471</span>
            <span className="text-sm">GAMES</span>
          </div>
        </div>
      </div>
    </div>
  );
}

