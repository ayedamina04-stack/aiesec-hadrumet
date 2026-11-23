
function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-[#F8F3E9] px-6 py-24 md:py-32"
    >
      <div className="max-w-7xl mx-auto relative">

        <div className="max-w-3xl relative z-10">

          <span className="inline-block bg-[#FFD447] text-[#172B3A] px-4 py-2 rounded-full text-sm font-bold mb-8">
            YOUR JOURNEY STARTS HERE
          </span>

          <h1 className="text-5xl md:text-7xl font-black text-[#172B3A] leading-tight">
            The world is
            <span className="text-[#1769E0]"> bigger </span>
            than your comfort zone.
          </h1>

          <p className="mt-7 text-lg md:text-xl text-gray-600 max-w-xl leading-relaxed">
            Discover international opportunities, explore new cultures,
            and create experiences that will change the way you see the world.
          </p>

          <div className="flex flex-wrap gap-4 mt-9">
            <a
              href="#opportunities"
              className="bg-[#1769E0] text-white px-7 py-4 rounded-full font-bold hover:bg-blue-700 transition"
            >
              Explore Opportunities →
            </a>

            <a
              href="#about"
              className="border-2 border-[#172B3A] text-[#172B3A] px-7 py-4 rounded-full font-bold hover:bg-[#172B3A] hover:text-white transition"
            >
              Discover Hadrumet
            </a>
          </div>

          <p className="mt-10 text-sm font-semibold text-gray-500">
            AIESEC in Hadrumet · Sousse, Tunisia
          </p>

        </div>

        {/* Decorative shapes */}
        <div className="absolute -right-20 -top-10 w-72 h-72 bg-[#FFD447] rounded-full opacity-70" />

        <div className="absolute right-16 bottom-0 w-40 h-40 bg-[#F47745] rounded-full opacity-80" />

      </div>
    </section>
  );
}

export default Hero;
