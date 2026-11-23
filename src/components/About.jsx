
import coast from "../assets/sousse_coast.jpg";
import medina from "../assets/sousse-medina.jpg";
import culture from "../assets/tunisian-culture.jpg";
import culture1 from "../assets/tunisian-culture1.jpg";
import culture2 from "../assets/tunisian-culture2.jpg";
import culture77 from "../assets/tunisian-culture77.jpg";
import culture74 from "../assets/tunisian-culture74.jpg";
import hadrumetBg from "../assets/sousse.jpg";

function About() {
  return (
    <section id="about" className="bg-white py-24 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Section heading */}
        <div className="mb-14">
          <span className="text-sm font-bold uppercase tracking-widest text-[#F47745]">
            More than a destination
          </span>

          <h2 className="text-4xl md:text-6xl font-black text-[#172B3A] mt-4 max-w-3xl">
            Discover the beauty of
            <span className="text-[#1769E0]"> Tunisia.</span>
          </h2>

          <p className="text-gray-600 text-lg mt-5 max-w-2xl leading-relaxed">
            Where Mediterranean vibes meet rich history, warm hospitality
            and unforgettable experiences.
          </p>
        </div>

        {/* Photo gallery */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

          {/* Main coast photo */}
          <div className="col-span-2 row-span-2 relative h-80 md:h-[500px] rounded-3xl overflow-hidden group">
            <img
              src={coast}
              alt="Tunisian Mediterranean coast"
              className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <h3 className="absolute bottom-7 left-7 text-white text-2xl md:text-3xl font-bold">
              Mediterranean beauty
            </h3>
          </div>

          {/* Supporting photos */}
          <div className="relative h-60 rounded-3xl overflow-hidden group">
            <img src={medina} alt="Sousse Medina" className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
          </div>

          <div className="relative h-60 rounded-3xl overflow-hidden group">
            <img src={culture} alt="Tunisian culture" className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
          </div>

          <div className="relative h-60 rounded-3xl overflow-hidden group">
            <img src={culture1} alt="Tunisian culture" className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
          </div>

          <div className="relative h-60 rounded-3xl overflow-hidden group">
            <img src={culture2} alt="Tunisian culture" className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
          </div>

          <div className="relative h-60 rounded-3xl overflow-hidden group">
            <img src={culture77} alt="Tunisian culture" className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
          </div>

          <div className="relative h-60 rounded-3xl overflow-hidden group">
            <img src={culture74} alt="Tunisian culture" className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
          </div>

        </div>

        {/* Why Hadrumet - Editorial destination section */}
        <section
          className="relative mt-24 min-h-[750px] overflow-hidden rounded-[2rem] flex items-center"
          style={{
            backgroundImage: `url(${hadrumetBg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Dark photographic overlay */}
          <div className="absolute inset-0 bg-[#101820]/75" />

          <div className="relative z-10 w-full px-7 py-16 md:px-16 md:py-20">

            {/* Top label */}
            <div className="flex items-center gap-3 mb-12">
              <span className="w-10 h-[2px] bg-[#C18B8B]"></span>
              <span className="text-white/80 uppercase tracking-[0.25em] text-xs font-semibold">
                A destination worth discovering
              </span>
            </div>

            {/* Main heading */}
            <div className="max-w-4xl">
              <p className="text-white text-lg md:text-xl font-medium">
                So, why choose
              </p>

              <h2 className="mt-2 text-6xl md:text-8xl font-black tracking-tight leading-none text-white">
                <span className="text-[#B76E79]">HADRUMET</span>
                <span className="text-white">?</span>
              </h2>

              <p className="mt-8 text-white/85 text-lg md:text-xl leading-relaxed max-w-2xl">
                Not every journey needs a famous destination.
                Sometimes, the most meaningful experiences happen
                somewhere unexpected. Somewhere like Sousse.
              </p>
            </div>

            {/* Editorial reasons */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 border-t border-white/30 pt-9">

              <div>
                <span className="text-[#D7A0A5] text-sm font-bold tracking-widest">
                  01 / THE SETTING
                </span>
                <h3 className="text-white text-2xl font-bold mt-4">
                  Mediterranean days.
                </h3>
                <p className="text-white/70 mt-3 leading-relaxed max-w-xs">
                  A coastal lifestyle, sunny afternoons and
                  the unique atmosphere of Tunisia's eastern shore.
                </p>
              </div>

              <div>
                <span className="text-[#D7A0A5] text-sm font-bold tracking-widest">
                  02 / THE CULTURE
                </span>
                <h3 className="text-white text-2xl font-bold mt-4">
                  Stories in every street.
                </h3>
                <p className="text-white/70 mt-3 leading-relaxed max-w-xs">
                  From historic landmarks to local flavours,
                  discover a culture that has so much to share.
                </p>
              </div>

              <div>
                <span className="text-[#D7A0A5] text-sm font-bold tracking-widest">
                  03 / THE PEOPLE
                </span>
                <h3 className="text-white text-2xl font-bold mt-4">
                  Connections that stay.
                </h3>
                <p className="text-white/70 mt-3 leading-relaxed max-w-xs">
                  Meet welcoming people, exchange perspectives
                  and make memories beyond the experience itself.
                </p>
              </div>

            </div>

            {/* Closing message */}
            <div className="mt-14 flex flex-col md:flex-row md:items-center justify-between gap-6">
              <p className="text-white text-xl md:text-2xl font-semibold italic">
                Come with curiosity. Leave with a story.
              </p>

              <a
                href="#opportunities"
                className="inline-flex items-center gap-3 text-white border border-white/60 px-7 py-4 rounded-full hover:bg-white hover:text-[#172B3A] transition w-fit"
              >
                Discover opportunities <span>↗</span>
              </a>
            </div>

          </div>
        </section>

      </div>
    </section>
  );
}

export default About;
