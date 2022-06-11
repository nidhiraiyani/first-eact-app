import React from "react";

function Footer() {
  return (
    <>
      <div className="container-fluid bg-dark">
        <div className="container text-light">
          <div className="row p-3">
            <div className="col-lg-3">
              <h4  className="border-bottom border-secondary pb-3">
                Tokyo<span className="text-warning">.</span>
              </h4>
              <p>
                A108 XYZ Street
                <br />
                MN 535022, TOKYO
              </p>
              <p>
                <span>Phone: </span>+1 5339 56338 77
                <br />
                <span>Email: </span>info@example.com
              </p>
            </div>
            <div className="col-lg-3">
              <h5 className="border-bottom border-secondary pb-3">Useful Links</h5>
              <ul className="list-unstyled">
                <li>
                  <i class="fa-solid fa-angle-right text-warning me-2"></i>Home
                </li>
                <li>
                  <i class="fa-solid fa-angle-right text-warning me-2"></i>About
                </li>
                <li>
                  <i class="fa-solid fa-angle-right text-warning me-2"></i>
                  Gallery
                </li>
                <li>
                  <i class="fa-solid fa-angle-right text-warning me-2"></i>
                  Contact
                </li>
              </ul>
            </div>
            <div className="col-lg-3">
              <h5 className="border-bottom border-secondary pb-3">Our Services</h5>
              <ul className="list-unstyled">
                <li>
                  <i class="fa-solid fa-angle-right text-warning me-2"></i>Web
                  Design
                </li>
                <li>
                  <i class="fa-solid fa-angle-right text-warning me-2"></i>Web
                  Development
                </li>
                <li>
                  <i class="fa-solid fa-angle-right text-warning me-2"></i>
                  Product Management
                </li>
                <li>
                  <i class="fa-solid fa-angle-right text-warning me-2"></i>
                  Marketing
                </li>
                <li>
                  <i class="fa-solid fa-angle-right text-warning me-2"></i>
                  Graphic Design
                </li>
              </ul>
            </div>
            <div className="col-lg-3">
              <h5 className="border-bottom border-secondary pb-3">Our Newsletter</h5>
              <p>Tamen quem nulla quae legam multos aute sint culpa legam noster magna</p>               
            </div>
          </div>
        </div>
      </div>
      <div className="text-center m-0 p-2 bg-warning container-fluid">
        <p className="m-0">Copyright &copy; Designed by Nidhi Raiyani 2022</p>
      </div>
    </>
  );
}

export default Footer;
