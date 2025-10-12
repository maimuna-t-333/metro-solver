import { FaFacebook, FaGoogle, FaMicrosoft, FaAws, FaAmazon, FaTiktok } from "react-icons/fa";

export default function NewsLetter() {
  return (
    <footer className="bg-gradient-to-b from-[#0f021f] to-[#1c0532] text-gray-200 py-12 px-6 md:px-20 font-sans">
      {/* Newsletter Section */}
      <div className="max-w-6xl mx-auto mb-12 text-center bg-gradient-to-r from-[#1a0640] to-[#24094a] p-8 rounded-3xl shadow-2xl">
        <h2 className="text-2xl md:text-3xl font-semibold mb-2">
          Subscribe to Our Newsletter
        </h2>
        <p className="text-gray-400 mb-6">
          Join the <span className="text-purple-400 font-semibold">25000+</span> client, in our company
        </p>
        <div className="flex justify-center items-center max-w-md mx-auto bg-white rounded-full overflow-hidden shadow-lg">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full px-4 py-3 text-gray-700 focus:outline-none"
          />
          <button className="bg-gradient-to-r from-purple-600 to-indigo-500 text-white px-6 py-3 font-semibold rounded-full">
            Subscribe
          </button>
        </div>
      </div>

      {/* Contact Section */}
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
            <label className="block text-sm mb-2 text-gray-300">Country Currency</label>
            <select className="bg-[#1a0936] text-gray-200 px-4 py-2 rounded-lg border border-gray-700">
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
            <li>Home</li>
            <li>About us</li>
            <li>Our Team</li>
            <li>User Profile</li>
            <li>White Labelling</li>
          </ul>
        </div>

        {/* About Us */}
        <div>
          <h4 className="text-lg font-semibold mb-4">About Us</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>Our Stories</li>
            <li>Career</li>
            <li>Send Message</li>
            <li>Blog</li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Support</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>Help Center</li>
            <li>Contact Us</li>
            <li>Privacy Policy</li>
            <li>Terms and Conditions</li>
            <li>Start Earning</li>
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
          <FaFacebook className="hover:text-blue-500 transition" title="Meta" />
          <FaGoogle className="hover:text-red-500 transition" title="Google" />
          <FaMicrosoft className="hover:text-blue-400 transition" title="Microsoft" />
          <FaAws className="hover:text-yellow-500 transition" title="AWS" />
          <FaAmazon className="hover:text-orange-500 transition" title="Amazon" />
          <FaTiktok className="hover:text-pink-500 transition" title="TikTok" />
        </div>
      </div>

      <p className="text-center text-gray-500 text-xs mt-8">
        © {new Date().getFullYear()} Metro Solver Limited. All Rights Reserved.
      </p>
    </footer>
  );
}
