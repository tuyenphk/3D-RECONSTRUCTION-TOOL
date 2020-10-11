import React from 'react';
import { NavLink } from 'react-router-dom';

import './Navbar.css'

function Navbar () {

  return (
    <section className="navbar">
      <NavLink to="/" className="navbar-item" activeClassName="active">Home</NavLink>
      <NavLink to="/about" className="navbar-item" activeClassName="active">About</NavLink>
      <NavLink to="/modeling" className="navbar-item" activeClassName="active">Modeling</NavLink>
      <NavLink to="/resources" className="navbar-item" activeClassName="active">Resources</NavLink>
  </section>
  )

}

export default Navbar;