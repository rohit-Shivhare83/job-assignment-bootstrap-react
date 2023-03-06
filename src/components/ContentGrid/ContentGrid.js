import React from "react";
import "./ContentGrid.css";
import dornier from "../img/dornier.jpg";

const ContentGrid = () => {
  return (
    <div className="container-fluid content-grid py-1 pb-5">
      <h1 className="text-center teko py-3">Dornier Rapier & Airjet Looms</h1>
      <section className="row justify-content-center g-3">
        <div className="col-lg-5 col-md-5 col-sm-12 col-xs-5  p-3 bg-white">
          <div className="img-fluid text-center w-100 ">
            <img
              className="img-fluid dornier object-fit-cover w-100 "
              src={dornier}
              alt="dornier"
            />
          </div>
          <div className="d-md-flex d-lg-flex d-sm-flex justify-content-center p-lg-3 p-md-3   align-items-start">
            <div className=" w-100 content-list fs-5 px-lg-1 px-md-1">
              <div className="col">Filter Fabrics</div>
              <div className="col">Engeneering Fabrics</div>
              <div className="col">Aerospaoce</div>
              <div className="col">Reinforce Glass Fabrics</div>
              <div className="col">Automotive Tirechord</div>
            </div>
            <div className=" w-100 content-list fs-5 px-lg-1 px-md-1">
              <div className="col">Carbon </div>
              <div className="col">Kevlar </div>
              <div className="col">Aramaid </div>
              <div className="col">Pu & Other Material </div>
              <div className="col">Coating Fabric </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-3 col-sm-10 col-xs-3  bg-white   ">
          <div className="short-div py-1 w-100">
            <img
              className="sulzer mx-auto img-fluid w-100"
              src="https://www.kindpng.com/picc/m/601-6019799_cloth-making-weaving-machine-air-jet-loom-price.png"
              alt="sulzer"
            />
          </div>
          <div className="short-div  py-1  w-100">
            <img
              className="sulzer mx-auto img-fluid w-100"
              src="https://www.sinotextilemachinery.com/uploads/image/20170525/09/hh810-air-jet-loom_1495676320.jpg"
              alt="sulzer"
            />
          </div>
          <div className="short-div py-1 w-100">
            <img
              className="sulzer mx-auto img-fluid w-100"
              src="https://5.imimg.com/data5/LI/LS/MY-4194006/air-jet-loom-500x500.jpg"
              alt="sulzer"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContentGrid;
