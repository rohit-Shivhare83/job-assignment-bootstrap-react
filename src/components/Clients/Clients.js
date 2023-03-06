import React from "react";
import "./Clients.css";
import logogreenpro from "../img/logogreenpro.png";
import logotechfab from "../img/logotechfab.png";
import logokhosla from "../img/logokhosla.png";
import logoarvind from "../img/logoarvind.png";
import logopolyspin from "../img/logopolyspin.png";

const Clients = () => {
  return (
    <div className="container-fluid bg-white">
      <div className="container my-4 ">
        <h1 className="text-center teko">Our Textile Clients</h1>
      </div>
      <div className="clients-logo d-flex pb-3 justify-content-center align-items-center flex-wrap">
        <img
          src={logogreenpro}
          className="flex-shrink-1 img-fluid object-fit-cover"
          alt="logogreenpro"
        />
        <img
          src={logotechfab}
          className="flex-shrink-1 img-fluid object-fit-cover"
          alt="logotechfab"
        />
        <img
          src={logokhosla}
          className="flex-shrink-1 img-fluid object-fit-cover"
          alt="logokhosla"
        />
        <img
          src={logoarvind}
          className="flex-shrink-1 img-fluid object-fit-cover"
          alt="logoarvind"
        />
        <img
          src={logopolyspin}
          className="flex-shrink-1 img-fluid object-fit-cover"
          alt="logopolyspin"
        />
      </div>
    </div>
  );
};

export default Clients;
