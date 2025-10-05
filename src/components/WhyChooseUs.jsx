import React from "react";

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-gradient-to-r from-[#2b286c] to-[#150928]">
      <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-start gap-12">
        
        {/* Left Side */}
        <div className="lg:w-6/12">
          <h2 className="text-4xl font-extrabold text-white mb-4">
            Why You Choose Metro Solver? 
          </h2>
          <p className="text-white mb-6">
            We are constantly growing or learning nd improving.Enter your personal real estate sanctuary, where the ideal home is effortless nd confortable with our assistance.
          </p>
          <button className="px-6 py-3 bg-gradient-to-r from-[#6a5acd] to-[#8a2be2] text-white rounded-full font-medium shadow-lg hover:bg-indigo-700 hover:scale-105  transition">
            Book Now
          </button>
        </div>

        {/* Right Side: Z-shaped buttons using Grid */}
        <div className="lg:w-6/12 grid grid-rows-3 grid-cols-2 gap-y-6 gap-x-4">
          {/* Row 1, left */}
          <button className="bg-gradient-to-r from-[#6a5acd] to-[#8a2be2] text-white px-5 py-3 rounded-full shadow-lg justify-self-start hover:scale-105 transition">
            Cancel Anytime
          </button>

          {/* Row 1, right (empty) */}
          <div></div>

          {/* Row 2, right */}
          <button className="bg-[#342883] text-white px-5 py-3 rounded-full shadow-lg justify-self-end hover:scale-105 transition">
            24/7 Customer Service
          </button>

          {/* Row 2, left (empty) */}
          <div></div>

          {/* Row 3, left */}
          <button className="bg-gradient-to-r from-[#6a5acd] to-[#8a2be2] text-white px-5 py-3 rounded-full shadow-lg justify-self-start hover:scale-105 transition">
            Refers & Earn
          </button>

          {/* Row 3, right (optional 4th button) */}
          <button className="bg-gradient-to-r from-[#6a5acd] to-[#8a2be2] text-white px-5 py-3 rounded-full shadow-lg justify-self-end hover:scale-105 transition">
            Money Back Guarantee
          </button>
        </div>
      </div>
    </section>
  );
}




