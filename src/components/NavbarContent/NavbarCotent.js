import React from "react";
import "./NavbarContent.css";

import handshake from "../img/hands.jpg";

const NavbarCotent = () => {
  return (
    <div className="conatainer-fluid">
      <div className="card text-light ">
        <img
          src={handshake}
          className=" handshake img-fluid w-100 object-fit-contain"
          alt="handshake"
        />
        <div className="card-img-overlay container-fluid d-flex text-light justify-content-center flex-column px-md-5 px-lg-5 align-items-left linear-img w-100">
          <h1 className="card-title px-lg-5 px-md-4 px-sm-1 fw-bold ">
            60,000+
          </h1>
          <h1 className="card-title fs-1 px-lg-5 px-md-4 px-sm-1 fw-bold">
            Clients in INDIA
          </h1>
        </div>
      </div>
    </div>
  );
};

export default NavbarCotent;
