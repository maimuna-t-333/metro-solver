import React from "react";

export default function HowItWorks() {
  return (
    <section className="py-24 bg-gradient-to-r from-[#2b286c] to-[#150928]">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center">


        <div className="relative flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-24">
          {/* Left Side Buttons */}
          <div className="flex flex-col items-end gap-10">
            <button className="bg-gray-700 text-white font-semibold  px-6 py-3 rounded-full shadow-lg w-48 hover:scale-105 hover:shadow-xl transition-all duration-300">
              Delivery & Support
            </button>
            <button className="bg-gray-700 text-white font-semibold px-6 py-3 rounded-full shadow-lg w-48 hover:scale-105 hover:shadow-xl transition-all duration-300">
            Quality Assurance          
             </button>
            <button className="bg-gray-700 text-white font-semibold px-6 py-3 rounded-full shadow-lg w-48 hover:scale-105 hover:shadow-xl transition-all duration-300">
              Implement & Develop
            </button>
          </div>

          {/* Center Circle */}
          <div className="relative flex items-center justify-center">
            <div className="w-52 h-52 rounded-full bg-gradient-to-r from-[#2b286c] to-[#150928] border border-white p-4 flex items-center justify-center text-white font-bold text-2xl shadow-2xl">
              How to Works?
            </div>
          </div>

          {/* Right Side Buttons */}
          <div className="flex flex-col items-start gap-10">
            <button className="bg-gray-700 text-white font-semibold px-6 py-3 rounded-full shadow-lg w-48 hover:scale-105 hover:shadow-xl transition-all duration-300">
              Book a Call
            </button>
            <button className="bg-gray-700 text-white font-semibold px-6 py-3 rounded-full shadow-lg w-48 hover:scale-105 hover:shadow-xl transition-all duration-300">
              Requirement Analysis
            </button>
            <button className="bg-gray-700 text-white font-semibold px-6 py-3 rounded-full shadow-lg w-48 hover:scale-105 hover:shadow-xl transition-all duration-300">
              Service Customization
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

