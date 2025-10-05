import React from "react";

export default function StatsSection() {
  const stats = [
    { number: "150+", label: "Current Clients" },
    { number: "250+", label: "Projects Completed" },
    { number: "50+", label: "Team Members" },
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-[#150928] to-[#2b286c]">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {stats.map((item, index) => (
          <div
            key={index}
            className="bg-gradient-to-r from-[#2b586c]/50 to-[#450928]/20 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 text-center p-10"
          >
            <h3 className="text-5xl font-extrabold text-white mb-3">
              {item.number}
            </h3>
            <p className="text-white text-lg font-medium">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
