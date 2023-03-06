import React from "react";
import "./Content.css";
import check from "../icons/check.svg";

const Content = () => {
  return (
    <div className="container-fluid px-0 py-3 check-logo">
      {/* 1st container */}
      <div className="container-fluid  first-grid py-4 ">
        <h1 className="text-center text-capitalize teko">
          sulzer projectile looms for polypropyelen
        </h1>
        <h2 className="text-center  fs-2 text-capitalize">
          Needle Puching non-wovens
        </h2>
        <div className="content-list d-flex justify-content-center align-items-center flex-wrap-reverse py-3">
          <div className="d-flex flex-column  mb-3 fs-3 px-3">
            <div>
              <span className="mx-3">
                <img src={check} alt="check" />
              </span>
              Filter Fabrics
            </div>
            <div>
              <span className="mx-3">
                <img src={check} alt="check" />
              </span>
              Carpet Felts
            </div>
            <div>
              <span className="mx-3">
                <img src={check} alt="check" />
              </span>
              Geotextiles
            </div>
            <div>
              <span className="mx-3">
                <img src={check} alt="check" />
              </span>
              Insulation Roofing
            </div>
            <div>
              <span className="mx-3   align-items-center">
                <img src={check} alt="check" />
              </span>
              Automotive
            </div>
          </div>
          <div className="right px-3">
            <img
              className="img-fluid mx-auto object-fit-cover pb-2 w-100"
              src="https://images.unsplash.com/photo-1522753071498-f3137a65aee3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=40"
              alt="looms"
            />
          </div>
        </div>
      </div>

      {/* 2nd container */}

      <div className="container  py-4">
        <h1 className="text-center teko text-capitalize">
          sulzer projectile looms for polypropyelen
        </h1>
        <div className="content-list mx-auto py-3 d-flex flex-row-reverse justify-content-center align-items-center  flex-wrap-reverse">
          <div className="d-flex flex-column  mb-3 fs-3 px-3">
            <div>
              <span className="mx-3">
                <img src={check} alt="check" />
              </span>
              Pet Fabrics For-Fibc
            </div>
            <div>
              <span className="mx-3">
                <img src={check} alt="check" />
              </span>
              Pactech Jumbo Bags
            </div>
            <div>
              <span className="mx-3">
                <img src={check} alt="check" />
              </span>
              Container Liners
            </div>
            <div>
              <span className="mx-3">
                <img src={check} alt="check" />
              </span>
              Tarapulin
            </div>
            <div>
              <span className="mx-3   align-items-center">
                <img src={check} alt="check" />
              </span>
              Indutech
            </div>
          </div>
          <div className="right px-3">
            <img
              className="img-fluid mx-auto object-fit-cover w-100 pb-2"
              src="https://images.unsplash.com/photo-1513828583688-c52646db42da?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=40"
              alt="looms"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
