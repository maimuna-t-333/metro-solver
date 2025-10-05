import React from "react";

import LuminusLogo from "../../public/luminus.png";
import BremboLogo from "../../public/brembo.png";
import MotoralLogo from "../../public/motorwala.png";

const logos = [
  {  src: LuminusLogo },
  {  src: BremboLogo },
  {  src: MotoralLogo },
];

export default function BrandMarquee() {
  return (
    <div className="overflow-hidden relative bg-gradient-to-r from-[#2b286c] to-[#150928] py-8">
      <div className="flex animate-marquee gap-20">

        {[...Array(3)].map((_, i) =>
          logos.map((logo, index) => (
            <div key={i + "-" + index} className="flex items-center gap-4">
              <img src={logo.src} alt={logo.name} className="h-12 w-auto object-contain" />
              <span className="text-white font-semibold">{logo.name}</span>
            </div>
          ))
        )}
      </div>

      {/* Tailwind CSS keyframes for marquee */}
      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-33.333%); }
        }
        .animate-marquee {
          display: flex;
          white-space: nowrap;
          animation: marquee 10s linear infinite;
        }
      `}</style>
    </div>
  );
}
