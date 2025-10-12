import React from "react";
import { Play } from "lucide-react";

export default function PodcastSection() {
  return (
    <section className="py-20 bg-gradient-to-r from-[#2b286c] to-[#150928]">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* LEFT DIV */}
        <div>
          <h2 className="text-4xl font-extrabold text-white mb-6">
            Did You Hear About Our Podcast?
          </h2>

          {/* Video Card */}
          <div className="relative rounded-xl overflow-hidden shadow-lg group">
            {/* Thumbnail */}
            <img
              src="https://www.youtube.com/watch?v=6cO-7bBTYiE&pp=ugUHEgVlbi1VUw%3D%3D"
              alt="Podcast Thumbnail"
              className="w-full h-64 object-cover"
            />

            {/* Overlay Info */}
            <div className="absolute top-0 left-0 right-0 flex justify-between p-3 text-white text-sm bg-gradient-to-b from-black/60 to-transparent">
              <span className="bg-gray-600/70 px-3 py-1 rounded-md">12:35</span>
              <span className="bg-gray-600/70 px-3 py-1 rounded-md">Oct 6, 2025</span>
            </div>

            {/* Play Button */}
            <button className="absolute inset-0 flex justify-center items-center">
              <div className="bg-gradient-to-r from-[#6a5acd] to-[#8a2be2] text-white p-4 rounded-full shadow-lg hover:scale-110 transition-transform">
                <Play size={24} fill="white" />
              </div>
            </button>

            {/* Title under thumbnail */}
            <div className="absolute bottom-0 w-full text-white p-4 text-center">
              <h3 className="text- font-semibold">
                The Future of Metro Systems: Smart Cities and AI Integration
              </h3>
            </div>
          </div>
        </div>

        {/* RIGHT DIV */}
        <div className="flex flex-col justify-center space-y-6 pt-6">
          <p className="text-gray-300 leading-relaxed">
           Based on the description of Metro Solver and the image provided, here is a <br /> 6 steps process that Metro Solver uses to scale a customer's bussiness. 

          </p>

          {/* Video Card 2 */}
          <div className="relative rounded-xl overflow-hidden shadow-lg group">
            {/* Thumbnail */}
            <img
              src="https://www.youtube.com/watch?v=6cO-7bBTYiE&pp=ugUHEgVlbi1VUw%3D%3D"
              alt="Podcast Thumbnail"
              className="w-full h-64 object-cover"
            />

            {/* Overlay Info */}
            <div className="absolute top-0 left-0 right-0 flex justify-between p-3 text-white text-sm bg-gradient-to-b from-black/60 to-transparent">
              <span className="bg-gray-600/70 px-3 py-1 rounded-md">12:35</span>
              <span className="bg-gray-600/70 px-3 py-1 rounded-md">Oct 6, 2025</span>
            </div>

            {/* Play Button */}
            <button className="absolute inset-0 flex justify-center items-center">
              <div className="bg-gradient-to-r from-[#6a5acd] to-[#8a2be2] text-white p-4 rounded-full shadow-lg hover:scale-110 transition-transform">
                <Play size={24} fill="white" />
              </div>
            </button>

            {/* Title under thumbnail */}
            <div className="absolute bottom-0 w-full text-white p-4 text-center">
              <h3 className="text- font-semibold">
                The Future of Metro Systems: Smart Cities and AI Integration
              </h3>
            </div>
          </div>
        </div>
      </div>
       <div className="flex justify-center gap-6 mt-10">
        <button className="w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-r from-[#6a5acd] to-[#8a2be2] text-white text-2xl shadow-lg hover:bg-indigo-700 transition-all">
          &lt;
        </button>
        <button className="w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-r from-[#6a5acd] to-[#8a2be2] text-white text-2xl shadow-lg hover:bg-indigo-700 transition-all">
          &gt;
        </button>
      </div>
    </section>
  );
}
