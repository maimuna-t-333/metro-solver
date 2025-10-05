import { motion } from "framer-motion";
import image from "../../public/Comp 1_4.gif";
import frame from '../../public/Frame 3.gif'

export default function Hero() {
  return (
    <section className="relative h-[600px] lg:h-[600px] overflow-hidden">
      
      {/* GIF Background */}
      <div className="absolute inset-0 -z-10">
        <img 
          src={image} 
          alt="Background GIF" 
          className=" w-full h-full object-cover"
        />
        {/* optional overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#2b286c]/70 to-[#150928]/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 px-16 py-10 flex flex-col-reverse lg:flex-row items-center gap-12 h-full">
        
        {/* Left: text */}
        <div className="w-full lg:w-6/12">
          <h1 className="text-4xl lg:text-6xl font-extrabold leading-tight text-white">
            Expertise to Digitalise your <span className="text-purple-300">Growth</span>
          </h1>

          <p className="mt-6 text-gray-200 max-w-xl">
            We are constantly growing, learning, and improving. Enter your personal real estate sanctuary, where finding the ideal home is easy.
          </p>

          <div className="mt-8 flex items-center gap-4">
            <div className="p-[1.5px] rounded-full bg-gradient-to-r from-[#6a5acd] to-[#8a2be2]">
              <button className="px-6 py-3 rounded-full bg-gradient-to-r from-[#6a5acd] to-[#8a2be2] text-white font-medium shadow-lg hover:scale-[1.02] transition-transform">
                Explore Now
              </button>
            </div>
          </div>
        </div>

        {/* Right: optional extra illustration */}
        <div className="w-full lg:w-6/12 flex justify-center lg:justify-end">
          {/* You can keep another image here if needed */}
          <img src={frame} alt="" className="w-10 h-10 mt-100 mr-20"/>
        </div>

      </div>
    </section>
  );
}


