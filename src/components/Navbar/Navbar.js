import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="d-flex justify-content-between align-items-center navbar-expand-lg">
      <nav className="navbar  navbar-expand-lg py-0 ">
        <ul className="navbar-nav d-flex flex-row mb-2 mb-lg-0 ">
          <li className="nav-item px-2 ">
            <a className="nav-link text-dark" href="/">
              Home
            </a>
          </li>
          <li className="nav-item px-2">
            <a className="nav-link text-dark" href="/">
              Our Services
            </a>
          </li>
          <li className="nav-item px-2">
            <a className="nav-link text-dark" href="/">
              Latest Offer
            </a>
          </li>
        </ul>
      </nav>
      <nav className="navbar  navbar-expand-lg py-0 contact ">
        <ul className="navbar-nav d-flex flex-row ">
          <li className="nav-item px-2 ">
            <a className="nav-link text-light" href="/">
              Contact Us &rArr;
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
