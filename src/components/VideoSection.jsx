import React from "react";
import { FaPlay } from "react-icons/fa";

export default function VideoSection() {
  return (

    <section className="py-20 bg-gradient-to-r from-[#150928] to-[#2b286c] flex justify-center">
      {/* Video container */}
      <div className="relative w-7xl h-[500px] rounded-2xl overflow-hidden shadow-2xl bg-black">
        
        {/* Background video */}
        <video
          className="absolute inset-0 w-full h-full object-cover opacity-80"
          src="../../public/v.mp4" 
          autoPlay
          loop
          muted
        ></video>

        {/* Overlay gradient for better contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>

        {/* Play Button */}
        <button className="absolute inset-0 flex items-center justify-center z-10">
          <div className="w-20 h-20 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
            <FaPlay className="text-white text-2xl ml-1" />
          </div>
        </button>
      </div>
    </section>
  );
}

