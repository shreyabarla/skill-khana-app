import React from 'react';
import { Link } from 'react-router-dom';
import whiteBgColor from '../assets/whiteBgColor.svg';
function Navbar() {
  return (
    <header className="navbar">
    <img src={whiteBgColor} alt="SkillBarter" className="navbar-logo" />
      <nav className="navbar-links">
        <Link to="/">Dashboard</Link>
        <Link to="/marketplace">Marketplace</Link>
        <Link to="/wallet">Wallet</Link>
        <Link to="/profile">Profile</Link>
      </nav>
    </header>
  );
}

export default Navbar;

