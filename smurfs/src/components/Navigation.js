import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li><NavLink to="/">Smurf Listing</NavLink></li>
        <li><NavLink to="/addSmurf">Add a Smurf</NavLink></li>
      </ul>
    </nav>
  )
}

export default Navigation;