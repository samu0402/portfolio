export default function Footer() {
  return (
    <footer className="bg-white shadow-lg mt-auto">
      <div className="max-w-6xl mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} My Portfolio. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <button className="text-gray-500 hover:text-blue-500 focus:outline-none">
              <i className="fab fa-github text-xl"></i>
            </button>
            <button className="text-gray-500 hover:text-blue-500 focus:outline-none">
              <i className="fab fa-linkedin text-xl"></i>
            </button>
            <button className="text-gray-500 hover:text-blue-500 focus:outline-none">
              <i className="fab fa-twitter text-xl"></i>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}