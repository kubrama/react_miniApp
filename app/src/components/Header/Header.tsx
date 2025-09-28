import { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import "../Header/Header.css";


const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);


  return (
    <header>
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>

      <div className={`navbar ${isOpen ? "open" : ""}`}>
        <nav>
          <NavLink to="/" end onClick={() => setIsOpen(false)}>Home</NavLink>
          <NavLink to="/shop" onClick={() => setIsOpen(false)}>Shop</NavLink>
          <NavLink to="/about" onClick={() => setIsOpen(false)}>About</NavLink>
          <NavLink to="/contact" onClick={() => setIsOpen(false)}>Contact</NavLink>
          <NavLink to="/blog" onClick={() => setIsOpen(false)}>Blog</NavLink>
        </nav>
      </div>

      <div className="account">
        <NavLink to="/account">My Account</NavLink>
      </div>

      <div className={`burger ${isOpen ? "toggle" : ""}`} onClick={() => setIsOpen(!isOpen)}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </header>
  );
};

export default Header;
