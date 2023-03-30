import React from 'react';
import { NavLink} from 'react-router-dom';

export default function Home() {
  return (
    <div>
    <h1>Home Page</h1>
   
    <NavLink to="/about"><button>About</button></NavLink>
    <NavLink to="/contact"><button>Contact</button></NavLink>
    <NavLink to="/register"><button>Register</button></NavLink>
    </div>
  )}