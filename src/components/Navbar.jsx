
import logo from "../assets/aiesec-logo.png";

function Navbar() {
  return (
    <header className="w-full bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo and local identity */}
        <a href="#home" className="flex items-center gap-3">
          <img
            src={logo}
            alt="AIESEC"
            className="w-32 md:w-40 h-auto object-contain"
          />

          <span className="text-sm font-semibold text-gray-700 border-l border-gray-300 pl-3">
            in Hadrumet
          </span>
        </a>

        {/* Navigation links */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#about" className="text-gray-600 hover:text-blue-600 transition">
            Discover
          </a>

          <a href="#positioning" className="text-gray-600 hover:text-blue-600 transition">
            Who We Are
          </a>

          <a href="#opportunities" className="text-gray-600 hover:text-blue-600 transition">
            Opportunities
          </a>
        </nav>

        {/* Main action */}
        <a
          href="#opportunities"
          className="bg-blue-600 text-white px-5 py-3 rounded-full text-sm font-semibold hover:bg-blue-700 transition"
        >
          Explore Opportunities
        </a>

      </div>
    </header>
  );
}

export default Navbar;
