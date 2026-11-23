
import members from "../assets/aiesec.jpg";
import aiesec1 from "../assets/aiesec1.jpg";

function Positioning() {
  return (
    <section
      id="positioning"
      className="bg-[#F8F3E9] py-24 px-6 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* Photo collage */}
        <div className="relative min-h-[560px] flex items-center">

          {/* Main photo */}
          <div className="w-[95%] h-[460px] overflow-hidden bg-[#E8E0D2]">
            <img
              src={members}
              alt="AIESEC members"
              className="w-full h-full object-contain"
            />
          </div>

          {/* Second overlapping photo */}
          <div className="absolute bottom-0 right-0 w-[55%] h-[250px] border-[7px] border-[#F8F3E9] overflow-hidden shadow-xl bg-[#E8E0D2]">
            <img
              src={aiesec1}
              alt="AIESEC experience"
              className="w-full h-full object-contain"
            />
          </div>

          {/* Yellow label */}
          <div className="absolute top-0 right-2 bg-[#FFD447] p-5 w-36 rotate-3 shadow-lg">
            <p className="text-3xl font-black text-[#172B3A]">01</p>
            <p className="text-xs font-bold text-[#172B3A] mt-1">
              GLOBAL NETWORK, LOCAL IMPACT
            </p>
          </div>

        </div>

        {/* Text */}
        <div className="md:pl-4">
          <p className="text-sm uppercase tracking-[0.25em] font-bold text-blue-700 mb-5">
            More than an organisation
          </p>

          <h2 className="text-4xl md:text-5xl font-black text-[#172B3A] leading-tight mb-7">
            Young people.
            <br />
            Real experiences.
            <br />
            <span className="text-[#1769E0]">Global impact.</span>
          </h2>

          <p className="text-gray-600 leading-8 mb-5">
            AIESEC is a global youth-led organisation that develops
            leadership through cross-cultural experiences and
            international opportunities.
          </p>

          <p className="text-gray-600 leading-8 mb-8">
            In Hadrumet, we connect young people with opportunities
            to explore new cultures, discover their potential and
            make an impact beyond borders.
          </p>

          <a
            href="#opportunities"
            className="inline-block bg-[#1769E0] text-white px-8 py-4 font-bold hover:bg-[#1254B5] transition"
          >
            Find your experience →
          </a>
        </div>

      </div>
    </section>
  );
}

export default Positioning;
