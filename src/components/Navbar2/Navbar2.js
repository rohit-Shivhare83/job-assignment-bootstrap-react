import React from "react";
import "./Navbar2.css";

const Navbar2 = () => {
  return (
    <div className="p-0 m-0 ">
      <nav className="navbar navbar-expand-lg bg-body-tertiary p-0">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
              <li className="nav-item">
                <a className="nav-link text-dark" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-dark" href="/">
                  Our Services
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-dark" href="/">
                  Latest Offer
                </a>
              </li>
            </ul>
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
        </div>
      </nav>
    </div>
  );
};

export default Navbar2;
