import { Link } from 'react-router-dom';


interface Props {
  title: string;
  description: string;
  icon: React.ReactNode
}

const Landing = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <header className="bg-slate-950 py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="text-2xl font-bold">Chess<span className="text-yellow-500">.io</span></div>
          <nav>
            <ul className="flex space-x-4">
              <li><a href="#" className="hover:text-yellow-500">Play</a></li>
              <li><a href="#" className="hover:text-yellow-500">Learn</a></li>
              <li><a href="#" className="hover:text-yellow-500">Watch</a></li>
              <li><a href="#" className="hover:text-yellow-500">Community</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Play Chess Online</h1>
            <p className="text-xl mb-6">Join millions of players from around the world and challenge your mind with the game of kings!</p>
            <Link to="/game">            <button className="bg-green-500 hover:bg-green-700 p-4 rounded-lg text-white font-bold text-xl">
              Play Now
            </button>
            </Link>

          </div>
          <div className="md:w-1/2">
            <img
              src="/chess-board.jpeg"
              alt="Chess Board"
              className="rounded-lg shadow-lg max-w-full h-auto"
            />
          </div>
        </div>
      </main>

      <section className="bg-gray-800 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Why Choose Chess.io?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              title="Play Anytime"
              description="24/7 matchmaking with players of all skill levels"
              icon="🕒"
            />
            <FeatureCard
              title="Learn & Improve"
              description="Access to tutorials, puzzles, and analysis tools"
              icon="📚"
            />
            <FeatureCard
              title="Global Community"
              description="Connect with chess enthusiasts worldwide"
              icon="🌍"
            />
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 py-6">
        <div className="container mx-auto px-4 text-center text-gray-400">
          <p>&copy; 2025 Chess.io. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

const FeatureCard = ({ title, description, icon }: Props) => (
  <div className="bg-gray-700 p-6 rounded-lg text-center">
    <div className="text-4xl mb-4">{icon}</div>
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p>{description}</p>
  </div>
);

export default Landing;
