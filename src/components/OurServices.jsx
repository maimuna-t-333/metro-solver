import React from "react";
import { FaLaptopCode, FaMobileAlt, FaServer, FaChartLine, FaCloud, FaLock } from "react-icons/fa";

const services = [
  { icon: <FaLaptopCode size={30} />, title: "Web Development", description: "We create modern, responsive websites tailored to your business needs, ensuring fast load times and excellent user experience across all devices." },
  { icon: <FaMobileAlt size={30} />, title: "Mobile Apps", description: "Designing and developing intuitive mobile applications that engage users and provide seamless functionality on both iOS and Android platforms." },
  { icon: <FaServer size={30} />, title: "Backend Services", description: "Providing reliable, scalable, and secure backend infrastructure to support your web and mobile applications efficiently." },
  { icon: <FaChartLine size={30} />, title: "Analytics", description: "Leverage data-driven insights to make informed business decisions and optimize your digital strategy for better results." },
  { icon: <FaCloud size={30} />, title: "Cloud Solutions", description: "Flexible cloud infrastructure solutions for hosting, storage, and computing, ensuring security and scalability for your applications." },
  { icon: <FaLock size={30} />, title: "Cybersecurity", description: "Protect your digital assets with advanced security measures, including monitoring, encryption, and threat detection systems." },
  { icon: <FaLaptopCode size={30} />, title: "UI/UX Design", description: "Crafting visually appealing and user-friendly designs that enhance engagement and deliver a smooth experience for your audience." },
  { icon: <FaMobileAlt size={30} />, title: "App Optimization", description: "Improving the performance, speed, and reliability of your apps to provide the best experience for your users." },
  { icon: <FaServer size={30} />, title: "Database Management", description: "Efficient database solutions including design, implementation, and maintenance to ensure seamless data operations." },
  { icon: <FaChartLine size={30} />, title: "SEO Services", description: "Optimize your website to rank higher in search engines, increase visibility, and attract more organic traffic." },
  { icon: <FaCloud size={30} />, title: "Cloud Migration", description: "Seamless migration of your applications and data to the cloud with minimal downtime and maximum security." },
  { icon: <FaLock size={30} />, title: "Data Encryption", description: "Ensure sensitive information is securely encrypted and protected from unauthorized access." },
  { icon: <FaLaptopCode size={30} />, title: "E-commerce Solutions", description: "Custom e-commerce platforms built to boost sales, streamline operations, and enhance user experience." },
  { icon: <FaMobileAlt size={30} />, title: "Push Notifications", description: "Engage users effectively with timely and personalized push notifications to drive retention and conversions." },
  { icon: <FaServer size={30} />, title: "API Integration", description: "Seamlessly connect your applications with third-party services and APIs to enhance functionality and efficiency." },
];

export default function OurServices() {
  return (
    <section className="py-16 bg-gradient-to-r from-[#2b286c] to-[#150928]">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-center mb-4 text-white">
          Our Services
        </h2>
        <p className="text-center text-gray-300 mb-12 max-w-2xl mx-auto">
          Explore the wide range of services we offer to help you grow your business, improve efficiency, and achieve your digital goals.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-gradient-to-r from-[#2b586c]/50 to-[#450928]/20 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow flex flex-col items-center text-center border border-gray-700">
              <div className="text-purple-500 mb-4">{service.icon}</div>
              <h3 className="text-xl text-white font-semibold mb-4">{service.title}</h3>
              <p className="text-gray-400">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

