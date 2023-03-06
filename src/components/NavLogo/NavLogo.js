import React from "react";
import "./NavLogo.css";

import logo from "../img/logo.png";
import trophy from "../icons/trophy.png";
import certified from "../icons/certified.png";

const NavLogo = () => {
  return (
    <div className="container navlogo d-flex py-1 justify-content-between align-items-center">
      <div className="navlogo-left  ">
        <img
          className="img-fluid logo-img py-2 object-fit-cover"
          src={logo}
          alt="logo"
        />
      </div>
      <div className="navlogo-right d-none d-md-block  px-0 trophy-text-1">
        <div className="d-flex justify-content-end align-items-center">
          <div className="trophy d-flex justify-content-center align-items-center px-1">
            <div className="trophy-logo  ">
              <img
                className="img-fluid logo-img-1 p-2 object-fit-cover"
                src={trophy}
                alt="logo"
              />
            </div>
            <div className="trophy-text-content text-end">
              <div className="trophy-text-1 fs-5 fw-bold">
                The Best Industrial
              </div>
              <div className="trophy-text-2"> Solution Provider</div>
            </div>
          </div>
          <div className="certified d-flex justify-content-center align-items-center px-1">
            <div className="certified-logo">
              <img
                className="img-fluid logo-img-1 p-2 object-fit-cover"
                src={certified}
                alt="logo"
              />
            </div>
            <div className="certified-text-content text-end">
              <div className="certified-text-1 fs-5 fw-bold ">
                Certified Company
              </div>
              <div className="certified-text-2">ISO 2001-2022</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavLogo;
