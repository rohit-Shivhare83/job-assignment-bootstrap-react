import React from "react";
const Footer = () => {
  return (
    <div className="container-fluid w-100 py-5 m-0 bg-dark footer">
      <div className="container text-light  ">
        <div className="row ">
          <div className=" col-sm-12 col-md-12 col-lg-4 ">
            <div className="container-fluid ">
              <img
                className="logo pb-5"
                src="https://saturnbluelinks.com/images/saturn-blue-links-logo-dark.png"
                alt="logo"
              />
              <div className="row">
                <div className="col-12 lh-base">
                  <span> Saturn Blue Links </span>Are Leading Indian
                  Agents-Brokers For Relocation Of Imported Used-Second-Hand
                  Textile Plants, Machinery & Technology From Different
                  Countries Worldwide.
                </div>
                <div className="col-12 py-3">
                  <ul className="list-unstyled text-dark d-flex">
                    <li className=" px-2">
                      <a className="text-decoration-none " href="/">
                        <i className="fa-brands fa-facebook col-r fs-2"></i>
                      </a>
                    </li>
                    <li className=" px-2">
                      <a className="text-decoration-none" href="/docs/5.3/">
                        <i className="fa-brands fa-twitter col-r fs-2"></i>
                      </a>
                    </li>
                    <li className=" px-2">
                      <a
                        className="text-decoration-none"
                        href="/docs/5.3/examples/"
                      >
                        <i className="fa-brands fa-youtube col-r fs-2"></i>
                      </a>
                    </li>
                    <li className=" px-2">
                      <a
                        className="text-decoration-none"
                        href="/docs/5.3/examples/"
                      >
                        <i className="fa-brands fa-instagram fs-2 col-r"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-4  ">
            <div className="container-fluid ">
              <h2 className=" pb-md-5 pb-lg-5 pb-sm-2 col-r">Useful Links</h2>
              <div className="row pb-3 lh-lg">
                <div className="col-12">Home</div>
                <div className="col-12">Products</div>
                <div className="col-12">Latest Offer</div>
                <div className="col-12">Contact us</div>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-4  ">
            <div className="container-fluid">
              <h2 className="pb-md-5 pb-lg-5 pb-sm-3 col-r  ">Contact</h2>
              <div className="row lh-lg">
                <div className="col-12 lh-base">
                  <span className="px-2">
                    <i className="fa-sharp fa-solid fa-location-dot col-r "></i>
                  </span>
                  <span className="lh-sm">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Vero, tempore!
                  </span>
                </div>
                <div className="col-12">
                  <span className="px-2">
                    <i className="fa-solid fa-envelope col-r "></i>
                  </span>
                  <span>abcxyz@gmail.com</span>
                </div>
                <div className="col-12">
                  <span className="px-2">
                    <i className="fa-solid fa-envelope col-r "></i>
                  </span>
                  <span>abcxyz@gmail.com</span>
                </div>
                <div className="col-12">
                  <span className="px-2">
                    <i className="fa-sharp fa-solid fa-phone col-r"></i>
                  </span>
                  <span>+(91) random no.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
