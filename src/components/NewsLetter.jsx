import { FaFacebook, FaGoogle, FaMicrosoft, FaAws, FaAmazon, FaTiktok } from "react-icons/fa";

export default function NewsLetter() {
  return (
    <section className="bg-gradient-to-b from-[#0f021f] to-[#1c0532] text-gray-200 py-12 px-6 lg:px-20 font-sans">

      {/* Newsletter Section */}
      <div className="max-w-6xl  mx-auto mb-12 text-center bg-gradient-to-r from-[#1a0640] to-[#24094a] p-8 rounded-3xl shadow-2xl">
        <h2 className="text-2xl md:text-3xl font-semibold mb-2">
          Subscribe to Our Newsletter
        </h2>
        <p className="text-gray-400 mb-6">
          Join the <span className="text-purple-400 font-semibold">25,000+</span> clients in our company
        </p>

        {/* Input + Button */}
        <form className="flex flex-col sm:flex-row justify-center items-center max-w-md mx-auto bg-white rounded-full overflow-hidden shadow-lg">
          <input
            type="email"
            placeholder="Enter your email"
            aria-label="Email"
            className="w-full px-4 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <button
            type="submit"
            className="bg-gradient-to-r from-purple-600 to-indigo-500 text-white px-6 py-3 font-semibold rounded-full mt-2 sm:mt-0 sm:ml-2 hover:opacity-90 transition"
          >
            Subscribe
          </button>
        </form>
      </div>

      {/* Footer Links */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-5 gap-8 border-t border-gray-700 pt-10">
        
        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Got Questions?<br />Call us!</h3>
          <p className="text-sm text-gray-400 mb-2">
            Head office: Metro Solver Limited<br />
            Grantham Road, London E12 5LX, United Kingdom
          </p>
          <p className="text-sm text-gray-400 mb-1">📞 +44 7936 455446</p>
          <p className="text-sm text-gray-400 mb-4">✉️ official@metrosolver.com</p>

          <div>
            <label htmlFor="currency" className="block text-sm mb-2 text-gray-300">Country Currency</label>
            <select
              id="currency"
              className="bg-[#1a0936] text-gray-200 px-4 py-2 rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <option>GBP - British Pound</option>
              <option>USD - US Dollar</option>
              <option>EUR - Euro</option>
            </select>
          </div>
        </div>

        {/* Company */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Company</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><a href="/" className="hover:text-white transition">Home</a></li>
            <li><a href="/about" className="hover:text-white transition">About us</a></li>
            <li><a href="/team" className="hover:text-white transition">Our Team</a></li>
            <li><a href="/profile" className="hover:text-white transition">User Profile</a></li>
            <li><a href="/white-label" className="hover:text-white transition">White Labelling</a></li>
          </ul>
        </div>

        {/* About Us */}
        <div>
          <h4 className="text-lg font-semibold mb-4">About Us</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><a href="/stories" className="hover:text-white transition">Our Stories</a></li>
            <li><a href="/career" className="hover:text-white transition">Career</a></li>
            <li><a href="/contact" className="hover:text-white transition">Send Message</a></li>
            <li><a href="/blog" className="hover:text-white transition">Blog</a></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Support</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><a href="/help" className="hover:text-white transition">Help Center</a></li>
            <li><a href="/contact" className="hover:text-white transition">Contact Us</a></li>
            <li><a href="/privacy" className="hover:text-white transition">Privacy Policy</a></li>
            <li><a href="/terms" className="hover:text-white transition">Terms and Conditions</a></li>
            <li><a href="/earn" className="hover:text-white transition">Start Earning</a></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Services</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>Digital Marketing</li>
            <li>Creative Writing Solution</li>
            <li>Web & Software Development</li>
            <li>E-Commerce Solution</li>
            <li>Graphic Design</li>
            <li>Multimedia & Video Editing</li>
            <li>Merchandise</li>
            <li>Premium Website</li>
            <li>Premium Domains</li>
            <li>Special Combo</li>
          </ul>
        </div>
      </div>

      {/* Partners */}
      <div className="max-w-6xl mx-auto mt-12 border-t border-gray-700 pt-8">
        <h4 className="text-center text-gray-300 mb-6 text-sm uppercase tracking-wide">
          Our Future Partners
        </h4>
        <div className="flex justify-center flex-wrap gap-8 text-4xl text-gray-400">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Meta">
            <FaFacebook className="hover:text-blue-500 transition" />
          </a>
          <a href="https://google.com" target="_blank" rel="noopener noreferrer" aria-label="Google">
            <FaGoogle className="hover:text-red-500 transition" />
          </a>
          <a href="https://microsoft.com" target="_blank" rel="noopener noreferrer" aria-label="Microsoft">
            <FaMicrosoft className="hover:text-blue-400 transition" />
          </a>
          <a href="https://aws.amazon.com" target="_blank" rel="noopener noreferrer" aria-label="AWS">
            <FaAws className="hover:text-yellow-500 transition" />
          </a>
          <a href="https://amazon.com" target="_blank" rel="noopener noreferrer" aria-label="Amazon">
            <FaAmazon className="hover:text-orange-500 transition" />
          </a>
          <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
            <FaTiktok className="hover:text-pink-500 transition" />
          </a>
        </div>
      </div>

    </section>
  );
}
