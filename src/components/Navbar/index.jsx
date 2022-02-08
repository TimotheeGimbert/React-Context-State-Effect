import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="Navbar">
    <Link to="/">Home</Link> <br/>
    <Link to="/works">Works</Link> <br/>
  </nav>
);

export default Navbar;