import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

import img1 from "../../public/img_1.PNG";
import img2 from "../../public/img_2.PNG";
import img3 from "../../public/img_3.PNG";
import img4 from "../../public/img_4.PNG";
import img5 from "../../public/img_5.PNG";
import img6 from "../../public/img_6.PNG";

export default function LatestWork() {
  return (
    <section className="py-16 bg-gradient-to-r from-[#2b286c] to-[#150928]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Top */}
        <div className="flex flex-col lg:flex-row justify-between items-center mb-12 gap-6">
          <h2 className="text-4xl font-extrabold text-white">
            Our Latest Work
          </h2>
          <p className="text-white max-w-xl text-center lg:text-right">
            Based on the description of Metro Solver and the image Provider.here is a 6-step process that Metreo Solver uses to scale a customer's business
          </p>
        </div>

        {/* Row 1 */}
        <Swiper
          modules={[Autoplay]}
          spaceBetween={20}
          slidesPerView={3}
          loop={true}
          freeMode={{ enabled: true, momentum: false }}
          autoplay={{ delay: 0, disableOnInteraction: false }}
          speed={3000}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          <SwiperSlide><img src={img1} className="w-full h-64 object-cover rounded-xl" /></SwiperSlide>
          <SwiperSlide><img src={img2} className="w-full h-64 object-cover rounded-xl" /></SwiperSlide>
          <SwiperSlide><img src={img3} className="w-full h-64 object-cover rounded-xl" /></SwiperSlide>
          <SwiperSlide><img src={img4} className="w-full h-64 object-cover rounded-xl" /></SwiperSlide>
          <SwiperSlide><img src={img5} className="w-full h-64 object-cover rounded-xl" /></SwiperSlide>
          <SwiperSlide><img src={img6} className="w-full h-64 object-cover rounded-xl" /></SwiperSlide>
        </Swiper>

        {/* Row 2 */}
        <Swiper
          modules={[Autoplay]}
          spaceBetween={20}
          slidesPerView={3}
          loop={true}
          freeMode={{ enabled: true, momentum: false }}
          autoplay={{ delay: 1, disableOnInteraction: false, reverseDirection: true }}
          speed={3000}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="mt-8"
        >
          <SwiperSlide><img src={img2} className="w-full h-64 object-cover rounded-xl" /></SwiperSlide>
          <SwiperSlide><img src={img4} className="w-full h-64 object-cover rounded-xl" /></SwiperSlide>
          <SwiperSlide><img src={img6} className="w-full h-64 object-cover rounded-xl" /></SwiperSlide>
          <SwiperSlide><img src={img1} className="w-full h-64 object-cover rounded-xl" /></SwiperSlide>
          <SwiperSlide><img src={img3} className="w-full h-64 object-cover rounded-xl" /></SwiperSlide>
          <SwiperSlide><img src={img5} className="w-full h-64 object-cover rounded-xl" /></SwiperSlide>
        </Swiper>

        {/* Row 3 */}
        <Swiper
          modules={[Autoplay]}
          spaceBetween={20}
          slidesPerView={3}
          loop={true}
          freeMode={{ enabled: true, momentum: false }}
          autoplay={{ delay: 1, disableOnInteraction: false }}
          speed={3000}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="mt-8"
        >
          <SwiperSlide><img src={img1} className="w-full h-64 object-cover rounded-xl" /></SwiperSlide>
          <SwiperSlide><img src={img3} className="w-full h-64 object-cover rounded-xl" /></SwiperSlide>
          <SwiperSlide><img src={img5} className="w-full h-64 object-cover rounded-xl" /></SwiperSlide>
          <SwiperSlide><img src={img2} className="w-full h-64 object-cover rounded-xl" /></SwiperSlide>
          <SwiperSlide><img src={img4} className="w-full h-64 object-cover rounded-xl" /></SwiperSlide>
          <SwiperSlide><img src={img6} className="w-full h-64 object-cover rounded-xl" /></SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}
