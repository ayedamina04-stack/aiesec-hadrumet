
import { useState } from "react";
import opportunities from "../data/opportunities";

function OpportunitySection() {
  const [product, setProduct] = useState("All");
  const [salary, setSalary] = useState("All");
  const [date, setDate] = useState("All");

  const filteredOpportunities = opportunities.filter((opportunity) => {
    const matchesProduct =
      product === "All" || opportunity.product === product;

    const matchesSalary =
      salary === "All" ||
      (salary === "Paid" && opportunity.salary !== null) ||
      (salary === "Unpaid" && opportunity.salary === null);

    const opportunityDate = new Date(opportunity.created);
    const now = new Date();

    const cutoffDate = new Date(
      now.getFullYear(),
      now.getMonth() - 1,
      now.getDate()
    );

    const matchesDate =
      date === "All" ||
      (date === "Recent" && opportunityDate >= cutoffDate) ||
      (date === "Older" && opportunityDate < cutoffDate);

    return matchesProduct && matchesSalary && matchesDate;
  });

  return (
    <section id="opportunities" className="bg-white py-24 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Section heading */}
        <div className="mb-12">
          <p className="text-sm uppercase tracking-[0.25em] font-bold text-blue-700 mb-4">
            Your next chapter starts here
          </p>

          <h2 className="text-4xl md:text-6xl font-black text-[#172B3A] mb-5">
            Find your <span className="text-[#1769E0]">opportunity.</span>
          </h2>

          <p className="text-gray-600 max-w-2xl leading-7">
            Explore international experiences, discover new cultures
            and take the next step in your journey.
          </p>
        </div>

        {/* Filters */}
        <div className="bg-[#F8F3E9] p-6 mb-10 grid sm:grid-cols-3 gap-5">

          <div>
            <label className="block text-sm font-bold mb-2">
              Opportunity type
            </label>

            <select
              value={product}
              onChange={(e) => setProduct(e.target.value)}
              className="w-full p-3 bg-white border border-gray-200"
            >
              <option value="All">All opportunities</option>
              <option value="Global Talent">Global Talent</option>
              <option value="Global Teaching">Global Teaching</option>
              <option value="Global Volunteer">Global Volunteer</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-bold mb-2">
              Salary
            </label>

            <select
              value={salary}
              onChange={(e) => setSalary(e.target.value)}
              className="w-full p-3 bg-white border border-gray-200"
            >
              <option value="All">All salaries</option>
              <option value="Paid">Paid</option>
              <option value="Unpaid">Not specified</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-bold mb-2">
              Date added
            </label>

            <select
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full p-3 bg-white border border-gray-200"
            >
              <option value="All">All dates</option>
              <option value="Recent">Last month</option>
              <option value="Older">Older</option>
            </select>
          </div>

        </div>

        {/* Results count */}
        <p className="text-gray-500 text-sm mb-6">
          Showing <strong>{filteredOpportunities.length}</strong> opportunities
        </p>

        {/* Opportunity cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {filteredOpportunities.map((opportunity) => (

            <div
              key={opportunity.id}
              className="border border-gray-200 p-6 hover:shadow-xl hover:-translate-y-1 transition duration-300"
            >

              {/* Product label with its own color */}
              <div
                className={`inline-block text-xs uppercase tracking-widest font-bold px-3 py-2 mb-4 ${
                  opportunity.product === "Global Teaching"
                    ? "bg-orange-100 text-orange-700"
                    : opportunity.product === "Global Volunteer"
                    ? "bg-red-100 text-red-700"
                    : "bg-teal-100 text-teal-700"
                }`}
              >
                {opportunity.product}
              </div>

              {/* Opportunity title */}
              <h3 className="text-xl font-black text-[#172B3A] mb-2">
                {opportunity.title}
              </h3>

              <p className="text-gray-500 text-sm mb-5">
                {opportunity.organisation}
              </p>

              {/* Opportunity details */}
              <div className="border-t border-gray-100 pt-4 space-y-3 text-sm text-gray-600">

                <p>
                  <span className="mr-2">📅</span>
                  Added: {opportunity.created}
                </p>

                <p>
                  <span className="mr-2">👥</span>
                  Openings: {opportunity.openings}
                </p>

                <p>
                  <span className="mr-2">💰</span>
                  Salary:{" "}
                  {opportunity.salary !== null
                    ? `$${opportunity.salary}`
                    : "Not specified"}
                </p>

              </div>

            </div>

          ))}

        </div>

        {/* Empty state */}
        {filteredOpportunities.length === 0 && (
          <p className="text-center text-gray-500 py-12">
            No opportunities match your filters.
          </p>
        )}

      </div>
    </section>
  );
}

export default OpportunitySection;
