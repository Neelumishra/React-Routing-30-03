import React from 'react';
import { NavLink} from 'react-router-dom';


export default function NavBar() {
  return (
    <nav >
      <ul type="none" style={{display:"flex" ,justifyContent:"space-evenly" ,backgroundColor:"pink",padding:"10px"}}>
        <NavLink to="/">
          <li>Home</li>
        </NavLink>
        <NavLink  to="/about">
          <li>About</li>
        </NavLink>
        <NavLink  to="/contact">
          <li>Contact</li>
        </NavLink>
        <NavLink  to="/Register">
          <li>Register</li>
        </NavLink>
      </ul>
    </nav>
  );
}
