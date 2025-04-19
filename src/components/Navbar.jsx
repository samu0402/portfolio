import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex space-x-7">
            <Link to="/" className="flex items-center py-4 px-2">
              <span className="font-semibold text-gray-500 text-lg">Portfolio</span>
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-1">
            <Link to="/" className="py-4 px-2 text-gray-500 font-semibold hover:text-blue-500 transition duration-300">Home</Link>
            <Link to="/about" className="py-4 px-2 text-gray-500 font-semibold hover:text-blue-500 transition duration-300">About</Link>
            <Link to="/projects" className="py-4 px-2 text-gray-500 font-semibold hover:text-blue-500 transition duration-300">Projects</Link>
            <Link to="/contact" className="py-4 px-2 text-gray-500 font-semibold hover:text-blue-500 transition duration-300">Contact</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}