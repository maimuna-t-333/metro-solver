import { ShoppingCart, Star } from "lucide-react";
import { Link, NavLink } from "react-router";
import image from "../../public/Frame_1.gif";

const links = [
  { name: "Home", path: "/" },
  { name: "About us", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "White label", path: "/white-label" },
  { name: "Contact us", path: "/contact" },
];

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-20 py-4 bg-[#202a3b] text-white">
      {/* Left Logo */}
      <div className="flex items-center">
        <Link to="/">
          <img src={image} className="w-10 h-10 hover:scale-110 transition-transform duration-300" alt="logo" />
        </Link>
      </div>

      {/* Center Links */}
      <ul className="flex items-center gap-8 bg-white/5 backdrop-blur-lg px-8 py-3 rounded-full border border-white/10 shadow-lg">
        {links.map((link) => (
          <li key={link.name}>
            <NavLink to={link.path} className="relative group">
              {/* Gradient border wrapper */}
              <div
                className={`p-[1px] rounded-full transition-all duration-300 ${
                  location.pathname === link.path
                    ? "bg-gradient-to-r from-[#6a5acd] to-[#8a2be2] shadow-[0_0_10px_rgba(138,43,226,0.5)]"
                    : "bg-transparent group-hover:bg-gradient-to-r group-hover:from-[#6a5acd]/70 group-hover:to-[#8a2be2]/70"
                }`}
              >
                <div
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    location.pathname === link.path
                      ? "bg-[#1b2332] text-white"
                      : "bg-transparent text-gray-300 hover:text-white"
                  }`}
                >
                  {link.name}
                </div>
              </div>
            </NavLink>
          </li>
        ))}
      </ul>

      {/* Right Buttons */}
      <div className="flex items-center gap-4">
        <button className="p-3 bg-gradient-to-r from-[#312e81] to-[#4c1d95] rounded-full hover:scale-110 transition-transform duration-300 shadow-[0_0_10px_rgba(76,29,149,0.6)]">
          <ShoppingCart size={18} />
        </button>
        <button className="flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-[#6a5acd] to-[#8a2be2] hover:from-[#8a2be2] hover:to-[#6a5acd] transition-all duration-300 shadow-[0_0_15px_rgba(138,43,226,0.5)]">
          <Star size={16} />
          <Link to='/login'>
           <span>Sign In</span>
          </Link>
         
        </button>
      </div>
    </nav>
  );
}

