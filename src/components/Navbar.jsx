import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="flex items-center justify-between px-6 py-4">
      <div className="text-2xl font-semibold tracking-wider">Wusla</div>
      <Link to="/terms">
        <button className="px-4 py-2 transition transform bg-teal-600 hover:bg-teal-500 rounded-full text-sm font-medium">
          Terms & Conditions
        </button>
      </Link>
    </nav>
  );
}

export default Navbar;
