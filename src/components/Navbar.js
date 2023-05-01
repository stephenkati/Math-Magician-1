import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <div>
    <nav className="navigation">
      <h1>Math Magician</h1>
      <ul>
        <li>
          <Link to="/" className="link">Home</Link>
        </li>
        <li>
          <Link to="/calculator" className="link calc">Calculator</Link>
        </li>
        <li>
          <Link to="/quote" className="link">Quote</Link>
        </li>
      </ul>
    </nav>
  </div>
);

export default Navbar;
