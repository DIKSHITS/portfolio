import { useState } from "react";

import "./Navbar.css";

function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);

  return (

    <nav className="navbar">

      {/* Logo */}

      <h2 className="logo">
        Dikshit<span> Raj</span>
      </h2>


      {/* Navigation Links */}

      <ul className={menuOpen ? "nav-links active" : "nav-links"}>

        <li>
          <a href="#home" onClick={()=>setMenuOpen(false)}>
            Home
          </a>
        </li>

        <li>
          <a href="#about" onClick={()=>setMenuOpen(false)}>
            About
          </a>
        </li>

        <li>
          <a href="#skills" onClick={()=>setMenuOpen(false)}>
            Skills
          </a>
        </li>

        <li>
          <a href="#projects" onClick={()=>setMenuOpen(false)}>
            Projects
          </a>
        </li>

        <li>
          <a href="#contact" onClick={()=>setMenuOpen(false)}>
            Contact
          </a>
        </li>

      </ul>


      {/* Mobile Menu Button */}

      <div
        className="menu-btn"
        onClick={()=>setMenuOpen(!menuOpen)}
      >
        ☰
      </div>

    </nav>

  );
}

export default Navbar;