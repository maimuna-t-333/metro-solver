import { Send } from "lucide-react";
import { FaLinkedin, FaFacebook, FaInstagram, FaYoutube, FaTwitter } from "react-icons/fa";

export default function ContactSection() {
    return (
        <section className="bg-gradient-to-b from-[#1a0b2e] to-[#0f051d] text-white py-20 px-6 lg:px-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

                {/* LEFT SIDE */}
                <div className="bg-gradient-to-b from-[#2a1660] to-[#1a0b3c] rounded-2xl p-20 flex flex-col items-center lg:items-start shadow-lg">
                    <img
                        src="/Frame_1.gif"
                        alt="Metro Solver Logo"
                        className="w-20 h-20 mb-6"
                    />
                    <h2 className="text-3xl font-bold mb-4 text-center lg:text-left">
                        Still Have <br /> A Question?
                    </h2>

                    {/* Social Icons */}
                    <div className="flex gap-4 text-2xl mt-6 text-gray-300">
                        <a href="#" className="hover:text-indigo-400"><FaLinkedin /></a>
                        <a href="#" className="hover:text-indigo-400"><FaFacebook /></a>
                        <a href="#" className="hover:text-indigo-400"><FaInstagram /></a>
                        <a href="#" className="hover:text-indigo-400"><FaYoutube /></a>
                        <a href="#" className="hover:text-indigo-400"><FaTwitter /></a>
                    </div>
                </div>

                {/* RIGHT SIDE FORM */}
                <div className=" py-2 pt-2 shadow-lg">
                    <form className="grid grid-cols-1 md:grid-cols-2 gap-4">

                        {/* Name */}
                        <div className="flex flex-col">
                            <label htmlFor="name" className="mb-1 text-gray-300">Name</label>
                            <input
                                id="name"
                                type="text"
                                placeholder="Enter your name"
                                className="bg-transparent border border-gray-600 rounded-xl px-4 py-2 text-white focus:outline-none focus:border-indigo-500"
                            />
                        </div>

                        {/* Email */}
                        <div className="flex flex-col">
                            <label htmlFor="email" className="mb-1 text-gray-300">Email Address</label>
                            <input
                                id="email"
                                type="email"
                                placeholder="Enter your email"
                                className="bg-transparent border border-gray-600 rounded-xl px-4 py-2 text-white focus:outline-none focus:border-indigo-500"
                            />
                        </div>

                        {/* WhatsApp/Phone */}
                        <div className="flex flex-col">
                            <label htmlFor="phone" className="mb-1 text-gray-300">WhatsApp/Phone</label>
                            <input
                                id="phone"
                                type="text"
                                placeholder="Enter your phone number"
                                className="bg-transparent border border-gray-600 rounded-xl px-4 py-2 text-white focus:outline-none focus:border-indigo-500"
                            />
                        </div>

                        {/* Support Type */}
                        <div className="flex flex-col">
                            <label htmlFor="support" className="mb-1 text-gray-300">Support Type</label>
                            <select
                                id="support"
                                className="bg-transparent border border-gray-600 rounded-xl px-4 py-2 text-white focus:outline-none focus:border-indigo-500"
                            >
                                <option value="">Choose Services</option>
                                <option>Web Development</option>
                                <option>Digital Marketing</option>
                                <option>Video Editing</option>
                            </select>
                        </div>

                        {/* Message */}
                        <div className="flex flex-col md:col-span-2">
                            <label htmlFor="message" className="mb-1 text-gray-300">How Can We Help?</label>
                            <textarea
                                id="message"
                                placeholder="Message goes in here"
                                rows="4"
                                className="bg-transparent border border-gray-600 rounded-xl px-4 py-2 text-white focus:outline-none focus:border-indigo-500"
                            ></textarea>
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="col-span-2 w-full mt-6 bg-gradient-to-r from-indigo-500 to-purple-600 py-3 rounded-xl flex items-center justify-center gap-2 text-white font-semibold hover:opacity-90 transition"
                        >
                            <Send size={18} /> Send Message
                        </button>

                    </form>

                </div>

            </div>
        </section>
    );
}
