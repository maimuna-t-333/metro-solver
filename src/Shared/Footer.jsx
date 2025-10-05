import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-[#2b286c] to-[#150928] text-white py-6 border-t-1 border-white">
      <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-4">
        
        {/* Left text */}
        <div>
          <p>© 2025 Metro Solver. All rights reserved 2024</p>
        </div>
        
        {/* Right text */}
        <div>
          <p>Metro Solver Ltd incorporated in England & Wales Registration No:15792819</p>
        </div>

      </div>
    </footer>
  );
}
