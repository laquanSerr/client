
import React from 'react';
import { Link } from 'react-router-dom';




function Header() {
  return (
   <header className="bg-slate-200">
        <div className="navbar flex justify-between items-center max-w-6xl mx-auto p-3">
          <h1 className="font-bold text-xl">Auth App</h1>
          <ul className="nav-links flex gap-6 list-none p-0 m-0">
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/signin">Sign In</Link></li>
          </ul>
        </div>
   </header>
  );
}

export default Header;
