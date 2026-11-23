
import logo from "../assets/hadrumet.jpg";

function Footer() {
  return (
    <footer className="bg-[#F8F3E9] text-[#172B3A] pt-20 px-6">

      <div className="max-w-7xl mx-auto">

        {/* Main footer */}
        <div className="grid md:grid-cols-2 gap-16 pb-16">

          {/* Brand side */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <img
                src={logo}
                alt="AIESEC logo"
                className="w-16 h-16 object-contain"
              />

              <div>
                <p className="font-black text-xl">AIESEC</p>
                <p className="text-sm text-gray-500">Local Committee Hadrumet</p>
              </div>
            </div>

            <h2 className="text-5xl md:text-7xl font-black tracking-tight leading-none mb-5">
              GO BEYOND
              <br />
              <span className="text-[#B76E79]">BORDERS.</span>
            </h2>

            <p className="text-gray-600 max-w-md leading-7">
              Your next adventure might be closer than you think.
              Discover opportunities, meet new people and create
              stories worth telling.
            </p>
          </div>

          {/* Links side */}
          <div className="grid grid-cols-2 gap-8 md:pt-10">

            <div>
              <h3 className="font-black text-lg mb-6 text-[#1769E0]">
                EXPLORE
              </h3>

              <ul className="space-y-4 text-gray-600 font-medium">
                <li>
                  <a href="#home" className="hover:text-[#B76E79] transition">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#about" className="hover:text-[#B76E79] transition">
                    Discover Tunisia
                  </a>
                </li>
                <li>
                  <a href="#positioning" className="hover:text-[#B76E79] transition">
                    Who We Are
                  </a>
                </li>
                <li>
                  <a href="#opportunities" className="hover:text-[#B76E79] transition">
                    Opportunities
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-black text-lg mb-6 text-[#F47745]">
                FOLLOW US
              </h3>

              <div className="space-y-4">

                <a
                  href="https://www.instagram.com/beyond_sousse/"
                  target="_blank"
                  rel="noreferrer"
                  className="block border border-[#172B3A]/20 p-3 hover:bg-[#FFD447] transition"
                >
                  <span className="block text-xs text-gray-500 mb-1">
                    INSTAGRAM
                  </span>
                  <span className="font-bold">@beyond_sousse ↗</span>
                </a>

                <a
                  href="https://www.instagram.com/igv.hadrumet/"
                  target="_blank"
                  rel="noreferrer"
                  className="block border border-[#172B3A]/20 p-3 hover:bg-[#FFD447] transition"
                >
                  <span className="block text-xs text-gray-500 mb-1">
                    INSTAGRAM
                  </span>
                  <span className="font-bold">@igv.hadrumet ↗</span>
                </a>

              </div>
            </div>

          </div>
        </div>

        {/* Big Hadrumet signature */}
        <div className="border-t border-[#172B3A]/20 pt-8 pb-5">

          <p className="text-center text-sm uppercase tracking-[0.3em] text-gray-500 mb-3">
            Made of sunshine, culture & ambition
          </p>

          <h2 className="text-center text-5xl md:text-8xl font-black tracking-tight text-[#B76E79]">
            HADRUMET
          </h2>

        </div>

        {/* Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-3 py-5 border-t border-[#172B3A]/20 text-sm text-gray-500">
          <p>© {new Date().getFullYear()} AIESEC in Hadrumet</p>
          <p>Come with curiosity. Leave with a story.</p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
