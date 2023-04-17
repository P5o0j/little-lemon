import React from 'react';
import NavMobile from './NavMobile';
import { NavLink } from 'react-router-dom';
import Navigation from './Navigation';
import Logo from "../components/assets/logo.png"
import "./styles/Heading.css";

const Navbar = () => {
  return (
    <div className="header">
      <div className="header-wrapper">
        <div className="image-wrapper">
          <NavLink to="/">{<img className="logo-img" src = { Logo } alt = "Little Lemon logo" />}</NavLink>
        </div>
        <Navigation />
        <NavMobile />
      </div>
    </div>
  );
}
export default Navbar